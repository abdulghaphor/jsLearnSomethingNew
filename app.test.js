require("./randomElement");
const learnSomethingNewFn = require("./app");

const jestSkillArr = ["Jesting", "Warwooring", "Currying"];
const randomElement = jestSkillArr.randomElement();

test(`Error handling OK`, () => {
  expect(learnSomethingNewFn(randomElement)).toMatch(/error/);
});

test(`Array pushed OK`, () => {
  const result = learnSomethingNewFn(jestSkillArr);
  expect(result.includes(randomElement)).toBeTruthy();
});
