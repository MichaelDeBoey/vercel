const path = require('path');
const { deployAndTest } = require('../../utils');

describe(`${__dirname.split(path.sep).pop()}`, () => {
  it('should deploy and pass probe checks', async () => {
    await require('../../utils').normalizeReactVersion(path.join(__dirname, 'apps/app'));
    await deployAndTest(__dirname);
  });
});
