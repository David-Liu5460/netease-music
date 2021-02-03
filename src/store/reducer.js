import { combineReducers } from 'redux-immutable';
import { Map } from "immutable";

import { reducer as recommendReducer } from '../pages/discover/cpages/recommend/store';
import { reducer as playerReducer } from "../pages/player/store";

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
});

export default cReducer;