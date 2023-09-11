import { REST, Routes } from "discord.js";

const token = Bun.env.BOT_TOKEN;
const clientId = Bun.env.CLIENT_ID;

const rest : REST = new REST().setToken(token);

(async () => {
  try {
    console.log("DELETING ALL APPLICATION SLASH COMMANDS.")

    const data = await rest.get(
      Routes.applicationCommands(clientId)
    );

    for (const command of data) {
      const delete_url : string = `${Routes.applicationCommands(clientId)}/${command.id}`;
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
