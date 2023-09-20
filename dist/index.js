"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const app = (0, express_1.default)();
const myEvent = {
    actor_id: 1,
    target_id: 2,
    action_id: 3,
    time: '2023-09-14T12:00:00Z', // Replace with the actual time
};
app.use((0, db_1.addEvents)(myEvent));
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(5000, () => {
    console.log("listening to port 5000");
});
