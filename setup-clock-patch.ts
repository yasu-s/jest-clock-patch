import * as mockdate from 'mockdate';

// jasmine.clock().mockDate defined
jasmine.clock = () => {
  return {
    mockDate: (date) => {
      mockdate.set(date);
    }
  } as any;
};

beforeEach(() => {
  mockdate.reset();
});
