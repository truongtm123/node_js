"use strict";
const eventData = require("../data/events/service");

const getEvents = async (req, res, next) => {
  try {
    const events = await eventData.getEvents();
    res.send(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getEventById = async (req, res, next) => {
  try {
    const eventId = req.params.eventId;
    const events = await eventData.getEventById(eventId);
    res.send(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const addEvent = async (req, res, next) => {
  try {
    var data = req.body;
    const events = await eventData.createEvent(data);
    res.send(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateEvent = async (req, res, next) => {
  try {
    var eventId = req.param.id;
    var data = req.body;
    const events = await eventData.updateEvent(eventId, data);
    res.send(events);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteEventById = async (req, res, next) => {
    try {
      const eventId = req.params.eventId;
      const events = await eventData.deleteEventById(eventId);
      res.send(events);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

module.exports = {
  getEvents,
  getEventById,
  addEvent,
  updateEvent,
  deleteEventById
};
