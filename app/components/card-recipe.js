import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardRecipeComponent extends Component {
  @service('recipe') recipeService
  @service router;

  @action removeRecipe(recipe) {
    this.recipeService.remove(recipe)
  }

  @action editRecipe(recipe) {
    this.router.transitionTo('edit-recipe', recipe.id)
  }

  @action viewRecipe(recipe) {
    this.router.transitionTo('view-recipe', recipe.id)
  }
}
