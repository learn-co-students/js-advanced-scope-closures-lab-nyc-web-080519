function produceDrivingRange(blockRange) {
    return function(start, end) {
        const distance = Math.abs(parseInt(start) - parseInt(end));
        if (distance <= blockRange) {
            return `within range by ${blockRange - distance}`
        }
        else {
            return `${distance - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(tipPercentage) {
    return function(fare) {
        return fare * tipPercentage;
    }
}

function createDriver() {
    let ItemId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++ItemId;
        }
    }
}