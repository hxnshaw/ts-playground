import express,{Express} from 'express';
const {createTask,getSingleTask}=require('../controllers/task')
const router=express.Router();

router.route('/create-task').post(createTask);

router.route('/get-task/:id').get(getSingleTask);


module.exports =router;