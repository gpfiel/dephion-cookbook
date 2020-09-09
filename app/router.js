import EmberRouter from '@ember/routing/router';
import config from 'cookbook/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('recipes');
  this.route('new-recipe');
  this.route('edit-recipe', { path: 'edit-recipe/:id' });
  this.route('view-recipe', { path: 'view-recipe/:id' });
  this.route('ingredients');
  this.route('new-ingredient');
  this.route('edit-ingredient', { path: 'edit-ingredient/:id' });
  this.route('view-ingredient', { path: 'view-ingredient/:id' });
});
