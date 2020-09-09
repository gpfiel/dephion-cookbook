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

  ingredientObj = null

  @computed('ingredient.name')
  get isNotValidForm () {
    return isEmpty(this.ingredient.name)
  }

  @action async addIngredient() {
    const ingredient = await this.ingredientService.add(this.ingredient, this.steps)
    this.ingredientObj = ingredient
    await ingredient.save().then(() => {
      this.transitionToRoute('ingredients')
    })
  }
  
  @action cancel() {
    this.transitionToRoute('ingredients')
  }
}