var colors = ["red", "orange", "yellow", "green"];

colors.forEach(function(giveColor){
    console.log("Inside the forEach " + giveColor);
})

function printColors(color){
    console.log("********");
    console.log(color)
    console.log("********");
}

colors.forEach(printColors);