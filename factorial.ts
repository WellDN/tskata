//(factorial is the number x the amount of multiply he received. ex: the factorial of 3 is 6 because he pass through 3 multiplies ex: 0x1, 1x1,1x2,2x2)

export function factorial(n: number):number {
    if (n <= 1) return 1;
    return n * factorial(n-1);
}