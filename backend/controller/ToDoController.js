const ToDoModel = require("../models/ToDoModel")

module.exports.getToDos = async(req,res) => {
    const toDos = await ToDoModel.find();
    res.send(toDos)
};

module.exports.saveToDo = (req,res) => {
    const {toDo} = req.body
    
    ToDoModel.create({toDo})
    .then((data)=> {
        console.log("saved Successfully......");
        res.status(201).send(data);
    })
    .catch((err)=> {console.log(err) 
        res.send({error:err, msg: "somthing went Wrong Hakish!" });
       });
};

module.exports.updateTodo = (req,res) => {
    const {id} = req.params;
    const {toDo} =req.body;

    ToDoModel.findByIdAndUpdate(id,{toDo})
    .then(()=> {
        res.send("updated Successfully.....");
    })
    .catch((err)=> {console.log(err) 
        res.send({error:err, msg: "somthing went Wrong Hakish!" });
       });
};

module.exports.deleteTodo = (req,res) => {
    const {id} = req.params;

    ToDoModel.findByIdAndDelete(id)
    .then(()=> {
        res.send("Deleted Successfully.....");
    })
    .catch((err)=> {console.log(err) 
     res.send({error:err, msg: "somthing went Wrong Hakish!" });
    });
};


