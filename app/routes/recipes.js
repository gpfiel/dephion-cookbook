import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default class RecipesRoute extends Route {

  guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return (s4() + '-' + s4()).toUpperCase()
	}

  setupController(controller, model) {
    super.setupController(controller, model)
    let arrRecipes = A([])
    for (let index = 1; index <= 10; index++) {
      arrRecipes.pushObject(
        this.store.createRecord('recipe', {
          id: this.guid(),
          name: `Recipe ${index}`,
          description: `Description ${index}`,
          numberServings: Math.round(Math.random()),
          cookingTime: Math.round(Math.floor(Math.random() * 11)),
        })
      )
    }
    controller.set('recipes', arrRecipes)
  }
}
