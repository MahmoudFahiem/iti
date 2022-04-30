const add = (...args) => {
  if (args.length == 0) throw Error("No arguments passed to the function");
  args.forEach((arg) => {
    if (isNaN(parseInt(arg))) throw Error(`${arg} is not a number`);
  });
  return args.reduce((sum, num) => (sum += num), 0);
};

add(2, 5);
add();
