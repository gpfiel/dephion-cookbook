import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
	global: service(),
	host: computed.alias('global.apiUrl'),
});