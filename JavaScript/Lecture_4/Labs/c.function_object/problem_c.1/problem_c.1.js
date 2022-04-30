function add(num1, num2) {
  if (arguments.length < 2) throw Error("Arguments number is less two");
  if (arguments.length > 2) throw Error("Arguments number exceeds two");
  return num1 + num2;
}

add(2, 5);
