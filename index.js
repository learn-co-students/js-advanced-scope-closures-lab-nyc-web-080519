function produceDrivingRange(range) {
    return function (str1, str2) {
        let num = Math.abs(parseInt(str2) - parseInt(str1));
        let difference = range - num;

        if (difference > 0) {
            return `within range by ${difference}`;
        } else {
            return `${Math.abs(difference)} blocks out of range`;
        };
    };
};

function produceTipCalculator(perfect) {
    return function (fare) {
        return fare * perfect;
    };
};

function createDriver() {
    let driverId = 0;

    return class {
        constructor(name) {
          this.name = name;
          this.id = ++driverId;
        }
    };
};