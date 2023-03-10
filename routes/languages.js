var express = require('express');
var router = express.Router();

const languages = require('../services/languages');

/* GET languages listing. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await languages.getMultiple(req.query.page));
    } catch (err) {
        console.error('Error' + err.message);
        next(err);
    }
});

router.get('/list', async function (req, res, next) {
    try {
        let data = await languages.getMultiple(req.query.page);
        console.log(data);
        res.render('list', data)
    }
    catch (err) {
        console.error('Error' + err.message);
        next(err);
    }
});

router.post('/', async function (req, res, next) {

    try {
        res.json(await languages.create(req.body));
    } catch (error) {
        console.log('Error while creating a language', error.message);
        next(error);
    }

});

router.put('/:id', async function (req, res, next) {

    try {
        res.json(await languages.update(req.params.id, req.body));
    } catch (error) {
        console.log('Error while updating a language', error.message);
        next(error);
    }

});

router.delete('/:id', async function (req, res, next) {

    try {
        res.json(await languages.remove(req.params.id));
    } catch (error) {
        console.log('Error while deleting a language', error.message);
        next(error);
    }

});



module.exports = router;