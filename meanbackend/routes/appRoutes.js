var express = require('express')
var router = express.Router()
var Employee = require('../models/employeeSchema')

router.post('/create', (req, res, next) =>{
    var newEmployee = new Employee({
        name: req.body.name,
        gender:req.body.gender,
        age : req.body.age,
        designation: req.body.designation
    })

    //saving or inserting data to mongodb data base this data will be inserted into meanDb database in the collection named employee
    newEmployee.save((err,employee) =>{
        if(err){
            res.status(500).json({
                error : err
            })
        }
        else{
            res.status(200).json({
                message: "employee created successfully",
                employee : employee
            })
        }
    })


    // res.status(200).json({
    //     msg:"created successfully"
    // })
});

router.get('/read', (req,res) =>{
    Employee.find({}, (err,employees) =>{
        if(err){
            res.status(500).json({
                message:err
            })
        }
        else{
            res.status(200).json({
                message:"all records fetched scuucessfully ",
                employees:employees
            })
        }
    })


    // res.status(200).json({
    //     msg:"fteched all records successfully"
    // })
})

router.put('/update', (req,res) =>{
    Employee.findById(req.body._id, (err,employee) =>{
        if(err){
            res.status(500).json({
                message:err
            })
        }
        else{
            employee.name = req.body.name,
            employee.gender = req.body.gender,
            employee.age = req.body.age,
            employee.designation = req.body.designation

            employee.save((err,employee) =>{
                if(err){
                    res.status(500).json({
                        message:err
                    })
                }
                else{
                    res.status(200).json({
                        message:"employee updated successfully",
                        insertedRecord: employee
                    })
                }
            })

        }
    })
    // res.status(200).json({
    //     msg:"updated successfully"
    // })
})

router.delete('/delete/:id',(req,res) =>{
    Employee.findOneAndRemove({_id: req.params.id}, (err,employee) =>{
        if(err){
            res.status(500).json({
                message: err
            })
        }
        else{
            res.status(200).json({
                message:"employee deleted successfully",
                deletedEmployee : employee
            })
        }


    })
    // res.status(200).json({
    //     msg:"deleted successfully"
    // })
})

module.exports = router;