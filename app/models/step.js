import Model, { attr, belongsTo } from '@ember-data/model';

export default class StepModel extends Model {
  @attr('number') position;
  @attr('string') instructions;
  @attr('string') amountRequired;
  @belongsTo('ingredient') ingredient;
  @belongsTo('recipe') recipe;
}
