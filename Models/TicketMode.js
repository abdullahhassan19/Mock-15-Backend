const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  category: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: String },
});

const TicketModel = mongoose.model("Tickets", TicketSchema);

module.exports = { TicketModel };
