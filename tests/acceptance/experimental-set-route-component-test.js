import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | experimental set route component', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /foo', async function (assert) {
    await visit('/foo');

    assert.dom('#foo-route-component').exists();
  });

  test('visiting /nested/leaf', async function (assert) {
    await visit('/nested/leaf');

    assert.dom('#leaf-route-component').exists();
    assert.dom('#leaf-route-model').hasText('the leaf route model');
  });

  test('visiting /legacy/old-route', async function (assert) {
    await visit('/legacy/old-route');
    assert.dom('#old-route-template').exists();
  });
});
