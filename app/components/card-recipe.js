import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardRecipeComponent extends Component {
  @service('recipe') recipeService

  @action removeRecipe(recipe) {
    this.recipeService.remove(recipe)
  }
}
