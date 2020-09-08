import Route from '@ember/routing/route';
import { A } from '@ember/array'

export default class NewRecipeRoute extends Route {
  resetController(controller, isExiting) {
		if (isExiting) {
      controller.set('recipe', {
        name: null,
        description: null,
        numberServings: null,
        cookingTime: null
      })
      controller.set('steps', A([]))
      controller.cleanStepObj()
		}
	}
}
