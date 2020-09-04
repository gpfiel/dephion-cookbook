import Model, { attr, hasMany } from '@ember-data/model';

export default class ReceipeModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @attr('number') numberServings;
  @attr('string') cookingTime;
  @hasMany('step') step;
}
