/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('invitem', table => {
        table.increments('Id');
        table.string('UserId');
        table.string('ItemName');
        table.string('Description');
        table.string('Quantity');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('invitem');
};
