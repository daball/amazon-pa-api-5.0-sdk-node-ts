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
 * The DurationPrice model module.
 * @module model/DurationPrice
 * @version 1.0.0
 */

import { OfferPrice } from "./OfferPrice.mts";
import { UnitBasedAttribute } from "./UnitBasedAttribute.mts";

/**
 * Constructs a new <code>DurationPrice</code>.
 * @alias module:model/DurationPrice
 * @class
 */
export class DurationPrice {
  /**
   * @member {module:model/OfferPrice} Price
   */
  public Price?: OfferPrice;
  /**
   * @member {module:model/UnitBasedAttribute} Duration
   */
  public Duration?: UnitBasedAttribute;

  /**
   * Constructs a <code>DurationPrice</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DurationPrice} obj Optional instance to populate.
   * @return {module:model/DurationPrice} The populated <code>DurationPrice</code> instance.
   */
  public static constructFromObject(data: any, obj?: DurationPrice) {
    if (data) {
      obj = obj || new DurationPrice();

      if (data.hasOwnProperty('Price')) {
        obj.Price = OfferPrice.constructFromObject(data['Price']);
      }
      if (data.hasOwnProperty('Duration')) {
        obj.Duration = UnitBasedAttribute.constructFromObject(data['Duration']);
      }
    }
    return obj;
  }
};
