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
 * The ManufactureInfo model module.
 * @module model/ManufactureInfo
 * @version 1.0.0
 */

import { SingleStringValuedAttribute } from "./SingleStringValuedAttribute.mjs";

/**
 * Constructs a new <code>ManufactureInfo</code>.
 * @alias module:model/ManufactureInfo
 * @class
 */
export class ManufactureInfo {
  /**
   * @member {module:model/SingleStringValuedAttribute} ItemPartNumber
   */
  public ItemPartNumber?: SingleStringValuedAttribute;
  /**
   * @member {module:model/SingleStringValuedAttribute} Model
   */
  public Model?: SingleStringValuedAttribute;
  /**
   * @member {module:model/SingleStringValuedAttribute} Warranty
   */
  public Warranty?: SingleStringValuedAttribute;
  
  /**
   * Constructs a <code>ManufactureInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ManufactureInfo} obj Optional instance to populate.
   * @return {module:model/ManufactureInfo} The populated <code>ManufactureInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: ManufactureInfo) {
    if (data) {
      obj = obj || new ManufactureInfo();

      if (data.hasOwnProperty('ItemPartNumber')) {
        obj.ItemPartNumber = SingleStringValuedAttribute.constructFromObject(data['ItemPartNumber']);
      }
      if (data.hasOwnProperty('Model')) {
        obj.Model = SingleStringValuedAttribute.constructFromObject(data['Model']);
      }
      if (data.hasOwnProperty('Warranty')) {
        obj.Warranty = SingleStringValuedAttribute.constructFromObject(data['Warranty']);
      }
    }
    return obj;
  }
};
