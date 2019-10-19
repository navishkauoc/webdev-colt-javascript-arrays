var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
    //Handle input
    if(input === "list"){
        console.log("**********")
        todos.forEach(function(todo, i){
            console.log(i + ": " + todo);
        });
        console.log("**********")
    } else if(input === "new"){
        //Ask for new todo
        var newTodo = prompt("Enter new todo");
        //Add to todos array
        todos.push(newTodo);
    }

    //Ask again for a new input
    input = prompt("What would you like to do?");
}
console.log("See you again!");

