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
 * The VariationDimension model module.
 * @module model/VariationDimension
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mjs";

/**
 * Constructs a new <code>VariationDimension</code>.
 * @alias module:model/VariationDimension
 * @class
 */
export class VariationDimension {
  /**
   * @member {String} DisplayName
   */
  public DisplayName?: string;
  /**
   * @member {String} Locale
   */
  public Locale?: string;
  /**
   * @member {String} Name
   */
  public Name?: string;
  /**
   * @member {Array.<String>} Values
   */
  public Values?: string[];

  /**
   * Constructs a <code>VariationDimension</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariationDimension} obj Optional instance to populate.
   * @return {module:model/VariationDimension} The populated <code>VariationDimension</code> instance.
   */
  public static constructFromObject(data: any, obj?: VariationDimension) {
    if (data) {
      obj = obj || new VariationDimension();

      if (data.hasOwnProperty('DisplayName')) {
        obj.DisplayName = ApiClient.convertToType(data['DisplayName'], 'String');
      }
      if (data.hasOwnProperty('Locale')) {
        obj.Locale = ApiClient.convertToType(data['Locale'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Values')) {
        obj.Values = ApiClient.convertToType(data['Values'], ['String']);
      }
    }
    return obj;
  }
};
