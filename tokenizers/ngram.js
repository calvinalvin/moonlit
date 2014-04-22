var natural = require('natural');

function Ngram(options) {
  options = options || {};
}; 

Ngram.prototype.tokenize = function(token, i, tokens) {
  return token;
};

module.exports = Ngram;