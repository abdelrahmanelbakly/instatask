CREATE DATABASE instatask;
--Create the Employees table
CREATE TABLE Employees (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255),
    position varchar(255)
);

--Create the Actions table
CREATE TABLE Actions (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    description text
);

--Create the Events table
CREATE TABLE Events (
    id serial PRIMARY KEY,
    actor_id integer REFERENCES Employees(id) NOT NULL,
    target_id integer REFERENCES Employees(id),
    action_id integer REFERENCES Actions(id),
    time timestamp
);
