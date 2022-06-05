const { Telegraf } = require("telegraf");
const token = "5570018089:AAEKUSnzBWnWQbWiyG2u5F-h6IXN5nYRco8";
const link = "https://pukochka.github.io/botfree";
const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply("d"), {
  reply_markup: {
    keyboard: [
      [
        {
          text: "web sadasd",
          web_app: { url: link },
        },
      ],
    ],
  },
});

bot.launch();
