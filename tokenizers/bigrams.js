var natural = require('natural');

/*
** Returns bigram tokens
** input => "The quick brown fox"
** tokens => ["The quick", "quick brown", "brown fox"]
*/

function Bigrams(options) {
  options = options || {};
};

Bigrams.prototype.tokenize = function (str) {
  var tokens = [];
  var grams = natural.NGrams.bigrams(str);
  grams.forEach(function(set, i) {
    tokens[i] = "";
  	set.forEach(function(el, j) {
  	  tokens[i] += el + ' ';
  	});

  	tokens[i].trim();
  });
  return tokens;
};

module.exports = Bigrams;