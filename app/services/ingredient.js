import Service from '@ember/service';
import { A } from '@ember/array'
import { computed } from '@ember/object'
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { tracked } from '@glimmer/tracking';

export default class IngredientService extends Service {
  @service store

  search = null

  @tracked ingredients = A([]);

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return (s4() + '-' + s4()).toUpperCase()
  }
  
  matchFields(ingredient) {
    return ingredient.name.toLowerCase().indexOf(this.search.toLowerCase()) != -1
  };

  @computed('ingredients.length')
  get loaded () {
    return true
    // return this.ingredients.length
  }

  @computed('ingredients.length', 'search')
  get sortedList () {
    if (isEmpty(this.search)) return this.ingredients
    let ingredientTmp = A([])
    this.ingredients.forEach((ingredient) => {
      if (this.matchFields(ingredient))
        ingredientTmp.pushObject(ingredient)
    })
    return ingredientTmp
  }
  

  add(ingredient) {
    const ingredientObj = this.store.createRecord('ingredient', {
      id: this.guid(),
      name: ingredient.name,
      description: ingredient.description
    })
    this.ingredients.pushObject(ingredientObj);
  }

  remove(ingredient) {
    const self = this;
    (async function () {
      if (await confirm(`Are you sure about deleting (${ingredient.name.toUpperCase()}) ?`)) {
        self.ingredients.removeObject(ingredient);
      }
    })()
  }

  empty() {
    this.ingredients.clear();
  }
}
