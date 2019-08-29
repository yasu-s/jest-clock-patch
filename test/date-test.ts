import * as mockdate from 'mockdate';

describe('Date', () => {
  it('now', () => {
    // setup
    mockdate.set(new Date(2019, 1, 1));

    // exercise
    const actual = Date.now();

    // verify
    expect(actual).toBe(new Date(2019, 1, 1).valueOf());
  });

  it('new Date()', () => {
    // setup
    mockdate.set(new Date(2019, 1, 1));

    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).toBe(new Date(2019, 1, 1).valueOf());
  });

  it('mockdate reset check', () => {
    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).not.toBe(new Date(2019, 1, 1).valueOf());
  });
});
