import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardRecipeComponent extends Component {
  @service('ingredient') ingredientService

  @action removeIngredient(ingredient) {
    this.ingredientService.remove(ingredient)
  }
}
