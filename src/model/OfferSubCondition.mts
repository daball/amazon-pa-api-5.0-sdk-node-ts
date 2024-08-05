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
 * The OfferSubCondition model module.
 * @module model/OfferSubCondition
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";

/**
 * Constructs a new <code>OfferSubCondition</code>.
 * @alias module:model/OfferSubCondition
 * @class
 */
export class OfferSubCondition {
  /**
   * @member {String} DisplayValue
   */
  public DisplayValue?: string;
  /**
   * @member {String} Label
   */
  public Label?: string;
  /**
   * @member {String} Locale
   */
  public Locale?: string;
  /**
   * @member {String} Value
   */
  public Value?: string;

  /**
   * Constructs a <code>OfferSubCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferSubCondition} obj Optional instance to populate.
   * @return {module:model/OfferSubCondition} The populated <code>OfferSubCondition</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferSubCondition) {
    if (data) {
      obj = obj || new OfferSubCondition();

      if (data.hasOwnProperty('DisplayValue')) {
        obj.DisplayValue = ApiClient.convertToType(data['DisplayValue'], 'String');
      }
      if (data.hasOwnProperty('Label')) {
        obj.Label = ApiClient.convertToType(data['Label'], 'String');
      }
      if (data.hasOwnProperty('Locale')) {
        obj.Locale = ApiClient.convertToType(data['Locale'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj.Value = ApiClient.convertToType(data['Value'], 'String');
      }
    }
    return obj;
  }
};
