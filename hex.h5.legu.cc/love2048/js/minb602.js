function KeyboardInputManager() {
    this.events = {},
    window.navigator.msPointerEnabled ? (this.eventTouchstart = "MSPointerDown", this.eventTouchmove = "MSPointerMove", this.eventTouchend = "MSPointerUp") : (this.eventTouchstart = "touchstart", this.eventTouchmove = 4 > androidVersion ? "touchend": "touchmove", this.eventTouchend = "touchend"),
    this.listen()
}
function HTMLActuator() {
    this.tileContainer = document.querySelector(".tile-container"),
    this.scoreContainer = document.querySelector(".score-container"),
    this.bestContainer = document.querySelector(".best-container"),
    this.messageContainer = document.querySelector(".game-message"),
    this.score = 0
}
function Grid(a, b) {
    this.size = a,
    this.cells = b ? this.fromState(b) : this.empty()
}
function Tile(a, b) {
    this.x = a.x,
    this.y = a.y,
    this.value = b || 2,
    this.previousPosition = null,
    this.mergedFrom = null
}
function LocalStorageManager() {
    this.bestScoreKey = "bestScore",
    this.gameStateKey = "gameData";
    var a = this.localStorageSupported();
    this.storage = a ? window.localStorage: window.fakeStorage
}
function GameManager(a, b, c, d) {
    this.size = a,
    this.inputManager = new b,
    this.storageManager = new d,
    this.actuator = new c,
    this.startTiles = 2,
    this.inputManager.on("share", this.share.bind(this)),
    this.inputManager.on("move", this.move.bind(this)),
    this.inputManager.on("restart", this.restart.bind(this)),
    this.inputManager.on("keepPlaying", this.keepPlaying.bind(this)),
    this.setup(),
    window.gostart = this
}
var Zepto = function() {
    function a(a) {
        return null == a ? String(a) : U[V.call(a)] || "object"
    }
    function b(b) {
        return "function" == a(b)
    }
    function c(a) {
        return null != a && a == a.window
    }
    function d(a) {
        return null != a && a.nodeType == a.DOCUMENT_NODE
    }
    function e(b) {
        return "object" == a(b)
    }
    function f(a) {
        return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype
    }
    function g(a) {
        return "number" == typeof a.length
    }
    function h(a) {
        return D.call(a,
        function(a) {
            return null != a
        })
    }
    function i(a) {
        return a.length > 0 ? x.fn.concat.apply([], a) : a
    }
    function j(a) {
        return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function k(a) {
        return a in G ? G[a] : G[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
    }
    function l(a, b) {
        return "number" != typeof b || H[j(a)] ? b: b + "px"
    }
    function m(a) {
        var b, c;
        return F[a] || (b = E.createElement(a), E.body.appendChild(b), c = getComputedStyle(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), "none" == c && (c = "block"), F[a] = c),
        F[a]
    }
    function n(a) {
        return "children" in a ? C.call(a.children) : x.map(a.childNodes,
        function(a) {
            return 1 == a.nodeType ? a: void 0
        })
    }
    function o(a, b, c) {
        for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w])
    }
    function p(a, b) {
        return null == b ? x(a) : x(a).filter(b)
    }
    function q(a, c, d, e) {
        return b(c) ? c.call(a, d, e) : c
    }
    function r(a, b, c) {
        null == c ? a.removeAttribute(b) : a.setAttribute(b, c)
    }
    function s(a, b) {
        var c = a.className,
        d = c && c.baseVal !== v;
        return b === v ? d ? c.baseVal: c: void(d ? c.baseVal = b: a.className = b)
    }
    function t(a) {
        var b;
        try {
            return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null: /^0/.test(a) || isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? x.parseJSON(a) : a: b) : a
        } catch(c) {
            return a
        }
    }
    function u(a, b) {
        b(a);
        for (var c in a.childNodes) u(a.childNodes[c], b)
    }
    var v, w, x, y, z, A, B = [],
    C = B.slice,
    D = B.filter,
    E = window.document,
    F = {},
    G = {},
    H = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    I = /^\s*<(\w+|!)[^>]*>/,
    J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    L = /^(?:body|html)$/i,
    M = /([A-Z])/g,
    N = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    O = ["after", "prepend", "before", "append"],
    P = E.createElement("table"),
    Q = E.createElement("tr"),
    R = {
        tr: E.createElement("tbody"),
        tbody: P,
        thead: P,
        tfoot: P,
        td: Q,
        th: Q,
        "*": E.createElement("div")
    },
    S = /complete|loaded|interactive/,
    T = /^[\w-]*$/,
    U = {},
    V = U.toString,
    W = {},
    X = E.createElement("div"),
    Y = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    Z = Array.isArray ||
    function(a) {
        return a instanceof Array
    };
    return W.matches = function(a, b) {
        if (!b || !a || 1 !== a.nodeType) return ! 1;
        var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
        if (c) return c.call(a, b);
        var d, e = a.parentNode,
        f = !e;
        return f && (e = X).appendChild(a),
        d = ~W.qsa(e, b).indexOf(a),
        f && X.removeChild(a),
        d
    },
    z = function(a) {
        return a.replace(/-+(.)?/g,
        function(a, b) {
            return b ? b.toUpperCase() : ""
        })
    },
    A = function(a) {
        return D.call(a,
        function(b, c) {
            return a.indexOf(b) == c
        })
    },
    W.fragment = function(a, b, c) {
        var d, e, g;
        return J.test(a) && (d = x(E.createElement(RegExp.$1))),
        d || (a.replace && (a = a.replace(K, "<$1></$2>")), b === v && (b = I.test(a) && RegExp.$1), b in R || (b = "*"), g = R[b], g.innerHTML = "" + a, d = x.each(C.call(g.childNodes),
        function() {
            g.removeChild(this)
        })),
        f(c) && (e = x(d), x.each(c,
        function(a, b) {
            N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b)
        })),
        d
    },
    W.Z = function(a, b) {
        return a = a || [],
        a.__proto__ = x.fn,
        a.selector = b || "",
        a
    },
    W.isZ = function(a) {
        return a instanceof W.Z
    },
    W.init = function(a, c) {
        var d;
        if (!a) return W.Z();
        if ("string" == typeof a) if (a = a.trim(), "<" == a[0] && I.test(a)) d = W.fragment(a, RegExp.$1, c),
        a = null;
        else {
            if (c !== v) return x(c).find(a);
            d = W.qsa(E, a)
        } else {
            if (b(a)) return x(E).ready(a);
            if (W.isZ(a)) return a;
            if (Z(a)) d = h(a);
            else if (e(a)) d = [a],
            a = null;
            else if (I.test(a)) d = W.fragment(a.trim(), RegExp.$1, c),
            a = null;
            else {
                if (c !== v) return x(c).find(a);
                d = W.qsa(E, a)
            }
        }
        return W.Z(d, a)
    },
    x = function(a, b) {
        return W.init(a, b)
    },
    x.extend = function(a) {
        var b, c = C.call(arguments, 1);
        return "boolean" == typeof a && (b = a, a = c.shift()),
        c.forEach(function(c) {
            o(a, c, b)
        }),
        a
    },
    W.qsa = function(a, b) {
        var c, e = "#" == b[0],
        f = !e && "." == b[0],
        g = e || f ? b.slice(1) : b,
        h = T.test(g);
        return d(a) && h && e ? (c = a.getElementById(g)) ? [c] : [] : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? f ? a.getElementsByClassName(g) : a.getElementsByTagName(b) : a.querySelectorAll(b))
    },
    x.contains = function(a, b) {
        return a !== b && a.contains(b)
    },
    x.type = a,
    x.isFunction = b,
    x.isWindow = c,
    x.isArray = Z,
    x.isPlainObject = f,
    x.isEmptyObject = function(a) {
        var b;
        for (b in a) return ! 1;
        return ! 0
    },
    x.inArray = function(a, b, c) {
        return B.indexOf.call(b, a, c)
    },
    x.camelCase = z,
    x.trim = function(a) {
        return null == a ? "": String.prototype.trim.call(a)
    },
    x.uuid = 0,
    x.support = {},
    x.expr = {},
    x.map = function(a, b) {
        var c, d, e, f = [];
        if (g(a)) for (d = 0; d < a.length; d++) c = b(a[d], d),
        null != c && f.push(c);
        else for (e in a) c = b(a[e], e),
        null != c && f.push(c);
        return i(f)
    },
    x.each = function(a, b) {
        var c, d;
        if (g(a)) {
            for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a
        } else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
        return a
    },
    x.grep = function(a, b) {
        return D.call(a, b)
    },
    window.JSON && (x.parseJSON = JSON.parse),
    x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(a, b) {
        U["[object " + b + "]"] = b.toLowerCase()
    }),
    x.fn = {
        forEach: B.forEach,
        reduce: B.reduce,
        push: B.push,
        sort: B.sort,
        indexOf: B.indexOf,
        concat: B.concat,
        map: function(a) {
            return x(x.map(this,
            function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return x(C.apply(this, arguments))
        },
        ready: function(a) {
            return S.test(E.readyState) && E.body ? a(x) : E.addEventListener("DOMContentLoaded",
            function() {
                a(x)
            },
            !1),
            this
        },
        get: function(a) {
            return a === v ? C.call(this) : this[a >= 0 ? a: a + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(a) {
            return B.every.call(this,
            function(b, c) {
                return a.call(b, c, b) !== !1
            }),
            this
        },
        filter: function(a) {
            return b(a) ? this.not(this.not(a)) : x(D.call(this,
            function(b) {
                return W.matches(b, a)
            }))
        },
        add: function(a, b) {
            return x(A(this.concat(x(a, b))))
        },
        is: function(a) {
            return this.length > 0 && W.matches(this[0], a)
        },
        not: function(a) {
            var c = [];
            if (b(a) && a.call !== v) this.each(function(b) {
                a.call(this, b) || c.push(this)
            });
            else {
                var d = "string" == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
                this.forEach(function(a) {
                    d.indexOf(a) < 0 && c.push(a)
                })
            }
            return x(c)
        },
        has: function(a) {
            return this.filter(function() {
                return e(a) ? x.contains(this, a) : x(this).find(a).size()
            })
        },
        eq: function(a) {
            return - 1 === a ? this.slice(a) : this.slice(a, +a + 1)
        },
        first: function() {
            var a = this[0];
            return a && !e(a) ? a: x(a)
        },
        last: function() {
            var a = this[this.length - 1];
            return a && !e(a) ? a: x(a)
        },
        find: function(a) {
            var b, c = this;
            return b = "object" == typeof a ? x(a).filter(function() {
                var a = this;
                return B.some.call(c,
                function(b) {
                    return x.contains(b, a)
                })
            }) : 1 == this.length ? x(W.qsa(this[0], a)) : this.map(function() {
                return W.qsa(this, a)
            })
        },
        closest: function(a, b) {
            var c = this[0],
            e = !1;
            for ("object" == typeof a && (e = x(a)); c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a));) c = c !== b && !d(c) && c.parentNode;
            return x(c)
        },
        parents: function(a) {
            for (var b = [], c = this; c.length > 0;) c = x.map(c,
            function(a) {
                return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0
            });
            return p(b, a)
        },
        parent: function(a) {
            return p(A(this.pluck("parentNode")), a)
        },
        children: function(a) {
            return p(this.map(function() {
                return n(this)
            }), a)
        },
        contents: function() {
            return this.map(function() {
                return C.call(this.childNodes)
            })
        },
        siblings: function(a) {
            return p(this.map(function(a, b) {
                return D.call(n(b.parentNode),
                function(a) {
                    return a !== b
                })
            }), a)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(a) {
            return x.map(this,
            function(b) {
                return b[a]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = m(this.nodeName))
            })
        },
        replaceWith: function(a) {
            return this.before(a).remove()
        },
        wrap: function(a) {
            var c = b(a);
            if (this[0] && !c) var d = x(a).get(0),
            e = d.parentNode || this.length > 1;
            return this.each(function(b) {
                x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d)
            })
        },
        wrapAll: function(a) {
            if (this[0]) {
                x(this[0]).before(a = x(a));
                for (var b; (b = a.children()).length;) a = b.first();
                x(a).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            var c = b(a);
            return this.each(function(b) {
                var d = x(this),
                e = d.contents(),
                f = c ? a.call(this, b) : a;
                e.length ? e.wrapAll(f) : d.append(f)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x(this).replaceWith(x(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(a) {
            return this.each(function() {
                var b = x(this); (a === v ? "none" == b.css("display") : a) ? b.show() : b.hide()
            })
        },
        prev: function(a) {
            return x(this.pluck("previousElementSibling")).filter(a || "*")
        },
        next: function(a) {
            return x(this.pluck("nextElementSibling")).filter(a || "*")
        },
        html: function(a) {
            return 0 === arguments.length ? this.length > 0 ? this[0].innerHTML: null: this.each(function(b) {
                var c = this.innerHTML;
                x(this).empty().append(q(this, a, b, c))
            })
        },
        text: function(a) {
            return 0 === arguments.length ? this.length > 0 ? this[0].textContent: null: this.each(function() {
                this.textContent = a === v ? "": "" + a
            })
        },
        attr: function(a, b) {
            var c;
            return "string" == typeof a && b === v ? 0 == this.length || 1 !== this[0].nodeType ? v: "value" == a && "INPUT" == this[0].nodeName ? this.val() : !(c = this[0].getAttribute(a)) && a in this[0] ? this[0][a] : c: this.each(function(c) {
                if (1 === this.nodeType) if (e(a)) for (w in a) r(this, w, a[w]);
                else r(this, a, q(this, b, c, this.getAttribute(a)))
            })
        },
        removeAttr: function(a) {
            return this.each(function() {
                1 === this.nodeType && r(this, a)
            })
        },
        prop: function(a, b) {
            return a = Y[a] || a,
            b === v ? this[0] && this[0][a] : this.each(function(c) {
                this[a] = q(this, b, c, this[a])
            })
        },
        data: function(a, b) {
            var c = this.attr("data-" + a.replace(M, "-$1").toLowerCase(), b);
            return null !== c ? t(c) : v
        },
        val: function(a) {
            return 0 === arguments.length ? this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value) : this.each(function(b) {
                this.value = q(this, a, b, this.value)
            })
        },
        offset: function(a) {
            if (a) return this.each(function(b) {
                var c = x(this),
                d = q(this, a, b, c.offset()),
                e = c.offsetParent().offset(),
                f = {
                    top: d.top - e.top,
                    left: d.left - e.left
                };
                "static" == c.css("position") && (f.position = "relative"),
                c.css(f)
            });
            if (0 == this.length) return null;
            var b = this[0].getBoundingClientRect();
            return {
                left: b.left + window.pageXOffset,
                top: b.top + window.pageYOffset,
                width: Math.round(b.width),
                height: Math.round(b.height)
            }
        },
        css: function(b, c) {
            if (arguments.length < 2) {
                var d = this[0],
                e = getComputedStyle(d, "");
                if (!d) return;
                if ("string" == typeof b) return d.style[z(b)] || e.getPropertyValue(b);
                if (Z(b)) {
                    var f = {};
                    return x.each(Z(b) ? b: [b],
                    function(a, b) {
                        f[b] = d.style[z(b)] || e.getPropertyValue(b)
                    }),
                    f
                }
            }
            var g = "";
            if ("string" == a(b)) c || 0 === c ? g = j(b) + ":" + l(b, c) : this.each(function() {
                this.style.removeProperty(j(b))
            });
            else for (w in b) b[w] || 0 === b[w] ? g += j(w) + ":" + l(w, b[w]) + ";": this.each(function() {
                this.style.removeProperty(j(w))
            });
            return this.each(function() {
                this.style.cssText += ";" + g
            })
        },
        index: function(a) {
            return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(a) {
            return a ? B.some.call(this,
            function(a) {
                return this.test(s(a))
            },
            k(a)) : !1
        },
        addClass: function(a) {
            return a ? this.each(function(b) {
                y = [];
                var c = s(this),
                d = q(this, a, b, c);
                d.split(/\s+/g).forEach(function(a) {
                    x(this).hasClass(a) || y.push(a)
                },
                this),
                y.length && s(this, c + (c ? " ": "") + y.join(" "))
            }) : this
        },
        removeClass: function(a) {
            return this.each(function(b) {
                return a === v ? s(this, "") : (y = s(this), q(this, a, b, y).split(/\s+/g).forEach(function(a) {
                    y = y.replace(k(a), " ")
                }), void s(this, y.trim()))
            })
        },
        toggleClass: function(a, b) {
            return a ? this.each(function(c) {
                var d = x(this),
                e = q(this, a, c, s(this));
                e.split(/\s+/g).forEach(function(a) { (b === v ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a)
                })
            }) : this
        },
        scrollTop: function(a) {
            if (this.length) {
                var b = "scrollTop" in this[0];
                return a === v ? b ? this[0].scrollTop: this[0].pageYOffset: this.each(b ?
                function() {
                    this.scrollTop = a
                }: function() {
                    this.scrollTo(this.scrollX, a)
                })
            }
        },
        scrollLeft: function(a) {
            if (this.length) {
                var b = "scrollLeft" in this[0];
                return a === v ? b ? this[0].scrollLeft: this[0].pageXOffset: this.each(b ?
                function() {
                    this.scrollLeft = a
                }: function() {
                    this.scrollTo(a, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var a = this[0],
                b = this.offsetParent(),
                c = this.offset(),
                d = L.test(b[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: b.offset();
                return c.top -= parseFloat(x(a).css("margin-top")) || 0,
                c.left -= parseFloat(x(a).css("margin-left")) || 0,
                d.top += parseFloat(x(b[0]).css("border-top-width")) || 0,
                d.left += parseFloat(x(b[0]).css("border-left-width")) || 0,
                {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && "static" == x(a).css("position");) a = a.offsetParent;
                return a
            })
        }
    },
    x.fn.detach = x.fn.remove,
    ["width", "height"].forEach(function(a) {
        var b = a.replace(/./,
        function(a) {
            return a[0].toUpperCase()
        });
        x.fn[a] = function(e) {
            var f, g = this[0];
            return e === v ? c(g) ? g["inner" + b] : d(g) ? g.documentElement["scroll" + b] : (f = this.offset()) && f[a] : this.each(function(b) {
                g = x(this),
                g.css(a, q(this, e, b, g[a]()))
            })
        }
    }),
    O.forEach(function(b, c) {
        var d = c % 2;
        x.fn[b] = function() {
            var b, e, f = x.map(arguments,
            function(c) {
                return b = a(c),
                "object" == b || "array" == b || null == c ? c: W.fragment(c)
            }),
            g = this.length > 1;
            return f.length < 1 ? this: this.each(function(a, b) {
                e = d ? b: b.parentNode,
                b = 0 == c ? b.nextSibling: 1 == c ? b.firstChild: 2 == c ? b: null,
                f.forEach(function(a) {
                    if (g) a = a.cloneNode(!0);
                    else if (!e) return x(a).remove();
                    u(e.insertBefore(a, b),
                    function(a) {
                        null == a.nodeName || "SCRIPT" !== a.nodeName.toUpperCase() || a.type && "text/javascript" !== a.type || a.src || window.eval.call(window, a.innerHTML)
                    })
                })
            })
        },
        x.fn[d ? b + "To": "insert" + (c ? "Before": "After")] = function(a) {
            return x(a)[b](this),
            this
        }
    }),
    W.Z.prototype = x.fn,
    W.uniq = A,
    W.deserializeValue = t,
    x.zepto = W,
    x
} ();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(a) {
    function b(a) {
        return a._zid || (a._zid = m++)
    }
    function c(a, c, f, g) {
        if (c = d(c), c.ns) var h = e(c.ns);
        return (q[b(a)] || []).filter(function(a) {
            return ! (!a || c.e && a.e != c.e || c.ns && !h.test(a.ns) || f && b(a.fn) !== b(f) || g && a.sel != g)
        })
    }
    function d(a) {
        var b = ("" + a).split(".");
        return {
            e: b[0],
            ns: b.slice(1).sort().join(" ")
        }
    }
    function e(a) {
        return new RegExp("(?:^| )" + a.replace(" ", " .* ?") + "(?: |$)")
    }
    function f(a, b) {
        return a.del && !s && a.e in t || !!b
    }
    function g(a) {
        return u[a] || s && t[a] || a
    }
    function h(c, e, h, i, k, m, n) {
        var o = b(c),
        p = q[o] || (q[o] = []);
        e.split(/\s/).forEach(function(b) {
            if ("ready" == b) return a(document).ready(h);
            var e = d(b);
            e.fn = h,
            e.sel = k,
            e.e in u && (h = function(b) {
                var c = b.relatedTarget;
                return ! c || c !== this && !a.contains(this, c) ? e.fn.apply(this, arguments) : void 0
            }),
            e.del = m;
            var o = m || h;
            e.proxy = function(a) {
                if (a = j(a), !a.isImmediatePropagationStopped()) {
                    a.data = i;
                    var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
                    return b === !1 && (a.preventDefault(), a.stopPropagation()),
                    b
                }
            },
            e.i = p.length,
            p.push(e),
            "addEventListener" in c && c.addEventListener(g(e.e), e.proxy, f(e, n))
        })
    }
    function i(a, d, e, h, i) {
        var j = b(a); (d || "").split(/\s/).forEach(function(b) {
            c(a, b, e, h).forEach(function(b) {
                delete q[j][b.i],
                "removeEventListener" in a && a.removeEventListener(g(b.e), b.proxy, f(b, i))
            })
        })
    }
    function j(b, c) {
        return (c || !b.isDefaultPrevented) && (c || (c = b), a.each(y,
        function(a, d) {
            var e = c[a];
            b[a] = function() {
                return this[d] = v,
                e && e.apply(c, arguments)
            },
            b[d] = w
        }), (c.defaultPrevented !== l ? c.defaultPrevented: "returnValue" in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)),
        b
    }
    function k(a) {
        var b, c = {
            originalEvent: a
        };
        for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
        return j(c, a)
    }
    var l, m = 1,
    n = Array.prototype.slice,
    o = a.isFunction,
    p = function(a) {
        return "string" == typeof a
    },
    q = {},
    r = {},
    s = "onfocusin" in window,
    t = {
        focus: "focusin",
        blur: "focusout"
    },
    u = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    r.click = r.mousedown = r.mouseup = r.mousemove = "MouseEvents",
    a.event = {
        add: h,
        remove: i
    },
    a.proxy = function(c, d) {
        if (o(c)) {
            var e = function() {
                return c.apply(d, arguments)
            };
            return e._zid = b(c),
            e
        }
        if (p(d)) return a.proxy(c[d], c);
        throw new TypeError("expected function")
    },
    a.fn.bind = function(a, b, c) {
        return this.on(a, b, c)
    },
    a.fn.unbind = function(a, b) {
        return this.off(a, b)
    },
    a.fn.one = function(a, b, c, d) {
        return this.on(a, b, c, d, 1)
    };
    var v = function() {
        return ! 0
    },
    w = function() {
        return ! 1
    },
    x = /^([A-Z]|returnValue$|layer[XY]$)/,
    y = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    a.fn.delegate = function(a, b, c) {
        return this.on(b, a, c)
    },
    a.fn.undelegate = function(a, b, c) {
        return this.off(b, a, c)
    },
    a.fn.live = function(b, c) {
        return a(document.body).delegate(this.selector, b, c),
        this
    },
    a.fn.die = function(b, c) {
        return a(document.body).undelegate(this.selector, b, c),
        this
    },
    a.fn.on = function(b, c, d, e, f) {
        var g, j, m = this;
        return b && !p(b) ? (a.each(b,
        function(a, b) {
            m.on(a, c, d, b, f)
        }), m) : (p(c) || o(e) || e === !1 || (e = d, d = c, c = l), (o(d) || d === !1) && (e = d, d = l), e === !1 && (e = w), m.each(function(l, m) {
            f && (g = function(a) {
                return i(m, a.type, e),
                e.apply(this, arguments)
            }),
            c && (j = function(b) {
                var d, f = a(b.target).closest(c, m).get(0);
                return f && f !== m ? (d = a.extend(k(b), {
                    currentTarget: f,
                    liveFired: m
                }), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0
            }),
            h(m, b, e, d, c, j || g)
        }))
    },
    a.fn.off = function(b, c, d) {
        var e = this;
        return b && !p(b) ? (a.each(b,
        function(a, b) {
            e.off(a, c, b)
        }), e) : (p(c) || o(d) || d === !1 || (d = c, c = l), d === !1 && (d = w), e.each(function() {
            i(this, b, d, c)
        }))
    },
    a.fn.trigger = function(b, c) {
        return b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b),
        b._args = c,
        this.each(function() {
            "dispatchEvent" in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c)
        })
    },
    a.fn.triggerHandler = function(b, d) {
        var e, f;
        return this.each(function(g, h) {
            e = k(p(b) ? a.Event(b) : b),
            e._args = d,
            e.target = h,
            a.each(c(h, b.type || b),
            function(a, b) {
                return f = b.proxy(e),
                e.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        f
    },
    "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.trigger(b)
        }
    }),
    ["focus", "blur"].forEach(function(b) {
        a.fn[b] = function(a) {
            return a ? this.bind(b, a) : this.each(function() {
                try {
                    this[b]()
                } catch(a) {}
            }),
            this
        }
    }),
    a.Event = function(a, b) {
        p(a) || (b = a, a = b.type);
        var c = document.createEvent(r[a] || "Events"),
        d = !0;
        if (b) for (var e in b)"bubbles" == e ? d = !!b[e] : c[e] = b[e];
        return c.initEvent(a, d, !0),
        j(c)
    }
} (Zepto),
function(a) {
    function b(b, c, d) {
        var e = a.Event(c);
        return a(b).trigger(e, d),
        !e.isDefaultPrevented()
    }
    function c(a, c, d, e) {
        return a.global ? b(c || s, d, e) : void 0
    }
    function d(b) {
        b.global && 0 === a.active++&&c(b, null, "ajaxStart")
    }
    function e(b) {
        b.global && !--a.active && c(b, null, "ajaxStop")
    }
    function f(a, b) {
        var d = b.context;
        return b.beforeSend.call(d, a, b) === !1 || c(b, d, "ajaxBeforeSend", [a, b]) === !1 ? !1 : void c(b, d, "ajaxSend", [a, b])
    }
    function g(a, b, d, e) {
        var f = d.context,
        g = "success";
        d.success.call(f, a, g, b),
        e && e.resolveWith(f, [a, g, b]),
        c(d, f, "ajaxSuccess", [b, d, a]),
        i(g, b, d)
    }
    function h(a, b, d, e, f) {
        var g = e.context;
        e.error.call(g, d, b, a),
        f && f.rejectWith(g, [d, b, a]),
        c(e, g, "ajaxError", [d, e, a || b]),
        i(b, d, e)
    }
    function i(a, b, d) {
        var f = d.context;
        d.complete.call(f, b, a),
        c(d, f, "ajaxComplete", [b, d]),
        e(d)
    }
    function j() {}
    function k(a) {
        return a && (a = a.split(";", 2)[0]),
        a && (a == x ? "html": a == w ? "json": u.test(a) ? "script": v.test(a) && "xml") || "text"
    }
    function l(a, b) {
        return "" == b ? a: (a + "&" + b).replace(/[&?]{1,2}/, "?")
    }
    function m(b) {
        b.processData && b.data && "string" != a.type(b.data) && (b.data = a.param(b.data, b.traditional)),
        !b.data || b.type && "GET" != b.type.toUpperCase() || (b.url = l(b.url, b.data), b.data = void 0)
    }
    function n(b, c, d, e) {
        return a.isFunction(c) && (e = d, d = c, c = void 0),
        a.isFunction(d) || (e = d, d = void 0),
        {
            url: b,
            data: c,
            success: d,
            dataType: e
        }
    }
    function o(b, c, d, e) {
        var f, g = a.isArray(c),
        h = a.isPlainObject(c);
        a.each(c,
        function(c, i) {
            f = a.type(i),
            e && (c = d ? e: e + "[" + (h || "object" == f || "array" == f ? c: "") + "]"),
            !e && g ? b.add(i.name, i.value) : "array" == f || !d && "object" == f ? o(b, i, d, c) : b.add(c, i)
        })
    }
    var p, q, r = 0,
    s = window.document,
    t = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    u = /^(?:text|application)\/javascript/i,
    v = /^(?:text|application)\/xml/i,
    w = "application/json",
    x = "text/html",
    y = /^\s*$/;
    a.active = 0,
    a.ajaxJSONP = function(b, c) {
        if (! ("type" in b)) return a.ajax(b);
        var d, e, i = b.jsonpCallback,
        j = (a.isFunction(i) ? i() : i) || "jsonp" + ++r,
        k = s.createElement("script"),
        l = window[j],
        m = function(b) {
            a(k).triggerHandler("error", b || "abort")
        },
        n = {
            abort: m
        };
        return c && c.promise(n),
        a(k).on("load error",
        function(f, i) {
            clearTimeout(e),
            a(k).off().remove(),
            "error" != f.type && d ? g(d[0], n, b, c) : h(null, i || "error", n, b, c),
            window[j] = l,
            d && a.isFunction(l) && l(d[0]),
            l = d = void 0
        }),
        f(n, b) === !1 ? (m("abort"), n) : (window[j] = function() {
            d = arguments
        },
        k.src = b.url.replace(/\?(.+)=\?/, "?$1=" + j), s.head.appendChild(k), b.timeout > 0 && (e = setTimeout(function() {
            m("timeout")
        },
        b.timeout)), n)
    },
    a.ajaxSettings = {
        type: "GET",
        beforeSend: j,
        success: j,
        error: j,
        complete: j,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: w,
            xml: "application/xml, text/xml",
            html: x,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    a.ajax = function(b) {
        var c = a.extend({},
        b || {}),
        e = a.Deferred && a.Deferred();
        for (p in a.ajaxSettings) void 0 === c[p] && (c[p] = a.ajaxSettings[p]);
        d(c),
        c.crossDomain || (c.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(c.url) && RegExp.$2 != window.location.host),
        c.url || (c.url = window.location.toString()),
        m(c),
        c.cache === !1 && (c.url = l(c.url, "_=" + Date.now()));
        var i = c.dataType,
        n = /\?.+=\?/.test(c.url);
        if ("jsonp" == i || n) return n || (c.url = l(c.url, c.jsonp ? c.jsonp + "=?": c.jsonp === !1 ? "": "callback=?")),
        a.ajaxJSONP(c, e);
        var o, r = c.accepts[i],
        s = {},
        t = function(a, b) {
            s[a.toLowerCase()] = [a, b]
        },
        u = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1: window.location.protocol,
        v = c.xhr(),
        w = v.setRequestHeader;
        if (e && e.promise(v), c.crossDomain || t("X-Requested-With", "XMLHttpRequest"), t("Accept", r || "*/*"), (r = c.mimeType || r) && (r.indexOf(",") > -1 && (r = r.split(",", 2)[0]), v.overrideMimeType && v.overrideMimeType(r)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && t("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers) for (q in c.headers) t(q, c.headers[q]);
        if (v.setRequestHeader = t, v.onreadystatechange = function() {
            if (4 == v.readyState) {
                v.onreadystatechange = j,
                clearTimeout(o);
                var b, d = !1;
                if (v.status >= 200 && v.status < 300 || 304 == v.status || 0 == v.status && "file:" == u) {
                    i = i || k(c.mimeType || v.getResponseHeader("content-type")),
                    b = v.responseText;
                    try {
                        "script" == i ? (1, eval)(b) : "xml" == i ? b = v.responseXML: "json" == i && (b = y.test(b) ? null: a.parseJSON(b))
                    } catch(f) {
                        d = f
                    }
                    d ? h(d, "parsererror", v, c, e) : g(b, v, c, e)
                } else h(v.statusText || null, v.status ? "error": "abort", v, c, e)
            }
        },
        f(v, c) === !1) return v.abort(),
        h(null, "abort", v, c, e),
        v;
        if (c.xhrFields) for (q in c.xhrFields) v[q] = c.xhrFields[q];
        var x = "async" in c ? c.async: !0;
        v.open(c.type, c.url, x, c.username, c.password);
        for (q in s) w.apply(v, s[q]);
        return c.timeout > 0 && (o = setTimeout(function() {
            v.onreadystatechange = j,
            v.abort(),
            h(null, "timeout", v, c, e)
        },
        c.timeout)),
        v.send(c.data ? c.data: null),
        v
    },
    a.get = function() {
        return a.ajax(n.apply(null, arguments))
    },
    a.post = function() {
        var b = n.apply(null, arguments);
        return b.type = "POST",
        a.ajax(b)
    },
    a.getJSON = function() {
        var b = n.apply(null, arguments);
        return b.dataType = "json",
        a.ajax(b)
    },
    a.fn.load = function(b, c, d) {
        if (!this.length) return this;
        var e, f = this,
        g = b.split(/\s/),
        h = n(b, c, d),
        i = h.success;
        return g.length > 1 && (h.url = g[0], e = g[1]),
        h.success = function(b) {
            f.html(e ? a("<div>").html(b.replace(t, "")).find(e) : b),
            i && i.apply(f, arguments)
        },
        a.ajax(h),
        this
    };
    var z = encodeURIComponent;
    a.param = function(a, b) {
        var c = [];
        return c.add = function(a, b) {
            this.push(z(a) + "=" + z(b))
        },
        o(c, a, b),
        c.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(a) {
    a.fn.serializeArray = function() {
        var b, c = [];
        return a([].slice.call(this.get(0).elements)).each(function() {
            b = a(this);
            var d = b.attr("type");
            "fieldset" != this.nodeName.toLowerCase() && !this.disabled && "submit" != d && "reset" != d && "button" != d && ("radio" != d && "checkbox" != d || this.checked) && c.push({
                name: b.attr("name"),
                value: b.val()
            })
        }),
        c
    },
    a.fn.serialize = function() {
        var a = [];
        return this.serializeArray().forEach(function(b) {
            a.push(encodeURIComponent(b.name) + "=" + encodeURIComponent(b.value))
        }),
        a.join("&")
    },
    a.fn.submit = function(b) {
        if (b) this.bind("submit", b);
        else if (this.length) {
            var c = a.Event("submit");
            this.eq(0).trigger(c),
            c.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
} (Zepto),
function(a) {
    "__proto__" in {} || a.extend(a.zepto, {
        Z: function(b, c) {
            return b = b || [],
            a.extend(b, a.fn),
            b.selector = c || "",
            b.__Z = !0,
            b
        },
        isZ: function(b) {
            return "array" === a.type(b) && "__Z" in b
        }
    });
    try {
        getComputedStyle(void 0)
    } catch(b) {
        var c = getComputedStyle;
        window.getComputedStyle = function(a) {
            try {
                return c(a)
            } catch(b) {
                return null
            }
        }
    }
} (Zepto),
function(a, b) {
    function c(a) {
        return a.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
    }
    function d(a) {
        return e ? e + a: a.toLowerCase()
    }
    var e, f, g, h, i, j, k, l, m, n, o = "",
    p = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    },
    q = window.document,
    r = q.createElement("div"),
    s = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    t = {};
    a.each(p,
    function(a, c) {
        return r.style[a + "TransitionProperty"] !== b ? (o = "-" + a.toLowerCase() + "-", e = c, !1) : void 0
    }),
    f = o + "transform",
    t[g = o + "transition-property"] = t[h = o + "transition-duration"] = t[j = o + "transition-delay"] = t[i = o + "transition-timing-function"] = t[k = o + "animation-name"] = t[l = o + "animation-duration"] = t[n = o + "animation-delay"] = t[m = o + "animation-timing-function"] = "",
    a.fx = {
        off: e === b && r.style.transitionProperty === b,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: o,
        transitionEnd: d("TransitionEnd"),
        animationEnd: d("AnimationEnd")
    },
    a.fn.animate = function(c, d, e, f, g) {
        return a.isFunction(d) && (f = d, e = b, d = b),
        a.isFunction(e) && (f = e, e = b),
        a.isPlainObject(d) && (e = d.easing, f = d.complete, g = d.delay, d = d.duration),
        d && (d = ("number" == typeof d ? d: a.fx.speeds[d] || a.fx.speeds._default) / 1e3),
        g && (g = parseFloat(g) / 1e3),
        this.anim(c, d, e, f, g)
    },
    a.fn.anim = function(d, e, o, p, q) {
        var r, u, v, w = {},
        x = "",
        y = this,
        z = a.fx.transitionEnd,
        A = !1;
        if (e === b && (e = a.fx.speeds._default / 1e3), q === b && (q = 0), a.fx.off && (e = 0), "string" == typeof d) w[k] = d,
        w[l] = e + "s",
        w[n] = q + "s",
        w[m] = o || "linear",
        z = a.fx.animationEnd;
        else {
            u = [];
            for (r in d) s.test(r) ? x += r + "(" + d[r] + ") ": (w[r] = d[r], u.push(c(r)));
            x && (w[f] = x, u.push(f)),
            e > 0 && "object" == typeof d && (w[g] = u.join(", "), w[h] = e + "s", w[j] = q + "s", w[i] = o || "linear")
        }
        return v = function(b) {
            if ("undefined" != typeof b) {
                if (b.target !== b.currentTarget) return;
                a(b.target).unbind(z, v)
            } else a(this).unbind(z, v);
            A = !0,
            a(this).css(t),
            p && p.call(this)
        },
        e > 0 && (this.bind(z, v), setTimeout(function() {
            A || v.call(y)
        },
        1e3 * e + 25)),
        this.size() && this.get(0).clientLeft,
        this.css(w),
        0 >= e && setTimeout(function() {
            y.each(function() {
                v.call(this)
            })
        },
        0),
        this
    },
    r = null
} (Zepto),
function(a, b) {
    function c(c, d, e, f, g) {
        "function" != typeof d || g || (g = d, d = b);
        var h = {
            opacity: e
        };
        return f && (h.scale = f, c.css(a.fx.cssPrefix + "transform-origin", "0 0")),
        c.animate(h, d, null, g)
    }
    function d(b, d, e, f) {
        return c(b, d, 0, e,
        function() {
            g.call(a(this)),
            f && f.call(this)
        })
    }
    var e = window.document,
    f = (e.documentElement, a.fn.show),
    g = a.fn.hide,
    h = a.fn.toggle;
    a.fn.show = function(a, d) {
        return f.call(this),
        a === b ? a = 0 : this.css("opacity", 0),
        c(this, a, 1, "1,1", d)
    },
    a.fn.hide = function(a, c) {
        return a === b ? g.call(this) : d(this, a, "0,0", c)
    },
    a.fn.toggle = function(c, d) {
        return c === b || "boolean" == typeof c ? h.call(this, c) : this.each(function() {
            var b = a(this);
            b["none" == b.css("display") ? "show": "hide"](c, d)
        })
    },
    a.fn.fadeTo = function(a, b, d) {
        return c(this, a, b, null, d)
    },
    a.fn.fadeIn = function(a, b) {
        var c = this.css("opacity");
        return c > 0 ? this.css("opacity", 0) : c = 1,
        f.call(this).fadeTo(a, c, b)
    },
    a.fn.fadeOut = function(a, b) {
        return d(this, a, null, b)
    },
    a.fn.fadeToggle = function(b, c) {
        return this.each(function() {
            var d = a(this);
            d[0 == d.css("opacity") || "none" == d.css("display") ? "fadeIn": "fadeOut"](b, c)
        })
    }
} (Zepto),
function(a) {
    function b(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left": "Right": c - d > 0 ? "Up": "Down"
    }
    function c() {
        k = null,
        m.last && (m.el.trigger("longTap"), m = {})
    }
    function d() {
        k && clearTimeout(k),
        k = null
    }
    function e() {
        h && clearTimeout(h),
        i && clearTimeout(i),
        j && clearTimeout(j),
        k && clearTimeout(k),
        h = i = j = k = null,
        m = {}
    }
    function f(a) {
        return ("touch" == a.pointerType || a.pointerType == a.MSPOINTER_TYPE_TOUCH) && a.isPrimary
    }
    function g(a, b) {
        return a.type == "pointer" + b || a.type.toLowerCase() == "mspointer" + b
    }
    var h, i, j, k, l, m = {},
    n = 750;
    a(document).ready(function() {
        var o, p, q, r, s = 0,
        t = 0;
        "MSGesture" in window && (l = new MSGesture, l.target = document.body),
        a(document).bind("MSGestureEnd",
        function(a) {
            var b = a.velocityX > 1 ? "Right": a.velocityX < -1 ? "Left": a.velocityY > 1 ? "Down": a.velocityY < -1 ? "Up": null;
            b && (m.el.trigger("swipe"), m.el.trigger("swipe" + b))
        }).on("touchstart MSPointerDown pointerdown",
        function(b) { (!(r = g(b, "down")) || f(b)) && (q = r ? b: b.touches[0], b.touches && 1 === b.touches.length && m.x2 && (m.x2 = void 0, m.y2 = void 0), o = Date.now(), p = o - (m.last || o), m.el = a("tagName" in q.target ? q.target: q.target.parentNode), h && clearTimeout(h), m.x1 = q.pageX, m.y1 = q.pageY, p > 0 && 250 >= p && (m.isDoubleTap = !0), m.last = o, k = setTimeout(c, n), l && r && l.addPointer(b.pointerId))
        }).on("touchmove MSPointerMove pointermove",
        function(a) { (!(r = g(a, "move")) || f(a)) && (q = r ? a: a.touches[0], d(), m.x2 = q.pageX, m.y2 = q.pageY, s += Math.abs(m.x1 - m.x2), t += Math.abs(m.y1 - m.y2))
        }).on("touchend MSPointerUp pointerup",
        function(c) { (!(r = g(c, "up")) || f(c)) && (d(), m.x2 && Math.abs(m.x1 - m.x2) > 30 || m.y2 && Math.abs(m.y1 - m.y2) > 30 ? j = setTimeout(function() {

                m && m.el && m.el.trigger("swipe"),
                m && m.el && m.el.trigger("swipe" + b(m.x1, m.x2, m.y1, m.y2)),
                m = {}
            },
            0) : "last" in m && (30 > s && 30 > t ? i = setTimeout(function() {
                var b = a.Event("tap");
                b.cancelTouch = e,
                m.el.trigger(b),
                m.isDoubleTap ? (m.el && m.el.trigger("doubleTap"), m = {}) : h = setTimeout(function() {
                    h = null,
                    m.el && m.el.trigger("singleTap"),
                    m = {}
                },
                250)
            },
            0) : m = {}), s = t = 0)
        }).on("touchcancel MSPointerCancel pointercancel", e),
        a(window).on("scroll", e)
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
        a.fn[b] = function(a) {
            return this.on(b, a)
        }
    })
} (Zepto);
var _share_fixed = "";
Function.prototype.bind = Function.prototype.bind ||
function(a) {
    var b = this;
    return function(c) {
        c instanceof Array || (c = [c]),
        b.apply(a, c)
    }
},
function() {
    function a(a) {
        this.el = a;
        for (var b = a.className.replace(/^\s+|\s+$/g, "").split(/\s+/), c = 0; c < b.length; c++) d.call(this, b[c])
    }
    function b(a, b, c) {
        Object.defineProperty ? Object.defineProperty(a, b, {
            get: c
        }) : a.__defineGetter__(b, c)
    }
    if (! ("undefined" == typeof window.Element || "classList" in document.documentElement)) {
        var c = Array.prototype,
        d = c.push,
        e = c.splice,
        f = c.join;
        a.prototype = {
            add: function(a) {
                this.contains(a) || (d.call(this, a), this.el.className = this.toString())
            },
            contains: function(a) {
                return - 1 != this.el.className.indexOf(a)
            },
            item: function(a) {
                return this[a] || null
            },
            remove: function(a) {
                if (this.contains(a)) {
                    for (var b = 0; b < this.length && this[b] != a; b++);
                    e.call(this, b, 1),
                    this.el.className = this.toString()
                }
            },
            toString: function() {
                return f.call(this, " ")
            },
            toggle: function(a) {
                return this.contains(a) ? this.remove(a) : this.add(a),
                this.contains(a)
            }
        },
        window.DOMTokenList = a,
        b(HTMLElement.prototype, "classList",
        function() {
            return new a(this)
        })
    }
} (),
function() {
    for (var a = 0,
    b = ["webkit", "moz"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
        var c = (new Date).getTime(),
        d = Math.max(0, 16 - (c - a)),
        e = window.setTimeout(function() {
            b(c + d)
        },
        d);
        return a = c + d,
        e
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    })
} (),
getAndroidVersion = function(a) {
    var b;
    return a = a || navigator.userAgent,
    b = a.match(/Android\s([0-9\.]*)/),
    b ? b[1] : !1
};
var androidVersion = parseFloat(getAndroidVersion());
KeyboardInputManager.prototype.on = function(a, b) {
    this.events[a] || (this.events[a] = []),
    this.events[a].push(b)
},
KeyboardInputManager.prototype.emit = function(a, b) {
    var c = this.events[a];
    c && c.forEach(function(a) {
        a(b)
    })
},
KeyboardInputManager.prototype.listen = function() {
			
    var a = this,
    b = {
        38 : 0,
        39 : 1,
        40 : 2,
        37 : 3,
        75 : 0,
        76 : 1,
        74 : 2,
        72 : 3,
        87 : 0,
        68 : 1,
        83 : 2,
        65 : 3
    };
    document.addEventListener("keydown",
    function(c) {
        var d = c.altKey || c.ctrlKey || c.metaKey || c.shiftKey,
        e = b[c.which];
        d || void 0 !== e && (c.preventDefault(), a.emit("move", e)),
        d || 82 !== c.which || a.restart.call(a, c)
    }),
    this.bindButtonPress(".retry-button", this.share),
    this.bindButtonPress(".keep-playing-button", this.keepPlaying);

    var c, d, e = document.getElementsByClassName("game-container")[0];
	
		
    e.addEventListener(this.eventTouchstart,
    function(a) {
        window.touch_move = !1,
        !window.navigator.msPointerEnabled && a.touches.length > 1 || a.targetTouches > 1 || (window.navigator.msPointerEnabled ? (c = a.pageX, d = a.pageY) : (c = a.touches[0].clientX, d = a.touches[0].clientY) /*, a.preventDefault()*/)
    }),

    e.addEventListener(this.eventTouchmove,
    function(a) {
        /*a.preventDefault()*/
    });
		
    e.addEventListener(this.eventTouchmove,
    function(b) {
        if (! (window.touch_move || !window.navigator.msPointerEnabled && b.touches.length > 1 || b.targetTouches > 0)) {
            var e, f;
            window.navigator.msPointerEnabled ? (e = b.pageX, f = b.pageY) : (e = b.changedTouches[0].clientX, f = b.changedTouches[0].clientY);
            var g = e - c,
            h = Math.abs(g),
            i = f - d,
            j = Math.abs(i);
            Math.max(h, j) > 10 && a.emit("move", h > j ? g > 0 ? 1 : 3 : i > 0 ? 2 : 0)
        }
    })
},
KeyboardInputManager.prototype.share = function(a) {
    a.preventDefault(),
    this.emit("share")
},
KeyboardInputManager.prototype.restart = function(a) {
    a.preventDefault(),
    this.emit("restart")
},
KeyboardInputManager.prototype.keepPlaying = function(a) {
    cb_restart(),
    a.preventDefault(),
    this.emit("keepPlaying")
},
KeyboardInputManager.prototype.bindButtonPress = function(a, b) {
    var c = document.querySelector(a);
    c.addEventListener(this.eventTouchend, b.bind(this))
},
HTMLActuator.prototype.actuate = function(a, b) {
    var c = this;
    window.requestAnimationFrame(function() {
        c.clearContainer(c.tileContainer),
        a.cells.forEach(function(a) {
            a.forEach(function(a) {
                a && c.addTile(a)
            })
        }),
        c.updateScore(b.score),
        c.updateBestScore(_my_list[b.bestScore]),
        b.terminated && (b.over ? c.message(!1) : b.won && c.message(!0))
    })
},
HTMLActuator.prototype.continueGame = function() {
    this.clearMessage()
},
HTMLActuator.prototype.clearContainer = function(a) {
    for (; a.firstChild;) a.removeChild(a.firstChild)
},
HTMLActuator.prototype.addTile = function(a) {
    var b = this,
    c = document.createElement("div"),
    d = document.createElement("div"),
    e = a.previousPosition || {
        x: a.x,
        y: a.y
    },
    f = this.positionClass(e),
    g = ["tile", "tile-" + a.value, f];
	$(c).data('position',JSON.stringify({x:a.x,y:a.y}));
    a.value > 2048 && g.push("tile-super"),
    this.applyClasses(c, g),
    d.classList.add("tile-inner"),

	d.ontouchend = function(){
		var now = (new Date()).getTime();
		if(this.firstClick && now - this.firstClick < 1000){
			bombTile(this);
			delete this.firstClick;
			return;
		}
		this.firstClick = (new Date()).getTime();
	},

    window._my_list && (/*d.textContent = _my_list[a.value]*/d.innerHTML = _my_list[a.value]+'<span style="font-size:70%">'+ _my_index[a.value] +'</span>', "http" == d.textContent.substring(0, 4) && (d.innerHTML = '<img src="' + d.textContent + '" class="tile-inner"/>'), d.style.fontSize = 2 - .4 * (d.textContent.length - 1) + "rem", d.style.fontFamily = "microsoft yahei", d.style.overflow = "hidden"),
    a.previousPosition ? window.requestAnimationFrame(function() {
        g[2] = b.positionClass({
            x: a.x,
            y: a.y
        }),
        b.applyClasses(c, g);
		$(d).data('position',JSON.stringify({x:a.x,y:a.y}));
    }) : a.mergedFrom ? (g.push("tile-merged"), this.applyClasses(c, g), a.mergedFrom.forEach(function(a) {
        b.addTile(a)
    })) : (g.push("tile-new"), this.applyClasses(c, g)),
    c.appendChild(d),

    this.tileContainer.appendChild(c);
},
HTMLActuator.prototype.applyClasses = function(a, b) {
    a.setAttribute("class", b.join(" "))
},
HTMLActuator.prototype.normalizePosition = function(a) {
    return {
        x: a.x + 1,
        y: a.y + 1
    }
},
HTMLActuator.prototype.positionClass = function(a) {
    return a = this.normalizePosition(a),
    "tile-position-" + a.x + "-" + a.y
};
var _nowbest = 0;
HTMLActuator.prototype.updateScore = function(a) {
    this.clearContainer(this.scoreContainer);
    var b = a - this.score;
    if (this.score = a, this.scoreContainer.textContent = _my_list[_nowbest], b > 0) {
        var c = document.createElement("div");
        c.classList.add("score-addition"),
        c.textContent = "+" + b
    }
},
HTMLActuator.prototype.updateBestScore = function(a) {
	var steps = localStorage['bombSteps']||0;
	document.title = "[情侣版2048] 我终于"+a+"啦，有没有来和我一起来的呀？";
    this.bestContainer.textContent = a
},
HTMLActuator.prototype.message = function(a) {
    var b = a ? "game-won": "game-over",
    c = a ? _my_win || "You win!": _my_mark[_nowbest] || "Game over!";
    this.messageContainer.classList.add(b),
    this.messageContainer.getElementsByTagName("p")[0].textContent = c
},
HTMLActuator.prototype.clearMessage = function() {
    this.messageContainer.classList.remove("game-won"),
    this.messageContainer.classList.remove("game-over")
},
Grid.prototype.empty = function() {
    for (var a = [], b = 0; b < this.size; b++) for (var c = a[b] = [], d = 0; d < this.size; d++) c.push(null);
    return a
},
Grid.prototype.fromState = function(a) {
    for (var b = [], c = 0; c < this.size; c++) for (var d = b[c] = [], e = 0; e < this.size; e++) {
        var f = a[c][e];
        d.push(f ? new Tile(f.position, f.value) : null)
    }
    return b
},
Grid.prototype.randomAvailableCell = function() {
    var a = this.availableCells();
    return a.length ? a[Math.floor(Math.random() * a.length)] : void 0
},
Grid.prototype.availableCells = function() {
    var a = [];
    return this.eachCell(function(b, c, d) {
        d || a.push({
            x: b,
            y: c
        })
    }),
    a
},
Grid.prototype.eachCell = function(a) {
    for (var b = 0; b < this.size; b++) for (var c = 0; c < this.size; c++) a(b, c, this.cells[b][c])
},
Grid.prototype.cellsAvailable = function() {
    return !! this.availableCells().length
},
Grid.prototype.cellAvailable = function(a) {
    return ! this.cellOccupied(a)
},
Grid.prototype.cellOccupied = function(a) {
    return !! this.cellContent(a)
},
Grid.prototype.cellContent = function(a) {
    return this.withinBounds(a) ? this.cells[a.x][a.y] : null
},
Grid.prototype.insertTile = function(a) {
    this.cells[a.x][a.y] = a
},
Grid.prototype.removeTile = function(a) {
    this.cells[a.x][a.y] = null
},
Grid.prototype.withinBounds = function(a) {
    return a.x >= 0 && a.x < this.size && a.y >= 0 && a.y < this.size
},
Grid.prototype.serialize = function() {
    for (var a = [], b = 0; b < this.size; b++) for (var c = a[b] = [], d = 0; d < this.size; d++) c.push(this.cells[b][d] ? this.cells[b][d].serialize() : null);
    return {
        size: this.size,
        cells: a
    }
},
Tile.prototype.savePosition = function() {
    this.previousPosition = {
        x: this.x,
        y: this.y
    }
},
Tile.prototype.updatePosition = function(a) {
    this.x = a.x,
    this.y = a.y
},
Tile.prototype.serialize = function() {
    return {
        position: {
            x: this.x,
            y: this.y
        },
        value: this.value
    }
},
window.fakeStorage = {
    _data: {},
    setItem: function(a, b) {
        return this._data[a] = String(b)
    },
    getItem: function(a) {
        return this._data.hasOwnProperty(a) ? this._data[a] : void 0
    },
    removeItem: function(a) {
        return delete this._data[a]
    },
    clear: function() {
        return this._data = {}
    }
},
LocalStorageManager.prototype.localStorageSupported = function() {
    var a = "test",
    b = window.localStorage;
    try {
        return b.setItem(a, "1"),
        b.removeItem(a),
        !0
    } catch(c) {
        return ! 1
    }
},
LocalStorageManager.prototype.getBestScore = function() {
    return this.storage.getItem(this.bestScoreKey) || 0
},
LocalStorageManager.prototype.setBestScore = function(a) {
    this.storage.setItem(this.bestScoreKey, a)
},
LocalStorageManager.prototype.getGameState = function() {
    var a = this.storage.getItem(this.gameStateKey);
    return a ? JSON.parse(a) : null
},
LocalStorageManager.prototype.setGameState = function(a) {
    this.storage.setItem(this.gameStateKey, JSON.stringify(a))
},
LocalStorageManager.prototype.clearGameState = function() {
    this.storage.removeItem(this.gameStateKey)
},
GameManager.prototype.share = function() {
    cb_share()
},
GameManager.prototype.restart = function() {
    this.storageManager.clearGameState(),
    this.actuator.continueGame(),
    this.setup()
},
GameManager.prototype.keepPlaying = function() {
    this.keepPlaying = !0,
    this.actuator.continueGame(),
    this.over && (_nowbest = 0, this.setup())
},
GameManager.prototype.isGameTerminated = function() {
    return this.over || this.won && !this.keepPlaying
},
GameManager.prototype.setup = function() {
    var iBestScore = this.storageManager.getBestScore();
    var a = this.storageManager.getGameState();
    a ? (this.grid = new Grid(a.grid.size, a.grid.cells), _nowbest = this.score = a.score, this.over = a.over, this.won = a.won, this.keepPlaying = a.keepPlaying) : (this.grid = new Grid(this.size), this.score = 0, this.over = !1, this.won = !1, this.keepPlaying = !1, this.addStartTiles(), this.storageManager.setBestScore(iBestScore)),
    this.actuate()
},
GameManager.prototype.addStartTiles = function() {
    for (var a = 0; a < this.startTiles; a++) this.addRandomTile()
},
GameManager.prototype.addRandomTile = function() {
    if (this.grid.cellsAvailable()) {
        var a = Math.random() < .9 ? 2 : 4,
        b = new Tile(this.grid.randomAvailableCell(), a);
        this.grid.insertTile(b)
    }
},
GameManager.prototype.actuate = function() {
    parseInt(this.storageManager.getBestScore()) < parseInt(_nowbest) && this.storageManager.setBestScore(_nowbest),
    this.over ? (cb_gameover(_nowbest), this.storageManager.clearGameState()) : this.storageManager.setGameState(this.serialize()),
    this.actuator.actuate(this.grid, {
        score: this.score,
        over: this.over,
        won: this.won,
        bestScore: this.storageManager.getBestScore(),
        terminated: this.isGameTerminated()
    })
},
GameManager.prototype.serialize = function() {
    return {
        grid: this.grid.serialize(),
        score: this.score,
        over: this.over,
        won: this.won,
        keepPlaying: this.keepPlaying
    }
},
GameManager.prototype.prepareTiles = function() {
    this.grid.eachCell(function(a, b, c) {
        c && (c.mergedFrom = null, c.savePosition())
    })
},
GameManager.prototype.moveTile = function(a, b) {
    this.grid.cells[a.x][a.y] = null,
    this.grid.cells[b.x][b.y] = a,
    a.updatePosition(b)
},
GameManager.prototype.move = function(a) {
    window.touch_move = !0;
    var b = this;
    if (!this.isGameTerminated()) {
        var c, d, e = this.getVector(a),
        f = this.buildTraversals(e),
        g = !1;
        this.prepareTiles(),
        f.x.forEach(function(a) {
            f.y.forEach(function(f) {
                if (c = {
                    x: a,
                    y: f
                },
                d = b.grid.cellContent(c)) {
                    var h = b.findFarthestPosition(c, e),
                    i = b.grid.cellContent(h.next);
                    if (i && i.value === d.value && !i.mergedFrom) {
                        var j = new Tile(h.next, 2 * d.value);
                        j.mergedFrom = [d, i],
                        b.grid.insertTile(j),
                        b.grid.removeTile(d),
                        d.updatePosition(h.next),
                        b.score = _nowbest,
                        j.value === _my_goal && (b.won = !0),
                        8192 === j.value && (b.over = !0),
                        j.value > _nowbest && (_nowbest = j.value)
                    } else b.moveTile(d, h.farthest);
                    b.positionsEqual(c, d) || (g = !0)
                }
            })
        }),
        g && (this.addRandomTile(), this.movesAvailable() || (this.over = !0), this.actuate());
		
		moveStep();
    }
},
GameManager.prototype.getVector = function(a) {
    var b = {
        0 : {
            x: 0,
            y: -1
        },
        1 : {
            x: 1,
            y: 0
        },
        2 : {
            x: 0,
            y: 1
        },
        3 : {
            x: -1,
            y: 0
        }
    };
    return b[a]
},
GameManager.prototype.buildTraversals = function(a) {
    for (var b = {
        x: [],
        y: []
    },
    c = 0; c < this.size; c++) b.x.push(c),
    b.y.push(c);
    return 1 === a.x && (b.x = b.x.reverse()),
    1 === a.y && (b.y = b.y.reverse()),
    b
},
GameManager.prototype.findFarthestPosition = function(a, b) {
    var c;
    do c = a,
    a = {
        x: c.x + b.x,
        y: c.y + b.y
    };
    while (this.grid.withinBounds(a) && this.grid.cellAvailable(a));
    return {
        farthest: c,
        next: a
    }
},
GameManager.prototype.movesAvailable = function() {
    return this.grid.cellsAvailable() || this.tileMatchesAvailable()
},
GameManager.prototype.tileMatchesAvailable = function() {
    for (var a, b = this,
    c = 0; c < this.size; c++) for (var d = 0; d < this.size; d++) if (a = this.grid.cellContent({
        x: c,
        y: d
    })) for (var e = 0; 4 > e; e++) {
        var f = b.getVector(e),
        g = {
            x: c + f.x,
            y: d + f.y
        },
        h = b.grid.cellContent(g);
        if (h && h.value === a.value) return ! 0
    }
    return ! 1
},
GameManager.prototype.positionsEqual = function(a, b) {
    return a.x === b.x && a.y === b.y
};