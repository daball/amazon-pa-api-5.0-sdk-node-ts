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
 * The DimensionBasedAttribute model module.
 * @module model/DimensionBasedAttribute
 * @version 1.0.0
 */

import { UnitBasedAttribute } from "./UnitBasedAttribute.mts";

/**
 * Constructs a new <code>DimensionBasedAttribute</code>.
 * @alias module:model/DimensionBasedAttribute
 * @class
 */
export class DimensionBasedAttribute {
  /**
   * @member {module:model/UnitBasedAttribute} Height
   */
  public Height?: UnitBasedAttribute;
  /**
   * @member {module:model/UnitBasedAttribute} Length
   */
  public Length?: UnitBasedAttribute;
  /**
   * @member {module:model/UnitBasedAttribute} Weight
   */
  public Weight?: UnitBasedAttribute
  /**
   * @member {module:model/UnitBasedAttribute} Width
   */
  public Width?: UnitBasedAttribute;

  /**
   * Constructs a <code>DimensionBasedAttribute</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DimensionBasedAttribute} obj Optional instance to populate.
   * @return {module:model/DimensionBasedAttribute} The populated <code>DimensionBasedAttribute</code> instance.
   */
  public static constructFromObject(data: any, obj?: DimensionBasedAttribute) {
    if (data) {
      obj = obj || new DimensionBasedAttribute();

      if (data.hasOwnProperty('Height')) {
        obj.Height = UnitBasedAttribute.constructFromObject(data['Height']);
      }
      if (data.hasOwnProperty('Length')) {
        obj.Length = UnitBasedAttribute.constructFromObject(data['Length']);
      }
      if (data.hasOwnProperty('Weight')) {
        obj.Weight = UnitBasedAttribute.constructFromObject(data['Weight']);
      }
      if (data.hasOwnProperty('Width')) {
        obj.Width = UnitBasedAttribute.constructFromObject(data['Width']);
      }
    }
    return obj;
  }
};
