import Route from '@ember/routing/route';

export default class ViewRecipeRoute extends Route {
  model(params) {
    return this.store.findRecord('recipe', params.id)
  }
  setupController(controller, model) {
    super.setupController(controller, model)
    controller.recipe = model
  }
}
