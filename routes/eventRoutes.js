"use strict";
const express = require("express");
const eventController = require("../controllers/eventController");
const router = express.Router();

const { getEvents, getEventById, addEvent, updateEvent,deleteEventById } = eventController;
router.get("/events", getEvents);
router.get("/events/:eventId", getEventById);
router.post("event", addEvent);
router.put("/events/:eventId", updateEvent);

router.delete("/events/:eventId", deleteEventById);

module.exports = {
  routers: router,
};
