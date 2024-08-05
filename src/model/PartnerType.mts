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
 * Enum class PartnerType.
 * @enum {}
 * @readonly
 */
export enum PartnerTypeValues {
  /**
   * value: "Associates"
   * @const
   */
  Associates = "Associates"
};

/**
 * Enum class PartnerType.
 * @enum {}
 * @readonly
 */
export class PartnerType extends String {
  /**
   * value: "Associates"
   * @const
   */
  public static get Associates() { return PartnerTypeValues.Associates; }

  /**
   * Returns a <code>PartnerType</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/PartnerType} The enum <code>PartnerType</code> value.
   */
  public static constructFromObject(object: PartnerType|PartnerTypeValues|string) { return object; }
};
