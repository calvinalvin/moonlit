/*
** Returns bigram tokens
** input => "The quick brown fox"
** tokens => ["The quick", "quick brown", "brown fox"]
*/

function Bigram(options) {
  options = options || {};
  this.minGramSize = options.minGramSize || 2;
  this.maxGramSize = options.maxGramSize || 10;
};

Bigram.prototype.tokenize = function (token, i, tokens) {
  return token + " " + tokens[i + 1];
};

module.exports = Bigram;