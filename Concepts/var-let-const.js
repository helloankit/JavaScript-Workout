/**
 * VAR :
 * The scope of a variable declared with var is its current execution context, which is either the enclosing function or, for variables declared outside any function, global.
 */


/**
 * LET :
 * let allows to declare variables that are limited in scope to the block, statement, or expression on which it is used. This is unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope.
 */


function fun(){
    let x = 1;
    if(true){
        let y = 2;
        var z = 3;
        let x = 4; //Can be redeclared
        console.log(x); //4
    }

    // console.log(y); //Reference Error - because it is block scoped
    console.log(z); //3
}

// Uncomment to run
// fun();




/**
 * const declarations are block scoped. It cannot be updated or re-declared. It must be initialized at the time of declaration.
 While a const object cannot be updated, the properties of this objects can be updated.
 */

// const a = {name:'ankit'}
// console.log(a.name);
// a.name = "Suhani";
// console.log(a.name);


//Const will hoist to the top, but will remain uninitialized.
//Thus accessing them without initialization will result in a reference error
// if (true) {
//     console.log(myName); 
//     const myName = 'abc'; // Reference Error
// }






//Scope determines the accessibility (visibility) of variables.

//The environment in which our code is running is Execution context
//Types - Global Execution Context, Functional Execution Context, Eval Function Execution Context

// It is the ability of an inner function to access the scope of an outer function in which it is defined.

// A closure is the combination of a function and the lexical environment within which that function was declared. 

//Scope refers to the visibility of variables and context refers to the value of this in the same scope.

//this takes the reference of the immediate object calling the function

const ad = 'ssas'
ad[1]='d';
console.log(ad[1]='d');