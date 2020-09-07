import Route from '@ember/routing/route';

export default class EditIngredientRoute extends Route {
  model(params) {
    return this.store.peekRecord('ingredient', params.id)
  }
  setupController(controller, model) {
    super.setupController(controller, model)
    controller.ingredient = model
    controller.ingredientOriginal = {
      name: model.name,
      description: model.description
    }
  }
}
