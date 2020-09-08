import Route from '@ember/routing/route';

export default class ViewRecipeRoute extends Route {
  model(params) {
    return this.store.peekRecord('recipe', params.id)
  }
  setupController(controller, model) {
    super.setupController(controller, model)
    controller.recipe = model
  }
}
