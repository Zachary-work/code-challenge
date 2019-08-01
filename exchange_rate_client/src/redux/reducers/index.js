import { combineReducers } from 'redux';

import exchangeRateReducer from './exchange_rate';
import currencyRouter from './currency';

export default combineReducers({
    exchange_rate: exchangeRateReducer,
    currency: currencyRouter,
});