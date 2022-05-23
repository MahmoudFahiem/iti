import { lg } from "./helpers.js";

// Problem A
function* fibGen(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibGen(5);

lg("Problem A:");
lg(fib.next());
lg(fib.next());
lg(fib.next());
lg(fib.next());
lg(fib.next());
lg(fib.next());

// Problem B
function* fibGen2(n) {
  let [a, b] = [0, 1];
  while (1) {
    if (a > n) return;
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib2 = fibGen2(8);

lg("Problem B:");

lg(fib2.next());
lg(fib2.next());
lg(fib2.next());
lg(fib2.next());
lg(fib2.next());
lg(fib2.next());
lg(fib2.next());
lg(fib2.next());
