
exports.up = function(knex) {
    return knex.schema.createTable('currencies', (table) => {
        table.increments('id').primary();
        table.string('code').notNullable();
        table.string('name').notNullable();
        table.index(['code'], 'code');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('currencies');
};
