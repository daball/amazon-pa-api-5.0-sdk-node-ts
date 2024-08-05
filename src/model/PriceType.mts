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
 * Enum class PriceType.
 * @enum {}
 * @readonly
 */
export const enum PriceTypeValue {
  /**
   * value: "LIST_PRICE"
   * @const
   */
  LIST_PRICE = "LIST_PRICE",
  /**
   * value: "LOWEST_PRICE"
   * @const
   */
  LOWEST_PRICE = "LOWEST_PRICE",
  /**
   * value: "LOWEST_PRICE_STRIKETHROUGH"
   * @const
   */
  LOWEST_PRICE_STRIKETHROUGH = "LOWEST_PRICE_STRIKETHROUGH",
  /**
   * value: "WAS_PRICE"
   * @const
   */
  WAS_PRICE = "WAS_PRICE"
};

export class PriceType extends String {
  /**
   * value: "LIST_PRICE"
   * @const
   */
  public static get LIST_PRICE() { return PriceTypeValue.LIST_PRICE; }
  /**
   * value: "LOWEST_PRICE"
   * @const
   */
  public static get LOWEST_PRICE() { return PriceTypeValue.LOWEST_PRICE; }
  /**
   * value: "LOWEST_PRICE_STRIKETHROUGH"
   * @const
   */
  public static get LOWEST_PRICE_STRIKETHROUGH() { return PriceTypeValue.LOWEST_PRICE_STRIKETHROUGH; }
  /**
   * value: "WAS_PRICE"
   * @const
   */
  public static get WAS_PRICE() { return PriceType.WAS_PRICE; }
  /**
   * Returns a <code>PriceType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/PriceType} The enum <code>PriceType</code> value.
   */
  public static constructFromObject(object: PriceType|PriceTypeValue|string) {
    return object;
  }
};
