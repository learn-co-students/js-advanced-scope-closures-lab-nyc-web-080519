function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    let givenBlockRange = Math.abs(parseInt(block1) - parseInt(block2))
    if (givenBlockRange <= blockRange) {
      return `within range by ${blockRange - givenBlockRange}`
    }
    else {
      return `${givenBlockRange - blockRange} blocks out of range`
    };
  };
};

function produceTipCalculator(fare) {
  return function(tip) {
    return fare*tip;
  };
};

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    };
  };
};