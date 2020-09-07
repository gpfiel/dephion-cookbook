import Route from '@ember/routing/route';

export default class RecipesNewRecipeRoute extends Route {
  resetController(controller, isExiting) {
		if (isExiting) {
      controller.set('recipe', {
        name: null,
        description: null,
        numberServings: null,
        cookingTime: null
      })
		}
	}
}
