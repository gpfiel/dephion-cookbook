import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class IngredientController extends Controller {
  @service('ingredient') ingredientService
}