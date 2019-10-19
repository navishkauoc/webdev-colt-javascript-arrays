function printReverse(oriArray){
    var num = oriArray.length;
    for(var i=0; i<= oriArray.length; i++){
        console.log(oriArray[num]);
        num -= 1;
    }
}

printReverse([1, 2, 3]);

function isUniform(testArray){
    var firstElement = testArray[0];
    for(var i=1; i<=testArray.length-1; i++){
        if(firstElement === testArray[i]){
            console.log(true);
        } else{
            console.log(false);
        } 
    }
}

isUniform([1, 1, 5]);