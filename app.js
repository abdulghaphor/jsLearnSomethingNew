const skillArr = require("./data");
// Create a function that takes an array of skills as a parameter.
// Then returns an array that combines a predefined array called skillArr
// with the parameter array.
// Note: make sure an error is returned when a string is used as parameter.
// Keywords: for loop, forEach method, array destructuring

const learnSomethingNewFn = (paramArr) => {
  if (!Array.isArray(paramArr)) {
    return "error: parameter not array";
  }
  const newSkillArr = skillArr;
  for (let i = 0; i < paramArr.length; i++) {
    newSkillArr.push(paramArr[i]);
  }
  return newSkillArr;
};

module.exports = learnSomethingNewFn;
