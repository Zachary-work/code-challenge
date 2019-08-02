import axios from '../../config/axios';

export const getCurrencies = () => {
    return {
        type: "FETCH_CURRENCIES",
        payload: axios.get('/currencies/all'),
    }
}