import axios from '../../config/axios';

export const getExchangeRate = () => {
    return {
        type: "FETCH_EXCHANGE_RATE",
        payload: axios.get('/exchange_rate/usd'),
    }
}

export const updateExchangeRate = (exchange_rate_record) => {
    return {
        type: "UPDATE_EXCHANGE_RATE",
        payload: exchange_rate_record,
    }
}