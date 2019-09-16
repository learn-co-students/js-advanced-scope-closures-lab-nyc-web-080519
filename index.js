const produceDrivingRange = function (blockRange) {
  return function (pickup, dropoff) {
    let blocks = ""
    if (pickup > dropoff) {
      blocks = parseInt(pickup) - parseInt(dropoff) - blockRange;
    } else {
      blocks = parseInt(dropoff) - parseInt(pickup) - blockRange;
    }   // Ends IF to see how many total blocks
    if ( blocks >= 0 ) {
      return `${blocks} blocks out of range`;
    } else {
      return `within range by ${blocks * -1}`;
    } // Ends IF to print over/under
  }  // Ends Return function
}

const produceTipCalculator = function (tip_perc) {
  return function (fareTotal) {
    return fareTotal * tip_perc;
  }  // Ends Return function
}

//createDriver is a function that returns a Driver class. The class has reference
//  to a driverId that is incremented each time a new driver is created. The rest 
//  of the code base does not have access to driverId.

function createDriver() {
  let ItemId = 0;
  // return the class
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.id = ++ItemId;
    }
  };
}
 