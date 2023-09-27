import { Events } from "discord.js";

export interface IEvent {
  name : Events;
  once : boolean;

  execute(...args : any) : void; 
}
