/**
 * Adapted to TypeScript by David A. Ball. (c) 2024.
 * 
 * Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

/**
 * The ProductAdvertisingAPIServiceException model module.
 * @module model/ProductAdvertisingAPIServiceException
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";

/**
 * Constructs a new <code>ProductAdvertisingAPIServiceException</code>.
 * @alias module:model/ProductAdvertisingAPIServiceException
 * @class
 */
export class ProductAdvertisingAPIServiceException {
  /**
   * @member {String} message
   */
  public message?: string;

  /**
   * Constructs a <code>ProductAdvertisingAPIServiceException</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductAdvertisingAPIServiceException} obj Optional instance to populate.
   * @return {module:model/ProductAdvertisingAPIServiceException} The populated <code>ProductAdvertisingAPIServiceException</code> instance.
   */
  public static constructFromObject(data: any, obj?: ProductAdvertisingAPIServiceException) {
    if (data) {
      obj = obj || new ProductAdvertisingAPIServiceException();

      if (data.hasOwnProperty('message')) {
        obj.message = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }
};
