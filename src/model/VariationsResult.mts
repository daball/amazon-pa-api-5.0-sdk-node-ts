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
 * The VariationsResult model module.
 * @module model/VariationsResult
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { Item } from "./Item.mts";
import { VariationSummary } from "./VariationSummary.mts";

/**
 * Constructs a new <code>VariationsResult</code>.
 * @alias module:model/VariationsResult
 * @class
 */
export class VariationsResult {
  /**
   * @member {Array.<module:model/Item>} Items
   */
  public Items?: Item[];
  /**
   * @member {module:model/VariationSummary} VariationSummary
   */
  public VariationSummary?: VariationSummary;

  /**
   * Constructs a <code>VariationsResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationsResult} obj Optional instance to populate.
   * @return {module:model/VariationsResult} The populated <code>VariationsResult</code> instance.
   */
  public static constructFromObject(data: any, obj?: VariationsResult) {
    if (data) {
      obj = obj || new VariationsResult();

      if (data.hasOwnProperty('Items')) {
        obj.Items = ApiClient.convertToType(data['Items'], [Item]);
      }
      if (data.hasOwnProperty('VariationSummary')) {
        obj.VariationSummary = VariationSummary.constructFromObject(data['VariationSummary']);
      }
    }
    return obj;
  }
};
