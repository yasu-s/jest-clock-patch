var mockDate = require('mockdate');

// jasmine.clock().mockDate defined
jasmine.clock = () => {
  return {
    mockDate: (date) => {
      mockDate.set(date);
    }
  };
};

beforeEach(() => {
  mockDate.reset();
});
