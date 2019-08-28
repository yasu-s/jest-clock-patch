var mockDate = require('mockdate');

// init
mockDate.reset();

// jasmine.clock().mockDate defined
jasmine.clock = () => {
  return {
    mockDate: (date) => {
      mockDate.set(date);
    },
    uninstall: () => {
      mockDate.reset();
    }
  };
};
