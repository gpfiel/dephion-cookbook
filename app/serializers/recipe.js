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
    hash['numberServings'] = hash['number_servings']
    hash['cookingTime'] = hash['cooking_time']
    delete hash['number_servings']
    delete hash['cooking_time']
    return this._super(typeHash, hash);
	},
	serialize(snapshot, options) {
    var json = {
      name: snapshot.attr('name'),
      description: snapshot.attr('description'),
      number_servings: snapshot.attr('numberServings'),
      cooking_time: snapshot.attr('cookingTime'),
      steps: snapshot.attr('stepsToSave'),
    };

    if (options.includeId) {
      json.id = snapshot.id;
    }

    return json;
  }
});