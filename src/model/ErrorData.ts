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
 * The ErrorData model module.
 * @module model/ErrorData
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";

/**
 * Constructs a new <code>ErrorData</code>.
 * @alias module:model/ErrorData
 * @class
 */
export class ErrorData {
  /**
   * @member {String} Code
   */
  public Code?: string;
  /**
   * @member {String} Message
   */
  public Message?: string;

  /**
   * Constructs a <code>ErrorData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorData} obj Optional instance to populate.
   * @return {module:model/ErrorData} The populated <code>ErrorData</code> instance.
   */
  public static constructFromObject(data: any, obj?: ErrorData) {
    if (data) {
      obj = obj || new ErrorData();

      if (data.hasOwnProperty('Code')) {
        obj.Code = ApiClient.convertToType(data['Code'], 'String');
      }
      if (data.hasOwnProperty('Message')) {
        obj.Message = ApiClient.convertToType(data['Message'], 'String');
      }
    }
    return obj;
  }
};
