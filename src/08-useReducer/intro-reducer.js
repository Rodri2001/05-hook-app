

console.log('Nashe')

const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}]


const todoReducer = (state = initialState, action = {}) => {

    if (action.type === '[Todo] add todo') {
        return [...state, action.payload]
    }
    return state
}

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Poder',
    done: false,
}
// Actions create 
const addTodoAction = {
    type: '[Todo] add todo',
    payload: newTodo
}

let todos = todoReducer()

todos = todoReducer(todos, addTodoAction)

console.log(todos)