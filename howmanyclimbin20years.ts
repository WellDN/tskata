//The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

function stairsIn20(stairs):number{
    return 20 * [].concat.apply([], stairs).reduce((sum, v) => sum + v, 0);
}