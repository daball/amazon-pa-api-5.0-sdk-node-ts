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
 * The VariationSummary model module.
 * @module model/VariationSummary
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";
import { Price } from "./Price.mts";
import { VariationDimension } from "./VariationDimension.mts";

/**
 * Constructs a new <code>VariationSummary</code>.
 * @alias module:model/VariationSummary
 * @class
 */
export class VariationSummary {
  /**
   * @member {Number} PageCount
   */
  public PageCount?: number;
  /**
   * @member {module:model/Price} Price
   */
  public Price?: Price;
  /**
   * @member {Number} VariationCount
   */
  public VariationCount?: number;
  /**
   * @member {Array.<module:model/VariationDimension>} VariationDimensions
   */
  public VariationDimensions?: VariationDimension[];

  /**
   * Constructs a <code>VariationSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationSummary} obj Optional instance to populate.
   * @return {module:model/VariationSummary} The populated <code>VariationSummary</code> instance.
   */
  public static constructFromObject(data: any, obj?: VariationSummary) {
    if (data) {
      obj = obj || new VariationSummary();

      if (data.hasOwnProperty('PageCount')) {
        obj.PageCount = ApiClient.convertToType(data['PageCount'], 'Number');
      }
      if (data.hasOwnProperty('Price')) {
        obj.Price = Price.constructFromObject(data['Price']);
      }
      if (data.hasOwnProperty('VariationCount')) {
        obj.VariationCount = ApiClient.convertToType(data['VariationCount'], 'Number');
      }
      if (data.hasOwnProperty('VariationDimensions')) {
        obj.VariationDimensions = ApiClient.convertToType(data['VariationDimensions'], [VariationDimension]);
      }
    }
    return obj;
  }
};
