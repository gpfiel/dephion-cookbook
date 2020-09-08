import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array'

export default class NewRecipeController extends Controller {
  @service('store') store
  @service('recipe') recipeService
  @service('ingredient') ingredientService

  @tracked ingredientSelected = 'default'

  steps = A([]);

  recipe = {
    name: null,
    description: null,
    numberServings: null,
    cookingTime: null
  }

  step = {
    position: null,
    instructions: null,
    ingredient: null,
    amountRequired: null,
  }

  cleanStepObj() {
    this.ingredientSelected = 'default'
    this.step = {
      position: null,
      instructions: null,
      ingredient: null,
      amountRequired: null,
    }
  }

  @computed('recipe.name')
  get isNotValidForm () {
    return isEmpty(this.recipe.name)
  }

  @action addStep() {
    this.step.ingredient = this.store.peekRecord('ingredient', this.ingredientSelected )
    this.steps.pushObject(this.step)
    this.cleanStepObj()
  }

  @action cleanStep() {
    this.cleanStepObj()
  }

  @action addRecipe() {
    this.recipeService.add(this.recipe, this.steps)
    this.transitionToRoute('recipes')
  }
  

  @action cancel() {
    this.transitionToRoute('recipes')
  }
}