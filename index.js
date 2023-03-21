// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return distance > 42 ? distance - 42 : 42 - distance
  }

function distanceFromHqInFeet(distance) {
    return (distance > 42 ? distance - 42 : 42 - distance)*264
}



function distanceTravelledInFeet(start, destination) {
    let distance = start + destination
    if (destination - start > 0) {
    return (destination - start) *264 
    } else {
        return (start - destination) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        let num = (distance - 400) * 0.02
        return parseFloat(num)
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else 
        return "cannot travel that far"
    }


console.log(calculatesFarePrice(34,32))