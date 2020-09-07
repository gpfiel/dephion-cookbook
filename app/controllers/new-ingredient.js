import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class NewIngredientController extends Controller {
  @service('ingredient') ingredientService

  ingredient = {
    name: null,
    description: null
  }

  @computed('ingredient.name')
  get isNotValidForm () {
    return isEmpty(this.ingredient.name)
  }

  @action addIngredient() {
    this.ingredientService.add(this.ingredient)
    this.transitionToRoute('ingredients')
  }
  
  @action cancel() {
    this.transitionToRoute('ingredients')
  }
}