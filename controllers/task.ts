import express, {Request, Response} from 'express';
const Task=require('../models/task')

exports.createTask=async(req:Request, res:Response)=>{
    const {name,description}=req.body;
    try {
        const task = await Task.create({name,description})
        res.status(201).json({task});
        
    } catch (error) {
        res.send(error)
    }
}

exports.getSingleTask=async(req:Request, res:Response)=>{
    const {id}=req.params
    try {
        const task = await Task.findById({_id:id});
        res.status(200).json({task});

        
    } catch (error) {
        res.send(error)
    }
}

//    "dev": "ts-node-dev --respawn --transpile-only index.ts"