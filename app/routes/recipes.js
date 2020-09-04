import Route from '@ember/routing/route';
// import { inject as service } from '@ember/service'
import { A } from '@ember/array';

export default class RecipesRoute extends Route {

  setupController(controller, model) {
    super.setupController(controller, model)
    let arrRecipes = A([])
    for (let index = 1; index <= 10; index++) {
      arrRecipes.pushObject(
        this.store.createRecord('recipe', {
          id: index,
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
