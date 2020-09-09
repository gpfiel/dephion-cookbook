import Service from '@ember/service';
import ENV from 'cookbook/config/environment'
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Service.extend({
  store: service(),

  isDevelopment: computed('ENV.environment', function() {
		return ENV.environment === 'development'
	}),

	isProduction: computed('ENV.environment', function() {
		return ENV.environment === 'production'
	}),

	isTesting: computed('ENV.environment', function() {
		return ENV.environment === 'test'
	}),

	isStaging: computed('ENV.environment', function() {
		return ENV.environment === 'staging'
	}),

  apiUrl: computed('ENV.apiBaseURL', function() {
		return ENV.apiBaseURL 
	}),
});
