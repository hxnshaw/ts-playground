"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const taskSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Please Provide a Name For This Task"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please Provide a Description For This Task"],
        trim: true
    },
}, { timestamps: true });
module.exports = mongoose_1.default.model('Task', taskSchema);
