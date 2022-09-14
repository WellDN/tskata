//Common denominators
//
//You will have a list of rationals in the form
//
//{ {numer_1, denom_1} , ... {numer_n, denom_n} } 
//or
//[ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
//or
//[ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
//where all numbers are positive ints. You have to produce a result in the form:
//
//(N_1, D) ... (N_n, D) 
//or
//[ [N_1, D] ... [N_n, D] ] 
//or
//[ (N_1', D) , ... (N_n, D) ] 
//or
//{{N_1, D} ... {N_n, D}} 
//or
//"(N_1, D) ... (N_n, D)"
//depending on the language (See Example tests) in which D is as small as possible and
//
//N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
//Example:
//convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
//Note:
//Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.
//
//Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.
//
//Note for Bash:
//input is a string, e.g "2,4,2,6,2,8" output is then "6 12 4 12 3 12"

export const convertFrac = (lst: [number, number][]): string => {
    const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
    const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
    const cd = lst.reduce((a, [_, d]) => lcm(d, a), 1);
    const lcd = lst.reduce((d, [a, c]) => gcd(d, (a * cd) / c), cd);
    return lst.map(([n, d]) => `(${(n * cd) / d / lcd},${cd / lcd})`).join('');
  }