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
 * The Classifications model module.
 * @module model/Classifications
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { SingleStringValuedAttribute } from "./SingleStringValuedAttribute";

/**
 * Constructs a new <code>Classifications</code>.
 * @alias module:model/Classifications
 * @class
 */
export class Classifications {
  /**
   * @member {module:model/SingleStringValuedAttribute} Binding
   */
  public Binding?: SingleStringValuedAttribute;
  /**
   * @member {module:model/SingleStringValuedAttribute} ProductGroup
   */
  public ProductGroup?: SingleStringValuedAttribute;

  /**
   * Constructs a <code>Classifications</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Classifications} obj Optional instance to populate.
   * @return {module:model/Classifications} The populated <code>Classifications</code> instance.
   */
  public static constructFromObject(data: any, obj?: Classifications) {
    if (data) {
      obj = obj || new Classifications();

      if (data.hasOwnProperty('Binding')) {
        obj.Binding = SingleStringValuedAttribute.constructFromObject(data['Binding']);
      }
      if (data.hasOwnProperty('ProductGroup')) {
        obj.ProductGroup = SingleStringValuedAttribute.constructFromObject(data['ProductGroup']);
      }
    }
    return obj;
  }
};
