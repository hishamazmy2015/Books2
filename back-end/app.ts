import express from "express";
import citiesRouter from "./routes/citizen";
import Citizen from "./models/citizen";
import mongoose from "mongoose";

const app = express();
app.use((req, res, next) => {
  next();
});

app.use("/get", citiesRouter);
const uri =
  "mongodb+srv://admin:Pssw0rd2020@cluster0.s7twk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then(() => {
    [
      {
        isCitizen: true,
        Name: "John Smith",
        EIDA: 123456,
        Children: {
          "Mike Smith": 123457,
          "Jessica Smith": 123458,
          "Sarah Smith": 123459,
        },
        hasDrivingLicense: true,
      },
      {
        isCitizen: false,
        Name: "Michael Tall",
        EIDA: 123461,
        Children: {},
        hasDrivingLicense: false,
      },
      {
        isCitizen: false,
        Name: "Joe Bloggs",
        EIDA: 123462,
        Children: {
          "Sarah Bloggs": 123463,
        },
        hasDrivingLicense: true,
      },
    ].forEach((element) => {
      new Citizen(element).save();
    });
    app.listen(3019);
    console.log("port is  3019");
  })
  .catch((err) => console.log(err));
