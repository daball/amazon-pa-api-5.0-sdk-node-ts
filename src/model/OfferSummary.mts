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
 * The OfferSummary model module.
 * @module model/OfferSummary
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mjs";
import { OfferCondition } from "./OfferCondition.mjs";
import { OfferPrice } from "./OfferPrice.mjs";

/**
 * Constructs a new <code>OfferSummary</code>.
 * @alias module:model/OfferSummary
 * @class
 */
export class OfferSummary {
  /**
   * @member {module:model/OfferCondition} Condition
   */
  public Condition?: OfferCondition;
  /**
   * @member {module:model/OfferPrice} HighestPrice
   */
  public HighestPrice?: OfferPrice;
  /**
   * @member {module:model/OfferPrice} LowestPrice
   */
  public LowestPrice?: OfferPrice;
  /**
   * @member {Number} OfferCount
   */
  public OfferCount?: number;

  /**
   * Constructs a <code>OfferSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferSummary} obj Optional instance to populate.
   * @return {module:model/OfferSummary} The populated <code>OfferSummary</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferSummary) {
    if (data) {
      obj = obj || new OfferSummary();

      if (data.hasOwnProperty('Condition')) {
        obj.Condition = OfferCondition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('HighestPrice')) {
        obj.HighestPrice = OfferPrice.constructFromObject(data['HighestPrice']);
      }
      if (data.hasOwnProperty('LowestPrice')) {
        obj.LowestPrice = OfferPrice.constructFromObject(data['LowestPrice']);
      }
      if (data.hasOwnProperty('OfferCount')) {
        obj.OfferCount = ApiClient.convertToType(data['OfferCount'], 'Number');
      }
    }
    return obj;
  }
};
