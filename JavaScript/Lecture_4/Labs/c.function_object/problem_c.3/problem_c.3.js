const reverseArg = (...args) => args.reverse();

function reverseArg2() {
  if (arguments.length == 0) throw Error("No arguments are passed");
  return [...arguments].reverse();
}

console.log(reverseArg2(2, 5, 10, 6));
