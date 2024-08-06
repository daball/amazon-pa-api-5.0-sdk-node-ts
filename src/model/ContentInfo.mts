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
 * The ContentInfo model module.
 * @module model/ContentInfo
 * @version 1.0.0
 */

import { Languages } from "./Languages.mjs";
import { SingleIntegerValuedAttribute } from "./SingleIntegerValuedAttribute.mjs";
import { SingleStringValuedAttribute } from "./SingleStringValuedAttribute.mjs";

/**
 * Constructs a new <code>ContentInfo</code>.
 * @alias module:model/ContentInfo
 * @class
 */
export class ContentInfo {
  /**
   * @member {module:model/SingleStringValuedAttribute} Edition
   */
  public Edition?: SingleStringValuedAttribute;
  /**
   * @member {module:model/Languages} Languages
   */
  public Languages?: Languages;
  /**
   * @member {module:model/SingleIntegerValuedAttribute} PagesCount
   */
  public PagesCount?: SingleIntegerValuedAttribute
  /**
   * @member {module:model/SingleStringValuedAttribute} PublicationDate
   */
  public PublicationDate?: SingleStringValuedAttribute;

  /**
   * Constructs a <code>ContentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentInfo} obj Optional instance to populate.
   * @return {module:model/ContentInfo} The populated <code>ContentInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: ContentInfo) {
    if (data) {
      obj = obj || new ContentInfo();

      if (data.hasOwnProperty('Edition')) {
        obj.Edition = SingleStringValuedAttribute.constructFromObject(data['Edition']);
      }
      if (data.hasOwnProperty('Languages')) {
        obj.Languages = Languages.constructFromObject(data['Languages']);
      }
      if (data.hasOwnProperty('PagesCount')) {
        obj.PagesCount = SingleIntegerValuedAttribute.constructFromObject(data['PagesCount']);
      }
      if (data.hasOwnProperty('PublicationDate')) {
        obj.PublicationDate = SingleStringValuedAttribute.constructFromObject(data['PublicationDate']);
      }
    }
    return obj;
  }
};
