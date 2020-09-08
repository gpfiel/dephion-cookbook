import Service from '@ember/service';
import { A } from '@ember/array'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class RecipeService extends Service {
  @service store

  search = null

  recipes = A([]);

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return (s4() + '-' + s4()).toUpperCase()
  }
  
  matchFields(recipe) {
    return recipe.name.indexOf(this.search) != -1
  };

  @computed('recipes.length')
  get loaded () {
    return this.recipes.length
  }

  @computed('recipes.length', 'search')
  get sortedList () {
    if (isEmpty(this.search)) return this.recipes
    let recipeTmp = A([])
    this.recipes.forEach((recipe) => {
      if (this.matchFields(recipe)) 
        recipeTmp.pushObject(recipe)
    })
    return recipeTmp
  }
  

  add(recipe, steps = null) {
    const recipeObj = this.store.createRecord('recipe', {
      id: this.guid(),
      name: recipe.name,
      description: recipe.description,
      numberServings: recipe.numberServings,
      cookingTime: recipe.cookingTime,
    })

    this.steps && this.steps.forEach((step) => {
      this.store.createRecord('step', {
        id: this.guid(),
        position: step.id,
        instructions: step.instructions,
        amountRequired: step.amountRequired,
        ingredient: step.ingredient,
        recipe: recipeObj,
      })
    })
    this.recipes.pushObject(recipeObj);
  }

  remove(recipe) {
    const self = this;
    (async function () {
      if (await confirm(`Are you sure about deleting (${recipe.name.toUpperCase()}) ?`)) {
        self.recipes.removeObject(recipe);
      }
    })()
  }

  empty() {
    this.recipes.clear();
  }
}
