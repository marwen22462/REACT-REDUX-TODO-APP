import { createStore }  from "redux";
import {todoReducer} from '../reducers/index'

const store = createStore(todoReducer);

export default store;
