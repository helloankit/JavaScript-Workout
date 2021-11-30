Array.prototype.newmap = function (fc) {
    var obj = this;

    if (fc instanceof Function) {
        console.log(obj)
        let newArr = new Array(obj.length);

        for (let i = 0; i < obj.length; i++) {
            newArr.push(fc.call(obj, obj[i], i, obj));
        }
        return newArr
    }
    console.error('Expected Callback Function, Got ' + typeof fc);
    return new Error('Expected Callback Function, Got ' + typeof fc)
}


// Array.prototype.newmap = function (callbackFn) {
//     var arr = [];
//     for (var i = 0; i < this.length; i++) {
//         /* call the callback function for every value of this array and       push the returned value into our resulting array
//         */
//         arr.push(callbackFn(this[i], i, this));
//     }
//     return arr;
// }

let arr = [2, 4, 6, 8, 10];
let res = arr.newmap((x) => { x = x + 1; });
console.log(res);