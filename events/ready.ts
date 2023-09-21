import { IEvent } from "../interfaces/event.ts";
import { Events } from "discord.js";
import { BottyClient } from "../types/BottyClient.ts";

class Ready implements IEvent {
  name = Events.ClientReady;
  once = true;

  execute(client : BottyClient) : void {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
  }
}

export const event_obj = new Ready();
