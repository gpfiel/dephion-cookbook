import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class RecipeController extends Controller {
  @service('recipe') recipeService
}