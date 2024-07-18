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
 * The ImageSize model module.
 * @module model/ImageSize
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";

/**
 * Constructs a new <code>ImageSize</code>.
 * @alias module:model/ImageSize
 * @class
 */
export class ImageSize {
  /**
   * @member {String} URL
   */
  public URL?: string;
  /**
   * @member {Number} Height
   */
  public Height?: number;
  /**
   * @member {Number} Width
   */
  public Width?: number;
  
  /**
   * Constructs a <code>ImageSize</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageSize} obj Optional instance to populate.
   * @return {module:model/ImageSize} The populated <code>ImageSize</code> instance.
   */
  public static constructFromObject(data: any, obj?: ImageSize) {
    if (data) {
      obj = obj || new ImageSize();

      if (data.hasOwnProperty('URL')) {
        obj.URL = ApiClient.convertToType(data['URL'], 'String');
      }
      if (data.hasOwnProperty('Height')) {
        obj.Height = ApiClient.convertToType(data['Height'], 'Number');
      }
      if (data.hasOwnProperty('Width')) {
        obj.Width = ApiClient.convertToType(data['Width'], 'Number');
      }
    }
    return obj;
  }
};
