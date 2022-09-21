//Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where 
//the first one is the total weight of team 1, and the second one is the total weight of team 2.


 function rowWeights(arr: number[]): [number, number] {
    let even: number = arr.reduce((sum, x, i) => sum + (!(i % 2)? x: 0), 0);
    let odd: number = arr.reduce((sum, x, i) => sum + (i % 2? x: 0), 0);
    return [even, odd]
}