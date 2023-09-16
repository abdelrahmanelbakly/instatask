import express from "express";
import cors from "cors";
import { Event,employee,action } from './types';
import {addEvents,filterEvents,getEvents, searchEvents} from "./db";
const app =  express();
// const actor: employee={
//     id: 1,
//     name: "abdelrahman",
//     email: "abdelrahman.com",
//     position: "CEO"
// }
// const target: employee={
//     id: 2,
//     name: "abdelrahman2",
//     email: "abdelrahman2.com",
//     position: "CEO2"
// }
// const myAction: action = {
//     id:1,
//     name: "myAction",
//     description:"action aho"
// }
// const myEvent: Event = {
//     actor: actor,
//     target: target,
//     action: myAction,
//     time: new Date(),
// };
//middleware
app.use(cors());
app.use(express.json())
app.listen(3000, ()=>{
    console.log("listening to port 3000");
})

app.post("/events",async(req,res,next)=>{
    const eventData = req.body; 
    const myEvent = {
        actor: eventData.actor,
        actor_id: eventData.actor_id,
        target: eventData.target,
        target_id:eventData.target_id,
        action: eventData.action,
        action_id: eventData.action_id,
        time: new Date(),
    };
    try {
        const result = await addEvents(myEvent);
        console.log('Event added successfully:', result);
        res.status(201).send({ message: 'Event added successfully', event: myEvent });
    }catch (error) {
        console.error('Error adding event:', error);
        res.status(500).send({ message: 'Error adding event' });
    }
})
app.get("/events", async (req, res, next) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;
  const searchTerm = req.query.searchTerm as string || '';
  const actorIdFilter = parseInt(req.query.actor_id as string) || null;
  const targetIdFilter = parseInt(req.query.target_id as string) || null;
  const actionIdFilter = parseInt(req.query.action_id as string) || null;

  try {
    let result;

    if (searchTerm) {
      result = await searchEvents(limit, offset, searchTerm);
    } else if (actorIdFilter !== null || targetIdFilter !== null || actionIdFilter !== null) {
      result = await filterEvents(limit, offset, actorIdFilter, targetIdFilter, actionIdFilter);
    } else {
      result = await getEvents(limit, offset);
    }

    console.log('Event added successfully:', result);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send({ message: 'Error fetching events' });
  }
});

