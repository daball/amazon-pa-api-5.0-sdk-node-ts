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
 * The ItemInfo model module.
 * @module model/ItemInfo
 * @version 1.0.0
 */

import { ByLineInfo } from "./ByLineInfo.mjs";
import { Classifications } from "./Classifications.mjs";
import { ContentInfo } from "./ContentInfo.mjs";
import { ContentRating } from "./ContentRating.mjs";
import { ExternalIds } from "./ExternalIds.mjs";
import { ManufactureInfo } from "./ManufactureInfo.mjs";
import { MultiValuedAttribute } from "./MultiValuedAttribute.mjs";
import { ProductInfo } from "./ProductInfo.mjs";
import { SingleStringValuedAttribute } from "./SingleStringValuedAttribute.mjs";
import { TechnicalInfo } from "./TechnicalInfo.mjs";
import { TradeInInfo } from "./TradeInInfo.mjs";

/**
 * Constructs a new <code>ItemInfo</code>.
 * @alias module:model/ItemInfo
 * @class
 */
export class ItemInfo {
  /**
   * @member {module:model/ByLineInfo} ByLineInfo
   */
  public ByLineInfo?: ByLineInfo;
  /**
   * @member {module:model/Classifications} Classifications
   */
  public Classifications?: Classifications;
  /**
   * @member {module:model/ContentInfo} ContentInfo
   */
  public ContentInfo?: ContentInfo;
  /**
   * @member {module:model/ContentRating} ContentRating
   */
  public ContentRating?: ContentRating;
  /**
   * @member {module:model/ExternalIds} ExternalIds
   */
  public ExternalIds?: ExternalIds;
  /**
   * @member {module:model/MultiValuedAttribute} Features
   */
  public Features?: MultiValuedAttribute;
  /**
   * @member {module:model/ManufactureInfo} ManufactureInfo
   */
  public ManufactureInfo?: ManufactureInfo;
  /**
   * @member {module:model/ProductInfo} ProductInfo
   */
  public ProductInfo?: ProductInfo;
  /**
   * @member {module:model/TechnicalInfo} TechnicalInfo
   */
  public TechnicalInfo?: TechnicalInfo;
  /**
   * @member {module:model/SingleStringValuedAttribute} Title
   */
  public Title?: SingleStringValuedAttribute;
  /**
   * @member {module:model/TradeInInfo} TradeInInfo
   */
  public TradeInInfo?: TradeInInfo;

  /**
   * Constructs a <code>ItemInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemInfo} obj Optional instance to populate.
   * @return {module:model/ItemInfo} The populated <code>ItemInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: ItemInfo) {
    if (data) {
      obj = obj || new ItemInfo();

      if (data.hasOwnProperty('ByLineInfo')) {
        obj.ByLineInfo = ByLineInfo.constructFromObject(data['ByLineInfo']);
      }
      if (data.hasOwnProperty('Classifications')) {
        obj.Classifications = Classifications.constructFromObject(data['Classifications']);
      }
      if (data.hasOwnProperty('ContentInfo')) {
        obj.ContentInfo = ContentInfo.constructFromObject(data['ContentInfo']);
      }
      if (data.hasOwnProperty('ContentRating')) {
        obj.ContentRating = ContentRating.constructFromObject(data['ContentRating']);
      }
      if (data.hasOwnProperty('ExternalIds')) {
        obj.ExternalIds = ExternalIds.constructFromObject(data['ExternalIds']);
      }
      if (data.hasOwnProperty('Features')) {
        obj.Features = MultiValuedAttribute.constructFromObject(data['Features']);
      }
      if (data.hasOwnProperty('ManufactureInfo')) {
        obj.ManufactureInfo = ManufactureInfo.constructFromObject(data['ManufactureInfo']);
      }
      if (data.hasOwnProperty('ProductInfo')) {
        obj.ProductInfo = ProductInfo.constructFromObject(data['ProductInfo']);
      }
      if (data.hasOwnProperty('TechnicalInfo')) {
        obj.TechnicalInfo = TechnicalInfo.constructFromObject(data['TechnicalInfo']);
      }
      if (data.hasOwnProperty('Title')) {
        obj.Title = SingleStringValuedAttribute.constructFromObject(data['Title']);
      }
      if (data.hasOwnProperty('TradeInInfo')) {
        obj.TradeInInfo = TradeInInfo.constructFromObject(data['TradeInInfo']);
      }
    }
    return obj;
  }
};
