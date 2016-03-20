//
// (C) Aleksey V Malyshev
// aleksey.malyshev@mail.ru
//
// JavaScript (ES6) solution for Project Euler problem #35
// 
// To run type:
// time node euler35-es6.js < euler35_in.txt
//

"use strict";

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', main)


function getRotations(i, r) {
  if (i >= 10) {
    let p = [];
    while (i > 0) {
      p.push(i % 10);
      i = Math.floor(i / 10);
    }

    for (let i = 1; i < p.length; ++i) {
      let multi = 1;
      let r2 = 0;

      for (let j = i; j < i + p.length; ++j) {
        r2 += p[j % p.length] * multi;
        multi *= 10;
      }

      r.push(r2);
    }
  }
}

function isPrime(p) {
  let prime = true;
  if (p < 2) {
    prime = false;
  }
  if (p % 2 == 0 && p != 2) {
    prime = false;
  }
  else if (p > 2) {
    for (let i = 3; i <= Math.sqrt(p); i += 2) {
      if (p % i == 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
}

function main(inp) {
  let n = Number(inp);

  let primes = [];
  if (n > 2) {
    primes.push(2);
  }

  for (let pc = 3; pc <= n; pc += 2) {
    let r = [];
    if (isPrime(pc)) {
      getRotations(pc, r);
      let cp = true;
      for (let c of r) {
        if (!isPrime(c)) {
          cp = false;
          break;
        }
      }

      if (cp) {
        primes.push(pc);
      }
    }
  }

  console.log(primes.length);
  process.exit();
}
