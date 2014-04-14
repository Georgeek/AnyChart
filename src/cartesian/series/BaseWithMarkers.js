goog.provide('anychart.cartesian.series.BaseWithMarkers');

goog.require('anychart.cartesian.series.Base');
goog.require('anychart.elements.Multimarker');



/**
 * A base for all series except marker series.
 * @param {!(anychart.data.View|anychart.data.Set|Array|string)} data Data for the series.
 * @param {Object.<string, (string|boolean)>=} opt_csvSettings If CSV string is passed, you can pass CSV parser settings
 *    here as a hash map.
 * @constructor
 * @extends {anychart.cartesian.series.Base}
 */
anychart.cartesian.series.BaseWithMarkers = function(data, opt_csvSettings) {
  goog.base(this, data, opt_csvSettings);

  (/** @type {anychart.elements.Multimarker} */(this.markers())).enabled(false);
  var markers = (/** @type {anychart.elements.Multimarker} */(this.hoverMarkers()));
  markers.suspendSignalsDispatching();
  markers.fill('red');
  markers.size(5);
  markers.type(anychart.elements.Marker.Type.CIRCLE);
  markers.resumeSignalsDispatching(false);

  this.realMarkers_ = new anychart.elements.Multimarker();
  this.realMarkers_.listen(acgraph.events.EventType.MOUSEOVER, this.handleMarkerMouseOver, false, this);
  this.realMarkers_.listen(acgraph.events.EventType.MOUSEOUT, this.handleMarkerMouseOut, false, this);
  this.registerDisposable(this.realMarkers_);
};
goog.inherits(anychart.cartesian.series.BaseWithMarkers, anychart.cartesian.series.Base);


/**
 * Supported consistency states.
 * @type {number}
 */
anychart.cartesian.series.BaseWithMarkers.prototype.SUPPORTED_CONSISTENCY_STATES =
    anychart.cartesian.series.Base.prototype.SUPPORTED_CONSISTENCY_STATES |
    anychart.ConsistencyState.MARKERS;


/**
 * @type {anychart.elements.Multimarker}
 * @private
 */
anychart.cartesian.series.BaseWithMarkers.prototype.realMarkers_ = null;


/**
 * @type {anychart.elements.Multimarker}
 * @private
 */
anychart.cartesian.series.BaseWithMarkers.prototype.markers_ = null;


/**
 * @type {anychart.elements.Multimarker}
 * @private
 */
anychart.cartesian.series.BaseWithMarkers.prototype.hoverMarkers_ = null;


/**
 * @param {acgraph.events.Event} event .
 * @protected
 */
anychart.cartesian.series.BaseWithMarkers.prototype.handleMarkerMouseOver = function(event) {
  if (event && goog.isDef(event['markerIndex'])) {
    this.hoverPoint(event['markerIndex'], event);
  } else
    this.unhover();
};


/**
 * @param {acgraph.events.Event} event .
 * @protected
 */
anychart.cartesian.series.BaseWithMarkers.prototype.handleMarkerMouseOut = function(event) {
  this.unhover();
};


/**
 * Gets or sets series data markers.
 * @param {(anychart.elements.Multimarker|Object|string|null)=} opt_value Series data markers settings.
 * @return {!(anychart.elements.Multimarker|anychart.cartesian.series.BaseWithMarkers)} Markers instance or itself for chaining call.
 */
anychart.cartesian.series.BaseWithMarkers.prototype.markers = function(opt_value) {
  if (!this.markers_) {
    this.markers_ = new anychart.elements.Multimarker();
    this.registerDisposable(this.markers_);
    this.markers_.listenSignals(this.markersInvalidated_, this);
  }

  if (goog.isDef(opt_value)) {
    if (opt_value instanceof anychart.elements.Multimarker) {
      var data = opt_value.serialize();
      this.markers_.deserialize(data);
    } else if (goog.isObject(opt_value)) {
      this.markers_.deserialize(opt_value);
    } else if (anychart.isNone(opt_value)) {
      this.markers_.enabled(false);
    }
    return this;
  }
  return this.markers_;
};


/**
 * Gets or sets series hover data markers.
 * @param {(anychart.elements.Multimarker|Object|string|null)=} opt_value Series data markers settings.
 * @return {!(anychart.elements.Multimarker|anychart.cartesian.series.BaseWithMarkers)} Markers instance or itself for chaining call.
 */
