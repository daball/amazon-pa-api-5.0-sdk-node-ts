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
 * The OfferMerchantInfo model module.
 * @module model/OfferMerchantInfo
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mjs";

/**
 * Constructs a new <code>OfferMerchantInfo</code>.
 * @alias module:model/OfferMerchantInfo
 * @class
 */
export class OfferMerchantInfo {
  /**
   * @member {String} DefaultShippingCountry
   */
  public DefaultShippingCountry?: string;
  /**
   * @member {Number} FeedbackCount
   */
  public FeedbackCount?: number;
  /**
   * @member {Number} FeedbackRating
   */
  public FeedbackRating?: number;
  /**
   * @member {String} Id
   */
  public Id?: string;
  /**
   * @member {String} Name
   */
  public Name?: string;

  /**
   * Constructs a <code>OfferMerchantInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferMerchantInfo} obj Optional instance to populate.
   * @return {module:model/OfferMerchantInfo} The populated <code>OfferMerchantInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferMerchantInfo) {
    if (data) {
      obj = obj || new OfferMerchantInfo();

      if (data.hasOwnProperty('DefaultShippingCountry')) {
        obj.DefaultShippingCountry = ApiClient.convertToType(data['DefaultShippingCountry'], 'String');
      }
      if (data.hasOwnProperty('FeedbackCount')) {
        obj.FeedbackCount = ApiClient.convertToType(data['FeedbackCount'], 'Number');
      }
      if (data.hasOwnProperty('FeedbackRating')) {
        obj.FeedbackRating = ApiClient.convertToType(data['FeedbackRating'], 'Number');
      }
      if (data.hasOwnProperty('Id')) {
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      }
    }
    return obj;
  }
};
