import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import errorMessage from "./modules/errorMessage/reducer";
import user from "./modules/user/reducer";

const Reducers = combineReducers({ errorMessage, user });

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
