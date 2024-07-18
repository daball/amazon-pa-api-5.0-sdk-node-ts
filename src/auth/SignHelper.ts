/**
 * Adapted to TypeScript by David A. Ball. (c) 2024.
 * 
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/**
 * ProductAdvertisingAPI
 * https://webservices.amazon.com/paapi5/documentation/index.html
 *
 * This file is for signing PAAPI request with AWS V4 Signing. For more details, see
 * https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html
 *
 * Do not edit the class manually.
 *
 */

// sources of inspiration:
// http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html

import crypto from 'crypto-js';

const AWS4_HMAC_SHA256 = 'AWS4-HMAC-SHA256';

const toTime = (time: number | string | Date) => new Date(time).toISOString().replace(/[:\-]|\.\d{3}/g, '');
const toDate = (time: number | string | Date) => toTime(time).substring(0, 8);
const hmac = (key: crypto.lib.WordArray | string, data: crypto.lib.WordArray | string) => crypto.HmacSHA256(data, key);
const hexEncodedHash = (data: crypto.lib.WordArray | string) => crypto.SHA256(data).toString(crypto.enc.Hex);

export const createAuthorizationHeaders = (timestamp: number | string | Date, accessKey: string, region: string, service: string, signedHeaders: string, signature: string) =>
  `${AWS4_HMAC_SHA256} Credential=${accessKey}/${exports.createCredentialScope(timestamp, region, service)}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

export const createCanonicalRequest = (method: string, pathname: string, query: Record<string, string | number | boolean>, headers: Record<string, any>, payload: any) => {
  var payloadJson = JSON.stringify(payload);
  return [
    method.toUpperCase(),
    pathname,
    exports.createCanonicalQueryString(query),
    exports.createCanonicalHeaders(headers),
    exports.createSignedHeaders(headers),
    hexEncodedHash(String(payloadJson))
  ].join('\n');
};

export const createCanonicalQueryString = (params: Record<string, string | number | boolean>) => {
  return Object.keys(params)
    .sort()
    .map(function(key) {
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
};

export const createCanonicalHeaders = (headers: Record<string, any>) =>
  Object.keys(headers)
    .sort()
    .map(function(name: string) {
      return `${name.toLowerCase().trim()}:${headers[name].toString().trim()}\n`;
    })
    .join('');

export const createSignedHeaders = (headers: Record<string, any>) =>
  Object.keys(headers)
    .sort()
    .map(function(name: string) {
      return name.toLowerCase().trim();
    })
    .join(';');

export const createCredentialScope = (time: number | string | Date, region: string, service: string) =>
  [toDate(time), region, service, 'aws4_request'].join('/');

export const createStringToSign = (time: number | string | Date, region: string, service: string, request: string) =>
  [
    AWS4_HMAC_SHA256,
    toTime(time),
    exports.createCredentialScope(time, region, service),
    hexEncodedHash(request)
  ].join('\n');

export const createSignature = (secret: string, time: number | string | Date, region: string, service: string, stringToSign: string) => {
  const AWS4 = 'AWS4';
  const AWS4_REQUEST = 'aws4_request';
  var h1 = hmac(`${AWS4}${secret}`, toDate(time)); // date-key
  var h2 = hmac(h1, region); // region-key
  var h3 = hmac(h2, service); // service-key
  var h4 = hmac(h3, AWS4_REQUEST); // signing-key
  return hmac(h4, stringToSign).toString(crypto.enc.Hex);
};

export const toAmzDate = (time: number | string | Date) => new Date(time).toISOString().replace(/[:\-]|\.\d{3}/g, '');

export const createAuthorizationHeader = (accessKey: string, secretKey: string, requestHeaders: Record<string, any>, httpMethod: string, path: string, payload: Record<string, any>, region: string, service: string, timestamp: number | string | Date) => {
  /* Step 1: Create Signed Headers */
  const signedHeaders = createSignedHeaders(requestHeaders);
  /* Step 2: Create Canonical Request */
  const canonicalRequest = createCanonicalRequest(httpMethod, path, {}, requestHeaders, payload);
  /* Step 3: Create String To Sign */
  const stringToSign = createStringToSign(timestamp, region, service, canonicalRequest);
  /* Step 4: Create Signature Headers */
  const signature = createSignature(secretKey, timestamp, region, service, stringToSign);
  /* Step 5: Create Authorization Header */
  const authorizationHeader = createAuthorizationHeaders(
    timestamp,
    accessKey,
    region,
    service,
    signedHeaders,
    signature
  );
  return authorizationHeader;
}
