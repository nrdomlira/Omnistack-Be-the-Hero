const generateUniqueId = require('../utils/generateUniqueId');

const conn = require('../database/connection');

module.exports = {
    async index (request, response){
        const ongs = await conn('ongs').select('*');

        return response.json(ongs);
    },

    async store (request, response){
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueId();

        await conn('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({id});
    }
}