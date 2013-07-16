/**
 * @fileOverview Toteutus komennolle changeteam: {@link Commands.changeteam}
 */

"use strict";

var log = require('../Utils').log;

/**
 * Vaihtaa pelaajan tiimiä. 0 = katsoja, 1 = vihreä, 2 = punainen
 * @methodOf Commands
 *
 * @param {player} who      Pelaaja, jonka tiimi vaihdetaan
 * @param {team}   integer  Tiimin numero
 */
var changeteam = {
  /**#nocode+*/
  params: [
    {name: 'who',  type: 'player', optional: false, help: 'Player whose team will be changed'},
    {name: 'team',  type: 'integer', optional: false, help: 'Team number, 0 for spectator, 1 for green and 2 for red'}
  ],
  help: "Changes player's team",
  remote: true,
  action: function commandsChangeTeam() {
    var server = this
      , caller = arguments[0]
      , player = this.getPlayer(arguments[1])
      , team   = parseInt(arguments[2])
      // Vastaa konsoliin tai pelaajalle, jos ilmenee ongelmia.
      , reply = function (s) {
        if (caller) { server.serverMessage(s, caller); }
        else        { log.warn(s); }
      };

    if (!player) {
      player = this.getPlayer(caller);
    }

    if (player.team === team) {
      reply(player.name + ' is already in that team!');
      return;
    }

    player.wantedTeam = team;
    
    // Kerrotaan kutsujalle myös
    if (caller) { this.serverMessage('Done! :)', caller); }
  }
  /**#nocode-*/
};

module.exports = changeteam;