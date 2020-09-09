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

  recipeObj = null

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
    this.recipeObj = null
  }

  @computed('recipe.name')
  get isNotValidForm () {
    return isEmpty(this.recipe.name)
  }

  @action addStep() {
    this.step.ingredient = this.store.peekRecord('ingredient', this.ingredientSelected ).id
    this.step.amount_required = this.step.amountRequired
    delete this.step.amountRequired
    this.steps.pushObject(this.step)
    this.cleanStepObj()
  }

  @action cleanStep() {
    this.cleanStepObj()
  }

  @action async addRecipe() {
    const recipe = await this.recipeService.add(this.recipe, this.steps)
    this.recipeObj = recipe
    await recipe.save().then(() => {
      this.transitionToRoute('recipes')
    })
  }
  

  @action cancel() {
    this.transitionToRoute('recipes')
  }
}