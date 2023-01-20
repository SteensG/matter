
    /*!
     * matter-js 0.18.0 by @liabru
     * http://brm.io/matter-js/
     * License MIT
     */
    !(function (e, t) {
      "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define("Matter", [], t)
        : "object" == typeof exports
        ? (exports.Matter = t())
        : (e.Matter = t());
    })(this, function () {
      return (function (e) {
        var t = {};
        function n(i) {
          if (t[i]) return t[i].exports;
          var o = (t[i] = { i: i, l: !1, exports: {} });
          return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, i) {
            n.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: !0, get: i });
          }),
          (n.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if (
              (n.r(i),
              Object.defineProperty(i, "default", { enumerable: !0, value: e }),
              2 & t && "string" != typeof e)
            )
              for (var o in e)
                n.d(
                  i,
                  o,
                  function (t) {
                    return e[t];
                  }.bind(null, o)
                );
            return i;
          }),
          (n.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 21))
        );
      })([
        function (e, t) {
          var n = {};
          (e.exports = n),
            (function () {
              (n._nextId = 0),
                (n._seed = 0),
                (n._nowStartTime = +new Date()),
                (n._warnedOnce = {}),
                (n._decomp = null),
                (n.extend = function (e, t) {
                  var i, o;
                  "boolean" == typeof t
                    ? ((i = 2), (o = t))
                    : ((i = 1), (o = !0));
                  for (var r = i; r < arguments.length; r++) {
                    var a = arguments[r];
                    if (a)
                      for (var s in a)
                        o && a[s] && a[s].constructor === Object
                          ? e[s] && e[s].constructor !== Object
                            ? (e[s] = a[s])
                            : ((e[s] = e[s] || {}), n.extend(e[s], o, a[s]))
                          : (e[s] = a[s]);
                  }
                  return e;
                }),
                (n.clone = function (e, t) {
                  return n.extend({}, t, e);
                }),
                (n.keys = function (e) {
                  if (Object.keys) return Object.keys(e);
                  var t = [];
                  for (var n in e) t.push(n);
                  return t;
                }),
                (n.values = function (e) {
                  var t = [];
                  if (Object.keys) {
                    for (var n = Object.keys(e), i = 0; i < n.length; i++)
                      t.push(e[n[i]]);
                    return t;
                  }
                  for (var o in e) t.push(e[o]);
                  return t;
                }),
                (n.get = function (e, t, n, i) {
                  t = t.split(".").slice(n, i);
                  for (var o = 0; o < t.length; o += 1) e = e[t[o]];
                  return e;
                }),
                (n.set = function (e, t, i, o, r) {
                  var a = t.split(".").slice(o, r);
                  return (n.get(e, t, 0, -1)[a[a.length - 1]] = i), i;
                }),
                (n.shuffle = function (e) {
                  for (var t = e.length - 1; t > 0; t--) {
                    var i = Math.floor(n.random() * (t + 1)),
                      o = e[t];
                    (e[t] = e[i]), (e[i] = o);
                  }
                  return e;
                }),
                (n.choose = function (e) {
                  return e[Math.floor(n.random() * e.length)];
                }),
                (n.isElement = function (e) {
                  return "undefined" != typeof HTMLElement
                    ? e instanceof HTMLElement
                    : !!(e && e.nodeType && e.nodeName);
                }),
                (n.isArray = function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                }),
                (n.isFunction = function (e) {
                  return "function" == typeof e;
                }),
                (n.isPlainObject = function (e) {
                  return "object" == typeof e && e.constructor === Object;
                }),
                (n.isString = function (e) {
                  return "[object String]" === toString.call(e);
                }),
                (n.clamp = function (e, t, n) {
                  return e < t ? t : e > n ? n : e;
                }),
                (n.sign = function (e) {
                  return e < 0 ? -1 : 1;
                }),
                (n.now = function () {
                  if ("undefined" != typeof window && window.performance) {
                    if (window.performance.now) return window.performance.now();
                    if (window.performance.webkitNow)
                      return window.performance.webkitNow();
                  }
                  return Date.now ? Date.now() : new Date() - n._nowStartTime;
                }),
                (n.random = function (t, n) {
                  return (
                    (n = void 0 !== n ? n : 1),
                    (t = void 0 !== t ? t : 0) + e() * (n - t)
                  );
                });
              var e = function () {
                return (
                  (n._seed = (9301 * n._seed + 49297) % 233280),
                  n._seed / 233280
                );
              };
              (n.colorToNumber = function (e) {
                return (
                  3 == (e = e.replace("#", "")).length &&
                    (e =
                      e.charAt(0) +
                      e.charAt(0) +
                      e.charAt(1) +
                      e.charAt(1) +
                      e.charAt(2) +
                      e.charAt(2)),
                  parseInt(e, 16)
                );
              }),
                (n.logLevel = 1),
                (n.log = function () {
                  console &&
                    n.logLevel > 0 &&
                    n.logLevel <= 3 &&
                    console.log.apply(
                      console,
                      ["matter-js:"].concat(
                        Array.prototype.slice.call(arguments)
                      )
                    );
                }),
                (n.info = function () {
                  console &&
                    n.logLevel > 0 &&
                    n.logLevel <= 2 &&
                    console.info.apply(
                      console,
                      ["matter-js:"].concat(
                        Array.prototype.slice.call(arguments)
                      )
                    );
                }),
                (n.warn = function () {
                  console &&
                    n.logLevel > 0 &&
                    n.logLevel <= 3 &&
                    console.warn.apply(
                      console,
                      ["matter-js:"].concat(
                        Array.prototype.slice.call(arguments)
                      )
                    );
                }),
                (n.warnOnce = function () {
                  var e = Array.prototype.slice.call(arguments).join(" ");
                  n._warnedOnce[e] || (n.warn(e), (n._warnedOnce[e] = !0));
                }),
                (n.deprecated = function (e, t, i) {
                  e[t] = n.chain(function () {
                    n.warnOnce("🔅 deprecated 🔅", i);
                  }, e[t]);
                }),
                (n.nextId = function () {
                  return n._nextId++;
                }),
                (n.indexOf = function (e, t) {
                  if (e.indexOf) return e.indexOf(t);
                  for (var n = 0; n < e.length; n++) if (e[n] === t) return n;
                  return -1;
                }),
                (n.map = function (e, t) {
                  if (e.map) return e.map(t);
                  for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
                  return n;
                }),
                (n.topologicalSort = function (e) {
                  var t = [],
                    i = [],
                    o = [];
                  for (var r in e)
                    i[r] || o[r] || n._topologicalSort(r, i, o, e, t);
                  return t;
                }),
                (n._topologicalSort = function (e, t, i, o, r) {
                  var a = o[e] || [];
                  i[e] = !0;
                  for (var s = 0; s < a.length; s += 1) {
                    var l = a[s];
                    i[l] || t[l] || n._topologicalSort(l, t, i, o, r);
                  }
                  (i[e] = !1), (t[e] = !0), r.push(e);
                }),
                (n.chain = function () {
                  for (var e = [], t = 0; t < arguments.length; t += 1) {
                    var n = arguments[t];
                    n._chained ? e.push.apply(e, n._chained) : e.push(n);
                  }
                  var i = function () {
                    for (
                      var t,
                        n = new Array(arguments.length),
                        i = 0,
                        o = arguments.length;
                      i < o;
                      i++
                    )
                      n[i] = arguments[i];
                    for (i = 0; i < e.length; i += 1) {
                      var r = e[i].apply(t, n);
                      void 0 !== r && (t = r);
                    }
                    return t;
                  };
                  return (i._chained = e), i;
                }),
                (n.chainPathBefore = function (e, t, i) {
                  return n.set(e, t, n.chain(i, n.get(e, t)));
                }),
                (n.chainPathAfter = function (e, t, i) {
                  return n.set(e, t, n.chain(n.get(e, t), i));
                }),
                (n.setDecomp = function (e) {
                  n._decomp = e;
                }),
                (n.getDecomp = function () {
                  var e = n._decomp;
                  try {
                    e || "undefined" == typeof window || (e = window.decomp),
                      e || "undefined" == typeof global || (e = global.decomp);
                  } catch (t) {
                    e = null;
                  }
                  return e;
                });
            })();
        },
        function (e, t) {
          var n = {};
          (e.exports = n),
            (n.create = function (e) {
              var t = { min: { x: 0, y: 0 }, max: { x: 0, y: 0 } };
              return e && n.update(t, e), t;
            }),
            (n.update = function (e, t, n) {
              (e.min.x = 1 / 0),
                (e.max.x = -1 / 0),
                (e.min.y = 1 / 0),
                (e.max.y = -1 / 0);
              for (var i = 0; i < t.length; i++) {
                var o = t[i];
                o.x > e.max.x && (e.max.x = o.x),
                  o.x < e.min.x && (e.min.x = o.x),
                  o.y > e.max.y && (e.max.y = o.y),
                  o.y < e.min.y && (e.min.y = o.y);
              }
              n &&
                (n.x > 0 ? (e.max.x += n.x) : (e.min.x += n.x),
                n.y > 0 ? (e.max.y += n.y) : (e.min.y += n.y));
            }),
            (n.contains = function (e, t) {
              return (
                t.x >= e.min.x &&
                t.x <= e.max.x &&
                t.y >= e.min.y &&
                t.y <= e.max.y
              );
            }),
            (n.overlaps = function (e, t) {
              return (
                e.min.x <= t.max.x &&
                e.max.x >= t.min.x &&
                e.max.y >= t.min.y &&
                e.min.y <= t.max.y
              );
            }),
            (n.translate = function (e, t) {
              (e.min.x += t.x),
                (e.max.x += t.x),
                (e.min.y += t.y),
                (e.max.y += t.y);
            }),
            (n.shift = function (e, t) {
              var n = e.max.x - e.min.x,
                i = e.max.y - e.min.y;
              (e.min.x = t.x),
                (e.max.x = t.x + n),
                (e.min.y = t.y),
                (e.max.y = t.y + i);
            });
        },
        function (e, t) {
          var n = {};
          (e.exports = n),
            (n.create = function (e, t) {
              return { x: e || 0, y: t || 0 };
            }),
            (n.clone = function (e) {
              return { x: e.x, y: e.y };
            }),
            (n.magnitude = function (e) {
              return Math.sqrt(e.x * e.x + e.y * e.y);
            }),
            (n.magnitudeSquared = function (e) {
              return e.x * e.x + e.y * e.y;
            }),
            (n.rotate = function (e, t, n) {
              var i = Math.cos(t),
                o = Math.sin(t);
              n || (n = {});
              var r = e.x * i - e.y * o;
              return (n.y = e.x * o + e.y * i), (n.x = r), n;
            }),
            (n.rotateAbout = function (e, t, n, i) {
              var o = Math.cos(t),
                r = Math.sin(t);
              i || (i = {});
              var a = n.x + ((e.x - n.x) * o - (e.y - n.y) * r);
              return (
                (i.y = n.y + ((e.x - n.x) * r + (e.y - n.y) * o)), (i.x = a), i
              );
            }),
            (n.normalise = function (e) {
              var t = n.magnitude(e);
              return 0 === t ? { x: 0, y: 0 } : { x: e.x / t, y: e.y / t };
            }),
            (n.dot = function (e, t) {
              return e.x * t.x + e.y * t.y;
            }),
            (n.cross = function (e, t) {
              return e.x * t.y - e.y * t.x;
            }),
            (n.cross3 = function (e, t, n) {
              return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x);
            }),
            (n.add = function (e, t, n) {
              return n || (n = {}), (n.x = e.x + t.x), (n.y = e.y + t.y), n;
            }),
            (n.sub = function (e, t, n) {
              return n || (n = {}), (n.x = e.x - t.x), (n.y = e.y - t.y), n;
            }),
            (n.mult = function (e, t) {
              return { x: e.x * t, y: e.y * t };
            }),
            (n.div = function (e, t) {
              return { x: e.x / t, y: e.y / t };
            }),
            (n.perp = function (e, t) {
              return { x: (t = !0 === t ? -1 : 1) * -e.y, y: t * e.x };
            }),
            (n.neg = function (e) {
              return { x: -e.x, y: -e.y };
            }),
            (n.angle = function (e, t) {
              return Math.atan2(t.y - e.y, t.x - e.x);
            }),
            (n._temp = [
              n.create(),
              n.create(),
              n.create(),
              n.create(),
              n.create(),
              n.create(),
            ]);
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(2),
            r = n(0);
          (i.create = function (e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
              var o = e[i],
                r = { x: o.x, y: o.y, index: i, body: t, isInternal: !1 };
              n.push(r);
            }
            return n;
          }),
            (i.fromPath = function (e, t) {
              var n = [];
              return (
                e.replace(
                  /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/gi,
                  function (e, t, i) {
                    n.push({ x: parseFloat(t), y: parseFloat(i) });
                  }
                ),
                i.create(n, t)
              );
            }),
            (i.centre = function (e) {
              for (
                var t, n, r, a = i.area(e, !0), s = { x: 0, y: 0 }, l = 0;
                l < e.length;
                l++
              )
                (r = (l + 1) % e.length),
                  (t = o.cross(e[l], e[r])),
                  (n = o.mult(o.add(e[l], e[r]), t)),
                  (s = o.add(s, n));
              return o.div(s, 6 * a);
            }),
            (i.mean = function (e) {
              for (var t = { x: 0, y: 0 }, n = 0; n < e.length; n++)
                (t.x += e[n].x), (t.y += e[n].y);
              return o.div(t, e.length);
            }),
            (i.area = function (e, t) {
              for (var n = 0, i = e.length - 1, o = 0; o < e.length; o++)
                (n += (e[i].x - e[o].x) * (e[i].y + e[o].y)), (i = o);
              return t ? n / 2 : Math.abs(n) / 2;
            }),
            (i.inertia = function (e, t) {
              for (var n, i, r = 0, a = 0, s = e, l = 0; l < s.length; l++)
                (i = (l + 1) % s.length),
                  (r +=
                    (n = Math.abs(o.cross(s[i], s[l]))) *
                    (o.dot(s[i], s[i]) +
                      o.dot(s[i], s[l]) +
                      o.dot(s[l], s[l]))),
                  (a += n);
              return (t / 6) * (r / a);
            }),
            (i.translate = function (e, t, n) {
              n = void 0 !== n ? n : 1;
              var i,
                o = e.length,
                r = t.x * n,
                a = t.y * n;
              for (i = 0; i < o; i++) (e[i].x += r), (e[i].y += a);
              return e;
            }),
            (i.rotate = function (e, t, n) {
              if (0 !== t) {
                var i,
                  o,
                  r,
                  a,
                  s = Math.cos(t),
                  l = Math.sin(t),
                  c = n.x,
                  u = n.y,
                  d = e.length;
                for (a = 0; a < d; a++)
                  (o = (i = e[a]).x - c),
                    (r = i.y - u),
                    (i.x = c + (o * s - r * l)),
                    (i.y = u + (o * l + r * s));
                return e;
              }
            }),
            (i.contains = function (e, t) {
              for (
                var n, i = t.x, o = t.y, r = e.length, a = e[r - 1], s = 0;
                s < r;
                s++
              ) {
                if (
                  ((n = e[s]),
                  (i - a.x) * (n.y - a.y) + (o - a.y) * (a.x - n.x) > 0)
                )
                  return !1;
                a = n;
              }
              return !0;
            }),
            (i.scale = function (e, t, n, r) {
              if (1 === t && 1 === n) return e;
              var a, s;
              r = r || i.centre(e);
              for (var l = 0; l < e.length; l++)
                (a = e[l]),
                  (s = o.sub(a, r)),
                  (e[l].x = r.x + s.x * t),
                  (e[l].y = r.y + s.y * n);
              return e;
            }),
            (i.chamfer = function (e, t, n, i, a) {
              (t = "number" == typeof t ? [t] : t || [8]),
                (n = void 0 !== n ? n : -1),
                (i = i || 2),
                (a = a || 14);
              for (var s = [], l = 0; l < e.length; l++) {
                var c = e[l - 1 >= 0 ? l - 1 : e.length - 1],
                  u = e[l],
                  d = e[(l + 1) % e.length],
                  p = t[l < t.length ? l : t.length - 1];
                if (0 !== p) {
                  var f = o.normalise({ x: u.y - c.y, y: c.x - u.x }),
                    v = o.normalise({ x: d.y - u.y, y: u.x - d.x }),
                    y = Math.sqrt(2 * Math.pow(p, 2)),
                    m = o.mult(r.clone(f), p),
                    g = o.normalise(o.mult(o.add(f, v), 0.5)),
                    x = o.sub(u, o.mult(g, y)),
                    h = n;
                  -1 === n && (h = 1.75 * Math.pow(p, 0.32)),
                    (h = r.clamp(h, i, a)) % 2 == 1 && (h += 1);
                  for (var b = Math.acos(o.dot(f, v)) / h, S = 0; S < h; S++)
                    s.push(o.add(o.rotate(m, b * S), x));
                } else s.push(u);
              }
              return s;
            }),
            (i.clockwiseSort = function (e) {
              var t = i.mean(e);
              return (
                e.sort(function (e, n) {
                  return o.angle(t, e) - o.angle(t, n);
                }),
                e
              );
            }),
            (i.isConvex = function (e) {
              var t,
                n,
                i,
                o,
                r = 0,
                a = e.length;
              if (a < 3) return null;
              for (t = 0; t < a; t++)
                if (
                  ((i = (t + 2) % a),
                  (o = (e[(n = (t + 1) % a)].x - e[t].x) * (e[i].y - e[n].y)),
                  (o -= (e[n].y - e[t].y) * (e[i].x - e[n].x)) < 0
                    ? (r |= 1)
                    : o > 0 && (r |= 2),
                  3 === r)
                )
                  return !1;
              return 0 !== r || null;
            }),
            (i.hull = function (e) {
              var t,
                n,
                i = [],
                r = [];
              for (
                (e = e.slice(0)).sort(function (e, t) {
                  var n = e.x - t.x;
                  return 0 !== n ? n : e.y - t.y;
                }),
                  n = 0;
                n < e.length;
                n += 1
              ) {
                for (
                  t = e[n];
                  r.length >= 2 &&
                  o.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;

                )
                  r.pop();
                r.push(t);
              }
              for (n = e.length - 1; n >= 0; n -= 1) {
                for (
                  t = e[n];
                  i.length >= 2 &&
                  o.cross3(i[i.length - 2], i[i.length - 1], t) <= 0;

                )
                  i.pop();
                i.push(t);
              }
              return i.pop(), r.pop(), i.concat(r);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0);
          (i.on = function (e, t, n) {
            for (var i, o = t.split(" "), r = 0; r < o.length; r++)
              (i = o[r]),
                (e.events = e.events || {}),
                (e.events[i] = e.events[i] || []),
                e.events[i].push(n);
            return n;
          }),
            (i.off = function (e, t, n) {
              if (t) {
                "function" == typeof t &&
                  ((n = t), (t = o.keys(e.events).join(" ")));
                for (var i = t.split(" "), r = 0; r < i.length; r++) {
                  var a = e.events[i[r]],
                    s = [];
                  if (n && a)
                    for (var l = 0; l < a.length; l++)
                      a[l] !== n && s.push(a[l]);
                  e.events[i[r]] = s;
                }
              } else e.events = {};
            }),
            (i.trigger = function (e, t, n) {
              var i,
                r,
                a,
                s,
                l = e.events;
              if (l && o.keys(l).length > 0) {
                n || (n = {}), (i = t.split(" "));
                for (var c = 0; c < i.length; c++)
                  if ((a = l[(r = i[c])])) {
                    ((s = o.clone(n, !1)).name = r), (s.source = e);
                    for (var u = 0; u < a.length; u++) a[u].apply(e, [s]);
                  }
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(4),
            r = n(0),
            a = n(1),
            s = n(6);
          (i.create = function (e) {
            return r.extend(
              {
                id: r.nextId(),
                type: "composite",
                parent: null,
                isModified: !1,
                bodies: [],
                constraints: [],
                composites: [],
                label: "Composite",
                plugin: {},
                cache: {
                  allBodies: null,
                  allConstraints: null,
                  allComposites: null,
                },
              },
              e
            );
          }),
            (i.setModified = function (e, t, n, o) {
              if (
                ((e.isModified = t),
                t &&
                  e.cache &&
                  ((e.cache.allBodies = null),
                  (e.cache.allConstraints = null),
                  (e.cache.allComposites = null)),
                n && e.parent && i.setModified(e.parent, t, n, o),
                o)
              )
                for (var r = 0; r < e.composites.length; r++) {
                  var a = e.composites[r];
                  i.setModified(a, t, n, o);
                }
            }),
            (i.add = function (e, t) {
              var n = [].concat(t);
              o.trigger(e, "beforeAdd", { object: t });
              for (var a = 0; a < n.length; a++) {
                var s = n[a];
                switch (s.type) {
                  case "body":
                    if (s.parent !== s) {
                      r.warn(
                        "Composite.add: skipped adding a compound body part (you must add its parent instead)"
                      );
                      break;
                    }
                    i.addBody(e, s);
                    break;
                  case "constraint":
                    i.addConstraint(e, s);
                    break;
                  case "composite":
                    i.addComposite(e, s);
                    break;
                  case "mouseConstraint":
                    i.addConstraint(e, s.constraint);
                }
              }
              return o.trigger(e, "afterAdd", { object: t }), e;
            }),
            (i.remove = function (e, t, n) {
              var r = [].concat(t);
              o.trigger(e, "beforeRemove", { object: t });
              for (var a = 0; a < r.length; a++) {
                var s = r[a];
                switch (s.type) {
                  case "body":
                    i.removeBody(e, s, n);
                    break;
                  case "constraint":
                    i.removeConstraint(e, s, n);
                    break;
                  case "composite":
                    i.removeComposite(e, s, n);
                    break;
                  case "mouseConstraint":
                    i.removeConstraint(e, s.constraint);
                }
              }
              return o.trigger(e, "afterRemove", { object: t }), e;
            }),
            (i.addComposite = function (e, t) {
              return (
                e.composites.push(t),
                (t.parent = e),
                i.setModified(e, !0, !0, !1),
                e
              );
            }),
            (i.removeComposite = function (e, t, n) {
              var o = r.indexOf(e.composites, t);
              if ((-1 !== o && i.removeCompositeAt(e, o), n))
                for (var a = 0; a < e.composites.length; a++)
                  i.removeComposite(e.composites[a], t, !0);
              return e;
            }),
            (i.removeCompositeAt = function (e, t) {
              return e.composites.splice(t, 1), i.setModified(e, !0, !0, !1), e;
            }),
            (i.addBody = function (e, t) {
              return e.bodies.push(t), i.setModified(e, !0, !0, !1), e;
            }),
            (i.removeBody = function (e, t, n) {
              var o = r.indexOf(e.bodies, t);
              if ((-1 !== o && i.removeBodyAt(e, o), n))
                for (var a = 0; a < e.composites.length; a++)
                  i.removeBody(e.composites[a], t, !0);
              return e;
            }),
            (i.removeBodyAt = function (e, t) {
              return e.bodies.splice(t, 1), i.setModified(e, !0, !0, !1), e;
            }),
            (i.addConstraint = function (e, t) {
              return e.constraints.push(t), i.setModified(e, !0, !0, !1), e;
            }),
            (i.removeConstraint = function (e, t, n) {
              var o = r.indexOf(e.constraints, t);
              if ((-1 !== o && i.removeConstraintAt(e, o), n))
                for (var a = 0; a < e.composites.length; a++)
                  i.removeConstraint(e.composites[a], t, !0);
              return e;
            }),
            (i.removeConstraintAt = function (e, t) {
              return (
                e.constraints.splice(t, 1), i.setModified(e, !0, !0, !1), e
              );
            }),
            (i.clear = function (e, t, n) {
              if (n)
                for (var o = 0; o < e.composites.length; o++)
                  i.clear(e.composites[o], t, !0);
              return (
                t
                  ? (e.bodies = e.bodies.filter(function (e) {
                      return e.isStatic;
                    }))
                  : (e.bodies.length = 0),
                (e.constraints.length = 0),
                (e.composites.length = 0),
                i.setModified(e, !0, !0, !1),
                e
              );
            }),
            (i.allBodies = function (e) {
              if (e.cache && e.cache.allBodies) return e.cache.allBodies;
              for (
                var t = [].concat(e.bodies), n = 0;
                n < e.composites.length;
                n++
              )
                t = t.concat(i.allBodies(e.composites[n]));
              return e.cache && (e.cache.allBodies = t), t;
            }),
            (i.allConstraints = function (e) {
              if (e.cache && e.cache.allConstraints)
                return e.cache.allConstraints;
              for (
                var t = [].concat(e.constraints), n = 0;
                n < e.composites.length;
                n++
              )
                t = t.concat(i.allConstraints(e.composites[n]));
              return e.cache && (e.cache.allConstraints = t), t;
            }),
            (i.allComposites = function (e) {
              if (e.cache && e.cache.allComposites)
                return e.cache.allComposites;
              for (
                var t = [].concat(e.composites), n = 0;
                n < e.composites.length;
                n++
              )
                t = t.concat(i.allComposites(e.composites[n]));
              return e.cache && (e.cache.allComposites = t), t;
            }),
            (i.get = function (e, t, n) {
              var o, r;
              switch (n) {
                case "body":
                  o = i.allBodies(e);
                  break;
                case "constraint":
                  o = i.allConstraints(e);
                  break;
                case "composite":
                  o = i.allComposites(e).concat(e);
              }
              return o
                ? 0 ===
                  (r = o.filter(function (e) {
                    return e.id.toString() === t.toString();
                  })).length
                  ? null
                  : r[0]
                : null;
            }),
            (i.move = function (e, t, n) {
              return i.remove(e, t), i.add(n, t), e;
            }),
            (i.rebase = function (e) {
              for (
                var t = i
                    .allBodies(e)
                    .concat(i.allConstraints(e))
                    .concat(i.allComposites(e)),
                  n = 0;
                n < t.length;
                n++
              )
                t[n].id = r.nextId();
              return e;
            }),
            (i.translate = function (e, t, n) {
              for (
                var o = n ? i.allBodies(e) : e.bodies, r = 0;
                r < o.length;
                r++
              )
                s.translate(o[r], t);
              return e;
            }),
            (i.rotate = function (e, t, n, o) {
              for (
                var r = Math.cos(t),
                  a = Math.sin(t),
                  l = o ? i.allBodies(e) : e.bodies,
                  c = 0;
                c < l.length;
                c++
              ) {
                var u = l[c],
                  d = u.position.x - n.x,
                  p = u.position.y - n.y;
                s.setPosition(u, {
                  x: n.x + (d * r - p * a),
                  y: n.y + (d * a + p * r),
                }),
                  s.rotate(u, t);
              }
              return e;
            }),
            (i.scale = function (e, t, n, o, r) {
              for (
                var a = r ? i.allBodies(e) : e.bodies, l = 0;
                l < a.length;
                l++
              ) {
                var c = a[l],
                  u = c.position.x - o.x,
                  d = c.position.y - o.y;
                s.setPosition(c, { x: o.x + u * t, y: o.y + d * n }),
                  s.scale(c, t, n);
              }
              return e;
            }),
            (i.bounds = function (e) {
              for (
                var t = i.allBodies(e), n = [], o = 0;
                o < t.length;
                o += 1
              ) {
                var r = t[o];
                n.push(r.bounds.min, r.bounds.max);
              }
              return a.create(n);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(2),
            a = n(7),
            s = (n(16), n(0)),
            l = n(1),
            c = n(11);
          !(function () {
            (i._inertiaScale = 4),
              (i._nextCollidingGroupId = 1),
              (i._nextNonCollidingGroupId = -1),
              (i._nextCategory = 1),
              (i.create = function (t) {
                var n = {
                    id: s.nextId(),
                    type: "body",
                    label: "Body",
                    parts: [],
                    plugin: {},
                    angle: 0,
                    vertices: o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                    position: { x: 0, y: 0 },
                    force: { x: 0, y: 0 },
                    torque: 0,
                    positionImpulse: { x: 0, y: 0 },
                    constraintImpulse: { x: 0, y: 0, angle: 0 },
                    totalContacts: 0,
                    speed: 0,
                    angularSpeed: 0,
                    velocity: { x: 0, y: 0 },
                    angularVelocity: 0,
                    isSensor: !1,
                    isStatic: !1,
                    isSleeping: !1,
                    motion: 0,
                    sleepThreshold: 60,
                    density: 0.001,
                    restitution: 0,
                    friction: 0.1,
                    frictionStatic: 0.5,
                    frictionAir: 0.01,
                    collisionFilter: {
                      category: 1,
                      mask: 4294967295,
                      group: 0,
                    },
                    slop: 0.05,
                    timeScale: 1,
                    render: {
                      visible: !0,
                      opacity: 1,
                      strokeStyle: null,
                      fillStyle: null,
                      lineWidth: null,
                      sprite: { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 },
                    },
                    events: null,
                    bounds: null,
                    chamfer: null,
                    circleRadius: 0,
                    positionPrev: null,
                    anglePrev: 0,
                    parent: null,
                    axes: null,
                    area: 0,
                    mass: 0,
                    inertia: 0,
                    _original: null,
                  },
                  i = s.extend(n, t);
                return e(i, t), i;
              }),
              (i.nextGroup = function (e) {
                return e
                  ? i._nextNonCollidingGroupId--
                  : i._nextCollidingGroupId++;
              }),
              (i.nextCategory = function () {
                return (
                  (i._nextCategory = i._nextCategory << 1), i._nextCategory
                );
              });
            var e = function (e, t) {
              (t = t || {}),
                i.set(e, {
                  bounds: e.bounds || l.create(e.vertices),
                  positionPrev: e.positionPrev || r.clone(e.position),
                  anglePrev: e.anglePrev || e.angle,
                  vertices: e.vertices,
                  parts: e.parts || [e],
                  isStatic: e.isStatic,
                  isSleeping: e.isSleeping,
                  parent: e.parent || e,
                }),
                o.rotate(e.vertices, e.angle, e.position),
                c.rotate(e.axes, e.angle),
                l.update(e.bounds, e.vertices, e.velocity),
                i.set(e, {
                  axes: t.axes || e.axes,
                  area: t.area || e.area,
                  mass: t.mass || e.mass,
                  inertia: t.inertia || e.inertia,
                });
              var n = e.isStatic
                  ? "#14151f"
                  : s.choose([
                      "#f19648",
                      "#f5d259",
                      "#f55a3c",
                      "#063e7b",
                      "#ececd1",
                    ]),
                a = e.isStatic ? "#555" : "#ccc",
                u = e.isStatic && null === e.render.fillStyle ? 1 : 0;
              (e.render.fillStyle = e.render.fillStyle || n),
                (e.render.strokeStyle = e.render.strokeStyle || a),
                (e.render.lineWidth = e.render.lineWidth || u),
                (e.render.sprite.xOffset +=
                  -(e.bounds.min.x - e.position.x) /
                  (e.bounds.max.x - e.bounds.min.x)),
                (e.render.sprite.yOffset +=
                  -(e.bounds.min.y - e.position.y) /
                  (e.bounds.max.y - e.bounds.min.y));
            };
            (i.set = function (e, t, n) {
              var o;
              for (o in ("string" == typeof t && ((o = t), ((t = {})[o] = n)),
              t))
                if (Object.prototype.hasOwnProperty.call(t, o))
                  switch (((n = t[o]), o)) {
                    case "isStatic":
                      i.setStatic(e, n);
                      break;
                    case "isSleeping":
                      a.set(e, n);
                      break;
                    case "mass":
                      i.setMass(e, n);
                      break;
                    case "density":
                      i.setDensity(e, n);
                      break;
                    case "inertia":
                      i.setInertia(e, n);
                      break;
                    case "vertices":
                      i.setVertices(e, n);
                      break;
                    case "position":
                      i.setPosition(e, n);
                      break;
                    case "angle":
                      i.setAngle(e, n);
                      break;
                    case "velocity":
                      i.setVelocity(e, n);
                      break;
                    case "angularVelocity":
                      i.setAngularVelocity(e, n);
                      break;
                    case "parts":
                      i.setParts(e, n);
                      break;
                    case "centre":
                      i.setCentre(e, n);
                      break;
                    default:
                      e[o] = n;
                  }
            }),
              (i.setStatic = function (e, t) {
                for (var n = 0; n < e.parts.length; n++) {
                  var i = e.parts[n];
                  (i.isStatic = t),
                    t
                      ? ((i._original = {
                          restitution: i.restitution,
                          friction: i.friction,
                          mass: i.mass,
                          inertia: i.inertia,
                          density: i.density,
                          inverseMass: i.inverseMass,
                          inverseInertia: i.inverseInertia,
                        }),
                        (i.restitution = 0),
                        (i.friction = 1),
                        (i.mass = i.inertia = i.density = 1 / 0),
                        (i.inverseMass = i.inverseInertia = 0),
                        (i.positionPrev.x = i.position.x),
                        (i.positionPrev.y = i.position.y),
                        (i.anglePrev = i.angle),
                        (i.angularVelocity = 0),
                        (i.speed = 0),
                        (i.angularSpeed = 0),
                        (i.motion = 0))
                      : i._original &&
                        ((i.restitution = i._original.restitution),
                        (i.friction = i._original.friction),
                        (i.mass = i._original.mass),
                        (i.inertia = i._original.inertia),
                        (i.density = i._original.density),
                        (i.inverseMass = i._original.inverseMass),
                        (i.inverseInertia = i._original.inverseInertia),
                        (i._original = null));
                }
              }),
              (i.setMass = function (e, t) {
                var n = e.inertia / (e.mass / 6);
                (e.inertia = n * (t / 6)),
                  (e.inverseInertia = 1 / e.inertia),
                  (e.mass = t),
                  (e.inverseMass = 1 / e.mass),
                  (e.density = e.mass / e.area);
              }),
              (i.setDensity = function (e, t) {
                i.setMass(e, t * e.area), (e.density = t);
              }),
              (i.setInertia = function (e, t) {
                (e.inertia = t), (e.inverseInertia = 1 / e.inertia);
              }),
              (i.setVertices = function (e, t) {
                t[0].body === e
                  ? (e.vertices = t)
                  : (e.vertices = o.create(t, e)),
                  (e.axes = c.fromVertices(e.vertices)),
                  (e.area = o.area(e.vertices)),
                  i.setMass(e, e.density * e.area);
                var n = o.centre(e.vertices);
                o.translate(e.vertices, n, -1),
                  i.setInertia(
                    e,
                    i._inertiaScale * o.inertia(e.vertices, e.mass)
                  ),
                  o.translate(e.vertices, e.position),
                  l.update(e.bounds, e.vertices, e.velocity);
              }),
              (i.setParts = function (e, t, n) {
                var r;
                for (
                  t = t.slice(0),
                    e.parts.length = 0,
                    e.parts.push(e),
                    e.parent = e,
                    r = 0;
                  r < t.length;
                  r++
                ) {
                  var a = t[r];
                  a !== e && ((a.parent = e), e.parts.push(a));
                }
                if (1 !== e.parts.length) {
                  if ((n = void 0 === n || n)) {
                    var s = [];
                    for (r = 0; r < t.length; r++) s = s.concat(t[r].vertices);
                    o.clockwiseSort(s);
                    var l = o.hull(s),
                      c = o.centre(l);
                    i.setVertices(e, l), o.translate(e.vertices, c);
                  }
                  var u = i._totalProperties(e);
                  (e.area = u.area),
                    (e.parent = e),
                    (e.position.x = u.centre.x),
                    (e.position.y = u.centre.y),
                    (e.positionPrev.x = u.centre.x),
                    (e.positionPrev.y = u.centre.y),
                    i.setMass(e, u.mass),
                    i.setInertia(e, u.inertia),
                    i.setPosition(e, u.centre);
                }
              }),
              (i.setCentre = function (e, t, n) {
                n
                  ? ((e.positionPrev.x += t.x),
                    (e.positionPrev.y += t.y),
                    (e.position.x += t.x),
                    (e.position.y += t.y))
                  : ((e.positionPrev.x =
                      t.x - (e.position.x - e.positionPrev.x)),
                    (e.positionPrev.y =
                      t.y - (e.position.y - e.positionPrev.y)),
                    (e.position.x = t.x),
                    (e.position.y = t.y));
              }),
              (i.setPosition = function (e, t) {
                var n = r.sub(t, e.position);
                (e.positionPrev.x += n.x), (e.positionPrev.y += n.y);
                for (var i = 0; i < e.parts.length; i++) {
                  var a = e.parts[i];
                  (a.position.x += n.x),
                    (a.position.y += n.y),
                    o.translate(a.vertices, n),
                    l.update(a.bounds, a.vertices, e.velocity);
                }
              }),
              (i.setAngle = function (e, t) {
                var n = t - e.angle;
                e.anglePrev += n;
                for (var i = 0; i < e.parts.length; i++) {
                  var a = e.parts[i];
                  (a.angle += n),
                    o.rotate(a.vertices, n, e.position),
                    c.rotate(a.axes, n),
                    l.update(a.bounds, a.vertices, e.velocity),
                    i > 0 &&
                      r.rotateAbout(a.position, n, e.position, a.position);
                }
              }),
              (i.setVelocity = function (e, t) {
                (e.positionPrev.x = e.position.x - t.x),
                  (e.positionPrev.y = e.position.y - t.y),
                  (e.velocity.x = t.x),
                  (e.velocity.y = t.y),
                  (e.speed = r.magnitude(e.velocity));
              }),
              (i.setAngularVelocity = function (e, t) {
                (e.anglePrev = e.angle - t),
                  (e.angularVelocity = t),
                  (e.angularSpeed = Math.abs(e.angularVelocity));
              }),
              (i.translate = function (e, t) {
                i.setPosition(e, r.add(e.position, t));
              }),
              (i.rotate = function (e, t, n) {
                if (n) {
                  var o = Math.cos(t),
                    r = Math.sin(t),
                    a = e.position.x - n.x,
                    s = e.position.y - n.y;
                  i.setPosition(e, {
                    x: n.x + (a * o - s * r),
                    y: n.y + (a * r + s * o),
                  }),
                    i.setAngle(e, e.angle + t);
                } else i.setAngle(e, e.angle + t);
              }),
              (i.scale = function (e, t, n, r) {
                var a = 0,
                  s = 0;
                r = r || e.position;
                for (var u = 0; u < e.parts.length; u++) {
                  var d = e.parts[u];
                  o.scale(d.vertices, t, n, r),
                    (d.axes = c.fromVertices(d.vertices)),
                    (d.area = o.area(d.vertices)),
                    i.setMass(d, e.density * d.area),
                    o.translate(d.vertices, {
                      x: -d.position.x,
                      y: -d.position.y,
                    }),
                    i.setInertia(
                      d,
                      i._inertiaScale * o.inertia(d.vertices, d.mass)
                    ),
                    o.translate(d.vertices, {
                      x: d.position.x,
                      y: d.position.y,
                    }),
                    u > 0 && ((a += d.area), (s += d.inertia)),
                    (d.position.x = r.x + (d.position.x - r.x) * t),
                    (d.position.y = r.y + (d.position.y - r.y) * n),
                    l.update(d.bounds, d.vertices, e.velocity);
                }
                e.parts.length > 1 &&
                  ((e.area = a),
                  e.isStatic ||
                    (i.setMass(e, e.density * a), i.setInertia(e, s))),
                  e.circleRadius &&
                    (t === n ? (e.circleRadius *= t) : (e.circleRadius = null));
              }),
              (i.update = function (e, t, n, i) {
                var a = Math.pow(t * n * e.timeScale, 2),
                  s = 1 - e.frictionAir * n * e.timeScale,
                  u = e.position.x - e.positionPrev.x,
                  d = e.position.y - e.positionPrev.y;
                (e.velocity.x = u * s * i + (e.force.x / e.mass) * a),
                  (e.velocity.y = d * s * i + (e.force.y / e.mass) * a),
                  (e.positionPrev.x = e.position.x),
                  (e.positionPrev.y = e.position.y),
                  (e.position.x += e.velocity.x),
                  (e.position.y += e.velocity.y),
                  (e.angularVelocity =
                    (e.angle - e.anglePrev) * s * i +
                    (e.torque / e.inertia) * a),
                  (e.anglePrev = e.angle),
                  (e.angle += e.angularVelocity),
                  (e.speed = r.magnitude(e.velocity)),
                  (e.angularSpeed = Math.abs(e.angularVelocity));
                for (var p = 0; p < e.parts.length; p++) {
                  var f = e.parts[p];
                  o.translate(f.vertices, e.velocity),
                    p > 0 &&
                      ((f.position.x += e.velocity.x),
                      (f.position.y += e.velocity.y)),
                    0 !== e.angularVelocity &&
                      (o.rotate(f.vertices, e.angularVelocity, e.position),
                      c.rotate(f.axes, e.angularVelocity),
                      p > 0 &&
                        r.rotateAbout(
                          f.position,
                          e.angularVelocity,
                          e.position,
                          f.position
                        )),
                    l.update(f.bounds, f.vertices, e.velocity);
                }
              }),
              (i.applyForce = function (e, t, n) {
                (e.force.x += n.x), (e.force.y += n.y);
                var i = t.x - e.position.x,
                  o = t.y - e.position.y;
                e.torque += i * n.y - o * n.x;
              }),
              (i._totalProperties = function (e) {
                for (
                  var t = {
                      mass: 0,
                      area: 0,
                      inertia: 0,
                      centre: { x: 0, y: 0 },
                    },
                    n = 1 === e.parts.length ? 0 : 1;
                  n < e.parts.length;
                  n++
                ) {
                  var i = e.parts[n],
                    o = i.mass !== 1 / 0 ? i.mass : 1;
                  (t.mass += o),
                    (t.area += i.area),
                    (t.inertia += i.inertia),
                    (t.centre = r.add(t.centre, r.mult(i.position, o)));
                }
                return (t.centre = r.div(t.centre, t.mass)), t;
              });
          })();
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(4);
          (i._motionWakeThreshold = 0.18),
            (i._motionSleepThreshold = 0.08),
            (i._minBias = 0.9),
            (i.update = function (e, t) {
              for (var n = t * t * t, o = 0; o < e.length; o++) {
                var r = e[o],
                  a = r.speed * r.speed + r.angularSpeed * r.angularSpeed;
                if (0 === r.force.x && 0 === r.force.y) {
                  var s = Math.min(r.motion, a),
                    l = Math.max(r.motion, a);
                  (r.motion = i._minBias * s + (1 - i._minBias) * l),
                    r.sleepThreshold > 0 &&
                    r.motion < i._motionSleepThreshold * n
                      ? ((r.sleepCounter += 1),
                        r.sleepCounter >= r.sleepThreshold && i.set(r, !0))
                      : r.sleepCounter > 0 && (r.sleepCounter -= 1);
                } else i.set(r, !1);
              }
            }),
            (i.afterCollisions = function (e, t) {
              for (var n = t * t * t, o = 0; o < e.length; o++) {
                var r = e[o];
                if (r.isActive) {
                  var a = r.collision,
                    s = a.bodyA.parent,
                    l = a.bodyB.parent;
                  if (
                    !(
                      (s.isSleeping && l.isSleeping) ||
                      s.isStatic ||
                      l.isStatic
                    ) &&
                    (s.isSleeping || l.isSleeping)
                  ) {
                    var c = s.isSleeping && !s.isStatic ? s : l,
                      u = c === s ? l : s;
                    !c.isStatic &&
                      u.motion > i._motionWakeThreshold * n &&
                      i.set(c, !1);
                  }
                }
              }
            }),
            (i.set = function (e, t) {
              var n = e.isSleeping;
              t
                ? ((e.isSleeping = !0),
                  (e.sleepCounter = e.sleepThreshold),
                  (e.positionImpulse.x = 0),
                  (e.positionImpulse.y = 0),
                  (e.positionPrev.x = e.position.x),
                  (e.positionPrev.y = e.position.y),
                  (e.anglePrev = e.angle),
                  (e.speed = 0),
                  (e.angularSpeed = 0),
                  (e.motion = 0),
                  n || o.trigger(e, "sleepStart"))
                : ((e.isSleeping = !1),
                  (e.sleepCounter = 0),
                  n && o.trigger(e, "sleepEnd"));
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o,
            r,
            a,
            s = n(3),
            l = n(9);
          (o = []),
            (r = { overlap: 0, axis: null }),
            (a = { overlap: 0, axis: null }),
            (i.create = function (e, t) {
              return {
                pair: null,
                collided: !1,
                bodyA: e,
                bodyB: t,
                parentA: e.parent,
                parentB: t.parent,
                depth: 0,
                normal: { x: 0, y: 0 },
                tangent: { x: 0, y: 0 },
                penetration: { x: 0, y: 0 },
                supports: [],
              };
            }),
            (i.collides = function (e, t, n) {
              if (
                (i._overlapAxes(r, e.vertices, t.vertices, e.axes),
                r.overlap <= 0)
              )
                return null;
              if (
                (i._overlapAxes(a, t.vertices, e.vertices, t.axes),
                a.overlap <= 0)
              )
                return null;
              var o,
                c,
                u = n && n.table[l.id(e, t)];
              u
                ? (o = u.collision)
                : (((o = i.create(e, t)).collided = !0),
                  (o.bodyA = e.id < t.id ? e : t),
                  (o.bodyB = e.id < t.id ? t : e),
                  (o.parentA = o.bodyA.parent),
                  (o.parentB = o.bodyB.parent)),
                (e = o.bodyA),
                (t = o.bodyB),
                (c = r.overlap < a.overlap ? r : a);
              var d = o.normal,
                p = o.supports,
                f = c.axis,
                v = f.x,
                y = f.y;
              v * (t.position.x - e.position.x) +
                y * (t.position.y - e.position.y) <
              0
                ? ((d.x = v), (d.y = y))
                : ((d.x = -v), (d.y = -y)),
                (o.tangent.x = -d.y),
                (o.tangent.y = d.x),
                (o.depth = c.overlap),
                (o.penetration.x = d.x * o.depth),
                (o.penetration.y = d.y * o.depth);
              var m = i._findSupports(e, t, d, 1),
                g = 0;
              if (
                (s.contains(e.vertices, m[0]) && (p[g++] = m[0]),
                s.contains(e.vertices, m[1]) && (p[g++] = m[1]),
                g < 2)
              ) {
                var x = i._findSupports(t, e, d, -1);
                s.contains(t.vertices, x[0]) && (p[g++] = x[0]),
                  g < 2 && s.contains(t.vertices, x[1]) && (p[g++] = x[1]);
              }
              return 0 === g && (p[g++] = m[0]), (p.length = g), o;
            }),
            (i._overlapAxes = function (e, t, n, i) {
              var o,
                r,
                a,
                s,
                l,
                c,
                u = t.length,
                d = n.length,
                p = t[0].x,
                f = t[0].y,
                v = n[0].x,
                y = n[0].y,
                m = i.length,
                g = Number.MAX_VALUE,
                x = 0;
              for (l = 0; l < m; l++) {
                var h = i[l],
                  b = h.x,
                  S = h.y,
                  w = p * b + f * S,
                  A = v * b + y * S,
                  P = w,
                  C = A;
                for (c = 1; c < u; c += 1)
                  (s = t[c].x * b + t[c].y * S) > P
                    ? (P = s)
                    : s < w && (w = s);
                for (c = 1; c < d; c += 1)
                  (s = n[c].x * b + n[c].y * S) > C
                    ? (C = s)
                    : s < A && (A = s);
                if (
                  (o = (r = P - A) < (a = C - w) ? r : a) < g &&
                  ((g = o), (x = l), o <= 0)
                )
                  break;
              }
              (e.axis = i[x]), (e.overlap = g);
            }),
            (i._projectToAxis = function (e, t, n) {
              for (
                var i = t[0].x * n.x + t[0].y * n.y, o = i, r = 1;
                r < t.length;
                r += 1
              ) {
                var a = t[r].x * n.x + t[r].y * n.y;
                a > o ? (o = a) : a < i && (i = a);
              }
              (e.min = i), (e.max = o);
            }),
            (i._findSupports = function (e, t, n, i) {
              var r,
                a,
                s,
                l,
                c,
                u = t.vertices,
                d = u.length,
                p = e.position.x,
                f = e.position.y,
                v = n.x * i,
                y = n.y * i,
                m = Number.MAX_VALUE;
              for (c = 0; c < d; c += 1)
                (l = v * (p - (a = u[c]).x) + y * (f - a.y)) < m &&
                  ((m = l), (r = a));
              return (
                (m =
                  v * (p - (s = u[(d + r.index - 1) % d]).x) + y * (f - s.y)),
                v * (p - (a = u[(r.index + 1) % d]).x) + y * (f - a.y) < m
                  ? ((o[0] = r), (o[1] = a), o)
                  : ((o[0] = r), (o[1] = s), o)
              );
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(17);
          (i.create = function (e, t) {
            var n = e.bodyA,
              o = e.bodyB,
              r = {
                id: i.id(n, o),
                bodyA: n,
                bodyB: o,
                collision: e,
                contacts: [],
                activeContacts: [],
                separation: 0,
                isActive: !0,
                confirmedActive: !0,
                isSensor: n.isSensor || o.isSensor,
                timeCreated: t,
                timeUpdated: t,
                inverseMass: 0,
                friction: 0,
                frictionStatic: 0,
                restitution: 0,
                slop: 0,
              };
            return i.update(r, e, t), r;
          }),
            (i.update = function (e, t, n) {
              var i = e.contacts,
                r = t.supports,
                a = e.activeContacts,
                s = t.parentA,
                l = t.parentB,
                c = s.vertices.length;
              (e.isActive = !0),
                (e.timeUpdated = n),
                (e.collision = t),
                (e.separation = t.depth),
                (e.inverseMass = s.inverseMass + l.inverseMass),
                (e.friction =
                  s.friction < l.friction ? s.friction : l.friction),
                (e.frictionStatic =
                  s.frictionStatic > l.frictionStatic
                    ? s.frictionStatic
                    : l.frictionStatic),
                (e.restitution =
                  s.restitution > l.restitution
                    ? s.restitution
                    : l.restitution),
                (e.slop = s.slop > l.slop ? s.slop : l.slop),
                (t.pair = e),
                (a.length = 0);
              for (var u = 0; u < r.length; u++) {
                var d = r[u],
                  p = d.body === s ? d.index : c + d.index,
                  f = i[p];
                f ? a.push(f) : a.push((i[p] = o.create(d)));
              }
            }),
            (i.setActive = function (e, t, n) {
              t
                ? ((e.isActive = !0), (e.timeUpdated = n))
                : ((e.isActive = !1), (e.activeContacts.length = 0));
            }),
            (i.id = function (e, t) {
              return e.id < t.id
                ? "A" + e.id + "B" + t.id
                : "A" + t.id + "B" + e.id;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(2),
            a = n(7),
            s = n(1),
            l = n(11),
            c = n(0);
          (i._warming = 0.4),
            (i._torqueDampen = 1),
            (i._minLength = 1e-6),
            (i.create = function (e) {
              var t = e;
              t.bodyA && !t.pointA && (t.pointA = { x: 0, y: 0 }),
                t.bodyB && !t.pointB && (t.pointB = { x: 0, y: 0 });
              var n = t.bodyA ? r.add(t.bodyA.position, t.pointA) : t.pointA,
                i = t.bodyB ? r.add(t.bodyB.position, t.pointB) : t.pointB,
                o = r.magnitude(r.sub(n, i));
              (t.length = void 0 !== t.length ? t.length : o),
                (t.id = t.id || c.nextId()),
                (t.label = t.label || "Constraint"),
                (t.type = "constraint"),
                (t.stiffness = t.stiffness || (t.length > 0 ? 1 : 0.7)),
                (t.damping = t.damping || 0),
                (t.angularStiffness = t.angularStiffness || 0),
                (t.angleA = t.bodyA ? t.bodyA.angle : t.angleA),
                (t.angleB = t.bodyB ? t.bodyB.angle : t.angleB),
                (t.plugin = {});
              var a = {
                visible: !0,
                lineWidth: 2,
                strokeStyle: "#ffffff",
                type: "line",
                anchors: !0,
              };
              return (
                0 === t.length && t.stiffness > 0.1
                  ? ((a.type = "pin"), (a.anchors = !1))
                  : t.stiffness < 0.9 && (a.type = "spring"),
                (t.render = c.extend(a, t.render)),
                t
              );
            }),
            (i.preSolveAll = function (e) {
              for (var t = 0; t < e.length; t += 1) {
                var n = e[t],
                  i = n.constraintImpulse;
                n.isStatic ||
                  (0 === i.x && 0 === i.y && 0 === i.angle) ||
                  ((n.position.x += i.x),
                  (n.position.y += i.y),
                  (n.angle += i.angle));
              }
            }),
            (i.solveAll = function (e, t) {
              for (var n = 0; n < e.length; n += 1) {
                var o = e[n],
                  r = !o.bodyA || (o.bodyA && o.bodyA.isStatic),
                  a = !o.bodyB || (o.bodyB && o.bodyB.isStatic);
                (r || a) && i.solve(e[n], t);
              }
              for (n = 0; n < e.length; n += 1)
                (r = !(o = e[n]).bodyA || (o.bodyA && o.bodyA.isStatic)),
                  (a = !o.bodyB || (o.bodyB && o.bodyB.isStatic)),
                  r || a || i.solve(e[n], t);
            }),
            (i.solve = function (e, t) {
              var n = e.bodyA,
                o = e.bodyB,
                a = e.pointA,
                s = e.pointB;
              if (n || o) {
                n &&
                  !n.isStatic &&
                  (r.rotate(a, n.angle - e.angleA, a), (e.angleA = n.angle)),
                  o &&
                    !o.isStatic &&
                    (r.rotate(s, o.angle - e.angleB, s), (e.angleB = o.angle));
                var l = a,
                  c = s;
                if (
                  (n && (l = r.add(n.position, a)),
                  o && (c = r.add(o.position, s)),
                  l && c)
                ) {
                  var u = r.sub(l, c),
                    d = r.magnitude(u);
                  d < i._minLength && (d = i._minLength);
                  var p,
                    f,
                    v,
                    y,
                    m,
                    g = (d - e.length) / d,
                    x = e.stiffness < 1 ? e.stiffness * t : e.stiffness,
                    h = r.mult(u, g * x),
                    b = (n ? n.inverseMass : 0) + (o ? o.inverseMass : 0),
                    S =
                      b +
                      ((n ? n.inverseInertia : 0) + (o ? o.inverseInertia : 0));
                  if (e.damping) {
                    var w = r.create();
                    (v = r.div(u, d)),
                      (m = r.sub(
                        (o && r.sub(o.position, o.positionPrev)) || w,
                        (n && r.sub(n.position, n.positionPrev)) || w
                      )),
                      (y = r.dot(v, m));
                  }
                  n &&
                    !n.isStatic &&
                    ((f = n.inverseMass / b),
                    (n.constraintImpulse.x -= h.x * f),
                    (n.constraintImpulse.y -= h.y * f),
                    (n.position.x -= h.x * f),
                    (n.position.y -= h.y * f),
                    e.damping &&
                      ((n.positionPrev.x -= e.damping * v.x * y * f),
                      (n.positionPrev.y -= e.damping * v.y * y * f)),
                    (p =
                      (r.cross(a, h) / S) *
                      i._torqueDampen *
                      n.inverseInertia *
                      (1 - e.angularStiffness)),
                    (n.constraintImpulse.angle -= p),
                    (n.angle -= p)),
                    o &&
                      !o.isStatic &&
                      ((f = o.inverseMass / b),
                      (o.constraintImpulse.x += h.x * f),
                      (o.constraintImpulse.y += h.y * f),
                      (o.position.x += h.x * f),
                      (o.position.y += h.y * f),
                      e.damping &&
                        ((o.positionPrev.x += e.damping * v.x * y * f),
                        (o.positionPrev.y += e.damping * v.y * y * f)),
                      (p =
                        (r.cross(s, h) / S) *
                        i._torqueDampen *
                        o.inverseInertia *
                        (1 - e.angularStiffness)),
                      (o.constraintImpulse.angle += p),
                      (o.angle += p));
                }
              }
            }),
            (i.postSolveAll = function (e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t],
                  c = n.constraintImpulse;
                if (
                  !(n.isStatic || (0 === c.x && 0 === c.y && 0 === c.angle))
                ) {
                  a.set(n, !1);
                  for (var u = 0; u < n.parts.length; u++) {
                    var d = n.parts[u];
                    o.translate(d.vertices, c),
                      u > 0 && ((d.position.x += c.x), (d.position.y += c.y)),
                      0 !== c.angle &&
                        (o.rotate(d.vertices, c.angle, n.position),
                        l.rotate(d.axes, c.angle),
                        u > 0 &&
                          r.rotateAbout(
                            d.position,
                            c.angle,
                            n.position,
                            d.position
                          )),
                      s.update(d.bounds, d.vertices, n.velocity);
                  }
                  (c.angle *= i._warming),
                    (c.x *= i._warming),
                    (c.y *= i._warming);
                }
              }
            }),
            (i.pointAWorld = function (e) {
              return {
                x: (e.bodyA ? e.bodyA.position.x : 0) + e.pointA.x,
                y: (e.bodyA ? e.bodyA.position.y : 0) + e.pointA.y,
              };
            }),
            (i.pointBWorld = function (e) {
              return {
                x: (e.bodyB ? e.bodyB.position.x : 0) + e.pointB.x,
                y: (e.bodyB ? e.bodyB.position.y : 0) + e.pointB.y,
              };
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(2),
            r = n(0);
          (i.fromVertices = function (e) {
            for (var t = {}, n = 0; n < e.length; n++) {
              var i = (n + 1) % e.length,
                a = o.normalise({ x: e[i].y - e[n].y, y: e[n].x - e[i].x }),
                s = 0 === a.y ? 1 / 0 : a.x / a.y;
              t[(s = s.toFixed(3).toString())] = a;
            }
            return r.values(t);
          }),
            (i.rotate = function (e, t) {
              if (0 !== t)
                for (
                  var n = Math.cos(t), i = Math.sin(t), o = 0;
                  o < e.length;
                  o++
                ) {
                  var r,
                    a = e[o];
                  (r = a.x * n - a.y * i), (a.y = a.x * i + a.y * n), (a.x = r);
                }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(0),
            a = n(6),
            s = n(1),
            l = n(2);
          (i.rectangle = function (e, t, n, i, s) {
            s = s || {};
            var l = {
              label: "Rectangle Body",
              position: { x: e, y: t },
              vertices: o.fromPath(
                "L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i
              ),
            };
            if (s.chamfer) {
              var c = s.chamfer;
              (l.vertices = o.chamfer(
                l.vertices,
                c.radius,
                c.quality,
                c.qualityMin,
                c.qualityMax
              )),
                delete s.chamfer;
            }
            return a.create(r.extend({}, l, s));
          }),
            (i.trapezoid = function (e, t, n, i, s, l) {
              l = l || {};
              var c,
                u = n * (s *= 0.5),
                d = u + (1 - 2 * s) * n,
                p = d + u;
              c =
                s < 0.5
                  ? "L 0 0 L " +
                    u +
                    " " +
                    -i +
                    " L " +
                    d +
                    " " +
                    -i +
                    " L " +
                    p +
                    " 0"
                  : "L 0 0 L " + d + " " + -i + " L " + p + " 0";
              var f = {
                label: "Trapezoid Body",
                position: { x: e, y: t },
                vertices: o.fromPath(c),
              };
              if (l.chamfer) {
                var v = l.chamfer;
                (f.vertices = o.chamfer(
                  f.vertices,
                  v.radius,
                  v.quality,
                  v.qualityMin,
                  v.qualityMax
                )),
                  delete l.chamfer;
              }
              return a.create(r.extend({}, f, l));
            }),
            (i.circle = function (e, t, n, o, a) {
              o = o || {};
              var s = { label: "Circle Body", circleRadius: n };
              a = a || 25;
              var l = Math.ceil(Math.max(10, Math.min(a, n)));
              return (
                l % 2 == 1 && (l += 1),
                i.polygon(e, t, l, n, r.extend({}, s, o))
              );
            }),
            (i.polygon = function (e, t, n, s, l) {
              if (((l = l || {}), n < 3)) return i.circle(e, t, s, l);
              for (
                var c = (2 * Math.PI) / n, u = "", d = 0.5 * c, p = 0;
                p < n;
                p += 1
              ) {
                var f = d + p * c,
                  v = Math.cos(f) * s,
                  y = Math.sin(f) * s;
                u += "L " + v.toFixed(3) + " " + y.toFixed(3) + " ";
              }
              var m = {
                label: "Polygon Body",
                position: { x: e, y: t },
                vertices: o.fromPath(u),
              };
              if (l.chamfer) {
                var g = l.chamfer;
                (m.vertices = o.chamfer(
                  m.vertices,
                  g.radius,
                  g.quality,
                  g.qualityMin,
                  g.qualityMax
                )),
                  delete l.chamfer;
              }
              return a.create(r.extend({}, m, l));
            }),
            (i.fromVertices = function (e, t, n, i, c, u, d, p) {
              var f,
                v,
                y,
                m,
                g,
                x,
                h,
                b,
                S,
                w,
                A = r.getDecomp();
              for (
                f = Boolean(A && A.quickDecomp),
                  i = i || {},
                  y = [],
                  c = void 0 !== c && c,
                  u = void 0 !== u ? u : 0.01,
                  d = void 0 !== d ? d : 10,
                  p = void 0 !== p ? p : 0.01,
                  r.isArray(n[0]) || (n = [n]),
                  S = 0;
                S < n.length;
                S += 1
              )
                if (
                  ((g = n[S]),
                  !(m = o.isConvex(g)) &&
                    !f &&
                    r.warnOnce(
                      "Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."
                    ),
                  m || !f)
                )
                  (g = m ? o.clockwiseSort(g) : o.hull(g)),
                    y.push({ position: { x: e, y: t }, vertices: g });
                else {
                  var P = g.map(function (e) {
                    return [e.x, e.y];
                  });
                  A.makeCCW(P),
                    !1 !== u && A.removeCollinearPoints(P, u),
                    !1 !== p &&
                      A.removeDuplicatePoints &&
                      A.removeDuplicatePoints(P, p);
                  var C = A.quickDecomp(P);
                  for (x = 0; x < C.length; x++) {
                    var M = C[x].map(function (e) {
                      return { x: e[0], y: e[1] };
                    });
                    (d > 0 && o.area(M) < d) ||
                      y.push({ position: o.centre(M), vertices: M });
                  }
                }
              for (x = 0; x < y.length; x++) y[x] = a.create(r.extend(y[x], i));
              if (c)
                for (x = 0; x < y.length; x++) {
                  var B = y[x];
                  for (h = x + 1; h < y.length; h++) {
                    var k = y[h];
                    if (s.overlaps(B.bounds, k.bounds)) {
                      var _ = B.vertices,
                        I = k.vertices;
                      for (b = 0; b < B.vertices.length; b++)
                        for (w = 0; w < k.vertices.length; w++) {
                          var T = l.magnitudeSquared(
                              l.sub(_[(b + 1) % _.length], I[w])
                            ),
                            R = l.magnitudeSquared(
                              l.sub(_[b], I[(w + 1) % I.length])
                            );
                          T < 5 &&
                            R < 5 &&
                            ((_[b].isInternal = !0), (I[w].isInternal = !0));
                        }
                    }
                  }
                }
              return y.length > 1
                ? ((v = a.create(r.extend({ parts: y.slice(0) }, i))),
                  a.setPosition(v, { x: e, y: t }),
                  v)
                : y[0];
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0);
          (i.create = function (e) {
            var t = {};
            return (
              e ||
                o.log(
                  "Mouse.create: element was undefined, defaulting to document.body",
                  "warn"
                ),
              (t.element = e || document.body),
              (t.absolute = { x: 0, y: 0 }),
              (t.position = { x: 0, y: 0 }),
              (t.mousedownPosition = { x: 0, y: 0 }),
              (t.mouseupPosition = { x: 0, y: 0 }),
              (t.offset = { x: 0, y: 0 }),
              (t.scale = { x: 1, y: 1 }),
              (t.wheelDelta = 0),
              (t.button = -1),
              (t.pixelRatio =
                parseInt(t.element.getAttribute("data-pixel-ratio"), 10) || 1),
              (t.sourceEvents = {
                mousemove: null,
                mousedown: null,
                mouseup: null,
                mousewheel: null,
              }),
              (t.mousemove = function (e) {
                var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                e.changedTouches && ((t.button = 0), e.preventDefault()),
                  (t.absolute.x = n.x),
                  (t.absolute.y = n.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                  (t.sourceEvents.mousemove = e);
              }),
              (t.mousedown = function (e) {
                var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                e.changedTouches
                  ? ((t.button = 0), e.preventDefault())
                  : (t.button = e.button),
                  (t.absolute.x = n.x),
                  (t.absolute.y = n.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                  (t.mousedownPosition.x = t.position.x),
                  (t.mousedownPosition.y = t.position.y),
                  (t.sourceEvents.mousedown = e);
              }),
              (t.mouseup = function (e) {
                var n = i._getRelativeMousePosition(e, t.element, t.pixelRatio);
                e.changedTouches && e.preventDefault(),
                  (t.button = -1),
                  (t.absolute.x = n.x),
                  (t.absolute.y = n.y),
                  (t.position.x = t.absolute.x * t.scale.x + t.offset.x),
                  (t.position.y = t.absolute.y * t.scale.y + t.offset.y),
                  (t.mouseupPosition.x = t.position.x),
                  (t.mouseupPosition.y = t.position.y),
                  (t.sourceEvents.mouseup = e);
              }),
              (t.mousewheel = function (e) {
                (t.wheelDelta = Math.max(
                  -1,
                  Math.min(1, e.wheelDelta || -e.detail)
                )),
                  e.preventDefault();
              }),
              i.setElement(t, t.element),
              t
            );
          }),
            (i.setElement = function (e, t) {
              (e.element = t),
                t.addEventListener("mousemove", e.mousemove),
                t.addEventListener("mousedown", e.mousedown),
                t.addEventListener("mouseup", e.mouseup),
                t.addEventListener("mousewheel", e.mousewheel),
                t.addEventListener("DOMMouseScroll", e.mousewheel),
                t.addEventListener("touchmove", e.mousemove),
                t.addEventListener("touchstart", e.mousedown),
                t.addEventListener("touchend", e.mouseup);
            }),
            (i.clearSourceEvents = function (e) {
              (e.sourceEvents.mousemove = null),
                (e.sourceEvents.mousedown = null),
                (e.sourceEvents.mouseup = null),
                (e.sourceEvents.mousewheel = null),
                (e.wheelDelta = 0);
            }),
            (i.setOffset = function (e, t) {
              (e.offset.x = t.x),
                (e.offset.y = t.y),
                (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
            }),
            (i.setScale = function (e, t) {
              (e.scale.x = t.x),
                (e.scale.y = t.y),
                (e.position.x = e.absolute.x * e.scale.x + e.offset.x),
                (e.position.y = e.absolute.y * e.scale.y + e.offset.y);
            }),
            (i._getRelativeMousePosition = function (e, t, n) {
              var i,
                o,
                r = t.getBoundingClientRect(),
                a =
                  document.documentElement ||
                  document.body.parentNode ||
                  document.body,
                s =
                  void 0 !== window.pageXOffset
                    ? window.pageXOffset
                    : a.scrollLeft,
                l =
                  void 0 !== window.pageYOffset
                    ? window.pageYOffset
                    : a.scrollTop,
                c = e.changedTouches;
              return (
                c
                  ? ((i = c[0].pageX - r.left - s),
                    (o = c[0].pageY - r.top - l))
                  : ((i = e.pageX - r.left - s), (o = e.pageY - r.top - l)),
                {
                  x: i / ((t.clientWidth / (t.width || t.clientWidth)) * n),
                  y: o / ((t.clientHeight / (t.height || t.clientHeight)) * n),
                }
              );
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0),
            r = n(8);
          (i.create = function (e) {
            return o.extend({ bodies: [], pairs: null }, e);
          }),
            (i.setBodies = function (e, t) {
              e.bodies = t.slice(0);
            }),
            (i.clear = function (e) {
              e.bodies = [];
            }),
            (i.collisions = function (e) {
              var t,
                n,
                o = [],
                a = e.pairs,
                s = e.bodies,
                l = s.length,
                c = i.canCollide,
                u = r.collides;
              for (s.sort(i._compareBoundsX), t = 0; t < l; t++) {
                var d = s[t],
                  p = d.bounds,
                  f = d.bounds.max.x,
                  v = d.bounds.max.y,
                  y = d.bounds.min.y,
                  m = d.isStatic || d.isSleeping,
                  g = d.parts.length,
                  x = 1 === g;
                for (n = t + 1; n < l; n++) {
                  var h = s[n];
                  if ((B = h.bounds).min.x > f) break;
                  if (
                    !(v < B.min.y || y > B.max.y) &&
                    (!m || (!h.isStatic && !h.isSleeping)) &&
                    c(d.collisionFilter, h.collisionFilter)
                  ) {
                    var b = h.parts.length;
                    if (x && 1 === b) (C = u(d, h, a)) && o.push(C);
                    else
                      for (var S = b > 1 ? 1 : 0, w = g > 1 ? 1 : 0; w < g; w++)
                        for (
                          var A = d.parts[w], P = ((p = A.bounds), S);
                          P < b;
                          P++
                        ) {
                          var C,
                            M = h.parts[P],
                            B = M.bounds;
                          p.min.x > B.max.x ||
                            p.max.x < B.min.x ||
                            p.max.y < B.min.y ||
                            p.min.y > B.max.y ||
                            ((C = u(A, M, a)) && o.push(C));
                        }
                  }
                }
              }
              return o;
            }),
            (i.canCollide = function (e, t) {
              return e.group === t.group && 0 !== e.group
                ? e.group > 0
                : 0 != (e.mask & t.category) && 0 != (t.mask & e.category);
            }),
            (i._compareBoundsX = function (e, t) {
              return e.bounds.min.x - t.bounds.min.x;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0);
          (i._registry = {}),
            (i.register = function (e) {
              if (
                (i.isPlugin(e) ||
                  o.warn(
                    "Plugin.register:",
                    i.toString(e),
                    "does not implement all required fields."
                  ),
                e.name in i._registry)
              ) {
                var t = i._registry[e.name],
                  n = i.versionParse(e.version).number,
                  r = i.versionParse(t.version).number;
                n > r
                  ? (o.warn(
                      "Plugin.register:",
                      i.toString(t),
                      "was upgraded to",
                      i.toString(e)
                    ),
                    (i._registry[e.name] = e))
                  : n < r
                  ? o.warn(
                      "Plugin.register:",
                      i.toString(t),
                      "can not be downgraded to",
                      i.toString(e)
                    )
                  : e !== t &&
                    o.warn(
                      "Plugin.register:",
                      i.toString(e),
                      "is already registered to different plugin object"
                    );
              } else i._registry[e.name] = e;
              return e;
            }),
            (i.resolve = function (e) {
              return i._registry[i.dependencyParse(e).name];
            }),
            (i.toString = function (e) {
              return "string" == typeof e
                ? e
                : (e.name || "anonymous") +
                    "@" +
                    (e.version || e.range || "0.0.0");
            }),
            (i.isPlugin = function (e) {
              return e && e.name && e.version && e.install;
            }),
            (i.isUsed = function (e, t) {
              return e.used.indexOf(t) > -1;
            }),
            (i.isFor = function (e, t) {
              var n = e.for && i.dependencyParse(e.for);
              return (
                !e.for ||
                (t.name === n.name && i.versionSatisfies(t.version, n.range))
              );
            }),
            (i.use = function (e, t) {
              if (
                ((e.uses = (e.uses || []).concat(t || [])), 0 !== e.uses.length)
              ) {
                for (
                  var n = i.dependencies(e),
                    r = o.topologicalSort(n),
                    a = [],
                    s = 0;
                  s < r.length;
                  s += 1
                )
                  if (r[s] !== e.name) {
                    var l = i.resolve(r[s]);
                    l
                      ? i.isUsed(e, l.name) ||
                        (i.isFor(l, e) ||
                          (o.warn(
                            "Plugin.use:",
                            i.toString(l),
                            "is for",
                            l.for,
                            "but installed on",
                            i.toString(e) + "."
                          ),
                          (l._warned = !0)),
                        l.install
                          ? l.install(e)
                          : (o.warn(
                              "Plugin.use:",
                              i.toString(l),
                              "does not specify an install function."
                            ),
                            (l._warned = !0)),
                        l._warned
                          ? (a.push("🔶 " + i.toString(l)), delete l._warned)
                          : a.push("✅ " + i.toString(l)),
                        e.used.push(l.name))
                      : a.push("❌ " + r[s]);
                  }
                a.length > 0 && o.info(a.join("  "));
              } else
                o.warn(
                  "Plugin.use:",
                  i.toString(e),
                  "does not specify any dependencies to install."
                );
            }),
            (i.dependencies = function (e, t) {
              var n = i.dependencyParse(e),
                r = n.name;
              if (!(r in (t = t || {}))) {
                (e = i.resolve(e) || e),
                  (t[r] = o.map(e.uses || [], function (t) {
                    i.isPlugin(t) && i.register(t);
                    var r = i.dependencyParse(t),
                      a = i.resolve(t);
                    return (
                      a && !i.versionSatisfies(a.version, r.range)
                        ? (o.warn(
                            "Plugin.dependencies:",
                            i.toString(a),
                            "does not satisfy",
                            i.toString(r),
                            "used by",
                            i.toString(n) + "."
                          ),
                          (a._warned = !0),
                          (e._warned = !0))
                        : a ||
                          (o.warn(
                            "Plugin.dependencies:",
                            i.toString(t),
                            "used by",
                            i.toString(n),
                            "could not be resolved."
                          ),
                          (e._warned = !0)),
                      r.name
                    );
                  }));
                for (var a = 0; a < t[r].length; a += 1)
                  i.dependencies(t[r][a], t);
                return t;
              }
            }),
            (i.dependencyParse = function (e) {
              return o.isString(e)
                ? (/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/.test(
                    e
                  ) ||
                    o.warn(
                      "Plugin.dependencyParse:",
                      e,
                      "is not a valid dependency string."
                    ),
                  { name: e.split("@")[0], range: e.split("@")[1] || "*" })
                : { name: e.name, range: e.range || e.version };
            }),
            (i.versionParse = function (e) {
              var t =
                /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;
              t.test(e) ||
                o.warn(
                  "Plugin.versionParse:",
                  e,
                  "is not a valid version or range."
                );
              var n = t.exec(e),
                i = Number(n[4]),
                r = Number(n[5]),
                a = Number(n[6]);
              return {
                isRange: Boolean(n[1] || n[2]),
                version: n[3],
                range: e,
                operator: n[1] || n[2] || "",
                major: i,
                minor: r,
                patch: a,
                parts: [i, r, a],
                prerelease: n[7],
                number: 1e8 * i + 1e4 * r + a,
              };
            }),
            (i.versionSatisfies = function (e, t) {
              t = t || "*";
              var n = i.versionParse(t),
                o = i.versionParse(e);
              if (n.isRange) {
                if ("*" === n.operator || "*" === e) return !0;
                if (">" === n.operator) return o.number > n.number;
                if (">=" === n.operator) return o.number >= n.number;
                if ("~" === n.operator)
                  return (
                    o.major === n.major &&
                    o.minor === n.minor &&
                    o.patch >= n.patch
                  );
                if ("^" === n.operator)
                  return n.major > 0
                    ? o.major === n.major && o.number >= n.number
                    : n.minor > 0
                    ? o.minor === n.minor && o.patch >= n.patch
                    : o.patch === n.patch;
              }
              return e === t || "*" === e;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(0),
            r = n(5),
            a = n(1),
            s = n(4),
            l = n(2),
            c = n(13);
          !(function () {
            var e, t;
            "undefined" != typeof window &&
              ((e =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (e) {
                  window.setTimeout(function () {
                    e(o.now());
                  }, 1e3 / 60);
                }),
              (t =
                window.cancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.msCancelAnimationFrame)),
              (i._goodFps = 30),
              (i._goodDelta = 1e3 / 60),
              (i.create = function (e) {
                var t = {
                    controller: i,
                    engine: null,
                    element: null,
                    canvas: null,
                    mouse: null,
                    frameRequestId: null,
                    timing: {
                      historySize: 60,
                      delta: 0,
                      deltaHistory: [],
                      lastTime: 0,
                      lastTimestamp: 0,
                      lastElapsed: 0,
                      timestampElapsed: 0,
                      timestampElapsedHistory: [],
                      engineDeltaHistory: [],
                      engineElapsedHistory: [],
                      elapsedHistory: [],
                    },
                    options: {
                      width: 800,
                      height: 600,
                      pixelRatio: 1,
                      background: "#14151f",
                      wireframeBackground: "#14151f",
                      hasBounds: !!e.bounds,
                      enabled: !0,
                      wireframes: !0,
                      showSleeping: !0,
                      showDebug: !1,
                      showStats: !1,
                      showPerformance: !1,
                      showBounds: !1,
                      showVelocity: !1,
                      showCollisions: !1,
                      showSeparations: !1,
                      showAxes: !1,
                      showPositions: !1,
                      showAngleIndicator: !1,
                      showIds: !1,
                      showVertexNumbers: !1,
                      showConvexHulls: !1,
                      showInternalEdges: !1,
                      showMousePosition: !1,
                    },
                  },
                  n = o.extend(t, e);
                return (
                  n.canvas &&
                    ((n.canvas.width = n.options.width || n.canvas.width),
                    (n.canvas.height = n.options.height || n.canvas.height)),
                  (n.mouse = e.mouse),
                  (n.engine = e.engine),
                  (n.canvas = n.canvas || d(n.options.width, n.options.height)),
                  (n.context = n.canvas.getContext("2d")),
                  (n.textures = {}),
                  (n.bounds = n.bounds || {
                    min: { x: 0, y: 0 },
                    max: { x: n.canvas.width, y: n.canvas.height },
                  }),
                  (n.options.showBroadphase = !1),
                  1 !== n.options.pixelRatio &&
                    i.setPixelRatio(n, n.options.pixelRatio),
                  o.isElement(n.element)
                    ? n.element.appendChild(n.canvas)
                    : n.canvas.parentNode ||
                      o.log(
                        "Render.create: options.element was undefined, render.canvas was created but not appended",
                        "warn"
                      ),
                  n
                );
              }),
              (i.run = function (t) {
                !(function o(r) {
                  (t.frameRequestId = e(o)),
                    n(t, r),
                    i.world(t, r),
                    (t.options.showStats || t.options.showDebug) &&
                      i.stats(t, t.context, r),
                    (t.options.showPerformance || t.options.showDebug) &&
                      i.performance(t, t.context, r);
                })();
              }),
              (i.stop = function (e) {
                t(e.frameRequestId);
              }),
              (i.setPixelRatio = function (e, t) {
                var n = e.options,
                  i = e.canvas;
                "auto" === t && (t = p(i)),
                  (n.pixelRatio = t),
                  i.setAttribute("data-pixel-ratio", t),
                  (i.width = n.width * t),
                  (i.height = n.height * t),
                  (i.style.width = n.width + "px"),
                  (i.style.height = n.height + "px");
              }),
              (i.lookAt = function (e, t, n, i) {
                (i = void 0 === i || i),
                  (t = o.isArray(t) ? t : [t]),
                  (n = n || { x: 0, y: 0 });
                for (
                  var r = {
                      min: { x: 1 / 0, y: 1 / 0 },
                      max: { x: -1 / 0, y: -1 / 0 },
                    },
                    a = 0;
                  a < t.length;
                  a += 1
                ) {
                  var s = t[a],
                    l = s.bounds ? s.bounds.min : s.min || s.position || s,
                    u = s.bounds ? s.bounds.max : s.max || s.position || s;
                  l &&
                    u &&
                    (l.x < r.min.x && (r.min.x = l.x),
                    u.x > r.max.x && (r.max.x = u.x),
                    l.y < r.min.y && (r.min.y = l.y),
                    u.y > r.max.y && (r.max.y = u.y));
                }
                var d = r.max.x - r.min.x + 2 * n.x,
                  p = r.max.y - r.min.y + 2 * n.y,
                  f = e.canvas.height,
                  v = e.canvas.width / f,
                  y = d / p,
                  m = 1,
                  g = 1;
                y > v ? (g = y / v) : (m = v / y),
                  (e.options.hasBounds = !0),
                  (e.bounds.min.x = r.min.x),
                  (e.bounds.max.x = r.min.x + d * m),
                  (e.bounds.min.y = r.min.y),
                  (e.bounds.max.y = r.min.y + p * g),
                  i &&
                    ((e.bounds.min.x += 0.5 * d - d * m * 0.5),
                    (e.bounds.max.x += 0.5 * d - d * m * 0.5),
                    (e.bounds.min.y += 0.5 * p - p * g * 0.5),
                    (e.bounds.max.y += 0.5 * p - p * g * 0.5)),
                  (e.bounds.min.x -= n.x),
                  (e.bounds.max.x -= n.x),
                  (e.bounds.min.y -= n.y),
                  (e.bounds.max.y -= n.y),
                  e.mouse &&
                    (c.setScale(e.mouse, {
                      x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                      y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height,
                    }),
                    c.setOffset(e.mouse, e.bounds.min));
              }),
              (i.startViewTransform = function (e) {
                var t = e.bounds.max.x - e.bounds.min.x,
                  n = e.bounds.max.y - e.bounds.min.y,
                  i = t / e.options.width,
                  o = n / e.options.height;
                e.context.setTransform(
                  e.options.pixelRatio / i,
                  0,
                  0,
                  e.options.pixelRatio / o,
                  0,
                  0
                ),
                  e.context.translate(-e.bounds.min.x, -e.bounds.min.y);
              }),
              (i.endViewTransform = function (e) {
                e.context.setTransform(
                  e.options.pixelRatio,
                  0,
                  0,
                  e.options.pixelRatio,
                  0,
                  0
                );
              }),
              (i.world = function (e, t) {
                var n,
                  u = o.now(),
                  d = e.engine,
                  p = d.world,
                  f = e.canvas,
                  y = e.context,
                  m = e.options,
                  g = e.timing,
                  x = r.allBodies(p),
                  h = r.allConstraints(p),
                  b = m.wireframes ? m.wireframeBackground : m.background,
                  S = [],
                  w = [],
                  A = { timestamp: d.timing.timestamp };
                if (
                  (s.trigger(e, "beforeRender", A),
                  e.currentBackground !== b && v(e, b),
                  (y.globalCompositeOperation = "source-in"),
                  (y.fillStyle = "transparent"),
                  y.fillRect(0, 0, f.width, f.height),
                  (y.globalCompositeOperation = "source-over"),
                  m.hasBounds)
                ) {
                  for (n = 0; n < x.length; n++) {
                    var P = x[n];
                    a.overlaps(P.bounds, e.bounds) && S.push(P);
                  }
                  for (n = 0; n < h.length; n++) {
                    var C = h[n],
                      M = C.bodyA,
                      B = C.bodyB,
                      k = C.pointA,
                      _ = C.pointB;
                    M && (k = l.add(M.position, C.pointA)),
                      B && (_ = l.add(B.position, C.pointB)),
                      k &&
                        _ &&
                        (a.contains(e.bounds, k) || a.contains(e.bounds, _)) &&
                        w.push(C);
                  }
                  i.startViewTransform(e),
                    e.mouse &&
                      (c.setScale(e.mouse, {
                        x: (e.bounds.max.x - e.bounds.min.x) / e.options.width,
                        y: (e.bounds.max.y - e.bounds.min.y) / e.options.height,
                      }),
                      c.setOffset(e.mouse, e.bounds.min));
                } else
                  (w = h),
                    (S = x),
                    1 !== e.options.pixelRatio &&
                      e.context.setTransform(
                        e.options.pixelRatio,
                        0,
                        0,
                        e.options.pixelRatio,
                        0,
                        0
                      );
                !m.wireframes || (d.enableSleeping && m.showSleeping)
                  ? i.bodies(e, S, y)
                  : (m.showConvexHulls && i.bodyConvexHulls(e, S, y),
                    i.bodyWireframes(e, S, y)),
                  m.showBounds && i.bodyBounds(e, S, y),
                  (m.showAxes || m.showAngleIndicator) && i.bodyAxes(e, S, y),
                  m.showPositions && i.bodyPositions(e, S, y),
                  m.showVelocity && i.bodyVelocity(e, S, y),
                  m.showIds && i.bodyIds(e, S, y),
                  m.showSeparations && i.separations(e, d.pairs.list, y),
                  m.showCollisions && i.collisions(e, d.pairs.list, y),
                  m.showVertexNumbers && i.vertexNumbers(e, S, y),
                  m.showMousePosition && i.mousePosition(e, e.mouse, y),
                  i.constraints(w, y),
                  m.hasBounds && i.endViewTransform(e),
                  s.trigger(e, "afterRender", A),
                  (g.lastElapsed = o.now() - u);
              }),
              (i.stats = function (e, t, n) {
                for (
                  var i = e.engine,
                    o = i.world,
                    a = r.allBodies(o),
                    s = 0,
                    l = 0,
                    c = 0;
                  c < a.length;
                  c += 1
                )
                  s += a[c].parts.length;
                var u = {
                  Part: s,
                  Body: a.length,
                  Cons: r.allConstraints(o).length,
                  Comp: r.allComposites(o).length,
                  Pair: i.pairs.list.length,
                };
                for (var d in ((t.fillStyle = "#0e0f19"),
                t.fillRect(l, 0, 302.5, 44),
                (t.font = "12px Arial"),
                (t.textBaseline = "top"),
                (t.textAlign = "right"),
                u)) {
                  var p = u[d];
                  (t.fillStyle = "#aaa"),
                    t.fillText(d, l + 55, 8),
                    (t.fillStyle = "#eee"),
                    t.fillText(p, l + 55, 26),
                    (l += 55);
                }
              }),
              (i.performance = function (e, t) {
                var n = e.engine,
                  o = e.timing,
                  r = o.deltaHistory,
                  a = o.elapsedHistory,
                  s = o.timestampElapsedHistory,
                  l = o.engineDeltaHistory,
                  c = o.engineElapsedHistory,
                  d = n.timing.lastDelta,
                  p = u(r),
                  f = u(a),
                  v = u(l),
                  y = u(c),
                  m = u(s) / p || 0,
                  g = 1e3 / p || 0;
                (t.fillStyle = "#0e0f19"),
                  t.fillRect(0, 50, 370, 34),
                  i.status(
                    t,
                    10,
                    69,
                    60,
                    4,
                    r.length,
                    Math.round(g) + " fps",
                    g / i._goodFps,
                    function (e) {
                      return r[e] / p - 1;
                    }
                  ),
                  i.status(
                    t,
                    82,
                    69,
                    60,
                    4,
                    l.length,
                    d.toFixed(2) + " dt",
                    i._goodDelta / d,
                    function (e) {
                      return l[e] / v - 1;
                    }
                  ),
                  i.status(
                    t,
                    154,
                    69,
                    60,
                    4,
                    c.length,
                    y.toFixed(2) + " ut",
                    1 - y / i._goodFps,
                    function (e) {
                      return c[e] / y - 1;
                    }
                  ),
                  i.status(
                    t,
                    226,
                    69,
                    60,
                    4,
                    a.length,
                    f.toFixed(2) + " rt",
                    1 - f / i._goodFps,
                    function (e) {
                      return a[e] / f - 1;
                    }
                  ),
                  i.status(
                    t,
                    298,
                    69,
                    60,
                    4,
                    s.length,
                    m.toFixed(2) + " x",
                    m * m * m,
                    function (e) {
                      return (s[e] / r[e] / m || 0) - 1;
                    }
                  );
              }),
              (i.status = function (e, t, n, i, r, a, s, l, c) {
                (e.strokeStyle = "#888"),
                  (e.fillStyle = "#444"),
                  (e.lineWidth = 1),
                  e.fillRect(t, n + 7, i, 1),
                  e.beginPath(),
                  e.moveTo(t, n + 7 - r * o.clamp(0.4 * c(0), -2, 2));
                for (var u = 0; u < i; u += 1)
                  e.lineTo(
                    t + u,
                    n + 7 - (u < a ? r * o.clamp(0.4 * c(u), -2, 2) : 0)
                  );
                e.stroke(),
                  (e.fillStyle =
                    "hsl(" + o.clamp(25 + 95 * l, 0, 120) + ",100%,60%)"),
                  e.fillRect(t, n - 7, 4, 4),
                  (e.font = "12px Arial"),
                  (e.textBaseline = "middle"),
                  (e.textAlign = "right"),
                  (e.fillStyle = "#eee"),
                  e.fillText(s, t + i, n - 5);
              }),
              (i.constraints = function (e, t) {
                for (var n = t, i = 0; i < e.length; i++) {
                  var r = e[i];
                  if (r.render.visible && r.pointA && r.pointB) {
                    var a,
                      s,
                      c = r.bodyA,
                      u = r.bodyB;
                    if (
                      ((a = c ? l.add(c.position, r.pointA) : r.pointA),
                      "pin" === r.render.type)
                    )
                      n.beginPath(),
                        n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                        n.closePath();
                    else {
                      if (
                        ((s = u ? l.add(u.position, r.pointB) : r.pointB),
                        n.beginPath(),
                        n.moveTo(a.x, a.y),
                        "spring" === r.render.type)
                      )
                        for (
                          var d,
                            p = l.sub(s, a),
                            f = l.perp(l.normalise(p)),
                            v = Math.ceil(o.clamp(r.length / 5, 12, 20)),
                            y = 1;
                          y < v;
                          y += 1
                        )
                          (d = y % 2 == 0 ? 1 : -1),
                            n.lineTo(
                              a.x + p.x * (y / v) + f.x * d * 4,
                              a.y + p.y * (y / v) + f.y * d * 4
                            );
                      n.lineTo(s.x, s.y);
                    }
                    r.render.lineWidth &&
                      ((n.lineWidth = r.render.lineWidth),
                      (n.strokeStyle = r.render.strokeStyle),
                      n.stroke()),
                      r.render.anchors &&
                        ((n.fillStyle = r.render.strokeStyle),
                        n.beginPath(),
                        n.arc(a.x, a.y, 3, 0, 2 * Math.PI),
                        n.arc(s.x, s.y, 3, 0, 2 * Math.PI),
                        n.closePath(),
                        n.fill());
                  }
                }
              }),
              (i.bodies = function (e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s = n,
                  l = (e.engine, e.options),
                  c = l.showInternalEdges || !l.wireframes;
                for (r = 0; r < t.length; r++)
                  if ((i = t[r]).render.visible)
                    for (
                      a = i.parts.length > 1 ? 1 : 0;
                      a < i.parts.length;
                      a++
                    )
                      if ((o = i.parts[a]).render.visible) {
                        if (
                          (l.showSleeping && i.isSleeping
                            ? (s.globalAlpha = 0.5 * o.render.opacity)
                            : 1 !== o.render.opacity &&
                              (s.globalAlpha = o.render.opacity),
                          o.render.sprite &&
                            o.render.sprite.texture &&
                            !l.wireframes)
                        ) {
                          var u = o.render.sprite,
                            d = f(e, u.texture);
                          s.translate(o.position.x, o.position.y),
                            s.rotate(o.angle),
                            s.drawImage(
                              d,
                              d.width * -u.xOffset * u.xScale,
                              d.height * -u.yOffset * u.yScale,
                              d.width * u.xScale,
                              d.height * u.yScale
                            ),
                            s.rotate(-o.angle),
                            s.translate(-o.position.x, -o.position.y);
                        } else {
                          if (o.circleRadius)
                            s.beginPath(),
                              s.arc(
                                o.position.x,
                                o.position.y,
                                o.circleRadius,
                                0,
                                2 * Math.PI
                              );
                          else {
                            s.beginPath(),
                              s.moveTo(o.vertices[0].x, o.vertices[0].y);
                            for (var p = 1; p < o.vertices.length; p++)
                              !o.vertices[p - 1].isInternal || c
                                ? s.lineTo(o.vertices[p].x, o.vertices[p].y)
                                : s.moveTo(o.vertices[p].x, o.vertices[p].y),
                                o.vertices[p].isInternal &&
                                  !c &&
                                  s.moveTo(
                                    o.vertices[(p + 1) % o.vertices.length].x,
                                    o.vertices[(p + 1) % o.vertices.length].y
                                  );
                            s.lineTo(o.vertices[0].x, o.vertices[0].y),
                              s.closePath();
                          }
                          l.wireframes
                            ? ((s.lineWidth = 1),
                              (s.strokeStyle = "#bbb"),
                              s.stroke())
                            : ((s.fillStyle = o.render.fillStyle),
                              o.render.lineWidth &&
                                ((s.lineWidth = o.render.lineWidth),
                                (s.strokeStyle = o.render.strokeStyle),
                                s.stroke()),
                              s.fill());
                        }
                        s.globalAlpha = 1;
                      }
              }),
              (i.bodyWireframes = function (e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s,
                  l = n,
                  c = e.options.showInternalEdges;
                for (l.beginPath(), r = 0; r < t.length; r++)
                  if ((i = t[r]).render.visible)
                    for (
                      s = i.parts.length > 1 ? 1 : 0;
                      s < i.parts.length;
                      s++
                    ) {
                      for (
                        o = i.parts[s],
                          l.moveTo(o.vertices[0].x, o.vertices[0].y),
                          a = 1;
                        a < o.vertices.length;
                        a++
                      )
                        !o.vertices[a - 1].isInternal || c
                          ? l.lineTo(o.vertices[a].x, o.vertices[a].y)
                          : l.moveTo(o.vertices[a].x, o.vertices[a].y),
                          o.vertices[a].isInternal &&
                            !c &&
                            l.moveTo(
                              o.vertices[(a + 1) % o.vertices.length].x,
                              o.vertices[(a + 1) % o.vertices.length].y
                            );
                      l.lineTo(o.vertices[0].x, o.vertices[0].y);
                    }
                (l.lineWidth = 1), (l.strokeStyle = "#bbb"), l.stroke();
              }),
              (i.bodyConvexHulls = function (e, t, n) {
                var i,
                  o,
                  r,
                  a = n;
                for (a.beginPath(), o = 0; o < t.length; o++)
                  if ((i = t[o]).render.visible && 1 !== i.parts.length) {
                    for (
                      a.moveTo(i.vertices[0].x, i.vertices[0].y), r = 1;
                      r < i.vertices.length;
                      r++
                    )
                      a.lineTo(i.vertices[r].x, i.vertices[r].y);
                    a.lineTo(i.vertices[0].x, i.vertices[0].y);
                  }
                (a.lineWidth = 1),
                  (a.strokeStyle = "rgba(255,255,255,0.2)"),
                  a.stroke();
              }),
              (i.vertexNumbers = function (e, t, n) {
                var i,
                  o,
                  r,
                  a = n;
                for (i = 0; i < t.length; i++) {
                  var s = t[i].parts;
                  for (r = s.length > 1 ? 1 : 0; r < s.length; r++) {
                    var l = s[r];
                    for (o = 0; o < l.vertices.length; o++)
                      (a.fillStyle = "rgba(255,255,255,0.2)"),
                        a.fillText(
                          i + "_" + o,
                          l.position.x + 0.8 * (l.vertices[o].x - l.position.x),
                          l.position.y + 0.8 * (l.vertices[o].y - l.position.y)
                        );
                  }
                }
              }),
              (i.mousePosition = function (e, t, n) {
                var i = n;
                (i.fillStyle = "rgba(255,255,255,0.8)"),
                  i.fillText(
                    t.position.x + "  " + t.position.y,
                    t.position.x + 5,
                    t.position.y - 5
                  );
              }),
              (i.bodyBounds = function (e, t, n) {
                var i = n,
                  o = (e.engine, e.options);
                i.beginPath();
                for (var r = 0; r < t.length; r++) {
                  if (t[r].render.visible)
                    for (
                      var a = t[r].parts, s = a.length > 1 ? 1 : 0;
                      s < a.length;
                      s++
                    ) {
                      var l = a[s];
                      i.rect(
                        l.bounds.min.x,
                        l.bounds.min.y,
                        l.bounds.max.x - l.bounds.min.x,
                        l.bounds.max.y - l.bounds.min.y
                      );
                    }
                }
                o.wireframes
                  ? (i.strokeStyle = "rgba(255,255,255,0.08)")
                  : (i.strokeStyle = "rgba(0,0,0,0.1)"),
                  (i.lineWidth = 1),
                  i.stroke();
              }),
              (i.bodyAxes = function (e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s = n,
                  l = (e.engine, e.options);
                for (s.beginPath(), o = 0; o < t.length; o++) {
                  var c = t[o],
                    u = c.parts;
                  if (c.render.visible)
                    if (l.showAxes)
                      for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                        for (i = u[r], a = 0; a < i.axes.length; a++) {
                          var d = i.axes[a];
                          s.moveTo(i.position.x, i.position.y),
                            s.lineTo(
                              i.position.x + 20 * d.x,
                              i.position.y + 20 * d.y
                            );
                        }
                    else
                      for (r = u.length > 1 ? 1 : 0; r < u.length; r++)
                        for (i = u[r], a = 0; a < i.axes.length; a++)
                          s.moveTo(i.position.x, i.position.y),
                            s.lineTo(
                              (i.vertices[0].x +
                                i.vertices[i.vertices.length - 1].x) /
                                2,
                              (i.vertices[0].y +
                                i.vertices[i.vertices.length - 1].y) /
                                2
                            );
                }
                l.wireframes
                  ? ((s.strokeStyle = "indianred"), (s.lineWidth = 1))
                  : ((s.strokeStyle = "rgba(255, 255, 255, 0.4)"),
                    (s.globalCompositeOperation = "overlay"),
                    (s.lineWidth = 2)),
                  s.stroke(),
                  (s.globalCompositeOperation = "source-over");
              }),
              (i.bodyPositions = function (e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s = n,
                  l = (e.engine, e.options);
                for (s.beginPath(), r = 0; r < t.length; r++)
                  if ((i = t[r]).render.visible)
                    for (a = 0; a < i.parts.length; a++)
                      (o = i.parts[a]),
                        s.arc(
                          o.position.x,
                          o.position.y,
                          3,
                          0,
                          2 * Math.PI,
                          !1
                        ),
                        s.closePath();
                for (
                  l.wireframes
                    ? (s.fillStyle = "indianred")
                    : (s.fillStyle = "rgba(0,0,0,0.5)"),
                    s.fill(),
                    s.beginPath(),
                    r = 0;
                  r < t.length;
                  r++
                )
                  (i = t[r]).render.visible &&
                    (s.arc(
                      i.positionPrev.x,
                      i.positionPrev.y,
                      2,
                      0,
                      2 * Math.PI,
                      !1
                    ),
                    s.closePath());
                (s.fillStyle = "rgba(255,165,0,0.8)"), s.fill();
              }),
              (i.bodyVelocity = function (e, t, n) {
                var i = n;
                i.beginPath();
                for (var o = 0; o < t.length; o++) {
                  var r = t[o];
                  r.render.visible &&
                    (i.moveTo(r.position.x, r.position.y),
                    i.lineTo(
                      r.position.x + 2 * (r.position.x - r.positionPrev.x),
                      r.position.y + 2 * (r.position.y - r.positionPrev.y)
                    ));
                }
                (i.lineWidth = 3),
                  (i.strokeStyle = "cornflowerblue"),
                  i.stroke();
              }),
              (i.bodyIds = function (e, t, n) {
                var i,
                  o,
                  r = n;
                for (i = 0; i < t.length; i++)
                  if (t[i].render.visible) {
                    var a = t[i].parts;
                    for (o = a.length > 1 ? 1 : 0; o < a.length; o++) {
                      var s = a[o];
                      (r.font = "12px Arial"),
                        (r.fillStyle = "rgba(255,255,255,0.5)"),
                        r.fillText(s.id, s.position.x + 10, s.position.y - 10);
                    }
                  }
              }),
              (i.collisions = function (e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s = n,
                  l = e.options;
                for (s.beginPath(), r = 0; r < t.length; r++)
                  if ((i = t[r]).isActive)
                    for (
                      o = i.collision, a = 0;
                      a < i.activeContacts.length;
                      a++
                    ) {
                      var c = i.activeContacts[a].vertex;
                      s.rect(c.x - 1.5, c.y - 1.5, 3.5, 3.5);
                    }
                for (
                  l.wireframes
                    ? (s.fillStyle = "rgba(255,255,255,0.7)")
                    : (s.fillStyle = "orange"),
                    s.fill(),
                    s.beginPath(),
                    r = 0;
                  r < t.length;
                  r++
                )
                  if (
                    (i = t[r]).isActive &&
                    ((o = i.collision), i.activeContacts.length > 0)
                  ) {
                    var u = i.activeContacts[0].vertex.x,
                      d = i.activeContacts[0].vertex.y;
                    2 === i.activeContacts.length &&
                      ((u =
                        (i.activeContacts[0].vertex.x +
                          i.activeContacts[1].vertex.x) /
                        2),
                      (d =
                        (i.activeContacts[0].vertex.y +
                          i.activeContacts[1].vertex.y) /
                        2)),
                      o.bodyB === o.supports[0].body || !0 === o.bodyA.isStatic
                        ? s.moveTo(u - 8 * o.normal.x, d - 8 * o.normal.y)
                        : s.moveTo(u + 8 * o.normal.x, d + 8 * o.normal.y),
                      s.lineTo(u, d);
                  }
                l.wireframes
                  ? (s.strokeStyle = "rgba(255,165,0,0.7)")
                  : (s.strokeStyle = "orange"),
                  (s.lineWidth = 1),
                  s.stroke();
              }),
              (i.separations = function (e, t, n) {
                var i,
                  o,
                  r,
                  a,
                  s,
                  l = n,
                  c = e.options;
                for (l.beginPath(), s = 0; s < t.length; s++)
                  if ((i = t[s]).isActive) {
                    r = (o = i.collision).bodyA;
                    var u = 1;
                    (a = o.bodyB).isStatic || r.isStatic || (u = 0.5),
                      a.isStatic && (u = 0),
                      l.moveTo(a.position.x, a.position.y),
                      l.lineTo(
                        a.position.x - o.penetration.x * u,
                        a.position.y - o.penetration.y * u
                      ),
                      (u = 1),
                      a.isStatic || r.isStatic || (u = 0.5),
                      r.isStatic && (u = 0),
                      l.moveTo(r.position.x, r.position.y),
                      l.lineTo(
                        r.position.x + o.penetration.x * u,
                        r.position.y + o.penetration.y * u
                      );
                  }
                c.wireframes
                  ? (l.strokeStyle = "rgba(255,165,0,0.5)")
                  : (l.strokeStyle = "orange"),
                  l.stroke();
              }),
              (i.inspector = function (e, t) {
                e.engine;
                var n,
                  i = e.selected,
                  o = e.render,
                  r = o.options;
                if (r.hasBounds) {
                  var a = o.bounds.max.x - o.bounds.min.x,
                    s = o.bounds.max.y - o.bounds.min.y,
                    l = a / o.options.width,
                    c = s / o.options.height;
                  t.scale(1 / l, 1 / c),
                    t.translate(-o.bounds.min.x, -o.bounds.min.y);
                }
                for (var u = 0; u < i.length; u++) {
                  var d = i[u].data;
                  switch (
                    (t.translate(0.5, 0.5),
                    (t.lineWidth = 1),
                    (t.strokeStyle = "rgba(255,165,0,0.9)"),
                    t.setLineDash([1, 2]),
                    d.type)
                  ) {
                    case "body":
                      (n = d.bounds),
                        t.beginPath(),
                        t.rect(
                          Math.floor(n.min.x - 3),
                          Math.floor(n.min.y - 3),
                          Math.floor(n.max.x - n.min.x + 6),
                          Math.floor(n.max.y - n.min.y + 6)
                        ),
                        t.closePath(),
                        t.stroke();
                      break;
                    case "constraint":
                      var p = d.pointA;
                      d.bodyA && (p = d.pointB),
                        t.beginPath(),
                        t.arc(p.x, p.y, 10, 0, 2 * Math.PI),
                        t.closePath(),
                        t.stroke();
                  }
                  t.setLineDash([]), t.translate(-0.5, -0.5);
                }
                null !== e.selectStart &&
                  (t.translate(0.5, 0.5),
                  (t.lineWidth = 1),
                  (t.strokeStyle = "rgba(255,165,0,0.6)"),
                  (t.fillStyle = "rgba(255,165,0,0.1)"),
                  (n = e.selectBounds),
                  t.beginPath(),
                  t.rect(
                    Math.floor(n.min.x),
                    Math.floor(n.min.y),
                    Math.floor(n.max.x - n.min.x),
                    Math.floor(n.max.y - n.min.y)
                  ),
                  t.closePath(),
                  t.stroke(),
                  t.fill(),
                  t.translate(-0.5, -0.5)),
                  r.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0);
              });
            var n = function (e, t) {
                var n = e.engine,
                  o = e.timing,
                  r = o.historySize,
                  a = n.timing.timestamp;
                (o.delta = t - o.lastTime || i._goodDelta),
                  (o.lastTime = t),
                  (o.timestampElapsed = a - o.lastTimestamp || 0),
                  (o.lastTimestamp = a),
                  o.deltaHistory.unshift(o.delta),
                  (o.deltaHistory.length = Math.min(o.deltaHistory.length, r)),
                  o.engineDeltaHistory.unshift(n.timing.lastDelta),
                  (o.engineDeltaHistory.length = Math.min(
                    o.engineDeltaHistory.length,
                    r
                  )),
                  o.timestampElapsedHistory.unshift(o.timestampElapsed),
                  (o.timestampElapsedHistory.length = Math.min(
                    o.timestampElapsedHistory.length,
                    r
                  )),
                  o.engineElapsedHistory.unshift(n.timing.lastElapsed),
                  (o.engineElapsedHistory.length = Math.min(
                    o.engineElapsedHistory.length,
                    r
                  )),
                  o.elapsedHistory.unshift(o.lastElapsed),
                  (o.elapsedHistory.length = Math.min(
                    o.elapsedHistory.length,
                    r
                  ));
              },
              u = function (e) {
                for (var t = 0, n = 0; n < e.length; n += 1) t += e[n];
                return t / e.length || 0;
              },
              d = function (e, t) {
                var n = document.createElement("canvas");
                return (
                  (n.width = e),
                  (n.height = t),
                  (n.oncontextmenu = function () {
                    return !1;
                  }),
                  (n.onselectstart = function () {
                    return !1;
                  }),
                  n
                );
              },
              p = function (e) {
                var t = e.getContext("2d");
                return (
                  (window.devicePixelRatio || 1) /
                  (t.webkitBackingStorePixelRatio ||
                    t.mozBackingStorePixelRatio ||
                    t.msBackingStorePixelRatio ||
                    t.oBackingStorePixelRatio ||
                    t.backingStorePixelRatio ||
                    1)
                );
              },
              f = function (e, t) {
                var n = e.textures[t];
                return n || (((n = e.textures[t] = new Image()).src = t), n);
              },
              v = function (e, t) {
                var n = t;
                /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"),
                  (e.canvas.style.background = n),
                  (e.canvas.style.backgroundSize = "contain"),
                  (e.currentBackground = t);
              };
          })();
        },
        function (e, t) {
          var n = {};
          (e.exports = n),
            (n.create = function (e) {
              return { vertex: e, normalImpulse: 0, tangentImpulse: 0 };
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(7),
            r = n(19),
            a = n(14),
            s = n(20),
            l = n(4),
            c = n(5),
            u = n(10),
            d = n(0),
            p = n(6);
          (i.create = function (e) {
            e = e || {};
            var t = d.extend(
              {
                positionIterations: 6,
                velocityIterations: 4,
                constraintIterations: 2,
                enableSleeping: !1,
                events: [],
                plugin: {},
                gravity: { x: 0, y: 1, scale: 0.001 },
                timing: {
                  timestamp: 0,
                  timeScale: 1,
                  lastDelta: 0,
                  lastElapsed: 0,
                },
              },
              e
            );
            return (
              (t.world = e.world || c.create({ label: "World" })),
              (t.pairs = e.pairs || s.create()),
              (t.detector = e.detector || a.create()),
              (t.grid = { buckets: [] }),
              (t.world.gravity = t.gravity),
              (t.broadphase = t.grid),
              (t.metrics = {}),
              t
            );
          }),
            (i.update = function (e, t, n) {
              var p = d.now();
              (t = t || 1e3 / 60), (n = n || 1);
              var f,
                v = e.world,
                y = e.detector,
                m = e.pairs,
                g = e.timing,
                x = g.timestamp;
              (g.timestamp += t * g.timeScale), (g.lastDelta = t * g.timeScale);
              var h = { timestamp: g.timestamp };
              l.trigger(e, "beforeUpdate", h);
              var b = c.allBodies(v),
                S = c.allConstraints(v);
              for (
                v.isModified && a.setBodies(y, b),
                  v.isModified && c.setModified(v, !1, !1, !0),
                  e.enableSleeping && o.update(b, g.timeScale),
                  i._bodiesApplyGravity(b, e.gravity),
                  i._bodiesUpdate(b, t, g.timeScale, n, v.bounds),
                  u.preSolveAll(b),
                  f = 0;
                f < e.constraintIterations;
                f++
              )
                u.solveAll(S, g.timeScale);
              u.postSolveAll(b), (y.pairs = e.pairs);
              var w = a.collisions(y);
              for (
                s.update(m, w, x),
                  e.enableSleeping && o.afterCollisions(m.list, g.timeScale),
                  m.collisionStart.length > 0 &&
                    l.trigger(e, "collisionStart", { pairs: m.collisionStart }),
                  r.preSolvePosition(m.list),
                  f = 0;
                f < e.positionIterations;
                f++
              )
                r.solvePosition(m.list, g.timeScale);
              for (
                r.postSolvePosition(b), u.preSolveAll(b), f = 0;
                f < e.constraintIterations;
                f++
              )
                u.solveAll(S, g.timeScale);
              for (
                u.postSolveAll(b), r.preSolveVelocity(m.list), f = 0;
                f < e.velocityIterations;
                f++
              )
                r.solveVelocity(m.list, g.timeScale);
              return (
                m.collisionActive.length > 0 &&
                  l.trigger(e, "collisionActive", { pairs: m.collisionActive }),
                m.collisionEnd.length > 0 &&
                  l.trigger(e, "collisionEnd", { pairs: m.collisionEnd }),
                i._bodiesClearForces(b),
                l.trigger(e, "afterUpdate", h),
                (e.timing.lastElapsed = d.now() - p),
                e
              );
            }),
            (i.merge = function (e, t) {
              if ((d.extend(e, t), t.world)) {
                (e.world = t.world), i.clear(e);
                for (var n = c.allBodies(e.world), r = 0; r < n.length; r++) {
                  var a = n[r];
                  o.set(a, !1), (a.id = d.nextId());
                }
              }
            }),
            (i.clear = function (e) {
              s.clear(e.pairs), a.clear(e.detector);
            }),
            (i._bodiesClearForces = function (e) {
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                (n.force.x = 0), (n.force.y = 0), (n.torque = 0);
              }
            }),
            (i._bodiesApplyGravity = function (e, t) {
              var n = void 0 !== t.scale ? t.scale : 0.001;
              if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                for (var i = 0; i < e.length; i++) {
                  var o = e[i];
                  o.isStatic ||
                    o.isSleeping ||
                    ((o.force.y += o.mass * t.y * n),
                    (o.force.x += o.mass * t.x * n));
                }
            }),
            (i._bodiesUpdate = function (e, t, n, i, o) {
              for (var r = 0; r < e.length; r++) {
                var a = e[r];
                a.isStatic || a.isSleeping || p.update(a, t, n, i);
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(1);
          (i._restingThresh = 4),
            (i._restingThreshTangent = 6),
            (i._positionDampen = 0.9),
            (i._positionWarming = 0.8),
            (i._frictionNormalMultiplier = 5),
            (i.preSolvePosition = function (e) {
              var t,
                n,
                i,
                o = e.length;
              for (t = 0; t < o; t++)
                (n = e[t]).isActive &&
                  ((i = n.activeContacts.length),
                  (n.collision.parentA.totalContacts += i),
                  (n.collision.parentB.totalContacts += i));
            }),
            (i.solvePosition = function (e, t) {
              var n,
                o,
                r,
                a,
                s,
                l,
                c,
                u,
                d = i._positionDampen,
                p = e.length;
              for (n = 0; n < p; n++)
                (o = e[n]).isActive &&
                  !o.isSensor &&
                  ((a = (r = o.collision).parentA),
                  (s = r.parentB),
                  (l = r.normal),
                  (o.separation =
                    l.x *
                      (s.positionImpulse.x +
                        r.penetration.x -
                        a.positionImpulse.x) +
                    l.y *
                      (s.positionImpulse.y +
                        r.penetration.y -
                        a.positionImpulse.y)));
              for (n = 0; n < p; n++)
                (o = e[n]).isActive &&
                  !o.isSensor &&
                  ((a = (r = o.collision).parentA),
                  (s = r.parentB),
                  (l = r.normal),
                  (u = (o.separation - o.slop) * t),
                  (a.isStatic || s.isStatic) && (u *= 2),
                  a.isStatic ||
                    a.isSleeping ||
                    ((c = d / a.totalContacts),
                    (a.positionImpulse.x += l.x * u * c),
                    (a.positionImpulse.y += l.y * u * c)),
                  s.isStatic ||
                    s.isSleeping ||
                    ((c = d / s.totalContacts),
                    (s.positionImpulse.x -= l.x * u * c),
                    (s.positionImpulse.y -= l.y * u * c)));
            }),
            (i.postSolvePosition = function (e) {
              for (
                var t = i._positionWarming,
                  n = e.length,
                  a = o.translate,
                  s = r.update,
                  l = 0;
                l < n;
                l++
              ) {
                var c = e[l],
                  u = c.positionImpulse,
                  d = u.x,
                  p = u.y,
                  f = c.velocity;
                if (((c.totalContacts = 0), 0 !== d || 0 !== p)) {
                  for (var v = 0; v < c.parts.length; v++) {
                    var y = c.parts[v];
                    a(y.vertices, u),
                      s(y.bounds, y.vertices, f),
                      (y.position.x += d),
                      (y.position.y += p);
                  }
                  (c.positionPrev.x += d),
                    (c.positionPrev.y += p),
                    d * f.x + p * f.y < 0
                      ? ((u.x = 0), (u.y = 0))
                      : ((u.x *= t), (u.y *= t));
                }
              }
            }),
            (i.preSolveVelocity = function (e) {
              var t,
                n,
                i = e.length;
              for (t = 0; t < i; t++) {
                var o = e[t];
                if (o.isActive && !o.isSensor) {
                  var r = o.activeContacts,
                    a = r.length,
                    s = o.collision,
                    l = s.parentA,
                    c = s.parentB,
                    u = s.normal,
                    d = s.tangent;
                  for (n = 0; n < a; n++) {
                    var p = r[n],
                      f = p.vertex,
                      v = p.normalImpulse,
                      y = p.tangentImpulse;
                    if (0 !== v || 0 !== y) {
                      var m = u.x * v + d.x * y,
                        g = u.y * v + d.y * y;
                      l.isStatic ||
                        l.isSleeping ||
                        ((l.positionPrev.x += m * l.inverseMass),
                        (l.positionPrev.y += g * l.inverseMass),
                        (l.anglePrev +=
                          l.inverseInertia *
                          ((f.x - l.position.x) * g -
                            (f.y - l.position.y) * m))),
                        c.isStatic ||
                          c.isSleeping ||
                          ((c.positionPrev.x -= m * c.inverseMass),
                          (c.positionPrev.y -= g * c.inverseMass),
                          (c.anglePrev -=
                            c.inverseInertia *
                            ((f.x - c.position.x) * g -
                              (f.y - c.position.y) * m)));
                    }
                  }
                }
              }
            }),
            (i.solveVelocity = function (e, t) {
              var n,
                o,
                r,
                a,
                s = t * t,
                l = i._restingThresh * s,
                c = i._frictionNormalMultiplier,
                u = i._restingThreshTangent * s,
                d = Number.MAX_VALUE,
                p = e.length;
              for (r = 0; r < p; r++) {
                var f = e[r];
                if (f.isActive && !f.isSensor) {
                  var v = f.collision,
                    y = v.parentA,
                    m = v.parentB,
                    g = y.velocity,
                    x = m.velocity,
                    h = v.normal.x,
                    b = v.normal.y,
                    S = v.tangent.x,
                    w = v.tangent.y,
                    A = f.activeContacts,
                    P = A.length,
                    C = 1 / P,
                    M = y.inverseMass + m.inverseMass,
                    B = f.friction * f.frictionStatic * c * s;
                  for (
                    g.x = y.position.x - y.positionPrev.x,
                      g.y = y.position.y - y.positionPrev.y,
                      x.x = m.position.x - m.positionPrev.x,
                      x.y = m.position.y - m.positionPrev.y,
                      y.angularVelocity = y.angle - y.anglePrev,
                      m.angularVelocity = m.angle - m.anglePrev,
                      a = 0;
                    a < P;
                    a++
                  ) {
                    var k = A[a],
                      _ = k.vertex,
                      I = _.x - y.position.x,
                      T = _.y - y.position.y,
                      R = _.x - m.position.x,
                      E = _.y - m.position.y,
                      V = g.x - T * y.angularVelocity,
                      L = g.y + I * y.angularVelocity,
                      O = V - (x.x - E * m.angularVelocity),
                      D = L - (x.y + R * m.angularVelocity),
                      F = h * O + b * D,
                      H = S * O + w * D,
                      j = f.separation + F,
                      q = Math.min(j, 1),
                      W = (q = j < 0 ? 0 : q) * B;
                    H > W || -H > W
                      ? ((o = H > 0 ? H : -H),
                        (n = f.friction * (H > 0 ? 1 : -1) * s) < -o
                          ? (n = -o)
                          : n > o && (n = o))
                      : ((n = H), (o = d));
                    var G = I * b - T * h,
                      N = R * b - E * h,
                      U =
                        C /
                        (M +
                          y.inverseInertia * G * G +
                          m.inverseInertia * N * N),
                      z = (1 + f.restitution) * F * U;
                    if (((n *= U), F * F > l && F < 0)) k.normalImpulse = 0;
                    else {
                      var X = k.normalImpulse;
                      (k.normalImpulse += z),
                        (k.normalImpulse = Math.min(k.normalImpulse, 0)),
                        (z = k.normalImpulse - X);
                    }
                    if (H * H > u) k.tangentImpulse = 0;
                    else {
                      var Q = k.tangentImpulse;
                      (k.tangentImpulse += n),
                        k.tangentImpulse < -o && (k.tangentImpulse = -o),
                        k.tangentImpulse > o && (k.tangentImpulse = o),
                        (n = k.tangentImpulse - Q);
                    }
                    var Y = h * z + S * n,
                      Z = b * z + w * n;
                    y.isStatic ||
                      y.isSleeping ||
                      ((y.positionPrev.x += Y * y.inverseMass),
                      (y.positionPrev.y += Z * y.inverseMass),
                      (y.anglePrev += (I * Z - T * Y) * y.inverseInertia)),
                      m.isStatic ||
                        m.isSleeping ||
                        ((m.positionPrev.x -= Y * m.inverseMass),
                        (m.positionPrev.y -= Z * m.inverseMass),
                        (m.anglePrev -= (R * Z - E * Y) * m.inverseInertia));
                  }
                }
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(9),
            r = n(0);
          (i.create = function (e) {
            return r.extend(
              {
                table: {},
                list: [],
                collisionStart: [],
                collisionActive: [],
                collisionEnd: [],
              },
              e
            );
          }),
            (i.update = function (e, t, n) {
              var i,
                r,
                a,
                s,
                l = e.list,
                c = l.length,
                u = e.table,
                d = t.length,
                p = e.collisionStart,
                f = e.collisionEnd,
                v = e.collisionActive;
              for (p.length = 0, f.length = 0, v.length = 0, s = 0; s < c; s++)
                l[s].confirmedActive = !1;
              for (s = 0; s < d; s++)
                (a = (i = t[s]).pair)
                  ? (a.isActive ? v.push(a) : p.push(a),
                    o.update(a, i, n),
                    (a.confirmedActive = !0))
                  : ((u[(a = o.create(i, n)).id] = a), p.push(a), l.push(a));
              var y = [];
              for (c = l.length, s = 0; s < c; s++)
                (a = l[s]).confirmedActive ||
                  (o.setActive(a, !1, n),
                  f.push(a),
                  a.collision.bodyA.isSleeping ||
                    a.collision.bodyB.isSleeping ||
                    y.push(s));
              for (s = 0; s < y.length; s++)
                (a = l[(r = y[s] - s)]), l.splice(r, 1), delete u[a.id];
            }),
            (i.clear = function (e) {
              return (
                (e.table = {}),
                (e.list.length = 0),
                (e.collisionStart.length = 0),
                (e.collisionActive.length = 0),
                (e.collisionEnd.length = 0),
                e
              );
            });
        },
        function (e, t, n) {
          var i = (e.exports = n(22));
          (i.Axes = n(11)),
            (i.Bodies = n(12)),
            (i.Body = n(6)),
            (i.Bounds = n(1)),
            (i.Collision = n(8)),
            (i.Common = n(0)),
            (i.Composite = n(5)),
            (i.Composites = n(23)),
            (i.Constraint = n(10)),
            (i.Contact = n(17)),
            (i.Detector = n(14)),
            (i.Engine = n(18)),
            (i.Events = n(4)),
            (i.Grid = n(24)),
            (i.Mouse = n(13)),
            (i.MouseConstraint = n(25)),
            (i.Pair = n(9)),
            (i.Pairs = n(20)),
            (i.Plugin = n(15)),
            (i.Query = n(26)),
            (i.Render = n(16)),
            (i.Resolver = n(19)),
            (i.Runner = n(27)),
            (i.SAT = n(28)),
            (i.Sleeping = n(7)),
            (i.Svg = n(29)),
            (i.Vector = n(2)),
            (i.Vertices = n(3)),
            (i.World = n(30)),
            (i.Engine.run = i.Runner.run),
            i.Common.deprecated(
              i.Engine,
              "run",
              "Engine.run ➤ use Matter.Runner.run(engine) instead"
            );
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(15),
            r = n(0);
          (i.name = "matter-js"),
            (i.version = "0.18.0"),
            (i.uses = []),
            (i.used = []),
            (i.use = function () {
              o.use(i, Array.prototype.slice.call(arguments));
            }),
            (i.before = function (e, t) {
              return (
                (e = e.replace(/^Matter./, "")), r.chainPathBefore(i, e, t)
              );
            }),
            (i.after = function (e, t) {
              return (e = e.replace(/^Matter./, "")), r.chainPathAfter(i, e, t);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(5),
            r = n(10),
            a = n(0),
            s = n(6),
            l = n(12),
            c = a.deprecated;
          (i.stack = function (e, t, n, i, r, a, l) {
            for (
              var c,
                u = o.create({ label: "Stack" }),
                d = e,
                p = t,
                f = 0,
                v = 0;
              v < i;
              v++
            ) {
              for (var y = 0, m = 0; m < n; m++) {
                var g = l(d, p, m, v, c, f);
                if (g) {
                  var x = g.bounds.max.y - g.bounds.min.y,
                    h = g.bounds.max.x - g.bounds.min.x;
                  x > y && (y = x),
                    s.translate(g, { x: 0.5 * h, y: 0.5 * x }),
                    (d = g.bounds.max.x + r),
                    o.addBody(u, g),
                    (c = g),
                    (f += 1);
                } else d += r;
              }
              (p += y + a), (d = e);
            }
            return u;
          }),
            (i.chain = function (e, t, n, i, s, l) {
              for (var c = e.bodies, u = 1; u < c.length; u++) {
                var d = c[u - 1],
                  p = c[u],
                  f = d.bounds.max.y - d.bounds.min.y,
                  v = d.bounds.max.x - d.bounds.min.x,
                  y = p.bounds.max.y - p.bounds.min.y,
                  m = {
                    bodyA: d,
                    pointA: { x: v * t, y: f * n },
                    bodyB: p,
                    pointB: {
                      x: (p.bounds.max.x - p.bounds.min.x) * i,
                      y: y * s,
                    },
                  },
                  g = a.extend(m, l);
                o.addConstraint(e, r.create(g));
              }
              return (e.label += " Chain"), e;
            }),
            (i.mesh = function (e, t, n, i, s) {
              var l,
                c,
                u,
                d,
                p,
                f = e.bodies;
              for (l = 0; l < n; l++) {
                for (c = 1; c < t; c++)
                  (u = f[c - 1 + l * t]),
                    (d = f[c + l * t]),
                    o.addConstraint(
                      e,
                      r.create(a.extend({ bodyA: u, bodyB: d }, s))
                    );
                if (l > 0)
                  for (c = 0; c < t; c++)
                    (u = f[c + (l - 1) * t]),
                      (d = f[c + l * t]),
                      o.addConstraint(
                        e,
                        r.create(a.extend({ bodyA: u, bodyB: d }, s))
                      ),
                      i &&
                        c > 0 &&
                        ((p = f[c - 1 + (l - 1) * t]),
                        o.addConstraint(
                          e,
                          r.create(a.extend({ bodyA: p, bodyB: d }, s))
                        )),
                      i &&
                        c < t - 1 &&
                        ((p = f[c + 1 + (l - 1) * t]),
                        o.addConstraint(
                          e,
                          r.create(a.extend({ bodyA: p, bodyB: d }, s))
                        ));
              }
              return (e.label += " Mesh"), e;
            }),
            (i.pyramid = function (e, t, n, o, r, a, l) {
              return i.stack(e, t, n, o, r, a, function (t, i, a, c, u, d) {
                var p = Math.min(o, Math.ceil(n / 2)),
                  f = u ? u.bounds.max.x - u.bounds.min.x : 0;
                if (!(c > p || a < (c = p - c) || a > n - 1 - c))
                  return (
                    1 === d &&
                      s.translate(u, {
                        x: (a + (n % 2 == 1 ? 1 : -1)) * f,
                        y: 0,
                      }),
                    l(e + (u ? a * f : 0) + a * r, i, a, c, u, d)
                  );
              });
            }),
            (i.newtonsCradle = function (e, t, n, i, a) {
              for (
                var s = o.create({ label: "Newtons Cradle" }), c = 0;
                c < n;
                c++
              ) {
                var u = l.circle(e + c * (1.9 * i), t + a, i, {
                    inertia: 1 / 0,
                    restitution: 1,
                    friction: 0,
                    frictionAir: 1e-4,
                    slop: 1,
                  }),
                  d = r.create({
                    pointA: { x: e + c * (1.9 * i), y: t },
                    bodyB: u,
                  });
                o.addBody(s, u), o.addConstraint(s, d);
              }
              return s;
            }),
            c(
              i,
              "newtonsCradle",
              "Composites.newtonsCradle ➤ moved to newtonsCradle example"
            ),
            (i.car = function (e, t, n, i, a) {
              var c = s.nextGroup(!0),
                u = 0.5 * -n + 20,
                d = 0.5 * n - 20,
                p = o.create({ label: "Car" }),
                f = l.rectangle(e, t, n, i, {
                  collisionFilter: { group: c },
                  chamfer: { radius: 0.5 * i },
                  density: 2e-4,
                }),
                v = l.circle(e + u, t + 0, a, {
                  collisionFilter: { group: c },
                  friction: 0.8,
                }),
                y = l.circle(e + d, t + 0, a, {
                  collisionFilter: { group: c },
                  friction: 0.8,
                }),
                m = r.create({
                  bodyB: f,
                  pointB: { x: u, y: 0 },
                  bodyA: v,
                  stiffness: 1,
                  length: 0,
                }),
                g = r.create({
                  bodyB: f,
                  pointB: { x: d, y: 0 },
                  bodyA: y,
                  stiffness: 1,
                  length: 0,
                });
              return (
                o.addBody(p, f),
                o.addBody(p, v),
                o.addBody(p, y),
                o.addConstraint(p, m),
                o.addConstraint(p, g),
                p
              );
            }),
            c(i, "car", "Composites.car ➤ moved to car example"),
            (i.softBody = function (e, t, n, o, r, s, c, u, d, p) {
              (d = a.extend({ inertia: 1 / 0 }, d)),
                (p = a.extend(
                  { stiffness: 0.2, render: { type: "line", anchors: !1 } },
                  p
                ));
              var f = i.stack(e, t, n, o, r, s, function (e, t) {
                return l.circle(e, t, u, d);
              });
              return i.mesh(f, n, o, c, p), (f.label = "Soft Body"), f;
            }),
            c(
              i,
              "softBody",
              "Composites.softBody ➤ moved to softBody and cloth examples"
            );
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(9),
            r = n(0),
            a = r.deprecated;
          (i.create = function (e) {
            return r.extend(
              {
                buckets: {},
                pairs: {},
                pairsList: [],
                bucketWidth: 48,
                bucketHeight: 48,
              },
              e
            );
          }),
            (i.update = function (e, t, n, o) {
              var r,
                a,
                s,
                l,
                c,
                u = n.world,
                d = e.buckets,
                p = !1;
              for (r = 0; r < t.length; r++) {
                var f = t[r];
                if (
                  (!f.isSleeping || o) &&
                  (!u.bounds ||
                    !(
                      f.bounds.max.x < u.bounds.min.x ||
                      f.bounds.min.x > u.bounds.max.x ||
                      f.bounds.max.y < u.bounds.min.y ||
                      f.bounds.min.y > u.bounds.max.y
                    ))
                ) {
                  var v = i._getRegion(e, f);
                  if (!f.region || v.id !== f.region.id || o) {
                    (f.region && !o) || (f.region = v);
                    var y = i._regionUnion(v, f.region);
                    for (a = y.startCol; a <= y.endCol; a++)
                      for (s = y.startRow; s <= y.endRow; s++) {
                        l = d[(c = i._getBucketId(a, s))];
                        var m =
                            a >= v.startCol &&
                            a <= v.endCol &&
                            s >= v.startRow &&
                            s <= v.endRow,
                          g =
                            a >= f.region.startCol &&
                            a <= f.region.endCol &&
                            s >= f.region.startRow &&
                            s <= f.region.endRow;
                        !m && g && g && l && i._bucketRemoveBody(e, l, f),
                          (f.region === v || (m && !g) || o) &&
                            (l || (l = i._createBucket(d, c)),
                            i._bucketAddBody(e, l, f));
                      }
                    (f.region = v), (p = !0);
                  }
                }
              }
              p && (e.pairsList = i._createActivePairsList(e));
            }),
            a(i, "update", "Grid.update ➤ replaced by Matter.Detector"),
            (i.clear = function (e) {
              (e.buckets = {}), (e.pairs = {}), (e.pairsList = []);
            }),
            a(i, "clear", "Grid.clear ➤ replaced by Matter.Detector"),
            (i._regionUnion = function (e, t) {
              var n = Math.min(e.startCol, t.startCol),
                o = Math.max(e.endCol, t.endCol),
                r = Math.min(e.startRow, t.startRow),
                a = Math.max(e.endRow, t.endRow);
              return i._createRegion(n, o, r, a);
            }),
            (i._getRegion = function (e, t) {
              var n = t.bounds,
                o = Math.floor(n.min.x / e.bucketWidth),
                r = Math.floor(n.max.x / e.bucketWidth),
                a = Math.floor(n.min.y / e.bucketHeight),
                s = Math.floor(n.max.y / e.bucketHeight);
              return i._createRegion(o, r, a, s);
            }),
            (i._createRegion = function (e, t, n, i) {
              return {
                id: e + "," + t + "," + n + "," + i,
                startCol: e,
                endCol: t,
                startRow: n,
                endRow: i,
              };
            }),
            (i._getBucketId = function (e, t) {
              return "C" + e + "R" + t;
            }),
            (i._createBucket = function (e, t) {
              return (e[t] = []);
            }),
            (i._bucketAddBody = function (e, t, n) {
              var i,
                r = e.pairs,
                a = o.id,
                s = t.length;
              for (i = 0; i < s; i++) {
                var l = t[i];
                if (!(n.id === l.id || (n.isStatic && l.isStatic))) {
                  var c = a(n, l),
                    u = r[c];
                  u ? (u[2] += 1) : (r[c] = [n, l, 1]);
                }
              }
              t.push(n);
            }),
            (i._bucketRemoveBody = function (e, t, n) {
              var i,
                a = e.pairs,
                s = o.id;
              t.splice(r.indexOf(t, n), 1);
              var l = t.length;
              for (i = 0; i < l; i++) {
                var c = a[s(n, t[i])];
                c && (c[2] -= 1);
              }
            }),
            (i._createActivePairsList = function (e) {
              var t,
                n,
                i = e.pairs,
                o = r.keys(i),
                a = o.length,
                s = [];
              for (n = 0; n < a; n++)
                (t = i[o[n]])[2] > 0 ? s.push(t) : delete i[o[n]];
              return s;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(3),
            r = n(7),
            a = n(13),
            s = n(4),
            l = n(14),
            c = n(10),
            u = n(5),
            d = n(0),
            p = n(1);
          (i.create = function (e, t) {
            var n = (e ? e.mouse : null) || (t ? t.mouse : null);
            n ||
              (e && e.render && e.render.canvas
                ? (n = a.create(e.render.canvas))
                : t && t.element
                ? (n = a.create(t.element))
                : ((n = a.create()),
                  d.warn(
                    "MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected"
                  )));
            var o = {
                type: "mouseConstraint",
                mouse: n,
                element: null,
                body: null,
                constraint: c.create({
                  label: "Mouse Constraint",
                  pointA: n.position,
                  pointB: { x: 0, y: 0 },
                  length: 0.01,
                  stiffness: 0.1,
                  angularStiffness: 1,
                  render: { strokeStyle: "#90EE90", lineWidth: 3 },
                }),
                collisionFilter: { category: 1, mask: 4294967295, group: 0 },
              },
              r = d.extend(o, t);
            return (
              s.on(e, "beforeUpdate", function () {
                var t = u.allBodies(e.world);
                i.update(r, t), i._triggerEvents(r);
              }),
              r
            );
          }),
            (i.update = function (e, t) {
              var n = e.mouse,
                i = e.constraint,
                a = e.body;
              if (0 === n.button) {
                if (i.bodyB) r.set(i.bodyB, !1), (i.pointA = n.position);
                else
                  for (var c = 0; c < t.length; c++)
                    if (
                      ((a = t[c]),
                      p.contains(a.bounds, n.position) &&
                        l.canCollide(a.collisionFilter, e.collisionFilter))
                    )
                      for (
                        var u = a.parts.length > 1 ? 1 : 0;
                        u < a.parts.length;
                        u++
                      ) {
                        var d = a.parts[u];
                        if (o.contains(d.vertices, n.position)) {
                          (i.pointA = n.position),
                            (i.bodyB = e.body = a),
                            (i.pointB = {
                              x: n.position.x - a.position.x,
                              y: n.position.y - a.position.y,
                            }),
                            (i.angleB = a.angle),
                            r.set(a, !1),
                            s.trigger(e, "startdrag", { mouse: n, body: a });
                          break;
                        }
                      }
              } else
                (i.bodyB = e.body = null),
                  (i.pointB = null),
                  a && s.trigger(e, "enddrag", { mouse: n, body: a });
            }),
            (i._triggerEvents = function (e) {
              var t = e.mouse,
                n = t.sourceEvents;
              n.mousemove && s.trigger(e, "mousemove", { mouse: t }),
                n.mousedown && s.trigger(e, "mousedown", { mouse: t }),
                n.mouseup && s.trigger(e, "mouseup", { mouse: t }),
                a.clearSourceEvents(t);
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(2),
            r = n(8),
            a = n(1),
            s = n(12),
            l = n(3);
          (i.collides = function (e, t) {
            for (
              var n = [],
                i = t.length,
                o = e.bounds,
                s = r.collides,
                l = a.overlaps,
                c = 0;
              c < i;
              c++
            ) {
              var u = t[c],
                d = u.parts.length,
                p = 1 === d ? 0 : 1;
              if (l(u.bounds, o))
                for (var f = p; f < d; f++) {
                  var v = u.parts[f];
                  if (l(v.bounds, o)) {
                    var y = s(v, e);
                    if (y) {
                      n.push(y);
                      break;
                    }
                  }
                }
            }
            return n;
          }),
            (i.ray = function (e, t, n, r) {
              r = r || 1e-100;
              for (
                var a = o.angle(t, n),
                  l = o.magnitude(o.sub(t, n)),
                  c = 0.5 * (n.x + t.x),
                  u = 0.5 * (n.y + t.y),
                  d = s.rectangle(c, u, l, r, { angle: a }),
                  p = i.collides(d, e),
                  f = 0;
                f < p.length;
                f += 1
              ) {
                var v = p[f];
                v.body = v.bodyB = v.bodyA;
              }
              return p;
            }),
            (i.region = function (e, t, n) {
              for (var i = [], o = 0; o < e.length; o++) {
                var r = e[o],
                  s = a.overlaps(r.bounds, t);
                ((s && !n) || (!s && n)) && i.push(r);
              }
              return i;
            }),
            (i.point = function (e, t) {
              for (var n = [], i = 0; i < e.length; i++) {
                var o = e[i];
                if (a.contains(o.bounds, t))
                  for (
                    var r = 1 === o.parts.length ? 0 : 1;
                    r < o.parts.length;
                    r++
                  ) {
                    var s = o.parts[r];
                    if (a.contains(s.bounds, t) && l.contains(s.vertices, t)) {
                      n.push(o);
                      break;
                    }
                  }
              }
              return n;
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(4),
            r = n(18),
            a = n(0);
          !(function () {
            var e, t, n;
            ("undefined" != typeof window &&
              ((e =
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.msRequestAnimationFrame),
              (t =
                window.cancelAnimationFrame ||
                window.mozCancelAnimationFrame ||
                window.webkitCancelAnimationFrame ||
                window.msCancelAnimationFrame)),
            e) ||
              ((e = function (e) {
                n = setTimeout(function () {
                  e(a.now());
                }, 1e3 / 60);
              }),
              (t = function () {
                clearTimeout(n);
              }));
            (i.create = function (e) {
              var t = a.extend(
                {
                  fps: 60,
                  correction: 1,
                  deltaSampleSize: 60,
                  counterTimestamp: 0,
                  frameCounter: 0,
                  deltaHistory: [],
                  timePrev: null,
                  timeScalePrev: 1,
                  frameRequestId: null,
                  isFixed: !1,
                  enabled: !0,
                },
                e
              );
              return (
                (t.delta = t.delta || 1e3 / t.fps),
                (t.deltaMin = t.deltaMin || 1e3 / t.fps),
                (t.deltaMax = t.deltaMax || 1e3 / (0.5 * t.fps)),
                (t.fps = 1e3 / t.delta),
                t
              );
            }),
              (i.run = function (t, n) {
                return (
                  void 0 !== t.positionIterations &&
                    ((n = t), (t = i.create())),
                  (function o(r) {
                    (t.frameRequestId = e(o)),
                      r && t.enabled && i.tick(t, n, r);
                  })(),
                  t
                );
              }),
              (i.tick = function (e, t, n) {
                var i,
                  a = t.timing,
                  s = 1,
                  l = { timestamp: a.timestamp };
                o.trigger(e, "beforeTick", l),
                  e.isFixed
                    ? (i = e.delta)
                    : ((i = n - e.timePrev || e.delta),
                      (e.timePrev = n),
                      e.deltaHistory.push(i),
                      (e.deltaHistory = e.deltaHistory.slice(
                        -e.deltaSampleSize
                      )),
                      (s =
                        (i =
                          (i =
                            (i = Math.min.apply(null, e.deltaHistory)) <
                            e.deltaMin
                              ? e.deltaMin
                              : i) > e.deltaMax
                            ? e.deltaMax
                            : i) / e.delta),
                      (e.delta = i)),
                  0 !== e.timeScalePrev && (s *= a.timeScale / e.timeScalePrev),
                  0 === a.timeScale && (s = 0),
                  (e.timeScalePrev = a.timeScale),
                  (e.correction = s),
                  (e.frameCounter += 1),
                  n - e.counterTimestamp >= 1e3 &&
                    ((e.fps =
                      e.frameCounter * ((n - e.counterTimestamp) / 1e3)),
                    (e.counterTimestamp = n),
                    (e.frameCounter = 0)),
                  o.trigger(e, "tick", l),
                  o.trigger(e, "beforeUpdate", l),
                  r.update(t, i, s),
                  o.trigger(e, "afterUpdate", l),
                  o.trigger(e, "afterTick", l);
              }),
              (i.stop = function (e) {
                t(e.frameRequestId);
              }),
              (i.start = function (e, t) {
                i.run(e, t);
              });
          })();
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(8),
            r = n(0).deprecated;
          (i.collides = function (e, t) {
            return o.collides(e, t);
          }),
            r(i, "collides", "SAT.collides ➤ replaced by Collision.collides");
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          n(1);
          var o = n(0);
          (i.pathToVertices = function (e, t) {
            "undefined" == typeof window ||
              "SVGPathSeg" in window ||
              o.warn(
                "Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required."
              );
            var n,
              r,
              a,
              s,
              l,
              c,
              u,
              d,
              p,
              f,
              v,
              y = [],
              m = 0,
              g = 0,
              x = 0;
            t = t || 15;
            var h = function (e, t, n) {
                var i = n % 2 == 1 && n > 1;
                if (!p || e != p.x || t != p.y) {
                  p && i ? ((f = p.x), (v = p.y)) : ((f = 0), (v = 0));
                  var o = { x: f + e, y: v + t };
                  (!i && p) || (p = o), y.push(o), (g = f + e), (x = v + t);
                }
              },
              b = function (e) {
                var t = e.pathSegTypeAsLetter.toUpperCase();
                if ("Z" !== t) {
                  switch (t) {
                    case "M":
                    case "L":
                    case "T":
                    case "C":
                    case "S":
                    case "Q":
                      (g = e.x), (x = e.y);
                      break;
                    case "H":
                      g = e.x;
                      break;
                    case "V":
                      x = e.y;
                  }
                  h(g, x, e.pathSegType);
                }
              };
            for (
              i._svgPathToAbsolute(e), a = e.getTotalLength(), c = [], n = 0;
              n < e.pathSegList.numberOfItems;
              n += 1
            )
              c.push(e.pathSegList.getItem(n));
            for (u = c.concat(); m < a; ) {
              if ((l = c[e.getPathSegAtLength(m)]) != d) {
                for (; u.length && u[0] != l; ) b(u.shift());
                d = l;
              }
              switch (l.pathSegTypeAsLetter.toUpperCase()) {
                case "C":
                case "T":
                case "S":
                case "Q":
                case "A":
                  (s = e.getPointAtLength(m)), h(s.x, s.y, 0);
              }
              m += t;
            }
            for (n = 0, r = u.length; n < r; ++n) b(u[n]);
            return y;
          }),
            (i._svgPathToAbsolute = function (e) {
              for (
                var t,
                  n,
                  i,
                  o,
                  r,
                  a,
                  s = e.pathSegList,
                  l = 0,
                  c = 0,
                  u = s.numberOfItems,
                  d = 0;
                d < u;
                ++d
              ) {
                var p = s.getItem(d),
                  f = p.pathSegTypeAsLetter;
                if (/[MLHVCSQTA]/.test(f))
                  "x" in p && (l = p.x), "y" in p && (c = p.y);
                else
                  switch (
                    ("x1" in p && (i = l + p.x1),
                    "x2" in p && (r = l + p.x2),
                    "y1" in p && (o = c + p.y1),
                    "y2" in p && (a = c + p.y2),
                    "x" in p && (l += p.x),
                    "y" in p && (c += p.y),
                    f)
                  ) {
                    case "m":
                      s.replaceItem(e.createSVGPathSegMovetoAbs(l, c), d);
                      break;
                    case "l":
                      s.replaceItem(e.createSVGPathSegLinetoAbs(l, c), d);
                      break;
                    case "h":
                      s.replaceItem(
                        e.createSVGPathSegLinetoHorizontalAbs(l),
                        d
                      );
                      break;
                    case "v":
                      s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(c), d);
                      break;
                    case "c":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoCubicAbs(l, c, i, o, r, a),
                        d
                      );
                      break;
                    case "s":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoCubicSmoothAbs(l, c, r, a),
                        d
                      );
                      break;
                    case "q":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoQuadraticAbs(l, c, i, o),
                        d
                      );
                      break;
                    case "t":
                      s.replaceItem(
                        e.createSVGPathSegCurvetoQuadraticSmoothAbs(l, c),
                        d
                      );
                      break;
                    case "a":
                      s.replaceItem(
                        e.createSVGPathSegArcAbs(
                          l,
                          c,
                          p.r1,
                          p.r2,
                          p.angle,
                          p.largeArcFlag,
                          p.sweepFlag
                        ),
                        d
                      );
                      break;
                    case "z":
                    case "Z":
                      (l = t), (c = n);
                  }
                ("M" != f && "m" != f) || ((t = l), (n = c));
              }
            });
        },
        function (e, t, n) {
          var i = {};
          e.exports = i;
          var o = n(5);
          n(0);
          (i.create = o.create),
            (i.add = o.add),
            (i.remove = o.remove),
            (i.clear = o.clear),
            (i.addComposite = o.addComposite),
            (i.addBody = o.addBody),
            (i.addConstraint = o.addConstraint);
        },
      ]);
    });
    /*
MIT License

Copyright (c) 2012 - 2021 @jonobr1 / http://jono.fyi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
    var Two = (() => {
      var ye = Object.defineProperty;
      var qi = Object.getOwnPropertyDescriptor;
      var Ki = Object.getOwnPropertyNames;
      var $i = Object.prototype.hasOwnProperty;
      var Ji = (i, t, e) =>
        t in i
          ? ye(i, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: e,
            })
          : (i[t] = e);
      var Ce = (i, t) => {
          for (var e in t) ye(i, e, { get: t[e], enumerable: !0 });
        },
        Zi = (i, t, e, s) => {
          if ((t && typeof t == "object") || typeof t == "function")
            for (let r of Ki(t))
              !$i.call(i, r) &&
                r !== e &&
                ye(i, r, {
                  get: () => t[r],
                  enumerable: !(s = qi(t, r)) || s.enumerable,
                });
          return i;
        };
      var Qi = (i) => Zi(ye({}, "__esModule", { value: !0 }), i);
      var v = (i, t, e) => (Ji(i, typeof t != "symbol" ? t + "" : t, e), e);
      var $s = {};
      Ce($s, { default: () => P });
      var w = { move: "M", line: "L", curve: "C", arc: "A", close: "Z" };
      var Ie = {};
      Ce(Ie, {
        HALF_PI: () => J,
        NumArray: () => bt,
        TWO_PI: () => $,
        decomposeMatrix: () => Ot,
        getComputedMatrix: () => pt,
        getPoT: () => Pe,
        lerp: () => nt,
        mod: () => it,
        setMatrix: () => Oe,
        toFixed: () => K,
      });
      var H;
      typeof window < "u"
        ? (H = window)
        : typeof global < "u"
        ? (H = global)
        : typeof self < "u" && (H = self);
      var li,
        $ = Math.PI * 2,
        J = Math.PI * 0.5;
      function Ot(i, t, e, s, r, n) {
        let a;
        return (
          arguments.length <= 1
            ? ((a = i.a), (t = i.b), (e = i.c), (s = i.d), (r = i.e), (n = i.f))
            : (a = i),
          {
            translateX: r,
            translateY: n,
            scaleX: Math.sqrt(a * a + t * t),
            scaleY: Math.sqrt(e * e + s * s),
            rotation: (180 * Math.atan2(t, a)) / Math.PI,
          }
        );
      }
      function Oe(i) {
        li = i;
      }
      function pt(i, t) {
        t = (t && t.identity()) || new li();
        let e = i,
          s = [];
        for (; e && e._matrix; ) s.push(e._matrix), (e = e.parent);
        s.reverse();
        for (let r = 0; r < s.length; r++) {
          let a = s[r].elements;
          t.multiply(
            a[0],
            a[1],
            a[2],
            a[3],
            a[4],
            a[5],
            a[6],
            a[7],
            a[8],
            a[9]
          );
        }
        return t;
      }
      function nt(i, t, e) {
        return e * (t - i) + i;
      }
      var Le = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096];
      function Pe(i) {
        let t = 0;
        for (; Le[t] && Le[t] < i; ) t++;
        return Le[t];
      }
      function it(i, t) {
        for (; i < 0; ) i += t;
        return i % t;
      }
      var bt = H.Float32Array || Array,
        ts = Math.floor;
      function K(i) {
        return ts(i * 1e6) / 1e6;
      }
      var Ve = {};
      Ce(Ve, {
        Curve: () => Ut,
        getAnchorsFromArcData: () => is,
        getComponentOnCubicBezier: () => Wt,
        getControlPoints: () => ui,
        getCurveBoundingBox: () => je,
        getCurveFromPoints: () => Ne,
        getCurveLength: () => Be,
        getReflection: () => xe,
        integrate: () => ci,
        subdivide: () => re,
      });
      var p = class {
        _events = {};
        _bound = !1;
        constructor() {}
        addEventListener(t, e) {
          return (
            (this._events[t] || (this._events[t] = [])).push(e),
            (this._bound = !0),
            this
          );
        }
        on() {
          return this.addEventListener.apply(this, arguments);
        }
        bind() {
          return this.addEventListener.apply(this, arguments);
        }
        removeEventListener(t, e) {
          if (!this._events) return this;
          if (!t && !e) return (this._events = {}), (this._bound = !1), this;
          let s = t ? [t] : Object.keys(this._events);
          for (let r = 0, n = s.length; r < n; r++) {
            t = s[r];
            let a = this._events[t];
            if (a) {
              let o = [];
              if (e)
                for (let h = 0, l = a.length; h < l; h++) {
                  let f = a[h];
                  (f = f.handler ? f.handler : f), e !== f && o.push(f);
                }
              this._events[t] = o;
            }
          }
          return this;
        }
        off() {
          return this.removeEventListener.apply(this, arguments);
        }
        unbind() {
          return this.removeEventListener.apply(this, arguments);
        }
        dispatchEvent(t) {
          if (!this._events) return this;
          let e = Array.prototype.slice.call(arguments, 1),
            s = this._events[t];
          if (s) for (let r = 0; r < s.length; r++) s[r].call(this, ...e);
          return this;
        }
        trigger() {
          return this.dispatchEvent.apply(this, arguments);
        }
        listen(t, e, s) {
          let r = this;
          t && ((n.obj = t), (n.name = e), (n.handler = s), t.on(e, n));
          function n() {
            s.apply(r, arguments);
          }
          return r;
        }
        ignore(t, e, s) {
          return t.off(e, s), this;
        }
      };
      v(p, "Types", {
        play: "play",
        pause: "pause",
        update: "update",
        render: "render",
        resize: "resize",
        change: "change",
        remove: "remove",
        insert: "insert",
        order: "order",
        load: "load",
      }),
        v(p, "Methods", [
          "addEventListener",
          "on",
          "removeEventListener",
          "off",
          "unbind",
          "dispatchEvent",
          "trigger",
          "listen",
          "ignore",
        ]);
      var hi = {
          x: {
            enumerable: !0,
            get: function () {
              return this._x;
            },
            set: function (i) {
              this._x !== i &&
                ((this._x = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          y: {
            enumerable: !0,
            get: function () {
              return this._y;
            },
            set: function (i) {
              this._y !== i &&
                ((this._y = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
        },
        vt = class extends p {
          _x = 0;
          _y = 0;
          constructor(t = 0, e = 0) {
            super();
            for (let s in hi) Object.defineProperty(this, s, hi[s]);
            (this.x = t), (this.y = e);
          }
          static add(t, e) {
            return new vt(t.x + e.x, t.y + e.y);
          }
          static sub(t, e) {
            return new vt(t.x - e.x, t.y - e.y);
          }
          static subtract(t, e) {
            return vt.sub(t, e);
          }
          static ratioBetween(t, e) {
            return (t.x * e.x + t.y * e.y) / (t.length() * e.length());
          }
          static angleBetween(t, e) {
            if (arguments.length >= 4) {
              let n = arguments[0] - arguments[2],
                a = arguments[1] - arguments[3];
              return Math.atan2(a, n);
            }
            let s = t.x - e.x,
              r = t.y - e.y;
            return Math.atan2(r, s);
          }
          static distanceBetween(t, e) {
            return Math.sqrt(vt.distanceBetweenSquared(t, e));
          }
          static distanceBetweenSquared(t, e) {
            let s = t.x - e.x,
              r = t.y - e.y;
            return s * s + r * r;
          }
          set(t, e) {
            return (this.x = t), (this.y = e), this;
          }
          copy(t) {
            return (this.x = t.x), (this.y = t.y), this;
          }
          clear() {
            return (this.x = 0), (this.y = 0), this;
          }
          clone() {
            return new vt(this.x, this.y);
          }
          add(t, e) {
            return arguments.length <= 0
              ? this
              : (arguments.length <= 1
                  ? typeof t == "number"
                    ? ((this.x += t), (this.y += t))
                    : t &&
                      typeof t.x == "number" &&
                      typeof t.y == "number" &&
                      ((this.x += t.x), (this.y += t.y))
                  : ((this.x += t), (this.y += e)),
                this);
          }
          addSelf(t) {
            return this.add.apply(this, arguments);
          }
          sub(t, e) {
            return arguments.length <= 0
              ? this
              : (arguments.length <= 1
                  ? typeof t == "number"
                    ? ((this.x -= t), (this.y -= t))
                    : t &&
                      typeof t.x == "number" &&
                      typeof t.y == "number" &&
                      ((this.x -= t.x), (this.y -= t.y))
                  : ((this.x -= t), (this.y -= e)),
                this);
          }
          subtract() {
            return this.sub.apply(this, arguments);
          }
          subSelf(t) {
            return this.sub.apply(this, arguments);
          }
          subtractSelf(t) {
            return this.sub.apply(this, arguments);
          }
          multiply(t, e) {
            return arguments.length <= 0
              ? this
              : (arguments.length <= 1
                  ? typeof t == "number"
                    ? ((this.x *= t), (this.y *= t))
                    : t &&
                      typeof t.x == "number" &&
                      typeof t.y == "number" &&
                      ((this.x *= t.x), (this.y *= t.y))
                  : ((this.x *= t), (this.y *= e)),
                this);
          }
          multiplySelf(t) {
            return this.multiply.apply(this, arguments);
          }
          multiplyScalar(t) {
            return this.multiply(t);
          }
          divide(t, e) {
            return arguments.length <= 0
              ? this
              : (arguments.length <= 1
                  ? typeof t == "number"
                    ? ((this.x /= t), (this.y /= t))
                    : t &&
                      typeof t.x == "number" &&
                      typeof t.y == "number" &&
                      ((this.x /= t.x), (this.y /= t.y))
                  : ((this.x /= t), (this.y /= e)),
                isNaN(this.x) && (this.x = 0),
                isNaN(this.y) && (this.y = 0),
                this);
          }
          divideSelf(t) {
            return this.divide.apply(this, arguments);
          }
          divideScalar(t) {
            return this.divide(t);
          }
          negate() {
            return this.multiply(-1);
          }
          dot(t) {
            return this.x * t.x + this.y * t.y;
          }
          length() {
            return Math.sqrt(this.lengthSquared());
          }
          lengthSquared() {
            return this.x * this.x + this.y * this.y;
          }
          normalize() {
            return this.divideScalar(this.length());
          }
          distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t));
          }
          distanceToSquared(t) {
            let e = this.x - t.x,
              s = this.y - t.y;
            return e * e + s * s;
          }
          setLength(t) {
            return this.normalize().multiplyScalar(t);
          }
          equals(t, e) {
            return (e = typeof e > "u" ? 1e-4 : e), this.distanceTo(t) < e;
          }
          lerp(t, e) {
            let s = (t.x - this.x) * e + this.x,
              r = (t.y - this.y) * e + this.y;
            return this.set(s, r);
          }
          isZero(t) {
            return (t = typeof t > "u" ? 1e-4 : t), this.length() < t;
          }
          toString() {
            return this.x + ", " + this.y;
          }
          toObject() {
            return { x: this.x, y: this.y };
          }
          rotate(t) {
            let e = this.x,
              s = this.y,
              r = Math.cos(t),
              n = Math.sin(t);
            return (this.x = e * r - s * n), (this.y = e * n + s * r), this;
          }
        },
        k = vt;
      v(k, "zero", new vt()),
        v(k, "left", new vt(-1, 0)),
        v(k, "right", new vt(1, 0)),
        v(k, "up", new vt(0, -1)),
        v(k, "down", new vt(0, 1));
      var F = class extends k {
          controls = { left: new k(), right: new k() };
          _command = w.move;
          _relative = !0;
          _rx = 0;
          _ry = 0;
          _xAxisRotation = 0;
          _largeArcFlag = 0;
          _sweepFlag = 1;
          constructor(t = 0, e = 0, s = 0, r = 0, n = 0, a = 0, o = w.move) {
            super(t, e);
            for (let l in fi) Object.defineProperty(this, l, fi[l]);
            (this.command = o), (this.relative = !0);
            let h = F.makeBroadcast(this);
            this.controls.left.set(s, r).addEventListener(p.Types.change, h),
              this.controls.right.set(n, a).addEventListener(p.Types.change, h);
          }
          static makeBroadcast(t) {
            return e;
            function e() {
              t._bound && t.dispatchEvent(p.Types.change);
            }
          }
          copy(t) {
            return (
              (this.x = t.x),
              (this.y = t.y),
              typeof t.command == "string" && (this.command = t.command),
              t.controls &&
                (t.controls.left && this.controls.left.copy(t.controls.left),
                t.controls.right && this.controls.right.copy(t.controls.right)),
              typeof t.relative == "boolean" && (this.relative = t.relative),
              typeof t.rx == "number" && (this.rx = t.rx),
              typeof t.ry == "number" && (this.ry = t.ry),
              typeof t.xAxisRotation == "number" &&
                (this.xAxisRotation = t.xAxisRotation),
              typeof t.largeArcFlag == "number" &&
                (this.largeArcFlag = t.largeArcFlag),
              typeof t.sweepFlag == "number" && (this.sweepFlag = t.sweepFlag),
              this
            );
          }
          clone() {
            return new F().copy(this);
          }
          toObject() {
            return {
              x: this.x,
              y: this.y,
              command: this.command,
              relative: this.relative,
              controls: {
                left: this.controls.left.toObject(),
                right: this.controls.right.toObject(),
              },
              rx: this.rx,
              ry: this.ry,
              xAxisRotation: this.xAxisRotation,
              largeArcFlag: this.largeArcFlag,
              sweepFlag: this.sweepFlag,
            };
          }
          toString() {
            return JSON.stringify(this.toObject());
          }
        },
        fi = {
          command: {
            enumerable: !0,
            get: function () {
              return this._command;
            },
            set: function (i) {
              this._command !== i &&
                ((this._command = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          relative: {
            enumerable: !0,
            get: function () {
              return this._relative;
            },
            set: function (i) {
              this._relative !== !!i &&
                ((this._relative = !!i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          rx: {
            enumerable: !0,
            get: function () {
              return this._rx;
            },
            set: function (i) {
              this._rx !== i &&
                ((this._rx = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          ry: {
            enumerable: !0,
            get: function () {
              return this._ry;
            },
            set: function (i) {
              this._ry !== i &&
                ((this._ry = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          xAxisRotation: {
            enumerable: !0,
            get: function () {
              return this._xAxisRotation;
            },
            set: function (i) {
              this._xAxisRotation !== i &&
                ((this._xAxisRotation = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          largeArcFlag: {
            enumerable: !0,
            get: function () {
              return this._largeArcFlag;
            },
            set: function (i) {
              this._largeArcFlag !== i &&
                ((this._largeArcFlag = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
          sweepFlag: {
            get: function () {
              return this._sweepFlag;
            },
            set: function (i) {
              this._sweepFlag !== i &&
                ((this._sweepFlag = i),
                this._bound && this.dispatchEvent(p.Types.change));
            },
          },
        };
      var es = 0,
        Y = {
          nextFrameID: null,
          Types: {
            webgl: "WebGLRenderer",
            svg: "SVGRenderer",
            canvas: "CanvasRenderer",
          },
          Version: "v0.8.11",
          PublishDate: "2023-01-16T20:06:29.090Z",
          Identifier: "two-",
          Resolution: 12,
          AutoCalculateImportedMatrices: !0,
          Instances: [],
          uniqueId: function () {
            return es++;
          },
        };
      var Ut = {
        CollinearityEpsilon: Math.pow(10, -30),
        RecursionLimit: 16,
        CuspLimit: 0,
        Tolerance: { distance: 0.25, angle: 0, epsilon: Number.EPSILON },
        abscissas: [
          [0.5773502691896257],
          [0, 0.7745966692414834],
          [0.33998104358485626, 0.8611363115940526],
          [0, 0.5384693101056831, 0.906179845938664],
          [0.2386191860831969, 0.6612093864662645, 0.932469514203152],
          [0, 0.4058451513773972, 0.7415311855993945, 0.9491079123427585],
          [
            0.1834346424956498, 0.525532409916329, 0.7966664774136267,
            0.9602898564975363,
          ],
          [
            0, 0.3242534234038089, 0.6133714327005904, 0.8360311073266358,
            0.9681602395076261,
          ],
          [
            0.14887433898163122, 0.4333953941292472, 0.6794095682990244,
            0.8650633666889845, 0.9739065285171717,
          ],
          [
            0, 0.26954315595234496, 0.5190961292068118, 0.7301520055740494,
            0.8870625997680953, 0.978228658146057,
          ],
          [
            0.1252334085114689, 0.3678314989981802, 0.5873179542866175,
            0.7699026741943047, 0.9041172563704749, 0.9815606342467192,
          ],
          [
            0, 0.2304583159551348, 0.44849275103644687, 0.6423493394403402,
            0.8015780907333099, 0.9175983992229779, 0.9841830547185881,
          ],
          [
            0.10805494870734367, 0.31911236892788974, 0.5152486363581541,
            0.6872929048116855, 0.827201315069765, 0.9284348836635735,
            0.9862838086968123,
          ],
          [
            0, 0.20119409399743451, 0.3941513470775634, 0.5709721726085388,
            0.7244177313601701, 0.8482065834104272, 0.937273392400706,
            0.9879925180204854,
          ],
          [
            0.09501250983763744, 0.2816035507792589, 0.45801677765722737,
            0.6178762444026438, 0.755404408355003, 0.8656312023878318,
            0.9445750230732326, 0.9894009349916499,
          ],
        ],
        weights: [
          [1],
          [0.8888888888888888, 0.5555555555555556],
          [0.6521451548625461, 0.34785484513745385],
          [0.5688888888888889, 0.47862867049936647, 0.23692688505618908],
          [0.46791393457269104, 0.3607615730481386, 0.17132449237917036],
          [
            0.4179591836734694, 0.3818300505051189, 0.27970539148927664,
            0.1294849661688697,
          ],
          [
            0.362683783378362, 0.31370664587788727, 0.22238103445337448,
            0.10122853629037626,
          ],
          [
            0.3302393550012598, 0.31234707704000286, 0.26061069640293544,
            0.1806481606948574, 0.08127438836157441,
          ],
          [
            0.29552422471475287, 0.26926671930999635, 0.21908636251598204,
            0.1494513491505806, 0.06667134430868814,
          ],
          [
            0.2729250867779006, 0.26280454451024665, 0.23319376459199048,
            0.18629021092773426, 0.1255803694649046, 0.05566856711617366,
          ],
          [
            0.24914704581340277, 0.2334925365383548, 0.20316742672306592,
            0.16007832854334622, 0.10693932599531843, 0.04717533638651183,
          ],
          [
            0.2325515532308739, 0.22628318026289723, 0.2078160475368885,
            0.17814598076194574, 0.13887351021978725, 0.09212149983772845,
            0.04048400476531588,
          ],
          [
            0.2152638534631578, 0.2051984637212956, 0.18553839747793782,
            0.15720316715819355, 0.12151857068790319, 0.08015808715976021,
            0.03511946033175186,
          ],
          [
            0.2025782419255613, 0.19843148532711158, 0.1861610000155622,
            0.16626920581699392, 0.13957067792615432, 0.10715922046717194,
            0.07036604748810812, 0.03075324199611727,
          ],
          [
            0.1894506104550685, 0.18260341504492358, 0.16915651939500254,
            0.14959598881657674, 0.12462897125553388, 0.09515851168249279,
            0.062253523938647894, 0.027152459411754096,
          ],
        ],
      };
      function Wt(i, t, e, s, r) {
        let n = 1 - i;
        return (
          n * n * n * t + 3 * n * n * i * e + 3 * n * i * i * s + i * i * i * r
        );
      }
      function re(i, t, e, s, r, n, a, o, h) {
        h = h || Ut.RecursionLimit;
        let l = h + 1;
        if (Math.abs(i - a) < 0.001 && Math.abs(t - o) < 0.001)
          return [new F(a, o)];
        let f = [];
        for (let u = 0; u < l; u++) {
          let _ = u / l,
            d = Wt(_, i, e, r, a),
            c = Wt(_, t, s, n, o);
          f.push(new F(d, c));
        }
        return f;
      }
      function Be(i, t, e, s, r, n, a, o, h) {
        if (i === e && t === s && r === a && n === o) {
          let b = a - i,
            g = o - t;
          return Math.sqrt(b * b + g * g);
        }
        let l = 9 * (e - r) + 3 * (a - i),
          f = 6 * (i + r) - 12 * e,
          u = 3 * (e - i),
          _ = 9 * (s - n) + 3 * (o - t),
          d = 6 * (t + n) - 12 * s,
          c = 3 * (s - t);
        function m(b) {
          let g = (l * b + f) * b + u,
            y = (_ * b + d) * b + c;
          return Math.sqrt(g * g + y * y);
        }
        return ci(m, 0, 1, h || Ut.RecursionLimit);
      }
      function je(i, t, e, s, r, n, a, o) {
        let h = [],
          l = [[], []],
          f,
          u,
          _,
          d,
          c,
          m,
          b,
          g;
        for (let A = 0; A < 2; ++A) {
          if (
            (A == 0
              ? ((u = 6 * i - 12 * e + 6 * r),
                (f = -3 * i + 9 * e - 9 * r + 3 * a),
                (_ = 3 * e - 3 * i))
              : ((u = 6 * t - 12 * s + 6 * n),
                (f = -3 * t + 9 * s - 9 * n + 3 * o),
                (_ = 3 * s - 3 * t)),
            Math.abs(f) < 1e-12)
          ) {
            if (Math.abs(u) < 1e-12) continue;
            (d = -_ / u), 0 < d && d < 1 && h.push(d);
            continue;
          }
          (b = u * u - 4 * _ * f),
            (g = Math.sqrt(b)),
            !(b < 0) &&
              ((c = (-u + g) / (2 * f)),
              0 < c && c < 1 && h.push(c),
              (m = (-u - g) / (2 * f)),
              0 < m && m < 1 && h.push(m));
        }
        let y = h.length,
          x = y,
          R;
        for (; y--; )
          (d = h[y]),
            (R = 1 - d),
            (l[0][y] =
              R * R * R * i +
              3 * R * R * d * e +
              3 * R * d * d * r +
              d * d * d * a),
            (l[1][y] =
              R * R * R * t +
              3 * R * R * d * s +
              3 * R * d * d * n +
              d * d * d * o);
        return (
          (l[0][x] = i),
          (l[1][x] = t),
          (l[0][x + 1] = a),
          (l[1][x + 1] = o),
          (l[0].length = l[1].length = x + 2),
          {
            min: { x: Math.min.apply(0, l[0]), y: Math.min.apply(0, l[1]) },
            max: { x: Math.max.apply(0, l[0]), y: Math.max.apply(0, l[1]) },
          }
        );
      }
      function ci(i, t, e, s) {
        let r = Ut.abscissas[s - 2],
          n = Ut.weights[s - 2],
          a = 0.5 * (e - t),
          o = a + t,
          h = 0,
          l = (s + 1) >> 1,
          f = s & 1 ? n[h++] * i(o) : 0;
        for (; h < l; ) {
          let u = a * r[h];
          f += n[h++] * (i(o + u) + i(o - u));
        }
        return a * f;
      }
      function Ne(i, t) {
        let e = i.length,
          s = e - 1;
        for (let r = 0; r < e; r++) {
          let n = i[r],
            a = t ? it(r - 1, e) : Math.max(r - 1, 0),
            o = t ? it(r + 1, e) : Math.min(r + 1, s),
            h = i[a],
            l = n,
            f = i[o];
          ui(h, l, f), (l.command = r === 0 ? w.move : w.curve);
        }
      }
      function ui(i, t, e) {
        let s = k.angleBetween(i, t),
          r = k.angleBetween(e, t),
          n = k.distanceBetween(i, t),
          a = k.distanceBetween(e, t),
          o = (s + r) / 2;
        return n < 1e-4 || a < 1e-4
          ? (typeof t.relative == "boolean" &&
              !t.relative &&
              (t.controls.left.copy(t), t.controls.right.copy(t)),
            t)
          : ((n *= 0.33),
            (a *= 0.33),
            r < s ? (o += J) : (o -= J),
            (t.controls.left.x = Math.cos(o) * n),
            (t.controls.left.y = Math.sin(o) * n),
            (o -= Math.PI),
            (t.controls.right.x = Math.cos(o) * a),
            (t.controls.right.y = Math.sin(o) * a),
            typeof t.relative == "boolean" &&
              !t.relative &&
              ((t.controls.left.x += t.x),
              (t.controls.left.y += t.y),
              (t.controls.right.x += t.x),
              (t.controls.right.y += t.y)),
            t);
      }
      function xe(i, t, e) {
        return new k(
          2 * i.x - (t.x + i.x) - (e ? i.x : 0),
          2 * i.y - (t.y + i.y) - (e ? i.y : 0)
        );
      }
      function is(i, t, e, s, r, n, a) {
        let o = Y.Resolution,
          h = [];
        for (let l = 0; l < o; l++) {
          let f = (l + 1) / o;
          a && (f = 1 - f);
          let u = f * n + r,
            _ = e * Math.cos(u),
            d = s * Math.sin(u),
            c = new F(_, d);
          (c.command = w.line), h.push(c);
        }
      }
      var ss = H.devicePixelRatio || 1;
      function rs(i) {
        return (
          i.webkitBackingStorePixelRatio ||
          i.mozBackingStorePixelRatio ||
          i.msBackingStorePixelRatio ||
          i.oBackingStorePixelRatio ||
          i.backingStorePixelRatio ||
          1
        );
      }
      function Xt(i) {
        return ss / rs(i);
      }
      var di = Array.prototype.slice;
      function ns(i) {
        if (i == null) return !1;
        let t = i.length;
        return typeof t == "number" && t >= 0 && t < 4294967296;
      }
      var S = {
        isNaN: function (i) {
          return typeof i == "number" && i !== +i;
        },
        isElement: function (i) {
          return !!(i && i.nodeType === 1);
        },
        isObject: function (i) {
          let t = typeof i;
          return t === "function" || (t === "object" && !!i);
        },
        extend: function (i) {
          let t = di.call(arguments, 1);
          for (let e = 0; e < t.length; e++) {
            let s = t[e];
            for (let r in s) i[r] = s[r];
          }
          return i;
        },
        defaults: function (i) {
          let t = di.call(arguments, 1);
          for (let e = 0; e < t.length; e++) {
            let s = t[e];
            for (let r in s) i[r] === void 0 && (i[r] = s[r]);
          }
          return i;
        },
        each: function (i, t, e) {
          let s = e || this,
            r = !ns(i) && Object.keys(i),
            n = (r || i).length;
          for (let a = 0; a < n; a++) {
            let o = r ? r[a] : a;
            t.call(s, i[o], o, i);
          }
          return i;
        },
        performance: H.performance && H.performance.now ? H.performance : Date,
      };
      var St = class extends p {
          _flagId = !1;
          _flagClassName = !1;
          _renderer = {};
          _id = "";
          _className = "";
          classList = [];
          constructor() {
            super();
            for (let t in _i) Object.defineProperty(this, t, _i[t]);
          }
          flagReset() {
            this._flagId = this._flagClassName = !1;
          }
        },
        _i = {
          renderer: {
            enumerable: !1,
            get: function () {
              return this._renderer;
            },
          },
          id: {
            enumerable: !0,
            get: function () {
              return this._id;
            },
            set: function (i) {
              let t = this._id;
              i !== this._id &&
                ((this._id = i),
                (this._flagId = !0),
                this.parent &&
                  (delete this.parent.children.ids[t],
                  (this.parent.children.ids[this._id] = this)));
            },
          },
          className: {
            enumerable: !0,
            get: function () {
              return this._className;
            },
            set: function (i) {
              this._className !== i &&
                ((this._flagClassName = !0),
                (this.classList = i.split(/\s+?/)),
                (this._className = i));
            },
          },
        };
      var as = Math.cos,
        os = Math.sin,
        gi = Math.tan,
        ze = [],
        mt = class extends p {
          elements = new bt(9);
          manual = !1;
          constructor(t, e, s, r, n, a) {
            super();
            let o = t;
            Array.isArray(o) || (o = Array.prototype.slice.call(arguments)),
              this.identity(),
              o.length > 0 && this.set(o);
          }
          static Multiply(t, e, s) {
            if (e.length <= 3) {
              let E = t,
                C,
                j,
                M,
                T = e[0] || 0,
                N = e[1] || 0,
                z = e[2] || 0;
              return (
                (C = E[0] * T + E[1] * N + E[2] * z),
                (j = E[3] * T + E[4] * N + E[5] * z),
                (M = E[6] * T + E[7] * N + E[8] * z),
                { x: C, y: j, z: M }
              );
            }
            let r = t[0],
              n = t[1],
              a = t[2],
              o = t[3],
              h = t[4],
              l = t[5],
              f = t[6],
              u = t[7],
              _ = t[8],
              d = e[0],
              c = e[1],
              m = e[2],
              b = e[3],
              g = e[4],
              y = e[5],
              x = e[6],
              R = e[7],
              A = e[8];
            return (
              (s = s || new bt(9)),
              (s[0] = r * d + n * b + a * x),
              (s[1] = r * c + n * g + a * R),
              (s[2] = r * m + n * y + a * A),
              (s[3] = o * d + h * b + l * x),
              (s[4] = o * c + h * g + l * R),
              (s[5] = o * m + h * y + l * A),
              (s[6] = f * d + u * b + _ * x),
              (s[7] = f * c + u * g + _ * R),
              (s[8] = f * m + u * y + _ * A),
              s
            );
          }
          set(t, e, s, r, n, a, o, h, l) {
            if (typeof e > "u") {
              let f = t;
              (t = f[0]),
                (e = f[1]),
                (s = f[2]),
                (r = f[3]),
                (n = f[4]),
                (a = f[5]),
                (o = f[6]),
                (h = f[7]),
                (l = f[8]);
            }
            return (
              (this.elements[0] = t),
              (this.elements[1] = e),
              (this.elements[2] = s),
              (this.elements[3] = r),
              (this.elements[4] = n),
              (this.elements[5] = a),
              (this.elements[6] = o),
              (this.elements[7] = h),
              (this.elements[8] = l),
              this.trigger(p.Types.change)
            );
          }
          copy(t) {
            return (
              (this.elements[0] = t.elements[0]),
              (this.elements[1] = t.elements[1]),
              (this.elements[2] = t.elements[2]),
              (this.elements[3] = t.elements[3]),
              (this.elements[4] = t.elements[4]),
              (this.elements[5] = t.elements[5]),
              (this.elements[6] = t.elements[6]),
              (this.elements[7] = t.elements[7]),
              (this.elements[8] = t.elements[8]),
              (this.manual = t.manual),
              this.trigger(p.Types.change)
            );
          }
          identity() {
            return (
              (this.elements[0] = mt.Identity[0]),
              (this.elements[1] = mt.Identity[1]),
              (this.elements[2] = mt.Identity[2]),
              (this.elements[3] = mt.Identity[3]),
              (this.elements[4] = mt.Identity[4]),
              (this.elements[5] = mt.Identity[5]),
              (this.elements[6] = mt.Identity[6]),
              (this.elements[7] = mt.Identity[7]),
              (this.elements[8] = mt.Identity[8]),
              this.trigger(p.Types.change)
            );
          }
          multiply(t, e, s, r, n, a, o, h, l) {
            if (typeof e > "u")
              return (
                (this.elements[0] *= t),
                (this.elements[1] *= t),
                (this.elements[2] *= t),
                (this.elements[3] *= t),
                (this.elements[4] *= t),
                (this.elements[5] *= t),
                (this.elements[6] *= t),
                (this.elements[7] *= t),
                (this.elements[8] *= t),
                this.trigger(p.Types.change)
              );
            if (typeof r > "u") {
              (t = t || 0), (e = e || 0), (s = s || 0), (n = this.elements);
              let V = n[0] * t + n[1] * e + n[2] * s,
                ut = n[3] * t + n[4] * e + n[5] * s,
                dt = n[6] * t + n[7] * e + n[8] * s;
              return { x: V, y: ut, z: dt };
            }
            let f = this.elements,
              u = [t, e, s, r, n, a, o, h, l],
              _ = f[0],
              d = f[1],
              c = f[2],
              m = f[3],
              b = f[4],
              g = f[5],
              y = f[6],
              x = f[7],
              R = f[8],
              A = u[0],
              E = u[1],
              C = u[2],
              j = u[3],
              M = u[4],
              T = u[5],
              N = u[6],
              z = u[7],
              X = u[8];
            return (
              (this.elements[0] = _ * A + d * j + c * N),
              (this.elements[1] = _ * E + d * M + c * z),
              (this.elements[2] = _ * C + d * T + c * X),
              (this.elements[3] = m * A + b * j + g * N),
              (this.elements[4] = m * E + b * M + g * z),
              (this.elements[5] = m * C + b * T + g * X),
              (this.elements[6] = y * A + x * j + R * N),
              (this.elements[7] = y * E + x * M + R * z),
              (this.elements[8] = y * C + x * T + R * X),
              this.trigger(p.Types.change)
            );
          }
          inverse(t) {
            let e = this.elements;
            t = t || new mt();
            let s = e[0],
              r = e[1],
              n = e[2],
              a = e[3],
              o = e[4],
              h = e[5],
              l = e[6],
              f = e[7],
              u = e[8],
              _ = u * o - h * f,
              d = -u * a + h * l,
              c = f * a - o * l,
              m = s * _ + r * d + n * c;
            return m
              ? ((m = 1 / m),
                (t.elements[0] = _ * m),
                (t.elements[1] = (-u * r + n * f) * m),
                (t.elements[2] = (h * r - n * o) * m),
                (t.elements[3] = d * m),
                (t.elements[4] = (u * s - n * l) * m),
                (t.elements[5] = (-h * s + n * a) * m),
                (t.elements[6] = c * m),
                (t.elements[7] = (-f * s + r * l) * m),
                (t.elements[8] = (o * s - r * a) * m),
                t)
              : null;
          }
          scale(t, e) {
            return (
              arguments.length <= 1 && (e = t),
              this.multiply(t, 0, 0, 0, e, 0, 0, 0, 1)
            );
          }
          rotate(t) {
            let e = as(t),
              s = os(t);
            return this.multiply(e, -s, 0, s, e, 0, 0, 0, 1);
          }
          translate(t, e) {
            return this.multiply(1, 0, t, 0, 1, e, 0, 0, 1);
          }
          skewX(t) {
            let e = gi(t);
            return this.multiply(1, e, 0, 0, 1, 0, 0, 0, 1);
          }
          skewY(t) {
            let e = gi(t);
            return this.multiply(1, 0, 0, e, 1, 0, 0, 0, 1);
          }
          toString(t) {
            return (
              (ze.length = 0), this.toTransformArray(t, ze), ze.map(K).join(" ")
            );
          }
          toTransformArray(t, e) {
            let s = this.elements,
              r = !!e,
              n = s[0],
              a = s[1],
              o = s[2],
              h = s[3],
              l = s[4],
              f = s[5];
            if (t) {
              let u = s[6],
                _ = s[7],
                d = s[8];
              if (r) {
                (e[0] = n),
                  (e[1] = h),
                  (e[2] = u),
                  (e[3] = a),
                  (e[4] = l),
                  (e[5] = _),
                  (e[6] = o),
                  (e[7] = f),
                  (e[8] = d);
                return;
              }
              return [n, h, u, a, l, _, o, f, d];
            }
            if (r) {
              (e[0] = n),
                (e[1] = h),
                (e[2] = a),
                (e[3] = l),
                (e[4] = o),
                (e[5] = f);
              return;
            }
            return [n, h, a, l, o, f];
          }
          toArray(t, e) {
            let s = this.elements,
              r = !!e,
              n = s[0],
              a = s[1],
              o = s[2],
              h = s[3],
              l = s[4],
              f = s[5];
            if (t) {
              let u = s[6],
                _ = s[7],
                d = s[8];
              if (r) {
                (e[0] = n),
                  (e[1] = a),
                  (e[2] = o),
                  (e[3] = h),
                  (e[4] = l),
                  (e[5] = f),
                  (e[6] = u),
                  (e[7] = _),
                  (e[8] = d);
                return;
              }
              return [n, a, o, h, l, f, u, _, d];
            }
            if (r) {
              (e[0] = n),
                (e[1] = a),
                (e[2] = o),
                (e[3] = h),
                (e[4] = l),
                (e[5] = f);
              return;
            }
            return [n, a, o, h, l, f];
          }
          toObject() {
            return { elements: this.toArray(!0), manual: !!this.manual };
          }
          clone() {
            return new mt().copy(this);
          }
        },
        at = mt;
      v(at, "Identity", [1, 0, 0, 0, 1, 0, 0, 0, 1]);
      Oe(at);
      var ot = class extends St {
          _flagMatrix = !0;
          _flagScale = !1;
          _matrix = null;
          _worldMatrix = null;
          _position = null;
          _rotation = 0;
          _scale = 1;
          _skewX = 0;
          _skewY = 0;
          constructor() {
            super();
            for (let t in be) Object.defineProperty(this, t, be[t]);
            (this._renderer.flagMatrix = pi.bind(this)),
              (this.isShape = !0),
              (this.id = Y.Identifier + Y.uniqueId()),
              (this.matrix = new at()),
              (this.worldMatrix = new at()),
              (this.position = new k()),
              (this.rotation = 0),
              (this.scale = 1),
              (this.skewX = 0),
              (this.skewY = 0);
          }
          get renderer() {
            return this._renderer;
          }
          set renderer(t) {
            this._renderer = t;
          }
          get translation() {
            return be.position.get.apply(this, arguments);
          }
          set translation(t) {
            be.position.set.apply(this, arguments);
          }
          addTo(t) {
            return t.add(this), this;
          }
          remove() {
            return this.parent ? (this.parent.remove(this), this) : this;
          }
          clone(t) {
            let e = new ot();
            return (
              e.position.copy(this.position),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              this.matrix.manual && e.matrix.copy(this.matrix),
              t && t.add(e),
              e._update()
            );
          }
          _update(t) {
            return (
              !this._matrix.manual &&
                this._flagMatrix &&
                (this._matrix
                  .identity()
                  .translate(this.position.x, this.position.y),
                this._scale instanceof k
                  ? this._matrix.scale(this._scale.x, this._scale.y)
                  : this._matrix.scale(this._scale),
                this._matrix.rotate(this.rotation),
                this._matrix.skewX(this.skewX),
                this._matrix.skewY(this.skewY)),
              t && this.parent && this.parent._update && this.parent._update(),
              this
            );
          }
          flagReset() {
            return (
              (this._flagMatrix = this._flagScale = !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        be = {
          position: {
            enumerable: !0,
            get: function () {
              return this._position;
            },
            set: function (i) {
              this._position &&
                this._position.unbind(
                  p.Types.change,
                  this._renderer.flagMatrix
                ),
                (this._position = i),
                this._position.bind(p.Types.change, this._renderer.flagMatrix),
                pi.call(this);
            },
          },
          rotation: {
            enumerable: !0,
            get: function () {
              return this._rotation;
            },
            set: function (i) {
              (this._rotation = i), (this._flagMatrix = !0);
            },
          },
          scale: {
            enumerable: !0,
            get: function () {
              return this._scale;
            },
            set: function (i) {
              this._scale instanceof k &&
                this._scale.unbind(p.Types.change, this._renderer.flagMatrix),
                (this._scale = i),
                this._scale instanceof k &&
                  this._scale.bind(p.Types.change, this._renderer.flagMatrix),
                (this._flagMatrix = !0),
                (this._flagScale = !0);
            },
          },
          skewX: {
            enumerable: !0,
            get: function () {
              return this._skewX;
            },
            set: function (i) {
              (this._skewX = i), (this._flagMatrix = !0);
            },
          },
          skewY: {
            enumerable: !0,
            get: function () {
              return this._skewY;
            },
            set: function (i) {
              (this._skewY = i), (this._flagMatrix = !0);
            },
          },
          matrix: {
            enumerable: !0,
            get: function () {
              return this._matrix;
            },
            set: function (i) {
              (this._matrix = i), (this._flagMatrix = !0);
            },
          },
          worldMatrix: {
            enumerable: !0,
            get: function () {
              return pt(this, this._worldMatrix), this._worldMatrix;
            },
            set: function (i) {
              this._worldMatrix = i;
            },
          },
        };
      function pi() {
        this._flagMatrix = !0;
      }
      var lt = class extends Array {
        _events = new p();
        get _bound() {
          return this._events._bound;
        }
        set _bound(t) {
          this._events._bound = t;
        }
        addEventListener() {
          return this._events.addEventListener.apply(this, arguments);
        }
        on() {
          return this._events.on.apply(this, arguments);
        }
        bind() {
          return this._events.bind.apply(this, arguments);
        }
        removeEventListener() {
          return this._events.removeEventListener.apply(this, arguments);
        }
        off() {
          return this._events.off.apply(this, arguments);
        }
        unbind() {
          return this._events.unbind.apply(this, arguments);
        }
        dispatchEvent() {
          return this._events.dispatchEvent.apply(this, arguments);
        }
        trigger() {
          return this._events.trigger.apply(this, arguments);
        }
        listen() {
          return this._events.listen.apply(this, arguments);
        }
        ignore() {
          return this._events.ignore.apply(this, arguments);
        }
        constructor() {
          super(),
            arguments[0] && Array.isArray(arguments[0])
              ? arguments[0].length > 0 && this.push.apply(this, arguments[0])
              : arguments.length > 0 && this.push.apply(this, arguments);
        }
        pop() {
          let t = super.pop.apply(this, arguments);
          return this.trigger(p.Types.remove, [t]), t;
        }
        shift() {
          let t = super.shift.apply(this, arguments);
          return this.trigger(p.Types.remove, [t]), t;
        }
        push() {
          let t = super.push.apply(this, arguments);
          return this.trigger(p.Types.insert, arguments), t;
        }
        unshift() {
          let t = super.unshift.apply(this, arguments);
          return this.trigger(p.Types.insert, arguments), t;
        }
        splice() {
          let t = super.splice.apply(this, arguments);
          if ((this.trigger(p.Types.remove, t), arguments.length > 2)) {
            let e = this.slice(
              arguments[0],
              arguments[0] + arguments.length - 2
            );
            this.trigger(p.Types.insert, e), this.trigger(p.Types.order);
          }
          return t;
        }
        sort() {
          return (
            super.sort.apply(this, arguments), this.trigger(p.Types.order), this
          );
        }
        reverse() {
          return (
            super.reverse.apply(this, arguments),
            this.trigger(p.Types.order),
            this
          );
        }
        indexOf() {
          return super.indexOf.apply(this, arguments);
        }
        map(t, e) {
          let s = [];
          for (let r = 0; r < this.length; r++) {
            let n = this[r],
              a;
            e ? (a = t.call(e, n, r)) : (a = t(n, r)), s.push(a);
          }
          return s;
        }
      };
      var ne = class extends lt {
        ids = {};
        constructor(t) {
          (t = Array.isArray(t) ? t : Array.prototype.slice.call(arguments)),
            super(t),
            this.attach(t),
            this.on(p.Types.insert, this.attach),
            this.on(p.Types.remove, this.detach);
        }
        attach(t) {
          for (let e = 0; e < t.length; e++) {
            let s = t[e];
            s && s.id && (this.ids[s.id] = s);
          }
          return this;
        }
        detach(t) {
          for (let e = 0; e < t.length; e++) delete this.ids[t[e].id];
          return this;
        }
      };
      var ve = Math.min,
        we = Math.max,
        Ue = class extends ot {
          _flagAdditions = !1;
          _flagSubtractions = !1;
          _flagOrder = !1;
          _flagOpacity = !0;
          _flagBeginning = !1;
          _flagEnding = !1;
          _flagLength = !1;
          _flagMask = !1;
          _fill = "#fff";
          _stroke = "#000";
          _linewidth = 1;
          _opacity = 1;
          _visible = !0;
          _cap = "round";
          _join = "round";
          _miter = 4;
          _closed = !0;
          _curved = !1;
          _automatic = !0;
          _beginning = 0;
          _ending = 1;
          _length = 0;
          _mask = null;
          constructor(t) {
            super();
            for (let e in mi) Object.defineProperty(this, e, mi[e]);
            (this._renderer.type = "group"),
              (this.additions = []),
              (this.subtractions = []),
              (this.children = Array.isArray(t)
                ? t
                : Array.prototype.slice.call(arguments));
          }
          static InsertChildren(t) {
            for (let e = 0; e < t.length; e++) yi.call(this, t[e], this);
          }
          static RemoveChildren(t) {
            for (let e = 0; e < t.length; e++) yi.call(this, t[e]);
          }
          static OrderChildren(t) {
            this._flagOrder = !0;
          }
          clone(t) {
            let e = new Ue(),
              s = this.children.map(function (r) {
                return r.clone();
              });
            return (
              e.add(s),
              (e.opacity = this.opacity),
              this.mask && (e.mask = this.mask),
              e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.className = this.className),
              this.matrix.manual && e.matrix.copy(this.matrix),
              t && t.add(e),
              e._update()
            );
          }
          toObject() {
            let t = {
              children: [],
              translation: this.translation.toObject(),
              rotation: this.rotation,
              scale:
                this.scale instanceof k ? this.scale.toObject() : this.scale,
              opacity: this.opacity,
              className: this.className,
              mask: this.mask ? this.mask.toObject() : null,
            };
            return (
              this.matrix.manual && (t.matrix = this.matrix.toObject()),
              S.each(
                this.children,
                function (e, s) {
                  t.children[s] = e.toObject();
                },
                this
              ),
              t
            );
          }
          corner() {
            let t = this.getBoundingClientRect(!0);
            for (let e = 0; e < this.children.length; e++) {
              let s = this.children[e];
              (s.translation.x -= t.left), (s.translation.y -= t.top);
            }
            return (
              this.mask &&
                ((this.mask.translation.x -= t.left),
                (this.mask.translation.y -= t.top)),
              this
            );
          }
          center() {
            let t = this.getBoundingClientRect(!0),
              e = t.left + t.width / 2 - this.translation.x,
              s = t.top + t.height / 2 - this.translation.y;
            for (let r = 0; r < this.children.length; r++) {
              let n = this.children[r];
              n.isShape && ((n.translation.x -= e), (n.translation.y -= s));
            }
            return (
              this.mask &&
                ((this.mask.translation.x -= e),
                (this.mask.translation.y -= s)),
              this
            );
          }
          getById(t) {
            let e = null;
            function s(r) {
              if (r.id === t) return r;
              if (r.children) {
                for (let n = 0; n < r.children.length; n++)
                  if (((e = s(r.children[n])), e)) return e;
              }
              return null;
            }
            return s(this);
          }
          getByClassName(t) {
            let e = [];
            function s(r) {
              if (
                (Array.prototype.indexOf.call(r.classList, t) >= 0 && e.push(r),
                r.children)
              )
                for (let n = 0; n < r.children.length; n++) {
                  let a = r.children[n];
                  s(a);
                }
              return e;
            }
            return s(this);
          }
          getByType(t) {
            let e = [];
            function s(r) {
              if ((r instanceof t && e.push(r), r.children))
                for (let n = 0; n < r.children.length; n++) {
                  let a = r.children[n];
                  s(a);
                }
              return e;
            }
            return s(this);
          }
          add(t) {
            t instanceof Array
              ? (t = t.slice())
              : (t = Array.prototype.slice.call(arguments));
            for (let e = 0; e < t.length; e++) {
              let s = t[e];
              if (!(s && s.id)) continue;
              let r = Array.prototype.indexOf.call(this.children, s);
              r >= 0 && this.children.splice(r, 1), this.children.push(s);
            }
            return this;
          }
          remove(t) {
            let e = arguments.length,
              s = this.parent;
            if (e <= 0 && s) return s.remove(this), this;
            t instanceof Array
              ? (t = t.slice())
              : (t = Array.prototype.slice.call(arguments));
            for (let r = 0; r < t.length; r++) {
              let n = t[r];
              if (!n || !this.children.ids[n.id]) continue;
              let a = this.children.indexOf(n);
              a >= 0 && this.children.splice(a, 1);
            }
            return this;
          }
          getBoundingClientRect(t) {
            let e, s, r, n, a, o, h, l, f, u;
            this._update(!0);
            let _ = 1 / 0,
              d = -1 / 0,
              c = 1 / 0,
              m = -1 / 0,
              b = /texture|gradient/i;
            s = t ? this._matrix : pt(this);
            for (let g = 0; g < this.children.length; g++) {
              let y = this.children[g];
              !y.visible ||
                b.test(y._renderer.type) ||
                ((e = y.getBoundingClientRect(t)),
                (h =
                  typeof e.top != "number" ||
                  S.isNaN(e.top) ||
                  !isFinite(e.top)),
                (l =
                  typeof e.left != "number" ||
                  S.isNaN(e.left) ||
                  !isFinite(e.left)),
                (f =
                  typeof e.right != "number" ||
                  S.isNaN(e.right) ||
                  !isFinite(e.right)),
                (u =
                  typeof e.bottom != "number" ||
                  S.isNaN(e.bottom) ||
                  !isFinite(e.bottom)),
                !(h || l || f || u) &&
                  ((c = ve(e.top, c)),
                  (_ = ve(e.left, _)),
                  (d = we(e.right, d)),
                  (m = we(e.bottom, m))));
            }
            return (
              t &&
                ((r = s.multiply(_, c, 1)),
                (n = s.multiply(_, m, 1)),
                (a = s.multiply(d, c, 1)),
                (o = s.multiply(d, m, 1)),
                (c = ve(r.y, n.y, a.y, o.y)),
                (_ = ve(r.x, n.x, a.x, o.x)),
                (d = we(r.x, n.x, a.x, o.x)),
                (m = we(r.y, n.y, a.y, o.y))),
              {
                top: c,
                left: _,
                right: d,
                bottom: m,
                width: d - _,
                height: m - c,
              }
            );
          }
          noFill() {
            return (
              this.children.forEach(function (t) {
                t.noFill();
              }),
              this
            );
          }
          noStroke() {
            return (
              this.children.forEach(function (t) {
                t.noStroke();
              }),
              this
            );
          }
          subdivide() {
            let t = arguments;
            return (
              this.children.forEach(function (e) {
                e.subdivide.apply(e, t);
              }),
              this
            );
          }
          _update() {
            let t, e, s;
            if (this._flagBeginning || this._flagEnding) {
              let r = Math.min(this._beginning, this._ending),
                n = Math.max(this._beginning, this._ending),
                a = this.length,
                o = 0,
                h = r * a,
                l = n * a;
              for (t = 0; t < this.children.length; t++)
                (s = this.children[t]),
                  (e = s.length),
                  h > o + e
                    ? ((s.beginning = 1), (s.ending = 1))
                    : l < o
                    ? ((s.beginning = 0), (s.ending = 0))
                    : h > o && h < o + e
                    ? ((s.beginning = (h - o) / e), (s.ending = 1))
                    : l > o && l < o + e
                    ? ((s.beginning = 0), (s.ending = (l - o) / e))
                    : ((s.beginning = 0), (s.ending = 1)),
                  (o += e);
            }
            return super._update.apply(this, arguments);
          }
          flagReset() {
            return (
              this._flagAdditions &&
                ((this.additions.length = 0), (this._flagAdditions = !1)),
              this._flagSubtractions &&
                ((this.subtractions.length = 0), (this._flagSubtractions = !1)),
              (this._flagOrder =
                this._flagMask =
                this._flagOpacity =
                this._flagBeginning =
                this._flagEnding =
                  !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        G = Ue;
      v(G, "Children", ne),
        v(G, "Properties", [
          "fill",
          "stroke",
          "linewidth",
          "cap",
          "join",
          "miter",
          "closed",
          "curved",
          "automatic",
        ]);
      var mi = {
        visible: {
          enumerable: !0,
          get: function () {
            return this._visible;
          },
          set: function (i) {
            (this._flagVisible = this._visible !== i || this._flagVisible),
              (this._visible = i);
          },
        },
        opacity: {
          enumerable: !0,
          get: function () {
            return this._opacity;
          },
          set: function (i) {
            (this._flagOpacity = this._opacity !== i || this._flagOpacity),
              (this._opacity = i);
          },
        },
        beginning: {
          enumerable: !0,
          get: function () {
            return this._beginning;
          },
          set: function (i) {
            (this._flagBeginning =
              this._beginning !== i || this._flagBeginning),
              (this._beginning = i);
          },
        },
        ending: {
          enumerable: !0,
          get: function () {
            return this._ending;
          },
          set: function (i) {
            (this._flagEnding = this._ending !== i || this._flagEnding),
              (this._ending = i);
          },
        },
        length: {
          enumerable: !0,
          get: function () {
            if (this._flagLength || this._length <= 0) {
              if (((this._length = 0), !this.children)) return this._length;
              for (let i = 0; i < this.children.length; i++) {
                let t = this.children[i];
                this._length += t.length;
              }
            }
            return this._length;
          },
        },
        fill: {
          enumerable: !0,
          get: function () {
            return this._fill;
          },
          set: function (i) {
            this._fill = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.fill = i;
            }
          },
        },
        stroke: {
          enumerable: !0,
          get: function () {
            return this._stroke;
          },
          set: function (i) {
            this._stroke = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.stroke = i;
            }
          },
        },
        linewidth: {
          enumerable: !0,
          get: function () {
            return this._linewidth;
          },
          set: function (i) {
            this._linewidth = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.linewidth = i;
            }
          },
        },
        join: {
          enumerable: !0,
          get: function () {
            return this._join;
          },
          set: function (i) {
            this._join = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.join = i;
            }
          },
        },
        miter: {
          enumerable: !0,
          get: function () {
            return this._miter;
          },
          set: function (i) {
            this._miter = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.miter = i;
            }
          },
        },
        cap: {
          enumerable: !0,
          get: function () {
            return this._cap;
          },
          set: function (i) {
            this._cap = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.cap = i;
            }
          },
        },
        closed: {
          enumerable: !0,
          get: function () {
            return this._closed;
          },
          set: function (i) {
            this._closed = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.closed = i;
            }
          },
        },
        curved: {
          enumerable: !0,
          get: function () {
            return this._curved;
          },
          set: function (i) {
            this._curved = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.curved = i;
            }
          },
        },
        automatic: {
          enumerable: !0,
          get: function () {
            return this._automatic;
          },
          set: function (i) {
            this._automatic = i;
            for (let t = 0; t < this.children.length; t++) {
              let e = this.children[t];
              e.automatic = i;
            }
          },
        },
        children: {
          enumerable: !0,
          get: function () {
            return this._children;
          },
          set: function (i) {
            let t = G.InsertChildren.bind(this),
              e = G.RemoveChildren.bind(this),
              s = G.OrderChildren.bind(this);
            this._children &&
              (this._children.unbind(),
              this._children.length > 0 && e(this._children)),
              (this._children = new ne(i)),
              this._children.bind(p.Types.insert, t),
              this._children.bind(p.Types.remove, e),
              this._children.bind(p.Types.order, s),
              i.length > 0 && t(i);
          },
        },
        mask: {
          enumerable: !0,
          get: function () {
            return this._mask;
          },
          set: function (i) {
            (this._mask = i),
              (this._flagMask = !0),
              S.isObject(i) && !i.clip && (i.clip = !0);
          },
        },
      };
      function yi(i, t) {
        let e = i.parent,
          s;
        if (e === t) {
          r();
          return;
        }
        if (
          (e &&
            e.children.ids[i.id] &&
            ((s = Array.prototype.indexOf.call(e.children, i)),
            e.children.splice(s, 1),
            n()),
          t)
        ) {
          r();
          return;
        }
        n(),
          e._flagAdditions &&
            e.additions.length === 0 &&
            (e._flagAdditions = !1),
          e._flagSubtractions &&
            e.subtractions.length === 0 &&
            (e._flagSubtractions = !1),
          delete i.parent;
        function r() {
          t.subtractions.length > 0 &&
            ((s = Array.prototype.indexOf.call(t.subtractions, i)),
            s >= 0 && t.subtractions.splice(s, 1)),
            t.additions.length > 0 &&
              ((s = Array.prototype.indexOf.call(t.additions, i)),
              s >= 0 && t.additions.splice(s, 1)),
            (i.parent = t),
            t.additions.push(i),
            (t._flagAdditions = !0);
        }
        function n() {
          (s = Array.prototype.indexOf.call(e.additions, i)),
            s >= 0 && e.additions.splice(s, 1),
            (s = Array.prototype.indexOf.call(e.subtractions, i)),
            s < 0 && (e.subtractions.push(i), (e._flagSubtractions = !0));
        }
      }
      var xi = new at(),
        De = [],
        He = Math.max,
        ls = Math.min,
        bi = Math.abs,
        ke = Math.sin,
        Ae = Math.cos,
        hs = Math.acos,
        Se = Math.sqrt,
        tt = {
          isHidden: /(undefined|none|transparent)/i,
          alignments: { left: "start", middle: "center", right: "end" },
          shim: function (i, t) {
            return (
              (i.tagName = i.nodeName = t || "canvas"),
              (i.nodeType = 1),
              (i.getAttribute = function (e) {
                return this[e];
              }),
              (i.setAttribute = function (e, s) {
                return (this[e] = s), this;
              }),
              i
            );
          },
          group: {
            renderChild: function (i) {
              tt[i._renderer.type].render.call(i, this.ctx, !0, this.clip);
            },
            render: function (i) {
              if (!this._visible) return this;
              this._update();
              let t = this._matrix.elements,
                e = this.parent;
              this._renderer.opacity =
                this._opacity * (e && e._renderer ? e._renderer.opacity : 1);
              let s = this._mask,
                r = Re(t),
                n = !r || !!s;
              if (
                (this._renderer.context || (this._renderer.context = {}),
                (this._renderer.context.ctx = i),
                n &&
                  (i.save(),
                  r || i.transform(t[0], t[3], t[1], t[4], t[2], t[5])),
                s && tt[s._renderer.type].render.call(s, i, !0),
                this._opacity > 0 && this._scale !== 0)
              )
                for (let a = 0; a < this.children.length; a++) {
                  let o = this.children[a];
                  tt[o._renderer.type].render.call(o, i);
                }
              return n && i.restore(), this.flagReset();
            },
          },
          path: {
            render: function (i, t, e) {
              let s,
                r,
                n,
                a,
                o,
                h,
                l,
                f,
                u,
                _,
                d,
                c,
                m,
                b,
                g,
                y,
                x,
                R,
                A,
                E,
                C,
                j,
                M,
                T,
                N,
                z,
                X,
                V,
                ut,
                dt,
                Z,
                _t,
                rt,
                Tt;
              if (
                ((Tt =
                  this.parent && this.parent._renderer
                    ? this.parent._renderer.opacity
                    : 1),
                (ut = this._mask),
                (dt = this._clip),
                (o = this._opacity * (Tt || 1)),
                (h = this._visible),
                !t && (!h || dt || o === 0))
              )
                return this;
              this._update(),
                (s = this._matrix.elements),
                (r = this._stroke),
                (n = this._linewidth),
                (a = this._fill),
                (l = this._cap),
                (f = this._join),
                (u = this._miter),
                (_ = this._closed),
                (d = this._renderer.vertices),
                (c = d.length),
                (m = c - 1),
                (Z = Re(s)),
                (rt = this.dashes),
                Z ||
                  (i.save(), i.transform(s[0], s[3], s[1], s[4], s[2], s[5])),
                ut && tt[ut._renderer.type].render.call(ut, i, !0),
                a &&
                  (typeof a == "string"
                    ? (i.fillStyle = a)
                    : (tt[a._renderer.type].render.call(a, i, this),
                      (i.fillStyle = a._renderer.effect))),
                r &&
                  (typeof r == "string"
                    ? (i.strokeStyle = r)
                    : (tt[r._renderer.type].render.call(r, i, this),
                      (i.strokeStyle = r._renderer.effect)),
                  n && (i.lineWidth = n),
                  u && (i.miterLimit = u),
                  f && (i.lineJoin = f),
                  !_ && l && (i.lineCap = l)),
                typeof o == "number" && (i.globalAlpha = o),
                rt &&
                  rt.length > 0 &&
                  ((i.lineDashOffset = rt.offset || 0), i.setLineDash(rt)),
                i.beginPath();
              let Ct, ee, ie, se, kt, Q, oi;
              for (let Lt = 0; Lt < c; Lt++)
                switch (((y = d[Lt]), (X = y.x), (V = y.y), y.command)) {
                  case w.close:
                    i.closePath();
                    break;
                  case w.arc:
                    (Ct = y.rx),
                      (ee = y.ry),
                      (ie = y.xAxisRotation),
                      (se = y.largeArcFlag),
                      (kt = y.sweepFlag),
                      (b = _ ? it(Lt - 1, c) : He(Lt - 1, 0)),
                      (g = d[b]),
                      (Q = g.x),
                      (oi = g.y),
                      tt.renderSvgArcCommand(
                        i,
                        Q,
                        oi,
                        Ct,
                        ee,
                        se,
                        kt,
                        ie,
                        X,
                        V
                      );
                    break;
                  case w.curve:
                    (b = _ ? it(Lt - 1, c) : Math.max(Lt - 1, 0)),
                      (g = d[b]),
                      (M = (g.controls && g.controls.right) || k.zero),
                      (T = (y.controls && y.controls.left) || k.zero),
                      g._relative
                        ? ((C = M.x + g.x), (j = M.y + g.y))
                        : ((C = M.x), (j = M.y)),
                      y._relative
                        ? ((A = T.x + y.x), (E = T.y + y.y))
                        : ((A = T.x), (E = T.y)),
                      i.bezierCurveTo(C, j, A, E, X, V),
                      Lt >= m &&
                        _ &&
                        ((x = R),
                        (N = (y.controls && y.controls.right) || k.zero),
                        (z = (x.controls && x.controls.left) || k.zero),
                        y._relative
                          ? ((C = N.x + y.x), (j = N.y + y.y))
                          : ((C = N.x), (j = N.y)),
                        x._relative
                          ? ((A = z.x + x.x), (E = z.y + x.y))
                          : ((A = z.x), (E = z.y)),
                        (X = x.x),
                        (V = x.y),
                        i.bezierCurveTo(C, j, A, E, X, V));
                    break;
                  case w.line:
                    i.lineTo(X, V);
                    break;
                  case w.move:
                    (R = y), i.moveTo(X, V);
                    break;
                }
              return (
                _ && i.closePath(),
                !dt &&
                  !e &&
                  (tt.isHidden.test(a) ||
                    ((_t = a._renderer && a._renderer.offset),
                    _t &&
                      (i.save(),
                      i.translate(-a._renderer.offset.x, -a._renderer.offset.y),
                      i.scale(a._renderer.scale.x, a._renderer.scale.y)),
                    i.fill(),
                    _t && i.restore()),
                  tt.isHidden.test(r) ||
                    ((_t = r._renderer && r._renderer.offset),
                    _t &&
                      (i.save(),
                      i.translate(-r._renderer.offset.x, -r._renderer.offset.y),
                      i.scale(r._renderer.scale.x, r._renderer.scale.y),
                      (i.lineWidth = n / r._renderer.scale.x)),
                    i.stroke(),
                    _t && i.restore())),
                Z || i.restore(),
                dt && !e && i.clip(),
                rt && rt.length > 0 && i.setLineDash(De),
                this.flagReset()
              );
            },
          },
          points: {
            render: function (i, t, e) {
              let s, r, n, a, o, h, l, f, u, _, d, c, m, b, g, y;
              if (
                ((y =
                  this.parent && this.parent._renderer
                    ? this.parent._renderer.opacity
                    : 1),
                (o = this._opacity * (y || 1)),
                (h = this._visible),
                !t && (!h || o === 0))
              )
                return this;
              this._update(),
                (s = this._matrix.elements),
                (r = this._stroke),
                (n = this._linewidth),
                (a = this._fill),
                (f = this._renderer.collection),
                (u = f.length),
                (m = Re(s)),
                (g = this.dashes),
                (l = this._size),
                m ||
                  (i.save(), i.transform(s[0], s[3], s[1], s[4], s[2], s[5])),
                a &&
                  (typeof a == "string"
                    ? (i.fillStyle = a)
                    : (tt[a._renderer.type].render.call(a, i, this),
                      (i.fillStyle = a._renderer.effect))),
                r &&
                  (typeof r == "string"
                    ? (i.strokeStyle = r)
                    : (tt[r._renderer.type].render.call(r, i, this),
                      (i.strokeStyle = r._renderer.effect)),
                  n && (i.lineWidth = n)),
                typeof o == "number" && (i.globalAlpha = o),
                g &&
                  g.length > 0 &&
                  ((i.lineDashOffset = g.offset || 0), i.setLineDash(g)),
                i.beginPath();
              let x = l * 0.5,
                R;
              this._sizeAttenuation ||
                (pt(this, xi),
                (R = xi.elements),
                (R = Ot(R[0], R[3], R[1], R[4], R[2], R[5])),
                (x /= Math.max(R.scaleX, R.scaleY)));
              for (let A = 0; A < u; A++)
                (_ = f[A]),
                  (d = _.x),
                  (c = _.y),
                  i.moveTo(d + x, c),
                  i.arc(d, c, x, 0, $);
              return (
                e ||
                  (tt.isHidden.test(a) ||
                    ((b = a._renderer && a._renderer.offset),
                    b &&
                      (i.save(),
                      i.translate(-a._renderer.offset.x, -a._renderer.offset.y),
                      i.scale(a._renderer.scale.x, a._renderer.scale.y)),
                    i.fill(),
                    b && i.restore()),
                  tt.isHidden.test(r) ||
                    ((b = r._renderer && r._renderer.offset),
                    b &&
                      (i.save(),
                      i.translate(-r._renderer.offset.x, -r._renderer.offset.y),
                      i.scale(r._renderer.scale.x, r._renderer.scale.y),
                      (i.lineWidth = n / r._renderer.scale.x)),
                    i.stroke(),
                    b && i.restore())),
                m || i.restore(),
                g && g.length > 0 && i.setLineDash(De),
                this.flagReset()
              );
            },
          },
          text: {
            render: function (i, t, e) {
              let s =
                  this.parent && this.parent._renderer
                    ? this.parent._renderer.opacity
                    : 1,
                r = this._opacity * s,
                n = this._visible,
                a = this._mask,
                o = this._clip;
              if (!t && (!n || o || r === 0)) return this;
              this._update();
              let h = this._matrix.elements,
                l = this._stroke,
                f = this._linewidth,
                u = this._fill,
                _ = this._decoration,
                d = Re(h),
                c =
                  u._renderer &&
                  u._renderer.offset &&
                  l._renderer &&
                  l._renderer.offset,
                m = this.dashes,
                b = tt.alignments[this._alignment] || this._alignment,
                g = this._baseline,
                y,
                x,
                R,
                A,
                E,
                C,
                j,
                M,
                T,
                N,
                z;
              if (
                (d ||
                  (i.save(), i.transform(h[0], h[3], h[1], h[4], h[2], h[5])),
                a && tt[a._renderer.type].render.call(a, i, !0),
                c ||
                  (i.font = [
                    this._style,
                    this._weight,
                    this._size + "px/" + this._leading + "px",
                    this._family,
                  ].join(" ")),
                (i.textAlign = b),
                (i.textBaseline = g),
                u &&
                  (typeof u == "string"
                    ? (i.fillStyle = u)
                    : (tt[u._renderer.type].render.call(u, i, this),
                      (i.fillStyle = u._renderer.effect))),
                l &&
                  (typeof l == "string"
                    ? (i.strokeStyle = l)
                    : (tt[l._renderer.type].render.call(l, i, this),
                      (i.strokeStyle = l._renderer.effect)),
                  f && (i.lineWidth = f)),
                typeof r == "number" && (i.globalAlpha = r),
                m &&
                  m.length > 0 &&
                  ((i.lineDashOffset = m.offset || 0), i.setLineDash(m)),
                !o &&
                  !e &&
                  (tt.isHidden.test(u) ||
                    (u._renderer && u._renderer.offset
                      ? ((C = u._renderer.scale.x),
                        (j = u._renderer.scale.y),
                        i.save(),
                        i.translate(
                          -u._renderer.offset.x,
                          -u._renderer.offset.y
                        ),
                        i.scale(C, j),
                        (y = this._size / u._renderer.scale.y),
                        (x = this._leading / u._renderer.scale.y),
                        (i.font = [
                          this._style,
                          this._weight,
                          y + "px/",
                          x + "px",
                          this._family,
                        ].join(" ")),
                        (R = u._renderer.offset.x / u._renderer.scale.x),
                        (A = u._renderer.offset.y / u._renderer.scale.y),
                        i.fillText(this.value, R, A),
                        i.restore())
                      : i.fillText(this.value, 0, 0)),
                  tt.isHidden.test(l) ||
                    (l._renderer && l._renderer.offset
                      ? ((C = l._renderer.scale.x),
                        (j = l._renderer.scale.y),
                        i.save(),
                        i.translate(
                          -l._renderer.offset.x,
                          -l._renderer.offset.y
                        ),
                        i.scale(C, j),
                        (y = this._size / l._renderer.scale.y),
                        (x = this._leading / l._renderer.scale.y),
                        (i.font = [
                          this._style,
                          this._weight,
                          y + "px/",
                          x + "px",
                          this._family,
                        ].join(" ")),
                        (R = l._renderer.offset.x / l._renderer.scale.x),
                        (A = l._renderer.offset.y / l._renderer.scale.y),
                        (E = f / l._renderer.scale.x),
                        (i.lineWidth = E),
                        i.strokeText(this.value, R, A),
                        i.restore())
                      : i.strokeText(this.value, 0, 0))),
                /(underline|strikethrough)/i.test(_))
              ) {
                let X = i.measureText(this.value),
                  V = 1;
                switch (_) {
                  case "underline":
                    (T = X.actualBoundingBoxAscent),
                      (z = X.actualBoundingBoxAscent);
                    break;
                  case "strikethrough":
                    (T = 0), (z = 0), (V = 0.5);
                    break;
                }
                switch (g) {
                  case "top":
                    (T += this._size * V), (z += this._size * V);
                    break;
                  case "baseline":
                  case "bottom":
                    (T -= this._size * V), (z -= this._size * V);
                    break;
                }
                switch (b) {
                  case "left":
                  case "start":
                    (M = 0), (N = X.width);
                    break;
                  case "right":
                  case "end":
                    (M = -X.width), (N = 0);
                    break;
                  default:
                    (M = -X.width / 2), (N = X.width / 2);
                }
                (i.lineWidth = Math.max(Math.floor(this._size / 15), 1)),
                  (i.strokeStyle = i.fillStyle),
                  i.beginPath(),
                  i.moveTo(M, T),
                  i.lineTo(N, z),
                  i.stroke();
              }
              return (
                d || i.restore(),
                o && !e && i.clip(),
                m && m.length > 0 && i.setLineDash(De),
                this.flagReset()
              );
            },
          },
          "linear-gradient": {
            render: function (i, t) {
              if (!!t) {
                if (
                  (this._update(),
                  !this._renderer.effect ||
                    this._flagEndPoints ||
                    this._flagStops ||
                    this._flagUnits)
                ) {
                  let e,
                    s = this.left._x,
                    r = this.left._y,
                    n = this.right._x,
                    a = this.right._y;
                  /objectBoundingBox/i.test(this._units) &&
                    ((e = t.getBoundingClientRect(!0)),
                    (s = (s - 0.5) * e.width),
                    (r = (r - 0.5) * e.height),
                    (n = (n - 0.5) * e.width),
                    (a = (a - 0.5) * e.height)),
                    (this._renderer.effect = i.createLinearGradient(
                      s,
                      r,
                      n,
                      a
                    ));
                  for (let o = 0; o < this.stops.length; o++) {
                    let h = this.stops[o];
                    this._renderer.effect.addColorStop(h._offset, h._color);
                  }
                }
                return this.flagReset();
              }
            },
          },
          "radial-gradient": {
            render: function (i, t) {
              if (!!t) {
                if (
                  (this._update(),
                  !this._renderer.effect ||
                    this._flagCenter ||
                    this._flagFocal ||
                    this._flagRadius ||
                    this._flagStops ||
                    this._flagUnits)
                ) {
                  let e,
                    s = this.center._x,
                    r = this.center._y,
                    n = this.focal._x,
                    a = this.focal._y,
                    o = this._radius;
                  /objectBoundingBox/i.test(this._units) &&
                    ((e = t.getBoundingClientRect(!0)),
                    (s = s * e.width * 0.5),
                    (r = r * e.height * 0.5),
                    (n = n * e.width * 0.5),
                    (a = a * e.height * 0.5),
                    (o *= Math.min(e.width, e.height) * 0.5)),
                    (this._renderer.effect = i.createRadialGradient(
                      s,
                      r,
                      0,
                      n,
                      a,
                      o
                    ));
                  for (let h = 0; h < this.stops.length; h++) {
                    let l = this.stops[h];
                    this._renderer.effect.addColorStop(l._offset, l._color);
                  }
                }
                return this.flagReset();
              }
            },
          },
          texture: {
            render: function (i) {
              this._update();
              let t = this.image;
              return (
                (!this._renderer.effect ||
                  ((this._flagLoaded ||
                    this._flagImage ||
                    this._flagVideo ||
                    this._flagRepeat) &&
                    this.loaded)) &&
                  (this._renderer.effect = i.createPattern(
                    this.image,
                    this._repeat
                  )),
                (this._flagOffset || this._flagLoaded || this._flagScale) &&
                  (this._renderer.offset instanceof k ||
                    (this._renderer.offset = new k()),
                  (this._renderer.offset.x = -this._offset.x),
                  (this._renderer.offset.y = -this._offset.y),
                  t &&
                    ((this._renderer.offset.x += t.width / 2),
                    (this._renderer.offset.y += t.height / 2),
                    this._scale instanceof k
                      ? ((this._renderer.offset.x *= this._scale.x),
                        (this._renderer.offset.y *= this._scale.y))
                      : ((this._renderer.offset.x *= this._scale),
                        (this._renderer.offset.y *= this._scale)))),
                (this._flagScale || this._flagLoaded) &&
                  (this._renderer.scale instanceof k ||
                    (this._renderer.scale = new k()),
                  this._scale instanceof k
                    ? this._renderer.scale.copy(this._scale)
                    : this._renderer.scale.set(this._scale, this._scale)),
                this.flagReset()
              );
            },
          },
          renderSvgArcCommand: function (i, t, e, s, r, n, a, o, h, l) {
            (o = (o * Math.PI) / 180), (s = bi(s)), (r = bi(r));
            let f = (t - h) / 2,
              u = (e - l) / 2,
              _ = Ae(o) * f + ke(o) * u,
              d = -ke(o) * f + Ae(o) * u,
              c = _ * _,
              m = d * d,
              b = s * s,
              g = r * r,
              y = c / b + m / g;
            if (y > 1) {
              let V = Se(y);
              (s = V * s), (r = V * r), (b = s * s), (g = r * r);
            }
            let x = b * m + g * c,
              R = (b * g - x) / x,
              A = Se(He(0, R));
            n === a && (A = -A);
            let E = (A * s * d) / r,
              C = (-A * r * _) / s,
              j = Ae(o) * E - ke(o) * C + (t + h) / 2,
              M = ke(o) * E + Ae(o) * C + (e + l) / 2,
              T = vi(1, 0, (_ - E) / s, (d - C) / r),
              N = vi((_ - E) / s, (d - C) / r, (-_ - E) / s, (-d - C) / r) % $,
              z = T + N;
            fs(i, j, M, s, r, T, z, a === 0, o);
          },
        },
        At = class extends p {
          constructor(t) {
            super();
            let e = t.smoothing !== !1;
            (this.domElement =
              t.domElement || document.createElement("canvas")),
              (this.ctx = this.domElement.getContext("2d")),
              (this.overdraw = t.overdraw || !1),
              typeof this.ctx.imageSmoothingEnabled < "u" &&
                (this.ctx.imageSmoothingEnabled = e),
              (this.scene = new G()),
              (this.scene.parent = this);
          }
          setSize(t, e, s) {
            return (
              (this.width = t),
              (this.height = e),
              (this.ratio = typeof s > "u" ? Xt(this.ctx) : s),
              (this.domElement.width = t * this.ratio),
              (this.domElement.height = e * this.ratio),
              this.domElement.style &&
                S.extend(this.domElement.style, {
                  width: t + "px",
                  height: e + "px",
                }),
              this.trigger(p.Types.resize, t, e, s)
            );
          }
          render() {
            let t = this.ratio === 1;
            return (
              t || (this.ctx.save(), this.ctx.scale(this.ratio, this.ratio)),
              this.overdraw ||
                this.ctx.clearRect(0, 0, this.width, this.height),
              tt.group.render.call(this.scene, this.ctx),
              t || this.ctx.restore(),
              this
            );
          }
        };
      v(At, "Utils", tt);
      function fs(i, t, e, s, r, n, a, o, h) {
        let l = a - n,
          f = Ut.Tolerance.epsilon,
          u = Math.abs(l) < f,
          _ = it(l, $);
        _ < f && (u ? (_ = 0) : (_ = $)),
          o === !0 && !u && (_ === $ ? (_ = -$) : (_ = _ - $));
        for (let d = 0; d < Y.Resolution; d++) {
          let c = d / (Y.Resolution - 1),
            m = n + c * _,
            b = t + s * Math.cos(m),
            g = e + r * Math.sin(m);
          if (h !== 0) {
            let y = Math.cos(h),
              x = Math.sin(h),
              R = b - t,
              A = g - e;
            (b = R * y - A * x + t), (g = R * x + A * y + e);
          }
          i.lineTo(b, g);
        }
      }
      function vi(i, t, e, s) {
        let r = i * e + t * s,
          n = Se(i * i + t * t) * Se(e * e + s * s),
          a = hs(He(-1, ls(1, r / n)));
        return i * s - t * e < 0 && (a = -a), a;
      }
      function Re(i) {
        return (
          i[0] == 1 &&
          i[3] == 0 &&
          i[1] == 0 &&
          i[4] == 1 &&
          i[2] == 0 &&
          i[5] == 0
        );
      }
      var ht = {
        Image: null,
        isHeadless: !1,
        shim: function (i, t) {
          return (
            At.Utils.shim(i),
            typeof t < "u" && (ht.Image = t),
            (ht.isHeadless = !0),
            i
          );
        },
      };
      var gt = {
          hasEventListeners: typeof H.addEventListener == "function",
          bind: function (i, t, e, s) {
            return (
              this.hasEventListeners
                ? i.addEventListener(t, e, !!s)
                : i.attachEvent("on" + t, e),
              gt
            );
          },
          unbind: function (i, t, e, s) {
            return (
              gt.hasEventListeners
                ? i.removeEventListeners(t, e, !!s)
                : i.detachEvent("on" + t, e),
              gt
            );
          },
          getRequestAnimationFrame: function () {
            let i = ["ms", "moz", "webkit", "o"],
              t = 0,
              e = H.requestAnimationFrame;
            if (!e) {
              for (let r = 0; r < i.length; r++)
                e = H[i[r] + "RequestAnimationFrame"] || e;
              e = e || s;
            }
            function s(r, n) {
              let a = new Date().getTime(),
                o = Math.max(0, 16 - (a - t)),
                h = H.setTimeout(l, o);
              t = a + o;
              function l() {
                r(a + o);
              }
              return h;
            }
            return e;
          },
        },
        Yt = H.document ? H.document.createElement("div") : {};
      Yt.id = "help-two-load";
      Object.defineProperty(gt, "temp", {
        enumerable: !0,
        get: function () {
          return (
            S.isElement(Yt) &&
              !H.document.head.contains(Yt) &&
              ((Yt.style.display = "none"), H.document.head.appendChild(Yt)),
            Yt
          );
        },
      });
      var et = class extends Error {
        name = "Two.js";
        message;
        constructor(t) {
          super(), (this.message = t);
        }
      };
      var Et = class {
        map = {};
        constructor() {}
        add(t, e) {
          return (this.map[t] = e), this;
        }
        remove(t) {
          return delete this.map[t], this;
        }
        get(t) {
          return this.map[t];
        }
        contains(t) {
          return t in this.map;
        }
      };
      function We(i, t) {
        if (t === 0 || t === 1) return !0;
        let s = i._length * t,
          r = 0;
        for (let n = 0; n < i._lengths.length; n++) {
          let a = i._lengths[n];
          if (r >= s) return s - r >= 0;
          r += a;
        }
        return !1;
      }
      function Gt(i, t) {
        let e = i._length;
        if (t <= 0) return 0;
        if (t >= e) return i._lengths.length - 1;
        for (let s = 0, r = 0; s < i._lengths.length; s++) {
          if (r + i._lengths[s] >= t)
            return (t -= r), Math.max(s - 1, 0) + t / i._lengths[s];
          r += i._lengths[s];
        }
        return -1;
      }
      function Ee(i, t, e) {
        let s,
          r,
          n,
          a,
          o,
          h,
          l,
          f,
          u = t.controls && t.controls.right,
          _ = i.controls && i.controls.left;
        return (
          (s = t.x),
          (o = t.y),
          (r = (u || t).x),
          (h = (u || t).y),
          (n = (_ || i).x),
          (l = (_ || i).y),
          (a = i.x),
          (f = i.y),
          u && t._relative && ((r += t.x), (h += t.y)),
          _ && i._relative && ((n += i.x), (l += i.y)),
          Be(s, o, r, h, n, l, a, f, e)
        );
      }
      function Xe(i, t, e) {
        let s,
          r,
          n,
          a,
          o,
          h,
          l,
          f,
          u = t.controls && t.controls.right,
          _ = i.controls && i.controls.left;
        return (
          (s = t.x),
          (o = t.y),
          (r = (u || t).x),
          (h = (u || t).y),
          (n = (_ || i).x),
          (l = (_ || i).y),
          (a = i.x),
          (f = i.y),
          u && t._relative && ((r += t.x), (h += t.y)),
          _ && i._relative && ((n += i.x), (l += i.y)),
          re(s, o, r, h, n, l, a, f, e)
        );
      }
      var Mt = class extends St {
          _flagOffset = !0;
          _flagOpacity = !0;
          _flagColor = !0;
          _offset = 0;
          _opacity = 1;
          _color = "#fff";
          constructor(t, e, s) {
            super();
            for (let r in wi) Object.defineProperty(this, r, wi[r]);
            (this._renderer.type = "stop"),
              (this.offset = typeof t == "number" ? t : Mt.Index <= 0 ? 0 : 1),
              (this.opacity = typeof s == "number" ? s : 1),
              (this.color =
                typeof e == "string" ? e : Mt.Index <= 0 ? "#fff" : "#000"),
              (Mt.Index = (Mt.Index + 1) % 2);
          }
          clone(t) {
            let e = new Mt();
            return (
              S.each(
                Mt.Properties,
                function (s) {
                  e[s] = this[s];
                },
                this
              ),
              t && t.stops && t.stops.push(e),
              e
            );
          }
          toObject() {
            let t = {};
            return (
              S.each(
                Mt.Properties,
                function (e) {
                  t[e] = this[e];
                },
                this
              ),
              t
            );
          }
          flagReset() {
            return (
              (this._flagOffset = this._flagColor = this._flagOpacity = !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        ft = Mt;
      v(ft, "Index", 0), v(ft, "Properties", ["offset", "opacity", "color"]);
      var wi = {
        offset: {
          enumerable: !0,
          get: function () {
            return this._offset;
          },
          set: function (i) {
            (this._offset = i),
              (this._flagOffset = !0),
              this.parent && (this.parent._flagStops = !0);
          },
        },
        opacity: {
          enumerable: !0,
          get: function () {
            return this._opacity;
          },
          set: function (i) {
            (this._opacity = i),
              (this._flagOpacity = !0),
              this.parent && (this.parent._flagStops = !0);
          },
        },
        color: {
          enumerable: !0,
          get: function () {
            return this._color;
          },
          set: function (i) {
            (this._color = i),
              (this._flagColor = !0),
              this.parent && (this.parent._flagStops = !0);
          },
        },
      };
      var ae = class extends St {
          _flagStops = !1;
          _flagSpread = !1;
          _flagUnits = !1;
          _spread = "";
          _units = "";
          constructor(t) {
            super();
            for (let e in ki) Object.defineProperty(this, e, ki[e]);
            (this._renderer.type = "gradient"),
              (this.id = Y.Identifier + Y.uniqueId()),
              (this.classList = []),
              (this._renderer.flagStops = cs.bind(this)),
              (this._renderer.bindStops = us.bind(this)),
              (this._renderer.unbindStops = ds.bind(this)),
              (this.spread = "pad"),
              (this.units = "objectBoundingBox"),
              t && (this.stops = t);
          }
          clone(t) {
            let e = this.stops.map(function (r) {
                return r.clone();
              }),
              s = new ae(e);
            return (
              S.each(
                ae.Properties,
                function (r) {
                  s[r] = this[r];
                },
                this
              ),
              t && t.add(s),
              s
            );
          }
          toObject() {
            let t = {
              stops: this.stops.map(function (e) {
                return e.toObject();
              }),
            };
            return (
              S.each(
                ae.Properties,
                function (e) {
                  t[e] = this[e];
                },
                this
              ),
              t
            );
          }
          _update() {
            return (
              (this._flagSpread || this._flagStops) &&
                this.trigger(p.Types.change),
              this
            );
          }
          flagReset() {
            return (
              (this._flagSpread = this._flagUnits = this._flagStops = !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        W = ae;
      v(W, "Stop", ft),
        v(W, "Properties", ["spread", "stops", "renderer", "units"]);
      var ki = {
        spread: {
          enumerable: !0,
          get: function () {
            return this._spread;
          },
          set: function (i) {
            (this._spread = i), (this._flagSpread = !0);
          },
        },
        units: {
          enumerable: !0,
          get: function () {
            return this._units;
          },
          set: function (i) {
            (this._units = i), (this._flagUnits = !0);
          },
        },
        stops: {
          enumerable: !0,
          get: function () {
            return this._stops;
          },
          set: function (i) {
            let t = this._renderer.bindStops,
              e = this._renderer.unbindStops;
            this._stops &&
              this._stops.unbind(p.Types.insert, t).unbind(p.Types.remove, e),
              (this._stops = new lt((i || []).slice(0))),
              this._stops.bind(p.Types.insert, t).bind(p.Types.remove, e),
              t(this._stops);
          },
        },
      };
      function cs() {
        this._flagStops = !0;
      }
      function us(i) {
        let t = i.length;
        for (; t--; )
          i[t].bind(p.Types.change, this._renderer.flagStops),
            (i[t].parent = this);
        this._renderer.flagStops();
      }
      function ds(i) {
        let t = i.length;
        for (; t--; )
          i[t].unbind(p.Types.change, this._renderer.flagStops),
            delete i[t].parent;
        this._renderer.flagStops();
      }
      var Ye = class extends W {
          _flagEndPoints = !1;
          _left = null;
          _right = null;
          constructor(t, e, s, r, n) {
            super(n);
            for (let a in Ai) Object.defineProperty(this, a, Ai[a]);
            (this._renderer.type = "linear-gradient"),
              (this._renderer.flagEndPoints = _s.bind(this)),
              (this.left = new k()),
              (this.right = new k()),
              typeof t == "number" && (this.left.x = t),
              typeof e == "number" && (this.left.y = e),
              typeof s == "number" && (this.right.x = s),
              typeof r == "number" && (this.right.y = r);
          }
          clone(t) {
            let e = this.stops.map(function (r) {
                return r.clone();
              }),
              s = new Ye(
                this.left._x,
                this.left._y,
                this.right._x,
                this.right._y,
                e
              );
            return (
              S.each(
                W.Properties,
                function (r) {
                  s[r] = this[r];
                },
                this
              ),
              t && t.add(s),
              s
            );
          }
          toObject() {
            let t = super.toObject.call(this);
            return (
              (t.left = this.left.toObject()),
              (t.right = this.right.toObject()),
              t
            );
          }
          _update() {
            return (
              (this._flagEndPoints || this._flagSpread || this._flagStops) &&
                this.trigger(p.Types.change),
              this
            );
          }
          flagReset() {
            return (this._flagEndPoints = !1), super.flagReset.call(this), this;
          }
        },
        U = Ye;
      v(U, "Properties", ["left", "right"]), v(U, "Stop", ft);
      var Ai = {
        left: {
          enumerable: !0,
          get: function () {
            return this._left;
          },
          set: function (i) {
            this._left instanceof k &&
              this._left.unbind(p.Types.change, this._renderer.flagEndPoints),
              (this._left = i),
              this._left.bind(p.Types.change, this._renderer.flagEndPoints),
              (this._flagEndPoints = !0);
          },
        },
        right: {
          enumerable: !0,
          get: function () {
            return this._right;
          },
          set: function (i) {
            this._right instanceof k &&
              this._right.unbind(p.Types.change, this._renderer.flagEndPoints),
              (this._right = i),
              this._right.bind(p.Types.change, this._renderer.flagEndPoints),
              (this._flagEndPoints = !0);
          },
        },
      };
      function _s() {
        this._flagEndPoints = !0;
      }
      var oe = class extends W {
          _flagRadius = !1;
          _flagCenter = !1;
          _flagFocal = !1;
          _radius = 0;
          _center = null;
          _focal = null;
          constructor(t, e, s, r, n, a) {
            super(r);
            for (let o in Ri) Object.defineProperty(this, o, Ri[o]);
            (this._renderer.type = "radial-gradient"),
              (this._renderer.flagCenter = gs.bind(this)),
              (this._renderer.flagFocal = ps.bind(this)),
              (this.center = new k()),
              (this.radius = typeof s == "number" ? s : 1),
              (this.focal = new k()),
              typeof t == "number" && (this.center.x = t),
              typeof e == "number" && (this.center.y = e),
              this.focal.copy(this.center),
              typeof n == "number" && (this.focal.x = n),
              typeof a == "number" && (this.focal.y = a);
          }
          clone(t) {
            let e = this.stops.map(function (r) {
                return r.clone();
              }),
              s = new oe(
                this.center._x,
                this.center._y,
                this._radius,
                e,
                this.focal._x,
                this.focal._y
              );
            return (
              S.each(
                W.Properties.concat(oe.Properties),
                function (r) {
                  s[r] = this[r];
                },
                this
              ),
              t && t.add(s),
              s
            );
          }
          toObject() {
            let t = super.toObject.call(this);
            return (
              S.each(
                oe.Properties,
                function (e) {
                  t[e] = this[e];
                },
                this
              ),
              (t.center = this.center.toObject()),
              (t.focal = this.focal.toObject()),
              t
            );
          }
          _update() {
            return (
              (this._flagRadius ||
                this._flatCenter ||
                this._flagFocal ||
                this._flagSpread ||
                this._flagStops) &&
                this.trigger(p.Types.change),
              this
            );
          }
          flagReset() {
            return (
              (this._flagRadius = this._flagCenter = this._flagFocal = !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        D = oe;
      v(D, "Stop", ft), v(D, "Properties", ["center", "radius", "focal"]);
      var Ri = {
        radius: {
          enumerable: !0,
          get: function () {
            return this._radius;
          },
          set: function (i) {
            (this._radius = i), (this._flagRadius = !0);
          },
        },
        center: {
          enumerable: !0,
          get: function () {
            return this._center;
          },
          set: function (i) {
            this._center &&
              this._center.unbind(p.Types.change, this._renderer.flagCenter),
              (this._center = i),
              this._center.bind(p.Types.change, this._renderer.flagCenter),
              (this._flagCenter = !0);
          },
        },
        focal: {
          enumerable: !0,
          get: function () {
            return this._focal;
          },
          set: function (i) {
            this._focal &&
              this._focal.unbind(p.Types.change, this._renderer.flagFocal),
              (this._focal = i),
              this._focal.bind(p.Types.change, this._renderer.flagFocal),
              (this._flagFocal = !0);
          },
        },
      };
      function gs() {
        this._flagCenter = !0;
      }
      function ps() {
        this._flagFocal = !0;
      }
      var Fe,
        Si = {
          video: /\.(mp4|webm|ogg)$/i,
          image: /\.(jpe?g|png|gif|tiff|webp)$/i,
          effect: /texture|gradient/i,
        };
      H.document && (Fe = document.createElement("a"));
      var st = class extends St {
          _flagSrc = !1;
          _flagImage = !1;
          _flagVideo = !1;
          _flagLoaded = !1;
          _flagRepeat = !1;
          _flagOffset = !1;
          _flagScale = !1;
          _src = "";
          _image = null;
          _loaded = !1;
          _repeat = "no-repeat";
          _scale = 1;
          _offset = null;
          constructor(t, e) {
            super(), (this._renderer = {});
            for (let s in Ei) Object.defineProperty(this, s, Ei[s]);
            if (
              ((this._renderer.type = "texture"),
              (this._renderer.flagOffset = ms.bind(this)),
              (this._renderer.flagScale = ys.bind(this)),
              (this.id = Y.Identifier + Y.uniqueId()),
              (this.classList = []),
              (this.loaded = !1),
              (this.repeat = "no-repeat"),
              (this.offset = new k()),
              typeof e == "function")
            ) {
              let s = function () {
                this.unbind(p.Types.load, s), typeof e == "function" && e();
              }.bind(this);
              this.bind(p.Types.load, s);
            }
            if (typeof t == "string") this.src = t;
            else if (typeof t == "object") {
              let s = Object.prototype.toString.call(t);
              (s === "[object HTMLImageElement]" ||
                s === "[object HTMLCanvasElement]" ||
                s === "[object HTMLVideoElement]" ||
                s === "[object Image]") &&
                (this.image = t);
            }
            this._update();
          }
          static getAbsoluteURL(t) {
            return Fe ? ((Fe.href = t), Fe.href) : t;
          }
          static loadHeadlessBuffer(t, e) {
            (t.image.onload = e), (t.image.src = t.src);
          }
          static getTag(t) {
            return (t && t.nodeName && t.nodeName.toLowerCase()) || "img";
          }
          static getImage(t) {
            let e = st.getAbsoluteURL(t);
            if (st.ImageRegistry.contains(e)) return st.ImageRegistry.get(e);
            let s;
            return (
              ht.Image
                ? ((s = new ht.Image()), At.Utils.shim(s, "img"))
                : H.document
                ? Si.video.test(e)
                  ? (s = document.createElement("video"))
                  : (s = document.createElement("img"))
                : console.warn(
                    "Two.js: no prototypical image defined for Two.Texture"
                  ),
              (s.crossOrigin = "anonymous"),
              s
            );
          }
          static load(t, e) {
            let s = t.image,
              r = st.getTag(s);
            t._flagImage &&
              (/canvas/i.test(r)
                ? st.Register.canvas(t, e)
                : ((t._src =
                    (!ht.isHeadless && s.getAttribute("two-src")) || s.src),
                  st.Register[r](t, e))),
              t._flagSrc &&
                (s || ((s = st.getImage(t.src)), (t.image = s)),
                (r = st.getTag(s)),
                st.Register[r](t, e));
          }
          clone() {
            let t = new st(this.src);
            return (
              (t.repeat = this.repeat),
              t.offset.copy(this.origin),
              (t.scale = this.scale),
              t
            );
          }
          toObject() {
            return {
              src: this.src,
              repeat: this.repeat,
              origin: this.origin.toObject(),
              scale:
                typeof this.scale == "number"
                  ? this.scale
                  : this.scale.toObject(),
            };
          }
          _update() {
            return (
              (this._flagSrc || this._flagImage) &&
                (this.trigger(p.Types.change),
                (this._flagSrc || this._flagImage) &&
                  ((this.loaded = !1),
                  st.load(
                    this,
                    function () {
                      (this.loaded = !0),
                        this.trigger(p.Types.change).trigger(p.Types.load);
                    }.bind(this)
                  ))),
              this._image &&
                this._image.readyState >= 4 &&
                (this._flagVideo = !0),
              this
            );
          }
          flagReset() {
            return (
              (this._flagSrc =
                this._flagImage =
                this._flagLoaded =
                this._flagRepeat =
                this._flagVideo =
                this._flagScale =
                this._flagOffset =
                  !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        B = st;
      v(B, "Properties", [
        "src",
        "loaded",
        "repeat",
        "scale",
        "offset",
        "image",
      ]),
        v(B, "RegularExpressions", Si),
        v(B, "ImageRegistry", new Et()),
        v(B, "Register", {
          canvas: function (t, e) {
            (t._src = "#" + t.id),
              st.ImageRegistry.add(t.src, t.image),
              typeof e == "function" && e();
          },
          img: function (t, e) {
            let s = t.image,
              r = function (a) {
                !ht.isHeadless &&
                  s.removeEventListener &&
                  typeof s.removeEventListener == "function" &&
                  (s.removeEventListener("load", r, !1),
                  s.removeEventListener("error", n, !1)),
                  typeof e == "function" && e();
              },
              n = function (a) {
                throw (
                  (!ht.isHeadless &&
                    typeof s.removeEventListener == "function" &&
                    (s.removeEventListener("load", r, !1),
                    s.removeEventListener("error", n, !1)),
                  new et("unable to load " + t.src))
                );
              };
            typeof s.width == "number" &&
            s.width > 0 &&
            typeof s.height == "number" &&
            s.height > 0
              ? r()
              : !ht.isHeadless &&
                typeof s.addEventListener == "function" &&
                (s.addEventListener("load", r, !1),
                s.addEventListener("error", n, !1)),
              (t._src = st.getAbsoluteURL(t._src)),
              !(!ht.isHeadless && s && s.getAttribute("two-src")) &&
                (ht.isHeadless || s.setAttribute("two-src", t.src),
                st.ImageRegistry.add(t.src, s),
                ht.isHeadless
                  ? st.loadHeadlessBuffer(t, r)
                  : (t.image.src = t.src));
          },
          video: function (t, e) {
            if (ht.isHeadless)
              throw new et(
                "video textures are not implemented in headless environments."
              );
            let s = function (n) {
                t.image.removeEventListener("canplaythrough", s, !1),
                  t.image.removeEventListener("error", r, !1),
                  (t.image.width = t.image.videoWidth),
                  (t.image.height = t.image.videoHeight),
                  typeof e == "function" && e();
              },
              r = function (n) {
                throw (
                  (t.image.removeEventListener("canplaythrough", s, !1),
                  t.image.removeEventListener("error", r, !1),
                  new et("unable to load " + t.src))
                );
              };
            (t._src = st.getAbsoluteURL(t._src)),
              t.image.getAttribute("two-src") ||
                (t.image.setAttribute("two-src", t.src),
                st.ImageRegistry.add(t.src, t.image)),
              t.image.readyState >= 4
                ? s()
                : (t.image.addEventListener("canplaythrough", s, !1),
                  t.image.addEventListener("error", r, !1),
                  (t.image.src = t.src),
                  t.image.load());
          },
        });
      var Ei = {
        src: {
          enumerable: !0,
          get: function () {
            return this._src;
          },
          set: function (i) {
            (this._src = i), (this._flagSrc = !0);
          },
        },
        loaded: {
          enumerable: !0,
          get: function () {
            return this._loaded;
          },
          set: function (i) {
            (this._loaded = i), (this._flagLoaded = !0);
          },
        },
        repeat: {
          enumerable: !0,
          get: function () {
            return this._repeat;
          },
          set: function (i) {
            (this._repeat = i), (this._flagRepeat = !0);
          },
        },
        image: {
          enumerable: !0,
          get: function () {
            return this._image;
          },
          set: function (i) {
            let t = B.getTag(i),
              e;
            switch (t) {
              case "canvas":
                e = "#" + i.id;
                break;
              default:
                e = i.src;
            }
            B.ImageRegistry.contains(e)
              ? (this._image = B.ImageRegistry.get(i.src))
              : (this._image = i),
              (this._flagImage = !0);
          },
        },
        offset: {
          enumerable: !0,
          get: function () {
            return this._offset;
          },
          set: function (i) {
            this._offset &&
              this._offset.unbind(p.Types.change, this._renderer.flagOffset),
              (this._offset = i),
              this._offset.bind(p.Types.change, this._renderer.flagOffset),
              (this._flagOffset = !0);
          },
        },
        scale: {
          enumerable: !0,
          get: function () {
            return this._scale;
          },
          set: function (i) {
            this._scale instanceof k &&
              this._scale.unbind(p.Types.change, this._renderer.flagScale),
              (this._scale = i),
              this._scale instanceof k &&
                this._scale.bind(p.Types.change, this._renderer.flagScale),
              (this._flagScale = !0);
          },
        },
      };
      function ms() {
        this._flagOffset = !0;
      }
      function ys() {
        this._flagScale = !0;
      }
      var Pt = Math.min,
        It = Math.max,
        xs = Math.ceil,
        bs = Math.floor,
        vs = new k(),
        qt = class extends ot {
          _flagVertices = !0;
          _flagLength = !0;
          _flagFill = !0;
          _flagStroke = !0;
          _flagLinewidth = !0;
          _flagOpacity = !0;
          _flagVisible = !0;
          _flagCap = !0;
          _flagJoin = !0;
          _flagMiter = !0;
          _flagMask = !1;
          _flagClip = !1;
          _length = 0;
          _fill = "#fff";
          _stroke = "#000";
          _linewidth = 1;
          _opacity = 1;
          _visible = !0;
          _cap = "round";
          _join = "round";
          _miter = 4;
          _closed = !0;
          _curved = !1;
          _automatic = !0;
          _beginning = 0;
          _ending = 1;
          _mask = null;
          _clip = !1;
          _dashes = null;
          constructor(t, e, s, r) {
            super();
            for (let n in Fi) Object.defineProperty(this, n, Fi[n]);
            (this._renderer.type = "path"),
              (this._renderer.flagVertices = Ge.bind(this)),
              (this._renderer.bindVertices = qe.bind(this)),
              (this._renderer.unbindVertices = Ke.bind(this)),
              (this._renderer.flagFill = $e.bind(this)),
              (this._renderer.flagStroke = Je.bind(this)),
              (this._renderer.vertices = []),
              (this._renderer.collection = []),
              (this.closed = !!e),
              (this.curved = !!s),
              (this.beginning = 0),
              (this.ending = 1),
              (this.fill = "#fff"),
              (this.stroke = "#000"),
              (this.linewidth = 1),
              (this.opacity = 1),
              (this.className = ""),
              (this.visible = !0),
              (this.cap = "butt"),
              (this.join = "miter"),
              (this.miter = 4),
              (this.vertices = t),
              (this.automatic = !r),
              (this.dashes = []),
              (this.dashes.offset = 0);
          }
          clone(t) {
            let e = new qt();
            for (let s = 0; s < this.vertices.length; s++)
              e.vertices.push(this.vertices[s].clone());
            for (let s = 0; s < qt.Properties.length; s++) {
              let r = qt.Properties[s];
              e[r] = this[r];
            }
            return (
              (e.className = this.className),
              e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              this.matrix.manual && e.matrix.copy(this.matrix),
              t && t.add(e),
              e._update()
            );
          }
          toObject() {
            let t = {
              vertices: this.vertices.map(function (e) {
                return e.toObject();
              }),
            };
            return (
              S.each(
                qt.Properties,
                function (e) {
                  typeof this[e] < "u" &&
                    (this[e].toObject
                      ? (t[e] = this[e].toObject())
                      : (t[e] = this[e]));
                },
                this
              ),
              (t.className = this.className),
              (t.translation = this.translation.toObject()),
              (t.rotation = this.rotation),
              (t.scale =
                this.scale instanceof k ? this.scale.toObject() : this.scale),
              (t.skewX = this.skewX),
              (t.skewY = this.skewY),
              this.matrix.manual && (t.matrix = this.matrix.toObject()),
              t
            );
          }
          noFill() {
            return (this.fill = "transparent"), this;
          }
          noStroke() {
            return (this.stroke = void 0), this;
          }
          corner() {
            let t = this.getBoundingClientRect(!0),
              e = t.width / 2,
              s = t.height / 2,
              r = t.left + t.width / 2,
              n = t.top + t.height / 2;
            for (let a = 0; a < this.vertices.length; a++) {
              let o = this.vertices[a];
              (o.x -= r), (o.y -= n), (o.x += e), (o.y += s);
            }
            return (
              this.mask &&
                ((this.mask.translation.x -= r),
                (this.mask.translation.x += e),
                (this.mask.translation.y -= n),
                (this.mask.translation.y += s)),
              this
            );
          }
          center() {
            let t = this.getBoundingClientRect(!0),
              e = t.left + t.width / 2 - this.translation.x,
              s = t.top + t.height / 2 - this.translation.y;
            for (let r = 0; r < this.vertices.length; r++) {
              let n = this.vertices[r];
              (n.x -= e), (n.y -= s);
            }
            return (
              this.mask &&
                ((this.mask.translation.x -= e),
                (this.mask.translation.y -= s)),
              this
            );
          }
          getBoundingClientRect(t) {
            let e,
              s,
              r,
              n,
              a,
              o,
              h,
              l,
              f,
              u,
              _,
              d,
              c,
              m,
              b = 1 / 0,
              g = -1 / 0,
              y = 1 / 0,
              x = -1 / 0;
            if (
              (this._update(!0),
              (e = t ? this._matrix : pt(this)),
              (s = (this.linewidth || 0) / 2),
              (r = this._renderer.vertices.length),
              r <= 0)
            )
              return { width: 0, height: 0 };
            for (n = 0; n < r; n++)
              if (
                ((o = this._renderer.vertices[n]),
                (a = this._renderer.vertices[(n + r - 1) % r]),
                a.controls && o.controls)
              ) {
                (h = a.controls.right.x),
                  (l = a.controls.right.y),
                  a.relative && ((h += a.x), (l += a.y)),
                  (f = o.controls.left.x),
                  (u = o.controls.left.y),
                  o.relative && ((f += o.x), (u += o.y));
                let R = je(a.x, a.y, h, l, f, u, o.x, o.y);
                (y = Pt(R.min.y - s, y)),
                  (b = Pt(R.min.x - s, b)),
                  (g = It(R.max.x + s, g)),
                  (x = It(R.max.y + s, x));
              } else
                n <= 1 &&
                  ((y = Pt(a.y - s, y)),
                  (b = Pt(a.x - s, b)),
                  (g = It(a.x + s, g)),
                  (x = It(a.y + s, x))),
                  (y = Pt(o.y - s, y)),
                  (b = Pt(o.x - s, b)),
                  (g = It(o.x + s, g)),
                  (x = It(o.y + s, x));
            return (
              (_ = e.multiply(b, y, 1)),
              (d = e.multiply(b, x, 1)),
              (c = e.multiply(g, y, 1)),
              (m = e.multiply(g, x, 1)),
              (y = Pt(_.y, d.y, c.y, m.y)),
              (b = Pt(_.x, d.x, c.x, m.x)),
              (g = It(_.x, d.x, c.x, m.x)),
              (x = It(_.y, d.y, c.y, m.y)),
              {
                top: y,
                left: b,
                right: g,
                bottom: x,
                width: g - b,
                height: x - y,
              }
            );
          }
          getPointAt(t, e) {
            let s,
              r,
              n,
              a,
              o,
              h,
              l,
              f,
              u,
              _,
              d,
              c,
              m,
              b,
              g,
              y = this.length * Math.min(Math.max(t, 0), 1),
              x = this.vertices.length,
              R = x - 1,
              A = null,
              E = null;
            for (let Z = 0, _t = this._lengths.length, rt = 0; Z < _t; Z++) {
              if (rt + this._lengths[Z] >= y) {
                this._closed
                  ? ((s = it(Z, x)),
                    (r = it(Z - 1, x)),
                    Z === 0 && ((s = r), (r = Z)))
                  : ((s = Z), (r = Math.min(Math.max(Z - 1, 0), R))),
                  (A = this.vertices[s]),
                  (E = this.vertices[r]),
                  (y -= rt),
                  this._lengths[Z] !== 0 ? (t = y / this._lengths[Z]) : (t = 0);
                break;
              }
              rt += this._lengths[Z];
            }
            if (A === null || E === null) return null;
            if (A) {
              if (!E) return A;
            } else return E;
            (g = E.controls && E.controls.right),
              (b = A.controls && A.controls.left),
              (o = E.x),
              (_ = E.y),
              (h = (g || E).x),
              (d = (g || E).y),
              (l = (b || A).x),
              (c = (b || A).y),
              (f = A.x),
              (m = A.y),
              g && E.relative && ((h += E.x), (d += E.y)),
              b && A.relative && ((l += A.x), (c += A.y)),
              (a = Wt(t, o, h, l, f)),
              (u = Wt(t, _, d, c, m));
            let C = nt(o, h, t),
              j = nt(_, d, t),
              M = nt(h, l, t),
              T = nt(d, c, t),
              N = nt(l, f, t),
              z = nt(c, m, t),
              X = nt(C, M, t),
              V = nt(j, T, t),
              ut = nt(M, N, t),
              dt = nt(T, z, t);
            return S.isObject(e)
              ? ((e.x = a),
                (e.y = u),
                e instanceof F &&
                  ((e.controls.left.x = X),
                  (e.controls.left.y = V),
                  (e.controls.right.x = ut),
                  (e.controls.right.y = dt),
                  (typeof e.relative != "boolean" || e.relative) &&
                    ((e.controls.left.x -= a),
                    (e.controls.left.y -= u),
                    (e.controls.right.x -= a),
                    (e.controls.right.y -= u))),
                (e.t = t),
                e)
              : ((n = new F(
                  a,
                  u,
                  X - a,
                  V - u,
                  ut - a,
                  dt - u,
                  this._curved ? w.curve : w.line
                )),
                (n.t = t),
                n);
          }
          plot() {
            if (this.curved) return Ne(this._collection, this.closed), this;
            for (let t = 0; t < this._collection.length; t++)
              this._collection[t].command = t === 0 ? w.move : w.line;
            return this;
          }
          subdivide(t) {
            this._update();
            let e = this.vertices.length - 1,
              s = this._closed || this.vertices[e]._command === w.close,
              r = this.vertices[e],
              n = [],
              a;
            return (
              S.each(
                this.vertices,
                function (o, h) {
                  if (h <= 0 && !s) {
                    r = o;
                    return;
                  }
                  if (o.command === w.move) {
                    n.push(new F(r.x, r.y)),
                      h > 0 && (n[n.length - 1].command = w.line),
                      (r = o);
                    return;
                  }
                  (a = Xe(o, r, t)),
                    (n = n.concat(a)),
                    S.each(a, function (l, f) {
                      f <= 0 && r.command === w.move
                        ? (l.command = w.move)
                        : (l.command = w.line);
                    }),
                    h >= e &&
                      (this._closed && this._automatic
                        ? ((r = o),
                          (a = Xe(o, r, t)),
                          (n = n.concat(a)),
                          S.each(a, function (l, f) {
                            f <= 0 && r.command === w.move
                              ? (l.command = w.move)
                              : (l.command = w.line);
                          }))
                        : s && n.push(new F(o.x, o.y)),
                      (n[n.length - 1].command = s ? w.close : w.line)),
                    (r = o);
                },
                this
              ),
              (this._automatic = !1),
              (this._curved = !1),
              (this.vertices = n),
              this
            );
          }
          _updateLength(t, e) {
            e || this._update();
            let s = this.vertices.length,
              r = s - 1,
              n = !1,
              a = this.vertices[r],
              o = 0;
            return (
              typeof this._lengths > "u" && (this._lengths = []),
              S.each(
                this.vertices,
                function (h, l) {
                  if ((l <= 0 && !n) || h.command === w.move) {
                    (a = h), (this._lengths[l] = 0);
                    return;
                  }
                  (this._lengths[l] = Ee(h, a, t)),
                    (o += this._lengths[l]),
                    l >= r &&
                      n &&
                      ((a = this.vertices[(l + 1) % s]),
                      (this._lengths[l + 1] = Ee(h, a, t)),
                      (o += this._lengths[l + 1])),
                    (a = h);
                },
                this
              ),
              (this._length = o),
              (this._flagLength = !1),
              this
            );
          }
          _update() {
            if (this._flagVertices) {
              this._automatic && this.plot(),
                this._flagLength && this._updateLength(void 0, !0);
              let t = this._collection.length,
                e = this._closed,
                s = Math.min(this._beginning, this._ending),
                r = Math.max(this._beginning, this._ending),
                n = Gt(this, s * this._length),
                a = Gt(this, r * this._length),
                o = xs(n),
                h = bs(a),
                l,
                f,
                u,
                _,
                d,
                c;
              for (this._renderer.vertices.length = 0, c = 0; c < t; c++)
                this._renderer.collection.length <= c &&
                  this._renderer.collection.push(new F()),
                  c > h && !f
                    ? ((d = this._renderer.collection[c].copy(
                        this._collection[c]
                      )),
                      this.getPointAt(r, d),
                      (d.command = this._renderer.collection[c].command),
                      this._renderer.vertices.push(d),
                      (f = d),
                      (u = this._collection[c - 1]),
                      u &&
                        u.controls &&
                        (d.relative
                          ? d.controls.right.clear()
                          : d.controls.right.copy(d),
                        u.relative
                          ? this._renderer.collection[c - 1].controls.right
                              .copy(u.controls.right)
                              .lerp(k.zero, 1 - d.t)
                          : this._renderer.collection[c - 1].controls.right
                              .copy(u.controls.right)
                              .lerp(u, 1 - d.t)))
                    : c >= o &&
                      c <= h &&
                      ((d = this._renderer.collection[c].copy(
                        this._collection[c]
                      )),
                      this._renderer.vertices.push(d),
                      c === h && We(this, r)
                        ? ((f = d),
                          !e &&
                            f.controls &&
                            (f.relative
                              ? f.controls.right.clear()
                              : f.controls.right.copy(f)))
                        : c === o &&
                          We(this, s) &&
                          ((l = d),
                          (l.command = w.move),
                          !e &&
                            l.controls &&
                            (l.relative
                              ? l.controls.left.clear()
                              : l.controls.left.copy(l))));
              o > 0 &&
                !l &&
                ((c = o - 1),
                (d = this._renderer.collection[c].copy(this._collection[c])),
                this.getPointAt(s, d),
                (d.command = w.move),
                this._renderer.vertices.unshift(d),
                (_ = this._collection[c + 1]),
                _ &&
                  _.controls &&
                  (d.controls.left.clear(),
                  _.relative
                    ? this._renderer.collection[c + 1].controls.left
                        .copy(_.controls.left)
                        .lerp(k.zero, d.t)
                    : (vs.copy(_),
                      this._renderer.collection[c + 1].controls.left
                        .copy(_.controls.left)
                        .lerp(_, d.t))));
            }
            return ot.prototype._update.apply(this, arguments), this;
          }
          flagReset() {
            return (
              (this._flagVertices =
                this._flagLength =
                this._flagFill =
                this._flagStroke =
                this._flagLinewidth =
                this._flagOpacity =
                this._flagVisible =
                this._flagCap =
                this._flagJoin =
                this._flagMiter =
                this._flagClip =
                  !1),
              ot.prototype.flagReset.call(this),
              this
            );
          }
        },
        L = qt;
      v(L, "Properties", [
        "fill",
        "stroke",
        "linewidth",
        "opacity",
        "visible",
        "cap",
        "join",
        "miter",
        "closed",
        "curved",
        "automatic",
        "beginning",
        "ending",
      ]),
        v(L, "Utils", { getCurveLength: Ee });
      var Fi = {
        linewidth: {
          enumerable: !0,
          get: function () {
            return this._linewidth;
          },
          set: function (i) {
            (this._linewidth = i), (this._flagLinewidth = !0);
          },
        },
        opacity: {
          enumerable: !0,
          get: function () {
            return this._opacity;
          },
          set: function (i) {
            (this._opacity = i), (this._flagOpacity = !0);
          },
        },
        visible: {
          enumerable: !0,
          get: function () {
            return this._visible;
          },
          set: function (i) {
            (this._visible = i), (this._flagVisible = !0);
          },
        },
        cap: {
          enumerable: !0,
          get: function () {
            return this._cap;
          },
          set: function (i) {
            (this._cap = i), (this._flagCap = !0);
          },
        },
        join: {
          enumerable: !0,
          get: function () {
            return this._join;
          },
          set: function (i) {
            (this._join = i), (this._flagJoin = !0);
          },
        },
        miter: {
          enumerable: !0,
          get: function () {
            return this._miter;
          },
          set: function (i) {
            (this._miter = i), (this._flagMiter = !0);
          },
        },
        fill: {
          enumerable: !0,
          get: function () {
            return this._fill;
          },
          set: function (i) {
            (this._fill instanceof W ||
              this._fill instanceof U ||
              this._fill instanceof D ||
              this._fill instanceof B) &&
              this._fill.unbind(p.Types.change, this._renderer.flagFill),
              (this._fill = i),
              (this._flagFill = !0),
              (this._fill instanceof W ||
                this._fill instanceof U ||
                this._fill instanceof D ||
                this._fill instanceof B) &&
                this._fill.bind(p.Types.change, this._renderer.flagFill);
          },
        },
        stroke: {
          enumerable: !0,
          get: function () {
            return this._stroke;
          },
          set: function (i) {
            (this._stroke instanceof W ||
              this._stroke instanceof U ||
              this._stroke instanceof D ||
              this._stroke instanceof B) &&
              this._stroke.unbind(p.Types.change, this._renderer.flagStroke),
              (this._stroke = i),
              (this._flagStroke = !0),
              (this._stroke instanceof W ||
                this._stroke instanceof U ||
                this._stroke instanceof D ||
                this._stroke instanceof B) &&
                this._stroke.bind(p.Types.change, this._renderer.flagStroke);
          },
        },
        length: {
          get: function () {
            return this._flagLength && this._updateLength(), this._length;
          },
        },
        closed: {
          enumerable: !0,
          get: function () {
            return this._closed;
          },
          set: function (i) {
            (this._closed = !!i), (this._flagVertices = !0);
          },
        },
        curved: {
          enumerable: !0,
          get: function () {
            return this._curved;
          },
          set: function (i) {
            (this._curved = !!i), (this._flagVertices = !0);
          },
        },
        automatic: {
          enumerable: !0,
          get: function () {
            return this._automatic;
          },
          set: function (i) {
            if (i === this._automatic) return;
            this._automatic = !!i;
            let t = this._automatic ? "ignore" : "listen";
            S.each(this.vertices, function (e) {
              e[t]();
            });
          },
        },
        beginning: {
          enumerable: !0,
          get: function () {
            return this._beginning;
          },
          set: function (i) {
            (this._beginning = i), (this._flagVertices = !0);
          },
        },
        ending: {
          enumerable: !0,
          get: function () {
            return this._ending;
          },
          set: function (i) {
            (this._ending = i), (this._flagVertices = !0);
          },
        },
        vertices: {
          enumerable: !0,
          get: function () {
            return this._collection;
          },
          set: function (i) {
            let t = this._renderer.bindVertices,
              e = this._renderer.unbindVertices;
            this._collection &&
              this._collection
                .unbind(p.Types.insert, t)
                .unbind(p.Types.remove, e),
              i instanceof lt
                ? (this._collection = i)
                : (this._collection = new lt(i || [])),
              this._collection.bind(p.Types.insert, t).bind(p.Types.remove, e),
              t(this._collection);
          },
        },
        mask: {
          enumerable: !0,
          get: function () {
            return this._mask;
          },
          set: function (i) {
            (this._mask = i),
              (this._flagMask = !0),
              S.isObject(i) && !i.clip && (i.clip = !0);
          },
        },
        clip: {
          enumerable: !0,
          get: function () {
            return this._clip;
          },
          set: function (i) {
            (this._clip = i), (this._flagClip = !0);
          },
        },
        dashes: {
          enumerable: !0,
          get: function () {
            return this._dashes;
          },
          set: function (i) {
            typeof i.offset != "number" &&
              (i.offset = (this.dashes && this._dashes.offset) || 0),
              (this._dashes = i);
          },
        },
      };
      function Ge() {
        (this._flagVertices = !0),
          (this._flagLength = !0),
          this.parent && (this.parent._flagLength = !0);
      }
      function qe(i) {
        let t = i.length;
        for (; t--; ) i[t].bind(p.Types.change, this._renderer.flagVertices);
        this._renderer.flagVertices();
      }
      function Ke(i) {
        let t = i.length;
        for (; t--; ) i[t].unbind(p.Types.change, this._renderer.flagVertices);
        this._renderer.flagVertices();
      }
      function $e() {
        this._flagFill = !0;
      }
      function Je() {
        this._flagStroke = !0;
      }
      var Ze = class extends L {
          constructor(t, e, s, r) {
            let n = [new F(), new F(), new F(), new F()];
            super(n, !0, !1, !0);
            for (let a in Ti) Object.defineProperty(this, a, Ti[a]);
            (this.width = typeof s == "number" ? s : 1),
              (this.height = typeof r == "number" ? r : 1),
              (this.origin = new k()),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e),
              this._update();
          }
          _flagWidth = 0;
          _flagHeight = 0;
          _width = 0;
          _height = 0;
          _origin = null;
          _update() {
            if (this._flagVertices || this._flagWidth || this._flagHeight) {
              let t = this._width / 2,
                e = this._height / 2;
              !this._closed &&
                this.vertices.length === 4 &&
                this.vertices.push(new F()),
                (this.vertices[0].set(-t, -e).sub(this._origin).command =
                  w.move),
                (this.vertices[1].set(t, -e).sub(this._origin).command =
                  w.line),
                (this.vertices[2].set(t, e).sub(this._origin).command = w.line),
                (this.vertices[3].set(-t, e).sub(this._origin).command =
                  w.line),
                this.vertices[4] &&
                  (this.vertices[4].set(-t, -e).sub(this._origin).command =
                    w.line);
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              (this._flagWidth = this._flagHeight = !1),
              super.flagReset.call(this),
              this
            );
          }
          clone(t) {
            let e = new Ze(0, 0, this.width, this.height);
            e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              this.matrix.manual && e.matrix.copy(this.matrix);
            for (let s = 0; s < L.Properties.length; s++) {
              let r = L.Properties[s];
              e[r] = this[r];
            }
            return t && t.add(e), e;
          }
          toObject() {
            let t = super.toObject.call(this);
            return (
              (t.width = this.width),
              (t.height = this.height),
              (t.origin = this.origin.toObject()),
              t
            );
          }
        },
        yt = Ze;
      v(yt, "Properties", ["width", "height"]);
      var Ti = {
        width: {
          enumerable: !0,
          get: function () {
            return this._width;
          },
          set: function (i) {
            (this._width = i), (this._flagWidth = !0);
          },
        },
        height: {
          enumerable: !0,
          get: function () {
            return this._height;
          },
          set: function (i) {
            (this._height = i), (this._flagHeight = !0);
          },
        },
        origin: {
          enumerable: !0,
          get: function () {
            return this._origin;
          },
          set: function (i) {
            this._origin &&
              this._origin.unbind(p.Types.change, this._renderer.flagVertices),
              (this._origin = i),
              this._origin.bind(p.Types.change, this._renderer.flagVertices),
              this._renderer.flagVertices();
          },
        },
      };
      var Qe = class extends yt {
          _flagTexture = !1;
          _flagColumns = !1;
          _flagRows = !1;
          _flagFrameRate = !1;
          _flagIndex = !1;
          _amount = 1;
          _duration = 0;
          _startTime = 0;
          _playing = !1;
          _firstFrame = 0;
          _lastFrame = 0;
          _loop = !0;
          _texture = null;
          _columns = 1;
          _rows = 1;
          _frameRate = 0;
          _index = 0;
          _origin = null;
          constructor(t, e, s, r, n, a) {
            super(e, s, 0, 0);
            for (let o in Mi) Object.defineProperty(this, o, Mi[o]);
            this.noStroke(),
              this.noFill(),
              t instanceof B
                ? (this.texture = t)
                : typeof t == "string" && (this.texture = new B(t)),
              (this.origin = new k()),
              this._update(),
              typeof r == "number" && (this.columns = r),
              typeof n == "number" && (this.rows = n),
              typeof a == "number" && (this.frameRate = a),
              (this.index = 0);
          }
          play(t, e, s) {
            return (
              (this._playing = !0),
              (this._firstFrame = 0),
              (this._lastFrame = this.amount - 1),
              (this._startTime = S.performance.now()),
              typeof t == "number" && (this._firstFrame = t),
              typeof e == "number" && (this._lastFrame = e),
              typeof s == "function"
                ? (this._onLastFrame = s)
                : delete this._onLastFrame,
              this._index !== this._firstFrame &&
                (this._startTime -=
                  (1e3 * Math.abs(this._index - this._firstFrame)) /
                  this._frameRate),
              this
            );
          }
          pause() {
            return (this._playing = !1), this;
          }
          stop() {
            return (this._playing = !1), (this._index = 0), this;
          }
          clone(t) {
            let e = new Qe(
              this.texture,
              this.translation.x,
              this.translation.y,
              this.columns,
              this.rows,
              this.frameRate
            );
            return (
              this.playing &&
                (e.play(this._firstFrame, this._lastFrame),
                (e._loop = this._loop)),
              t && t.add(e),
              e
            );
          }
          toObject() {
            let t = super.toObject.call(this);
            return (
              (t.texture = this.texture.toObject()),
              (t.columns = this.columns),
              (t.rows = this.rows),
              (t.frameRate = this.frameRate),
              (t.index = this.index),
              (t._firstFrame = this._firstFrame),
              (t._lastFrame = this._lastFrame),
              (t._loop = this._loop),
              t
            );
          }
          _update() {
            let t = this._texture,
              e = this._columns,
              s = this._rows,
              r,
              n,
              a,
              o,
              h,
              l,
              f,
              u,
              _;
            if (
              t &&
              ((this._flagColumns || this._flagRows) &&
                (this._amount = this._columns * this._rows),
              this._flagFrameRate &&
                (this._duration = (1e3 * this._amount) / this._frameRate),
              this._flagTexture && (this.fill = t),
              t.loaded)
            ) {
              (f = t.image.width),
                (u = t.image.height),
                (r = f / e),
                (n = u / s),
                (o = this._amount),
                this.width !== r && (this.width = r),
                this.height !== n && (this.height = n),
                this._playing &&
                  this._frameRate > 0 &&
                  (S.isNaN(this._lastFrame) && (this._lastFrame = o - 1),
                  (a = S.performance.now() - this._startTime),
                  (_ = this._lastFrame + 1),
                  (h = (1e3 * (_ - this._firstFrame)) / this._frameRate),
                  this._loop ? (a = a % h) : (a = Math.min(a, h)),
                  (l = nt(this._firstFrame, _, a / h)),
                  (l = Math.floor(l)),
                  l !== this._index &&
                    ((this._index = l),
                    l >= this._lastFrame - 1 &&
                      this._onLastFrame &&
                      this._onLastFrame()));
              let d = this._index % e,
                c = Math.floor(this._index / e),
                m = -r * d + (f - r) / 2,
                b = -n * c + (u - n) / 2;
              m !== t.offset.x && (t.offset.x = m),
                b !== t.offset.y && (t.offset.y = b);
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              (this._flagTexture =
                this._flagColumns =
                this._flagRows =
                this._flagFrameRate =
                  !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        Bt = Qe;
      v(Bt, "Properties", ["texture", "columns", "rows", "frameRate", "index"]);
      var Mi = {
        texture: {
          enumerable: !0,
          get: function () {
            return this._texture;
          },
          set: function (i) {
            (this._texture = i), (this._flagTexture = !0);
          },
        },
        columns: {
          enumerable: !0,
          get: function () {
            return this._columns;
          },
          set: function (i) {
            (this._columns = i), (this._flagColumns = !0);
          },
        },
        rows: {
          enumerable: !0,
          get: function () {
            return this._rows;
          },
          set: function (i) {
            (this._rows = i), (this._flagRows = !0);
          },
        },
        frameRate: {
          enumerable: !0,
          get: function () {
            return this._frameRate;
          },
          set: function (i) {
            (this._frameRate = i), (this._flagFrameRate = !0);
          },
        },
        index: {
          enumerable: !0,
          get: function () {
            return this._index;
          },
          set: function (i) {
            (this._index = i), (this._flagIndex = !0);
          },
        },
      };
      var ti = Math.cos,
        ei = Math.sin,
        le = class extends L {
          _flagRadius = !1;
          _radius = 0;
          constructor(t, e, s, r) {
            let n = r ? Math.max(r, 2) : 4,
              a = [];
            for (let o = 0; o < n; o++) a.push(new F(0, 0, 0, 0, 0, 0));
            super(a, !0, !0, !0);
            for (let o in Ci) Object.defineProperty(this, o, Ci[o]);
            typeof s == "number" && (this.radius = s),
              this._update(),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e);
          }
          _update() {
            if (this._flagVertices || this._flagRadius) {
              let t = this.vertices.length;
              !this._closed && t > 2 && (t -= 1);
              let e = (4 / 3) * Math.tan(Math.PI / (t * 2)),
                s = this._radius,
                r = s * e;
              for (let n = 0; n < this.vertices.length; n++) {
                let o = (n / t) * $,
                  h = s * ti(o),
                  l = s * ei(o),
                  f = r * ti(o - J),
                  u = r * ei(o - J),
                  _ = r * ti(o + J),
                  d = r * ei(o + J),
                  c = this.vertices[n];
                (c.command = n === 0 ? w.move : w.curve),
                  c.set(h, l),
                  c.controls.left.set(f, u),
                  c.controls.right.set(_, d);
              }
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (this._flagRadius = !1), super.flagReset.call(this), this;
          }
          clone(t) {
            let e = new le(0, 0, this.radius, this.vertices.length);
            e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              this.matrix.manual && e.matrix.copy(this.matrix);
            for (let s = 0; s < L.Properties.length; s++) {
              let r = L.Properties[s];
              e[r] = this[r];
            }
            return t && t.add(e), e;
          }
          toObject() {
            let t = super.toObject.call(this);
            for (let e = 0; e < le.Properties.length; e++) {
              let s = le.Properties[e];
              t[s] = this[s];
            }
            return t;
          }
        },
        jt = le;
      v(jt, "Properties", ["radius"]);
      var Ci = {
        radius: {
          enumerable: !0,
          get: function () {
            return this._radius;
          },
          set: function (i) {
            (this._radius = i), (this._flagRadius = !0);
          },
        },
      };
      var ii = Math.cos,
        si = Math.sin,
        he = class extends L {
          _flagWidth = !1;
          _flagHeight = !1;
          _width = 0;
          _height = 0;
          constructor(t, e, s, r, n) {
            typeof r != "number" && typeof s == "number" && (r = s);
            let a = n ? Math.max(n, 2) : 4,
              o = [];
            for (let h = 0; h < a; h++) o.push(new F());
            super(o, !0, !0, !0);
            for (let h in Li) Object.defineProperty(this, h, Li[h]);
            typeof s == "number" && (this.width = s * 2),
              typeof r == "number" && (this.height = r * 2),
              this._update(),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e);
          }
          _update() {
            if (this._flagVertices || this._flagWidth || this._flagHeight) {
              let t = this.vertices.length;
              !this._closed && t > 2 && (t -= 1);
              let e = (4 / 3) * Math.tan(Math.PI / (this.vertices.length * 2)),
                s = this._width / 2,
                r = this._height / 2;
              for (let n = 0; n < this.vertices.length; n++) {
                let o = (n / t) * $,
                  h = s * ii(o),
                  l = r * si(o),
                  f = s * e * ii(o - J),
                  u = r * e * si(o - J),
                  _ = s * e * ii(o + J),
                  d = r * e * si(o + J),
                  c = this.vertices[n];
                (c.command = n === 0 ? w.move : w.curve),
                  c.set(h, l),
                  c.controls.left.set(f, u),
                  c.controls.right.set(_, d);
              }
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              (this._flagWidth = this._flagHeight = !1),
              super.flagReset.call(this),
              this
            );
          }
          clone(t) {
            let e = this.width / 2,
              s = this.height / 2,
              r = this.vertices.length,
              n = new he(0, 0, e, s, r);
            n.translation.copy(this.translation),
              (n.rotation = this.rotation),
              (n.scale = this.scale),
              (n.skewX = this.skewX),
              (n.skewY = this.skewY),
              this.matrix.manual && n.matrix.copy(this.matrix);
            for (let a = 0; a < L.Properties.length; a++) {
              let o = L.Properties[a];
              n[o] = this[o];
            }
            return t && t.add(n), n;
          }
          toObject() {
            let t = super.toObject.call(this);
            for (let e = 0; e < he.Properties.length; e++) {
              let s = he.Properties[e];
              t[s] = this[s];
            }
            return t;
          }
        },
        Nt = he;
      v(Nt, "Properties", ["width", "height"]);
      var Li = {
        width: {
          enumerable: !0,
          get: function () {
            return this._width;
          },
          set: function (i) {
            (this._width = i), (this._flagWidth = !0);
          },
        },
        height: {
          enumerable: !0,
          get: function () {
            return this._height;
          },
          set: function (i) {
            (this._height = i), (this._flagHeight = !0);
          },
        },
      };
      var Dt = class extends L {
          constructor(t, e, s, r) {
            let n = [new F(t, e), new F(s, r)];
            super(n);
            for (let a in Oi) Object.defineProperty(this, a, Oi[a]);
            (this.vertices[0].command = w.move),
              (this.vertices[1].command = w.line),
              (this.automatic = !1);
          }
        },
        Oi = {
          left: {
            enumerable: !0,
            get: function () {
              return this.vertices[0];
            },
            set: function (i) {
              if (S.isObject(i)) this.vertices.splice(0, 1, i);
              else {
                let t = new et("Two.Line.x argument is not an object.");
                console.warn(t.name, t.message);
              }
            },
          },
          right: {
            enumerable: !0,
            get: function () {
              return this.vertices[0];
            },
            set: function (i) {
              if (S.isObject(i)) this.vertices.splice(1, 1, i);
              else {
                let t = new et("Two.Line.y argument is not an object.");
                console.warn(t.name, t.message);
              }
            },
          },
        };
      var fe = class extends L {
          _flagWidth = !1;
          _flagHeight = !1;
          _flagRadius = !1;
          _width = 0;
          _height = 0;
          _radius = 12;
          constructor(t, e, s, r, n) {
            typeof n > "u" &&
              typeof s == "number" &&
              typeof r == "number" &&
              (n = Math.floor(Math.min(s, r) / 12));
            let a = [];
            for (let o = 0; o < 10; o++)
              a.push(new F(0, 0, 0, 0, 0, 0, o === 0 ? w.move : w.curve));
            super(a);
            for (let o in Pi) Object.defineProperty(this, o, Pi[o]);
            (this.closed = !0),
              (this.automatic = !1),
              (this._renderer.flagRadius = ws.bind(this)),
              typeof s == "number" && (this.width = s),
              typeof r == "number" && (this.height = r),
              typeof n == "number" && (this.radius = n),
              this._update(),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e);
          }
          _update() {
            if (
              this._flagVertices ||
              this._flagWidth ||
              this._flagHeight ||
              this._flagRadius
            ) {
              let t = this._width,
                e = this._height,
                s,
                r;
              this._radius instanceof k
                ? ((s = this._radius.x), (r = this._radius.y))
                : ((s = this._radius), (r = this._radius));
              let n,
                a = t / 2,
                o = e / 2;
              (n = this.vertices[0]),
                (n.x = -(a - s)),
                (n.y = -o),
                (n = this.vertices[1]),
                (n.x = a - s),
                (n.y = -o),
                n.controls.left.clear(),
                (n.controls.right.x = s),
                (n.controls.right.y = 0),
                (n = this.vertices[2]),
                (n.x = a),
                (n.y = -(o - r)),
                n.controls.right.clear(),
                n.controls.left.clear(),
                (n = this.vertices[3]),
                (n.x = a),
                (n.y = o - r),
                n.controls.left.clear(),
                (n.controls.right.x = 0),
                (n.controls.right.y = r),
                (n = this.vertices[4]),
                (n.x = a - s),
                (n.y = o),
                n.controls.right.clear(),
                n.controls.left.clear(),
                (n = this.vertices[5]),
                (n.x = -(a - s)),
                (n.y = o),
                n.controls.left.clear(),
                (n.controls.right.x = -s),
                (n.controls.right.y = 0),
                (n = this.vertices[6]),
                (n.x = -a),
                (n.y = o - r),
                n.controls.left.clear(),
                n.controls.right.clear(),
                (n = this.vertices[7]),
                (n.x = -a),
                (n.y = -(o - r)),
                n.controls.left.clear(),
                (n.controls.right.x = 0),
                (n.controls.right.y = -r),
                (n = this.vertices[8]),
                (n.x = -(a - s)),
                (n.y = -o),
                n.controls.left.clear(),
                n.controls.right.clear(),
                (n = this.vertices[9]),
                n.copy(this.vertices[8]);
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              (this._flagWidth = this._flagHeight = this._flagRadius = !1),
              super.flagReset.call(this),
              this
            );
          }
          clone(t) {
            let e = this.width,
              s = this.height,
              r = this.radius,
              n = new fe(0, 0, e, s, r);
            n.translation.copy(this.translation),
              (n.rotation = this.rotation),
              (n.scale = this.scale),
              (n.skewX = this.skewX),
              (n.skewY = this.skewY),
              this.matrix.manual && n.matrix.copy(this.matrix);
            for (let a = 0; a < L.Properties.length; a++) {
              let o = L.Properties[a];
              n[o] = this[o];
            }
            return t && t.add(n), n;
          }
          toObject() {
            let t = super.toObject.call(this);
            for (let e = 0; e < fe.Properties.length; e++) {
              let s = fe.Properties[e];
              t[s] = this[s];
            }
            return (
              (t.radius =
                typeof this.radius == "number"
                  ? this.radius
                  : this.radius.toObject()),
              t
            );
          }
        },
        Vt = fe;
      v(Vt, "Properties", ["width", "height", "radius"]);
      var Pi = {
        width: {
          enumerable: !0,
          get: function () {
            return this._width;
          },
          set: function (i) {
            (this._width = i), (this._flagWidth = !0);
          },
        },
        height: {
          enumerable: !0,
          get: function () {
            return this._height;
          },
          set: function (i) {
            (this._height = i), (this._flagHeight = !0);
          },
        },
        radius: {
          enumerable: !0,
          get: function () {
            return this._radius;
          },
          set: function (i) {
            this._radius instanceof k &&
              this._radius.unbind(p.Types.change, this._renderer.flagRadius),
              (this._radius = i),
              this._radius instanceof k &&
                this._radius.bind(p.Types.change, this._renderer.flagRadius),
              (this._flagRadius = !0);
          },
        },
      };
      function ws() {
        this._flagRadius = !0;
      }
      var ri,
        Ii = Math.min,
        Bi = Math.max;
      H.document && (ri = document.createElement("canvas"));
      var Rt = class extends ot {
          _flagValue = !0;
          _flagFamily = !0;
          _flagSize = !0;
          _flagLeading = !0;
          _flagAlignment = !0;
          _flagBaseline = !0;
          _flagStyle = !0;
          _flagWeight = !0;
          _flagDecoration = !0;
          _flagFill = !0;
          _flagStroke = !0;
          _flagLinewidth = !0;
          _flagOpacity = !0;
          _flagVisible = !0;
          _flagMask = !1;
          _flagClip = !1;
          _value = "";
          _family = "sans-serif";
          _size = 13;
          _leading = 17;
          _alignment = "center";
          _baseline = "middle";
          _style = "normal";
          _weight = 500;
          _decoration = "none";
          _fill = "#000";
          _stroke = "transparent";
          _linewidth = 1;
          _opacity = 1;
          _visible = !0;
          _mask = null;
          _clip = !1;
          _dashes = null;
          constructor(t, e, s, r) {
            super();
            for (let n in ji) Object.defineProperty(this, n, ji[n]);
            if (
              ((this._renderer.type = "text"),
              (this._renderer.flagFill = ks.bind(this)),
              (this._renderer.flagStroke = As.bind(this)),
              (this.value = t),
              typeof e == "number" && (this.translation.x = e),
              typeof s == "number" && (this.translation.y = s),
              (this.dashes = []),
              (this.dashes.offset = 0),
              !S.isObject(r))
            )
              return this;
            for (let n = 0; n < Rt.Properties.length; n++) {
              let a = Rt.Properties[n];
              a in r && (this[a] = r[a]);
            }
          }
          static Measure(t) {
            if (ri) {
              let e = ri.getContext("2d");
              e.font = [
                t._style,
                t._weight,
                `${t._size}px/${t._leading}px`,
                t._family,
              ].join(" ");
              let s = e.measureText(t.value, 0, 0),
                r = s.actualBoundingBoxDescent + s.actualBoundingBoxAscent;
              return { width: s.width, height: r };
            } else {
              let e = this.value.length * this.size * Rt.Ratio,
                s = this.leading;
              return (
                console.warn(
                  "Two.Text: unable to accurately measure text, so using an approximation."
                ),
                { width: e, height: s }
              );
            }
          }
          clone(t) {
            let e = new Rt(this.value);
            e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale);
            for (let s = 0; s < Rt.Properties.length; s++) {
              let r = Rt.Properties[s];
              e[r] = this[r];
            }
            return (
              this.matrix.manual && e.matrix.copy(this.matrix),
              t && t.add(e),
              e._update()
            );
          }
          toObject() {
            let t = {
              translation: this.translation.toObject(),
              rotation: this.rotation,
              scale: this.scale,
            };
            this.matrix.manual && (t.matrix = this.matrix.toObject());
            for (let e = 0; e < Rt.Properties.length; e++) {
              let s = Rt.Properties[e];
              t[s] = this[s];
            }
            return t;
          }
          noFill() {
            return (this.fill = "transparent"), this;
          }
          noStroke() {
            return (this.stroke = void 0), (this.linewidth = void 0), this;
          }
          getBoundingClientRect(t) {
            let e, s, r, n, a, o, h, l, f;
            this._update(!0), (e = t ? this._matrix : pt(this));
            let { width: u, height: _ } = Rt.Measure(this),
              d = (this._linewidth || 0) / 2;
            switch (this.alignment) {
              case "left":
                (o = -d), (h = u + d);
                break;
              case "right":
                (o = -(u + d)), (h = d);
                break;
              default:
                (o = -(u / 2 + d)), (h = u / 2 + d);
            }
            switch (this.baseline) {
              case "middle":
                (l = -(_ / 2 + d)), (f = _ / 2 + d);
                break;
              default:
                (l = -(_ + d)), (f = d);
            }
            return (
              (s = e.multiply(o, l, 1)),
              (r = e.multiply(o, f, 1)),
              (n = e.multiply(h, l, 1)),
              (a = e.multiply(h, f, 1)),
              (l = Ii(s.y, r.y, n.y, a.y)),
              (o = Ii(s.x, r.x, n.x, a.x)),
              (h = Bi(s.x, r.x, n.x, a.x)),
              (f = Bi(s.y, r.y, n.y, a.y)),
              {
                top: l,
                left: o,
                right: h,
                bottom: f,
                width: h - o,
                height: f - l,
              }
            );
          }
          flagReset() {
            return (
              super.flagReset.call(this),
              (this._flagValue =
                this._flagFamily =
                this._flagSize =
                this._flagLeading =
                this._flagAlignment =
                this._flagFill =
                this._flagStroke =
                this._flagLinewidth =
                this._flagOpacity =
                this._flagVisible =
                this._flagClip =
                this._flagDecoration =
                this._flagClassName =
                this._flagBaseline =
                this._flagWeight =
                this._flagStyle =
                  !1),
              this
            );
          }
        },
        ct = Rt;
      v(ct, "Ratio", 0.6),
        v(ct, "Properties", [
          "value",
          "family",
          "size",
          "leading",
          "alignment",
          "linewidth",
          "style",
          "weight",
          "decoration",
          "baseline",
          "opacity",
          "visible",
          "fill",
          "stroke",
        ]);
      var ji = {
        value: {
          enumerable: !0,
          get: function () {
            return this._value;
          },
          set: function (i) {
            (this._value = i), (this._flagValue = !0);
          },
        },
        family: {
          enumerable: !0,
          get: function () {
            return this._family;
          },
          set: function (i) {
            (this._family = i), (this._flagFamily = !0);
          },
        },
        size: {
          enumerable: !0,
          get: function () {
            return this._size;
          },
          set: function (i) {
            (this._size = i), (this._flagSize = !0);
          },
        },
        leading: {
          enumerable: !0,
          get: function () {
            return this._leading;
          },
          set: function (i) {
            (this._leading = i), (this._flagLeading = !0);
          },
        },
        alignment: {
          enumerable: !0,
          get: function () {
            return this._alignment;
          },
          set: function (i) {
            (this._alignment = i), (this._flagAlignment = !0);
          },
        },
        linewidth: {
          enumerable: !0,
          get: function () {
            return this._linewidth;
          },
          set: function (i) {
            (this._linewidth = i), (this._flagLinewidth = !0);
          },
        },
        style: {
          enumerable: !0,
          get: function () {
            return this._style;
          },
          set: function (i) {
            (this._style = i), (this._flagStyle = !0);
          },
        },
        weight: {
          enumerable: !0,
          get: function () {
            return this._weight;
          },
          set: function (i) {
            (this._weight = i), (this._flagWeight = !0);
          },
        },
        decoration: {
          enumerable: !0,
          get: function () {
            return this._decoration;
          },
          set: function (i) {
            (this._decoration = i), (this._flagDecoration = !0);
          },
        },
        baseline: {
          enumerable: !0,
          get: function () {
            return this._baseline;
          },
          set: function (i) {
            (this._baseline = i), (this._flagBaseline = !0);
          },
        },
        opacity: {
          enumerable: !0,
          get: function () {
            return this._opacity;
          },
          set: function (i) {
            (this._opacity = i), (this._flagOpacity = !0);
          },
        },
        visible: {
          enumerable: !0,
          get: function () {
            return this._visible;
          },
          set: function (i) {
            (this._visible = i), (this._flagVisible = !0);
          },
        },
        fill: {
          enumerable: !0,
          get: function () {
            return this._fill;
          },
          set: function (i) {
            (this._fill instanceof W ||
              this._fill instanceof U ||
              this._fill instanceof D ||
              this._fill instanceof B) &&
              this._fill.unbind(p.Types.change, this._renderer.flagFill),
              (this._fill = i),
              (this._flagFill = !0),
              (this._fill instanceof W ||
                this._fill instanceof U ||
                this._fill instanceof D ||
                this._fill instanceof B) &&
                this._fill.bind(p.Types.change, this._renderer.flagFill);
          },
        },
        stroke: {
          enumerable: !0,
          get: function () {
            return this._stroke;
          },
          set: function (i) {
            (this._stroke instanceof W ||
              this._stroke instanceof U ||
              this._stroke instanceof D ||
              this._stroke instanceof B) &&
              this._stroke.unbind(p.Types.change, this._renderer.flagStroke),
              (this._stroke = i),
              (this._flagStroke = !0),
              (this._stroke instanceof W ||
                this._stroke instanceof U ||
                this._stroke instanceof D ||
                this._stroke instanceof B) &&
                this._stroke.bind(p.Types.change, this._renderer.flagStroke);
          },
        },
        mask: {
          enumerable: !0,
          get: function () {
            return this._mask;
          },
          set: function (i) {
            (this._mask = i),
              (this._flagMask = !0),
              S.isObject(i) && !i.clip && (i.clip = !0);
          },
        },
        clip: {
          enumerable: !0,
          get: function () {
            return this._clip;
          },
          set: function (i) {
            (this._clip = i), (this._flagClip = !0);
          },
        },
        dashes: {
          enumerable: !0,
          get: function () {
            return this._dashes;
          },
          set: function (i) {
            typeof i.offset != "number" &&
              (i.offset = (this.dashes && this._dashes.offset) || 0),
              (this._dashes = i);
          },
        },
      };
      function ks() {
        this._flagFill = !0;
      }
      function As() {
        this._flagStroke = !0;
      }
      var Ft = {
          path: /[+-]?(?:\d*\.\d+|\d+)(?:[eE][+-]\d+)?/g,
          cssBackgroundImage: /url\(['"]?#([\w\d-_]*)['"]?\)/i,
          unitSuffix: /[a-zA-Z%]*/i,
        },
        Rs = { start: "left", middle: "center", end: "right" },
        Ni = ["id", "class", "transform", "xmlns", "viewBox"],
        Ss = ["x", "y", "width", "height", "href", "xlink:href"];
      function Es(i) {
        return Rs[i];
      }
      function Fs(i) {
        let t = i.getAttribute("dominant-baseline"),
          e = i.getAttribute("alignment-baseline");
        return t || e;
      }
      function ce(i) {
        return i.replace(/svg:/gi, "").toLowerCase();
      }
      function Vi(i, t) {
        if (
          ((t.x += i.translateX),
          (t.y += i.translateY),
          (t.x *= i.scaleX),
          (t.y *= i.scaleY),
          i.rotation !== 0)
        ) {
          let e = t.length();
          (t.x = e * Math.cos(i.rotation)), (t.y = e * Math.sin(i.rotation));
        }
      }
      function Ts(i, t) {
        t || (t = {});
        let e = i.split(";");
        for (let s = 0; s < e.length; s++) {
          let r = e[s].split(":"),
            n = r[0],
            a = r[1];
          typeof n > "u" || typeof a > "u" || (t[n] = a.replace(/\s/, ""));
        }
        return t;
      }
      function Ms(i) {
        let t = {},
          e = Cs(i),
          s = Math.max(e.length, i.style.length);
        for (let r = 0; r < s; r++) {
          let n = i.style[r],
            a = e[r];
          n && (t[n] = i.style[n]), a && (t[a] = i.getAttribute(a));
        }
        return t;
      }
      function Cs(i) {
        let t = i.getAttributeNames();
        for (let e = 0; e < Ni.length; e++) {
          let s = Ni[e],
            r = Array.prototype.indexOf.call(t, s);
          r >= 0 && t.splice(r, 1);
        }
        return t;
      }
      function Ls(i, t) {
        let e = t.split(/[\s,]/),
          s = -parseFloat(e[0]),
          r = -parseFloat(e[1]),
          n = parseFloat(e[2]),
          a = parseFloat(e[3]);
        if (s && r)
          for (let u = 0; u < i.children.length; u++) {
            let _ = i.children[u];
            "translation" in _
              ? _.translation.add(s, r)
              : "x" in _
              ? (_.x = s)
              : "y" in _ && (_.y = r);
          }
        let o = typeof i.x == "number",
          h = typeof i.y == "number",
          l = typeof i.width == "number",
          f = typeof i.height == "number";
        return (
          o && (i.translation.x += i.x),
          h && (i.translation.y += i.y),
          (l || f) && (i.scale = new k(1, 1)),
          l && (i.scale.x = i.width / n),
          f && (i.scale.y = i.height / a),
          (i.mask = new yt(0, 0, n, a)),
          i.mask.origin.set(-n / 2, -a / 2),
          i
        );
      }
      function wt(i, t, e) {
        let s = {},
          r = {},
          n = {},
          a,
          o,
          h,
          l,
          f,
          u,
          _,
          d,
          c,
          m,
          b,
          g,
          y,
          x,
          R,
          A,
          E;
        if (H.getComputedStyle) {
          let C = H.getComputedStyle(i);
          for (a = C.length; a--; )
            (h = C[a]), (l = C[h]), typeof l < "u" && (s[h] = l);
        }
        for (a = 0; a < i.attributes.length; a++)
          (u = i.attributes[a]),
            /style/i.test(u.nodeName)
              ? Ts(u.value, n)
              : (r[u.nodeName] = u.value);
        typeof s.opacity < "u" &&
          ((s["stroke-opacity"] = s.opacity),
          (s["fill-opacity"] = s.opacity),
          delete s.opacity),
          e && S.defaults(s, e),
          S.extend(s, n, r),
          (s.visible =
            !(typeof s.display > "u" && /none/i.test(s.display)) ||
            (typeof s.visibility > "u" && /hidden/i.test(s.visibility)));
        for (h in s)
          switch (((l = s[h]), h)) {
            case "gradientTransform":
              if (
                /none/i.test(l) ||
                ((o =
                  i.gradientTransform &&
                  i.gradientTransform.baseVal &&
                  i.gradientTransform.baseVal.length > 0
                    ? i.gradientTransform.baseVal[0].matrix
                    : i.getCTM
                    ? i.getCTM()
                    : null),
                o === null)
              )
                break;
              switch (((_ = Ot(o)), t._renderer.type)) {
                case "linear-gradient":
                  Vi(_, t.left), Vi(_, t.right);
                  break;
                case "radial-gradient":
                  (t.center.x += _.translateX),
                    (t.center.y += _.translateY),
                    (t.focal.x += _.translateX),
                    (t.focal.y += _.translateY),
                    (t.radius *= Math.max(_.scaleX, _.scaleY));
                  break;
              }
              break;
            case "transform":
              if (
                /none/i.test(l) ||
                ((o =
                  i.transform &&
                  i.transform.baseVal &&
                  i.transform.baseVal.length > 0
                    ? i.transform.baseVal[0].matrix
                    : i.getCTM
                    ? i.getCTM()
                    : null),
                o === null)
              )
                break;
              Y.AutoCalculateImportedMatrices
                ? ((_ = Ot(o)),
                  t.translation.set(_.translateX, _.translateY),
                  (t.rotation = Math.PI * (_.rotation / 180)),
                  (t.scale = new k(_.scaleX, _.scaleY)),
                  (d = parseFloat((s.x + "").replace("px"))),
                  (c = parseFloat((s.y + "").replace("px"))),
                  d && (t.translation.x = d),
                  c && (t.translation.y = c))
                : ((o = i.getCTM()),
                  (t._matrix.manual = !0),
                  t._matrix.set(o.a, o.b, o.c, o.d, o.e, o.f));
              break;
            case "visible":
              if (t instanceof G) {
                t._visible = l;
                break;
              }
              t.visible = l;
              break;
            case "stroke-linecap":
              if (t instanceof G) {
                t._cap = l;
                break;
              }
              t.cap = l;
              break;
            case "stroke-linejoin":
              if (t instanceof G) {
                t._join = l;
                break;
              }
              t.join = l;
              break;
            case "stroke-miterlimit":
              if (t instanceof G) {
                t._miter = l;
                break;
              }
              t.miter = l;
              break;
            case "stroke-width":
              if (t instanceof G) {
                t._linewidth = parseFloat(l);
                break;
              }
              t.linewidth = parseFloat(l);
              break;
            case "opacity":
            case "stroke-opacity":
            case "fill-opacity":
              if (t instanceof G) {
                t._opacity = parseFloat(l);
                break;
              }
              t.opacity = parseFloat(l);
              break;
            case "clip-path":
              if (
                Ft.cssBackgroundImage.test(l) &&
                ((m = l.replace(Ft.cssBackgroundImage, "$1")),
                q.defs.current &&
                  q.defs.current.contains(m) &&
                  ((g = q.defs.current.get(m)), g && g.childNodes.length > 0))
              )
                switch (
                  ((g = g.childNodes[0]),
                  (y = ce(g.nodeName)),
                  (t.mask = q[y].call(this, g, {})),
                  t._renderer.type)
                ) {
                  case "text":
                  case "path":
                    t.position.add(t.mask.position), t.mask.position.clear();
                    break;
                }
              break;
            case "fill":
            case "stroke":
              (f = (t instanceof G ? "_" : "") + h),
                Ft.cssBackgroundImage.test(l)
                  ? ((m = l.replace(Ft.cssBackgroundImage, "$1")),
                    q.defs.current && q.defs.current.contains(m)
                      ? ((g = q.defs.current.get(m)),
                        g.object ||
                          ((y = ce(g.nodeName)),
                          (g.object = q[y].call(this, g, {}))),
                        (g = g.object))
                      : ((b = Ps(this)), (g = b.getById(m))),
                    (t[f] = g))
                  : (t[f] = /none/i.test(l) ? "transparent" : l);
              break;
            case "id":
              t.id = l;
              break;
            case "class":
            case "className":
              (t.classList = l.split(" ")), (t._flagClassName = !0);
              break;
            case "x":
            case "y":
              if (
                ((x = t instanceof W),
                (R = t instanceof U),
                (A = t instanceof D),
                x || R || A)
              )
                break;
              l.match("[a-z%]$") &&
                !l.endsWith("px") &&
                ((E = new et(
                  "only pixel values are supported with the " +
                    h +
                    " attribute."
                )),
                console.warn(E.name, E.message)),
                (t.translation[h] = parseFloat(l));
              break;
            case "font-family":
              t instanceof ct && (t.family = l);
              break;
            case "font-size":
              t instanceof ct && (t.size = l);
              break;
            case "font-weight":
              t instanceof ct && (t.weight = l);
              break;
            case "font-style":
              t instanceof ct && (t.style = l);
              break;
            case "text-decoration":
              t instanceof ct && (t.decoration = l);
              break;
            case "line-height":
              t instanceof ct && (t.leading = l);
              break;
          }
        return Object.keys(i.dataset).length && (t.dataset = i.dataset), s;
      }
      function Os(i, t) {
        for (let e = 0, s = i.childNodes.length; e < s; e++) {
          let r = i.childNodes[e];
          !r.id || ce(i.nodeName) === "#text" || t.add(r.id, r);
        }
      }
      function Ps(i) {
        for (; i.parent; ) i = i.parent;
        return i.scene;
      }
      var q = {
        svg: function (i) {
          let t = (q.defs.current = new Et()),
            e = i.getElementsByTagName("defs");
          for (let c = 0; c < e.length; c++) Os(e[c], t);
          let s = q.g.call(this, i),
            r = i.getAttribute("viewBox"),
            n = i.getAttribute("x"),
            a = i.getAttribute("y"),
            o = i.getAttribute("width"),
            h = i.getAttribute("height");
          s.defs = t;
          let l = r !== null,
            f = n !== null,
            u = a !== null,
            _ = o !== null,
            d = h !== null;
          return (
            f && (s.x = parseFloat(n.replace(Ft.unitSuffix, ""))),
            u && (s.y = parseFloat(a.replace(Ft.unitSuffix, ""))),
            _ && (s.width = parseFloat(o.replace(Ft.unitSuffix, ""))),
            d && (s.height = parseFloat(h.replace(Ft.unitSuffix, ""))),
            l && Ls(s, r),
            delete q.defs.current,
            s
          );
        },
        defs: function (i) {
          return null;
        },
        use: function (i, t) {
          let e,
            s = i.getAttribute("href") || i.getAttribute("xlink:href");
          if (!s)
            return (
              (e = new et("encountered <use /> with no href.")),
              console.warn(e.name, e.message),
              null
            );
          let r = s.slice(1);
          if (!q.defs.current.contains(r))
            return (
              (e = new et("unable to find element for reference " + s + ".")),
              console.warn(e.name, e.message),
              null
            );
          let a = q.defs.current.get(r).cloneNode(!0);
          for (let h = 0; h < i.attributes.length; h++) {
            let l = i.attributes[h],
              f = Ss.includes(l.nodeName),
              u = !a.hasAttribute(l.nodeName);
            (f || u) && a.setAttribute(l.nodeName, l.value);
          }
          let o = ce(a.nodeName);
          return q[o].call(this, a, t);
        },
        g: function (i, t) {
          let e = new G();
          wt.call(this, i, e, t), this.add(e);
          let s = Ms.call(this, i);
          for (let r = 0, n = i.childNodes.length; r < n; r++) {
            let a = i.childNodes[r],
              o = a.nodeName;
            if (!o) return;
            let h = ce(o);
            if (h in q) {
              let l = q[h].call(e, a, s);
              !!l && !l.parent && e.add(l);
            }
          }
          return e;
        },
        polygon: function (i, t) {
          let e;
          typeof i == "string" ? (e = i) : (e = i.getAttribute("points"));
          let s = [];
          e.replace(/(-?[\d.eE-]+)[,|\s](-?[\d.eE-]+)/g, function (n, a, o) {
            s.push(new F(parseFloat(a), parseFloat(o)));
          });
          let r = new L(s, !0).noStroke();
          return (r.fill = "black"), wt.call(this, i, r, t), r;
        },
        polyline: function (i, t) {
          let e = q.polygon.call(this, i, t);
          return (e.closed = !1), e;
        },
        path: function (i, t) {
          let e;
          typeof i == "string" ? (e = i) : (e = i.getAttribute("d"));
          let s = [],
            r = !1,
            n = !1;
          if (e) {
            let o = new F(),
              h,
              l,
              f = e.match(/[a-df-z][^a-df-z]*/gi),
              u = f.length - 1;
            S.each(f.slice(0), function (_, d) {
              let c = _.slice(1).trim().match(Ft.path),
                m = _[0],
                b = m.toLowerCase(),
                g,
                y,
                x,
                R,
                A,
                E = [];
              switch ((d === 0 && (f = []), b)) {
                case "h":
                case "v":
                  c.length > 1 && (g = 1);
                  break;
                case "m":
                case "l":
                case "t":
                  c.length > 2 && (g = 2);
                  break;
                case "s":
                case "q":
                  c.length > 4 && (g = 4);
                  break;
                case "c":
                  c.length > 6 && (g = 6);
                  break;
                case "a":
                  c.length > 7 && (g = 7);
                  break;
              }
              if (g) {
                for (y = 0, x = c.length, A = 0; y < x; y += g) {
                  if (((R = m), A > 0))
                    switch (m) {
                      case "m":
                        R = "l";
                        break;
                      case "M":
                        R = "L";
                        break;
                    }
                  E.push(R + c.slice(y, y + g).join(" ")), A++;
                }
                f = Array.prototype.concat.apply(f, E);
              } else f.push(_);
            }),
              S.each(f, function (_, d) {
                let c,
                  m,
                  b,
                  g = _[0],
                  y = g.toLowerCase();
                (l = _.slice(1).trim().match(Ft.path)), (n = g === y);
                let x, R, A, E, C, j, M, T, N, z, X, V, ut, dt, Z, _t, rt;
                switch (y) {
                  case "z":
                    if (d >= u) r = !0;
                    else {
                      (m = o.x),
                        (b = o.y),
                        (c = new F(
                          m,
                          b,
                          void 0,
                          void 0,
                          void 0,
                          void 0,
                          w.close
                        ));
                      for (let Tt = s.length - 1; Tt >= 0; Tt--) {
                        let Ct = s[Tt];
                        if (/m/i.test(Ct.command)) {
                          o = Ct;
                          break;
                        }
                      }
                    }
                    break;
                  case "m":
                  case "l":
                    (h = void 0),
                      (m = parseFloat(l[0])),
                      (b = parseFloat(l[1])),
                      (c = new F(
                        m,
                        b,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        /m/i.test(y) ? w.move : w.line
                      )),
                      n && c.addSelf(o),
                      (o = c);
                    break;
                  case "h":
                  case "v":
                    (z = /h/i.test(y) ? "x" : "y"),
                      (X = /x/i.test(z) ? "y" : "x"),
                      (c = new F(
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        void 0,
                        w.line
                      )),
                      (c[z] = parseFloat(l[0])),
                      (c[X] = o[X]),
                      n && (c[z] += o[z]),
                      (o = c);
                    break;
                  case "c":
                  case "s":
                    (x = o.x),
                      (R = o.y),
                      h || (h = new k()),
                      /c/i.test(y)
                        ? ((A = parseFloat(l[0])),
                          (E = parseFloat(l[1])),
                          (C = parseFloat(l[2])),
                          (j = parseFloat(l[3])),
                          (M = parseFloat(l[4])),
                          (T = parseFloat(l[5])))
                        : ((N = xe(o, h, n)),
                          (A = N.x),
                          (E = N.y),
                          (C = parseFloat(l[0])),
                          (j = parseFloat(l[1])),
                          (M = parseFloat(l[2])),
                          (T = parseFloat(l[3]))),
                      n &&
                        ((A += x),
                        (E += R),
                        (C += x),
                        (j += R),
                        (M += x),
                        (T += R)),
                      o.controls.right.set(A - o.x, E - o.y),
                      (c = new F(M, T, C - M, j - T, void 0, void 0, w.curve)),
                      (o = c),
                      (h = c.controls.left);
                    break;
                  case "t":
                  case "q":
                    (x = o.x),
                      (R = o.y),
                      h || (h = new k()),
                      /q/i.test(y)
                        ? ((A = parseFloat(l[0])),
                          (E = parseFloat(l[1])),
                          (C = parseFloat(l[0])),
                          (j = parseFloat(l[1])),
                          (M = parseFloat(l[2])),
                          (T = parseFloat(l[3])))
                        : ((N = xe(o, h, n)),
                          (A = N.x),
                          (E = N.y),
                          (C = N.x),
                          (j = N.y),
                          (M = parseFloat(l[0])),
                          (T = parseFloat(l[1]))),
                      n &&
                        ((A += x),
                        (E += R),
                        (C += x),
                        (j += R),
                        (M += x),
                        (T += R)),
                      o.controls.right.set((A - o.x) * 0.33, (E - o.y) * 0.33),
                      (c = new F(M, T, C - M, j - T, void 0, void 0, w.curve)),
                      (o = c),
                      (h = c.controls.left);
                    break;
                  case "a":
                    (x = o.x),
                      (R = o.y),
                      (ut = parseFloat(l[0])),
                      (dt = parseFloat(l[1])),
                      (Z = parseFloat(l[2])),
                      (_t = parseFloat(l[3])),
                      (rt = parseFloat(l[4])),
                      (M = parseFloat(l[5])),
                      (T = parseFloat(l[6])),
                      n && ((M += x), (T += R)),
                      (V = new F(M, T)),
                      (V.command = w.arc),
                      (V.rx = ut),
                      (V.ry = dt),
                      (V.xAxisRotation = Z),
                      (V.largeArcFlag = _t),
                      (V.sweepFlag = rt),
                      (c = V),
                      (o = V),
                      (h = void 0);
                    break;
                }
                c && (Array.isArray(c) ? (s = s.concat(c)) : s.push(c));
              });
          }
          (e = new L(s, r, void 0, !0).noStroke()), (e.fill = "black");
          let a = e.getBoundingClientRect(!0);
          return (
            (a.centroid = { x: a.left + a.width / 2, y: a.top + a.height / 2 }),
            S.each(e.vertices, function (o) {
              o.subSelf(a.centroid);
            }),
            wt.call(this, i, e, t),
            e.translation.addSelf(a.centroid),
            e
          );
        },
        circle: function (i, t) {
          let e = parseFloat(i.getAttribute("cx")),
            s = parseFloat(i.getAttribute("cy")),
            r = parseFloat(i.getAttribute("r")),
            n = new jt(0, 0, r).noStroke();
          return (
            (n.fill = "black"),
            wt.call(this, i, n, t),
            (n.translation.x = e),
            (n.translation.y = s),
            n
          );
        },
        ellipse: function (i, t) {
          let e = parseFloat(i.getAttribute("cx")),
            s = parseFloat(i.getAttribute("cy")),
            r = parseFloat(i.getAttribute("rx")),
            n = parseFloat(i.getAttribute("ry")),
            a = new Nt(0, 0, r, n).noStroke();
          return (
            (a.fill = "black"),
            wt.call(this, i, a, t),
            (a.translation.x = e),
            (a.translation.y = s),
            a
          );
        },
        rect: function (i, t) {
          let e = parseFloat(i.getAttribute("rx")),
            s = parseFloat(i.getAttribute("ry"));
          if (!S.isNaN(e) || !S.isNaN(s)) return q["rounded-rect"](i);
          let r = parseFloat(i.getAttribute("width")),
            n = parseFloat(i.getAttribute("height")),
            a = r / 2,
            o = n / 2,
            h = new yt(0, 0, r, n).noStroke();
          return (
            (h.fill = "black"),
            wt.call(this, i, h, t),
            (h.translation.x += a),
            (h.translation.y += o),
            h
          );
        },
        "rounded-rect": function (i, t) {
          let e = parseFloat(i.getAttribute("rx")) || 0,
            s = parseFloat(i.getAttribute("ry")) || 0,
            r = parseFloat(i.getAttribute("width")),
            n = parseFloat(i.getAttribute("height")),
            a = r / 2,
            o = n / 2,
            h = new k(e, s),
            l = new Vt(0, 0, r, n, h).noStroke();
          return (
            (l.fill = "black"),
            wt.call(this, i, l, t),
            (l.translation.x += a),
            (l.translation.y += o),
            l
          );
        },
        line: function (i, t) {
          let e = parseFloat(i.getAttribute("x1")),
            s = parseFloat(i.getAttribute("y1")),
            r = parseFloat(i.getAttribute("x2")),
            n = parseFloat(i.getAttribute("y2")),
            a = new Dt(e, s, r, n).noFill();
          return wt.call(this, i, a, t), a;
        },
        lineargradient: function (i, t) {
          let e = i.getAttribute("gradientUnits"),
            s = i.getAttribute("spreadMethod");
          e || (e = "objectBoundingBox"), s || (s = "pad");
          let r = parseFloat(i.getAttribute("x1") || 0),
            n = parseFloat(i.getAttribute("y1") || 0),
            a = parseFloat(i.getAttribute("x2") || 0),
            o = parseFloat(i.getAttribute("y2") || 0),
            h = (a + r) / 2,
            l = (o + n) / 2;
          /userSpaceOnUse/i.test(e) && ((r -= h), (n -= l), (a -= h), (o -= l));
          let f = [];
          for (let _ = 0; _ < i.children.length; _++) {
            let d = i.children[_],
              c = d.getAttribute("offset");
            /%/gi.test(c) && (c = parseFloat(c.replace(/%/gi, "")) / 100),
              (c = parseFloat(c));
            let m = d.getAttribute("stop-color"),
              b = d.getAttribute("stop-opacity"),
              g = d.getAttribute("style"),
              y;
            m === null &&
              ((y = g ? g.match(/stop-color:\s?([#a-fA-F0-9]*)/) : !1),
              (m = y && y.length > 1 ? y[1] : void 0)),
              b === null
                ? ((y = g ? g.match(/stop-opacity:\s?([0-9.-]*)/) : !1),
                  (b = y && y.length > 1 ? parseFloat(y[1]) : 1))
                : (b = parseFloat(b)),
              f.push(new ft(c, m, b));
          }
          let u = new U(r, n, a, o, f);
          return (u.spread = s), (u.units = e), wt.call(this, i, u, t), u;
        },
        radialgradient: function (i, t) {
          let e = i.getAttribute("gradientUnits"),
            s = i.getAttribute("spreadMethod");
          e || (e = "objectBoundingBox"), s || (s = "pad");
          let r = parseFloat(i.getAttribute("cx")) || 0,
            n = parseFloat(i.getAttribute("cy")) || 0,
            a = parseFloat(i.getAttribute("r")),
            o = parseFloat(i.getAttribute("fx")),
            h = parseFloat(i.getAttribute("fy"));
          S.isNaN(o) && (o = r), S.isNaN(h) && (h = n);
          let l = Math.abs(r + o) / 2,
            f = Math.abs(n + h) / 2;
          /userSpaceOnUse/i.test(e) && ((r -= l), (n -= f), (o -= l), (h -= f));
          let u = [];
          for (let d = 0; d < i.children.length; d++) {
            let c = i.children[d],
              m = c.getAttribute("offset");
            /%/gi.test(m) && (m = parseFloat(m.replace(/%/gi, "")) / 100),
              (m = parseFloat(m));
            let b = c.getAttribute("stop-color"),
              g = c.getAttribute("stop-opacity"),
              y = c.getAttribute("style"),
              x;
            b === null &&
              ((x = y ? y.match(/stop-color:\s?([#a-fA-F0-9]*)/) : !1),
              (b = x && x.length > 1 ? x[1] : void 0)),
              g === null
                ? ((x = y ? y.match(/stop-opacity:\s?([0-9.-]*)/) : !1),
                  (g = x && x.length > 1 ? parseFloat(x[1]) : 1))
                : (g = parseFloat(g)),
              u.push(new ft(m, b, g));
          }
          let _ = new D(r, n, a, u, o, h);
          return (_.spread = s), (_.units = e), wt.call(this, i, _, t), _;
        },
        text: function (i, t) {
          let e = Es(i.getAttribute("text-anchor")) || "left",
            s = Fs(i) || "baseline",
            r = i.textContent,
            n = new ct(r);
          return wt.call(this, i, n, t), (n.alignment = e), (n.baseline = s), n;
        },
        clippath: function (i, t) {
          return (
            q.defs.current &&
              !q.defs.current.contains(i.id) &&
              q.defs.current.add(i.id, i),
            null
          );
        },
        image: function (i, t) {
          let e,
            s = i.getAttribute("href") || i.getAttribute("xlink:href");
          if (!s)
            return (
              (e = new et("encountered <image /> with no href.")),
              console.warn(e.name, e.message),
              null
            );
          let r = parseFloat(i.getAttribute("x")) || 0,
            n = parseFloat(i.getAttribute("y")) || 0,
            a = parseFloat(i.getAttribute("width")),
            o = parseFloat(i.getAttribute("height")),
            h = new Bt(s, r, n);
          return (
            S.isNaN(a) || (h.width = a),
            S.isNaN(o) || (h.height = o),
            wt.call(this, i, h, t),
            h
          );
        },
      };
      function ni(i, t) {
        let e = new XMLHttpRequest();
        return (
          e.open("GET", i),
          (e.onreadystatechange = function () {
            e.readyState === 4 && e.status === 200 && t(e.responseText);
          }),
          e.send(),
          e
        );
      }
      var Te = class extends yt {
          _flagTextures = !1;
          _flagFrameRate = !1;
          _flagIndex = !1;
          _amount = 1;
          _duration = 0;
          _index = 0;
          _startTime = 0;
          _playing = !1;
          _firstFrame = 0;
          _lastFrame = 0;
          _loop = !0;
          _textures = null;
          _frameRate = 0;
          _origin = null;
          constructor(t, e, s, r) {
            super(e, s, 0, 0);
            for (let n in zi) Object.defineProperty(this, n, zi[n]);
            (this._renderer.flagTextures = Is.bind(this)),
              (this._renderer.bindTextures = Bs.bind(this)),
              (this._renderer.unbindTextures = js.bind(this)),
              this.noStroke(),
              this.noFill(),
              Array.isArray(t)
                ? (this.textures = t.map(Ui.bind(this)))
                : (this.textures = [Ui(t)]),
              (this.origin = new k()),
              this._update(),
              typeof r == "number"
                ? (this.frameRate = r)
                : (this.frameRate = Te.DefaultFrameRate),
              (this.index = 0);
          }
          play(t, e, s) {
            return (
              (this._playing = !0),
              (this._firstFrame = 0),
              (this._lastFrame = this.amount - 1),
              (this._startTime = S.performance.now()),
              typeof t == "number" && (this._firstFrame = t),
              typeof e == "number" && (this._lastFrame = e),
              typeof s == "function"
                ? (this._onLastFrame = s)
                : delete this._onLastFrame,
              this._index !== this._firstFrame &&
                (this._startTime -=
                  (1e3 * Math.abs(this._index - this._firstFrame)) /
                  this._frameRate),
              this
            );
          }
          pause() {
            return (this._playing = !1), this;
          }
          stop() {
            return (this._playing = !1), (this._index = this._firstFrame), this;
          }
          clone(t) {
            let e = new Te(
              this.textures,
              this.translation.x,
              this.translation.y,
              this.frameRate
            );
            return (
              (e._loop = this._loop),
              this._playing && e.play(),
              t && t.add(e),
              e
            );
          }
          toObject() {
            let t = super.toObject.call(this);
            return (
              (t.textures = this.textures.map(function (e) {
                return e.toObject();
              })),
              (t.frameRate = this.frameRate),
              (t.index = this.index),
              (t._firstFrame = this._firstFrame),
              (t._lastFrame = this._lastFrame),
              (t._loop = this._loop),
              t
            );
          }
          _update() {
            let t = this._textures,
              e,
              s,
              r,
              n,
              a,
              o,
              h,
              l;
            return (
              t &&
                (this._flagTextures && (this._amount = t.length),
                this._flagFrameRate &&
                  (this._duration = (1e3 * this._amount) / this._frameRate),
                this._playing && this._frameRate > 0
                  ? ((n = this._amount),
                    S.isNaN(this._lastFrame) && (this._lastFrame = n - 1),
                    (r = S.performance.now() - this._startTime),
                    (l = this._lastFrame + 1),
                    (a = (1e3 * (l - this._firstFrame)) / this._frameRate),
                    this._loop ? (r = r % a) : (r = Math.min(r, a)),
                    (h = nt(this._firstFrame, l, r / a)),
                    (h = Math.floor(h)),
                    h !== this._index &&
                      ((this._index = h),
                      (o = t[this._index]),
                      o.loaded &&
                        ((e = o.image.width),
                        (s = o.image.height),
                        this.width !== e && (this.width = e),
                        this.height !== s && (this.height = s),
                        (this.fill = o),
                        h >= this._lastFrame - 1 &&
                          this._onLastFrame &&
                          this._onLastFrame())))
                  : (this._flagIndex || !(this.fill instanceof B)) &&
                    ((o = t[this._index]),
                    o.loaded &&
                      ((e = o.image.width),
                      (s = o.image.height),
                      this.width !== e && (this.width = e),
                      this.height !== s && (this.height = s)),
                    (this.fill = o))),
              super._update.call(this),
              this
            );
          }
          flagReset() {
            return (
              (this._flagTextures = this._flagFrameRate = !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        Ht = Te;
      v(Ht, "Properties", ["textures", "frameRate", "index"]),
        v(Ht, "DefaultFrameRate", 30);
      var zi = {
        frameRate: {
          enumerable: !0,
          get: function () {
            return this._frameRate;
          },
          set: function (i) {
            (this._frameRate = i), (this._flagFrameRate = !0);
          },
        },
        index: {
          enumerable: !0,
          get: function () {
            return this._index;
          },
          set: function (i) {
            (this._index = i), (this._flagIndex = !0);
          },
        },
        textures: {
          enumerable: !0,
          get: function () {
            return this._textures;
          },
          set: function (i) {
            let t = this._renderer.bindTextures,
              e = this._renderer.unbindTextures;
            this._textures &&
              this._textures
                .unbind(p.Types.insert, t)
                .unbind(p.Types.remove, e),
              (this._textures = new lt((i || []).slice(0))),
              this._textures.bind(p.Types.insert, t).bind(p.Types.remove, e),
              t(this._textures);
          },
        },
      };
      function Is() {
        this._flagTextures = !0;
      }
      function Bs(i) {
        let t = i.length;
        for (; t--; ) i[t].bind(p.Types.change, this._renderer.flagTextures);
        this._renderer.flagTextures();
      }
      function js(i) {
        let t = i.length;
        for (; t--; ) i[t].unbind(p.Types.change, this._renderer.flagTextures);
        this._renderer.flagTextures();
      }
      function Ui(i) {
        if (i instanceof B) return i;
        if (typeof i == "string") return new B(i);
      }
      var ue = class extends L {
          _flagStartAngle = !1;
          _flagEndAngle = !1;
          _flagInnerRadius = !1;
          _flagOuterRadius = !1;
          _startAngle = 0;
          _endAngle = $;
          _innerRadius = 0;
          _outerRadius = 0;
          constructor(t, e, s, r, n, a, o) {
            let h = o || Y.Resolution * 3,
              l = [];
            for (let f = 0; f < h; f++) l.push(new F());
            super(l, !0, !1, !0);
            for (let f in Di) Object.defineProperty(this, f, Di[f]);
            typeof s == "number" && (this.innerRadius = s),
              typeof r == "number" && (this.outerRadius = r),
              typeof n == "number" && (this.startAngle = n),
              typeof a == "number" && (this.endAngle = a),
              this._update(),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e);
          }
          _update() {
            if (
              this._flagVertices ||
              this._flagStartAngle ||
              this._flagEndAngle ||
              this._flagInnerRadius ||
              this._flagOuterRadius
            ) {
              let t = this._startAngle,
                e = this._endAngle,
                s = this._innerRadius,
                r = this._outerRadius,
                n = it(t, $) === it(e, $),
                a = s > 0,
                o = this.vertices,
                h = a ? o.length / 2 : o.length,
                l,
                f = 0,
                u,
                _,
                d,
                c,
                m,
                b,
                g,
                y,
                x;
              for (n ? h-- : a || (h -= 2), u = 0, _ = h - 1; u < h; u++) {
                switch (
                  ((d = u / _),
                  (c = o[f]),
                  (m = d * (e - t) + t),
                  (b = (e - t) / h),
                  (g = r * Math.cos(m)),
                  (y = r * Math.sin(m)),
                  u)
                ) {
                  case 0:
                    l = w.move;
                    break;
                  default:
                    l = w.curve;
                }
                (c.command = l),
                  (c.x = g),
                  (c.y = y),
                  c.controls.left.clear(),
                  c.controls.right.clear(),
                  c.command === w.curve &&
                    ((x = (r * b) / Math.PI),
                    (c.controls.left.x = x * Math.cos(m - J)),
                    (c.controls.left.y = x * Math.sin(m - J)),
                    (c.controls.right.x = x * Math.cos(m + J)),
                    (c.controls.right.y = x * Math.sin(m + J)),
                    u === 1 && c.controls.left.multiplyScalar(2),
                    u === _ && c.controls.right.multiplyScalar(2)),
                  f++;
              }
              if (a) {
                for (
                  n ? ((o[f].command = w.close), f++) : (h--, (_ = h - 1)),
                    u = 0;
                  u < h;
                  u++
                )
                  (d = u / _),
                    (c = o[f]),
                    (m = (1 - d) * (e - t) + t),
                    (b = (e - t) / h),
                    (g = s * Math.cos(m)),
                    (y = s * Math.sin(m)),
                    (l = w.curve),
                    u <= 0 && (l = n ? w.move : w.line),
                    (c.command = l),
                    (c.x = g),
                    (c.y = y),
                    c.controls.left.clear(),
                    c.controls.right.clear(),
                    c.command === w.curve &&
                      ((x = (s * b) / Math.PI),
                      (c.controls.left.x = x * Math.cos(m + J)),
                      (c.controls.left.y = x * Math.sin(m + J)),
                      (c.controls.right.x = x * Math.cos(m - J)),
                      (c.controls.right.y = x * Math.sin(m - J)),
                      u === 1 && c.controls.left.multiplyScalar(2),
                      u === _ && c.controls.right.multiplyScalar(2)),
                    f++;
                o[f].copy(o[0]), (o[f].command = w.line);
              } else
                n ||
                  ((o[f].command = w.line),
                  (o[f].x = 0),
                  (o[f].y = 0),
                  f++,
                  o[f].copy(o[0]),
                  (o[f].command = w.line));
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              super.flagReset.call(this),
              (this._flagStartAngle =
                this._flagEndAngle =
                this._flagInnerRadius =
                this._flagOuterRadius =
                  !1),
              this
            );
          }
          clone(t) {
            let e = this.innerRadius,
              s = this.outerRadius,
              r = this.startAngle,
              n = this.endAngle,
              a = this.vertices.length,
              o = new ue(0, 0, e, s, r, n, a);
            o.translation.copy(this.translation),
              (o.rotation = this.rotation),
              (o.scale = this.scale),
              (o.skewX = this.skewX),
              (o.skewY = this.skewY),
              this.matrix.manual && o.matrix.copy(this.matrix);
            for (let h = 0; h < L.Properties.length; h++) {
              let l = L.Properties[h];
              o[l] = this[l];
            }
            return t && t.add(o), o;
          }
          toObject() {
            let t = super.toObject.call(this);
            for (let e = 0; e < ue.Properties.length; e++) {
              let s = ue.Properties[e];
              t[s] = this[s];
            }
            return t;
          }
        },
        Kt = ue;
      v(Kt, "Properties", [
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
      ]);
      var Di = {
        startAngle: {
          enumerable: !0,
          get: function () {
            return this._startAngle;
          },
          set: function (i) {
            (this._startAngle = i), (this._flagStartAngle = !0);
          },
        },
        endAngle: {
          enumerable: !0,
          get: function () {
            return this._endAngle;
          },
          set: function (i) {
            (this._endAngle = i), (this._flagEndAngle = !0);
          },
        },
        innerRadius: {
          enumerable: !0,
          get: function () {
            return this._innerRadius;
          },
          set: function (i) {
            (this._innerRadius = i), (this._flagInnerRadius = !0);
          },
        },
        outerRadius: {
          enumerable: !0,
          get: function () {
            return this._outerRadius;
          },
          set: function (i) {
            (this._outerRadius = i), (this._flagOuterRadius = !0);
          },
        },
      };
      var Ns = Math.ceil,
        Vs = Math.floor,
        $t = class extends ot {
          _flagVertices = !0;
          _flagLength = !0;
          _flagFill = !0;
          _flagStroke = !0;
          _flagLinewidth = !0;
          _flagOpacity = !0;
          _flagVisible = !0;
          _flagSize = !0;
          _flagSizeAttenuation = !0;
          _length = 0;
          _fill = "#fff";
          _stroke = "#000";
          _linewidth = 1;
          _opacity = 1;
          _visible = !0;
          _size = 1;
          _sizeAttenuation = !1;
          _beginning = 0;
          _ending = 1;
          _dashes = null;
          constructor(t) {
            super();
            for (let e in Hi) Object.defineProperty(this, e, Hi[e]);
            (this._renderer.type = "points"),
              (this._renderer.flagVertices = Ge.bind(this)),
              (this._renderer.bindVertices = qe.bind(this)),
              (this._renderer.unbindVertices = Ke.bind(this)),
              (this._renderer.flagFill = $e.bind(this)),
              (this._renderer.flagStroke = Je.bind(this)),
              (this._renderer.vertices = null),
              (this._renderer.collection = null),
              (this.sizeAttenuation = !1),
              (this.beginning = 0),
              (this.ending = 1),
              (this.fill = "#fff"),
              (this.stroke = "#000"),
              (this.className = ""),
              (this.visible = !0),
              (this.vertices = t),
              (this.dashes = []),
              (this.dashes.offset = 0);
          }
          clone(t) {
            let e = new $t();
            for (let s = 0; s < this.vertices.length; s++)
              e.vertices.push(this.vertices[s].clone());
            for (let s = 0; s < $t.Properties.length; s++) {
              let r = $t.Properties[s];
              e[r] = this[r];
            }
            return (
              (e.className = this.className),
              e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              this.matrix.manual && e.matrix.copy(this.matrix),
              t && t.add(e),
              e._update()
            );
          }
          toObject() {
            let t = {
              vertices: this.vertices.map(function (e) {
                return e.toObject();
              }),
            };
            return (
              S.each(
                $t.Properties,
                function (e) {
                  t[e] = this[e];
                },
                this
              ),
              (t.className = this.className),
              (t.translation = this.translation.toObject()),
              (t.rotation = this.rotation),
              (t.scale =
                this.scale instanceof k ? this.scale.toObject() : this.scale),
              (t.skewX = this.skewX),
              (t.skewY = this.skewY),
              this.matrix.manual && (t.matrix = this.matrix.toObject()),
              t
            );
          }
          noFill = L.prototype.noFill;
          noStroke = L.prototype.noStroke;
          corner = L.prototype.corner;
          center = L.prototype.center;
          getBoundingClientRect = L.prototype.getBoundingClientRect;
          subdivide(t) {
            this._update();
            let e = [];
            for (let s = 0; s < this.vertices.length; s++) {
              let r = this.vertices[s],
                n = this.vertices[s - 1];
              if (!n) continue;
              let a = r.x,
                o = r.y,
                h = n.x,
                l = n.y,
                f = re(a, o, a, o, h, l, h, l, t);
              e = e.concat(f);
            }
            return (this.vertices = e), this;
          }
          _updateLength = L.prototype._updateLength;
          _update() {
            if (this._flagVertices) {
              this._flagLength && this._updateLength(void 0, !0);
              let t = Math.min(this._beginning, this._ending),
                e = Math.max(this._beginning, this._ending),
                s = Gt(this, t * this._length),
                r = Gt(this, e * this._length),
                n = Ns(s),
                a = Vs(r),
                o = 0,
                h;
              (this._renderer.vertices = []), (this._renderer.collection = []);
              for (let l = 0; l < this._collection.length; l++)
                l >= n &&
                  l <= a &&
                  ((h = this._collection[l]),
                  this._renderer.collection.push(h),
                  (this._renderer.vertices[o * 2 + 0] = h.x),
                  (this._renderer.vertices[o * 2 + 1] = h.y),
                  o++);
            }
            return super._update.apply(this, arguments), this;
          }
          flagReset() {
            return (
              (this._flagVertices =
                this._flagLength =
                this._flagFill =
                this._flagStroke =
                this._flagLinewidth =
                this._flagOpacity =
                this._flagVisible =
                this._flagSize =
                this._flagSizeAttenuation =
                  !1),
              super.flagReset.call(this),
              this
            );
          }
        },
        Jt = $t;
      v(Jt, "Properties", [
        "fill",
        "stroke",
        "linewidth",
        "opacity",
        "visible",
        "size",
        "sizeAttenuation",
        "beginning",
        "ending",
      ]);
      var Hi = {
        linewidth: {
          enumerable: !0,
          get: function () {
            return this._linewidth;
          },
          set: function (i) {
            (this._linewidth = i), (this._flagLinewidth = !0);
          },
        },
        opacity: {
          enumerable: !0,
          get: function () {
            return this._opacity;
          },
          set: function (i) {
            (this._opacity = i), (this._flagOpacity = !0);
          },
        },
        visible: {
          enumerable: !0,
          get: function () {
            return this._visible;
          },
          set: function (i) {
            (this._visible = i), (this._flagVisible = !0);
          },
        },
        size: {
          enumerable: !0,
          get: function () {
            return this._size;
          },
          set: function (i) {
            (this._size = i), (this._flagSize = !0);
          },
        },
        sizeAttenuation: {
          enumerable: !0,
          get: function () {
            return this._sizeAttenuation;
          },
          set: function (i) {
            (this._sizeAttenuation = i), (this._flagSizeAttenuation = !0);
          },
        },
        fill: {
          enumerable: !0,
          get: function () {
            return this._fill;
          },
          set: function (i) {
            (this._fill instanceof W ||
              this._fill instanceof U ||
              this._fill instanceof D ||
              this._fill instanceof B) &&
              this._fill.unbind(p.Types.change, this._renderer.flagFill),
              (this._fill = i),
              (this._flagFill = !0),
              (this._fill instanceof W ||
                this._fill instanceof U ||
                this._fill instanceof D ||
                this._fill instanceof B) &&
                this._fill.bind(p.Types.change, this._renderer.flagFill);
          },
        },
        stroke: {
          enumerable: !0,
          get: function () {
            return this._stroke;
          },
          set: function (i) {
            (this._stroke instanceof W ||
              this._stroke instanceof U ||
              this._stroke instanceof D ||
              this._stroke instanceof B) &&
              this._stroke.unbind(p.Types.change, this._renderer.flagStroke),
              (this._stroke = i),
              (this._flagStroke = !0),
              (this._stroke instanceof W ||
                this._stroke instanceof U ||
                this._stroke instanceof D ||
                this._stroke instanceof B) &&
                this._stroke.bind(p.Types.change, this._renderer.flagStroke);
          },
        },
        length: {
          get: function () {
            return this._flagLength && this._updateLength(), this._length;
          },
        },
        beginning: {
          enumerable: !0,
          get: function () {
            return this._beginning;
          },
          set: function (i) {
            (this._beginning = i), (this._flagVertices = !0);
          },
        },
        ending: {
          enumerable: !0,
          get: function () {
            return this._ending;
          },
          set: function (i) {
            (this._ending = i), (this._flagVertices = !0);
          },
        },
        vertices: {
          enumerable: !0,
          get: function () {
            return this._collection;
          },
          set: function (i) {
            let t = this._renderer.bindVertices,
              e = this._renderer.unbindVertices;
            this._collection &&
              this._collection
                .unbind(p.Types.insert, t)
                .unbind(p.Types.remove, e),
              i instanceof lt
                ? (this._collection = i)
                : (this._collection = new lt(i || [])),
              this._collection.bind(p.Types.insert, t).bind(p.Types.remove, e),
              t(this._collection);
          },
        },
        dashes: {
          enumerable: !0,
          get: function () {
            return this._dashes;
          },
          set: function (i) {
            typeof i.offset != "number" &&
              (i.offset = (this.dashes && this._dashes.offset) || 0),
              (this._dashes = i);
          },
        },
      };
      var zs = Math.cos,
        Us = Math.sin,
        de = class extends L {
          _flagWidth = !1;
          _flagHeight = !1;
          _flagSides = !1;
          _radius = 0;
          _width = 0;
          _height = 0;
          _sides = 0;
          constructor(t, e, s, r) {
            (r = Math.max(r || 0, 3)), super();
            for (let n in Wi) Object.defineProperty(this, n, Wi[n]);
            (this.closed = !0),
              (this.automatic = !1),
              typeof s == "number" && (this.radius = s),
              typeof r == "number" && (this.sides = r),
              this._update(),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e);
          }
          _update() {
            if (
              this._flagVertices ||
              this._flagWidth ||
              this._flagHeight ||
              this._flagSides
            ) {
              let t = this._sides,
                e = t + 1,
                s = this.vertices.length;
              s > t && (this.vertices.splice(t - 1, s - t), (s = t));
              for (let r = 0; r < e; r++) {
                let n = (r + 0.5) / t,
                  a = $ * n + Math.PI / 2,
                  o = (this._width * zs(a)) / 2,
                  h = (this._height * Us(a)) / 2;
                r >= s
                  ? this.vertices.push(new F(o, h))
                  : this.vertices[r].set(o, h),
                  (this.vertices[r].command = r === 0 ? w.move : w.line);
              }
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              (this._flagWidth = this._flagHeight = this._flagSides = !1),
              super.flagReset.call(this),
              this
            );
          }
          clone(t) {
            let e = new de(0, 0, 0, this.sides);
            e.translation.copy(this.translation),
              (e.rotation = this.rotation),
              (e.scale = this.scale),
              (e.skewX = this.skewX),
              (e.skewY = this.skewY),
              (e.width = this.width),
              (e.height = this.height),
              this.matrix.manual && e.matrix.copy(this.matrix);
            for (let s = 0; s < L.Properties.length; s++) {
              let r = L.Properties[s];
              e[r] = this[r];
            }
            return t && t.add(e), e;
          }
          toObject() {
            let t = super.toObject.call(this);
            for (let e = 0; e < de.Properties.length; e++) {
              let s = de.Properties[e];
              t[s] = this[s];
            }
            return t;
          }
        },
        Zt = de;
      v(Zt, "Properties", ["width", "height", "sides"]);
      var Wi = {
        radius: {
          enumerable: !0,
          get: function () {
            return this._radius;
          },
          set: function (i) {
            (this._radius = i), (this.width = i * 2), (this.height = i * 2);
          },
        },
        width: {
          enumerable: !0,
          get: function () {
            return this._width;
          },
          set: function (i) {
            (this._width = i),
              (this._flagWidth = !0),
              (this._radius = Math.max(this.width, this.height) / 2);
          },
        },
        height: {
          enumerable: !0,
          get: function () {
            return this._height;
          },
          set: function (i) {
            (this._height = i),
              (this._flagHeight = !0),
              (this._radius = Math.max(this.width, this.height) / 2);
          },
        },
        sides: {
          enumerable: !0,
          get: function () {
            return this._sides;
          },
          set: function (i) {
            (this._sides = i), (this._flagSides = !0);
          },
        },
      };
      var Ds = Math.cos,
        Hs = Math.sin,
        _e = class extends L {
          _flagInnerRadius = !1;
          _flagOuterRadius = !1;
          _flagSides = !1;
          _innerRadius = 0;
          _outerRadius = 0;
          _sides = 0;
          constructor(t, e, s, r, n) {
            arguments.length <= 3 && ((r = s), (s = r / 2)),
              (typeof n != "number" || n <= 0) && (n = 5),
              super();
            for (let a in Xi) Object.defineProperty(this, a, Xi[a]);
            (this.closed = !0),
              (this.automatic = !1),
              typeof s == "number" && (this.innerRadius = s),
              typeof r == "number" && (this.outerRadius = r),
              typeof n == "number" && (this.sides = n),
              this._update(),
              typeof t == "number" && (this.translation.x = t),
              typeof e == "number" && (this.translation.y = e);
          }
          _update() {
            if (
              this._flagVertices ||
              this._flagInnerRadius ||
              this._flagOuterRadius ||
              this._flagSides
            ) {
              let t = this._sides * 2,
                e = t + 1,
                s = this.vertices.length;
              s > t && (this.vertices.splice(t - 1, s - t), (s = t));
              for (let r = 0; r < e; r++) {
                let n = (r + 0.5) / t,
                  a = $ * n,
                  o = (r % 2 ? this._outerRadius : this._innerRadius) / 2,
                  h = o * Ds(a),
                  l = o * Hs(a);
                r >= s
                  ? this.vertices.push(new F(h, l))
                  : this.vertices[r].set(h, l),
                  (this.vertices[r].command = r === 0 ? w.move : w.line);
              }
            }
            return super._update.call(this), this;
          }
          flagReset() {
            return (
              (this._flagInnerRadius =
                this._flagOuterRadius =
                this._flagSides =
                  !1),
              super.flagReset.call(this),
              this
            );
          }
          clone(t) {
            let e = this.innerRadius,
              s = this.outerRadius,
              r = this.sides,
              n = new _e(0, 0, e, s, r);
            n.translation.copy(this.translation),
              (n.rotation = this.rotation),
              (n.scale = this.scale),
              (n.skewX = this.skewX),
              (n.skewY = this.skewY),
              this.matrix.manual && n.matrix.copy(this.matrix);
            for (let a = 0; a < L.Properties.length; a++) {
              let o = L.Properties[a];
              n[o] = this[o];
            }
            return t && t.add(n), n;
          }
          toObject() {
            let t = super.toObject.call(this);
            for (let e = 0; e < _e.Properties.length; e++) {
              let s = _e.Properties[e];
              t[s] = this[s];
            }
            return t;
          }
        },
        Qt = _e;
      v(Qt, "Properties", ["innerRadius", "outerRadius", "sides"]);
      var Xi = {
        innerRadius: {
          enumerable: !0,
          get: function () {
            return this._innerRadius;
          },
          set: function (i) {
            (this._innerRadius = i), (this._flagInnerRadius = !0);
          },
        },
        outerRadius: {
          enumerable: !0,
          get: function () {
            return this._outerRadius;
          },
          set: function (i) {
            (this._outerRadius = i), (this._flagOuterRadius = !0);
          },
        },
        sides: {
          enumerable: !0,
          get: function () {
            return this._sides;
          },
          set: function (i) {
            (this._sides = i), (this._flagSides = !0);
          },
        },
      };
      var Yi = new at(),
        O = {
          version: 1.1,
          ns: "http://www.w3.org/2000/svg",
          xlink: "http://www.w3.org/1999/xlink",
          alignments: { left: "start", center: "middle", right: "end" },
          createElement: function (i, t) {
            let e = i,
              s = document.createElementNS(O.ns, e);
            return (
              e === "svg" && (t = S.defaults(t || {}, { version: O.version })),
              t && Object.keys(t).length > 0 && O.setAttributes(s, t),
              s
            );
          },
          setAttributes: function (i, t) {
            let e = Object.keys(t);
            for (let s = 0; s < e.length; s++)
              /href/.test(e[s])
                ? i.setAttributeNS(O.xlink, e[s], t[e[s]])
                : i.setAttribute(e[s], t[e[s]]);
            return this;
          },
          removeAttributes: function (i, t) {
            for (let e in t) i.removeAttribute(e);
            return this;
          },
          toString: function (i, t) {
            let e = i.length,
              s = e - 1,
              r,
              n = "";
            for (let a = 0; a < e; a++) {
              let o = i[a],
                h = t ? it(a - 1, e) : Math.max(a - 1, 0),
                l = i[h],
                f,
                u,
                _,
                d,
                c,
                m,
                b,
                g,
                y,
                x,
                R,
                A,
                E,
                C,
                j,
                M = K(o.x),
                T = K(o.y);
              switch (o.command) {
                case w.close:
                  f = w.close;
                  break;
                case w.arc:
                  (R = o.rx),
                    (A = o.ry),
                    (E = o.xAxisRotation),
                    (C = o.largeArcFlag),
                    (j = o.sweepFlag),
                    (f =
                      w.arc +
                      " " +
                      R +
                      " " +
                      A +
                      " " +
                      E +
                      " " +
                      C +
                      " " +
                      j +
                      " " +
                      M +
                      " " +
                      T);
                  break;
                case w.curve:
                  (b = (l.controls && l.controls.right) || k.zero),
                    (g = (o.controls && o.controls.left) || k.zero),
                    l.relative
                      ? ((_ = K(b.x + l.x)), (d = K(b.y + l.y)))
                      : ((_ = K(b.x)), (d = K(b.y))),
                    o.relative
                      ? ((c = K(g.x + o.x)), (m = K(g.y + o.y)))
                      : ((c = K(g.x)), (m = K(g.y))),
                    (f =
                      (a === 0 ? w.move : w.curve) +
                      " " +
                      _ +
                      " " +
                      d +
                      " " +
                      c +
                      " " +
                      m +
                      " " +
                      M +
                      " " +
                      T);
                  break;
                case w.move:
                  (r = o), (f = w.move + " " + M + " " + T);
                  break;
                default:
                  f = o.command + " " + M + " " + T;
              }
              a >= s &&
                t &&
                (o.command === w.curve &&
                  ((u = r),
                  (y = (o.controls && o.controls.right) || o),
                  (x = (u.controls && u.controls.left) || u),
                  o.relative
                    ? ((_ = K(y.x + o.x)), (d = K(y.y + o.y)))
                    : ((_ = K(y.x)), (d = K(y.y))),
                  u.relative
                    ? ((c = K(x.x + u.x)), (m = K(x.y + u.y)))
                    : ((c = K(x.x)), (m = K(x.y))),
                  (M = K(u.x)),
                  (T = K(u.y)),
                  (f +=
                    " C " +
                    _ +
                    " " +
                    d +
                    " " +
                    c +
                    " " +
                    m +
                    " " +
                    M +
                    " " +
                    T)),
                o.command !== w.close && (f += " Z")),
                (n += f + " ");
            }
            return n;
          },
          pointsToString: function (i, t) {
            let e = "",
              s = t * 0.5;
            for (let r = 0; r < i.length; r++) {
              let n = i[r].x,
                a = i[r].y - s;
              (e += w.move + " " + n + " " + a + " "),
                (e += "a " + s + " " + s + " 0 1 0 0.001 0 Z");
            }
            return e;
          },
          getClip: function (i, t) {
            let e = i._renderer.clip;
            return (
              e ||
                ((e = i._renderer.clip =
                  O.createElement("clipPath", { "clip-rule": "nonzero" })),
                t.defs.appendChild(e)),
              e
            );
          },
          group: {
            appendChild: function (i) {
              let t = i._renderer.elem;
              if (!t) return;
              let e = t.nodeName;
              !e ||
                /(radial|linear)gradient/i.test(e) ||
                i._clip ||
                this.elem.appendChild(t);
            },
            removeChild: function (i) {
              let t = i._renderer.elem;
              !t ||
                t.parentNode != this.elem ||
                !t.nodeName ||
                i._clip ||
                this.elem.removeChild(t);
            },
            orderChild: function (i) {
              this.elem.appendChild(i._renderer.elem);
            },
            renderChild: function (i) {
              O[i._renderer.type].render.call(i, this);
            },
            render: function (i) {
              if (
                (!this._visible && !this._flagVisible) ||
                (this._opacity === 0 && !this._flagOpacity)
              )
                return this;
              this._update(),
                this._renderer.elem ||
                  ((this._renderer.elem = O.createElement("g", {
                    id: this.id,
                  })),
                  i.appendChild(this._renderer.elem));
              let t = this._matrix.manual || this._flagMatrix,
                e = { domElement: i, elem: this._renderer.elem };
              t &&
                this._renderer.elem.setAttribute(
                  "transform",
                  "matrix(" + this._matrix.toString() + ")"
                );
              for (let s = 0; s < this.children.length; s++) {
                let r = this.children[s];
                O[r._renderer.type].render.call(r, i);
              }
              return (
                this._flagId &&
                  this._renderer.elem.setAttribute("id", this._id),
                this._flagOpacity &&
                  this._renderer.elem.setAttribute("opacity", this._opacity),
                this._flagVisible &&
                  this._renderer.elem.setAttribute(
                    "display",
                    this._visible ? "inline" : "none"
                  ),
                this._flagClassName &&
                  this._renderer.elem.setAttribute(
                    "class",
                    this.classList.join(" ")
                  ),
                this._flagAdditions &&
                  this.additions.forEach(O.group.appendChild, e),
                this._flagSubtractions &&
                  this.subtractions.forEach(O.group.removeChild, e),
                this._flagOrder && this.children.forEach(O.group.orderChild, e),
                this._flagMask &&
                  (this._mask
                    ? (O[this._mask._renderer.type].render.call(this._mask, i),
                      this._renderer.elem.setAttribute(
                        "clip-path",
                        "url(#" + this._mask.id + ")"
                      ))
                    : this._renderer.elem.removeAttribute("clip-path")),
                this.dataset &&
                  Object.assign(this._renderer.elem.dataset, this.dataset),
                this.flagReset()
              );
            },
          },
          path: {
            render: function (i) {
              if (this._opacity === 0 && !this._flagOpacity) return this;
              this._update();
              let t = {};
              if (
                ((this._matrix.manual || this._flagMatrix) &&
                  (t.transform = "matrix(" + this._matrix.toString() + ")"),
                this._flagId && (t.id = this._id),
                this._flagVertices)
              ) {
                let s = O.toString(this._renderer.vertices, this._closed);
                t.d = s;
              }
              if (
                (this._fill &&
                  this._fill._renderer &&
                  (this._fill._update(),
                  O[this._fill._renderer.type].render.call(this._fill, i, !0)),
                this._flagFill &&
                  (t.fill =
                    this._fill && this._fill.id
                      ? "url(#" + this._fill.id + ")"
                      : this._fill),
                this._stroke &&
                  this._stroke._renderer &&
                  (this._stroke._update(),
                  O[this._stroke._renderer.type].render.call(
                    this._stroke,
                    i,
                    !0
                  )),
                this._flagStroke &&
                  (t.stroke =
                    this._stroke && this._stroke.id
                      ? "url(#" + this._stroke.id + ")"
                      : this._stroke),
                this._flagLinewidth && (t["stroke-width"] = this._linewidth),
                this._flagOpacity &&
                  ((t["stroke-opacity"] = this._opacity),
                  (t["fill-opacity"] = this._opacity)),
                this._flagClassName && (t.class = this.classList.join(" ")),
                this._flagVisible &&
                  (t.visibility = this._visible ? "visible" : "hidden"),
                this._flagCap && (t["stroke-linecap"] = this._cap),
                this._flagJoin && (t["stroke-linejoin"] = this._join),
                this._flagMiter && (t["stroke-miterlimit"] = this._miter),
                this.dashes &&
                  this.dashes.length > 0 &&
                  ((t["stroke-dasharray"] = this.dashes.join(" ")),
                  (t["stroke-dashoffset"] = this.dashes.offset || 0)),
                this._renderer.elem
                  ? O.setAttributes(this._renderer.elem, t)
                  : ((t.id = this._id),
                    (this._renderer.elem = O.createElement("path", t)),
                    i.appendChild(this._renderer.elem)),
                this._flagClip)
              ) {
                let s = O.getClip(this, i),
                  r = this._renderer.elem;
                this._clip
                  ? (r.removeAttribute("id"),
                    s.setAttribute("id", this.id),
                    s.appendChild(r))
                  : (s.removeAttribute("id"),
                    r.setAttribute("id", this.id),
                    this.parent._renderer.elem.appendChild(r));
              }
              return (
                this._flagMask &&
                  (this._mask
                    ? (O[this._mask._renderer.type].render.call(this._mask, i),
                      this._renderer.elem.setAttribute(
                        "clip-path",
                        "url(#" + this._mask.id + ")"
                      ))
                    : this._renderer.elem.removeAttribute("clip-path")),
                this.flagReset()
              );
            },
          },
          points: {
            render: function (i) {
              if (this._opacity === 0 && !this._flagOpacity) return this;
              this._update();
              let t = {};
              if (
                ((this._matrix.manual || this._flagMatrix) &&
                  (t.transform = "matrix(" + this._matrix.toString() + ")"),
                this._flagId && (t.id = this._id),
                this._flagVertices ||
                  this._flagSize ||
                  this._flagSizeAttenuation)
              ) {
                let s = this._size;
                if (!this._sizeAttenuation) {
                  pt(this, Yi);
                  let n = Yi.elements,
                    a = Ot(n[0], n[3], n[1], n[4], n[2], n[5]);
                  s /= Math.max(a.scaleX, a.scaleY);
                }
                let r = O.pointsToString(this._renderer.collection, s);
                t.d = r;
              }
              return (
                this._fill &&
                  this._fill._renderer &&
                  (this._fill._update(),
                  O[this._fill._renderer.type].render.call(this._fill, i, !0)),
                this._flagFill &&
                  (t.fill =
                    this._fill && this._fill.id
                      ? "url(#" + this._fill.id + ")"
                      : this._fill),
                this._stroke &&
                  this._stroke._renderer &&
                  (this._stroke._update(),
                  O[this._stroke._renderer.type].render.call(
                    this._stroke,
                    i,
                    !0
                  )),
                this._flagStroke &&
                  (t.stroke =
                    this._stroke && this._stroke.id
                      ? "url(#" + this._stroke.id + ")"
                      : this._stroke),
                this._flagLinewidth && (t["stroke-width"] = this._linewidth),
                this._flagOpacity &&
                  ((t["stroke-opacity"] = this._opacity),
                  (t["fill-opacity"] = this._opacity)),
                this._flagClassName && (t.class = this.classList.join(" ")),
                this._flagVisible &&
                  (t.visibility = this._visible ? "visible" : "hidden"),
                this.dashes &&
                  this.dashes.length > 0 &&
                  ((t["stroke-dasharray"] = this.dashes.join(" ")),
                  (t["stroke-dashoffset"] = this.dashes.offset || 0)),
                this._renderer.elem
                  ? O.setAttributes(this._renderer.elem, t)
                  : ((t.id = this._id),
                    (this._renderer.elem = O.createElement("path", t)),
                    i.appendChild(this._renderer.elem)),
                this.flagReset()
              );
            },
          },
          text: {
            render: function (i) {
              this._update();
              let t = {};
              if (
                ((this._matrix.manual || this._flagMatrix) &&
                  (t.transform = "matrix(" + this._matrix.toString() + ")"),
                this._flagId && (t.id = this._id),
                this._flagFamily && (t["font-family"] = this._family),
                this._flagSize && (t["font-size"] = this._size),
                this._flagLeading && (t["line-height"] = this._leading),
                this._flagAlignment &&
                  (t["text-anchor"] =
                    O.alignments[this._alignment] || this._alignment),
                this._flagBaseline &&
                  (t["alignment-baseline"] = t["dominant-baseline"] =
                    this._baseline),
                this._flagStyle && (t["font-style"] = this._style),
                this._flagWeight && (t["font-weight"] = this._weight),
                this._flagDecoration &&
                  (t["text-decoration"] = this._decoration),
                this._fill &&
                  this._fill._renderer &&
                  (this._fill._update(),
                  O[this._fill._renderer.type].render.call(this._fill, i, !0)),
                this._flagFill &&
                  (t.fill =
                    this._fill && this._fill.id
                      ? "url(#" + this._fill.id + ")"
                      : this._fill),
                this._stroke &&
                  this._stroke._renderer &&
                  (this._stroke._update(),
                  O[this._stroke._renderer.type].render.call(
                    this._stroke,
                    i,
                    !0
                  )),
                this._flagStroke &&
                  (t.stroke =
                    this._stroke && this._stroke.id
                      ? "url(#" + this._stroke.id + ")"
                      : this._stroke),
                this._flagLinewidth && (t["stroke-width"] = this._linewidth),
                this._flagOpacity && (t.opacity = this._opacity),
                this._flagClassName && (t.class = this.classList.join(" ")),
                this._flagVisible &&
                  (t.visibility = this._visible ? "visible" : "hidden"),
                this.dashes &&
                  this.dashes.length > 0 &&
                  ((t["stroke-dasharray"] = this.dashes.join(" ")),
                  (t["stroke-dashoffset"] = this.dashes.offset || 0)),
                this._renderer.elem
                  ? O.setAttributes(this._renderer.elem, t)
                  : ((t.id = this._id),
                    (this._renderer.elem = O.createElement("text", t)),
                    i.defs.appendChild(this._renderer.elem)),
                this._flagClip)
              ) {
                let s = O.getClip(this, i),
                  r = this._renderer.elem;
                this._clip
                  ? (r.removeAttribute("id"),
                    s.setAttribute("id", this.id),
                    s.appendChild(r))
                  : (s.removeAttribute("id"),
                    r.setAttribute("id", this.id),
                    this.parent._renderer.elem.appendChild(r));
              }
              return (
                this._flagMask &&
                  (this._mask
                    ? (O[this._mask._renderer.type].render.call(this._mask, i),
                      this._renderer.elem.setAttribute(
                        "clip-path",
                        "url(#" + this._mask.id + ")"
                      ))
                    : this._renderer.elem.removeAttribute("clip-path")),
                this._flagValue &&
                  (this._renderer.elem.textContent = this._value),
                this.flagReset()
              );
            },
          },
          "linear-gradient": {
            render: function (i, t) {
              t || this._update();
              let e = {};
              if (
                (this._flagId && (e.id = this._id),
                this._flagEndPoints &&
                  ((e.x1 = this.left._x),
                  (e.y1 = this.left._y),
                  (e.x2 = this.right._x),
                  (e.y2 = this.right._y)),
                this._flagSpread && (e.spreadMethod = this._spread),
                this._flagUnits && (e.gradientUnits = this._units),
                this._renderer.elem
                  ? O.setAttributes(this._renderer.elem, e)
                  : ((e.id = this._id),
                    (this._renderer.elem = O.createElement(
                      "linearGradient",
                      e
                    )),
                    i.defs.appendChild(this._renderer.elem)),
                this._flagStops)
              ) {
                let s =
                  this._renderer.elem.childNodes.length !== this.stops.length;
                if (s)
                  for (; this._renderer.elem.lastChild; )
                    this._renderer.elem.removeChild(
                      this._renderer.elem.lastChild
                    );
                for (let r = 0; r < this.stops.length; r++) {
                  let n = this.stops[r],
                    a = {};
                  n._flagOffset && (a.offset = 100 * n._offset + "%"),
                    n._flagColor && (a["stop-color"] = n._color),
                    n._flagOpacity && (a["stop-opacity"] = n._opacity),
                    n._renderer.elem
                      ? O.setAttributes(n._renderer.elem, a)
                      : (n._renderer.elem = O.createElement("stop", a)),
                    s && this._renderer.elem.appendChild(n._renderer.elem),
                    n.flagReset();
                }
              }
              return this.flagReset();
            },
          },
          "radial-gradient": {
            render: function (i, t) {
              t || this._update();
              let e = {};
              if (
                (this._flagId && (e.id = this._id),
                this._flagCenter &&
                  ((e.cx = this.center._x), (e.cy = this.center._y)),
                this._flagFocal &&
                  ((e.fx = this.focal._x), (e.fy = this.focal._y)),
                this._flagRadius && (e.r = this._radius),
                this._flagSpread && (e.spreadMethod = this._spread),
                this._flagUnits && (e.gradientUnits = this._units),
                this._renderer.elem
                  ? O.setAttributes(this._renderer.elem, e)
                  : ((e.id = this._id),
                    (this._renderer.elem = O.createElement(
                      "radialGradient",
                      e
                    )),
                    i.defs.appendChild(this._renderer.elem)),
                this._flagStops)
              ) {
                let s =
                  this._renderer.elem.childNodes.length !== this.stops.length;
                if (s)
                  for (; this._renderer.elem.lastChild; )
                    this._renderer.elem.removeChild(
                      this._renderer.elem.lastChild
                    );
                for (let r = 0; r < this.stops.length; r++) {
                  let n = this.stops[r],
                    a = {};
                  n._flagOffset && (a.offset = 100 * n._offset + "%"),
                    n._flagColor && (a["stop-color"] = n._color),
                    n._flagOpacity && (a["stop-opacity"] = n._opacity),
                    n._renderer.elem
                      ? O.setAttributes(n._renderer.elem, a)
                      : (n._renderer.elem = O.createElement("stop", a)),
                    s && this._renderer.elem.appendChild(n._renderer.elem),
                    n.flagReset();
                }
              }
              return this.flagReset();
            },
          },
          texture: {
            render: function (i, t) {
              t || this._update();
              let e = {},
                s = { x: 0, y: 0 },
                r = this.image;
              if (
                (this._flagId && (e.id = this._id),
                this._flagLoaded && this.loaded)
              )
                switch (r.nodeName.toLowerCase()) {
                  case "canvas":
                    s.href = s["xlink:href"] = r.toDataURL("image/png");
                    break;
                  case "img":
                  case "image":
                    s.href = s["xlink:href"] = this.src;
                    break;
                }
              if (
                ((this._flagOffset || this._flagLoaded || this._flagScale) &&
                  ((e.x = this._offset.x),
                  (e.y = this._offset.y),
                  r &&
                    ((e.x -= r.width / 2),
                    (e.y -= r.height / 2),
                    this._scale instanceof k
                      ? ((e.x *= this._scale.x), (e.y *= this._scale.y))
                      : ((e.x *= this._scale), (e.y *= this._scale))),
                  e.x > 0 && (e.x *= -1),
                  e.y > 0 && (e.y *= -1)),
                (this._flagScale || this._flagLoaded || this._flagRepeat) &&
                  ((e.width = 0), (e.height = 0), r))
              ) {
                switch (
                  ((s.width = e.width = r.width),
                  (s.height = e.height = r.height),
                  this._repeat)
                ) {
                  case "no-repeat":
                    (e.width += 1), (e.height += 1);
                    break;
                }
                this._scale instanceof k
                  ? ((e.width *= this._scale.x), (e.height *= this._scale.y))
                  : ((e.width *= this._scale), (e.height *= this._scale));
              }
              return (
                (this._flagScale || this._flagLoaded) &&
                  (this._renderer.image
                    ? O.setAttributes(this._renderer.image, s)
                    : (this._renderer.image = O.createElement("image", s))),
                this._renderer.elem
                  ? Object.keys(e).length !== 0 &&
                    O.setAttributes(this._renderer.elem, e)
                  : ((e.id = this._id),
                    (e.patternUnits = "userSpaceOnUse"),
                    (this._renderer.elem = O.createElement("pattern", e)),
                    i.defs.appendChild(this._renderer.elem)),
                this._renderer.elem &&
                  this._renderer.image &&
                  !this._renderer.appended &&
                  (this._renderer.elem.appendChild(this._renderer.image),
                  (this._renderer.appended = !0)),
                this.flagReset()
              );
            },
          },
        },
        ge = class extends p {
          constructor(t) {
            super(),
              (this.domElement = t.domElement || O.createElement("svg")),
              (this.scene = new G()),
              (this.scene.parent = this),
              (this.defs = O.createElement("defs")),
              this.domElement.appendChild(this.defs),
              (this.domElement.defs = this.defs),
              (this.domElement.style.overflow = "hidden");
          }
          setSize(t, e) {
            return (
              (this.width = t),
              (this.height = e),
              O.setAttributes(this.domElement, { width: t, height: e }),
              this.trigger(p.Types.resize, t, e)
            );
          }
          render() {
            return O.group.render.call(this.scene, this.domElement), this;
          }
        };
      v(ge, "Utils", O);
      var xt = {
        create: function (i, t, e) {
          let s = i.createShader(i[e]);
          if (
            (i.shaderSource(s, t),
            i.compileShader(s),
            !i.getShaderParameter(s, i.COMPILE_STATUS))
          ) {
            let n = i.getShaderInfoLog(s);
            throw (
              (i.deleteShader(s),
              new et("unable to compile shader " + s + ": " + n))
            );
          }
          return s;
        },
        types: { vertex: "VERTEX_SHADER", fragment: "FRAGMENT_SHADER" },
        path: {
          vertex: `
      precision mediump float;
      attribute vec2 a_position;

      uniform mat3 u_matrix;
      uniform vec2 u_resolution;
      uniform vec4 u_rect;

      varying vec2 v_textureCoords;

      void main() {
        vec2 rectCoords = (a_position * (u_rect.zw - u_rect.xy)) + u_rect.xy;
        vec2 projected = (u_matrix * vec3(rectCoords, 1.0)).xy;
        vec2 normal = projected / u_resolution;
        vec2 clipspace = (normal * 2.0) - 1.0;

        gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
        v_textureCoords = a_position;
      }
    `,
          fragment: `
      precision mediump float;

      uniform sampler2D u_image;
      varying vec2 v_textureCoords;

      void main() {
        vec4 texel = texture2D(u_image, v_textureCoords);
        if (texel.a == 0.0) {
          discard;
        }
        gl_FragColor = texel;
      }
    `,
        },
        points: {
          vertex: `
      precision mediump float;
      attribute vec2 a_position;

      uniform float u_size;
      uniform mat3 u_matrix;
      uniform vec2 u_resolution;

      varying vec2 v_textureCoords;

      void main() {
        vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;
        vec2 normal = projected / u_resolution;
        vec2 clipspace = (normal * 2.0) - 1.0;

        gl_PointSize = u_size;
        gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);
        v_textureCoords = a_position;
      }
    `,
          fragment: `
      precision mediump float;

      uniform sampler2D u_image;

      void main() {
        vec4 texel = texture2D(u_image, gl_PointCoord);
        if (texel.a == 0.0) {
          discard;
        }
        gl_FragColor = texel;
      }
    `,
        },
      };
      var Me = at.Multiply,
        Ws = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        zt = new bt(9),
        Xs = At.Utils,
        ai = new bt([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
        I = {
          precision: 0.9,
          isHidden: /(undefined|none|transparent)/i,
          canvas: H.document
            ? H.document.createElement("canvas")
            : { getContext: function () {} },
          alignments: { left: "start", middle: "center", right: "end" },
          matrix: new at(),
          group: {
            removeChild: function (i, t) {
              if (i.children)
                for (let e = 0; e < i.children.length; e++)
                  I.group.removeChild(i.children[e], t);
              i._renderer.texture &&
                (t.deleteTexture(i._renderer.texture),
                delete i._renderer.texture),
                i._renderer.positionBuffer &&
                  (t.deleteBuffer(i._renderer.positionBuffer),
                  delete i._renderer.positionBuffer);
            },
            render: function (i, t) {
              if (!this._visible) return;
              this._update();
              let e = this.parent,
                s = (e._matrix && e._matrix.manual) || e._flagMatrix,
                r = this._matrix.manual || this._flagMatrix;
              (s || r) &&
                (this._renderer.matrix || (this._renderer.matrix = new bt(9)),
                this._matrix.toTransformArray(!0, zt),
                Me(zt, e._renderer.matrix, this._renderer.matrix),
                this._renderer.scale instanceof k ||
                  (this._renderer.scale = new k()),
                this._scale instanceof k
                  ? ((this._renderer.scale.x = this._scale.x),
                    (this._renderer.scale.y = this._scale.y))
                  : ((this._renderer.scale.x = this._scale),
                    (this._renderer.scale.y = this._scale)),
                /renderer/i.test(e._renderer.type) ||
                  ((this._renderer.scale.x *= e._renderer.scale.x),
                  (this._renderer.scale.y *= e._renderer.scale.y)),
                s && (this._flagMatrix = !0)),
                this._mask &&
                  (i.clear(i.STENCIL_BUFFER_BIT),
                  i.enable(i.STENCIL_TEST),
                  i.stencilFunc(i.ALWAYS, 1, 0),
                  i.stencilOp(i.KEEP, i.KEEP, i.REPLACE),
                  i.colorMask(!1, !1, !1, !1),
                  I[this._mask._renderer.type].render.call(
                    this._mask,
                    i,
                    t,
                    this
                  ),
                  i.stencilFunc(i.EQUAL, 1, 255),
                  i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
                  i.colorMask(!0, !0, !0, !0)),
                (this._flagOpacity = e._flagOpacity || this._flagOpacity),
                (this._renderer.opacity =
                  this._opacity * (e && e._renderer ? e._renderer.opacity : 1));
              let n;
              if (this._flagSubtractions)
                for (n = 0; n < this.subtractions.length; n++)
                  I.group.removeChild(this.subtractions[n], i);
              for (n = 0; n < this.children.length; n++) {
                let a = this.children[n];
                I[a._renderer.type].render.call(a, i, t);
              }
              return this._mask && i.disable(i.STENCIL_TEST), this.flagReset();
            },
          },
          path: {
            updateCanvas: function (i) {
              let t,
                e,
                s,
                r,
                n,
                a,
                o,
                h,
                l,
                f,
                u,
                _,
                d,
                c,
                m = i._renderer.vertices,
                b = this.canvas,
                g = this.ctx,
                y = i._renderer.scale,
                x = i._stroke,
                R = i._linewidth,
                A = i._fill,
                E = i._renderer.opacity || i._opacity,
                C = i._cap,
                j = i._join,
                M = i._miter,
                T = i._closed,
                N = i.dashes,
                z = m.length,
                X = z - 1;
              (b.width = Math.max(Math.ceil(i._renderer.rect.width * y.x), 1)),
                (b.height = Math.max(
                  Math.ceil(i._renderer.rect.height * y.y),
                  1
                ));
              let V = i._renderer.rect.centroid,
                ut = V.x,
                dt = V.y;
              g.clearRect(0, 0, b.width, b.height),
                A &&
                  (typeof A == "string"
                    ? (g.fillStyle = A)
                    : (I[A._renderer.type].render.call(A, g, i),
                      (g.fillStyle = A._renderer.effect))),
                x &&
                  (typeof x == "string"
                    ? (g.strokeStyle = x)
                    : (I[x._renderer.type].render.call(x, g, i),
                      (g.strokeStyle = x._renderer.effect)),
                  R && (g.lineWidth = R),
                  M && (g.miterLimit = M),
                  j && (g.lineJoin = j),
                  !T && C && (g.lineCap = C)),
                typeof E == "number" && (g.globalAlpha = E),
                N &&
                  N.length > 0 &&
                  ((g.lineDashOffset = N.offset || 0), g.setLineDash(N));
              let Z, _t, rt, Tt, Ct, ee, ie, se;
              g.save(), g.scale(y.x, y.y), g.translate(ut, dt), g.beginPath();
              for (let kt = 0; kt < m.length; kt++) {
                let Q = m[kt];
                switch (((_ = Q.x), (d = Q.y), Q.command)) {
                  case w.close:
                    g.closePath();
                    break;
                  case w.arc:
                    (_t = Q.rx),
                      (rt = Q.ry),
                      (Tt = Q.xAxisRotation),
                      (Ct = Q.largeArcFlag),
                      (ee = Q.sweepFlag),
                      (t = T ? it(kt - 1, z) : Math.max(kt - 1, 0)),
                      (e = m[t]),
                      (ie = e.x),
                      (se = e.y),
                      Xs.renderSvgArcCommand(
                        g,
                        ie,
                        se,
                        _t,
                        rt,
                        Ct,
                        ee,
                        Tt,
                        _,
                        d
                      );
                    break;
                  case w.curve:
                    (t = T ? it(kt - 1, z) : Math.max(kt - 1, 0)),
                      (e = m[t]),
                      (h = (e.controls && e.controls.right) || k.zero),
                      (l = (Q.controls && Q.controls.left) || k.zero),
                      e._relative
                        ? ((a = h.x + e.x), (o = h.y + e.y))
                        : ((a = h.x), (o = h.y)),
                      Q._relative
                        ? ((r = l.x + Q.x), (n = l.y + Q.y))
                        : ((r = l.x), (n = l.y)),
                      g.bezierCurveTo(a, o, r, n, _, d),
                      kt >= X &&
                        T &&
                        ((s = Z),
                        (f = (Q.controls && Q.controls.right) || k.zero),
                        (u = (s.controls && s.controls.left) || k.zero),
                        Q._relative
                          ? ((a = f.x + Q.x), (o = f.y + Q.y))
                          : ((a = f.x), (o = f.y)),
                        s._relative
                          ? ((r = u.x + s.x), (n = u.y + s.y))
                          : ((r = u.x), (n = u.y)),
                        (_ = s.x),
                        (d = s.y),
                        g.bezierCurveTo(a, o, r, n, _, d));
                    break;
                  case w.line:
                    g.lineTo(_, d);
                    break;
                  case w.move:
                    (Z = Q), g.moveTo(_, d);
                    break;
                }
              }
              T && g.closePath(),
                I.isHidden.test(A) ||
                  ((c = A._renderer && A._renderer.offset),
                  c &&
                    (g.save(),
                    g.translate(-A._renderer.offset.x, -A._renderer.offset.y),
                    g.scale(A._renderer.scale.x, A._renderer.scale.y)),
                  g.fill(),
                  c && g.restore()),
                I.isHidden.test(x) ||
                  ((c = x._renderer && x._renderer.offset),
                  c &&
                    (g.save(),
                    g.translate(-x._renderer.offset.x, -x._renderer.offset.y),
                    g.scale(x._renderer.scale.x, x._renderer.scale.y),
                    (g.lineWidth = R / x._renderer.scale.x)),
                  g.stroke(),
                  c && g.restore()),
                g.restore();
            },
            getBoundingClientRect: function (i, t, e) {
              let s = 1 / 0,
                r = -1 / 0,
                n = 1 / 0,
                a = -1 / 0,
                o,
                h;
              i.forEach(function (l) {
                let f = l.x,
                  u = l.y,
                  _ = l.controls,
                  d,
                  c,
                  m,
                  b,
                  g,
                  y;
                (n = Math.min(u, n)),
                  (s = Math.min(f, s)),
                  (r = Math.max(f, r)),
                  (a = Math.max(u, a)),
                  l.controls &&
                    ((g = _.left),
                    (y = _.right),
                    !(!g || !y) &&
                      ((d = l._relative ? g.x + f : g.x),
                      (c = l._relative ? g.y + u : g.y),
                      (m = l._relative ? y.x + f : y.x),
                      (b = l._relative ? y.y + u : y.y),
                      !(!d || !c || !m || !b) &&
                        ((n = Math.min(c, b, n)),
                        (s = Math.min(d, m, s)),
                        (r = Math.max(d, m, r)),
                        (a = Math.max(c, b, a)))));
              }),
                typeof t == "number" &&
                  ((n -= t), (s -= t), (r += t), (a += t)),
                (o = r - s),
                (h = a - n),
                (e.top = n),
                (e.left = s),
                (e.right = r),
                (e.bottom = a),
                (e.width = o),
                (e.height = h),
                e.centroid || (e.centroid = {}),
                (e.centroid.x = -s),
                (e.centroid.y = -n);
            },
            render: function (i, t, e) {
              if (!this._visible || !this._opacity) return this;
              this._update();
              let s = e || this.parent,
                r = t[this._renderer.type],
                n = s._matrix.manual || s._flagMatrix,
                a = this._matrix.manual || this._flagMatrix,
                o = this._renderer.parent !== s,
                h =
                  this._flagVertices ||
                  this._flagFill ||
                  (this._fill instanceof U &&
                    (this._fill._flagSpread ||
                      this._fill._flagStops ||
                      this._fill._flagEndPoints)) ||
                  (this._fill instanceof D &&
                    (this._fill._flagSpread ||
                      this._fill._flagStops ||
                      this._fill._flagRadius ||
                      this._fill._flagCenter ||
                      this._fill._flagFocal)) ||
                  (this._fill instanceof B &&
                    ((this._fill._flagLoaded && this._fill.loaded) ||
                      this._fill._flagImage ||
                      this._fill._flagVideo ||
                      this._fill._flagRepeat ||
                      this._fill._flagOffset ||
                      this._fill._flagScale)) ||
                  (this._stroke instanceof U &&
                    (this._stroke._flagSpread ||
                      this._stroke._flagStops ||
                      this._stroke._flagEndPoints)) ||
                  (this._stroke instanceof D &&
                    (this._stroke._flagSpread ||
                      this._stroke._flagStops ||
                      this._stroke._flagRadius ||
                      this._stroke._flagCenter ||
                      this._stroke._flagFocal)) ||
                  (this._stroke instanceof B &&
                    ((this._stroke._flagLoaded && this._stroke.loaded) ||
                      this._stroke._flagImage ||
                      this._stroke._flagVideo ||
                      this._stroke._flagRepeat ||
                      this._stroke._flagOffset ||
                      this._fill._flagScale)) ||
                  this._flagStroke ||
                  this._flagLinewidth ||
                  this._flagOpacity ||
                  s._flagOpacity ||
                  this._flagVisible ||
                  this._flagCap ||
                  this._flagJoin ||
                  this._flagMiter ||
                  this._flagScale ||
                  (this.dashes && this.dashes.length > 0) ||
                  !this._renderer.texture;
              if (
                ((n || a || o) &&
                  (this._renderer.matrix || (this._renderer.matrix = new bt(9)),
                  this._matrix.toTransformArray(!0, zt),
                  Me(zt, s._renderer.matrix, this._renderer.matrix),
                  this._renderer.scale instanceof k ||
                    (this._renderer.scale = new k()),
                  this._scale instanceof k
                    ? ((this._renderer.scale.x =
                        this._scale.x * s._renderer.scale.x),
                      (this._renderer.scale.y =
                        this._scale.y * s._renderer.scale.y))
                    : ((this._renderer.scale.x =
                        this._scale * s._renderer.scale.x),
                      (this._renderer.scale.y =
                        this._scale * s._renderer.scale.y)),
                  o && (this._renderer.parent = s)),
                this._mask &&
                  (i.clear(i.STENCIL_BUFFER_BIT),
                  i.enable(i.STENCIL_TEST),
                  i.stencilFunc(i.ALWAYS, 1, 0),
                  i.stencilOp(i.KEEP, i.KEEP, i.REPLACE),
                  i.colorMask(!1, !1, !1, !1),
                  I[this._mask._renderer.type].render.call(
                    this._mask,
                    i,
                    t,
                    this
                  ),
                  i.stencilFunc(i.EQUAL, 1, 255),
                  i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
                  i.colorMask(!0, !0, !0, !0)),
                h
                  ? (this._renderer.rect || (this._renderer.rect = {}),
                    (this._renderer.opacity =
                      this._opacity * s._renderer.opacity),
                    I.path.getBoundingClientRect(
                      this._renderer.vertices,
                      this._linewidth,
                      this._renderer.rect
                    ),
                    I.updateTexture.call(I, i, this))
                  : (this._fill && this._fill._update && this._fill._update(),
                    this._stroke &&
                      this._stroke._update &&
                      this._stroke._update()),
                (this._clip && !e) || !this._renderer.texture)
              )
                return this;
              t.current !== r &&
                (i.useProgram(r),
                i.bindBuffer(i.ARRAY_BUFFER, t.buffers.position),
                i.vertexAttribPointer(r.position, 2, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(r.position),
                i.bufferData(i.ARRAY_BUFFER, ai, i.STATIC_DRAW),
                t.resolution.flagged ||
                  i.uniform2f(
                    i.getUniformLocation(r, "u_resolution"),
                    t.resolution.width,
                    t.resolution.height
                  ),
                (t.current = r)),
                t.resolution.flagged &&
                  i.uniform2f(
                    i.getUniformLocation(r, "u_resolution"),
                    t.resolution.width,
                    t.resolution.height
                  ),
                i.bindTexture(i.TEXTURE_2D, this._renderer.texture);
              let l = this._renderer.rect;
              return (
                i.uniformMatrix3fv(r.matrix, !1, this._renderer.matrix),
                i.uniform4f(r.rect, l.left, l.top, l.right, l.bottom),
                i.drawArrays(i.TRIANGLES, 0, 6),
                this._mask && i.disable(i.STENCIL_TEST),
                this.flagReset()
              );
            },
          },
          points: {
            updateCanvas: function (i) {
              let t,
                e = this.canvas,
                s = this.ctx,
                r = i._stroke,
                n = i._linewidth,
                a = i._fill,
                o = i._renderer.opacity || i._opacity,
                h = i.dashes,
                l = i._size,
                f = l;
              I.isHidden.test(r) || (f += n),
                (e.width = Pe(f)),
                (e.height = e.width);
              let u = f / e.width,
                _ = e.width / 2,
                d = e.height / 2;
              s.clearRect(0, 0, e.width, e.height),
                a &&
                  (typeof a == "string"
                    ? (s.fillStyle = a)
                    : (I[a._renderer.type].render.call(a, s, i),
                      (s.fillStyle = a._renderer.effect))),
                r &&
                  (typeof r == "string"
                    ? (s.strokeStyle = r)
                    : (I[r._renderer.type].render.call(r, s, i),
                      (s.strokeStyle = r._renderer.effect)),
                  n && (s.lineWidth = n / u)),
                typeof o == "number" && (s.globalAlpha = o),
                h &&
                  h.length > 0 &&
                  ((s.lineDashOffset = h.offset || 0), s.setLineDash(h)),
                s.save(),
                s.translate(_, d),
                s.scale(I.precision, I.precision),
                s.beginPath(),
                s.arc(0, 0, (l / u) * 0.5, 0, $),
                s.restore(),
                closed && s.closePath(),
                I.isHidden.test(a) ||
                  ((t = a._renderer && a._renderer.offset),
                  t &&
                    (s.save(),
                    s.translate(-a._renderer.offset.x, -a._renderer.offset.y),
                    s.scale(a._renderer.scale.x, a._renderer.scale.y)),
                  s.fill(),
                  t && s.restore()),
                I.isHidden.test(r) ||
                  ((t = r._renderer && r._renderer.offset),
                  t &&
                    (s.save(),
                    s.translate(-r._renderer.offset.x, -r._renderer.offset.y),
                    s.scale(r._renderer.scale.x, r._renderer.scale.y),
                    (s.lineWidth = n / r._renderer.scale.x)),
                  s.stroke(),
                  t && s.restore());
            },
            render: function (i, t, e) {
              if (!this._visible || !this._opacity) return this;
              this._update();
              let s = this._size,
                r = e || this.parent,
                n = t[this._renderer.type],
                a = this._sizeAttenuation,
                o = this._stroke,
                h = this._linewidth,
                l = r._matrix.manual || r._flagMatrix,
                f = this._matrix.manual || this._flagMatrix,
                u = this._renderer.parent !== r,
                _ = this._renderer.vertices,
                d = this._renderer.collection.length,
                c = this._flagVertices,
                m =
                  this._flagFill ||
                  (this._fill instanceof U &&
                    (this._fill._flagSpread ||
                      this._fill._flagStops ||
                      this._fill._flagEndPoints)) ||
                  (this._fill instanceof D &&
                    (this._fill._flagSpread ||
                      this._fill._flagStops ||
                      this._fill._flagRadius ||
                      this._fill._flagCenter ||
                      this._fill._flagFocal)) ||
                  (this._fill instanceof B &&
                    ((this._fill._flagLoaded && this._fill.loaded) ||
                      this._fill._flagImage ||
                      this._fill._flagVideo ||
                      this._fill._flagRepeat ||
                      this._fill._flagOffset ||
                      this._fill._flagScale)) ||
                  (this._stroke instanceof U &&
                    (this._stroke._flagSpread ||
                      this._stroke._flagStops ||
                      this._stroke._flagEndPoints)) ||
                  (this._stroke instanceof D &&
                    (this._stroke._flagSpread ||
                      this._stroke._flagStops ||
                      this._stroke._flagRadius ||
                      this._stroke._flagCenter ||
                      this._stroke._flagFocal)) ||
                  (this._stroke instanceof B &&
                    ((this._stroke._flagLoaded && this._stroke.loaded) ||
                      this._stroke._flagImage ||
                      this._stroke._flagVideo ||
                      this._stroke._flagRepeat ||
                      this._stroke._flagOffset ||
                      this._fill._flagScale)) ||
                  this._flagStroke ||
                  this._flagLinewidth ||
                  this._flagOpacity ||
                  r._flagOpacity ||
                  this._flagVisible ||
                  this._flagScale ||
                  (this.dashes && this.dashes.length > 0) ||
                  !this._renderer.texture;
              if (
                ((l || f || u) &&
                  (this._renderer.matrix || (this._renderer.matrix = new bt(9)),
                  this._matrix.toTransformArray(!0, zt),
                  Me(zt, r._renderer.matrix, this._renderer.matrix),
                  this._renderer.scale instanceof k ||
                    (this._renderer.scale = new k()),
                  this._scale instanceof k
                    ? ((this._renderer.scale.x =
                        this._scale.x * r._renderer.scale.x),
                      (this._renderer.scale.y =
                        this._scale.y * r._renderer.scale.y))
                    : ((this._renderer.scale.x =
                        this._scale * r._renderer.scale.x),
                      (this._renderer.scale.y =
                        this._scale * r._renderer.scale.y)),
                  u && (this._renderer.parent = r)),
                c)
              ) {
                let b = this._renderer.positionBuffer;
                b && i.deleteBuffer(b),
                  (this._renderer.positionBuffer = i.createBuffer()),
                  i.bindBuffer(i.ARRAY_BUFFER, this._renderer.positionBuffer),
                  i.vertexAttribPointer(n.position, 2, i.FLOAT, !1, 0, 0),
                  i.enableVertexAttribArray(n.position),
                  i.bufferData(i.ARRAY_BUFFER, _, i.STATIC_DRAW);
              }
              return (
                m
                  ? ((this._renderer.opacity =
                      this._opacity * r._renderer.opacity),
                    I.updateTexture.call(I, i, this))
                  : (this._fill && this._fill._update && this._fill._update(),
                    this._stroke &&
                      this._stroke._update &&
                      this._stroke._update()),
                (this._clip && !e) || !this._renderer.texture
                  ? this
                  : (I.isHidden.test(o) || (s += h),
                    (s /= I.precision),
                    a &&
                      (s *= Math.max(
                        this._renderer.scale.x,
                        this._renderer.scale.y
                      )),
                    t.current !== n &&
                      (i.useProgram(n),
                      t.resolution.flagged ||
                        i.uniform2f(
                          i.getUniformLocation(n, "u_resolution"),
                          t.resolution.width,
                          t.resolution.height
                        ),
                      (t.current = n)),
                    t.resolution.flagged &&
                      i.uniform2f(
                        i.getUniformLocation(n, "u_resolution"),
                        t.resolution.width,
                        t.resolution.height
                      ),
                    i.bindTexture(i.TEXTURE_2D, this._renderer.texture),
                    i.uniformMatrix3fv(n.matrix, !1, this._renderer.matrix),
                    i.uniform1f(n.size, s * t.resolution.ratio),
                    i.drawArrays(i.POINTS, 0, d),
                    this.flagReset())
              );
            },
          },
          text: {
            updateCanvas: function (i) {
              let t = this.canvas,
                e = this.ctx,
                s = i._renderer.scale,
                r = i._stroke,
                n = i._linewidth * s,
                a = i._fill,
                o = i._renderer.opacity || i._opacity,
                h = i.dashes,
                l = i._decoration;
              (t.width = Math.max(Math.ceil(i._renderer.rect.width * s.x), 1)),
                (t.height = Math.max(
                  Math.ceil(i._renderer.rect.height * s.y),
                  1
                ));
              let f = i._renderer.rect.centroid,
                u = f.x,
                _ = f.y,
                d,
                c,
                m,
                b,
                g,
                y,
                x,
                R,
                A,
                E,
                C,
                j =
                  a._renderer &&
                  a._renderer.offset &&
                  r._renderer &&
                  r._renderer.offset;
              if (
                (e.clearRect(0, 0, t.width, t.height),
                j ||
                  (e.font = [
                    i._style,
                    i._weight,
                    i._size + "px/" + i._leading + "px",
                    i._family,
                  ].join(" ")),
                (e.textAlign = "center"),
                (e.textBaseline = "middle"),
                a &&
                  (typeof a == "string"
                    ? (e.fillStyle = a)
                    : (I[a._renderer.type].render.call(a, e, i),
                      (e.fillStyle = a._renderer.effect))),
                r &&
                  (typeof r == "string"
                    ? (e.strokeStyle = r)
                    : (I[r._renderer.type].render.call(r, e, i),
                      (e.strokeStyle = r._renderer.effect)),
                  n && (e.lineWidth = n)),
                typeof o == "number" && (e.globalAlpha = o),
                h &&
                  h.length > 0 &&
                  ((e.lineDashOffset = h.offset || 0), e.setLineDash(h)),
                e.save(),
                e.scale(s.x, s.y),
                e.translate(u, _),
                I.isHidden.test(a) ||
                  (a._renderer && a._renderer.offset
                    ? ((y = a._renderer.scale.x),
                      (x = a._renderer.scale.y),
                      e.save(),
                      e.translate(-a._renderer.offset.x, -a._renderer.offset.y),
                      e.scale(y, x),
                      (d = i._size / a._renderer.scale.y),
                      (c = i._leading / a._renderer.scale.y),
                      (e.font = [
                        i._style,
                        i._weight,
                        d + "px/",
                        c + "px",
                        i._family,
                      ].join(" ")),
                      (m = a._renderer.offset.x / a._renderer.scale.x),
                      (b = a._renderer.offset.y / a._renderer.scale.y),
                      e.fillText(i.value, m, b),
                      e.restore())
                    : e.fillText(i.value, 0, 0)),
                I.isHidden.test(r) ||
                  (r._renderer && r._renderer.offset
                    ? ((y = r._renderer.scale.x),
                      (x = r._renderer.scale.y),
                      e.save(),
                      e.translate(-r._renderer.offset.x, -r._renderer.offset.y),
                      e.scale(y, x),
                      (d = i._size / r._renderer.scale.y),
                      (c = i._leading / r._renderer.scale.y),
                      (e.font = [
                        i._style,
                        i._weight,
                        d + "px/",
                        c + "px",
                        i._family,
                      ].join(" ")),
                      (m = r._renderer.offset.x / r._renderer.scale.x),
                      (b = r._renderer.offset.y / r._renderer.scale.y),
                      (g = n / r._renderer.scale.x),
                      (e.lineWidth = g),
                      e.strokeText(i.value, m, b),
                      e.restore())
                    : e.strokeText(i.value, 0, 0)),
                /(underline|strikethrough)/i.test(l))
              ) {
                let M = e.measureText(i.value);
                switch (l) {
                  case "underline":
                    (A = M.actualBoundingBoxAscent),
                      (C = M.actualBoundingBoxAscent);
                    break;
                  case "strikethrough":
                    (A = 0), (C = 0);
                    break;
                }
                (R = -M.width / 2),
                  (E = M.width / 2),
                  (e.lineWidth = Math.max(Math.floor(i._size / 15), 1)),
                  (e.strokeStyle = e.fillStyle),
                  e.beginPath(),
                  e.moveTo(R, A),
                  e.lineTo(E, C),
                  e.stroke();
              }
              e.restore();
            },
            getBoundingClientRect: function (i, t) {
              let e = I.ctx;
              (e.font = [
                i._style,
                i._weight,
                i._size + "px/" + i._leading + "px",
                i._family,
              ].join(" ")),
                (e.textAlign = "center"),
                (e.textBaseline = i._baseline);
              let s = e.measureText(i._value).width * 1.25,
                r = Math.max(i._size, i._leading) * 1.25;
              this._linewidth &&
                !I.isHidden.test(this._stroke) &&
                ((s += this._linewidth * 2), (r += this._linewidth * 2));
              let n = s / 2,
                a = r / 2;
              switch (I.alignments[i._alignment] || i._alignment) {
                case I.alignments.left:
                  (t.left = 0), (t.right = s);
                  break;
                case I.alignments.right:
                  (t.left = -s), (t.right = 0);
                  break;
                default:
                  (t.left = -n), (t.right = n);
              }
              switch (i._baseline) {
                case "bottom":
                  (t.top = -r), (t.bottom = 0);
                  break;
                case "top":
                  (t.top = 0), (t.bottom = r);
                  break;
                default:
                  (t.top = -a), (t.bottom = a);
              }
              (t.width = s),
                (t.height = r),
                t.centroid || (t.centroid = {}),
                (t.centroid.x = n),
                (t.centroid.y = a);
            },
            render: function (i, t, e) {
              if (!this._visible || !this._opacity) return this;
              this._update();
              let s = e || this.parent,
                r = t[this._renderer.type],
                n = s._matrix.manual || s._flagMatrix,
                a = this._matrix.manual || this._flagMatrix,
                o = this._renderer.parent !== s,
                h =
                  this._flagVertices ||
                  this._flagFill ||
                  (this._fill instanceof U &&
                    (this._fill._flagSpread ||
                      this._fill._flagStops ||
                      this._fill._flagEndPoints)) ||
                  (this._fill instanceof D &&
                    (this._fill._flagSpread ||
                      this._fill._flagStops ||
                      this._fill._flagRadius ||
                      this._fill._flagCenter ||
                      this._fill._flagFocal)) ||
                  (this._fill instanceof B &&
                    ((this._fill._flagLoaded && this._fill.loaded) ||
                      this._fill._flagImage ||
                      this._fill._flagVideo ||
                      this._fill._flagRepeat ||
                      this._fill._flagOffset ||
                      this._fill._flagScale)) ||
                  (this._stroke instanceof U &&
                    (this._stroke._flagSpread ||
                      this._stroke._flagStops ||
                      this._stroke._flagEndPoints)) ||
                  (this._stroke instanceof D &&
                    (this._stroke._flagSpread ||
                      this._stroke._flagStops ||
                      this._stroke._flagRadius ||
                      this._stroke._flagCenter ||
                      this._stroke._flagFocal)) ||
                  (this._stroke instanceof B &&
                    ((this._stroke._flagLoaded && this._stroke.loaded) ||
                      this._stroke._flagImage ||
                      this._stroke._flagVideo ||
                      this._stroke._flagRepeat ||
                      this._stroke._flagOffset ||
                      this._fill._flagScale)) ||
                  this._flagStroke ||
                  this._flagLinewidth ||
                  this._flagOpacity ||
                  s._flagOpacity ||
                  this._flagVisible ||
                  this._flagScale ||
                  this._flagValue ||
                  this._flagFamily ||
                  this._flagSize ||
                  this._flagLeading ||
                  this._flagAlignment ||
                  this._flagBaseline ||
                  this._flagStyle ||
                  this._flagWeight ||
                  this._flagDecoration ||
                  (this.dashes && this.dashes.length > 0) ||
                  !this._renderer.texture;
              if (
                ((n || a || o) &&
                  (this._renderer.matrix || (this._renderer.matrix = new bt(9)),
                  this._matrix.toTransformArray(!0, zt),
                  Me(zt, s._renderer.matrix, this._renderer.matrix),
                  this._renderer.scale instanceof k ||
                    (this._renderer.scale = new k()),
                  this._scale instanceof k
                    ? ((this._renderer.scale.x =
                        this._scale.x * s._renderer.scale.x),
                      (this._renderer.scale.y =
                        this._scale.y * s._renderer.scale.y))
                    : ((this._renderer.scale.x =
                        this._scale * s._renderer.scale.x),
                      (this._renderer.scale.y =
                        this._scale * s._renderer.scale.y)),
                  o && (this._renderer.parent = s)),
                this._mask &&
                  (i.clear(i.STENCIL_BUFFER_BIT),
                  i.enable(i.STENCIL_TEST),
                  i.stencilFunc(i.ALWAYS, 1, 0),
                  i.stencilOp(i.KEEP, i.KEEP, i.REPLACE),
                  i.colorMask(!1, !1, !1, !1),
                  I[this._mask._renderer.type].render.call(
                    this._mask,
                    i,
                    t,
                    this
                  ),
                  i.stencilFunc(i.EQUAL, 1, 255),
                  i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
                  i.colorMask(!0, !0, !0, !0)),
                h
                  ? (this._renderer.rect || (this._renderer.rect = {}),
                    (this._renderer.opacity =
                      this._opacity * s._renderer.opacity),
                    I.text.getBoundingClientRect(this, this._renderer.rect),
                    I.updateTexture.call(I, i, this))
                  : (this._fill && this._fill._update && this._fill._update(),
                    this._stroke &&
                      this._stroke._update &&
                      this._stroke._update()),
                (this._clip && !e) || !this._renderer.texture)
              )
                return this;
              t.current !== r &&
                (i.useProgram(r),
                i.bindBuffer(i.ARRAY_BUFFER, t.buffers.position),
                i.vertexAttribPointer(r.position, 2, i.FLOAT, !1, 0, 0),
                i.enableVertexAttribArray(r.position),
                i.bufferData(i.ARRAY_BUFFER, ai, i.STATIC_DRAW),
                t.resolution.flagged ||
                  i.uniform2f(
                    i.getUniformLocation(r, "u_resolution"),
                    t.resolution.width,
                    t.resolution.height
                  ),
                (t.current = r)),
                t.resolution.flagged &&
                  i.uniform2f(
                    i.getUniformLocation(r, "u_resolution"),
                    t.resolution.width,
                    t.resolution.height
                  ),
                i.bindTexture(i.TEXTURE_2D, this._renderer.texture);
              let l = this._renderer.rect;
              return (
                i.uniformMatrix3fv(r.matrix, !1, this._renderer.matrix),
                i.uniform4f(r.rect, l.left, l.top, l.right, l.bottom),
                i.drawArrays(i.TRIANGLES, 0, 6),
                this._mask && i.disable(i.STENCIL_TEST),
                this.flagReset()
              );
            },
          },
          "linear-gradient": {
            render: function (i, t) {
              if (!(!i.canvas.getContext("2d") || !t)) {
                if (
                  (this._update(),
                  !this._renderer.effect ||
                    this._flagEndPoints ||
                    this._flagStops ||
                    this._flagUnits)
                ) {
                  let e,
                    s = this.left._x,
                    r = this.left._y,
                    n = this.right._x,
                    a = this.right._y;
                  /objectBoundingBox/i.test(this._units) &&
                    ((e = t.getBoundingClientRect(!0)),
                    (s = (s - 0.5) * e.width),
                    (r = (r - 0.5) * e.height),
                    (n = (n - 0.5) * e.width),
                    (a = (a - 0.5) * e.height)),
                    (this._renderer.effect = i.createLinearGradient(
                      s,
                      r,
                      n,
                      a
                    ));
                  for (let o = 0; o < this.stops.length; o++) {
                    let h = this.stops[o];
                    this._renderer.effect.addColorStop(h._offset, h._color);
                  }
                }
                return this.flagReset();
              }
            },
          },
          "radial-gradient": {
            render: function (i, t) {
              if (!(!i.canvas.getContext("2d") || !t)) {
                if (
                  (this._update(),
                  !this._renderer.effect ||
                    this._flagCenter ||
                    this._flagFocal ||
                    this._flagRadius ||
                    this._flagStops ||
                    this._flagUnits)
                ) {
                  let e,
                    s = this.center._x,
                    r = this.center._y,
                    n = this.focal._x,
                    a = this.focal._y,
                    o = this._radius;
                  /objectBoundingBox/i.test(this._units) &&
                    ((e = t.getBoundingClientRect(!0)),
                    (s = s * e.width * 0.5),
                    (r = r * e.height * 0.5),
                    (n = n * e.width * 0.5),
                    (a = a * e.height * 0.5),
                    (o *= Math.min(e.width, e.height) * 0.5)),
                    (this._renderer.effect = i.createRadialGradient(
                      s,
                      r,
                      0,
                      n,
                      a,
                      o
                    ));
                  for (let h = 0; h < this.stops.length; h++) {
                    let l = this.stops[h];
                    this._renderer.effect.addColorStop(l._offset, l._color);
                  }
                }
                return this.flagReset();
              }
            },
          },
          texture: {
            render: function (i, t) {
              if (!i.canvas.getContext("2d")) return;
              this._update();
              let e = this.image;
              if (
                (this._flagLoaded ||
                  this._flagImage ||
                  this._flagVideo ||
                  this._flagRepeat) &&
                this.loaded
              )
                this._renderer.effect = i.createPattern(e, this._repeat);
              else if (!this._renderer.effect) return this.flagReset();
              return (
                (this._flagOffset || this._flagLoaded || this._flagScale) &&
                  (this._renderer.offset instanceof k ||
                    (this._renderer.offset = new k()),
                  (this._renderer.offset.x = -this._offset.x),
                  (this._renderer.offset.y = -this._offset.y),
                  e &&
                    ((this._renderer.offset.x += e.width / 2),
                    (this._renderer.offset.y += e.height / 2),
                    this._scale instanceof k
                      ? ((this._renderer.offset.x *= this._scale.x),
                        (this._renderer.offset.y *= this._scale.y))
                      : ((this._renderer.offset.x *= this._scale),
                        (this._renderer.offset.y *= this._scale)))),
                (this._flagScale || this._flagLoaded) &&
                  (this._renderer.scale instanceof k ||
                    (this._renderer.scale = new k()),
                  this._scale instanceof k
                    ? this._renderer.scale.copy(this._scale)
                    : this._renderer.scale.set(this._scale, this._scale)),
                this.flagReset()
              );
            },
          },
          updateTexture: function (i, t) {
            if (
              (this[t._renderer.type].updateCanvas.call(I, t),
              this.canvas.width <= 0 || this.canvas.height <= 0)
            ) {
              t._renderer.texture && i.deleteTexture(t._renderer.texture),
                delete t._renderer.texture;
              return;
            }
            t._renderer.texture || (t._renderer.texture = i.createTexture()),
              i.bindTexture(i.TEXTURE_2D, t._renderer.texture),
              i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
              i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE),
              i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
              i.texImage2D(
                i.TEXTURE_2D,
                0,
                i.RGBA,
                i.RGBA,
                i.UNSIGNED_BYTE,
                this.canvas
              );
          },
          program: {
            create: function (i, t) {
              let e, s, r;
              if (
                ((e = i.createProgram()),
                S.each(t, function (n) {
                  i.attachShader(e, n);
                }),
                i.linkProgram(e),
                (s = i.getProgramParameter(e, i.LINK_STATUS)),
                !s)
              )
                throw (
                  ((r = i.getProgramInfoLog(e)),
                  i.deleteProgram(e),
                  new et("unable to link program: " + r))
                );
              return e;
            },
          },
          TextureRegistry: new Et(),
        };
      I.ctx = I.canvas.getContext("2d");
      var pe = class extends p {
        constructor(t) {
          super();
          let e, s, r, n;
          if (
            ((this.domElement =
              t.domElement || document.createElement("canvas")),
            typeof t.offscreenElement < "u" &&
              ((I.canvas = t.offscreenElement),
              (I.ctx = I.canvas.getContext("2d"))),
            (this.scene = new G()),
            (this.scene.parent = this),
            (this._renderer = {
              type: "renderer",
              matrix: new bt(Ws),
              scale: 1,
              opacity: 1,
            }),
            (this._flagMatrix = !0),
            (t = S.defaults(t || {}, {
              antialias: !1,
              alpha: !0,
              premultipliedAlpha: !0,
              stencil: !0,
              preserveDrawingBuffer: !0,
              overdraw: !1,
            })),
            (this.overdraw = t.overdraw),
            (e = this.ctx =
              this.domElement.getContext("webgl", t) ||
              this.domElement.getContext("experimental-webgl", t)),
            !this.ctx)
          )
            throw new et(
              "unable to create a webgl context. Try using another renderer."
            );
          (r = xt.create(e, xt.path.vertex, xt.types.vertex)),
            (n = xt.create(e, xt.path.fragment, xt.types.fragment)),
            (this.programs = {
              current: null,
              buffers: { position: e.createBuffer() },
              resolution: { width: 0, height: 0, ratio: 1, flagged: !1 },
            }),
            (s = this.programs.path = I.program.create(e, [r, n])),
            (this.programs.text = this.programs.path),
            (s.position = e.getAttribLocation(s, "a_position")),
            (s.matrix = e.getUniformLocation(s, "u_matrix")),
            (s.rect = e.getUniformLocation(s, "u_rect"));
          let a = e.createBuffer();
          e.bindBuffer(e.ARRAY_BUFFER, a),
            e.vertexAttribPointer(s.position, 2, e.FLOAT, !1, 0, 0),
            e.enableVertexAttribArray(s.position),
            e.bufferData(e.ARRAY_BUFFER, ai, e.STATIC_DRAW),
            (r = xt.create(e, xt.points.vertex, xt.types.vertex)),
            (n = xt.create(e, xt.points.fragment, xt.types.fragment)),
            (s = this.programs.points = I.program.create(e, [r, n])),
            (s.position = e.getAttribLocation(s, "a_position")),
            (s.matrix = e.getUniformLocation(s, "u_matrix")),
            (s.size = e.getUniformLocation(s, "u_size")),
            e.enable(e.BLEND),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
            e.blendEquation(e.FUNC_ADD),
            e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
        }
        setSize(t, e, s) {
          let r,
            n,
            a = this.ctx;
          return (
            (this.width = t),
            (this.height = e),
            (this.ratio = typeof s > "u" ? Xt(a) : s),
            (this.domElement.width = t * this.ratio),
            (this.domElement.height = e * this.ratio),
            S.isObject(this.domElement.style) &&
              S.extend(this.domElement.style, {
                width: t + "px",
                height: e + "px",
              }),
            (this._renderer.matrix[0] =
              this._renderer.matrix[4] =
              this._renderer.scale =
                this.ratio),
            (this._flagMatrix = !0),
            (r = t * this.ratio),
            (n = e * this.ratio),
            a.viewport(0, 0, r, n),
            (this.programs.resolution.width = r),
            (this.programs.resolution.height = n),
            (this.programs.resolution.ratio = this.ratio),
            (this.programs.resolution.flagged = !0),
            this.trigger(p.Types.resize, t, e, s)
          );
        }
        render() {
          let t = this.ctx;
          return (
            this.overdraw || t.clear(t.COLOR_BUFFER_BIT),
            I.group.render.call(this.scene, t, this.programs),
            (this._flagMatrix = !1),
            (this.programs.resolution.flagged = !0),
            this
          );
        }
      };
      v(pe, "Utils", I);
      var Ys = S.extend(
          { Error: et, getRatio: Xt, read: q, xhr: ni },
          S,
          ht,
          Ve,
          Ie
        ),
        te = class {
          _events = new p();
          get _bound() {
            return this._events._bound;
          }
          set _bound(t) {
            this._events._bound = t;
          }
          addEventListener() {
            return this._events.addEventListener.apply(this, arguments);
          }
          on() {
            return this._events.addEventListener.apply(this, arguments);
          }
          bind() {
            return this._events.addEventListener.apply(this, arguments);
          }
          removeEventListener() {
            return this._events.removeEventListener.apply(this, arguments);
          }
          off() {
            return this._events.removeEventListener.apply(this, arguments);
          }
          unbind() {
            return this._events.removeEventListener.apply(this, arguments);
          }
          dispatchEvent() {
            return this._events.dispatchEvent.apply(this, arguments);
          }
          trigger() {
            return this._events.dispatchEvent.apply(this, arguments);
          }
          listen() {
            return this._events.listen.apply(this, arguments);
          }
          ignore() {
            return this._events.ignore.apply(this, arguments);
          }
          type = "";
          renderer = null;
          scene = null;
          width = 0;
          height = 0;
          frameCount = 0;
          timeDelta = 0;
          playing = !1;
          constructor(t) {
            let e = S.defaults(t || {}, {
              fullscreen: !1,
              fitted: !1,
              width: 640,
              height: 480,
              type: te.Types.svg,
              autostart: !1,
            });
            if (
              (S.each(
                e,
                function (s, r) {
                  /fullscreen/i.test(r) ||
                    /autostart/i.test(r) ||
                    (this[r] = s);
                },
                this
              ),
              S.isElement(e.domElement))
            ) {
              let s = e.domElement.tagName.toLowerCase();
              /^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(
                this.type + "-" + s
              ) || (this.type = te.Types[s]);
            }
            (this.renderer = new te[this.type](this)),
              this.setPlaying(e.autostart),
              (this.frameCount = 0),
              e.fullscreen
                ? ((this.fit = Gs.bind(this)),
                  (this.fit.domElement = window),
                  (this.fit.attached = !0),
                  S.extend(document.body.style, {
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed",
                  }),
                  S.extend(this.renderer.domElement.style, {
                    display: "block",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed",
                  }),
                  gt.bind(this.fit.domElement, "resize", this.fit),
                  this.fit())
                : e.fitted
                ? ((this.fit = qs.bind(this)),
                  S.extend(this.renderer.domElement.style, {
                    display: "block",
                  }))
                : S.isElement(e.domElement) ||
                  (this.renderer.setSize(e.width, e.height, this.ratio),
                  (this.width = e.width),
                  (this.height = e.height)),
              this.renderer.bind(p.Types.resize, Ks.bind(this)),
              (this.scene = this.renderer.scene),
              te.Instances.push(this),
              e.autostart && me.init();
          }
          appendTo(t) {
            return (
              t.appendChild(this.renderer.domElement),
              this.fit &&
                (this.fit.domElement !== window &&
                  ((this.fit.domElement = t), (this.fit.attached = !1)),
                this.update()),
              this
            );
          }
          play() {
            return (this.playing = !0), me.init(), this.trigger(p.Types.play);
          }
          pause() {
            return (this.playing = !1), this.trigger(p.Types.pause);
          }
          setPlaying(t) {
            this.playing = t;
          }
          release(t) {
            let e, s, r;
            if (!S.isObject(t)) return this.release(this.scene);
            if ((typeof t.unbind == "function" && t.unbind(), t.vertices))
              for (
                typeof t.vertices.unbind == "function" && t.vertices.unbind(),
                  e = 0;
                e < t.vertices.length;
                e++
              )
                (s = t.vertices[e]),
                  typeof s.unbind == "function" && s.unbind(),
                  s.controls &&
                    (s.controls.left &&
                      typeof s.controls.left.unbind == "function" &&
                      s.controls.left.unbind(),
                    s.controls.right &&
                      typeof s.controls.right.unbind == "function" &&
                      s.controls.right.unbind());
            if (t.children) {
              for (e = 0; e < t.children.length; e++)
                (r = t.children[e]), this.release(r);
              typeof t.children.unbind == "function" && t.children.unbind();
            }
            return t;
          }
          update() {
            let t = !!this._lastFrame,
              e = S.performance.now();
            t &&
              (this.timeDelta = parseFloat((e - this._lastFrame).toFixed(3))),
              (this._lastFrame = e),
              this.fit &&
                this.fit.domElement &&
                !this.fit.attached &&
                (gt.bind(this.fit.domElement, "resize", this.fit),
                (this.fit.attached = !0),
                this.fit());
            let s = this.width,
              r = this.height,
              n = this.renderer;
            return (
              (s !== n.width || r !== n.height) && n.setSize(s, r, this.ratio),
              this.trigger(p.Types.update, this.frameCount, this.timeDelta),
              this.render()
            );
          }
          render() {
            return (
              this.renderer.render(),
              this.trigger(p.Types.render, this.frameCount++)
            );
          }
          add(t) {
            return (
              t instanceof Array || (t = Array.prototype.slice.call(arguments)),
              this.scene.add(t),
              this
            );
          }
          remove(t) {
            return (
              t instanceof Array || (t = Array.prototype.slice.call(arguments)),
              this.scene.remove(t),
              this
            );
          }
          clear() {
            return this.scene.remove(this.scene.children), this;
          }
          makeLine(t, e, s, r) {
            let n = new Dt(t, e, s, r);
            return this.scene.add(n), n;
          }
          makeArrow(t, e, s, r, n) {
            let a = typeof n == "number" ? n : 10,
              o = Math.atan2(r - e, s - t),
              h = [
                new F(t, e, void 0, void 0, void 0, void 0, w.move),
                new F(s, r, void 0, void 0, void 0, void 0, w.line),
                new F(
                  s - a * Math.cos(o - Math.PI / 4),
                  r - a * Math.sin(o - Math.PI / 4),
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  w.line
                ),
                new F(s, r, void 0, void 0, void 0, void 0, w.move),
                new F(
                  s - a * Math.cos(o + Math.PI / 4),
                  r - a * Math.sin(o + Math.PI / 4),
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  w.line
                ),
              ],
              l = new L(h, !1, !1, !0);
            return (
              l.noFill(),
              (l.cap = "round"),
              (l.join = "round"),
              this.scene.add(l),
              l
            );
          }
          makeRectangle(t, e, s, r) {
            let n = new yt(t, e, s, r);
            return this.scene.add(n), n;
          }
          makeRoundedRectangle(t, e, s, r, n) {
            let a = new Vt(t, e, s, r, n);
            return this.scene.add(a), a;
          }
          makeCircle(t, e, s, r) {
            let n = new jt(t, e, s, r);
            return this.scene.add(n), n;
          }
          makeEllipse(t, e, s, r, n) {
            let a = new Nt(t, e, s, r, n);
            return this.scene.add(a), a;
          }
          makeStar(t, e, s, r, n) {
            let a = new Qt(t, e, s, r, n);
            return this.scene.add(a), a;
          }
          makeCurve(t) {
            let e = arguments.length;
            if (!Array.isArray(t)) {
              t = [];
              for (let a = 0; a < e; a += 2) {
                let o = arguments[a];
                if (typeof o != "number") break;
                let h = arguments[a + 1];
                t.push(new F(o, h));
              }
            }
            let s = arguments[e - 1],
              r = new L(t, !(typeof s == "boolean" && s), !0),
              n = r.getBoundingClientRect();
            return (
              r
                .center()
                .translation.set(n.left + n.width / 2, n.top + n.height / 2),
              this.scene.add(r),
              r
            );
          }
          makePolygon(t, e, s, r) {
            let n = new Zt(t, e, s, r);
            return this.scene.add(n), n;
          }
          makeArcSegment(t, e, s, r, n, a, o) {
            let h = new Kt(t, e, s, r, n, a, o);
            return this.scene.add(h), h;
          }
          makePoints(t) {
            let e = arguments.length,
              s = t;
            if (!Array.isArray(t)) {
              s = [];
              for (let n = 0; n < e; n += 2) {
                let a = arguments[n];
                if (typeof a != "number") break;
                let o = arguments[n + 1];
                s.push(new k(a, o));
              }
            }
            let r = new Jt(s);
            return this.scene.add(r), r;
          }
          makePath(t) {
            let e = arguments.length,
              s = t;
            if (!Array.isArray(t)) {
              s = [];
              for (let o = 0; o < e; o += 2) {
                let h = arguments[o];
                if (typeof h != "number") break;
                let l = arguments[o + 1];
                s.push(new F(h, l));
              }
            }
            let r = arguments[e - 1],
              n = new L(s, !(typeof r == "boolean" && r)),
              a = n.getBoundingClientRect();
            return (
              typeof a.top == "number" &&
                typeof a.left == "number" &&
                typeof a.right == "number" &&
                typeof a.bottom == "number" &&
                n
                  .center()
                  .translation.set(a.left + a.width / 2, a.top + a.height / 2),
              this.scene.add(n),
              n
            );
          }
          makeText(t, e, s, r) {
            let n = new ct(t, e, s, r);
            return this.add(n), n;
          }
          makeLinearGradient(t, e, s, r) {
            let n = Array.prototype.slice.call(arguments, 4),
              a = new U(t, e, s, r, n);
            return this.add(a), a;
          }
          makeRadialGradient(t, e, s) {
            let r = Array.prototype.slice.call(arguments, 3),
              n = new D(t, e, s, r);
            return this.add(n), n;
          }
          makeSprite(t, e, s, r, n, a, o) {
            let h = new Bt(t, e, s, r, n, a);
            return o && h.play(), this.add(h), h;
          }
          makeImageSequence(t, e, s, r, n) {
            let a = new Ht(t, e, s, r);
            return n && a.play(), this.add(a), a;
          }
          makeTexture(t, e) {
            return new B(t, e);
          }
          makeGroup(t) {
            t instanceof Array || (t = Array.prototype.slice.call(arguments));
            let e = new G();
            return this.scene.add(e), e.add(t), e;
          }
          interpret(t, e, s) {
            let r = t.tagName.toLowerCase();
            if (((s = typeof s < "u" ? s : !0), !(r in q))) return null;
            let n = q[r].call(this, t);
            return (
              s
                ? this.add(e && n instanceof G ? n.children : n)
                : n.parent && n.remove(),
              n
            );
          }
          load(t, e) {
            let s = new G(),
              r,
              n,
              a,
              o = function (h) {
                for (
                  gt.temp.innerHTML = h, n = 0;
                  n < gt.temp.children.length;
                  n++
                )
                  (r = gt.temp.children[n]),
                    (a = this.interpret(r, !1, !1)),
                    a !== null && s.add(a);
                if (typeof e == "function") {
                  let l =
                    gt.temp.children.length <= 1
                      ? gt.temp.children[0]
                      : gt.temp.children;
                  e(s, l);
                }
              }.bind(this);
            return /\.svg$/i.test(t) ? (ni(t, o), s) : (o(t), s);
          }
        },
        P = te;
      v(P, "nextFrameID", Y.nextFrameID),
        v(P, "Types", Y.Types),
        v(P, "Version", Y.Version),
        v(P, "PublishDate", Y.PublishDate),
        v(P, "Identifier", Y.Identifier),
        v(P, "Resolution", Y.Resolution),
        v(P, "AutoCalculateImportedMatrices", Y.AutoCalculateImportedMatrices),
        v(P, "Instances", Y.Instances),
        v(P, "uniqueId", Y.uniqueId),
        v(P, "Anchor", F),
        v(P, "Collection", lt),
        v(P, "Events", p),
        v(P, "Group", G),
        v(P, "Matrix", at),
        v(P, "Path", L),
        v(P, "Registry", Et),
        v(P, "Shape", ot),
        v(P, "Text", ct),
        v(P, "Vector", k),
        v(P, "Gradient", W),
        v(P, "ImageSequence", Ht),
        v(P, "LinearGradient", U),
        v(P, "RadialGradient", D),
        v(P, "Sprite", Bt),
        v(P, "Stop", ft),
        v(P, "Texture", B),
        v(P, "ArcSegment", Kt),
        v(P, "Circle", jt),
        v(P, "Ellipse", Nt),
        v(P, "Line", Dt),
        v(P, "Points", Jt),
        v(P, "Polygon", Zt),
        v(P, "Rectangle", yt),
        v(P, "RoundedRectangle", Vt),
        v(P, "Star", Qt),
        v(P, "CanvasRenderer", At),
        v(P, "SVGRenderer", ge),
        v(P, "WebGLRenderer", pe),
        v(P, "Commands", w),
        v(P, "Utils", Ys);
      function Gs() {
        let i = document.body.getBoundingClientRect(),
          t = (this.width = i.width),
          e = (this.height = i.height);
        this.renderer.setSize(t, e, this.ratio);
      }
      function qs() {
        let i = this.renderer.domElement.parentElement;
        if (!i) {
          console.warn(
            "Two.js: Attempting to fit to parent, but no parent found."
          );
          return;
        }
        let t = i.getBoundingClientRect(),
          e = (this.width = t.width),
          s = (this.height = t.height);
        this.renderer.setSize(e, s, this.ratio);
      }
      function Ks(i, t) {
        (this.width = i), (this.height = t), this.trigger(p.Types.resize, i, t);
      }
      var me = gt.getRequestAnimationFrame();
      function Gi() {
        for (let i = 0; i < P.Instances.length; i++) {
          let t = P.Instances[i];
          t.playing && t.update();
        }
        P.nextFrameID = me(Gi);
      }
      me.init = function () {
        Gi(), (me.init = function () {});
      };
      return Qi($s);
    })().default;

    (function () {
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = Two;
      }
    })();
    
    window.addEventListener("load", (event) => {
      var vector = new Two.Vector();
      var entities = [];
      var mouse;
      var copy = [
        "Idea",
        "Idea",
        "Idea",
        "Money",
        "Money",
        "Tech",
        "Concept",
        "Business",
        "Design",
        "MVP",
        "Roadmap",
        "Testing",
      ];

      var two = new Two({
        type: Two.Types.canvas,
        fitted: true,
        autostart: false,
      }).appendTo(document.getElementById("matter"));

      var solver = Matter.Engine.create();
      solver.world.gravity.y = 1;

      var bounds = {
        length: 5000,
        thickness: 50,
        properties: {
          isStatic: true,
        },
      };

      // bounds.top = createBoundary(bounds.length, bounds.thickness);
      bounds.left = createBoundary(bounds.thickness, bounds.length);
      bounds.right = createBoundary(bounds.thickness, bounds.length);
      bounds.bottom = createBoundary(bounds.length, bounds.thickness);

      Matter.World.add(solver.world, [
        /*bounds.top.entity,*/ bounds.left.entity,
        bounds.right.entity,
        bounds.bottom.entity,
      ]);

      var defaultStyles = {
        size: two.width * 0.1,
        weight: 700,
        fill: "black",
        leading: two.width * 0.08 * 0.8,
        family: "Angus, Arial, sans-serif",
        alignment: "center",
        baseline: "baseline",
        margin: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      };

      addSlogan();
      resize();
      mouse = addMouseInteraction();
      two.bind("resize", resize).bind("update", update);

      const runMatter = function () {
        two.play();
      };

      document.getElementById("start-matter").onclick = runMatter;

      function addMouseInteraction() {
        // add mouse control
        var mouse = Matter.Mouse.create(document.body);
        var mouseConstraint = Matter.MouseConstraint.create(solver, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
          },
        });

        Matter.World.add(solver.world, mouseConstraint);

        return mouseConstraint;
      }

      function resize() {
        var length = bounds.length;
        var thickness = bounds.thickness;

        // vector.x = two.width / 2;
        // vector.y = - thickness / 2;
        // Matter.Body.setPosition(bounds.top.entity, vector);

        vector.x = -thickness / 2;
        vector.y = two.height / 2;
        Matter.Body.setPosition(bounds.left.entity, vector);

        vector.x = two.width + thickness / 2;
        vector.y = two.height / 2;
        Matter.Body.setPosition(bounds.right.entity, vector);

        vector.x = two.width / 2;
        vector.y = two.height + thickness / 2;
        Matter.Body.setPosition(bounds.bottom.entity, vector);

        var size;

        if (two.width < 480) {
          size = two.width * 0.12;
        } else if (two.width > 1080 && two.width < 1600) {
          size = two.width * 0.07;
        } else if (two.width > 1600) {
          size = two.width * 0.06;
        } else {
          size = two.width * 0.08;
        }

        var leading = size * 0.8;

        for (var i = 0; i < two.scene.children.length; i++) {
          var child = two.scene.children[i];

          if (!child.isWord) {
            continue;
          }

          var text = child.text;
          var rectangle = child.rectangle;
          var entity = child.entity;

          text.size = size;
          text.leading = leading;

          var rect = text.getBoundingClientRect(true);
          rectangle.width = rect.width;
          rectangle.height = rect.height;

          Matter.Body.scale(entity, 1 / entity.scale.x, 1 / entity.scale.y);
          Matter.Body.scale(entity, rect.width, rect.height);
          entity.scale.set(rect.width, rect.height);

          text.size = size / 3;
        }
      }

      function addSlogan() {
        var x = defaultStyles.margin.left;
        var y = -two.height; // Header offset

        for (var i = 0; i < copy.length; i++) {
          var word = copy[i];
          var group = new Two.Group();
          var text = new Two.Text("", 0, 0, defaultStyles);

          group.isWord = true;

          // Override default styles
          if (word.value) {
            text.value = word.value;

            for (var prop in word.styles) {
              text[prop] = word.styles[prop];
            }
          } else {
            text.value = word;
          }

          var rect = text.getBoundingClientRect();
          var ox = x + rect.width / 2;
          var oy = y + rect.height / 2;

          var ca = x + rect.width;
          var cb = two.width;

          // New line
          if (ca >= cb) {
            x = defaultStyles.margin.left;
            y +=
              defaultStyles.leading +
              defaultStyles.margin.top +
              defaultStyles.margin.bottom;

            ox = x + rect.width / 2;
            oy = y + rect.height / 2;
          }

          group.translation.x = ox;
          group.translation.y = oy;
          text.translation.y = 14;

          var rectangle = new Two.Rectangle(0, 0, rect.width, rect.height);
          rectangle.fill = "rgb(255, 255, 255)";
          // rectangle.fill =
          //   "rgba(" +
          //   255 +
          //   "," +
          //   Math.floor(Math.random() * 255) +
          //   "," +
          //   Math.floor(Math.random() * 255) +
          //   "," +
          //   0.85 +
          //   ")";

          rectangle.noStroke();
          // rectangle.opacity = 0.75;
          rectangle.visible = true;

          var entity = Matter.Bodies.rectangle(ox, oy, 1, 1);
          Matter.Body.scale(entity, rect.width, rect.height);

          entity.scale = new Two.Vector(rect.width, rect.height);
          entity.object = group;
          entities.push(entity);

          x +=
            rect.width + defaultStyles.margin.left + defaultStyles.margin.right;

          group.text = text;
          group.rectangle = rectangle;
          group.entity = entity;

          group.add(rectangle, text);
          two.add(group);
        }

        Matter.World.add(solver.world, entities);
      }

      function update(frameCount, timeDelta) {
        var allBodies = Matter.Composite.allBodies(solver.world);
        Matter.MouseConstraint.update(mouse, allBodies);
        Matter.MouseConstraint._triggerEvents(mouse);

        Matter.Engine.update(solver);

        for (var i = 0; i < entities.length; i++) {
          var entity = entities[i];
          entity.object.position.copy(entity.position);
          entity.object.rotation = entity.angle;
        }
      }

      function createBoundary(width, height) {
        var rectangle = two.makeRectangle(0, 0, width, height);
        rectangle.visible = false;

        rectangle.entity = Matter.Bodies.rectangle(
          0,
          0,
          width,
          height,
          bounds.properties
        );
        rectangle.entity.position = rectangle.position;

        return rectangle;
      }
    });
