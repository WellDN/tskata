//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

//The input will be a lowercase string with no spaces.

export function capitalize(s: string): string[] {
    let s1: string = '';
    let s2: string = '';

s.split('').forEach((elem, index)=> {
    s1 += index % 2 ? elem : elem.toUpperCase();
    s2 += index % 2 ? elem.toUpperCase() : elem;
})
    return [s1, s2];
}