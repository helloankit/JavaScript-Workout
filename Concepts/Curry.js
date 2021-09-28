
/**
 * A function returing another function and that will inturn return another one.
 */
function curriedMultiply(x){
    return function y(y){
        return function z(z){
            return x*y*z;
        }
    }
}
console.log(curriedMultiply(3)(4)(5));



/**
 * Curry Function will take a function as the first argument (f), and then
 * after capturing the remaining arguments, it will call the 'f' with all arguments
 */
function curry(f){
    return function(a){
        return function(b){
            if(f!==undefined && typeof f === 'function'){
                return f(a,b);   
            }
        }
    }
}

function add(a,b){
    return a + b;
}

let kajuCurry = curry(add);

console.log(kajuCurry(2)(3));