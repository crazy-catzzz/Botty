import { Events, GatewayIntentBits } from "discord.js";
import { BottyClient } from "./types/BottyClient.ts";

import { event_handler_obj } from "./handlers/eventHandler.ts";

// Bun environment variables
const token : string | undefined = Bun.env.BOT_TOKEN;

// God I love typed languages
const bot : BottyClient = new BottyClient(
  {
    intents: [GatewayIntentBits.Guilds]
  }
);

// Event handler
event_handler_obj.init(bot);

bot.login(token);
