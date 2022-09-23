//try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionsOp(a: number, b: number, c: number): number{
    const one = a * (b + c);
    const two = (a + b) * c;
    const three = a * b * c;
    const four = a + b + c;
    return Math.max(one, two, three, four);
}