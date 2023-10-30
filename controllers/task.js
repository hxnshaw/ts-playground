"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../models/task');
exports.createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    try {
        const task = yield Task.create({ name, description });
        res.status(201).json({ task });
    }
    catch (error) {
        res.send(error);
    }
});
exports.getSingleTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const task = yield Task.findById({ _id: id });
        res.status(200).json({ task });
    }
    catch (error) {
        res.send(error);
    }
});
//    "dev": "ts-node-dev --respawn --transpile-only index.ts"
