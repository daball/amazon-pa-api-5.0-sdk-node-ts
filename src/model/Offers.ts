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
 * The Offers model module.
 * @module model/Offers
 * @version 1.0.0
 */

import { ApiClient } from "../ApiClient";
import { OfferListing } from "./OfferListing";
import { OfferSummary } from "./OfferSummary";

/**
 * Constructs a new <code>Offers</code>.
 * @alias module:model/Offers
 * @class
 */
export class Offers {
  /**
   * @member {Array.<module:model/OfferListing>} Listings
   */
  public Listings?: OfferListing[];
  /**
   * @member {Array.<module:model/OfferSummary>} Summaries
   */
  public Summaries?: OfferSummary[];

  /**
   * Constructs a <code>Offers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Offers} obj Optional instance to populate.
   * @return {module:model/Offers} The populated <code>Offers</code> instance.
   */
  public static constructFromObject(data: any, obj?: Offers) {
    if (data) {
      obj = obj || new Offers();

      if (data.hasOwnProperty('Listings')) {
        obj.Listings = ApiClient.convertToType(data['Listings'], [OfferListing]);
      }
      if (data.hasOwnProperty('Summaries')) {
        obj.Summaries = ApiClient.convertToType(data['Summaries'], [OfferSummary]);
      }
    }
    return obj;
  }
};
