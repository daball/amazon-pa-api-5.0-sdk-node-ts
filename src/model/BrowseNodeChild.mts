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
 * The BrowseNodeChild model module.
 * @module model/BrowseNodeChild
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient.mjs";

/**
 * Constructs a new <code>BrowseNodeChild</code>.
 * @alias module:model/BrowseNodeChild
 * @class
 */
export class BrowseNodeChild {
  /**
   * @member {String} ContextFreeName
   */
  public ContextFreeName?: string;
  /**
   * @member {String} DisplayName
   */
  public DisplayName?: string;
  /**
   * @member {String} Id
   */
  public Id?: string;

  /**
   * Constructs a <code>BrowseNodeChild</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BrowseNodeChild} obj Optional instance to populate.
   * @return {module:model/BrowseNodeChild} The populated <code>BrowseNodeChild</code> instance.
   */
  public constructFromObject(data: any, obj?: BrowseNodeChild) {
    if (data) {
      obj = obj || new BrowseNodeChild();

      if (data.hasOwnProperty('ContextFreeName')) {
        obj.ContextFreeName = ApiClient.convertToType(data['ContextFreeName'], 'String');
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
