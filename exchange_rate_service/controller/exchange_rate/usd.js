import express from 'express';
import Promise from 'bluebird';

//modal
import ExchangeRateRecord from '../../modal/exchange_rate_record';

let router = express.Router();

router.get('/usd', async (req, res) => {
    let exchange_list = await ExchangeRateRecord.getExchangeList('usd');
    let records = exchange_list.map(({base, target}) => {
        return new ExchangeRateRecord(base, target);
    });
    let tickers = await Promise.map(records, (_record) => {
        return _record.getTicker();
    });

    res.set('Content-Type', 'application/json');
    res.json(tickers);
    
});

export default router;