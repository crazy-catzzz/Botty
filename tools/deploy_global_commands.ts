import { REST, Routes } from "discord.js";
import { readdirSync } from "fs";
import { resolve, join } from "path";

const token = Bun.env.BOT_TOKEN;
const clientId = Bun.env.CLIENT_ID;

const cmd_array = [];

// Get command files
const cmd_dir = resolve('./commands');
const cmd_files = readdirSync(cmd_dir);


for (const file of cmd_files) {
  // Import file
  const file_path = join(cmd_dir, file);
  const { cmd_obj } = await import(file_path);

  // Check for missing parameters
  if (!'data' in cmd_obj || !'execute' in cmd_obj) console.log(`[WARNING] The ${cmd_obj.name} command is missing required data or execute parameters!`);
  
  cmd_array.push(cmd_obj.data.toJSON());
}

const rest : REST = new REST().setToken(token);

(async () => {
  try {
    console.log(`Refreshing ${cmd_array.length} application slash commands...`);

    const data = await rest.put(
      Routes.applicationCommands(clientId), 
      { body: cmd_array },
    );

    console.log(`Refreshed ${data.length} slash commands.`);
  } catch (error) {
    console.error(error);
  }
})();
