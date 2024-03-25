/*! cornerstone-core - 2.6.1 - 2021-11-19 | (c) 2016 Chris Hafey | https://github.com/cornerstonejs/cornerstone */
!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define('cornerstone-core', [], t)
    : 'object' == typeof exports
    ? (exports['cornerstone-core'] = t())
    : (e.cornerstone = t());
})(window, function () {
  return (function (r) {
    var n = {};
    function a(e) {
      if (n[e]) return n[e].exports;
      var t = (n[e] = { i: e, l: !1, exports: {} });
      return r[e].call(t.exports, t, t.exports, a), (t.l = !0), t.exports;
    }
    return (
      (a.m = r),
      (a.c = n),
      (a.d = function (e, t, r) {
        a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (a.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (a.t = function (t, e) {
        if ((1 & e && (t = a(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (a.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var n in t)
            a.d(
              r,
              n,
              function (e) {
                return t[e];
              }.bind(null, n)
            );
        return r;
      }),
      (a.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return a.d(t, 'a', t), t;
      }),
      (a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (a.p = ''),
      a((a.s = 0))
    );
  })([
    function (e, t, r) {
      'use strict';
      function a(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      r.r(t);
      var T = {
          NEW_IMAGE: 'cornerstonenewimage',
          INVALIDATED: 'cornerstoneinvalidated',
          PRE_RENDER: 'cornerstoneprerender',
          IMAGE_CACHE_MAXIMUM_SIZE_CHANGED:
            'cornerstoneimagecachemaximumsizechanged',
          IMAGE_CACHE_PROMISE_REMOVED: 'cornerstoneimagecachepromiseremoved',
          IMAGE_CACHE_FULL: 'cornerstoneimagecachefull',
          IMAGE_CACHE_CHANGED: 'cornerstoneimagecachechanged',
          WEBGL_TEXTURE_REMOVED: 'cornerstonewebgltextureremoved',
          WEBGL_TEXTURE_CACHE_FULL: 'cornerstonewebgltexturecachefull',
          IMAGE_LOADED: 'cornerstoneimageloaded',
          IMAGE_LOAD_PROGRESS: 'cornerstoneimageloadprogress',
          IMAGE_LOAD_FAILED: 'cornerstoneimageloadfailed',
          ELEMENT_RESIZED: 'cornerstoneelementresized',
          IMAGE_RENDERED: 'cornerstoneimagerendered',
          LAYER_ADDED: 'cornerstonelayeradded',
          LAYER_REMOVED: 'cornerstonelayerremoved',
          ACTIVE_LAYER_CHANGED: 'cornerstoneactivelayerchanged',
          ELEMENT_DISABLED: 'cornerstoneelementdisabled',
          ELEMENT_ENABLED: 'cornerstoneelementenabled',
        },
        o = new ((function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.listeners = {}),
              (this.namespaces = {});
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'addEventNamespaceListener',
                value: function (e, t) {
                  e.indexOf('.') <= 0 ||
                    ((this.namespaces[e] = t),
                    this.addEventListener(e.split('.')[0], t));
                },
              },
              {
                key: 'removeEventNamespaceListener',
                value: function (e) {
                  e.indexOf('.') <= 0 ||
                    !this.namespaces[e] ||
                    (this.removeEventListener(
                      e.split('.')[0],
                      this.namespaces[e]
                    ),
                    delete this.namespaces[e]);
                },
              },
              {
                key: 'addEventListener',
                value: function (e, t) {
                  0 < e.indexOf('.')
                    ? this.addEventNamespaceListener(e, t)
                    : (e in this.listeners || (this.listeners[e] = []),
                      this.listeners[e].push(t));
                },
              },
              {
                key: 'removeEventListener',
                value: function (e, t) {
                  if (0 < e.indexOf('.')) this.removeEventNamespaceListener(e);
                  else if (e in this.listeners)
                    for (
                      var r = this.listeners[e], n = 0, a = r.length;
                      n < a;
                      n++
                    )
                      if (r[n] === t) return void r.splice(n, 1);
                },
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  if (!(e.type in this.listeners)) return !0;
                  for (
                    var t = this.listeners[e.type].slice(), r = 0, n = t.length;
                    r < n;
                    r++
                  )
                    t[r].call(this, e);
                  return !e.defaultPrevented;
                },
              },
            ]) && a(t.prototype, r),
            n && a(t, n),
            e
          );
        })())(),
        n = [];
      function C(e) {
        if (void 0 === e)
          throw new Error(
            'getEnabledElement: parameter element must not be undefined'
          );
        for (var t = 0; t < n.length; t++) if (n[t].element === e) return n[t];
        throw new Error('element not enabled');
      }
      function i(e) {
        if (void 0 === e)
          throw new Error(
            'getEnabledElement: enabledElement element must not be undefined'
          );
        n.push(e);
      }
      function l(t) {
        var r = [];
        return (
          n.forEach(function (e) {
            e.image && e.image.imageId === t && r.push(e);
          }),
          r
        );
      }
      function s() {
        return n;
      }
      function u() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      var d = { viewport: {} },
        m = function (e) {
          d.viewport = e || {};
        };
      function c(e, t) {
        if (null == e) throw new Error(t);
      }
      var L = function (e) {
          var t,
            r =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          return (
            c(e, 'getImageSize: parameter image must not be undefined'),
            c(e.width, 'getImageSize: parameter image must have width'),
            c(e.height, 'getImageSize: parameter image must have height'),
            null != (t = r) && 0 !== t && 180 !== t
              ? { height: e.width, width: e.height }
              : { width: e.width, height: e.height }
          );
        },
        f = function (e, t) {
          var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          c(e, 'getImageScale: parameter windowSize must not be undefined'),
            c(t, 'getImageScale: parameter image must not be undefined');
          var n = L(t, r),
            a = t.rowPixelSpacing || 1,
            i = t.columnPixelSpacing || 1,
            o = 1,
            l = 1;
          a < i ? (l = i / a) : (o = a / i);
          var s = e.height / n.height / o,
            u = e.width / n.width / l;
          return {
            verticalScale: s,
            horizontalScale: u,
            scaleFactor: Math.min(u, s),
          };
        },
        g = function (e, t) {
          if (void 0 === e)
            throw new Error(
              'getDefaultViewport: parameter canvas must not be undefined'
            );
          return void 0 === t
            ? ((r = {
                scale: 1,
                translation: { x: 0, y: 0 },
                voi: { windowWidth: void 0, windowCenter: void 0 },
                invert: !1,
                pixelReplication: !1,
                rotation: 0,
                hflip: !1,
                vflip: !1,
                modalityLUT: void 0,
                voiLUT: void 0,
                colormap: void 0,
                labelmap: !1,
                displayedArea: void 0,
              }),
              Object.assign({}, r, d.viewport))
            : {
                scale: f(e, t, 0).scaleFactor,
                translation: { x: 0, y: 0 },
                voi: {
                  windowWidth: t.windowWidth,
                  windowCenter: t.windowCenter,
                },
                invert: t.invert,
                pixelReplication: !1,
                rotation: 0,
                hflip: !1,
                vflip: !1,
                modalityLUT: t.modalityLUT,
                voiLUT: t.voiLUT,
                colormap: t.colormap,
                labelmap: Boolean(t.labelmap),
                displayedArea: void 0,
              };
          var r;
        },
        v = function (e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          if (t && t.displayedArea) return t.displayedArea;
          if (void 0 === e)
            throw new Error(
              'getDisplayedArea: parameter image must not be undefined'
            );
          return {
            tlhc: { x: 1, y: 1 },
            brhc: { x: e.columns, y: e.rows },
            rowPixelSpacing:
              void 0 === e.rowPixelSpacing ? 1 : e.rowPixelSpacing,
            columnPixelSpacing:
              void 0 === e.columnPixelSpacing ? 1 : e.columnPixelSpacing,
            presentationSizeMode: 'NONE',
          };
        },
        h = function (e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          (e.needsRedraw = !0), t && (e.invalid = !0);
        },
        P = function (e) {
          var t =
              1 < arguments.length && void 0 !== arguments[1] && arguments[1],
            r = C(e);
          h(r, t);
        };
      function R(e, t) {
        var r,
          n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
        return (
          'function' == typeof window.CustomEvent
            ? (r = new CustomEvent(t, { detail: n, cancelable: !0 }))
            : (r = document.createEvent('CustomEvent')).initCustomEvent(
                t,
                !0,
                !0,
                n
              ),
          e.dispatchEvent(r)
        );
      }
      function p(e, t, r) {
        R(t.element, e, {
          viewport: t.viewport,
          element: t.element,
          image: t.image,
          enabledElement: t,
          layerId: r,
        });
      }
      function w(e, t) {
        if (e.layerId === t.layerId)
          throw new Error(
            'rescaleImage: both arguments represent the same layer'
          );
        var r = e.image,
          n = t.image;
        if (r.imageId && n.imageId) {
          var a = v(n, t.viewport),
            i = v(r, e.viewport),
            o =
              (a.columnPixelSpacing * n.width) /
              (i.columnPixelSpacing * r.width),
            l = (t.viewport.scale / e.viewport.scale) * o;
          t.viewport.scale = e.viewport.scale * l;
        }
      }
      function b(e, t, r) {
        var n,
          a = ''
            .concat(u() + u(), '-')
            .concat(u(), '-')
            .concat(u(), '-')
            .concat(u(), '-')
            .concat(u())
            .concat(u())
            .concat(u()),
          i = C(e),
          o = i.layers;
        t &&
          ((n = g(i.canvas, t)),
          r && r.viewport && (n = Object.assign(n, r.viewport))),
          !1 !== i.syncViewports && (i.syncViewports = !0);
        var l = {
          image: t,
          layerId: a,
          viewport: n,
          options: r || {},
          renderingTools: {},
        };
        return (
          o.length && t && w(o[0], l),
          o.push(l),
          p(T.LAYER_ADDED, i, a),
          1 === o.length && t && D(e, a),
          a
        );
      }
      function y(e, t) {
        var r = C(e),
          n = r.layers,
          a = r.layers.findIndex(function (e) {
            return e.layerId === t;
          });
        -1 !== a &&
          (n.splice(a, 1),
          t === r.activeLayerId && n.length && D(e, n[0].layerId),
          p(T.LAYER_REMOVED, r, t));
      }
      function x(e, t) {
        return C(e).layers.find(function (e) {
          return e.layerId === t;
        });
      }
      function E(e) {
        return C(e).layers;
      }
      function I(e) {
        return C(e).layers.filter(function (e) {
          return (
            e.options && !1 !== e.options.visible && 0 !== e.options.opacity
          );
        });
      }
      function D(e, t) {
        var r = C(e);
        if (r.activeLayerId !== t) {
          var n = r.layers.findIndex(function (e) {
            return e.layerId === t;
          });
          if (-1 === n)
            throw new Error('setActiveLayer: layer not found in layers array');
          var a = r.layers[n];
          if (!a.image)
            throw new Error(
              'setActiveLayer: layer with undefined image cannot be set as active.'
            );
          (r.activeLayerId = t),
            (r.image = a.image),
            (r.viewport = a.viewport),
            P(e),
            p(T.ACTIVE_LAYER_CHANGED, r, t);
        }
      }
      function S(e, t, r) {
        var n,
          a = C(e),
          i = a.layers[0];
        if (!(n = r ? x(e, r) : A(e)))
          throw new Error('setLayerImage: Layer not found');
        if ((n.image = t)) {
          if (!n.viewport) {
            var o = g(a.canvas, t);
            n.options &&
              n.options.viewport &&
              (n.viewport = Object.assign(o, n.options.viewport)),
              i.layerId !== r && w(i, n);
          }
        } else n.viewport = void 0;
      }
      function A(e) {
        var t = C(e);
        return t.layers.find(function (e) {
          return e.layerId === t.activeLayerId;
        });
      }
      function _(e) {
        var t = C(e);
        (t.layers = []),
          delete t.activeLayerId,
          delete t.lastSyncViewportsState;
      }
      function M(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function O(e, t, r) {
        if (1 < e) throw new Error('HSVToRGB expects hue < 1');
        var n = [];
        if (0 === t) return (n[0] = r), (n[1] = r), (n[2] = r), n;
        var a = Math.floor(6 * e),
          i = 6 * e - a,
          o = r * (1 - t),
          l = r * (1 - t * i),
          s = r * (1 - t * (1 - i));
        switch (a) {
          case 0:
          case 6:
            (n[0] = r), (n[1] = s), (n[2] = o);
            break;
          case 1:
            (n[0] = l), (n[1] = r), (n[2] = o);
            break;
          case 2:
            (n[0] = o), (n[1] = r), (n[2] = s);
            break;
          case 3:
            (n[0] = o), (n[1] = l), (n[2] = r);
            break;
          case 4:
            (n[0] = s), (n[1] = o), (n[2] = r);
            break;
          case 5:
            (n[0] = r), (n[1] = o), (n[2] = l);
        }
        return n;
      }
      var V = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              (this.NumberOfColors = 256),
              (this.Ramp = 'linear'),
              (this.TableRange = [0, 255]),
              (this.HueRange = [0, 0.66667]),
              (this.SaturationRange = [1, 1]),
              (this.ValueRange = [1, 1]),
              (this.AlphaRange = [1, 1]),
              (this.NaNColor = [128, 0, 0, 255]),
              (this.BelowRangeColor = [0, 0, 0, 255]),
              (this.UseBelowRangeColor = !0),
              (this.AboveRangeColor = [255, 255, 255, 255]),
              (this.UseAboveRangeColor = !0),
              (this.InputRange = [0, 255]),
              (this.Table = []);
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'setNumberOfTableValues',
                value: function (e) {
                  this.NumberOfColors = e;
                },
              },
              {
                key: 'setRamp',
                value: function (e) {
                  this.Ramp = e;
                },
              },
              {
                key: 'setTableRange',
                value: function (e, t) {
                  (this.TableRange[0] = e), (this.TableRange[1] = t);
                },
              },
              {
                key: 'setHueRange',
                value: function (e, t) {
                  (this.HueRange[0] = e), (this.HueRange[1] = t);
                },
              },
              {
                key: 'setSaturationRange',
                value: function (e, t) {
                  (this.SaturationRange[0] = e), (this.SaturationRange[1] = t);
                },
              },
              {
                key: 'setValueRange',
                value: function (e, t) {
                  (this.ValueRange[0] = e), (this.ValueRange[1] = t);
                },
              },
              {
                key: 'setRange',
                value: function (e, t) {
                  (this.InputRange[0] = e), (this.InputRange[1] = t);
                },
              },
              {
                key: 'setAlphaRange',
                value: function (e, t) {
                  (this.AlphaRange[0] = e), (this.AlphaRange[1] = t);
                },
              },
              {
                key: 'getColor',
                value: function (e) {
                  return this.mapValue(e);
                },
              },
              {
                key: 'build',
                value: function (e) {
                  if (!(1 < this.Table.length) || e) {
                    this.Table = [];
                    var t,
                      r,
                      n,
                      a,
                      i = this.NumberOfColors - 1;
                    i
                      ? ((t = (this.HueRange[1] - this.HueRange[0]) / i),
                        (r =
                          (this.SaturationRange[1] - this.SaturationRange[0]) /
                          i),
                        (n = (this.ValueRange[1] - this.ValueRange[0]) / i),
                        (a = (this.AlphaRange[1] - this.AlphaRange[0]) / i))
                      : (t = r = n = a = 0);
                    for (var o = 0; o <= i; o++) {
                      var l = this.HueRange[0] + o * t,
                        s = this.SaturationRange[0] + o * r,
                        u = this.ValueRange[0] + o * n,
                        d = this.AlphaRange[0] + o * a,
                        m = O(l, s, u),
                        c = [];
                      switch (this.Ramp) {
                        case 'scurve':
                          (c[0] = Math.floor(
                            127.5 * (1 + Math.cos((1 - m[0]) * Math.PI))
                          )),
                            (c[1] = Math.floor(
                              127.5 * (1 + Math.cos((1 - m[1]) * Math.PI))
                            )),
                            (c[2] = Math.floor(
                              127.5 * (1 + Math.cos((1 - m[2]) * Math.PI))
                            )),
                            (c[3] = Math.floor(255 * d));
                          break;
                        case 'linear':
                          (c[0] = Math.floor(255 * m[0] + 0.5)),
                            (c[1] = Math.floor(255 * m[1] + 0.5)),
                            (c[2] = Math.floor(255 * m[2] + 0.5)),
                            (c[3] = Math.floor(255 * d + 0.5));
                          break;
                        case 'sqrt':
                          (c[0] = Math.floor(255 * Math.sqrt(m[0]) + 0.5)),
                            (c[1] = Math.floor(255 * Math.sqrt(m[1]) + 0.5)),
                            (c[2] = Math.floor(255 * Math.sqrt(m[2]) + 0.5)),
                            (c[3] = Math.floor(255 * Math.sqrt(d) + 0.5));
                          break;
                        default:
                          throw new Error(
                            'Invalid Ramp value ('.concat(this.Ramp, ')')
                          );
                      }
                      this.Table.push(c);
                    }
                    this.buildSpecialColors();
                  }
                },
              },
              {
                key: 'buildSpecialColors',
                value: function () {
                  var e = this.NumberOfColors,
                    t = e + 0,
                    r = e + 1,
                    n = e + 2;
                  this.UseBelowRangeColor || 0 === e
                    ? (this.Table[t] = this.BelowRangeColor)
                    : (this.Table[t] = this.Table[0]),
                    this.UseAboveRangeColor || 0 === e
                      ? (this.Table[r] = this.AboveRangeColor)
                      : (this.Table[r] = this.Table[e - 1]),
                    (this.Table[n] = this.NaNColor);
                },
              },
              {
                key: 'mapValue',
                value: function (e) {
                  var t = this.getIndex(e);
                  if (t < 0) return this.NaNColor;
                  if (0 === t) {
                    if (this.UseBelowRangeColor && e < this.TableRange[0])
                      return this.BelowRangeColor;
                  } else if (
                    t === this.NumberOfColors - 1 &&
                    this.UseAboveRangeColor &&
                    e > this.TableRange[1]
                  )
                    return this.AboveRangeColor;
                  return this.Table[t];
                },
              },
              {
                key: 'getIndex',
                value: function (e) {
                  var t = { Range: [] };
                  if (
                    ((t.MaxIndex = this.NumberOfColors - 1),
                    (t.Shift = -this.TableRange[0]),
                    this.TableRange[1] <= this.TableRange[0]
                      ? (t.Scale = Number.MAX_VALUE)
                      : (t.Scale =
                          t.MaxIndex /
                          (this.TableRange[1] - this.TableRange[0])),
                    (t.Range[0] = this.TableRange[0]),
                    (t.Range[1] = this.TableRange[1]),
                    isNaN(e))
                  )
                    return -1;
                  var r,
                    n,
                    a,
                    i =
                      ((a =
                        (r = e) < (n = t).Range[0]
                          ? n.MaxIndex + 0 + 1.5
                          : r > n.Range[1]
                          ? n.MaxIndex + 1 + 1.5
                          : (r + n.Shift) * n.Scale),
                      Math.floor(a));
                  return (
                    i === this.NumberOfColors + 0
                      ? (i = 0)
                      : i === this.NumberOfColors + 1 &&
                        (i = this.NumberOfColors - 1),
                    i
                  );
                },
              },
              {
                key: 'setTableValue',
                value: function (e, t) {
                  if (
                    (5 === arguments.length &&
                      (t = Array.prototype.slice.call(arguments, 1)),
                    e < 0)
                  )
                    throw new Error(
                      "Can't set the table value for negative index (".concat(
                        e,
                        ')'
                      )
                    );
                  e >= this.NumberOfColors &&
                    new Error(
                      'Index '
                        .concat(e, ' is greater than the number of colors ')
                        .concat(this.NumberOfColors)
                    ),
                    (this.Table[e] = t),
                    (0 !== e && e !== this.NumberOfColors - 1) ||
                      this.buildSpecialColors();
                },
              },
            ]) && M(t.prototype, r),
            n && M(t, n),
            e
          );
        })(),
        U = [0, 0, 0, 0],
        N = {
          hotIron: {
            name: 'Hot Iron',
            numOfColors: 256,
            colors: [
              [0, 0, 0, 255],
              [2, 0, 0, 255],
              [4, 0, 0, 255],
              [6, 0, 0, 255],
              [8, 0, 0, 255],
              [10, 0, 0, 255],
              [12, 0, 0, 255],
              [14, 0, 0, 255],
              [16, 0, 0, 255],
              [18, 0, 0, 255],
              [20, 0, 0, 255],
              [22, 0, 0, 255],
              [24, 0, 0, 255],
              [26, 0, 0, 255],
              [28, 0, 0, 255],
              [30, 0, 0, 255],
              [32, 0, 0, 255],
              [34, 0, 0, 255],
              [36, 0, 0, 255],
              [38, 0, 0, 255],
              [40, 0, 0, 255],
              [42, 0, 0, 255],
              [44, 0, 0, 255],
              [46, 0, 0, 255],
              [48, 0, 0, 255],
              [50, 0, 0, 255],
              [52, 0, 0, 255],
              [54, 0, 0, 255],
              [56, 0, 0, 255],
              [58, 0, 0, 255],
              [60, 0, 0, 255],
              [62, 0, 0, 255],
              [64, 0, 0, 255],
              [66, 0, 0, 255],
              [68, 0, 0, 255],
              [70, 0, 0, 255],
              [72, 0, 0, 255],
              [74, 0, 0, 255],
              [76, 0, 0, 255],
              [78, 0, 0, 255],
              [80, 0, 0, 255],
              [82, 0, 0, 255],
              [84, 0, 0, 255],
              [86, 0, 0, 255],
              [88, 0, 0, 255],
              [90, 0, 0, 255],
              [92, 0, 0, 255],
              [94, 0, 0, 255],
              [96, 0, 0, 255],
              [98, 0, 0, 255],
              [100, 0, 0, 255],
              [102, 0, 0, 255],
              [104, 0, 0, 255],
              [106, 0, 0, 255],
              [108, 0, 0, 255],
              [110, 0, 0, 255],
              [112, 0, 0, 255],
              [114, 0, 0, 255],
              [116, 0, 0, 255],
              [118, 0, 0, 255],
              [120, 0, 0, 255],
              [122, 0, 0, 255],
              [124, 0, 0, 255],
              [126, 0, 0, 255],
              [128, 0, 0, 255],
              [130, 0, 0, 255],
              [132, 0, 0, 255],
              [134, 0, 0, 255],
              [136, 0, 0, 255],
              [138, 0, 0, 255],
              [140, 0, 0, 255],
              [142, 0, 0, 255],
              [144, 0, 0, 255],
              [146, 0, 0, 255],
              [148, 0, 0, 255],
              [150, 0, 0, 255],
              [152, 0, 0, 255],
              [154, 0, 0, 255],
              [156, 0, 0, 255],
              [158, 0, 0, 255],
              [160, 0, 0, 255],
              [162, 0, 0, 255],
              [164, 0, 0, 255],
              [166, 0, 0, 255],
              [168, 0, 0, 255],
              [170, 0, 0, 255],
              [172, 0, 0, 255],
              [174, 0, 0, 255],
              [176, 0, 0, 255],
              [178, 0, 0, 255],
              [180, 0, 0, 255],
              [182, 0, 0, 255],
              [184, 0, 0, 255],
              [186, 0, 0, 255],
              [188, 0, 0, 255],
              [190, 0, 0, 255],
              [192, 0, 0, 255],
              [194, 0, 0, 255],
              [196, 0, 0, 255],
              [198, 0, 0, 255],
              [200, 0, 0, 255],
              [202, 0, 0, 255],
              [204, 0, 0, 255],
              [206, 0, 0, 255],
              [208, 0, 0, 255],
              [210, 0, 0, 255],
              [212, 0, 0, 255],
              [214, 0, 0, 255],
              [216, 0, 0, 255],
              [218, 0, 0, 255],
              [220, 0, 0, 255],
              [222, 0, 0, 255],
              [224, 0, 0, 255],
              [226, 0, 0, 255],
              [228, 0, 0, 255],
              [230, 0, 0, 255],
              [232, 0, 0, 255],
              [234, 0, 0, 255],
              [236, 0, 0, 255],
              [238, 0, 0, 255],
              [240, 0, 0, 255],
              [242, 0, 0, 255],
              [244, 0, 0, 255],
              [246, 0, 0, 255],
              [248, 0, 0, 255],
              [250, 0, 0, 255],
              [252, 0, 0, 255],
              [254, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 2, 0, 255],
              [255, 4, 0, 255],
              [255, 6, 0, 255],
              [255, 8, 0, 255],
              [255, 10, 0, 255],
              [255, 12, 0, 255],
              [255, 14, 0, 255],
              [255, 16, 0, 255],
              [255, 18, 0, 255],
              [255, 20, 0, 255],
              [255, 22, 0, 255],
              [255, 24, 0, 255],
              [255, 26, 0, 255],
              [255, 28, 0, 255],
              [255, 30, 0, 255],
              [255, 32, 0, 255],
              [255, 34, 0, 255],
              [255, 36, 0, 255],
              [255, 38, 0, 255],
              [255, 40, 0, 255],
              [255, 42, 0, 255],
              [255, 44, 0, 255],
              [255, 46, 0, 255],
              [255, 48, 0, 255],
              [255, 50, 0, 255],
              [255, 52, 0, 255],
              [255, 54, 0, 255],
              [255, 56, 0, 255],
              [255, 58, 0, 255],
              [255, 60, 0, 255],
              [255, 62, 0, 255],
              [255, 64, 0, 255],
              [255, 66, 0, 255],
              [255, 68, 0, 255],
              [255, 70, 0, 255],
              [255, 72, 0, 255],
              [255, 74, 0, 255],
              [255, 76, 0, 255],
              [255, 78, 0, 255],
              [255, 80, 0, 255],
              [255, 82, 0, 255],
              [255, 84, 0, 255],
              [255, 86, 0, 255],
              [255, 88, 0, 255],
              [255, 90, 0, 255],
              [255, 92, 0, 255],
              [255, 94, 0, 255],
              [255, 96, 0, 255],
              [255, 98, 0, 255],
              [255, 100, 0, 255],
              [255, 102, 0, 255],
              [255, 104, 0, 255],
              [255, 106, 0, 255],
              [255, 108, 0, 255],
              [255, 110, 0, 255],
              [255, 112, 0, 255],
              [255, 114, 0, 255],
              [255, 116, 0, 255],
              [255, 118, 0, 255],
              [255, 120, 0, 255],
              [255, 122, 0, 255],
              [255, 124, 0, 255],
              [255, 126, 0, 255],
              [255, 128, 4, 255],
              [255, 130, 8, 255],
              [255, 132, 12, 255],
              [255, 134, 16, 255],
              [255, 136, 20, 255],
              [255, 138, 24, 255],
              [255, 140, 28, 255],
              [255, 142, 32, 255],
              [255, 144, 36, 255],
              [255, 146, 40, 255],
              [255, 148, 44, 255],
              [255, 150, 48, 255],
              [255, 152, 52, 255],
              [255, 154, 56, 255],
              [255, 156, 60, 255],
              [255, 158, 64, 255],
              [255, 160, 68, 255],
              [255, 162, 72, 255],
              [255, 164, 76, 255],
              [255, 166, 80, 255],
              [255, 168, 84, 255],
              [255, 170, 88, 255],
              [255, 172, 92, 255],
              [255, 174, 96, 255],
              [255, 176, 100, 255],
              [255, 178, 104, 255],
              [255, 180, 108, 255],
              [255, 182, 112, 255],
              [255, 184, 116, 255],
              [255, 186, 120, 255],
              [255, 188, 124, 255],
              [255, 190, 128, 255],
              [255, 192, 132, 255],
              [255, 194, 136, 255],
              [255, 196, 140, 255],
              [255, 198, 144, 255],
              [255, 200, 148, 255],
              [255, 202, 152, 255],
              [255, 204, 156, 255],
              [255, 206, 160, 255],
              [255, 208, 164, 255],
              [255, 210, 168, 255],
              [255, 212, 172, 255],
              [255, 214, 176, 255],
              [255, 216, 180, 255],
              [255, 218, 184, 255],
              [255, 220, 188, 255],
              [255, 222, 192, 255],
              [255, 224, 196, 255],
              [255, 226, 200, 255],
              [255, 228, 204, 255],
              [255, 230, 208, 255],
              [255, 232, 212, 255],
              [255, 234, 216, 255],
              [255, 236, 220, 255],
              [255, 238, 224, 255],
              [255, 240, 228, 255],
              [255, 242, 232, 255],
              [255, 244, 236, 255],
              [255, 246, 240, 255],
              [255, 248, 244, 255],
              [255, 250, 248, 255],
              [255, 252, 252, 255],
              [255, 255, 255, 255],
            ],
          },
          pet: {
            name: 'PET',
            numColors: 256,
            colors: [
              [0, 0, 0, 255],
              [0, 2, 1, 255],
              [0, 4, 3, 255],
              [0, 6, 5, 255],
              [0, 8, 7, 255],
              [0, 10, 9, 255],
              [0, 12, 11, 255],
              [0, 14, 13, 255],
              [0, 16, 15, 255],
              [0, 18, 17, 255],
              [0, 20, 19, 255],
              [0, 22, 21, 255],
              [0, 24, 23, 255],
              [0, 26, 25, 255],
              [0, 28, 27, 255],
              [0, 30, 29, 255],
              [0, 32, 31, 255],
              [0, 34, 33, 255],
              [0, 36, 35, 255],
              [0, 38, 37, 255],
              [0, 40, 39, 255],
              [0, 42, 41, 255],
              [0, 44, 43, 255],
              [0, 46, 45, 255],
              [0, 48, 47, 255],
              [0, 50, 49, 255],
              [0, 52, 51, 255],
              [0, 54, 53, 255],
              [0, 56, 55, 255],
              [0, 58, 57, 255],
              [0, 60, 59, 255],
              [0, 62, 61, 255],
              [0, 65, 63, 255],
              [0, 67, 65, 255],
              [0, 69, 67, 255],
              [0, 71, 69, 255],
              [0, 73, 71, 255],
              [0, 75, 73, 255],
              [0, 77, 75, 255],
              [0, 79, 77, 255],
              [0, 81, 79, 255],
              [0, 83, 81, 255],
              [0, 85, 83, 255],
              [0, 87, 85, 255],
              [0, 89, 87, 255],
              [0, 91, 89, 255],
              [0, 93, 91, 255],
              [0, 95, 93, 255],
              [0, 97, 95, 255],
              [0, 99, 97, 255],
              [0, 101, 99, 255],
              [0, 103, 101, 255],
              [0, 105, 103, 255],
              [0, 107, 105, 255],
              [0, 109, 107, 255],
              [0, 111, 109, 255],
              [0, 113, 111, 255],
              [0, 115, 113, 255],
              [0, 117, 115, 255],
              [0, 119, 117, 255],
              [0, 121, 119, 255],
              [0, 123, 121, 255],
              [0, 125, 123, 255],
              [0, 128, 125, 255],
              [1, 126, 127, 255],
              [3, 124, 129, 255],
              [5, 122, 131, 255],
              [7, 120, 133, 255],
              [9, 118, 135, 255],
              [11, 116, 137, 255],
              [13, 114, 139, 255],
              [15, 112, 141, 255],
              [17, 110, 143, 255],
              [19, 108, 145, 255],
              [21, 106, 147, 255],
              [23, 104, 149, 255],
              [25, 102, 151, 255],
              [27, 100, 153, 255],
              [29, 98, 155, 255],
              [31, 96, 157, 255],
              [33, 94, 159, 255],
              [35, 92, 161, 255],
              [37, 90, 163, 255],
              [39, 88, 165, 255],
              [41, 86, 167, 255],
              [43, 84, 169, 255],
              [45, 82, 171, 255],
              [47, 80, 173, 255],
              [49, 78, 175, 255],
              [51, 76, 177, 255],
              [53, 74, 179, 255],
              [55, 72, 181, 255],
              [57, 70, 183, 255],
              [59, 68, 185, 255],
              [61, 66, 187, 255],
              [63, 64, 189, 255],
              [65, 63, 191, 255],
              [67, 61, 193, 255],
              [69, 59, 195, 255],
              [71, 57, 197, 255],
              [73, 55, 199, 255],
              [75, 53, 201, 255],
              [77, 51, 203, 255],
              [79, 49, 205, 255],
              [81, 47, 207, 255],
              [83, 45, 209, 255],
              [85, 43, 211, 255],
              [86, 41, 213, 255],
              [88, 39, 215, 255],
              [90, 37, 217, 255],
              [92, 35, 219, 255],
              [94, 33, 221, 255],
              [96, 31, 223, 255],
              [98, 29, 225, 255],
              [100, 27, 227, 255],
              [102, 25, 229, 255],
              [104, 23, 231, 255],
              [106, 21, 233, 255],
              [108, 19, 235, 255],
              [110, 17, 237, 255],
              [112, 15, 239, 255],
              [114, 13, 241, 255],
              [116, 11, 243, 255],
              [118, 9, 245, 255],
              [120, 7, 247, 255],
              [122, 5, 249, 255],
              [124, 3, 251, 255],
              [126, 1, 253, 255],
              [128, 0, 255, 255],
              [130, 2, 252, 255],
              [132, 4, 248, 255],
              [134, 6, 244, 255],
              [136, 8, 240, 255],
              [138, 10, 236, 255],
              [140, 12, 232, 255],
              [142, 14, 228, 255],
              [144, 16, 224, 255],
              [146, 18, 220, 255],
              [148, 20, 216, 255],
              [150, 22, 212, 255],
              [152, 24, 208, 255],
              [154, 26, 204, 255],
              [156, 28, 200, 255],
              [158, 30, 196, 255],
              [160, 32, 192, 255],
              [162, 34, 188, 255],
              [164, 36, 184, 255],
              [166, 38, 180, 255],
              [168, 40, 176, 255],
              [170, 42, 172, 255],
              [171, 44, 168, 255],
              [173, 46, 164, 255],
              [175, 48, 160, 255],
              [177, 50, 156, 255],
              [179, 52, 152, 255],
              [181, 54, 148, 255],
              [183, 56, 144, 255],
              [185, 58, 140, 255],
              [187, 60, 136, 255],
              [189, 62, 132, 255],
              [191, 64, 128, 255],
              [193, 66, 124, 255],
              [195, 68, 120, 255],
              [197, 70, 116, 255],
              [199, 72, 112, 255],
              [201, 74, 108, 255],
              [203, 76, 104, 255],
              [205, 78, 100, 255],
              [207, 80, 96, 255],
              [209, 82, 92, 255],
              [211, 84, 88, 255],
              [213, 86, 84, 255],
              [215, 88, 80, 255],
              [217, 90, 76, 255],
              [219, 92, 72, 255],
              [221, 94, 68, 255],
              [223, 96, 64, 255],
              [225, 98, 60, 255],
              [227, 100, 56, 255],
              [229, 102, 52, 255],
              [231, 104, 48, 255],
              [233, 106, 44, 255],
              [235, 108, 40, 255],
              [237, 110, 36, 255],
              [239, 112, 32, 255],
              [241, 114, 28, 255],
              [243, 116, 24, 255],
              [245, 118, 20, 255],
              [247, 120, 16, 255],
              [249, 122, 12, 255],
              [251, 124, 8, 255],
              [253, 126, 4, 255],
              [255, 128, 0, 255],
              [255, 130, 4, 255],
              [255, 132, 8, 255],
              [255, 134, 12, 255],
              [255, 136, 16, 255],
              [255, 138, 20, 255],
              [255, 140, 24, 255],
              [255, 142, 28, 255],
              [255, 144, 32, 255],
              [255, 146, 36, 255],
              [255, 148, 40, 255],
              [255, 150, 44, 255],
              [255, 152, 48, 255],
              [255, 154, 52, 255],
              [255, 156, 56, 255],
              [255, 158, 60, 255],
              [255, 160, 64, 255],
              [255, 162, 68, 255],
              [255, 164, 72, 255],
              [255, 166, 76, 255],
              [255, 168, 80, 255],
              [255, 170, 85, 255],
              [255, 172, 89, 255],
              [255, 174, 93, 255],
              [255, 176, 97, 255],
              [255, 178, 101, 255],
              [255, 180, 105, 255],
              [255, 182, 109, 255],
              [255, 184, 113, 255],
              [255, 186, 117, 255],
              [255, 188, 121, 255],
              [255, 190, 125, 255],
              [255, 192, 129, 255],
              [255, 194, 133, 255],
              [255, 196, 137, 255],
              [255, 198, 141, 255],
              [255, 200, 145, 255],
              [255, 202, 149, 255],
              [255, 204, 153, 255],
              [255, 206, 157, 255],
              [255, 208, 161, 255],
              [255, 210, 165, 255],
              [255, 212, 170, 255],
              [255, 214, 174, 255],
              [255, 216, 178, 255],
              [255, 218, 182, 255],
              [255, 220, 186, 255],
              [255, 222, 190, 255],
              [255, 224, 194, 255],
              [255, 226, 198, 255],
              [255, 228, 202, 255],
              [255, 230, 206, 255],
              [255, 232, 210, 255],
              [255, 234, 214, 255],
              [255, 236, 218, 255],
              [255, 238, 222, 255],
              [255, 240, 226, 255],
              [255, 242, 230, 255],
              [255, 244, 234, 255],
              [255, 246, 238, 255],
              [255, 248, 242, 255],
              [255, 250, 246, 255],
              [255, 252, 250, 255],
              [255, 255, 255, 255],
            ],
          },
          hotMetalBlue: {
            name: 'Hot Metal Blue',
            numColors: 256,
            colors: [
              [0, 0, 0, 255],
              [0, 0, 2, 255],
              [0, 0, 4, 255],
              [0, 0, 6, 255],
              [0, 0, 8, 255],
              [0, 0, 10, 255],
              [0, 0, 12, 255],
              [0, 0, 14, 255],
              [0, 0, 16, 255],
              [0, 0, 17, 255],
              [0, 0, 19, 255],
              [0, 0, 21, 255],
              [0, 0, 23, 255],
              [0, 0, 25, 255],
              [0, 0, 27, 255],
              [0, 0, 29, 255],
              [0, 0, 31, 255],
              [0, 0, 33, 255],
              [0, 0, 35, 255],
              [0, 0, 37, 255],
              [0, 0, 39, 255],
              [0, 0, 41, 255],
              [0, 0, 43, 255],
              [0, 0, 45, 255],
              [0, 0, 47, 255],
              [0, 0, 49, 255],
              [0, 0, 51, 255],
              [0, 0, 53, 255],
              [0, 0, 55, 255],
              [0, 0, 57, 255],
              [0, 0, 59, 255],
              [0, 0, 61, 255],
              [0, 0, 63, 255],
              [0, 0, 65, 255],
              [0, 0, 67, 255],
              [0, 0, 69, 255],
              [0, 0, 71, 255],
              [0, 0, 73, 255],
              [0, 0, 75, 255],
              [0, 0, 77, 255],
              [0, 0, 79, 255],
              [0, 0, 81, 255],
              [0, 0, 83, 255],
              [0, 0, 84, 255],
              [0, 0, 86, 255],
              [0, 0, 88, 255],
              [0, 0, 90, 255],
              [0, 0, 92, 255],
              [0, 0, 94, 255],
              [0, 0, 96, 255],
              [0, 0, 98, 255],
              [0, 0, 100, 255],
              [0, 0, 102, 255],
              [0, 0, 104, 255],
              [0, 0, 106, 255],
              [0, 0, 108, 255],
              [0, 0, 110, 255],
              [0, 0, 112, 255],
              [0, 0, 114, 255],
              [0, 0, 116, 255],
              [0, 0, 117, 255],
              [0, 0, 119, 255],
              [0, 0, 121, 255],
              [0, 0, 123, 255],
              [0, 0, 125, 255],
              [0, 0, 127, 255],
              [0, 0, 129, 255],
              [0, 0, 131, 255],
              [0, 0, 133, 255],
              [0, 0, 135, 255],
              [0, 0, 137, 255],
              [0, 0, 139, 255],
              [0, 0, 141, 255],
              [0, 0, 143, 255],
              [0, 0, 145, 255],
              [0, 0, 147, 255],
              [0, 0, 149, 255],
              [0, 0, 151, 255],
              [0, 0, 153, 255],
              [0, 0, 155, 255],
              [0, 0, 157, 255],
              [0, 0, 159, 255],
              [0, 0, 161, 255],
              [0, 0, 163, 255],
              [0, 0, 165, 255],
              [0, 0, 167, 255],
              [3, 0, 169, 255],
              [6, 0, 171, 255],
              [9, 0, 173, 255],
              [12, 0, 175, 255],
              [15, 0, 177, 255],
              [18, 0, 179, 255],
              [21, 0, 181, 255],
              [24, 0, 183, 255],
              [26, 0, 184, 255],
              [29, 0, 186, 255],
              [32, 0, 188, 255],
              [35, 0, 190, 255],
              [38, 0, 192, 255],
              [41, 0, 194, 255],
              [44, 0, 196, 255],
              [47, 0, 198, 255],
              [50, 0, 200, 255],
              [52, 0, 197, 255],
              [55, 0, 194, 255],
              [57, 0, 191, 255],
              [59, 0, 188, 255],
              [62, 0, 185, 255],
              [64, 0, 182, 255],
              [66, 0, 179, 255],
              [69, 0, 176, 255],
              [71, 0, 174, 255],
              [74, 0, 171, 255],
              [76, 0, 168, 255],
              [78, 0, 165, 255],
              [81, 0, 162, 255],
              [83, 0, 159, 255],
              [85, 0, 156, 255],
              [88, 0, 153, 255],
              [90, 0, 150, 255],
              [93, 2, 144, 255],
              [96, 4, 138, 255],
              [99, 6, 132, 255],
              [102, 8, 126, 255],
              [105, 9, 121, 255],
              [108, 11, 115, 255],
              [111, 13, 109, 255],
              [114, 15, 103, 255],
              [116, 17, 97, 255],
              [119, 19, 91, 255],
              [122, 21, 85, 255],
              [125, 23, 79, 255],
              [128, 24, 74, 255],
              [131, 26, 68, 255],
              [134, 28, 62, 255],
              [137, 30, 56, 255],
              [140, 32, 50, 255],
              [143, 34, 47, 255],
              [146, 36, 44, 255],
              [149, 38, 41, 255],
              [152, 40, 38, 255],
              [155, 41, 35, 255],
              [158, 43, 32, 255],
              [161, 45, 29, 255],
              [164, 47, 26, 255],
              [166, 49, 24, 255],
              [169, 51, 21, 255],
              [172, 53, 18, 255],
              [175, 55, 15, 255],
              [178, 56, 12, 255],
              [181, 58, 9, 255],
              [184, 60, 6, 255],
              [187, 62, 3, 255],
              [190, 64, 0, 255],
              [194, 66, 0, 255],
              [198, 68, 0, 255],
              [201, 70, 0, 255],
              [205, 72, 0, 255],
              [209, 73, 0, 255],
              [213, 75, 0, 255],
              [217, 77, 0, 255],
              [221, 79, 0, 255],
              [224, 81, 0, 255],
              [228, 83, 0, 255],
              [232, 85, 0, 255],
              [236, 87, 0, 255],
              [240, 88, 0, 255],
              [244, 90, 0, 255],
              [247, 92, 0, 255],
              [251, 94, 0, 255],
              [255, 96, 0, 255],
              [255, 98, 3, 255],
              [255, 100, 6, 255],
              [255, 102, 9, 255],
              [255, 104, 12, 255],
              [255, 105, 15, 255],
              [255, 107, 18, 255],
              [255, 109, 21, 255],
              [255, 111, 24, 255],
              [255, 113, 26, 255],
              [255, 115, 29, 255],
              [255, 117, 32, 255],
              [255, 119, 35, 255],
              [255, 120, 38, 255],
              [255, 122, 41, 255],
              [255, 124, 44, 255],
              [255, 126, 47, 255],
              [255, 128, 50, 255],
              [255, 130, 53, 255],
              [255, 132, 56, 255],
              [255, 134, 59, 255],
              [255, 136, 62, 255],
              [255, 137, 65, 255],
              [255, 139, 68, 255],
              [255, 141, 71, 255],
              [255, 143, 74, 255],
              [255, 145, 76, 255],
              [255, 147, 79, 255],
              [255, 149, 82, 255],
              [255, 151, 85, 255],
              [255, 152, 88, 255],
              [255, 154, 91, 255],
              [255, 156, 94, 255],
              [255, 158, 97, 255],
              [255, 160, 100, 255],
              [255, 162, 103, 255],
              [255, 164, 106, 255],
              [255, 166, 109, 255],
              [255, 168, 112, 255],
              [255, 169, 115, 255],
              [255, 171, 118, 255],
              [255, 173, 121, 255],
              [255, 175, 124, 255],
              [255, 177, 126, 255],
              [255, 179, 129, 255],
              [255, 181, 132, 255],
              [255, 183, 135, 255],
              [255, 184, 138, 255],
              [255, 186, 141, 255],
              [255, 188, 144, 255],
              [255, 190, 147, 255],
              [255, 192, 150, 255],
              [255, 194, 153, 255],
              [255, 196, 156, 255],
              [255, 198, 159, 255],
              [255, 200, 162, 255],
              [255, 201, 165, 255],
              [255, 203, 168, 255],
              [255, 205, 171, 255],
              [255, 207, 174, 255],
              [255, 209, 176, 255],
              [255, 211, 179, 255],
              [255, 213, 182, 255],
              [255, 215, 185, 255],
              [255, 216, 188, 255],
              [255, 218, 191, 255],
              [255, 220, 194, 255],
              [255, 222, 197, 255],
              [255, 224, 200, 255],
              [255, 226, 203, 255],
              [255, 228, 206, 255],
              [255, 229, 210, 255],
              [255, 231, 213, 255],
              [255, 233, 216, 255],
              [255, 235, 219, 255],
              [255, 237, 223, 255],
              [255, 239, 226, 255],
              [255, 240, 229, 255],
              [255, 242, 232, 255],
              [255, 244, 236, 255],
              [255, 246, 239, 255],
              [255, 248, 242, 255],
              [255, 250, 245, 255],
              [255, 251, 249, 255],
              [255, 253, 252, 255],
              [255, 255, 255, 255],
            ],
          },
          pet20Step: {
            name: 'PET 20 Step',
            numColors: 256,
            colors: [
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [0, 0, 0, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [96, 0, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 80, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [48, 48, 112, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [80, 80, 128, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [96, 96, 176, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [112, 112, 192, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [128, 128, 224, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 96, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [48, 144, 48, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [80, 192, 80, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [64, 224, 64, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [224, 224, 80, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 208, 96, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 176, 64, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [208, 144, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [192, 96, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [176, 48, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 0, 0, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
              [255, 255, 255, 255],
            ],
          },
          gray: {
            name: 'Gray',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              blue: [
                [0, 0, 0],
                [1, 1, 1],
              ],
            },
          },
          jet: {
            name: 'Jet',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [0.35, 0, 0],
                [0.66, 1, 1],
                [0.89, 1, 1],
                [1, 0.5, 0.5],
              ],
              green: [
                [0, 0, 0],
                [0.125, 0, 0],
                [0.375, 1, 1],
                [0.64, 1, 1],
                [0.91, 0, 0],
                [1, 0, 0],
              ],
              blue: [
                [0, 0.5, 0.5],
                [0.11, 1, 1],
                [0.34, 1, 1],
                [0.65, 0, 0],
                [1, 0, 0],
              ],
            },
          },
          hsv: {
            name: 'HSV',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 1, 1],
                [0.15873, 1, 1],
                [0.174603, 0.96875, 0.96875],
                [0.333333, 0.03125, 0.03125],
                [0.349206, 0, 0],
                [0.666667, 0, 0],
                [0.68254, 0.03125, 0.03125],
                [0.84127, 0.96875, 0.96875],
                [0.857143, 1, 1],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [0.15873, 0.9375, 0.9375],
                [0.174603, 1, 1],
                [0.507937, 1, 1],
                [0.666667, 0.0625, 0.0625],
                [0.68254, 0, 0],
                [1, 0, 0],
              ],
              blue: [
                [0, 0, 0],
                [0.333333, 0, 0],
                [0.349206, 0.0625, 0.0625],
                [0.507937, 1, 1],
                [0.84127, 1, 1],
                [0.857143, 0.9375, 0.9375],
                [1, 0.09375, 0.09375],
              ],
            },
          },
          hot: {
            name: 'Hot',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0.0416, 0.0416],
                [0.365079, 1, 1],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [0.365079, 0, 0],
                [0.746032, 1, 1],
                [1, 1, 1],
              ],
              blue: [
                [0, 0, 0],
                [0.746032, 0, 0],
                [1, 1, 1],
              ],
            },
          },
          cool: {
            name: 'Cool',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              green: [
                [0, 1, 1],
                [1, 0, 0],
              ],
              blue: [
                [0, 1, 1],
                [1, 1, 1],
              ],
            },
          },
          spring: {
            name: 'Spring',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 1, 1],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              blue: [
                [0, 1, 1],
                [1, 0, 0],
              ],
            },
          },
          summer: {
            name: 'Summer',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              green: [
                [0, 0.5, 0.5],
                [1, 1, 1],
              ],
              blue: [
                [0, 0.4, 0.4],
                [1, 0.4, 0.4],
              ],
            },
          },
          autumn: {
            name: 'Autumn',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 1, 1],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              blue: [
                [0, 0, 0],
                [1, 0, 0],
              ],
            },
          },
          winter: {
            name: 'Winter',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [1, 0, 0],
              ],
              green: [
                [0, 0, 0],
                [1, 1, 1],
              ],
              blue: [
                [0, 1, 1],
                [1, 0.5, 0.5],
              ],
            },
          },
          bone: {
            name: 'Bone',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [0.746032, 0.652778, 0.652778],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [0.365079, 0.319444, 0.319444],
                [0.746032, 0.777778, 0.777778],
                [1, 1, 1],
              ],
              blue: [
                [0, 0, 0],
                [0.365079, 0.444444, 0.444444],
                [1, 1, 1],
              ],
            },
          },
          copper: {
            name: 'Copper',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [0.809524, 1, 1],
                [1, 1, 1],
              ],
              green: [
                [0, 0, 0],
                [1, 0.7812, 0.7812],
              ],
              blue: [
                [0, 0, 0],
                [1, 0.4975, 0.4975],
              ],
            },
          },
          spectral: {
            name: 'Spectral',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0, 0],
                [0.05, 0.4667, 0.4667],
                [0.1, 0.5333, 0.5333],
                [0.15, 0, 0],
                [0.2, 0, 0],
                [0.25, 0, 0],
                [0.3, 0, 0],
                [0.35, 0, 0],
                [0.4, 0, 0],
                [0.45, 0, 0],
                [0.5, 0, 0],
                [0.55, 0, 0],
                [0.6, 0, 0],
                [0.65, 0.7333, 0.7333],
                [0.7, 0.9333, 0.9333],
                [0.75, 1, 1],
                [0.8, 1, 1],
                [0.85, 1, 1],
                [0.9, 0.8667, 0.8667],
                [0.95, 0.8, 0.8],
                [1, 0.8, 0.8],
              ],
              green: [
                [0, 0, 0],
                [0.05, 0, 0],
                [0.1, 0, 0],
                [0.15, 0, 0],
                [0.2, 0, 0],
                [0.25, 0.4667, 0.4667],
                [0.3, 0.6, 0.6],
                [0.35, 0.6667, 0.6667],
                [0.4, 0.6667, 0.6667],
                [0.45, 0.6, 0.6],
                [0.5, 0.7333, 0.7333],
                [0.55, 0.8667, 0.8667],
                [0.6, 1, 1],
                [0.65, 1, 1],
                [0.7, 0.9333, 0.9333],
                [0.75, 0.8, 0.8],
                [0.8, 0.6, 0.6],
                [0.85, 0, 0],
                [0.9, 0, 0],
                [0.95, 0, 0],
                [1, 0.8, 0.8],
              ],
              blue: [
                [0, 0, 0],
                [0.05, 0.5333, 0.5333],
                [0.1, 0.6, 0.6],
                [0.15, 0.6667, 0.6667],
                [0.2, 0.8667, 0.8667],
                [0.25, 0.8667, 0.8667],
                [0.3, 0.8667, 0.8667],
                [0.35, 0.6667, 0.6667],
                [0.4, 0.5333, 0.5333],
                [0.45, 0, 0],
                [0.5, 0, 0],
                [0.55, 0, 0],
                [0.6, 0, 0],
                [0.65, 0, 0],
                [0.7, 0, 0],
                [0.75, 0, 0],
                [0.8, 0, 0],
                [0.85, 0, 0],
                [0.9, 0, 0],
                [0.95, 0, 0],
                [1, 0.8, 0.8],
              ],
            },
          },
          coolwarm: {
            name: 'CoolWarm',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0.2298057, 0.2298057],
                [0.03125, 0.26623388, 0.26623388],
                [0.0625, 0.30386891, 0.30386891],
                [0.09375, 0.342804478, 0.342804478],
                [0.125, 0.38301334, 0.38301334],
                [0.15625, 0.424369608, 0.424369608],
                [0.1875, 0.46666708, 0.46666708],
                [0.21875, 0.509635204, 0.509635204],
                [0.25, 0.552953156, 0.552953156],
                [0.28125, 0.596262162, 0.596262162],
                [0.3125, 0.639176211, 0.639176211],
                [0.34375, 0.681291281, 0.681291281],
                [0.375, 0.722193294, 0.722193294],
                [0.40625, 0.761464949, 0.761464949],
                [0.4375, 0.798691636, 0.798691636],
                [0.46875, 0.833466556, 0.833466556],
                [0.5, 0.865395197, 0.865395197],
                [0.53125, 0.897787179, 0.897787179],
                [0.5625, 0.924127593, 0.924127593],
                [0.59375, 0.944468518, 0.944468518],
                [0.625, 0.958852946, 0.958852946],
                [0.65625, 0.96732803, 0.96732803],
                [0.6875, 0.969954137, 0.969954137],
                [0.71875, 0.966811177, 0.966811177],
                [0.75, 0.958003065, 0.958003065],
                [0.78125, 0.943660866, 0.943660866],
                [0.8125, 0.923944917, 0.923944917],
                [0.84375, 0.89904617, 0.89904617],
                [0.875, 0.869186849, 0.869186849],
                [0.90625, 0.834620542, 0.834620542],
                [0.9375, 0.795631745, 0.795631745],
                [0.96875, 0.752534934, 0.752534934],
                [1, 0.705673158, 0.705673158],
              ],
              green: [
                [0, 0.298717966, 0.298717966],
                [0.03125, 0.353094838, 0.353094838],
                [0.0625, 0.406535296, 0.406535296],
                [0.09375, 0.458757618, 0.458757618],
                [0.125, 0.50941904, 0.50941904],
                [0.15625, 0.558148092, 0.558148092],
                [0.1875, 0.604562568, 0.604562568],
                [0.21875, 0.648280772, 0.648280772],
                [0.25, 0.688929332, 0.688929332],
                [0.28125, 0.726149107, 0.726149107],
                [0.3125, 0.759599947, 0.759599947],
                [0.34375, 0.788964712, 0.788964712],
                [0.375, 0.813952739, 0.813952739],
                [0.40625, 0.834302879, 0.834302879],
                [0.4375, 0.849786142, 0.849786142],
                [0.46875, 0.860207984, 0.860207984],
                [0.5, 0.86541021, 0.86541021],
                [0.53125, 0.848937047, 0.848937047],
                [0.5625, 0.827384882, 0.827384882],
                [0.59375, 0.800927443, 0.800927443],
                [0.625, 0.769767752, 0.769767752],
                [0.65625, 0.734132809, 0.734132809],
                [0.6875, 0.694266682, 0.694266682],
                [0.71875, 0.650421156, 0.650421156],
                [0.75, 0.602842431, 0.602842431],
                [0.78125, 0.551750968, 0.551750968],
                [0.8125, 0.49730856, 0.49730856],
                [0.84375, 0.439559467, 0.439559467],
                [0.875, 0.378313092, 0.378313092],
                [0.90625, 0.312874446, 0.312874446],
                [0.9375, 0.24128379, 0.24128379],
                [0.96875, 0.157246067, 0.157246067],
                [1, 0.01555616, 0.01555616],
              ],
              blue: [
                [0, 0.753683153, 0.753683153],
                [0.03125, 0.801466763, 0.801466763],
                [0.0625, 0.84495867, 0.84495867],
                [0.09375, 0.883725899, 0.883725899],
                [0.125, 0.917387822, 0.917387822],
                [0.15625, 0.945619588, 0.945619588],
                [0.1875, 0.968154911, 0.968154911],
                [0.21875, 0.98478814, 0.98478814],
                [0.25, 0.995375608, 0.995375608],
                [0.28125, 0.999836203, 0.999836203],
                [0.3125, 0.998151185, 0.998151185],
                [0.34375, 0.990363227, 0.990363227],
                [0.375, 0.976574709, 0.976574709],
                [0.40625, 0.956945269, 0.956945269],
                [0.4375, 0.931688648, 0.931688648],
                [0.46875, 0.901068838, 0.901068838],
                [0.5, 0.865395561, 0.865395561],
                [0.53125, 0.820880546, 0.820880546],
                [0.5625, 0.774508472, 0.774508472],
                [0.59375, 0.726736146, 0.726736146],
                [0.625, 0.678007945, 0.678007945],
                [0.65625, 0.628751763, 0.628751763],
                [0.6875, 0.579375448, 0.579375448],
                [0.71875, 0.530263762, 0.530263762],
                [0.75, 0.481775914, 0.481775914],
                [0.78125, 0.434243684, 0.434243684],
                [0.8125, 0.387970225, 0.387970225],
                [0.84375, 0.343229596, 0.343229596],
                [0.875, 0.300267182, 0.300267182],
                [0.90625, 0.259301199, 0.259301199],
                [0.9375, 0.220525627, 0.220525627],
                [0.96875, 0.184115123, 0.184115123],
                [1, 0.150232812, 0.150232812],
              ],
            },
          },
          blues: {
            name: 'Blues',
            numColors: 256,
            gamma: 1,
            segmentedData: {
              red: [
                [0, 0.9686274528503418, 0.9686274528503418],
                [0.125, 0.8705882430076599, 0.8705882430076599],
                [0.25, 0.7764706015586853, 0.7764706015586853],
                [0.375, 0.6196078658103943, 0.6196078658103943],
                [0.5, 0.41960784792900085, 0.41960784792900085],
                [0.625, 0.25882354378700256, 0.25882354378700256],
                [0.75, 0.12941177189350128, 0.12941177189350128],
                [0.875, 0.0313725508749485, 0.0313725508749485],
                [1, 0.0313725508749485, 0.0313725508749485],
              ],
              green: [
                [0, 0.9843137264251709, 0.9843137264251709],
                [0.125, 0.9215686321258545, 0.9215686321258545],
                [0.25, 0.8588235378265381, 0.8588235378265381],
                [0.375, 0.7921568751335144, 0.7921568751335144],
                [0.5, 0.6823529601097107, 0.6823529601097107],
                [0.625, 0.572549045085907, 0.572549045085907],
                [0.75, 0.4431372582912445, 0.4431372582912445],
                [0.875, 0.3176470696926117, 0.3176470696926117],
                [1, 0.1882352977991104, 0.1882352977991104],
              ],
              blue: [
                [0, 1, 1],
                [0.125, 0.9686274528503418, 0.9686274528503418],
                [0.25, 0.9372549057006836, 0.9372549057006836],
                [0.375, 0.8823529481887817, 0.8823529481887817],
                [0.5, 0.8392156958580017, 0.8392156958580017],
                [0.625, 0.7764706015586853, 0.7764706015586853],
                [0.75, 0.7098039388656616, 0.7098039388656616],
                [0.875, 0.6117647290229797, 0.6117647290229797],
                [1, 0.41960784792900085, 0.41960784792900085],
              ],
            },
          },
        };
      function B(e, t) {
        for (var r = 0, n = e.length - 1; r <= n; ) {
          var a = r + Math.floor((n - r) / 2),
            i = e[a];
          if (i === t) return a;
          t < i ? (n = a - 1) : (r = a + 1);
        }
        return r;
      }
      function k(e, t, r) {
        var n,
          a = [],
          i = [],
          o = [],
          l = [];
        for (r = null === r ? 1 : r, n = 0; n < t.length; n++) {
          var s = t[n];
          a.push((e - 1) * s[0]), i.push(s[1]), o.push(s[1]);
        }
        var u = (function (e, t, r) {
          for (
            var n = (t - e) / ((r = null === r ? 100 : r) - 1), a = [];
            0 < r--;

          )
            a.push(e), (e += n);
          return (a[a.length - 1] = t), a;
        })(0, 1, e);
        for (n = 0; n < e; n++) u[n] = (e - 1) * Math.pow(u[n], r);
        var d = (function (e, t) {
          var r,
            n = [],
            a = t.length;
          for (
            e.sort(function (e, t) {
              return e - t;
            }),
              r = 0;
            r < a;
            r++
          )
            n[r] = B(e, t[r]);
          return n;
        })(a, u);
        for (n = 1; n < e - 1; n++) {
          var m = d[n],
            c = (u[n] - a[m - 1]) / (a[m] - a[m - 1]),
            f = i[m] - o[m - 1];
          l[n] = c * f + o[m - 1];
        }
        return (l[0] = o[0]), (l[e - 1] = i[t.length - 1]), l;
      }
      function F(e, t) {
        var n = N[e];
        return (
          n || (n = N[e] = t || { name: '', colors: [] }),
          !n.colors &&
            n.segmentedData &&
            (n.colors = (function (e, t, r) {
              var n,
                a = [];
              r = null === r ? 1 : r;
              var i = k((t = null === t ? 256 : t), e.red, r),
                o = k(t, e.green, r),
                l = k(t, e.blue, r);
              for (n = 0; n < t; n++) {
                var s = [
                  Math.round(255 * i[n]),
                  Math.round(255 * o[n]),
                  Math.round(255 * l[n]),
                  255,
                ];
                a.push(s);
              }
              return a;
            })(n.segmentedData, n.numColors, n.gamma)),
          {
            getId: function () {
              return e;
            },
            getColorSchemeName: function () {
              return n.name;
            },
            setColorSchemeName: function (e) {
              n.name = e;
            },
            getNumberOfColors: function () {
              return n.colors.length;
            },
            setNumberOfColors: function (e) {
              for (; n.colors.length < e; ) n.colors.push(U);
              n.colors.length = e;
            },
            getColor: function (e) {
              return this.isValidIndex(e) ? n.colors[e] : U;
            },
            getColorRepeating: function (e) {
              var t = n.colors.length;
              return (e = t ? e % t : 0), this.getColor(e);
            },
            setColor: function (e, t) {
              this.isValidIndex(e) && (n.colors[e] = t);
            },
            addColor: function (e) {
              n.colors.push(e);
            },
            insertColor: function (e, t) {
              this.isValidIndex(e) && n.colors.splice(e, 1, t);
            },
            removeColor: function (e) {
              this.isValidIndex(e) && n.colors.splice(e, 1);
            },
            clearColors: function () {
              n.colors = [];
            },
            buildLookupTable: function (e) {
              if (e) {
                var t = n.colors.length;
                e.setNumberOfTableValues(t);
                for (var r = 0; r < t; r++) e.setTableValue(r, n.colors[r]);
              }
            },
            createLookupTable: function () {
              var e = new V();
              return this.buildLookupTable(e), e;
            },
            isValidIndex: function (e) {
              return 0 <= e && e < n.colors.length;
            },
          }
        );
      }
      var G = {
        getColormap: F,
        getColormapsList: function () {
          var r = [];
          return (
            Object.keys(N).forEach(function (e) {
              if (N.hasOwnProperty(e)) {
                var t = N[e];
                r.push({ id: e, name: t.name });
              }
            }),
            r.sort(function (e, t) {
              var r = e.name.toLowerCase(),
                n = t.name.toLowerCase();
              return r === n ? 0 : r < n ? -1 : 1;
            }),
            r
          );
        },
        LookupTable: V,
      };
      function z(e, t) {
        if (e.color && !e.falseColor)
          throw new Error('Color transforms are not implemented yet');
        var r,
          n,
          a = e.minPixelValue,
          i = 0,
          o = 0,
          l = e.width * e.height,
          s = e.origPixelData || e.getPixelData(),
          u = new Uint8Array(4 * l);
        if (
          ((e.color = !0),
          (e.falseColor = !0),
          (e.origPixelData = s),
          t instanceof G.LookupTable)
        )
          for (t.build(); o < l; )
            (r = s[o++]),
              (n = t.mapValue(r)),
              (u[i++] = n[0]),
              (u[i++] = n[1]),
              (u[i++] = n[2]),
              (u[i++] = n[3]);
        else if (a < 0)
          for (; o < l; )
            (r = s[o++]),
              (u[i++] = t[r + -a][0]),
              (u[i++] = t[r + -a][1]),
              (u[i++] = t[r + -a][2]),
              (u[i++] = t[r + -a][3]);
        else
          for (; o < l; )
            (r = s[o++]),
              (u[i++] = t[r][0]),
              (u[i++] = t[r][1]),
              (u[i++] = t[r][2]),
              (u[i++] = t[r][3]);
        (e.rgba = !0),
          (e.cachedLut = void 0),
          (e.render = void 0),
          (e.slope = 1),
          (e.intercept = 0),
          (e.minPixelValue = 0),
          (e.maxPixelValue = 255),
          (e.windowWidth = 255),
          (e.windowCenter = 128),
          (e.getPixelData = function () {
            return u;
          });
      }
      function q(e) {
        return (
          !(!e.restore || 'function' != typeof e.restore) && (e.restore(), !0)
        );
      }
      function W(e, t) {
        if (e.color && !e.falseColor)
          throw new Error('Color transforms are not implemented yet');
        var r;
        (r = t) && 'string' == typeof r && (r = F(r));
        var n = (t = r).getId();
        if (e.colormapId === n) return !1;
        if ((q(e), n)) {
          var a = e.minPixelValue || 0,
            i = e.maxPixelValue || 255;
          e.restore = (function (t) {
            if (t.restore) return t.restore;
            var r = t.color,
              n = t.rgba,
              a = t.cachedLut,
              i = t.slope,
              o = t.windowWidth,
              l = t.windowCenter,
              s = t.minPixelValue,
              u = t.maxPixelValue;
            return function () {
              if (
                ((t.color = r),
                (t.rgba = n),
                (t.cachedLut = a),
                (t.slope = i),
                (t.windowWidth = o),
                (t.windowCenter = l),
                (t.minPixelValue = s),
                (t.maxPixelValue = u),
                t.origPixelData)
              ) {
                var e = t.origPixelData;
                t.getPixelData = function () {
                  return e;
                };
              }
              (t.origPixelData = void 0),
                (t.colormapId = void 0),
                (t.falseColor = void 0);
            };
          })(e);
          var o = t.createLookupTable();
          o.setTableRange(a, i), z(e, o);
          var l = (function (e) {
            for (
              var t,
                r = Number.MAX_VALUE,
                n = Number.MIN_VALUE,
                a = e.length,
                i = 0;
              i < a;
              i++
            )
              (r = r < (t = e[i]) ? r : t), (n = t < n ? n : t);
            return { minPixelValue: r, maxPixelValue: n };
          })(e.getPixelData());
          (e.minPixelValue = l.minPixelValue),
            (e.maxPixelValue = l.maxPixelValue),
            (e.windowWidth = 255),
            (e.windowCenter = 128),
            (e.colormapId = n);
        }
        return !0;
      }
      function j(e, t) {
        return W(C(e).image, t);
      }
      function H(e, t) {
        var r = C(e);
        return !1 === r.data.hasOwnProperty(t) && (r.data[t] = {}), r.data[t];
      }
      function X(e, t) {
        delete C(e).data[t];
      }
      var Y = 1073741824,
        K = 0,
        Z = {},
        $ = [];
      function J() {
        if (!(K <= Y)) {
          for (
            $.sort(function (e, t) {
              return e.timeStamp > t.timeStamp
                ? -1
                : e.timeStamp < t.timeStamp
                ? 1
                : 0;
            });
            Y < K;

          ) {
            var e = $[$.length - 1].imageId;
            te(e), R(o, T.IMAGE_CACHE_PROMISE_REMOVED, { imageId: e });
          }
          var t = re();
          R(o, T.IMAGE_CACHE_FULL, t);
        }
      }
      function Q(t, e) {
        if (void 0 === t)
          throw new Error('putImageLoadObject: imageId must not be undefined');
        if (void 0 === e.promise)
          throw new Error(
            'putImageLoadObject: imageLoadObject.promise must not be undefined'
          );
        if (!0 === Z.hasOwnProperty(t))
          throw new Error('putImageLoadObject: imageId already in cache');
        if (e.cancelFn && 'function' != typeof e.cancelFn)
          throw new Error(
            'putImageLoadObject: imageLoadObject.cancelFn must be a function'
          );
        var r = {
          loaded: !1,
          imageId: t,
          sharedCacheKey: void 0,
          imageLoadObject: e,
          timeStamp: Date.now(),
          sizeInBytes: 0,
        };
        (Z[t] = r),
          $.push(r),
          e.promise.then(
            function (e) {
              if (-1 !== $.indexOf(r)) {
                if (((r.loaded = !0), void 0 === (r.image = e).sizeInBytes))
                  throw new Error(
                    'putImageLoadObject: image.sizeInBytes must not be undefined'
                  );
                if (void 0 === e.sizeInBytes.toFixed)
                  throw new Error(
                    'putImageLoadObject: image.sizeInBytes is not a number'
                  );
                (r.sizeInBytes = e.sizeInBytes), (K += r.sizeInBytes);
                var t = { action: 'addImage', image: r };
                R(o, T.IMAGE_CACHE_CHANGED, t),
                  (r.sharedCacheKey = e.sharedCacheKey),
                  J();
              }
            },
            function () {
              var e = Z[t];
              $.splice($.indexOf(e), 1), delete Z[t];
            }
          );
      }
      function ee(e) {
        if (void 0 === e)
          throw new Error('getImageLoadObject: imageId must not be undefined');
        var t = Z[e];
        if (void 0 !== t) return (t.timeStamp = Date.now()), t.imageLoadObject;
      }
      function te(e) {
        if (void 0 === e)
          throw new Error(
            'removeImageLoadObject: imageId must not be undefined'
          );
        var t = Z[e];
        if (void 0 === t)
          throw new Error(
            'removeImageLoadObject: imageId was not present in imageCache'
          );
        $.splice($.indexOf(t), 1), (K -= t.sizeInBytes);
        var r,
          n = { action: 'deleteImage', image: t };
        R(o, T.IMAGE_CACHE_CHANGED, n),
          (r = t.imageLoadObject).promise.then(
            function () {
              r.decache && r.decache();
            },
            function () {
              r.decache && r.decache();
            }
          ),
          delete Z[e];
      }
      function re() {
        return {
          maximumSizeInBytes: Y,
          cacheSizeInBytes: K,
          numberOfImagesCached: $.length,
        };
      }
      var ne,
        ae = {
          imageCache: Z,
          cachedImages: $,
          setMaximumSizeBytes: function (e) {
            if (void 0 === e)
              throw new Error(
                'setMaximumSizeBytes: parameter numBytes must not be undefined'
              );
            if (void 0 === e.toFixed)
              throw new Error(
                'setMaximumSizeBytes: parameter numBytes must be a number'
              );
            (Y = e), R(o, T.IMAGE_CACHE_MAXIMUM_SIZE_CHANGED), J();
          },
          putImageLoadObject: Q,
          getImageLoadObject: ee,
          removeImageLoadObject: te,
          getCacheInfo: re,
          purgeCache: function () {
            for (; 0 < $.length; ) te($[0].imageId);
          },
          changeImageIdCacheSize: function (e, n) {
            var a = Z[e];
            a &&
              a.imageLoadObject.promise.then(function (e) {
                var t = n - e.sizeInBytes;
                (e.sizeInBytes = n), (a.sizeInBytes = n), (K += t);
                var r = { action: 'changeImageSize', image: e };
                R(o, T.IMAGE_CACHE_CHANGED, r);
              });
          },
        },
        ie = {};
      function oe(r, e) {
        var t = r.indexOf(':'),
          n = r.substring(0, t),
          a = ie[n];
        if (null == a) {
          if (void 0 !== ne) return ne(r);
          throw new Error(
            'loadImageFromImageLoader: no image loader for imageId'
          );
        }
        var i = a(r, e);
        return (
          i.promise.then(
            function (e) {
              R(o, T.IMAGE_LOADED, { image: e });
            },
            function (e) {
              var t = { imageId: r, error: e };
              R(o, T.IMAGE_LOAD_FAILED, t);
            }
          ),
          i
        );
      }
      function le(e, t) {
        if (void 0 === e)
          throw new Error('loadImage: parameter imageId must not be undefined');
        var r = ee(e);
        return void 0 !== r ? r.promise : oe(e, t).promise;
      }
      function se(e, t) {
        if (void 0 === e)
          throw new Error(
            'loadAndCacheImage: parameter imageId must not be undefined'
          );
        var r = ee(e);
        return void 0 !== r || Q(e, (r = oe(e, t))), r.promise;
      }
      function ue(e, t) {
        ie[e] = t;
      }
      function de(e) {
        var t = ne;
        return (ne = e), t;
      }
      function me(e, t) {
        var r =
          ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
          e['@@iterator'];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = (function (e, t) {
              if (!e) return;
              if ('string' == typeof e) return ce(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              'Object' === r && e.constructor && (r = e.constructor.name);
              if ('Map' === r || 'Set' === r) return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return ce(e, t);
            })(e)) ||
            (t && e && 'number' == typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        var i,
          o = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (o = e.done), e;
          },
          e: function (e) {
            (l = !0), (i = e);
          },
          f: function () {
            try {
              o || null == r.return || r.return();
            } finally {
              if (l) throw i;
            }
          },
        };
      }
      function ce(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function fe(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function ge(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var ve = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, e),
              ge(this, 'requestPool', void 0),
              ge(this, 'awake', void 0),
              ge(this, 'numRequests', void 0),
              ge(this, 'maxNumRequests', void 0),
              ge(this, 'grabDelay', void 0),
              ge(this, 'timeoutHandle', void 0),
              (this.requestPool = {
                interaction: { 0: [] },
                thumbnail: { 0: [] },
                prefetch: { 0: [] },
              }),
              (this.awake = !1),
              (this.grabDelay = 5),
              (this.numRequests = {
                interaction: 0,
                thumbnail: 0,
                prefetch: 0,
              }),
              (this.maxNumRequests = {
                interaction: 6,
                thumbnail: 6,
                prefetch: 5,
              });
          }
          var t, r, n;
          return (
            (t = e),
            (r = [
              {
                key: 'destroy',
                value: function () {
                  this.timeoutHandle && window.clearTimeout(this.timeoutHandle);
                },
              },
              {
                key: 'addRequest',
                value: function (e, t, r) {
                  var n =
                      3 < arguments.length && void 0 !== arguments[3]
                        ? arguments[3]
                        : 0,
                    a =
                      4 < arguments.length &&
                      void 0 !== arguments[4] &&
                      arguments[4],
                    i = { requestFn: e, type: t, additionalDetails: r };
                  void 0 === this.requestPool[t][n] &&
                    (this.requestPool[t][n] = []),
                    a
                      ? this.requestPool[t][n].unshift(i)
                      : this.requestPool[t][n].push(i),
                    this.awake || ((this.awake = !0), this.startGrabbing());
                },
              },
              {
                key: 'filterRequests',
                value: function (r) {
                  var n = this;
                  Object.keys(this.requestPool).forEach(function (e) {
                    var t = n.requestPool[e];
                    Object.keys(t).forEach(function (e) {
                      t[e] = t[e].filter(function (e) {
                        return r(e);
                      });
                    });
                  });
                },
              },
              {
                key: 'clearRequestStack',
                value: function (e) {
                  if (!this.requestPool[e])
                    throw new Error(
                      'No category for the type '.concat(e, ' found')
                    );
                  this.requestPool[e] = { 0: [] };
                },
              },
              {
                key: 'sendRequest',
                value: function (e) {
                  var t = this,
                    r = e.requestFn,
                    n = e.type;
                  this.numRequests[n]++,
                    (this.awake = !0),
                    r().finally(function () {
                      t.numRequests[n]--, t.startAgain();
                    });
                },
              },
              {
                key: 'startGrabbing',
                value: function () {
                  for (
                    var e =
                        this.maxNumRequests.interaction +
                        this.maxNumRequests.thumbnail +
                        this.maxNumRequests.prefetch -
                        (this.numRequests.interaction +
                          this.numRequests.thumbnail +
                          this.numRequests.prefetch),
                      t = 0;
                    t < e;
                    t++
                  ) {
                    var r = this.getNextRequest();
                    if (!1 === r) break;
                    r && this.sendRequest(r);
                  }
                },
              },
              {
                key: 'startAgain',
                value: function () {
                  var e = this;
                  this.awake &&
                    (this.grabDelay
                      ? (this.timeoutHandle = window.setTimeout(function () {
                          e.startGrabbing();
                        }, this.grabDelay))
                      : this.startGrabbing());
                },
              },
              {
                key: 'getSortedPriorityGroups',
                value: function (t) {
                  var r = this;
                  return Object.keys(this.requestPool[t])
                    .map(Number)
                    .filter(function (e) {
                      return r.requestPool[t][e].length;
                    })
                    .sort();
                },
              },
              {
                key: 'getNextRequest',
                value: function () {
                  var e,
                    t = this.getSortedPriorityGroups('interaction'),
                    r = me(t);
                  try {
                    for (r.s(); !(e = r.n()).done; ) {
                      var n = e.value;
                      if (
                        this.requestPool.interaction[n].length &&
                        this.numRequests.interaction <
                          this.maxNumRequests.interaction
                      )
                        return this.requestPool.interaction[n].shift();
                    }
                  } catch (e) {
                    r.e(e);
                  } finally {
                    r.f();
                  }
                  var a,
                    i = this.getSortedPriorityGroups('thumbnail'),
                    o = me(i);
                  try {
                    for (o.s(); !(a = o.n()).done; ) {
                      var l = a.value;
                      if (
                        this.requestPool.thumbnail[l].length &&
                        this.numRequests.thumbnail <
                          this.maxNumRequests.thumbnail
                      )
                        return this.requestPool.thumbnail[l].shift();
                    }
                  } catch (e) {
                    o.e(e);
                  } finally {
                    o.f();
                  }
                  var s,
                    u = this.getSortedPriorityGroups('prefetch'),
                    d = me(u);
                  try {
                    for (d.s(); !(s = d.n()).done; ) {
                      var m = s.value;
                      if (
                        this.requestPool.prefetch[m].length &&
                        this.numRequests.prefetch < this.maxNumRequests.prefetch
                      )
                        return this.requestPool.prefetch[m].shift();
                    }
                  } catch (e) {
                    d.e(e);
                  } finally {
                    d.f();
                  }
                  return (
                    t.length || i.length || u.length || (this.awake = !1), !1
                  );
                },
              },
              {
                key: 'getRequestPool',
                value: function () {
                  return this.requestPool;
                },
              },
            ]) && fe(t.prototype, r),
            n && fe(t, n),
            e
          );
        })(),
        he = new ve();
      (he.maxNumRequests = { interaction: 1e3, thumbnail: 1e3, prefetch: 1e3 }),
        (he.grabDelay = 0);
      var pe = he,
        we = new ve();
      (we.maxNumRequests = { interaction: 20, thumbnail: 20, prefetch: 20 }),
        (we.grabDelay = 0);
      var be = we;
      function ye(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      var xe = (function () {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              this.reset();
          }
          var e, r, n;
          return (
            (e = t),
            (r = [
              {
                key: 'reset',
                value: function () {
                  this.m = [1, 0, 0, 1, 0, 0];
                },
              },
              {
                key: 'clone',
                value: function () {
                  var e = new t();
                  return (
                    (e.m[0] = this.m[0]),
                    (e.m[1] = this.m[1]),
                    (e.m[2] = this.m[2]),
                    (e.m[3] = this.m[3]),
                    (e.m[4] = this.m[4]),
                    (e.m[5] = this.m[5]),
                    e
                  );
                },
              },
              {
                key: 'multiply',
                value: function (e) {
                  var t = this.m[0] * e.m[0] + this.m[2] * e.m[1],
                    r = this.m[1] * e.m[0] + this.m[3] * e.m[1],
                    n = this.m[0] * e.m[2] + this.m[2] * e.m[3],
                    a = this.m[1] * e.m[2] + this.m[3] * e.m[3],
                    i = this.m[0] * e.m[4] + this.m[2] * e.m[5] + this.m[4],
                    o = this.m[1] * e.m[4] + this.m[3] * e.m[5] + this.m[5];
                  (this.m[0] = t),
                    (this.m[1] = r),
                    (this.m[2] = n),
                    (this.m[3] = a),
                    (this.m[4] = i),
                    (this.m[5] = o);
                },
              },
              {
                key: 'invert',
                value: function () {
                  var e = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]),
                    t = this.m[3] * e,
                    r = -this.m[1] * e,
                    n = -this.m[2] * e,
                    a = this.m[0] * e,
                    i = e * (this.m[2] * this.m[5] - this.m[3] * this.m[4]),
                    o = e * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
                  (this.m[0] = t),
                    (this.m[1] = r),
                    (this.m[2] = n),
                    (this.m[3] = a),
                    (this.m[4] = i),
                    (this.m[5] = o);
                },
              },
              {
                key: 'rotate',
                value: function (e) {
                  var t = Math.cos(e),
                    r = Math.sin(e),
                    n = this.m[0] * t + this.m[2] * r,
                    a = this.m[1] * t + this.m[3] * r,
                    i = this.m[0] * -r + this.m[2] * t,
                    o = this.m[1] * -r + this.m[3] * t;
                  (this.m[0] = n),
                    (this.m[1] = a),
                    (this.m[2] = i),
                    (this.m[3] = o);
                },
              },
              {
                key: 'translate',
                value: function (e, t) {
                  (this.m[4] += this.m[0] * e + this.m[2] * t),
                    (this.m[5] += this.m[1] * e + this.m[3] * t);
                },
              },
              {
                key: 'scale',
                value: function (e, t) {
                  (this.m[0] *= e),
                    (this.m[1] *= e),
                    (this.m[2] *= t),
                    (this.m[3] *= t);
                },
              },
              {
                key: 'transformPoint',
                value: function (e, t) {
                  var r = e,
                    n = t;
                  return {
                    x: (e = r * this.m[0] + n * this.m[2] + this.m[4]),
                    y: (t = r * this.m[1] + n * this.m[3] + this.m[5]),
                  };
                },
              },
            ]) && ye(e.prototype, r),
            n && ye(e, n),
            t
          );
        })(),
        Ee = function (e, t) {
          var r = new xe();
          r.translate(e.canvas.width / 2, e.canvas.height / 2);
          var n = e.viewport.rotation;
          0 !== n && r.rotate((n * Math.PI) / 180);
          var a = e.viewport.scale,
            i = e.viewport.scale,
            o = v(e.image, e.viewport),
            l = o.tlhc.x - 1,
            s = o.tlhc.y - 1,
            u = o.brhc.x - l,
            d = o.brhc.y - s;
          if ('NONE' === o.presentationSizeMode)
            e.image.rowPixelSpacing < e.image.columnPixelSpacing
              ? (a *= e.image.columnPixelSpacing / e.image.rowPixelSpacing)
              : e.image.columnPixelSpacing < e.image.rowPixelSpacing &&
                (i *= e.image.rowPixelSpacing / e.image.columnPixelSpacing);
          else if (
            ((a = o.columnPixelSpacing),
            (i = o.rowPixelSpacing),
            'SCALE TO FIT' === o.presentationSizeMode)
          ) {
            var m = e.canvas.height / (d * i),
              c = e.canvas.width / (u * a);
            (a = i = Math.min(c, m)),
              o.rowPixelSpacing < o.columnPixelSpacing
                ? (a *= o.columnPixelSpacing / o.rowPixelSpacing)
                : o.columnPixelSpacing < o.rowPixelSpacing &&
                  (i *= o.rowPixelSpacing / o.columnPixelSpacing);
          }
          return (
            r.scale(a, i),
            0 !== n && r.rotate((-n * Math.PI) / 180),
            r.translate(e.viewport.translation.x, e.viewport.translation.y),
            0 !== n && r.rotate((n * Math.PI) / 180),
            void 0 !== t && r.scale(t, t),
            e.viewport.hflip && r.scale(-1, 1),
            e.viewport.vflip && r.scale(1, -1),
            r.translate(-u / 2, -d / 2),
            r.translate(-l, -s),
            r
          );
        },
        Ie = function (e) {
          return Ee(e);
        },
        Te = function (e, t) {
          var r = C(e),
            n = Ie(r);
          return n.invert(), n.transformPoint(t.x, t.y);
        },
        Ce = function (e) {
          if (void 0 === e)
            throw new Error('disable: element must not be undefined');
          for (var t = s(), r = 0; r < t.length; r++)
            if (t[r].element === e) {
              var n = { element: e };
              R(e, T.ELEMENT_DISABLED, n),
                R(o, T.ELEMENT_DISABLED, n),
                t[r].element.removeChild(t[r].canvas),
                (t[r].canvas = void 0),
                t.splice(r, 1);
              break;
            }
        },
        Le = function () {
          return window.performance ? performance.now() : Date.now();
        },
        Pe = function (e, t, r) {
          if (void 0 === e)
            throw new Error(
              'displayImage: parameter element must not be undefined'
            );
          if (void 0 === t)
            throw new Error(
              'displayImage: parameter image must not be undefined'
            );
          var n,
            a = C(e),
            i = a.image;
          if (
            ((a.image = t),
            a.layers && a.layers.length && S(e, t),
            void 0 === a.viewport && (a.viewport = g(a.canvas, t)),
            r)
          )
            for (var o in r) null !== r[o] && (a.viewport[o] = r[o]);
          void 0 !== a.lastImageTimeStamp &&
            (n = (1e3 / (Le() - a.lastImageTimeStamp)).toFixed());
          a.lastImageTimeStamp = Le();
          var l = {
            viewport: a.viewport,
            element: a.element,
            image: a.image,
            oldImage: i,
            enabledElement: a,
            frameRate: n,
          };
          R(a.element, T.NEW_IMAGE, l), P(e);
        },
        Re = function (e) {
          var t = C(e);
          h(t);
        },
        De = function () {
          for (var e = s(), t = 0; t < e.length; t++) {
            var r = e[t];
            !0 === r.invalid && h(r, !0);
          }
        },
        Se = function (e) {
          var t = C(e),
            r = t.image;
          (t.viewport.scale = f(t.canvas, r, t.viewport.rotation).scaleFactor),
            (t.viewport.translation.x = 0),
            (t.viewport.translation.y = 0),
            P(e);
        };
      var Ae = function (e, t) {
          var r,
            n,
            a = C(e),
            i = a.canvas.width,
            o = a.canvas.height;
          (r = e),
            (n = a.canvas).width !== r.clientWidth &&
              ((n.width = r.clientWidth),
              (n.style.width = ''.concat(r.clientWidth, 'px'))),
            n.height !== r.clientHeight &&
              ((n.height = r.clientHeight),
              (n.style.height = ''.concat(r.clientHeight, 'px')));
          var l,
            s,
            u,
            d,
            m,
            c,
            f,
            g,
            v,
            h,
            p,
            w,
            b,
            y,
            x,
            E,
            I = { element: e };
          (R(e, T.ELEMENT_RESIZED, I), void 0 !== a.image) &&
            (t ||
            ((v = i),
            (h = o),
            (p = (g = a).viewport.scale),
            (w = L(g.image, g.viewport.rotation)),
            (b = Math.round(w.width * p)),
            (y = Math.round(w.height * p)),
            (x = g.viewport.translation.x),
            (E = g.viewport.translation.y),
            (b === v && y <= h) || (b <= v && y === h && 0 === x && 0 === E))
              ? Se(e)
              : ((s = i),
                (u = o),
                (d = (l = a).viewport.scale),
                (m = l.canvas.width / s),
                (c = l.canvas.height / u),
                (f = Math.sqrt(m * c)),
                (l.viewport.scale = f * d),
                P(e)));
        },
        _e = function (e) {
          var t = (e.viewport || {}).invert,
            r = (e.options || {}).fillStyle;
          return -1 !== ['black', 'white'].indexOf(r) && t ? 'white' : 'black';
        },
        Me = function (e, t, r) {
          var n = Le(),
            a = e.getPixelData();
          e.stats.lastGetPixelDataTime = Le() - n;
          var i = a.length,
            o = e.minPixelValue,
            l = 3,
            s = 0;
          if (((n = Le()), a instanceof Int16Array))
            if (o < 0) for (; s < i; ) (r[l] = t[a[s++] + -o]), (l += 4);
            else for (; s < i; ) (r[l] = t[a[s++]]), (l += 4);
          else if (a instanceof Uint16Array)
            for (; s < i; ) (r[l] = t[a[s++]]), (l += 4);
          else if (o < 0) for (; s < i; ) (r[l] = t[a[s++] + -o]), (l += 4);
          else for (; s < i; ) (r[l] = t[a[s++]]), (l += 4);
          e.stats.lastStoredPixelDataToCanvasImageDataTime = Le() - n;
        },
        Oe = function (e, t, r) {
          var n = Le(),
            a = e.getPixelData();
          e.stats.lastGetPixelDataTime = Le() - n;
          var i,
            o = a.length,
            l = e.minPixelValue,
            s = 0,
            u = 0;
          if (((n = Le()), a instanceof Int16Array))
            if (l < 0)
              for (; u < o; )
                (i = t[a[u++] + -l]),
                  (r[s++] = i),
                  (r[s++] = i),
                  (r[s++] = i),
                  (r[s++] = 255);
            else
              for (; u < o; )
                (i = t[a[u++]]),
                  (r[s++] = i),
                  (r[s++] = i),
                  (r[s++] = i),
                  (r[s++] = 255);
          else if (a instanceof Uint16Array)
            for (; u < o; )
              (i = t[a[u++]]),
                (r[s++] = i),
                (r[s++] = i),
                (r[s++] = i),
                (r[s++] = 255);
          else if (l < 0)
            for (; u < o; )
              (i = t[a[u++] + -l]),
                (r[s++] = i),
                (r[s++] = i),
                (r[s++] = i),
                (r[s++] = 255);
          else
            for (; u < o; )
              (i = t[a[u++]]),
                (r[s++] = i),
                (r[s++] = i),
                (r[s++] = i),
                (r[s++] = 255);
          e.stats.lastStoredPixelDataToCanvasImageDataTime = Le() - n;
        },
        Ve = function (e, t, r) {
          if (void 0 === e)
            throw new Error(
              'setToPixelCoordinateSystem: parameter enabledElement must not be undefined'
            );
          if (void 0 === t)
            throw new Error(
              'setToPixelCoordinateSystem: parameter context must not be undefined'
            );
          var n = Ee(e, r);
          t.setTransform(n.m[0], n.m[1], n.m[2], n.m[3], n.m[4], n.m[5]);
        },
        Ue = {};
      var Ne = {
        storedPixelDataToImageData: function (e) {
          for (
            var t = e.getPixelData(),
              r = new Uint8Array(e.width * e.height * 3),
              n = 0,
              a = 0;
            a < t.length;
            a++
          ) {
            var i = Math.abs(t[a]);
            (r[n++] = 255 & i), (r[n++] = i >> 8), (r[n++] = t[a] < 0 ? 0 : 1);
          }
          return r;
        },
      };
      Ue.frag =
        'precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0 + color.g*65536.0;if (color.b == 0.0)intensity = -intensity;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}';
      var Be = {};
      var ke = {
        storedPixelDataToImageData: function (e) {
          for (
            var t = e.getPixelData(),
              r = new Uint8Array(e.width * e.height * 2),
              n = 0,
              a = 0;
            a < t.length;
            a++
          )
            (r[n++] = t[a]), (r[n++] = t[a] < 0 ? 0 : 1);
          return r;
        },
      };
      Be.frag =
        'precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.;if (color.a == 0.0)intensity = -intensity;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}';
      var Fe = {};
      var Ge = {
        storedPixelDataToImageData: function (e) {
          var t = e.minPixelValue,
            r = 0,
            n = 0,
            a = e.width * e.height * 4,
            i = e.width * e.height * 3,
            o = e.getPixelData(),
            l = new Uint8Array(i);
          if (t < 0)
            for (; n < a; )
              (l[r++] = o[n++] + -t),
                (l[r++] = o[n++] + -t),
                (l[r++] = o[n++] + -t),
                (n += 1);
          else
            for (; n < a; )
              (l[r++] = o[n++]), (l[r++] = o[n++]), (l[r++] = o[n++]), (n += 1);
          return l;
        },
      };
      Fe.frag =
        'precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform float minPixelValue;uniform int invert;varying vec2 v_texCoord;void main() {vec3 color = texture2D(u_image, v_texCoord).xyz;color = color * 256.0 * slope + intercept;float center0 = wc - 0.5 - minPixelValue;float width0 = max(ww, 1.0);color = (color - center0) / width0 + 0.5;gl_FragColor = vec4(color, 1);if (invert == 1)gl_FragColor.rgb = 1. - gl_FragColor.rgb;}';
      var ze = {};
      var qe = {
        storedPixelDataToImageData: function (e) {
          for (
            var t = e.getPixelData(),
              r = new Uint8Array(e.width * e.height * 2),
              n = 0,
              a = 0;
            a < t.length;
            a++
          ) {
            var i = t[a];
            (r[n++] = 255 & i), (r[n++] = i >> 8);
          }
          return r;
        },
      };
      ze.frag =
        'precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0 + color.a*65536.0;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}';
      var We = {};
      var je = {
        storedPixelDataToImageData: function (e) {
          return e.getPixelData();
        },
      };
      We.frag =
        'precision mediump float;uniform sampler2D u_image;uniform float ww;uniform float wc;uniform float slope;uniform float intercept;uniform int invert;varying vec2 v_texCoord;void main() {vec4 color = texture2D(u_image, v_texCoord);float intensity = color.r*256.0;intensity = intensity * slope + intercept;float center0 = wc - 0.5;float width0 = max(ww, 1.0);intensity = (intensity - center0) / width0 + 0.5;intensity = clamp(intensity, 0.0, 1.0);gl_FragColor = vec4(intensity, intensity, intensity, 1.0);if (invert == 1)gl_FragColor.rgb = 1.0 - gl_FragColor.rgb;}';
      var He = { int16: Ue, int8: Be, rgb: Fe, uint16: ze, uint8: We },
        Xe = { int16: Ne, int8: ke, rgb: Ge, uint16: qe, uint8: je },
        Ye =
          'attribute vec2 a_position;attribute vec2 a_texCoord;uniform vec2 u_resolution;varying vec2 v_texCoord;void main() {vec2 zeroToOne = a_position / u_resolution;vec2 zeroToTwo = zeroToOne * 2.0;vec2 clipSpace = zeroToTwo - 1.0;gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);v_texCoord = a_texCoord;}',
        Ke = {},
        Ze = [],
        $e = 268435456,
        Je = 0;
      function Qe() {
        if (!(Je <= $e)) {
          for (
            Ze.sort(function (e, t) {
              return e.timeStamp > t.timeStamp
                ? -1
                : e.timeStamp < t.timeStamp
                ? 1
                : 0;
            });
            $e < Je;

          ) {
            var e = Ze[Ze.length - 1];
            (Je -= e.sizeInBytes),
              delete Ke[e.imageId],
              Ze.pop(),
              R(o, T.WEBGL_TEXTURE_REMOVED, { imageId: e.imageId });
          }
          var t = {
            maximumSizeInBytes: $e,
            cacheSizeInBytes: Je,
            numberOfImagesCached: Ze.length,
          };
          R(o, T.WEBGL_TEXTURE_CACHE_FULL, t);
        }
      }
      var et = {
        purgeCache: function () {
          for (; 0 < Ze.length; ) {
            var e = Ze.pop();
            delete Ke[e.imageId];
          }
          Je = 0;
        },
        getImageTexture: function (e) {
          if (void 0 === e)
            throw new Error('getImageTexture: imageId must not be undefined');
          var t = Ke[e];
          if (void 0 !== t) return (t.timeStamp = new Date()), t.imageTexture;
        },
        putImageTexture: function (e, t) {
          var r = e.imageId;
          if (void 0 === e)
            throw new Error('putImageTexture: image must not be undefined');
          if (void 0 === r)
            throw new Error('putImageTexture: imageId must not be undefined');
          if (void 0 === t)
            throw new Error(
              'putImageTexture: imageTexture must not be undefined'
            );
          if (!0 === Object.prototype.hasOwnProperty.call(Ke, r))
            throw new Error('putImageTexture: imageId already in cache');
          var n = {
            imageId: r,
            imageTexture: t,
            timeStamp: new Date(),
            sizeInBytes: t.sizeInBytes,
          };
          if (((Ke[r] = n), Ze.push(n), void 0 === t.sizeInBytes))
            throw new Error(
              'putImageTexture: imageTexture.sizeInBytes must not be undefined'
            );
          if (void 0 === t.sizeInBytes.toFixed)
            throw new Error(
              'putImageTexture: imageTexture.sizeInBytes is not a number'
            );
          (Je += n.sizeInBytes), Qe();
        },
        removeImageTexture: function (e) {
          if (void 0 === e)
            throw new Error(
              'removeImageTexture: imageId must not be undefined'
            );
          var t = Ke[e];
          if (void 0 === t)
            throw new Error(
              'removeImageTexture: imageId must not be undefined'
            );
          return (
            Ze.splice(Ze.indexOf(t), 1),
            (Je -= t.sizeInBytes),
            delete Ke[e],
            t.imageTexture
          );
        },
        setMaximumSizeBytes: function (e) {
          if (void 0 === e)
            throw new Error(
              'setMaximumSizeBytes: parameter numBytes must not be undefined'
            );
          if (void 0 === e.toFixed)
            throw new Error(
              'setMaximumSizeBytes: parameter numBytes must be a number'
            );
          ($e = e), Qe();
        },
      };
      function tt(e, t, r) {
        var n = e.createShader(r);
        if (
          (e.shaderSource(n, t),
          e.compileShader(n),
          !e.getShaderParameter(n, e.COMPILE_STATUS) && !e.isContextLost())
        ) {
          var a = e.getShaderInfoLog(n);
          console.error('Could not compile shader:\n'.concat(a));
        }
        return n;
      }
      var rt,
        nt,
        at,
        it = function (e, t, r) {
          return (function (e, t, r) {
            var n = e.createProgram();
            if (
              (e.attachShader(n, t),
              e.attachShader(n, r),
              e.linkProgram(n),
              !e.getProgramParameter(n, e.LINK_STATUS) && !e.isContextLost())
            ) {
              var a = e.getProgramInfoLog(n);
              console.error('WebGL program filed to link:\n'.concat(a));
            }
            return n;
          })(e, tt(e, t, e.VERTEX_SHADER), tt(e, r, e.FRAGMENT_SHADER));
        },
        ot = document.createElement('canvas'),
        lt = !1;
      function st() {
        !0 !== lt &&
          (function (e) {
            rt = null;
            try {
              var t = { desynchronized: !0, preserveDrawingBuffer: !0 };
              (rt =
                e.getContext('webgl', t) ||
                e.getContext('experimental-webgl', t)),
                e.removeEventListener('webglcontextlost', ut, !1),
                e.addEventListener('webglcontextlost', ut, !1),
                e.removeEventListener('webglcontextrestored', dt, !1),
                e.addEventListener('webglcontextrestored', dt, !1);
            } catch (e) {
              throw new Error('Error creating WebGL context');
            }
            rt ||
              (console.error(
                'Unable to initialize WebGL. Your browser may not support it.'
              ),
              (rt = null));
            return rt;
          })(ot) &&
          ((at = rt.createBuffer()),
          rt.bindBuffer(rt.ARRAY_BUFFER, at),
          rt.bufferData(
            rt.ARRAY_BUFFER,
            new Float32Array([1, 1, 0, 1, 1, 0, 0, 0]),
            rt.STATIC_DRAW
          ),
          (nt = rt.createBuffer()),
          rt.bindBuffer(rt.ARRAY_BUFFER, nt),
          rt.bufferData(
            rt.ARRAY_BUFFER,
            new Float32Array([1, 1, 0, 1, 1, 0, 0, 0]),
            rt.STATIC_DRAW
          ),
          (function () {
            for (var e in He) {
              var t = He[e];
              (t.attributes = {}),
                (t.uniforms = {}),
                (t.vert = Ye),
                (t.program = it(rt, t.vert, t.frag)),
                (t.attributes.texCoordLocation = rt.getAttribLocation(
                  t.program,
                  'a_texCoord'
                )),
                rt.enableVertexAttribArray(t.attributes.texCoordLocation),
                (t.attributes.positionLocation = rt.getAttribLocation(
                  t.program,
                  'a_position'
                )),
                rt.enableVertexAttribArray(t.attributes.positionLocation),
                (t.uniforms.resolutionLocation = rt.getUniformLocation(
                  t.program,
                  'u_resolution'
                ));
            }
          })(),
          (lt = !0));
      }
      function ut(e) {
        e.preventDefault(), console.warn('WebGL Context Lost!');
      }
      function dt(e) {
        e.preventDefault(), (lt = !1), et.purgeCache(), st();
      }
      function mt(e) {
        if (e.color) return 'rgb';
        var t = e.getPixelData();
        return t instanceof Int16Array
          ? 'int16'
          : t instanceof Uint16Array
          ? 'uint16'
          : t instanceof Int8Array
          ? 'int8'
          : 'uint8';
      }
      function ct(e) {
        var t = et.getImageTexture(e.imageId);
        return (
          t ||
            ((t = (function (e) {
              var t = {
                  uint8: rt.LUMINANCE,
                  int8: rt.LUMINANCE_ALPHA,
                  uint16: rt.LUMINANCE_ALPHA,
                  int16: rt.RGB,
                  rgb: rt.RGB,
                },
                r = mt(e),
                n = t[r],
                a = rt.createTexture();
              rt.bindTexture(rt.TEXTURE_2D, a),
                rt.texParameteri(
                  rt.TEXTURE_2D,
                  rt.TEXTURE_MIN_FILTER,
                  rt.NEAREST
                ),
                rt.texParameteri(
                  rt.TEXTURE_2D,
                  rt.TEXTURE_MAG_FILTER,
                  rt.NEAREST
                ),
                rt.texParameteri(
                  rt.TEXTURE_2D,
                  rt.TEXTURE_WRAP_S,
                  rt.CLAMP_TO_EDGE
                ),
                rt.texParameteri(
                  rt.TEXTURE_2D,
                  rt.TEXTURE_WRAP_T,
                  rt.CLAMP_TO_EDGE
                ),
                rt.pixelStorei(rt.UNPACK_ALIGNMENT, 1);
              var i = Xe[r].storedPixelDataToImageData(e, e.width, e.height);
              return (
                rt.texImage2D(
                  rt.TEXTURE_2D,
                  0,
                  n,
                  e.width,
                  e.height,
                  0,
                  n,
                  rt.UNSIGNED_BYTE,
                  i
                ),
                {
                  texture: a,
                  sizeInBytes:
                    e.width *
                    e.height *
                    { int8: 1, uint16: 2, int16: 3, rgb: 3 }[r],
                }
              );
            })(e)),
            et.putImageTexture(e, t)),
          t.texture
        );
      }
      function ft(e, t, r, n, a) {
        for (var i in (rt.clearColor(1, 0, 0, 1),
        rt.viewport(0, 0, n, a),
        rt.clear(rt.COLOR_BUFFER_BIT | rt.DEPTH_BUFFER_BIT),
        rt.useProgram(e.program),
        rt.bindBuffer(rt.ARRAY_BUFFER, nt),
        rt.vertexAttribPointer(
          e.attributes.texCoordLocation,
          2,
          rt.FLOAT,
          !1,
          0,
          0
        ),
        rt.bindBuffer(rt.ARRAY_BUFFER, at),
        rt.vertexAttribPointer(
          e.attributes.positionLocation,
          2,
          rt.FLOAT,
          !1,
          0,
          0
        ),
        t)) {
          var o = rt.getUniformLocation(e.program, i);
          if (o) {
            var l = t[i],
              s = l.type,
              u = l.value;
            'i' === s
              ? rt.uniform1i(o, u)
              : 'f' === s
              ? rt.uniform1f(o, u)
              : '2f' === s && rt.uniform2f(o, u[0], u[1]);
          }
        }
        var d, m, c;
        (m = n),
          (c = a),
          (d = rt).bufferData(
            d.ARRAY_BUFFER,
            new Float32Array([m, c, 0, c, m, 0, 0, 0]),
            d.STATIC_DRAW
          ),
          rt.activeTexture(rt.TEXTURE0),
          rt.bindTexture(rt.TEXTURE_2D, r),
          rt.drawArrays(rt.TRIANGLE_STRIP, 0, 4);
      }
      var gt = {
        createProgramFromString: it,
        renderer: {
          render: function (e) {
            var t = e.image;
            (ot.width = t.width), (ot.height = t.height);
            var r,
              n = e.viewport,
              a = ((r = mt(t)), He.hasOwnProperty(r) ? He[r] : He.rgb),
              i = ct(t);
            return (
              ft(
                a,
                {
                  u_resolution: { type: '2f', value: [t.width, t.height] },
                  wc: { type: 'f', value: n.voi.windowCenter },
                  ww: { type: 'f', value: n.voi.windowWidth },
                  slope: { type: 'f', value: t.slope },
                  intercept: { type: 'f', value: t.intercept },
                  minPixelValue: { type: 'f', value: t.minPixelValue },
                  invert: { type: 'i', value: n.invert ? 1 : 0 },
                },
                i,
                t.width,
                t.height
              ),
              ot
            );
          },
          initRenderer: st,
          getRenderCanvas: function () {
            return ot;
          },
          isWebGLAvailable: function () {
            var e = { failIfMajorPerformanceCaveat: !0 };
            try {
              var t = document.createElement('canvas');
              return (
                Boolean(window.WebGLRenderingContext) &&
                (t.getContext('webgl', e) ||
                  t.getContext('experimental-webgl', e))
              );
            } catch (e) {
              return !1;
            }
          },
        },
        textureCache: et,
      };
      Object.defineProperty(gt, 'isWebGLInitialized', {
        enumerable: !0,
        configurable: !1,
        get: function () {
          return lt;
        },
      });
      var vt = gt;
      function ht(e, t) {
        if (
          !(
            ((r = e).voiLUT && r.voiLUT.lut && 0 < r.voiLUT.lut.length) ||
            (void 0 !== r.voi.windowWidth && void 0 !== r.voi.windowCenter)
          )
        ) {
          var r,
            n = t.maxPixelValue * t.slope + t.intercept,
            a = t.minPixelValue * t.slope + t.intercept,
            i = n - a,
            o = (n + a) / 2;
          void 0 === e.voi
            ? (e.voi = { windowWidth: i, windowCenter: o })
            : ((e.voi.windowWidth = i), (e.voi.windowCenter = o));
        }
      }
      var pt = function (e, t) {
        return (!e && !t) || (!(!e || !t) && e.id === t.id);
      };
      var wt = function (e, t, r) {
        return r
          ? ((a = (n = r).lut[0]),
            (i = n.lut[n.lut.length - 1]),
            (o = n.firstValueMapped + n.lut.length),
            function (e) {
              return e < n.firstValueMapped ? a : o <= e ? i : n.lut[e];
            })
          : ((l = e),
            (s = t),
            function (e) {
              return e * l + s;
            });
        var n, a, i, o, l, s;
      };
      function bt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return yt(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return yt(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === r && e.constructor && (r = e.constructor.name);
            if ('Map' === r || 'Set' === r) return Array.from(e);
            if (
              'Arguments' === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return yt(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function yt(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var xt = function (e, t, r, n) {
          return r
            ? ((a = r),
              (i = n),
              (o = Math.max.apply(Math, bt(a.lut)).toString(2).length - 8),
              (l = a.lut[0] >> o),
              (s = a.lut[a.lut.length - 1] >> o),
              (u = a.firstValueMapped + a.lut.length - 1),
              function (e) {
                return e < a.firstValueMapped
                  ? l
                  : u <= e
                  ? s
                  : i
                  ? a.lut[Math.round(e) - a.firstValueMapped] >> o
                  : a.lut[e - a.firstValueMapped] >> o;
              })
            : ((d = e),
              (m = t),
              function (e) {
                return 255 * ((e - m) / d + 0.5);
              });
          var a, i, o, l, s, u, d, m;
        },
        Et = function (e, t, r, n, a, i) {
          var o = e.maxPixelValue,
            l = e.minPixelValue,
            s = Math.min(l, 0);
          if (void 0 === e.cachedLut) {
            var u = o - s + 1;
            (e.cachedLut = {}),
              (e.cachedLut.lutArray = new Uint8ClampedArray(u));
          }
          var d = e.cachedLut.lutArray,
            m = Boolean(e.slope % 1) || Boolean(e.intercept % 1),
            c = wt(e.slope, e.intercept, a),
            f = xt(t, r, i, m);
          if (!0 === n) for (var g = l; g <= o; g++) d[g + -s] = 255 - f(c(g));
          else for (var v = l; v <= o; v++) d[v + -s] = f(c(v));
          return d;
        },
        It = function (e, t, r) {
          return (
            (void 0 !== e.cachedLut &&
              e.cachedLut.windowCenter === t.voi.windowCenter &&
              e.cachedLut.windowWidth === t.voi.windowWidth &&
              pt(e.cachedLut.modalityLUT, t.modalityLUT) &&
              pt(e.cachedLut.voiLUT, t.voiLUT) &&
              e.cachedLut.invert === t.invert &&
              !0 !== r) ||
              (ht(t, e),
              Et(
                e,
                t.voi.windowWidth,
                t.voi.windowCenter,
                t.invert,
                t.modalityLUT,
                t.voiLUT
              ),
              (e.cachedLut.windowWidth = t.voi.windowWidth),
              (e.cachedLut.windowCenter = t.voi.windowCenter),
              (e.cachedLut.invert = t.invert),
              (e.cachedLut.voiLUT = t.voiLUT),
              (e.cachedLut.modalityLUT = t.modalityLUT)),
            e.cachedLut.lutArray
          );
        },
        Tt = function (e, t) {
          var r = e.renderingTools.lastRenderedImageId,
            n = e.renderingTools.lastRenderedViewport;
          return (
            t.imageId !== r ||
            !n ||
            n.windowCenter !== e.viewport.voi.windowCenter ||
            n.windowWidth !== e.viewport.voi.windowWidth ||
            n.invert !== e.viewport.invert ||
            n.rotation !== e.viewport.rotation ||
            n.hflip !== e.viewport.hflip ||
            n.vflip !== e.viewport.vflip ||
            n.modalityLUT !== e.viewport.modalityLUT ||
            n.voiLUT !== e.viewport.voiLUT ||
            n.colormap !== e.viewport.colormap
          );
        },
        Ct = function (e, t) {
          var r = e.renderingTools.renderCanvas;
          (r.width = t.width), (r.height = t.height);
          var n = r.getContext('2d', { desynchronized: !0 });
          (n.fillStyle = 'white'), n.fillRect(0, 0, r.width, r.height);
          var a = n.getImageData(0, 0, t.width, t.height);
          (e.renderingTools.renderCanvasContext = n),
            (e.renderingTools.renderCanvasData = a);
        },
        Lt = function (e) {
          var t = e.image.imageId,
            r = e.viewport,
            n = e.image.color;
          return (
            (e.renderingTools.lastRenderedImageId = t),
            (e.renderingTools.lastRenderedIsColor = n),
            (e.renderingTools.lastRenderedViewport = {
              windowCenter: r.voi.windowCenter,
              windowWidth: r.voi.windowWidth,
              invert: r.invert,
              rotation: r.rotation,
              hflip: r.hflip,
              vflip: r.vflip,
              modalityLUT: r.modalityLUT,
              voiLUT: r.voiLUT,
              colormap: r.colormap,
            }),
            e.renderingTools
          );
        };
      function Pt(e, t, r) {
        var n =
            !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
          a = !0 === e.renderingTools.lastRenderedIsColor;
        (e.renderingTools.renderCanvas && !a) ||
          ((e.renderingTools.renderCanvas = document.createElement('canvas')),
          Ct(e, t));
        var i = e.renderingTools.renderCanvas;
        if (!1 === Tt(e, t) && !0 !== r) return i;
        (i.width === t.width && i.height === t.height) || Ct(e, t);
        var o = Le(),
          l = It(t, e.viewport, r);
        (t.stats = t.stats || {}), (t.stats.lastLutGenerateTime = Le() - o);
        var s = e.renderingTools.renderCanvasData,
          u = e.renderingTools.renderCanvasContext;
        return (
          n ? Me(t, l, s.data) : Oe(t, l, s.data),
          (o = Le()),
          u.putImageData(s, 0, 0),
          (t.stats.lastPutImageDataTime = Le() - o),
          i
        );
      }
      function Rt(e, t) {
        if (void 0 === e)
          throw new Error(
            'drawImage: enabledElement parameter must not be undefined'
          );
        var r = e.image;
        if (void 0 === r)
          throw new Error(
            'drawImage: image must be loaded before it can be drawn'
          );
        var n,
          a = e.canvas.getContext('2d', { desynchronized: !0 });
        a.setTransform(1, 0, 0, 1, 0, 0),
          (a.fillStyle = _e(e)),
          a.fillRect(0, 0, e.canvas.width, e.canvas.height),
          (a.imageSmoothingEnabled = !e.viewport.pixelReplication),
          (a.mozImageSmoothingEnabled = a.imageSmoothingEnabled),
          Ve(e, a),
          (n =
            e.options &&
            e.options.renderer &&
            'webgl' === e.options.renderer.toLowerCase()
              ? vt.renderer.render(e)
              : Pt(e, r, t));
        var i = v(e.image, e.viewport),
          o = i.tlhc.x - 1,
          l = i.tlhc.y - 1,
          s = i.brhc.x - o,
          u = i.brhc.y - l;
        a.drawImage(n, o, l, s, u, o, l, s, u), (e.renderingTools = Lt(e));
      }
      var Dt = function (e, t, r, n, a) {
          var i = e.maxPixelValue,
            o = e.minPixelValue,
            l = Math.min(o, 0);
          if (void 0 === e.cachedLut) {
            var s = i - l + 1;
            (e.cachedLut = {}),
              (e.cachedLut.lutArray = new Uint8ClampedArray(s));
          }
          var u = e.cachedLut.lutArray,
            d = xt(t, r, a);
          if (!0 === n) for (var m = o; m <= i; m++) u[m + -l] = 255 - d(m);
          else for (var c = o; c <= i; c++) u[c + -l] = d(c);
          return u;
        },
        St = function (e, t, r) {
          var n = Le(),
            a = e.getPixelData();
          e.stats.lastGetPixelDataTime = Le() - n;
          var i = e.minPixelValue,
            o = 0,
            l = 0,
            s = a.length;
          if (((n = Le()), i < 0))
            for (; l < s; )
              (r[o++] = t[a[l++] + -i]),
                (r[o++] = t[a[l++] + -i]),
                (r[o] = t[a[l] + -i]),
                (l += 2),
                (o += 2);
          else
            for (; l < s; )
              (r[o++] = t[a[l++]]),
                (r[o++] = t[a[l++]]),
                (r[o] = t[a[l]]),
                (l += 2),
                (o += 2);
          e.stats.lastStoredPixelDataToCanvasImageDataTime = Le() - n;
        },
        At = function (e, t, r) {
          var n = Le(),
            a = e.getPixelData();
          e.stats.lastGetPixelDataTime = Le() - n;
          var i = e.minPixelValue,
            o = 0,
            l = 0,
            s = a.length;
          if (((n = Le()), i < 0))
            for (; l < s; )
              (r[o++] = t[a[l++] + -i]),
                (r[o++] = t[a[l++] + -i]),
                (r[o++] = t[a[l++] + -i]),
                (r[o++] = a[l++]);
          else
            for (; l < s; )
              (r[o++] = t[a[l++]]),
                (r[o++] = t[a[l++]]),
                (r[o++] = t[a[l++]]),
                (r[o++] = a[l++]);
          e.stats.lastStoredPixelDataToCanvasImageDataTime = Le() - n;
        };
      function _t(e, t, r) {
        var n = !0 === e.renderingTools.lastRenderedIsColor;
        (e.renderingTools.renderCanvas && n) ||
          (e.renderingTools.renderCanvas = document.createElement('canvas'));
        var a = e.renderingTools.renderCanvas;
        if (
          255 === e.viewport.voi.windowWidth &&
          128 === e.viewport.voi.windowCenter &&
          !1 === e.viewport.invert &&
          t.getCanvas &&
          t.getCanvas()
        )
          return t.getCanvas();
        if (!1 === Tt(e, t) && !0 !== r) return a;
        (a.width === t.width && a.height === t.height) || Ct(e, t);
        var i,
          o,
          l = Le(),
          s =
            ((i = t),
            (o = e.viewport),
            (void 0 !== i.cachedLut &&
              i.cachedLut.windowCenter === o.voi.windowCenter &&
              i.cachedLut.windowWidth === o.voi.windowWidth &&
              i.cachedLut.invert === o.invert) ||
              (Dt(i, o.voi.windowWidth, o.voi.windowCenter, o.invert),
              (i.cachedLut.windowWidth = o.voi.windowWidth),
              (i.cachedLut.windowCenter = o.voi.windowCenter),
              (i.cachedLut.invert = o.invert)),
            i.cachedLut.lutArray);
        (t.stats = t.stats || {}), (t.stats.lastLutGenerateTime = Le() - l);
        var u = e.renderingTools.renderCanvasData,
          d = e.renderingTools.renderCanvasContext;
        return (
          t.rgba ? At(t, s, u.data) : St(t, s, u.data),
          (l = Le()),
          d.putImageData(u, 0, 0),
          (t.stats.lastPutImageDataTime = Le() - l),
          a
        );
      }
      function Mt(e, t) {
        if (void 0 === e)
          throw new Error(
            'renderColorImage: enabledElement parameter must not be undefined'
          );
        var r = e.image;
        if (void 0 === r)
          throw new Error(
            'renderColorImage: image must be loaded before it can be drawn'
          );
        var n,
          a = e.canvas.getContext('2d', { desynchronized: !0 });
        a.setTransform(1, 0, 0, 1, 0, 0),
          (a.fillStyle = _e(e)),
          a.fillRect(0, 0, e.canvas.width, e.canvas.height),
          (a.imageSmoothingEnabled = !e.viewport.pixelReplication),
          (a.mozImageSmoothingEnabled = a.imageSmoothingEnabled),
          Ve(e, a),
          (n =
            e.options &&
            e.options.renderer &&
            'webgl' === e.options.renderer.toLowerCase()
              ? vt.renderer.render(e)
              : _t(e, r, t));
        var i = v(e.image, e.viewport),
          o = i.tlhc.x - 1,
          l = i.tlhc.y - 1,
          s = i.brhc.x - o,
          u = i.brhc.y - l;
        a.drawImage(n, o, l, s, u, o, l, s, u), (e.renderingTools = Lt(e));
      }
      var Ot = function (e, t, r, n) {
        var a = Le(),
          i = e.getPixelData();
        e.stats.lastGetPixelDataTime = Le() - a;
        var o,
          l,
          s = i.length,
          u = e.minPixelValue,
          d = 0,
          m = 0;
        if (((a = Le()), (l = r instanceof G.LookupTable ? r.Table : r), u < 0))
          for (; m < s; )
            (o = l[t[i[m++] + -u]]),
              (n[d++] = o[0]),
              (n[d++] = o[1]),
              (n[d++] = o[2]),
              (n[d++] = o[3]);
        else
          for (; m < s; )
            (o = l[t[i[m++]]]),
              (n[d++] = o[0]),
              (n[d++] = o[1]),
              (n[d++] = o[2]),
              (n[d++] = o[3]);
        e.stats.lastStoredPixelDataToCanvasImageDataTime = Le() - a;
      };
      function Vt(e, t, r) {
        e.renderingTools.renderCanvas ||
          (e.renderingTools.renderCanvas = document.createElement('canvas'));
        var n = e.renderingTools.renderCanvas,
          a = e.viewport.colormap || e.options.colormap;
        if (
          (e.options &&
            e.options.colormap &&
            console.warn(
              'enabledElement.options.colormap is deprecated. Use enabledElement.viewport.colormap instead'
            ),
          a && 'string' == typeof a && (a = G.getColormap(a)),
          !a)
        )
          throw new Error('renderPseudoColorImage: colormap not found.');
        var i = a.getId();
        if (!1 === Tt(e, t) && !0 !== r && e.renderingTools.colormapId === i)
          return n;
        (n.width === t.width && n.height === t.height) || Ct(e, t);
        var o = Le();
        (e.renderingTools.colorLut &&
          !r &&
          e.renderingTools.colormapId === i) ||
          (a.setNumberOfColors(256),
          (e.renderingTools.colorLut = a.createLookupTable()),
          (e.renderingTools.colormapId = i));
        var l = It(t, e.viewport, r);
        (t.stats = t.stats || {}), (t.stats.lastLutGenerateTime = Le() - o);
        var s = e.renderingTools.colorLut,
          u = e.renderingTools.renderCanvasData,
          d = e.renderingTools.renderCanvasContext;
        return (
          Ot(t, l, s, u.data),
          (o = Le()),
          d.putImageData(u, 0, 0),
          (t.stats.lastPutImageDataTime = Le() - o),
          n
        );
      }
      function Ut(e, t) {
        if (void 0 === e)
          throw new Error(
            'drawImage: enabledElement parameter must not be undefined'
          );
        var r = e.image;
        if (void 0 === r)
          throw new Error(
            'drawImage: image must be loaded before it can be drawn'
          );
        var n = e.canvas.getContext('2d', { desynchronized: !0 });
        n.setTransform(1, 0, 0, 1, 0, 0),
          (n.fillStyle = _e(e)),
          n.fillRect(0, 0, e.canvas.width, e.canvas.height),
          (n.imageSmoothingEnabled = !e.viewport.pixelReplication),
          (n.mozImageSmoothingEnabled = n.imageSmoothingEnabled),
          Ve(e, n);
        var a = Vt(e, r, t),
          i = v(e.image, e.viewport),
          o = i.tlhc.x - 1,
          l = i.tlhc.y - 1,
          s = i.brhc.x - o,
          u = i.brhc.y - l;
        n.drawImage(a, o, l, s, u, o, l, s, u), (e.renderingTools = Lt(e));
      }
      var Nt = function (e, t, r) {
        var n = Le(),
          a = e.getPixelData();
        e.stats.lastGetPixelDataTime = Le() - n;
        var i,
          o,
          l = a.length,
          s = e.minPixelValue,
          u = 0,
          d = 0;
        if (((n = Le()), (o = t instanceof G.LookupTable ? t.Table : t), s < 0))
          for (; d < l; )
            (i = o[a[d++] + -s]),
              (r[u++] = i[0]),
              (r[u++] = i[1]),
              (r[u++] = i[2]),
              (r[u++] = i[3]);
        else
          for (; d < l; )
            (i = o[a[d++]]),
              (r[u++] = i[0]),
              (r[u++] = i[1]),
              (r[u++] = i[2]),
              (r[u++] = i[3]);
        e.stats.lastStoredPixelDataToCanvasImageDataTime = Le() - n;
      };
      function Bt(e, t, r) {
        e.renderingTools.renderCanvas ||
          (e.renderingTools.renderCanvas = document.createElement('canvas'));
        var n = e.renderingTools.renderCanvas,
          a = e.viewport.colormap || e.options.colormap;
        if (
          (e.options.colormap &&
            console.warn(
              'enabledElement.options.colormap is deprecated. Use enabledElement.viewport.colormap instead'
            ),
          a && 'string' == typeof a && (a = G.getColormap(a)),
          !a)
        )
          throw new Error('renderLabelMapImage: colormap not found.');
        var i = a.getId();
        if (!1 === Tt(e, t) && !0 !== r && e.renderingTools.colormapId === i)
          return n;
        (n.width === t.width && n.height === t.height) || Ct(e, t);
        var o = Le();
        (e.renderingTools.colorLut &&
          !r &&
          e.renderingTools.colormapId === i) ||
          ((e.renderingTools.colorLut = a.createLookupTable()),
          (e.renderingTools.colormapId = i)),
          (t.stats = t.stats || {}),
          (t.stats.lastLutGenerateTime = Le() - o);
        var l = e.renderingTools.colorLut,
          s = e.renderingTools.renderCanvasData,
          u = e.renderingTools.renderCanvasContext;
        return (
          Nt(t, l, s.data),
          (o = Le()),
          u.putImageData(s, 0, 0),
          (t.stats.lastPutImageDataTime = Le() - o),
          n
        );
      }
      function kt(e, t) {
        if (void 0 === e)
          throw new Error(
            'renderLabelMapImage: enabledElement parameter must not be undefined'
          );
        var r = e.image;
        if (void 0 === r)
          throw new Error(
            'renderLabelMapImage: image must be loaded before it can be drawn'
          );
        var n = e.canvas.getContext('2d', { desynchronized: !0 });
        n.setTransform(1, 0, 0, 1, 0, 0),
          (n.fillStyle = _e(e)),
          n.fillRect(0, 0, e.canvas.width, e.canvas.height),
          (n.imageSmoothingEnabled = !e.viewport.pixelReplication),
          (n.mozImageSmoothingEnabled = n.imageSmoothingEnabled),
          Ve(e, n);
        var a = Bt(e, r, t),
          i = v(e.image, e.viewport),
          o = i.tlhc.x - 1,
          l = i.tlhc.y - 1,
          s = i.brhc.x - o,
          u = i.brhc.y - l;
        n.drawImage(a, o, l, s, u, o, l, s, u), (e.renderingTools = Lt(e));
      }
      function Ft(e) {
        var t = e.syncProps || {};
        (t.originalScale = e.viewport.scale), (e.syncProps = t);
      }
      function Gt(e, a) {
        e.forEach(function (e) {
          if (e !== a && e.viewport && a.viewport) {
            e.syncProps || Ft(e);
            var t,
              r,
              n =
                ((r = e),
                (t = a).syncProps || Ft(t),
                r.syncProps || Ft(r),
                r.syncProps.originalScale / t.syncProps.originalScale);
            (e.viewport.scale = a.viewport.scale * n),
              (e.viewport.rotation = a.viewport.rotation),
              (e.viewport.translation = {
                x: a.viewport.translation.x / n,
                y: a.viewport.translation.y / n,
              }),
              (e.viewport.hflip = a.viewport.hflip),
              (e.viewport.vflip = a.viewport.vflip);
          }
        });
      }
      function zt(d, e, m) {
        e.forEach(function (e, t) {
          if (e.image) {
            d.save(), (e.canvas = d.canvas), Ve(e, d);
            var r = e.viewport.colormap || e.options.colormap,
              n = e.viewport.labelmap,
              a = e.invalid || m;
            if (r && '' !== r && !0 === n)
              !(function (e, t) {
                if (void 0 === e)
                  throw new Error(
                    'addLabelMapLayer: layer parameter must not be undefined'
                  );
                var r = e.image;
                if (void 0 === r)
                  throw new Error(
                    'addLabelMapLayer: image must be loaded before it can be drawn'
                  );
                e.canvas = Bt(e, r, t);
                var n = e.canvas.getContext('2d', { desynchronized: !0 });
                (n.imageSmoothingEnabled = !e.viewport.pixelReplication),
                  (n.mozImageSmoothingEnabled = n.imageSmoothingEnabled),
                  (e.renderingTools = Lt(e));
              })(e, a);
            else if (r && '' !== r)
              !(function (e, t) {
                if (void 0 === e)
                  throw new Error(
                    'addPseudoColorLayer: layer parameter must not be undefined'
                  );
                var r = e.image;
                if (void 0 === r)
                  throw new Error(
                    'addPseudoColorLayer: image must be loaded before it can be drawn'
                  );
                e.canvas = Vt(e, r, t);
                var n = e.canvas.getContext('2d', { desynchronized: !0 });
                (n.imageSmoothingEnabled = !e.viewport.pixelReplication),
                  (n.mozImageSmoothingEnabled = n.imageSmoothingEnabled),
                  (e.renderingTools = Lt(e));
              })(e, a);
            else if (!0 === e.image.color)
              !(function (e, t) {
                if (void 0 === e)
                  throw new Error(
                    'addColorLayer: layer parameter must not be undefined'
                  );
                var r = e.image;
                if (void 0 === r)
                  throw new Error(
                    'addColorLayer: image must be loaded before it can be drawn'
                  );
                (r.rgba = !0), (e.canvas = _t(e, r, t));
                var n = e.canvas.getContext('2d', { desynchronized: !0 });
                (n.imageSmoothingEnabled = !e.viewport.pixelReplication),
                  (n.mozImageSmoothingEnabled = n.imageSmoothingEnabled),
                  (e.renderingTools = Lt(e));
              })(e, a);
            else {
              !(function (e, t) {
                var r =
                  2 < arguments.length &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                if (void 0 === e)
                  throw new Error(
                    'addGrayscaleLayer: layer parameter must not be undefined'
                  );
                var n = e.image;
                if (void 0 === n)
                  throw new Error(
                    'addGrayscaleLayer: image must be loaded before it can be drawn'
                  );
                e.canvas = Pt(e, n, t, r);
                var a = e.canvas.getContext('2d', { desynchronized: !0 });
                (a.imageSmoothingEnabled = !e.viewport.pixelReplication),
                  (a.mozImageSmoothingEnabled = a.imageSmoothingEnabled),
                  (e.renderingTools = Lt(e));
              })(e, a, 0 === t);
            }
            e.options && e.options.opacity
              ? (d.globalAlpha = e.options.opacity)
              : (d.globalAlpha = 1),
              e.options &&
                e.options.fillStyle &&
                (d.fillStyle = e.options.fillStyle),
              (d.imageSmoothingEnabled = !e.viewport.pixelReplication),
              (d.mozImageSmoothingEnabled = d.imageSmoothingEnabled);
            var i = v(e.image, e.viewport),
              o = i.tlhc.x - 1,
              l = i.tlhc.y - 1,
              s = i.brhc.x - o,
              u = i.brhc.y - l;
            d.drawImage(e.canvas, o, l, s, u, o, l, s, u),
              d.restore(),
              (e.invalid = !1);
          }
        });
      }
      var qt = function (e, t) {
        var r = e.image,
          n = e.element,
          a = e.layers || [];
        if (e.canvas && e.image) {
          var i = Le();
          if (
            ((r.stats = {
              lastGetPixelDataTime: -1,
              lastStoredPixelDataToCanvasImageDataTime: -1,
              lastPutImageDataTime: -1,
              lastRenderTime: -1,
              lastLutGenerateTime: -1,
            }),
            a && a.length)
          )
            !(function (e, t) {
              var r = e.element,
                n = E(r),
                a = A(r),
                i = I(r),
                o = !e.lastSyncViewportsState && e.syncViewports;
              (e.lastSyncViewportsState = e.syncViewports),
                o &&
                  n.forEach(function (e) {
                    e.viewport && Ft(e);
                  }),
                !0 === e.syncViewports && Gt(i, a);
              var l = e.canvas.getContext('2d', { desynchronized: !0 });
              l.setTransform(1, 0, 0, 1, 0, 0),
                (l.fillStyle = 'black'),
                l.fillRect(0, 0, e.canvas.width, e.canvas.height),
                zt(l, i, t);
            })(e, t);
          else if (r) {
            var o = r.render;
            o ||
              (o =
                e.viewport.colormap &&
                '' !== e.viewport.colormap &&
                !0 === e.image.labelmap
                  ? kt
                  : e.viewport.colormap && '' !== e.viewport.colormap
                  ? Ut
                  : r.color
                  ? Mt
                  : Rt),
              o(e, t);
          }
          var l = Le() - i,
            s = {
              viewport: e.viewport,
              element: n,
              image: r,
              enabledElement: e,
              canvasContext: e.canvas.getContext('2d', { desynchronized: !0 }),
              renderTimeInMs: l,
            };
          (r.stats.lastRenderTime = l),
            (e.invalid = !1),
            (e.needsRedraw = !1),
            R(n, T.IMAGE_RENDERED, s);
        }
      };
      var Wt = function (e) {
          return (
            window.requestAnimationFrame(e) ||
            window.webkitRequestAnimationFrame(e) ||
            window.mozRequestAnimationFrame(e) ||
            window.oRequestAnimationFrame(e) ||
            window.msRequestAnimationFrame(e) ||
            ((t = e), void window.setTimeout(t, 1e3 / 60))
          );
          var t;
        },
        jt = function (e) {
          return vt.renderer.isWebGLAvailable()
            ? (vt.renderer.initRenderer(),
              (e.renderer = 'webgl'),
              (e.desynchronized = !0),
              (e.preserveDrawingBuffer = !0))
            : (console.error(
                'WebGL not available, falling back to Canvas renderer'
              ),
              delete e.renderer,
              delete e.preserveDrawingBuffer,
              !1);
        },
        Ht = 'cornerstone-canvas';
      function Xt(e) {
        var t,
          r,
          n = 'canvas.'.concat(Ht);
        return (
          e.querySelector(n) ||
          ((t = e),
          ((r = document.createElement('canvas')).style.display = 'block'),
          r.classList.add(Ht),
          t.appendChild(r),
          r)
        );
      }
      var Yt = function (e, t) {
          if (void 0 === e)
            throw new Error('enable: parameter element cannot be undefined');
          t && t.renderer && 'webgl' === t.renderer.toLowerCase() && jt(t);
          var r,
            a = {
              element: e,
              canvas: Xt(e),
              image: void 0,
              invalid: !1,
              needsRedraw: !0,
              options: Object.assign({}, t),
              layers: [],
              data: {},
              renderingTools: {},
              uuid:
                ((r = new Date().getTime()),
                'undefined' != typeof performance &&
                  'function' == typeof performance.now &&
                  (r += performance.now()),
                'x.x.x.x.x.x.xxxx.xxx.x.x.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(
                  /[xy]/g,
                  function (e) {
                    var t = (r + 16 * Math.random()) % 16 | 0;
                    return (
                      (r = Math.floor(r / 16)),
                      ('x' === e ? t : (3 & t) | 8).toString(16)
                    );
                  }
                )),
            };
          i(a),
            R(o, T.ELEMENT_ENABLED, a),
            Ae(e, !0),
            (function e(t) {
              if (void 0 !== a.canvas) {
                var r,
                  n = { enabledElement: a, timestamp: t };
                R(a.element, T.PRE_RENDER, n),
                  a.needsRedraw &&
                    (void 0 !== (r = a).image || 0 < r.layers.length) &&
                    qt(a, a.invalid),
                  Wt(e);
              }
            })();
        },
        Kt = function (e, t) {
          var r = C(e);
          return g(r.canvas, t);
        },
        Zt = function (e) {
          return C(e).image;
        },
        $t = function (e, t, r, n, a) {
          if (void 0 === e)
            throw new Error(
              'getStoredPixels: parameter element must not be undefined'
            );
          (t = Math.round(t)), (r = Math.round(r));
          for (
            var i = C(e), o = [], l = 0, s = i.image.getPixelData(), u = 0;
            u < a;
            u++
          )
            for (var d = 0; d < n; d++) {
              var m = (u + r) * i.image.columns + (d + t);
              o[l++] = s[m];
            }
          return o;
        },
        Jt = function (e, t, r, n, a) {
          var i = $t(e, t, r, n, a),
            o = C(e),
            l = wt(o.image.slope, o.image.intercept, o.viewport.modalityLUT);
          return i.map(l);
        },
        Qt = function (e) {
          var t = C(e).viewport;
          if (void 0 !== t) return Object.assign({}, t);
        },
        er = {
          drawImage: h,
          generateLut: Et,
          getDefaultViewport: g,
          requestAnimationFrame: Wt,
          setDefaultViewport: m,
          storedPixelDataToCanvasImageData: Me,
          storedPixelDataToCanvasImageDataRGBA: Oe,
          storedPixelDataToCanvasImageDataColorLUT: Nt,
          storedPixelDataToCanvasImageDataPseudocolorLUT: Ot,
          storedColorPixelDataToCanvasImageData: St,
          getTransform: Ie,
          calculateTransform: Ee,
          Transform: xe,
        },
        tr = function (e) {
          var t = C(e);
          (t.invalid = !0), (t.needsRedraw = !0);
          var r = { element: e };
          R(e, T.INVALIDATED, r);
        },
        rr = function (e) {
          l(e).forEach(function (e) {
            h(e, !0);
          });
        },
        nr = [];
      var ar = {
          addProvider: function (e) {
            var t,
              r =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
            for (t = 0; t < nr.length && !(nr[t].priority <= r); t++);
            nr.splice(t, 0, { priority: r, provider: e });
          },
          removeProvider: function (e) {
            for (var t = 0; t < nr.length; t++)
              if (nr[t].provider === e) {
                nr.splice(t, 1);
                break;
              }
          },
          get: function (e, t) {
            for (var r = 0; r < nr.length; r++) {
              var n = nr[r].provider(e, t);
              if (void 0 !== n) return n;
            }
          },
        },
        ir = function (e, t, r) {
          var n = C(e);
          if (void 0 === n.image)
            throw new Error('image has not been loaded yet');
          var a = e.getBoundingClientRect(),
            i = {
              x: t - a.left - window.pageXOffset,
              y: r - a.top - window.pageYOffset,
            },
            o = Ie(n);
          return o.invert(), o.transformPoint(i.x, i.y);
        },
        or = function (e, t) {
          var r = C(e);
          return Ie(r).transformPoint(t.x, t.y);
        };
      var lr = function (e, t) {
        var r =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          n =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
        if (void 0 === e)
          throw new Error(
            'renderToCanvas: parameter canvas cannot be undefined'
          );
        n && n.renderer && 'webgl' === n.renderer.toLowerCase() && jt(n);
        var a = g(e, t);
        r && Object.assign(a, r);
        var i,
          o = {
            element: (i = e),
            canvas: i,
            image: t,
            invalid: !0,
            needsRedraw: !0,
            options: n,
            layers: [],
            data: {},
            renderingTools: {},
            viewport: a,
          },
          l = { enabledElement: o, timestamp: Date.now() };
        R(o.element, T.PRE_RENDER, l), qt(o, o.invalid);
      };
      function sr(e, t) {
        if (void 0 === e)
          throw new Error(
            'renderWebImage: enabledElement parameter must not be undefined'
          );
        var r = e.image;
        if (void 0 === r)
          throw new Error(
            'renderWebImage: image must be loaded before it can be drawn'
          );
        if (
          e.viewport.voi.windowWidth === e.image.windowWidth &&
          e.viewport.voi.windowCenter === e.image.windowCenter &&
          !1 === e.viewport.invert
        ) {
          var n = e.canvas.getContext('2d', { desynchronized: !0 });
          n.setTransform(1, 0, 0, 1, 0, 0),
            (n.fillStyle = 'black'),
            n.fillRect(0, 0, e.canvas.width, e.canvas.height),
            (n.imageSmoothingEnabled = !e.viewport.pixelReplication),
            (n.mozImageSmoothingEnabled = n.imageSmoothingEnabled),
            Ve(e, n);
          var a = v(e.image, e.viewport),
            i = a.tlhc.x - 1,
            o = a.tlhc.y - 1,
            l = a.brhc.x - i,
            s = a.brhc.y - o;
          n.drawImage(r.getImage(), i, o, l, s, i, o, l, s);
        } else Mt(e, t);
      }
      var ur = {
          colorImage: Mt,
          grayscaleImage: Rt,
          webImage: sr,
          pseudoColorImage: Ut,
          labelMapImage: kt,
          toCanvas: lr,
        },
        dr = function (e) {
          var t = C(e);
          (t.viewport = g(t.canvas, t.image)), P(e);
        },
        mr = function (e, t) {
          var r = C(e);
          if ((void 0 === r.viewport && (r.viewport = g(r.canvas)), t))
            for (var n in t) null !== t[n] && (r.viewport[n] = t[n]);
          r.viewport.voi.windowWidth &&
            (r.viewport.voi.windowWidth = Math.max(
              r.viewport.voi.windowWidth,
              1e-6
            )),
            r.viewport.scale &&
              (r.viewport.scale = Math.max(r.viewport.scale, 1e-4)),
            (r.viewport.rotation %= 360),
            r.viewport.rotation < 0 && (r.viewport.rotation += 360),
            r.image && P(e);
        };
      r.d(t, 'drawImage', function () {
        return h;
      }),
        r.d(t, 'generateLut', function () {
          return Et;
        }),
        r.d(t, 'getDefaultViewport', function () {
          return g;
        }),
        r.d(t, 'setDefaultViewport', function () {
          return m;
        }),
        r.d(t, 'requestAnimationFrame', function () {
          return Wt;
        }),
        r.d(t, 'storedPixelDataToCanvasImageData', function () {
          return Me;
        }),
        r.d(t, 'storedColorPixelDataToCanvasImageData', function () {
          return St;
        }),
        r.d(t, 'storedPixelDataToCanvasImageDataColorLUT', function () {
          return Nt;
        }),
        r.d(t, 'storedPixelDataToCanvasImageDataPseudocolorLUT', function () {
          return Ot;
        }),
        r.d(t, 'internal', function () {
          return er;
        }),
        r.d(t, 'renderLabelMapImage', function () {
          return kt;
        }),
        r.d(t, 'renderPseudoColorImage', function () {
          return Ut;
        }),
        r.d(t, 'renderColorImage', function () {
          return Mt;
        }),
        r.d(t, 'renderGrayscaleImage', function () {
          return Rt;
        }),
        r.d(t, 'renderWebImage', function () {
          return sr;
        }),
        r.d(t, 'renderToCanvas', function () {
          return lr;
        }),
        r.d(t, 'canvasToPixel', function () {
          return Te;
        }),
        r.d(t, 'disable', function () {
          return Ce;
        }),
        r.d(t, 'displayImage', function () {
          return Pe;
        }),
        r.d(t, 'draw', function () {
          return Re;
        }),
        r.d(t, 'drawInvalidated', function () {
          return De;
        }),
        r.d(t, 'enable', function () {
          return Yt;
        }),
        r.d(t, 'getElementData', function () {
          return H;
        }),
        r.d(t, 'removeElementData', function () {
          return X;
        }),
        r.d(t, 'getEnabledElement', function () {
          return C;
        }),
        r.d(t, 'addEnabledElement', function () {
          return i;
        }),
        r.d(t, 'getEnabledElementsByImageId', function () {
          return l;
        }),
        r.d(t, 'getEnabledElements', function () {
          return s;
        }),
        r.d(t, 'addLayer', function () {
          return b;
        }),
        r.d(t, 'removeLayer', function () {
          return y;
        }),
        r.d(t, 'getLayer', function () {
          return x;
        }),
        r.d(t, 'getLayers', function () {
          return E;
        }),
        r.d(t, 'getVisibleLayers', function () {
          return I;
        }),
        r.d(t, 'setActiveLayer', function () {
          return D;
        }),
        r.d(t, 'getActiveLayer', function () {
          return A;
        }),
        r.d(t, 'purgeLayers', function () {
          return _;
        }),
        r.d(t, 'setLayerImage', function () {
          return S;
        }),
        r.d(t, 'fitToWindow', function () {
          return Se;
        }),
        r.d(t, 'getDefaultViewportForImage', function () {
          return Kt;
        }),
        r.d(t, 'getDisplayedArea', function () {
          return v;
        }),
        r.d(t, 'getImage', function () {
          return Zt;
        }),
        r.d(t, 'getPixels', function () {
          return Jt;
        }),
        r.d(t, 'getStoredPixels', function () {
          return $t;
        }),
        r.d(t, 'getViewport', function () {
          return Qt;
        }),
        r.d(t, 'loadImage', function () {
          return le;
        }),
        r.d(t, 'loadAndCacheImage', function () {
          return se;
        }),
        r.d(t, 'registerImageLoader', function () {
          return ue;
        }),
        r.d(t, 'registerUnknownImageLoader', function () {
          return de;
        }),
        r.d(t, 'invalidate', function () {
          return tr;
        }),
        r.d(t, 'invalidateImageId', function () {
          return rr;
        }),
        r.d(t, 'pageToPixel', function () {
          return ir;
        }),
        r.d(t, 'pixelToCanvas', function () {
          return or;
        }),
        r.d(t, 'reset', function () {
          return dr;
        }),
        r.d(t, 'resize', function () {
          return Ae;
        }),
        r.d(t, 'setToPixelCoordinateSystem', function () {
          return Ve;
        }),
        r.d(t, 'setViewport', function () {
          return mr;
        }),
        r.d(t, 'updateImage', function () {
          return P;
        }),
        r.d(t, 'pixelDataToFalseColorData', function () {
          return z;
        }),
        r.d(t, 'rendering', function () {
          return ur;
        }),
        r.d(t, 'imageCache', function () {
          return ae;
        }),
        r.d(t, 'metaData', function () {
          return ar;
        }),
        r.d(t, 'webGL', function () {
          return vt;
        }),
        r.d(t, 'colors', function () {
          return G;
        }),
        r.d(t, 'convertImageToFalseColorImage', function () {
          return W;
        }),
        r.d(t, 'convertToFalseColorImage', function () {
          return j;
        }),
        r.d(t, 'restoreImage', function () {
          return q;
        }),
        r.d(t, 'EVENTS', function () {
          return T;
        }),
        r.d(t, 'events', function () {
          return o;
        }),
        r.d(t, 'triggerEvent', function () {
          return R;
        }),
        r.d(t, 'imageLoadPoolManager', function () {
          return pe;
        }),
        r.d(t, 'imageRetrievalPoolManager', function () {
          return be;
        }),
        r.d(t, 'RequestPoolManager', function () {
          return ve;
        });
      var cr = {
        drawImage: h,
        generateLut: Et,
        getDefaultViewport: g,
        requestAnimationFrame: Wt,
        storedPixelDataToCanvasImageData: Me,
        storedColorPixelDataToCanvasImageData: St,
        storedPixelDataToCanvasImageDataColorLUT: Nt,
        storedPixelDataToCanvasImageDataPseudocolorLUT: Ot,
        internal: er,
        renderLabelMapImage: kt,
        renderPseudoColorImage: Ut,
        renderColorImage: Mt,
        renderGrayscaleImage: Rt,
        renderWebImage: sr,
        renderToCanvas: lr,
        canvasToPixel: Te,
        disable: Ce,
        displayImage: Pe,
        draw: Re,
        drawInvalidated: De,
        enable: Yt,
        getElementData: H,
        removeElementData: X,
        getEnabledElement: C,
        addEnabledElement: i,
        getEnabledElementsByImageId: l,
        getEnabledElements: s,
        addLayer: b,
        removeLayer: y,
        getLayer: x,
        getLayers: E,
        getVisibleLayers: I,
        setActiveLayer: D,
        getActiveLayer: A,
        purgeLayers: _,
        setLayerImage: S,
        fitToWindow: Se,
        getDefaultViewportForImage: Kt,
        getDisplayedArea: v,
        setDefaultViewport: m,
        getImage: Zt,
        getPixels: Jt,
        getStoredPixels: $t,
        getViewport: Qt,
        loadImage: le,
        loadAndCacheImage: se,
        registerImageLoader: ue,
        registerUnknownImageLoader: de,
        invalidate: tr,
        invalidateImageId: rr,
        pageToPixel: ir,
        pixelToCanvas: or,
        reset: dr,
        resize: Ae,
        setToPixelCoordinateSystem: Ve,
        setViewport: mr,
        updateImage: P,
        pixelDataToFalseColorData: z,
        rendering: ur,
        imageCache: ae,
        metaData: ar,
        webGL: vt,
        colors: G,
        convertImageToFalseColorImage: W,
        convertToFalseColorImage: j,
        restoreImage: q,
        EVENTS: T,
        events: o,
        triggerEvent: R,
        imageLoadPoolManager: pe,
        imageRetrievalPoolManager: be,
        RequestPoolManager: ve,
      };
      t.default = cr;
    },
  ]);
});
//# sourceMappingURL=cornerstone.min.js.map
var main=function(){
	exportData({cornerstone:window.cornerstone});
}