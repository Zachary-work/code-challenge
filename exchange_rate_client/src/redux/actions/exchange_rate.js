import axios from 'axios';

export const getExchangeRate = () => {
    return {
        type: "FETCH_EXCHANGE_RATE",
        payload: axios('http://localhost:3000/exchange_rate/usd'),
    }
}

export const updateExchangeRate = (exchange_rate_record) => {
    return {
        type: "UPDATE_EXCHANGE_RATE",
        payload: exchange_rate_record,
    }
}