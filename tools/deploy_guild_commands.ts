import { REST, Routes } from "discord.js";
import { readdirSync } from "fs";
import { resolve, join } from "path";

const token = Bun.env.BOT_TOKEN!;
const clientId = Bun.env.CLIENT_ID!;
const guildId = Bun.env.GUILD_ID!;

const cmd_array = [];

// Get command files
const cmd_dir = resolve('./commands');
const cmd_files = readdirSync(cmd_dir);


for (const file of cmd_files) {
  // Import file
  const file_path = join(cmd_dir, file);
  const { cmd_obj } = await import(file_path);

  // Skips the file if it's empty
  if (cmd_obj == undefined) continue;

  // Check for missing parameters
  if (!('data' in cmd_obj) || !('execute' in cmd_obj)) console.log(`[WARNING] The ${cmd_obj.name} command is missing required data or execute parameters!`);
  
  cmd_array.push(cmd_obj.data.toJSON());
}

const rest : REST = new REST().setToken(token);

(async () => {
  try {
    console.log(`Refreshing ${cmd_array.length} application slash commands...`);

    const data : any = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId), 
      { body: cmd_array },
    );

    console.log(`Refreshed ${data.length} slash commands.`);
  } catch (error) {
    console.error(error);
  }
})();
