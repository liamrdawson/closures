/*
    The problem we have is that there are two function which are each updating the same global variable.
    What can we do about this wthout creating a new variable to keep track of each time a function is created with the same type of output?
*/


var count = 0;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
    count += 1;
    return count + ' dogs';
}

