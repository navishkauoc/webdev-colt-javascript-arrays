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
        console.log("Added Todo");
    } else if(input === "delete"){
        //Ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        //Delete that todo
        todos.splice(index,1);
        console.log("Deleted Todo");
    }

    //Ask again for a new input
    input = prompt("What would you like to do?");
}
console.log("See you again!");

