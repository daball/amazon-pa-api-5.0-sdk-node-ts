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
 * Enum class GetBrowseNodesResource.
 * @enum {}
 * @readonly
 */
export const enum GetBrowseNodesResourceValues {
  /**
   * value: "BrowseNodes.Ancestor"
   * @const
   */
  Ancestor = "BrowseNodes.Ancestor",
  /**
   * value: "BrowseNodes.Children"
   * @const
   */
  Children = "BrowseNodes.Children"
};

export class GetBrowseNodesResource extends String {
  /**
   * value: "BrowseNodes.Ancestor"
   * @const
   */
  public static get Ancestor() { return GetBrowseNodesResourceValues.Ancestor; }
  /**
   * value: "BrowseNodes.Children"
   * @const
   */
  public static get Children() { return GetBrowseNodesResourceValues.Children; }
  /**
   * Returns a <code>GetBrowseNodesResource</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/GetBrowseNodesResource} The enum <code>GetBrowseNodesResource</code> value.
   */
  public static constructFromObject(object: string) { return object; }
};
