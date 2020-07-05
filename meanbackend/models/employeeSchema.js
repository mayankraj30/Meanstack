var mongoose = require('mongoose')

var employeeSchema = mongoose.Schema({
    name: {type:String  },
    gender:{type:String},
    age : {type:Number},
    designation : {type:String}
});

module.exports = mongoose.model('employee',employeeSchema);