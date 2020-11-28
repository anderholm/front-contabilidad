import {combineReducers} from 'redux'

const rootReducer = (
    state={
        token: null,
        roles: null,
    },
    action
)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                token: action.token,
                roles: action.roles
            }
        default:
            return state
    }
}

export default combineReducers({
    index: rootReducer,
  });