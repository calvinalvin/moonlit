var natural = require('natural');

/*
** Returns bigram tokens
** input => "The quick brown fox"
** tokens => ["The quick", "quick brown", "brown fox"]
*/

function Bigrams(options) {
  options = options || {};
  this.engine = natural.NGrams;
};

Bigrams.prototype.tokenize = function (str) {
  var tokens = [];
  var grams = this.engine.bigrams(str);
  grams.forEach(function(set, i) {
  	set.forEach(function(el, j) {
  	  tokens[i] += el + ' ';
  	});

  	tokens[i].trim();
  });
  return tokens;
};

module.exports = Bigrams;