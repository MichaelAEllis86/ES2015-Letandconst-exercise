// In this exercise, you’ll refactor some ES5 code into ES2015.

//#1

// ES5 Global Constants
// var PI = 3.14;
// PI = 42; // stop me from doing this!

//refactor for ES2015
const PI=3.14

//Quiz!

//What is the difference between var and let?

// var and let are similar but have some key differences! Both can be used to declare variables that we might want to update or change later! However, let is block scoped while var is function scoped. This means that you can declare a variable within a code block using let and have it localized to that code block (such as after an if statement or after a loop etc). It futher means that you could use this variable multiple times in different code blocks without effecting said variable outside that specific code block. Let also differs from var in that it can be reassigned but not redeclared! Var can be reassigned and redeclared. Let will also not effect the window object in the console, meaning you don't risk losing window object functionality if you use let and overwrite a varible within the window object.

// What is the difference between var and const?

// Const can not be reassigned or redeclared unlike var which can be both reassigned and redeclared. Const, like let, is also block scoped unliked var which is function scoped. Due to these properties const works well for reference types like arrays and objects where it is rare to need to update the reference itself or variables that will not require updating. While the reference in memory for an array or object would remain constant using const, arrays and objects and still be updated using built-in methods like push or pop.


// What is the difference between let and const?

// The primary difference between let and const is the ability of let to be reassigned. Const cannot be reassigned or redeclared. Both have similarities also such as not effecting the window object, having block scope, and being ways you can declare a variable! 

// What is hoisting?

// hoisting has to do with initialization/compliation of code invovling variables declared using var. When var is used, the variables are run first which can lead to some unexpected behavior in the code. Let and const this behavior doesn't exist! Instead the code is run in the normal order. 

// Springboard answer for hoisting for my further reference

// It’s the way that we explain how the JS compiler works. Variables are lifting or “hoisted” to the top of the scope they are declared in. When using var, you can access the variable name and it’s undefined value before it is used later on.

//Function declarations are also hoisted and can be invoked “before” they are defined in a codebase.