import express from 'express';
import Promise from 'bluebird';

//modal
import CurrencyRecord from '../../modal/currency_record';

let router = express.Router();

router.get('/all', async (req, res) => {
    let currencies = await CurrencyRecord.getCurrencies();

    res.set('Content-Type', 'application/json');
    res.json(currencies);
    
});

export default router;