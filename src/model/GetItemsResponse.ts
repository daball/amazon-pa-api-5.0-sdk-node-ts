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
 * The GetItemsResponse model module.
 * @module model/GetItemsResponse
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { ErrorData } from "./ErrorData";
import { ItemsResult } from "./ItemsResult";

/**
 * Constructs a new <code>GetItemsResponse</code>.
 * @alias module:model/GetItemsResponse
 * @class
 */
export class GetItemsResponse {
  /**
   * @member {Array.<module:model/ErrorData>} Errors
   */
  public Errors?: ErrorData[];
  /**
   * @member {module:model/ItemsResult} ItemsResult
   */
  public ItemsResult?: ItemsResult;

  /**
   * Constructs a <code>GetItemsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetItemsResponse} obj Optional instance to populate.
   * @return {module:model/GetItemsResponse} The populated <code>GetItemsResponse</code> instance.
   */
  public static constructFromObject(data: any, obj?: GetItemsResponse) {
    if (data) {
      obj = obj || new GetItemsResponse();

      if (data.hasOwnProperty('Errors')) {
        obj.Errors = ApiClient.convertToType(data['Errors'], [ErrorData]);
      }
      if (data.hasOwnProperty('ItemsResult')) {
        obj.ItemsResult = ItemsResult.constructFromObject(data['ItemsResult']);
      }
    }
    return obj;
  }
};
