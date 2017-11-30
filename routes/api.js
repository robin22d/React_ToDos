var express = require('express');
var router = express.Router();
var ToDosController = require('../dataBace/controllers/toDosController.js');

router.get('/:resource', function (req,res) {

    var resource = req.params.resource;

    if(resource == 'toDos') {
        ToDosController.find(req.query, function (err, results) {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                });
                return
            }
            res.json({
                confirmation: 'success',
                result: results
            });
        });
    }
});

router.post('/:resource', function (req,res) {
    var resource = req.params.resource;

    if (resource == 'toDos') {
        console.log(req.body);
        ToDosController.create(req.body, function (err, result) {
            if (err) {
                res.json({
                    confirmation: 'fail',
                    message: err
                });
                return
            }
            res.json({
                confirmation: 'success',
                result: result
            })
        })
    }
});

module.exports = router;