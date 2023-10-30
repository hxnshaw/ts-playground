"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { createTask, getSingleTask } = require('../controllers/task');
const router = express_1.default.Router();
router.route('/create-task').post(createTask);
router.route('/get-task/:id').get(getSingleTask);
module.exports = router;
