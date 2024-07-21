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

import { ApiClient } from "../ApiClient";
import { Availability } from "./Availability";
import { Condition } from "./Condition";
import { DeliveryFlag } from "./DeliveryFlag";
import { MaxPrice } from "./MaxPrice";
import { Merchant } from "./Merchant";
import { MinPrice } from "./MinPrice";
import { MinReviewsRating } from "./MinReviewsRating";
import { MinSavingPercent } from "./MinSavingPercent";
import { OfferCount } from "./OfferCount";
import { PartnerType } from "./PartnerType";
import { Properties } from "./Properties";
import { SearchItemsResource, SearchItemsResourceValues } from "./SearchItemsResource";
import { SortBy } from "./SortBy";

/**
 * The SearchItemsRequest model module.
 * @module model/SearchItemsRequest
 * @version 1.0.0
 */

/**
 * Constructs a new <code>SearchItemsRequest</code>.
 * @alias module:model/SearchItemsRequest
 * @class
 * @param partnerTag {String} 
 * @param partnerType {module:model/PartnerType} 
 */
export class SearchItemsRequest {
  /**
   * @member {String} Actor
   */
  public Actor?: string;
  /**
   * @member {String} Artist
   */
  public Artist?: string;
  /**
   * @member {String} Author
   */
  public Author?: string;
  /**
   * @member {module:model/Availability} Availability
   */
  public Availability?: Availability;
  /**
   * @member {String} Brand
   */
  public Brand?: string;
  /**
   * @member {String} BrowseNodeId
   */
  public BrowseNodeId?: string;
  /**
   * @member {module:model/Condition} Condition
   */
  public Condition?: Condition;
  /**
   * @member {String} CurrencyOfPreference
   */
  public CurrencyOfPreference?: string;
  /**
   * @member {Array.<module:model/DeliveryFlag>} DeliveryFlags
   */
  public DeliveryFlags?: DeliveryFlag[];
  /**
   * @member {Number} ItemCount
   */
  public ItemCount?: number;
  /**
   * @member {Number} ItemPage
   */
  public ItemPage?: number;
  /**
   * @member {String} Keywords
   */
  public Keywords?: string;
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  public LanguagesOfPreference?: string[];
  /**
   * @member {String} Marketplace
   */
  public Marketplace?: string;
  /**
   * @member {module:model/MaxPrice} MaxPrice
   */
  public MaxPrice?: MaxPrice;
  /**
   * @member {module:model/Merchant} Merchant
   */
  public Merchant?: Merchant;
  /**
   * @member {module:model/MinPrice} MinPrice
   */
  public MinPrice?: MinPrice;
  /**
   * @member {module:model/MinReviewsRating} MinReviewsRating
   */
  public MinReviewsRating?: MinReviewsRating;
  /**
   * @member {module:model/MinSavingPercent} MinSavingPercent
   */
  public MinSavingPercent?: MinSavingPercent;
  /**
   * @member {module:model/OfferCount} OfferCount
   */
  public OfferCount?: OfferCount;
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
   * @member {Array.<module:model/SearchItemsResource>} Resources
   */
  public Resources?: SearchItemsResource[]|(typeof SearchItemsResourceValues)[]|string[];
  /**
   * @member {String} SearchIndex
   */
  public SearchIndex?: string;
  /**
   * @member {module:model/SortBy} SortBy
   */
  public SortBy?: SortBy;
  /**
   * @member {String} Title
   */
  public Title?: string;

  // not sure when I'll need this:
  // public constructor(partnerTag, partnerType) {
  //   this.PartnerTag = partnerTag;
  //   this.PartnerType = partnerType;
  // };

  /**
   * Constructs a <code>SearchItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchItemsRequest} obj Optional instance to populate.
   * @return {module:model/SearchItemsRequest} The populated <code>SearchItemsRequest</code> instance.
   */
  public static constructFromObject(data: any, obj?: SearchItemsRequest) {
    if (data) {
      obj = obj || new SearchItemsRequest();

      if (data.hasOwnProperty('Actor')) {
        obj.Actor = ApiClient.convertToType(data['Actor'], 'String');
      }
      if (data.hasOwnProperty('Artist')) {
        obj.Artist = ApiClient.convertToType(data['Artist'], 'String');
      }
      if (data.hasOwnProperty('Author')) {
        obj.Author = ApiClient.convertToType(data['Author'], 'String');
      }
      if (data.hasOwnProperty('Availability')) {
        obj.Availability = Availability.constructFromObject(data['Availability']);
      }
      if (data.hasOwnProperty('Brand')) {
        obj.Brand = ApiClient.convertToType(data['Brand'], 'String');
      }
      if (data.hasOwnProperty('BrowseNodeId')) {
        obj.BrowseNodeId = ApiClient.convertToType(data['BrowseNodeId'], 'String');
      }
      if (data.hasOwnProperty('Condition')) {
        obj.Condition = Condition.constructFromObject(data['Condition']);
      }
      if (data.hasOwnProperty('CurrencyOfPreference')) {
        obj.CurrencyOfPreference = ApiClient.convertToType(data['CurrencyOfPreference'], 'String');
      }
      if (data.hasOwnProperty('DeliveryFlags')) {
        obj.DeliveryFlags = ApiClient.convertToType(data['DeliveryFlags'], [DeliveryFlag]);
      }
      if (data.hasOwnProperty('ItemCount')) {
        obj.ItemCount = ApiClient.convertToType(data['ItemCount'], 'Number');
      }
      if (data.hasOwnProperty('ItemPage')) {
        obj.ItemPage = ApiClient.convertToType(data['ItemPage'], 'Number');
      }
      if (data.hasOwnProperty('Keywords')) {
        obj.Keywords = ApiClient.convertToType(data['Keywords'], 'String');
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj.LanguagesOfPreference = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj.Marketplace = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('MaxPrice')) {
        obj.MaxPrice = MaxPrice.constructFromObject(data['MaxPrice']);
      }
      if (data.hasOwnProperty('Merchant')) {
        obj.Merchant = Merchant.constructFromObject(data['Merchant']);
      }
      if (data.hasOwnProperty('MinPrice')) {
        obj.MinPrice = MinPrice.constructFromObject(data['MinPrice']);
      }
      if (data.hasOwnProperty('MinReviewsRating')) {
        obj.MinReviewsRating = MinReviewsRating.constructFromObject(data['MinReviewsRating']);
      }
      if (data.hasOwnProperty('MinSavingPercent')) {
        obj.MinSavingPercent = MinSavingPercent.constructFromObject(data['MinSavingPercent']);
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
        obj.Resources = ApiClient.convertToType(data['Resources'], [SearchItemsResource]);
      }
      if (data.hasOwnProperty('SearchIndex')) {
        obj.SearchIndex = ApiClient.convertToType(data['SearchIndex'], 'String');
      }
      if (data.hasOwnProperty('SortBy')) {
        obj.SortBy = SortBy.constructFromObject(data['SortBy']);
      }
      if (data.hasOwnProperty('Title')) {
        obj.Title = ApiClient.convertToType(data['Title'], 'String');
      }
    }
    return obj;
  }
};
