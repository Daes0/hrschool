// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: 'HimHoodieBot', // this is your bot name, it has to be the same in game
    owerName: 'Atekinz', // change this to the owner name
    ownerId: '6417b7c9b38fcbc2f504a811', // change this with the owner of the bot ID
    botId: '', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['Atekinz'], // you can add as many as you want
    moderators: ['Changeme',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 7,
      y: 0.5,
      z: 0.5,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"64e80327e64dcdf6d947c4aa" , // your room ID can be found in highrise.game/room/
    token: "b247c27820b5b0ee256df69def667fafe39c66bf2193cd6d23f344b996a89145" // your token ID     you can get one from https://highrise.game
  }
}
