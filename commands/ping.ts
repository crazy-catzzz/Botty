import { SlashCommandBuilder } from "discord.js";
import { ICommand } from "../interfaces/command.ts";

class Ping implements ICommand {
  name = "ping";
  description = "Replies with pong.";

  data = new SlashCommandBuilder().setName(this.name).setDescription(this.description);

  async execute(interaction : any) {
    await interaction.reply("Pong!");
  }
}

export const cmd_obj = new Ping();
