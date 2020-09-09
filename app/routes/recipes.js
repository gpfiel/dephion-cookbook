import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  @service('recipe') recipeService

  model(){
    return this.store.findAll('recipe')
  }

  setupController(controller, model) {
    super.setupController(controller, model)
    this.recipeService.recipes = model
  }
}
