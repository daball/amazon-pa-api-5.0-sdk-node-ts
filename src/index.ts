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

import { ApiClient } from "./ApiClient";
import { Availability } from "./model/Availability";
import { ByLineInfo } from "./model/ByLineInfo";
import { Classifications } from "./model/Classifications";
import { Condition } from "./model/Condition";
import { Contributor } from "./model/Contributor";
import { OfferSavings } from "./model/OfferSavings";
import { PriceType } from "./model/PriceType";
import { SingleBooleanValuedAttribute } from "./model/SingleBooleanValuedAttribute";
import { SingleIntegerValuedAttribute } from "./model/SingleIntegerValuedAttribute";
import { SingleStringValuedAttribute } from "./model/SingleStringValuedAttribute";

/**
 * ProductAdvertisingAPI 5.0 NodeJS SDK.<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var ProductAdvertisingAPIv1 = require('index'); // See note below*.
 * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new ProductAdvertisingAPIv1.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new ProductAdvertisingAPIv1.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 1.0.0
 */
export {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient,
  /**
   * The Availability model constructor.
   * @property {module:model/Availability}
   */
  Availability,
  /**
   * The BrowseNode model constructor.
   * @property {module:model/BrowseNode}
   */
  BrowseNode: BrowseNode,
  /**
   * The BrowseNodeAncestor model constructor.
   * @property {module:model/BrowseNodeAncestor}
   */
  BrowseNodeAncestor: BrowseNodeAncestor,
  /**
   * The BrowseNodeChild model constructor.
   * @property {module:model/BrowseNodeChild}
   */
  BrowseNodeChild: BrowseNodeChild,
  /**
   * The BrowseNodeInfo model constructor.
   * @property {module:model/BrowseNodeInfo}
   */
  BrowseNodeInfo: BrowseNodeInfo,
  /**
   * The BrowseNodesResult model constructor.
   * @property {module:model/BrowseNodesResult}
   */
  BrowseNodesResult: BrowseNodesResult,
  /**
   * The ByLineInfo model constructor.
   * @property {module:model/ByLineInfo}
   */
  ByLineInfo,
  /**
   * The Classifications model constructor.
   * @property {module:model/Classifications}
   */
  Classifications,
  /**
   * The Condition model constructor.
   * @property {module:model/Condition}
   */
  Condition,
  /**
   * The ContentInfo model constructor.
   * @property {module:model/ContentInfo}
   */
  ContentInfo: ContentInfo,
  /**
   * The ContentRating model constructor.
   * @property {module:model/ContentRating}
   */
  ContentRating: ContentRating,
  /**
   * The Contributor model constructor.
   * @property {module:model/Contributor}
   */
  Contributor,
  /**
   * The CustomerReviews model constructor.
   * @property {module:model/CustomerReviews}
   */
  CustomerReviews: CustomerReviews,
  /**
   * The DeliveryFlag model constructor.
   * @property {module:model/DeliveryFlag}
   */
  DeliveryFlag: DeliveryFlag,
  /**
   * The DimensionBasedAttribute model constructor.
   * @property {module:model/DimensionBasedAttribute}
   */
  DimensionBasedAttribute: DimensionBasedAttribute,
  /**
   * The DurationPrice model constructor.
   * @property {module:model/DurationPrice}
   */
  DurationPrice: DurationPrice,
  /**
   * The ErrorData model constructor.
   * @property {module:model/ErrorData}
   */
  ErrorData: ErrorData,
  /**
   * The ExternalIds model constructor.
   * @property {module:model/ExternalIds}
   */
  ExternalIds: ExternalIds,
  /**
   * The GetBrowseNodesRequest model constructor.
   * @property {module:model/GetBrowseNodesRequest}
   */
  GetBrowseNodesRequest: GetBrowseNodesRequest,
  /**
   * The GetBrowseNodesResource model constructor.
   * @property {module:model/GetBrowseNodesResource}
   */
  GetBrowseNodesResource: GetBrowseNodesResource,
  /**
   * The GetBrowseNodesResponse model constructor.
   * @property {module:model/GetBrowseNodesResponse}
   */
  GetBrowseNodesResponse: GetBrowseNodesResponse,
  /**
   * The GetItemsRequest model constructor.
   * @property {module:model/GetItemsRequest}
   */
  GetItemsRequest: GetItemsRequest,
  /**
   * The GetItemsResource model constructor.
   * @property {module:model/GetItemsResource}
   */
  GetItemsResource: GetItemsResource,
  /**
   * The GetItemsResponse model constructor.
   * @property {module:model/GetItemsResponse}
   */
  GetItemsResponse: GetItemsResponse,
  /**
   * The GetVariationsRequest model constructor.
   * @property {module:model/GetVariationsRequest}
   */
  GetVariationsRequest: GetVariationsRequest,
  /**
   * The GetVariationsResource model constructor.
   * @property {module:model/GetVariationsResource}
   */
  GetVariationsResource: GetVariationsResource,
  /**
   * The GetVariationsResponse model constructor.
   * @property {module:model/GetVariationsResponse}
   */
  GetVariationsResponse: GetVariationsResponse,
  /**
   * The ImageSize model constructor.
   * @property {module:model/ImageSize}
   */
  ImageSize: ImageSize,
  /**
   * The ImageType model constructor.
   * @property {module:model/ImageType}
   */
  ImageType: ImageType,
  /**
   * The Images model constructor.
   * @property {module:model/Images}
   */
  Images: Images,
  /**
   * The Item model constructor.
   * @property {module:model/Item}
   */
  Item: Item,
  /**
   * The ItemIdType model constructor.
   * @property {module:model/ItemIdType}
   */
  ItemIdType: ItemIdType,
  /**
   * The ItemInfo model constructor.
   * @property {module:model/ItemInfo}
   */
  ItemInfo: ItemInfo,
  /**
   * The ItemsResult model constructor.
   * @property {module:model/ItemsResult}
   */
  ItemsResult: ItemsResult,
  /**
   * The LanguageType model constructor.
   * @property {module:model/LanguageType}
   */
  LanguageType: LanguageType,
  /**
   * The Languages model constructor.
   * @property {module:model/Languages}
   */
  Languages: Languages,
  /**
   * The ManufactureInfo model constructor.
   * @property {module:model/ManufactureInfo}
   */
  ManufactureInfo: ManufactureInfo,
  /**
   * The MaxPrice model constructor.
   * @property {module:model/MaxPrice}
   */
  MaxPrice: MaxPrice,
  /**
   * The Merchant model constructor.
   * @property {module:model/Merchant}
   */
  Merchant: Merchant,
  /**
   * The MinPrice model constructor.
   * @property {module:model/MinPrice}
   */
  MinPrice: MinPrice,
  /**
   * The MinReviewsRating model constructor.
   * @property {module:model/MinReviewsRating}
   */
  MinReviewsRating: MinReviewsRating,
  /**
   * The MinSavingPercent model constructor.
   * @property {module:model/MinSavingPercent}
   */
  MinSavingPercent: MinSavingPercent,
  /**
   * The MultiValuedAttribute model constructor.
   * @property {module:model/MultiValuedAttribute}
   */
  MultiValuedAttribute: MultiValuedAttribute,
  /**
   * The OfferAvailability model constructor.
   * @property {module:model/OfferAvailability}
   */
  OfferAvailability: OfferAvailability,
  /**
   * The OfferCondition model constructor.
   * @property {module:model/OfferCondition}
   */
  OfferCondition: OfferCondition,
  /**
   * The OfferConditionNote model constructor.
   * @property {module:model/OfferConditionNote}
   */
  OfferConditionNote: OfferConditionNote,
  /**
   * The OfferCount model constructor.
   * @property {module:model/OfferCount}
   */
  OfferCount: OfferCount,
  /**
   * The OfferDeliveryInfo model constructor.
   * @property {module:model/OfferDeliveryInfo}
   */
  OfferDeliveryInfo: OfferDeliveryInfo,
  /**
   * The OfferListing model constructor.
   * @property {module:model/OfferListing}
   */
  OfferListing: OfferListing,
  /**
   * The OfferLoyaltyPoints model constructor.
   * @property {module:model/OfferLoyaltyPoints}
   */
  OfferLoyaltyPoints: OfferLoyaltyPoints,
  /**
   * The OfferMerchantInfo model constructor.
   * @property {module:model/OfferMerchantInfo}
   */
  OfferMerchantInfo: OfferMerchantInfo,
  /**
   * The OfferPrice model constructor.
   * @property {module:model/OfferPrice}
   */
  OfferPrice: OfferPrice,
  /**
   * The OfferProgramEligibility model constructor.
   * @property {module:model/OfferProgramEligibility}
   */
  OfferProgramEligibility: OfferProgramEligibility,
  /**
   * The OfferPromotion model constructor.
   * @property {module:model/OfferPromotion}
   */
  OfferPromotion: OfferPromotion,
  /**
   * The OfferSavings model constructor.
   * @property {module:model/OfferSavings}
   */
  OfferSavings,
  /**
   * The OfferShippingCharge model constructor.
   * @property {module:model/OfferShippingCharge}
   */
  OfferShippingCharge: OfferShippingCharge,
  /**
   * The OfferSubCondition model constructor.
   * @property {module:model/OfferSubCondition}
   */
  OfferSubCondition: OfferSubCondition,
  /**
   * The OfferSummary model constructor.
   * @property {module:model/OfferSummary}
   */
  OfferSummary: OfferSummary,
  /**
   * The Offers model constructor.
   * @property {module:model/Offers}
   */
  Offers: Offers,
  /**
   * The PartnerType model constructor.
   * @property {module:model/PartnerType}
   */
  PartnerType: PartnerType,
  /**
   * The Price model constructor.
   * @property {module:model/Price}
   */
  Price: Price,
  /**
   * The PriceType model constructor.
   * @property {module:model/PriceType}
   */
  PriceType,
  /**
   * The ProductAdvertisingAPIClientException model constructor.
   * @property {module:model/ProductAdvertisingAPIClientException}
   */
  ProductAdvertisingAPIClientException: ProductAdvertisingAPIClientException,
  /**
   * The ProductAdvertisingAPIServiceException model constructor.
   * @property {module:model/ProductAdvertisingAPIServiceException}
   */
  ProductAdvertisingAPIServiceException: ProductAdvertisingAPIServiceException,
  /**
   * The ProductInfo model constructor.
   * @property {module:model/ProductInfo}
   */
  ProductInfo: ProductInfo,
  /**
   * The Properties model constructor.
   * @property {module:model/Properties}
   */
  Properties: Properties,
  /**
   * The Rating model constructor.
   * @property {module:model/Rating}
   */
  Rating: Rating,
  /**
   * The Refinement model constructor.
   * @property {module:model/Refinement}
   */
  Refinement: Refinement,
  /**
   * The RefinementBin model constructor.
   * @property {module:model/RefinementBin}
   */
  RefinementBin: RefinementBin,
  /**
   * The RentalOfferListing model constructor.
   * @property {module:model/RentalOfferListing}
   */
  RentalOfferListing: RentalOfferListing,
  /**
   * The RentalOffers model constructor.
   * @property {module:model/RentalOffers}
   */
  RentalOffers: RentalOffers,
  /**
   * The SearchItemsRequest model constructor.
   * @property {module:model/SearchItemsRequest}
   */
  SearchItemsRequest: SearchItemsRequest,
  /**
   * The SearchItemsResource model constructor.
   * @property {module:model/SearchItemsResource}
   */
  SearchItemsResource: SearchItemsResource,
  /**
   * The SearchItemsResponse model constructor.
   * @property {module:model/SearchItemsResponse}
   */
  SearchItemsResponse: SearchItemsResponse,
  /**
   * The SearchRefinements model constructor.
   * @property {module:model/SearchRefinements}
   */
  SearchRefinements: SearchRefinements,
  /**
   * The SearchResult model constructor.
   * @property {module:model/SearchResult}
   */
  SearchResult: SearchResult,
  /**
   * The SingleBooleanValuedAttribute model constructor.
   * @property {module:model/SingleBooleanValuedAttribute}
   */
  SingleBooleanValuedAttribute,
  /**
   * The SingleIntegerValuedAttribute model constructor.
   * @property {module:model/SingleIntegerValuedAttribute}
   */
  SingleIntegerValuedAttribute,
  /**
   * The SingleStringValuedAttribute model constructor.
   * @property {module:model/SingleStringValuedAttribute}
   */
  SingleStringValuedAttribute,
  /**
   * The SortBy model constructor.
   * @property {module:model/SortBy}
   */
  SortBy: SortBy,
  /**
   * The TechnicalInfo model constructor.
   * @property {module:model/TechnicalInfo}
   */
  TechnicalInfo: TechnicalInfo,
  /**
   * The TradeInInfo model constructor.
   * @property {module:model/TradeInInfo}
   */
  TradeInInfo: TradeInInfo,
  /**
   * The TradeInPrice model constructor.
   * @property {module:model/TradeInPrice}
   */
  TradeInPrice: TradeInPrice,
  /**
   * The UnitBasedAttribute model constructor.
   * @property {module:model/UnitBasedAttribute}
   */
  UnitBasedAttribute: UnitBasedAttribute,
  /**
   * The VariationAttribute model constructor.
   * @property {module:model/VariationAttribute}
   */
  VariationAttribute: VariationAttribute,
  /**
   * The VariationDimension model constructor.
   * @property {module:model/VariationDimension}
   */
  VariationDimension: VariationDimension,
  /**
   * The VariationSummary model constructor.
   * @property {module:model/VariationSummary}
   */
  VariationSummary: VariationSummary,
  /**
   * The VariationsResult model constructor.
   * @property {module:model/VariationsResult}
   */
  VariationsResult: VariationsResult,
  /**
   * The WebsiteSalesRank model constructor.
   * @property {module:model/WebsiteSalesRank}
   */
  WebsiteSalesRank: WebsiteSalesRank,
  /**
   * The DefaultApi service constructor.
   * @property {module:api/DefaultApi}
   */
  DefaultApi: DefaultApi
};