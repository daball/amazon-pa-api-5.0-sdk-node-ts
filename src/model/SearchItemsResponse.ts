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
 * The SearchItemsResponse model module.
 * @module model/SearchItemsResponse
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { ErrorData } from "./ErrorData";
import { SearchResult } from "./SearchResult";

/**
 * Constructs a new <code>SearchItemsResponse</code>.
 * @alias module:model/SearchItemsResponse
 * @class
 */
export class SearchItemsResponse {
  /**
   * @member {module:model/SearchResult} SearchResult
   */
  public SearchResult?: SearchResult;
  /**
   * @member {Array.<module:model/ErrorData>} Errors
   */
  public Errors?: ErrorData[];

  /**
   * Constructs a <code>SearchItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchItemsResponse} obj Optional instance to populate.
   * @return {module:model/SearchItemsResponse} The populated <code>SearchItemsResponse</code> instance.
   */
  public static constructFromObject(data: any, obj?: SearchItemsResponse) {
    if (data) {
      obj = obj || new SearchItemsResponse();

      if (data.hasOwnProperty('SearchResult')) {
        obj.SearchResult = SearchResult.constructFromObject(data['SearchResult']);
      }
      if (data.hasOwnProperty('Errors')) {
        obj.Errors = ApiClient.convertToType(data['Errors'], [ErrorData]);
      }
    }
    return obj;
  }
};
