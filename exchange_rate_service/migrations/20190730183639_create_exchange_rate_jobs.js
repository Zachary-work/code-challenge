
exports.up = function(knex) {
    return knex.schema.createTable('exchange_rate_jobs', (table) => {
        table.increments('id').primary();
        table.string('base').notNullable();
        table.string('target').notNullable();
        table.timestamp('scheduled_on');
        table.timestamps();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('exchange_rate_jobs');
};
