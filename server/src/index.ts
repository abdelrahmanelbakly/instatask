import express from "express";
import cors from "cors";
import {addEvents,filterEvents,getEvents, searchEvents} from "./db";
const app =  express();

app.use(cors());
app.use(express.json())
const PORT = process.env.PORT;
app.listen(PORT||4000, ()=>{
    console.log("listening to port 4000");
})

app.post("/events",async(req,res,next)=>{
    const eventData = req.body; 
    const myEvent = {
        id:eventData.id,
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
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send({ message: 'Error fetching events' });
  }
});

