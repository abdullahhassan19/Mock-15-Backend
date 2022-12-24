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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
const date = new Date();
    let M=date.getMonth()
    let D=date.getDate()
    let H=date.getHours()
    let Min=date.getMinutes()
    let mont = months[M];
    const ddd = `${mont} ${D} ${H}:${Min}`;
    // console.log(ddd)
  const { category, title, message } = req.body;
  const createticket = new TicketModel({
    category,
    title,
    message,
    userId,
    date: ddd,
  });
  await createticket.save();
  res.send({ msg: "Ticket Created", Ticket: createticket });
});

module.exports = { TicketRouter };
