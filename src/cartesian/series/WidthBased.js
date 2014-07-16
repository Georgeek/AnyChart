goog.provide('anychart.cartesian.series.WidthBased');

goog.require('anychart.cartesian.series.DiscreteBase');



/**
 * A base for all width-based series like bars, columns, OHLC and candlesticks.
 * @param {!(anychart.data.View|anychart.data.Set|Array|string)} data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @constructor
 * @extends {anychart.cartesian.series.DiscreteBase}
 */
anychart.cartesian.series.WidthBased = function(data, opt_csvSettings) {
  goog.base(this, data, opt_csvSettings);
};
goog.inherits(anychart.cartesian.series.WidthBased, anychart.cartesian.series.DiscreteBase);


/**
 * @private
 * @type {(number|string)}
 */
anychart.cartesian.series.WidthBased.prototype.barWidth_;


/**
 * @private
 * @type {string}
 */
anychart.cartesian.series.WidthBased.prototype.autoBarWidth_ = '90%';


/**
 * @param {(number|string)=} opt_value Point width pixel value.
 * @return {string|number|anychart.cartesian.series.WidthBased} Bar width pixel value or Bar instance for chaining call.
 */
anychart.cartesian.series.WidthBased.prototype.pointWidth = function(opt_value) {
  if (goog.isDef(opt_value)) {
    this.barWidth_ = opt_value;
    return this;
  } else {
    return goog.isDef(this.barWidth_) ? this.barWidth_ : this.autoBarWidth_;
  }
};


/**
 * For internal use.
 * @param {number} value Calculated bar width ratio.
 * @return {anychart.cartesian.series.WidthBased} Bar width pixel value or Bar instance for chaining call.
 */
anychart.cartesian.series.WidthBased.prototype.setAutoBarWidth = function(value) {
  this.autoBarWidth_ = (value * 100).toString() + '%';
  return this;
};


/**
 * @return {number} Point width in pixels.
 * @protected
 */
anychart.cartesian.series.WidthBased.prototype.getPointWidth = function() {
  // todo(Anton Saukh): fix for linear scale case.
  var categoryWidth = (this.xScale().getPointWidthRatio() || (1 / this.getIterator().getRowsCount())) *
      this.pixelBounds().width;
  return anychart.utils.normalize(/** @type {(number|string)} */(this.pointWidth()), categoryWidth);
};


/**
 * @inheritDoc
 */
anychart.cartesian.series.WidthBased.prototype.serialize = function() {
  var json = goog.base(this, 'serialize');
  json['pointWidth'] = this.pointWidth();
  return json;
};


/**
 * @inheritDoc
 */
anychart.cartesian.series.WidthBased.prototype.deserialize = function(config) {
  this.pointWidth(config['pointWidth']);
  return goog.base(this, 'deserialize', config);
};


/** @inheritDoc */
anychart.cartesian.series.WidthBased.prototype.restoreDefaults = function() {
  var result = goog.base(this, 'restoreDefaults');

  this.markers(null);

  return result;
};
