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
 * The GetBrowseNodesRequest model module.
 * @module model/GetBrowseNodesRequest
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { PartnerType } from "./PartnerType.mts";
import { GetBrowseNodesResource } from "./GetBrowseNodesResource.mts";

/**
 * Constructs a new <code>GetBrowseNodesRequest</code>.
 * @alias module:model/GetBrowseNodesRequest
 * @class
 * @param browseNodeIds {Array.<String>} 
 * @param partnerTag {String} 
 * @param partnerType {module:model/PartnerType} 
 */
export class GetBrowseNodesRequest {
  /**
   * @member {Array.<String>} BrowseNodeIds
   */
  public BrowseNodeIds?: string[];
  /**
   * @member {Array.<String>} LanguagesOfPreference
   */
  public LanguagesOfPreference?: string[];
  /**
   * @member {String} Marketplace
   */
  public Marketplace?: string;
  /**
   * @member {String} PartnerTag
   */
  public PartnerTag?: string;
  /**
   * @member {module:model/PartnerType} PartnerType
   */
  public PartnerType?: PartnerType;
  /**
   * @member {Array.<module:model/GetBrowseNodesResource>} Resources
   */
  public Resources?: GetBrowseNodesResource;

  // not sure if this is ever going to be relevant:
  // public constructor(browseNodeIds, partnerTag, partnerType) {
  //   this.BrowseNodeIds = browseNodeIds;
  //   this.PartnerTag = partnerTag;
  //   this.PartnerType = partnerType;
  // };

  /**
   * Constructs a <code>GetBrowseNodesRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBrowseNodesRequest} obj Optional instance to populate.
   * @return {module:model/GetBrowseNodesRequest} The populated <code>GetBrowseNodesRequest</code> instance.
   */
  public static constructFromObject = function(data: any, obj?: GetBrowseNodesRequest) {
    if (data) {
      obj = obj || new GetBrowseNodesRequest();

      if (data.hasOwnProperty('BrowseNodeIds')) {
        obj.BrowseNodeIds = ApiClient.convertToType(data['BrowseNodeIds'], ['String']);
      }
      if (data.hasOwnProperty('LanguagesOfPreference')) {
        obj.LanguagesOfPreference = ApiClient.convertToType(data['LanguagesOfPreference'], ['String']);
      }
      if (data.hasOwnProperty('Marketplace')) {
        obj.Marketplace = ApiClient.convertToType(data['Marketplace'], 'String');
      }
      if (data.hasOwnProperty('PartnerTag')) {
        obj.PartnerTag = ApiClient.convertToType(data['PartnerTag'], 'String');
      }
      if (data.hasOwnProperty('PartnerType')) {
        obj.PartnerType = PartnerType.constructFromObject(data['PartnerType']);
      }
      if (data.hasOwnProperty('Resources')) {
        obj.Resources = ApiClient.convertToType(data['Resources'], [GetBrowseNodesResource]);
      }
    }
    return obj;
  }
};
