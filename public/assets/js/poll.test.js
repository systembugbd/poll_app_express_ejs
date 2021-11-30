const rewire = require('rewire');
const poll = rewire('./poll');
const createNewOptions = poll.__get__('createNewOptions');
// @ponicode
describe('createNewOptions', () => {
  test('0', () => {
    let result = createNewOptions();
    expect(result).toMatchSnapshot();
  });
});
