const knex = require('knex');
const configuration = require('../../knexfile');

const conn = knex(configuration.development);

module.exports = conn;