anychart.cartesian.series.BaseWithMarkers.prototype.hoverMarkers = function(opt_value) {
  if (!this.hoverMarkers_) {
    this.hoverMarkers_ = new anychart.elements.Multimarker();
    this.registerDisposable(this.hoverMarkers_);
    // мы его не слушаем, потому что на следующий ховер он все равно переприменится
  }

  if (goog.isDef(opt_value)) {
    if (opt_value instanceof anychart.elements.Multimarker) {
      this.hoverMarkers_.deserialize(opt_value.serialize());
    } else if (goog.isObject(opt_value)) {
      this.hoverMarkers_.deserialize(opt_value);
    } else if (anychart.isNone(opt_value)) {
      this.hoverMarkers_.enabled(false);
    }
    return this;
  }
  return this.hoverMarkers_;
};


/**
 * Listener for markers invalidation.
 * @param {anychart.SignalEvent} event Invalidation event.
 * @private
 */
anychart.cartesian.series.BaseWithMarkers.prototype.markersInvalidated_ = function(event) {
  if (event.hasSignal(anychart.Signal.NEEDS_REDRAW)) {
    this.invalidate(anychart.ConsistencyState.MARKERS, anychart.Signal.NEEDS_REDRAW);
  }
};


/** @inheritDoc */
anychart.cartesian.series.BaseWithMarkers.prototype.startDrawing = function() {
  goog.base(this, 'startDrawing');
  this.markers().suspendSignalsDispatching();
  this.hoverMarkers().suspendSignalsDispatching();
  this.realMarkers_.suspendSignalsDispatching();
  this.realMarkers_.deserialize(this.markers_.serialize(true));
  this.realMarkers_.container(/** @type {acgraph.vector.ILayer} */(this.container()));
  this.realMarkers_.parentBounds(/** @type {anychart.math.Rect} */(this.pixelBounds()));
};


/** @inheritDoc */
anychart.cartesian.series.BaseWithMarkers.prototype.drawPoint = function() {
  goog.base(this, 'drawPoint');
  if (this.enabled() && this.firstPointDrawn) {
    this.drawMarker(false);
  }
};


/** @inheritDoc */
anychart.cartesian.series.BaseWithMarkers.prototype.finalizeDrawing = function() {
  this.realMarkers_.end();
  this.markers().resumeSignalsDispatching(false);
  this.hoverMarkers().resumeSignalsDispatching(false);
  this.realMarkers_.resumeSignalsDispatching(false);

  this.realMarkers_.markConsistent(anychart.ConsistencyState.ALL);
  if (this.markers_)
    this.markers_.markConsistent(anychart.ConsistencyState.ALL);
  if (this.hoverMarkers_)
    this.hoverMarkers_.markConsistent(anychart.ConsistencyState.ALL);

  goog.base(this, 'finalizeDrawing');
};


/**
 * Draws marker for the point.
 * @param {boolean} hovered If it is a hovered marker drawing.
 * @protected
 */
anychart.cartesian.series.BaseWithMarkers.prototype.drawMarker = function(hovered) {
  var pointMarker = this.getIterator().get(hovered ? 'hoverMarker' : 'marker');
  var index = this.getIterator().getIndex();
  var markers = /** @type {anychart.elements.Multimarker} */(hovered ? this.hoverMarkers() : this.markers());
  if (goog.isDef(pointMarker))
    markers.deserializeAt(index, /** @type {Object} */(pointMarker));
  this.realMarkers_.dropCustomSettingsAt(index);
  this.realMarkers_.deserializeAt(index, markers.serializeAt(index, !hovered));
  this.realMarkers_.draw(this.createPositionProvider(), index);
};


/**
 * @inheritDoc
 */
anychart.cartesian.series.BaseWithMarkers.prototype.serialize = function() {
  var json = goog.base(this, 'serialize');
  if (this.markers_) json['markers'] = this.markers_.serialize();
  if (this.hoverMarkers_) json['hoverMarkers'] = this.hoverMarkers_.serialize();
  return json;
};


/**
 * @inheritDoc
 */
anychart.cartesian.series.BaseWithMarkers.prototype.deserialize = function(config) {
  var markers = config['markers'];
  if (markers) this.markers(markers);
  var hoverMarkers = config['hoverMarkers'];
  if (hoverMarkers) this.hoverMarkers(hoverMarkers);
  return goog.base(this, 'deserialize', config);
};
