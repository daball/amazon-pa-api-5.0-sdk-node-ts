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
 * The OfferAvailability model module.
 * @module model/OfferAvailability
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";

/**
 * Constructs a new <code>OfferAvailability</code>.
 * @alias module:model/OfferAvailability
 * @class
 */
export class OfferAvailability {
  /**
   * @member {Number} MaxOrderQuantity
   */
  public MaxOrderQuantity?: number;
  /**
   * @member {String} Message
   */
  public Message?: string;
  /**
   * @member {Number} MinOrderQuantity
   */
  public MinOrderQuantity?: number;
  /**
   * @member {String} Type
   */
  public Type?: string;

  /**
   * Constructs a <code>OfferAvailability</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferAvailability} obj Optional instance to populate.
   * @return {module:model/OfferAvailability} The populated <code>OfferAvailability</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferAvailability) {
    if (data) {
      obj = obj || new OfferAvailability();

      if (data.hasOwnProperty('MaxOrderQuantity')) {
        obj.MaxOrderQuantity = ApiClient.convertToType(data['MaxOrderQuantity'], 'Number');
      }
      if (data.hasOwnProperty('Message')) {
        obj.Message = ApiClient.convertToType(data['Message'], 'String');
      }
      if (data.hasOwnProperty('MinOrderQuantity')) {
        obj.MinOrderQuantity = ApiClient.convertToType(data['MinOrderQuantity'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj.Type = ApiClient.convertToType(data['Type'], 'String');
      }
    }
    return obj;
  }
};