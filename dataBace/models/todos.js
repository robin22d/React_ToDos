
var mongoose = require('mongoose');

var toDoSchema = mongoose.Schema({
    task:{
        type:String,
        default: '',
        require:true
    },
    isComplete:{
        type:Boolean,
        default: false
    },
    date_created:{
        type: Date,
        default: Date.now
    }
});

// so it can be accessed else where
module.exports = mongoose.model('toDos', toDoSchema);