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
 * The ByLineInfo model module.
 * @module model/ByLineInfo
 * @version 1.0.0
 */

import { ApiClient } from '../ApiClient.mjs';
import { Contributor } from './Contributor.mjs';
import { SingleStringValuedAttribute } from './SingleStringValuedAttribute.mjs';

/**
 * Constructs a new <code>ByLineInfo</code>.
 * @alias module:model/ByLineInfo
 * @class
 */
export class ByLineInfo {
  /**
   * @member {module:model/SingleStringValuedAttribute} Brand
   */
  public Brand?: SingleStringValuedAttribute;
  /**
   * @member {Array.<module:model/Contributor>} Contributors
   */
  public Contributors?: Contributor[];
  /**
   * @member {module:model/SingleStringValuedAttribute} Manufacturer
   */
  public Manufacturer?: SingleStringValuedAttribute;
  /**
   * Constructs a <code>ByLineInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ByLineInfo} obj Optional instance to populate.
   * @return {module:model/ByLineInfo} The populated <code>ByLineInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: ByLineInfo) {
    if (data) {
      obj = obj || new ByLineInfo();

      if (data.hasOwnProperty('Brand')) {
        obj.Brand = SingleStringValuedAttribute.constructFromObject(data['Brand']);
      }
      if (data.hasOwnProperty('Contributors')) {
        obj.Contributors = ApiClient.convertToType(data['Contributors'], [Contributor]);
      }
      if (data.hasOwnProperty('Manufacturer')) {
        obj.Manufacturer = SingleStringValuedAttribute.constructFromObject(data['Manufacturer']);
      }
    }
    return obj;
  }
};
