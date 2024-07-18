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
 * The OfferListing model module.
 * @module model/OfferListing
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { OfferAvailability } from "./OfferAvailability";
import { OfferCondition } from "./OfferCondition";
import { OfferDeliveryInfo } from "./OfferDeliveryInfo";
import { OfferLoyaltyPoints } from "./OfferLoyaltyPoints";
import { OfferMerchantInfo } from "./OfferMerchantInfo";
import { OfferPrice } from "./OfferPrice";
import { OfferProgramEligibility } from "./OfferProgramEligibility";
import { OfferPromotion } from "./OfferPromotion";

/**
 * Constructs a new <code>OfferListing</code>.
 * @alias module:model/OfferListing
 * @class
 */
export class OfferListing {
  /**
   * @member {module:model/OfferAvailability} Availability
   */
  public Availability?: OfferAvailability;
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
   * @member {Boolean} IsBuyBoxWinner
   */
  public IsBuyBoxWinner?: boolean;
  /**
   * @member {module:model/OfferLoyaltyPoints} LoyaltyPoints
   */
  public LoyaltyPoints?: OfferLoyaltyPoints;
  /**
   * @member {module:model/OfferMerchantInfo} MerchantInfo
   */
  public MerchantInfo?: OfferMerchantInfo;
  /**
   * @member {module:model/OfferPrice} Price
   */
  public Price?: OfferPrice;
  /**
   * @member {module:model/OfferProgramEligibility} ProgramEligibility
   */
  public ProgramEligibility?: OfferProgramEligibility;
  /**
   * @member {Array.<module:model/OfferPromotion>} Promotions
   */
  public Promotions?: OfferPromotion
  /**
   * @member {module:model/OfferPrice} SavingBasis
   */
  public SavingBasis?: OfferPrice;
  /**
   * @member {Boolean} ViolatesMAP
   */
  public ViolatesMAP?: boolean;

  /**
   * Constructs a <code>OfferListing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferListing} obj Optional instance to populate.
   * @return {module:model/OfferListing} The populated <code>OfferListing</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferListing) {
    if (data) {
      obj = obj || new OfferListing();

      if (data.hasOwnProperty('Availability')) {
        obj.Availability = OfferAvailability.constructFromObject(data['Availability']);
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
      if (data.hasOwnProperty('IsBuyBoxWinner')) {
        obj.IsBuyBoxWinner = ApiClient.convertToType(data['IsBuyBoxWinner'], 'Boolean');
      }
      if (data.hasOwnProperty('LoyaltyPoints')) {
        obj.LoyaltyPoints = OfferLoyaltyPoints.constructFromObject(data['LoyaltyPoints']);
      }
      if (data.hasOwnProperty('MerchantInfo')) {
        obj.MerchantInfo = OfferMerchantInfo.constructFromObject(data['MerchantInfo']);
      }
      if (data.hasOwnProperty('Price')) {
        obj.Price = OfferPrice.constructFromObject(data['Price']);
      }
      if (data.hasOwnProperty('ProgramEligibility')) {
        obj.ProgramEligibility = OfferProgramEligibility.constructFromObject(data['ProgramEligibility']);
      }
      if (data.hasOwnProperty('Promotions')) {
        obj.Promotions = ApiClient.convertToType(data['Promotions'], [OfferPromotion]);
      }
      if (data.hasOwnProperty('SavingBasis')) {
        obj.SavingBasis = OfferPrice.constructFromObject(data['SavingBasis']);
      }
      if (data.hasOwnProperty('ViolatesMAP')) {
        obj.ViolatesMAP = ApiClient.convertToType(data['ViolatesMAP'], 'Boolean');
      }
    }
    return obj;
  }
};
