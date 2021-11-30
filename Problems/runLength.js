/* Encoding through runLength compression algorithm */
const encodeRunLength = (str) => {
  let output = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      output += count + str[i];
      count = 1;
    }
  }

  return output;
};

console.log("Encoded String is " + encodeRunLength("aaaabbbcca"));

/* Decoding of the encoded string */
const decodeRunLength = (str) => {
  let output = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(Number(str[i]))) {
      for (let itr = 1; itr <= Number(str[i]); itr++) {
        output += str[i + 1];
      }
      i++;
    }
  }
  return output;
};

console.log("Decoded String is " + decodeRunLength("4a3b2c1a"));
