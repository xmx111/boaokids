function is_touch_device() {
}

function quadraticBezier(t, e, i, r, n) {
    return n = n || {}, n.x = Math.pow(1 - r, 2) * t.x + 2 * (1 - r) * r * e.x + r * r * i.x, n.y = Math.pow(1 - r, 2) * t.y + 2 * (1 - r) * r * e.y + r * r * i.y, n
}

function Drop() {
    PIXI.Sprite.call(this, PIXI.Texture.fromImage(ASSET_URL + "img/drop.png")), this.anchor.x = .5, this.anchor.y = .5, this.velocity = new PIXI.Point, this.isDead = !1
}

function aabbCollide(t, e) {
    var i = t.x + t.width,
        r = t.y + t.height,
        n = e.x + e.width,
        s = e.y + e.height;
    return i < e.x || r < e.y || t.x > n || t.y > s ? !1 : !0
}! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.PIXI = t()
    }
}(function () {
    var t;
    return function e(t, i, r) {
        function n(o, a) {
            if (!i[o]) {
                if (!t[o]) {
                    var h = "function" == typeof require && require;
                    if (!a && h) return h(o, !0);
                    if (s) return s(o, !0);
                    var l = new Error("Cannot find module '" + o + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = i[o] = {
                    exports: {}
                };
                t[o][0].call(u.exports, function (e) {
                    var i = t[o][1][e];
                    return n(i ? i : e)
                }, u, u.exports, e, t, i, r)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < r.length; o++) n(r[o]);
        return n
    }({
        1: [function (t, e, i) {
            (function (i) {
                t("./polyfill");
                var r = e.exports = t("./core");
                r.extras = t("./extras"), r.filters = t("./filters"), r.interaction = t("./interaction"), r.loaders = t("./loaders"), r.mesh = t("./mesh"), r.loader = new r.loaders.Loader, Object.assign(r, t("./deprecation")), i.PIXI = r
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "./core": 28,
            "./deprecation": 77,
            "./extras": 84,
            "./filters": 101,
            "./interaction": 116,
            "./loaders": 119,
            "./mesh": 125,
            "./polyfill": 129
        }],
        2: [function (e, i, r) {
            (function (e) {
                ! function () {
                    function r(t) {
                        var e = !1;
                        return function () {
                            if (e) throw new Error("Callback was already called.");
                            e = !0, t.apply(n, arguments)
                        }
                    }
                    var n, s, o = {};
                    n = this, null != n && (s = n.async), o.noConflict = function () {
                        return n.async = s, o
                    };
                    var a = Object.prototype.toString,
                        h = Array.isArray || function (t) {
                            return "[object Array]" === a.call(t)
                        },
                        l = function (t, e) {
                            for (var i = 0; i < t.length; i += 1) e(t[i], i, t)
                        },
                        u = function (t, e) {
                            if (t.map) return t.map(e);
                            var i = [];
                            return l(t, function (t, r, n) {
                                i.push(e(t, r, n))
                            }), i
                        },
                        c = function (t, e, i) {
                            return t.reduce ? t.reduce(e, i) : (l(t, function (t, r, n) {
                                i = e(i, t, r, n)
                            }), i)
                        },
                        p = function (t) {
                            if (Object.keys) return Object.keys(t);
                            var e = [];
                            for (var i in t) t.hasOwnProperty(i) && e.push(i);
                            return e
                        };
                    "undefined" != typeof e && e.nextTick ? (o.nextTick = e.nextTick, "undefined" != typeof setImmediate ? o.setImmediate = function (t) {
                        setImmediate(t)
                    } : o.setImmediate = o.nextTick) : "function" == typeof setImmediate ? (o.nextTick = function (t) {
                        setImmediate(t)
                    }, o.setImmediate = o.nextTick) : (o.nextTick = function (t) {
                        setTimeout(t, 0)
                    }, o.setImmediate = o.nextTick), o.each = function (t, e, i) {
                        function n(e) {
                            e ? (i(e), i = function () {}) : (s += 1, s >= t.length && i())
                        }
                        if (i = i || function () {}, !t.length) return i();
                        var s = 0;
                        l(t, function (t) {
                            e(t, r(n))
                        })
                    }, o.forEach = o.each, o.eachSeries = function (t, e, i) {
                        if (i = i || function () {}, !t.length) return i();
                        var r = 0,
                            n = function () {
                                e(t[r], function (e) {
                                    e ? (i(e), i = function () {}) : (r += 1, r >= t.length ? i() : n())
                                })
                            };
                        n()
                    }, o.forEachSeries = o.eachSeries, o.eachLimit = function (t, e, i, r) {
                        var n = d(e);
                        n.apply(null, [t, i, r])
                    }, o.forEachLimit = o.eachLimit;
                    var d = function (t) {
                            return function (e, i, r) {
                                if (r = r || function () {}, !e.length || 0 >= t) return r();
                                var n = 0,
                                    s = 0,
                                    o = 0;
                                ! function a() {
                                    if (n >= e.length) return r();
                                    for (; t > o && s < e.length;) s += 1, o += 1, i(e[s - 1], function (t) {
                                        t ? (r(t), r = function () {}) : (n += 1, o -= 1, n >= e.length ? r() : a())
                                    })
                                }()
                            }
                        },
                        f = function (t) {
                            return function () {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [o.each].concat(e))
                            }
                        },
                        g = function (t, e) {
                            return function () {
                                var i = Array.prototype.slice.call(arguments);
                                return e.apply(null, [d(t)].concat(i))
                            }
                        },
                        v = function (t) {
                            return function () {
                                var e = Array.prototype.slice.call(arguments);
                                return t.apply(null, [o.eachSeries].concat(e))
                            }
                        },
                        m = function (t, e, i, r) {
                            if (e = u(e, function (t, e) {
                                    return {
                                        index: e,
                                        value: t
                                    }
                                }), r) {
                                var n = [];
                                t(e, function (t, e) {
                                    i(t.value, function (i, r) {
                                        n[t.index] = r, e(i)
                                    })
                                }, function (t) {
                                    r(t, n)
                                })
                            } else t(e, function (t, e) {
                                i(t.value, function (t) {
                                    e(t)
                                })
                            })
                        };
                    o.map = f(m), o.mapSeries = v(m), o.mapLimit = function (t, e, i, r) {
                        return y(e)(t, i, r)
                    };
                    var y = function (t) {
                        return g(t, m)
                    };
                    o.reduce = function (t, e, i, r) {
                        o.eachSeries(t, function (t, r) {
                            i(e, t, function (t, i) {
                                e = i, r(t)
                            })
                        }, function (t) {
                            r(t, e)
                        })
                    }, o.inject = o.reduce, o.foldl = o.reduce, o.reduceRight = function (t, e, i, r) {
                        var n = u(t, function (t) {
                            return t
                        }).reverse();
                        o.reduce(n, e, i, r)
                    }, o.foldr = o.reduceRight;
                    var x = function (t, e, i, r) {
                        var n = [];
                        e = u(e, function (t, e) {
                            return {
                                index: e,
                                value: t
                            }
                        }), t(e, function (t, e) {
                            i(t.value, function (i) {
                                i && n.push(t), e()
                            })
                        }, function (t) {
                            r(u(n.sort(function (t, e) {
                                return t.index - e.index
                            }), function (t) {
                                return t.value
                            }))
                        })
                    };
                    o.filter = f(x), o.filterSeries = v(x), o.select = o.filter, o.selectSeries = o.filterSeries;
                    var _ = function (t, e, i, r) {
                        var n = [];
                        e = u(e, function (t, e) {
                            return {
                                index: e,
                                value: t
                            }
                        }), t(e, function (t, e) {
                            i(t.value, function (i) {
                                i || n.push(t), e()
                            })
                        }, function (t) {
                            r(u(n.sort(function (t, e) {
                                return t.index - e.index
                            }), function (t) {
                                return t.value
                            }))
                        })
                    };
                    o.reject = f(_), o.rejectSeries = v(_);
                    var b = function (t, e, i, r) {
                        t(e, function (t, e) {
                            i(t, function (i) {
                                i ? (r(t), r = function () {}) : e()
                            })
                        }, function (t) {
                            r()
                        })
                    };
                    o.detect = f(b), o.detectSeries = v(b), o.some = function (t, e, i) {
                        o.each(t, function (t, r) {
                            e(t, function (t) {
                                t && (i(!0), i = function () {}), r()
                            })
                        }, function (t) {
                            i(!1)
                        })
                    }, o.any = o.some, o.every = function (t, e, i) {
                        o.each(t, function (t, r) {
                            e(t, function (t) {
                                t || (i(!1), i = function () {}), r()
                            })
                        }, function (t) {
                            i(!0)
                        })
                    }, o.all = o.every, o.sortBy = function (t, e, i) {
                        o.map(t, function (t, i) {
                            e(t, function (e, r) {
                                e ? i(e) : i(null, {
                                    value: t,
                                    criteria: r
                                })
                            })
                        }, function (t, e) {
                            if (t) return i(t);
                            var r = function (t, e) {
                                var i = t.criteria,
                                    r = e.criteria;
                                return r > i ? -1 : i > r ? 1 : 0
                            };
                            i(null, u(e.sort(r), function (t) {
                                return t.value
                            }))
                        })
                    }, o.auto = function (t, e) {
                        e = e || function () {};
                        var i = p(t),
                            r = i.length;
                        if (!r) return e();
                        var n = {},
                            s = [],
                            a = function (t) {
                                s.unshift(t)
                            },
                            u = function (t) {
                                for (var e = 0; e < s.length; e += 1)
                                    if (s[e] === t) return void s.splice(e, 1)
                            },
                            d = function () {
                                r--, l(s.slice(0), function (t) {
                                    t()
                                })
                            };
                        a(function () {
                            if (!r) {
                                var t = e;
                                e = function () {}, t(null, n)
                            }
                        }), l(i, function (i) {
                            var r = h(t[i]) ? t[i] : [t[i]],
                                s = function (t) {
                                    var r = Array.prototype.slice.call(arguments, 1);
                                    if (r.length <= 1 && (r = r[0]), t) {
                                        var s = {};
                                        l(p(n), function (t) {
                                            s[t] = n[t]
                                        }), s[i] = r, e(t, s), e = function () {}
                                    } else n[i] = r, o.setImmediate(d)
                                },
                                f = r.slice(0, Math.abs(r.length - 1)) || [],
                                g = function () {
                                    return c(f, function (t, e) {
                                        return t && n.hasOwnProperty(e)
                                    }, !0) && !n.hasOwnProperty(i)
                                };
                            if (g()) r[r.length - 1](s, n);
                            else {
                                var v = function () {
                                    g() && (u(v), r[r.length - 1](s, n))
                                };
                                a(v)
                            }
                        })
                    }, o.retry = function (t, e, i) {
                        var r = 5,
                            n = [];
                        "function" == typeof t && (i = e, e = t, t = r), t = parseInt(t, 10) || r;
                        var s = function (r, s) {
                            for (var a = function (t, e) {
                                    return function (i) {
                                        t(function (t, r) {
                                            i(!t || e, {
                                                err: t,
                                                result: r
                                            })
                                        }, s)
                                    }
                                }; t;) n.push(a(e, !(t -= 1)));
                            o.series(n, function (t, e) {
                                e = e[e.length - 1], (r || i)(e.err, e.result)
                            })
                        };
                        return i ? s() : s
                    }, o.waterfall = function (t, e) {
                        if (e = e || function () {}, !h(t)) {
                            var i = new Error("First argument to waterfall must be an array of functions");
                            return e(i)
                        }
                        if (!t.length) return e();
                        var r = function (t) {
                            return function (i) {
                                if (i) e.apply(null, arguments), e = function () {};
                                else {
                                    var n = Array.prototype.slice.call(arguments, 1),
                                        s = t.next();
                                    s ? n.push(r(s)) : n.push(e), o.setImmediate(function () {
                                        t.apply(null, n)
                                    })
                                }
                            }
                        };
                        r(o.iterator(t))()
                    };
                    var T = function (t, e, i) {
                        if (i = i || function () {}, h(e)) t.map(e, function (t, e) {
                            t && t(function (t) {
                                var i = Array.prototype.slice.call(arguments, 1);
                                i.length <= 1 && (i = i[0]), e.call(null, t, i)
                            })
                        }, i);
                        else {
                            var r = {};
                            t.each(p(e), function (t, i) {
                                e[t](function (e) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    n.length <= 1 && (n = n[0]), r[t] = n, i(e)
                                })
                            }, function (t) {
                                i(t, r)
                            })
                        }
                    };
                    o.parallel = function (t, e) {
                        T({
                            map: o.map,
                            each: o.each
                        }, t, e)
                    }, o.parallelLimit = function (t, e, i) {
                        T({
                            map: y(e),
                            each: d(e)
                        }, t, i)
                    }, o.series = function (t, e) {
                        if (e = e || function () {}, h(t)) o.mapSeries(t, function (t, e) {
                            t && t(function (t) {
                                var i = Array.prototype.slice.call(arguments, 1);
                                i.length <= 1 && (i = i[0]), e.call(null, t, i)
                            })
                        }, e);
                        else {
                            var i = {};
                            o.eachSeries(p(t), function (e, r) {
                                t[e](function (t) {
                                    var n = Array.prototype.slice.call(arguments, 1);
                                    n.length <= 1 && (n = n[0]), i[e] = n, r(t)
                                })
                            }, function (t) {
                                e(t, i)
                            })
                        }
                    }, o.iterator = function (t) {
                        var e = function (i) {
                            var r = function () {
                                return t.length && t[i].apply(null, arguments), r.next()
                            };
                            return r.next = function () {
                                return i < t.length - 1 ? e(i + 1) : null
                            }, r
                        };
                        return e(0)
                    }, o.apply = function (t) {
                        var e = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            return t.apply(null, e.concat(Array.prototype.slice.call(arguments)))
                        }
                    };
                    var w = function (t, e, i, r) {
                        var n = [];
                        t(e, function (t, e) {
                            i(t, function (t, i) {
                                n = n.concat(i || []), e(t)
                            })
                        }, function (t) {
                            r(t, n)
                        })
                    };
                    o.concat = f(w), o.concatSeries = v(w), o.whilst = function (t, e, i) {
                        t() ? e(function (r) {
                            return r ? i(r) : void o.whilst(t, e, i)
                        }) : i()
                    }, o.doWhilst = function (t, e, i) {
                        t(function (r) {
                            if (r) return i(r);
                            var n = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, n) ? o.doWhilst(t, e, i) : i()
                        })
                    }, o.until = function (t, e, i) {
                        t() ? i() : e(function (r) {
                            return r ? i(r) : void o.until(t, e, i)
                        })
                    }, o.doUntil = function (t, e, i) {
                        t(function (r) {
                            if (r) return i(r);
                            var n = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, n) ? i() : o.doUntil(t, e, i)
                        })
                    }, o.queue = function (t, e) {
                        function i(t, e, i, r) {
                            return t.started || (t.started = !0), h(e) || (e = [e]), 0 == e.length ? o.setImmediate(function () {
                                t.drain && t.drain()
                            }) : void l(e, function (e) {
                                var n = {
                                    data: e,
                                    callback: "function" == typeof r ? r : null
                                };
                                i ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), o.setImmediate(t.process)
                            })
                        }
                        void 0 === e && (e = 1);
                        var n = 0,
                            s = {
                                tasks: [],
                                concurrency: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                started: !1,
                                paused: !1,
                                push: function (t, e) {
                                    i(s, t, !1, e)
                                },
                                kill: function () {
                                    s.drain = null, s.tasks = []
                                },
                                unshift: function (t, e) {
                                    i(s, t, !0, e)
                                },
                                process: function () {
                                    if (!s.paused && n < s.concurrency && s.tasks.length) {
                                        var e = s.tasks.shift();
                                        s.empty && 0 === s.tasks.length && s.empty(), n += 1;
                                        var i = function () {
                                                n -= 1, e.callback && e.callback.apply(e, arguments), s.drain && s.tasks.length + n === 0 && s.drain(), s.process()
                                            },
                                            o = r(i);
                                        t(e.data, o)
                                    }
                                },
                                length: function () {
                                    return s.tasks.length
                                },
                                running: function () {
                                    return n
                                },
                                idle: function () {
                                    return s.tasks.length + n === 0
                                },
                                pause: function () {
                                    s.paused !== !0 && (s.paused = !0)
                                },
                                resume: function () {
                                    if (s.paused !== !1) {
                                        s.paused = !1;
                                        for (var t = 1; t <= s.concurrency; t++) o.setImmediate(s.process)
                                    }
                                }
                            };
                        return s
                    }, o.priorityQueue = function (t, e) {
                        function i(t, e) {
                            return t.priority - e.priority
                        }

                        function r(t, e, i) {
                            for (var r = -1, n = t.length - 1; n > r;) {
                                var s = r + (n - r + 1 >>> 1);
                                i(e, t[s]) >= 0 ? r = s : n = s - 1
                            }
                            return r
                        }

                        function n(t, e, n, s) {
                            return t.started || (t.started = !0), h(e) || (e = [e]), 0 == e.length ? o.setImmediate(function () {
                                t.drain && t.drain()
                            }) : void l(e, function (e) {
                                var a = {
                                    data: e,
                                    priority: n,
                                    callback: "function" == typeof s ? s : null
                                };
                                t.tasks.splice(r(t.tasks, a, i) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), o.setImmediate(t.process)
                            })
                        }
                        var s = o.queue(t, e);
                        return s.push = function (t, e, i) {
                            n(s, t, e, i)
                        }, delete s.unshift, s
                    }, o.cargo = function (t, e) {
                        var i = !1,
                            r = [],
                            n = {
                                tasks: r,
                                payload: e,
                                saturated: null,
                                empty: null,
                                drain: null,
                                drained: !0,
                                push: function (t, i) {
                                    h(t) || (t = [t]), l(t, function (t) {
                                        r.push({
                                            data: t,
                                            callback: "function" == typeof i ? i : null
                                        }), n.drained = !1, n.saturated && r.length === e && n.saturated()
                                    }), o.setImmediate(n.process)
                                },
                                process: function s() {
                                    if (!i) {
                                        if (0 === r.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0);
                                        var o = "number" == typeof e ? r.splice(0, e) : r.splice(0, r.length),
                                            a = u(o, function (t) {
                                                return t.data
                                            });
                                        n.empty && n.empty(), i = !0, t(a, function () {
                                            i = !1;
                                            var t = arguments;
                                            l(o, function (e) {
                                                e.callback && e.callback.apply(null, t)
                                            }), s()
                                        })
                                    }
                                },
                                length: function () {
                                    return r.length
                                },
                                running: function () {
                                    return i
                                }
                            };
                        return n
                    };
                    var E = function (t) {
                        return function (e) {
                            var i = Array.prototype.slice.call(arguments, 1);
                            e.apply(null, i.concat([function (e) {
                                var i = Array.prototype.slice.call(arguments, 1);
                                "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && l(i, function (e) {
                                    console[t](e)
                                }))
                            }]))
                        }
                    };
                    o.log = E("log"), o.dir = E("dir"), o.memoize = function (t, e) {
                        var i = {},
                            r = {};
                        e = e || function (t) {
                            return t
                        };
                        var n = function () {
                            var n = Array.prototype.slice.call(arguments),
                                s = n.pop(),
                                a = e.apply(null, n);
                            a in i ? o.nextTick(function () {
                                s.apply(null, i[a])
                            }) : a in r ? r[a].push(s) : (r[a] = [s], t.apply(null, n.concat([function () {
                                i[a] = arguments;
                                var t = r[a];
                                delete r[a];
                                for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments)
                            }])))
                        };
                        return n.memo = i, n.unmemoized = t, n
                    }, o.unmemoize = function (t) {
                        return function () {
                            return (t.unmemoized || t).apply(null, arguments)
                        }
                    }, o.times = function (t, e, i) {
                        for (var r = [], n = 0; t > n; n++) r.push(n);
                        return o.map(r, e, i)
                    }, o.timesSeries = function (t, e, i) {
                        for (var r = [], n = 0; t > n; n++) r.push(n);
                        return o.mapSeries(r, e, i)
                    }, o.seq = function () {
                        var t = arguments;
                        return function () {
                            var e = this,
                                i = Array.prototype.slice.call(arguments),
                                r = i.pop();
                            o.reduce(t, i, function (t, i, r) {
                                i.apply(e, t.concat([function () {
                                    var t = arguments[0],
                                        e = Array.prototype.slice.call(arguments, 1);
                                    r(t, e)
                                }]))
                            }, function (t, i) {
                                r.apply(e, [t].concat(i))
                            })
                        }
                    }, o.compose = function () {
                        return o.seq.apply(null, Array.prototype.reverse.call(arguments))
                    };
                    var S = function (t, e) {
                        var i = function () {
                            var i = this,
                                r = Array.prototype.slice.call(arguments),
                                n = r.pop();
                            return t(e, function (t, e) {
                                t.apply(i, r.concat([e]))
                            }, n)
                        };
                        if (arguments.length > 2) {
                            var r = Array.prototype.slice.call(arguments, 2);
                            return i.apply(this, r)
                        }
                        return i
                    };
                    o.applyEach = f(S), o.applyEachSeries = v(S), o.forever = function (t, e) {
                        function i(r) {
                            if (r) {
                                if (e) return e(r);
                                throw r
                            }
                            t(i)
                        }
                        i()
                    }, "undefined" != typeof i && i.exports ? i.exports = o : "undefined" != typeof t && t.amd || (n.async = o)
                }()
            }).call(this, e("_process"))
        }, {
            _process: 4
        }],
        3: [function (t, e, i) {
            (function (t) {
                function e(t, e) {
                    for (var i = 0, r = t.length - 1; r >= 0; r--) {
                        var n = t[r];
                        "." === n ? t.splice(r, 1) : ".." === n ? (t.splice(r, 1), i++) : i && (t.splice(r, 1), i--)
                    }
                    if (e)
                        for (; i--; i) t.unshift("..");
                    return t
                }

                function r(t, e) {
                    if (t.filter) return t.filter(e);
                    for (var i = [], r = 0; r < t.length; r++) e(t[r], r, t) && i.push(t[r]);
                    return i
                }
                var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    s = function (t) {
                        return n.exec(t).slice(1)
                    };
                i.resolve = function () {
                    for (var i = "", n = !1, s = arguments.length - 1; s >= -1 && !n; s--) {
                        var o = s >= 0 ? arguments[s] : t.cwd();
                        if ("string" != typeof o) throw new TypeError("Arguments to path.resolve must be strings");
                        o && (i = o + "/" + i, n = "/" === o.charAt(0))
                    }
                    return i = e(r(i.split("/"), function (t) {
                        return !!t
                    }), !n).join("/"), (n ? "/" : "") + i || "."
                }, i.normalize = function (t) {
                    var n = i.isAbsolute(t),
                        s = "/" === o(t, -1);
                    return t = e(r(t.split("/"), function (t) {
                        return !!t
                    }), !n).join("/"), t || n || (t = "."), t && s && (t += "/"), (n ? "/" : "") + t
                }, i.isAbsolute = function (t) {
                    return "/" === t.charAt(0)
                }, i.join = function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    return i.normalize(r(t, function (t, e) {
                        if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                        return t
                    }).join("/"))
                }, i.relative = function (t, e) {
                    function r(t) {
                        for (var e = 0; e < t.length && "" === t[e]; e++);
                        for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                        return e > i ? [] : t.slice(e, i - e + 1)
                    }
                    t = i.resolve(t).substr(1), e = i.resolve(e).substr(1);
                    for (var n = r(t.split("/")), s = r(e.split("/")), o = Math.min(n.length, s.length), a = o, h = 0; o > h; h++)
                        if (n[h] !== s[h]) {
                            a = h;
                            break
                        }
                    for (var l = [], h = a; h < n.length; h++) l.push("..");
                    return l = l.concat(s.slice(a)), l.join("/")
                }, i.sep = "/", i.delimiter = ":", i.dirname = function (t) {
                    var e = s(t),
                        i = e[0],
                        r = e[1];
                    return i || r ? (r && (r = r.substr(0, r.length - 1)), i + r) : "."
                }, i.basename = function (t, e) {
                    var i = s(t)[2];
                    return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
                }, i.extname = function (t) {
                    return s(t)[3]
                };
                var o = "b" === "ab".substr(-1) ? function (t, e, i) {
                    return t.substr(e, i)
                } : function (t, e, i) {
                    return 0 > e && (e = t.length + e), t.substr(e, i)
                }
            }).call(this, t("_process"))
        }, {
            _process: 4
        }],
        4: [function (t, e, i) {
            function r() {
                u = !1, a.length ? l = a.concat(l) : c = -1, l.length && n()
            }

            function n() {
                if (!u) {
                    var t = setTimeout(r);
                    u = !0;
                    for (var e = l.length; e;) {
                        for (a = l, l = []; ++c < e;) a[c].run();
                        c = -1, e = l.length
                    }
                    a = null, u = !1, clearTimeout(t)
                }
            }

            function s(t, e) {
                this.fun = t, this.array = e
            }

            function o() {}
            var a, h = e.exports = {},
                l = [],
                u = !1,
                c = -1;
            h.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
                l.push(new s(t, e)), 1 !== l.length || u || setTimeout(n, 0)
            }, s.prototype.run = function () {
                this.fun.apply(null, this.array)
            }, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = o, h.addListener = o, h.once = o, h.off = o, h.removeListener = o, h.removeAllListeners = o, h.emit = o, h.binding = function (t) {
                throw new Error("process.binding is not supported")
            }, h.cwd = function () {
                return "/"
            }, h.chdir = function (t) {
                throw new Error("process.chdir is not supported")
            }, h.umask = function () {
                return 0
            }
        }, {}],
        5: [function (e, i, r) {
            (function (e) {
                ! function (n) {
                    function s(t) {
                        throw RangeError(L[t])
                    }

                    function o(t, e) {
                        for (var i = t.length, r = []; i--;) r[i] = e(t[i]);
                        return r
                    }

                    function a(t, e) {
                        var i = t.split("@"),
                            r = "";
                        i.length > 1 && (r = i[0] + "@", t = i[1]), t = t.replace(F, ".");
                        var n = t.split("."),
                            s = o(n, e).join(".");
                        return r + s
                    }

                    function h(t) {
                        for (var e, i, r = [], n = 0, s = t.length; s > n;) e = t.charCodeAt(n++), e >= 55296 && 56319 >= e && s > n ? (i = t.charCodeAt(n++), 56320 == (64512 & i) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), n--)) : r.push(e);
                        return r
                    }

                    function l(t) {
                        return o(t, function (t) {
                            var e = "";
                            return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t)
                        }).join("")
                    }

                    function u(t) {
                        return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : w
                    }

                    function c(t, e) {
                        return t + 22 + 75 * (26 > t) - ((0 != e) << 5)
                    }

                    function p(t, e, i) {
                        var r = 0;
                        for (t = i ? B(t / A) : t >> 1, t += B(t / e); t > I * S >> 1; r += w) t = B(t / I);
                        return B(r + (I + 1) * t / (t + C))
                    }

                    function d(t) {
                        var e, i, r, n, o, a, h, c, d, f, g = [],
                            v = t.length,
                            m = 0,
                            y = R,
                            x = M;
                        for (i = t.lastIndexOf(P), 0 > i && (i = 0), r = 0; i > r; ++r) t.charCodeAt(r) >= 128 && s("not-basic"), g.push(t.charCodeAt(r));
                        for (n = i > 0 ? i + 1 : 0; v > n;) {
                            for (o = m, a = 1, h = w; n >= v && s("invalid-input"), c = u(t.charCodeAt(n++)), (c >= w || c > B((T - m) / a)) && s("overflow"), m += c * a, d = x >= h ? E : h >= x + S ? S : h - x, !(d > c); h += w) f = w - d, a > B(T / f) && s("overflow"), a *= f;
                            e = g.length + 1, x = p(m - o, e, 0 == o), B(m / e) > T - y && s("overflow"), y += B(m / e), m %= e, g.splice(m++, 0, y)
                        }
                        return l(g)
                    }

                    function f(t) {
                        var e, i, r, n, o, a, l, u, d, f, g, v, m, y, x, _ = [];
                        for (t = h(t), v = t.length, e = R, i = 0, o = M, a = 0; v > a; ++a) g = t[a], 128 > g && _.push(N(g));
                        for (r = n = _.length, n && _.push(P); v > r;) {
                            for (l = T, a = 0; v > a; ++a) g = t[a], g >= e && l > g && (l = g);
                            for (m = r + 1, l - e > B((T - i) / m) && s("overflow"), i += (l - e) * m, e = l, a = 0; v > a; ++a)
                                if (g = t[a], e > g && ++i > T && s("overflow"), g == e) {
                                    for (u = i, d = w; f = o >= d ? E : d >= o + S ? S : d - o, !(f > u); d += w) x = u - f, y = w - f, _.push(N(c(f + x % y, 0))), u = B(x / y);
                                    _.push(N(c(u, 0))), o = p(i, m, r == n), i = 0, ++r
                                }++i, ++e
                        }
                        return _.join("")
                    }

                    function g(t) {
                        return a(t, function (t) {
                            return D.test(t) ? d(t.slice(4).toLowerCase()) : t
                        })
                    }

                    function v(t) {
                        return a(t, function (t) {
                            return O.test(t) ? "xn--" + f(t) : t
                        })
                    }
                    var m = "object" == typeof r && r && !r.nodeType && r,
                        y = "object" == typeof i && i && !i.nodeType && i,
                        x = "object" == typeof e && e;
                    (x.global === x || x.window === x || x.self === x) && (n = x);
                    var _, b, T = 2147483647,
                        w = 36,
                        E = 1,
                        S = 26,
                        C = 38,
                        A = 700,
                        M = 72,
                        R = 128,
                        P = "-",
                        D = /^xn--/,
                        O = /[^\x20-\x7E]/,
                        F = /[\x2E\u3002\uFF0E\uFF61]/g,
                        L = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        I = w - E,
                        B = Math.floor,
                        N = String.fromCharCode;
                    if (_ = {
                            version: "1.3.2",
                            ucs2: {
                                decode: h,
                                encode: l
                            },
                            decode: d,
                            encode: f,
                            toASCII: v,
                            toUnicode: g
                        }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function () {
                        return _
                    });
                    else if (m && y)
                        if (i.exports == m) y.exports = _;
                        else
                            for (b in _) _.hasOwnProperty(b) && (m[b] = _[b]);
                    else n.punycode = _
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        6: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            e.exports = function (t, e, i, s) {
                e = e || "&", i = i || "=";
                var o = {};
                if ("string" != typeof t || 0 === t.length) return o;
                var a = /\+/g;
                t = t.split(e);
                var h = 1e3;
                s && "number" == typeof s.maxKeys && (h = s.maxKeys);
                var l = t.length;
                h > 0 && l > h && (l = h);
                for (var u = 0; l > u; ++u) {
                    var c, p, d, f, g = t[u].replace(a, "%20"),
                        v = g.indexOf(i);
                    v >= 0 ? (c = g.substr(0, v), p = g.substr(v + 1)) : (c = g, p = ""), d = decodeURIComponent(c), f = decodeURIComponent(p), r(o, d) ? n(o[d]) ? o[d].push(f) : o[d] = [o[d], f] : o[d] = f
                }
                return o
            };
            var n = Array.isArray || function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
        }, {}],
        7: [function (t, e, i) {
            "use strict";

            function r(t, e) {
                if (t.map) return t.map(e);
                for (var i = [], r = 0; r < t.length; r++) i.push(e(t[r], r));
                return i
            }
            var n = function (t) {
                switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
                }
            };
            e.exports = function (t, e, i, a) {
                return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? r(o(t), function (o) {
                    var a = encodeURIComponent(n(o)) + i;
                    return s(t[o]) ? r(t[o], function (t) {
                        return a + encodeURIComponent(n(t))
                    }).join(e) : a + encodeURIComponent(n(t[o]))
                }).join(e) : a ? encodeURIComponent(n(a)) + i + encodeURIComponent(n(t)) : ""
            };
            var s = Array.isArray || function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                },
                o = Object.keys || function (t) {
                    var e = [];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
                    return e
                }
        }, {}],
        8: [function (t, e, i) {
            "use strict";
            i.decode = i.parse = t("./decode"), i.encode = i.stringify = t("./encode")
        }, {
            "./decode": 6,
            "./encode": 7
        }],
        9: [function (t, e, i) {
            function r() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function n(t, e, i) {
                if (t && l(t) && t instanceof r) return t;
                var n = new r;
                return n.parse(t, e, i), n
            }

            function s(t) {
                return h(t) && (t = n(t)), t instanceof r ? t.format() : r.prototype.format.call(t)
            }

            function o(t, e) {
                return n(t, !1, !0).resolve(e)
            }

            function a(t, e) {
                return t ? n(t, !1, !0).resolveObject(e) : e
            }

            function h(t) {
                return "string" == typeof t
            }

            function l(t) {
                return "object" == typeof t && null !== t
            }

            function u(t) {
                return null === t
            }

            function c(t) {
                return null == t
            }
            var p = t("punycode");
            i.parse = n, i.resolve = o, i.resolveObject = a, i.format = s, i.Url = r;
            var d = /^([a-z0-9.+-]+:)/i,
                f = /:[0-9]*$/,
                g = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
                v = ["{", "}", "|", "\\", "^", "`"].concat(g),
                m = ["'"].concat(v),
                y = ["%", "/", "?", ";", "#"].concat(m),
                x = ["/", "?", "#"],
                _ = 255,
                b = /^[a-z0-9A-Z_-]{0,63}$/,
                T = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
                w = {
                    javascript: !0,
                    "javascript:": !0
                },
                E = {
                    javascript: !0,
                    "javascript:": !0
                },
                S = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                C = t("querystring");
            r.prototype.parse = function (t, e, i) {
                if (!h(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
                var r = t;
                r = r.trim();
                var n = d.exec(r);
                if (n) {
                    n = n[0];
                    var s = n.toLowerCase();
                    this.protocol = s, r = r.substr(n.length)
                }
                if (i || n || r.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var o = "//" === r.substr(0, 2);
                    !o || n && E[n] || (r = r.substr(2), this.slashes = !0)
                }
                if (!E[n] && (o || n && !S[n])) {
                    for (var a = -1, l = 0; l < x.length; l++) {
                        var u = r.indexOf(x[l]); - 1 !== u && (-1 === a || a > u) && (a = u)
                    }
                    var c, f;
                    f = -1 === a ? r.lastIndexOf("@") : r.lastIndexOf("@", a), -1 !== f && (c = r.slice(0, f), r = r.slice(f + 1), this.auth = decodeURIComponent(c)), a = -1;
                    for (var l = 0; l < y.length; l++) {
                        var u = r.indexOf(y[l]); - 1 !== u && (-1 === a || a > u) && (a = u)
                    } - 1 === a && (a = r.length), this.host = r.slice(0, a), r = r.slice(a), this.parseHost(), this.hostname = this.hostname || "";
                    var g = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                    if (!g)
                        for (var v = this.hostname.split(/\./), l = 0, A = v.length; A > l; l++) {
                            var M = v[l];
                            if (M && !M.match(b)) {
                                for (var R = "", P = 0, D = M.length; D > P; P++) R += M.charCodeAt(P) > 127 ? "x" : M[P];
                                if (!R.match(b)) {
                                    var O = v.slice(0, l),
                                        F = v.slice(l + 1),
                                        L = M.match(T);
                                    L && (O.push(L[1]), F.unshift(L[2])), F.length && (r = "/" + F.join(".") + r), this.hostname = O.join(".");
                                    break
                                }
                            }
                        }
                    if (this.hostname.length > _ ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !g) {
                        for (var I = this.hostname.split("."), B = [], l = 0; l < I.length; ++l) {
                            var N = I[l];
                            B.push(N.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(N) : N)
                        }
                        this.hostname = B.join(".")
                    }
                    var k = this.port ? ":" + this.port : "",
                        U = this.hostname || "";
                    this.host = U + k, this.href += this.host, g && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== r[0] && (r = "/" + r))
                }
                if (!w[s])
                    for (var l = 0, A = m.length; A > l; l++) {
                        var j = m[l],
                            X = encodeURIComponent(j);
                        X === j && (X = escape(j)), r = r.split(j).join(X)
                    }
                var W = r.indexOf("#"); - 1 !== W && (this.hash = r.substr(W), r = r.slice(0, W));
                var G = r.indexOf("?");
                if (-1 !== G ? (this.search = r.substr(G), this.query = r.substr(G + 1), e && (this.query = C.parse(this.query)), r = r.slice(0, G)) : e && (this.search = "", this.query = {}), r && (this.pathname = r), S[s] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var k = this.pathname || "",
                        N = this.search || "";
                    this.path = k + N
                }
                return this.href = this.format(), this
            }, r.prototype.format = function () {
                var t = this.auth || "";
                t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
                var e = this.protocol || "",
                    i = this.pathname || "",
                    r = this.hash || "",
                    n = !1,
                    s = "";
                this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && l(this.query) && Object.keys(this.query).length && (s = C.stringify(this.query));
                var o = this.search || s && "?" + s || "";
                return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || S[e]) && n !== !1 ? (n = "//" + (n || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""), r && "#" !== r.charAt(0) && (r = "#" + r), o && "?" !== o.charAt(0) && (o = "?" + o), i = i.replace(/[?#]/g, function (t) {
                    return encodeURIComponent(t)
                }), o = o.replace("#", "%23"), e + n + i + o + r
            }, r.prototype.resolve = function (t) {
                return this.resolveObject(n(t, !1, !0)).format()
            }, r.prototype.resolveObject = function (t) {
                if (h(t)) {
                    var e = new r;
                    e.parse(t, !1, !0), t = e
                }
                var i = new r;
                if (Object.keys(this).forEach(function (t) {
                        i[t] = this[t]
                    }, this), i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
                if (t.slashes && !t.protocol) return Object.keys(t).forEach(function (e) {
                    "protocol" !== e && (i[e] = t[e])
                }), S[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i;
                if (t.protocol && t.protocol !== i.protocol) {
                    if (!S[t.protocol]) return Object.keys(t).forEach(function (e) {
                        i[e] = t[e]
                    }), i.href = i.format(), i;
                    if (i.protocol = t.protocol, t.host || E[t.protocol]) i.pathname = t.pathname;
                    else {
                        for (var n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););
                        t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), i.pathname = n.join("/")
                    }
                    if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                        var s = i.pathname || "",
                            o = i.search || "";
                        i.path = s + o
                    }
                    return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
                }
                var a = i.pathname && "/" === i.pathname.charAt(0),
                    l = t.host || t.pathname && "/" === t.pathname.charAt(0),
                    p = l || a || i.host && t.pathname,
                    d = p,
                    f = i.pathname && i.pathname.split("/") || [],
                    n = t.pathname && t.pathname.split("/") || [],
                    g = i.protocol && !S[i.protocol];
                if (g && (i.hostname = "", i.port = null, i.host && ("" === f[0] ? f[0] = i.host : f.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === n[0] ? n[0] = t.host : n.unshift(t.host)), t.host = null), p = p && ("" === n[0] || "" === f[0])), l) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, f = n;
                else if (n.length) f || (f = []), f.pop(), f = f.concat(n), i.search = t.search, i.query = t.query;
                else if (!c(t.search)) {
                    if (g) {
                        i.hostname = i.host = f.shift();
                        var v = i.host && i.host.indexOf("@") > 0 ? i.host.split("@") : !1;
                        v && (i.auth = v.shift(), i.host = i.hostname = v.shift())
                    }
                    return i.search = t.search, i.query = t.query, u(i.pathname) && u(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
                }
                if (!f.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
                for (var m = f.slice(-1)[0], y = (i.host || t.host) && ("." === m || ".." === m) || "" === m, x = 0, _ = f.length; _ >= 0; _--) m = f[_], "." == m ? f.splice(_, 1) : ".." === m ? (f.splice(_, 1), x++) : x && (f.splice(_, 1), x--);
                if (!p && !d)
                    for (; x--; x) f.unshift("..");
                !p || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), y && "/" !== f.join("/").substr(-1) && f.push("");
                var b = "" === f[0] || f[0] && "/" === f[0].charAt(0);
                if (g) {
                    i.hostname = i.host = b ? "" : f.length ? f.shift() : "";
                    var v = i.host && i.host.indexOf("@") > 0 ? i.host.split("@") : !1;
                    v && (i.auth = v.shift(), i.host = i.hostname = v.shift())
                }
                return p = p || i.host && f.length, p && !b && f.unshift(""), f.length ? i.pathname = f.join("/") : (i.pathname = null, i.path = null), u(i.pathname) && u(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
            }, r.prototype.parseHost = function () {
                var t = this.host,
                    e = f.exec(t);
                e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
            }
        }, {
            punycode: 5,
            querystring: 8
        }],
        10: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                i = i || 2;
                var r = e && e.length,
                    a = r ? e[0] * i : t.length,
                    h = s(t, n(t, 0, a, i, !0)),
                    l = [];
                if (!h) return l;
                var c, p, d, f, g, v, m;
                if (r && (h = u(t, e, h, i)), t.length > 80 * i) {
                    c = d = t[0], p = f = t[1];
                    for (var y = i; a > y; y += i) g = t[y], v = t[y + 1], c > g && (c = g), p > v && (p = v), g > d && (d = g), v > f && (f = v);
                    m = Math.max(d - c, f - p)
                }
                return o(t, h, l, i, c, p, m), l
            }

            function n(t, e, i, r, n) {
                var s, o, a, h = 0;
                for (s = e, o = i - r; i > s; s += r) h += (t[o] - t[s]) * (t[s + 1] + t[o + 1]), o = s;
                if (n === h > 0)
                    for (s = e; i > s; s += r) a = S(s, a);
                else
                    for (s = i - r; s >= e; s -= r) a = S(s, a);
                return a
            }

            function s(t, e, i) {
                i || (i = e);
                var r, n = e;
                do
                    if (r = !1, n.steiner || !x(t, n.i, n.next.i) && 0 !== y(t, n.prev.i, n.i, n.next.i)) n = n.next;
                    else {
                        if (n.prev.next = n.next, n.next.prev = n.prev, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ), n = i = n.prev, n === n.next) return null;
                        r = !0
                    }
                while (r || n !== i);
                return i
            }

            function o(t, e, i, r, n, u, c, p) {
                if (e) {
                    p || void 0 === n || d(t, e, n, u, c);
                    for (var f, g, v = e; e.prev !== e.next;)
                        if (f = e.prev, g = e.next, a(t, e, n, u, c)) i.push(f.i / r), i.push(e.i / r), i.push(g.i / r), g.prev = f, f.next = g, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), e = g.next, v = g.next;
                        else if (e = g, e === v) {
                        p ? 1 === p ? (e = h(t, e, i, r), o(t, e, i, r, n, u, c, 2)) : 2 === p && l(t, e, i, r, n, u, c) : o(t, s(t, e), i, r, n, u, c, 1);
                        break
                    }
                }
            }

            function a(t, e, i, r, n) {
                var s = e.prev.i,
                    o = e.i,
                    a = e.next.i,
                    h = t[s],
                    l = t[s + 1],
                    u = t[o],
                    c = t[o + 1],
                    p = t[a],
                    d = t[a + 1],
                    f = h * c - l * u,
                    v = h * d - l * p,
                    m = p * c - d * u,
                    y = f - v - m;
                if (0 >= y) return !1;
                var x, _, b, T, w, E, S, C = d - l,
                    A = h - p,
                    M = l - c,
                    R = u - h;
                if (void 0 !== i) {
                    var P = u > h ? p > h ? h : p : p > u ? u : p,
                        D = c > l ? d > l ? l : d : d > c ? c : d,
                        O = h > u ? h > p ? h : p : u > p ? u : p,
                        F = l > c ? l > d ? l : d : c > d ? c : d,
                        L = g(P, D, i, r, n),
                        I = g(O, F, i, r, n);
                    for (S = e.nextZ; S && S.z <= I;)
                        if (x = S.i, S = S.nextZ, x !== s && x !== a && (_ = t[x], b = t[x + 1], T = C * _ + A * b - v, T >= 0 && (w = M * _ + R * b + f, w >= 0 && (E = y - T - w, E >= 0 && (T && w || T && E || w && E))))) return !1;
                    for (S = e.prevZ; S && S.z >= L;)
                        if (x = S.i, S = S.prevZ, x !== s && x !== a && (_ = t[x], b = t[x + 1], T = C * _ + A * b - v, T >= 0 && (w = M * _ + R * b + f, w >= 0 && (E = y - T - w, E >= 0 && (T && w || T && E || w && E))))) return !1
                } else
                    for (S = e.next.next; S !== e.prev;)
                        if (x = S.i, S = S.next, _ = t[x], b = t[x + 1], T = C * _ + A * b - v, T >= 0 && (w = M * _ + R * b + f, w >= 0 && (E = y - T - w, E >= 0 && (T && w || T && E || w && E)))) return !1; return !0
            }

            function h(t, e, i, r) {
                var n = e;
                do {
                    var s = n.prev,
                        o = n.next.next;
                    if (s.i !== o.i && _(t, s.i, n.i, n.next.i, o.i) && T(t, s, o) && T(t, o, s)) {
                        i.push(s.i / r), i.push(n.i / r), i.push(o.i / r), s.next = o, o.prev = s;
                        var a = n.prevZ,
                            h = n.nextZ && n.nextZ.nextZ;
                        a && (a.nextZ = h), h && (h.prevZ = a), n = e = o
                    }
                    n = n.next
                } while (n !== e);
                return n
            }

            function l(t, e, i, r, n, a, h) {
                var l = e;
                do {
                    for (var u = l.next.next; u !== l.prev;) {
                        if (l.i !== u.i && m(t, l, u)) {
                            var c = E(l, u);
                            return l = s(t, l, l.next), c = s(t, c, c.next), o(t, l, i, r, n, a, h), void o(t, c, i, r, n, a, h)
                        }
                        u = u.next
                    }
                    l = l.next
                } while (l !== e)
            }

            function u(t, e, i, r) {
                var o, a, h, l, u, p = [];
                for (o = 0, a = e.length; a > o; o++) h = e[o] * r, l = a - 1 > o ? e[o + 1] * r : t.length, u = n(t, h, l, r, !1), u === u.next && (u.steiner = !0), u = s(t, u), u && p.push(v(t, u));
                for (p.sort(function (e, i) {
                        return t[e.i] - t[i.i]
                    }), o = 0; o < p.length; o++) c(t, p[o], i), i = s(t, i, i.next);
                return i
            }

            function c(t, e, i) {
                if (i = p(t, e, i)) {
                    var r = E(i, e);
                    s(t, r, r.next)
                }
            }

            function p(t, e, i) {
                var r, n, s, o = i,
                    a = e.i,
                    h = t[a],
                    l = t[a + 1],
                    u = -(1 / 0);
                do {
                    if (n = o.i, s = o.next.i, l <= t[n + 1] && l >= t[s + 1]) {
                        var c = t[n] + (l - t[n + 1]) * (t[s] - t[n]) / (t[s + 1] - t[n + 1]);
                        h >= c && c > u && (u = c, r = t[n] < t[s] ? o : o.next)
                    }
                    o = o.next
                } while (o !== i);
                if (!r) return null;
                var p, d, f, g, v, m, y = t[r.i],
                    x = t[r.i + 1],
                    _ = h * x - l * y,
                    b = h * l - l * u,
                    w = l - l,
                    E = h - u,
                    S = l - x,
                    C = y - h,
                    A = _ - b - (u * x - l * y),
                    M = 0 >= A ? -1 : 1,
                    R = r,
                    P = 1 / 0;
                for (o = r.next; o !== R;) p = t[o.i], d = t[o.i + 1], f = h - p, f >= 0 && p >= y && (g = (w * p + E * d - b) * M, g >= 0 && (v = (S * p + C * d + _) * M, v >= 0 && A * M - g - v >= 0 && (m = Math.abs(l - d) / f, P > m && T(t, o, e) && (r = o, P = m)))), o = o.next;
                return r
            }

            function d(t, e, i, r, n) {
                var s = e;
                do null === s.z && (s.z = g(t[s.i], t[s.i + 1], i, r, n)), s.prevZ = s.prev, s.nextZ = s.next, s = s.next; while (s !== e);
                s.prevZ.nextZ = null, s.prevZ = null, f(s)
            }

            function f(t) {
                var e, i, r, n, s, o, a, h, l = 1;
                do {
                    for (i = t, t = null, s = null, o = 0; i;) {
                        for (o++, r = i, a = 0, e = 0; l > e && (a++, r = r.nextZ, r); e++);
                        for (h = l; a > 0 || h > 0 && r;) 0 === a ? (n = r, r = r.nextZ, h--) : 0 !== h && r ? i.z <= r.z ? (n = i, i = i.nextZ, a--) : (n = r, r = r.nextZ, h--) : (n = i, i = i.nextZ, a--), s ? s.nextZ = n : t = n, n.prevZ = s, s = n;
                        i = r
                    }
                    s.nextZ = null, l *= 2
                } while (o > 1);
                return t
            }

            function g(t, e, i, r, n) {
                return t = 1e3 * (t - i) / n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 1e3 * (e - r) / n, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
            }

            function v(t, e) {
                var i = e,
                    r = e;
                do t[i.i] < t[r.i] && (r = i), i = i.next; while (i !== e);
                return r
            }

            function m(t, e, i) {
                return !b(t, e, e.i, i.i) && T(t, e, i) && T(t, i, e) && w(t, e, e.i, i.i);
            }

            function y(t, e, i, r) {
                var n = (t[i + 1] - t[e + 1]) * (t[r] - t[i]) - (t[i] - t[e]) * (t[r + 1] - t[i + 1]);
                return n > 0 ? 1 : 0 > n ? -1 : 0
            }

            function x(t, e, i) {
                return t[e] === t[i] && t[e + 1] === t[i + 1]
            }

            function _(t, e, i, r, n) {
                return y(t, e, i, r) !== y(t, e, i, n) && y(t, r, n, e) !== y(t, r, n, i)
            }

            function b(t, e, i, r) {
                var n = e;
                do {
                    var s = n.i,
                        o = n.next.i;
                    if (s !== i && o !== i && s !== r && o !== r && _(t, s, o, i, r)) return !0;
                    n = n.next
                } while (n !== e);
                return !1
            }

            function T(t, e, i) {
                return -1 === y(t, e.prev.i, e.i, e.next.i) ? -1 !== y(t, e.i, i.i, e.next.i) && -1 !== y(t, e.i, e.prev.i, i.i) : -1 === y(t, e.i, i.i, e.prev.i) || -1 === y(t, e.i, e.next.i, i.i)
            }

            function w(t, e, i, r) {
                var n = e,
                    s = !1,
                    o = (t[i] + t[r]) / 2,
                    a = (t[i + 1] + t[r + 1]) / 2;
                do {
                    var h = n.i,
                        l = n.next.i;
                    t[h + 1] > a != t[l + 1] > a && o < (t[l] - t[h]) * (a - t[h + 1]) / (t[l + 1] - t[h + 1]) + t[h] && (s = !s), n = n.next
                } while (n !== e);
                return s
            }

            function E(t, e) {
                var i = new C(t.i),
                    r = new C(e.i),
                    n = t.next,
                    s = e.prev;
                return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, s.next = r, r.prev = s, r
            }

            function S(t, e) {
                var i = new C(t);
                return e ? (i.next = e.next, i.prev = e, e.next.prev = i, e.next = i) : (i.prev = i, i.next = i), i
            }

            function C(t) {
                this.i = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }
            e.exports = r
        }, {}],
        11: [function (t, e, i) {
            "use strict";

            function r(t, e, i) {
                this.fn = t, this.context = e, this.once = i || !1
            }

            function n() {}
            var s = "function" != typeof Object.create ? "~" : !1;
            n.prototype._events = void 0, n.prototype.listeners = function (t, e) {
                var i = s ? s + t : t,
                    r = this._events && this._events[i];
                if (e) return !!r;
                if (!r) return [];
                if (this._events[i].fn) return [this._events[i].fn];
                for (var n = 0, o = this._events[i].length, a = new Array(o); o > n; n++) a[n] = this._events[i][n].fn;
                return a
            }, n.prototype.emit = function (t, e, i, r, n, o) {
                var a = s ? s + t : t;
                if (!this._events || !this._events[a]) return !1;
                var h, l, u = this._events[a],
                    c = arguments.length;
                if ("function" == typeof u.fn) {
                    switch (u.once && this.removeListener(t, u.fn, void 0, !0), c) {
                    case 1:
                        return u.fn.call(u.context), !0;
                    case 2:
                        return u.fn.call(u.context, e), !0;
                    case 3:
                        return u.fn.call(u.context, e, i), !0;
                    case 4:
                        return u.fn.call(u.context, e, i, r), !0;
                    case 5:
                        return u.fn.call(u.context, e, i, r, n), !0;
                    case 6:
                        return u.fn.call(u.context, e, i, r, n, o), !0
                    }
                    for (l = 1, h = new Array(c - 1); c > l; l++) h[l - 1] = arguments[l];
                    u.fn.apply(u.context, h)
                } else {
                    var p, d = u.length;
                    for (l = 0; d > l; l++) switch (u[l].once && this.removeListener(t, u[l].fn, void 0, !0), c) {
                    case 1:
                        u[l].fn.call(u[l].context);
                        break;
                    case 2:
                        u[l].fn.call(u[l].context, e);
                        break;
                    case 3:
                        u[l].fn.call(u[l].context, e, i);
                        break;
                    default:
                        if (!h)
                            for (p = 1, h = new Array(c - 1); c > p; p++) h[p - 1] = arguments[p];
                        u[l].fn.apply(u[l].context, h)
                    }
                }
                return !0
            }, n.prototype.on = function (t, e, i) {
                var n = new r(e, i || this),
                    o = s ? s + t : t;
                return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : this._events[o] = n, this
            }, n.prototype.once = function (t, e, i) {
                var n = new r(e, i || this, !0),
                    o = s ? s + t : t;
                return this._events || (this._events = s ? {} : Object.create(null)), this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], n] : this._events[o].push(n) : this._events[o] = n, this
            }, n.prototype.removeListener = function (t, e, i, r) {
                var n = s ? s + t : t;
                if (!this._events || !this._events[n]) return this;
                var o = this._events[n],
                    a = [];
                if (e)
                    if (o.fn)(o.fn !== e || r && !o.once || i && o.context !== i) && a.push(o);
                    else
                        for (var h = 0, l = o.length; l > h; h++)(o[h].fn !== e || r && !o[h].once || i && o[h].context !== i) && a.push(o[h]);
                return a.length ? this._events[n] = 1 === a.length ? a[0] : a : delete this._events[n], this
            }, n.prototype.removeAllListeners = function (t) {
                return this._events ? (t ? delete this._events[s ? s + t : t] : this._events = s ? {} : Object.create(null), this) : this
            }, n.prototype.off = n.prototype.removeListener, n.prototype.addListener = n.prototype.on, n.prototype.setMaxListeners = function () {
                return this
            }, n.prefixed = s, e.exports = n
        }, {}],
        12: [function (t, e, i) {
            "use strict";

            function r(t) {
                if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(t)
            }
            e.exports = Object.assign || function (t, e) {
                for (var i, n, s = r(t), o = 1; o < arguments.length; o++) {
                    i = arguments[o], n = Object.keys(Object(i));
                    for (var a = 0; a < n.length; a++) s[n[a]] = i[n[a]]
                }
                return s
            }
        }, {}],
        13: [function (t, e, i) {
            arguments[4][11][0].apply(i, arguments)
        }, {
            dup: 11
        }],
        14: [function (t, e, i) {
            function r(t, e) {
                a.call(this), e = e || 10, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._boundOnLoad = this._onLoad.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = n.queue(this._boundLoadResource, e), this.resources = {}
            }
            var n = t("async"),
                s = t("url"),
                o = t("./Resource"),
                a = t("eventemitter3");
            r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.add = r.prototype.enqueue = function (t, e, i, r) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) this.add(t[n]);
                    return this
                }
                if ("object" == typeof t && (r = e || t.callback || t.onComplete, i = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof i && (r = i, i = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.');
                return e = this._handleBaseUrl(e), this.resources[t] = new o(t, e, i), "function" == typeof r && this.resources[t].once("afterMiddleware", r), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = 100 / this._buffer.length), this
            }, r.prototype._handleBaseUrl = function (t) {
                var e = s.parse(t);
                return e.protocol || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && t.lastIndexOf("/") !== t.length - 1 ? this.baseUrl + "/" + t : this.baseUrl + t
            }, r.prototype.before = r.prototype.pre = function (t) {
                return this._beforeMiddleware.push(t), this
            }, r.prototype.after = r.prototype.use = function (t) {
                return this._afterMiddleware.push(t), this
            }, r.prototype.reset = function () {
                this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1, this.resources = {}
            }, r.prototype.load = function (t) {
                if ("function" == typeof t && this.once("complete", t), this._queue.started) return this;
                this.emit("start", this);
                for (var e = 0; e < this._buffer.length; ++e) this._queue.push(this._buffer[e]);
                return this._buffer.length = 0, this
            }, r.prototype._loadResource = function (t, e) {
                var i = this;
                t._dequeue = e, this._runMiddleware(t, this._beforeMiddleware, function () {
                    t.load(i._boundOnLoad)
                })
            }, r.prototype._onComplete = function () {
                this.emit("complete", this, this.resources)
            }, r.prototype._onLoad = function (t) {
                this.progress += this._progressChunk, this.emit("progress", this, t), t.error ? this.emit("error", t.error, this, t) : this.emit("load", this, t), this._runMiddleware(t, this._afterMiddleware, function () {
                    t.emit("afterMiddleware", t), this._numToLoad--, 0 === this._numToLoad && this._onComplete()
                }), t._dequeue()
            }, r.prototype._runMiddleware = function (t, e, i) {
                var r = this;
                n.eachSeries(e, function (e, i) {
                    e.call(r, t, i)
                }, i.bind(this, t))
            }, r.LOAD_TYPE = o.LOAD_TYPE, r.XHR_READY_STATE = o.XHR_READY_STATE, r.XHR_RESPONSE_TYPE = o.XHR_RESPONSE_TYPE
        }, {
            "./Resource": 15,
            async: 2,
            eventemitter3: 13,
            url: 9
        }],
        15: [function (t, e, i) {
            function r(t, e, i) {
                if (o.call(this), i = i || {}, "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = i.crossOrigin === !0 ? "anonymous" : null, this.loadType = i.loadType || this._determineLoadType(), this.xhrType = i.xhrType, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this)
            }

            function n(t) {
                return t.toString().replace("object ", "")
            }

            function s(t, e, i) {
                e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
            }
            var o = t("eventemitter3"),
                a = t("url"),
                h = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                l = null;
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.complete = function () {
                this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError), this.data.removeEventListener("load", this._boundComplete), this.data.removeEventListener("progress", this._boundOnProgress), this.data.removeEventListener("canplaythrough", this._boundComplete)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError), this.xhr.removeEventListener("abort", this._boundXhrOnAbort), this.xhr.removeEventListener("progress", this._boundOnProgress), this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.emit("complete", this)
            }, r.prototype.load = function (t) {
                switch (this.emit("start", this), t && this.once("complete", t), "string" != typeof this.crossOrigin && (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                case r.LOAD_TYPE.IMAGE:
                    this._loadImage();
                    break;
                case r.LOAD_TYPE.AUDIO:
                    this._loadElement("audio");
                    break;
                case r.LOAD_TYPE.VIDEO:
                    this._loadElement("video");
                    break;
                case r.LOAD_TYPE.XHR:
                default:
                    h && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                }
            }, r.prototype._loadImage = function () {
                this.data = new Image, this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.data.src = this.url, this.isImage = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
            }, r.prototype._loadElement = function (t) {
                if (this.data = document.createElement(t), Array.isArray(this.url))
                    for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
                else this.data.appendChild(this._createSource(t, this.url));
                this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
            }, r.prototype._loadXhr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XMLHttpRequest;
                t.open("GET", this.url, !0), this.xhrType === r.XHR_RESPONSE_TYPE.JSON || this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT ? t.responseType = r.XHR_RESPONSE_TYPE.TEXT : t.responseType = this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send()
            }, r.prototype._loadXdr = function () {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function () {
                    t.send()
                }, 0)
            }, r.prototype._createSource = function (t, e, i) {
                i || (i = t + "/" + e.substr(e.lastIndexOf(".") + 1));
                var r = document.createElement("source");
                return r.src = e, r.type = i, r
            }, r.prototype._onError = function (t) {
                this.error = new Error("Failed to load element using " + t.target.nodeName), this.complete()
            }, r.prototype._onProgress = function (t) {
                t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total)
            }, r.prototype._xhrOnError = function () {
                this.error = new Error(n(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'), this.complete()
            }, r.prototype._xhrOnAbort = function () {
                this.error = new Error(n(this.xhr) + " Request was aborted by the user."), this.complete()
            }, r.prototype._xdrOnTimeout = function () {
                this.error = new Error(n(this.xhr) + " Request timed out."), this.complete()
            }, r.prototype._xhrOnLoad = function () {
                var t = this.xhr,
                    e = void 0 !== t.status ? t.status : 200;
                if (200 === e || 204 === e || 0 === e && t.responseText.length > 0)
                    if (this.xhrType === r.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
                    else if (this.xhrType === r.XHR_RESPONSE_TYPE.JSON) try {
                        this.data = JSON.parse(t.responseText), this.isJson = !0
                    } catch (i) {
                        this.error = new Error("Error trying to parse loaded json:", i)
                    } else if (this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT) try {
                        if (window.DOMParser) {
                            var n = new DOMParser;
                            this.data = n.parseFromString(t.responseText, "text/xml")
                        } else {
                            var s = document.createElement("div");
                            s.innerHTML = t.responseText, this.data = s
                        }
                        this.isXml = !0
                    } catch (i) {
                        this.error = new Error("Error trying to parse loaded xml:", i)
                    } else this.data = t.response || t.responseText;
                    else this.error = new Error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
                this.complete()
            }, r.prototype._determineCrossOrigin = function (t, e) {
                if (0 === t.indexOf("data:")) return "";
                e = e || window.location, l || (l = document.createElement("a")), l.href = t, t = a.parse(l.href);
                var i = !t.port && "" === e.port || t.port === e.port;
                return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
            }, r.prototype._determineXhrType = function () {
                return r._xhrTypeMap[this._getExtension()] || r.XHR_RESPONSE_TYPE.TEXT
            }, r.prototype._determineLoadType = function () {
                return r._loadTypeMap[this._getExtension()] || r.LOAD_TYPE.XHR
            }, r.prototype._getExtension = function () {
                var t, e = this.url;
                if (this.isDataUrl) {
                    var i = e.indexOf("/");
                    t = e.substring(i + 1, e.indexOf(";", i))
                } else t = e.substring(e.lastIndexOf(".") + 1);
                return t
            }, r.prototype._getMimeFromXhrType = function (t) {
                switch (t) {
                case r.XHR_RESPONSE_TYPE.BUFFER:
                    return "application/octet-binary";
                case r.XHR_RESPONSE_TYPE.BLOB:
                    return "application/blob";
                case r.XHR_RESPONSE_TYPE.DOCUMENT:
                    return "application/xml";
                case r.XHR_RESPONSE_TYPE.JSON:
                    return "application/json";
                case r.XHR_RESPONSE_TYPE.DEFAULT:
                case r.XHR_RESPONSE_TYPE.TEXT:
                default:
                    return "text/plain"
                }
            }, r.LOAD_TYPE = {
                XHR: 1,
                IMAGE: 2,
                AUDIO: 3,
                VIDEO: 4
            }, r.XHR_READY_STATE = {
                UNSENT: 0,
                OPENED: 1,
                HEADERS_RECEIVED: 2,
                LOADING: 3,
                DONE: 4
            }, r.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            }, r._loadTypeMap = {
                gif: r.LOAD_TYPE.IMAGE,
                png: r.LOAD_TYPE.IMAGE,
                bmp: r.LOAD_TYPE.IMAGE,
                jpg: r.LOAD_TYPE.IMAGE,
                jpeg: r.LOAD_TYPE.IMAGE,
                tif: r.LOAD_TYPE.IMAGE,
                tiff: r.LOAD_TYPE.IMAGE,
                webp: r.LOAD_TYPE.IMAGE,
                tga: r.LOAD_TYPE.IMAGE
            }, r._xhrTypeMap = {
                xhtml: r.XHR_RESPONSE_TYPE.DOCUMENT,
                html: r.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: r.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: r.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: r.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: r.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: r.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: r.XHR_RESPONSE_TYPE.BLOB,
                png: r.XHR_RESPONSE_TYPE.BLOB,
                bmp: r.XHR_RESPONSE_TYPE.BLOB,
                jpg: r.XHR_RESPONSE_TYPE.BLOB,
                jpeg: r.XHR_RESPONSE_TYPE.BLOB,
                tif: r.XHR_RESPONSE_TYPE.BLOB,
                tiff: r.XHR_RESPONSE_TYPE.BLOB,
                webp: r.XHR_RESPONSE_TYPE.BLOB,
                tga: r.XHR_RESPONSE_TYPE.BLOB,
                json: r.XHR_RESPONSE_TYPE.JSON,
                text: r.XHR_RESPONSE_TYPE.TEXT,
                txt: r.XHR_RESPONSE_TYPE.TEXT
            }, r.setExtensionLoadType = function (t, e) {
                s(r._loadTypeMap, t, e)
            }, r.setExtensionXhrType = function (t, e) {
                s(r._xhrTypeMap, t, e)
            }
        }, {
            eventemitter3: 13,
            url: 9
        }],
        16: [function (t, e, i) {
            e.exports = {
                _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                encodeBinary: function (t) {
                    for (var e, i = "", r = new Array(4), n = 0, s = 0, o = 0; n < t.length;) {
                        for (e = new Array(3), s = 0; s < e.length; s++) n < t.length ? e[s] = 255 & t.charCodeAt(n++) : e[s] = 0;
                        switch (r[0] = e[0] >> 2, r[1] = (3 & e[0]) << 4 | e[1] >> 4, r[2] = (15 & e[1]) << 2 | e[2] >> 6, r[3] = 63 & e[2], o = n - (t.length - 1)) {
                        case 2:
                            r[3] = 64, r[2] = 64;
                            break;
                        case 1:
                            r[3] = 64
                        }
                        for (s = 0; s < r.length; s++) i += this._keyStr.charAt(r[s])
                    }
                    return i
                }
            }
        }, {}],
        17: [function (t, e, i) {
            e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = {
                caching: {
                    memory: t("./middlewares/caching/memory")
                },
                parsing: {
                    blob: t("./middlewares/parsing/blob")
                }
            }
        }, {
            "./Loader": 14,
            "./Resource": 15,
            "./middlewares/caching/memory": 18,
            "./middlewares/parsing/blob": 19
        }],
        18: [function (t, e, i) {
            var r = {};
            e.exports = function () {
                return function (t, e) {
                    r[t.url] ? (t.data = r[t.url], t.complete()) : (t.once("complete", function () {
                        r[this.url] = this.data
                    }), e())
                }
            }
        }, {}],
        19: [function (t, e, i) {
            var r = t("../../Resource"),
                n = t("../../b64");
            window.URL = window.URL || window.webkitURL, e.exports = function () {
                return function (t, e) {
                    if (!t.data) return e();
                    if (t.xhr && t.xhrType === r.XHR_RESPONSE_TYPE.BLOB)
                        if (window.Blob && "string" != typeof t.data) {
                            if (0 === t.data.type.indexOf("image")) {
                                var i = URL.createObjectURL(t.data);
                                t.blob = t.data, t.data = new Image, t.data.src = i, t.isImage = !0, t.data.onload = function () {
                                    URL.revokeObjectURL(i), t.data.onload = null, e()
                                }
                            }
                        } else {
                            var s = t.xhr.getResponseHeader("content-type");
                            s && 0 === s.indexOf("image") && (t.data = new Image, t.data.src = "data:" + s + ";base64," + n.encodeBinary(t.xhr.responseText), t.isImage = !0, t.data.onload = function () {
                                t.data.onload = null, e()
                            })
                        } else e()
                }
            }
        }, {
            "../../Resource": 15,
            "../../b64": 16
        }],
        20: [function (t, e, i) {
            e.exports = {
                name: "pixi.js",
                version: "3.0.7",
                description: "Pixi.js is a fast lightweight 2D library that works across all devices.",
                author: "Mat Groves",
                contributors: ["Chad Engler <chad@pantherdev.com>", "Richard Davey <rdavey@gmail.com>"],
                main: "./src/index.js",
                homepage: "http://goodboydigital.com/",
                bugs: "https://github.com/GoodBoyDigital/pixi.js/issues",
                license: "MIT",
                repository: {
                    type: "git",
                    url: "https://github.com/GoodBoyDigital/pixi.js.git"
                },
                scripts: {
                    start: "gulp && gulp watch",
                    test: "gulp && testem ci",
                    build: "gulp",
                    docs: "jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md"
                },
                files: ["bin/", "src/"],
                dependencies: {
                    async: "^0.9.0",
                    brfs: "^1.4.0",
                    earcut: "^2.0.1",
                    eventemitter3: "^1.1.0",
                    "object-assign": "^2.0.0",
                    "resource-loader": "^1.6.1"
                },
                devDependencies: {
                    browserify: "^10.2.3",
                    chai: "^3.0.0",
                    del: "^1.2.0",
                    gulp: "^3.9.0",
                    "gulp-cached": "^1.1.0",
                    "gulp-concat": "^2.5.2",
                    "gulp-debug": "^2.0.1",
                    "gulp-jshint": "^1.11.0",
                    "gulp-mirror": "^0.4.0",
                    "gulp-plumber": "^1.0.1",
                    "gulp-rename": "^1.2.2",
                    "gulp-sourcemaps": "^1.5.2",
                    "gulp-uglify": "^1.2.0",
                    "gulp-util": "^3.0.5",
                    "jaguarjs-jsdoc": "git+https://github.com/davidshimjs/jaguarjs-jsdoc.git",
                    jsdoc: "^3.3.0",
                    "jshint-summary": "^0.4.0",
                    minimist: "^1.1.1",
                    mocha: "^2.2.5",
                    "require-dir": "^0.3.0",
                    "run-sequence": "^1.1.0",
                    testem: "^0.8.3",
                    "vinyl-buffer": "^1.0.0",
                    "vinyl-source-stream": "^1.1.0",
                    watchify: "^3.2.1"
                },
                browserify: {
                    transform: ["brfs"]
                }
            }
        }, {}],
        21: [function (t, e, i) {
            var r = {
                VERSION: t("../../package.json").version,
                PI_2: 2 * Math.PI,
                RAD_TO_DEG: 180 / Math.PI,
                DEG_TO_RAD: Math.PI / 180,
                TARGET_FPMS: .06,
                RENDERER_TYPE: {
                    UNKNOWN: 0,
                    WEBGL: 1,
                    CANVAS: 2
                },
                BLEND_MODES: {
                    NORMAL: 0,
                    ADD: 1,
                    MULTIPLY: 2,
                    SCREEN: 3,
                    OVERLAY: 4,
                    DARKEN: 5,
                    LIGHTEN: 6,
                    COLOR_DODGE: 7,
                    COLOR_BURN: 8,
                    HARD_LIGHT: 9,
                    SOFT_LIGHT: 10,
                    DIFFERENCE: 11,
                    EXCLUSION: 12,
                    HUE: 13,
                    SATURATION: 14,
                    COLOR: 15,
                    LUMINOSITY: 16
                },
                DRAW_MODES: {
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6
                },
                SCALE_MODES: {
                    DEFAULT: 0,
                    LINEAR: 0,
                    NEAREST: 1
                },
                RETINA_PREFIX: /@(.+)x/,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                DEFAULT_RENDER_OPTIONS: {
                    view: null,
                    resolution: 1,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1
                },
                SHAPES: {
                    POLY: 0,
                    RECT: 1,
                    CIRC: 2,
                    ELIP: 3,
                    RREC: 4
                },
                SPRITE_BATCH_SIZE: 2e3
            };
            e.exports = r
        }, {
            "../../package.json": 20
        }],
        22: [function (t, e, i) {
            function r() {
                s.call(this), this.children = []
            }
            var n = t("../math"),
                s = t("./DisplayObject"),
                o = t("../textures/RenderTexture"),
                a = new n.Matrix;
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.scale.x * this.getLocalBounds().width
                    },
                    set: function (t) {
                        var e = this.getLocalBounds().width;
                        0 !== e ? this.scale.x = t / e : this.scale.x = 1, this._width = t
                    }
                },
                height: {
                    get: function () {
                        return this.scale.y * this.getLocalBounds().height
                    },
                    set: function (t) {
                        var e = this.getLocalBounds().height;
                        0 !== e ? this.scale.y = t / e : this.scale.y = 1, this._height = t
                    }
                }
            }), r.prototype.addChild = function (t) {
                return this.addChildAt(t, this.children.length)
            }, r.prototype.addChildAt = function (t, e) {
                if (t === this) return t;
                if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t.emit("added", this), t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }, r.prototype.swapChildren = function (t, e) {
                if (t !== e) {
                    var i = this.getChildIndex(t),
                        r = this.getChildIndex(e);
                    if (0 > i || 0 > r) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                    this.children[i] = e, this.children[r] = t
                }
            }, r.prototype.getChildIndex = function (t) {
                var e = this.children.indexOf(t);
                if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }, r.prototype.setChildIndex = function (t, e) {
                if (0 > e || e >= this.children.length) throw new Error("The supplied index is out of bounds");
                var i = this.getChildIndex(t);
                this.children.splice(i, 1), this.children.splice(e, 0, t)
            }, r.prototype.getChildAt = function (t) {
                if (0 > t || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller");
                return this.children[t]
            }, r.prototype.removeChild = function (t) {
                var e = this.children.indexOf(t);
                if (-1 !== e) return this.removeChildAt(e)
            }, r.prototype.removeChildAt = function (t) {
                var e = this.getChildAt(t);
                return e.parent = null, this.children.splice(t, 1), e.emit("removed", this), e
            }, r.prototype.removeChildren = function (t, e) {
                var i = t || 0,
                    r = "number" == typeof e ? e : this.children.length,
                    n = r - i;
                if (n > 0 && r >= n) {
                    for (var s = this.children.splice(i, n), o = 0; o < s.length; ++o) s[o].parent = null;
                    return s
                }
                if (0 === n && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            }, r.prototype.generateTexture = function (t, e, i) {
                var r = this.getLocalBounds(),
                    n = new o(t, 0 | r.width, 0 | r.height, i, e);
                return a.tx = -r.x, a.ty = -r.y, n.render(this, a), n
            }, r.prototype.updateTransform = function () {
                if (this.visible) {
                    this.displayObjectUpdateTransform();
                    for (var t = 0, e = this.children.length; e > t; ++t) this.children[t].updateTransform()
                }
            }, r.prototype.containerUpdateTransform = r.prototype.updateTransform, r.prototype.getBounds = function () {
                if (!this._currentBounds) {
                    if (0 === this.children.length) return n.Rectangle.EMPTY;
                    for (var t, e, i, r = 1 / 0, s = 1 / 0, o = -(1 / 0), a = -(1 / 0), h = !1, l = 0, u = this.children.length; u > l; ++l) {
                        var c = this.children[l];
                        c.visible && (h = !0, t = this.children[l].getBounds(), r = r < t.x ? r : t.x, s = s < t.y ? s : t.y, e = t.width + t.x, i = t.height + t.y, o = o > e ? o : e, a = a > i ? a : i)
                    }
                    if (!h) return n.Rectangle.EMPTY;
                    var p = this._bounds;
                    p.x = r, p.y = s, p.width = o - r, p.height = a - s, this._currentBounds = p
                }
                return this._currentBounds
            }, r.prototype.containerGetBounds = r.prototype.getBounds, r.prototype.getLocalBounds = function () {
                var t = this.worldTransform;
                this.worldTransform = n.Matrix.IDENTITY;
                for (var e = 0, i = this.children.length; i > e; ++e) this.children[e].updateTransform();
                return this.worldTransform = t, this._currentBounds = null, this.getBounds(n.Matrix.IDENTITY)
            }, r.prototype.renderWebGL = function (t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                    var e, i;
                    if (this._mask || this._filters) {
                        for (t.currentRenderer.flush(), this._filters && t.filterManager.pushFilter(this, this._filters), this._mask && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, i = this.children.length; i > e; e++) this.children[e].renderWebGL(t);
                        t.currentRenderer.flush(), this._mask && t.maskManager.popMask(this, this._mask), this._filters && t.filterManager.popFilter(), t.currentRenderer.start()
                    } else
                        for (this._renderWebGL(t), e = 0, i = this.children.length; i > e; ++e) this.children[e].renderWebGL(t)
                }
            }, r.prototype._renderWebGL = function (t) {}, r.prototype._renderCanvas = function (t) {}, r.prototype.renderCanvas = function (t) {
                if (this.visible && !(this.alpha <= 0) && this.renderable) {
                    this._mask && t.maskManager.pushMask(this._mask, t), this._renderCanvas(t);
                    for (var e = 0, i = this.children.length; i > e; ++e) this.children[e].renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }, r.prototype.destroy = function (t) {
                if (s.prototype.destroy.call(this), t)
                    for (var e = 0, i = this.children.length; i > e; ++e) this.children[e].destroy(t);
                this.removeChildren(), this.children = null
            }
        }, {
            "../math": 31,
            "../textures/RenderTexture": 69,
            "./DisplayObject": 23
        }],
        23: [function (t, e, i) {
            function r() {
                o.call(this), this.position = new n.Point, this.scale = new n.Point(1, 1), this.pivot = new n.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.worldTransform = new n.Matrix, this.filterArea = null, this._sr = 0, this._cr = 1, this._bounds = new n.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cachedObject = null
            }
            var n = t("../math"),
                s = t("../textures/RenderTexture"),
                o = t("eventemitter3"),
                a = t("../const"),
                h = new n.Matrix;
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                x: {
                    get: function () {
                        return this.position.x
                    },
                    set: function (t) {
                        this.position.x = t
                    }
                },
                y: {
                    get: function () {
                        return this.position.y
                    },
                    set: function (t) {
                        this.position.y = t
                    }
                },
                worldVisible: {
                    get: function () {
                        var t = this;
                        do {
                            if (!t.visible) return !1;
                            t = t.parent
                        } while (t);
                        return !0
                    }
                },
                mask: {
                    get: function () {
                        return this._mask
                    },
                    set: function (t) {
                        this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1)
                    }
                },
                filters: {
                    get: function () {
                        return this._filters && this._filters.slice()
                    },
                    set: function (t) {
                        this._filters = t && t.slice()
                    }
                }
            }), r.prototype.updateTransform = function () {
                var t, e, i, r, n, s, o = this.parent.worldTransform,
                    h = this.worldTransform;
                this.rotation % a.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, e = this._sr * this.scale.x, i = -this._sr * this.scale.y, r = this._cr * this.scale.y, n = this.position.x, s = this.position.y, (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * i, s -= this.pivot.x * e + this.pivot.y * r), h.a = t * o.a + e * o.c, h.b = t * o.b + e * o.d, h.c = i * o.a + r * o.c, h.d = i * o.b + r * o.d, h.tx = n * o.a + s * o.c + o.tx, h.ty = n * o.b + s * o.d + o.ty) : (t = this.scale.x, r = this.scale.y, n = this.position.x - this.pivot.x * t, s = this.position.y - this.pivot.y * r, h.a = t * o.a, h.b = t * o.b, h.c = r * o.c, h.d = r * o.d, h.tx = n * o.a + s * o.c + o.tx, h.ty = n * o.b + s * o.d + o.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._currentBounds = null
            }, r.prototype.displayObjectUpdateTransform = r.prototype.updateTransform, r.prototype.getBounds = function (t) {
                return n.Rectangle.EMPTY
            }, r.prototype.getLocalBounds = function () {
                return this.getBounds(n.Matrix.IDENTITY)
            }, r.prototype.toGlobal = function (t) {
                return this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
            }, r.prototype.toLocal = function (t, e) {
                return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t)
            }, r.prototype.renderWebGL = function (t) {}, r.prototype.renderCanvas = function (t) {}, r.prototype.generateTexture = function (t, e, i) {
                var r = this.getLocalBounds(),
                    n = new s(t, 0 | r.width, 0 | r.height, e, i);
                return h.tx = -r.x, h.ty = -r.y, n.render(this, h), n
            }, r.prototype.destroy = function () {
                this.position = null, this.scale = null, this.pivot = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.worldTransform = null, this.filterArea = null
            }
        }, {
            "../const": 21,
            "../math": 31,
            "../textures/RenderTexture": 69,
            eventemitter3: 11
        }],
        24: [function (t, e, i) {
            function r() {
                n.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = u.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new l.Rectangle(0, 0, 1, 1), this.dirty = !0, this.glDirty = !1, this.boundsDirty = !0, this.cachedSpriteDirty = !1
            }
            var n = t("../display/Container"),
                s = t("../textures/Texture"),
                o = t("../renderers/canvas/utils/CanvasBuffer"),
                a = t("../renderers/canvas/utils/CanvasGraphics"),
                h = t("./GraphicsData"),
                l = t("../math"),
                u = t("../const"),
                c = new l.Point;
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {}), r.prototype.clone = function () {
                var t = new r;
                t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = this.dirty, t.glDirty = this.glDirty, t.cachedSpriteDirty = this.cachedSpriteDirty;
                for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone());
                return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
            }, r.prototype.lineStyle = function (t, e, i) {
                return this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === i ? 1 : i, this.currentPath && (this.currentPath.shape.points.length ? this.drawShape(new l.Polygon(this.currentPath.shape.points.slice(-2))) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha)), this
            }, r.prototype.moveTo = function (t, e) {
                return this.drawShape(new l.Polygon([t, e])), this
            }, r.prototype.lineTo = function (t, e) {
                return this.currentPath.shape.points.push(t, e), this.dirty = !0, this
            }, r.prototype.quadraticCurveTo = function (t, e, i, r) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var n, s, o = 20,
                    a = this.currentPath.shape.points;
                0 === a.length && this.moveTo(0, 0);
                for (var h = a[a.length - 2], l = a[a.length - 1], u = 0, c = 1; o >= c; ++c) u = c / o, n = h + (t - h) * u, s = l + (e - l) * u, a.push(n + (t + (i - t) * u - n) * u, s + (e + (r - e) * u - s) * u);
                return this.dirty = this.boundsDirty = !0, this
            }, r.prototype.bezierCurveTo = function (t, e, i, r, n, s) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                for (var o, a, h, l, u, c = 20, p = this.currentPath.shape.points, d = p[p.length - 2], f = p[p.length - 1], g = 0, v = 1; c >= v; ++v) g = v / c, o = 1 - g, a = o * o, h = a * o, l = g * g, u = l * g, p.push(h * d + 3 * a * g * t + 3 * o * l * i + u * n, h * f + 3 * a * g * e + 3 * o * l * r + u * s);
                return this.dirty = this.boundsDirty = !0, this
            }, r.prototype.arcTo = function (t, e, i, r, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var s = this.currentPath.shape.points,
                    o = s[s.length - 2],
                    a = s[s.length - 1],
                    h = a - e,
                    l = o - t,
                    u = r - e,
                    c = i - t,
                    p = Math.abs(h * c - l * u);
                if (1e-8 > p || 0 === n)(s[s.length - 2] !== t || s[s.length - 1] !== e) && s.push(t, e);
                else {
                    var d = h * h + l * l,
                        f = u * u + c * c,
                        g = h * u + l * c,
                        v = n * Math.sqrt(d) / p,
                        m = n * Math.sqrt(f) / p,
                        y = v * g / d,
                        x = m * g / f,
                        _ = v * c + m * l,
                        b = v * u + m * h,
                        T = l * (m + y),
                        w = h * (m + y),
                        E = c * (v + x),
                        S = u * (v + x),
                        C = Math.atan2(w - b, T - _),
                        A = Math.atan2(S - b, E - _);
                    this.arc(_ + t, b + e, n, C, A, l * u > c * h)
                }
                return this.dirty = this.boundsDirty = !0, this
            }, r.prototype.arc = function (t, e, i, r, n, s) {
                if (s = s || !1, r === n) return this;
                !s && r >= n ? n += 2 * Math.PI : s && n >= r && (r += 2 * Math.PI);
                var o = s ? -1 * (r - n) : n - r,
                    a = 40 * Math.ceil(Math.abs(o) / (2 * Math.PI));
                if (0 === o) return this;
                var h = t + Math.cos(r) * i,
                    l = e + Math.sin(r) * i;
                this.currentPath ? s && this.filling ? this.currentPath.shape.points.push(t, e) : this.currentPath.shape.points.push(h, l) : s && this.filling ? this.moveTo(t, e) : this.moveTo(h, l);
                for (var u = this.currentPath.shape.points, c = o / (2 * a), p = 2 * c, d = Math.cos(c), f = Math.sin(c), g = a - 1, v = g % 1 / g, m = 0; g >= m; m++) {
                    var y = m + v * m,
                        x = c + r + p * y,
                        _ = Math.cos(x),
                        b = -Math.sin(x);
                    u.push((d * _ + f * b) * i + t, (d * -b + f * _) * i + e)
                }
                return this.dirty = this.boundsDirty = !0, this
            }, r.prototype.beginFill = function (t, e) {
                return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            }, r.prototype.endFill = function () {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            }, r.prototype.drawRect = function (t, e, i, r) {
                return this.drawShape(new l.Rectangle(t, e, i, r)), this
            }, r.prototype.drawRoundedRect = function (t, e, i, r, n) {
                return this.drawShape(new l.RoundedRectangle(t, e, i, r, n)), this
            }, r.prototype.drawCircle = function (t, e, i) {
                return this.drawShape(new l.Circle(t, e, i)), this
            }, r.prototype.drawEllipse = function (t, e, i, r) {
                return this.drawShape(new l.Ellipse(t, e, i, r)), this
            }, r.prototype.drawPolygon = function (t) {
                var e = t;
                if (!Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var i = 0; i < e.length; ++i) e[i] = arguments[i]
                }
                return this.drawShape(new l.Polygon(e)), this
            }, r.prototype.clear = function () {
                return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
            }, r.prototype.generateTexture = function (t, e, i) {
                e = e || 1;
                var r = this.getLocalBounds(),
                    n = new o(r.width * e, r.height * e),
                    h = s.fromCanvas(n.canvas, i);
                return h.baseTexture.resolution = e, n.context.scale(e, e), n.context.translate(-r.x, -r.y),
                    a.renderGraphics(this, n.context), h
            }, r.prototype._renderWebGL = function (t) {
                this.glDirty && (this.dirty = !0, this.glDirty = !1), t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this)
            }, r.prototype._renderCanvas = function (t) {
                if (this.isMask !== !0) {
                    this._prevTint !== this.tint && (this.dirty = !0, this._prevTint = this.tint);
                    var e = t.context,
                        i = this.worldTransform;
                    this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, e.globalCompositeOperation = t.blendModes[t.currentBlendMode]);
                    var r = t.resolution;
                    e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r), a.renderGraphics(this, e)
                }
            }, r.prototype.getBounds = function (t) {
                if (!this._currentBounds) {
                    if (!this.renderable) return l.Rectangle.EMPTY;
                    this.boundsDirty && (this.updateLocalBounds(), this.glDirty = !0, this.cachedSpriteDirty = !0, this.boundsDirty = !1);
                    var e = this._localBounds,
                        i = e.x,
                        r = e.width + e.x,
                        n = e.y,
                        s = e.height + e.y,
                        o = t || this.worldTransform,
                        a = o.a,
                        h = o.b,
                        u = o.c,
                        c = o.d,
                        p = o.tx,
                        d = o.ty,
                        f = a * r + u * s + p,
                        g = c * s + h * r + d,
                        v = a * i + u * s + p,
                        m = c * s + h * i + d,
                        y = a * i + u * n + p,
                        x = c * n + h * i + d,
                        _ = a * r + u * n + p,
                        b = c * n + h * r + d,
                        T = f,
                        w = g,
                        E = f,
                        S = g;
                    E = E > v ? v : E, E = E > y ? y : E, E = E > _ ? _ : E, S = S > m ? m : S, S = S > x ? x : S, S = S > b ? b : S, T = v > T ? v : T, T = y > T ? y : T, T = _ > T ? _ : T, w = m > w ? m : w, w = x > w ? x : w, w = b > w ? b : w, this._bounds.x = E, this._bounds.width = T - E, this._bounds.y = S, this._bounds.height = w - S, this._currentBounds = this._bounds
                }
                return this._currentBounds
            }, r.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, c);
                for (var e = this.graphicsData, i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (r.fill && r.shape && r.shape.contains(c.x, c.y)) return !0
                }
                return !1
            }, r.prototype.updateLocalBounds = function () {
                var t = 1 / 0,
                    e = -(1 / 0),
                    i = 1 / 0,
                    r = -(1 / 0);
                if (this.graphicsData.length)
                    for (var n, s, o, a, h, l, c = 0; c < this.graphicsData.length; c++) {
                        var p = this.graphicsData[c],
                            d = p.type,
                            f = p.lineWidth;
                        if (n = p.shape, d === u.SHAPES.RECT || d === u.SHAPES.RREC) o = n.x - f / 2, a = n.y - f / 2, h = n.width + f, l = n.height + f, t = t > o ? o : t, e = o + h > e ? o + h : e, i = i > a ? a : i, r = a + l > r ? a + l : r;
                        else if (d === u.SHAPES.CIRC) o = n.x, a = n.y, h = n.radius + f / 2, l = n.radius + f / 2, t = t > o - h ? o - h : t, e = o + h > e ? o + h : e, i = i > a - l ? a - l : i, r = a + l > r ? a + l : r;
                        else if (d === u.SHAPES.ELIP) o = n.x, a = n.y, h = n.width + f / 2, l = n.height + f / 2, t = t > o - h ? o - h : t, e = o + h > e ? o + h : e, i = i > a - l ? a - l : i, r = a + l > r ? a + l : r;
                        else {
                            s = n.points;
                            for (var g = 0; g < s.length; g += 2) o = s[g], a = s[g + 1], t = t > o - f ? o - f : t, e = o + f > e ? o + f : e, i = i > a - f ? a - f : i, r = a + f > r ? a + f : r
                        }
                    } else t = 0, e = 0, i = 0, r = 0;
                var v = this.boundsPadding;
                this._localBounds.x = t - v, this._localBounds.width = e - t + 2 * v, this._localBounds.y = i - v, this._localBounds.height = r - i + 2 * v
            }, r.prototype.drawShape = function (t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                var e = new h(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
                return this.graphicsData.push(e), e.type === u.SHAPES.POLY && (e.shape.closed = e.shape.closed, this.currentPath = e), this.dirty = this.boundsDirty = !0, e
            }, r.prototype.destroy = function () {
                n.prototype.destroy.apply(this, arguments);
                for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
                for (var e in this._webgl)
                    for (var i = 0; i < this._webgl[e].data.length; ++i) this._webgl[e].data[i].destroy();
                this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
            }
        }, {
            "../const": 21,
            "../display/Container": 22,
            "../math": 31,
            "../renderers/canvas/utils/CanvasBuffer": 43,
            "../renderers/canvas/utils/CanvasGraphics": 44,
            "../textures/Texture": 70,
            "./GraphicsData": 25
        }],
        25: [function (t, e, i) {
            function r(t, e, i, r, n, s, o) {
                this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = r, this.fillAlpha = n, this._fillTint = r, this.fill = s, this.shape = o, this.type = o.type
            }
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape)
            }, r.prototype.destroy = function () {
                this.shape = null
            }
        }, {}],
        26: [function (t, e, i) {
            function r(t) {
                a.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.complexPrimitiveShader = null, this.maximumSimplePolySize = 200
            }
            var n = t("../../utils"),
                s = t("../../math"),
                o = t("../../const"),
                a = t("../../renderers/webgl/utils/ObjectRenderer"),
                h = t("../../renderers/webgl/WebGLRenderer"),
                l = t("./WebGLGraphicsData"),
                u = t("earcut");
            r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, h.registerPlugin("graphics", r), r.prototype.onContextChange = function () {}, r.prototype.destroy = function () {
                a.prototype.destroy.call(this);
                for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                this.graphicsDataPool = null
            }, r.prototype.render = function (t) {
                var e, i = this.renderer,
                    r = i.gl,
                    s = i.shaderManager.plugins.primitiveShader;
                t.dirty && this.updateGraphics(t, r);
                var o = t._webGL[r.id];
                i.blendModeManager.setBlendMode(t.blendMode);
                for (var a = 0; a < o.data.length; a++) 1 === o.data[a].mode ? (e = o.data[a], i.stencilManager.pushStencil(t, e, i), r.uniform1f(i.shaderManager.complexPrimitiveShader.uniforms.alpha._location, t.worldAlpha * e.alpha), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), i.stencilManager.popStencil(t, e, i)) : (e = o.data[a], s = i.shaderManager.primitiveShader, i.shaderManager.setShader(s), r.uniformMatrix3fv(s.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), r.uniformMatrix3fv(s.uniforms.projectionMatrix._location, !1, i.currentRenderTarget.projectionMatrix.toArray(!0)), r.uniform3fv(s.uniforms.tint._location, n.hex2rgb(t.tint)), r.uniform1f(s.uniforms.alpha._location, t.worldAlpha), r.bindBuffer(r.ARRAY_BUFFER, e.buffer), r.vertexAttribPointer(s.attributes.aVertexPosition, 2, r.FLOAT, !1, 24, 0), r.vertexAttribPointer(s.attributes.aColor, 4, r.FLOAT, !1, 24, 8), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0))
            }, r.prototype.updateGraphics = function (t) {
                var e = this.renderer.gl,
                    i = t._webGL[e.id];
                i || (i = t._webGL[e.id] = {
                    lastIndex: 0,
                    data: [],
                    gl: e
                }), t.dirty = !1;
                var r;
                if (t.clearDirty) {
                    for (t.clearDirty = !1, r = 0; r < i.data.length; r++) {
                        var n = i.data[r];
                        n.reset(), this.graphicsDataPool.push(n)
                    }
                    i.data = [], i.lastIndex = 0
                }
                var s;
                for (r = i.lastIndex; r < t.graphicsData.length; r++) {
                    var a = t.graphicsData[r];
                    if (a.type === o.SHAPES.POLY) {
                        if (a.points = a.shape.points.slice(), a.shape.closed && (a.points[0] !== a.points[a.points.length - 2] || a.points[1] !== a.points[a.points.length - 1]) && a.points.push(a.points[0], a.points[1]), a.fill && a.points.length >= 6)
                            if (a.points.length < 2 * this.maximumSimplePolySize) {
                                s = this.switchMode(i, 0);
                                var h = this.buildPoly(a, s);
                                h || (s = this.switchMode(i, 1), this.buildComplexPoly(a, s))
                            } else s = this.switchMode(i, 1), this.buildComplexPoly(a, s);
                        a.lineWidth > 0 && (s = this.switchMode(i, 0), this.buildLine(a, s))
                    } else s = this.switchMode(i, 0), a.type === o.SHAPES.RECT ? this.buildRectangle(a, s) : a.type === o.SHAPES.CIRC || a.type === o.SHAPES.ELIP ? this.buildCircle(a, s) : a.type === o.SHAPES.RREC && this.buildRoundedRectangle(a, s);
                    i.lastIndex++
                }
                for (r = 0; r < i.data.length; r++) s = i.data[r], s.dirty && s.upload()
            }, r.prototype.switchMode = function (t, e) {
                var i;
                return t.data.length ? (i = t.data[t.data.length - 1], (i.points.length > 32e4 || i.mode !== e || 1 === e) && (i = this.graphicsDataPool.pop() || new l(t.gl), i.mode = e, t.data.push(i))) : (i = this.graphicsDataPool.pop() || new l(t.gl), i.mode = e, t.data.push(i)), i.dirty = !0, i
            }, r.prototype.buildRectangle = function (t, e) {
                var i = t.shape,
                    r = i.x,
                    s = i.y,
                    o = i.width,
                    a = i.height;
                if (t.fill) {
                    var h = n.hex2rgb(t.fillColor),
                        l = t.fillAlpha,
                        u = h[0] * l,
                        c = h[1] * l,
                        p = h[2] * l,
                        d = e.points,
                        f = e.indices,
                        g = d.length / 6;
                    d.push(r, s), d.push(u, c, p, l), d.push(r + o, s), d.push(u, c, p, l), d.push(r, s + a), d.push(u, c, p, l), d.push(r + o, s + a), d.push(u, c, p, l), f.push(g, g, g + 1, g + 2, g + 3, g + 3)
                }
                if (t.lineWidth) {
                    var v = t.points;
                    t.points = [r, s, r + o, s, r + o, s + a, r, s + a, r, s], this.buildLine(t, e), t.points = v
                }
            }, r.prototype.buildRoundedRectangle = function (t, e) {
                var i = t.shape,
                    r = i.x,
                    s = i.y,
                    o = i.width,
                    a = i.height,
                    h = i.radius,
                    l = [];
                if (l.push(r, s + h), this.quadraticBezierCurve(r, s + a - h, r, s + a, r + h, s + a, l), this.quadraticBezierCurve(r + o - h, s + a, r + o, s + a, r + o, s + a - h, l), this.quadraticBezierCurve(r + o, s + h, r + o, s, r + o - h, s, l), this.quadraticBezierCurve(r + h, s, r, s, r, s + h + 1e-10, l), t.fill) {
                    var c = n.hex2rgb(t.fillColor),
                        p = t.fillAlpha,
                        d = c[0] * p,
                        f = c[1] * p,
                        g = c[2] * p,
                        v = e.points,
                        m = e.indices,
                        y = v.length / 6,
                        x = u(l, null, 2),
                        _ = 0;
                    for (_ = 0; _ < x.length; _ += 3) m.push(x[_] + y), m.push(x[_] + y), m.push(x[_ + 1] + y), m.push(x[_ + 2] + y), m.push(x[_ + 2] + y);
                    for (_ = 0; _ < l.length; _++) v.push(l[_], l[++_], d, f, g, p)
                }
                if (t.lineWidth) {
                    var b = t.points;
                    t.points = l, this.buildLine(t, e), t.points = b
                }
            }, r.prototype.quadraticBezierCurve = function (t, e, i, r, n, s, o) {
                function a(t, e, i) {
                    var r = e - t;
                    return t + r * i
                }
                for (var h, l, u, c, p, d, f = 20, g = o || [], v = 0, m = 0; f >= m; m++) v = m / f, h = a(t, i, v), l = a(e, r, v), u = a(i, n, v), c = a(r, s, v), p = a(h, u, v), d = a(l, c, v), g.push(p, d);
                return g
            }, r.prototype.buildCircle = function (t, e) {
                var i, r, s = t.shape,
                    a = s.x,
                    h = s.y;
                t.type === o.SHAPES.CIRC ? (i = s.radius, r = s.radius) : (i = s.width, r = s.height);
                var l = 40,
                    u = 2 * Math.PI / l,
                    c = 0;
                if (t.fill) {
                    var p = n.hex2rgb(t.fillColor),
                        d = t.fillAlpha,
                        f = p[0] * d,
                        g = p[1] * d,
                        v = p[2] * d,
                        m = e.points,
                        y = e.indices,
                        x = m.length / 6;
                    for (y.push(x), c = 0; l + 1 > c; c++) m.push(a, h, f, g, v, d), m.push(a + Math.sin(u * c) * i, h + Math.cos(u * c) * r, f, g, v, d), y.push(x++, x++);
                    y.push(x - 1)
                }
                if (t.lineWidth) {
                    var _ = t.points;
                    for (t.points = [], c = 0; l + 1 > c; c++) t.points.push(a + Math.sin(u * c) * i, h + Math.cos(u * c) * r);
                    this.buildLine(t, e), t.points = _
                }
            }, r.prototype.buildLine = function (t, e) {
                var i = 0,
                    r = t.points;
                if (0 !== r.length) {
                    if (t.lineWidth % 2)
                        for (i = 0; i < r.length; i++) r[i] += .5;
                    var o = new s.Point(r[0], r[1]),
                        a = new s.Point(r[r.length - 2], r[r.length - 1]);
                    if (o.x === a.x && o.y === a.y) {
                        r = r.slice(), r.pop(), r.pop(), a = new s.Point(r[r.length - 2], r[r.length - 1]);
                        var h = a.x + .5 * (o.x - a.x),
                            l = a.y + .5 * (o.y - a.y);
                        r.unshift(h, l), r.push(h, l)
                    }
                    var u, c, p, d, f, g, v, m, y, x, _, b, T, w, E, S, C, A, M, R, P, D, O, F = e.points,
                        L = e.indices,
                        I = r.length / 2,
                        B = r.length,
                        N = F.length / 6,
                        k = t.lineWidth / 2,
                        U = n.hex2rgb(t.lineColor),
                        j = t.lineAlpha,
                        X = U[0] * j,
                        W = U[1] * j,
                        G = U[2] * j;
                    for (p = r[0], d = r[1], f = r[2], g = r[3], y = -(d - g), x = p - f, O = Math.sqrt(y * y + x * x), y /= O, x /= O, y *= k, x *= k, F.push(p - y, d - x, X, W, G, j), F.push(p + y, d + x, X, W, G, j), i = 1; I - 1 > i; i++) p = r[2 * (i - 1)], d = r[2 * (i - 1) + 1], f = r[2 * i], g = r[2 * i + 1], v = r[2 * (i + 1)], m = r[2 * (i + 1) + 1], y = -(d - g), x = p - f, O = Math.sqrt(y * y + x * x), y /= O, x /= O, y *= k, x *= k, _ = -(g - m), b = f - v, O = Math.sqrt(_ * _ + b * b), _ /= O, b /= O, _ *= k, b *= k, E = -x + d - (-x + g), S = -y + f - (-y + p), C = (-y + p) * (-x + g) - (-y + f) * (-x + d), A = -b + m - (-b + g), M = -_ + f - (-_ + v), R = (-_ + v) * (-b + g) - (-_ + f) * (-b + m), P = E * M - A * S, Math.abs(P) < .1 ? (P += 10.1, F.push(f - y, g - x, X, W, G, j), F.push(f + y, g + x, X, W, G, j)) : (u = (S * R - M * C) / P, c = (A * C - E * R) / P, D = (u - f) * (u - f) + (c - g) + (c - g), D > 19600 ? (T = y - _, w = x - b, O = Math.sqrt(T * T + w * w), T /= O, w /= O, T *= k, w *= k, F.push(f - T, g - w), F.push(X, W, G, j), F.push(f + T, g + w), F.push(X, W, G, j), F.push(f - T, g - w), F.push(X, W, G, j), B++) : (F.push(u, c), F.push(X, W, G, j), F.push(f - (u - f), g - (c - g)), F.push(X, W, G, j)));
                    for (p = r[2 * (I - 2)], d = r[2 * (I - 2) + 1], f = r[2 * (I - 1)], g = r[2 * (I - 1) + 1], y = -(d - g), x = p - f, O = Math.sqrt(y * y + x * x), y /= O, x /= O, y *= k, x *= k, F.push(f - y, g - x), F.push(X, W, G, j), F.push(f + y, g + x), F.push(X, W, G, j), L.push(N), i = 0; B > i; i++) L.push(N++);
                    L.push(N - 1)
                }
            }, r.prototype.buildComplexPoly = function (t, e) {
                var i = t.points.slice();
                if (!(i.length < 6)) {
                    var r = e.indices;
                    e.points = i, e.alpha = t.fillAlpha, e.color = n.hex2rgb(t.fillColor);
                    for (var s, o, a = 1 / 0, h = -(1 / 0), l = 1 / 0, u = -(1 / 0), c = 0; c < i.length; c += 2) s = i[c], o = i[c + 1], a = a > s ? s : a, h = s > h ? s : h, l = l > o ? o : l, u = o > u ? o : u;
                    i.push(a, l, h, l, h, u, a, u);
                    var p = i.length / 2;
                    for (c = 0; p > c; c++) r.push(c)
                }
            }, r.prototype.buildPoly = function (t, e) {
                var i = t.points;
                if (!(i.length < 6)) {
                    var r = e.points,
                        s = e.indices,
                        o = i.length / 2,
                        a = n.hex2rgb(t.fillColor),
                        h = t.fillAlpha,
                        l = a[0] * h,
                        c = a[1] * h,
                        p = a[2] * h,
                        d = u(i, null, 2);
                    if (!d) return !1;
                    var f = r.length / 6,
                        g = 0;
                    for (g = 0; g < d.length; g += 3) s.push(d[g] + f), s.push(d[g] + f), s.push(d[g + 1] + f), s.push(d[g + 2] + f), s.push(d[g + 2] + f);
                    for (g = 0; o > g; g++) r.push(i[2 * g], i[2 * g + 1], l, c, p, h);
                    return !0
                }
            }
        }, {
            "../../const": 21,
            "../../math": 31,
            "../../renderers/webgl/WebGLRenderer": 47,
            "../../renderers/webgl/utils/ObjectRenderer": 61,
            "../../utils": 75,
            "./WebGLGraphicsData": 27,
            earcut: 10
        }],
        27: [function (t, e, i) {
            function r(t) {
                this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0, this.glPoints = null, this.glIndices = null
            }
            r.prototype.constructor = r, e.exports = r, r.prototype.reset = function () {
                this.points.length = 0, this.indices.length = 0
            }, r.prototype.upload = function () {
                var t = this.gl;
                this.glPoints = new Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndices = new Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndices, t.STATIC_DRAW), this.dirty = !1
            }, r.prototype.destroy = function () {
                this.color = null, this.points = null, this.indices = null, this.gl.deleteBuffer(this.buffer), this.gl.deleteBuffer(this.indexBuffer), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
            }
        }, {}],
        28: [function (t, e, i) {
            var r = e.exports = Object.assign(t("./const"), t("./math"), {
                utils: t("./utils"),
                ticker: t("./ticker"),
                DisplayObject: t("./display/DisplayObject"),
                Container: t("./display/Container"),
                Sprite: t("./sprites/Sprite"),
                ParticleContainer: t("./particles/ParticleContainer"),
                SpriteRenderer: t("./sprites/webgl/SpriteRenderer"),
                ParticleRenderer: t("./particles/webgl/ParticleRenderer"),
                Text: t("./text/Text"),
                Graphics: t("./graphics/Graphics"),
                GraphicsData: t("./graphics/GraphicsData"),
                GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"),
                Texture: t("./textures/Texture"),
                BaseTexture: t("./textures/BaseTexture"),
                RenderTexture: t("./textures/RenderTexture"),
                VideoBaseTexture: t("./textures/VideoBaseTexture"),
                TextureUvs: t("./textures/TextureUvs"),
                CanvasRenderer: t("./renderers/canvas/CanvasRenderer"),
                CanvasGraphics: t("./renderers/canvas/utils/CanvasGraphics"),
                CanvasBuffer: t("./renderers/canvas/utils/CanvasBuffer"),
                WebGLRenderer: t("./renderers/webgl/WebGLRenderer"),
                ShaderManager: t("./renderers/webgl/managers/ShaderManager"),
                Shader: t("./renderers/webgl/shaders/Shader"),
                ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"),
                RenderTarget: t("./renderers/webgl/utils/RenderTarget"),
                AbstractFilter: t("./renderers/webgl/filters/AbstractFilter"),
                FXAAFilter: t("./renderers/webgl/filters/FXAAFilter"),
                SpriteMaskFilter: t("./renderers/webgl/filters/SpriteMaskFilter"),
                autoDetectRenderer: function (t, e, i, n) {
                    return t = t || 800, e = e || 600, !n && r.utils.isWebGLSupported() ? new r.WebGLRenderer(t, e, i) : new r.CanvasRenderer(t, e, i)
                }
            })
        }, {
            "./const": 21,
            "./display/Container": 22,
            "./display/DisplayObject": 23,
            "./graphics/Graphics": 24,
            "./graphics/GraphicsData": 25,
            "./graphics/webgl/GraphicsRenderer": 26,
            "./math": 31,
            "./particles/ParticleContainer": 37,
            "./particles/webgl/ParticleRenderer": 39,
            "./renderers/canvas/CanvasRenderer": 42,
            "./renderers/canvas/utils/CanvasBuffer": 43,
            "./renderers/canvas/utils/CanvasGraphics": 44,
            "./renderers/webgl/WebGLRenderer": 47,
            "./renderers/webgl/filters/AbstractFilter": 48,
            "./renderers/webgl/filters/FXAAFilter": 49,
            "./renderers/webgl/filters/SpriteMaskFilter": 50,
            "./renderers/webgl/managers/ShaderManager": 54,
            "./renderers/webgl/shaders/Shader": 59,
            "./renderers/webgl/utils/ObjectRenderer": 61,
            "./renderers/webgl/utils/RenderTarget": 63,
            "./sprites/Sprite": 65,
            "./sprites/webgl/SpriteRenderer": 66,
            "./text/Text": 67,
            "./textures/BaseTexture": 68,
            "./textures/RenderTexture": 69,
            "./textures/Texture": 70,
            "./textures/TextureUvs": 71,
            "./textures/VideoBaseTexture": 72,
            "./ticker": 74,
            "./utils": 75
        }],
        29: [function (t, e, i) {
            function r() {
                this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
            }
            var n = t("./Point");
            r.prototype.constructor = r, e.exports = r, r.prototype.fromArray = function (t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
            }, r.prototype.toArray = function (t, e) {
                this.array || (this.array = new Float32Array(9));
                var i = e || this.array;
                return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
            }, r.prototype.apply = function (t, e) {
                e = e || new n;
                var i = t.x,
                    r = t.y;
                return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
            }, r.prototype.applyInverse = function (t, e) {
                e = e || new n;
                var i = 1 / (this.a * this.d + this.c * -this.b),
                    r = t.x,
                    s = t.y;
                return e.x = this.d * i * r + -this.c * i * s + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * s + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
            }, r.prototype.translate = function (t, e) {
                return this.tx += t, this.ty += e, this
            }, r.prototype.scale = function (t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }, r.prototype.rotate = function (t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    r = this.a,
                    n = this.c,
                    s = this.tx;
                return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = s * e - this.ty * i, this.ty = s * i + this.ty * e, this
            }, r.prototype.append = function (t) {
                var e = this.a,
                    i = this.b,
                    r = this.c,
                    n = this.d;
                return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
            }, r.prototype.prepend = function (t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var i = this.a,
                        r = this.c;
                    this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
            }, r.prototype.invert = function () {
                var t = this.a,
                    e = this.b,
                    i = this.c,
                    r = this.d,
                    n = this.tx,
                    s = t * r - e * i;
                return this.a = r / s, this.b = -e / s, this.c = -i / s, this.d = t / s, this.tx = (i * this.ty - r * n) / s, this.ty = -(t * this.ty - e * n) / s, this
            }, r.prototype.identity = function () {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }, r.prototype.clone = function () {
                var t = new r;
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, r.prototype.copy = function (t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, r.IDENTITY = new r, r.TEMP_MATRIX = new r
        }, {
            "./Point": 30
        }],
        30: [function (t, e, i) {
            function r(t, e) {
                this.x = t || 0, this.y = e || 0
            }
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y)
            }, r.prototype.copy = function (t) {
                this.set(t.x, t.y)
            }, r.prototype.equals = function (t) {
                return t.x === this.x && t.y === this.y
            }, r.prototype.set = function (t, e) {
                this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
            }
        }, {}],
        31: [function (t, e, i) {
            e.exports = {
                Point: t("./Point"),
                Matrix: t("./Matrix"),
                Circle: t("./shapes/Circle"),
                Ellipse: t("./shapes/Ellipse"),
                Polygon: t("./shapes/Polygon"),
                Rectangle: t("./shapes/Rectangle"),
                RoundedRectangle: t("./shapes/RoundedRectangle")
            }
        }, {
            "./Matrix": 29,
            "./Point": 30,
            "./shapes/Circle": 32,
            "./shapes/Ellipse": 33,
            "./shapes/Polygon": 34,
            "./shapes/Rectangle": 35,
            "./shapes/RoundedRectangle": 36
        }],
        32: [function (t, e, i) {
            function r(t, e, i) {
                this.x = t || 0, this.y = e || 0, this.radius = i || 0, this.type = s.SHAPES.CIRC
            }
            var n = t("./Rectangle"),
                s = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y, this.radius)
            }, r.prototype.contains = function (t, e) {
                if (this.radius <= 0) return !1;
                var i = this.x - t,
                    r = this.y - e,
                    n = this.radius * this.radius;
                return i *= i, r *= r, n >= i + r
            }, r.prototype.getBounds = function () {
                return new n(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            }
        }, {
            "../../const": 21,
            "./Rectangle": 35
        }],
        33: [function (t, e, i) {
            function r(t, e, i, r) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.type = s.SHAPES.ELIP
            }
            var n = t("./Rectangle"),
                s = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y, this.width, this.height)
            }, r.prototype.contains = function (t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var i = (t - this.x) / this.width,
                    r = (e - this.y) / this.height;
                return i *= i, r *= r, 1 >= i + r
            }, r.prototype.getBounds = function () {
                return new n(this.x - this.width, this.y - this.height, this.width, this.height)
            }
        }, {
            "../../const": 21,
            "./Rectangle": 35
        }],
        34: [function (t, e, i) {
            function r(t) {
                var e = t;
                if (!Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var i = 0; i < e.length; ++i) e[i] = arguments[i]
                }
                if (e[0] instanceof n) {
                    for (var r = [], o = 0, a = e.length; a > o; o++) r.push(e[o].x, e[o].y);
                    e = r
                }
                this.closed = !0, this.points = e, this.type = s.SHAPES.POLY
            }
            var n = t("../Point"),
                s = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.points.slice())
            }, r.prototype.contains = function (t, e) {
                for (var i = !1, r = this.points.length / 2, n = 0, s = r - 1; r > n; s = n++) {
                    var o = this.points[2 * n],
                        a = this.points[2 * n + 1],
                        h = this.points[2 * s],
                        l = this.points[2 * s + 1],
                        u = a > e != l > e && (h - o) * (e - a) / (l - a) + o > t;
                    u && (i = !i)
                }
                return i
            }
        }, {
            "../../const": 21,
            "../Point": 30
        }],
        35: [function (t, e, i) {
            function r(t, e, i, r) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.type = n.SHAPES.RECT
            }
            var n = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.EMPTY = new r(0, 0, 0, 0), r.prototype.clone = function () {
                return new r(this.x, this.y, this.width, this.height)
            }, r.prototype.contains = function (t, e) {
                return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height ? !0 : !1
            }
        }, {
            "../../const": 21
        }],
        36: [function (t, e, i) {
            function r(t, e, i, r, s) {
                this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.radius = s || 20, this.type = n.SHAPES.RREC
            }
            var n = t("../../const");
            r.prototype.constructor = r, e.exports = r, r.prototype.clone = function () {
                return new r(this.x, this.y, this.width, this.height, this.radius)
            }, r.prototype.contains = function (t, e) {
                return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height ? !0 : !1
            }
        }, {
            "../../const": 21
        }],
        37: [function (t, e, i) {
            function r(t, e) {
                n.call(this), this._properties = [!1, !0, !1, !1, !1], this._size = t || 15e3, this._buffers = null, this._updateStatic = !1, this.interactiveChildren = !1, this.blendMode = s.BLEND_MODES.NORMAL, this.roundPixels = !0, this.setProperties(e)
            }
            var n = t("../display/Container"),
                s = t("../const");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setProperties = function (t) {
                t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4])
            }, r.prototype.updateTransform = function () {
                this.displayObjectUpdateTransform()
            }, r.prototype.renderWebGL = function (t) {
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
            }, r.prototype.addChildAt = function (t, e) {
                if (t === this) return t;
                if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this._updateStatic = !0, t;
                throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
            }, r.prototype.removeChildAt = function (t) {
                var e = this.getChildAt(t);
                return e.parent = null, this.children.splice(t, 1), this._updateStatic = !0, e
            }, r.prototype.renderCanvas = function (t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                    var e = t.context,
                        i = this.worldTransform,
                        r = !0,
                        n = 0,
                        s = 0,
                        o = 0,
                        a = 0;
                    e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                    for (var h = 0; h < this.children.length; ++h) {
                        var l = this.children[h];
                        if (l.visible) {
                            var u = l.texture.frame;
                            if (e.globalAlpha = this.worldAlpha * l.alpha, l.rotation % (2 * Math.PI) === 0) r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), r = !1), n = l.anchor.x * (-u.width * l.scale.x) + l.position.x + .5, s = l.anchor.y * (-u.height * l.scale.y) + l.position.y + .5, o = u.width * l.scale.x, a = u.height * l.scale.y;
                            else {
                                r || (r = !0), l.displayObjectUpdateTransform();
                                var c = l.worldTransform;
                                t.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, 0 | c.tx, 0 | c.ty) : e.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), n = l.anchor.x * -u.width + .5, s = l.anchor.y * -u.height + .5, o = u.width, a = u.height
                            }
                            e.drawImage(l.texture.baseTexture.source, u.x, u.y, u.width, u.height, n, s, o, a)
                        }
                    }
                }
            }, r.prototype.destroy = function () {
                if (n.prototype.destroy.apply(this, arguments), this._buffers)
                    for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                this._properties = null, this._buffers = null
            }
        }, {
            "../const": 21,
            "../display/Container": 22
        }],
        38: [function (t, e, i) {
            function r(t, e, i) {
                this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = i, this.dynamicProperties = [], this.staticProperties = [];
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.dynamic ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers()
            }
            r.prototype.constructor = r, e.exports = r, r.prototype.initBuffers = function () {
                var t, e, i = this.gl,
                    r = 0;
                for (this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], e.offset = r, r += e.size, this.dynamicStride += e.size;
                this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer), i.bufferData(i.ARRAY_BUFFER, this.dynamicData, i.DYNAMIC_DRAW);
                var n = 0;
                for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], e.offset = n, n += e.size, this.staticStride += e.size;
                this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = i.createBuffer(), i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer), i.bufferData(i.ARRAY_BUFFER, this.staticData, i.DYNAMIC_DRAW)
            }, r.prototype.uploadDynamic = function (t, e, i) {
                for (var r = this.gl, n = 0; n < this.dynamicProperties.length; n++) {
                    var s = this.dynamicProperties[n];
                    s.uploadFunction(t, e, i, this.dynamicData, this.dynamicStride, s.offset)
                }
                r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), r.bufferSubData(r.ARRAY_BUFFER, 0, this.dynamicData)
            }, r.prototype.uploadStatic = function (t, e, i) {
                for (var r = this.gl, n = 0; n < this.staticProperties.length; n++) {
                    var s = this.staticProperties[n];
                    s.uploadFunction(t, e, i, this.staticData, this.staticStride, s.offset)
                }
                r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), r.bufferSubData(r.ARRAY_BUFFER, 0, this.staticData)
            }, r.prototype.bind = function () {
                var t, e, i = this.gl;
                for (i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer), t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], i.vertexAttribPointer(e.attribute, e.size, i.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset);
                for (i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer), t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], i.vertexAttribPointer(e.attribute, e.size, i.FLOAT, !1, 4 * this.staticStride, 4 * e.offset)
            }, r.prototype.destroy = function () {
                this.dynamicProperties = null, this.dynamicData = null, this.gl.deleteBuffer(this.dynamicBuffer), this.staticProperties = null, this.staticData = null, this.gl.deleteBuffer(this.staticBuffer)
            }
        }, {}],
        39: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.size = 15e3;
                var e = 6 * this.size;
                this.indices = new Uint16Array(e);
                for (var i = 0, r = 0; e > i; i += 6, r += 4) this.indices[i + 0] = r + 0, this.indices[i + 1] = r + 1, this.indices[i + 2] = r + 2, this.indices[i + 3] = r + 0, this.indices[i + 4] = r + 2, this.indices[i + 5] = r + 3;
                this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new h.Matrix
            }
            var n = t("../../renderers/webgl/utils/ObjectRenderer"),
                s = t("../../renderers/webgl/WebGLRenderer"),
                o = t("./ParticleShader"),
                a = t("./ParticleBuffer"),
                h = t("../../math");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, s.registerPlugin("particle", r), r.prototype.onContextChange = function () {
                var t = this.renderer.gl;
                this.shader = new o(this.renderer.shaderManager), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.properties = [{
                    attribute: this.shader.attributes.aVertexPosition,
                    dynamic: !1,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aPositionCoord,
                    dynamic: !0,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aRotation,
                    dynamic: !1,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aTextureCoord,
                    dynamic: !1,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aColor,
                    dynamic: !1,
                    size: 1,
                    uploadFunction: this.uploadAlpha,
                    offset: 0
                }]
            }, r.prototype.start = function () {
                var t = this.renderer.gl;
                t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var e = this.shader;
                this.renderer.shaderManager.setShader(e)
            }, r.prototype.render = function (t) {
                var e = t.children,
                    i = e.length,
                    r = t._size;
                if (0 !== i) {
                    i > r && (i = r), t._buffers || (t._buffers = this.generateBuffers(t)), this.renderer.blendModeManager.setBlendMode(t.blendMode);
                    var n = this.renderer.gl,
                        s = t.worldTransform.copy(this.tempMatrix);
                    s.prepend(this.renderer.currentRenderTarget.projectionMatrix), n.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, !1, s.toArray(!0)), n.uniform1f(this.shader.uniforms.uAlpha._location, t.worldAlpha);
                    var o = t._updateStatic,
                        a = e[0]._texture.baseTexture;
                    if (a._glTextures[n.id]) n.bindTexture(n.TEXTURE_2D, a._glTextures[n.id]);
                    else {
                        if (!this.renderer.updateTexture(a)) return;
                        this.properties[0].dynamic && this.properties[3].dynamic || (o = !0)
                    }
                    for (var h = 0, l = 0; i > l; l += this.size) {
                        var u = i - l;
                        u > this.size && (u = this.size);
                        var c = t._buffers[h++];
                        c.uploadDynamic(e, l, u), o && c.uploadStatic(e, l, u), c.bind(this.shader), n.drawElements(n.TRIANGLES, 6 * u, n.UNSIGNED_SHORT, 0), this.renderer.drawCount++
                    }
                    t._updateStatic = !1
                }
            }, r.prototype.generateBuffers = function (t) {
                var e, i = this.renderer.gl,
                    r = [],
                    n = t._size;
                for (e = 0; e < t._properties.length; e++) this.properties[e].dynamic = t._properties[e];
                for (e = 0; n > e; e += this.size) r.push(new a(i, this.properties, this.size, this.shader));
                return r
            }, r.prototype.uploadVertices = function (t, e, i, r, n, s) {
                for (var o, a, h, l, u, c, p, d, f, g = 0; i > g; g++) o = t[e + g], a = o._texture, l = o.scale.x, u = o.scale.y, a.trim ? (h = a.trim, p = h.x - o.anchor.x * h.width, c = p + a.crop.width, f = h.y - o.anchor.y * h.height, d = f + a.crop.height) : (c = a._frame.width * (1 - o.anchor.x), p = a._frame.width * -o.anchor.x, d = a._frame.height * (1 - o.anchor.y), f = a._frame.height * -o.anchor.y), r[s] = p * l, r[s + 1] = f * u, r[s + n] = c * l, r[s + n + 1] = f * u, r[s + 2 * n] = c * l, r[s + 2 * n + 1] = d * u, r[s + 3 * n] = p * l, r[s + 3 * n + 1] = d * u, s += 4 * n
            }, r.prototype.uploadPosition = function (t, e, i, r, n, s) {
                for (var o = 0; i > o; o++) {
                    var a = t[e + o].position;
                    r[s] = a.x, r[s + 1] = a.y, r[s + n] = a.x, r[s + n + 1] = a.y, r[s + 2 * n] = a.x, r[s + 2 * n + 1] = a.y, r[s + 3 * n] = a.x, r[s + 3 * n + 1] = a.y, s += 4 * n
                }
            }, r.prototype.uploadRotation = function (t, e, i, r, n, s) {
                for (var o = 0; i > o; o++) {
                    var a = t[e + o].rotation;
                    r[s] = a, r[s + n] = a, r[s + 2 * n] = a, r[s + 3 * n] = a, s += 4 * n
                }
            }, r.prototype.uploadUvs = function (t, e, i, r, n, s) {
                for (var o = 0; i > o; o++) {
                    var a = t[e + o]._texture._uvs;
                    a ? (r[s] = a.x0, r[s + 1] = a.y0, r[s + n] = a.x1, r[s + n + 1] = a.y1, r[s + 2 * n] = a.x2, r[s + 2 * n + 1] = a.y2, r[s + 3 * n] = a.x3, r[s + 3 * n + 1] = a.y3, s += 4 * n) : (r[s] = 0, r[s + 1] = 0, r[s + n] = 0, r[s + n + 1] = 0, r[s + 2 * n] = 0, r[s + 2 * n + 1] = 0, r[s + 3 * n] = 0, r[s + 3 * n + 1] = 0, s += 4 * n)
                }
            }, r.prototype.uploadAlpha = function (t, e, i, r, n, s) {
                for (var o = 0; i > o; o++) {
                    var a = t[e + o].alpha;
                    r[s] = a, r[s + n] = a, r[s + 2 * n] = a, r[s + 3 * n] = a, s += 4 * n
                }
            }, r.prototype.destroy = function () {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), n.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null
            }
        }, {
            "../../math": 31,
            "../../renderers/webgl/WebGLRenderer": 47,
            "../../renderers/webgl/utils/ObjectRenderer": 61,
            "./ParticleBuffer": 38,
            "./ParticleShader": 40
        }],
        40: [function (t, e, i) {
            function r(t) {
                n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"), {
                    uAlpha: {
                        type: "1f",
                        value: 1
                    }
                }, {
                    aPositionCoord: 0,
                    aRotation: 0
                })
            }
            var n = t("../../renderers/webgl/shaders/TextureShader");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
        }, {
            "../../renderers/webgl/shaders/TextureShader": 60
        }],
        41: [function (t, e, i) {
            function r(t, e, i, r) {
                if (a.call(this), n.sayHello(t), r)
                    for (var h in o.DEFAULT_RENDER_OPTIONS) "undefined" == typeof r[h] && (r[h] = o.DEFAULT_RENDER_OPTIONS[h]);
                else r = o.DEFAULT_RENDER_OPTIONS;
                this.type = o.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = i || 600, this.view = r.view || document.createElement("canvas"), this.resolution = r.resolution, this.transparent = r.transparent,
                    this.autoResize = r.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = r.preserveDrawingBuffer, this.clearBeforeRender = r.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgb = [0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = r.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = {
                        worldTransform: new s.Matrix,
                        worldAlpha: 1,
                        children: []
                    }, this._lastObjectRendered = this._tempDisplayObjectParent
            }
            var n = t("../utils"),
                s = t("../math"),
                o = t("../const"),
                a = t("eventemitter3");
            r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                backgroundColor: {
                    get: function () {
                        return this._backgroundColor
                    },
                    set: function (t) {
                        this._backgroundColor = t, this._backgroundColorString = n.hex2string(t), n.hex2rgb(t, this._backgroundColorRgb)
                    }
                }
            }), r.prototype.resize = function (t, e) {
                this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
            }, r.prototype.destroy = function (t) {
                t && this.view.parent && this.view.parent.removeChild(this.view), this.type = o.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgb = null, this._backgroundColorString = null
            }
        }, {
            "../const": 21,
            "../math": 31,
            "../utils": 75,
            eventemitter3: 11
        }],
        42: [function (t, e, i) {
            function r(t, e, i) {
                n.call(this, "Canvas", t, e, i), this.type = h.RENDERER_TYPE.CANVAS, this.context = this.view.getContext("2d", {
                    alpha: this.transparent
                }), this.refresh = !0, this.maskManager = new s, this.roundPixels = !1, this.currentScaleMode = h.SCALE_MODES.DEFAULT, this.currentBlendMode = h.BLEND_MODES.NORMAL, this.smoothProperty = "imageSmoothingEnabled", this.context.imageSmoothingEnabled || (this.context.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.context.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.context.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.context.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this._mapBlendModes(), this._tempDisplayObjectParent = {
                    worldTransform: new a.Matrix,
                    worldAlpha: 1
                }, this.resize(t, e)
            }
            var n = t("../SystemRenderer"),
                s = t("./utils/CanvasMaskManager"),
                o = t("../../utils"),
                a = t("../../math"),
                h = t("../../const");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, o.pluginTarget.mixin(r), r.prototype.render = function (t) {
                var e = t.parent;
                this._lastObjectRendered = t, t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e, this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.currentBlendMode = h.BLEND_MODES.NORMAL, this.context.globalCompositeOperation = this.blendModes[h.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = this._backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(t, this.context)
            }, r.prototype.destroy = function (t) {
                this.destroyPlugins(), n.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.roundPixels = !1, this.currentScaleMode = 0, this.currentBlendMode = 0, this.smoothProperty = null
            }, r.prototype.renderDisplayObject = function (t, e) {
                var i = this.context;
                this.context = e, t.renderCanvas(this), this.context = i
            }, r.prototype.resize = function (t, e) {
                n.prototype.resize.call(this, t, e), this.currentScaleMode = h.SCALE_MODES.DEFAULT, this.smoothProperty && (this.context[this.smoothProperty] = this.currentScaleMode === h.SCALE_MODES.LINEAR)
            }, r.prototype._mapBlendModes = function () {
                this.blendModes || (this.blendModes = {}, o.canUseNewCanvasBlendModes() ? (this.blendModes[h.BLEND_MODES.NORMAL] = "source-over", this.blendModes[h.BLEND_MODES.ADD] = "lighter", this.blendModes[h.BLEND_MODES.MULTIPLY] = "multiply", this.blendModes[h.BLEND_MODES.SCREEN] = "screen", this.blendModes[h.BLEND_MODES.OVERLAY] = "overlay", this.blendModes[h.BLEND_MODES.DARKEN] = "darken", this.blendModes[h.BLEND_MODES.LIGHTEN] = "lighten", this.blendModes[h.BLEND_MODES.COLOR_DODGE] = "color-dodge", this.blendModes[h.BLEND_MODES.COLOR_BURN] = "color-burn", this.blendModes[h.BLEND_MODES.HARD_LIGHT] = "hard-light", this.blendModes[h.BLEND_MODES.SOFT_LIGHT] = "soft-light", this.blendModes[h.BLEND_MODES.DIFFERENCE] = "difference", this.blendModes[h.BLEND_MODES.EXCLUSION] = "exclusion", this.blendModes[h.BLEND_MODES.HUE] = "hue", this.blendModes[h.BLEND_MODES.SATURATION] = "saturate", this.blendModes[h.BLEND_MODES.COLOR] = "color", this.blendModes[h.BLEND_MODES.LUMINOSITY] = "luminosity") : (this.blendModes[h.BLEND_MODES.NORMAL] = "source-over", this.blendModes[h.BLEND_MODES.ADD] = "lighter", this.blendModes[h.BLEND_MODES.MULTIPLY] = "source-over", this.blendModes[h.BLEND_MODES.SCREEN] = "source-over", this.blendModes[h.BLEND_MODES.OVERLAY] = "source-over", this.blendModes[h.BLEND_MODES.DARKEN] = "source-over", this.blendModes[h.BLEND_MODES.LIGHTEN] = "source-over", this.blendModes[h.BLEND_MODES.COLOR_DODGE] = "source-over", this.blendModes[h.BLEND_MODES.COLOR_BURN] = "source-over", this.blendModes[h.BLEND_MODES.HARD_LIGHT] = "source-over", this.blendModes[h.BLEND_MODES.SOFT_LIGHT] = "source-over", this.blendModes[h.BLEND_MODES.DIFFERENCE] = "source-over", this.blendModes[h.BLEND_MODES.EXCLUSION] = "source-over", this.blendModes[h.BLEND_MODES.HUE] = "source-over", this.blendModes[h.BLEND_MODES.SATURATION] = "source-over", this.blendModes[h.BLEND_MODES.COLOR] = "source-over", this.blendModes[h.BLEND_MODES.LUMINOSITY] = "source-over"))
            }
        }, {
            "../../const": 21,
            "../../math": 31,
            "../../utils": 75,
            "../SystemRenderer": 41,
            "./utils/CanvasMaskManager": 45
        }],
        43: [function (t, e, i) {
            function r(t, e) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e
            }
            r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.canvas.width
                    },
                    set: function (t) {
                        this.canvas.width = t
                    }
                },
                height: {
                    get: function () {
                        return this.canvas.height
                    },
                    set: function (t) {
                        this.canvas.height = t
                    }
                }
            }), r.prototype.clear = function () {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }, r.prototype.resize = function (t, e) {
                this.canvas.width = t, this.canvas.height = e
            }, r.prototype.destroy = function () {
                this.context = null, this.canvas = null
            }
        }, {}],
        44: [function (t, e, i) {
            var r = t("../../../const"),
                n = {};
            e.exports = n, n.renderGraphics = function (t, e) {
                var i = t.worldAlpha;
                t.dirty && (this.updateGraphicsTint(t), t.dirty = !1);
                for (var n = 0; n < t.graphicsData.length; n++) {
                    var s = t.graphicsData[n],
                        o = s.shape,
                        a = s._fillTint,
                        h = s._lineTint;
                    if (e.lineWidth = s.lineWidth, s.type === r.SHAPES.POLY) {
                        e.beginPath();
                        var l = o.points;
                        e.moveTo(l[0], l[1]);
                        for (var u = 1; u < l.length / 2; u++) e.lineTo(l[2 * u], l[2 * u + 1]);
                        l[0] === l[l.length - 2] && l[1] === l[l.length - 1] && e.closePath(), s.fill && (e.globalAlpha = s.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), s.lineWidth && (e.globalAlpha = s.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), e.stroke())
                    } else if (s.type === r.SHAPES.RECT)(s.fillColor || 0 === s.fillColor) && (e.globalAlpha = s.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fillRect(o.x, o.y, o.width, o.height)), s.lineWidth && (e.globalAlpha = s.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), e.strokeRect(o.x, o.y, o.width, o.height));
                    else if (s.type === r.SHAPES.CIRC) e.beginPath(), e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath(), s.fill && (e.globalAlpha = s.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), s.lineWidth && (e.globalAlpha = s.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), e.stroke());
                    else if (s.type === r.SHAPES.ELIP) {
                        var c = 2 * o.width,
                            p = 2 * o.height,
                            d = o.x - c / 2,
                            f = o.y - p / 2;
                        e.beginPath();
                        var g = .5522848,
                            v = c / 2 * g,
                            m = p / 2 * g,
                            y = d + c,
                            x = f + p,
                            _ = d + c / 2,
                            b = f + p / 2;
                        e.moveTo(d, b), e.bezierCurveTo(d, b - m, _ - v, f, _, f), e.bezierCurveTo(_ + v, f, y, b - m, y, b), e.bezierCurveTo(y, b + m, _ + v, x, _, x), e.bezierCurveTo(_ - v, x, d, b + m, d, b), e.closePath(), s.fill && (e.globalAlpha = s.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), s.lineWidth && (e.globalAlpha = s.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), e.stroke())
                    } else if (s.type === r.SHAPES.RREC) {
                        var T = o.x,
                            w = o.y,
                            E = o.width,
                            S = o.height,
                            C = o.radius,
                            A = Math.min(E, S) / 2 | 0;
                        C = C > A ? A : C, e.beginPath(), e.moveTo(T, w + C), e.lineTo(T, w + S - C), e.quadraticCurveTo(T, w + S, T + C, w + S), e.lineTo(T + E - C, w + S), e.quadraticCurveTo(T + E, w + S, T + E, w + S - C), e.lineTo(T + E, w + C), e.quadraticCurveTo(T + E, w, T + E - C, w), e.lineTo(T + C, w), e.quadraticCurveTo(T, w, T, w + C), e.closePath(), (s.fillColor || 0 === s.fillColor) && (e.globalAlpha = s.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), s.lineWidth && (e.globalAlpha = s.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), e.stroke())
                    }
                }
            }, n.renderGraphicsMask = function (t, e) {
                var i = t.graphicsData.length;
                if (0 !== i) {
                    e.beginPath();
                    for (var n = 0; i > n; n++) {
                        var s = t.graphicsData[n],
                            o = s.shape;
                        if (s.type === r.SHAPES.POLY) {
                            var a = o.points;
                            e.moveTo(a[0], a[1]);
                            for (var h = 1; h < a.length / 2; h++) e.lineTo(a[2 * h], a[2 * h + 1]);
                            a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath()
                        } else if (s.type === r.SHAPES.RECT) e.rect(o.x, o.y, o.width, o.height), e.closePath();
                        else if (s.type === r.SHAPES.CIRC) e.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), e.closePath();
                        else if (s.type === r.SHAPES.ELIP) {
                            var l = 2 * o.width,
                                u = 2 * o.height,
                                c = o.x - l / 2,
                                p = o.y - u / 2,
                                d = .5522848,
                                f = l / 2 * d,
                                g = u / 2 * d,
                                v = c + l,
                                m = p + u,
                                y = c + l / 2,
                                x = p + u / 2;
                            e.moveTo(c, x), e.bezierCurveTo(c, x - g, y - f, p, y, p), e.bezierCurveTo(y + f, p, v, x - g, v, x), e.bezierCurveTo(v, x + g, y + f, m, y, m), e.bezierCurveTo(y - f, m, c, x + g, c, x), e.closePath()
                        } else if (s.type === r.SHAPES.RREC) {
                            var _ = o.x,
                                b = o.y,
                                T = o.width,
                                w = o.height,
                                E = o.radius,
                                S = Math.min(T, w) / 2 | 0;
                            E = E > S ? S : E, e.moveTo(_, b + E), e.lineTo(_, b + w - E), e.quadraticCurveTo(_, b + w, _ + E, b + w), e.lineTo(_ + T - E, b + w), e.quadraticCurveTo(_ + T, b + w, _ + T, b + w - E), e.lineTo(_ + T, b + E), e.quadraticCurveTo(_ + T, b, _ + T - E, b), e.lineTo(_ + E, b), e.quadraticCurveTo(_, b, _, b + E), e.closePath()
                        }
                    }
                }
            }, n.updateGraphicsTint = function (t) {
                if (16777215 !== t.tint)
                    for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) {
                        var s = t.graphicsData[n],
                            o = 0 | s.fillColor,
                            a = 0 | s.lineColor;
                        s._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (255 & o) / 255 * r * 255, s._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
                    }
            }
        }, {
            "../../../const": 21
        }],
        45: [function (t, e, i) {
            function r() {}
            var n = t("./CanvasGraphics");
            r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function (t, e) {
                e.context.save();
                var i = t.alpha,
                    r = t.worldTransform,
                    s = e.resolution;
                e.context.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), t.texture || (n.renderGraphicsMask(t, e.context), e.context.clip()), t.worldAlpha = i
            }, r.prototype.popMask = function (t) {
                t.context.restore()
            }, r.prototype.destroy = function () {}
        }, {
            "./CanvasGraphics": 44
        }],
        46: [function (t, e, i) {
            var r = t("../../../utils"),
                n = {};
            e.exports = n, n.getTintedTexture = function (t, e) {
                var i = t.texture;
                e = n.roundColor(e);
                var r = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                if (i.tintCache = i.tintCache || {}, i.tintCache[r]) return i.tintCache[r];
                var s = n.canvas || document.createElement("canvas");
                if (n.tintMethod(i, e, s), n.convertTintToImage) {
                    var o = new Image;
                    o.src = s.toDataURL(), i.tintCache[r] = o
                } else i.tintCache[r] = s, n.canvas = null;
                return s
            }, n.tintWithMultiply = function (t, e, i) {
                var r = i.getContext("2d"),
                    n = t.crop;
                i.width = n.width, i.height = n.height, r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "multiply", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }, n.tintWithOverlay = function (t, e, i) {
                var r = i.getContext("2d"),
                    n = t.crop;
                i.width = n.width, i.height = n.height, r.globalCompositeOperation = "copy", r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height)
            }, n.tintWithPerPixel = function (t, e, i) {
                var n = i.getContext("2d"),
                    s = t.crop;
                i.width = s.width, i.height = s.height, n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height);
                for (var o = r.hex2rgb(e), a = o[0], h = o[1], l = o[2], u = n.getImageData(0, 0, s.width, s.height), c = u.data, p = 0; p < c.length; p += 4) c[p + 0] *= a, c[p + 1] *= h, c[p + 2] *= l;
                n.putImageData(u, 0, 0)
            }, n.roundColor = function (t) {
                var e = n.cacheStepsPerColorChannel,
                    i = r.hex2rgb(t);
                return i[0] = Math.min(255, i[0] / e * e), i[1] = Math.min(255, i[1] / e * e), i[2] = Math.min(255, i[2] / e * e), r.rgb2hex(i)
            }, n.cacheStepsPerColorChannel = 8, n.convertTintToImage = !1, n.canUseMultiply = r.canUseNewCanvasBlendModes(), n.tintMethod = n.canUseMultiply ? n.tintWithMultiply : n.tintWithPerPixel
        }, {
            "../../../utils": 75
        }],
        47: [function (t, e, i) {
            function r(t, e, i) {
                i = i || {}, n.call(this, "WebGL", t, e, i), this.type = f.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._useFXAA = !!i.forceFXAA && i.antialias, this._FXAAFilter = null, this._contextOptions = {
                    alpha: this.transparent,
                    antialias: i.antialias,
                    premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: i.preserveDrawingBuffer
                }, this.drawCount = 0, this.shaderManager = new s(this), this.maskManager = new o(this), this.stencilManager = new a(this), this.filterManager = new h(this), this.blendModeManager = new l(this), this.currentRenderTarget = null, this.currentRenderer = new c(this), this.initPlugins(), this._createContext(), this._initContext(), this._mapGlModes(), this._renderTargetStack = []
            }
            var n = t("../SystemRenderer"),
                s = t("./managers/ShaderManager"),
                o = t("./managers/MaskManager"),
                a = t("./managers/StencilManager"),
                h = t("./managers/FilterManager"),
                l = t("./managers/BlendModeManager"),
                u = t("./utils/RenderTarget"),
                c = t("./utils/ObjectRenderer"),
                p = t("./filters/FXAAFilter"),
                d = t("../../utils"),
                f = t("../../const");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, d.pluginTarget.mixin(r), r.glContextId = 0, r.prototype._createContext = function () {
                var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
                if (this.gl = t, !t) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                this.glContextId = r.glContextId++, t.id = this.glContextId, t.renderer = this
            }, r.prototype._initContext = function () {
                var t = this.gl;
                t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.renderTarget = new u(t, this.width, this.height, null, this.resolution, !0), this.setRenderTarget(this.renderTarget), this.emit("context", t), this.resize(this.width, this.height), this._useFXAA || (this._useFXAA = this._contextOptions.antialias && !t.getContextAttributes().antialias), this._useFXAA && (window.console.warn("FXAA antialiasing being used instead of native antialiasing"), this._FXAAFilter = [new p])
            }, r.prototype.render = function (t) {
                if (!this.gl.isContextLost()) {
                    this.drawCount = 0, this._lastObjectRendered = t, this._useFXAA && (this._FXAAFilter[0].uniforms.resolution.value.x = this.width, this._FXAAFilter[0].uniforms.resolution.value.y = this.height, t.filterArea = this.renderTarget.size, t.filters = this._FXAAFilter);
                    var e = t.parent;
                    t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e;
                    var i = this.gl;
                    this.setRenderTarget(this.renderTarget), this.clearBeforeRender && (this.transparent ? i.clearColor(0, 0, 0, 0) : i.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1), i.clear(i.COLOR_BUFFER_BIT)), this.renderDisplayObject(t, this.renderTarget)
                }
            }, r.prototype.renderDisplayObject = function (t, e, i) {
                this.setRenderTarget(e), i && e.clear(), this.filterManager.setFilterStack(e.filterStack), t.renderWebGL(this), this.currentRenderer.flush()
            }, r.prototype.setObjectRenderer = function (t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
            }, r.prototype.setRenderTarget = function (t) {
                this.currentRenderTarget !== t && (this.currentRenderTarget = t, this.currentRenderTarget.activate(), this.stencilManager.setMaskStack(t.stencilMaskStack))
            }, r.prototype.resize = function (t, e) {
                n.prototype.resize.call(this, t, e), this.filterManager.resize(t, e), this.renderTarget.resize(t, e), this.currentRenderTarget === this.renderTarget && (this.renderTarget.activate(), this.gl.viewport(0, 0, this.width, this.height))
            }, r.prototype.updateTexture = function (t) {
                if (t = t.baseTexture || t, t.hasLoaded) {
                    var e = this.gl;
                    return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture(), t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this)), e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.mipmap && t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST), e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === f.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), t._glTextures[e.id]
                }
            }, r.prototype.destroyTexture = function (t) {
                t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.gl.id] && this.gl.deleteTexture(t._glTextures[this.gl.id])
            }, r.prototype.handleContextLost = function (t) {
                t.preventDefault()
            }, r.prototype.handleContextRestored = function () {
                this._initContext();
                for (var t in d.BaseTextureCache) d.BaseTextureCache[t]._glTextures.length = 0
            }, r.prototype.destroy = function (t) {
                this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), n.prototype.destroy.call(this, t), this.uid = 0, this.shaderManager.destroy(), this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.maskManager = null, this.filterManager = null, this.blendModeManager = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.drawCount = 0, this.gl = null
            }, r.prototype._mapGlModes = function () {
                var t = this.gl;
                this.blendModes || (this.blendModes = {}, this.blendModes[f.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], this.blendModes[f.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SCREEN] = [t.SRC_ALPHA, t.ONE], this.blendModes[f.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[f.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), this.drawModes || (this.drawModes = {}, this.drawModes[f.DRAW_MODES.POINTS] = t.POINTS, this.drawModes[f.DRAW_MODES.LINES] = t.LINES, this.drawModes[f.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, this.drawModes[f.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, this.drawModes[f.DRAW_MODES.TRIANGLES] = t.TRIANGLES, this.drawModes[f.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, this.drawModes[f.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN)
            }
        }, {
            "../../const": 21,
            "../../utils": 75,
            "../SystemRenderer": 41,
            "./filters/FXAAFilter": 49,
            "./managers/BlendModeManager": 51,
            "./managers/FilterManager": 52,
            "./managers/MaskManager": 53,
            "./managers/ShaderManager": 54,
            "./managers/StencilManager": 55,
            "./utils/ObjectRenderer": 61,
            "./utils/RenderTarget": 63
        }],
        48: [function (t, e, i) {
            function r(t, e, i) {
                this.shaders = [], this.padding = 0, this.uniforms = i || {}, this.vertexSrc = t || n.defaultVertexSrc, this.fragmentSrc = e || n.defaultFragmentSrc
            }
            var n = t("../shaders/TextureShader");
            r.prototype.constructor = r, e.exports = r, r.prototype.getShader = function (t) {
                var e = t.gl,
                    i = this.shaders[e.id];
                return i || (i = new n(t.shaderManager, this.vertexSrc, this.fragmentSrc, this.uniforms, this.attributes), this.shaders[e.id] = i), i
            }, r.prototype.applyFilter = function (t, e, i, r) {
                var n = this.getShader(t);
                t.filterManager.applyFilter(n, e, i, r)
            }, r.prototype.syncUniform = function (t) {
                for (var e = 0, i = this.shaders.length; i > e; ++e) this.shaders[e].syncUniform(t)
            }
        }, {
            "../shaders/TextureShader": 60
        }],
        49: [function (t, e, i) {
            function r() {
                n.call(this, "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n', {
                    resolution: {
                        type: "v2",
                        value: {
                            x: 1,
                            y: 1
                        }
                    }
                })
            }
            var n = t("./AbstractFilter");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager,
                    n = this.getShader(t);
                r.applyFilter(n, e, i)
            }
        }, {
            "./AbstractFilter": 48
        }],
        50: [function (t, e, i) {
            function r(t) {
                var e = new s.Matrix;
                n.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n", {
                    mask: {
                        type: "sampler2D",
                        value: t._texture
                    },
                    alpha: {
                        type: "f",
                        value: 1
                    },
                    otherMatrix: {
                        type: "mat3",
                        value: e.toArray(!0)
                    }
                }), this.maskSprite = t, this.maskMatrix = e
            }
            var n = t("./AbstractFilter"),
                s = t("../../../math");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager;
                this.uniforms.mask.value = this.maskSprite._texture, r.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.alpha.value = this.maskSprite.worldAlpha;
                var n = this.getShader(t);
                r.applyFilter(n, e, i)
            }, Object.defineProperties(r.prototype, {
                map: {
                    get: function () {
                        return this.uniforms.mask.value
                    },
                    set: function (t) {
                        this.uniforms.mask.value = t
                    }
                },
                offset: {
                    get: function () {
                        return this.uniforms.offset.value
                    },
                    set: function (t) {
                        this.uniforms.offset.value = t
                    }
                }
            })
        }, {
            "../../../math": 31,
            "./AbstractFilter": 48
        }],
        51: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.currentBlendMode = 99999
            }
            var n = t("./WebGLManager");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setBlendMode = function (t) {
                if (this.currentBlendMode === t) return !1;
                this.currentBlendMode = t;
                var e = this.renderer.blendModes[this.currentBlendMode];
                return this.renderer.gl.blendFunc(e[0], e[1]), !0
            }
        }, {
            "./WebGLManager": 56
        }],
        52: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.filterStack = [], this.filterStack.push({
                    renderTarget: t.currentRenderTarget,
                    filter: [],
                    bounds: null
                }), this.texturePool = [], this.textureSize = new h.Rectangle(0, 0, t.width, t.height), this.currentFrame = null
            }
            var n = t("./WebGLManager"),
                s = t("../utils/RenderTarget"),
                o = t("../../../const"),
                a = t("../utils/Quad"),
                h = t("../../../math");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.onContextChange = function () {
                this.texturePool.length = 0;
                var t = this.renderer.gl;
                this.quad = new a(t)
            }, r.prototype.setFilterStack = function (t) {
                this.filterStack = t
            }, r.prototype.pushFilter = function (t, e) {
                var i = t.filterArea ? t.filterArea.clone() : t.getBounds();
                i.x = 0 | i.x, i.y = 0 | i.y, i.width = 0 | i.width, i.height = 0 | i.height;
                var r = 0 | e[0].padding;
                if (i.x -= r, i.y -= r, i.width += 2 * r, i.height += 2 * r, this.renderer.currentRenderTarget.transform) {
                    var n = this.renderer.currentRenderTarget.transform;
                    i.x += n.tx, i.y += n.ty, this.capFilterArea(i), i.x -= n.tx, i.y -= n.ty
                } else this.capFilterArea(i);
                if (i.width > 0 && i.height > 0) {
                    this.currentFrame = i;
                    var s = this.getRenderTarget();
                    this.renderer.setRenderTarget(s), s.clear(), this.filterStack.push({
                        renderTarget: s,
                        filter: e
                    })
                } else this.filterStack.push({
                    renderTarget: null,
                    filter: e
                })
            }, r.prototype.popFilter = function () {
                var t = this.filterStack.pop(),
                    e = this.filterStack[this.filterStack.length - 1],
                    i = t.renderTarget;
                if (t.renderTarget) {
                    var r = e.renderTarget,
                        n = this.renderer.gl;
                    this.currentFrame = i.frame, this.quad.map(this.textureSize, i.frame), n.bindBuffer(n.ARRAY_BUFFER, this.quad.vertexBuffer), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer);
                    var s = t.filter;
                    if (n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, n.FLOAT, !1, 0, 0), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, n.FLOAT, !1, 0, 32), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, n.FLOAT, !1, 0, 64), this.renderer.blendModeManager.setBlendMode(o.BLEND_MODES.NORMAL),
                        1 === s.length) s[0].uniforms.dimensions && (s[0].uniforms.dimensions.value[0] = this.renderer.width, s[0].uniforms.dimensions.value[1] = this.renderer.height, s[0].uniforms.dimensions.value[2] = this.quad.vertices[0], s[0].uniforms.dimensions.value[3] = this.quad.vertices[5]), s[0].applyFilter(this.renderer, i, r), this.returnRenderTarget(i);
                    else {
                        for (var a = i, h = this.getRenderTarget(!0), l = 0; l < s.length - 1; l++) {
                            var u = s[l];
                            u.uniforms.dimensions && (u.uniforms.dimensions.value[0] = this.renderer.width, u.uniforms.dimensions.value[1] = this.renderer.height, u.uniforms.dimensions.value[2] = this.quad.vertices[0], u.uniforms.dimensions.value[3] = this.quad.vertices[5]), u.applyFilter(this.renderer, a, h);
                            var c = a;
                            a = h, h = c
                        }
                        s[s.length - 1].applyFilter(this.renderer, a, r), this.returnRenderTarget(a), this.returnRenderTarget(h)
                    }
                    return t.filter
                }
            }, r.prototype.getRenderTarget = function (t) {
                var e = this.texturePool.pop() || new s(this.renderer.gl, this.textureSize.width, this.textureSize.height, o.SCALE_MODES.LINEAR, this.renderer.resolution * o.FILTER_RESOLUTION);
                return e.frame = this.currentFrame, t && e.clear(!0), e
            }, r.prototype.returnRenderTarget = function (t) {
                this.texturePool.push(t)
            }, r.prototype.applyFilter = function (t, e, i, r) {
                var n = this.renderer.gl;
                this.renderer.setRenderTarget(i), r && i.clear(), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, e.texture), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0)
            }, r.prototype.calculateMappedMatrix = function (t, e, i) {
                var r = e.worldTransform.copy(h.Matrix.TEMP_MATRIX),
                    n = e._texture.baseTexture,
                    s = i.identity(),
                    o = this.textureSize.height / this.textureSize.width;
                s.translate(t.x / this.textureSize.width, t.y / this.textureSize.height), s.scale(1, o);
                var a = this.textureSize.width / n.width,
                    l = this.textureSize.height / n.height;
                return r.tx /= n.width * a, r.ty /= n.width * a, r.invert(), s.prepend(r), s.scale(1, 1 / o), s.scale(a, l), s.translate(e.anchor.x, e.anchor.y), s
            }, r.prototype.capFilterArea = function (t) {
                t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.textureSize.width && (t.width = this.textureSize.width - t.x), t.y + t.height > this.textureSize.height && (t.height = this.textureSize.height - t.y)
            }, r.prototype.resize = function (t, e) {
                this.textureSize.width = t, this.textureSize.height = e;
                for (var i = 0; i < this.texturePool.length; i++) this.texturePool[i].resize(t, e)
            }, r.prototype.destroy = function () {
                this.filterStack = null, this.offsetY = 0;
                for (var t = 0; t < this.texturePool.length; t++) this.texturePool[t].destroy();
                this.texturePool = null
            }
        }, {
            "../../../const": 21,
            "../../../math": 31,
            "../utils/Quad": 62,
            "../utils/RenderTarget": 63,
            "./WebGLManager": 56
        }],
        53: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.stencilStack = [], this.reverse = !0, this.count = 0, this.alphaMaskPool = []
            }
            var n = t("./WebGLManager"),
                s = t("../filters/SpriteMaskFilter");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function (t, e) {
                e.texture ? this.pushSpriteMask(t, e) : this.pushStencilMask(t, e)
            }, r.prototype.popMask = function (t, e) {
                e.texture ? this.popSpriteMask(t, e) : this.popStencilMask(t, e)
            }, r.prototype.pushSpriteMask = function (t, e) {
                var i = this.alphaMaskPool.pop();
                i || (i = [new s(e)]), i[0].maskSprite = e, this.renderer.filterManager.pushFilter(t, i)
            }, r.prototype.popSpriteMask = function () {
                var t = this.renderer.filterManager.popFilter();
                this.alphaMaskPool.push(t)
            }, r.prototype.pushStencilMask = function (t, e) {
                this.renderer.stencilManager.pushMask(e)
            }, r.prototype.popStencilMask = function (t, e) {
                this.renderer.stencilManager.popMask(e)
            }
        }, {
            "../filters/SpriteMaskFilter": 50,
            "./WebGLManager": 56
        }],
        54: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
                for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
                this.stack = [], this._currentId = -1, this.currentShader = null
            }
            var n = t("./WebGLManager"),
                s = t("../shaders/TextureShader"),
                o = t("../shaders/ComplexPrimitiveShader"),
                a = t("../shaders/PrimitiveShader"),
                h = t("../../../utils");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, h.pluginTarget.mixin(r), e.exports = r, r.prototype.onContextChange = function () {
                this.initPlugins();
                var t = this.renderer.gl;
                this.maxAttibs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = [];
                for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
                this.defaultShader = new s(this), this.primitiveShader = new a(this), this.complexPrimitiveShader = new o(this)
            }, r.prototype.setAttribs = function (t) {
                var e;
                for (e = 0; e < this.tempAttribState.length; e++) this.tempAttribState[e] = !1;
                for (var i in t) this.tempAttribState[t[i]] = !0;
                var r = this.renderer.gl;
                for (e = 0; e < this.attribState.length; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.attribState[e] ? r.enableVertexAttribArray(e) : r.disableVertexAttribArray(e))
            }, r.prototype.setShader = function (t) {
                return this._currentId === t.uid ? !1 : (this._currentId = t.uid, this.currentShader = t, this.renderer.gl.useProgram(t.program), this.setAttribs(t.attributes), !0)
            }, r.prototype.destroy = function () {
                n.prototype.destroy.call(this), this.destroyPlugins(), this.attribState = null, this.tempAttribState = null
            }
        }, {
            "../../../utils": 75,
            "../shaders/ComplexPrimitiveShader": 57,
            "../shaders/PrimitiveShader": 58,
            "../shaders/TextureShader": 60,
            "./WebGLManager": 56
        }],
        55: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.stencilMaskStack = null
            }
            var n = t("./WebGLManager"),
                s = t("../../../utils");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setMaskStack = function (t) {
                this.stencilMaskStack = t;
                var e = this.renderer.gl;
                0 === t.stencilStack.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
            }, r.prototype.pushStencil = function (t, e) {
                this.renderer.currentRenderTarget.attachStencilBuffer();
                var i = this.renderer.gl,
                    r = this.stencilMaskStack;
                this.bindGraphics(t, e, this.renderer), 0 === r.stencilStack.length && (i.enable(i.STENCIL_TEST), i.clear(i.STENCIL_BUFFER_BIT), r.reverse = !0, r.count = 0), r.stencilStack.push(e);
                var n = r.count;
                i.colorMask(!1, !1, !1, !1), i.stencilFunc(i.ALWAYS, 0, 255), i.stencilOp(i.KEEP, i.KEEP, i.INVERT), 1 === e.mode ? (i.drawElements(i.TRIANGLE_FAN, e.indices.length - 4, i.UNSIGNED_SHORT, 0), r.reverse ? (i.stencilFunc(i.EQUAL, 255 - n, 255), i.stencilOp(i.KEEP, i.KEEP, i.DECR)) : (i.stencilFunc(i.EQUAL, n, 255), i.stencilOp(i.KEEP, i.KEEP, i.INCR)), i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.reverse ? i.stencilFunc(i.EQUAL, 255 - (n + 1), 255) : i.stencilFunc(i.EQUAL, n + 1, 255), r.reverse = !r.reverse) : (r.reverse ? (i.stencilFunc(i.EQUAL, n, 255), i.stencilOp(i.KEEP, i.KEEP, i.INCR)) : (i.stencilFunc(i.EQUAL, 255 - n, 255), i.stencilOp(i.KEEP, i.KEEP, i.DECR)), i.drawElements(i.TRIANGLE_STRIP, e.indices.length, i.UNSIGNED_SHORT, 0), r.reverse ? i.stencilFunc(i.EQUAL, n + 1, 255) : i.stencilFunc(i.EQUAL, 255 - (n + 1), 255)), i.colorMask(!0, !0, !0, !0), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), r.count++
            }, r.prototype.bindGraphics = function (t, e) {
                this._currentGraphics = t;
                var i, r = this.renderer.gl;
                1 === e.mode ? (i = this.renderer.shaderManager.complexPrimitiveShader, this.renderer.shaderManager.setShader(i), r.uniformMatrix3fv(i.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), r.uniformMatrix3fv(i.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), r.uniform3fv(i.uniforms.tint._location, s.hex2rgb(t.tint)), r.uniform3fv(i.uniforms.color._location, e.color), r.uniform1f(i.uniforms.alpha._location, t.worldAlpha), r.bindBuffer(r.ARRAY_BUFFER, e.buffer), r.vertexAttribPointer(i.attributes.aVertexPosition, 2, r.FLOAT, !1, 8, 0), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (i = this.renderer.shaderManager.primitiveShader, this.renderer.shaderManager.setShader(i), r.uniformMatrix3fv(i.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), r.uniformMatrix3fv(i.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), r.uniform3fv(i.uniforms.tint._location, s.hex2rgb(t.tint)), r.uniform1f(i.uniforms.alpha._location, t.worldAlpha), r.bindBuffer(r.ARRAY_BUFFER, e.buffer), r.vertexAttribPointer(i.attributes.aVertexPosition, 2, r.FLOAT, !1, 24, 0), r.vertexAttribPointer(i.attributes.aColor, 4, r.FLOAT, !1, 24, 8), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer))
            }, r.prototype.popStencil = function (t, e) {
                var i = this.renderer.gl,
                    r = this.stencilMaskStack;
                if (r.stencilStack.pop(), r.count--, 0 === r.stencilStack.length) i.disable(i.STENCIL_TEST);
                else {
                    var n = r.count;
                    this.bindGraphics(t, e, this.renderer), i.colorMask(!1, !1, !1, !1), 1 === e.mode ? (r.reverse = !r.reverse, r.reverse ? (i.stencilFunc(i.EQUAL, 255 - (n + 1), 255), i.stencilOp(i.KEEP, i.KEEP, i.INCR)) : (i.stencilFunc(i.EQUAL, n + 1, 255), i.stencilOp(i.KEEP, i.KEEP, i.DECR)), i.drawElements(i.TRIANGLE_FAN, 4, i.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), i.stencilFunc(i.ALWAYS, 0, 255), i.stencilOp(i.KEEP, i.KEEP, i.INVERT), i.drawElements(i.TRIANGLE_FAN, e.indices.length - 4, i.UNSIGNED_SHORT, 0), r.reverse ? i.stencilFunc(i.EQUAL, n, 255) : i.stencilFunc(i.EQUAL, 255 - n, 255)) : (r.reverse ? (i.stencilFunc(i.EQUAL, n + 1, 255), i.stencilOp(i.KEEP, i.KEEP, i.DECR)) : (i.stencilFunc(i.EQUAL, 255 - (n + 1), 255), i.stencilOp(i.KEEP, i.KEEP, i.INCR)), i.drawElements(i.TRIANGLE_STRIP, e.indices.length, i.UNSIGNED_SHORT, 0), r.reverse ? i.stencilFunc(i.EQUAL, n, 255) : i.stencilFunc(i.EQUAL, 255 - n, 255)), i.colorMask(!0, !0, !0, !0), i.stencilOp(i.KEEP, i.KEEP, i.KEEP)
                }
            }, r.prototype.destroy = function () {
                n.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
            }, r.prototype.pushMask = function (t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), t.dirty && this.renderer.plugins.graphics.updateGraphics(t, this.renderer.gl), t._webGL[this.renderer.gl.id].data.length && this.pushStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer)
            }, r.prototype.popMask = function (t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.popStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer)
            }
        }, {
            "../../../utils": 75,
            "./WebGLManager": 56
        }],
        56: [function (t, e, i) {
            function r(t) {
                this.renderer = t, this.renderer.on("context", this.onContextChange, this)
            }
            r.prototype.constructor = r, e.exports = r, r.prototype.onContextChange = function () {}, r.prototype.destroy = function () {
                this.renderer.off("context", this.onContextChange, this), this.renderer = null
            }
        }, {}],
        57: [function (t, e, i) {
            function r(t) {
                n.call(this, t, ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
                    tint: {
                        type: "3f",
                        value: [0, 0, 0]
                    },
                    alpha: {
                        type: "1f",
                        value: 0
                    },
                    color: {
                        type: "3f",
                        value: [0, 0, 0]
                    },
                    translationMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    }
                }, {
                    aVertexPosition: 0
                })
            }
            var n = t("./Shader");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
        }, {
            "./Shader": 59
        }],
        58: [function (t, e, i) {
            function r(t) {
                n.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), {
                    tint: {
                        type: "3f",
                        value: [0, 0, 0]
                    },
                    alpha: {
                        type: "1f",
                        value: 0
                    },
                    translationMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    }
                }, {
                    aVertexPosition: 0,
                    aColor: 0
                })
            }
            var n = t("./Shader");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r
        }, {
            "./Shader": 59
        }],
        59: [function (t, e, i) {
            function r(t, e, i, r, s) {
                if (!e || !i) throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");
                this.uid = n.uid(), this.gl = t.renderer.gl, this.shaderManager = t, this.program = null, this.uniforms = r || {}, this.attributes = s || {}, this.textureCount = 1, this.vertexSrc = e, this.fragmentSrc = i, this.init()
            }
            var n = t("../../../utils");
            r.prototype.constructor = r, e.exports = r, r.prototype.init = function () {
                this.compile(), this.gl.useProgram(this.program), this.cacheUniformLocations(Object.keys(this.uniforms)), this.cacheAttributeLocations(Object.keys(this.attributes))
            }, r.prototype.cacheUniformLocations = function (t) {
                for (var e = 0; e < t.length; ++e) this.uniforms[t[e]]._location = this.gl.getUniformLocation(this.program, t[e])
            }, r.prototype.cacheAttributeLocations = function (t) {
                for (var e = 0; e < t.length; ++e) this.attributes[t[e]] = this.gl.getAttribLocation(this.program, t[e])
            }, r.prototype.compile = function () {
                var t = this.gl,
                    e = this._glCompile(t.VERTEX_SHADER, this.vertexSrc),
                    i = this._glCompile(t.FRAGMENT_SHADER, this.fragmentSrc),
                    r = t.createProgram();
                return t.attachShader(r, e), t.attachShader(r, i), t.linkProgram(r), t.getProgramParameter(r, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(r, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(r) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(r)), t.deleteProgram(r), r = null), t.deleteShader(e), t.deleteShader(i), this.program = r
            }, r.prototype.syncUniform = function (t) {
                var e, i, r = t._location,
                    s = t.value,
                    o = this.gl;
                switch (t.type) {
                case "b":
                case "bool":
                case "boolean":
                    o.uniform1i(r, s ? 1 : 0);
                    break;
                case "i":
                case "1i":
                    o.uniform1i(r, s);
                    break;
                case "f":
                case "1f":
                    o.uniform1f(r, s);
                    break;
                case "2f":
                    o.uniform2f(r, s[0], s[1]);
                    break;
                case "3f":
                    o.uniform3f(r, s[0], s[1], s[2]);
                    break;
                case "4f":
                    o.uniform4f(r, s[0], s[1], s[2], s[3]);
                    break;
                case "v2":
                    o.uniform2f(r, s.x, s.y);
                    break;
                case "v3":
                    o.uniform3f(r, s.x, s.y, s.z);
                    break;
                case "v4":
                    o.uniform4f(r, s.x, s.y, s.z, s.w);
                    break;
                case "1iv":
                    o.uniform1iv(r, s);
                    break;
                case "2iv":
                    o.uniform2iv(r, s);
                    break;
                case "3iv":
                    o.uniform3iv(r, s);
                    break;
                case "4iv":
                    o.uniform4iv(r, s);
                    break;
                case "1fv":
                    o.uniform1fv(r, s);
                    break;
                case "2fv":
                    o.uniform2fv(r, s);
                    break;
                case "3fv":
                    o.uniform3fv(r, s);
                    break;
                case "4fv":
                    o.uniform4fv(r, s);
                    break;
                case "m2":
                case "mat2":
                case "Matrix2fv":
                    o.uniformMatrix2fv(r, t.transpose, s);
                    break;
                case "m3":
                case "mat3":
                case "Matrix3fv":
                    o.uniformMatrix3fv(r, t.transpose, s);
                    break;
                case "m4":
                case "mat4":
                case "Matrix4fv":
                    o.uniformMatrix4fv(r, t.transpose, s);
                    break;
                case "c":
                    "number" == typeof s && (s = n.hex2rgb(s)), o.uniform3f(r, s[0], s[1], s[2]);
                    break;
                case "iv1":
                    o.uniform1iv(r, s);
                    break;
                case "iv":
                    o.uniform3iv(r, s);
                    break;
                case "fv1":
                    o.uniform1fv(r, s);
                    break;
                case "fv":
                    o.uniform3fv(r, s);
                    break;
                case "v2v":
                    for (t._array || (t._array = new Float32Array(2 * s.length)), e = 0, i = s.length; i > e; ++e) t._array[2 * e] = s[e].x, t._array[2 * e + 1] = s[e].y;
                    o.uniform2fv(r, t._array);
                    break;
                case "v3v":
                    for (t._array || (t._array = new Float32Array(3 * s.length)), e = 0, i = s.length; i > e; ++e) t._array[3 * e] = s[e].x, t._array[3 * e + 1] = s[e].y, t._array[3 * e + 2] = s[e].z;
                    o.uniform3fv(r, t._array);
                    break;
                case "v4v":
                    for (t._array || (t._array = new Float32Array(4 * s.length)), e = 0, i = s.length; i > e; ++e) t._array[4 * e] = s[e].x, t._array[4 * e + 1] = s[e].y, t._array[4 * e + 2] = s[e].z, t._array[4 * e + 3] = s[e].w;
                    o.uniform4fv(r, t._array);
                    break;
                case "t":
                case "sampler2D":
                    if (!t.value || !t.value.baseTexture.hasLoaded) break;
                    o.activeTexture(o["TEXTURE" + this.textureCount]);
                    var a = t.value.baseTexture._glTextures[o.id];
                    a || (this.initSampler2D(t), a = t.value.baseTexture._glTextures[o.id]), o.bindTexture(o.TEXTURE_2D, a), o.uniform1i(t._location, this.textureCount), this.textureCount++;
                    break;
                default:
                    console.warn("Pixi.js Shader Warning: Unknown uniform type: " + t.type)
                }
            }, r.prototype.syncUniforms = function () {
                this.textureCount = 1;
                for (var t in this.uniforms) this.syncUniform(this.uniforms[t])
            }, r.prototype.initSampler2D = function (t) {
                var e = this.gl,
                    i = t.value.baseTexture;
                if (i.hasLoaded)
                    if (t.textureData) {
                        var r = t.textureData;
                        i._glTextures[e.id] = e.createTexture(), e.bindTexture(e.TEXTURE_2D, i._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, r.luminance ? e.LUMINANCE : e.RGBA, e.RGBA, e.UNSIGNED_BYTE, i.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, r.magFilter ? r.magFilter : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, r.wrapS ? r.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, r.wrapS ? r.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, r.wrapT ? r.wrapT : e.CLAMP_TO_EDGE)
                    } else this.shaderManager.renderer.updateTexture(i)
            }, r.prototype.destroy = function () {
                this.gl.deleteProgram(this.program), this.gl = null, this.uniforms = null, this.attributes = null, this.vertexSrc = null, this.fragmentSrc = null
            }, r.prototype._glCompile = function (t, e) {
                var i = this.gl.createShader(t);
                return this.gl.shaderSource(i, e), this.gl.compileShader(i), this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS) ? i : (console.log(this.gl.getShaderInfoLog(i)), null)
            }
        }, {
            "../../../utils": 75
        }],
        60: [function (t, e, i) {
            function r(t, e, i, s, o) {
                var a = {
                    uSampler: {
                        type: "sampler2D",
                        value: 0
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1])
                    }
                };
                if (s)
                    for (var h in s) a[h] = s[h];
                var l = {
                    aVertexPosition: 0,
                    aTextureCoord: 0,
                    aColor: 0
                };
                if (o)
                    for (var u in o) l[u] = o[u];
                e = e || r.defaultVertexSrc, i = i || r.defaultFragmentSrc, n.call(this, t, e, i, a, l)
            }
            var n = t("./Shader");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.defaultVertexSrc = ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), r.defaultFragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"].join("\n")
        }, {
            "./Shader": 59
        }],
        61: [function (t, e, i) {
            function r(t) {
                n.call(this, t)
            }
            var n = t("../managers/WebGLManager");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.start = function () {}, r.prototype.stop = function () {
                this.flush()
            }, r.prototype.flush = function () {}, r.prototype.render = function (t) {}
        }, {
            "../managers/WebGLManager": 56
        }],
        62: [function (t, e, i) {
            function r(t) {
                this.gl = t, this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]), this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, 128, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.upload()
            }
            r.prototype.constructor = r, r.prototype.map = function (t, e) {
                var i = 0,
                    r = 0;
                this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this.upload()
            }, r.prototype.upload = function () {
                var t = this.gl;
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices), t.bufferSubData(t.ARRAY_BUFFER, 32, this.uvs), t.bufferSubData(t.ARRAY_BUFFER, 64, this.colors)
            }, e.exports = r
        }, {}],
        63: [function (t, e, i) {
            var r = t("../../../math"),
                n = t("../../../utils"),
                s = t("../../../const"),
                o = t("./StencilMaskStack"),
                a = function (t, e, i, a, h, l) {
                    if (this.gl = t, this.frameBuffer = null, this.texture = null, this.size = new r.Rectangle(0, 0, 1, 1), this.resolution = h || s.RESOLUTION, this.projectionMatrix = new r.Matrix, this.transform = null, this.frame = null, this.stencilBuffer = null, this.stencilMaskStack = new o, this.filterStack = [{
                            renderTarget: this,
                            filter: [],
                            bounds: this.size
                        }], this.scaleMode = a || s.SCALE_MODES.DEFAULT, this.root = l, !this.root) {
                        this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, a === s.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a === s.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST);
                        var u = n.isPowerOfTwo(e, i);
                        u ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0)
                    }
                    this.resize(e, i)
                };
            a.prototype.constructor = a, e.exports = a, a.prototype.clear = function (t) {
                var e = this.gl;
                t && e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT)
            }, a.prototype.attachStencilBuffer = function () {
                if (!this.stencilBuffer && !this.root) {
                    var t = this.gl;
                    this.stencilBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencilBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution)
                }
            }, a.prototype.activate = function () {
                var t = this.gl;
                t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer);
                var e = this.frame || this.size;
                this.calculateProjection(e), this.transform && this.projectionMatrix.append(this.transform), t.viewport(0, 0, e.width * this.resolution, e.height * this.resolution)
            }, a.prototype.calculateProjection = function (t) {
                var e = this.projectionMatrix;
                e.identity(), this.root ? (e.a = 1 / t.width * 2, e.d = -1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = 1 - t.y * e.d) : (e.a = 1 / t.width * 2, e.d = 1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = -1 - t.y * e.d)
            }, a.prototype.resize = function (t, e) {
                if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) {
                    if (this.size.width = t, this.size.height = e, !this.root) {
                        var i = this.gl;
                        i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t * this.resolution, e * this.resolution, 0, i.RGBA, i.UNSIGNED_BYTE, null), this.stencilBuffer && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencilBuffer), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t * this.resolution, e * this.resolution))
                    }
                    var r = this.frame || this.size;
                    this.calculateProjection(r)
                }
            }, a.prototype.destroy = function () {
                var t = this.gl;
                t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
            }
        }, {
            "../../../const": 21,
            "../../../math": 31,
            "../../../utils": 75,
            "./StencilMaskStack": 64
        }],
        64: [function (t, e, i) {
            function r() {
                this.stencilStack = [], this.reverse = !0, this.count = 0
            }
            r.prototype.constructor = r, e.exports = r
        }, {}],
        65: [function (t, e, i) {
            function r(t) {
                o.call(this), this.anchor = new n.Point, this._texture = null, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = l.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || s.EMPTY
            }
            var n = t("../math"),
                s = t("../textures/Texture"),
                o = t("../display/Container"),
                a = t("../renderers/canvas/utils/CanvasTinter"),
                h = t("../utils"),
                l = t("../const"),
                u = new n.Point;
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.scale.x * this.texture._frame.width
                    },
                    set: function (t) {
                        this.scale.x = t / this.texture._frame.width, this._width = t
                    }
                },
                height: {
                    get: function () {
                        return this.scale.y * this.texture._frame.height
                    },
                    set: function (t) {
                        this.scale.y = t / this.texture._frame.height, this._height = t
                    }
                },
                texture: {
                    get: function () {
                        return this._texture
                    },
                    set: function (t) {
                        this._texture !== t && (this._texture = t, this.cachedTint = 16777215, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }
            }), r.prototype._onTextureUpdate = function () {
                this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
            }, r.prototype._renderWebGL = function (t) {
                t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this)
            }, r.prototype.getBounds = function (t) {
                if (!this._currentBounds) {
                    var e, i, r, n, s = this._texture._frame.width,
                        o = this._texture._frame.height,
                        a = s * (1 - this.anchor.x),
                        h = s * -this.anchor.x,
                        l = o * (1 - this.anchor.y),
                        u = o * -this.anchor.y,
                        c = t || this.worldTransform,
                        p = c.a,
                        d = c.b,
                        f = c.c,
                        g = c.d,
                        v = c.tx,
                        m = c.ty;
                    if (0 === d && 0 === f) 0 > p && (p *= -1), 0 > g && (g *= -1), e = p * h + v, i = p * a + v, r = g * u + m, n = g * l + m;
                    else {
                        var y = p * h + f * u + v,
                            x = g * u + d * h + m,
                            _ = p * a + f * u + v,
                            b = g * u + d * a + m,
                            T = p * a + f * l + v,
                            w = g * l + d * a + m,
                            E = p * h + f * l + v,
                            S = g * l + d * h + m;
                        e = y, e = e > _ ? _ : e, e = e > T ? T : e, e = e > E ? E : e, r = x, r = r > b ? b : r, r = r > w ? w : r, r = r > S ? S : r, i = y, i = _ > i ? _ : i, i = T > i ? T : i, i = E > i ? E : i, n = x, n = b > n ? b : n, n = w > n ? w : n, n = S > n ? S : n
                    }
                    if (this.children.length) {
                        var C = this.containerGetBounds();
                        a = C.x, h = C.x + C.width, l = C.y, u = C.y + C.height, e = a > e ? e : a, r = l > r ? r : l, i = i > h ? i : h, n = n > u ? n : u
                    }
                    var A = this._bounds;
                    A.x = e, A.width = i - e, A.y = r, A.height = n - r, this._currentBounds = A
                }
                return this._currentBounds
            }, r.prototype.getLocalBounds = function () {
                return this._bounds.x = -this._texture._frame.width * this.anchor.x, this._bounds.y = -this._texture._frame.height * this.anchor.y, this._bounds.width = this._texture._frame.width, this._bounds.height = this._texture._frame.height, this._bounds
            }, r.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, u);
                var e, i = this._texture._frame.width,
                    r = this._texture._frame.height,
                    n = -i * this.anchor.x;
                return u.x > n && u.x < n + i && (e = -r * this.anchor.y, u.y > e && u.y < e + r) ? !0 : !1
            }, r.prototype._renderCanvas = function (t) {
                if (!(this.texture.crop.width <= 0 || this.texture.crop.height <= 0) && (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = t.blendModes[t.currentBlendMode]), this.texture.valid)) {
                    var e, i, r, n, s = this._texture,
                        o = this.worldTransform;
                    if (t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.currentScaleMode !== s.baseTexture.scaleMode && (t.currentScaleMode = s.baseTexture.scaleMode, t.context[t.smoothProperty] = t.currentScaleMode === l.SCALE_MODES.LINEAR), s.rotate) {
                        var h = o.a,
                            u = o.b;
                        o.a = -o.c, o.b = -o.d, o.c = h, o.d = u, r = s.crop.height, n = s.crop.width, e = s.trim ? s.trim.y - this.anchor.y * s.trim.height : this.anchor.y * -s._frame.height, i = s.trim ? s.trim.x - this.anchor.x * s.trim.width : this.anchor.x * -s._frame.width
                    } else r = s.crop.width, n = s.crop.height, e = s.trim ? s.trim.x - this.anchor.x * s.trim.width : this.anchor.x * -s._frame.width, i = s.trim ? s.trim.y - this.anchor.y * s.trim.height : this.anchor.y * -s._frame.height;
                    t.roundPixels ? (t.context.setTransform(o.a, o.b, o.c, o.d, o.tx * t.resolution | 0, o.ty * t.resolution | 0), e = 0 | e, i = 0 | i) : t.context.setTransform(o.a, o.b, o.c, o.d, o.tx * t.resolution, o.ty * t.resolution);
                    var c = s.baseTexture.resolution;
                    16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = a.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, r * c, n * c, e * t.resolution, i * t.resolution, r * t.resolution, n * t.resolution)) : t.context.drawImage(s.baseTexture.source, s.crop.x * c, s.crop.y * c, r * c, n * c, e * t.resolution, i * t.resolution, r * t.resolution, n * t.resolution)
                }
            }, r.prototype.destroy = function (t, e) {
                o.prototype.destroy.call(this), this.anchor = null, t && this._texture.destroy(e), this._texture = null, this.shader = null
            }, r.fromFrame = function (t) {
                var e = h.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return new r(e)
            }, r.fromImage = function (t, e, i) {
                return new r(s.fromImage(t, e, i))
            }
        }, {
            "../const": 21,
            "../display/Container": 22,
            "../math": 31,
            "../renderers/canvas/utils/CanvasTinter": 46,
            "../textures/Texture": 70,
            "../utils": 75
        }],
        66: [function (t, e, i) {
            function r(t) {
                n.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = o.SPRITE_BATCH_SIZE;
                var e = 4 * this.size * this.vertByteSize,
                    i = 6 * this.size;
                this.vertices = new ArrayBuffer(e), this.positions = new Float32Array(this.vertices), this.colors = new Uint32Array(this.vertices), this.indices = new Uint16Array(i);
                for (var r = 0, s = 0; i > r; r += 6, s += 4) this.indices[r + 0] = s + 0, this.indices[r + 1] = s + 1, this.indices[r + 2] = s + 2, this.indices[r + 3] = s + 0, this.indices[r + 4] = s + 2, this.indices[r + 5] = s + 3;
                this.currentBatchSize = 0, this.sprites = [], this.shader = null
            }
            var n = t("../../renderers/webgl/utils/ObjectRenderer"),
                s = t("../../renderers/webgl/WebGLRenderer"),
                o = t("../../const");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, s.registerPlugin("sprite", r), r.prototype.onContextChange = function () {
                var t = this.renderer.gl;
                this.shader = this.renderer.shaderManager.defaultShader, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999
            }, r.prototype.render = function (t) {
                var e = t._texture;
                this.currentBatchSize >= this.size && this.flush();
                var i = e._uvs;
                if (i) {
                    var r, n, s, o, a = t.anchor.x,
                        h = t.anchor.y;
                    if (e.trim) {
                        var l = e.trim;
                        n = l.x - a * l.width, r = n + e.crop.width, o = l.y - h * l.height, s = o + e.crop.height
                    } else r = e._frame.width * (1 - a), n = e._frame.width * -a, s = e._frame.height * (1 - h), o = e._frame.height * -h;
                    var u = this.currentBatchSize * this.vertByteSize,
                        c = t.worldTransform,
                        p = c.a,
                        d = c.b,
                        f = c.c,
                        g = c.d,
                        v = c.tx,
                        m = c.ty,
                        y = this.colors,
                        x = this.positions;
                    this.renderer.roundPixels ? (x[u] = p * n + f * o + v | 0, x[u + 1] = g * o + d * n + m | 0, x[u + 5] = p * r + f * o + v | 0, x[u + 6] = g * o + d * r + m | 0, x[u + 10] = p * r + f * s + v | 0, x[u + 11] = g * s + d * r + m | 0, x[u + 15] = p * n + f * s + v | 0, x[u + 16] = g * s + d * n + m | 0) : (x[u] = p * n + f * o + v, x[u + 1] = g * o + d * n + m, x[u + 5] = p * r + f * o + v, x[u + 6] = g * o + d * r + m, x[u + 10] = p * r + f * s + v, x[u + 11] = g * s + d * r + m, x[u + 15] = p * n + f * s + v, x[u + 16] = g * s + d * n + m), x[u + 2] = i.x0, x[u + 3] = i.y0, x[u + 7] = i.x1, x[u + 8] = i.y1, x[u + 12] = i.x2, x[u + 13] = i.y2, x[u + 17] = i.x3, x[u + 18] = i.y3;
                    var _ = t.tint;
                    y[u + 4] = y[u + 9] = y[u + 14] = y[u + 19] = (_ >> 16) + (65280 & _) + ((255 & _) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t
                }
            }, r.prototype.flush = function () {
                if (0 !== this.currentBatchSize) {
                    var t, e = this.renderer.gl;
                    if (this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
                    else {
                        var i = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
                        e.bufferSubData(e.ARRAY_BUFFER, 0, i)
                    }
                    for (var r, n, s, o, a = 0, h = 0, l = null, u = this.renderer.blendModeManager.currentBlendMode, c = null, p = !1, d = !1, f = 0, g = this.currentBatchSize; g > f; f++) o = this.sprites[f], r = o._texture.baseTexture, n = o.blendMode, s = o.shader || this.shader, p = u !== n, d = c !== s, (l !== r || p || d) && (this.renderBatch(l, a, h), h = f, a = 0, l = r, p && (u = n, this.renderer.blendModeManager.setBlendMode(u)), d && (c = s, t = c.shaders ? c.shaders[e.id] : c, t || (t = c.getShader(this.renderer)), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), e.activeTexture(e.TEXTURE0))), a++;
                    this.renderBatch(l, a, h), this.currentBatchSize = 0
                }
            }, r.prototype.renderBatch = function (t, e, i) {
                if (0 !== e) {
                    var r = this.renderer.gl;
                    t._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, t._glTextures[r.id]) : this.renderer.updateTexture(t), r.drawElements(r.TRIANGLES, 6 * e, r.UNSIGNED_SHORT, 6 * i * 2), this.renderer.drawCount++
                }
            }, r.prototype.start = function () {
                var t = this.renderer.gl;
                t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
                var e = this.vertByteSize;
                t.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, t.FLOAT, !1, e, 0), t.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, t.FLOAT, !1, e, 8), t.vertexAttribPointer(this.shader.attributes.aColor, 4, t.UNSIGNED_BYTE, !0, e, 16)
            }, r.prototype.destroy = function () {
                this.renderer.gl.deleteBuffer(this.vertexBuffer), this.renderer.gl.deleteBuffer(this.indexBuffer), this.shader.destroy(), this.renderer = null, this.vertices = null, this.positions = null, this.colors = null, this.indices = null, this.vertexBuffer = null, this.indexBuffer = null, this.sprites = null, this.shader = null
            }
        }, {
            "../../const": 21,
            "../../renderers/webgl/WebGLRenderer": 47,
            "../../renderers/webgl/utils/ObjectRenderer": 61
        }],
        67: [function (t, e, i) {
            function r(t, e, i) {
                this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = i || h.RESOLUTION, this._text = null, this._style = null;
                var r = s.fromCanvas(this.canvas);
                r.trim = new o.Rectangle, n.call(this, r), this.text = t, this.style = e
            }
            var n = t("../sprites/Sprite"),
                s = t("../textures/Texture"),
                o = t("../math"),
                a = t("../utils"),
                h = t("../const");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.fontPropertiesCache = {}, r.fontPropertiesCanvas = document.createElement("canvas"), r.fontPropertiesContext = r.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this.dirty && this.updateText(), this.scale.x * this._texture._frame.width
                    },
                    set: function (t) {
                        this.scale.x = t / this._texture._frame.width, this._width = t
                    }
                },
                height: {
                    get: function () {
                        return this.dirty && this.updateText(), this.scale.y * this._texture._frame.height
                    },
                    set: function (t) {
                        this.scale.y = t / this._texture._frame.height, this._height = t
                    }
                },
                style: {
                    get: function () {
                        return this._style
                    },
                    set: function (t) {
                        t = t || {}, "number" == typeof t.fill && (t.fill = a.hex2string(t.fill)), "number" == typeof t.stroke && (t.stroke = a.hex2string(t.stroke)), "number" == typeof t.dropShadowColor && (t.dropShadowColor = a.hex2string(t.dropShadowColor)), t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowColor = t.dropShadowColor || "#000000", t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 5, t.padding = t.padding || 0, t.textBaseline = t.textBaseline || "alphabetic", t.lineJoin = t.lineJoin || "miter", t.miterLimit = t.miterLimit || 10, this._style = t, this.dirty = !0
                    }
                },
                text: {
                    get: function () {
                        return this._text
                    },
                    set: function (t) {
                        t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }
            }), r.prototype.updateText = function () {
                var t = this._style;
                this.context.font = t.font;
                for (var e = t.wordWrap ? this.wordWrap(this._text) : this._text, i = e.split(/(?:\r\n|\r|\n)/), r = new Array(i.length), n = 0, s = this.determineFontProperties(t.font), o = 0; o < i.length; o++) {
                    var a = this.context.measureText(i[o]).width;
                    r[o] = a, n = Math.max(n, a)
                }
                var h = n + t.strokeThickness;
                t.dropShadow && (h += t.dropShadowDistance), this.canvas.width = (h + this.context.lineWidth) * this.resolution;
                var l = this.style.lineHeight || s.fontSize + t.strokeThickness,
                    u = l * i.length;
                t.dropShadow && (u += t.dropShadowDistance), this.canvas.height = (u + 2 * this._style.padding) * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = t.font, this.context.strokeStyle = t.stroke, this.context.lineWidth = t.strokeThickness, this.context.textBaseline = t.textBaseline, this.context.lineJoin = t.lineJoin, this.context.miterLimit = t.miterLimit;
                var c, p;
                if (t.dropShadow) {
                    this.context.fillStyle = t.dropShadowColor;
                    var d = Math.cos(t.dropShadowAngle) * t.dropShadowDistance,
                        f = Math.sin(t.dropShadowAngle) * t.dropShadowDistance;
                    for (o = 0; o < i.length; o++) c = t.strokeThickness / 2, p = t.strokeThickness / 2 + o * l + s.ascent, "right" === t.align ? c += n - r[o] : "center" === t.align && (c += (n - r[o]) / 2), t.fill && this.context.fillText(i[o], c + d, p + f + this._style.padding)
                }
                for (this.context.fillStyle = t.fill, o = 0; o < i.length; o++) c = t.strokeThickness / 2, p = t.strokeThickness / 2 + o * l + s.ascent, "right" === t.align ? c += n - r[o] : "center" === t.align && (c += (n - r[o]) / 2), t.stroke && t.strokeThickness && this.context.strokeText(i[o], c, p + this._style.padding), t.fill && this.context.fillText(i[o], c, p + this._style.padding);
                this.updateTexture()
            }, r.prototype.updateTexture = function () {
                var t = this._texture;
                t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.crop.width = t._frame.width = this.canvas.width / this.resolution, t.crop.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = 0, t.trim.y = -this._style.padding, t.trim.width = t._frame.width, t.trim.height = t._frame.height - 2 * this._style.padding, this._width = this.canvas.width / this.resolution, this._height = this.canvas.height / this.resolution, t.baseTexture.emit("update", t.baseTexture), this.dirty = !1
            }, r.prototype.renderWebGL = function (t) {
                this.dirty && this.updateText(), n.prototype.renderWebGL.call(this, t)
            }, r.prototype._renderCanvas = function (t) {
                this.dirty && this.updateText(), n.prototype._renderCanvas.call(this, t)
            }, r.prototype.determineFontProperties = function (t) {
                var e = r.fontPropertiesCache[t];
                if (!e) {
                    e = {};
                    var i = r.fontPropertiesCanvas,
                        n = r.fontPropertiesContext;
                    n.font = t;
                    var s = Math.ceil(n.measureText("|MÉq").width),
                        o = Math.ceil(n.measureText("M").width),
                        a = 2 * o;
                    o = 1.4 * o | 0, i.width = s, i.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, s, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÉq", 0, o);
                    var h, l, u = n.getImageData(0, 0, s, a).data,
                        c = u.length,
                        p = 4 * s,
                        d = 0,
                        f = !1;
                    for (h = 0; o > h; h++) {
                        for (l = 0; p > l; l += 4)
                            if (255 !== u[d + l]) {
                                f = !0;
                                break
                            }
                        if (f) break;
                        d += p
                    }
                    for (e.ascent = o - h, d = c - p, f = !1, h = a; h > o; h--) {
                        for (l = 0; p > l; l += 4)
                            if (255 !== u[d + l]) {
                                f = !0;
                                break
                            }
                        if (f) break;
                        d -= p
                    }
                    e.descent = h - o, e.fontSize = e.ascent + e.descent, r.fontPropertiesCache[t] = e
                }
                return e
            }, r.prototype.wordWrap = function (t) {
                for (var e = "", i = t.split("\n"), r = this._style.wordWrapWidth, n = 0; n < i.length; n++) {
                    for (var s = r, o = i[n].split(" "), a = 0; a < o.length; a++) {
                        var h = this.context.measureText(o[a]).width,
                            l = h + this.context.measureText(" ").width;
                        0 === a || l > s ? (a > 0 && (e += "\n"), e += o[a], s = r - h) : (s -= l, e += " " + o[a])
                    }
                    n < i.length - 1 && (e += "\n")
                }
                return e
            }, r.prototype.getBounds = function (t) {
                return this.dirty && this.updateText(), n.prototype.getBounds.call(this, t)
            }, r.prototype.destroy = function (t) {
                this.context = null, this.canvas = null, this._style = null, this._texture.destroy(void 0 === t ? !0 : t)
            }
        }, {
            "../const": 21,
            "../math": 31,
            "../sprites/Sprite": 65,
            "../textures/Texture": 70,
            "../utils": 75
        }],
        68: [function (t, e, i) {
            function r(t, e, i) {
                o.call(this), this.uid = n.uid(), this.resolution = i || 1, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || s.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = !1, this._glTextures = [], t && this.loadSource(t)
            }
            var n = t("../utils"),
                s = t("../const"),
                o = t("eventemitter3");
            r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.update = function () {
                this.realWidth = this.source.naturalWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = n.isPowerOfTwo(this.realWidth, this.realHeight), this.emit("update", this)
            }, r.prototype.loadSource = function (t) {
                var e = this.isLoading;
                if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
                else if (!t.getContext) {
                    this.isLoading = !0;
                    var i = this;
                    t.onload = function () {
                        t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i._sourceLoaded(), i.emit("loaded", i))
                    }, t.onerror = function () {
                        t.onload = null, t.onerror = null, i.isLoading && (i.isLoading = !1, i.emit("error", i))
                    }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
                }
            }, r.prototype._sourceLoaded = function () {
                this.hasLoaded = !0, this.update()
            }, r.prototype.destroy = function () {
                this.imageUrl ? (delete n.BaseTextureCache[this.imageUrl], delete n.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete n.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose()
            }, r.prototype.dispose = function () {
                this.emit("dispose", this), this._glTextures.length = 0
            }, r.prototype.updateSourceImage = function (t) {
                this.source.src = t, this.loadSource(this.source)
            }, r.fromImage = function (t, e, i) {
                var s = n.BaseTextureCache[t];
                if (void 0 === e && 0 !== t.indexOf("data:") && (e = !0), !s) {
                    var o = new Image;
                    e && (o.crossOrigin = ""), s = new r(o, i), s.imageUrl = t, o.src = t, n.BaseTextureCache[t] = s, s.resolution = n.getResolutionOfUrl(t)
                }
                return s
            }, r.fromCanvas = function (t, e) {
                t._pixiId || (t._pixiId = "canvas_" + n.uid());
                var i = n.BaseTextureCache[t._pixiId];
                return i || (i = new r(t, e), n.BaseTextureCache[t._pixiId] = i), i
            }
        }, {
            "../const": 21,
            "../utils": 75,
            eventemitter3: 11
        }],
        69: [function (t, e, i) {
            function r(t, e, i, r, c) {
                if (!t) throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");
                e = e || 100, i = i || 100, c = c || u.RESOLUTION;
                var p = new n;
                if (p.width = e, p.height = i, p.resolution = c, p.scaleMode = r || u.SCALE_MODES.DEFAULT, p.hasLoaded = !0, s.call(this, p, new l.Rectangle(0, 0, e, i)), this.width = e, this.height = i, this.resolution = c, this.render = null, this.renderer = t, this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var d = this.renderer.gl;
                    this.textureBuffer = new o(d, this.width, this.height, p.scaleMode, this.resolution), this.baseTexture._glTextures[d.id] = this.textureBuffer.texture, this.filterManager = new a(this.renderer), this.filterManager.onContextChange(), this.filterManager.resize(e, i), this.render = this.renderWebGL, this.renderer.currentRenderer.start(), this.renderer.currentRenderTarget.activate()
                } else this.render = this.renderCanvas, this.textureBuffer = new h(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
                this.valid = !0, this._updateUvs()
            }
            var n = t("./BaseTexture"),
                s = t("./Texture"),
                o = t("../renderers/webgl/utils/RenderTarget"),
                a = t("../renderers/webgl/managers/FilterManager"),
                h = t("../renderers/canvas/utils/CanvasBuffer"),
                l = t("../math"),
                u = t("../const"),
                c = new l.Matrix;
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.resize = function (t, e, i) {
                (t !== this.width || e !== this.height) && (this.valid = t > 0 && e > 0, this.width = this._frame.width = this.crop.width = t, this.height = this._frame.height = this.crop.height = e, i && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.valid && (this.textureBuffer.resize(this.width, this.height), this.filterManager && this.filterManager.resize(this.width, this.height)))
            }, r.prototype.clear = function () {
                this.valid && (this.renderer.type === u.RENDERER_TYPE.WEBGL && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
            }, r.prototype.renderWebGL = function (t, e, i, r) {
                if (this.valid) {
                    if (r = void 0 !== r ? r : !0, this.textureBuffer.transform = e, this.textureBuffer.activate(), t.worldAlpha = 1, r) {
                        t.worldTransform.identity(), t.currentBounds = null;
                        var n, s, o = t.children;
                        for (n = 0, s = o.length; s > n; ++n) o[n].updateTransform()
                    }
                    var a = this.renderer.filterManager;
                    this.renderer.filterManager = this.filterManager, this.renderer.renderDisplayObject(t, this.textureBuffer, i), this.renderer.filterManager = a
                }
            }, r.prototype.renderCanvas = function (t, e, i, r) {
                if (this.valid) {
                    r = !!r;
                    var n = t.worldTransform,
                        s = c;
                    s.identity(), e && s.append(e), t.worldTransform = s, t.worldAlpha = 1;
                    var o, a, h = t.children;
                    for (o = 0, a = h.length; a > o; ++o) h[o].updateTransform();
                    i && this.textureBuffer.clear(), t.worldTransform = n;
                    var l = this.textureBuffer.context,
                        u = this.renderer.resolution;
                    this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, l), this.renderer.resolution = u
                }
            }, r.prototype.destroy = function () {
                s.prototype.destroy.call(this, !0), this.textureBuffer.destroy(), this.filterManager && this.filterManager.destroy(), this.renderer = null
            }, r.prototype.getImage = function () {
                var t = new Image;
                return t.src = this.getBase64(), t
            }, r.prototype.getBase64 = function () {
                return this.getCanvas().toDataURL()
            }, r.prototype.getCanvas = function () {
                if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var t = this.renderer.gl,
                        e = this.textureBuffer.size.width,
                        i = this.textureBuffer.size.height,
                        r = new Uint8Array(4 * e * i);
                    t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, e, i, t.RGBA, t.UNSIGNED_BYTE, r), t.bindFramebuffer(t.FRAMEBUFFER, null);
                    var n = new h(e, i),
                        s = n.context.getImageData(0, 0, e, i);
                    return s.data.set(r), n.context.putImageData(s, 0, 0), n.canvas
                }
                return this.textureBuffer.canvas
            }, r.prototype.getPixels = function () {
                var t, e;
                if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var i = this.renderer.gl;
                    t = this.textureBuffer.size.width, e = this.textureBuffer.size.height;
                    var r = new Uint8Array(4 * t * e);
                    return i.bindFramebuffer(i.FRAMEBUFFER, this.textureBuffer.frameBuffer), i.readPixels(0, 0, t, e, i.RGBA, i.UNSIGNED_BYTE, r), i.bindFramebuffer(i.FRAMEBUFFER, null), r
                }
                return t = this.textureBuffer.canvas.width, e = this.textureBuffer.canvas.height, this.textureBuffer.canvas.getContext("2d").getImageData(0, 0, t, e).data
            }, r.prototype.getPixel = function (t, e) {
                if (this.renderer.type === u.RENDERER_TYPE.WEBGL) {
                    var i = this.renderer.gl,
                        r = new Uint8Array(4);
                    return i.bindFramebuffer(i.FRAMEBUFFER, this.textureBuffer.frameBuffer), i.readPixels(t, e, 1, 1, i.RGBA, i.UNSIGNED_BYTE, r), i.bindFramebuffer(i.FRAMEBUFFER, null), r
                }
                return this.textureBuffer.canvas.getContext("2d").getImageData(t, e, 1, 1).data
            }
        }, {
            "../const": 21,
            "../math": 31,
            "../renderers/canvas/utils/CanvasBuffer": 43,
            "../renderers/webgl/managers/FilterManager": 52,
            "../renderers/webgl/utils/RenderTarget": 63,
            "./BaseTexture": 68,
            "./Texture": 70
        }],
        70: [function (t, e, i) {
            function r(t, e, i, n, s) {
                a.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new h.Rectangle(0, 0, 1, 1)), t instanceof r && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = n, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = i || e, this.rotate = !!s, t.hasLoaded ? (this.noFrame && (e = new h.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this)
            }
            var n = t("./BaseTexture"),
                s = t("./VideoBaseTexture"),
                o = t("./TextureUvs"),
                a = t("eventemitter3"),
                h = t("../math"),
                l = t("../utils");
            r.prototype = Object.create(a.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                frame: {
                    get: function () {
                        return this._frame
                    },
                    set: function (t) {
                        if (this._frame = t, this.noFrame = !1, this.width = t.width, this.height = t.height, !this.trim && !this.rotate && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                        this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim ? (this.width = this.trim.width, this.height = this.trim.height, this._frame.width = this.trim.width, this._frame.height = this.trim.height) : this.crop = t, this.valid && this._updateUvs()
                    }
                }
            }), r.prototype.update = function () {
                this.baseTexture.update()
            }, r.prototype.onBaseTextureLoaded = function (t) {
                this.noFrame ? this.frame = new h.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.emit("update", this)
            }, r.prototype.onBaseTextureUpdated = function (t) {
                this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
            }, r.prototype.destroy = function (t) {
                this.baseTexture && (t && this.baseTexture.destroy(), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.crop = null, this.valid = !1
            }, r.prototype.clone = function () {
                return new r(this.baseTexture, this.frame, this.crop, this.trim, this.rotate)
            }, r.prototype._updateUvs = function () {
                this._uvs || (this._uvs = new o), this._uvs.set(this.crop, this.baseTexture, this.rotate)
            }, r.fromImage = function (t, e, i) {
                var s = l.TextureCache[t];
                return s || (s = new r(n.fromImage(t, e, i)), l.TextureCache[t] = s), s
            }, r.fromFrame = function (t) {
                var e = l.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return e
            }, r.fromCanvas = function (t, e) {
                return new r(n.fromCanvas(t, e))
            }, r.fromVideo = function (t, e) {
                return "string" == typeof t ? r.fromVideoUrl(t, e) : new r(s.fromVideo(t, e))
            }, r.fromVideoUrl = function (t, e) {
                return new r(s.fromUrl(t, e))
            }, r.addTextureToCache = function (t, e) {
                l.TextureCache[e] = t
            }, r.removeTextureFromCache = function (t) {
                var e = l.TextureCache[t];
                return delete l.TextureCache[t], delete l.BaseTextureCache[t], e
            }, r.EMPTY = new r(new n)
        }, {
            "../math": 31,
            "../utils": 75,
            "./BaseTexture": 68,
            "./TextureUvs": 71,
            "./VideoBaseTexture": 72,
            eventemitter3: 11
        }],
        71: [function (t, e, i) {
            function r() {
                this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1
            }
            e.exports = r, r.prototype.set = function (t, e, i) {
                var r = e.width,
                    n = e.height;
                i ? (this.x0 = (t.x + t.height) / r, this.y0 = t.y / n, this.x1 = (t.x + t.height) / r, this.y1 = (t.y + t.width) / n, this.x2 = t.x / r, this.y2 = (t.y + t.width) / n, this.x3 = t.x / r, this.y3 = t.y / n) : (this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n)
            }
        }, {}],
        72: [function (t, e, i) {
            function r(t, e) {
                if (!t) throw new Error("No video source element specified.");
                (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), s.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1
            }

            function n(t, e) {
                e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1));
                var i = document.createElement("source");
                return i.src = t, i.type = e, i
            }
            var s = t("./BaseTexture"),
                o = t("../utils");
            r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._onUpdate = function () {
                this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update())
            }, r.prototype._onPlayStart = function () {
                this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0)
            }, r.prototype._onPlayStop = function () {
                this.autoUpdate = !1
            }, r.prototype._onCanPlay = function () {
                this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this)))
            }, r.prototype.destroy = function () {
                this.source && this.source._pixiId && (delete o.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), s.prototype.destroy.call(this)
            }, r.fromVideo = function (t, e) {
                t._pixiId || (t._pixiId = "video_" + o.uid());
                var i = o.BaseTextureCache[t._pixiId];
                return i || (i = new r(t, e), o.BaseTextureCache[t._pixiId] = i), i
            }, r.fromUrl = function (t, e) {
                var i = document.createElement("video");
                if (Array.isArray(t))
                    for (var s = 0; s < t.length; ++s) i.appendChild(n(t.src || t, t.mime));
                else i.appendChild(n(t.src || t, t.mime));
                return i.load(), i.play(), r.fromVideo(i, e)
            }, r.fromUrls = r.fromUrl
        }, {
            "../utils": 75,
            "./BaseTexture": 68
        }],
        73: [function (t, e, i) {
            function r() {
                var t = this;
                this._tick = function (e) {
                    t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(o, !0) && (t._requestId = requestAnimationFrame(t._tick)))
                }, this._emitter = new s, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / n.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1
            }
            var n = t("../const"),
                s = t("eventemitter3"),
                o = "tick";
            Object.defineProperties(r.prototype, {
                FPS: {
                    get: function () {
                        return 1e3 / this.elapsedMS
                    }
                },
                minFPS: {
                    get: function () {
                        return 1e3 / this._maxElapsedMS
                    },
                    set: function (t) {
                        var e = Math.min(Math.max(0, t) / 1e3, n.TARGET_FPMS);
                        this._maxElapsedMS = 1 / e
                    }
                }
            }), r.prototype._requestIfNeeded = function () {
                null === this._requestId && this._emitter.listeners(o, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
            }, r.prototype._cancelIfNeeded = function () {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
            }, r.prototype._startIfPossible = function () {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            }, r.prototype.add = function (t, e) {
                return this._emitter.on(o, t, e), this._startIfPossible(), this
            }, r.prototype.addOnce = function (t, e) {
                return this._emitter.once(o, t, e), this._startIfPossible(), this
            }, r.prototype.remove = function (t, e) {
                return this._emitter.off(o, t, e), this._emitter.listeners(o, !0) || this._cancelIfNeeded(), this
            }, r.prototype.start = function () {
                this.started || (this.started = !0, this._requestIfNeeded())
            }, r.prototype.stop = function () {
                this.started && (this.started = !1, this._cancelIfNeeded())
            }, r.prototype.update = function (t) {
                var e;
                t = t || performance.now(), e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * n.TARGET_FPMS * this.speed, this._emitter.emit(o, this.deltaTime), this.lastTime = t
            }, e.exports = r
        }, {
            "../const": 21,
            eventemitter3: 11
        }],
        74: [function (t, e, i) {
            var r = t("./Ticker"),
                n = new r;
            n.autoStart = !0, e.exports = {
                shared: n,
                Ticker: r
            }
        }, {
            "./Ticker": 73
        }],
        75: [function (t, e, i) {
            var r = t("../const"),
                n = e.exports = {
                    _uid: 0,
                    _saidHello: !1,
                    pluginTarget: t("./pluginTarget"),
                    async: t("async"),
                    uid: function () {
                        return ++n._uid
                    },
                    hex2rgb: function (t, e) {
                        return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
                    },
                    hex2string: function (t) {
                        return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t
                    },
                    rgb2hex: function (t) {
                        return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
                    },
                    canUseNewCanvasBlendModes: function () {
                        if ("undefined" == typeof document) return !1;
                        var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",
                            e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
                            i = new Image;
                        i.src = t + "AP804Oa6" + e;
                        var r = new Image;
                        r.src = t + "/wCKxvRF" + e;
                        var n = document.createElement("canvas");
                        n.width = 6, n.height = 1;
                        var s = n.getContext("2d");
                        s.globalCompositeOperation = "multiply", s.drawImage(i, 0, 0), s.drawImage(r, 2, 0);
                        var o = s.getImageData(2, 0, 1, 1).data;
                        return 255 === o[0] && 0 === o[1] && 0 === o[2]
                    },
                    getNextPowerOfTwo: function (t) {
                        if (t > 0 && 0 === (t & t - 1)) return t;
                        for (var e = 1; t > e;) e <<= 1;
                        return e
                    },
                    isPowerOfTwo: function (t, e) {
                        return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
                    },
                    getResolutionOfUrl: function (t) {
                        return resolution = /_mip/.test(t) ? .5 : 1
                    },
                    sayHello: function (t) {
                        if (!n._saidHello) {
                            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                var e = ["\n %c %c %c Pixi.js " + r.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                                window.console.log.apply(console, e)
                            } else window.console && window.console.log("Pixi.js " + r.VERSION + " - " + t + " - http://www.pixijs.com/");
                            n._saidHello = !0
                        }
                    },
                    isWebGLSupported: function () {
                        var t = {
                            stencil: !0
                        };
                        try {
                            if (!window.WebGLRenderingContext) return !1;
                            var e = document.createElement("canvas"),
                                i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
                            return !(!i || !i.getContextAttributes().stencil)
                        } catch (r) {
                            return !1
                        }
                    },
                    TextureCache: {},
                    BaseTextureCache: {}
                }
        }, {
            "../const": 21,
            "./pluginTarget": 76,
            async: 2
        }],
        76: [function (t, e, i) {
            function r(t) {
                t.__plugins = {}, t.registerPlugin = function (e, i) {
                    t.__plugins[e] = i
                }, t.prototype.initPlugins = function () {
                    this.plugins = this.plugins || {};
                    for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
                }, t.prototype.destroyPlugins = function () {
                    for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                    this.plugins = null
                }
            }
            e.exports = {
                mixin: function (t) {
                    r(t)
                }
            }
        }, {}],
        77: [function (t, e, i) {
            var r = t("./core"),
                n = t("./mesh"),
                s = t("./extras"),
                o = t("./filters");
            r.SpriteBatch = function () {
                throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
            }, r.AssetLoader = function () {
                throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.")
            }, Object.defineProperties(r, {
                Stage: {
                    get: function () {
                        return console.warn("You do not need to use a PIXI Stage any more, you can simply render any container."), r.Container
                    }
                },
                DisplayObjectContainer: {
                    get: function () {
                        return console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."), r.Container
                    }
                },
                Strip: {
                    get: function () {
                        return console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), n.Mesh
                    }
                },
                Rope: {
                    get: function () {
                        return console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), n.Rope
                    }
                },
                MovieClip: {
                    get: function () {
                        return console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), s.MovieClip
                    }
                },
                TilingSprite: {
                    get: function () {
                        return console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), s.TilingSprite
                    }
                },
                BitmapText: {
                    get: function () {
                        return console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), s.BitmapText
                    }
                },
                blendModes: {
                    get: function () {
                        return console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), r.BLEND_MODES
                    }
                },
                scaleModes: {
                    get: function () {
                        return console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), r.SCALE_MODES
                    }
                },
                BaseTextureCache: {
                    get: function () {
                        return console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), r.utils.BaseTextureCache
                    }
                },
                TextureCache: {
                    get: function () {
                        return console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), r.utils.TextureCache
                    }
                },
                math: {
                    get: function () {
                        return console.warn("The math namespace is deprecated, please access members already accessible on PIXI."), r
                    }
                }
            }), r.Sprite.prototype.setTexture = function (t) {
                this.texture = t, console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
            }, s.BitmapText.prototype.setText = function (t) {
                this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
            }, r.Text.prototype.setText = function (t) {
                this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
            }, r.Text.prototype.setStyle = function (t) {
                this.style = t, console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
            }, r.Texture.prototype.setFrame = function (t) {
                this.frame = t, console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;")
            }, Object.defineProperties(o, {
                AbstractFilter: {
                    get: function () {
                        return console.warn("filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on."), r.AbstractFilter
                    }
                },
                FXAAFilter: {
                    get: function () {
                        return console.warn("filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on."), r.FXAAFilter
                    }
                },
                SpriteMaskFilter: {
                    get: function () {
                        return console.warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), r.SpriteMaskFilter
                    }
                }
            }), r.utils.uuid = function () {
                return console.warn("utils.uuid() is deprecated, please use utils.uid() from now on."), r.utils.uid()
            }
        }, {
            "./core": 28,
            "./extras": 84,
            "./filters": 101,
            "./mesh": 125
        }],
        78: [function (t, e, i) {
            function r(t, e) {
                n.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = {
                    tint: void 0 !== e.tint ? e.tint : 16777215,
                    align: e.align || "left",
                    name: null,
                    size: 0
                }, this.font = e.font, this._text = t, this.maxWidth = 0, this.dirty = !1, this.updateText()
            }
            var n = t("../core");
            r.prototype = Object.create(n.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                tint: {
                    get: function () {
                        return this._font.tint
                    },
                    set: function (t) {
                        this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                    }
                },
                align: {
                    get: function () {
                        return this._font.align
                    },
                    set: function (t) {
                        this._font.align = t || "left", this.dirty = !0
                    }
                },
                font: {
                    get: function () {
                        return this._font
                    },
                    set: function (t) {
                        t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : r.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                    }
                },
                text: {
                    get: function () {
                        return this._text
                    },
                    set: function (t) {
                        t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                    }
                }
            }), r.prototype.updateText = function () {
                for (var t = r.fonts[this._font.name], e = new n.Point, i = null, s = [], o = 0, a = 0, h = [], l = 0, u = this._font.size / t.size, c = -1, p = 0; p < this.text.length; p++) {
                    var d = this.text.charCodeAt(p);
                    if (c = /(\s)/.test(this.text.charAt(p)) ? p : c, /(?:\r\n|\r|\n)/.test(this.text.charAt(p))) h.push(o), a = Math.max(a, o), l++, e.x = 0, e.y += t.lineHeight, i = null;
                    else if (-1 !== c && this.maxWidth > 0 && e.x * u > this.maxWidth) s.splice(c, p - c), p = c, c = -1, h.push(o), a = Math.max(a, o), l++, e.x = 0, e.y += t.lineHeight, i = null;
                    else {
                        var f = t.chars[d];
                        f && (i && f.kerning[i] && (e.x += f.kerning[i]), s.push({
                            texture: f.texture,
                            line: l,
                            charCode: d,
                            position: new n.Point(e.x + f.xOffset, e.y + f.yOffset)
                        }), o = e.x + (f.texture.width + f.xOffset), e.x += f.xAdvance, i = d)
                    }
                }
                h.push(o), a = Math.max(a, o);
                var g = [];
                for (p = 0; l >= p; p++) {
                    var v = 0;
                    "right" === this._font.align ? v = a - h[p] : "center" === this._font.align && (v = (a - h[p]) / 2), g.push(v)
                }
                var m = s.length,
                    y = this.tint;
                for (p = 0; m > p; p++) {
                    var x = this._glyphs[p];
                    x ? x.texture = s[p].texture : (x = new n.Sprite(s[p].texture), this._glyphs.push(x)), x.position.x = (s[p].position.x + g[s[p].line]) * u, x.position.y = s[p].position.y * u, x.scale.x = x.scale.y = u, x.tint = y, x.parent || this.addChild(x)
                }
                for (p = m; p < this._glyphs.length; ++p) this.removeChild(this._glyphs[p]);
                this.textWidth = a * u, this.textHeight = (e.y + t.lineHeight) * u
            }, r.prototype.updateTransform = function () {
                this.validate(), this.containerUpdateTransform()
            }, r.prototype.getLocalBounds = function () {
                return this.validate(), n.Container.prototype.getLocalBounds.call(this)
            }, r.prototype.validate = function () {
                this.dirty && (this.updateText(), this.dirty = !1)
            }, r.fonts = {}
        }, {
            "../core": 28
        }],
        79: [function (t, e, i) {
            function r(t) {
                n.Sprite.call(this, t[0]), this._textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1
            }
            var n = t("../core");
            r.prototype = Object.create(n.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                totalFrames: {
                    get: function () {
                        return this._textures.length
                    }
                },
                textures: {
                    get: function () {
                        return this._textures
                    },
                    set: function (t) {
                        this._textures = t, this.texture = this._textures[Math.floor(this._currentTime) % this._textures.length]
                    }
                },
                currentFrame: {
                    get: function () {
                        return Math.floor(this._currentTime) % this._textures.length
                    }
                }
            }), r.prototype.stop = function () {
                this.playing && (this.playing = !1, n.ticker.shared.remove(this.update, this))
            }, r.prototype.play = function () {
                this.playing || (this.playing = !0, n.ticker.shared.add(this.update, this))
            }, r.prototype.gotoAndStop = function (t) {
                this.stop(), this._currentTime = t;
                var e = Math.floor(this._currentTime);
                this._texture = this._textures[e % this._textures.length]
            }, r.prototype.gotoAndPlay = function (t) {
                this._currentTime = t, this.play()
            }, r.prototype.update = function (t) {
                this._currentTime += this.animationSpeed * t;
                var e = Math.floor(this._currentTime);
                0 > e ? this.loop ? this._texture = this._textures[this._textures.length - 1 + e % this._textures.length] : (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this.loop || e < this._textures.length ? this._texture = this._textures[e % this._textures.length] : e >= this._textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
            }, r.prototype.destroy = function () {
                this.stop(), n.Sprite.prototype.destroy.call(this)
            }, r.fromFrames = function (t) {
                for (var e = [], i = 0; i < t.length; ++i) e.push(new n.Texture.fromFrame(t[i]));
                return new r(e)
            }, r.fromImages = function (t) {
                for (var e = [], i = 0; i < t.length; ++i) e.push(new n.Texture.fromImage(t[i]));
                return new r(e)
            }
        }, {
            "../core": 28
        }],
        80: [function (t, e, i) {
            function r(t, e, i) {
                n.Sprite.call(this, t), this.tileScale = new n.Point(1, 1), this.tilePosition = new n.Point(0, 0), this._width = e || 100, this._height = i || 100, this._uvs = new n.TextureUvs, this._canvasPattern = null, this.shader = new n.AbstractFilter(["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "uniform vec4 uFrame;", "uniform vec4 uTransform;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vec2 coord = aTextureCoord;", "   coord -= uTransform.xy;", "   coord /= uTransform.zw;", "   vTextureCoord = coord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform vec4 uFrame;", "uniform vec2 uPixelSize;", "void main(void){", "   vec2 coord = mod(vTextureCoord, uFrame.zw);", "   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);", "   coord += uFrame.xy;", "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;", "}"].join("\n"), {
                    uFrame: {
                        type: "4fv",
                        value: [0, 0, 1, 1]
                    },
                    uTransform: {
                        type: "4fv",
                        value: [0, 0, 1, 1]
                    },
                    uPixelSize: {
                        type: "2fv",
                        value: [1, 1]
                    }
                })
            }
            var n = t("../core"),
                s = new n.Point;
            r.prototype = Object.create(n.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                width: {
                    get: function () {
                        return this._width
                    },
                    set: function (t) {
                        this._width = t
                    }
                },
                height: {
                    get: function () {
                        return this._height
                    },
                    set: function (t) {
                        this._height = t
                    }
                }
            }), r.prototype._onTextureUpdate = function () {}, r.prototype._renderWebGL = function (t) {
                var e = this._texture;
                if (e && e._uvs) {
                    var i = e._uvs,
                        r = e._frame.width,
                        n = e._frame.height,
                        s = e.baseTexture.width,
                        o = e.baseTexture.height;
                    e._uvs = this._uvs, e._frame.width = this.width, e._frame.height = this.height, this.shader.uniforms.uPixelSize.value[0] = 1 / s, this.shader.uniforms.uPixelSize.value[1] = 1 / o, this.shader.uniforms.uFrame.value[0] = i.x0, this.shader.uniforms.uFrame.value[1] = i.y0, this.shader.uniforms.uFrame.value[2] = i.x1 - i.x0, this.shader.uniforms.uFrame.value[3] = i.y2 - i.y0, this.shader.uniforms.uTransform.value[0] = this.tilePosition.x % (r * this.tileScale.x) / this._width, this.shader.uniforms.uTransform.value[1] = this.tilePosition.y % (n * this.tileScale.y) / this._height, this.shader.uniforms.uTransform.value[2] = s / this._width * this.tileScale.x, this.shader.uniforms.uTransform.value[3] = o / this._height * this.tileScale.y, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this), e._uvs = i, e._frame.width = r, e._frame.height = n
                }
            }, r.prototype._renderCanvas = function (t) {
                var e = this._texture;
                if (e.baseTexture.hasLoaded) {
                    var i = t.context,
                        r = this.worldTransform,
                        s = t.resolution,
                        o = e.baseTexture,
                        a = this.tilePosition.x % (e._frame.width * this.tileScale.x),
                        h = this.tilePosition.y % (e._frame.height * this.tileScale.y);
                    if (!this._canvasPattern) {
                        var l = new n.CanvasBuffer(e._frame.width, e._frame.height);
                        l.context.drawImage(o.source, -e._frame.x, -e._frame.y), this._canvasPattern = l.context.createPattern(l.canvas, "repeat")
                    }
                    i.globalAlpha = this.worldAlpha, i.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), i.scale(this.tileScale.x, this.tileScale.y), i.translate(a + this.anchor.x * -this._width, h + this.anchor.y * -this._height), this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, i.globalCompositeOperation = t.blendModes[t.currentBlendMode]), i.fillStyle = this._canvasPattern, i.fillRect(-a, -h, this._width / this.tileScale.x, this._height / this.tileScale.y)
                }
            }, r.prototype.getBounds = function () {
                var t, e, i, r, n = this._width,
                    s = this._height,
                    o = n * (1 - this.anchor.x),
                    a = n * -this.anchor.x,
                    h = s * (1 - this.anchor.y),
                    l = s * -this.anchor.y,
                    u = this.worldTransform,
                    c = u.a,
                    p = u.b,
                    d = u.c,
                    f = u.d,
                    g = u.tx,
                    v = u.ty,
                    m = c * a + d * l + g,
                    y = f * l + p * a + v,
                    x = c * o + d * l + g,
                    _ = f * l + p * o + v,
                    b = c * o + d * h + g,
                    T = f * h + p * o + v,
                    w = c * a + d * h + g,
                    E = f * h + p * a + v;
                t = m, t = t > x ? x : t, t = t > b ? b : t, t = t > w ? w : t, i = y, i = i > _ ? _ : i, i = i > T ? T : i, i = i > E ? E : i, e = m, e = x > e ? x : e, e = b > e ? b : e, e = w > e ? w : e, r = y, r = _ > r ? _ : r, r = T > r ? T : r, r = E > r ? E : r;
                var S = this._bounds;
                return S.x = t, S.width = e - t, S.y = i, S.height = r - i, this._currentBounds = S, S
            }, r.prototype.containsPoint = function (t) {
                this.worldTransform.applyInverse(t, s);
                var e, i = this._width,
                    r = this._height,
                    n = -i * this.anchor.x;
                return s.x > n && s.x < n + i && (e = -r * this.anchor.y, s.y > e && s.y < e + r) ? !0 : !1
            }, r.prototype.destroy = function () {
                n.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null
            }, r.fromFrame = function (t, e, i) {
                var s = n.utils.TextureCache[t];
                if (!s) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new r(s, e, i)
            }, r.fromImage = function (t, e, i, s, o) {
                return new r(n.Texture.fromImage(t, s, o), e, i)
            }
        }, {
            "../core": 28
        }],
        81: [function (t, e, i) {
            var r = t("../core"),
                n = r.DisplayObject,
                s = new r.Matrix;
            n.prototype._cacheAsBitmap = !1, n.prototype._originalRenderWebGL = null, n.prototype._originalRenderCanvas = null, n.prototype._originalUpdateTransform = null, n.prototype._originalHitTest = null, n.prototype._originalDestroy = null, n.prototype._cachedSprite = null, Object.defineProperties(n.prototype, {
                cacheAsBitmap: {
                    get: function () {
                        return this._cacheAsBitmap
                    },
                    set: function (t) {
                        this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._originalRenderWebGL = this.renderWebGL, this._originalRenderCanvas = this.renderCanvas, this._originalUpdateTransform = this.updateTransform, this._originalGetBounds = this.getBounds, this._originalDestroy = this.destroy, this._originalContainsPoint = this.containsPoint, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (this._cachedSprite && this._destroyCachedDisplayObject(), this.renderWebGL = this._originalRenderWebGL, this.renderCanvas = this._originalRenderCanvas, this.getBounds = this._originalGetBounds, this.destroy = this._originalDestroy, this.updateTransform = this._originalUpdateTransform, this.containsPoint = this._originalContainsPoint))
                    }
                }
            }), n.prototype._renderCachedWebGL = function (t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cachedSprite.worldAlpha = this.worldAlpha, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this._cachedSprite))
            }, n.prototype._initCachedDisplayObject = function (t) {
                if (!this._cachedSprite) {
                    t.currentRenderer.flush();
                    var e = this.getLocalBounds().clone();
                    if (this._filters) {
                        var i = this._filters[0].padding;
                        e.x -= i, e.y -= i, e.width += 2 * i, e.height += 2 * i
                    }
                    var n = t.currentRenderTarget,
                        o = t.filterManager.filterStack,
                        a = new r.RenderTexture(t, 0 | e.width, 0 | e.height),
                        h = s;
                    h.tx = -e.x, h.ty = -e.y, this.renderWebGL = this._originalRenderWebGL, a.render(this, h, !0, !0), t.setRenderTarget(n), t.filterManager.filterStack = o, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new r.Sprite(a), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
                }
            }, n.prototype._renderCachedCanvas = function (t) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cachedSprite.worldAlpha = this.worldAlpha, this._cachedSprite.renderCanvas(t))
            }, n.prototype._initCachedDisplayObjectCanvas = function (t) {
                if (!this._cachedSprite) {
                    var e = this.getLocalBounds(),
                        i = t.context,
                        n = new r.RenderTexture(t, 0 | e.width, 0 | e.height),
                        o = s;
                    o.tx = -e.x, o.ty = -e.y, this.renderCanvas = this._originalRenderCanvas, n.render(this, o, !0), t.context = i, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new r.Sprite(n), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(e.x / e.width), this._cachedSprite.anchor.y = -(e.y / e.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
                }
            }, n.prototype._getCachedBounds = function () {
                return this._cachedSprite._currentBounds = null, this._cachedSprite.getBounds()
            }, n.prototype._destroyCachedDisplayObject = function () {
                this._cachedSprite._texture.destroy(), this._cachedSprite = null
            }, n.prototype._cacheAsBitmapDestroy = function () {
                this.cacheAsBitmap = !1, this._originalDestroy()
            }
        }, {
            "../core": 28
        }],
        82: [function (t, e, i) {
            var r = t("../core");
            r.DisplayObject.prototype.name = null, r.Container.prototype.getChildByName = function (t) {
                for (var e = 0; e < this.children.length; e++)
                    if (this.children[e].name === t) return this.children[e];
                return null
            }
        }, {
            "../core": 28
        }],
        83: [function (t, e, i) {
            var r = t("../core");
            r.DisplayObject.prototype.getGlobalPosition = function (t) {
                return t = t || new r.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t
            }
        }, {
            "../core": 28
        }],
        84: [function (t, e, i) {
            t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = {
                MovieClip: t("./MovieClip"),
                TilingSprite: t("./TilingSprite"),
                BitmapText: t("./BitmapText")
            }
        }, {
            "./BitmapText": 78,
            "./MovieClip": 79,
            "./TilingSprite": 80,
            "./cacheAsBitmap": 81,
            "./getChildByName": 82,
            "./getGlobalPosition": 83
        }],
        85: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n", {
                    dimensions: {
                        type: "4fv",
                        value: new Float32Array([0, 0, 0, 0])
                    },
                    pixelSize: {
                        type: "1f",
                        value: 8
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                size: {
                    get: function () {
                        return this.uniforms.pixelSize.value
                    },
                    set: function (t) {
                        this.uniforms.pixelSize.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        86: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this), this.blurXFilter = new s, this.blurYFilter = new o, this.defaultFilter = new n.AbstractFilter
            }
            var n = t("../../core"),
                s = t("../blur/BlurXFilter"),
                o = t("../blur/BlurYFilter");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager.getRenderTarget(!0);
                this.defaultFilter.applyFilter(t, e, i), this.blurXFilter.applyFilter(t, e, r), t.blendModeManager.setBlendMode(n.BLEND_MODES.SCREEN), this.blurYFilter.applyFilter(t, r, i), t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL), t.filterManager.returnRenderTarget(r)
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.blurXFilter.blur
                    },
                    set: function (t) {
                        this.blurXFilter.blur = this.blurYFilter.blur = t
                    }
                },
                blurX: {
                    get: function () {
                        return this.blurXFilter.blur
                    },
                    set: function (t) {
                        this.blurXFilter.blur = t
                    }
                },
                blurY: {
                    get: function () {
                        return this.blurYFilter.blur
                    },
                    set: function (t) {
                        this.blurYFilter.blur = t
                    }
                }
            })
        }, {
            "../../core": 28,
            "../blur/BlurXFilter": 89,
            "../blur/BlurYFilter": 90
        }],
        87: [function (t, e, i) {
            function r(t, e) {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n", {
                    strength: {
                        type: "1f",
                        value: 1
                    },
                    dirX: {
                        type: "1f",
                        value: t || 0
                    },
                    dirY: {
                        type: "1f",
                        value: e || 0
                    }
                }), this.defaultFilter = new n.AbstractFilter, this.passes = 1, this.dirX = t || 0, this.dirY = e || 0, this.strength = 4
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i, r) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, i, r);
                else {
                    var s = t.filterManager.getRenderTarget(!0);
                    t.filterManager.applyFilter(n, e, s, r);
                    for (var o = 0; o < this.passes - 2; o++) t.filterManager.applyFilter(n, s, s, r);
                    t.filterManager.applyFilter(n, s, i, r), t.filterManager.returnRenderTarget(s)
                }
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.strength
                    },
                    set: function (t) {
                        this.padding = .5 * t, this.strength = t
                    }
                },
                dirX: {
                    get: function () {
                        return this.dirX
                    },
                    set: function (t) {
                        this.uniforms.dirX.value = t
                    }
                },
                dirY: {
                    get: function () {
                        return this.dirY
                    },
                    set: function (t) {
                        this.uniforms.dirY.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        88: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this), this.blurXFilter = new s, this.blurYFilter = new o
            }
            var n = t("../../core"),
                s = t("./BlurXFilter"),
                o = t("./BlurYFilter");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager.getRenderTarget(!0);
                this.blurXFilter.applyFilter(t, e, r), this.blurYFilter.applyFilter(t, r, i), t.filterManager.returnRenderTarget(r)
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.blurXFilter.blur
                    },
                    set: function (t) {
                        this.padding = .5 * Math.abs(t), this.blurXFilter.blur = this.blurYFilter.blur = t
                    }
                },
                passes: {
                    get: function () {
                        return this.blurXFilter.passes
                    },
                    set: function (t) {
                        this.blurXFilter.passes = this.blurYFilter.passes = t
                    }
                },
                blurX: {
                    get: function () {
                        return this.blurXFilter.blur
                    },
                    set: function (t) {
                        this.blurXFilter.blur = t
                    }
                },
                blurY: {
                    get: function () {
                        return this.blurYFilter.blur
                    },
                    set: function (t) {
                        this.blurYFilter.blur = t
                    }
                }
            })
        }, {
            "../../core": 28,
            "./BlurXFilter": 89,
            "./BlurYFilter": 90
        }],
        89: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", {
                    strength: {
                        type: "1f",
                        value: 1
                    }
                }), this.passes = 1, this.strength = 4
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i, r) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, i, r);
                else {
                    for (var s = t.filterManager.getRenderTarget(!0), o = e, a = s, h = 0; h < this.passes - 1; h++) {
                        t.filterManager.applyFilter(n, o, a, !0);
                        var l = a;
                        a = o, o = l
                    }
                    t.filterManager.applyFilter(n, o, i, r), t.filterManager.returnRenderTarget(s)
                }
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.strength
                    },
                    set: function (t) {
                        this.padding = .5 * Math.abs(t), this.strength = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        90: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", {
                    strength: {
                        type: "1f",
                        value: 1
                    }
                }), this.passes = 1, this.strength = 4
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i, r) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, i, r);
                else {
                    for (var s = t.filterManager.getRenderTarget(!0), o = e, a = s, h = 0; h < this.passes - 1; h++) {
                        t.filterManager.applyFilter(n, o, a, !0);
                        var l = a;
                        a = o, o = l
                    }
                    t.filterManager.applyFilter(n, o, i, r), t.filterManager.returnRenderTarget(s)
                }
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.strength
                    },
                    set: function (t) {
                        this.padding = .5 * Math.abs(t), this.strength = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        91: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", {
                    delta: {
                        type: "v2",
                        value: {
                            x: .1,
                            y: 0
                        }
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r
        }, {
            "../../core": 28
        }],
        92: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n", {
                    m: {
                        type: "1fv",
                        value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._loadMatrix = function (t, e) {
                e = !!e;
                var i = t;
                e && (this._multiply(i, this.uniforms.m.value, t), i = this._colorMatrix(i)), this.uniforms.m.value = i
            }, r.prototype._multiply = function (t, e, i) {
                return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19], t
            }, r.prototype._colorMatrix = function (t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, r.prototype.brightness = function (t, e) {
                var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.greyscale = function (t, e) {
                var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.grayscale = r.prototype.greyscale, r.prototype.blackAndWhite = function (t) {
                var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.hue = function (t, e) {
                t = (t || 0) / 180 * Math.PI;
                var i = Math.cos(t),
                    r = Math.sin(t),
                    n = .213,
                    s = .715,
                    o = .072,
                    a = [n + i * (1 - n) + r * -n, s + i * -s + r * -s, o + i * -o + r * (1 - o), 0, 0, n + i * -n + .143 * r, s + i * (1 - s) + .14 * r, o + i * -o + r * -.283, 0, 0, n + i * -n + r * -(1 - n), s + i * -s + r * s, o + i * (1 - o) + r * o, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(a, e)
            }, r.prototype.contrast = function (t, e) {
                var i = (t || 0) + 1,
                    r = -128 * (i - 1),
                    n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, r.prototype.saturate = function (t, e) {
                var i = 2 * (t || 0) / 3 + 1,
                    r = (i - 1) * -.5,
                    n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, r.prototype.desaturate = function (t) {
                this.saturate(-1)
            }, r.prototype.negative = function (t) {
                var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.sepia = function (t) {
                var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.technicolor = function (t) {
                var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.polaroid = function (t) {
                var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.toBGR = function (t) {
                var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.kodachrome = function (t) {
                var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.browni = function (t) {
                var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.vintage = function (t) {
                var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.colorTone = function (t, e, i, r, n) {
                t = t || .2, e = e || .15, i = i || 16770432, r = r || 3375104;
                var s = (i >> 16 & 255) / 255,
                    o = (i >> 8 & 255) / 255,
                    a = (255 & i) / 255,
                    h = (r >> 16 & 255) / 255,
                    l = (r >> 8 & 255) / 255,
                    u = (255 & r) / 255,
                    c = [.3, .59, .11, 0, 0, s, o, a, t, 0, h, l, u, e, 0, s - h, o - l, a - u, 0, 0];
                this._loadMatrix(c, n)
            }, r.prototype.night = function (t, e) {
                t = t || .1;
                var i = [-2 * t, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.predator = function (t, e) {
                var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, r.prototype.lsd = function (t) {
                var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, r.prototype.reset = function () {
                var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(t, !1)
            }, Object.defineProperties(r.prototype, {
                matrix: {
                    get: function () {
                        return this.uniforms.m.value
                    },
                    set: function (t) {
                        this.uniforms.m.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        93: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n", {
                    step: {
                        type: "1f",
                        value: 5
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                step: {
                    get: function () {
                        return this.uniforms.step.value
                    },
                    set: function (t) {
                        this.uniforms.step.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        94: [function (t, e, i) {
            function r(t, e, i) {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n", {
                    matrix: {
                        type: "1fv",
                        value: new Float32Array(t)
                    },
                    texelSize: {
                        type: "v2",
                        value: {
                            x: 1 / e,
                            y: 1 / i
                        }
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                matrix: {
                    get: function () {
                        return this.uniforms.matrix.value
                    },
                    set: function (t) {
                        this.uniforms.matrix.value = new Float32Array(t)
                    }
                },
                width: {
                    get: function () {
                        return 1 / this.uniforms.texelSize.value.x
                    },
                    set: function (t) {
                        this.uniforms.texelSize.value.x = 1 / t
                    }
                },
                height: {
                    get: function () {
                        return 1 / this.uniforms.texelSize.value.y
                    },
                    set: function (t) {
                        this.uniforms.texelSize.value.y = 1 / t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        95: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r
        }, {
            "../../core": 28
        }],
        96: [function (t, e, i) {
            function r(t) {
                var e = new n.Matrix;
                t.renderable = !1, n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision mediump float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n", {
                    mapSampler: {
                        type: "sampler2D",
                        value: t.texture
                    },
                    otherMatrix: {
                        type: "mat3",
                        value: e.toArray(!0)
                    },
                    scale: {
                        type: "v2",
                        value: {
                            x: 1,
                            y: 1
                        }
                    }
                }), this.maskSprite = t, this.maskMatrix = e, this.scale = new n.Point(20, 20)
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager;
                r.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.scale.value.x = this.scale.x * (1 / e.frame.width), this.uniforms.scale.value.y = this.scale.y * (1 / e.frame.height);
                var n = this.getShader(t);
                r.applyFilter(n, e, i)
            }, Object.defineProperties(r.prototype, {
                map: {
                    get: function () {
                        return this.uniforms.mapSampler.value
                    },
                    set: function (t) {
                        this.uniforms.mapSampler.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        97: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n", {
                    scale: {
                        type: "1f",
                        value: 1
                    },
                    angle: {
                        type: "1f",
                        value: 5
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                scale: {
                    get: function () {
                        return this.uniforms.scale.value
                    },
                    set: function (t) {
                        this.uniforms.scale.value = t
                    }
                },
                angle: {
                    get: function () {
                        return this.uniforms.angle.value
                    },
                    set: function (t) {
                        this.uniforms.angle.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        98: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n", {
                    blur: {
                        type: "1f",
                        value: 1 / 512
                    },
                    color: {
                        type: "c",
                        value: [0, 0, 0]
                    },
                    alpha: {
                        type: "1f",
                        value: .7
                    },
                    offset: {
                        type: "2f",
                        value: [5, 5]
                    },
                    strength: {
                        type: "1f",
                        value: 1
                    }
                }), this.passes = 1, this.strength = 4
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i, r) {
                var n = this.getShader(t);
                if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, i, r);
                else {
                    for (var s = t.filterManager.getRenderTarget(!0), o = e, a = s, h = 0; h < this.passes - 1; h++) {
                        t.filterManager.applyFilter(n, o, a, r);
                        var l = a;
                        a = o, o = l
                    }
                    t.filterManager.applyFilter(n, o, i, r), t.filterManager.returnRenderTarget(s)
                }
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.strength
                    },
                    set: function (t) {
                        this.padding = .5 * t, this.strength = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        99: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this), this.blurXFilter = new s, this.blurYTintFilter = new o, this.defaultFilter = new n.AbstractFilter, this.padding = 30, this._dirtyPosition = !0, this._angle = 45 * Math.PI / 180, this._distance = 10, this.alpha = .75, this.hideObject = !1, this.blendMode = n.BLEND_MODES.MULTIPLY
            }
            var n = t("../../core"),
                s = t("../blur/BlurXFilter"),
                o = t("./BlurYTintFilter");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager.getRenderTarget(!0);
                this._dirtyPosition && (this._dirtyPosition = !1, this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance, this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance), this.blurXFilter.applyFilter(t, e, r), t.blendModeManager.setBlendMode(this.blendMode), this.blurYTintFilter.applyFilter(t, r, i), t.blendModeManager.setBlendMode(n.BLEND_MODES.NORMAL), this.hideObject || this.defaultFilter.applyFilter(t, e, i), t.filterManager.returnRenderTarget(r)
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.blurXFilter.blur
                    },
                    set: function (t) {
                        this.blurXFilter.blur = this.blurYTintFilter.blur = t
                    }
                },
                blurX: {
                    get: function () {
                        return this.blurXFilter.blur
                    },
                    set: function (t) {
                        this.blurXFilter.blur = t
                    }
                },
                blurY: {
                    get: function () {
                        return this.blurYTintFilter.blur
                    },
                    set: function (t) {
                        this.blurYTintFilter.blur = t
                    }
                },
                color: {
                    get: function () {
                        return n.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value)
                    },
                    set: function (t) {
                        this.blurYTintFilter.uniforms.color.value = n.utils.hex2rgb(t)
                    }
                },
                alpha: {
                    get: function () {
                        return this.blurYTintFilter.uniforms.alpha.value
                    },
                    set: function (t) {
                        this.blurYTintFilter.uniforms.alpha.value = t
                    }
                },
                distance: {
                    get: function () {
                        return this._distance
                    },
                    set: function (t) {
                        this._dirtyPosition = !0, this._distance = t
                    }
                },
                angle: {
                    get: function () {
                        return this._angle
                    },
                    set: function (t) {
                        this._dirtyPosition = !0, this._angle = t
                    }
                }
            })
        }, {
            "../../core": 28,
            "../blur/BlurXFilter": 89,
            "./BlurYTintFilter": 98
        }],
        100: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n", {
                    gray: {
                        type: "1f",
                        value: 1
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                gray: {
                    get: function () {
                        return this.uniforms.gray.value
                    },
                    set: function (t) {
                        this.uniforms.gray.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        101: [function (t, e, i) {
            e.exports = {
                AsciiFilter: t("./ascii/AsciiFilter"),
                BloomFilter: t("./bloom/BloomFilter"),
                BlurFilter: t("./blur/BlurFilter"),
                BlurXFilter: t("./blur/BlurXFilter"),
                BlurYFilter: t("./blur/BlurYFilter"),
                BlurDirFilter: t("./blur/BlurDirFilter"),
                ColorMatrixFilter: t("./color/ColorMatrixFilter"),
                ColorStepFilter: t("./color/ColorStepFilter"),
                ConvolutionFilter: t("./convolution/ConvolutionFilter"),
                CrossHatchFilter: t("./crosshatch/CrossHatchFilter"),
                DisplacementFilter: t("./displacement/DisplacementFilter"),
                DotScreenFilter: t("./dot/DotScreenFilter"),
                GrayFilter: t("./gray/GrayFilter"),
                DropShadowFilter: t("./dropshadow/DropShadowFilter"),
                InvertFilter: t("./invert/InvertFilter"),
                NoiseFilter: t("./noise/NoiseFilter"),
                NormalMapFilter: t("./normal/NormalMapFilter"),
                PixelateFilter: t("./pixelate/PixelateFilter"),
                RGBSplitFilter: t("./rgb/RGBSplitFilter"),
                ShockwaveFilter: t("./shockwave/ShockwaveFilter"),
                SepiaFilter: t("./sepia/SepiaFilter"),
                SmartBlurFilter: t("./blur/SmartBlurFilter"),
                TiltShiftFilter: t("./tiltshift/TiltShiftFilter"),
                TiltShiftXFilter: t("./tiltshift/TiltShiftXFilter"),
                TiltShiftYFilter: t("./tiltshift/TiltShiftYFilter"),
                TwistFilter: t("./twist/TwistFilter")
            }
        }, {
            "./ascii/AsciiFilter": 85,
            "./bloom/BloomFilter": 86,
            "./blur/BlurDirFilter": 87,
            "./blur/BlurFilter": 88,
            "./blur/BlurXFilter": 89,
            "./blur/BlurYFilter": 90,
            "./blur/SmartBlurFilter": 91,
            "./color/ColorMatrixFilter": 92,
            "./color/ColorStepFilter": 93,
            "./convolution/ConvolutionFilter": 94,
            "./crosshatch/CrossHatchFilter": 95,
            "./displacement/DisplacementFilter": 96,
            "./dot/DotScreenFilter": 97,
            "./dropshadow/DropShadowFilter": 99,
            "./gray/GrayFilter": 100,
            "./invert/InvertFilter": 102,
            "./noise/NoiseFilter": 103,
            "./normal/NormalMapFilter": 104,
            "./pixelate/PixelateFilter": 105,
            "./rgb/RGBSplitFilter": 106,
            "./sepia/SepiaFilter": 107,
            "./shockwave/ShockwaveFilter": 108,
            "./tiltshift/TiltShiftFilter": 110,
            "./tiltshift/TiltShiftXFilter": 111,
            "./tiltshift/TiltShiftYFilter": 112,
            "./twist/TwistFilter": 113
        }],
        102: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n", {
                    invert: {
                        type: "1f",
                        value: 1
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                invert: {
                    get: function () {
                        return this.uniforms.invert.value
                    },
                    set: function (t) {
                        this.uniforms.invert.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        103: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n", {
                    noise: {
                        type: "1f",
                        value: .5
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                noise: {
                    get: function () {
                        return this.uniforms.noise.value
                    },
                    set: function (t) {
                        this.uniforms.noise.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        104: [function (t, e, i) {
            function r(t) {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n", {
                    displacementMap: {
                        type: "sampler2D",
                        value: t
                    },
                    scale: {
                        type: "2f",
                        value: {
                            x: 15,
                            y: 15
                        }
                    },
                    offset: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        }
                    },
                    mapDimensions: {
                        type: "2f",
                        value: {
                            x: 1,
                            y: 1
                        }
                    },
                    dimensions: {
                        type: "4f",
                        value: [0, 0, 0, 0]
                    },
                    LightPos: {
                        type: "3f",
                        value: [0, 1, 0]
                    }
                }), t.baseTexture._powerOf2 = !0, t.baseTexture.hasLoaded ? this.onTextureLoaded() : t.baseTexture.once("loaded", this.onTextureLoaded, this)
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.onTextureLoaded = function () {
                this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height
            }, Object.defineProperties(r.prototype, {
                map: {
                    get: function () {
                        return this.uniforms.displacementMap.value
                    },
                    set: function (t) {
                        this.uniforms.displacementMap.value = t
                    }
                },
                scale: {
                    get: function () {
                        return this.uniforms.scale.value
                    },
                    set: function (t) {
                        this.uniforms.scale.value = t
                    }
                },
                offset: {
                    get: function () {
                        return this.uniforms.offset.value
                    },
                    set: function (t) {
                        this.uniforms.offset.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        105: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n", {
                    dimensions: {
                        type: "4fv",
                        value: new Float32Array([0, 0, 0, 0])
                    },
                    pixelSize: {
                        type: "v2",
                        value: {
                            x: 10,
                            y: 10
                        }
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                size: {
                    get: function () {
                        return this.uniforms.pixelSize.value
                    },
                    set: function (t) {
                        this.uniforms.pixelSize.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        106: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n", {
                    red: {
                        type: "v2",
                        value: {
                            x: 20,
                            y: 20
                        }
                    },
                    green: {
                        type: "v2",
                        value: {
                            x: -20,
                            y: 20
                        }
                    },
                    blue: {
                        type: "v2",
                        value: {
                            x: 20,
                            y: -20
                        }
                    },
                    dimensions: {
                        type: "4fv",
                        value: [0, 0, 0, 0]
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                red: {
                    get: function () {
                        return this.uniforms.red.value
                    },
                    set: function (t) {
                        this.uniforms.red.value = t
                    }
                },
                green: {
                    get: function () {
                        return this.uniforms.green.value
                    },
                    set: function (t) {
                        this.uniforms.green.value = t
                    }
                },
                blue: {
                    get: function () {
                        return this.uniforms.blue.value
                    },
                    set: function (t) {
                        this.uniforms.blue.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        107: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n", {
                    sepia: {
                        type: "1f",
                        value: 1
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                sepia: {
                    get: function () {
                        return this.uniforms.sepia.value
                    },
                    set: function (t) {
                        this.uniforms.sepia.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        108: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n", {
                    center: {
                        type: "v2",
                        value: {
                            x: .5,
                            y: .5
                        }
                    },
                    params: {
                        type: "v3",
                        value: {
                            x: 10,
                            y: .8,
                            z: .1
                        }
                    },
                    time: {
                        type: "1f",
                        value: 0
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                center: {
                    get: function () {
                        return this.uniforms.center.value
                    },
                    set: function (t) {
                        this.uniforms.center.value = t
                    }
                },
                params: {
                    get: function () {
                        return this.uniforms.params.value
                    },
                    set: function (t) {
                        this.uniforms.params.value = t
                    }
                },
                time: {
                    get: function () {
                        return this.uniforms.time.value
                    },
                    set: function (t) {
                        this.uniforms.time.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        109: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", {
                    blur: {
                        type: "1f",
                        value: 100
                    },
                    gradientBlur: {
                        type: "1f",
                        value: 600
                    },
                    start: {
                        type: "v2",
                        value: {
                            x: 0,
                            y: window.innerHeight / 2
                        }
                    },
                    end: {
                        type: "v2",
                        value: {
                            x: 600,
                            y: window.innerHeight / 2
                        }
                    },
                    delta: {
                        type: "v2",
                        value: {
                            x: 30,
                            y: 30
                        }
                    },
                    texSize: {
                        type: "v2",
                        value: {
                            x: window.innerWidth,
                            y: window.innerHeight
                        }
                    }
                }), this.updateDelta()
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.updateDelta = function () {
                this.uniforms.delta.value.x = 0, this.uniforms.delta.value.y = 0
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.uniforms.blur.value
                    },
                    set: function (t) {
                        this.uniforms.blur.value = t
                    }
                },
                gradientBlur: {
                    get: function () {
                        return this.uniforms.gradientBlur.value
                    },
                    set: function (t) {
                        this.uniforms.gradientBlur.value = t
                    }
                },
                start: {
                    get: function () {
                        return this.uniforms.start.value
                    },
                    set: function (t) {
                        this.uniforms.start.value = t, this.updateDelta()
                    }
                },
                end: {
                    get: function () {
                        return this.uniforms.end.value
                    },
                    set: function (t) {
                        this.uniforms.end.value = t, this.updateDelta()
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        110: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this), this.tiltShiftXFilter = new s, this.tiltShiftYFilter = new o
            }
            var n = t("../../core"),
                s = t("./TiltShiftXFilter"),
                o = t("./TiltShiftYFilter");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function (t, e, i) {
                var r = t.filterManager.getRenderTarget(!0);
                this.tiltShiftXFilter.applyFilter(t, e, r), this.tiltShiftYFilter.applyFilter(t, r, i), t.filterManager.returnRenderTarget(r)
            }, Object.defineProperties(r.prototype, {
                blur: {
                    get: function () {
                        return this.tiltShiftXFilter.blur
                    },
                    set: function (t) {
                        this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = t
                    }
                },
                gradientBlur: {
                    get: function () {
                        return this.tiltShiftXFilter.gradientBlur
                    },
                    set: function (t) {
                        this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = t
                    }
                },
                start: {
                    get: function () {
                        return this.tiltShiftXFilter.start
                    },
                    set: function (t) {
                        this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = t
                    }
                },
                end: {
                    get: function () {
                        return this.tiltShiftXFilter.end
                    },
                    set: function (t) {
                        this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = t
                    }
                }
            })
        }, {
            "../../core": 28,
            "./TiltShiftXFilter": 111,
            "./TiltShiftYFilter": 112
        }],
        111: [function (t, e, i) {
            function r() {
                n.call(this)
            }
            var n = t("./TiltShiftAxisFilter");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.updateDelta = function () {
                var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
                    e = this.uniforms.end.value.y - this.uniforms.start.value.y,
                    i = Math.sqrt(t * t + e * e);
                this.uniforms.delta.value.x = t / i, this.uniforms.delta.value.y = e / i
            }
        }, {
            "./TiltShiftAxisFilter": 109
        }],
        112: [function (t, e, i) {
            function r() {
                n.call(this)
            }
            var n = t("./TiltShiftAxisFilter");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.updateDelta = function () {
                var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
                    e = this.uniforms.end.value.y - this.uniforms.start.value.y,
                    i = Math.sqrt(t * t + e * e);
                this.uniforms.delta.value.x = -e / i, this.uniforms.delta.value.y = t / i
            }
        }, {
            "./TiltShiftAxisFilter": 109
        }],
        113: [function (t, e, i) {
            function r() {
                n.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n", {
                    radius: {
                        type: "1f",
                        value: .5
                    },
                    angle: {
                        type: "1f",
                        value: 5
                    },
                    offset: {
                        type: "v2",
                        value: {
                            x: .5,
                            y: .5
                        }
                    }
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                offset: {
                    get: function () {
                        return this.uniforms.offset.value
                    },
                    set: function (t) {
                        this.uniforms.offset.value = t
                    }
                },
                radius: {
                    get: function () {
                        return this.uniforms.radius.value
                    },
                    set: function (t) {
                        this.uniforms.radius.value = t
                    }
                },
                angle: {
                    get: function () {
                        return this.uniforms.angle.value
                    },
                    set: function (t) {
                        this.uniforms.angle.value = t
                    }
                }
            })
        }, {
            "../../core": 28
        }],
        114: [function (t, e, i) {
            function r() {
                this.global = new n.Point, this.target = null, this.originalEvent = null
            }
            var n = t("../core");
            r.prototype.constructor = r, e.exports = r, r.prototype.getLocalPosition = function (t, e, i) {
                var r = t.worldTransform,
                    s = i ? i : this.global,
                    o = r.a,
                    a = r.c,
                    h = r.tx,
                    l = r.b,
                    u = r.d,
                    c = r.ty,
                    p = 1 / (o * u + a * -l);
                return e = e || new n.Point, e.x = u * p * s.x + -a * p * s.x + (c * a - h * u) * p, e.y = o * p * s.y + -l * p * s.y + (-c * o + h * l) * p, e
            }
        }, {
            "../core": 28
        }],
        115: [function (t, e, i) {
            function r(t, e) {
                e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 !== e.autoPreventDefault ? e.autoPreventDefault : !0, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new s, this.eventData = {
                    stopped: !1,
                    target: null,
                    type: null,
                    data: this.mouse,
                    stopPropagation: function () {
                        this.stopped = !0
                    }
                }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this._tempPoint = new n.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution)
            }
            var n = t("../core"),
                s = t("./InteractionData");
            Object.assign(n.DisplayObject.prototype, t("./interactiveTarget")), r.prototype.constructor = r, e.exports = r, r.prototype.setTargetElement = function (t, e) {
                    this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents()
                }, r.prototype.addEvents = function () {
                    this.interactionDOMElement && (n.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0)
                }, r.prototype.removeEvents = function () {
                    this.interactionDOMElement && (n.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1)
                }, r.prototype.update = function (t) {
                    if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                        if (this.didMove) return void(this.didMove = !1);
                        this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                    }
                }, r.prototype.dispatchEvent = function (t, e, i) {
                    i.stopped || (i.target = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
                }, r.prototype.mapPositionToPoint = function (t, e, i) {
                    var r = this.interactionDOMElement.getBoundingClientRect();
                    t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) / this.resolution, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) / this.resolution
                }, r.prototype.processInteractive = function (t, e, i, r, n) {
                    if (!e.visible) return !1;
                    var s = e.children,
                        o = !1;
                    if (n = n || e.interactive, e.interactiveChildren)
                        for (var a = s.length - 1; a >= 0; a--) !o && r ? o = this.processInteractive(t, s[a], i, !0, n) : this.processInteractive(t, s[a], i, !1, !1);
                    return n && (r && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), o = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (o = e.containsPoint(t))), e.interactive && i(e, o)), o
                }, r.prototype.onMouseDown = function (t) {
                    this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0)
                }, r.prototype.processMouseDown = function (t, e) {
                    var i = this.mouse.originalEvent,
                        r = 2 === i.button || 3 === i.which;
                    e && (t[r ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, r ? "rightdown" : "mousedown", this.eventData))
                }, r.prototype.onMouseUp = function (t) {
                    this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0)
                }, r.prototype.processMouseUp = function (t, e) {
                    var i = this.mouse.originalEvent,
                        r = 2 === i.button || 3 === i.which,
                        n = r ? "_isRightDown" : "_isLeftDown";
                    e ? (this.dispatchEvent(t, r ? "rightup" : "mouseup", this.eventData), t[n] && (t[n] = !1, this.dispatchEvent(t, r ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1, this.dispatchEvent(t, r ? "rightupoutside" : "mouseupoutside", this.eventData))
                }, r.prototype.onMouseMove = function (t) {
                    this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor)
                }, r.prototype.processMouseMove = function (t, e) {
                    this.dispatchEvent(t, "mousemove", this.eventData), this.processMouseOverOut(t, e)
                }, r.prototype.onMouseOut = function (t) {
                    this.mouse.originalEvent = t, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = "inherit", this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1)
                }, r.prototype.processMouseOverOut = function (t, e) {
                    e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData))
                }, r.prototype.onTouchStart = function (t) {
                    this.autoPreventDefault && t.preventDefault();
                    for (var e = t.changedTouches, i = e.length, r = 0; i > r; r++) {
                        var n = e[r],
                            s = this.getTouchData(n);
                        s.originalEvent = t, this.eventData.data = s, this.eventData.stopped = !1, this.processInteractive(s.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.returnTouchData(s)
                    }
                }, r.prototype.processTouchStart = function (t, e) {
                    e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData))
                }, r.prototype.onTouchEnd = function (t) {
                    this.autoPreventDefault && t.preventDefault();
                    for (var e = t.changedTouches, i = e.length, r = 0; i > r; r++) {
                        var n = e[r],
                            s = this.getTouchData(n);
                        s.originalEvent = t, this.eventData.data = s, this.eventData.stopped = !1, this.processInteractive(s.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.returnTouchData(s)
                    }
                }, r.prototype.processTouchEnd = function (t, e) {
                    e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData))
                }, r.prototype.onTouchMove = function (t) {
                    this.autoPreventDefault && t.preventDefault();
                    for (var e = t.changedTouches, i = e.length, r = 0; i > r; r++) {
                        var n = e[r],
                            s = this.getTouchData(n);
                        s.originalEvent = t, this.eventData.data = s, this.eventData.stopped = !1, this.processInteractive(s.global, this.renderer._lastObjectRendered, this.processTouchMove, !1), this.returnTouchData(s)
                    }
                }, r.prototype.processTouchMove = function (t, e) {
                    e = e, this.dispatchEvent(t, "touchmove", this.eventData)
                }, r.prototype.getTouchData = function (t) {
                    var e = this.interactiveDataPool.pop();
                    return e || (e = new s), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e
                }, r.prototype.returnTouchData = function (t) {
                    this.interactiveDataPool.push(t)
                },
                r.prototype.destroy = function () {
                    this.removeEvents(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null
                }, n.WebGLRenderer.registerPlugin("interaction", r), n.CanvasRenderer.registerPlugin("interaction", r)
        }, {
            "../core": 28,
            "./InteractionData": 114,
            "./interactiveTarget": 117
        }],
        116: [function (t, e, i) {
            e.exports = {
                InteractionData: t("./InteractionData"),
                InteractionManager: t("./InteractionManager"),
                interactiveTarget: t("./interactiveTarget")
            }
        }, {
            "./InteractionData": 114,
            "./InteractionManager": 115,
            "./interactiveTarget": 117
        }],
        117: [function (t, e, i) {
            var r = {
                interactive: !1,
                buttonMode: !1,
                interactiveChildren: !0,
                defaultCursor: "pointer",
                _over: !1,
                _touchDown: !1
            };
            e.exports = r
        }, {}],
        118: [function (t, e, i) {
            function r(t, e) {
                var i = {},
                    r = t.data.getElementsByTagName("info")[0],
                    n = t.data.getElementsByTagName("common")[0];
                i.font = r.getAttribute("face"), i.size = parseInt(r.getAttribute("size"), 10), i.lineHeight = parseInt(n.getAttribute("lineHeight"), 10), i.chars = {};
                for (var a = t.data.getElementsByTagName("char"), h = 0; h < a.length; h++) {
                    var l = parseInt(a[h].getAttribute("id"), 10),
                        u = new s.Rectangle(parseInt(a[h].getAttribute("x"), 10) + e.frame.x, parseInt(a[h].getAttribute("y"), 10) + e.frame.y, parseInt(a[h].getAttribute("width"), 10), parseInt(a[h].getAttribute("height"), 10));
                    i.chars[l] = {
                        xOffset: parseInt(a[h].getAttribute("xoffset"), 10),
                        yOffset: parseInt(a[h].getAttribute("yoffset"), 10),
                        xAdvance: parseInt(a[h].getAttribute("xadvance"), 10),
                        kerning: {},
                        texture: new s.Texture(e.baseTexture, u)
                    }
                }
                var c = t.data.getElementsByTagName("kerning");
                for (h = 0; h < c.length; h++) {
                    var p = parseInt(c[h].getAttribute("first"), 10),
                        d = parseInt(c[h].getAttribute("second"), 10),
                        f = parseInt(c[h].getAttribute("amount"), 10);
                    i.chars[d] && (i.chars[d].kerning[p] = f)
                }
                t.bitmapFont = i, o.BitmapText.fonts[i.font] = i
            }
            var n = t("resource-loader").Resource,
                s = t("../core"),
                o = t("../extras"),
                a = t("path");
            e.exports = function () {
                return function (t, e) {
                    if (!t.data || !t.isXml) return e();
                    if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return e();
                    var i = a.dirname(t.url);
                    "." === i && (i = ""), this.baseUrl && i && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/"), i = i.replace(this.baseUrl, "")), i && "/" !== i.charAt(i.length - 1) && (i += "/");
                    var o = i + t.data.getElementsByTagName("page")[0].getAttribute("file");
                    if (s.utils.TextureCache[o]) r(t, s.utils.TextureCache[o]), e();
                    else {
                        var h = {
                            crossOrigin: t.crossOrigin,
                            loadType: n.LOAD_TYPE.IMAGE
                        };
                        this.add(t.name + "_image", o, h, function (i) {
                            r(t, i.texture), e()
                        })
                    }
                }
            }
        }, {
            "../core": 28,
            "../extras": 84,
            path: 3,
            "resource-loader": 17
        }],
        119: [function (t, e, i) {
            e.exports = {
                Loader: t("./loader"),
                bitmapFontParser: t("./bitmapFontParser"),
                spritesheetParser: t("./spritesheetParser"),
                textureParser: t("./textureParser"),
                Resource: t("resource-loader").Resource
            }
        }, {
            "./bitmapFontParser": 118,
            "./loader": 120,
            "./spritesheetParser": 121,
            "./textureParser": 122,
            "resource-loader": 17
        }],
        120: [function (t, e, i) {
            function r(t, e) {
                n.call(this, t, e);
                for (var i = 0; i < r._pixiMiddleware.length; ++i) this.use(r._pixiMiddleware[i]())
            }
            var n = t("resource-loader"),
                s = t("./textureParser"),
                o = t("./spritesheetParser"),
                a = t("./bitmapFontParser");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r._pixiMiddleware = [n.middleware.parsing.blob, s, o, a], r.addPixiMiddleware = function (t) {
                r._pixiMiddleware.push(t)
            };
            var h = n.Resource;
            h.setExtensionXhrType("fnt", h.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {
            "./bitmapFontParser": 118,
            "./spritesheetParser": 121,
            "./textureParser": 122,
            "resource-loader": 17
        }],
        121: [function (t, e, i) {
            var r = t("resource-loader").Resource,
                n = t("path"),
                s = t("../core");
            e.exports = function () {
                return function (t, e) {
                    if (!t.data || !t.isJson || !t.data.frames) return e();
                    var i = {
                            crossOrigin: t.crossOrigin,
                            loadType: r.LOAD_TYPE.IMAGE
                        },
                        o = n.dirname(t.url.replace(this.baseUrl, "")),
                        a = s.utils.getResolutionOfUrl(t.url);
                    this.add(t.name + "_image", o + "/" + t.data.meta.image, i, function (i) {
                        t.textures = {};
                        var r = t.data.frames;
                        for (var n in r) {
                            var o = r[n].frame;
                            if (o) {
                                var h = null,
                                    l = null;
                                if (h = r[n].rotated ? new s.Rectangle(o.x, o.y, o.h, o.w) : new s.Rectangle(o.x, o.y, o.w, o.h), r[n].trimmed && (l = new s.Rectangle(r[n].spriteSourceSize.x / a, r[n].spriteSourceSize.y / a, r[n].sourceSize.w / a, r[n].sourceSize.h / a)), r[n].rotated) {
                                    var u = h.width;
                                    h.width = h.height, h.height = u
                                }
                                h.x /= a, h.y /= a, h.width /= a, h.height /= a, t.textures[n] = new s.Texture(i.texture.baseTexture, h, h.clone(), l, r[n].rotated), s.utils.TextureCache[n] = t.textures[n]
                            }
                        }
                        e()
                    })
                }
            }
        }, {
            "../core": 28,
            path: 3,
            "resource-loader": 17
        }],
        122: [function (t, e, i) {
            var r = t("../core");
            e.exports = function () {
                return function (t, e) {
                    t.data && t.isImage && (t.texture = new r.Texture(new r.BaseTexture(t.data, null, r.utils.getResolutionOfUrl(t.url))), r.utils.TextureCache[t.url] = t.texture), e()
                }
            }
        }, {
            "../core": 28
        }],
        123: [function (t, e, i) {
            function r(t, e, i, s, o) {
                n.Container.call(this), this._texture = null, this.uvs = i || new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = s || new Uint16Array([0, 1, 2, 3]), this.dirty = !0, this.blendMode = n.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = o || r.DRAW_MODES.TRIANGLE_MESH, this.texture = t
            }
            var n = t("../core"),
                s = new n.Point,
                o = new n.Polygon;
            r.prototype = Object.create(n.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {
                texture: {
                    get: function () {
                        return this._texture
                    },
                    set: function (t) {
                        this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                    }
                }
            }), r.prototype._renderWebGL = function (t) {
                t.setObjectRenderer(t.plugins.mesh), t.plugins.mesh.render(this)
            }, r.prototype._renderCanvas = function (t) {
                var e = t.context,
                    i = this.worldTransform;
                t.roundPixels ? e.setTransform(i.a, i.b, i.c, i.d, 0 | i.tx, 0 | i.ty) : e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e)
            }, r.prototype._renderCanvasTriangleMesh = function (t) {
                for (var e = this.vertices, i = this.uvs, r = e.length / 2, n = 0; r - 2 > n; n++) {
                    var s = 2 * n;
                    this._renderCanvasDrawTriangle(t, e, i, s, s + 2, s + 4)
                }
            }, r.prototype._renderCanvasTriangles = function (t) {
                for (var e = this.vertices, i = this.uvs, r = this.indices, n = r.length, s = 0; n > s; s += 3) {
                    var o = 2 * r[s],
                        a = 2 * r[s + 1],
                        h = 2 * r[s + 2];
                    this._renderCanvasDrawTriangle(t, e, i, o, a, h)
                }
            }, r.prototype._renderCanvasDrawTriangle = function (t, e, i, r, n, s) {
                var o = this._texture.baseTexture.source,
                    a = this._texture.baseTexture.width,
                    h = this._texture.baseTexture.height,
                    l = e[r],
                    u = e[n],
                    c = e[s],
                    p = e[r + 1],
                    d = e[n + 1],
                    f = e[s + 1],
                    g = i[r] * a,
                    v = i[n] * a,
                    m = i[s] * a,
                    y = i[r + 1] * h,
                    x = i[n + 1] * h,
                    _ = i[s + 1] * h;
                if (this.canvasPadding > 0) {
                    var b = this.canvasPadding / this.worldTransform.a,
                        T = this.canvasPadding / this.worldTransform.d,
                        w = (l + u + c) / 3,
                        E = (p + d + f) / 3,
                        S = l - w,
                        C = p - E,
                        A = Math.sqrt(S * S + C * C);
                    l = w + S / A * (A + b), p = E + C / A * (A + T), S = u - w, C = d - E, A = Math.sqrt(S * S + C * C), u = w + S / A * (A + b), d = E + C / A * (A + T), S = c - w, C = f - E, A = Math.sqrt(S * S + C * C), c = w + S / A * (A + b), f = E + C / A * (A + T)
                }
                t.save(), t.beginPath(), t.moveTo(l, p), t.lineTo(u, d), t.lineTo(c, f), t.closePath(), t.clip();
                var M = g * x + y * m + v * _ - x * m - y * v - g * _,
                    R = l * x + y * c + u * _ - x * c - y * u - l * _,
                    P = g * u + l * m + v * c - u * m - l * v - g * c,
                    D = g * x * c + y * u * m + l * v * _ - l * x * m - y * v * c - g * u * _,
                    O = p * x + y * f + d * _ - x * f - y * d - p * _,
                    F = g * d + p * m + v * f - d * m - p * v - g * f,
                    L = g * x * f + y * d * m + p * v * _ - p * x * m - y * v * f - g * d * _;
                t.transform(R / M, O / M, P / M, F / M, D / M, L / M), t.drawImage(o, 0, 0), t.restore()
            }, r.prototype.renderMeshFlat = function (t) {
                var e = this.context,
                    i = t.vertices,
                    r = i.length / 2;
                e.beginPath();
                for (var n = 1; r - 2 > n; n++) {
                    var s = 2 * n,
                        o = i[s],
                        a = i[s + 2],
                        h = i[s + 4],
                        l = i[s + 1],
                        u = i[s + 3],
                        c = i[s + 5];
                    e.moveTo(o, l), e.lineTo(a, u), e.lineTo(h, c)
                }
                e.fillStyle = "#FF0000", e.fill(), e.closePath()
            }, r.prototype._onTextureUpdate = function () {
                this.updateFrame = !0
            }, r.prototype.getBounds = function (t) {
                if (!this._currentBounds) {
                    for (var e = t || this.worldTransform, i = e.a, r = e.b, s = e.c, o = e.d, a = e.tx, h = e.ty, l = -(1 / 0), u = -(1 / 0), c = 1 / 0, p = 1 / 0, d = this.vertices, f = 0, g = d.length; g > f; f += 2) {
                        var v = d[f],
                            m = d[f + 1],
                            y = i * v + s * m + a,
                            x = o * m + r * v + h;
                        c = c > y ? y : c, p = p > x ? x : p, l = y > l ? y : l, u = x > u ? x : u
                    }
                    if (c === -(1 / 0) || u === 1 / 0) return n.Rectangle.EMPTY;
                    var _ = this._bounds;
                    _.x = c, _.width = l - c, _.y = p, _.height = u - p, this._currentBounds = _
                }
                return this._currentBounds
            }, r.prototype.containsPoint = function (t) {
                if (!this.getBounds().contains(t.x, t.y)) return !1;
                this.worldTransform.applyInverse(t, s);
                var e, i, n = this.vertices,
                    a = o.points;
                if (this.drawMode === r.DRAW_MODES.TRIANGLES) {
                    var h = this.indices;
                    for (i = this.indices.length, e = 0; i > e; e += 3) {
                        var l = 2 * h[e],
                            u = 2 * h[e + 1],
                            c = 2 * h[e + 2];
                        if (a[0] = n[l], a[1] = n[l + 1], a[2] = n[u], a[3] = n[u + 1], a[4] = n[c], a[5] = n[c + 1], o.contains(s.x, s.y)) return !0
                    }
                } else
                    for (i = n.length, e = 0; i > e; e += 6)
                        if (a[0] = n[e], a[1] = n[e + 1], a[2] = n[e + 2], a[3] = n[e + 3], a[4] = n[e + 4], a[5] = n[e + 5], o.contains(s.x, s.y)) return !0; return !1
            }, r.DRAW_MODES = {
                TRIANGLE_MESH: 0,
                TRIANGLES: 1
            }
        }, {
            "../core": 28
        }],
        124: [function (t, e, i) {
            function r(t, e) {
                n.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh()
            }
            var n = t("./Mesh"),
                s = t("../core");
            r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.refresh = function () {
                var t = this.points;
                if (!(t.length < 1) && this._texture._uvs) {
                    var e = this.uvs,
                        i = this.indices,
                        r = this.colors,
                        n = this._texture._uvs,
                        o = new s.Point(n.x0, n.y0),
                        a = new s.Point(n.x2 - n.x0, n.y2 - n.y0);
                    e[0] = 0 + o.x, e[1] = 0 + o.y, e[2] = 0 + o.x, e[3] = 1 * a.y + o.y, r[0] = 1, r[1] = 1, i[0] = 0, i[1] = 1;
                    for (var h, l, u, c = t.length, p = 1; c > p; p++) h = t[p], l = 4 * p, u = p / (c - 1), e[l] = u * a.x + o.x, e[l + 1] = 0 + o.y, e[l + 2] = u * a.x + o.x, e[l + 3] = 1 * a.y + o.y, l = 2 * p, r[l] = 1, r[l + 1] = 1, l = 2 * p, i[l] = l, i[l + 1] = l + 1;
                    this.dirty = !0
                }
            }, r.prototype._onTextureUpdate = function () {
                n.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
            }, r.prototype.updateTransform = function () {
                var t = this.points;
                if (!(t.length < 1)) {
                    for (var e, i, r, n, s, o, a = t[0], h = 0, l = 0, u = this.vertices, c = t.length, p = 0; c > p; p++) i = t[p], r = 4 * p, e = p < t.length - 1 ? t[p + 1] : i, l = -(e.x - a.x), h = e.y - a.y, n = 10 * (1 - p / (c - 1)), n > 1 && (n = 1), s = Math.sqrt(h * h + l * l), o = this._texture.height / 2, h /= s, l /= s, h *= o, l *= o, u[r] = i.x + h, u[r + 1] = i.y + l, u[r + 2] = i.x - h, u[r + 3] = i.y - l, a = i;
                    this.containerUpdateTransform()
                }
            }
        }, {
            "../core": 28,
            "./Mesh": 123
        }],
        125: [function (t, e, i) {
            e.exports = {
                Mesh: t("./Mesh"),
                Rope: t("./Rope"),
                MeshRenderer: t("./webgl/MeshRenderer"),
                MeshShader: t("./webgl/MeshShader")
            }
        }, {
            "./Mesh": 123,
            "./Rope": 124,
            "./webgl/MeshRenderer": 126,
            "./webgl/MeshShader": 127
        }],
        126: [function (t, e, i) {
            function r(t) {
                n.ObjectRenderer.call(this, t), this.indices = new Uint16Array(15e3);
                for (var e = 0, i = 0; 15e3 > e; e += 6, i += 4) this.indices[e + 0] = i + 0, this.indices[e + 1] = i + 1, this.indices[e + 2] = i + 2, this.indices[e + 3] = i + 0, this.indices[e + 4] = i + 2, this.indices[e + 5] = i + 3
            }
            var n = t("../../core"),
                s = t("../Mesh");
            r.prototype = Object.create(n.ObjectRenderer.prototype), r.prototype.constructor = r, e.exports = r, n.WebGLRenderer.registerPlugin("mesh", r), r.prototype.onContextChange = function () {}, r.prototype.render = function (t) {
                t._vertexBuffer || this._initWebGL(t);
                var e = this.renderer,
                    i = e.gl,
                    r = t._texture.baseTexture,
                    n = e.shaderManager.plugins.meshShader,
                    o = t.drawMode === s.DRAW_MODES.TRIANGLE_MESH ? i.TRIANGLE_STRIP : i.TRIANGLES;
                e.blendModeManager.setBlendMode(t.blendMode), i.uniformMatrix3fv(n.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(n.uniforms.projectionMatrix._location, !1, e.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform1f(n.uniforms.alpha._location, t.worldAlpha), t.dirty ? (t.dirty = !1, i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer), i.bufferData(i.ARRAY_BUFFER, t.vertices, i.STATIC_DRAW), i.vertexAttribPointer(n.attributes.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.bufferData(i.ARRAY_BUFFER, t.uvs, i.STATIC_DRAW), i.vertexAttribPointer(n.attributes.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), r._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, r._glTextures[i.id]) : this.renderer.updateTexture(r), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, t.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, t._vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, t.vertices), i.vertexAttribPointer(n.attributes.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, t._uvBuffer), i.vertexAttribPointer(n.attributes.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), r._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, r._glTextures[i.id]) : this.renderer.updateTexture(r), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t._indexBuffer), i.bufferSubData(i.ELEMENT_ARRAY_BUFFER, 0, t.indices)), i.drawElements(o, t.indices.length, i.UNSIGNED_SHORT, 0)
            }, r.prototype._initWebGL = function (t) {
                var e = this.renderer.gl;
                t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.vertices, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), t.colors && (t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW)
            }, r.prototype.flush = function () {}, r.prototype.start = function () {
                var t = this.renderer.shaderManager.plugins.meshShader;
                this.renderer.shaderManager.setShader(t)
            }, r.prototype.destroy = function () {}
        }, {
            "../../core": 28,
            "../Mesh": 123
        }],
        127: [function (t, e, i) {
            function r(t) {
                n.Shader.call(this, t, ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;", "}"].join("\n"), {
                    alpha: {
                        type: "1f",
                        value: 0
                    },
                    translationMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    },
                    projectionMatrix: {
                        type: "mat3",
                        value: new Float32Array(9)
                    }
                }, {
                    aVertexPosition: 0,
                    aTextureCoord: 0
                })
            }
            var n = t("../../core");
            r.prototype = Object.create(n.Shader.prototype), r.prototype.constructor = r, e.exports = r, n.ShaderManager.registerPlugin("meshShader", r)
        }, {
            "../../core": 28
        }],
        128: [function (t, e, i) {
            Object.assign || (Object.assign = t("object-assign"))
        }, {
            "object-assign": 12
        }],
        129: [function (t, e, i) {
            t("./Object.assign"), t("./requestAnimationFrame")
        }, {
            "./Object.assign": 128,
            "./requestAnimationFrame": 130
        }],
        130: [function (t, e, i) {
            (function (t) {
                if (Date.now && Date.prototype.getTime || (Date.now = function () {
                        return (new Date).getTime()
                    }), !t.performance || !t.performance.now) {
                    var e = Date.now();
                    t.performance || (t.performance = {}), t.performance.now = function () {
                        return Date.now() - e
                    }
                }
                for (var i = Date.now(), r = ["ms", "moz", "webkit", "o"], n = 0; n < r.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[r[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[r[n] + "CancelAnimationFrame"] || t[r[n] + "CancelRequestAnimationFrame"];
                t.requestAnimationFrame || (t.requestAnimationFrame = function (t) {
                    if ("function" != typeof t) throw new TypeError(t + "is not a function");
                    var e = Date.now(),
                        r = 16 + i - e;
                    return 0 > r && (r = 0), i = e, setTimeout(function () {
                        i = Date.now(), t(performance.now())
                    }, r)
                }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
                    clearTimeout(t)
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}]
    }, {}, [1])(1)
}),
function (t) {
    "use strict";
    var e, i, r, n, s, o = t.GreenSockGlobals || t,
        a = function (t) {
            var e, i = t.split("."),
                r = o;
            for (e = 0; i.length > e; e++) r[i[e]] = r = r[i[e]] || {};
            return r
        },
        h = a("com.greensock"),
        l = [].slice,
        u = function () {},
        c = {},
        p = function (e, i, r, n) {
            this.sc = c[e] ? c[e].sc : [], c[e] = this, this.gsClass = null, this.func = r;
            var s = [];
            this.check = function (h) {
                for (var l, u, d, f, g = i.length, v = g; --g > -1;)(l = c[i[g]] || new p(i[g], [])).gsClass ? (s[g] = l.gsClass, v--) : h && l.sc.push(this);
                if (0 === v && r)
                    for (u = ("com.greensock." + e).split("."), d = u.pop(), f = a(u.join("."))[d] = this.gsClass = r.apply(r, s), n && (o[d] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + e.split(".").join("/"), [], function () {
                            return f
                        }) : "undefined" != typeof module && module.exports && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
            }, this.check(!0)
        },
        d = t._gsDefine = function (t, e, i, r) {
            return new p(t, e, i, r)
        },
        f = h._class = function (t, e, i) {
            return e = e || function () {}, d(t, [], function () {
                return e
            }, i), e
        };
    d.globals = o;
    var g = [0, 0, 1, 1],
        v = [],
        m = f("easing.Ease", function (t, e, i, r) {
            this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? g.concat(e) : g
        }, !0),
        y = m.map = {},
        x = m.register = function (t, e, i, r) {
            for (var n, s, o, a, l = e.split(","), u = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                for (s = l[u], n = r ? f("easing." + s, null, !0) : h.easing[s] || {}, o = c.length; --o > -1;) a = c[o], y[s + "." + a] = y[a + s] = n[a] = t.getRatio ? t : t[a] || new t
        };
    for (r = m.prototype, r._calcEnd = !1, r.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
                i = this._power,
                r = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : .5 > t ? r / 2 : 1 - r / 2
        }, e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], i = e.length; --i > -1;) r = e[i] + ",Power" + i, x(new m(null, null, 1, i), r, "easeOut", !0), x(new m(null, null, 2, i), r, "easeIn" + (0 === i ? ",easeNone" : "")), x(new m(null, null, 3, i), r, "easeInOut");
    y.linear = h.easing.Linear.easeIn, y.swing = h.easing.Quad.easeInOut;
    var _ = f("events.EventDispatcher", function (t) {
        this._listeners = {}, this._eventTarget = t || this
    });
    r = _.prototype, r.addEventListener = function (t, e, i, r, o) {
        o = o || 0;
        var a, h, l = this._listeners[t],
            u = 0;
        for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) a = l[h], a.c === e && a.s === i ? l.splice(h, 1) : 0 === u && o > a.pr && (u = h + 1);
        l.splice(u, 0, {
            c: e,
            s: i,
            up: r,
            pr: o
        }), this !== n || s || n.wake()
    }, r.removeEventListener = function (t, e) {
        var i, r = this._listeners[t];
        if (r)
            for (i = r.length; --i > -1;)
                if (r[i].c === e) return void r.splice(i, 1)
    }, r.dispatchEvent = function (t) {
        var e, i, r, n = this._listeners[t];
        if (n)
            for (e = n.length, i = this._eventTarget; --e > -1;) r = n[e], r.up ? r.c.call(r.s || i, {
                type: t,
                target: i
            }) : r.c.call(r.s || i)
    };
    var b = t.requestAnimationFrame,
        T = t.cancelAnimationFrame,
        w = Date.now || function () {
            return (new Date).getTime()
        },
        E = w();
    for (e = ["ms", "moz", "webkit", "o"], i = e.length; --i > -1 && !b;) b = t[e[i] + "RequestAnimationFrame"], T = t[e[i] + "CancelAnimationFrame"] || t[e[i] + "CancelRequestAnimationFrame"];
    f("Ticker", function (t, e) {
        var i, r, o, a, h, l = this,
            c = w(),
            p = e !== !1 && b,
            d = function (t) {
                E = w(), l.time = (E - c) / 1e3;
                var e, n = l.time - h;
                (!i || n > 0 || t === !0) && (l.frame++, h += n + (n >= a ? .004 : a - n), e = !0), t !== !0 && (o = r(d)), e && l.dispatchEvent("tick")
            };
        _.call(l), this.time = this.frame = 0, this.tick = function () {
            d(!0)
        }, this.sleep = function () {
            null != o && (p && T ? T(o) : clearTimeout(o), r = u, o = null, l === n && (s = !1))
        }, this.wake = function () {
            null !== o && l.sleep(), r = 0 === i ? u : p && b ? b : function (t) {
                return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
            }, l === n && (s = !0), d(2)
        }, this.fps = function (t) {
            return arguments.length ? (i = t, a = 1 / (i || 60), h = this.time + a, void l.wake()) : i
        }, this.useRAF = function (t) {
            return arguments.length ? (l.sleep(), p = t, void l.fps(i)) : p
        }, l.fps(t), setTimeout(function () {
            p && (!o || 5 > l.frame) && l.useRAF(!1)
        }, 1500)
    }), r = h.Ticker.prototype = new h.events.EventDispatcher, r.constructor = h.Ticker;
    var S = f("core.Animation", function (t, e) {
        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, k) {
            s || n.wake();
            var i = this.vars.useFrames ? N : k;
            i.add(this, i._time), this.vars.paused && this.paused(!0)
        }
    });
    n = S.ticker = new h.Ticker, r = S.prototype, r._dirty = r._gc = r._initted = r._paused = !1, r._totalTime = r._time = 0, r._rawPrevTime = -1, r._next = r._last = r._onUpdate = r._timeline = r.timeline = null, r._paused = !1;
    var C = function () {
        w() - E > 2e3 && n.wake(), setTimeout(C, 2e3)
    };
    C(), r.play = function (t, e) {
        return arguments.length && this.seek(t, e), this.reversed(!1).paused(!1)
    }, r.pause = function (t, e) {
        return arguments.length && this.seek(t, e), this.paused(!0)
    }, r.resume = function (t, e) {
        return arguments.length && this.seek(t, e), this.paused(!1)
    }, r.seek = function (t, e) {
        return this.totalTime(Number(t), e !== !1)
    }, r.restart = function (t, e) {
        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
    }, r.reverse = function (t, e) {
        return arguments.length && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
    }, r.render = function () {}, r.invalidate = function () {
        return this
    }, r._enabled = function (t, e) {
        return s || n.wake(), this._gc = !t, this._active = t && !this._paused && this._totalTime > 0 && this._totalTime < this._totalDuration, e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
    }, r._kill = function () {
        return this._enabled(!1, !1)
    }, r.kill = function (t, e) {
        return this._kill(t, e), this
    }, r._uncache = function (t) {
        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
        return this
    }, r._swapSelfInParams = function (t) {
        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
        return i
    }, r.eventCallback = function (t, e, i, r) {
        if ("on" === (t || "").substr(0, 2)) {
            var n = this.vars;
            if (1 === arguments.length) return n[t];
            null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = i instanceof Array && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
        }
        return this
    }, r.delay = function (t) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
    }, r.duration = function (t) {
        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
    }, r.totalDuration = function (t) {
        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
    }, r.time = function (t, e) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
    }, r.totalTime = function (t, e, i) {
        if (s || n.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
            if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var r = this._totalDuration,
                    o = this._timeline;
                if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? r - t : t) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                    for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime !== t && this.render(t, e, !1)
        }
        return this
    }, r.startTime = function (t) {
        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
    }, r.timeScale = function (t) {
        if (!arguments.length) return this._timeScale;
        if (t = t || 1e-6, this._timeline && this._timeline.smoothChildTiming) {
            var e = this._pauseTime,
                i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - (i - this._startTime) * this._timeScale / t
        }
        return this._timeScale = t, this._uncache(!1)
    }, r.reversed = function (t) {
        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._totalTime, !0)), this) : this._reversed
    }, r.paused = function (t) {
        if (!arguments.length) return this._paused;
        if (t != this._paused && this._timeline) {
            s || t || n.wake();
            var e = this._timeline,
                i = e.rawTime(),
                r = i - this._pauseTime;
            !t && e.smoothChildTiming && (this._startTime += r, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = !t && this._totalTime > 0 && this._totalTime < this._totalDuration, t || 0 === r || 0 === this._duration || this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
        }
        return this._gc && !t && this._enabled(!0, !1), this
    };
    var A = f("core.SimpleTimeline", function (t) {
        S.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
    });
    r = A.prototype = new S, r.constructor = A, r.kill()._gc = !1, r._first = r._last = null, r._sortChildren = !1, r.add = r.insert = function (t, e) {
        var i, r;
        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
            for (r = t._startTime; i && i._startTime > r;) i = i._prev;
        return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
    }, r._remove = function (t, e) {
        return t.timeline === this && (e || t._enabled(!1, !0), t.timeline = null, t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), this._timeline && this._uncache(!0)), this
    }, r.render = function (t, e, i) {
        var r, n = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
    }, r.rawTime = function () {
        return s || n.wake(), this._totalTime
    };
    var M = f("TweenLite", function (e, i, r) {
            if (S.call(this, i, r), this.render = M.prototype.render, null == e) throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : M.selector(e) || e;
            var n, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                h = this.vars.overwrite;
            if (this._overwrite = h = null == h ? B[M.defaultOverwrite] : "number" == typeof h ? h >> 0 : B[h], (a || e instanceof Array) && "number" != typeof e[0])
                for (this._targets = o = l.call(e, 0), this._propLookup = [], this._siblings = [], n = 0; o.length > n; n++) s = o[n], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(n--, 1), this._targets = o = o.concat(l.call(s, 0))) : (this._siblings[n] = U(s, this, !1), 1 === h && this._siblings[n].length > 1 && j(s, this, null, 1, this._siblings[n])) : (s = o[n--] = M.selector(s), "string" == typeof s && o.splice(n + 1, 1)) : o.splice(n--, 1);
            else this._propLookup = {}, this._siblings = U(e, this, !1), 1 === h && this._siblings.length > 1 && j(e, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
        }, !0),
        R = function (e) {
            return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
        },
        P = function (t, e) {
            var i, r = {};
            for (i in t) I[i] || i in e && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!O[i] || O[i] && O[i]._autoCSS) || (r[i] = t[i], delete t[i]);
            t.css = r
        };
    r = M.prototype = new S, r.constructor = M, r.kill()._gc = !1, r.ratio = 0, r._firstPT = r._targets = r._overwrittenProps = r._startAt = null, r._notifyPluginsOfEnabled = !1, M.version = "1.10.2", M.defaultEase = r._ease = new m(null, null, 1, 1), M.defaultOverwrite = "auto", M.ticker = n, M.autoSleep = !0, M.selector = t.$ || t.jQuery || function (e) {
        return t.$ ? (M.selector = t.$, t.$(e)) : t.document ? t.document.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e
    };
    var D = M._internals = {},
        O = M._plugins = {},
        F = M._tweenLookup = {},
        L = 0,
        I = D.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1
        },
        B = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        N = S._rootFramesTimeline = new A,
        k = S._rootTimeline = new A;
    k._startTime = n.time, N._startTime = n.frame, k._active = N._active = !0, S._updateRoot = function () {
        if (k.render((n.time - k._startTime) * k._timeScale, !1, !1), N.render((n.frame - N._startTime) * N._timeScale, !1, !1), !(n.frame % 120)) {
            var t, e, i;
            for (i in F) {
                for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete F[i]
            }
            if (i = k._first, (!i || i._paused) && M.autoSleep && !N._first && 1 === n._listeners.tick.length) {
                for (; i && i._paused;) i = i._next;
                i || n.sleep()
            }
        }
    }, n.addEventListener("tick", S._updateRoot);
    var U = function (t, e, i) {
            var r, n, s = t._gsTweenID;
            if (F[s || (t._gsTweenID = s = "t" + L++)] || (F[s] = {
                    target: t,
                    tweens: []
                }), e && (r = F[s].tweens, r[n = r.length] = e, i))
                for (; --n > -1;) r[n] === e && r.splice(n, 1);
            return F[s].tweens
        },
        j = function (t, e, i, r, n) {
            var s, o, a, h;
            if (1 === r || r >= 4) {
                for (h = n.length, s = 0; h > s; s++)
                    if ((a = n[s]) !== e) a._gc || a._enabled(!1, !1) && (o = !0);
                    else if (5 === r) break;
                return o
            }
            var l, u = e._startTime + 1e-10,
                c = [],
                p = 0,
                d = 0 === e._duration;
            for (s = n.length; --s > -1;)(a = n[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || X(e, 0, d), 0 === X(a, l, d) && (c[p++] = a)) : u >= a._startTime && a._startTime + a.totalDuration() / a._timeScale + 1e-10 > u && ((d || !a._initted) && 2e-10 >= u - a._startTime || (c[p++] = a)));
            for (s = p; --s > -1;) a = c[s], 2 === r && a._kill(i, t) && (o = !0), (2 !== r || !a._firstPT && a._initted) && a._enabled(!1, !1) && (o = !0);
            return o
        },
        X = function (t, e, i) {
            for (var r = t._timeline, n = r._timeScale, s = t._startTime, o = 1e-10; r._timeline;) {
                if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                r = r._timeline
            }
            return s /= n, s > e ? s - e : i && s === e || !t._initted && 2 * o > s - e ? o : (s += t.totalDuration() / t._timeScale / n) > e + o ? 0 : s - e - o
        };
    r._init = function () {
        var t, e, i, r, n = this.vars,
            s = this._overwrittenProps,
            o = this._duration,
            a = n.immediateRender,
            h = n.ease;
        if (n.startAt) {
            if (this._startAt && this._startAt.render(-1, !0), n.startAt.overwrite = 0, n.startAt.immediateRender = !0, this._startAt = M.to(this.target, 0, n.startAt), a)
                if (this._time > 0) this._startAt = null;
                else if (0 !== o) return
        } else if (n.runBackwards && n.immediateRender && 0 !== o)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
            else if (0 === this._time) {
            i = {};
            for (r in n) I[r] && "autoCSS" !== r || (i[r] = n[r]);
            return i.overwrite = 0, void(this._startAt = M.to(this.target, 0, i))
        }
        if (this._ease = h ? h instanceof m ? n.easeParams instanceof Array ? h.config.apply(h, n.easeParams) : h : "function" == typeof h ? new m(h, n.easeParams) : y[h] || M.defaultEase : M.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], s ? s[t] : null) && (e = !0);
        else e = this._initProps(this.target, this._propLookup, this._siblings, s);
        if (e && M._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
        this._onUpdate = n.onUpdate, this._initted = !0
    }, r._initProps = function (e, i, r, n) {
        var s, o, a, h, l, u;
        if (null == e) return !1;
        this.vars.css || e.style && e !== t && e.nodeType && O.css && this.vars.autoCSS !== !1 && P(this.vars, e);
        for (s in this.vars) {
            if (u = this.vars[s], I[s]) u instanceof Array && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
            else if (O[s] && (h = new O[s])._onInitTween(e, this.vars[s], this)) {
                for (this._firstPT = l = {
                        _next: this._firstPT,
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: !0,
                        n: s,
                        pg: !0,
                        pr: h._priority
                    }, o = h._overwriteProps.length; --o > -1;) i[h._overwriteProps[o]] = this._firstPT;
                (h._priority || h._onInitAllProps) && (a = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
            } else this._firstPT = i[s] = l = {
                _next: this._firstPT,
                t: e,
                p: s,
                f: "function" == typeof e[s],
                n: s,
                pg: !1,
                pr: 0
            }, l.s = l.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), l.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - l.s || 0;
            l && l._next && (l._next._prev = l)
        }
        return n && this._kill(n, e) ? this._initProps(e, i, r, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && j(e, this, i, this._overwrite, r) ? (this._kill(i, e), this._initProps(e, i, r, n)) : a
    }, r.render = function (t, e, i) {
        var r, n, s, o = this._time;
        if (t >= this._duration) this._totalTime = this._time = this._duration, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete"), 0 === this._duration && ((0 === t || 0 > this._rawPrevTime) && this._rawPrevTime !== t && (i = !0, this._rawPrevTime > 0 && (n = "onReverseComplete", e && (t = -1))), this._rawPrevTime = t);
        else if (1e-7 > t) this._totalTime = this._time = 0,
            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === this._duration && this._rawPrevTime > 0) && (n = "onReverseComplete", r = this._reversed), 0 > t ? (this._active = !1, 0 === this._duration && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = t)) : this._initted || (i = !0);
        else if (this._totalTime = this._time = t, this._easeType) {
            var a = t / this._duration,
                h = this._easeType,
                l = this._easePower;
            (1 === h || 3 === h && a >= .5) && (a = 1 - a), 3 === h && (a *= 2), 1 === l ? a *= a : 2 === l ? a *= a * a : 3 === l ? a *= a * a * a : 4 === l && (a *= a * a * a * a), this.ratio = 1 === h ? 1 - a : 2 === h ? a : .5 > t / this._duration ? a / 2 : 1 - a / 2
        } else this.ratio = this._ease.getRatio(t / this._duration);
        if (this._time !== o || i) {
            if (!this._initted) {
                if (this._init(), !this._initted) return;
                this._time && !r ? this.ratio = this._ease.getRatio(this._time / this._duration) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === this._duration) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || v))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
            this._onUpdate && (0 > t && this._startAt && this._startAt.render(t, e, i), e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || v)), n && (this._gc || (0 > t && this._startAt && !this._onUpdate && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this.vars[n].apply(this.vars[n + "Scope"] || this, this.vars[n + "Params"] || v)))
        }
    }, r._kill = function (t, e) {
        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._enabled(!1, !1);
        e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
        var i, r, n, s, o, a, h, l;
        if ((e instanceof Array || R(e)) && "number" != typeof e[0])
            for (i = e.length; --i > -1;) this._kill(t, e[i]) && (a = !0);
        else {
            if (this._targets) {
                for (i = this._targets.length; --i > -1;)
                    if (e === this._targets[i]) {
                        o = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                        break
                    }
            } else {
                if (e !== this.target) return !1;
                o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (o) {
                h = t || o, l = t !== r && "all" !== r && t !== o && (null == t || t._tempKill !== !0);
                for (n in h)(s = o[n]) && (s.pg && s.t._kill(h) && (a = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete o[n]), l && (r[n] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
            }
        }
        return a
    }, r.invalidate = function () {
        return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
    }, r._enabled = function (t, e) {
        if (s || n.wake(), t && this._gc) {
            var i, r = this._targets;
            if (r)
                for (i = r.length; --i > -1;) this._siblings[i] = U(r[i], this, !0);
            else this._siblings = U(this.target, this, !0)
        }
        return S.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? M._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
    }, M.to = function (t, e, i) {
        return new M(t, e, i)
    }, M.from = function (t, e, i) {
        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new M(t, e, i)
    }, M.fromTo = function (t, e, i, r) {
        return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new M(t, e, r)
    }, M.delayedCall = function (t, e, i, r, n) {
        return new M(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: r,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: r,
            immediateRender: !1,
            useFrames: n,
            overwrite: 0
        })
    }, M.set = function (t, e) {
        return new M(t, 0, e)
    }, M.killTweensOf = M.killDelayedCallsTo = function (t, e) {
        for (var i = M.getTweensOf(t), r = i.length; --r > -1;) i[r]._kill(e, t)
    }, M.getTweensOf = function (t) {
        if (null == t) return [];
        t = "string" != typeof t ? t : M.selector(t) || t;
        var e, i, r, n;
        if ((t instanceof Array || R(t)) && "number" != typeof t[0]) {
            for (e = t.length, i = []; --e > -1;) i = i.concat(M.getTweensOf(t[e]));
            for (e = i.length; --e > -1;)
                for (n = i[e], r = e; --r > -1;) n === i[r] && i.splice(e, 1)
        } else
            for (i = U(t).concat(), e = i.length; --e > -1;) i[e]._gc && i.splice(e, 1);
        return i
    };
    var W = f("plugins.TweenPlugin", function (t, e) {
        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = W.prototype
    }, !0);
    if (r = W.prototype, W.version = "1.10.1", W.API = 2, r._firstPT = null, r._addTween = function (t, e, i, r, n, s) {
            var o, a;
            return null != r && (o = "number" == typeof r || "=" !== r.charAt(1) ? Number(r) - i : parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2))) ? (this._firstPT = a = {
                _next: this._firstPT,
                t: t,
                p: e,
                s: i,
                c: o,
                f: "function" == typeof t[e],
                n: n || e,
                r: s
            }, a._next && (a._next._prev = a), a) : void 0
        }, r.setRatio = function (t) {
            for (var e, i = this._firstPT, r = 1e-6; i;) e = i.c * t + i.s, i.r ? e = 0 | e + (e > 0 ? .5 : -.5) : r > e && e > -r && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
        }, r._kill = function (t) {
            var e, i = this._overwriteProps,
                r = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else
                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
            return !1
        }, r._roundProps = function (t, e) {
            for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
        }, M._onPluginEvent = function (t, e) {
            var i, r, n, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, r = n; r && r.pr > a.pr;) r = r._next;
                    (a._prev = r ? r._prev : s) ? a._prev._next = a: n = a, (a._next = r) ? r._prev = a : s = a, a = o
                }
                a = e._firstPT = n
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, W.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === W.API && (O[(new t[e])._propName] = t[e]);
            return !0
        }, d.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
                r = t.priority || 0,
                n = t.overwriteProps,
                s = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_roundProps",
                    initAll: "_onInitAllProps"
                },
                o = f("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                    W.call(this, i, r), this._overwriteProps = n || []
                }, t.global === !0),
                a = o.prototype = new W(i);
            a.constructor = o, o.API = t.API;
            for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version, W.activate([o]), o
        }, e = t._gsQueue) {
        for (i = 0; e.length > i; i++) e[i]();
        for (r in c) c[r].func || t.console.log("GSAP encountered missing dependency: com.greensock." + r)
    }
    s = !1
}(window), (window._gsQueue || (window._gsQueue = [])).push(function () {
        "use strict";
        window._gsDefine("easing.Back", ["easing.Ease"], function (t) {
            var e, i, r, n = window.GreenSockGlobals || window,
                s = n.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                h = s._class,
                l = function (e, i) {
                    var r = h("easing." + e, function () {}, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, r
                },
                u = t.register || function () {},
                c = function (t, e, i, r) {
                    var n = h("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new r
                    }, !0);
                    return u(n, t), n
                },
                p = function (t, e, i) {
                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                },
                d = function (e, i) {
                    var r = h("easing." + e, function (t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function (t) {
                        return new r(t)
                    }, r
                },
                f = c("Back", d("BackOut", function (t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), d("BackIn", function (t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), d("BackInOut", function (t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                g = h("easing.SlowMo", function (t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                v = g.prototype = new t;
            return v.constructor = g, v.getRatio = function (t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, g.ease = new g(.7, .7), v.config = g.config = function (t, e, i) {
                return new g(t, e, i)
            }, e = h("easing.SteppedEase", function (t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function (t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, v.config = e.config = function (t) {
                return new e(t)
            }, i = h("easing.RoughEase", function (e) {
                e = e || {};
                for (var i, r, n, s, o, a, h = e.taper || "none", l = [], u = 0, c = 0 | (e.points || 20), d = c, f = e.randomize !== !1, g = e.clamp === !0, v = e.template instanceof t ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = f ? Math.random() : 1 / c * d, r = v ? v.getRatio(i) : i, "none" === h ? n = m : "out" === h ? (s = 1 - i, n = s * s * m) : "in" === h ? n = i * i * m : .5 > i ? (s = 2 * i, n = .5 * s * s * m) : (s = 2 * (1 - i), n = .5 * s * s * m), f ? r += Math.random() * n - .5 * n : d % 2 ? r += .5 * n : r -= .5 * n, g && (r > 1 ? r = 1 : 0 > r && (r = 0)), l[u++] = {
                    x: i,
                    y: r
                };
                for (l.sort(function (t, e) {
                        return t.x - e.x
                    }), a = new p(1, 1, null), d = c; --d > -1;) o = l[d], a = new p(o.x, o.y, a);
                this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
            }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function (t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, v.config = function (t) {
                return new i(t)
            }, i.ease = new i, c("Bounce", l("BounceOut", function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), l("BounceIn", function (t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), l("BounceInOut", function (t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), c("Circ", l("CircOut", function (t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), l("CircIn", function (t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), l("CircInOut", function (t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), r = function (e, i, r) {
                var n = h("easing." + e, function (t, e) {
                        this._p1 = t || 1, this._p2 = e || r, this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    s = n.prototype = new t;
                return s.constructor = n, s.getRatio = i, s.config = function (t, e) {
                    return new n(t, e)
                }, n
            }, c("Elastic", r("ElasticOut", function (t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * o / this._p2) + 1
            }, .3), r("ElasticIn", function (t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2))
            }, .3), r("ElasticInOut", function (t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * o / this._p2) + 1
            }, .45)), c("Expo", l("ExpoOut", function (t) {
                return 1 - Math.pow(2, -10 * t)
            }), l("ExpoIn", function (t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), l("ExpoInOut", function (t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), c("Sine", l("SineOut", function (t) {
                return Math.sin(t * a)
            }), l("SineIn", function (t) {
                return -Math.cos(t * a) + 1
            }), l("SineInOut", function (t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), h("easing.EaseLookup", {
                find: function (e) {
                    return t.map[e]
                }
            }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), f
        }, !0)
    }), window._gsDefine && window._gsQueue.pop()(),
    function (t) {
        function e(t, e, i, r, n) {
            this._listener = e, this._isOnce = i, this.context = r, this._signal = t, this._priority = n || 0
        }

        function i(t, e) {
            if ("function" != typeof t) throw new Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", e))
        }

        function r() {
            this._bindings = [], this._prevParams = null;
            var t = this;
            this.dispatch = function () {
                r.prototype.dispatch.apply(t, arguments)
            }
        }
        e.prototype = {
            active: !0,
            params: null,
            execute: function (t) {
                var e, i;
                return this.active && this._listener && (i = this.params ? this.params.concat(t) : t, e = this._listener.apply(this.context, i), this._isOnce && this.detach()), e
            },
            detach: function () {
                return this.isBound() ? this._signal.remove(this._listener, this.context) : null
            },
            isBound: function () {
                return !!this._signal && !!this._listener
            },
            isOnce: function () {
                return this._isOnce
            },
            getListener: function () {
                return this._listener
            },
            getSignal: function () {
                return this._signal
            },
            _destroy: function () {
                delete this._signal, delete this._listener, delete this.context
            },
            toString: function () {
                return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
            }
        }, r.prototype = {
            VERSION: "1.0.0",
            memorize: !1,
            _shouldPropagate: !0,
            active: !0,
            _registerListener: function (t, i, r, n) {
                var s, o = this._indexOfListener(t, r);
                if (-1 !== o) {
                    if (s = this._bindings[o], s.isOnce() !== i) throw new Error("You cannot add" + (i ? "" : "Once") + "() then add" + (i ? "Once" : "") + "() the same listener without removing the relationship first.")
                } else s = new e(this, t, i, r, n), this._addBinding(s);
                return this.memorize && this._prevParams && s.execute(this._prevParams), s
            },
            _addBinding: function (t) {
                var e = this._bindings.length;
                do --e; while (this._bindings[e] && t._priority <= this._bindings[e]._priority);
                this._bindings.splice(e + 1, 0, t)
            },
            _indexOfListener: function (t, e) {
                for (var i, r = this._bindings.length; r--;)
                    if (i = this._bindings[r], i._listener === t && i.context === e) return r;
                return -1
            },
            has: function (t, e) {
                return -1 !== this._indexOfListener(t, e)
            },
            add: function (t, e, r) {
                return i(t, "add"), this._registerListener(t, !1, e, r)
            },
            addOnce: function (t, e, r) {
                return i(t, "addOnce"), this._registerListener(t, !0, e, r)
            },
            remove: function (t, e) {
                i(t, "remove");
                var r = this._indexOfListener(t, e);
                return -1 !== r && (this._bindings[r]._destroy(), this._bindings.splice(r, 1)), t
            },
            removeAll: function () {
                for (var t = this._bindings.length; t--;) this._bindings[t]._destroy();
                this._bindings.length = 0
            },
            getNumListeners: function () {
                return this._bindings.length
            },
            halt: function () {
                this._shouldPropagate = !1
            },
            dispatch: function (t) {
                if (this.active) {
                    var e, i = Array.prototype.slice.call(arguments),
                        r = this._bindings.length;
                    if (this.memorize && (this._prevParams = i), r) {
                        e = this._bindings.slice(), this._shouldPropagate = !0;
                        do r--; while (e[r] && this._shouldPropagate && e[r].execute(i) !== !1)
                    }
                }
            },
            forget: function () {
                this._prevParams = null
            },
            dispose: function () {
                this.removeAll(), delete this._bindings, delete this._prevParams
            },
            toString: function () {
                return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
            }
        };
        var n = r;
        n.Signal = r, window.Signal = r, "function" == typeof define && define.amd ? define(function () {
            return n
        }) : "undefined" != typeof module && module.exports ? module.exports = n : t.signals = n
    }(this);
var Utils = {};
Utils.getTexturesFromFrames = function (t) {
    for (var e = [], i = 0; i < t.length; i++) e.push(new PIXI.Texture.fromFrame(t[i]));
    return e
}, Utils.getTexturesFromImages = function (t) {
    for (var e = [], i = 0; i < t.length; i++) e.push(new PIXI.Texture.fromImage(t[i]));
    return e
}, Utils.getTexturesFromFramesWithPrefix = function (t, e, i, r) {
    var n = [];
    void 0 == i && (i = 0);
    for (var s = 0; e > s; s++) {
        var o = s + i,
            a = t.replace("%%", 10 > o ? "0" + o : o);
        if (r) var a = t.replace("%%", o);
        n.push(new PIXI.Texture.fromFrame(a))
    }
    return n
}, Utils.formatTime = function (t) {
    if (999999 === t) return "00:00:00";
    var t = t / .06,
        e = t / 60 / 1e3 | 0;
    t -= 60 * e * 1e3;
    var i = t / 1e3 | 0;
    t -= 1e3 * i;
    var r = t / 10 | 0;
    return t -= 10 * r, (10 > e ? "0" : "") + e + ":" + (10 > i ? "0" : "") + i + ":" + (10 > r ? "0" : "") + r
}, Utils.formatTimeSeconds = function (t) {
    if (999999 === t) return "00:00";
    var t = t / .06,
        e = t / 60 / 1e3 | 0;
    t -= 60 * e * 1e3;
    var i = t / 1e3 | 0;
    return t -= 1e3 * i, (10 > e ? "0" : "") + e + ":" + (10 > i ? "0" : "") + i
}, Utils.pad = function (t, e) {
    var i = "0000" + t;
    return i.substr(i.length - e)
}, Utils.formatScore = function (t) {
    for (var e = t.toString().split(""), i = "", r = e.length, n = r % 3 - 1, s = 0; r > s; s++) i += e[s], (s - n) % 3 == 0 && s != r - 1 && (i += ",");
    return i
}, Utils.formatName = function (t) {
    for (var e = t.split(" "), i = e.length - 1; i >= 0; i--) 0 !== e[i].length && (wordArray = e[i].split(""), wordArray[0] = wordArray[0].toUpperCase(), console.log(wordArray[0]), e[i] = wordArray.join(""));
    return word = e.join(" "), word
}, window.console || (window.console = {
    log: function (t) {}
}), Utils.get_query = function (t) {
    for (var e = location.href, i = e.substring(e.indexOf("?") + 1).split("&"), r = 0, n = {}; r < i.length; r++) i[r] = i[r].split("="), n[i[r][0]] = decodeURIComponent(i[r][1]);
    return n.hasOwnProperty(t) ? n[t] : !1
}, Utils.toCamelCase = function (t) {
    var e = /\s([a-z]|[A-Z])/,
        i = t.trim();
    return i = i.toLowerCase(), i = i.replace(e, function (t, e) {
        return e.toUpperCase()
    })
}, Utils.defaults = function (t, e) {
    t = t || {};
    for (var i in e) i in t || (t[i] = e[i]);
    return t
}, Utils.resizeText = function (t, e, i, r) {
    r = r || "w", t.scale.set(1), t.text = e;
    var n = 0;
    n = "w" === r ? i / t.width : i / t.height, n > 1 && (n = 1), t.scale.set(n)
};
var Fido = Fido || {};
Device = function () {
    this.arora = !1, this.chrome = !1, this.epiphany = !1, this.firefox = !1, this.mobileSafari = !1, this.ie = !1, this.ieVersion = 0, this.trident = !1, this.tridentVersion = 0, this.midori = !1, this.opera = !1, this.safari = !1, this.silk = !1, this.webApp = !1, this.cocoonJS = !1, this.android = !1, this.chromeOS = !1, this.iOS = !1, this.linux = !1, this.macOS = !1, this.windows = !1, this.desktop = !1, this.pixelRatio = 0, this.iPhone = !1, this.iPhone4 = !1, this.iPad = !1, this.blob = !1, this.canvas = !1, this.localStorage = !1, this.file = !1, this.fileSystem = !1, this.webGL = !1, this.worker = !1, this.audioData = !1, this.webAudio = !1, this.ogg = !1, this.opus = !1, this.mp3 = !1, this.wav = !1, this.m4a = !1, this.webm = !1;
    var t = navigator.userAgent;
    this._checkBrowser(t), this._checkOS(t), this._checkDevice(t), this._checkAudio(), this._checkFeatures(), this._checkIsMobile(), this._checkIsTouch()
}, Device.prototype._checkBrowser = function (t) {
    /Arora/.test(t) ? this.arora = !0 : /Opera|OPR|op/.test(t) ? (this.opera = !0, this.chrome = !1) : /Chrome/.test(t) ? this.chrome = !0 : /Epiphany/.test(t) ? this.epiphany = !0 : /Firefox/.test(t) ? this.firefox = !0 : /Mobile Safari/.test(t) ? this.mobileSafari = !0 : /MSIE (\d+\.\d+);/.test(t) || navigator.userAgent.match(/Trident.*rv[ :]*11\./) ? (this.ie = !0, this.ieVersion = parseInt(RegExp.$1, 10)) : /Midori/.test(t) ? this.midori = !0 : /Safari/.test(t) ? this.safari = !0 : /\bSilk\b/.test(t) ? this.silk = !0 : /Trident\/(\d+\.\d+)(.*)rv:(\d+\.\d+)/.test(t) && (this.ie = !0, this.trident = !0, this.tridentVersion = parseInt(RegExp.$1, 10), this.ieVersion = parseInt(RegExp.$3, 10)), navigator.standalone && (this.webApp = !0), navigator.isCocoonJS && (this.cocoonJS = !0)
}, Device.prototype._checkOS = function (t) {
    /Android/.test(t) ? this.android = !0 : /CrOS/.test(t) ? this.chromeOS = !0 : /iP[ao]d|iPhone/i.test(t) ? (this.iOS = !0, this.iOS_version = parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1) : /Linux/.test(t) ? this.linux = !0 : /Mac OS/.test(t) ? this.macOS = !0 : /Windows/.test(t) && (this.windows = !0), (this.windows || this.macOS || this.linux || this.chromeOS) && (this.desktop = !0)
}, Device.prototype._checkDevice = function () {
    this.pixelRatio = window.devicePixelRatio || 1, this.iPhone = -1 !== navigator.userAgent.toLowerCase().indexOf("iphone"), this.iPhone4 = 2 === this.pixelRatio && this.iPhone, this.iPhone4 && (this.iPhone4 = 480 == window.screen.height && 320 == window.screen.width || 480 == window.screen.width && 320 == window.screen.height), this.iPad = -1 !== navigator.userAgent.toLowerCase().indexOf("ipad")
}, Device.prototype._checkFeatures = function () {
    "undefined" != typeof window.Blob && (this.blob = !0), this.canvas = !!window.CanvasRenderingContext2D;
    try {
        this.localStorage = !!localStorage.getItem
    } catch (t) {
        this.localStorage = !1
    }
    this.file = !!(window.File && window.FileReader && window.FileList && window.Blob), this.fileSystem = !!window.requestFileSystem, this.webGL = function () {
        try {
            var t = document.createElement("canvas");
            return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
        } catch (e) {
            return !1
        }
    }(), (this.android || this.ie) && (this.webGL = !1), this.worker = !!window.Worker, ("ontouchstart" in document.documentElement || window.navigator.msPointerEnabled) && (this.touch = !0)
}, Device.prototype._checkAudio = function () {
    this.audioData = !!window.Audio, this.webaudio = !(!window.AudioContext && !window.webkitAudioContext);
    var t = document.createElement("audio"),
        e = !1;
    try {
        (e = !!t.canPlayType) && (t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, "") && (this.ogg = !0), t.canPlayType("audio/mpeg;").replace(/^no$/, "") && (this.mp3 = !0), t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "") && (this.wav = !0), (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;").replace(/^no$/, "")) && (this.m4a = !0))
    } catch (i) {}
}, Device.prototype._checkIsMobile = function () {
    var t = !1;
    ! function (e) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), this.isMobile = t, this.mobile = t
}, Device.prototype._checkIsTouch = function () {
    this.isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}, Device.prototype.getInfo = function () {
    var t = "DEVICE OUTPUT\n\n";
    return t += "---\n", t += "Browser Info :: \n", t += "Arora : " + this.arora + "\n", t += "Chrome : " + this.chrome + "\n", t += "Epiphany : " + this.epiphany + "\n", t += "Firefox : " + this.firefox + "\n", t += "Mobile Safari : " + this.mobileSafari + "\n", t += "IE : " + this.ie, t += this.ie ? " (Version " + this.ieVersion + ")\n" : "\n", t += "Midori : " + this.midori + "\n", t += "Opera : " + this.opera + "\n", t += "Safari : " + this.safari + "\n", t += "Web App : " + this.webApp + "\n", t += "CocoonJS : " + this.cocoonJS + "\n", t += "Android : " + this.android + "\n", t += "---\n", t += "Operating System :: \n", t += "Chrome OS : " + this.chromeOS + "\n", t += "iOS : " + this.iOS + "\n", t += "Linux : " + this.linux + "\n", t += "Mac OS : " + this.macOS + "\n", t += "Windows : " + this.windows + "\n", t += "Desktop : " + this.desktop + "\n", t += "---\n", t += "Device Type : \n", t += "Pixel Ratio : " + this.pixelRatio + "\n", t += "iPhone : " + this.iPhone + "\n", t += "iPhone 4 : " + this.iPhone4 + "\n", t += "iPad : " + this.iPad + "\n", t += "---\n", t += "Features :: \n", t += "Blob : " + this.blob + "\n", t += "Canvas : " + this.canvas + "\n", t += "LocalStorage : " + this.localStorage + "\n", t += "File : " + this.file + "\n", t += "File System : " + this.fileSystem + "\n", t += "WebGL : " + this.webGL + "\n", t += "Workers : " + this.worker + "\n", t += "---\n", t += "Audio :: \n", t += "AudioData : " + this.audioData + "\n", t += "WebAudio : " + this.webAudio + "\n", t += "Supports .ogg : " + this.ogg + "\n", t += "Supports Opus : " + this.opus + "\n", t += "Supports .mp3 : " + this.mp3 + "\n", t += "Supports .wav : " + this.wav + "\n", t += "Supports .m4a : " + this.m4a + "\n", t += "Supports .webm : " + this.webm
}, Object.defineProperty(Device.prototype, "ie9", {
    get: function () {
        return this.ie && 9 === this.ieVersion
    }
}), Object.defineProperty(Device.prototype, "useSM2", {
    get: function () {
        return this.ie || this.opera
    }
}), Device.instance = new Device;
var g = (new PIXI.Graphics).beginFill(16777215, 1).drawCircle(0, 0, 5).endFill(),
    circleTexture = g.generateTexture(),
    Stem = function () {
        if (PIXI.Container.call(this), this._points = [], this.speedX = Math2.random(.7, 1), this.speedY = 1, this.originalSpeed = this.speedX, this.minX = -30, this.maxX = 50, this.minY = -70, this.maxY = -90, this.base = new PIXI.Point, this.base.set(0, 45), this.head = new PIXI.Point, this.cpt = new PIXI.Point, this.cpt.set(10, -30), this.createPoints(), this.current = null, this._shaking = !1, this.leaves = {}, this.count = Math2.randomInt(0, 60), this.initialScale = .5, this.leafScale = 1, this.scale.set(this.initialScale), PIXI.isWebGL) {
            console.log("mesh");
            var t = PIXI.Texture.fromImage(ASSET_URL + "img/rope.png");
            this.rope = new PIXI.mesh.Rope(t, this._points), this.addChild(this.rope)
        } else this.graphics = new PIXI.Graphics, this.graphics.filling = !1, this.addChild(this.graphics)
    };
Stem.prototype = Object.create(PIXI.Container.prototype), Object.defineProperty(Stem.prototype, "shaking", {
    get: function () {
        return this._shaking
    },
    set: function (t) {
        this._shaking = t, t ? this.speedX = 3 * this.originalSpeed : this.speedX = this.originalSpeed
    }
}), Stem.prototype.createPoints = function () {
    for (var t = 0; 1 >= t; t += .08) {
        var e = new PIXI.Point;
        e = quadraticBezier(this.head, this.cpt, this.base, t, e), this._points.push(e)
    }
}, Stem.prototype.updatePoints = function () {
    for (var t = 0, e = 0; 1 >= e; e += .08) {
        var i = this._points[t];
        i = quadraticBezier(this.head, this.cpt, this.base, e, i), t++
    }
}, Stem.prototype.angleBetween = function (t, e) {
    var i = e.x - t.x,
        r = e.y - t.y;
    return Math.atan2(r, i)
}, Stem.prototype.getAngle = function () {
    this._points.length;
    return this.angleBetween(this._points[1], this._points[0])
}, Stem.prototype.finishGrowth = function () {
    this.speedX *= Math2.random(1.2, 1.5), this.minX *= 1.2, this.maxX *= .8, this.maxY *= .8
}, Stem.prototype.createLeaf = function (t, e) {
    e > this._points.length - 1 && (e = this._points.length - 1);
    var i = new PIXI.Sprite(t);
    return Math.random() < .5 ? (i.dir = 1, i.scale.set(this.leafScale), i.anchor.set(1, .5)) : (i.dir = -1, i.scale.set(this.leafScale * i.dir), i.anchor.set(0, .5)), this.leaves[e] = i, i
}, Stem.prototype.updateLeaves = function () {
    for (var t in this.leaves) {
        var e = this._points[t],
            i = this.leaves[t];
        i.x = e.x * this.scale.x, i.y = e.y * this.scale.y, i.scale.set(this.leafScale * i.dir), i.rotation = Math.min(this.angleBetween(this._points[t], this._points[(t - 1) % this._points.length]), .1) + .5 * Math.PI
    }
}, Stem.prototype.update = function () {
    if (this.count += .02 * this.speedX, this.head.x = Math2.map(Math.sin(this.count), -1, 1, this.minX, this.maxX), this.head.y = Math2.map(Math.sin(.3 * this.count), -1, 1, this.minY, this.maxY), !PIXI.isWebGL) {
        this.graphics.clear(), this.graphics.moveTo(this._points[0].x, this._points[0].y, !1), this.graphics.lineStyle(3, 4897792, 1);
        for (var t = this._points.length, e = 1; t > e; e++) this.graphics.lineTo(this._points[e].x, this._points[e].y)
    }
    this.updatePoints(), this.updateLeaves()
};
var Spring = function () {
    this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0, this.max = 160, this.damp = .8, this.springiness = .1
};
Spring.prototype.update = function () {
    this.ax = (this.tx - this.x) * this.springiness, this.dx += this.ax, this.dx *= this.damp, this.dx < -this.max ? this.dx = -this.max : this.dx > this.max && (this.dx = this.max), this.x += this.dx
}, Spring.prototype.reset = function () {
    this.x = 0, this.ax = 0, this.dx = 0, this.tx = 0
};
var FlowerHead = function (t, e, i) {
    PIXI.Container.call(this), this.app = t, this.show = i, this.pistilSize = 120, this.petalSize = 50, this.head = PIXI.Sprite.fromImage(ASSET_URL + "img/" + e + "-bud.png"), this.head.anchor.set(.5, 0), this.head.pivot.y = 25, this.head.interactive = !1, this.head.buttonMode = !0, this.head.mousedown = this.head.touchstart = this.goToShow.bind(this), this.graphics = (new PIXI.Graphics).beginFill(16711680, 1).drawCircle(0, 0, .5 * this.pistilSize), this.graphics.y = -(this.petalSize + 7), this.graphics.visible = !1, this.headTexture = PIXI.Texture.fromImage(ASSET_URL + "img/" + e + "-head.png"), this.addChild(this.head), this.addChild(this.graphics), this.character = new PIXI.Sprite, this.character.anchor.set(.5), this.character.y = -(this.petalSize + 7), this.character.interactive = !1, this.character.buttonMode = !0, this.character.mousedown = this.character.touchstart = this.goToShow.bind(this)
};
FlowerHead.prototype = Object.create(PIXI.Container.prototype), FlowerHead.prototype.bloom = function () {
    this.scale.set(0, 1), this.head.texture = this.headTexture, this.head.anchor.y = 1, this.head.pivot.y = -this.petalSize, TweenLite.to(this.scale, .6, {
        x: 1,
        ease: Expo.easeOut
    }), TweenLite.delayedCall(.3, this.showCharacter, [], this)
}, FlowerHead.prototype.goToShow = function () {
    window.location.href = this.link
}, FlowerHead.prototype.showCharacter = function () {
    this.app.pbs && this.show && (this.character.texture = PIXI.Texture.fromImage(this.show.image), this.link = this.show.href, this.character.width = 0, this.character.height = 0, this.graphics.visible = !0, this.character.mask = this.graphics, this.addChild(this.character), this.head.interactive = !0, this.character.interactive = !0, this.character.width = this.pistilSize, this.character.height = this.pistilSize, this.character.alpha = 0, TweenLite.to(this.character, .4, {
        alpha: 1,
        ease: Sine.easeOut
    }))
};
var MathUtils = {
        quadraticBezier: function (t, e, i, r, n) {
            return n = n || {}, n.x = Math.pow(1 - r, 2) * t.x + 2 * (1 - r) * r * e.x + r * r * i.x, n.y = Math.pow(1 - r, 2) * t.y + 2 * (1 - r) * r * e.y + r * r * i.y, n
        },
        lerp: function (t, e, i) {
            return i * (e - t) + t
        },
        map: function (t, e, i, r, n) {
            return (n - r) * ((t - e) / (i - e)) + r
        },
        constrain: function (t, e, i) {
            return e > t ? e : t > i ? i : t
        },
        angleBetween: function (t, e, i, r) {
            var n = t - i,
                s = e - r;
            return Math.atan2(s, n)
        },
        shuffle: function (t) {
            for (var e, i, r = t.length; 0 !== r;) i = Math.floor(Math.random() * r), r -= 1, e = t[r], t[r] = t[i], t[i] = e;
            return t
        }
    },
    frames = [],
    RippleManager = function () {
        if (PIXI.Container.call(this), this.hitArea = new PIXI.Rectangle(0, 0, 1, 1), this.interactive = !0, this.rippleContainer = new PIXI.Container, this.colliding = [], this.dropPool = [], this.ripplePool = [], this.activeRipples = [], this.activeDrops = [], this.dropsToRemove = [], this.canSpawn = !0, this.frequency = 50, this.count = 0, this.ground = 420, frames.length < 1)
            for (var t = 1; 9 >= t; t++) frames.push(PIXI.Texture.fromFrame("Ripple000" + t))
    };
RippleManager.prototype = Object.create(PIXI.Container.prototype), RippleManager.prototype.spawn = function (t, e, i, r) {
    var n = this.dropPool.pop();
    if (!n) var n = new Drop;
    n.velocity.x = i || 0, n.velocity.y = r || 1 + Math2.random(.5, 1.5), n.x = t, n.y = e, n.scale.x = Math2.random(.6, 1.1), n.scale.y = Math2.random(.8, 1.3), n.isDead = !1, this.activeDrops.push(n), this.addChild(n)
}, RippleManager.prototype.createRipple = function (t, e) {
    var i = this.ripplePool.pop();
    if (!i) var i = new PIXI.extras.MovieClip(frames);
    this.activeRipples.push(i), i.alpha = 1, i.x = t, i.y = e, i.anchor.x = .5, i.scale.set(2, 1.5), i.loop = !1, i.onComplete = this.removeRipple.bind(this, i), i.play(), i.animationSpeed = .5, this.rippleContainer.addChild(i)
}, RippleManager.prototype.removeDrop = function (t) {
    var e = this.activeDrops.indexOf(t);
    this.activeDrops.splice(e, 1);
    var e = this.dropsToRemove.indexOf(t);
    this.dropsToRemove.splice(e, 1), this.removeChild(t), t.visible = !0, this.dropPool.push(t)
}, RippleManager.prototype.addCollidingObject = function (t) {
    this.colliding.push(t), console.log(this.colliding)
}, RippleManager.prototype.removeRipple = function (t) {
    TweenLite.to(t, 1.4, {
        alpha: 0,
        onComplete: function (t) {
            this.removeChild(t), this.ripplePool.push(t);
            var e = this.activeRipples.indexOf(t);
            this.activeRipples.splice(e, 1)
        }.bind(this),
        onCompleteParams: [t]
    })
}, RippleManager.prototype.intersects = function (t, e) {
    return t.x < e.x || t.y < e.y || t.x > e.x + e.width || t.y > e.y + e.height ? !1 : !0
}, RippleManager.prototype.update = function () {
    for (var t = 0; t < this.activeDrops.length; t++) {
        var e = this.activeDrops[t];
        e.update();
        for (var i = 0; i < this.colliding.length; i++) {
            var r = this.colliding[i];
            this.intersects(e, r.groundAabb) && (e.isDead = !0, r.health++)
        }
        e.y > this.ground && this.createRipple(e.x, e.y), (e.y > this.ground || e.isDead) && (e.visible = !1, this.removeDrop(e), t--)
    }
    for (var t = 0; t < this.dropsToRemove.length; t++) this.removeDrop(this.dropsToRemove[t])
}, Drop.prototype = Object.create(PIXI.Sprite.prototype), Drop.prototype.constructor = Drop, Drop.prototype.update = function () {
    var t = this.x,
        e = this.y;
    this.velocity.y += .11 * (1 / (this.scale.x * this.scale.y)), this.velocity.x *= .93, this.x += this.velocity.x, this.y += this.velocity.y;
    var i = Math.atan2(this.y - e, this.x - t) - .5 * Math.PI;
    this.rotation = i
};
var Math2 = {};
Math2.TWO_PI = 2 * Math.PI, Math2.random = function (t, e) {
    return t = t || 0, e = void 0 === e ? 1 : e, t + Math.random() * (e - t)
}, Math2.randomInt = function (t, e) {
    return t + Math.random() * (e - t) | 0
}, Math2.randomSeed = function (t, e, i) {
    min = t, max = e, i = i || 1, i = (9301 * i + 49297) % 233280;
    var r = i / 233280;
    return min + r * (max - min)
}, Math2.randomChance = function (t, e) {
    return Math2.randomSeed(0, 1, e) > t
}, Math2.cap = function (t, e, i) {
    return e > t ? e : t > i ? i : t
}, Math2.sign = function (t) {
    return 0 > t ? -1 : t > 0 ? 1 : 0
}, Math2.randomChoice = function (t, e) {
    return Math.random() < .5 ? t : e
}, Math2.map = function (t, e, i, r, n) {
    return (n - r) * ((t - e) / (i - e)) + r
}, Math2.smallestAngle = function (t, e) {
    t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI);
    var i = e - t,
        r = e + 2 * Math.PI - t,
        n = e - 2 * Math.PI - t,
        s = Math.abs(i),
        o = Math.abs(r),
        a = Math.abs(n),
        h = i;
    return s > o && a > o ? h = r : s > a && o > a && (h = n), h
};
var WateringCan = function (t) {
    PIXI.Container.call(this), this.dimensions = {
        width: 10,
        height: 65
    }, this.offsetY = 10, this.stageWidth = 1136, this.stageHeight = 640, this.originalWidth = this.dimensions.width, this.originalHeight = this.dimensions.height, this.originalOffsetY = this.offsetY, this.aabb = new PIXI.Rectangle(0, 0, 50, 50), this.ripples = t, this.view = new PIXI.Sprite.fromImage(ASSET_URL + "img/can.png"), this.view.anchor.set(.5), this.view.interactive = !0, this.view.buttonMode = !0, this.view.mousedown = this.view.touchstart = this.onDown.bind(this), this.view.mousemove = this.view.touchmove = this.onMove.bind(this), this.view.mouseup = this.view.mouseupoutside = this.view.touchend = this.view.touchendoutside = this.onUp.bind(this), this.addChild(this.view), this.spring = new Spring, this.spring.springiness = .1, this.stuck = !1, this.canCollide = !0, this.mouse = new PIXI.Point, this.velocity = new PIXI.Point, this.original = new PIXI.Point, this.cpt = new PIXI.Point, this.target = new PIXI.Point, this.easeTarget = new PIXI.Point, this.dropMarker = new PIXI.Circle(0, 0, 24), this.dragOffset = 10, this.gravity = 6, this.targetRotation = 0, this.count = 0, this.count2 = 0, this.wobbleCount = 0, this.idleCount = 0, this.t = 0, this.watering = !1, this._currentState = null, this.setState(WateringCan.State.Idle)
};
WateringCan.State = {
    Idle: 0,
    Wobbling: 1,
    Falling: 2
}, WateringCan.prototype = Object.create(PIXI.Container.prototype), WateringCan.prototype.update = function () {
    if (this.spring.update(), this.view.scale.set(1 + this.spring.x), this.count++, this.count2 += .05, this.mouse.x = MathUtils.constrain(this.mouse.x, 0, this.stageWidth - .5 * this.view.width), this.mouse.y = MathUtils.constrain(this.mouse.y, 0, this.stageHeight - .5 * this.view.height), this._currentState && this._currentState(), this.watering) {
        if (Math.abs(this.velocity.x) > 35) return;
        var t = -.35 + Math.sin(this.count2) * -.09;
        this.view.rotation += .1 * (t - this.view.rotation), this.count > 7 && (this.bigSplash(), this.count = 0)
    }
    this.updateAabb()
}, WateringCan.prototype.reset = function () {
    this.setState(WateringCan.State.Idle)
}, WateringCan.prototype.updateAabb = function () {
    var t = this.dimensions.width,
        e = this.dimensions.height;
    this.aabb.x = this.x - this.view.width * this.view.anchor.x * this.scale.x, this.aabb.y = this.y - .5 * e + this.offsetY, this.aabb.width = t, this.aabb.height = e
}, WateringCan.prototype.pendulum = function () {
    this.dragOffset = this.stuck === !0 ? 55 : 10;
    var t = this.mouse.x - this.position.x,
        e = this.mouse.y - this.dragOffset - this.position.y;
    this.velocity.x += .05 * t, this.velocity.y += .1 * e, this.velocity.y += this.gravity, this.velocity.x *= .7, this.velocity.y *= .8, this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.targetRotation = Math.atan2(e, t) + Math.PI / 2, this.targetRotation = Math2.cap(this.targetRotation, -.9, .9), this.watering || (this.view.rotation += .1 * (this.targetRotation - this.view.rotation)), this.spill()
}, WateringCan.prototype.fall = function () {
    MathUtils.quadraticBezier(this.target, this.cpt, this.original, this.t, this.position)
}, WateringCan.prototype.spill = function () {
    this.targetRotation > .85 && this.count % 10 === 0 ? this.ripples.spawn(this.x + this.view.width + Math2.randomInt(10, 30), this.y + 10 * Math.random()) : this.targetRotation < -.85 && this.count % 10 === 0 && this.ripples.spawn(this.x + 10 + Math2.randomInt(-10, 20), this.y + 10 * Math.random())
}, WateringCan.prototype.idle = function () {
    this.wobbleCount += .05, this.idleCount += .5, this.watering || (this.view.rotation = Math.sin(this.wobbleCount) * Math.sin(1.5 * this.wobbleCount) * .2, this.idleCount > 100 && (this.littleSplash(), this.idleCount = 0))
}, WateringCan.prototype.littleSplash = function () {
    for (var t = 0; t < Math2.randomInt(2, 6); t++) {
        var e = this.x - .5 * this.view.width + Math2.randomInt(-20, 20),
            i = this.y - Math2.random(4, 10);
        this.ripples.spawn(e, i, -3.5, -2)
    }
}, WateringCan.prototype.bigSplash = function () {
    for (var t = 0; t < Math2.randomInt(2, 6); t++) {
        var e = this.x - .5 * this.view.width + 15 + Math2.randomInt(-30, 0),
            i = this.y + 18 - Math2.random(2, 4);
        this.ripples.spawn(e, i, -3.5, 1)
    }
}, WateringCan.prototype.setOriginal = function (t, e) {
    this.original.set(t, e)
}, WateringCan.prototype.setState = function (t) {
    if (this.state !== t)
        if (this.state = t, this.state === WateringCan.State.Wobbling) this._currentState = this.pendulum, TweenLite.to(this.view.scale, .6, {
            x: 1,
            y: 1,
            ease: Circ.easeOut
        });
        else if (this.state === WateringCan.State.Falling) {
        this.view.interactive = !1, this.spring.tx = 0, this.target.set(this.x, this.y), this.cpt.x = MathUtils.lerp(this.target.x, this.original.x, .5);
        var e = Math.max(this.target.y, this.original.y);
        this.cpt.y = e - 200, TweenLite.to(this, .8, {
            t: 1,
            ease: Sine.easeOut,
            onComplete: function () {
                this.setState(WateringCan.State.Idle), this.t = 0
            }.bind(this)
        }), this._currentState = this.fall
    } else this.state === WateringCan.State.Idle && (this.view.interactive = !0, this.canCollide = !0, this.stuck = !1, this.targetRotation = 0, this.idleCount = 0, this.spring.tx = 0, this._currentState = this.idle)
}, WateringCan.prototype.onMove = function (t) {
    this.state === WateringCan.State.Wobbling && (this.mouse = t.data.getLocalPosition(this.parent))
}, WateringCan.prototype.onDown = function (t) {
    this.mouse = t.data.getLocalPosition(this.parent), this.position.x = this.mouse.x, this.position.y = this.mouse.y, this.spring.tx = .2, Device.instance.desktop ? this.stuck || (this.stuck = !0, this.setState(WateringCan.State.Wobbling), this.dropMarker.x = this.mouse.x, this.dropMarker.y = this.mouse.y) : this.setState(WateringCan.State.Wobbling)
}, WateringCan.prototype.onUp = function (t) {
    if (this.state !== WateringCan.State.Pouring) {
        if (Device.instance.desktop && this.stuck) {
            if (this.dropMarker.contains(this.mouse.x, this.mouse.y)) return this.setState(WateringCan.State.Wobbling), void console.log("sticky");
            this.stuck = !1, this.setState(WateringCan.State.Idle)
        }
        this.setState(WateringCan.State.Idle)
    }
};
var Plant = function (t, e, i) {
    PIXI.Container.call(this), this.dimensions = {
        width: 90,
        height: 190
    }, this.groundDimensions = {
        width: 150
    }, this.offsetX = 45, this.offsetY = -95, this._health = 0, this.groundWidth = this.groundDimensions.width, this.originalWidth = this.dimensions.width, this.originalHeight = this.dimensions.height, this.originalOffsetX = this.offsetX, this.originalOffsetY = this.offsetY, this.aabb = new PIXI.Rectangle(0, 0, 50, 50), this.groundAabb = new PIXI.Rectangle, this.spring = new Spring, this.currentStage = 0, this.stages = 2, this.hasGrown = !1, this.blooming = !1, this.container = new PIXI.Container, this.pot = new PIXI.Sprite.fromImage(ASSET_URL + "img/pot.png"), this.pot.y = 10, this.pot.anchor.set(.5, 0), this.stem = new Stem, this.head = new FlowerHead(t, e, i), this.container.addChild(this.stem);
    var r = this.stem.createLeaf(PIXI.Texture.fromImage(ASSET_URL + "img/leaf.png"), 7);
    this.container.addChild(r), this.container.addChild(this.head), this.addChild(this.container), this.addChild(this.pot), this.count = 0
};
Plant.prototype = Object.create(PIXI.Container.prototype), Object.defineProperty(Plant.prototype, "health", {
    get: function () {
        return this._health
    },
    set: function (t) {
        this._health = t, (10 === this._health || 40 === this._health) && this.grow()
    }
}), Plant.prototype.update = function () {
    if (this.spring.update(), this.stem.update(), this.head.x = this.stem.head.x * this.stem.scale.x, this.head.y = this.stem.head.y * this.stem.scale.y, this.hasGrown || this.head.scale.set(.1 + this.stem.scale.x + this.spring.x, .1 + this.stem.scale.y + this.spring.x), !this.blooming) {
        var t = this.stem.getAngle() + Math.PI / 2 - .05;
        this.head.rotation = t
    }
    this.updateAabb()
}, Plant.prototype.shake = function () {
    this.count += .3, this.container.x = 4 * Math.sin(this.count), this.stem.shaking = !0
}, Plant.prototype.noShake = function () {
    this.shaking = !1, this.stem.shaking = !1
}, Plant.prototype.grow = function () {
    if (!this.hasGrown && !this.blooming) {
        this.currentStage++, this.stem.shaking = !1, this.spring.tx = .2 * this.currentStage;
        var t = this.stem.initialScale + .2 * this.currentStage,
            e = this.stem.leafScale + .1;
        TweenLite.to(this.stem, .6, {
            leafScale: e,
            ease: Bounce.easeOut
        }), this.currentStage >= this.stages ? (this.blooming = !0, TweenLite.to(this.stem.scale, .6, {
            x: 1,
            y: 1.8,
            ease: Bounce.easeOut
        }), TweenLite.delayedCall(.3, this.finishGrowth, [], this)) : TweenLite.to(this.stem.scale, .6, {
            x: this.stem.scale.x + .15,
            y: t,
            ease: Bounce.easeOut
        })
    }
}, Plant.prototype.finishGrowth = function () {
    this.hasGrown = !0, this.blooming = !1, this.head.bloom(), this.stem.finishGrowth()
}, Plant.prototype.resize = function (t) {
    this.scale.set(t), this.dimensions.width = this.originalWidth * t, this.dimensions.height = this.originalHeight * t, this.offsetX = this.originalOffsetX * t, this.offsetY = this.originalOffsetY * t, this.groundDimensions.width = this.groundWidth * t
}, Plant.prototype.updateAabb = function () {
    this.aabb.x = this.x - .5 * this.dimensions.width + this.offsetX, this.aabb.y = this.y - .5 * this.dimensions.height + this.offsetY, this.aabb.width = this.dimensions.width, this.aabb.height = this.dimensions.height, this.groundAabb.x = this.x - .5 * this.groundDimensions.width, this.groundAabb.y = this.y + 2 * this.groundAabb.height - 8, this.groundAabb.width = this.groundDimensions.width, this.groundAabb.height = 11
};
var Scene = function (t) {
    PIXI.Container.call(this), this.tileW = 64, this.tileH = 32, this.hitArea = new PIXI.Rectangle(0, 0, 1, 1), this.interactive = !0, this.bkg = new PIXI.Sprite.fromImage(ASSET_URL + "img/bkg.jpg"), this.rippleManager = new RippleManager, this.can = new WateringCan(this.rippleManager), this.can.position.set(440, 90), this.can.setOriginal(440, 90), this.plants = [], this.currentPlant = null, this.plantContainer = new PIXI.Container;
    for (var e = ["pink", "blue", "orange"], i = 0; 3 > i; i++) {
        var r = null;
        if (t.pbs) var r = t.shows[i];
        var n = new Plant(t, e[i], r);
        n.x = 280 * (i + 1), n.y = 310, this.plantContainer.addChild(n), this.plants.push(n), this.rippleManager.addCollidingObject(n)
    }
    this.tile = new PIXI.extras.TilingSprite(PIXI.Texture.fromImage(ASSET_URL + "img/water_tile.png"), this.tileW, this.tileH), this.addChild(this.tile), this.addChild(this.bkg), this.addChild(this.rippleManager.rippleContainer), this.addChild(this.plantContainer), this.addChild(this.can), this.addChild(this.rippleManager)
};
Scene.prototype = Object.create(PIXI.Container.prototype), Scene.prototype.resize = function (t, e) {
    if (this.bkg.width = t, this.bkg.height = e, this.can.x = .88 * t, this.can.original.x = .89 * t, this.plants[0].position.set(.27 * t, .37 * e), this.plants[1].position.set(.5 * t, .35 * e), this.plants[2].position.set(.7 * t, .36 * e), this.can.stageWidth = t, this.can.stageHeight = e, 1260 > t) {
        for (var i = t / 1260, r = 0; r < this.plants.length; r++) this.plants[r].resize(i);
        this.can.scale.set(1.3 * i), this.can.dimensions.width = this.can.originalWidth * (1.3 * i), this.can.dimensions.height = this.can.originalHeight * (1.3 * i), this.can.offsetY = this.can.originalOffsetY * (1.3 * i)
    } if (this.bkg.height <= 550) {
            this.can.scale.set(0.8),
            this.plants[0].scale.set(.5), 
            this.plants[1].scale.set(.5), 
            this.plants[2].scale.set(.5);
            this.plants[0].position.set(.33 * t, .32 * e), 
            this.plants[1].position.set(.5 * t, .30 * e), 
            this.plants[2].position.set(.66 * t, .31 * e);
    } if (this.bkg.height > 551) {
        for (var i = t / 1260, r = 0; r < this.plants.length; r++) 
            this.plants[r].resize(i);
            this.plants[0].scale.set(0.7 * i), 
            this.plants[1].scale.set(0.7 * i), 
            this.plants[2].scale.set(0.7 * i), 
            this.can.scale.set(0.8 * i), 
            this.can.dimensions.width = this.can.originalWidth * (0.8 * i), 
            this.can.dimensions.height = this.can.originalHeight * (0.8 * i), 
            this.can.offsetY = this.can.originalOffsetY * (0.8 * i),
            this.can.x = .88 * t, 
            this.can.original.x = .89 * t, 
            this.plants[0].position.set(.27 * t, .42 * e), 
            this.plants[1].position.set(.5 * t, .40 * e), 
            this.plants[2].position.set(.7 * t, .41 * e), 
            this.can.stageWidth = t, 
            this.can.stageHeight = e
        }
    this.rippleManager.ground = .8 * e
}, Scene.prototype.update = function () {
    this.can.watering = !1;
    for (var t = 0; t < this.plants.length; t++) {
        var e = this.plants[t];
        e.shaking = !1, e.update(), aabbCollide(this.can.aabb, e.aabb) && !e.hasGrown ? (this.can.watering = !0, e.shake()) : e.noShake()
    }
    this.count += .05, this.can.update(), this.rippleManager.update()
};
var Preloader = function (t) {
    this.app = t, PIXI.Container.call(this);
    var e = new PIXI.Graphics;
    e.beginFill(10940185, 1), e.drawRect(0, 0, 1.4 * this.app.stageWidth, 1.4 * this.app.stageHeight), this.bg = new PIXI.Sprite(e.generateTexture()), this.bg.anchor.set(.5), this.addChild(this.bg), this.count = 0, this.app.loader.on("progress", this.onProgress.bind(this)), this.app.loader.on("complete", this.onComplete.bind(this)), this.easeLoad = 0, this.targetLoad = 0, this.toLoad = [ASSET_URL + "img/LoadingSprites.json"], this.loadAssets()
};
Preloader.prototype = Object.create(PIXI.Container.prototype), Preloader.prototype.constructor = Preloader, Preloader.prototype.loadAssets = function () {
    this.prepreloader = new PIXI.loaders.Loader, this.prepreloader.add(this.toLoad), this.prepreloader.on("complete", this.onAssetsLoaded.bind(this)), this.prepreloader.load()
}, Preloader.prototype.onAssetsLoaded = function () {
    this.loadingFrame = new PIXI.Sprite.fromFrame("LoadingFrame.png"), this.loadingFrame.x = -194, this.loadingFrame.y = -108, this.addChild(this.loadingFrame), this.bar = new PIXI.Sprite.fromFrame("LoadingBar.png"), this.bar.x = -177, this.bar.y = -79, this.addChild(this.bar), this.resize(this.app.stageWidth, this.app.stageHeight), this.scaleNumber = 7.1, this.app.load(), requestAnimationFrame(this.update.bind(this))
}, Preloader.prototype.showLoader = function () {}, Preloader.prototype.update = function () {
    this.easeLoad += .3 * (this.targetLoad - this.easeLoad), this.bar.scale.x = this.easeLoad * this.scaleNumber, this.easeLoad > .99 ? TweenLite.delayedCall(.2, this.loadFinished, [], this) : requestAnimationFrame(this.update.bind(this))
}, Preloader.prototype.loadFinished = function () {
    TweenLite.to(this, .4, {
        alpha: 0,
        ease: Sine.easeOut,
        onComplete: function () {
            this.app.root.removeChild(this)
        }.bind(this)
    })
}, Preloader.prototype.onProgress = function (t, e) {
    var i = .01 * t.progress;
    this.targetLoad = i
}, Preloader.prototype.onComplete = function (t, e) {
    this.onProgress({
        progress: 100
    })
}, Preloader.prototype.resize = function (t, e) {
    this.w = t, this.h = e, this.x = .5 * t, this.y = .5 * e
};
var App = function (t) {
    t && ($ = t);
    var e = window.location.search || "",
        i = window.location.href.split("/")[2];
    this.pbs = i.match(/pbskids\.org$/), $ && $("html").hasClass("no-flash") ? this.configPath = "/shell/templates/home/config/theme-config.json" + e : this.configPath = "/shell/templates/home/config/theme-mobile-config.json" + e, this.canvas = document.getElementById("flower-fun-stage"), this.canvas.style.zIndex = 1e3, this.pbs ? (this.wrapper = $("#theme-stage"), this.stageWidth = this.wrapper.width(), this.stageHeight = this.wrapper.height(), this.width = this.stageWidth, this.height = this.stageHeight, console.log("within pbs")) : (this.wrapper = $("#container"), this.stageWidth = this.wrapper.width(), this.stageHeight = this.wrapper.height(), this.width = this.stageWidth, this.height = this.stageHeight), this.renderer = new PIXI.autoDetectRenderer(this.width, this.height, {
        view: this.canvas
    }), window.renderer = this.renderer, PIXI.isWebGL = this.renderer instanceof PIXI.WebGLRenderer, this.loader = PIXI.loader, this.toLoad = [ASSET_URL + "img/rope.png", ASSET_URL + "img/pot.png", ASSET_URL + "img/watering-can.png", ASSET_URL + "img/drop.png", ASSET_URL + "img/ripples.json", ASSET_URL + "img/water_tile.png", ASSET_URL + "img/pink-bud.png", ASSET_URL + "img/pink-head.png", ASSET_URL + "img/orange-bud.png", ASSET_URL + "img/orange-head.png", ASSET_URL + "img/blue-bud.png", ASSET_URL + "img/blue-head.png"], this.root = new PIXI.Container, this.container = new PIXI.Container, this.preloader = new Preloader(this), this.root.addChild(this.container), this.root.addChild(this.preloader);
    var r = this;
    this.shows = [], this.resize(), this.update(), this.pbs && $.getJSON(this.configPath, function (t) {
        config = t;
        for (var e = 0; e < config.shows.length; e++) config.shows[e].image = config.shows[e].image, r.shows.push(config.shows[e]), r.toLoad.push(config.shows[e].image)
    })
};
App.prototype = {
    load: function () {
        this.loader.add(this.toLoad), this.loader.once("complete", this.init.bind(this)), this.loader.load()
    },
    init: function () {
        this.shows = MathUtils.shuffle(this.shows), this.scene = new Scene(this), this.container.addChild(this.scene), this.container.interactive = !0, this.container.hitArea = new PIXI.Rectangle(0, 0, this.width, this.height), this.resize()
    },
    update: function () {
        this.scene && this.scene.update(), this.renderer.render(this.root), requestAnimationFrame(this.update.bind(this))
    },
    resize: function () {
        this.stageWidth = this.wrapper.width(), this.stageHeight = this.wrapper.height();
        var t = this.stageWidth,
            e = this.stageHeight;
        this.renderer.resize(0 | this.stageWidth, 0 | this.stageHeight), this.scene && this.scene.resize(t, e)
    },
    resizeOld: function () {
        this.stageWidth = this.wrapper.width(), this.stageHeight = this.wrapper.height();
        var t = this.stageWidth,
            e = this.stageHeight,
            i = 1,
            r = t / this.width < e / this.height ? t / this.width : e / this.height,
            n = Math.min(this.width * r, t),
            s = Math.min(this.height * r, e);
        this.container.scale.set(r * i), this.renderer.resize(n * i | 0, s * i | 0), this.renderer.view.style.width = n + "px", this.renderer.view.style.height = s + "px", this.renderer.view.style.left = t / 2 - n / 2 + "px", this.renderer.view.style.top = e / 2 - s / 2 + "px"
    }
}, App.prototype.constructor = App;