export const LOGIN_USER = 'user/LOGIN_USER';
export const LOGOUT_USER = 'user/LOGOUT_USER';
export const SIGNUP_USER = 'user/SIGNUP_USER';
export const UPDATE_USER = 'user/UPDATE_USER';


export const loginUser = (user) => (
    {
        type:LOGIN_USER,
        payload:{
            ...user
        }
    }
)
export const signupUser = (uid,email,name)=>({
    type:SIGNUP_USER,
    payload:{
        uid,
        email,
        name,
    }
})
export const logoutUser = ()=>({
    type:LOGOUT_USER
})
export const updateUser = (user) => ({
    type:UPDATE_USER,
    payload: {...user}
})

const initialState = {
    uid: '',
    nickname: '',
    email: '',
    purpose: '',
    test: '',
    toDoList: '',
    day: 0,
    testDay: 0,
}
// uid: state.uid,

export const authReducer = (state=initialState, action)=>{
    switch(action.type){
        case LOGIN_USER:
            return {
               ...action.payload
            }
        case LOGOUT_USER:
            return {
                uid: '',
                nickname: '',
                email: '',
                purpose: '',
                test: '',
                toDoList: '',
                day: 0,
                testDay: 0,
            }
        case SIGNUP_USER:
            return {
                uid: action.payload.uid,
                nickname: action.payload.name,
                email: action.payload.email,
                purpose: '',
                test: '',
                toDoList: '',
                day: 0,
                testDay: 0,
            }
        case UPDATE_USER:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

