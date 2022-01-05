const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { SlashCommandBuilder } = require('@discordjs/builders');

const commands = [
  new SlashCommandBuilder().setName('squish').setDescription('Use this command to get a random squishmallow just to make you smile! :)'),
  
  
]
const rest = new REST({ version: "9" }).setToken("bot token");

(async () => {
    try {
        console.log('[Discord API] Started refreshing application (/) commands.');
        await rest.put(
            Routes.applicationGuildCommands("925881279264731216", "839497888861126656"),
            { body: commands },
        );
        console.log('[Discord API] Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
