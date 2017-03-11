'use strict';

/**
 * See brief details of npcs/players in nearby rooms
 */
module.exports = srcPath => {
  const B = require(srcPath + 'Broadcast');

  return {
    usage: 'scan',
    command: state => (args, player) => {
      for (const exit of player.room.exits) {
        const room = state.RoomManager.getRoom(exit.roomId);
        B.sayAt(player, `(${exit.direction}) ${room.title}:`);
        for (const npc of room.npcs) {
          B.sayAt(player, `  [NPC] ${npc.name}`);
        }
        for (const pc of room.players) {
          B.sayAt(player, `  [NPC] ${pc.name}`);
        }
        B.sayAt(player);
      }
    }
  };
};