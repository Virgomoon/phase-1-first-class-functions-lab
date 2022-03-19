//const { interfaces } = require("mocha");

// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    const newArray = [array.slice(0,2)];
    return newArray[0]
};
const returnLastTwoDrivers = function(array) {
    const newArray = [array.slice(array.length-2)];
    return newArray[0]
};
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

function createFareMultiplier(int) {
    return function() {
       return (int*int)
    };
};

const fareDoubler = fare => fare*2;

const fareTripler = fare => fare*3;

function selectDifferentDrivers(arrayOfDrivers, func) {
       return func(arrayOfDrivers);
}
