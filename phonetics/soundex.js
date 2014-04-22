var natural = require('natural');

function Soundex(options) {
  options = options || {};
};

Soundex.prototype.process = function(token, i, tokens) {
  return natural.SoundEx.process(token);
};

module.exports = Soundex;