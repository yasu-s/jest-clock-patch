import * as moment from 'moment';
import * as mockdate from 'mockdate';

describe('moment', () => {
  it('now', () => {
    // setup
    mockdate.set(new Date(2019, 1, 1));

    // exercise
    const actual = moment();

    // verify
    expect(actual.valueOf()).toBe(new Date(2019, 1, 1).valueOf());
  });
});
