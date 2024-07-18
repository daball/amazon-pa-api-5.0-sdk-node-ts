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
 * The BrowseNodesResult model module.
 * @module model/BrowseNodesResult
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { BrowseNode } from "./BrowseNode";

/**
 * Constructs a new <code>BrowseNodesResult</code>.
 * @alias module:model/BrowseNodesResult
 * @class
 */
export class BrowseNodesResult {
  /**
   * @member {Array.<module:model/BrowseNode>} BrowseNodes
   */
  public BrowseNodes?: BrowseNode[];

  /**
   * Constructs a <code>BrowseNodesResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrowseNodesResult} obj Optional instance to populate.
   * @return {module:model/BrowseNodesResult} The populated <code>BrowseNodesResult</code> instance.
   */
  public static constructFromObject(data: any, obj?: BrowseNodesResult) {
    if (data) {
      obj = obj || new BrowseNodesResult();

      if (data.hasOwnProperty('BrowseNodes')) {
        obj.BrowseNodes = ApiClient.convertToType(data['BrowseNodes'], [BrowseNode]);
      }
    }
    return obj;
  }
};
