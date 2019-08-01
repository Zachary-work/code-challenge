import { Map, List, fromJS } from 'immutable';

const initialState = Map({
    currencies: List()
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_CURRENCIES_FULFILLED': {
            return state.set('currencies', fromJS(action.payload.data));
        }
        default: {
            return state;
        }
    }
}

export default reducer;