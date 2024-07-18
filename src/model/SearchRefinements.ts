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
 * The SearchRefinements model module.
 * @module model/SearchRefinements
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { Refinement } from "./Refinement";

/**
 * Constructs a new <code>SearchRefinements</code>.
 * @alias module:model/SearchRefinements
 * @class
 */
export class SearchRefinements {
  /**
   * @member {module:model/Refinement} BrowseNode
   */
  public BrowseNode?: Refinement
  /**
   * @member {Array.<module:model/Refinement>} OtherRefinements
   */
  public OtherRefinements?: Refinement[]
  /**
   * @member {module:model/Refinement} SearchIndex
   */
  public SearchIndex?: Refinement
  /**
   * Constructs a <code>SearchRefinements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchRefinements} obj Optional instance to populate.
   * @return {module:model/SearchRefinements} The populated <code>SearchRefinements</code> instance.
   */
  public static constructFromObject(data: any, obj?: SearchRefinements) {
    if (data) {
      obj = obj || new SearchRefinements();

      if (data.hasOwnProperty('BrowseNode')) {
        obj.BrowseNode = Refinement.constructFromObject(data['BrowseNode']);
      }
      if (data.hasOwnProperty('OtherRefinements')) {
        obj.OtherRefinements = ApiClient.convertToType(data['OtherRefinements'], [Refinement]);
      }
      if (data.hasOwnProperty('SearchIndex')) {
        obj.SearchIndex = Refinement.constructFromObject(data['SearchIndex']);
      }
    }
    return obj;
  }
};
