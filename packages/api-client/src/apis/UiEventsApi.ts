/* tslint:disable */
/* eslint-disable */
/**
 * Migration Planner API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: undefined
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Event,
  Source,
} from '../models/index';
import {
    EventFromJSON,
    EventToJSON,
    SourceFromJSON,
    SourceToJSON,
} from '../models/index';

export interface PushEventsRequest {
    event: Event;
}

/**
 * UiEventsApi - interface
 * 
 * @export
 * @interface UiEventsApiInterface
 */
export interface UiEventsApiInterface {
    /**
     * pass events from ui to kafka
     * @param {Event} event 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UiEventsApiInterface
     */
    pushEventsRaw(requestParameters: PushEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>>;

    /**
     * pass events from ui to kafka
     */
    pushEvents(requestParameters: PushEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source>;

}

/**
 * 
 */
export class UiEventsApi extends runtime.BaseAPI implements UiEventsApiInterface {

    /**
     * pass events from ui to kafka
     */
    async pushEventsRaw(requestParameters: PushEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters['event'] == null) {
            throw new runtime.RequiredError(
                'event',
                'Required parameter "event" was null or undefined when calling pushEvents().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/v1/events`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EventToJSON(requestParameters['event']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * pass events from ui to kafka
     */
    async pushEvents(requestParameters: PushEventsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.pushEventsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}