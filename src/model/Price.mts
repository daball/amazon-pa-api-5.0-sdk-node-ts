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

 import { OfferPrice } from "./OfferPrice.mts";

/**
 * The Price model module.
 * @module model/Price
 * @version 1.0.0
 */

/**
 * Constructs a new <code>Price</code>.
 * @alias module:model/Price
 * @class
 */
export class Price {
  /**
   * @member {module:model/OfferPrice} HighestPrice
   */
  public HighestPrice?: OfferPrice;
  /**
   * @member {module:model/OfferPrice} LowestPrice
   */
  public LowestPrice?: OfferPrice;

  /**
   * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price} obj Optional instance to populate.
   * @return {module:model/Price} The populated <code>Price</code> instance.
   */
  public static constructFromObject(data: any, obj?: Price) {
    if (data) {
      obj = obj || new Price();

      if (data.hasOwnProperty('HighestPrice')) {
        obj.HighestPrice = OfferPrice.constructFromObject(data['HighestPrice']);
      }
      if (data.hasOwnProperty('LowestPrice')) {
        obj.LowestPrice = OfferPrice.constructFromObject(data['LowestPrice']);
      }
    }
    return obj;
  }
};
