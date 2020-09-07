import Route from '@ember/routing/route';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';

export default class RecipesRoute extends Route {
  @service('recipe') recipeService

  setupController(controller, model) {
    super.setupController(controller, model)
    !this.recipeService.loaded && this.recipeService.add(
      {
        name: `Recipe example`,
        description: `Description example`,
        numberServings: Math.round(Math.random()),
        cookingTime: Math.round(Math.floor(Math.random() * 11)),
      }
    )
  }
}
