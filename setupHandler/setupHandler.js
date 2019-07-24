var buttons = document.getElementsByTagName('button');

/**
 * ES6 has addressed the need for closures with the introduction of let and const.
 * The let keyword creates a new block level scope through each iteration of the loop.
 * 
 * A var in a for loop is a global variable, because var can only have two kinds of scope: 
 * 		global scope, 
 * 		and function level scope. 
 * A for loop is not a function, so the var has global scope in a for loop.
 * 
 * let can have three kinds of scope: global, function level, and block level. 
 * Block level scope is scope limited to any block of code (anything surrounded by {}).
 * A for loop is a block, so a let variable has local scope in the for loop.
 */

for(let i = 0; i < buttons.length; i += 1) {
	let button = buttons[i];
	let buttonName = button.innerHTML;
	button.addEventListener('click', function() {
		console.log(buttonName);
	});
}
