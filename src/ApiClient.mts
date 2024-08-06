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
 */

 import * as awsv4 from './auth/SignHelper.mjs';
 import superagent from 'superagent';
 import querystring from 'querystring';
 
 export interface Stringifiable {
   toString(): string;
 }
 
 const PRODUCT_ADVERTISING_API = 'ProductAdvertisingAPI';
 
 /**
  * @module ApiClient
  * @version 1.0.0
  */
 
 /**
  * Enumeration of collection format separator strategies.
  * @enum {String}
  * @readonly
  */
 export enum CollectionFormatEnum {
   /**
    * Comma-separated values. Value: <code>csv</code>
    * @const
    */
   CSV = ',',
   /**
    * Space-separated values. Value: <code>ssv</code>
    * @const
    */
   SSV = ' ',
   /**
    * Tab-separated values. Value: <code>tsv</code>
    * @const
    */
   TSV = '\t',
   /**
    * Pipe(|)-separated values. Value: <code>pipes</code>
    * @const
    */
   PIPES = '|',
   /**
    * Native array. Value: <code>multi</code>
    * @const
    */
   MULTI = 'multi',
 };

 export interface ApiResponse<T> {
  data: T;
  response: any;
 }
 
 /**
  * Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
  * application to use this class directly - the *Api and model classes provide the public API for the service. The
  * contents of this file should be regarded as internal but are documented for completeness.
  * @alias module:ApiClient
  * @class
  */
 export class ApiClient {
   /**
    * The default API client implementation.
    * @type {module:ApiClient}
    */
   public static instance = new ApiClient();
   /**
    * The base URL against which to resolve every API call's (relative) path.
    * @type {String}
    * @default https://webservices.amazon.com
    */
   public basePath: string = 'https://webservices.amazon.com'.replace(/\/+$/, '');
   /**
    * The Access Key ID which uniquely identifies you.
    * @type {String}
    */
   public accessKey: string|null = null;
   /**
    * A key that is used in conjunction with the Access Key ID to cryptographically
    * sign an API request.
    * @type string
    */
   public secretKey: string|null = null;
   /**
    * The host that receives the Amazon Product Advertising API GenNext request.
    * @type string
    * @default 'webservices.amazon.com'
    */
   public host: string = 'webservices.amazon.com';
   /**
    * The service's region where the request is targeted.
    * @type string
    * @default 'us-east-1'
    */
   public region: string = 'us-east-1';
   /**
    * The authentication methods to be included for all API calls.
    * @type {Array.<String>}
    */
   public authentications = {
   };
   /**
    * The default HTTP headers to be included for all API calls.
    * @type {Array.<String>}
    * @default {}
    */
   public defaultHeaders = {};
   /**
    * The default HTTP timeout for all API calls.
    * @type {Number}
    * @default 60000
    */
   public timeout = 60000;
   /**
    * If set to false an additional timestamp parameter is added to all API GET calls to
    * prevent browser caching
    * @type {Boolean}
    * @default true
    */
   public cache = true;
   /**
    * If set to true, the client will save the cookies from each server
    * response, and return them in the next request.
    * @default false
    */
   public enableCookies = false;
   /*
     * Allow user to override superagent agent
     */
   public requestAgent = {
     'User-Agent': 'dashersupply-fork-paapi5-nodejs-sdk/1.0.0'
   };
   public agent = new superagent.agent();
 
   /**
    * Returns a string representation for an actual parameter.
    * @param param The actual parameter.
    * @returns {String} The string representation of <code>param</code>.
    */
   public paramToString(param: string|Stringifiable|Date|undefined|null) {
     if (param == undefined || param == null) {
       return '';
     }
     if (param instanceof Date) {
       return param.toJSON();
     }
     return param.toString();
   };
 
   /**
    * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
    * NOTE: query parameters are not handled here.
    * @param {String} path The path to append to the base URL.
    * @param {Object} pathParams The parameter values to append.
    * @returns {String} The encoded path with parameter values substituted.
    */
   public buildUrl(path: string, pathParams: Record<string, any>) {
     if (!path.match(/^\//)) {
       path = '/' + path;
     }
     var url = "https://" + this.host + path;
     var _this = this;
     url = url.replace(/\{([\w-]+)\}/g, function(fullMatch, key) {
       var value;
       if (pathParams.hasOwnProperty(key)) {
         value = _this.paramToString(pathParams[key]);
       } else {
         value = fullMatch;
       }
       return encodeURIComponent(value);
     });
     return url;
   };
 
   /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
   public isJsonMime(contentType: string) {
     return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
   };
 
   /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
   public jsonPreferredMime(contentTypes: string[]) {
     for (var i = 0; i < contentTypes.length; i++) {
       if (this.isJsonMime(contentTypes[i])) {
         return contentTypes[i];
       }
     }
     return contentTypes[0];
   };
 
   /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
   public isFileParam(param: any) {
     // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
     if (typeof require === 'function') {
       var fs;
       try {
         fs = require('fs');
       } catch (err) {}
       if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
         return true;
       }
     }
     // Buffer in Node.js
     if (typeof Buffer === 'function' && param instanceof Buffer) {
       return true;
     }
     // Blob in browser
     if (typeof Blob === 'function' && param instanceof Blob) {
       return true;
     }
     // File in browser (it seems File object is also instance of Blob, but keep this for safe)
     if (typeof File === 'function' && param instanceof File) {
       return true;
     }
     return false;
   };
 
   /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
   public normalizeParams(params: Record<string, any>) {
     var newParams: Record<string, any> = {};
     for (var key in params) {
       if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
         var value = params[key];
         if (this.isFileParam(value) || Array.isArray(value)) {
           newParams[key] = value;
         } else {
           newParams[key] = this.paramToString(value);
         }
       }
     }
     return newParams;
   };
 
   /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
   public buildCollectionParam(param: any[], collectionFormat: CollectionFormatEnum) {
     if (param == null) {
       return null;
     }
     switch (collectionFormat) {
       case CollectionFormatEnum.CSV:
         return param.map(this.paramToString).join(',');
       case CollectionFormatEnum.SSV:
         return param.map(this.paramToString).join(' ');
       case CollectionFormatEnum.TSV:
         return param.map(this.paramToString).join('\t');
       case CollectionFormatEnum.PIPES:
         return param.map(this.paramToString).join('|');
       case CollectionFormatEnum.MULTI:
         // return the array directly as SuperAgent will handle it as expected
         return param.map(this.paramToString);
       default:
         throw new Error('Unknown collection format: ' + collectionFormat);
     }
   };
 
   /**
    * Deserializes an HTTP response body into a value of the specified type.
    * @param {Object} response A SuperAgent response object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns A value of the specified type.
    */
   public deserialize(response: superagent.Response, returnType: string|string[]|any|any[]) {
     if (response == null || returnType == null || response.status == 204) {
       return null;
     }
     // Rely on SuperAgent for parsing response body.
     // See http://visionmedia.github.io/superagent/#parsing-response-bodies
     var data = response.body;
     if (data == null || (typeof data === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length)) {
       // SuperAgent does not always produce a body; use the unparsed response as a fallback
       data = response.text;
     }
     return ApiClient.convertToType(data, returnType);
   };
 
   /**
    * Invokes the REST service using the supplied settings and parameters.
    * @param {String} path The base URL to invoke.
    * @param {String} httpMethod The HTTP method to use.
    * @param {String} apiName
    * @param {Object.<String, String>} pathParams A map of path parameters and their values.
    * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
    * @param {Object.<String, Object>} collectionQueryParams A map of collection query parameters and their values.
    * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
    * @param {Object.<String, Object>} formParams A map of form parameters and their values.
    * @param {Object} bodyParam The value to pass as the request body.
    * @param {Array.<String>} authNames An array of authentication type names.
    * @param {Array.<String>} contentTypes An array of request MIME types.
    * @param {Array.<String>} accepts An array of acceptable response MIME types.
    * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
    * constructor for a complex type.
    * @returns {Promise} A {@link https://www.promisejs.org/|Promise} object.
    */
   public callApi<T>(path: string, httpMethod: string, apiName: string, pathParams: Record<string, string>,
       queryParams: Record<string, any>, collectionQueryParams: Record<string, any>, headerParams: Record<string, any>, formParams: Record<string, any>, bodyParam: any, authNames: string[], contentTypes: string[], accepts: string[],
       returnType: string|string[]|any|any[]): Promise<ApiResponse<T>> {
 
     // Throw error if credentials are not specified
     if (this.accessKey === undefined || this.secretKey === undefined || this.accessKey === null || this.secretKey === null) {
       throw new Error("Missing Credentials. Please specify accessKey and secretKey in client object.");
     }
 
     const self = this;
     const url = this.buildUrl(path, pathParams);
     const request = superagent(httpMethod, url);
 
     // apply authentications
     const region = this.region
     const service = PRODUCT_ADVERTISING_API;
     const timestamp = Date.now();
 
     let requestHeaders = {
       'content-encoding': 'amz-1.0',
       'content-type': 'application/json; charset=utf-8',
       'host': this.host,
       'x-amz-target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.' + apiName,
       'x-amz-date': awsv4.toAmzDate(timestamp)
     };
 
     let authorizationHeader = awsv4.createAuthorizationHeader(this.accessKey, this.secretKey, requestHeaders, httpMethod, path, bodyParam, region, service, timestamp);
 
     let authHeader = {
       'Authorization': authorizationHeader
     };
     request.set(authHeader);
 
     // set collection query parameters
     for (const key in collectionQueryParams) {
       if (collectionQueryParams.hasOwnProperty(key)) {
         const param = collectionQueryParams[key];
         if (param.collectionFormat === 'csv') {
           // SuperAgent normally percent-encodes all reserved characters in a query parameter. However,
           // commas are used as delimiters for the 'csv' collectionFormat so they must not be encoded. We
           // must therefore construct and encode 'csv' collection query parameters manually.
           if (param.value != null) {
             const value = param.value.map(this.paramToString).map(encodeURIComponent).join(',');
             request.query(encodeURIComponent(key) + "=" + value);
           }
         } else {
           // All other collection query parameters should be treated as ordinary query parameters.
           queryParams[key] = this.buildCollectionParam(param.value, param.collectionFormat);
         }
       }
     }
 
     // set query parameters
     if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
         queryParams['_'] = new Date().getTime();
     }
 
     // set header parameters
     request.set(requestHeaders);
 
     // set requestAgent if it is set by user
     request.set(this.requestAgent);
 
     // set request timeout
     request.timeout(this.timeout);
 
     var contentType = 'application/json; charset=utf-8';
     if (contentType) {
       // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
       if(contentType != 'multipart/form-data') {
         request.type(contentType);
       }
     } else if (!request.getHeader('Content-Type')) {
       request.type('application/json');
     }
 
     if (contentType === 'application/x-www-form-urlencoded') {
       request.send(querystring.stringify(this.normalizeParams(formParams)));
     } else if (contentType == 'multipart/form-data') {
       var _formParams = this.normalizeParams(formParams);
       for (var key in _formParams) {
         if (_formParams.hasOwnProperty(key)) {
           if (this.isFileParam(_formParams[key])) {
             // file field
             request.attach(key, _formParams[key]);
           } else {
             request.field(key, _formParams[key]);
           }
         }
       }
     } else if (bodyParam) {
       request.send(bodyParam);
     }
 
     var accept = this.jsonPreferredMime(accepts);
     if (accept) {
       request.accept(accept);
     }
 
     if (returnType === 'Blob') {
       request.responseType('blob');
     } else if (returnType === 'String') {
       request.responseType('string');
     }
 
     // Attach previously saved cookies, if enabled
     if (this.enableCookies){
       this.agent.attachCookies(request);
     }
 
     return new Promise<ApiResponse<T>>(function(resolve, reject) {
       request.end(function(error, response) {
         if (error) {
           reject(error);
         } else {
           try {
             var data = self.deserialize(response, returnType) as T;
             if (self.enableCookies && typeof window === 'undefined'){
               self.agent.saveCookies(response);
             }
             resolve({data: data, response: response});
           } catch (err) {
             reject(err);
           }
         }
       });
     });
   };
 
   /**
    * Parses an ISO-8601 string representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
   public static parseDate(str: string): Date {
     return new Date(str.replace(/T/i, ' '));
   };
 
   /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
   public static convertToType(data: string|any|any[], type: string|string[]|any|any[]) {
     if (data === null || data === undefined)
       return data
 
     switch (type) {
       case 'Boolean':
         return Boolean(data);
       case 'Integer':
         return parseInt(data, 10);
       case 'Number':
         return parseFloat(data);
       case 'String':
         return String(data);
       case 'Date':
         return ApiClient.parseDate(String(data));
       case 'Blob':
         return data;
       default:
         if (type === Object) {
           // generic object, return directly
           return data;
         } else if (typeof type === 'function') {
           // for model type like: User
           return type.constructFromObject(data);
         } else if (Array.isArray(type)) {
           // for array type like: ['String']
           var itemType = type[0];
           return data.map(function(item: any) {
             return ApiClient.convertToType(item, itemType);
           });
         } else if (typeof type === 'object') {
           // for plain object type like: {'String': 'Integer'}
           var keyType, valueType;
           for (var k in type) {
             if (type.hasOwnProperty(k)) {
               keyType = k;
               valueType = type[k];
               break;
             }
           }
           var result: Record<any, any> = {};
           for (var k in data) {
             if (data.hasOwnProperty(k)) {
               var key = this.convertToType(k, keyType);
               var value = this.convertToType(data[k], valueType);
               result[key] = value;
             }
           }
           return result;
         } else {
           // for unknown type, return the data directly
           return data;
         }
     }
   };
 
   /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
   public static constructFromObject(data: any|any[], obj: any|any[], itemType: string | string[] | any | any[]) {
     if (Array.isArray(data)) {
       for (var i = 0; i < data.length; i++) {
         if (data.hasOwnProperty(i))
           obj[i] = ApiClient.convertToType(data[i], itemType);
       }
     } else {
       for (var k in data) {
         if (data.hasOwnProperty(k))
           obj[k] = ApiClient.convertToType(data[k], itemType);
       }
     }
   };
 }
 