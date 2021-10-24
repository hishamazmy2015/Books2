// import { NextFunction, Request, Response } from "express";

import { Response, Request, NextFunction } from "express";
import Citizen from "../models/citizen";
const getAllCitizens = (req: Request, res: Response, next: NextFunction) => {
  Citizen.find()
    .exec()
    .then((results) => {
      return res.status(200).json({
        citizens: results,
        count: results.length,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { getAllCitizens };
