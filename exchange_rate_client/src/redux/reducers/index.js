import { combineReducers } from 'redux';

import exchangeRateReducer from './exchange_rate';

export default combineReducers({
    exchange_rate: exchangeRateReducer
});