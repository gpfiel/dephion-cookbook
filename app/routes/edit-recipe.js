import Route from '@ember/routing/route';

export default class EditRecipeRoute extends Route {
  model(params) {
    return this.store.peekRecord('recipe', params.id)
  }
  setupController(controller, model) {
    super.setupController(controller, model)
    controller.recipe = model
    controller.recipeOriginal = {
      name: model.name,
      description: model.description,
      numberServings: model.numberServings,
      cookingTime: model.cookingTime
    }
  }
}
