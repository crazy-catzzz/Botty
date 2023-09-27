import { Events, GatewayIntentBits } from "discord.js";
import { BottyClient } from "./types/BottyClient.ts";

// Bun environment variables
const token : string = Bun.env.BOT_TOKEN!;

// God I love typed languages
const bot : BottyClient = new BottyClient(
  {
    intents: [GatewayIntentBits.Guilds]
  }
);

bot.login(token);
