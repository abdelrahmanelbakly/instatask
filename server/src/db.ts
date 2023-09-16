import {Pool, QueryResult} from 'pg';
import { Event,employee,action } from './types';
const pool = new Pool({
    user:"postgres",
    password:"1234",
    host:"localhost",
    port: 5000,
    database:"instatask"
})

export const addEvents = async (event:Event) => {
    try {
        // Check if the id exists in the employees table
        const actorExists = await pool.query(
          'SELECT * FROM employees WHERE id = $1',
          [event.actor.id]
        );
    
        if (actorExists.rows.length === 0) {
          // If id doesn't exist, add a new employee to the employees table
          await pool.query('INSERT INTO employees (id, name, email, position) VALUES ($1,$2,$3,$4)', 
          [event.actor.id, event.actor.name, event.actor.email, event.actor.position]);
        }
        
        if(event.target){
            // Check if the id exists in the employees table
            const targetExists = await pool.query(
            'SELECT * FROM employees WHERE id = $1',
            [event.target.id]
          );
      
          if (targetExists.rows.length === 0) {
            // If id doesn't exist, add a new employee to the id table
            await pool.query('INSERT INTO employees (id, name, email, position) VALUES ($1,$2,$3,$4)', 
            [event.target.id, event.target.name, event.target.email, event.target.position]);
          }
        }
        const actionExists = await pool.query(
            'SELECT * FROM actions WHERE id = $1',
            [event.action.id]
          );
      
          if (actionExists.rows.length === 0) {
            // If action id doesn't exist, add a new action to the actions table
            await pool.query('INSERT INTO actions (id, name, description) VALUES ($1, $2, $3)', [
              event.action.id,
              event.action.name,
              event.action.description
            ]);
          }

    
        // Insert the event into the events table
        console.log(event.actor.id);
        const newEvent = await pool.query(
          'INSERT INTO events (actor_id, target_id, action_id, time) VALUES ($1, $2, $3, $4) RETURNING *',
          [event.actor.id, event.target? event.target.id: null, event.action.id, event.time]
        );
        return newEvent.rows;
    }catch (err:any) {
        console.error(err.message);
        throw err;
    }
}

// Function to map raw database rows to Event objects
const mapRowToEvent = (row: any): Event => ({
    actor: {
      id: row.actor_id,
      name: row.actor_name,
      email: row.actor_email,
      position: row.actor_position,
    },
    target: row.target_id
      ? {
          id: row.target_id,
          name: row.target_name,
          email: row.target_email,
          position: row.target_position,
        }
      : null,
    action: {
      id: row.action_id,
      name: row.action_name,
      description: row.action_description,
    },
    time: row.time,
  });
  
  // Function to get events with pagination
  export const getEvents = async (limit: number, offset: number): Promise<Event[]> => {
    const query = `
      SELECT
        e.id,
        e.actor_id,
        e.target_id,
        e.action_id,
        e.time,
        a.name AS action_name,
        a.description AS action_description,
        actor.name AS actor_name,
        actor.email AS actor_email,
        actor.position AS actor_position,
        target.name AS target_name,
        target.email AS target_email,
        target.position AS target_position
      FROM events e
      LEFT JOIN employees actor ON e.actor_id = actor.id
      LEFT JOIN employees target ON e.target_id = target.id
      LEFT JOIN actions a ON e.action_id = a.id
      ORDER BY e.time DESC
      LIMIT $1 OFFSET $2
    `;
    const values = [limit, offset];
  
    try {
      const { rows }: QueryResult = await pool.query(query, values);
      return rows.map(mapRowToEvent);
    } catch (error) {
      throw error;
    }
  };
  export const searchEvents = async (limit: number, offset: number, searchTerm: string): Promise<Event[]> => {
    const query = `
      SELECT
        e.id,
        e.actor_id,
        e.target_id,
        e.action_id,
        e.time,
        a.name AS action_name,
        a.description AS action_description,
        actor.name AS actor_name,
        actor.email AS actor_email,
        actor.position AS actor_position,
        target.name AS target_name,
        target.email AS target_email,
        target.position AS target_position
      FROM events e
      LEFT JOIN employees actor ON e.actor_id = actor.id
      LEFT JOIN employees target ON e.target_id = target.id
      LEFT JOIN actions a ON e.action_id = a.id
      WHERE
        (actor.name ILIKE $1 OR actor.email ILIKE $1 OR a.name ILIKE $1)
      ORDER BY e.time DESC
      LIMIT $2 OFFSET $3
    `;
    const values = [`%${searchTerm}%`, limit, offset];
  
    try {
      const { rows }: QueryResult = await pool.query(query, values);
      return rows.map(mapRowToEvent);
    } catch (error) {
      throw error;
    }
  };
  export const filterEvents = async (
    limit: number,
    offset: number,
    actorIdFilter: number | null,
    targetIdFilter: number | null,
    actionIdFilter: number | null
  ): Promise<Event[]> => {
    const query = `
      SELECT
        e.id,
        e.actor_id,
        e.target_id,
        e.action_id,
        e.time,
        a.name AS action_name,
        a.description AS action_description,
        actor.name AS actor_name,
        actor.email AS actor_email,
        actor.position AS actor_position,
        target.name AS target_name,
        target.email AS target_email,
        target.position AS target_position
      FROM events e
      LEFT JOIN employees actor ON e.actor_id = actor.id
      LEFT JOIN employees target ON e.target_id = target.id
      LEFT JOIN actions a ON e.action_id = a.id
      WHERE
        ($1::int IS NULL OR e.actor_id = $1)
        AND ($2::int IS NULL OR e.target_id = $2)
        AND ($3::int IS NULL OR e.action_id = $3)
      ORDER BY e.time DESC
      LIMIT $4 OFFSET $5
    `;
    const values = [actorIdFilter, targetIdFilter, actionIdFilter, limit, offset];
  
    try {
      const { rows }: QueryResult = await pool.query(query, values);
      return rows.map(mapRowToEvent);
    } catch (error) {
      throw error;
    }
  };
  