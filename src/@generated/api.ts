/* tslint:disable */
/* eslint-disable */
/**
 * Template RESTful API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface BasicErrorObjectDef
 */
export interface BasicErrorObjectDef {
    /**
     * 
     * @type {string}
     * @memberof BasicErrorObjectDef
     */
    'id'?: string;
    /**
     * The HTTP status code applicable to this problem, expressed as a string value.
     * @type {number}
     * @memberof BasicErrorObjectDef
     */
    'status'?: number;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof BasicErrorObjectDef
     */
    'code'?: number;
    /**
     * A short, human-readable summary of the problem.
     * @type {string}
     * @memberof BasicErrorObjectDef
     */
    'title'?: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof BasicErrorObjectDef
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof BasicErrorObjectDef
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error400AllOfDef
 */
export interface Error400AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error400AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error400AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error400Def
 */
export interface Error400Def {
    /**
     * 
     * @type {string}
     * @memberof Error400Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error400Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error400Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error400Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error400Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error400Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error401AllOfDef
 */
export interface Error401AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error401AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error401AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error401Def
 */
export interface Error401Def {
    /**
     * 
     * @type {string}
     * @memberof Error401Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error401Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error401Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error401Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error401Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error401Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error403AllOfDef
 */
export interface Error403AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error403AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error403AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error403Def
 */
export interface Error403Def {
    /**
     * 
     * @type {string}
     * @memberof Error403Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error403Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error403Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error403Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error403Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error403Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error404AllOfDef
 */
export interface Error404AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error404AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error404AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error404Def
 */
export interface Error404Def {
    /**
     * 
     * @type {string}
     * @memberof Error404Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error404Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error404Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error404Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error404Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error404Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error409AllOfDef
 */
export interface Error409AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error409AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error409AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error409Def
 */
export interface Error409Def {
    /**
     * 
     * @type {string}
     * @memberof Error409Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error409Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error409Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error409Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error409Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error409Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error422AllOfDef
 */
export interface Error422AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error422AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error422AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error422Def
 */
export interface Error422Def {
    /**
     * 
     * @type {string}
     * @memberof Error422Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error422Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error422Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error422Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error422Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error422Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface Error429AllOfDef
 */
export interface Error429AllOfDef {
    /**
     * 
     * @type {any}
     * @memberof Error429AllOfDef
     */
    'status'?: any;
    /**
     * 
     * @type {any}
     * @memberof Error429AllOfDef
     */
    'title'?: any;
}
/**
 * 
 * @export
 * @interface Error429Def
 */
export interface Error429Def {
    /**
     * 
     * @type {string}
     * @memberof Error429Def
     */
    'id'?: string;
    /**
     * 
     * @type {any}
     * @memberof Error429Def
     */
    'status'?: any;
    /**
     * An application-specific error code, expressed as a string value.
     * @type {number}
     * @memberof Error429Def
     */
    'code'?: number;
    /**
     * 
     * @type {any}
     * @memberof Error429Def
     */
    'title'?: any;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     * @type {string}
     * @memberof Error429Def
     */
    'detail'?: string;
    /**
     * An object containing references to the source of the error.
     * @type {string}
     * @memberof Error429Def
     */
    'source'?: string;
}
/**
 * 
 * @export
 * @interface ErrorObjectsDef
 */
export interface ErrorObjectsDef {
    /**
     * 
     * @type {Array<Error400Def | Error401Def | Error403Def | Error404Def | Error409Def | Error422Def | Error429Def>}
     * @memberof ErrorObjectsDef
     */
    'errors'?: Array<Error400Def | Error401Def | Error403Def | Error404Def | Error409Def | Error422Def | Error429Def>;
}
/**
 * 
 * @export
 * @interface ObjectCreateUpdateBodyDef
 */
export interface ObjectCreateUpdateBodyDef {
    /**
     * 
     * @type {string}
     * @memberof ObjectCreateUpdateBodyDef
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface ObjectDef
 */
export interface ObjectDef {
    /**
     * 
     * @type {string}
     * @memberof ObjectDef
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ObjectDef
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface ObjectListResponseBodyDef
 */
export interface ObjectListResponseBodyDef {
    /**
     * 
     * @type {Array<ObjectDef>}
     * @memberof ObjectListResponseBodyDef
     */
    'data'?: Array<ObjectDef>;
}
/**
 * 
 * @export
 * @interface ObjectResponseBodyDef
 */
export interface ObjectResponseBodyDef {
    /**
     * 
     * @type {ObjectDef}
     * @memberof ObjectResponseBodyDef
     */
    'data'?: ObjectDef;
}
/**
 * 
 * @export
 * @interface PaginationLinksDef
 */
export interface PaginationLinksDef {
    /**
     * 
     * @type {string}
     * @memberof PaginationLinksDef
     */
    'next'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginationLinksDef
     */
    'prev'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginationLinksDef
     */
    'first'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginationLinksDef
     */
    'last'?: string;
}
/**
 * 
 * @export
 * @interface PaginationMetaDef
 */
export interface PaginationMetaDef {
    /**
     * 
     * @type {number}
     * @memberof PaginationMetaDef
     */
    'total'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMetaDef
     */
    'from'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMetaDef
     */
    'to'?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginationMetaDef
     */
    'path'?: string;
    /**
     * 
     * @type {number}
     * @memberof PaginationMetaDef
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMetaDef
     */
    'lastPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof PaginationMetaDef
     */
    'pageSize'?: number;
}

/**
 * ObjectsApi - axios parameter creator
 * @export
 */
export const ObjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Paginated list of Objects.
         * @param {string} [accept] Default accept header
         * @param {number} [page] Desired page number (defaults to 1)
         * @param {number} [pageSize] Desired number of elements per page (defaults to 20)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsGet: async (accept?: string, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/objects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an existing Object.
         * @summary Delete a single Object.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsObjectIdDelete: async (objectId: string, accept?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'objectId' is not null or undefined
            assertParamExists('v1ObjectsObjectIdDelete', 'objectId', objectId)
            const localVarPath = `/v1/objects/{object-id}`
                .replace(`{${"object-id"}}`, encodeURIComponent(String(objectId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a single Objects.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsObjectIdGet: async (objectId: string, accept?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'objectId' is not null or undefined
            assertParamExists('v1ObjectsObjectIdGet', 'objectId', objectId)
            const localVarPath = `/v1/objects/{object-id}`
                .replace(`{${"object-id"}}`, encodeURIComponent(String(objectId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates an existing Objects
         * @summary Update a single Objects.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {ObjectCreateUpdateBodyDef} [objectCreateUpdateBodyDef] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsObjectIdPut: async (objectId: string, accept?: string, objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'objectId' is not null or undefined
            assertParamExists('v1ObjectsObjectIdPut', 'objectId', objectId)
            const localVarPath = `/v1/objects/{object-id}`
                .replace(`{${"object-id"}}`, encodeURIComponent(String(objectId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(objectCreateUpdateBodyDef, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates an Object
         * @summary Create an Object.
         * @param {string} [accept] Default accept header
         * @param {ObjectCreateUpdateBodyDef} [objectCreateUpdateBodyDef] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsPost: async (accept?: string, objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/objects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (accept !== undefined && accept !== null) {
                localVarHeaderParameter['Accept'] = String(accept);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(objectCreateUpdateBodyDef, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ObjectsApi - functional programming interface
 * @export
 */
export const ObjectsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ObjectsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Paginated list of Objects.
         * @param {string} [accept] Default accept header
         * @param {number} [page] Desired page number (defaults to 1)
         * @param {number} [pageSize] Desired number of elements per page (defaults to 20)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1ObjectsGet(accept?: string, page?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectListResponseBodyDef>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1ObjectsGet(accept, page, pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes an existing Object.
         * @summary Delete a single Object.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1ObjectsObjectIdDelete(objectId: string, accept?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1ObjectsObjectIdDelete(objectId, accept, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a single Objects.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1ObjectsObjectIdGet(objectId: string, accept?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectResponseBodyDef>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1ObjectsObjectIdGet(objectId, accept, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates an existing Objects
         * @summary Update a single Objects.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {ObjectCreateUpdateBodyDef} [objectCreateUpdateBodyDef] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1ObjectsObjectIdPut(objectId: string, accept?: string, objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectResponseBodyDef>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1ObjectsObjectIdPut(objectId, accept, objectCreateUpdateBodyDef, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates an Object
         * @summary Create an Object.
         * @param {string} [accept] Default accept header
         * @param {ObjectCreateUpdateBodyDef} [objectCreateUpdateBodyDef] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1ObjectsPost(accept?: string, objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObjectResponseBodyDef>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.v1ObjectsPost(accept, objectCreateUpdateBodyDef, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ObjectsApi - factory interface
 * @export
 */
export const ObjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ObjectsApiFp(configuration)
    return {
        /**
         * 
         * @summary Paginated list of Objects.
         * @param {string} [accept] Default accept header
         * @param {number} [page] Desired page number (defaults to 1)
         * @param {number} [pageSize] Desired number of elements per page (defaults to 20)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsGet(accept?: string, page?: number, pageSize?: number, options?: any): AxiosPromise<ObjectListResponseBodyDef> {
            return localVarFp.v1ObjectsGet(accept, page, pageSize, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an existing Object.
         * @summary Delete a single Object.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsObjectIdDelete(objectId: string, accept?: string, options?: any): AxiosPromise<void> {
            return localVarFp.v1ObjectsObjectIdDelete(objectId, accept, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a single Objects.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsObjectIdGet(objectId: string, accept?: string, options?: any): AxiosPromise<ObjectResponseBodyDef> {
            return localVarFp.v1ObjectsObjectIdGet(objectId, accept, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing Objects
         * @summary Update a single Objects.
         * @param {string} objectId Object identifier
         * @param {string} [accept] Default accept header
         * @param {ObjectCreateUpdateBodyDef} [objectCreateUpdateBodyDef] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsObjectIdPut(objectId: string, accept?: string, objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef, options?: any): AxiosPromise<ObjectResponseBodyDef> {
            return localVarFp.v1ObjectsObjectIdPut(objectId, accept, objectCreateUpdateBodyDef, options).then((request) => request(axios, basePath));
        },
        /**
         * Creates an Object
         * @summary Create an Object.
         * @param {string} [accept] Default accept header
         * @param {ObjectCreateUpdateBodyDef} [objectCreateUpdateBodyDef] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1ObjectsPost(accept?: string, objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef, options?: any): AxiosPromise<ObjectResponseBodyDef> {
            return localVarFp.v1ObjectsPost(accept, objectCreateUpdateBodyDef, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for v1ObjectsGet operation in ObjectsApi.
 * @export
 * @interface ObjectsApiV1ObjectsGetRequest
 */
export interface ObjectsApiV1ObjectsGetRequest {
    /**
     * Default accept header
     * @type {string}
     * @memberof ObjectsApiV1ObjectsGet
     */
    readonly accept?: string

    /**
     * Desired page number (defaults to 1)
     * @type {number}
     * @memberof ObjectsApiV1ObjectsGet
     */
    readonly page?: number

    /**
     * Desired number of elements per page (defaults to 20)
     * @type {number}
     * @memberof ObjectsApiV1ObjectsGet
     */
    readonly pageSize?: number
}

/**
 * Request parameters for v1ObjectsObjectIdDelete operation in ObjectsApi.
 * @export
 * @interface ObjectsApiV1ObjectsObjectIdDeleteRequest
 */
export interface ObjectsApiV1ObjectsObjectIdDeleteRequest {
    /**
     * Object identifier
     * @type {string}
     * @memberof ObjectsApiV1ObjectsObjectIdDelete
     */
    readonly objectId: string

    /**
     * Default accept header
     * @type {string}
     * @memberof ObjectsApiV1ObjectsObjectIdDelete
     */
    readonly accept?: string
}

/**
 * Request parameters for v1ObjectsObjectIdGet operation in ObjectsApi.
 * @export
 * @interface ObjectsApiV1ObjectsObjectIdGetRequest
 */
export interface ObjectsApiV1ObjectsObjectIdGetRequest {
    /**
     * Object identifier
     * @type {string}
     * @memberof ObjectsApiV1ObjectsObjectIdGet
     */
    readonly objectId: string

    /**
     * Default accept header
     * @type {string}
     * @memberof ObjectsApiV1ObjectsObjectIdGet
     */
    readonly accept?: string
}

/**
 * Request parameters for v1ObjectsObjectIdPut operation in ObjectsApi.
 * @export
 * @interface ObjectsApiV1ObjectsObjectIdPutRequest
 */
export interface ObjectsApiV1ObjectsObjectIdPutRequest {
    /**
     * Object identifier
     * @type {string}
     * @memberof ObjectsApiV1ObjectsObjectIdPut
     */
    readonly objectId: string

    /**
     * Default accept header
     * @type {string}
     * @memberof ObjectsApiV1ObjectsObjectIdPut
     */
    readonly accept?: string

    /**
     * 
     * @type {ObjectCreateUpdateBodyDef}
     * @memberof ObjectsApiV1ObjectsObjectIdPut
     */
    readonly objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef
}

/**
 * Request parameters for v1ObjectsPost operation in ObjectsApi.
 * @export
 * @interface ObjectsApiV1ObjectsPostRequest
 */
export interface ObjectsApiV1ObjectsPostRequest {
    /**
     * Default accept header
     * @type {string}
     * @memberof ObjectsApiV1ObjectsPost
     */
    readonly accept?: string

    /**
     * 
     * @type {ObjectCreateUpdateBodyDef}
     * @memberof ObjectsApiV1ObjectsPost
     */
    readonly objectCreateUpdateBodyDef?: ObjectCreateUpdateBodyDef
}

/**
 * ObjectsApi - object-oriented interface
 * @export
 * @class ObjectsApi
 * @extends {BaseAPI}
 */
export class ObjectsApi extends BaseAPI {
    /**
     * 
     * @summary Paginated list of Objects.
     * @param {ObjectsApiV1ObjectsGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public v1ObjectsGet(requestParameters: ObjectsApiV1ObjectsGetRequest = {}, options?: AxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).v1ObjectsGet(requestParameters.accept, requestParameters.page, requestParameters.pageSize, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an existing Object.
     * @summary Delete a single Object.
     * @param {ObjectsApiV1ObjectsObjectIdDeleteRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public v1ObjectsObjectIdDelete(requestParameters: ObjectsApiV1ObjectsObjectIdDeleteRequest, options?: AxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).v1ObjectsObjectIdDelete(requestParameters.objectId, requestParameters.accept, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a single Objects.
     * @param {ObjectsApiV1ObjectsObjectIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public v1ObjectsObjectIdGet(requestParameters: ObjectsApiV1ObjectsObjectIdGetRequest, options?: AxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).v1ObjectsObjectIdGet(requestParameters.objectId, requestParameters.accept, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing Objects
     * @summary Update a single Objects.
     * @param {ObjectsApiV1ObjectsObjectIdPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public v1ObjectsObjectIdPut(requestParameters: ObjectsApiV1ObjectsObjectIdPutRequest, options?: AxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).v1ObjectsObjectIdPut(requestParameters.objectId, requestParameters.accept, requestParameters.objectCreateUpdateBodyDef, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates an Object
     * @summary Create an Object.
     * @param {ObjectsApiV1ObjectsPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ObjectsApi
     */
    public v1ObjectsPost(requestParameters: ObjectsApiV1ObjectsPostRequest = {}, options?: AxiosRequestConfig) {
        return ObjectsApiFp(this.configuration).v1ObjectsPost(requestParameters.accept, requestParameters.objectCreateUpdateBodyDef, options).then((request) => request(this.axios, this.basePath));
    }
}


