import { readdirSync } from "fs";
import { resolve } from "path";
import { BottyClient } from "../types/BottyClient.ts";

class EventHandler {
  async init(client : BottyClient) {
    this.log("Initializing events...");

    const event_dir = resolve("./events");
    const event_files = readdirSync(event_dir);

    for (const file of event_files) {
      const { event_obj } = await import(`../events/${file}`);

      // Skips the file if it's empty'
      if (event_obj == undefined) continue;

      if (event_obj.once) {
        client.once(event_obj.name, (...args) => event_obj.execute(...args));
      } else {
        client.on(event_obj.name, (...args) => event_obj.execute(...args));
      }

      this.log(`Loaded ${file}`);
    }
  }

  log(str : string) {
    console.log(`[EVENT HANDLER] ${str}`);
  }
}

export const event_handler_obj = new EventHandler();
