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
 * The TechnicalInfo model module.
 * @module model/TechnicalInfo
 * @version 1.0.0
 */

import { MultiValuedAttribute } from "./MultiValuedAttribute.mts";
import { SingleStringValuedAttribute } from "./SingleStringValuedAttribute.mts";

/**
 * Constructs a new <code>TechnicalInfo</code>.
 * @alias module:model/TechnicalInfo
 * @class
 */
export class TechnicalInfo {
  /**
   * @member {module:model/SingleStringValuedAttribute} EnergyEfficiencyClass
   */
  public EnergyEfficiencyClass?: SingleStringValuedAttribute;
  /**
   * @member {module:model/MultiValuedAttribute} Formats
   */
  public Formats?: MultiValuedAttribute;

  /**
   * Constructs a <code>TechnicalInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TechnicalInfo} obj Optional instance to populate.
   * @return {module:model/TechnicalInfo} The populated <code>TechnicalInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: TechnicalInfo) {
    if (data) {
      obj = obj || new TechnicalInfo();

      if (data.hasOwnProperty('EnergyEfficiencyClass')) {
        obj.EnergyEfficiencyClass = SingleStringValuedAttribute.constructFromObject(data['EnergyEfficiencyClass']);
      }
      if (data.hasOwnProperty('Formats')) {
        obj.Formats = MultiValuedAttribute.constructFromObject(data['Formats']);
      }
    }
    return obj;
  }
};
