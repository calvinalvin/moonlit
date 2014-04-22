var natural = require('natural');

function Metaphone(options) {
  options = options || {};
};

Metaphone.prototype.process = function(token) {
  return natural.Metaphone.process(token);
};

module.exports = Metaphone;