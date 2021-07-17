// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  
    
    return drivers.slice(0,2)
}
// console.log(returnFirstTwoDrivers(["ASd","ASdff","asdfee"]))

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

// console.log(returnLastTwoDrivers([1,2,3,4,5,6,7,8]))

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function(value){
       return multiplier * value
    }
}

const fareDoubler = function(fares){
    return fares * 2
}

function fareTripler(fares){
    return fares * 3
}

function selectDifferentDrivers(arrayOfDrivers, fuction){
    if(fuction === returnFirstTwoDrivers){
        return arrayOfDrivers.slice(0,2)
    }else if(fuction === returnLastTwoDrivers){
        return arrayOfDrivers.slice(-2)
    }
}