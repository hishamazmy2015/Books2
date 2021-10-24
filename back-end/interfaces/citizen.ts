import { Document } from "mongoose";

export default interface ICitizen extends Document {
  isCitizen: Boolean;
  hasDrivingLicense: Boolean;
  Name: String;
  EIDA: Number;
  Children: Map<string, number>;
}
