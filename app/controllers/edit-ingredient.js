import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditIngredientController extends Controller {
  @action save() {
    this.transitionToRoute('ingredients')
  }
  @action cancel() {
    this.ingredient.name = this.ingredientOriginal.name
    this.ingredient.description = this.ingredientOriginal.description
    this.transitionToRoute('ingredients')
  }
}