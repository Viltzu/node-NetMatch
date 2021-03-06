/**
 * @fileOverview Toteutus komennolle asplayer: {@link Commands.asplayer}
 */

"use strict";

var log = require('../Utils').log;

/**
 * Suorittaa komennon toisena pelaajana. >:)
 * @methodOf Commands
 *
 * @param {player}  as   Kenenä komentoa kutsutaan
 * @param {command} cmd  Mitä komentoa kutsutaan
 * @param {string} args  komennon parametrit
 */
var asplayer = {
  /**#nocode+*/
  params: [
    {name: 'as',   type: 'player',  optional: false, help: 'Player who to call as'},
    {name: 'cmd',  type: 'command', optional: false, help: 'Command to call'},
    {name: 'args', type: 'string',  optional: true,  help: 'Command\'s arguments.'}
  ],
  help: 'Calls a command as specified player.',
  remote: true,
  action: function commandsAsPlayer() {
    var plr = this.getPlayer(arguments[1])
      , cmd = arguments[2]
      , args =  Array.prototype.slice.call(arguments).splice(3);
    if (!plr) { log.warn('Couldn\'t find player "%0"', arguments[1]); return; }
    log.info('Calling `%0` as "%1" with arguments `%2`', cmd, plr.name, args.join(' ') || 'none');
    this.commands.call(cmd, args, plr);
  }
  /**#nocode-*/
};

module.exports = asplayer;
