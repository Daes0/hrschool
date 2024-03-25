// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: 'Baristaafk', // this is your bot name, it has to be the same in game
    owerName: 'Atekinz', // change this to the owner name
    ownerId: '6417b7c9b38fcbc2f504a811', // change this with the owner of the bot ID
    botId: '', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['Atekinz'], // you can add as many as you want
    moderators: ['Changeme',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 17.5,
      y: 0.5,
      z: 18.5,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"65fcbb8bd6cba684247cb250" , // your room ID can be found in highrise.game/room/
    token: "1714eef12a57890619be60fdd9c418484a7379f37c2637149bc0a138d64a7f6d" // your token ID     you can get one from https://highrise.game
  }
}