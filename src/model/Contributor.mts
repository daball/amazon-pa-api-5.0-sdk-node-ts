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
 * The Contributor model module.
 * @module model/Contributor
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mts";

/**
 * Constructs a new <code>Contributor</code>.
 * @alias module:model/Contributor
 * @class
 */
export class Contributor {
  /**
   * @member {String} Locale
   */
  public Locale?: string;
  /**
   * @member {String} Name
   */
  public Name?: string;
  /**
   * @member {String} Role
   */
  public Role?: string;
  /**
   * @member {String} RoleType
   */
  public RoleType?: string;

  /**
   * Constructs a <code>Contributor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contributor} obj Optional instance to populate.
   * @return {module:model/Contributor} The populated <code>Contributor</code> instance.
   */
  public static constructFromObject(data: any, obj?: Contributor) {
    if (data) {
      obj = obj || new Contributor();

      if (data.hasOwnProperty('Locale')) {
        obj.Locale = ApiClient.convertToType(data['Locale'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj.Name = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Role')) {
        obj.Role = ApiClient.convertToType(data['Role'], 'String');
      }
      if (data.hasOwnProperty('RoleType')) {
        obj.RoleType = ApiClient.convertToType(data['RoleType'], 'String');
      }
    }
    return obj;
  }
}
