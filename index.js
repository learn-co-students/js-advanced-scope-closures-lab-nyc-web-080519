const produceDrivingRange = function(range) {
    return function(block1, block2) {
        const blockDiff = Math.abs(Number.parseInt(block1) - Number.parseInt(block2));
        const diff = range - blockDiff;
        return diff > 0 ? `within range by ${diff}` : `${Math.abs(diff)} blocks out of range`;
    };
};

const produceTipCalculator = function(tipPercentage) {
    return function(billPrice) {
        return billPrice * tipPercentage;
    };
};

const createDriver = function() {
    let itemId = 0;
    return class {
        constructor(name) {
            this.id = ++itemId;
            this.name = name;
        }
    };
};