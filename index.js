const express =require("express")
require("dotenv").config()
const { Connection } = require("./Config/db");
const cors=require("cors")
const { TicketRouter } = require("./Routers/TicketRouter")
const { AuthRouter } = require("./Routers/AuthRouter")


const app=express()
app.use(express.json())
app.use(cors())
const PORT=process.env.PORT || 8080;
app.use("/",TicketRouter)
app.use("/",AuthRouter)

app.listen(PORT, async () => {
  await Connection;
  try {
    console.log("connected to db");
  } catch {
    console.log("error in connection to db");
  }
  console.log(`running on port ${PORT}`);
});
