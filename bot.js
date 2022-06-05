const { Telegraf } = require("telegraf");
const token = "5570018089:AAEKUSnzBWnWQbWiyG2u5F-h6IXN5nYRco8";
const link = "https://resonant-duckanoo-c33f50.netlify.app";
const bot = new Telegraf(token);

bot.start((ctx) =>
  ctx.reply("web", {
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
  })
);

bot.launch();
