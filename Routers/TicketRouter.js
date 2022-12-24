const { Router } = require("express");
const { TicketModel } = require("../Models/TicketMode");

const TicketRouter = Router();

TicketRouter.get("/:userId", async (req, res) => {
  userId = req.params.userId;
  const Tickets = await TicketModel.find({ userId });
  res.send({ msg: "Success", Tickets: Tickets });
});
TicketRouter.post("/:userId/create", async (req, res) => {
  userId = req.params.userId;
  // console.log(userId)
  const { category, title, message } = req.body;
  const createticket = new TicketModel({
    category,
    title,
    message,
    userId,
  });
  await createticket.save();
  res.send({ msg: "Ticket Created", Ticket: createticket });
});

module.exports = { TicketRouter };
