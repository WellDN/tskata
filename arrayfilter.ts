//The solution would work like the following:
//
//getEvenNumbers([2,4,5,6]) // should == [2,4,6]

const getEvenNumbers = (numbersArray: number[]): number[] => {
    return numbersArray.filter(x => x % 2 === 0);
}