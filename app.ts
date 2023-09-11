import { Client, Events, GatewayIntentBits } from "discord.js";
import { cmd_handler_obj } from "./handlers/commandHandler.ts";

// Bun environment variables
const token : string = Bun.env.BOT_TOKEN;

cmd_handler_obj.init();

// God I love typed languages
const bot : Client = new Client(
  {
    intents: [GatewayIntentBits.Guilds]
  }
);

bot.once(Events.ClientReady, client => {
  console.log("Ready!");
});
bot.on(Events.InteractionCreate, interaction => {
  if (!interaction.isChatInputCommand()) return;

  cmd_handler_obj.exec_cmd(interaction);
});


bot.login(token);
