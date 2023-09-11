import { REST, Routes } from "discord.js";

const token = Bun.env.BOT_TOKEN;
const clientId = Bun.env.CLIENT_ID;
const guildId = Bun.env.GUILD_ID;

const rest : REST = new REST().setToken(token);

(async () => {
  try {
    console.log("DELETING ALL APPLICATION GUILD SLASH COMMANDS.")

    const data = await rest.get(
      Routes.applicationGuildCommands(clientId, guildId)
    );

    for (const command of data) {
      const delete_url : string = `${Routes.applicationGuildCommands(clientId, guildId)}/${command.id}`;
      try {
        rest.delete(delete_url);
      } catch (error) {
        console.error(error);
      }
    }

    console.log(`Deleted ${data.length} slash commands.`);
  
  } catch (error) {
    console.error(error);
  }
})();
