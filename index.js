// produceDrivingRange() - Calculates whether a given trip is within range.For example,produceDrivingRange(10) returns a function that will take two strings as arguments and returns a message stating whether the trip is in range.If foo = produceDrivingRange(10), then foo('12th', '15th') would return "within range by 7" and foo('12th', '30th') would return "8 blocks out of range".We recommend referencing the test / indexTest.js for more details.

function produceDrivingRange(trip){
    return function(string1, string2){
      firstBlock = parseInt(string1)
      secondBlock = parseInt(string2) 
      range = Math.abs(firstBlock - secondBlock)
      if(range > trip){
        return `${Math.abs(trip - range)} blocks out of range`
      } else {
        return `within range by ${trip - range}`
      }
    }
  }
  
  // produceTipCalculator() - Returns a function that then calculates a tip.For example,produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare.produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.
  
  function produceTipCalculator(percentage){
    return function(fare){
      return percentage * fare
    }
  }
  
  
  //createDriver is a function that returns a Driver class.The class has reference to a driverId that is incremented each time a new driver is created.The rest of the code base does not have access to driverId.
  
  function createDriver(){
    let DriverId = 0; 
    return class {
      constructor(name) {
        this.name = name; 
        this.id = ++DriverId; 
      }
    }
  }