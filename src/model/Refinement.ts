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
 * The Refinement model module.
 * @module model/Refinement
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { RefinementBin } from "./RefinementBin";

/**
 * Constructs a new <code>Refinement</code>.
 * @alias module:model/Refinement
 * @class
 */
export class Refinement {
  /**
   * @member {Array.<module:model/RefinementBin>} Bins
   */
  public Bins?: RefinementBin[];
  /**
   * @member {String} DisplayName
   */
  public DisplayName?: string;
  /**
   * @member {String} Id
   */
  public Id?: string;
  
  /**
   * Constructs a <code>Refinement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Refinement} obj Optional instance to populate.
   * @return {module:model/Refinement} The populated <code>Refinement</code> instance.
   */
  public static constructFromObject(data: any, obj?: Refinement) {
    if (data) {
      obj = obj || new Refinement();

      if (data.hasOwnProperty('Bins')) {
        obj.Bins = ApiClient.convertToType(data['Bins'], [RefinementBin]);
      }
      if (data.hasOwnProperty('DisplayName')) {
        obj.DisplayName = ApiClient.convertToType(data['DisplayName'], 'String');
      }
      if (data.hasOwnProperty('Id')) {
        obj.Id = ApiClient.convertToType(data['Id'], 'String');
      }
    }
    return obj;
  }
};
