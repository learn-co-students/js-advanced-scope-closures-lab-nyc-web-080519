        //instantiate the function that will return the new function we want and establish a range
function produceDrivingRange(blockRange) {
        // give the return statement for the new function: has a start and end point in form "___th"
    return function (startingBlock, endingBlock) {
        // get the integer equivilent for each range
        let start = parseInt(startingBlock);
        let end = parseInt(endingBlock);
        //get the real distance (in absolute value) and the difference between the range limit and desired distance
        let distanceToTravel = Math.abs(end - start);
        let difference = blockRange - distanceToTravel;
        // depending on the difference, give an output
        if (difference > 0) {
            return `within range by ${difference}`
        } else {
            return `${Math.abs(difference)} blocks out of range`
        }
    }
}


        // instantiate the function that will calculate the tip: need a starting percentage
function produceTipCalculator(percentage) {
        // give the return statement for the new function: need a total fare
    return function (rideFare) {
        // give the total tip
        return rideFare * percentage;
    }
}

        // instantiate the function that will create a driver obj
function createDriver() {
        // you need a class ID, but it needs to be within the function in order to keep the variable private
    let driverId = 0
        // get ready to return an instance of the class
    return class {
        // build the instance
        constructor(name) {
            this.id = ++driverId
            this.name = name
        }
    }
}