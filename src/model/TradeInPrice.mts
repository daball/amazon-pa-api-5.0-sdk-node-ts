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
 * The TradeInPrice model module.
 * @module model/TradeInPrice
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";

/**
 * Constructs a new <code>TradeInPrice</code>.
 * @alias module:model/TradeInPrice
 * @class
 */
export class TradeInPrice {
  /**
   * @member {Number} Amount
   */
  public Amount?: number;
  /**
   * @member {String} Currency
   */
  public Currency?: string;
  /**
   * @member {String} DisplayAmount
   */
  public DisplayAmount?: string;
  
  /**
   * Constructs a <code>TradeInPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TradeInPrice} obj Optional instance to populate.
   * @return {module:model/TradeInPrice} The populated <code>TradeInPrice</code> instance.
   */
  public static constructFromObject(data: any, obj?: TradeInPrice) {
    if (data) {
      obj = obj || new TradeInPrice();

      if (data.hasOwnProperty('Amount')) {
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Currency')) {
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      }
      if (data.hasOwnProperty('DisplayAmount')) {
        obj.DisplayAmount = ApiClient.convertToType(data['DisplayAmount'], 'String');
      }
    }
    return obj;
  }
};
