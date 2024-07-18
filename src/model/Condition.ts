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

export const enum ConditionValue {
  /**
   * value: "Any"
   * @const
   */
  Any = "Any",
  /**
   * value: "Collectible"
   * @const
   */
  Collectible = "Collectible",
  /**
   * value: "New"
   * @const
   */
  New = "New",
  /**
   * value: "Refurbished"
   * @const
   */
  Refurbished = "Refurbished",
  /**
   * value: "Used"
   * @const
   */
  Used = "Used",
}

/**
 * Enum class Condition.
 * @enum {}
 * @readonly
 */
export class Condition extends String {
  /**
   * value: "Any"
   * @const
   */
  public static get Any() { return ConditionValue.Any; }
  /**
   * value: "Collectible"
   * @const
   */
  public static get Collectible() { return ConditionValue.Collectible; }
  /**
   * value: "New"
   * @const
   */
  public static get New() { return ConditionValue.New; }
  /**
   * value: "Refurbished"
   * @const
   */
  public static get Refurbished() { return ConditionValue.Refurbished; }
  /**
   * value: "Used"
   * @const
   */
  public static get Used() { return ConditionValue.Used; }
  /**
   * Returns a <code>Condition</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Condition} The enum <code>Condition</code> value.
   */
  public static constructFromObject = function(object: Condition|ConditionValue|string) { return object; }
};
