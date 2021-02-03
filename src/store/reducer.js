import { combineReducers } from 'redux-immutable';
import { Map } from "immutable";

import {reducer as recommendReducer} from '../pages/discover/cpages/recommend/store';

const cReducer = combineReducers({
  recommend: recommendReducer
});

export default cReducer;