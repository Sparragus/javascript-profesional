function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
  player.mute();
  player.play();
};

export default AutoPlay;
