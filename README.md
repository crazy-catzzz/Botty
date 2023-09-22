# Botty

Botty is a simple TypeScript template Discord bot, complete with a command handler and an event handler.

# Installation

Botty uses the [Bun](https://bun.sh) JavaScript runtime.

To install dependencies:

```bash
bun install
```

To run:

```bash
bun start
```
# Usage and extension

Botty is built to help you create your own bot by giving you a base with a command and event handler as well as a custom Discord Client class.

Both the commands and the events implement the `ICommand` and `IEvent` interface respectively, which means that adding more commands or listening for more events is stupidly easy.

To add commands, just create a new TS file under the `./commands` folder.
To listen for other events, create a new TS file under the `./events` folder.

You can also freely edit the `BottyClient` class to add more handlers, such as a music handler.

## Configuration
Botty uses a `.env` file to store its environment variables.
The `.env` file looks like this:
```
BOT_TOKEN = <your token goes here>
CLIENT_ID = <your application ID goes here>
GUILD_ID  = <your test guild ID goes here [OPTIONAL]>
```

## Slash commands

Botty fully supports slash commands, to deploy them, just run:

For local guild commands:
```
bun deployGuildCmds
```
For global commands:
```
bun deployGlobalCmds
```

You can also delete slash commands by running:

For local guild commands:
```
bun deleteGuildCmds
```
For global commands:
```
bun deleteGlobalCmds
```

**NOTE**: To manage guild commands, you have to set `GUILD_ID` in the `.env` file.
