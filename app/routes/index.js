import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service('recipe') recipeService
  @service('ingredient') ingredientService

  beforeModel() {
    !this.recipeService.loaded && this.recipeService.add(
      {
        name: `Recipe example`,
        description: `Description example`,
        numberServings: Math.round(Math.random()),
        cookingTime: Math.round(Math.floor(Math.random() * 11)),
      }
    )
    if (!this.ingredientService.loaded) {
      this.ingredientService.add(
        {
          name: `Sugar`
        }
      )
      this.ingredientService.add(
        {
          name: `Eggs`
        }
      )
    }
    this.replaceWith('recipes');
  }
}
