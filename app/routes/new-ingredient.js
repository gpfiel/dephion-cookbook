import Route from '@ember/routing/route';

export default class NewIngredientRoute extends Route {
  resetController(controller, isExiting) {
		if (isExiting) {
      controller.set('ingredient', {
        name: null,
        description: null
      })
		}
	}
}
