let numbers = [];

while (true) {
  const userIn = prompt("Enter a valid number");
  const number = parseInt(userIn);
  if (isNaN(number)) continue;
  numbers.push(number);
  const sum = numbers.reduce((sum, number) => sum + number, 0);
  if (number == 0 || sum > 100) {
    alert(`The sum of numbers is ${sum}`);
    break;
  }
}
