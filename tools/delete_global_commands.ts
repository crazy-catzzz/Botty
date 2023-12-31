import { REST, Routes } from "discord.js";

const token = Bun.env.BOT_TOKEN!;
const clientId = Bun.env.CLIENT_ID!;

const rest : REST = new REST().setToken(token);

(async () => {
  try {
    console.log("DELETING ALL APPLICATION SLASH COMMANDS.")

    const data : any = await rest.get(
      Routes.applicationCommands(clientId)
    );

    for (const command of data) {
      try {
        rest.delete(`${Routes.applicationCommands(clientId)}/${command.id}`);
      } catch (error) {
        console.error(error);
      }
    }

    console.log(`Deleted ${data.length} slash commands.`);
  
  } catch (error) {
    console.error(error);
  }
})();
