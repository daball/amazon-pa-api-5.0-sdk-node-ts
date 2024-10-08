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
 * The OfferPromotion model module.
 * @module model/OfferPromotion
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mjs";

/**
 * Constructs a new <code>OfferPromotion</code>.
 * @alias module:model/OfferPromotion
 * @class
 */
export class OfferPromotion {
  /**
   * @member {Number} Amount
   */
  public Amount?: number;
  /**
   * @member {String} Currency
   */
  public Currency?: string;
  /**
   * @member {Number} DiscountPercent
   */
  public DiscountPercent?: number;
  /**
   * @member {String} DisplayAmount
   */
  public DisplayAmount?: string;
  /**
   * @member {Number} PricePerUnit
   */
  public PricePerUnit?: number;
  /**
   * @member {String} Type
   */
  public Type?: string;

  /**
   * Constructs a <code>OfferPromotion</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferPromotion} obj Optional instance to populate.
   * @return {module:model/OfferPromotion} The populated <code>OfferPromotion</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferPromotion) {
    if (data) {
      obj = obj || new OfferPromotion();

      if (data.hasOwnProperty('Amount')) {
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Currency')) {
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      }
      if (data.hasOwnProperty('DiscountPercent')) {
        obj.DiscountPercent = ApiClient.convertToType(data['DiscountPercent'], 'Number');
      }
      if (data.hasOwnProperty('DisplayAmount')) {
        obj.DisplayAmount = ApiClient.convertToType(data['DisplayAmount'], 'String');
      }
      if (data.hasOwnProperty('PricePerUnit')) {
        obj.PricePerUnit = ApiClient.convertToType(data['PricePerUnit'], 'Number');
      }
      if (data.hasOwnProperty('Type')) {
        obj.Type = ApiClient.convertToType(data['Type'], 'String');
      }
    }
    return obj;
  }
};
