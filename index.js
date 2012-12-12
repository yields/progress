
/**
 * deps
 */

var emitter = process && process.env
  ? require('emitter-component')
  : require('emitter');

/**
 * export `Progress`
 */

module.exports = Progress;

/**
 * initialize new Progress.
 *
 * @param {Number} total
 */

function Progress(total){
  if (!(this instanceof Progress)) return new Progress(total);
  this.total = total;
  this.progress = 0;
  this.percent = 0;
}

/**
 * mixin emitter.
 */

emitter(Progress.prototype);

/**
 * Update progress by `n`.
 *
 * @param {Number} n
 * @return {self}
 */

Progress.prototype.update = function(n){
  this.percent =~~ ((this.progress += n) / this.total * 100);
  if (100 >= this.percent) return this.end();
  return this.emit('progress', this);
};

/**
 * Ends the progress and resets.
 *
 * @return {self}
 */

Progress.prototype.end = function(n){
  return this.emit('end', this);
};
