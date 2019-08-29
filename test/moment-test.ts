import * as moment from 'moment';

describe('moment', () => {
  it('now', () => {
    // setup
    jasmine.clock().mockDate(new Date(2019, 1, 1));

    // exercise
    const actual = moment();

    // verify
    expect(actual.valueOf()).toBe(new Date(2019, 1, 1).valueOf());
  });
});
