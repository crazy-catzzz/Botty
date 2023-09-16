import { IEvent } from "../interfaces/event.ts";
import { Events } from "discord.js";
import { BottyClient } from "../types/BottyClient.ts";

class Ready implements IEvent {
  name = Events.ClientReady;
  once = true;

  execute = (client : BottyClient) => {
    console.log("Ready!");
  }
}

export const event_obj = new Ready();
