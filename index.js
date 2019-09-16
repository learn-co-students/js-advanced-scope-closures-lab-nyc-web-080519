const produceDrivingRange = function(range) {
    return function(num1, num2){
        const diff = parseInt(num2) - parseInt(num1);
        const range2 = (range - diff);
        if (range2 < 0) {
            return `${(range2) * -1} blocks out of range`;
        } else {
            return `within range by ${range2}`;
        }
    };
}

const produceTipCalculator = function(percent) {
    return function(amount) {
        return percent * amount;
    };
}

// we need to create a function that returns a class;
// we then need to set a constructor for name and set
// the id to increment by 1 and set the name to name;
// we also need to set driverId to 0 before we set the class;
function createDriver() {
    let driverId = 0
    return class {
        constructor(name){
            this.id = driverId++;
            this.name = name;
        };
    };
}