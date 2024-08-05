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
 * The Item model module.
 * @module model/Item
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { BrowseNodeInfo } from "./BrowseNodeInfo.mts";
import { CustomerReviews } from "./CustomerReviews.mts";
import { Images } from "./Images.mts";
import { ItemInfo } from "./ItemInfo.mts";
import { Offers } from "./Offers.mts";
import { RentalOffers } from "./RentalOffers.mts";
import { VariationAttribute } from "./VariationAttribute.mts";

/**
 * Constructs a new <code>Item</code>.
 * @alias module:model/Item
 * @class
 */
export class Item {
  /**
   * @member {String} ASIN
   */
  public ASIN?: string;
  /**
   * @member {module:model/BrowseNodeInfo} BrowseNodeInfo
   */
  public BrowseNodeInfo?: BrowseNodeInfo;
  /**
   * @member {module:model/CustomerReviews} CustomerReviews
   */
  public CustomerReviews?: CustomerReviews;
  /**
   * @member {String} DetailPageURL
   */
  public DetailPageURL?: string;
  /**
   * @member {module:model/Images} Images
   */
  public Images?: Images;
  /**
   * @member {module:model/ItemInfo} ItemInfo
   */
  public ItemInfo?: ItemInfo;
  /**
   * @member {module:model/Offers} Offers
   */
  public Offers?: Offers;
  /**
   * @member {String} ParentASIN
   */
  public ParentASIN?: string;
  /**
   * @member {module:model/RentalOffers} RentalOffers
   */
  public RentalOffers?: RentalOffers;
  /**
   * @member {Number} Score
   */
  public Score?: number;
  /**
   * @member {Array.<module:model/VariationAttribute>} VariationAttributes
   */
  public VariationAttributes?: VariationAttribute[];

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  public static constructFromObject(data: any, obj?: Item) {
    if (data) {
      obj = obj || new Item();

      if (data.hasOwnProperty('ASIN')) {
        obj['ASIN'] = ApiClient.convertToType(data['ASIN'], 'String');
      }
      if (data.hasOwnProperty('BrowseNodeInfo')) {
        obj['BrowseNodeInfo'] = BrowseNodeInfo.constructFromObject(data['BrowseNodeInfo']);
      }
      if (data.hasOwnProperty('CustomerReviews')) {
        obj['CustomerReviews'] = CustomerReviews.constructFromObject(data['CustomerReviews']);
      }
      if (data.hasOwnProperty('DetailPageURL')) {
        obj['DetailPageURL'] = ApiClient.convertToType(data['DetailPageURL'], 'String');
      }
      if (data.hasOwnProperty('Images')) {
        obj['Images'] = Images.constructFromObject(data['Images']);
      }
      if (data.hasOwnProperty('ItemInfo')) {
        obj['ItemInfo'] = ItemInfo.constructFromObject(data['ItemInfo']);
      }
      if (data.hasOwnProperty('Offers')) {
        obj['Offers'] = Offers.constructFromObject(data['Offers']);
      }
      if (data.hasOwnProperty('ParentASIN')) {
        obj['ParentASIN'] = ApiClient.convertToType(data['ParentASIN'], 'String');
      }
      if (data.hasOwnProperty('RentalOffers')) {
        obj['RentalOffers'] = RentalOffers.constructFromObject(data['RentalOffers']);
      }
      if (data.hasOwnProperty('Score')) {
        obj['Score'] = ApiClient.convertToType(data['Score'], 'Number');
      }
      if (data.hasOwnProperty('VariationAttributes')) {
        obj['VariationAttributes'] = ApiClient.convertToType(data['VariationAttributes'], [VariationAttribute]);
      }
    }
    return obj;
  }
};
