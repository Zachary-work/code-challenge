
exports.up = function(knex) {
  return knex.schema.alterTable('exchange_rates', (table) => {
    table.float('volume', 20, 10).alter();
  })
};

exports.down = function(knex) {
    return knex.schema.alterTable('exchange_rates', (table) => {
        table.float('volume').alter();
      })
};
