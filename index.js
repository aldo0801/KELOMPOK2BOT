const TeleBot = require("telebot");
const bot = new TeleBot("6012897685:AAFxpFOrIq0h5_DW3eW9iVywMDQAFEWAxLs");

bot.on(["/start", "/hello"], (msg) =>
  msg.reply.text(
    "Selamat datang \ndibot telegram /kelompok kami... \nbot ini dapat memberikan persentase seberapa berjodohnya kalian dengan orang yang kalian terget \ncara bermainnya dengan mengetikkan key word berikut \n\n\n' /mulai nama1 dan nama2 '\n\n\nAyo coba sekarang!!!"
  )
);

bot.on("/kelompok", (msg) =>
  msg.reply.text(
    "anggota:\n1. Aldo Hermawan Suryana \n2. Ragil Ramadhan \n3. Rio Antono"
  )
);

bot.on(/^\/mulai (.+) dan (.+)$/i, (msg, props) => {
  const name1 = props.match[1].toLowerCase();
  const name2 = props.match[2].toLowerCase();
  const matchPercentage = Math.floor(Math.random() * 101);
  if (matchPercentage > 80) {
    const response = `${name1} dan ${name2} berjodoh ${matchPercentage}% 🥰❤️❤️❤️`;
    return bot.sendMessage(msg.chat.id, response);
  } else if (matchPercentage > 70) {
    const response = `${name1} dan ${name2} berjodoh ${matchPercentage}% 😍`;
    return bot.sendMessage(msg.chat.id, response);
  } else if (matchPercentage > 60) {
    const response = `${name1} dan ${name2} berjodoh ${matchPercentage}% 😊`;
    return bot.sendMessage(msg.chat.id, response);
  } else if (matchPercentage > 50) {
    const response = `${name1} dan ${name2} berjodoh ${matchPercentage}% 😐`;
    return bot.sendMessage(msg.chat.id, response);
  } else if (matchPercentage < 20) {
    const response = `${name1} dan ${name2} berjodoh ${matchPercentage}% jangan ngarep kamu 😭`;
    return bot.sendMessage(msg.chat.id, response);
  } else {
    const response = `${name1} dan ${name2} berjodoh ${matchPercentage}% 🥹`;
    return bot.sendMessage(msg.chat.id, response);
  }
});
bot.start();
