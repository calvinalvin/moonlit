var natural = require('natural');

function Soundex(options) {
  options = options || {};
};

Soundex.prototype.process = function(token) {
  return natural.SoundEx.process(token);
};

module.exports = Soundex;