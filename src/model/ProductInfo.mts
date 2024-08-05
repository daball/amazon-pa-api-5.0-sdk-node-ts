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
 * The ProductInfo model module.
 * @module model/ProductInfo
 * @version 1.0.0
 */

import { DimensionBasedAttribute } from "./DimensionBasedAttribute.mts";
import { SingleBooleanValuedAttribute } from "./SingleBooleanValuedAttribute.mts";
import { SingleIntegerValuedAttribute } from "./SingleIntegerValuedAttribute.mts";
import { SingleStringValuedAttribute } from "./SingleStringValuedAttribute.mts";

/**
 * Constructs a new <code>ProductInfo</code>.
 * @alias module:model/ProductInfo
 * @class
 */
export class ProductInfo {
  /**
   * @member {module:model/SingleStringValuedAttribute} Color
   */
  public Color?: SingleStringValuedAttribute
  /**
   * @member {module:model/SingleBooleanValuedAttribute} IsAdultProduct
   */
  public IsAdultProduct?: SingleBooleanValuedAttribute;
  /**
   * @member {module:model/DimensionBasedAttribute} ItemDimensions
   */
  public ItemDimensions?: DimensionBasedAttribute;
  /**
   * @member {module:model/SingleStringValuedAttribute} ReleaseDate
   */
  public ReleaseDate?: SingleStringValuedAttribute;
  /**
   * @member {module:model/SingleStringValuedAttribute} Size
   */
  public Size?: SingleStringValuedAttribute;
  /**
   * @member {module:model/SingleIntegerValuedAttribute} UnitCount
   */
  public UnitCount?: SingleIntegerValuedAttribute

  /**
   * Constructs a <code>ProductInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProductInfo} obj Optional instance to populate.
   * @return {module:model/ProductInfo} The populated <code>ProductInfo</code> instance.
   */
  public static constructFromObject(data: any, obj?: ProductInfo) {
    if (data) {
      obj = obj || new ProductInfo();

      if (data.hasOwnProperty('Color')) {
        obj.Color = SingleStringValuedAttribute.constructFromObject(data['Color']);
      }
      if (data.hasOwnProperty('IsAdultProduct')) {
        obj.IsAdultProduct = SingleBooleanValuedAttribute.constructFromObject(data['IsAdultProduct']);
      }
      if (data.hasOwnProperty('ItemDimensions')) {
        obj.ItemDimensions = DimensionBasedAttribute.constructFromObject(data['ItemDimensions']);
      }
      if (data.hasOwnProperty('ReleaseDate')) {
        obj.ReleaseDate = SingleStringValuedAttribute.constructFromObject(data['ReleaseDate']);
      }
      if (data.hasOwnProperty('Size')) {
        obj.Size = SingleStringValuedAttribute.constructFromObject(data['Size']);
      }
      if (data.hasOwnProperty('UnitCount')) {
        obj.UnitCount = SingleIntegerValuedAttribute.constructFromObject(data['UnitCount']);
      }
    }
    return obj;
  }
};
