var getSum = function(oneP, twoP){
    return { type: 'SUM', a:oneP, b:twoP };
}
var getDifference = function(oneP, twoP){
    return { type: 'DIFFERENCE',a:oneP, b:twoP };
}
var getI = function(oneP, twoP){
    return { type: 'I',a:oneP, b:twoP };
}
var getE = function(oneP, twoP){
    return { type: 'E',a:oneP, b:twoP };
}
