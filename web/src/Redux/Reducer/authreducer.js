import { LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_SUCCESS,REGISTER_FAIL } from "../Type/type";

const initialstate = {
    loading : true,
    user: null,
    isAuthenticated: false
}

export default function (state = initialstate, action){
    const {type, payload} = action;

    switch(type){
        case REGISTER_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_FAIL:
            return{
                
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case LOGIN_FAIL:
            return{

            }
        default:
            return state;
    }
} 

