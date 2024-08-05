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
 * The SearchResult model module.
 * @module model/SearchResult
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { Item } from "./Item.mts";
import { SearchRefinements } from "./SearchRefinements.mts";

/**
 * Constructs a new <code>SearchResult</code>.
 * @alias module:model/SearchResult
 * @class
 */
export class SearchResult {
  /**
   * @member {Number} TotalResultCount
   */
  public TotalResultCount?: number;
  /**
   * @member {String} SearchURL
   */
  public SearchURL?: string;
  /**
   * @member {Array.<module:model/Item>} Items
   */
  public Items?: Item[];
  /**
   * @member {module:model/SearchRefinements} SearchRefinements
   */
  public SearchRefinements?: SearchRefinements;

  /**
   * Constructs a <code>SearchResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchResult} obj Optional instance to populate.
   * @return {module:model/SearchResult} The populated <code>SearchResult</code> instance.
   */
  public static constructFromObject(data: any, obj?: SearchResult) {
    if (data) {
      obj = obj || new SearchResult();

      if (data.hasOwnProperty('TotalResultCount')) {
        obj.TotalResultCount = ApiClient.convertToType(data['TotalResultCount'], 'Number');
      }
      if (data.hasOwnProperty('SearchURL')) {
        obj.SearchURL = ApiClient.convertToType(data['SearchURL'], 'String');
      }
      if (data.hasOwnProperty('Items')) {
        obj.Items = ApiClient.convertToType(data['Items'], [Item]);
      }
      if (data.hasOwnProperty('SearchRefinements')) {
        obj.SearchRefinements = SearchRefinements.constructFromObject(data['SearchRefinements']);
      }
    }
    return obj;
  }
};
