export function List(){
    const todos=[{
        id:1,
        title:"Go to Gym",
        done:false
    },{
        id:2,
        title:"Eat",
        done:false
    },{
        id:3,
        title:"Sleep",
        done:true
    }];
    
    return (
        <div>
            <Todo todos={todos}></Todo>
        </div>
    )
}

function Todo({todos}){
    return(
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title} - {todo.done ? "Done" : "Not Done"}</li>
                ))}
            </ul>
        </div>
    )
}