import {combineReducers} from "redux"

import authreducer  from "./authreducer"
import item from "./item"
export default combineReducers ({
    authreducer,item
})