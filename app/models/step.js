import Model, { attr, hasMany } from '@ember-data/model';

export default class StepModel extends Model {
  @attr('number') position;
  @attr('string') instructions;
  @hasMany('step-ingredient') stepIngredient;
}
