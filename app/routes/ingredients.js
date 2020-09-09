import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IngredientsRoute extends Route {
  @service('ingredient') ingredientService

  model(){
    return this.store.findAll('ingredient')
  }

  setupController(controller, model) {
    super.setupController(controller, model)
    this.ingredientService.ingredients = model
  }
}
