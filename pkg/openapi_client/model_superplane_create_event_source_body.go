/*
Superplane API

API for the Superplane service

API version: 1.0
Contact: support@superplane.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi_client

import (
	"encoding/json"
)

// checks if the SuperplaneCreateEventSourceBody type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &SuperplaneCreateEventSourceBody{}

// SuperplaneCreateEventSourceBody struct for SuperplaneCreateEventSourceBody
type SuperplaneCreateEventSourceBody struct {
	EventSource *SuperplaneEventSource `json:"eventSource,omitempty"`
	RequesterId *string `json:"requesterId,omitempty"`
}

// NewSuperplaneCreateEventSourceBody instantiates a new SuperplaneCreateEventSourceBody object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewSuperplaneCreateEventSourceBody() *SuperplaneCreateEventSourceBody {
	this := SuperplaneCreateEventSourceBody{}
	return &this
}

// NewSuperplaneCreateEventSourceBodyWithDefaults instantiates a new SuperplaneCreateEventSourceBody object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewSuperplaneCreateEventSourceBodyWithDefaults() *SuperplaneCreateEventSourceBody {
	this := SuperplaneCreateEventSourceBody{}
	return &this
}

// GetEventSource returns the EventSource field value if set, zero value otherwise.
func (o *SuperplaneCreateEventSourceBody) GetEventSource() SuperplaneEventSource {
	if o == nil || IsNil(o.EventSource) {
		var ret SuperplaneEventSource
		return ret
	}
	return *o.EventSource
}

// GetEventSourceOk returns a tuple with the EventSource field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SuperplaneCreateEventSourceBody) GetEventSourceOk() (*SuperplaneEventSource, bool) {
	if o == nil || IsNil(o.EventSource) {
		return nil, false
	}
	return o.EventSource, true
}

// HasEventSource returns a boolean if a field has been set.
func (o *SuperplaneCreateEventSourceBody) HasEventSource() bool {
	if o != nil && !IsNil(o.EventSource) {
		return true
	}

	return false
}

// SetEventSource gets a reference to the given SuperplaneEventSource and assigns it to the EventSource field.
func (o *SuperplaneCreateEventSourceBody) SetEventSource(v SuperplaneEventSource) {
	o.EventSource = &v
}

// GetRequesterId returns the RequesterId field value if set, zero value otherwise.
func (o *SuperplaneCreateEventSourceBody) GetRequesterId() string {
	if o == nil || IsNil(o.RequesterId) {
		var ret string
		return ret
	}
	return *o.RequesterId
}

// GetRequesterIdOk returns a tuple with the RequesterId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *SuperplaneCreateEventSourceBody) GetRequesterIdOk() (*string, bool) {
	if o == nil || IsNil(o.RequesterId) {
		return nil, false
	}
	return o.RequesterId, true
}

// HasRequesterId returns a boolean if a field has been set.
func (o *SuperplaneCreateEventSourceBody) HasRequesterId() bool {
	if o != nil && !IsNil(o.RequesterId) {
		return true
	}

	return false
}

// SetRequesterId gets a reference to the given string and assigns it to the RequesterId field.
func (o *SuperplaneCreateEventSourceBody) SetRequesterId(v string) {
	o.RequesterId = &v
}

func (o SuperplaneCreateEventSourceBody) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o SuperplaneCreateEventSourceBody) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.EventSource) {
		toSerialize["eventSource"] = o.EventSource
	}
	if !IsNil(o.RequesterId) {
		toSerialize["requesterId"] = o.RequesterId
	}
	return toSerialize, nil
}

type NullableSuperplaneCreateEventSourceBody struct {
	value *SuperplaneCreateEventSourceBody
	isSet bool
}

func (v NullableSuperplaneCreateEventSourceBody) Get() *SuperplaneCreateEventSourceBody {
	return v.value
}

func (v *NullableSuperplaneCreateEventSourceBody) Set(val *SuperplaneCreateEventSourceBody) {
	v.value = val
	v.isSet = true
}

func (v NullableSuperplaneCreateEventSourceBody) IsSet() bool {
	return v.isSet
}

func (v *NullableSuperplaneCreateEventSourceBody) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableSuperplaneCreateEventSourceBody(val *SuperplaneCreateEventSourceBody) *NullableSuperplaneCreateEventSourceBody {
	return &NullableSuperplaneCreateEventSourceBody{value: val, isSet: true}
}

func (v NullableSuperplaneCreateEventSourceBody) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableSuperplaneCreateEventSourceBody) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


