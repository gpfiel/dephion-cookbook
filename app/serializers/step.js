import DS from 'ember-data';
import NormalizeEmbeddedData from 'cookbook/mixins/normalize-embedded-data'

export default DS.RESTSerializer.extend(NormalizeEmbeddedData, {
	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		return this._super(store, primaryModelClass, payload, id, requestType);
	},
	normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
		return this._super(store, primaryModelClass, payload, id, requestType);
	},
	normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
		return this._super(store, primaryModelClass, payload, id, requestType);
	},
	normalize(typeHash, hash) {
    hash['amountRequired'] = hash['amount_required']
    delete hash['amount_required']
    return this._super(typeHash, hash);
  }
});