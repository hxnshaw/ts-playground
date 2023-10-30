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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const bodyParser = require("body-parser");
dotenv_1.default.config();
const taskRouter = require('./routers/task');
const app = (0, express_1.default)();
const port = 2222;
//DATABASE
const connectDatabase = require('./db/connect');
app.use(bodyParser.json());
//ROUTERS
app.use('/api/tasks', taskRouter);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDatabase(process.env.MONGO_URI);
        app.listen(port, () => console.log(`[server]:Server is running on ${port}`));
    }
    catch (error) {
        console.log(error);
    }
});
start();
