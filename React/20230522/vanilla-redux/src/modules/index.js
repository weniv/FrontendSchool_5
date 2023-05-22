import { combineReducers } from 'redux';
import goodsReducer from './goodsCounter';
import stockReducer from './stockCounter';

const rootReducer = combineReducers({
    goodsReducer,
    stockReducer
})

export default rootReducer;