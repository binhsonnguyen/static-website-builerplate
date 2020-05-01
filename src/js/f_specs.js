import { f } from './f'

QUnit.test('hello test', function (assert) {
  assert.equal(f(), 'Hello world!', 'Passed!')
})
