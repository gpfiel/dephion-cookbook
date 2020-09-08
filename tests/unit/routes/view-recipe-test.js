import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | view-recipe', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:view-recipe');
    assert.ok(route);
  });
});
