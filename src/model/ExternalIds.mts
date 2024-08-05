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

 import { MultiValuedAttribute } from "./MultiValuedAttribute.mts";

 /**
 * The ExternalIds model module.
 * @module model/ExternalIds
 * @version 1.0.0
 */

/**
 * Constructs a new <code>ExternalIds</code>.
 * @alias module:model/ExternalIds
 * @class
 */
export class ExternalIds {
  /**
   * @member {module:model/MultiValuedAttribute} EANs
   */
  public EANs?: MultiValuedAttribute
  /**
   * @member {module:model/MultiValuedAttribute} ISBNs
   */
  public ISBNs?: MultiValuedAttribute;
  /**
   * @member {module:model/MultiValuedAttribute} UPCs
   */
  public UPCs?: MultiValuedAttribute;

  /**
   * Constructs a <code>ExternalIds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExternalIds} obj Optional instance to populate.
   * @return {module:model/ExternalIds} The populated <code>ExternalIds</code> instance.
   */
  public static constructFromObject(data: any, obj?: ExternalIds) {
    if (data) {
      obj = obj || new ExternalIds();

      if (data.hasOwnProperty('EANs')) {
        obj.EANs = MultiValuedAttribute.constructFromObject(data['EANs']);
      }
      if (data.hasOwnProperty('ISBNs')) {
        obj.ISBNs = MultiValuedAttribute.constructFromObject(data['ISBNs']);
      }
      if (data.hasOwnProperty('UPCs')) {
        obj.UPCs = MultiValuedAttribute.constructFromObject(data['UPCs']);
      }
    }
    return obj;
  }
};
