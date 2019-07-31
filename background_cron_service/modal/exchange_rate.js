import empty from 'is-empty';

class ExchangeRate {

    constructor(ticker, updated_on) {
        this.ticker = ticker;
        this.updated_on = updated_on;
    }

    insert(knex) {
        return knex('exchange_rates').insert({
            ...this.ticker,
            volume: (!empty(this.ticker.volume)) ? this.ticker.volume : null,
            data_updated_on: this.updated_on.format("YYYY-MM-DD HH:mm:ss"),
        });
    }

}

export default ExchangeRate;