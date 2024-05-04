export const up = function (knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id').primary();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    });
};

export const down = function(knex) {
    return knex.schema.dropTable('user');
};



