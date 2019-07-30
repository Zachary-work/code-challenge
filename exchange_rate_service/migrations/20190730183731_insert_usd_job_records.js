
exports.up = function(knex) {
    return knex("exchange_rate_jobs").insert([
        {
            base: 'btc',
            target: 'usd',
            scheduled_on: '1970-01-01 00:00:01',
        },
        {
          base: 'eth',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'ltc',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'xmr',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'xrp',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'doge',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'dash',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'maid',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'lsk',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
      {
          base: 'sjcx',
          target: 'usd',
          scheduled_on: '1970-01-01 00:00:01',
      },
    ])
  };
  
  exports.down = function(knex) {
      return knex("exchange_rate_jobs").where({
          target: 'usd'
      }).del();
  };
  