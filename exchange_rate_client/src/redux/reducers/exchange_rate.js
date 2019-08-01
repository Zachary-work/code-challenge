import { Map, List } from 'immutable';

const initialState = Map({
    exchange_rates: List([{"base":"BTC","target":"USD","price":"9984.88939463","volume":"79441.91068208","change":"16.80873010"},{"base":"ETH","target":"USD","price":"213.58352666","volume":"405333.99422470","change":"0.32305880"},{"base":"LTC","target":"USD","price":"96.68266762","volume":"1238568.72852020","change":"0.22650089"},{"base":"XMR","target":"USD","price":"80.74565669","volume":"95725.81143659","change":"0.18643305"},{"base":"XRP","target":"USD","price":"0.31499066","volume":"166722334.90024999","change":"0.00048331"},{"base":"DOGE","target":"USD","price":"0.00285316","volume":"250982322.23559999","change":"0.00000551"},{"base":"DASH","target":"USD","price":"105.52151758","volume":"7383.12790379","change":"0.22582644"},{"base":"MAID","target":"USD","price":"0.15107138","volume":"","change":"0.00025432"},{"base":"LSK","target":"USD","price":"1.40056104","volume":"46375.39549805","change":"0.00483241"}])
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: {
            return state;
        }
    }
}

export default reducer;