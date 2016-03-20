//
// (C) Aleksey V Malyshev
// aleksey.malyshev@mail.ru
//
// C++ solution for Project Euler problem #35
// 
// Type to compile:
// 
// -- no optimization:
// g++ euler35.cpp -o euler35
// 
// -- full optimization:
// g++ euler35.cpp -o euler35 -O3
// 
// To run type:
// time ./euler35 < euler35_in.txt
//

#include <iostream>
#include <vector>
#include <set>
#include <cmath>

using namespace std;

void getRotations(int i, vector<int>& r) {
  const int rad = 10;
  if (i >= rad) {
    vector<int> p;
    while (i > 0) {
      p.push_back(i % rad);
      i /= rad;
    }

    for (int i = 1; i < p.size(); ++i) {
      int multi = 1;
      int r2 = 0;

      for (int j = i; j < i + p.size(); ++j) {
        r2 += p[j % p.size()] * multi;
        multi *= rad;
      }

      r.push_back(r2);
    }
  }
}

bool isPrime(int p) {
  bool prime = true;
  if (p < 2) {
    prime = false;
  }
  if (p % 2 == 0 && p != 2) {
    prime = false;
  }
  else if (p > 2) {
    for (int i = 3; i <= sqrt(p); ++++i) {
      if (p % i == 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
}

int main() {
  int n;
  cin >> n;

  vector<int> primes;
  if (n > 2) {
    primes.push_back(2);
  }

  for (int pc = 3; pc <= n; ++++pc) {
    vector<int> r;
    if (isPrime(pc)) {
      getRotations(pc, r);
      bool cp = true;
      for (int i = 0; i < r.size(); ++i) {
        if (!isPrime(r[i])) {
          cp = false;
          break;
        }
      }

      if (cp) {
        primes.push_back(pc);
      }
    }
  }

  cout << primes.size() << endl;

  return 0;
}
