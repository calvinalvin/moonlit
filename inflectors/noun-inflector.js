var natural = require('natural');

function NounInflector(options) {
  options = options || {};
  this.engine = new natural.NounInflector();
};

NounInflector.prototype.pluralize = function(token, i, tokens) {
  return this.engine.pluralize(token);
};

NounInflector.prototype.singularize = function(token, i, tokens) {
  return this.engine.singularize(token);
};

module.exports = NounInflector;