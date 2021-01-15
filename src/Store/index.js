import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import errorMessage from "./modules/errorMessage/reducer";

const Reducers = combineReducers({ errorMessage });

const store = createStore(Reducers, applyMiddleware(thunk));

export default store;
