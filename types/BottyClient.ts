import { Client, ClientOptions } from "discord.js";
import { cmd_handler_obj } from "../handlers/commandHandler.ts";
import { event_handler_obj } from "../handlers/eventHandler.ts";

export class BottyClient extends Client {
  cmd_handler : any;
  event_handler : any;

  constructor(options : ClientOptions) {
    super(options); // Init Discord client

    // Init command handler
    this.cmd_handler = cmd_handler_obj;
    this.cmd_handler.init();

    // Init event handler
    this.event_handler = event_handler_obj;
    this.event_handler.init(this);
  }
}
