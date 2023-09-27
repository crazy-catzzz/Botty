import { Client, ClientOptions } from "discord.js";
import { CommandHandler } from "../handlers/commandHandler.ts";
import { EventHandler } from "../handlers/eventHandler.ts";

export class BottyClient extends Client {
  cmd_handler : CommandHandler;
  event_handler : EventHandler;

  constructor(options : ClientOptions) {
    super(options); // Init Discord client

    // Init command handler
    this.cmd_handler = CommandHandler.instance;
    this.cmd_handler.init();

    // Init event handler
    this.event_handler = EventHandler.instance;
    this.event_handler.init(this);
  }
}
