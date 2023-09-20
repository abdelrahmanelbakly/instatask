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
exports.addEvents = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5000,
    database: "instatask"
});
const addEvents = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("here");
    try {
        const newEvent = yield pool.query("INSERT INTO events (actor_id, target_id, action_id, time) VALUES($1,$2,$3,$4) RETURNING *", [event.actor_id, event.target_id, event.action_id, event.time]);
        return newEvent.rows;
    }
    catch (err) {
        console.error(err.message);
        throw err;
    }
});
exports.addEvents = addEvents;
const getEvents = () => __awaiter(void 0, void 0, void 0, function* () {
    const Event = yield pool.query("SELECT * FROM events");
    return Event;
});
