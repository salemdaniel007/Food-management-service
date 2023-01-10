import { Knex, knex } from 'knex';
import { UsersModel } from '../models/users.model';

export async function seed(knex: Knex): Promise<any> {
  await UsersModel.query(knex).insert([
    {
        lasttName: 'Jonhy',
        firstName: 'Doe',
        email: 'jon@doe.com',
        role: 'MEMBER'
    },
  ]);
}
