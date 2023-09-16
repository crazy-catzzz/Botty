import { IEvent } from "../interfaces/event.ts";
import { Events } from "discord.js";
import { BottyClient } from "../types/BottyClient.ts";

class InteractionCreate implements IEvent {
  name = Events.InteractionCreate;
  once = false;

  execute = (interaction : any) => {
    const bot = interaction.client;

    if (!interaction.isChatInputCommand()) return;

    bot.cmd_handler.exec_cmd(interaction);
  }
}

export const event_obj = new InteractionCreate();
