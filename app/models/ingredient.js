import Model, { attr, hasMany } from '@ember-data/model';

export default class IngredientModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @hasMany('step-ingredient') stepIngredient;
}
