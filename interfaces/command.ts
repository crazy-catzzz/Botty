import { SlashCommandBuilder } from "discord.js";

export interface ICommand {
  name : string;
  description : string;

  data : SlashCommandBuilder;
  execute(interaction : any) : void;
}
