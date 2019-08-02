import axios from 'axios';

export default axios.create({
    baseURL: process.env.REACT_APP_EXCHANGE_SER_HOST
});