import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { AnyAction } from "@reduxjs/toolkit";
import { applyMiddleware, createStore } from "redux";

function defaultReducer(state: any, action: AnyAction) {
  console.log("action :>>", action);
  return state;
}

const store = createStore(
  defaultReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
