import axios from 'axios';

export const getCurrencies = () => {
    return {
        type: "FETCH_CURRENCIES",
        payload: axios('http://localhost:3000/currencies/all'),
    }
}