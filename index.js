// Code your solution in this file!
function distanceFromHqInBlocks(pickupSpot) {
    if (pickupSpot <= 42) {
        return 42 - pickupSpot
    }
    else return pickupSpot - 42

}



function distanceFromHqInFeet(pickupSpot) {
    if (pickupSpot <= 42) {
        return (42 - pickupSpot) * 264

    }
    else return (pickupSpot - 42) * 264
}

function distanceTravelledInFeet(start, destination) {
    if (start <= destination) {
        return (destination - start) * 264
    }
    return (start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    const fareInFeet = distanceTravelledInFeet(start, destination);

    if (fareInFeet < 400) {
        return 0
    }
    else if (fareInFeet < 2000) {
        return (fareInFeet - 400) * 0.02
    }
    else if (fareInFeet < 2500) {
        return 25
    }
    else return 'cannot travel that far'

}