const produceDrivingRange = function(range) {
    return function(street1, street2) {
        result = Math.abs(parseInt(street1) - parseInt(street2));
        if (range - result > 0) {
            return `within range by ${range - result}`
        }
        else {
            return `${Math.abs(range - result)} blocks out of range`;
        }
    }
};

const produceTipCalculator = function(tipPercentage) {
    return function(fare) {
        return fare * tipPercentage;
    }
};

const createDriver = function() {
    let DriverId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}