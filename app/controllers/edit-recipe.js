import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditRecipeController extends Controller {
  @action save() {
    this.transitionToRoute('recipes')
  }
  @action cancel() {
    this.recipe.name = this.recipeOriginal.name
    this.recipe.description = this.recipeOriginal.description
    this.recipe.numberServings = this.recipeOriginal.numberServings
    this.recipe.cookingTime = this.recipeOriginal.cookingTime
    this.transitionToRoute('recipes')
  }
}