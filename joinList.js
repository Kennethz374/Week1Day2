const joinList = function(arrayOfData) {
  let modifiedArr = arrayOfData.toString();
  let finalData = modifiedArr.replace(/,/g, ", ");
  return finalData;
};
const conceptList = ["gists", "types", "operators", "iteration, problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
