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
 * The ImageType model module.
 * @module model/ImageType
 * @version 1.0.0
*/

import { ImageSize } from "./ImageSize.mts";

/**
 * Constructs a new <code>ImageType</code>.
 * @alias module:model/ImageType
 * @class
 */
export class ImageType {
  /**
   * @member {module:model/ImageSize} Small
   */
  public Small?: ImageSize;
  /**
   * @member {module:model/ImageSize} Medium
   */
  public Medium?: ImageSize
  /**
   * @member {module:model/ImageSize} Large
   */
  public Large?: ImageSize;

  /**
   * Constructs a <code>ImageType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageType} obj Optional instance to populate.
   * @return {module:model/ImageType} The populated <code>ImageType</code> instance.
   */
  public static constructFromObject(data: any, obj?: ImageType) {
    if (data) {
      obj = obj || new ImageType();

      if (data.hasOwnProperty('Small')) {
        obj.Small = ImageSize.constructFromObject(data['Small']);
      }
      if (data.hasOwnProperty('Medium')) {
        obj.Medium = ImageSize.constructFromObject(data['Medium']);
      }
      if (data.hasOwnProperty('Large')) {
        obj.Large = ImageSize.constructFromObject(data['Large']);
      }
    }
    return obj;
  }
};
