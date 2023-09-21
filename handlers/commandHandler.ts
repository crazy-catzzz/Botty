import { readdirSync } from "fs";
import { resolve } from "path";

const handler_log = (str : string) => {
  console.log(`[COMMAND HANDLER] ${str}`);
}

class CommandHandler {
  commands : Map<string, any> = new Map();

  init = async () => {
    handler_log("Initializing commands...");

    const commands_dir = resolve("./commands");
    const commands_files = readdirSync(commands_dir);

    for (const file of commands_files) {
      const { cmd_obj } = await import(`../commands/${file}`);

      this.commands.set(cmd_obj.name, cmd_obj);
      handler_log(`Loaded ${cmd_obj.name}`);
    }
  }

  exec_cmd = async (cmd_interaction : any) => {
    const cmd_name : string = cmd_interaction.commandName;

    handler_log(`Executing ${cmd_name}`);
    
    const command = this.commands.get(cmd_name);

    try {
      await command.execute(cmd_interaction);
    } catch (error) {
      console.error(error);
      if (cmd_interaction.replied || cmd_interaction.deferred) {
        await cmd_interaction.followUp({ content: `An error occurred when executing the ${cmd_name} command.`, ephemeral: true });
      } else {
        await cmd_interaction.reply({ content: `An error occurred when executing the ${cmd_name} command.`, ephemeral: true });
      }
    }
  }
}

export const cmd_handler_obj = new CommandHandler();
