import { ConfigUtility, DiscordFactory } from 'ayocord';
import { GatewayIntentBits } from 'discord.js';

async function bootstrap() {
  const config = new ConfigUtility();
  const bots = await DiscordFactory.createMultiToken({
    DEFAULT: {
      options: {
        intents: [
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.GuildMembers,
        ],
        prefix: '.',
      },
      modules: [],
    },
    bots: {
      dev: {
        options: {
          token: config.get('TOKEN') ?? '',
        },
      },
    },
  });
  
  bots.map(bot => bot.login());
}

bootstrap()