import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class NewRecipeController extends Controller {
  @service('recipe') recipeService

  recipe = {
    name: null,
    description: null,
    numberServings: null,
    cookingTime: null
  }

  @computed('recipe.name')
  get isNotValidForm () {
    return isEmpty(this.recipe.name)
  }

  @action addRecipe() {
    this.recipeService.add(this.recipe)
    this.transitionToRoute('recipes')
  }
  
  @action cancel() {
    this.transitionToRoute('recipes')
  }
}