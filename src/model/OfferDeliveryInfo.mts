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

import { ApiClient } from "../ApiClient.mjs";
import { OfferShippingCharge } from "./OfferShippingCharge.mjs";

/**
 * The OfferDeliveryInfo model module.
 * @module model/OfferDeliveryInfo
 * @version 1.0.0
 */

/**
 * Constructs a new <code>OfferDeliveryInfo</code>.
 * @alias module:model/OfferDeliveryInfo
 * @class
 */
export class OfferDeliveryInfo {
  /**
   * @member {Boolean} IsAmazonFulfilled
   */
  public IsAmazonFulfilled?: boolean;
  /**
   * @member {Boolean} IsFreeShippingEligible
   */
  public IsFreeShippingEligible?: boolean;
  /**
   * @member {Boolean} IsPrimeEligible
   */
  public IsPrimeEligible?: boolean;
  /**
   * @member {Array.<module:model/OfferShippingCharge>} ShippingCharges
   */
  public ShippingCharges?: OfferShippingCharge[];

  /**
   * Constructs a <code>OfferDeliveryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferDeliveryInfo} obj Optional instance to populate.
   * @return {module:model/OfferDeliveryInfo} The populated <code>OfferDeliveryInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferDeliveryInfo) {
    if (data) {
      obj = obj || new OfferDeliveryInfo();

      if (data.hasOwnProperty('IsAmazonFulfilled')) {
        obj.IsAmazonFulfilled = ApiClient.convertToType(data['IsAmazonFulfilled'], 'Boolean');
      }
      if (data.hasOwnProperty('IsFreeShippingEligible')) {
        obj.IsFreeShippingEligible = ApiClient.convertToType(data['IsFreeShippingEligible'], 'Boolean');
      }
      if (data.hasOwnProperty('IsPrimeEligible')) {
        obj.IsPrimeEligible = ApiClient.convertToType(data['IsPrimeEligible'], 'Boolean');
      }
      if (data.hasOwnProperty('ShippingCharges')) {
        obj.ShippingCharges = ApiClient.convertToType(data['ShippingCharges'], [OfferShippingCharge]);
      }
    }
    return obj;
  }
};
