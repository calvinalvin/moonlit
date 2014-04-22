var natural = require('natural');

function Ngrams(options) {
  options = options || {};
  this.minGramSize = options.minGramSize || 2;
  this.maxGramSize = options.maxGramSize || 10;
  this.engine = natural.NGrams;
}; 

Ngram.prototype.tokenize = function(str) {
  var tokens = [];
  var grams = this.engine.ngrams(str, this.maxGramSize);
  grams.forEach(function(set, i) {
  	set.forEach(function(el, j) {
  	  tokens[i] += el + ' ';
  	});

  	tokens[i].trim();
  });
  return tokens;
};

module.exports = Ngram;