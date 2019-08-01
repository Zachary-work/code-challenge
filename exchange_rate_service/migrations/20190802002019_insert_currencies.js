
exports.up = function(knex) {
    return knex("currencies").insert([
        {
            code: 'btc',
            name: 'Bitcoin'
        },
        {
            code: 'eth',
            name: 'Ether'
        },
        {
            code: 'ltc',
            name: 'Litecoin'
        },
        {
            code: 'xmr',
            name: 'Monero',
        },
        {
            code: 'xrp',
            name: 'Ripple',
        },
        {
            code: 'doge',
            name: 'Dogecoin'
        },
        {
            code: 'dash',
            name: 'Dash'
        },
        {
            code: 'maid',
            name: 'MaidSafeeCoin'
        },
        {
            code: 'lsk',
            name: 'Lisk'
        },
        {
            code: 'usd',
            name: 'US Dollar'
        }
    ]);
};

exports.down = function(knex) {
    return knex("currencies").del();
};
