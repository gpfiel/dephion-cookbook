import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CardIngredientComponent extends Component {
  @service router;

  @service('ingredient') ingredientService

  @action removeIngredient(ingredient) {
    this.ingredientService.remove(ingredient)
  }

  @action editIngredient(ingredient) {
    this.router.transitionTo('edit-ingredient', ingredient.id)
  }
}
