import { Client, ClientOptions } from "discord.js";
import { cmd_handler_obj } from "../handlers/commandHandler.ts";

export class BottyClient extends Client {
  cmd_handler : any;

  constructor(options : ClientOptions) {
    super(options);

    this.cmd_handler = cmd_handler_obj;
    this.cmd_handler.init();
  }
}
