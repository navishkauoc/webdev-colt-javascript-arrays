function printReverse(oriArray){
    var num = oriArray.length;
    for(var i=0; i<= oriArray.length; i++){
        console.log(oriArray[num]);
        num -= 1;
    }
}

printReverse([1, 2, 3]);