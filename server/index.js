import express from "express";
import cors from "cors";
import pool from "./db.js";

const app = express();


//middleware
app.use(cors());
app.use(express.json());

//Routes
//get all todo
app.get("/todos",async(req,res)=>{
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    }
    catch(err)
    {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id] );
        res.json(todo.rows[0]);
    }
    catch(err){
        console.log(err.message);
    }
});

//create a todo
app.post("/todos", async (req,res)=>{
    try{
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO  todo (description) VALUES ($1) RETURNING *",[description]);
        res.json(newTodo.rows[0]);
    }
    catch(err){
        console.error(err.message);
    }


});

//update a todo
app.put("/todos/:id",async (req,res)=>{
    try{
        const {description} = req.body;
        const {id} = req.params;
        const todoUpdate = await pool.query("UPDATE todo SET description = $1 WHERE todo_id=$2",[description,id]);
        res.json("update successful");
    }
    catch(err){
        console.log(err.message);
    }
});

//delete a todo
app.delete("/todos/:id",async (req,res)=>{
    try{
        const {id} = req.params;
        const todo = await pool.query("DELETE FROM todo WHERE todo_id=$1",[id]);
        res.json("delete successful");
    }
    catch(err){
        console.log(err.message);
    }
})


app.listen(5000,()=>{
    console.log("server is starting at port 5000");
});