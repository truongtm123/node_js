"use strict";
const utils = require("../utils");
const config = require("../../config");
const sql = require("mssql");

// Get All Event
const getEvents = async () => {
  try {
    var pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSQLQueries("events");
    const list = await pool.request().query(sqlQueries.eventList);
    return list.recordset;
  } catch (error) {
    return error.message;
  }
};

// Get event by Id
const getEventById = async (eventId) => {
  try {
    var pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSQLQueries("events");
    const oneEvent = await pool
      .request()
      .input("eventId", sql.Int, eventId)
      .query(sqlQueries.eventById);
    return oneEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

// Insert event
const createEvent = async (eventData) => {
  try {
    var pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSQLQueries("events");
    const objEvent = await pool
      .request()
      .input("eventTitle", sql.NVarChar(50), eventData.eventTitle)
      .input("eventDescription", sql.NVarChar(500), eventData.eventDescription)
      .input("startDate", sql.DateTime, eventData.startDate)
      .input("endDate", sql.DateTime, eventData.endDate)
      .input("avenue", sql.NVarChar(50), eventData.avenue)
      .input("maxMember", sql.Int, eventData.maxMember)
      .query(sqlQueries.createEvent);
    return objEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

// Update event
const updateEvent = async (eventId, eventData) => {
  try {
    var pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSQLQueries("events");
    const objEvent = await pool
      .request()
      .input("eventId", sql.Int, eventId)
      .input("eventTitle", sql.NVarChar(50), eventData.eventTitle)
      .input("eventDescription", sql.NVarChar(500), eventData.eventDescription)
      .input("startDate", sql.DateTime, eventData.startDate)
      .input("endDate", sql.DateTime, eventData.endDate)
      .input("avenue", sql.NVarChar(50), eventData.avenue)
      .input("maxMember", sql.Int, eventData.maxMember)
      .query(sqlQueries.updateEvent);
    return objEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

// Delete event by Id
const deleteEventById = async (eventId) => {
  try {
    var pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSQLQueries("events");
    const deleted = await pool
      .request()
      .input("eventId", sql.Int, eventId)
      .query(sqlQueries.deleteEvent);
    return deleted.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEventById
};
