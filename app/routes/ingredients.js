import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IngredientsRoute extends Route {
  @service('ingredient') ingredientService

  setupController(controller, model) {
    super.setupController(controller, model)
    !this.ingredientService.loaded && this.ingredientService.add(
      {
        name: `Ingredient example`,
        description: `Description example`,
      }
    )
  }
}