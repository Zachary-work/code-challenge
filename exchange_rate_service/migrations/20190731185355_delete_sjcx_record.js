
exports.up = function (knex) {
    return knex("exchange_rate_jobs").where({
        base: 'sjcx',
        target: 'usd'
    }).del();
};

exports.down = function (knex) {
    return knex("exchange_rate_jobs").insert({
        base: 'sjcx',
        target: 'usd',
        scheduled_on: '1970-01-01 00:00:01',
    });
};
