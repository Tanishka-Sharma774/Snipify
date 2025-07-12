/* eslint-disable no-var */
import { Connection } from "mongoose";


declare global {
  var mongoose: {
    // either connection with db is there
    conn: Connection | null; 
    //connection on the way or fresh connection is established
    promise: Promise<Connection> | null;
  };
}

export {};