import Service from '@ember/service';
import { A } from '@ember/array'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service';

export default class RecipeService extends Service {
  @service store

  recipes = A([]);

  guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return (s4() + '-' + s4()).toUpperCase()
	}

  @computed('recipes.length')
  get loaded () {
    return this.recipes.length
  }

  add(recipe) {
    this.store.createRecord('recipe', {
      id: this.guid(),
      name: recipe.name,
      description: recipe.description,
      numberServings: recipe.numberServings,
      cookingTime: recipe.cookingTime,
    })
    this.recipes.pushObject(recipe);
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
