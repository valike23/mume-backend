

import Knex from 'knex';

export const knex = Knex({
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'my_database',
    },
  });