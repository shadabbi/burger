import { combineReducers } from "redux";

import burgerBuilderReducer from "./reducer/burgerReducer/burgerBuilderReducer";

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
});

export default rootReducer;
