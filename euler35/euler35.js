//
// (C) Aleksey Malyshev
//
// JavaScript solution for Project Euler problem #35
// 
// To run type:
// time node euler35.js < euler35_in.txt
//

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', main)


function getRotations(i, r) {
  if (i >= 10) {
    var p = [];
    while (i > 0) {
      p.push(i % 10);
      i = Math.floor(i / 10);
    }

    for (var i = 1; i < p.length; ++i) {
      var multi = 1;
      var r2 = 0;

      for (var j = i; j < i + p.length; ++j) {
        r2 += p[j % p.length] * multi;
        multi *= 10;
      }

      r.push(r2);
    }
  }
}

function isPrime(p) {
  var prime = true;
  if (p < 2) {
    prime = false;
  }
  if (p % 2 == 0 && p != 2) {
    prime = false;
  }
  else if (p > 2) {
    for (var i = 3; i <= Math.sqrt(p); i += 2) {
      if (p % i == 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
}

function main(inp) {
  var n = Number(inp);

  var primes = [];
  if (n > 2) {
    primes.push(2);
  }

  for (var pc = 3; pc <= n; pc += 2) {
    var r = [];
    if (isPrime(pc)) {
      getRotations(pc, r);
      var cp = true;
      for (var c of r) {
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
