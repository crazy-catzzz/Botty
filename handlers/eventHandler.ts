import { readdirSync } from "fs";
import { resolve } from "path";
import { BottyClient } from "../types/BottyClient.ts";

// Singleton Event Handler
export class EventHandler {
  // Singleton stuff
  private static _instance : EventHandler;

  private constructor() {};

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  // Event handler stuff
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
