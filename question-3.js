const array = [1, 2, 2, 3, 4, 4, 5, 8,0,0,5,4];
const uniqueArray = [];
const seen = {};

array.forEach(value => {
  if (!seen[value]) {
    uniqueArray.push(value);
    seen[value] = true;
  }
});

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 8, 0]

///////////////////////////////
const input = "I am in India. I live in the city.";
const output = input.replace(/\bin\b/g, 'with');
console.log(output); // Output: "I am with India. I live with the city."
