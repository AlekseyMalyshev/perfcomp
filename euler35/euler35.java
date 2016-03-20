//
// (C) Aleksey Malyshev
//
// Java solution for Project Euler problem #35
// 
// Type to compile:
// javac euler35.java
// 
// To run type:
// time java euler35 < euler35_in.txt
//

import java.util.Scanner;
import java.util.Vector;

public class euler35 {
  private static void getRotations(int p, Vector<Integer> r) {
    int rad = 10;
    if (p >= rad) {
      Vector<Integer> pr = new Vector<>();
      while (p > 0) {
        pr.addElement(p % rad);
        p /= rad;
      }

      for (int i = 1; i < pr.size(); ++i) {
        int multi = 1;
        int r2 = 0;

        for (int j = i; j < i + pr.size(); ++j) {
          r2 += pr.get(j % pr.size()) * multi;
          multi *= rad;
        }

        r.addElement(r2);
      }
    }
  }

  private static boolean isPrime(int p) {
    boolean prime = true;
    if (p < 2) {
      prime = false;
    }
    if (p % 2 == 0 && p != 2) {
      prime = false;
    }
    else if (p > 2) {
      for (int i = 3; i <= Math.sqrt(p); i += 2) {
        if (p % i == 0) {
          prime = false;
          break;
        }
      }
    }
    return prime;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();

    Vector<Integer> primes = new Vector<>();
    if (n > 2) {
      primes.addElement(2);
    }

    for (int pc = 3; pc <= n; pc += 2) {
      Vector<Integer> r = new Vector<>();
      if (isPrime(pc)) {
        getRotations(pc, r);
        boolean cp = true;
        for (int c: r) {
          if (!isPrime(c)) {
            cp = false;
            break;
          }
        }

        if (cp) {
          primes.addElement(pc);
        }
      }
    }

    System.out.println(primes.size());
  }
}

