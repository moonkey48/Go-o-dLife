
export const ADD_TODO = 'todos/ADD_TODO';
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

export const addTodo = todo => ({type:ADD_TODO, todo})

const initialState = [
    {
        id:1,
        todos:[
            집가기
        ]
    }
]
