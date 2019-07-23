/*
    The problem we have is that there are two function which are each updating the same global variable.
    What can we do about this wthout creating a new variable to keep track of each time a function is created with the same type of output?

    CLOSURES are functions with access to their own private variables. 
    You can create as many closures with matchin variable names as you want.

    All variables declared within the outer function are visible to the inner function even though both are hidden from the global scope.

    The problem now is that every time we call countBirds or countDogs then we're resetting the conut variable to 0.
*/


function makeBirdCounter() {
    let count = 0;
    return function() {
        count++;
        return `${count} birds`
    }
}

function countDogs() {
    let count = 0;
    count++;
    return `${count} dogs`
}
