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
 * The GetBrowseNodesResponse model module.
 * @module model/GetBrowseNodesResponse
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { BrowseNodesResult } from "./BrowseNodesResult.mts";
import { ErrorData } from "./ErrorData.mts";

/**
 * Constructs a new <code>GetBrowseNodesResponse</code>.
 * @alias module:model/GetBrowseNodesResponse
 * @class
 */
export class GetBrowseNodesResponse {
  /**
   * @member {module:model/BrowseNodesResult} BrowseNodesResult
   */
  public BrowseNodesResult?: BrowseNodesResult;
  /**
   * @member {Array.<module:model/ErrorData>} Errors
   */
  public Errors?: ErrorData[];

  /**
   * Constructs a <code>GetBrowseNodesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetBrowseNodesResponse} obj Optional instance to populate.
   * @return {module:model/GetBrowseNodesResponse} The populated <code>GetBrowseNodesResponse</code> instance.
   */
  public static constructFromObject(data: any, obj?: GetBrowseNodesResponse) {
    if (data) {
      obj = obj || new GetBrowseNodesResponse();

      if (data.hasOwnProperty('BrowseNodesResult')) {
        obj.BrowseNodesResult = BrowseNodesResult.constructFromObject(data['BrowseNodesResult']);
      }
      if (data.hasOwnProperty('Errors')) {
        obj.Errors = ApiClient.convertToType(data['Errors'], [ErrorData]);
      }
    }
    return obj;
  }
};
