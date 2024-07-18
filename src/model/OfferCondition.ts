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
 * The OfferCondition model module.
 * @module model/OfferCondition
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { OfferConditionNote } from "./OfferConditionNote";
import { OfferSubCondition } from "./OfferSubCondition";

/**
 * Constructs a new <code>OfferCondition</code>.
 * @alias module:model/OfferCondition
 * @class
 */
export class OfferCondition {
  /**
   * @member {String} DisplayValue
   */
  public DisplayValue?: string;
  /**
   * @member {String} Label
   */
  public Label?: string;
  /**
   * @member {String} Locale
   */
  public Locale?: string;
  /**
   * @member {String} Value
   */
  public Value?: string;
  /**
   * @member {module:model/OfferSubCondition} SubCondition
   */
  public SubCondition?: OfferSubCondition;
  /**
   * @member {module:model/OfferConditionNote} ConditionNote
   */
  public ConditionNote?: OfferConditionNote;

  /**
   * Constructs a <code>OfferCondition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OfferCondition} obj Optional instance to populate.
   * @return {module:model/OfferCondition} The populated <code>OfferCondition</code> instance.
   */
  public static constructFromObject(data: any, obj?: OfferCondition) {
    if (data) {
      obj = obj || new OfferCondition();

      if (data.hasOwnProperty('DisplayValue')) {
        obj.DisplayValue = ApiClient.convertToType(data['DisplayValue'], 'String');
      }
      if (data.hasOwnProperty('Label')) {
        obj.Label = ApiClient.convertToType(data['Label'], 'String');
      }
      if (data.hasOwnProperty('Locale')) {
        obj.Locale = ApiClient.convertToType(data['Locale'], 'String');
      }
      if (data.hasOwnProperty('Value')) {
        obj.Value = ApiClient.convertToType(data['Value'], 'String');
      }
      if (data.hasOwnProperty('SubCondition')) {
        obj.SubCondition = OfferSubCondition.constructFromObject(data['SubCondition']);
      }
      if (data.hasOwnProperty('ConditionNote')) {
        obj.ConditionNote = OfferConditionNote.constructFromObject(data['ConditionNote']);
      }
    }
    return obj;
  }
};
