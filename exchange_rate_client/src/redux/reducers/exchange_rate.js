import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    exchange_rates: List()
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_EXCHANGE_RATE_FULFILLED': {
            return state.set('exchange_rates', fromJS(action.payload.data));
        }
        case 'UPDATE_EXCHANGE_RATE': {
            let update_index = state.get('exchange_rates').findIndex((_rate) => {
                return _rate.get('base') === action.payload.base && _rate.get('target') === action.payload.target;
            });
            return state.setIn(['exchange_rates', update_index], fromJS(action.payload));
        }
        default: {
            return state;
        }
    }
}

export default reducer;