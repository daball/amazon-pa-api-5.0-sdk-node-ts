/**
 * Adapted to TypeScript by David A. Ball. (c) 2024.
 * 
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

 import { ApiClient } from "../ApiClient.mjs";
 import { GetBrowseNodesRequest } from "../model/GetBrowseNodesRequest.mjs";
 import { GetBrowseNodesResponse } from "../model/GetBrowseNodesResponse.mjs";
 import { GetItemsRequest } from "../model/GetItemsRequest.mjs";
 import { GetItemsResponse } from "../model/GetItemsResponse.mjs";
 import { GetVariationsRequest } from "../model/GetVariationsRequest.mjs";
 import { GetVariationsResponse } from "../model/GetVariationsResponse.mjs";
 import { SearchItemsRequest } from "../model/SearchItemsRequest.mjs";
 import { SearchItemsResponse } from "../model/SearchItemsResponse.mjs";
 
 /**
  * Default service.
  * @module api/DefaultApi
  * @version 1.0.0
  */
 
 /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
 export class DefaultApi {
   public apiClient: ApiClient = ApiClient.instance;
   public contructor(apiClient?: ApiClient) {
     if (apiClient)
       this.apiClient = apiClient;
   }
 
   /**
    * @param {module:model/GetBrowseNodesRequest} getBrowseNodesRequest GetBrowseNodesRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetBrowseNodesResponse} and HTTP response
    */
   public getBrowseNodesWithHttpInfo(getBrowseNodesRequest: GetBrowseNodesRequest) {
     var postBody = getBrowseNodesRequest;
 
     // verify the required parameter 'getBrowseNodesRequest' is set
     if (getBrowseNodesRequest === undefined || getBrowseNodesRequest === null) {
       throw new Error("Missing the required parameter 'getBrowseNodesRequest' when calling getBrowseNodes");
     }
 
 
     var pathParams = {
     };
     var queryParams = {
     };
     var collectionQueryParams = {
     };
     var headerParams = {
     };
     var formParams = {
     };
 
     var authNames = [];
     var contentTypes = ['application/json'];
     var accepts = ['application/json'];
     var returnType = GetBrowseNodesResponse;
 
     return this.apiClient.callApi(
       '/paapi5/getbrowsenodes', 'POST', 'GetBrowseNodes',
       pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType
     );
   }
 
   /**
    * @param {module:model/GetBrowseNodesRequest} getBrowseNodesRequest GetBrowseNodesRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetBrowseNodesResponse}
    */
   public getBrowseNodes(getBrowseNodesRequest: GetBrowseNodesRequest) {
     return this.getBrowseNodesWithHttpInfo(getBrowseNodesRequest)
       .then(function(response_and_data: any) {
         return response_and_data.data;
       });
   }
 
 
   /**
    * @param {module:model/GetItemsRequest} getItemsRequest GetItemsRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetItemsResponse} and HTTP response
    */
   public getItemsWithHttpInfo(getItemsRequest: GetItemsRequest) {
     var postBody = getItemsRequest;
 
     // verify the required parameter 'getItemsRequest' is set
     if (getItemsRequest === undefined || getItemsRequest === null) {
       throw new Error("Missing the required parameter 'getItemsRequest' when calling getItems");
     }
 
 
     var pathParams = {
     };
     var queryParams = {
     };
     var collectionQueryParams = {
     };
     var headerParams = {
     };
     var formParams = {
     };
 
     var authNames = [];
     var contentTypes = ['application/json'];
     var accepts = ['application/json'];
     var returnType = GetItemsResponse;
 
     return this.apiClient.callApi(
       '/paapi5/getitems', 'POST', 'GetItems',
       pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType
     );
   }
 
   /**
    * @param {module:model/GetItemsRequest} getItemsRequest GetItemsRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetItemsResponse}
    */
   public getItems(getItemsRequest: GetItemsRequest) {
     return this.getItemsWithHttpInfo(getItemsRequest)
       .then(function(response_and_data: any) {
         return response_and_data.data;
       });
   }
 
 
   /**
    * @param {module:model/GetVariationsRequest} getVariationsRequest GetVariationsRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetVariationsResponse} and HTTP response
    */
   public getVariationsWithHttpInfo(getVariationsRequest: GetVariationsRequest) {
     var postBody = getVariationsRequest;
 
     // verify the required parameter 'getVariationsRequest' is set
     if (getVariationsRequest === undefined || getVariationsRequest === null) {
       throw new Error("Missing the required parameter 'getVariationsRequest' when calling getVariations");
     }
 
 
     var pathParams = {
     };
     var queryParams = {
     };
     var collectionQueryParams = {
     };
     var headerParams = {
     };
     var formParams = {
     };
 
     var authNames = [];
     var contentTypes = ['application/json'];
     var accepts = ['application/json'];
     var returnType = GetVariationsResponse;
 
     return this.apiClient.callApi(
       '/paapi5/getvariations', 'POST', 'GetVariations',
       pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType
     );
   }
 
   /**
    * @param {module:model/GetVariationsRequest} getVariationsRequest GetVariationsRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetVariationsResponse}
    */
   public getVariations(getVariationsRequest: GetVariationsRequest) {
     return this.getVariationsWithHttpInfo(getVariationsRequest)
       .then(function(response_and_data: any) {
         return response_and_data.data;
       });
   }
 
 
   /**
    * @param {module:model/SearchItemsRequest} searchItemsRequest SearchItemsRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SearchItemsResponse} and HTTP response
    */
   public searchItemsWithHttpInfo(searchItemsRequest: SearchItemsRequest) {
     var postBody = searchItemsRequest;
 
     // verify the required parameter 'searchItemsRequest' is set
     if (searchItemsRequest === undefined || searchItemsRequest === null) {
       throw new Error("Missing the required parameter 'searchItemsRequest' when calling searchItems");
     }
 
 
     var pathParams = {
     };
     var queryParams = {
     };
     var collectionQueryParams = {
     };
     var headerParams = {
     };
     var formParams = {
     };
 
     var authNames = [];
     var contentTypes = ['application/json'];
     var accepts = ['application/json'];
     var returnType = SearchItemsResponse;
 
     return this.apiClient.callApi(
       '/paapi5/searchitems', 'POST', 'SearchItems',
       pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
       authNames, contentTypes, accepts, returnType
     );
   }
 
   /**
    * @param {module:model/SearchItemsRequest} searchItemsRequest SearchItemsRequest
    * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SearchItemsResponse}
    */
   public searchItems(searchItemsRequest: SearchItemsRequest) {
     return this.searchItemsWithHttpInfo(searchItemsRequest)
       .then(function(response_and_data: any) {
         return response_and_data.data;
       });
   }
 };
 