const client = require('..');

client.on('ready', () => {

  console.log(`Zalogowano jako: ${client.user.tag}`);
});