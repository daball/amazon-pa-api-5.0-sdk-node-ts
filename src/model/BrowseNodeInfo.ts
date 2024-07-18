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
 * The BrowseNodeInfo model module.
 * @module model/BrowseNodeInfo
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { BrowseNode } from "./BrowseNode";
import { WebsiteSalesRank } from "./WebsiteSalesRank";

/**
 * Constructs a new <code>BrowseNodeInfo</code>.
 * @alias module:model/BrowseNodeInfo
 * @class
 */
export class BrowseNodeInfo {
  /**
   * @member {Array.<module:model/BrowseNode>} BrowseNodes
   */
  public BrowseNodes?: BrowseNode;
  /**
   * @member {module:model/WebsiteSalesRank} WebsiteSalesRank
   */
  public WebsiteSalesRank?: WebsiteSalesRank;
  /**
   * Constructs a <code>BrowseNodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrowseNodeInfo} obj Optional instance to populate.
   * @return {module:model/BrowseNodeInfo} The populated <code>BrowseNodeInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: BrowseNodeInfo) {
    if (data) {
      obj = obj || new BrowseNodeInfo();

      if (data.hasOwnProperty('BrowseNodes')) {
        obj.BrowseNodes = ApiClient.convertToType(data['BrowseNodes'], [BrowseNode]);
      }
      if (data.hasOwnProperty('WebsiteSalesRank')) {
        obj.WebsiteSalesRank = WebsiteSalesRank.constructFromObject(data['WebsiteSalesRank']);
      }
    }
    return obj;
  }

};
