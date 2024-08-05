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

import { ApiClient } from "../ApiClient.mts";
import { Condition } from "./Condition.mts";
import { GetVariationsResource } from "./GetVariationsResource.mts";
import { Merchant } from "./Merchant.mts";
import { OfferCount } from "./OfferCount.mts";
import { PartnerType } from "./PartnerType.mts";
import { Properties } from "./Properties.mts";

/**
 * The GetVariationsRequest model module.
 * @module model/GetVariationsRequest
 * @version 1.0.0
 */

/**
 * Constructs a new <code>GetVariationsRequest</code>.
 * @alias module:model/GetVariationsRequest
 * @class
 * @param ASIN {String} 
 * @param partnerTag {String} 
 * @param partnerType {module:model/PartnerType} 
 */
export class GetVariationsRequest {
  /**
   * @member {String} ASIN
   */
  public ASIN?: string;
  /**
   * @member {module:model/Condition} Condition
   */
  public Condition?: Condition;
  /**
   * @member {String} CurrencyOfPreference
   */
  public CurrencyOfPreference?: string;
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  public LanguagesOfPreference?: string[];
  /**
   * @member {String} Marketplace
   */
  public Marketplace?: string;
  /**
   * @member {module:model/Merchant} Merchant
   */
  public Merchant?: Merchant;
  /**
   * @member {module:model/OfferCount} OfferCount
   */
  public OfferCount?: OfferCount
  /**
   * @member {String} PartnerTag
   */
  public PartnerTag?: string;
  /**
   * @member {module:model/PartnerType} PartnerType
   */
  public PartnerType?: PartnerType;
  /**
   * @member {module:model/Properties} Properties
   */
  public Properties?: Properties;
  /**
   * @member {Array.<module:model/GetVariationsResource>} Resources
   */
  public Resources?: GetVariationsResource[];
  /**
   * @member {Number} VariationCount
   */
  public VariationCount?: number;
  /**
   * @member {Number} VariationPage
   */
  public VariationPage?: number;

  // not sure whether I need this or not:
  // public constructor(ASIN, partnerTag, partnerType) {
  //   this.ASIN = ASIN;
  //   this.PartnerTag = partnerTag;
  //   this.PartnerType = partnerType;
  // };

  /**
   * Constructs a <code>GetVariationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetVariationsRequest} obj Optional instance to populate.
   * @return {module:model/GetVariationsRequest} The populated <code>GetVariationsRequest</code> instance.
   */
  public static constructFromObject(data: any, obj?: GetVariationsRequest) {
    if (data) {
      obj = obj || new GetVariationsRequest();

      if (data.hasOwnProperty('ASIN')) {
        obj.ASIN = ApiClient.convertToType(data['ASIN'], 'String');
      }
      if (data.hasOwnProperty('Condition')) {
        obj.Condition = Condition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('CurrencyOfPreference')) {
        obj.CurrencyOfPreference = ApiClient.convertToType(data['CurrencyOfPreference'], 'String');
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj.LanguagesOfPreference = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj.Marketplace = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('Merchant')) {
        obj.Merchant = Merchant.constructFromObject(data['Merchant']);
      }
      if (data.hasOwnProperty('OfferCount')) {
        obj.OfferCount = OfferCount.constructFromObject(data['OfferCount']);
      }
      if (data.hasOwnProperty('PartnerTag')) {
        obj.PartnerTag = ApiClient.convertToType(data['PartnerTag'], 'String');
      }
      if (data.hasOwnProperty('PartnerType')) {
        obj.PartnerType = PartnerType.constructFromObject(data['PartnerType']);
      }
      if (data.hasOwnProperty('Properties')) {
        obj.Properties = Properties.constructFromObject(data['Properties']);
      }
      if (data.hasOwnProperty('Resources')) {
        obj.Resources = ApiClient.convertToType(data['Resources'], [GetVariationsResource]);
      }
      if (data.hasOwnProperty('VariationCount')) {
        obj.VariationCount = ApiClient.convertToType(data['VariationCount'], 'Number');
      }
      if (data.hasOwnProperty('VariationPage')) {
        obj.VariationPage = ApiClient.convertToType(data['VariationPage'], 'Number');
      }
    }
    return obj;
  }
};