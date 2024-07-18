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

import { LanguageType } from "./LanguageType";

 /**
 * ProductAdvertisingAPI
 * https://webservices.amazon.com/paapi5/documentation/index.html
 *
 */

/**
 * The Languages model module.
 * @module model/Languages
 * @version 1.0.0
 */

/**
 * Constructs a new <code>Languages</code>.
 * @alias module:model/Languages
 * @class
 */
export class Languages {
  /**
   * @member {Array.<module:model/LanguageType>} DisplayValues
   */
  public DisplayValues?: LanguageType[];
  /**
   * @member {String} Label
   */
  public Label?: string;
  /**
   * @member {String} Locale
   */
  public Locale?: string;
  
  /**
   * Constructs a <code>Languages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Languages} obj Optional instance to populate.
   * @return {module:model/Languages} The populated <code>Languages</code> instance.
   */
  public static constructFromObject(data: any, obj?: Languages) {
    if (data) {
      obj = obj || new Languages();

      if (data.hasOwnProperty('DisplayValues')) {
        obj.DisplayValues = ApiClient.convertToType(data['DisplayValues'], [LanguageType]);
      }
      if (data.hasOwnProperty('Label')) {
        obj.Label = ApiClient.convertToType(data['Label'], 'String');
      }
      if (data.hasOwnProperty('Locale')) {
        obj.Locale = ApiClient.convertToType(data['Locale'], 'String');
      }
    }
    return obj;
  }
};
