
exports.up = function(knex) {
    return knex.schema.createTable('exchange_rates', (table) => {
        table.increments('id').primary();
        table.string('base').notNullable();
        table.string('target').notNullable();
        table.float('price');
        table.float('volume');
        table.float('change');
        table.timestamp('data_updated_on');
        table.timestamps();
        table.index(['data_updated_on'], 'data_updated_on');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exchange_rates');
};
