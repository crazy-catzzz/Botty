import { Events } from "discord.js";
import { BottyClient } from "../types/BottyClient.ts";

export interface IEvent {
  name : Events;
  once : boolean;

  execute(...args : any) : void; 
}
