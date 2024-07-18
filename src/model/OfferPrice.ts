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
 * The OfferPrice model module.
 * @module model/OfferPrice
 * @version 1.0.0
 */

import { ApiClient } from '../ApiClient';
import { OfferSavings } from './OfferSavings';
import { PriceType } from './PriceType';

/**
 * Constructs a new <code>OfferPrice</code>.
 * @alias module:model/OfferPrice
 * @class
 */
export class OfferPrice {
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
   * @member {Number} PricePerUnit
   */
  public PricePerUnit?: number;
  /**
   * @member {module:model/PriceType} PriceType
   */
  public PriceType?: PriceType;
  /**
   * @member {String} PriceTypeLabel
   */
  public PriceTypeLabel?: string;
  /**
   * @member {module:model/OfferSavings} Savings
   */
  public Savings?: OfferSavings;

  /**
   * Constructs a <code>OfferPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferPrice} obj Optional instance to populate.
   * @return {module:model/OfferPrice} The populated <code>OfferPrice</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferPrice) {
    if (data) {
      obj = obj || new OfferPrice();

      if (data.hasOwnProperty('Amount')) {
        obj.Amount = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Currency')) {
        obj.Currency = ApiClient.convertToType(data['Currency'], 'String');
      }
      if (data.hasOwnProperty('DisplayAmount')) {
        obj.DisplayAmount = ApiClient.convertToType(data['DisplayAmount'], 'String');
      }
      if (data.hasOwnProperty('PricePerUnit')) {
        obj.PricePerUnit = ApiClient.convertToType(data['PricePerUnit'], 'Number');
      }
      if (data.hasOwnProperty('PriceType')) {
        obj.PriceType = PriceType.constructFromObject(data['PriceType']);
      }
      if (data.hasOwnProperty('PriceTypeLabel')) {
        obj.PriceTypeLabel = ApiClient.convertToType(data['PriceTypeLabel'], 'String');
      }
      if (data.hasOwnProperty('Savings')) {
        obj.Savings = OfferSavings.constructFromObject(data['Savings']);
      }
    }
    return obj;
  }
};
