describe('Date', () => {
  it('now', () => {
    // setup
    jasmine.clock().mockDate(new Date(2019, 1, 1));

    // exercise
    const actual = Date.now();

    // verify
    expect(actual).toBe(new Date(2019, 1, 1).valueOf());
  });

  it('new Date()', () => {
    // setup
    jasmine.clock().mockDate(new Date(2019, 2, 1));

    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).toBe(new Date(2019, 2, 1).valueOf());
  });

  it('mockDate reset check', () => {
    // exercise
    const actual = new Date();

    // verify
    expect(actual.valueOf()).not.toBe(new Date(2019, 2, 1).valueOf());
  });
});
