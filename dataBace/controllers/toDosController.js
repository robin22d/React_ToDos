var toDos = require('../models/todos.js');

module.exports = {

    find: function(params, callback){
        toDos.find(params, function(err, todo){
            if(err){
                callback(err, null);
                return
            }
            callback(null, todo);
        }).limit(50);
    },

    create: function(params, callback){
        console.log(params);
        toDos.create(params, function(err, todo){
            if(err){
                callback(err, null);
                return
            }
            callback(null, todo);
        });
    },


};