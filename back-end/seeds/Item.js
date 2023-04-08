/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('invitem').del()
  await knex('invitem').insert([
    {UserId: '', ItemName: 'Box1', Description: 'It is an big box with bubblewrap in it.', Quantity: '1'},
    {UserId: '', ItemName: 'Box2', Description: 'It is an small box with snacks in it.', Quantity: '3'},
    {UserId: '', ItemName: 'Box3', Description: 'It is an large box with books in it.', Quantity: '7'},
    {UserId: '', ItemName: 'Box4', Description: 'It is an empty box with nothing in it.', Quantity: '4'}
  ]);
};
