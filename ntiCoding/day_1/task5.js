
const numbers = [];
for (let i = 0; i < 3; i++) {
  const input = prompt(`Enter number ${i + 1}:`);
  numbers.push(Number(input));


}

const sum = numbers[0] + numbers[1] + numbers[2];
const product = numbers[0] * numbers[1] * numbers[2];

let divisionMessage;

if (numbers[1] === 0 || numbers[2] === 0) {
  divisionMessage = "Cannot divide by zero!";
} else {
  const division = numbers[0] / numbers[1] / numbers[2];
  divisionMessage = `division of the 3 values ${numbers[0]}/${numbers[1]}/${numbers[2]} = ${division}`;
}

console.log(
  `sum of the 3 values ${numbers[0]}+${numbers[1]}+${numbers[2]} = ${sum}`
);
console.log(
  `multiplication of the 3 values ${numbers[0]}*${numbers[1]}*${numbers[2]} = ${product}`
);
console.log(divisionMessage);
