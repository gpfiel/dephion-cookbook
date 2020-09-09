import Cookbook from './cookbook';
import RSVP from 'rsvp';

export default Cookbook.extend({
	pathForType() {
		return 'ingredient';
	},
	createRecord(store, type, snapshot) {
    let data = this.serialize(snapshot, { includeId: true });
    const url = `${this.host}/${this.pathForType()}`
    let self = this;
    return new RSVP.Promise(function(resolve, reject) {
      self.ajax(url, 'POST', { data: data }).then((data) => {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  },

  updateRecord(store, type, snapshot) {
    let id = snapshot.id;
    let data = this.serialize(snapshot, { includeId: true });
    const url = `${this.host}/${this.pathForType()}/${id}`
    let self = this;
    return new RSVP.Promise(function(resolve, reject) {
      self.ajax(url, 'PUT', { data: data }).then((data) => {
        resolve(data);
      }, function(jqXHR) {
        reject(jqXHR);
      });
    });
  }
});
