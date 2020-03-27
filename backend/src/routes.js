const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ONGController = require('../src/controllers/ONGController');
const IncidentController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const router = express.Router();

router.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    })
}),SessionController.store);


router.get('/ongs', ONGController.index);
router.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentController.index);
router.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

router.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), ONGController.store);
router.post('/incidents',
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
    }), celebrate({
        [Segments.BODY]: Joi.object().keys({
            title: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
        })
    }), IncidentController.store);

router.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);


module.exports = router;