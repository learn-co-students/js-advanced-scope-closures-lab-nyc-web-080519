function produceDrivingRange(range){
    return function (start, end){
        let s = parseInt(start);
        let e = parseInt(end);
        let distanceToTravel = Math.abs(e - s);
        let inrange = range - distanceToTravel;

        if (inrange > 0) {
            return `within range by ${inrange}`
        } else {
            return `${Math.abs(inrange)} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage) {
    return function (price) {
        return price * percentage
    };
}
function createDriver() {
    let driverId = 0
    return class {
        constructor(name) {
            this.id = ++driverId
            this.name = name
        };
    };
}