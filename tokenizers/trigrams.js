var natural = require('natural');

/*
** Returns bigram tokens
** input => "The quick brown fox"
** tokens => ["The quick brown", "quick brown fox"]
*/

function Trigrams(options) {
  options = options || {};
  this.engine = natural.NGrams;
};

Trigrams.prototype.tokenize = function (str) {
  var tokens = [];
  var grams = this.engine.trigrams(str);
  grams.forEach(function(set, i) {
  	set.forEach(function(el, j) {
  	  tokens[i] += el + ' ';
  	});

  	tokens[i].trim();
  });
  return tokens;
};

module.exports = Trigrams;