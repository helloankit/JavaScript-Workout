/**
 * var is initialized as undefined, the let and const keyword are not initialized. So * if you try to use a let variable before declaration, you'll get a Reference Error.
 * 
 * The period between entering scope and being declared where they cannot be accessed is called the Temporal Dead Zone.
 */

// console.log(a,b);
// let a; //Will throw reference error
// var b;


// Function expressions in JavaScript are not hoisted.
// functionExpr();
// let functionExpr = function(){ return 'hello world!' } //Will throw error

/**
 * Variables which are assigned without a var declaration are considered to be global variables
 */

// function fun(){
//     var a = 2;
// }
// fun();
// console.log(a); //undefined


// function fun(){
//     a = 2;
// }
// fun();
// console.log(a); //2




// var test = 1;
// function functionHoisting() {
//     test = 10;
//     return;
//     function test() {} //Due to function hosting, test will be redefined and redeclared
// }
// functionHoisting();
// console.log(test);
