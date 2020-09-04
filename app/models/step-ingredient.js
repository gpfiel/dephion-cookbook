import Model, { attr, belongsTo } from '@ember-data/model';

export default class StepIngredientModel extends Model {
  @belongsTo('step') step;
  @belongsTo('ingredient') ingredient;
  @attr('string') amountRequired;
}
