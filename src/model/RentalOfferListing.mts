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
 * The RentalOfferListing model module.
 * @module model/RentalOfferListing
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { DurationPrice } from "./DurationPrice.mts";
import { OfferAvailability } from "./OfferAvailability.mts";
import { OfferCondition } from "./OfferCondition.mts";
import { OfferDeliveryInfo } from "./OfferDeliveryInfo.mts";
import { OfferMerchantInfo } from "./OfferMerchantInfo.mts";

/**
 * Constructs a new <code>RentalOfferListing</code>.
 * @alias module:model/RentalOfferListing
 * @class
 */
export class RentalOfferListing {
  /**
   * @member {module:model/OfferAvailability} Availability
   */
  public Availability?: OfferAvailability;
  /**
   * @member {module:model/DurationPrice} BasePrice
   */
  public BasePrice?: DurationPrice;
  /**
   * @member {module:model/OfferCondition} Condition
   */
  public Condition?: OfferCondition;
  /**
   * @member {module:model/OfferDeliveryInfo} DeliveryInfo
   */
  public DeliveryInfo?: OfferDeliveryInfo;
  /**
   * @member {String} Id
   */
  public Id?: string;
  /**
   * @member {module:model/OfferMerchantInfo} MerchantInfo
   */
  public MerchantInfo?: OfferMerchantInfo

  /**
   * Constructs a <code>RentalOfferListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RentalOfferListing} obj Optional instance to populate.
   * @return {module:model/RentalOfferListing} The populated <code>RentalOfferListing</code> instance.
   */
  public static constructFromObject(data: any, obj?: RentalOfferListing) {
    if (data) {
      obj = obj || new RentalOfferListing();

      if (data.hasOwnProperty('Availability')) {
        obj.Availability = OfferAvailability.constructFromObject(data['Availability']);
      }
      if (data.hasOwnProperty('BasePrice')) {
        obj.BasePrice = DurationPrice.constructFromObject(data['BasePrice']);
      }
      if (data.hasOwnProperty('Condition')) {
        obj.Condition = OfferCondition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('DeliveryInfo')) {
        obj.DeliveryInfo = OfferDeliveryInfo.constructFromObject(data['DeliveryInfo']);
      }
      if (data.hasOwnProperty('Id')) {
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('MerchantInfo')) {
        obj.MerchantInfo = OfferMerchantInfo.constructFromObject(data['MerchantInfo']);
      }
    }
    return obj;
  }
};
