/*
    The problem we have is that there are two function which are each updating the same global variable.
    What can we do about this wthout creating a new variable to keep track of each time a function is created with the same type of output?

    CLOSURES are functions with access to their own private variables. 
    You can create as many closures with matchin variable names as you want.

*/


let birds = 3;

function countBirds() {
  count += 1;
  return count + ' birds';
}

function countDogs() {
    let dogs = 8;
    console.log(dogs);  //8
    console.log(birds); //3
}
console.log(dogs);  //undefined
console.log(birds); //3
