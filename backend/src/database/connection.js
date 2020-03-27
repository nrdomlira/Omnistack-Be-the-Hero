const knex = require('knex');
const configuration = require('../../knexfile');

const env = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const conn = knex(env);

module.exports = conn;