const route = require('express').Router()

const {
    index,
    save,
    findById,
    erase
} = require('../controllers/control-patient')

route.get('/',index)
route.post('/',save)
route.get('/:id',findById)
route.delete('/:id',erase)


module.exports = route;
