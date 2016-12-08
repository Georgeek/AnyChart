window.anychart = window.anychart || {};
window.anychart.themes = window.anychart.themes || {};
window.anychart.themes.v6 = {
  defaultFontSettings: {
    fontSize: 10,
    fontFamily: "Verdana",
    fontColor: "#222",
    textDirection: "ltr",
    fontOpacity: 1,
    fontDecoration: "none",
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textIndent: 0,
    vAlign: "top",
    hAlign: "start",
    textWrap: "byLetter",
    textOverflow: "",
    selectable: !1,
    disablePointerEvents: !1,
    useHtml: !1
  },
  palette: {
    type: "distinct",
    items: "#1D8BD1 #F1683C #2AD62A #DBDC25 #8FBC8B #D2B48C #FAF0E6 #20B2AA #B0C4DE #DDA0DD #9C9AFF #9C3063 #FFFFCE #CEFFFF #630063 #FF8284 #0065CE #CECFFF #000084 #FF00FF #FFFF00 #00FFFF #840084 #840000 #008284 #0000FF #00CFFF #CEFFFF #CEFFCE #FFFF9C #9CCFFF #FF9ACE #CE9AFF #FFCF9C #3165FF #31CFCE #9CCF00 #FFCF00 #FF9A00 #FF6500".split(" ")
  },
  hatchFillPalette: {items: "backwardDiagonal forwardDiagonal horizontal vertical dashedBackwardDiagonal grid dashedForwardDiagonal dashedHorizontal dashedVertical diagonalCross diagonalBrick divot horizontalBrick verticalBrick checkerBoard confetti plaid solidDiamond zigZag weave percent05 percent10 percent20 percent25 percent30 percent40 percent50 percent60 percent70 percent75 percent80 percent90".split(" ")},
  markerPalette: {items: "circle square triangleUp diamond triangleDown cross diagonalCross star4 star5 star6 star7 star10 pentagon trapezium line".split(" ")},
  defaultBackground: {enabled: !0, fill: "#000 0.5", stroke: "#000", cornerType: "round", corners: 0},
  defaultTitle: {enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontColor: "#222", fontWeight: "bold", text: "Title text", background: {enabled: !1}, width: null, height: null, margin: {top: 5, right: 5, bottom: 5, left: 5}, padding: {top: 5, right: 5, bottom: 5, left: 5}, align: "center"},
  defaultLabelFactory: {
    enabled: !0,
    offsetX: 0,
    offsetY: 0,
    anchor: "center",
    padding: {top: 2, right: 4, bottom: 2, left: 4},
    fontFamily: "Arial",
    fontSize: 11,
    fontColor: "#000",
    rotation: 0,
    minFontSize: 8,
    maxFontSize: 72,
    adjustFontSize: {width: !1, height: !1},
    background: {enabled: !1, stroke: {keys: ["0 #DDDDDD 1", "1 #D0D0D0 1"], angle: "90"}, fill: {keys: ["0 #FFFFFF 1", "0.5 #F3F3F3 1", "1 #FFFFFF 1"], angle: "90"}},
    textFormatter: function() {
      return this.value
    },
    positionFormatter: function() {
      return this.value
    }
  },
  defaultMarkerFactory: {
    size: 10, position: "center", anchor: "center",
    offsetX: 0, offsetY: 0, rotation: 0, positionFormatter: function() {
      return this.value
    }
  },
  defaultTooltip: {
    enabled: !0,
    allowLeaveScreen: !1,
    isFloating: !0,
    title: {
      enabled: !1,
      fontSize: 10,
      fontFamily: "Verdana",
      fontColor: "#232323",
      fontWeight: "bold",
      vAlign: "top",
      hAlign: "center",
      text: "Tooltip Title",
      background: {enabled: !1},
      rotation: 0,
      width: null,
      height: null,
      margin: 0,
      padding: {top: 5, right: 10, bottom: 5, left: 10},
      align: "center",
      orientation: "top",
      zIndex: 1
    },
    separator: {
      enabled: !1, width: "100%", height: 1, margin: {
        top: 0, right: 5, bottom: 0,
        left: 5
      }, orientation: "top", fill: ["0 #333333 0", "0.5 #333333 1", "1 #333333 0"], stroke: "none", zIndex: 1
    },
    content: {
      enabled: !0,
      fontSize: 10,
      fontFamily: "Verdana",
      fontColor: "#232323",
      fontWeight: "bold",
      vAlign: "top",
      hAlign: "center",
      textWrap: "byLetter",
      text: "Content Title",
      background: {enabled: !1},
      padding: {top: 5, right: 10, bottom: 5, left: 10},
      width: null,
      height: null,
      anchor: "leftTop",
      offsetX: 0,
      offsetY: 0,
      position: "leftTop",
      minFontSize: 8,
      maxFontSize: 72,
      adjustFontSize: {width: !1, height: !1},
      rotation: 0,
      zIndex: 1
    },
    background: {
      enabled: !0,
      fill: ["0 #fff 1", "0.5 #f3f3f3 1", "1 #fff 1"], stroke: ["0 #ddd 1", "1 #d0d0d0 1"], cornerType: "none", corners: 10, zIndex: 0
    },
    padding: {top: 0, right: 0, bottom: 0, left: 0},
    offsetX: 5,
    offsetY: 5,
    anchor: "centerBottom",
    hideDelay: 0,
    titleFormatter: function() {
      return this.value
    },
    contentFormatter: function() {
      return this.value
    }
  },
  defaultAxis: {
    enabled: !0, startAngle: 0, drawLastLabel: !0, drawFirstLabel: !0, staggerMaxLines: 2, staggerMode: !1, staggerLines: null, width: null, overlapMode: "noOverlap", stroke: {
      color: "#474747", lineJoin: "round",
      lineCap: "square"
    }, title: {text: "Axis title", margin: {top: 10, right: 5, bottom: 10, left: 5}, background: {enabled: !1, stroke: {keys: ["#ddd", "#d0d0d0"], angle: "90"}, fill: {keys: ["#fff", "#f3f3f3", "#fff"], angle: "90"}}, zIndex: 35}, labels: {
      enabled: !0, rotation: 0, offsetX: 0, offsetY: 0, minFontSize: 8, maxFontSize: 72, anchor: "center", padding: {top: 1, right: 2, bottom: 1, left: 2}, fontFamily: "Tahoma", fontSize: 11, textWrap: "noWrap", background: {
        enabled: !1, stroke: {keys: ["#ddd", "#d0d0d0"], angle: "90"}, fill: {
          keys: ["#fff", "#f3f3f3", "#fff"],
          angle: "90"
        }
      }, textFormatter: function() {
        return this.value
      }, positionFormatter: function() {
        return this.value
      }, zIndex: 35
    }, minorLabels: {
      minFontSize: 8,
      maxFontSize: 72,
      enabled: !1,
      rotation: 0,
      offsetX: 0,
      offsetY: 0,
      anchor: "center",
      padding: {top: 1, right: 1, bottom: 0, left: 1},
      fontFamily: "Tahoma",
      fontSize: 11,
      textWrap: "noWrap",
      background: {enabled: !1, stroke: {keys: ["#ddd", "#d0d0d0"], angle: "90"}, fill: {keys: ["#fff", "#f3f3f3", "#fff"], angle: "90"}},
      textFormatter: function() {
        return this.value
      },
      positionFormatter: function() {
        return this.value
      },
      zIndex: 35
    }, ticks: {enabled: !0, length: 5, position: "outside", stroke: {color: "#313131", lineJoin: "round", lineCap: "butt"}, zIndex: 35}, minorTicks: {enabled: !1, length: 2, position: "outside", stroke: {color: "#313131", lineJoin: "round", lineCap: "butt"}, zIndex: 35}, zIndex: 35
  },
  chart: {
    enabled: !0, title: {text: "Chart Title", margin: {bottom: 15}, zIndex: 80}, background: {enabled: !0, fill: ["#fff", "#f3f3f3", "#fff"], stroke: "none", zIndex: 1}, margin: {top: 0, right: 0, bottom: 0, left: 0}, padding: {top: 10, right: 20, bottom: 10, left: 20}, legend: {
      enabled: !1,
      fontSize: "11",
      fontFamily: "Tahoma",
      itemsLayout: "horizontal",
      itemsSpacing: 15,
      items: null,
      itemsFormatter: null,
      itemsTextFormatter: null,
      itemsSourceMode: "default",
      inverted: !1,
      hoverCursor: "pointer",
      iconTextSpacing: 5,
      width: null,
      height: null,
      position: "bottom",
      align: "center",
      margin: {top: 0, right: 0, bottom: 0, left: 10},
      padding: {top: 7, right: 7, bottom: 7, left: 7},
      background: {enabled: !0, fill: ["#fff", "#f3f3f3", "#fff"], stroke: "#ddd", corners: 5},
      title: {
        enabled: !1, fontSize: "10", fontFamily: "Verdana", text: "Legend title", background: {
          enabled: !1,
          fill: {keys: ["#fff", "#f3f3f3", "#fff"], angle: "90"}, stroke: {keys: ["#ddd", "#d0d0d0"], angle: "90"}
        }, margin: {top: 0, right: 0, bottom: 3, left: 0}, padding: {top: 0, right: 0, bottom: 0, left: 0}, orientation: "top"
      },
      titleSeparator: {enabled: !1, width: "100%", height: 1, margin: {top: 3, right: 0, bottom: 3, left: 0}, orientation: "top", fill: ["#000 0", "#000", "#000 0"], stroke: "none"},
      paginator: {
        enabled: !0, background: {enabled: !1, fill: {keys: ["#fff", "#f3f3f3", "#fff"], angle: "90"}, stroke: {keys: ["#ddd", "#d0d0d0"], angle: "90"}}, padding: {
          top: 0, right: 0,
          bottom: 0, left: 0
        }, margin: {top: 0, right: 0, bottom: 0, left: 0}, orientation: "right", layout: "horizontal", zIndex: 30
      },
      tooltip: {title: {enabled: !1, margin: {top: 3, right: 3, bottom: 0, left: 3}, padding: {top: 0, right: 0, bottom: 0, left: 0}}},
      zIndex: 20
    }, credits: {enabled: !0, text: "AnyChart", url: "http://anychart.com", alt: "AnyChart.com", inChart: !1}, defaultLabelSettings: {
      enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontWeight: "bold", textWrap: "byLetter", text: "Chart label", background: {enabled: !1}, padding: {top: 0, right: 0, bottom: 0, left: 0},
      width: null, height: null, anchor: "leftTop", position: "leftTop", offsetX: 0, offsetY: 0, minFontSize: 8, maxFontSize: 72, adjustFontSize: {width: !1, height: !1}, rotation: 0, zIndex: 50
    }, chartLabels: [], animation: {enabled: !1, duration: 1E3}, bounds: {top: null, right: null, bottom: null, left: null, width: null, height: null, minWidth: null, minHeight: null, maxWidth: null, maxHeight: null}
  },
  cartesian: {
    defaultSeriesSettings: {
      base: {
        fill: function() {
          return this.sourceColor
        }, hoverFill: function() {
          return window.anychart.color.lighten(this.sourceColor)
        },
        stroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hatchFill: !1, labels: {
          enabled: !1, fontFamily: "Arial", fontSize: 11, background: {enabled: !1}, padding: {top: 2, right: 4, bottom: 2, left: 4}, position: "centerTop", anchor: "center", offsetX: 0, offsetY: 0, rotation: 0, width: null, height: null, textFormatter: function() {
            return this.value
          }, positionFormatter: function() {
            return this.value
          }
        }, hoverLabels: {enabled: null}, markers: {
          enabled: !1,
          disablePointerEvents: !1, position: "centerTop", rotation: 0, anchor: "center", offsetX: 0, offsetY: 0, size: 4, positionFormatter: function() {
            return this.value
          }
        }, hoverMarkers: {enabled: null, size: 6}, clip: !0, color: null, tooltip: {
          titleFormatter: function() {
            return this.name
          }, contentFormatter: function() {
            return this.x + ": " + this.value
          }
        }, xScale: null, yScale: null, error: {
          mode: "both", xError: null, xUpperError: null, xLowerError: null, valueError: null, valueUpperError: null, valueLowerError: null, xErrorWidth: 10, valueErrorWidth: 10, xErrorStroke: "#1D8BD1",
          valueErrorStroke: "#1D8BD1"
        }, connectMissingPoints: !1
      }, area: {labels: {anchor: "bottom"}}, bar: {markers: {position: "rightCenter"}, labels: {position: "rightCenter"}}, box: {
        markers: {position: "centerTop"}, labels: {
          position: "centerTop", textFormatter: function() {
            return this.x
          }
        }, fill: function() {
          return window.anychart.color.lighten(window.anychart.color.lighten(this.sourceColor))
        }, medianStroke: function() {
          return this.sourceColor
        }, hoverMedianStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, stemStroke: function() {
          return this.sourceColor
        },
        hoverStemStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, whiskerStroke: function() {
          return this.sourceColor
        }, hoverWhiskerStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, whiskerWidth: "20%", hoverWhiskerWidth: "20%", outlierMarkers: {
          enabled: !0, disablePointerEvents: !1, position: "center", rotation: 0, anchor: "center", offsetX: 0, offsetY: 0, size: 4, positionFormatter: function() {
            return this.value
          }
        }, hoverOutlierMarkers: {enabled: null, size: 6}, tooltip: {
          content: {hAlign: "left"},
          contentFormatter: function() {
            return "lowest: " + parseFloat(this.lowest).toFixed(2) + "\nq1: " + parseFloat(this.q1).toFixed(2) + "\nmedian: " + parseFloat(this.median).toFixed(2) + "\nq3: " + parseFloat(this.q3).toFixed(2) + "\nhighest: " + parseFloat(this.highest).toFixed(2)
          }
        }
      }, bubble: {
        markers: {position: "center"}, labels: {position: "center", anchor: "center"}, displayNegative: !1, negativeFill: function() {
          return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))
        }, hoverNegativeFill: function() {
          return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))))
        },
        negativeStroke: function() {
          return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))))
        }, hoverNegativeStroke: function() {
          return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))))
        }, negativeHatchFill: null, hoverNegativeHatchFill: null, tooltip: {
          contentFormatter: function() {
            return parseFloat(this.value).toFixed(2)
          }
        }
      },
      candlestick: {
        markers: {position: "centerTop"}, risingFill: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }, hoverRisingFill: function() {
          return window.anychart.color.lighten(window.anychart.color.lighten(this.sourceColor))
        }, fallingFill: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverFallingFill: function() {
          return window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))
        }, risingHatchFill: null, hoverRisingHatchFill: null, fallingHatchFill: null, hoverFallingHatchFill: null,
        risingStroke: function() {
          return this.sourceColor
        }, hoverRisingStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }, fallingStroke: function() {
          return window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))
        }, hoverFallingStroke: function() {
          return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))
        }, tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "O: " + parseFloat(this.open).toFixed(4) + "\nH: " +
                parseFloat(this.high).toFixed(4) + "\nL: " + parseFloat(this.low).toFixed(4) + "\nC: " + parseFloat(this.close).toFixed(4)
          }
        }, labels: {
          position: "centerTop", textFormatter: function() {
            return this.x
          }, offsetY: -10
        }
      }, column: {markers: {position: "centerTop"}, labels: {position: "centerTop"}}, line: {
        markers: {enabled: !0}, labels: {anchor: "bottom"}, stroke: function() {
          return this.sourceColor
        }, hoverStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }
      }, marker: {
        size: 10, hoverSize: 12, hatchFill: !1, tooltip: {
          contentFormatter: function() {
            return parseFloat(this.value).toFixed(2)
          }
        }
      },
      ohlc: {
        risingStroke: function() {
          return this.sourceColor
        }, hoverRisingStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }, fallingStroke: function() {
          return window.anychart.color.darken(window.anychart.color.darken(this.sourceColor))
        }, hoverFallingStroke: function() {
          return window.anychart.color.darken(window.anychart.color.darken(window.anychart.color.darken(this.sourceColor)))
        }, tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "O: " + parseFloat(this.open).toFixed(4) +
                "\nH: " + parseFloat(this.high).toFixed(4) + "\nL: " + parseFloat(this.low).toFixed(4) + "\nC: " + parseFloat(this.close).toFixed(4)
          }
        }, labels: {
          textFormatter: function() {
            return this.x
          }, offsetY: -10
        }
      }, rangeArea: {
        labels: {anchor: "bottom"}, highStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverHighStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, lowStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverLowStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        },
        tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "High: " + parseFloat(this.high).toFixed(2) + "\nLow: " + parseFloat(this.low).toFixed(2)
          }
        }
      }, rangeBar: {
        markers: {position: "rightCenter"}, labels: {position: "rightCenter"}, tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "High: " + parseFloat(this.high).toFixed(2) + "\nLow: " + parseFloat(this.low).toFixed(2)
          }
        }
      }, rangeColumn: {
        tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "High: " + parseFloat(this.high).toFixed(2) +
                "\nLow: " + parseFloat(this.low).toFixed(2)
          }
        }
      }, rangeSplineArea: {
        labels: {anchor: "bottom"}, highStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverHighStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, lowStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverLowStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "High: " + parseFloat(this.high).toFixed(2) +
                "\nLow: " + parseFloat(this.low).toFixed(2)
          }
        }
      }, rangeStepArea: {
        labels: {anchor: "bottom"}, highStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverHighStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, lowStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverLowStroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, tooltip: {
          content: {hAlign: "left"}, contentFormatter: function() {
            return "High: " + parseFloat(this.high).toFixed(2) +
                "\nLow: " + parseFloat(this.low).toFixed(2)
          }
        }
      }, spline: {
        legendItem: {iconType: "spline"}, markers: {enabled: !0}, labels: {anchor: "bottom"}, stroke: function() {
          return this.sourceColor
        }, hoverStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }
      }, splineArea: {labels: {anchor: "bottom"}}, stepLine: {
        legendItem: {iconType: "stepline"}, markers: {enabled: !0}, labels: {anchor: "bottom"}, stroke: function() {
          return this.sourceColor
        }, hoverStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }
      },
      stepArea: {labels: {anchor: "bottom"}}
    },
    defaultGridSettings: {enabled: !0, isMinor: !1, drawFirstLine: !0, drawLastLine: !0, oddFill: "#fff", evenFill: "#f5f5f5", stroke: "#c1c1c1", scale: 1, zIndex: 10},
    defaultMinorGridSettings: {enabled: !0, isMinor: !0, drawFirstLine: !0, drawLastLine: !0, oddFill: "#fff", evenFill: "#f5f5f5", stroke: "#c1c1c1", scale: 1, zIndex: 10},
    defaultXAxisSettings: {enabled: !0, orientation: "bottom", title: {enabled: !0, text: "X-Axis"}, width: null, scale: 0},
    defaultYAxisSettings: {
      enabled: !0, orientation: "left", title: {
        enabled: !0,
        text: "Y-Axis"
      }, minorTicks: {enabled: !0}, width: null, scale: 1
    },
    defaultLineMarkerSettings: {enabled: !0, value: 0, layout: "horizontal", stroke: {color: "#DC0A0A", thickness: 1, opacity: 1, dash: "", lineJoin: "miter", lineCap: "square"}, zIndex: 25.2, scale: 1},
    defaultTextMarkerSettings: {enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontColor: "#222222", fontWeight: "bold", value: 0, anchor: "center", align: "center", layout: "horizontal", offsetX: 0, offsetY: 0, text: "Text marker", width: null, height: null, zIndex: 25.3, scale: 1},
    defaultRangeMarkerSettings: {
      enabled: !0,
      from: 0, to: 0, layout: "horizontal", fill: "#000 0.3", zIndex: 25.1, scale: 1
    },
    title: {enabled: !1},
    background: {enabled: !1},
    legend: {enabled: !1},
    margin: {top: 0, right: 0, bottom: 0, left: 0},
    padding: {top: 0, right: 0, bottom: 0, left: 0},
    series: [],
    grids: [],
    minorGrids: [],
    xAxes: [],
    yAxes: [],
    lineAxesMarkers: [],
    rangeAxesMarkers: [],
    textAxesMarkers: [],
    scales: [{type: "ordinal", inverted: !1, names: [], ticks: {interval: 1}}, {
      type: "linear", inverted: !1, maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {
        mode: "linear",
        base: 0, minCount: 4, maxCount: 6
      }, minorTicks: {mode: "linear", base: 0, count: 5}, stackMode: "none", stickToZero: !0
    }],
    xScale: 0,
    yScale: 1,
    barsPadding: .1,
    barGroupsPadding: .5,
    maxBubbleSize: "20%",
    minBubbleSize: "5%",
    barChartMode: !1,
    crosshair: {
      enabled: !1, xStroke: "#000", yStroke: "#000", xLabel: {
        x: 0, y: 0, axisIndex: 0, textFormatter: function() {
          return this.value
        }, enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontColor: "#fff", fontWeight: 400, textWrap: "byLetter", disablePointerEvents: !0, text: "Label text", background: {enabled: !0, fill: "#000 .85"},
        padding: {top: 6, right: 10, bottom: 6, left: 10}, width: null, height: null, anchor: null, offsetX: 0, offsetY: 0, position: null, minFontSize: 8, maxFontSize: 72, adjustFontSize: {width: !1, height: !1}, rotation: 0
      }, yLabel: {
        x: 0, y: 0, axisIndex: 0, textFormatter: function() {
          return this.value
        }, enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontColor: "#fff", fontWeight: 400, textWrap: "byLetter", disablePointerEvents: !0, text: "Label text", background: {enabled: !0, fill: "#000 .85"}, padding: {top: 6, right: 10, bottom: 6, left: 10}, width: null, height: null,
        anchor: null, offsetX: 0, offsetY: 0, position: null, minFontSize: 8, maxFontSize: 72, adjustFontSize: {width: !1, height: !1}, rotation: 0
      }, zIndex: 41
    }
  },
  area: {
    title: {enabled: !0},
    background: {enabled: !0},
    xAxes: [{scale: 0}],
    yAxes: [{scale: 1}],
    grids: [{layout: "horizontal"}, {layout: "vertical", evenFill: "none", oddFill: "none", scale: 0}],
    minorGrids: [{evenFill: "none", oddFill: "none", stroke: "#000 0.075", layout: "horizontal"}],
    padding: {top: 10, right: 20, bottom: 10, left: 20}
  },
  bar: {
    title: {enabled: !0},
    background: {enabled: !0},
    barChartMode: !0,
    defaultXAxisSettings: {orientation: "left"},
    defaultYAxisSettings: {orientation: "bottom"},
    defaultLineMarkerSettings: {layout: "vertical"},
    defaultTextMarkerSettings: {layout: "vertical"},
    defaultRangeMarkerSettings: {layout: "vertical"},
    xAxes: [{}],
    yAxes: [{}],
    grids: [{layout: "vertical"}, {layout: "horizontal", evenFill: "none", oddFill: "none", scale: 0}],
    minorGrids: [{evenFill: "none", oddFill: "none", stroke: "#000 0.075", layout: "vertical"}],
    scales: [{type: "ordinal", inverted: !0, names: [], ticks: {interval: 1}}, {
      type: "linear", inverted: !1,
      maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6}, minorTicks: {mode: "linear", base: 0, count: 5}, stackMode: "none", stickToZero: !0
    }],
    padding: {top: 10, right: 20, bottom: 10, left: 20}
  },
  box: {
    title: {enabled: !0}, background: {enabled: !0}, xAxes: [{}], yAxes: [{}], grids: [{layout: "horizontal", evenFill: "#fff", oddFill: "#fff"}], minorGrids: [{evenFill: "none", oddFill: "none", stroke: "#000 0.075", layout: "horizontal"}], padding: {
      top: 10, right: 20,
      bottom: 10, left: 20
    }
  },
  column: {
    title: {enabled: !0},
    background: {enabled: !0},
    xAxes: [{}],
    yAxes: [{}],
    grids: [{layout: "horizontal"}, {layout: "vertical", evenFill: "none", oddFill: "none", scale: 0}],
    minorGrids: [{evenFill: "none", oddFill: "none", stroke: "#000 0.075", layout: "horizontal"}],
    padding: {top: 10, right: 20, bottom: 10, left: 20}
  },
  financial: {
    title: {enabled: !0},
    background: {enabled: !0},
    defaultXAxisSettings: {minorTicks: {enabled: !0}},
    xAxes: [{
      labels: {
        textFormatter: function() {
          var a = new Date(this.tickValue), b = [" ", a.getUTCDate(),
            ", ", a.getUTCFullYear()].join("");
          switch (a.getUTCMonth()) {
            case 0:
              return "Jan" + b;
            case 1:
              return "Feb" + b;
            case 2:
              return "Mar" + b;
            case 3:
              return "Apr" + b;
            case 4:
              return "May" + b;
            case 5:
              return "Jun" + b;
            case 6:
              return "Jul" + b;
            case 7:
              return "Aug" + b;
            case 8:
              return "Sep" + b;
            case 9:
              return "Oct" + b;
            case 10:
              return "Nov" + b;
            case 11:
              return "Dec" + b
          }
          return "Invalid date"
        }
      }
    }],
    yAxes: [{}],
    grids: [{layout: "horizontal"}, {layout: "vertical", evenFill: "none", oddFill: "none", scale: 0}],
    minorGrids: [{
      evenFill: "none", oddFill: "none", stroke: "#000 0.075",
      layout: "horizontal"
    }],
    scales: [{type: "dateTime", inverted: !1, maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {count: 4}, minorTicks: {count: 4}}, {
      type: "linear",
      inverted: !1,
      maximum: null,
      minimum: null,
      minimumGap: .1,
      maximumGap: .1,
      softMinimum: null,
      softMaximum: null,
      ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6},
      minorTicks: {mode: "linear", base: 0, count: 5},
      stackMode: "none",
      stickToZero: !0
    }],
    padding: {top: 10, right: 20, bottom: 10, left: 20}
  },
  line: {
    title: {enabled: !0}, background: {enabled: !0},
    xAxes: [{}], yAxes: [{}], grids: [{layout: "horizontal"}, {layout: "vertical", evenFill: "none", oddFill: "none", scale: 0}], minorGrids: [{evenFill: "none", oddFill: "none", stroke: "#000 0.075", layout: "horizontal"}], padding: {top: 10, right: 20, bottom: 10, left: 20}
  },
  scatter: {
    defaultSeriesSettings: {
      base: {
        fill: function() {
          return this.sourceColor
        }, hoverFill: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }, stroke: function() {
          return window.anychart.color.darken(this.sourceColor)
        }, hoverStroke: null, hatchFill: function() {
          return this.sourceHatchFill
        },
        labels: {
          enabled: !1, background: {enabled: !1}, padding: {top: 2, right: 4, bottom: 2, left: 4}, position: "center", anchor: "center", offsetX: 0, offsetY: 0, rotation: 0, width: null, height: null, textFormatter: function() {
            return this.value
          }, positionFormatter: function() {
            return this.value
          }
        }, hoverLabels: {enabled: null}, markers: {
          enabled: !0, position: "center", rotation: 0, anchor: "center", offsetX: 0, offsetY: 0, size: 4, positionFormatter: function() {
            return this.value
          }
        }, hoverMarkers: {size: 6}, clip: !0, color: null, tooltip: {
          titleFormatter: function() {
            return this.name
          },
          contentFormatter: function() {
            return this.x + ": " + this.value
          }
        }, xScale: null, yScale: null, error: {mode: "both", xError: null, valueError: null, xErrorWidth: 10, valueErrorWidth: 10, xErrorStroke: "#1d8bd1", valueErrorStroke: "#1d8bd1"}, legendItem: {}
      }, bubble: {
        displayNegative: !1, negativeFill: function() {
          var a = window.anychart.color.darken;
          return a(a(a(this.sourceColor)))
        }, hoverNegativeFill: function() {
          var a = window.anychart.color.darken;
          return a(a(a(a(this.sourceColor))))
        }, negativeStroke: function() {
          var a = window.anychart.color.darken;
          return a(a(a(a(this.sourceColor))))
        }, hoverNegativeStroke: function() {
          var a = window.anychart.color.darken;
          return a(a(a(a(a(this.sourceColor)))))
        }, negativeHatchFill: null, hatchFill: !1, markers: {enabled: !1, position: "center"}, tooltip: {
          contentFormatter: function() {
            return parseFloat(this.value).toFixed(2)
          }
        }
      }, line: {
        connectMissingPoints: !1, stroke: function() {
          return this.sourceColor
        }, hoverStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }, labels: {anchor: "bottom"}
      }, marker: {
        size: 10, hoverSize: 12,
        hatchFill: !1, tooltip: {
          contentFormatter: function() {
            return parseFloat(this.value).toFixed(2)
          }
        }
      }
    },
    defaultGridSettings: {enabled: !0, isMinor: !1, layout: "horizontal", drawFirstLine: !0, drawLastLine: !0, oddFill: "#ffffff", evenFill: "#f5f5f5", stroke: "#c1c1c1", zIndex: 10, scale: 1},
    defaultMinorGridSettings: {enabled: !0, isMinor: !0, layout: "horizontal", drawFirstLine: !0, drawLastLine: !0, oddFill: "#ffffff", evenFill: "#f5f5f5", stroke: "#c1c1c1", zIndex: 10, scale: 1},
    defaultXAxisSettings: {
      enabled: !0, orientation: "bottom", title: {
        enabled: !0,
        text: "X-Axis"
      }, minorTicks: {enabled: !0}, scale: 0
    },
    defaultYAxisSettings: {enabled: !0, orientation: "left", title: {enabled: !0, text: "Y-Axis"}, minorTicks: {enabled: !0}, scale: 1},
    defaultLineMarkerSettings: {enabled: !0, value: 0, layout: "horizontal", stroke: {color: "#DC0A0A", thickness: 1, opacity: 1, dash: "", lineJoin: "miter", lineCap: "square"}, zIndex: 25.2, scale: 1},
    defaultTextMarkerSettings: {
      enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontColor: "#222222", fontWeight: "bold", value: 0, anchor: "center", align: "center", layout: "horizontal",
      offsetX: 0, offsetY: 0, text: "Text marker", width: null, height: null, zIndex: 25.3, scale: 1
    },
    defaultRangeMarkerSettings: {enabled: !0, from: 0, to: 0, layout: "horizontal", fill: "#000 0.3", zIndex: 25.1, scale: 1},
    series: [],
    grids: [{oddFill: "#f9f9f9", evenFill: "#ffffff", layout: "horizontal"}, {oddFill: "none", evenFill: "none", layout: "vertical", scale: 0}],
    minorGrids: [{oddFill: "none", evenFill: "none", stroke: "#000 0.1", layout: "horizontal"}, {oddFill: "none", evenFill: "none", stroke: "#000 0.1", layout: "vertical", scale: 0}],
    xAxes: [{}],
    yAxes: [{}],
    lineAxesMarkers: [],
    rangeAxesMarkers: [],
    textAxesMarkers: [],
    scales: [{type: "linear", inverted: !1, maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6}, minorTicks: {mode: "linear", base: 0, count: 5}, stackMode: "none", stickToZero: !0}, {
      type: "linear", inverted: !1, maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6}, minorTicks: {
        mode: "linear", base: 0,
        count: 5
      }, stackMode: "none", stickToZero: !0
    }],
    xScale: 0,
    yScale: 1,
    maxBubbleSize: "20%",
    minBubbleSize: "5%",
    crosshair: {
      enabled: !1, xStroke: "#000", yStroke: "#000", xLabel: {
        axisIndex: 0,
        textFormatter: function() {
          return this.value
        },
        enabled: !0,
        fontSize: 11,
        fontFamily: "Tahoma",
        fontColor: "#fff",
        fontWeight: 400,
        textWrap: "byLetter",
        disablePointerEvents: !0,
        text: "Label text",
        background: {enabled: !0, fill: "#000 .85"},
        padding: {top: 6, right: 10, bottom: 6, left: 10},
        width: null,
        height: null,
        anchor: "leftTop",
        offsetX: 0,
        offsetY: 0,
        position: "leftTop",
        minFontSize: 8,
        maxFontSize: 72,
        adjustFontSize: {width: !1, height: !1},
        rotation: 0
      }, yLabel: {
        axisIndex: 0,
        textFormatter: function() {
          return this.value
        },
        enabled: !0,
        fontSize: 11,
        fontFamily: "Tahoma",
        fontColor: "#fff",
        fontWeight: 400,
        textWrap: "byLetter",
        disablePointerEvents: !0,
        text: "Label text",
        background: {enabled: !0, fill: "#000 .85"},
        padding: {top: 6, right: 10, bottom: 6, left: 10},
        width: null,
        height: null,
        anchor: "leftTop",
        offsetX: 0,
        offsetY: 0,
        position: "leftTop",
        minFontSize: 8,
        maxFontSize: 72,
        adjustFontSize: {width: !1, height: !1},
        rotation: 0
      }
    }
  },
  marker: {},
  bubble: {},
  bullet: {
    background: {enabled: !1},
    defaultRangeMarkerSettings: {enabled: !0, from: 0, to: 0, zIndex: 2},
    defaultMarkerSettings: {fill: "#000", stroke: "none", zIndex: 2},
    layout: "horizontal",
    rangePalette: {type: "distinct", items: ["#828282", "#a8a8a8", "#c2c2c2", "#d4d4d4", "#e1e1e1"]},
    markerPalette: {items: ["bar", "line", "x", "ellipse"]},
    scale: {
      type: "linear", ticks: {mode: "linear", base: 0, explicit: null, minCount: 3, maxCount: 5, interval: NaN}, minorTicks: {mode: "linear", base: 0, explicit: null, count: 5, interval: NaN},
      stackMode: "none", stickToZero: !0, minimumGap: 0, maximumGap: 0, softMinimum: null, softMaximum: null, minimum: null, maximum: null, inverted: !1
    },
    axis: {stroke: "none", title: {enabled: !1, zIndex: 3}, labels: {zIndex: 3}, minorLabels: {fontSize: 11, padding: {top: 1, right: 1, bottom: 0, left: 1}, zIndex: 3}, ticks: {zIndex: 3}, minorTicks: {enabled: !0, zIndex: 3}, zIndex: 3},
    ranges: [],
    margin: {top: 10, right: 10, bottom: 10, left: 10},
    title: {enabled: !0, text: "Chart title", rotation: 0}
  },
  pie: {
    title: {text: "Pie Chart", margin: {bottom: 0}}, group: !1, sort: "none",
    radius: "45%", innerRadius: 0, startAngle: 0, explode: 15, outsideLabelsSpace: 30, insideLabelsOffset: "50%", overlapMode: "noOverlap", connectorLength: 20, outsideLabelsCriticalAngle: 60, connectorStroke: "#000 0.3", fill: function() {
      return this.sourceColor
    }, hoverFill: function() {
      return window.anychart.color.lighten(this.sourceColor)
    }, stroke: function() {
      return window.anychart.color.darken(this.sourceColor, .2)
    }, hoverStroke: function() {
      return window.anychart.color.darken(this.sourceColor)
    }, hatchFill: null, forceHoverLabels: !1,
    labels: {
      enabled: !0, fontSize: 13, fontColor: null, fontFamily: "Arial", background: {enabled: !1}, padding: {top: 1, right: 1, bottom: 1, left: 1}, anchor: "center", rotation: 0, width: null, height: null, autoRotate: !1, textFormatter: function() {
        return (100 * this.value / this.getStat("sum")).toFixed(1) + "%"
      }, positionFormatter: function() {
        return this.value
      }, zIndex: 32
    }, outsideLabels: {autoColor: "#000"}, insideLabels: {autoColor: "#fff"}, hoverLabels: {enabled: null}, tooltip: {
      titleFormatter: function() {
        return this.name || this.x
      }, contentFormatter: function() {
        return (this.name ||
            this.x) + "\n" + this.value
      }
    }, legend: {
      enabled: !0, position: "bottom", align: "center", itemsLayout: "horizontal", title: {enabled: !1}, titleSeparator: {enabled: !1, margin: {top: 3, right: 0, bottom: 3, left: 0}}, tooltip: {
        contentFormatter: function() {
          return this.value + "\n" + this.meta.pointValue
        }
      }
    }
  },
  pie3d: {explode: "5%", connectorLength: "15%"},
  pyramidFunnel: {
    baseWidth: "90%", connectorLength: 20, connectorStroke: "#000", overlapMode: "noOverlap", pointsPadding: 5, fill: function() {
      return this.sourceColor
    }, hoverFill: function() {
      return window.anychart.color.lighten(this.sourceColor)
    },
    stroke: function() {
      return window.anychart.color.darken(this.sourceColor, .2)
    }, hoverStroke: function() {
      return window.anychart.color.darken(this.sourceColor)
    }, hatchFill: null, labels: {
      enabled: !0, fontSize: 13, fontFamily: "Arial", fontColor: null, disablePointerEvents: !1, background: {enabled: !1}, padding: {top: 1, right: 1, bottom: 1, left: 1}, position: "outsideLeftInColumn", anchor: "center", rotation: 0, width: null, height: null, textFormatter: function() {
        return this.name ? this.name : this.x
      }, positionFormatter: function() {
        return this.value
      },
      zIndex: 34
    }, outsideLabels: {autoColor: "#000"}, insideLabels: {autoColor: "#fff"}, hoverLabels: {enabled: null, padding: {top: 1, right: 1, bottom: 1, left: 1}}, markers: {
      enabled: !1, rotation: 0, anchor: "center", position: null, offsetX: 0, offsetY: 0, size: 8, positionFormatter: function() {
        return this.value
      }, zIndex: 33
    }, hoverMarkers: {enabled: null, size: 12}, tooltip: {
      titleFormatter: function() {
        return this.name || this.x
      }, contentFormatter: function() {
        return (this.name || this.x) + "\n" + this.value
      }
    }, legend: {
      margin: {top: 10, right: 0, bottom: 0, left: 0},
      tooltip: {
        contentFormatter: function() {
          return this.value + "\n" + this.meta.pointValue
        }
      }, zIndex: 35
    }
  },
  funnel: {title: {text: "Funnel Chart"}, neckWidth: "30%", neckHeight: "25%"},
  pyramid: {title: {text: "Pyramid Chart"}, reversed: !1, legend: {inverted: !0}},
  radar: {
    defaultSeriesSettings: {
      base: {
        enabled: !0, hatchFill: null, labels: {enabled: !1, position: "center", anchor: "bottom"}, hoverLabels: {enabled: null}, markers: {
          enabled: !1, disablePointerEvents: !1, position: "center", rotation: 0, anchor: "center", offsetX: 0, offsetY: 0, size: 4, positionFormatter: function() {
            return this.value
          }
        },
        hoverMarkers: {size: 6}, tooltip: {
          titleFormatter: function() {
            return this.name
          }, contentFormatter: function() {
            return this.x + ": " + this.value
          }
        }
      }, area: {markers: {enabled: !1, position: "center"}}, line: {
        markers: {enabled: !0, position: "center"}, hoverStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }
      }, marker: {
        size: 10, hoverSize: 12, hatchFill: !1, labels: {anchor: "center"}, tooltip: {
          contentFormatter: function() {
            return parseFloat(this.value).toFixed(2)
          }
        }
      }
    },
    defaultGridSettings: {
      enabled: !0, isMinor: !1, layout: "radial",
      drawFirstLine: !1, drawLastLine: !1, oddFill: "none", evenFill: "none", stroke: "#DDDDDD", zIndex: 10, xScale: 0, yScale: 1
    },
    defaultMinorGridSettings: {enabled: !1, isMinor: !0, layout: "circuit", drawFirstLine: !1, drawLastLine: !1, oddFill: "none", evenFill: "none", stroke: "#333333", zIndex: 10, xScale: 0, yScale: 1},
    xAxis: {stroke: "#C0C0C0", ticks: {stroke: "#333333"}, scale: 0},
    yAxis: {stroke: "#333333", minorLabels: {padding: {top: 1, right: 1, bottom: 0, left: 1}}, minorTicks: {enabled: !0}, scale: 1},
    startAngle: 0,
    grids: [{
      enabled: !0, stroke: "#C0C0C0",
      layout: "circuit", oddFill: "white", evenFill: "#fafafa"
    }, {enabled: !0}],
    minorGrids: [],
    scales: [{type: "ordinal", inverted: !1, names: [], ticks: {interval: 1}}, {
      type: "linear",
      inverted: !1,
      maximum: null,
      minimum: null,
      minimumGap: .1,
      maximumGap: .1,
      softMinimum: null,
      softMaximum: null,
      ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6},
      minorTicks: {mode: "linear", base: 0, count: 5},
      stackMode: "none",
      stickToZero: !0
    }],
    xScale: 0,
    yScale: 1,
    background: {enabled: !0, fill: {keys: ["#fff", "#f3f3f3", "#fff"], angle: 90}, stroke: null}
  },
  polar: {
    defaultSeriesSettings: {
      base: {
        enabled: !0,
        hatchFill: null, labels: {enabled: !1, position: "center", anchor: "bottom"}, hoverLabels: {enabled: null, position: "center"}, markers: {
          enabled: !1, disablePointerEvents: !1, position: "center", rotation: 0, anchor: "center", offsetX: 0, offsetY: 0, size: 4, positionFormatter: function() {
            return this.value
          }
        }, hoverMarkers: {size: 6}, tooltip: {
          titleFormatter: function() {
            return this.name
          }, contentFormatter: function() {
            return this.x + ": " + this.value
          }
        }
      }, area: {}, line: {
        markers: {enabled: !0}, hoverStroke: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }
      },
      marker: {
        size: 10, hoverSize: 12, labels: {anchor: "bottom"}, hatchFill: !1, tooltip: {
          contentFormatter: function() {
            return parseFloat(this.value).toFixed(2)
          }
        }
      }
    },
    defaultGridSettings: {enabled: !0, isMinor: !1, layout: "radial", drawFirstLine: !1, drawLastLine: !1, oddFill: "none", evenFill: "none", stroke: "#DDDDDD", zIndex: 10, xScale: 0, yScale: 1},
    defaultMinorGridSettings: {enabled: !1, isMinor: !0, layout: "circuit", drawFirstLine: !1, drawLastLine: !1, oddFill: "none", evenFill: "none", stroke: "#333333", zIndex: 10, xScale: 0, yScale: 1},
    xAxis: {
      stroke: "#C0C0C0",
      ticks: {stroke: "#333333"}, scale: 0
    },
    yAxis: {stroke: "#333333", minorLabels: {padding: {top: 1, right: 1, bottom: 0, left: 1}}, minorTicks: {enabled: !0}, scale: 1},
    startAngle: 0,
    grids: [{enabled: !0, stroke: "#C0C0C0", layout: "circuit", oddFill: "white", evenFill: "#fafafa"}, {enabled: !0}],
    minorGrids: [],
    scales: [{
      type: "linear", inverted: !1, maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6}, minorTicks: {mode: "linear", base: 0, count: 5}, stackMode: "none",
      stickToZero: !0
    }, {type: "linear", inverted: !1, maximum: null, minimum: null, minimumGap: .1, maximumGap: .1, softMinimum: null, softMaximum: null, ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6}, minorTicks: {mode: "linear", base: 0, count: 5}, stackMode: "none", stickToZero: !0}],
    xScale: 0,
    yScale: 1,
    background: {enabled: !0, fill: {keys: ["#fff", "#f3f3f3", "#fff"], angle: 90}, stroke: null}
  },
  sparkline: {
    title: {enabled: !1, padding: {top: 0, right: 0, bottom: 0, left: 0}, margin: {top: 0, right: 0, bottom: 0, left: 0}, orientation: "right", rotation: 0},
    background: {enabled: !1},
    margin: {top: 0, right: 0, bottom: 0, left: 0},
    padding: {top: 0, right: 0, bottom: 0, left: 0},
    defaultSeriesSettings: {
      base: {markers: {enabled: !1, type: "circle", size: 1.5, position: "center"}, labels: {enabled: !1, background: {enabled: !1}, position: "center", anchor: "centerBottom"}, color: "#4682B4"},
      area: {stroke: "#1e90ff", fill: "#d2e9ff"},
      column: {
        markers: {position: "centerTop"}, labels: {position: "centerTop", anchor: "centerBottom"}, negativeMarkers: {position: "centerBottom"}, negativeLabels: {position: "centerBottom", anchor: "centerTop"},
        fill: "#87ceeb", negativeFill: "#ffc0cb"
      },
      line: {stroke: "#4682b4"},
      winLoss: {
        markers: {position: "centerTop", anchor: "centerTop"},
        labels: {position: "centerTop", anchor: "centerTop"},
        negativeMarkers: {position: "centerBottom", anchor: "centerBottom"},
        negativeLabels: {position: "centerBottom", anchor: "centerBottom"},
        fill: "#305374",
        negativeFill: "#cb6762"
      }
    },
    defaultLineMarkerSettings: {
      enabled: !0, value: 0, layout: "horizontal", stroke: {color: "#DC0A0A", thickness: 1, opacity: 1, dash: "", lineJoin: "miter", lineCap: "square"}, zIndex: 25.2,
      scale: 1
    },
    defaultTextMarkerSettings: {enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontColor: "#222222", fontWeight: "bold", value: 0, anchor: "center", align: "center", layout: "horizontal", offsetX: 0, offsetY: 0, text: "Text marker", width: null, height: null, zIndex: 25.3, scale: 1},
    defaultRangeMarkerSettings: {enabled: !0, from: 0, to: 0, layout: "horizontal", fill: "#000 0.3", zIndex: 25.1, scale: 1},
    hatchFill: null,
    markers: {},
    firstMarkers: {},
    lastMarkers: {},
    negativeMarkers: {},
    minMarkers: {fill: "#00f", stroke: "#000 0.5"},
    maxMarkers: {
      fill: "#f00",
      stroke: "#000 0.5"
    },
    labels: {},
    firstLabels: {},
    lastLabels: {},
    negativeLabels: {},
    minLabels: {},
    maxLabels: {},
    lineAxesMarkers: [],
    rangeAxesMarkers: [],
    textAxesMarkers: [],
    scales: [{type: "ordinal", inverted: !1, names: [], ticks: {interval: 1}}, {
      type: "linear",
      inverted: !1,
      maximum: null,
      minimum: null,
      minimumGap: .1,
      maximumGap: .1,
      softMinimum: null,
      softMaximum: null,
      ticks: {mode: "linear", base: 0, minCount: 4, maxCount: 6},
      minorTicks: {mode: "linear", base: 0, count: 5},
      stackMode: "none",
      stickToZero: !0
    }],
    xScale: 0,
    yScale: 1,
    clip: !0,
    seriesType: "line",
    connectMissingPoints: !1,
    pointWidth: "95%"
  },
  circularGauge: {
    title: {enabled: !1, margin: {bottom: 5}},
    background: {enabled: !1},
    padding: {top: 0, right: 0, bottom: 0, left: 0},
    defaultAxisSettings: {
      startAngle: null,
      labels: {position: "inside", adjustFontSize: !0},
      minorLabels: {position: "inside", adjustFontSize: !0},
      fill: "black .3",
      ticks: {hatchFill: !1, type: "line", position: "center", length: null, fill: "red", stroke: "none"},
      minorTicks: {hatchFill: !1, type: "line", position: "center", length: null, fill: "red", stroke: "none"},
      zIndex: 10
    },
    defaultPointerSettings: {
      base: {
        enabled: !0,
        fill: "#f22922", stroke: "#f22922", hatchFill: !1, axisIndex: 0
      }, bar: {position: "center"}, marker: {position: "inside", type: "triangleUp"}, needle: {}, knob: {fill: {keys: ["rgb(255, 255, 255)", "rgb(220, 220, 220)"], angle: 135}, stroke: "2 #ccc", verticesCount: 6, verticesCurvature: .5, topRatio: .5, bottomRatio: .5}
    },
    defaultRangeSettings: {enabled: !0, axisIndex: 0, fill: "#008000 .5", position: "center", startSize: 0, endSize: "10%"},
    fill: {keys: ["#fff", "#dcdcdc"], angle: 315},
    startAngle: 0,
    sweepAngle: 360,
    cap: {
      enabled: !1, fill: {
        keys: ["#D3D3D3",
          "#6F6F6F"], angle: -45
      }, stroke: "none", hatchFill: !1, radius: "15%", zIndex: 50
    },
    circularPadding: "10%",
    encloseWithStraightLine: !1,
    axes: [],
    bars: [],
    markers: [],
    needles: [],
    knobs: [],
    ranges: []
  },
  map: {
    defaultSeriesSettings: {
      base: {
        fill: function() {
          var a;
          this.colorScale ? (a = this.iterator.get(this.referenceValueNames[1]), a = this.colorScale.valueToColor(a)) : a = this.sourceColor;
          return a
        }, hoverFill: function() {
          return window.anychart.color.lighten(this.sourceColor)
        }, selectFill: {color: "#64b5f6"}, stroke: {thickness: .5, color: "#545f69"},
        hoverStroke: {thickness: .5, color: "#545f69"}, selectStroke: {thickness: .5, color: "#545f69"}, hatchFill: !1, labels: {
          enabled: !0, fontSize: 12, adjustFontSize: {width: !0, height: !0}, textFormatter: function() {
            return this.name
          }
        }, hoverLabels: {enabled: null}, selectLabels: {enabled: null}, markers: {enabled: !1, disablePointerEvents: !1, size: 4}, hoverMarkers: {enabled: null, size: 6}, selectMarkers: {enabled: null, size: 6}, color: null, allowPointsSelect: null, tooltip: {
          enabled: !0, titleFormatter: function() {
            return this.name
          }, contentFormatter: function() {
            return this.x +
                ": " + this.value
          }
        }, xScale: null, yScale: null
      }, choropleth: {}
    }, colorRange: {
      enabled: !1,
      stroke: null,
      orientation: "bottom",
      title: {enabled: !1},
      colorLineSize: 20,
      padding: {top: 10, right: 0, bottom: 20, left: 0},
      align: "center",
      length: "70%",
      marker: {
        fill: "#545f69", hoverFill: "#545f69", stroke: "#545f69", hoverStroke: "#545f69", positionFormatter: function() {
          return this.value
        }, legendItem: {iconStroke: null}, enabled: !0, disablePointerEvents: !1, position: "center", rotation: 0, anchor: "center", offsetX: 0, offsetY: 0, type: "triangleDown", size: 15
      },
      labels: {offsetX: 0},
      ticks: {stroke: {thickness: 3, color: "#fff", position: "center", length: 20}},
      minorTicks: {enabled: !1}
    }, unboundRegions: {enabled: !0, fill: "#F7F7F7", stroke: "#B9B9B9"}, linearColor: {colors: ["#fff", "#ffd54f", "#ef6c00"]}, ordinalColor: {
      autoColors: function(a) {
        return window.anychart.color.blendedHueProgression("#ffd54f", "#ef6c00", a)
      }
    }, allowPointsSelect: !0
  },
  defaultDataGrid: {
    isStandalone: !1, titleHeight: 25, backgroundFill: "none", columnStroke: "#ccd7e1", rowStroke: "#ccd7e1", rowOddFill: "#fff", rowEvenFill: "#fafafa",
    rowFill: "#fff", hoverFill: "#edf8ff", rowSelectedFill: "#d2eafa", zIndex: 5, titleFill: {keys: ["#f8f8f8", "#fff"], angle: 90}, tooltip: {
      anchor: "leftTop", content: {hAlign: "left"}, contentFormatter: function(a) {
        a = a.get("name");
        return void 0 !== a ? a + "" : ""
      }
    }, defaultColumnSettings: {
      width: 90,
      cellTextSettings: {anchor: "leftTop", vAlign: "middle", padding: {top: 0, right: 5, bottom: 0, left: 5}, textWrap: "noWrap", background: null, rotation: 0, width: null, height: null, fontSize: 11, minFontSize: 8, maxFontSize: 72},
      depthPaddingMultiplier: 0,
      collapseExpandButtons: !1,
      title: {margin: {top: 0, right: 0, bottom: 0, left: 0}, textWrap: "noWrap", hAlign: "center", vAlign: "middle", background: {enabled: !1}},
      textFormatter: function() {
        return ""
      }
    }, columns: [{
      width: 50, textFormatter: function(a) {
        a = a.meta("index");
        return null != a ? a + 1 + "" : ""
      }, title: {text: "#"}
    }, {
      width: 170, collapseExpandButtons: !0, depthPaddingMultiplier: 15, textFormatter: function(a) {
        a = a.get("name");
        return null != a ? a + "" : ""
      }, title: {text: "Name"}
    }]
  },
  gantt: {
    base: {
      splitterPosition: "30%", headerHeight: 70, hoverFill: "#edf8ff", rowSelectedFill: "#d2eafa",
      columnStroke: "#ccd7e1", rowStroke: "#ccd7e1", title: {enabled: !1}, credits: {inChart: !0}, background: {fill: "#fff"}, margin: {top: 0, right: 0, bottom: 0, left: 0}, padding: {top: 0, right: 0, bottom: 0, left: 0}, dataGrid: {}, timeline: {
        columnStroke: "#ccd7e1",
        rowStroke: "#ccd7e1",
        backgroundFill: "none",
        rowOddFill: "#fff",
        rowEvenFill: "#fafafa",
        rowFill: "#fff",
        hoverFill: "#edf8ff",
        rowSelectedFill: "#d2eafa",
        zIndex: 5,
        baseFill: {keys: ["#3CA0DE", "#3085BC"], angle: -90},
        baseStroke: "#0C3F5F",
        baselineFill: {keys: ["#E1E1E1", "#A1A1A1"], angle: -90},
        baselineStroke: "#0C3F5F",
        progressFill: {keys: ["#63FF78", "#3DC351", "#188E2D"], angle: -90},
        progressStroke: "#006616",
        milestoneFill: {keys: ["#FAE096", "#EB8344"], angle: -90},
        milestoneStroke: "#000",
        parentFill: {keys: ["#646464", "#282828"], angle: -90},
        parentStroke: "#000",
        selectedElementFill: {keys: ["#f1b8b9", "#f07578"], angle: -90},
        connectorFill: "#000090",
        connectorStroke: "#000090",
        minimumGap: .1,
        maximumGap: .1,
        baselineAbove: !1,
        tooltip: {anchor: "leftTop", content: {hAlign: "left"}},
        labelsFactory: {
          anchor: "leftCenter", position: "rightCenter",
          padding: {top: 3, right: 5, bottom: 3, left: 5}, vAlign: "middle", textWrap: "noWrap", background: null, rotation: 0, width: null, height: null, fontSize: 11, minFontSize: 8, maxFontSize: 72, zIndex: 40
        },
        markersFactory: {anchor: "centerTop", zIndex: 50, enabled: !0, type: "star4"},
        header: {labelsFactory: {anchor: "leftTop", padding: {top: 0, right: 2, bottom: 0, left: 2}, vAlign: "middle", textWrap: "noWrap", textOverflow: "..."}}
      }
    }, ganttResource: {
      dataGrid: {
        tooltip: {
          contentFormatter: function(a) {
            var b = a.item;
            if (!b)return "";
            a = b.get("name");
            var c = b.meta("minPeriodDate"),
                b = b.meta("maxPeriodDate");
            return (a ? a : "") + (c ? "\nStart Date: " + window.anychart.utils.defaultDateFormatter(c) : "") + (b ? "\nEnd Date: " + window.anychart.utils.defaultDateFormatter(b) : "")
          }
        }
      }, timeline: {
        selectedElementStroke: "none", tooltip: {
          contentFormatter: function(a) {
            var b = a.item, c = a.period;
            a = b.get("name");
            var e = c ? c.start : b.get("actualStart") || b.meta("autoStart"), b = c ? c.end : b.get("actualEnd") || b.meta("autoEnd");
            return (a ? a : "") + (e ? "\nStart Date: " + window.anychart.utils.defaultDateFormatter(e) : "") + (b ? "\nEnd Date: " +
                window.anychart.utils.defaultDateFormatter(b) : "")
          }
        }
      }
    }, ganttProject: {
      dataGrid: {
        tooltip: {
          contentFormatter: function(a) {
            var b = a.item;
            if (!b)return "";
            a = b.get("name");
            var c = b.get("actualStart") || b.meta("autoStart"), e = b.get("actualEnd") || b.meta("autoEnd"), d = b.get("progressValue");
            void 0 === d && (b = 100 * b.meta("autoProgress"), d = (Math.round(100 * b) / 100 || 0) + "%");
            return (a ? a : "") + (c ? "\nStart Date: " + window.anychart.utils.defaultDateFormatter(c) : "") + (e ? "\nEnd Date: " + window.anychart.utils.defaultDateFormatter(e) : "") +
                (d ? "\nComplete: " + d : "")
          }
        }
      }, timeline: {
        selectedElementStroke: "#000", tooltip: {
          contentFormatter: function(a) {
            var b = a.item;
            a = b.get("name");
            var c = b.get("actualStart") || b.meta("autoStart"), e = b.get("actualEnd") || b.meta("autoEnd"), d = b.get("progressValue");
            void 0 === d && (b = 100 * b.meta("autoProgress"), d = (Math.round(100 * b) / 100 || 0) + "%");
            return (a ? a : "") + (c ? "\nStart Date: " + window.anychart.utils.defaultDateFormatter(c) : "") + (e ? "\nEnd Date: " + window.anychart.utils.defaultDateFormatter(e) : "") + (d ? "\nComplete: " + d : "")
          }
        }
      }
    }
  },
  standalones: {
    background: {zIndex: 0},
    label: {
      enabled: !0,
      fontSize: 11,
      fontFamily: "Tahoma",
      fontWeight: "bold",
      textWrap: "byLetter",
      text: "Label text",
      background: {enabled: !1},
      padding: {top: 0, right: 0, bottom: 0, left: 0},
      width: null,
      height: null,
      anchor: "leftTop",
      position: "leftTop",
      offsetX: 0,
      offsetY: 0,
      minFontSize: 8,
      maxFontSize: 72,
      adjustFontSize: {width: !1, height: !1},
      rotation: 0,
      zIndex: 0
    },
    labelsFactory: {background: {enabled: !1, stroke: "#000"}, zIndex: 0},
    legend: {
      position: "bottom",
      align: "center",
      itemsSpacing: 15,
      iconTextSpacing: 5,
      width: null,
      height: null,
      itemsLayout: "horizontal",
      inverted: !1,
      items: null,
      itemsSourceMode: "default",
      itemsFormatter: function(a) {
        return a
      },
      fontColor: "#232323",
      background: {enabled: !0, fill: {keys: ["0 #fff 1", "0.5 #f3f3f3 1", "1 #fff 1"], angle: "90"}, stroke: {keys: ["0 #ddd 1", "1 #d0d0d0 1"], angle: "90"}, cornerType: "round", corners: 5},
      title: {
        enabled: !0, fontFamily: "Verdana", fontSize: 10, fontColor: "#232323", text: "Legend Title", background: {
          enabled: !1, stroke: {keys: ["0 #DDDDDD 1", "1 #D0D0D0 1"], angle: "90"}, fill: {
            keys: ["0 #FFFFFF 1",
              "0.5 #F3F3F3 1", "1 #FFFFFF 1"], angle: "90"
          }
        }, padding: {top: 0, right: 0, bottom: 0, left: 0}, margin: {top: 0, right: 0, bottom: 3, left: 0}
      },
      paginator: {
        enabled: !0,
        fontColor: "#232323",
        orientation: "right",
        margin: {top: 0, right: 0, bottom: 0, left: 0},
        padding: {top: 0, right: 0, bottom: 0, left: 0},
        background: {enabled: !1, stroke: {keys: ["0 #DDDDDD 1", "1 #D0D0D0 1"], angle: "90"}, fill: {keys: ["0 #FFFFFF 1", "0.5 #F3F3F3 1", "1 #FFFFFF 1"], angle: "90"}},
        zIndex: 30
      },
      titleSeparator: {
        enabled: !0, width: "100%", height: 1, margin: {
          top: 3, right: 0, bottom: 3,
          left: 0
        }, orientation: "top", fill: {keys: ["0 #333333 0", "0.5 #333333 1", "1 #333333 0"]}, stroke: "none"
      },
      padding: {top: 7, right: 7, bottom: 7, left: 7},
      margin: {top: 5, right: 5, bottom: 5, left: 5},
      zIndex: 0
    },
    markersFactory: {zIndex: 0},
    title: {zIndex: 0},
    linearAxis: {zIndex: 0, minorTicks: {enabled: !0}},
    polarAxis: {stroke: {color: "black", opacity: .1, lineJoin: "round", lineCap: "square"}, zIndex: 0},
    radarAxis: {stroke: {color: "black", opacity: .1, lineJoin: "round", lineCap: "square"}, zIndex: 0},
    radialAxis: {
      minorLabels: {
        padding: {
          top: 1, right: 1,
          bottom: 0, left: 1
        }
      }
    },
    linearGrid: {enabled: !0, isMinor: !1, layout: "horizontal", drawFirstLine: !0, drawLastLine: !0, oddFill: "#fff", evenFill: "#f5f5f5", stroke: "#c1c1c1", scale: null},
    polarGrid: {enabled: !0, isMinor: !1, layout: "circuit", drawLastLine: !0, oddFill: "#fff 0.3", evenFill: "#f5f5f5 0.3", stroke: "#c1c1c1"},
    radarGrid: {enabled: !0, isMinor: !1, layout: "circuit", drawLastLine: !0, oddFill: "#fff 0.3", evenFill: "#f5f5f5 0.3", stroke: "#c1c1c1"},
    lineAxisMarker: {
      enabled: !0, value: 0, layout: "horizontal", stroke: {
        color: "#DC0A0A", thickness: 1,
        opacity: 1, dash: "", lineJoin: "miter", lineCap: "square"
      }
    },
    textAxisMarker: {enabled: !0, fontSize: 11, fontFamily: "Tahoma", fontWeight: "bold", value: 0, anchor: "center", align: "center", layout: "horizontal", offsetX: 0, offsetY: 0, text: "Text marker", width: null, height: null},
    rangeAxisMarker: {enabled: !0, from: 0, to: 0, layout: "horizontal", fill: "#000 0.3"},
    dataGrid: {isStandalone: !0, backgroundFill: "#fff", zIndex: 0}
  }
};