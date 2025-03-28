import { Module, SlashCommand, Event } from 'ayocord';
import { CommandInteraction, Events, Message, SlashCommandBuilder } from 'discord.js';

@Module({
  name: "client_module"
})
export class ClientModule {
  
  @SlashCommand({
    builder: new SlashCommandBuilder()
      .setName("start")
      .setDescription("idk")
  })
  async start(interaction: CommandInteraction) {}
  
  @Event({
    name: Events.MessageCreate,
    once: false
  })
  async events(interaction: Message) {}
}