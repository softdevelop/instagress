function ListingForm(e) {
    this.form_element = $(e), this.location_id = this.form_element.find("#listing_location_id, #user_listing_attributes_location_id"), this.other_location = this.form_element.find("#listing_other_location, #user_listing_attributes_other_location"), this.location_id.change(this.location_id_selected.bind(this)), this.location_id_selected(), this.form_element.find("#listing_in_us_yes, #user_listing_attributes_in_us_yes").change(this.in_us_changed.bind(this)), this.form_element.find("#listing_in_us_no, #user_listing_attributes_in_us_no").change(this.in_us_changed.bind(this)), this.in_us_changed()
}
function PortfolioImageUpload(e) {
    this.form = $("#" + e), this.spinner = this.form.find(".portfolio_spinner"), this.file_field = this.form.find(".portfolio_image_file");
    var t = this;
    this.file_field.change(function () {
        t.file_field.hide(), t.form.find(".upload-image").hide(), t.form.find(".portfolio_spinner").show(), t.form.trigger("submit.rails")
    }), this.form.find(".edit_description").click(function () {
        t.show_description_form()
    })
}
function merge() {
    for (var e = Array.prototype.slice.call(arguments), t = {}, i = 0; i < e.length; i++) for (var n in e[i]) t[n] = e[i][n];
    return t
}
window.Modernizr = function (e, t, i) {
    function n(e) {
        y.cssText = e
    }
    function s(e, t) {
        return n(_.join(e + ";") + (t || ""))
    }
    function o(e, t) {
        return typeof e === t
    }
    function r(e, t) {
        return !!~ ("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var n in e) {
            var s = e[n];
            if (!r(s, "-") && y[s] !== i) return "pfx" == t ? s : !0
        }
        return !1
    }
    function l(e, t, n) {
        for (var s in e) {
            var r = t[e[s]];
            if (r !== i) return n === !1 ? e[s] : o(r, "function") ? r.bind(n || t) : r
        }
        return !1
    }
    function c(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + x.join(n + " ") + n).split(" ");
        return o(t, "string") || o(t, "undefined") ? a(s, t) : (s = (e + " " + k.join(n + " ") + n).split(" "), l(s, t, i))
    }
    var u, h, d, p = "2.6.2",
        f = {},
        g = !0,
        m = t.documentElement,
        v = "modernizr",
        b = t.createElement(v),
        y = b.style,
        _ = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
        w = "Webkit Moz O ms",
        x = w.split(" "),
        k = w.toLowerCase().split(" "),
        C = {},
        D = [],
        S = D.slice,
        T = function (e, i, n, s) {
            var o, r, a, l, c = t.createElement("div"),
                u = t.body,
                h = u || t.createElement("body");
            if (parseInt(n, 10)) for (; n--;) a = t.createElement("div"), a.id = s ? s[n] : v + (n + 1), c.appendChild(a);
            return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (u ? c : h).innerHTML += o, h.appendChild(c), u || (h.style.background = "", h.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(h)), r = i(c, e), u ? c.parentNode.removeChild(c) : (h.parentNode.removeChild(h), m.style.overflow = l), !! r
        },
        M = {}.hasOwnProperty;
    d = o(M, "undefined") || o(M.call, "undefined") ?
    function (e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return M.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var i = S.call(arguments, 1),
            n = function () {
                if (this instanceof n) {
                    var s = function () {};
                    s.prototype = t.prototype;
                    var o = new s,
                        r = t.apply(o, i.concat(S.call(arguments)));
                    return Object(r) === r ? r : o
                }
                return t.apply(e, i.concat(S.call(arguments)))
            };
        return n
    }), C.rgba = function () {
        return n("background-color:rgba(150,255,150,.5)"), r(y.backgroundColor, "rgba")
    }, C.borderradius = function () {
        return c("borderRadius")
    }, C.boxshadow = function () {
        return c("boxShadow")
    }, C.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, C.opacity = function () {
        return s("opacity:.55"), /^0.55$/.test(y.opacity)
    }, C.fontface = function () {
        var e;
        return T('@font-face {font-family:"font";src:url("https://")}', function (i, n) {
            var s = t.getElementById("smodernizr"),
                o = s.sheet || s.styleSheet,
                r = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(r) && 0 === r.indexOf(n.split(" ")[0])
        }), e
    };
    for (var I in C) d(C, I) && (h = I.toLowerCase(), f[h] = C[I](), D.push((f[h] ? "" : "no-") + h));
    return f.addTest = function (e, t) {
        if ("object" == typeof e) for (var n in e) d(e, n) && f.addTest(n, e[n]);
        else {
            if (e = e.toLowerCase(), f[e] !== i) return f;
            t = "function" == typeof t ? t() : t, "undefined" != typeof g && g && (m.className += " " + (t ? "" : "no-") + e), f[e] = t
        }
        return f
    }, n(""), b = u = null, f._version = p, f._prefixes = _, f._domPrefixes = k, f._cssomPrefixes = x, f.testProp = function (e) {
        return a([e])
    }, f.testAllProps = c, f.testStyles = T, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + D.join(" ") : ""), f
}(this, this.document), function (e, t) {
    function i(e, t) {
        var i = e.createElement("p"),
            n = e.getElementsByTagName("head")[0] || e.documentElement;
        return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
    }
    function n() {
        var e = x.elements;
        return "string" == typeof e ? e.split(" ") : e
    }
    function s(e) {
        var t = w[e[y]];
        return t || (t = {}, _++, e[y] = _, w[_] = t), t
    }
    function o(e, i, n) {
        if (i || (i = t), g) return i.createElement(e);
        n || (n = s(i));
        var o;
        return o = n.cache[e] ? n.cache[e].cloneNode() : b.test(e) ? (n.cache[e] = n.createElem(e)).cloneNode() : n.createElem(e), o.canHaveChildren && !v.test(e) ? n.frag.appendChild(o) : o
    }
    function r(e, i) {
        if (e || (e = t), g) return e.createDocumentFragment();
        i = i || s(e);
        for (var o = i.frag.cloneNode(), r = 0, a = n(), l = a.length; l > r; r++) o.createElement(a[r]);
        return o
    }
    function a(e, t) {
        t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (i) {
            return x.shivMethods ? o(i, e, t) : t.createElem(i)
        }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/\w+/g, function (e) {
            return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
        }) + ");return n}")(x, t.frag)
    }
    function l(e) {
        e || (e = t);
        var n = s(e);
        return x.shivCSS && !f && !n.hasCSS && (n.hasCSS = !! i(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), g || a(e, n), e
    }
    function c(e) {
        for (var t, i = e.getElementsByTagName("*"), s = i.length, o = RegExp("^(?:" + n().join("|") + ")$", "i"), r = []; s--;) t = i[s], o.test(t.nodeName) && r.push(t.applyElement(u(t)));
        return r
    }
    function u(e) {
        for (var t, i = e.attributes, n = i.length, s = e.ownerDocument.createElement(C + ":" + e.nodeName); n--;) t = i[n], t.specified && s.setAttribute(t.nodeName, t.nodeValue);
        return s.style.cssText = e.style.cssText, s
    }
    function h(e) {
        for (var t, i = e.split("{"), s = i.length, o = RegExp("(^|[\\s,>+~])(" + n().join("|") + ")(?=[[\\s,>+~#.:]|$)", "gi"), r = "$1" + C + "\\:$2"; s--;) t = i[s] = i[s].split("}"), t[t.length - 1] = t[t.length - 1].replace(o, r), i[s] = t.join("}");
        return i.join("{")
    }
    function d(e) {
        for (var t = e.length; t--;) e[t].removeNode()
    }
    function p(e) {
        function t() {
            clearTimeout(r._removeSheetTimer), n && n.removeNode(!0), n = null
        }
        var n, o, r = s(e),
            a = e.namespaces,
            l = e.parentWindow;
        return !D || e.printShived ? e : ("undefined" == typeof a[C] && a.add(C), l.attachEvent("onbeforeprint", function () {
            t();
            for (var s, r, a, l = e.styleSheets, u = [], d = l.length, p = Array(d); d--;) p[d] = l[d];
            for (; a = p.pop();) if (!a.disabled && k.test(a.media)) {
                try {
                    s = a.imports, r = s.length
                } catch (f) {
                    r = 0
                }
                for (d = 0; r > d; d++) p.push(s[d]);
                try {
                    u.push(a.cssText)
                } catch (f) {}
            }
            u = h(u.reverse().join("")), o = c(e), n = i(e, u)
        }), l.attachEvent("onafterprint", function () {
            d(o), clearTimeout(r._removeSheetTimer), r._removeSheetTimer = setTimeout(t, 500)
        }), e.printShived = !0, e)
    }
    var f, g, m = e.html5 || {},
        v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        b = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
        y = "_html5shiv",
        _ = 0,
        w = {};
    !
    function () {
        try {
            var e = t.createElement("a");
            e.innerHTML = "<xyz></xyz>", f = "hidden" in e, g = 1 == e.childNodes.length ||
            function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
            }()
        } catch (i) {
            f = !0, g = !0
        }
    }();
    var x = {
        elements: m.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
        shivCSS: m.shivCSS !== !1,
        supportsUnknownElements: g,
        shivMethods: m.shivMethods !== !1,
        type: "default",
        shivDocument: l,
        createElement: o,
        createDocumentFragment: r
    };
    e.html5 = x, l(t);
    var k = /^$|\b(?:all|print)\b/,
        C = "html5shiv",
        D = !g &&
    function () {
        var i = t.documentElement;
        return "undefined" != typeof t.namespaces && "undefined" != typeof t.parentWindow && "undefined" != typeof i.applyElement && "undefined" != typeof i.removeNode && "undefined" != typeof e.attachEvent
    }();
    x.type += " print", x.shivPrint = p, p(t)
}(this, document), function (e, t, i) {
    function n(e) {
        return "[object Function]" == m.call(e)
    }
    function s(e) {
        return "string" == typeof e
    }
    function o() {}
    function r(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }
    function a() {
        var e = v.shift();
        b = 1, e ? e.t ? f(function () {
            ("c" == e.t ? d.injectCss : d.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), a()) : b = 0
    }
    function l(e, i, n, s, o, l, c) {
        function u(t) {
            if (!p && r(h.readyState) && (y.r = p = 1, !b && a(), h.onload = h.onreadystatechange = null, t)) {
                "img" != e && f(function () {
                    w.removeChild(h)
                }, 50);
                for (var n in S[i]) S[i].hasOwnProperty(n) && S[i][n].onload()
            }
        }
        var c = c || d.errorTimeout,
            h = t.createElement(e),
            p = 0,
            m = 0,
            y = {
                t: n,
                s: i,
                e: o,
                a: l,
                x: c
            };
        1 === S[i] && (m = 1, S[i] = []), "object" == e ? h.data = i : (h.src = i, h.type = e), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function () {
            u.call(this, m)
        }, v.splice(s, 0, y), "img" != e && (m || 2 === S[i] ? (w.insertBefore(h, _ ? null : g), f(u, c)) : S[i].push(h))
    }
    function c(e, t, i, n, o) {
        return b = 0, t = t || "j", s(e) ? l("c" == t ? k : x, e, t, this.i++, i, n, o) : (v.splice(this.i++, 0, e), 1 == v.length && a()), this
    }
    function u() {
        var e = d;
        return e.loader = {
            load: c,
            i: 0
        }, e
    }
    var h, d, p = t.documentElement,
        f = e.setTimeout,
        g = t.getElementsByTagName("script")[0],
        m = {}.toString,
        v = [],
        b = 0,
        y = "MozAppearance" in p.style,
        _ = y && !! t.createRange().compareNode,
        w = _ ? p : g.parentNode,
        p = e.opera && "[object Opera]" == m.call(e.opera),
        p = !! t.attachEvent && !p,
        x = y ? "object" : p ? "script" : "img",
        k = p ? "script" : x,
        C = Array.isArray ||
    function (e) {
        return "[object Array]" == m.call(e)
    }, D = [], S = {}, T = {
        timeout: function (e, t) {
            return t.length && (e.timeout = t[0]), e
        }
    };
    d = function (e) {
        function t(e) {
            var t, i, n, e = e.split("!"),
                s = D.length,
                o = e.pop(),
                r = e.length,
                o = {
                    url: o,
                    origUrl: o,
                    prefixes: e
                };
            for (i = 0; r > i; i++) n = e[i].split("="), (t = T[n.shift()]) && (o = t(o, n));
            for (i = 0; s > i; i++) o = D[i](o);
            return o
        }
        function r(e, s, o, r, a) {
            var l = t(e),
                c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (s && (s = n(s) ? s : s[e] || s[r] || s[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, s, o, r, a) : (S[l.url] ? l.noexec = !0 : S[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : i, l.noexec, l.attrs, l.timeout), (n(s) || n(c)) && o.load(function () {
                u(), s && s(l.origUrl, a, r), c && c(l.origUrl, a, r), S[l.url] = 2
            })))
        }
        function a(e, t) {
            function i(e, i) {
                if (e) {
                    if (s(e)) i || (h = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    }), r(e, h, t, 0, c);
                    else if (Object(e) === e) for (l in a = function () {
                        var t, i = 0;
                        for (t in e) e.hasOwnProperty(t) && i++;
                        return i
                    }(), e) e.hasOwnProperty(l) && (!i && !--a && (n(h) ? h = function () {
                        var e = [].slice.call(arguments);
                        d.apply(this, e), p()
                    } : h[l] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(d[l])), r(e[l], h, t, l, c))
                } else!i && p()
            }
            var a, l, c = !! e.test,
                u = e.load || e.both,
                h = e.callback || o,
                d = h,
                p = e.complete || o;
            i(c ? e.yep : e.nope, !! u), u && i(u)
        }
        var l, c, h = this.yepnope.loader;
        if (s(e)) r(e, 0, h, 0);
        else if (C(e)) for (l = 0; l < e.length; l++) c = e[l], s(c) ? r(c, 0, h, 0) : C(c) ? d(c) : Object(c) === c && a(c, h);
        else Object(e) === e && a(e, h)
    }, d.addPrefix = function (e, t) {
        T[e] = t
    }, d.addFilter = function (e) {
        D.push(e)
    }, d.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", h = function () {
        t.removeEventListener("DOMContentLoaded", h, 0), t.readyState = "complete"
    }, 0)), e.yepnope = u(), e.yepnope.executeStack = a, e.yepnope.injectJs = function (e, i, n, s, l, c) {
        var u, h, p = t.createElement("script"),
            s = s || d.errorTimeout;
        p.src = e;
        for (h in n) p.setAttribute(h, n[h]);
        i = c ? a : i || o, p.onreadystatechange = p.onload = function () {
            !u && r(p.readyState) && (u = 1, i(), p.onload = p.onreadystatechange = null)
        }, f(function () {
            u || (u = 1, i(1))
        }, s), l ? p.onload() : g.parentNode.insertBefore(p, g)
    }, e.yepnope.injectCss = function (e, i, n, s, r, l) {
        var c, s = t.createElement("link"),
            i = l ? a : i || o;
        s.href = e, s.rel = "stylesheet", s.type = "text/css";
        for (c in n) s.setAttribute(c, n[c]);
        r || (g.parentNode.insertBefore(s, g), f(i, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, Modernizr.addTest("lastchild", function () {
    return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function (e) {
        return e.lastChild.offsetWidth > e.firstChild.offsetWidth
    }, 2)
}),
/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */

function (e, t) {
    function i(e) {
        var t, i, n = O[e] = {};
        for (e = e.split(/\s+/), t = 0, i = e.length; i > t; t++) n[e[t]] = !0;
        return n
    }
    function n(e, i, n) {
        if (n === t && 1 === e.nodeType) {
            var s = "data-" + i.replace(F, "-$1").toLowerCase();
            if (n = e.getAttribute(s), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : $.isNumeric(n) ? +n : H.test(n) ? $.parseJSON(n) : n
                } catch (o) {}
                $.data(e, i, n)
            } else n = t
        }
        return n
    }
    function s(e) {
        for (var t in e) if (("data" !== t || !$.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }
    function o(e, t, i) {
        var n = t + "defer",
            s = t + "queue",
            o = t + "mark",
            r = $._data(e, n);
        !r || "queue" !== i && $._data(e, s) || "mark" !== i && $._data(e, o) || setTimeout(function () {
            $._data(e, s) || $._data(e, o) || ($.removeData(e, n, !0), r.fire())
        }, 0)
    }
    function r() {
        return !1
    }
    function a() {
        return !0
    }
    function l(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }
    function c(e, t, i) {
        if (t = t || 0, $.isFunction(t)) return $.grep(e, function (e, n) {
            var s = !! t.call(e, n, e);
            return s === i
        });
        if (t.nodeType) return $.grep(e, function (e) {
            return e === t === i
        });
        if ("string" == typeof t) {
            var n = $.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (ut.test(t)) return $.filter(t, n, !i);
            t = $.filter(t, n)
        }
        return $.grep(e, function (e) {
            return $.inArray(e, t) >= 0 === i
        })
    }
    function u(e) {
        var t = ft.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement) for (; t.length;) i.createElement(t.pop());
        return i
    }
    function h(e) {
        return $.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e, t) {
        if (1 === t.nodeType && $.hasData(e)) {
            var i, n, s, o = $._data(e),
                r = $._data(t, o),
                a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (i in a) for (n = 0, s = a[i].length; s > n; n++) $.event.add(t, i, a[i][n])
            }
            r.data && (r.data = $.extend({}, r.data))
        }
    }
    function p(e, t) {
        var i;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), i = t.nodeName.toLowerCase(), "object" === i ? t.outerHTML = e.outerHTML : "input" !== i || "checkbox" !== e.type && "radio" !== e.type ? "option" === i ? t.selected = e.defaultSelected : "input" === i || "textarea" === i ? t.defaultValue = e.defaultValue : "script" === i && t.text !== e.text && (t.text = e.text) : (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.removeAttribute($.expando), t.removeAttribute("_submit_attached"), t.removeAttribute("_change_attached"))
    }
    function f(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }
    function g(e) {
        ("checkbox" === e.type || "radio" === e.type) && (e.defaultChecked = e.checked)
    }
    function m(e) {
        var t = (e.nodeName || "").toLowerCase();
        "input" === t ? g(e) : "script" !== t && "undefined" != typeof e.getElementsByTagName && $.grep(e.getElementsByTagName("input"), g)
    }
    function v(e) {
        var t = E.createElement("div");
        return Mt.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }
    function b(e, t, i) {
        var n = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = "width" === t ? 1 : 0,
            o = 4;
        if (n > 0) {
            if ("border" !== i) for (; o > s; s += 2) i || (n -= parseFloat($.css(e, "padding" + Lt[s])) || 0), "margin" === i ? n += parseFloat($.css(e, i + Lt[s])) || 0 : n -= parseFloat($.css(e, "border" + Lt[s] + "Width")) || 0;
            return n + "px"
        }
        if (n = It(e, t), (0 > n || null == n) && (n = e.style[t]), Ot.test(n)) return n;
        if (n = parseFloat(n) || 0, i) for (; o > s; s += 2) n += parseFloat($.css(e, "padding" + Lt[s])) || 0, "padding" !== i && (n += parseFloat($.css(e, "border" + Lt[s] + "Width")) || 0), "margin" === i && (n += parseFloat($.css(e, i + Lt[s])) || 0);
        return n + "px"
    }
    function y(e) {
        return function (t, i) {
            if ("string" != typeof t && (i = t, t = "*"), $.isFunction(i)) for (var n, s, o, r = t.toLowerCase().split(ti), a = 0, l = r.length; l > a; a++) n = r[a], o = /^\+/.test(n), o && (n = n.substr(1) || "*"), s = e[n] = e[n] || [], s[o ? "unshift" : "push"](i)
        }
    }
    function _(e, i, n, s, o, r) {
        o = o || i.dataTypes[0], r = r || {}, r[o] = !0;
        for (var a, l = e[o], c = 0, u = l ? l.length : 0, h = e === oi; u > c && (h || !a); c++) a = l[c](i, n, s), "string" == typeof a && (!h || r[a] ? a = t : (i.dataTypes.unshift(a), a = _(e, i, n, s, a, r)));
        return !h && a || r["*"] || (a = _(e, i, n, s, "*", r)), a
    }
    function w(e, i) {
        var n, s, o = $.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== t && ((o[n] ? e : s || (s = {}))[n] = i[n]);
        s && $.extend(!0, e, s)
    }
    function x(e, t, i, n) {
        if ($.isArray(t)) $.each(t, function (t, s) {
            i || Bt.test(e) ? n(e, s) : x(e + "[" + ("object" == typeof s ? t : "") + "]", s, i, n)
        });
        else if (i || "object" !== $.type(t)) n(e, t);
        else for (var s in t) x(e + "[" + s + "]", t[s], i, n)
    }
    function k(e, i, n) {
        var s, o, r, a, l = e.contents,
            c = e.dataTypes,
            u = e.responseFields;
        for (o in u) o in n && (i[u[o]] = n[o]);
        for (;
        "*" === c[0];) c.shift(), s === t && (s = e.mimeType || i.getResponseHeader("content-type"));
        if (s) for (o in l) if (l[o] && l[o].test(s)) {
            c.unshift(o);
            break
        }
        if (c[0] in n) r = c[0];
        else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        return r ? (r !== c[0] && c.unshift(r), n[r]) : void 0
    }
    function C(e, i) {
        e.dataFilter && (i = e.dataFilter(i, e.dataType));
        var n, s, o, r, a, l, c, u, h = e.dataTypes,
            d = {},
            p = h.length,
            f = h[0];
        for (n = 1; p > n; n++) {
            if (1 === n) for (s in e.converters)"string" == typeof s && (d[s.toLowerCase()] = e.converters[s]);
            if (r = f, f = h[n], "*" === f) f = r;
            else if ("*" !== r && r !== f) {
                if (a = r + " " + f, l = d[a] || d["* " + f], !l) {
                    u = t;
                    for (c in d) if (o = c.split(" "), (o[0] === r || "*" === o[0]) && (u = d[o[1] + " " + f])) {
                        c = d[c], c === !0 ? l = u : u === !0 && (l = c);
                        break
                    }
                }
                l || u || $.error("No conversion from " + a.replace(" ", " to ")), l !== !0 && (i = l ? l(i) : u(c(i)))
            }
        }
        return i
    }
    function D() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function S() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function T() {
        return setTimeout(M, 0), vi = $.now()
    }
    function M() {
        vi = t
    }
    function I(e, t) {
        var i = {};
        return $.each(wi.concat.apply([], wi.slice(0, t)), function () {
            i[this] = e
        }), i
    }
    function P(e) {
        if (!bi[e]) {
            var t = E.body,
                i = $("<" + e + ">").appendTo(t),
                n = i.css("display");
            i.remove(), ("none" === n || "" === n) && (fi || (fi = E.createElement("iframe"), fi.frameBorder = fi.width = fi.height = 0), t.appendChild(fi), gi && fi.createElement || (gi = (fi.contentWindow || fi.contentDocument).document, gi.write(($.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), gi.close()), i = gi.createElement(e), gi.body.appendChild(i), n = $.css(i, "display"), t.removeChild(fi)), bi[e] = n
        }
        return bi[e]
    }
    function N(e) {
        return $.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var E = e.document,
        A = e.navigator,
        z = e.location,
        $ = function () {
            function i() {
                if (!a.isReady) {
                    try {
                        E.documentElement.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 1), void 0
                    }
                    a.ready()
                }
            }
            var n, s, o, r, a = function (e, t) {
                    return new a.fn.init(e, t, n)
                },
                l = e.jQuery,
                c = e.$,
                u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                h = /\S/,
                d = /^\s+/,
                p = /\s+$/,
                f = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                g = /^[\],:{}\s]*$/,
                m = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                v = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                b = /(?:^|:|,)(?:\s*\[)+/g,
                y = /(webkit)[ \/]([\w.]+)/,
                _ = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                w = /(msie) ([\w.]+)/,
                x = /(mozilla)(?:.*? rv:([\w.]+))?/,
                k = /-([a-z]|[0-9])/gi,
                C = /^-ms-/,
                D = function (e, t) {
                    return (t + "").toUpperCase()
                },
                S = A.userAgent,
                T = Object.prototype.toString,
                M = Object.prototype.hasOwnProperty,
                I = Array.prototype.push,
                P = Array.prototype.slice,
                N = String.prototype.trim,
                z = Array.prototype.indexOf,
                $ = {};
            return a.fn = a.prototype = {
                constructor: a,
                init: function (e, i, n) {
                    var s, o, r, l;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("body" === e && !i && E.body) return this.context = E, this[0] = E.body, this.selector = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (s = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : u.exec(e), !s || !s[1] && i) return !i || i.jquery ? (i || n).find(e) : this.constructor(i).find(e);
                        if (s[1]) return i = i instanceof a ? i[0] : i, l = i ? i.ownerDocument || i : E, r = f.exec(e), r ? a.isPlainObject(i) ? (e = [E.createElement(r[1])], a.fn.attr.call(e, i, !0)) : e = [l.createElement(r[1])] : (r = a.buildFragment([s[1]], [l]), e = (r.cacheable ? a.clone(r.fragment) : r.fragment).childNodes), a.merge(this, e);
                        if (o = E.getElementById(s[2]), o && o.parentNode) {
                            if (o.id !== s[2]) return n.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = E, this.selector = e, this
                    }
                    return a.isFunction(e) ? n.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), a.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return P.call(this, 0)
                },
                get: function (e) {
                    return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, i) {
                    var n = this.constructor();
                    return a.isArray(e) ? I.apply(n, e) : a.merge(n, e), n.prevObject = this, n.context = this.context, "find" === t ? n.selector = this.selector + (this.selector ? " " : "") + i : t && (n.selector = this.selector + "." + t + "(" + i + ")"), n
                },
                each: function (e, t) {
                    return a.each(this, e, t)
                },
                ready: function (e) {
                    return a.bindReady(), o.add(e), this
                },
                eq: function (e) {
                    return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(P.apply(this, arguments), "slice", P.call(arguments).join(","))
                },
                map: function (e) {
                    return this.pushStack(a.map(this, function (t, i) {
                        return e.call(t, i, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: I,
                sort: [].sort,
                splice: [].splice
            }, a.fn.init.prototype = a.fn, a.extend = a.fn.extend = function () {
                var e, i, n, s, o, r, l = arguments[0] || {},
                    c = 1,
                    u = arguments.length,
                    h = !1;
                for ("boolean" == typeof l && (h = l, l = arguments[1] || {}, c = 2), "object" == typeof l || a.isFunction(l) || (l = {}), u === c && (l = this, --c); u > c; c++) if (null != (e = arguments[c])) for (i in e) n = l[i], s = e[i], l !== s && (h && s && (a.isPlainObject(s) || (o = a.isArray(s))) ? (o ? (o = !1, r = n && a.isArray(n) ? n : []) : r = n && a.isPlainObject(n) ? n : {}, l[i] = a.extend(h, r, s)) : s !== t && (l[i] = s));
                return l
            }, a.extend({
                noConflict: function (t) {
                    return e.$ === a && (e.$ = c), t && e.jQuery === a && (e.jQuery = l), a
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? a.readyWait++ : a.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 && !--a.readyWait || e !== !0 && !a.isReady) {
                        if (!E.body) return setTimeout(a.ready, 1);
                        if (a.isReady = !0, e !== !0 && --a.readyWait > 0) return;
                        o.fireWith(E, [a]), a.fn.trigger && a(E).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!o) {
                        if (o = a.Callbacks("once memory"), "complete" === E.readyState) return setTimeout(a.ready, 1);
                        if (E.addEventListener) E.addEventListener("DOMContentLoaded", r, !1), e.addEventListener("load", a.ready, !1);
                        else if (E.attachEvent) {
                            E.attachEvent("onreadystatechange", r), e.attachEvent("onload", a.ready);
                            var t = !1;
                            try {
                                t = null == e.frameElement
                            } catch (n) {}
                            E.documentElement.doScroll && t && i()
                        }
                    }
                },
                isFunction: function (e) {
                    return "function" === a.type(e)
                },
                isArray: Array.isArray ||
                function (e) {
                    return "array" === a.type(e)
                },
                isWindow: function (e) {
                    return null != e && e == e.window
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return null == e ? String(e) : $[T.call(e)] || "object"
                },
                isPlainObject: function (e) {
                    if (!e || "object" !== a.type(e) || e.nodeType || a.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !M.call(e, "constructor") && !M.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (i) {
                        return !1
                    }
                    var n;
                    for (n in e);
                    return n === t || M.call(e, n)
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseJSON: function (t) {
                    return "string" == typeof t && t ? (t = a.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : g.test(t.replace(m, "@").replace(v, "]").replace(b, "")) ? new Function("return " + t)() : (a.error("Invalid JSON: " + t), void 0)) : null
                },
                parseXML: function (i) {
                    if ("string" != typeof i || !i) return null;
                    var n, s;
                    try {
                        e.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                    } catch (o) {
                        n = t
                    }
                    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || a.error("Invalid XML: " + i), n
                },
                noop: function () {},
                globalEval: function (t) {
                    t && h.test(t) && (e.execScript ||
                    function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(C, "ms-").replace(k, D)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (e, i, n) {
                    var s, o = 0,
                        r = e.length,
                        l = r === t || a.isFunction(e);
                    if (n) if (l) {
                        for (s in e) if (i.apply(e[s], n) === !1) break
                    } else for (; r > o && i.apply(e[o++], n) !== !1;);
                    else if (l) {
                        for (s in e) if (i.call(e[s], s, e[s]) === !1) break
                    } else for (; r > o && i.call(e[o], o, e[o++]) !== !1;);
                    return e
                },
                trim: N ?
                function (e) {
                    return null == e ? "" : N.call(e)
                } : function (e) {
                    return null == e ? "" : e.toString().replace(d, "").replace(p, "")
                },
                makeArray: function (e, t) {
                    var i = t || [];
                    if (null != e) {
                        var n = a.type(e);
                        null == e.length || "string" === n || "function" === n || "regexp" === n || a.isWindow(e) ? I.call(i, e) : a.merge(i, e)
                    }
                    return i
                },
                inArray: function (e, t, i) {
                    var n;
                    if (t) {
                        if (z) return z.call(t, e, i);
                        for (n = t.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++) if (i in t && t[i] === e) return i
                    }
                    return -1
                },
                merge: function (e, i) {
                    var n = e.length,
                        s = 0;
                    if ("number" == typeof i.length) for (var o = i.length; o > s; s++) e[n++] = i[s];
                    else for (; i[s] !== t;) e[n++] = i[s++];
                    return e.length = n, e
                },
                grep: function (e, t, i) {
                    var n, s = [];
                    i = !! i;
                    for (var o = 0, r = e.length; r > o; o++) n = !! t(e[o], o), i !== n && s.push(e[o]);
                    return s
                },
                map: function (e, i, n) {
                    var s, o, r = [],
                        l = 0,
                        c = e.length,
                        u = e instanceof a || c !== t && "number" == typeof c && (c > 0 && e[0] && e[c - 1] || 0 === c || a.isArray(e));
                    if (u) for (; c > l; l++) s = i(e[l], l, n), null != s && (r[r.length] = s);
                    else for (o in e) s = i(e[o], o, n), null != s && (r[r.length] = s);
                    return r.concat.apply([], r)
                },
                guid: 1,
                proxy: function (e, i) {
                    if ("string" == typeof i) {
                        var n = e[i];
                        i = e, e = n
                    }
                    if (!a.isFunction(e)) return t;
                    var s = P.call(arguments, 2),
                        o = function () {
                            return e.apply(i, s.concat(P.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || a.guid++, o
                },
                access: function (e, i, n, s, o, r, l) {
                    var c, u = null == n,
                        h = 0,
                        d = e.length;
                    if (n && "object" == typeof n) {
                        for (h in n) a.access(e, i, h, n[h], 1, r, s);
                        o = 1
                    } else if (s !== t) {
                        if (c = l === t && a.isFunction(s), u && (c ? (c = i, i = function (e, t, i) {
                            return c.call(a(e), i)
                        }) : (i.call(e, s), i = null)), i) for (; d > h; h++) i(e[h], n, c ? s.call(e[h], h, i(e[h], n)) : s, l);
                        o = 1
                    }
                    return o ? e : u ? i.call(e) : d ? i(e[0], n) : r
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = y.exec(e) || _.exec(e) || w.exec(e) || e.indexOf("compatible") < 0 && x.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function e(t, i) {
                        return new e.fn.init(t, i)
                    }
                    a.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (i, n) {
                        return n && n instanceof a && !(n instanceof e) && (n = e(n)), a.fn.init.call(this, i, n, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(E);
                    return e
                },
                browser: {}
            }), a.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                $["[object " + t + "]"] = t.toLowerCase()
            }), s = a.uaMatch(S), s.browser && (a.browser[s.browser] = !0, a.browser.version = s.version), a.browser.webkit && (a.browser.safari = !0), h.test(" ") && (d = /^[\s\xA0]+/, p = /[\s\xA0]+$/), n = a(E), E.addEventListener ? r = function () {
                E.removeEventListener("DOMContentLoaded", r, !1), a.ready()
            } : E.attachEvent && (r = function () {
                "complete" === E.readyState && (E.detachEvent("onreadystatechange", r), a.ready())
            }), a
        }(),
        O = {};
    $.Callbacks = function (e) {
        e = e ? O[e] || i(e) : {};
        var n, s, o, r, a, l, c = [],
            u = [],
            h = function (t) {
                var i, n, s, o;
                for (i = 0, n = t.length; n > i; i++) s = t[i], o = $.type(s), "array" === o ? h(s) : "function" === o && (e.unique && p.has(s) || c.push(s))
            },
            d = function (t, i) {
                for (i = i || [], n = !e.memory || [t, i], s = !0, o = !0, l = r || 0, r = 0, a = c.length; c && a > l; l++) if (c[l].apply(t, i) === !1 && e.stopOnFalse) {
                    n = !0;
                    break
                }
                o = !1, c && (e.once ? n === !0 ? p.disable() : c = [] : u && u.length && (n = u.shift(), p.fireWith(n[0], n[1])))
            },
            p = {
                add: function () {
                    if (c) {
                        var e = c.length;
                        h(arguments), o ? a = c.length : n && n !== !0 && (r = e, d(n[0], n[1]))
                    }
                    return this
                },
                remove: function () {
                    if (c) for (var t = arguments, i = 0, n = t.length; n > i; i++) for (var s = 0; s < c.length && (t[i] !== c[s] || (o && a >= s && (a--, l >= s && l--), c.splice(s--, 1), !e.unique)); s++);
                    return this
                },
                has: function (e) {
                    if (c) for (var t = 0, i = c.length; i > t; t++) if (e === c[t]) return !0;
                    return !1
                },
                empty: function () {
                    return c = [], this
                },
                disable: function () {
                    return c = u = n = t, this
                },
                disabled: function () {
                    return !c
                },
                lock: function () {
                    return u = t, n && n !== !0 || p.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (t, i) {
                    return u && (o ? e.once || u.push([t, i]) : e.once && n || d(t, i)), this
                },
                fire: function () {
                    return p.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!s
                }
            };
        return p
    };
    var j = [].slice;
    $.extend({
        Deferred: function (e) {
            var t, i = $.Callbacks("once memory"),
                n = $.Callbacks("once memory"),
                s = $.Callbacks("memory"),
                o = "pending",
                r = {
                    resolve: i,
                    reject: n,
                    notify: s
                },
                a = {
                    done: i.add,
                    fail: n.add,
                    progress: s.add,
                    state: function () {
                        return o
                    },
                    isResolved: i.fired,
                    isRejected: n.fired,
                    then: function (e, t, i) {
                        return l.done(e).fail(t).progress(i), this
                    },
                    always: function () {
                        return l.done.apply(l, arguments).fail.apply(l, arguments), this
                    },
                    pipe: function (e, t, i) {
                        return $.Deferred(function (n) {
                            $.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [i, "notify"]
                            }, function (e, t) {
                                var i, s = t[0],
                                    o = t[1];
                                $.isFunction(s) ? l[e](function () {
                                    i = s.apply(this, arguments), i && $.isFunction(i.promise) ? i.promise().then(n.resolve, n.reject, n.notify) : n[o + "With"](this === l ? n : this, [i])
                                }) : l[e](n[o])
                            })
                        }).promise()
                    },
                    promise: function (e) {
                        if (null == e) e = a;
                        else for (var t in a) e[t] = a[t];
                        return e
                    }
                },
                l = a.promise({});
            for (t in r) l[t] = r[t].fire, l[t + "With"] = r[t].fireWith;
            return l.done(function () {
                o = "resolved"
            }, n.disable, s.lock).fail(function () {
                o = "rejected"
            }, i.disable, s.lock), e && e.call(l, l), l
        },
        when: function (e) {
            function t(e) {
                return function (t) {
                    n[e] = arguments.length > 1 ? j.call(arguments, 0) : t, --a || l.resolveWith(l, n)
                }
            }
            function i(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? j.call(arguments, 0) : t, l.notifyWith(c, r)
                }
            }
            var n = j.call(arguments, 0),
                s = 0,
                o = n.length,
                r = new Array(o),
                a = o,
                l = 1 >= o && e && $.isFunction(e.promise) ? e : $.Deferred(),
                c = l.promise();
            if (o > 1) {
                for (; o > s; s++) n[s] && n[s].promise && $.isFunction(n[s].promise) ? n[s].promise().then(t(s), l.reject, i(s)) : --a;
                a || l.resolveWith(l, n)
            } else l !== e && l.resolveWith(l, o ? [e] : []);
            return c
        }
    }), $.support = function () {
        var t, i, n, s, o, r, a, l, c, u, h, d = E.createElement("div");
        if (E.documentElement, d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", i = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !i || !i.length || !n) return {};
        s = E.createElement("select"), o = s.appendChild(E.createElement("option")), r = d.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === d.firstChild.nodeType,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !! d.getElementsByTagName("link").length,
            style: /top/.test(n.getAttribute("style")),
            hrefNormalized: "/a" === n.getAttribute("href"),
            opacity: /^0.55/.test(n.style.opacity),
            cssFloat: !! n.style.cssFloat,
            checkOn: "on" === r.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== d.className,
            enctype: !! E.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== E.createElement("nav").cloneNode(!0).outerHTML,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            pixelMargin: !0
        }, $.boxModel = t.boxModel = "CSS1Compat" === E.compatMode, r.checked = !0, t.noCloneChecked = r.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete d.test
        } catch (p) {
            t.deleteExpando = !1
        }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).fireEvent("onclick")), r = E.createElement("input"), r.value = "t", r.setAttribute("type", "radio"), t.radioValue = "t" === r.value, r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), d.appendChild(r), a = E.createDocumentFragment(), a.appendChild(d.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = r.checked, a.removeChild(r), a.appendChild(d), d.attachEvent) for (u in {
            submit: 1,
            change: 1,
            focusin: 1
        }) c = "on" + u, h = c in d, h || (d.setAttribute(c, "return;"), h = "function" == typeof d[c]), t[u + "Bubbles"] = h;
        return a.removeChild(d), a = s = o = d = r = null, $(function () {
            var i, n, s, o, r, a, c, u, p, f, g, m, v = E.getElementsByTagName("body")[0];
            v && (c = 1, m = "padding:0;margin:0;border:", f = "position:absolute;top:0;left:0;width:1px;height:1px;", g = m + "0;visibility:hidden;", u = "style='" + f + m + "5px solid #000;", p = "<div " + u + "display:block;'><div style='" + m + "0;display:block;overflow:hidden;'></div></div>" + "<table " + u + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", i = E.createElement("div"), i.style.cssText = g + "width:0;height:0;position:static;top:0;margin-top:" + c + "px", v.insertBefore(i, v.firstChild), d = E.createElement("div"), i.appendChild(d), d.innerHTML = "<table><tr><td style='" + m + "0;display:none'></td><td>t</td></tr></table>", l = d.getElementsByTagName("td"), h = 0 === l[0].offsetHeight, l[0].style.display = "", l[1].style.display = "none", t.reliableHiddenOffsets = h && 0 === l[0].offsetHeight, e.getComputedStyle && (d.innerHTML = "", a = E.createElement("div"), a.style.width = "0", a.style.marginRight = "0", d.style.width = "2px", d.appendChild(a), t.reliableMarginRight = 0 === (parseInt((e.getComputedStyle(a, null) || {
                marginRight: 0
            }).marginRight, 10) || 0)), "undefined" != typeof d.style.zoom && (d.innerHTML = "", d.style.width = d.style.padding = "1px", d.style.border = 0, d.style.overflow = "hidden", d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.style.overflow = "visible", d.innerHTML = "<div style='width:5px;'></div>", t.shrinkWrapBlocks = 3 !== d.offsetWidth), d.style.cssText = f + g, d.innerHTML = p, n = d.firstChild, s = n.firstChild, o = n.nextSibling.firstChild.firstChild, r = {
                doesNotAddBorder: 5 !== s.offsetTop,
                doesAddBorderForTableAndCells: 5 === o.offsetTop
            }, s.style.position = "fixed", s.style.top = "20px", r.fixedPosition = 20 === s.offsetTop || 15 === s.offsetTop, s.style.position = s.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", r.subtractsBorderForOverflowNotVisible = -5 === s.offsetTop, r.doesNotIncludeMarginInBodyOffset = v.offsetTop !== c, e.getComputedStyle && (d.style.marginTop = "1%", t.pixelMargin = "1%" !== (e.getComputedStyle(d, null) || {
                marginTop: 0
            }).marginTop), "undefined" != typeof i.style.zoom && (i.style.zoom = 1), v.removeChild(i), a = d = i = null, $.extend(t, r))
        }), t
    }();
    var H = /^(?:\{.*\}|\[.*\])$/,
        F = /([A-Z])/g;
    $.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + ($.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? $.cache[e[$.expando]] : e[$.expando], !! e && !s(e)
        },
        data: function (e, i, n, s) {
            if ($.acceptData(e)) {
                var o, r, a, l = $.expando,
                    c = "string" == typeof i,
                    u = e.nodeType,
                    h = u ? $.cache : e,
                    d = u ? e[l] : e[l] && l,
                    p = "events" === i;
                if (d && h[d] && (p || s || h[d].data) || !c || n !== t) return d || (u ? e[l] = d = ++$.uuid : d = l), h[d] || (h[d] = {}, u || (h[d].toJSON = $.noop)), ("object" == typeof i || "function" == typeof i) && (s ? h[d] = $.extend(h[d], i) : h[d].data = $.extend(h[d].data, i)), o = r = h[d], s || (r.data || (r.data = {}), r = r.data), n !== t && (r[$.camelCase(i)] = n), p && !r[i] ? o.events : (c ? (a = r[i], null == a && (a = r[$.camelCase(i)])) : a = r, a)
            }
        },
        removeData: function (e, t, i) {
            if ($.acceptData(e)) {
                var n, o, r, a = $.expando,
                    l = e.nodeType,
                    c = l ? $.cache : e,
                    u = l ? e[a] : a;
                if (c[u]) {
                    if (t && (n = i ? c[u] : c[u].data)) {
                        $.isArray(t) || (t in n ? t = [t] : (t = $.camelCase(t), t = t in n ? [t] : t.split(" ")));
                        for (o = 0, r = t.length; r > o; o++) delete n[t[o]];
                        if (!(i ? s : $.isEmptyObject)(n)) return
                    }(i || (delete c[u].data, s(c[u]))) && ($.support.deleteExpando || !c.setInterval ? delete c[u] : c[u] = null, l && ($.support.deleteExpando ? delete e[a] : e.removeAttribute ? e.removeAttribute(a) : e[a] = null))
                }
            }
        },
        _data: function (e, t, i) {
            return $.data(e, t, i, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = $.noData[e.nodeName.toLowerCase()];
                if (t) return !(t === !0 || e.getAttribute("classid") !== t)
            }
            return !0
        }
    }), $.fn.extend({
        data: function (e, i) {
            var s, o, r, a, l, c = this[0],
                u = 0,
                h = null;
            if (e === t) {
                if (this.length && (h = $.data(c), 1 === c.nodeType && !$._data(c, "parsedAttrs"))) {
                    for (r = c.attributes, l = r.length; l > u; u++) a = r[u].name, 0 === a.indexOf("data-") && (a = $.camelCase(a.substring(5)), n(c, a, h[a]));
                    $._data(c, "parsedAttrs", !0)
                }
                return h
            }
            return "object" == typeof e ? this.each(function () {
                $.data(this, e)
            }) : (s = e.split(".", 2), s[1] = s[1] ? "." + s[1] : "", o = s[1] + "!", $.access(this, function (i) {
                return i === t ? (h = this.triggerHandler("getData" + o, [s[0]]), h === t && c && (h = $.data(c, e), h = n(c, e, h)), h === t && s[1] ? this.data(s[0]) : h) : (s[1] = i, this.each(function () {
                    var t = $(this);
                    t.triggerHandler("setData" + o, s), $.data(this, e, i), t.triggerHandler("changeData" + o, s)
                }), void 0)
            }, null, i, arguments.length > 1, null, !1))
        },
        removeData: function (e) {
            return this.each(function () {
                $.removeData(this, e)
            })
        }
    }), $.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", $._data(e, t, ($._data(e, t) || 0) + 1))
        },
        _unmark: function (e, t, i) {
            if (e !== !0 && (i = t, t = e, e = !1), t) {
                i = i || "fx";
                var n = i + "mark",
                    s = e ? 0 : ($._data(t, n) || 1) - 1;
                s ? $._data(t, n, s) : ($.removeData(t, n, !0), o(t, i, "mark"))
            }
        },
        queue: function (e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = $._data(e, t), i && (!n || $.isArray(i) ? n = $._data(e, t, $.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var i = $.queue(e, t),
                n = i.shift(),
                s = {};
            "inprogress" === n && (n = i.shift()), n && ("fx" === t && i.unshift("inprogress"), $._data(e, t + ".run", s), n.call(e, function () {
                $.dequeue(e, t)
            }, s)), i.length || ($.removeData(e, t + "queue " + t + ".run", !0), o(e, t, "queue"))
        }
    }), $.fn.extend({
        queue: function (e, i) {
            var n = 2;
            return "string" != typeof e && (i = e, e = "fx", n--), arguments.length < n ? $.queue(this[0], e) : i === t ? this : this.each(function () {
                var t = $.queue(this, e, i);
                "fx" === e && "inprogress" !== t[0] && $.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                $.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = $.fx ? $.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, i) {
                var n = setTimeout(t, e);
                i.stop = function () {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, i) {
            function n() {
                --l || o.resolveWith(r, [r])
            }
            "string" != typeof e && (i = e, e = t), e = e || "fx";
            for (var s, o = $.Deferred(), r = this, a = r.length, l = 1, c = e + "defer", u = e + "queue", h = e + "mark"; a--;)(s = $.data(r[a], c, t, !0) || ($.data(r[a], u, t, !0) || $.data(r[a], h, t, !0)) && $.data(r[a], c, $.Callbacks("once memory"), !0)) && (l++, s.add(n));
            return n(), o.promise(i)
        }
    });
    var L, W, R, q = /[\n\t\r]/g,
        B = /\s+/,
        Y = /\r/g,
        X = /^(?:button|input)$/i,
        U = /^(?:button|input|object|select|textarea)$/i,
        K = /^a(?:rea)?$/i,
        Q = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = $.support.getSetAttribute;
    $.fn.extend({
        attr: function (e, t) {
            return $.access(this, $.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                $.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return $.access(this, $.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return e = $.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (i) {}
            })
        },
        addClass: function (e) {
            var t, i, n, s, o, r, a;
            if ($.isFunction(e)) return this.each(function (t) {
                $(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e) for (t = e.split(B), i = 0, n = this.length; n > i; i++) if (s = this[i], 1 === s.nodeType) if (s.className || 1 !== t.length) {
                for (o = " " + s.className + " ", r = 0, a = t.length; a > r; r++)~o.indexOf(" " + t[r] + " ") || (o += t[r] + " ");
                s.className = $.trim(o)
            } else s.className = e;
            return this
        },
        removeClass: function (e) {
            var i, n, s, o, r, a, l;
            if ($.isFunction(e)) return this.each(function (t) {
                $(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t) for (i = (e || "").split(B), n = 0, s = this.length; s > n; n++) if (o = this[n], 1 === o.nodeType && o.className) if (e) {
                for (r = (" " + o.className + " ").replace(q, " "), a = 0, l = i.length; l > a; a++) r = r.replace(" " + i[a] + " ", " ");
                o.className = $.trim(r)
            } else o.className = "";
            return this
        },
        toggleClass: function (e, t) {
            var i = typeof e,
                n = "boolean" == typeof t;
            return $.isFunction(e) ? this.each(function (i) {
                $(this).toggleClass(e.call(this, i, this.className, t), t)
            }) : this.each(function () {
                if ("string" === i) for (var s, o = 0, r = $(this), a = t, l = e.split(B); s = l[o++];) a = n ? a : !r.hasClass(s), r[a ? "addClass" : "removeClass"](s);
                else("undefined" === i || "boolean" === i) && (this.className && $._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : $._data(this, "__className__") || "")
            })
        },
        hasClass: function (e) {
            for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++) if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(q, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            var i, n, s, o = this[0]; {
                if (arguments.length) return s = $.isFunction(e), this.each(function (n) {
                    var o, r = $(this);
                    1 === this.nodeType && (o = s ? e.call(this, n, r.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : $.isArray(o) && (o = $.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), i = $.valHooks[this.type] || $.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return i = $.valHooks[o.type] || $.valHooks[o.nodeName.toLowerCase()], i && "get" in i && (n = i.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(Y, "") : null == n ? "" : n)
            }
        }
    }), $.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, i, n, s, o = e.selectedIndex,
                        r = [],
                        a = e.options,
                        l = "select-one" === e.type;
                    if (0 > o) return null;
                    for (i = l ? o : 0, n = l ? o + 1 : a.length; n > i; i++) if (s = a[i], !(!s.selected || ($.support.optDisabled ? s.disabled : null !== s.getAttribute("disabled")) || s.parentNode.disabled && $.nodeName(s.parentNode, "optgroup"))) {
                        if (t = $(s).val(), l) return t;
                        r.push(t)
                    }
                    return l && !r.length && a.length ? $(a[o]).val() : r
                },
                set: function (e, t) {
                    var i = $.makeArray(t);
                    return $(e).find("option").each(function () {
                        this.selected = $.inArray($(this).val(), i) >= 0
                    }), i.length || (e.selectedIndex = -1), i
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (e, i, n, s) {
            var o, r, a, l = e.nodeType;
            if (e && 3 !== l && 8 !== l && 2 !== l) return s && i in $.attrFn ? $(e)[i](n) : "undefined" == typeof e.getAttribute ? $.prop(e, i, n) : (a = 1 !== l || !$.isXMLDoc(e), a && (i = i.toLowerCase(), r = $.attrHooks[i] || (Q.test(i) ? W : L)), n !== t ? null === n ? ($.removeAttr(e, i), void 0) : r && "set" in r && a && (o = r.set(e, n, i)) !== t ? o : (e.setAttribute(i, "" + n), n) : r && "get" in r && a && null !== (o = r.get(e, i)) ? o : (o = e.getAttribute(i), null === o ? t : o))
        },
        removeAttr: function (e, t) {
            var i, n, s, o, r, a = 0;
            if (t && 1 === e.nodeType) for (n = t.toLowerCase().split(B), o = n.length; o > a; a++) s = n[a], s && (i = $.propFix[s] || s, r = Q.test(s), r || $.attr(e, s, ""), e.removeAttribute(V ? s : i), r && i in e && (e[i] = !1))
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (X.test(e.nodeName) && e.parentNode) $.error("type property can't be changed");
                    else if (!$.support.radioValue && "radio" === t && $.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return L && $.nodeName(e, "button") ? L.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, i) {
                    return L && $.nodeName(e, "button") ? L.set(e, t, i) : (e.value = t, void 0)
                }
            }
        },
        propFix: {
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
        prop: function (e, i, n) {
            var s, o, r, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !$.isXMLDoc(e), r && (i = $.propFix[i] || i, o = $.propHooks[i]), n !== t ? o && "set" in o && (s = o.set(e, n, i)) !== t ? s : e[i] = n : o && "get" in o && null !== (s = o.get(e, i)) ? s : e[i]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var i = e.getAttributeNode("tabindex");
                    return i && i.specified ? parseInt(i.value, 10) : U.test(e.nodeName) || K.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), $.attrHooks.tabindex = $.propHooks.tabIndex, W = {
        get: function (e, i) {
            var n, s = $.prop(e, i);
            return s === !0 || "boolean" != typeof s && (n = e.getAttributeNode(i)) && n.nodeValue !== !1 ? i.toLowerCase() : t
        },
        set: function (e, t, i) {
            var n;
            return t === !1 ? $.removeAttr(e, i) : (n = $.propFix[i] || i, n in e && (e[n] = !0), e.setAttribute(i, i.toLowerCase())), i
        }
    }, V || (R = {
        name: !0,
        id: !0,
        coords: !0
    }, L = $.valHooks.button = {
        get: function (e, i) {
            var n;
            return n = e.getAttributeNode(i), n && (R[i] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : t
        },
        set: function (e, t, i) {
            var n = e.getAttributeNode(i);
            return n || (n = E.createAttribute(i), e.setAttributeNode(n)), n.nodeValue = t + ""
        }
    }, $.attrHooks.tabindex.set = L.set, $.each(["width", "height"], function (e, t) {
        $.attrHooks[t] = $.extend($.attrHooks[t], {
            set: function (e, i) {
                return "" === i ? (e.setAttribute(t, "auto"), i) : void 0
            }
        })
    }), $.attrHooks.contenteditable = {
        get: L.get,
        set: function (e, t, i) {
            "" === t && (t = "false"), L.set(e, t, i)
        }
    }), $.support.hrefNormalized || $.each(["href", "src", "width", "height"], function (e, i) {
        $.attrHooks[i] = $.extend($.attrHooks[i], {
            get: function (e) {
                var n = e.getAttribute(i, 2);
                return null === n ? t : n
            }
        })
    }), $.support.style || ($.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), $.support.optSelected || ($.propHooks.selected = $.extend($.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), $.support.enctype || ($.propFix.enctype = "encoding"), $.support.checkOn || $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), $.each(["radio", "checkbox"], function () {
        $.valHooks[this] = $.extend($.valHooks[this], {
            set: function (e, t) {
                return $.isArray(t) ? e.checked = $.inArray($(e).val(), t) >= 0 : void 0
            }
        })
    });
    var G = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*)?(?:\.(.+))?$/,
        Z = /(?:^|\s)hover(\.\S+)?\b/,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        it = /^(?:focusinfocus|focusoutblur)$/,
        nt = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        st = function (e) {
            var t = nt.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        },
        ot = function (e, t) {
            var i = e.attributes || {};
            return !(t[1] && e.nodeName.toLowerCase() !== t[1] || t[2] && (i.id || {}).value !== t[2] || t[3] && !t[3].test((i["class"] || {}).value))
        },
        rt = function (e) {
            return $.event.special.hover ? e : e.replace(Z, "mouseenter$1 mouseleave$1")
        };
    $.event = {
        add: function (e, i, n, s, o) {
            var r, a, l, c, u, h, d, p, f, g, m;
            if (3 !== e.nodeType && 8 !== e.nodeType && i && n && (r = $._data(e))) {
                for (n.handler && (f = n, n = f.handler, o = f.selector), n.guid || (n.guid = $.guid++), l = r.events, l || (r.events = l = {}), a = r.handle, a || (r.handle = a = function (e) {
                    return "undefined" == typeof $ || e && $.event.triggered === e.type ? t : $.event.dispatch.apply(a.elem, arguments)
                }, a.elem = e), i = $.trim(rt(i)).split(" "), c = 0; c < i.length; c++) u = J.exec(i[c]) || [], h = u[1], d = (u[2] || "").split(".").sort(), m = $.event.special[h] || {}, h = (o ? m.delegateType : m.bindType) || h, m = $.event.special[h] || {}, p = $.extend({
                    type: h,
                    origType: u[1],
                    data: s,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    quick: o && st(o),
                    namespace: d.join(".")
                }, f), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(e, s, d, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), $.event.global[h] = !0;
                e = null
            }
        },
        global: {},
        remove: function (e, t, i, n, s) {
            var o, r, a, l, c, u, h, d, p, f, g, m, v = $.hasData(e) && $._data(e);
            if (v && (d = v.events)) {
                for (t = $.trim(rt(t || "")).split(" "), o = 0; o < t.length; o++) if (r = J.exec(t[o]) || [], a = l = r[1], c = r[2], a) {
                    for (p = $.event.special[a] || {}, a = (n ? p.delegateType : p.bindType) || a, g = d[a] || [], u = g.length, c = c ? new RegExp("(^|\\.)" + c.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = 0; h < g.length; h++) m = g[h], !s && l !== m.origType || i && i.guid !== m.guid || c && !c.test(m.namespace) || n && n !== m.selector && ("**" !== n || !m.selector) || (g.splice(h--, 1), m.selector && g.delegateCount--, p.remove && p.remove.call(e, m));
                    0 === g.length && u !== g.length && (p.teardown && p.teardown.call(e, c) !== !1 || $.removeEvent(e, a, v.handle), delete d[a])
                } else for (a in d) $.event.remove(e, a + t[o], i, n, !0);
                $.isEmptyObject(d) && (f = v.handle, f && (f.elem = null), $.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (i, n, s, o) {
            if (!s || 3 !== s.nodeType && 8 !== s.nodeType) {
                var r, a, l, c, u, h, d, p, f, g, m = i.type || i,
                    v = [];
                if (!it.test(m + $.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), s && !$.event.customEvent[m] || $.event.global[m])) if (i = "object" == typeof i ? i[$.expando] ? i : new $.Event(m, i) : new $.Event(m), i.type = m, i.isTrigger = !0, i.exclusive = a, i.namespace = v.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, h = m.indexOf(":") < 0 ? "on" + m : "", s) {
                    if (i.result = t, i.target || (i.target = s), n = null != n ? $.makeArray(n) : [], n.unshift(i), d = $.event.special[m] || {}, !d.trigger || d.trigger.apply(s, n) !== !1) {
                        if (f = [
                            [s, d.bindType || m]
                        ], !o && !d.noBubble && !$.isWindow(s)) {
                            for (g = d.delegateType || m, c = it.test(g + m) ? s : s.parentNode, u = null; c; c = c.parentNode) f.push([c, g]), u = c;
                            u && u === s.ownerDocument && f.push([u.defaultView || u.parentWindow || e, g])
                        }
                        for (l = 0; l < f.length && !i.isPropagationStopped(); l++) c = f[l][0], i.type = f[l][1], p = ($._data(c, "events") || {})[i.type] && $._data(c, "handle"), p && p.apply(c, n), p = h && c[h], p && $.acceptData(c) && p.apply(c, n) === !1 && i.preventDefault();
                        return i.type = m, o || i.isDefaultPrevented() || d._default && d._default.apply(s.ownerDocument, n) !== !1 || "click" === m && $.nodeName(s, "a") || !$.acceptData(s) || h && s[m] && ("focus" !== m && "blur" !== m || 0 !== i.target.offsetWidth) && !$.isWindow(s) && (u = s[h], u && (s[h] = null), $.event.triggered = m, s[m](), $.event.triggered = t, u && (s[h] = u)), i.result
                    }
                } else {
                    r = $.cache;
                    for (l in r) r[l].events && r[l].events[m] && $.event.trigger(i, n, r[l].handle.elem, !0)
                }
            }
        },
        dispatch: function (i) {
            i = $.event.fix(i || e.event);
            var n, s, o, r, a, l, c, u, h, d, p = ($._data(this, "events") || {})[i.type] || [],
                f = p.delegateCount,
                g = [].slice.call(arguments, 0),
                m = !i.exclusive && !i.namespace,
                v = $.event.special[i.type] || {},
                b = [];
            if (g[0] = i, i.delegateTarget = this, !v.preDispatch || v.preDispatch.call(this, i) !== !1) {
                if (f && (!i.button || "click" !== i.type)) for (r = $(this), r.context = this.ownerDocument || this, o = i.target; o != this; o = o.parentNode || this) if (o.disabled !== !0) {
                    for (l = {}, u = [], r[0] = o, n = 0; f > n; n++) h = p[n], d = h.selector, l[d] === t && (l[d] = h.quick ? ot(o, h.quick) : r.is(d)), l[d] && u.push(h);
                    u.length && b.push({
                        elem: o,
                        matches: u
                    })
                }
                for (p.length > f && b.push({
                    elem: this,
                    matches: p.slice(f)
                }), n = 0; n < b.length && !i.isPropagationStopped(); n++) for (c = b[n], i.currentTarget = c.elem, s = 0; s < c.matches.length && !i.isImmediatePropagationStopped(); s++) h = c.matches[s], (m || !i.namespace && !h.namespace || i.namespace_re && i.namespace_re.test(h.namespace)) && (i.data = h.data, i.handleObj = h, a = (($.event.special[h.origType] || {}).handle || h.handler).apply(c.elem, g), a !== t && (i.result = a, a === !1 && (i.preventDefault(), i.stopPropagation())));
                return v.postDispatch && v.postDispatch.call(this, i), i.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, i) {
                var n, s, o, r = i.button,
                    a = i.fromElement;
                return null == e.pageX && null != i.clientX && (n = e.target.ownerDocument || E, s = n.documentElement, o = n.body, e.pageX = i.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = i.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? i.toElement : a), e.which || r === t || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[$.expando]) return e;
            var i, n, s = e,
                o = $.event.fixHooks[e.type] || {},
                r = o.props ? this.props.concat(o.props) : this.props;
            for (e = $.Event(s), i = r.length; i;) n = r[--i], e[n] = s[n];
            return e.target || (e.target = s.srcElement || E), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), o.filter ? o.filter(e, s) : e
        },
        special: {
            ready: {
                setup: $.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, i) {
                    $.isWindow(this) && (this.onbeforeunload = i)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, i, n) {
            var s = $.extend(new $.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? $.event.trigger(s, null, t) : $.event.dispatch.call(t, s), s.isDefaultPrevented() && i.preventDefault()
        }
    }, $.event.handle = $.event.dispatch, $.removeEvent = E.removeEventListener ?
    function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    } : function (e, t, i) {
        e.detachEvent && e.detachEvent("on" + t, i)
    }, $.Event = function (e, t) {
        return this instanceof $.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : r) : this.type = e, t && $.extend(this, t), this.timeStamp = e && e.timeStamp || $.now(), this[$.expando] = !0, void 0) : new $.Event(e, t)
    }, $.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = a;
            var e = this.originalEvent;
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = a;
            var e = this.originalEvent;
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = a, this.stopPropagation()
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r
    }, $.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        $.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var i, n = this,
                    s = e.relatedTarget,
                    o = e.handleObj;
                return o.selector, (!s || s !== n && !$.contains(n, s)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), $.support.submitBubbles || ($.event.special.submit = {
        setup: function () {
            return $.nodeName(this, "form") ? !1 : ($.event.add(this, "click._submit keypress._submit", function (e) {
                var i = e.target,
                    n = $.nodeName(i, "input") || $.nodeName(i, "button") ? i.form : t;
                n && !n._submit_attached && ($.event.add(n, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), n._submit_attached = !0)
            }), void 0)
        },
        postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && $.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function () {
            return $.nodeName(this, "form") ? !1 : ($.event.remove(this, "._submit"), void 0)
        }
    }), $.support.changeBubbles || ($.event.special.change = {
        setup: function () {
            return G.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && ($.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), $.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1, $.event.simulate("change", this, e, !0))
            })), !1) : ($.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                G.test(t.nodeName) && !t._change_attached && ($.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || $.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            }), void 0)
        },
        handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return $.event.remove(this, "._change"), G.test(this.nodeName)
        }
    }), $.support.focusinBubbles || $.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var i = 0,
            n = function (e) {
                $.event.simulate(t, e.target, $.event.fix(e), !0)
            };
        $.event.special[t] = {
            setup: function () {
                0 === i++ && E.addEventListener(e, n, !0)
            },
            teardown: function () {
                0 === --i && E.removeEventListener(e, n, !0)
            }
        }
    }), $.fn.extend({
        on: function (e, i, n, s, o) {
            var a, l;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = t);
                for (l in e) this.on(l, i, n, e[l], o);
                return this
            }
            if (null == n && null == s ? (s = i, n = i = t) : null == s && ("string" == typeof i ? (s = n, n = t) : (s = n, n = i, i = t)), s === !1) s = r;
            else if (!s) return this;
            return 1 === o && (a = s, s = function (e) {
                return $().off(e), a.apply(this, arguments)
            }, s.guid = a.guid || (a.guid = $.guid++)), this.each(function () {
                $.event.add(this, e, s, n, i)
            })
        },
        one: function (e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function (e, i, n) {
            if (e && e.preventDefault && e.handleObj) {
                var s = e.handleObj;
                return $(e.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this
            }
            if ("object" == typeof e) {
                for (var o in e) this.off(o, i, e[o]);
                return this
            }
            return (i === !1 || "function" == typeof i) && (n = i, i = t), n === !1 && (n = r), this.each(function () {
                $.event.remove(this, e, n, i)
            })
        },
        bind: function (e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, i) {
            return $(this.context).on(e, this.selector, t, i), this
        },
        die: function (e, t) {
            return $(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function (e, t, i) {
            return 1 == arguments.length ? this.off(e, "**") : this.off(t, e, i)
        },
        trigger: function (e, t) {
            return this.each(function () {
                $.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            return this[0] ? $.event.trigger(e, t, this[0], !0) : void 0
        },
        toggle: function (e) {
            var t = arguments,
                i = e.guid || $.guid++,
                n = 0,
                s = function (i) {
                    var s = ($._data(this, "lastToggle" + e.guid) || 0) % n;
                    return $._data(this, "lastToggle" + e.guid, s + 1), i.preventDefault(), t[s].apply(this, arguments) || !1
                };
            for (s.guid = i; n < t.length;) t[n++].guid = i;
            return this.click(s)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), $.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        $.fn[t] = function (e, i) {
            return null == i && (i = e, e = null), arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }, $.attrFn && ($.attrFn[t] = !0), et.test(t) && ($.event.fixHooks[t] = $.event.keyHooks), tt.test(t) && ($.event.fixHooks[t] = $.event.mouseHooks)
    }),
    /*!
     * Sizzle CSS Selector Engine
     *  Copyright 2011, The Dojo Foundation
     *  Released under the MIT, BSD, and GPL Licenses.
     *  More information: http://sizzlejs.com/
     */

    function () {
        function e(e, t, i, n, o, r) {
            for (var a = 0, l = n.length; l > a; a++) {
                var c = n[a];
                if (c) {
                    var u = !1;
                    for (c = c[e]; c;) {
                        if (c[s] === i) {
                            u = n[c.sizset];
                            break
                        }
                        if (1 !== c.nodeType || r || (c[s] = i, c.sizset = a), c.nodeName.toLowerCase() === t) {
                            u = c;
                            break
                        }
                        c = c[e]
                    }
                    n[a] = u
                }
            }
        }
        function i(e, t, i, n, o, r) {
            for (var a = 0, l = n.length; l > a; a++) {
                var c = n[a];
                if (c) {
                    var u = !1;
                    for (c = c[e]; c;) {
                        if (c[s] === i) {
                            u = n[c.sizset];
                            break
                        }
                        if (1 === c.nodeType) if (r || (c[s] = i, c.sizset = a), "string" != typeof t) {
                            if (c === t) {
                                u = !0;
                                break
                            }
                        } else if (d.filter(t, [c]).length > 0) {
                            u = c;
                            break
                        }
                        c = c[e]
                    }
                    n[a] = u
                }
            }
        }
        var n = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            s = "sizcache" + (Math.random() + "").replace(".", ""),
            o = 0,
            r = Object.prototype.toString,
            a = !1,
            l = !0,
            c = /\\/g,
            u = /\r\n/g,
            h = /\W/;
        [0, 0].sort(function () {
            return l = !1, 0
        });
        var d = function (e, t, i, s) {
                i = i || [], t = t || E;
                var o = t;
                if (1 !== t.nodeType && 9 !== t.nodeType) return [];
                if (!e || "string" != typeof e) return i;
                var a, l, c, u, h, p, m, v, y = !0,
                    _ = d.isXML(t),
                    w = [],
                    k = e;
                do
                if (n.exec(""), a = n.exec(k), a && (k = a[3], w.push(a[1]), a[2])) {
                    u = a[3];
                    break
                }
                while (a);
                if (w.length > 1 && g.exec(e)) if (2 === w.length && f.relative[w[0]]) l = x(w[0] + w[1], t, s);
                else for (l = f.relative[w[0]] ? [t] : d(w.shift(), t); w.length;) e = w.shift(), f.relative[e] && (e += w.shift()), l = x(e, l, s);
                else if (!s && w.length > 1 && 9 === t.nodeType && !_ && f.match.ID.test(w[0]) && !f.match.ID.test(w[w.length - 1]) && (h = d.find(w.shift(), t, _), t = h.expr ? d.filter(h.expr, h.set)[0] : h.set[0]), t) for (h = s ? {
                    expr: w.pop(),
                    set: b(s)
                } : d.find(w.pop(), 1 !== w.length || "~" !== w[0] && "+" !== w[0] || !t.parentNode ? t : t.parentNode, _), l = h.expr ? d.filter(h.expr, h.set) : h.set, w.length > 0 ? c = b(l) : y = !1; w.length;) p = w.pop(), m = p, f.relative[p] ? m = w.pop() : p = "", null == m && (m = t), f.relative[p](c, m, _);
                else c = w = [];
                if (c || (c = l), c || d.error(p || e), "[object Array]" === r.call(c)) if (y) if (t && 1 === t.nodeType) for (v = 0; null != c[v]; v++) c[v] && (c[v] === !0 || 1 === c[v].nodeType && d.contains(t, c[v])) && i.push(l[v]);
                else for (v = 0; null != c[v]; v++) c[v] && 1 === c[v].nodeType && i.push(l[v]);
                else i.push.apply(i, c);
                else b(c, i);
                return u && (d(u, o, i, s), d.uniqueSort(i)), i
            };
        d.uniqueSort = function (e) {
            if (_ && (a = l, e.sort(_), a)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
            return e
        }, d.matches = function (e, t) {
            return d(e, null, null, t)
        }, d.matchesSelector = function (e, t) {
            return d(t, null, null, [e]).length > 0
        }, d.find = function (e, t, i) {
            var n, s, o, r, a, l;
            if (!e) return [];
            for (s = 0, o = f.order.length; o > s; s++) if (a = f.order[s], (r = f.leftMatch[a].exec(e)) && (l = r[1], r.splice(1, 1), "\\" !== l.substr(l.length - 1) && (r[1] = (r[1] || "").replace(c, ""), n = f.find[a](r, t, i), null != n))) {
                e = e.replace(f.match[a], "");
                break
            }
            return n || (n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName("*") : []), {
                set: n,
                expr: e
            }
        }, d.filter = function (e, i, n, s) {
            for (var o, r, a, l, c, u, h, p, g, m = e, v = [], b = i, y = i && i[0] && d.isXML(i[0]); e && i.length;) {
                for (a in f.filter) if (null != (o = f.leftMatch[a].exec(e)) && o[2]) {
                    if (u = f.filter[a], h = o[1], r = !1, o.splice(1, 1), "\\" === h.substr(h.length - 1)) continue;
                    if (b === v && (v = []), f.preFilter[a]) if (o = f.preFilter[a](o, b, n, v, s, y)) {
                        if (o === !0) continue
                    } else r = l = !0;
                    if (o) for (p = 0; null != (c = b[p]); p++) c && (l = u(c, o, p, b), g = s ^ l, n && null != l ? g ? r = !0 : b[p] = !1 : g && (v.push(c), r = !0));
                    if (l !== t) {
                        if (n || (b = v), e = e.replace(f.match[a], ""), !r) return [];
                        break
                    }
                }
                if (e === m) {
                    if (null != r) break;
                    d.error(e)
                }
                m = e
            }
            return b
        }, d.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = d.getText = function (e) {
                var t, i, n = e.nodeType,
                    s = "";
                if (n) {
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        if ("string" == typeof e.innerText) return e.innerText.replace(u, "");
                        for (e = e.firstChild; e; e = e.nextSibling) s += p(e)
                    } else if (3 === n || 4 === n) return e.nodeValue
                } else for (t = 0; i = e[t]; t++) 8 !== i.nodeType && (s += p(i));
                return s
            },
            f = d.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (e) {
                        return e.getAttribute("href")
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (e, t) {
                        var i = "string" == typeof t,
                            n = i && !h.test(t),
                            s = i && !n;
                        n && (t = t.toLowerCase());
                        for (var o, r = 0, a = e.length; a > r; r++) if (o = e[r]) {
                            for (;
                            (o = o.previousSibling) && 1 !== o.nodeType;);
                            e[r] = s || o && o.nodeName.toLowerCase() === t ? o || !1 : o === t
                        }
                        s && d.filter(t, e, !0)
                    },
                    ">": function (e, t) {
                        var i, n = "string" == typeof t,
                            s = 0,
                            o = e.length;
                        if (n && !h.test(t)) {
                            for (t = t.toLowerCase(); o > s; s++) if (i = e[s]) {
                                var r = i.parentNode;
                                e[s] = r.nodeName.toLowerCase() === t ? r : !1
                            }
                        } else {
                            for (; o > s; s++) i = e[s], i && (e[s] = n ? i.parentNode : i.parentNode === t);
                            n && d.filter(t, e, !0)
                        }
                    },
                    "": function (t, n, s) {
                        var r, a = o++,
                            l = i;
                        "string" != typeof n || h.test(n) || (n = n.toLowerCase(), r = n, l = e), l("parentNode", n, a, t, r, s)
                    },
                    "~": function (t, n, s) {
                        var r, a = o++,
                            l = i;
                        "string" != typeof n || h.test(n) || (n = n.toLowerCase(), r = n, l = e), l("previousSibling", n, a, t, r, s)
                    }
                },
                find: {
                    ID: function (e, t, i) {
                        if ("undefined" != typeof t.getElementById && !i) {
                            var n = t.getElementById(e[1]);
                            return n && n.parentNode ? [n] : []
                        }
                    },
                    NAME: function (e, t) {
                        if ("undefined" != typeof t.getElementsByName) {
                            for (var i = [], n = t.getElementsByName(e[1]), s = 0, o = n.length; o > s; s++) n[s].getAttribute("name") === e[1] && i.push(n[s]);
                            return 0 === i.length ? null : i
                        }
                    },
                    TAG: function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e[1]) : void 0
                    }
                },
                preFilter: {
                    CLASS: function (e, t, i, n, s, o) {
                        if (e = " " + e[1].replace(c, "") + " ", o) return e;
                        for (var r, a = 0; null != (r = t[a]); a++) r && (s ^ (r.className && (" " + r.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? i || n.push(r) : i && (t[a] = !1));
                        return !1
                    },
                    ID: function (e) {
                        return e[1].replace(c, "")
                    },
                    TAG: function (e) {
                        return e[1].replace(c, "").toLowerCase()
                    },
                    CHILD: function (e) {
                        if ("nth" === e[1]) {
                            e[2] || d.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                            var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                            e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                        } else e[2] && d.error(e[0]);
                        return e[0] = o++, e
                    },
                    ATTR: function (e, t, i, n, s, o) {
                        var r = e[1] = e[1].replace(c, "");
                        return !o && f.attrMap[r] && (e[1] = f.attrMap[r]), e[4] = (e[4] || e[5] || "").replace(c, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
                    },
                    PSEUDO: function (e, t, i, s, o) {
                        if ("not" === e[1]) {
                            if (!((n.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                var r = d.filter(e[3], t, i, !0 ^ o);
                                return i || s.push.apply(s, r), !1
                            }
                            e[3] = d(e[3], null, null, t)
                        } else if (f.match.POS.test(e[0]) || f.match.CHILD.test(e[0])) return !0;
                        return e
                    },
                    POS: function (e) {
                        return e.unshift(!0), e
                    }
                },
                filters: {
                    enabled: function (e) {
                        return e.disabled === !1 && "hidden" !== e.type
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        return e.checked === !0
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function (e) {
                        return !!e.firstChild
                    },
                    empty: function (e) {
                        return !e.firstChild
                    },
                    has: function (e, t, i) {
                        return !!d(i[3], e).length
                    },
                    header: function (e) {
                        return /h\d/i.test(e.nodeName)
                    },
                    text: function (e) {
                        var t = e.getAttribute("type"),
                            i = e.type;
                        return "input" === e.nodeName.toLowerCase() && "text" === i && (t === i || null === t)
                    },
                    radio: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "radio" === e.type
                    },
                    checkbox: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
                    },
                    file: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "file" === e.type
                    },
                    password: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "password" === e.type
                    },
                    submit: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && "submit" === e.type
                    },
                    image: function (e) {
                        return "input" === e.nodeName.toLowerCase() && "image" === e.type
                    },
                    reset: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && "reset" === e.type
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    input: function (e) {
                        return /input|select|textarea|button/i.test(e.nodeName)
                    },
                    focus: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t) {
                        return 0 === t
                    },
                    last: function (e, t, i, n) {
                        return t === n.length - 1
                    },
                    even: function (e, t) {
                        return 0 === t % 2
                    },
                    odd: function (e, t) {
                        return 1 === t % 2
                    },
                    lt: function (e, t, i) {
                        return t < i[3] - 0
                    },
                    gt: function (e, t, i) {
                        return t > i[3] - 0
                    },
                    nth: function (e, t, i) {
                        return i[3] - 0 === t
                    },
                    eq: function (e, t, i) {
                        return i[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (e, t, i, n) {
                        var s = t[1],
                            o = f.filters[s];
                        if (o) return o(e, i, t, n);
                        if ("contains" === s) return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                        if ("not" === s) {
                            for (var r = t[3], a = 0, l = r.length; l > a; a++) if (r[a] === e) return !1;
                            return !0
                        }
                        d.error(s)
                    },
                    CHILD: function (e, t) {
                        var i, n, o, r, a, l, c = t[1],
                            u = e;
                        switch (c) {
                        case "only":
                        case "first":
                            for (; u = u.previousSibling;) if (1 === u.nodeType) return !1;
                            if ("first" === c) return !0;
                            u = e;
                        case "last":
                            for (; u = u.nextSibling;) if (1 === u.nodeType) return !1;
                            return !0;
                        case "nth":
                            if (i = t[2], n = t[3], 1 === i && 0 === n) return !0;
                            if (o = t[0], r = e.parentNode, r && (r[s] !== o || !e.nodeIndex)) {
                                for (a = 0, u = r.firstChild; u; u = u.nextSibling) 1 === u.nodeType && (u.nodeIndex = ++a);
                                r[s] = o
                            }
                            return l = e.nodeIndex - n, 0 === i ? 0 === l : 0 === l % i && l / i >= 0
                        }
                    },
                    ID: function (e, t) {
                        return 1 === e.nodeType && e.getAttribute("id") === t
                    },
                    TAG: function (e, t) {
                        return "*" === t && 1 === e.nodeType || !! e.nodeName && e.nodeName.toLowerCase() === t
                    },
                    CLASS: function (e, t) {
                        return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                    },
                    ATTR: function (e, t) {
                        var i = t[1],
                            n = d.attr ? d.attr(e, i) : f.attrHandle[i] ? f.attrHandle[i](e) : null != e[i] ? e[i] : e.getAttribute(i),
                            s = n + "",
                            o = t[2],
                            r = t[4];
                        return null == n ? "!=" === o : !o && d.attr ? null != n : "=" === o ? s === r : "*=" === o ? s.indexOf(r) >= 0 : "~=" === o ? (" " + s + " ").indexOf(r) >= 0 : r ? "!=" === o ? s !== r : "^=" === o ? 0 === s.indexOf(r) : "$=" === o ? s.substr(s.length - r.length) === r : "|=" === o ? s === r || s.substr(0, r.length + 1) === r + "-" : !1 : s && n !== !1
                    },
                    POS: function (e, t, i, n) {
                        var s = t[2],
                            o = f.setFilters[s];
                        return o ? o(e, i, t, n) : void 0
                    }
                }
            },
            g = f.match.POS,
            m = function (e, t) {
                return "\\" + (t - 0 + 1)
            };
        for (var v in f.match) f.match[v] = new RegExp(f.match[v].source + /(?![^\[]*\])(?![^\(]*\))/.source), f.leftMatch[v] = new RegExp(/(^(?:.|\r|\n)*?)/.source + f.match[v].source.replace(/\\(\d+)/g, m));
        f.match.globalPOS = g;
        var b = function (e, t) {
                return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
            };
        try {
            Array.prototype.slice.call(E.documentElement.childNodes, 0)[0].nodeType
        } catch (y) {
            b = function (e, t) {
                var i = 0,
                    n = t || [];
                if ("[object Array]" === r.call(e)) Array.prototype.push.apply(n, e);
                else if ("number" == typeof e.length) for (var s = e.length; s > i; i++) n.push(e[i]);
                else for (; e[i]; i++) n.push(e[i]);
                return n
            }
        }
        var _, w;
        E.documentElement.compareDocumentPosition ? _ = function (e, t) {
            return e === t ? (a = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
        } : (_ = function (e, t) {
            if (e === t) return a = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var i, n, s = [],
                o = [],
                r = e.parentNode,
                l = t.parentNode,
                c = r;
            if (r === l) return w(e, t);
            if (!r) return -1;
            if (!l) return 1;
            for (; c;) s.unshift(c), c = c.parentNode;
            for (c = l; c;) o.unshift(c), c = c.parentNode;
            i = s.length, n = o.length;
            for (var u = 0; i > u && n > u; u++) if (s[u] !== o[u]) return w(s[u], o[u]);
            return u === i ? w(e, o[u], -1) : w(s[u], t, 1)
        }, w = function (e, t, i) {
            if (e === t) return i;
            for (var n = e.nextSibling; n;) {
                if (n === t) return -1;
                n = n.nextSibling
            }
            return 1
        }), function () {
            var e = E.createElement("div"),
                i = "script" + (new Date).getTime(),
                n = E.documentElement;
            e.innerHTML = "<a name='" + i + "'/>", n.insertBefore(e, n.firstChild), E.getElementById(i) && (f.find.ID = function (e, i, n) {
                if ("undefined" != typeof i.getElementById && !n) {
                    var s = i.getElementById(e[1]);
                    return s ? s.id === e[1] || "undefined" != typeof s.getAttributeNode && s.getAttributeNode("id").nodeValue === e[1] ? [s] : t : []
                }
            }, f.filter.ID = function (e, t) {
                var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                return 1 === e.nodeType && i && i.nodeValue === t
            }), n.removeChild(e), n = e = null
        }(), function () {
            var e = E.createElement("div");
            e.appendChild(E.createComment("")), e.getElementsByTagName("*").length > 0 && (f.find.TAG = function (e, t) {
                var i = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var n = [], s = 0; i[s]; s++) 1 === i[s].nodeType && n.push(i[s]);
                    i = n
                }
                return i
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && "undefined" != typeof e.firstChild.getAttribute && "#" !== e.firstChild.getAttribute("href") && (f.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), E.querySelectorAll &&
        function () {
            var e = d,
                t = E.createElement("div"),
                i = "__sizzle__";
            if (t.innerHTML = "<p class='TEST'></p>", !t.querySelectorAll || 0 !== t.querySelectorAll(".TEST").length) {
                d = function (t, n, s, o) {
                    if (n = n || E, !o && !d.isXML(n)) {
                        var r = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (r && (1 === n.nodeType || 9 === n.nodeType)) {
                            if (r[1]) return b(n.getElementsByTagName(t), s);
                            if (r[2] && f.find.CLASS && n.getElementsByClassName) return b(n.getElementsByClassName(r[2]), s)
                        }
                        if (9 === n.nodeType) {
                            if ("body" === t && n.body) return b([n.body], s);
                            if (r && r[3]) {
                                var a = n.getElementById(r[3]);
                                if (!a || !a.parentNode) return b([], s);
                                if (a.id === r[3]) return b([a], s)
                            }
                            try {
                                return b(n.querySelectorAll(t), s)
                            } catch (l) {}
                        } else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                            var c = n,
                                u = n.getAttribute("id"),
                                h = u || i,
                                p = n.parentNode,
                                g = /^\s*[+~]/.test(t);
                            u ? h = h.replace(/'/g, "\\$&") : n.setAttribute("id", h), g && p && (n = n.parentNode);
                            try {
                                if (!g || p) return b(n.querySelectorAll("[id='" + h + "'] " + t), s)
                            } catch (m) {} finally {
                                u || c.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, n, s, o)
                };
                for (var n in e) d[n] = e[n];
                t = null
            }
        }(), function () {
            var e = E.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var i = !t.call(E.createElement("div"), "div"),
                    n = !1;
                try {
                    t.call(E.documentElement, "[test!='']:sizzle")
                } catch (s) {
                    n = !0
                }
                d.matchesSelector = function (e, s) {
                    if (s = s.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !d.isXML(e)) try {
                        if (n || !f.match.PSEUDO.test(s) && !/!=/.test(s)) {
                            var o = t.call(e, s);
                            if (o || !i || e.document && 11 !== e.document.nodeType) return o
                        }
                    } catch (r) {}
                    return d(s, null, null, [e]).length > 0
                }
            }
        }(), function () {
            var e = E.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length && (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length && (f.order.splice(1, 0, "CLASS"), f.find.CLASS = function (e, t, i) {
                return "undefined" == typeof t.getElementsByClassName || i ? void 0 : t.getElementsByClassName(e[1])
            }, e = null))
        }(), d.contains = E.documentElement.contains ?
        function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : E.documentElement.compareDocumentPosition ?
        function (e, t) {
            return !!(16 & e.compareDocumentPosition(t))
        } : function () {
            return !1
        }, d.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        };
        var x = function (e, t, i) {
                for (var n, s = [], o = "", r = t.nodeType ? [t] : t; n = f.match.PSEUDO.exec(e);) o += n[0], e = e.replace(f.match.PSEUDO, "");
                e = f.relative[e] ? e + "*" : e;
                for (var a = 0, l = r.length; l > a; a++) d(e, r[a], s, i);
                return d.filter(o, s)
            };
        d.attr = $.attr, d.selectors.attrMap = {}, $.find = d, $.expr = d.selectors, $.expr[":"] = $.expr.filters, $.unique = d.uniqueSort, $.text = d.getText, $.isXMLDoc = d.isXML, $.contains = d.contains
    }();
    var at = /Until$/,
        lt = /^(?:parents|prevUntil|prevAll)/,
        ct = /,/,
        ut = /^.[^:#\[\.,]*$/,
        ht = Array.prototype.slice,
        dt = $.expr.match.globalPOS,
        pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    $.fn.extend({
        find: function (e) {
            var t, i, n = this;
            if ("string" != typeof e) return $(e).filter(function () {
                for (t = 0, i = n.length; i > t; t++) if ($.contains(n[t], this)) return !0
            });
            var s, o, r, a = this.pushStack("", "find", e);
            for (t = 0, i = this.length; i > t; t++) if (s = a.length, $.find(e, this[t], a), t > 0) for (o = s; o < a.length; o++) for (r = 0; s > r; r++) if (a[r] === a[o]) {
                a.splice(o--, 1);
                break
            }
            return a
        },
        has: function (e) {
            var t = $(e);
            return this.filter(function () {
                for (var e = 0, i = t.length; i > e; e++) if ($.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(c(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(c(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && ("string" == typeof e ? dt.test(e) ? $(e, this.context).index(this[0]) >= 0 : $.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var i, n, s = [],
                o = this[0];
            if ($.isArray(e)) {
                for (var r = 1; o && o.ownerDocument && o !== t;) {
                    for (i = 0; i < e.length; i++) $(o).is(e[i]) && s.push({
                        selector: e[i],
                        elem: o,
                        level: r
                    });
                    o = o.parentNode, r++
                }
                return s
            }
            var a = dt.test(e) || "string" != typeof e ? $(e, t || this.context) : 0;
            for (i = 0, n = this.length; n > i; i++) for (o = this[i]; o;) {
                if (a ? a.index(o) > -1 : $.find.matchesSelector(o, e)) {
                    s.push(o);
                    break
                }
                if (o = o.parentNode, !o || !o.ownerDocument || o === t || 11 === o.nodeType) break
            }
            return s = s.length > 1 ? $.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function (e) {
            return e ? "string" == typeof e ? $.inArray(this[0], $(e)) : $.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var i = "string" == typeof e ? $(e, t) : $.makeArray(e && e.nodeType ? [e] : e),
                n = $.merge(this.get(), i);
            return this.pushStack(l(i[0]) || l(n[0]) ? n : $.unique(n))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), $.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
            return $.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, i) {
            return $.dir(e, "parentNode", i)
        },
        next: function (e) {
            return $.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return $.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return $.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return $.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, i) {
            return $.dir(e, "nextSibling", i)
        },
        prevUntil: function (e, t, i) {
            return $.dir(e, "previousSibling", i)
        },
        siblings: function (e) {
            return $.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
            return $.sibling(e.firstChild)
        },
        contents: function (e) {
            return $.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : $.makeArray(e.childNodes)
        }
    }, function (e, t) {
        $.fn[e] = function (i, n) {
            var s = $.map(this, t, i);
            return at.test(e) || (n = i), n && "string" == typeof n && (s = $.filter(n, s)), s = this.length > 1 && !pt[e] ? $.unique(s) : s, (this.length > 1 || ct.test(n)) && lt.test(e) && (s = s.reverse()), this.pushStack(s, e, ht.call(arguments).join(","))
        }
    }), $.extend({
        filter: function (e, t, i) {
            return i && (e = ":not(" + e + ")"), 1 === t.length ? $.find.matchesSelector(t[0], e) ? [t[0]] : [] : $.find.matches(e, t)
        },
        dir: function (e, i, n) {
            for (var s = [], o = e[i]; o && 9 !== o.nodeType && (n === t || 1 !== o.nodeType || !$(o).is(n));) 1 === o.nodeType && s.push(o), o = o[i];
            return s
        },
        nth: function (e, t, i) {
            t = t || 1;
            for (var n = 0; e && (1 !== e.nodeType || ++n !== t); e = e[i]);
            return e
        },
        sibling: function (e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    });
    var ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:\d+|null)"/g,
        mt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        yt = /<tbody/i,
        _t = /<|&#?\w+;/,
        wt = /<(?:script|style)/i,
        xt = /<(?:script|object|embed|option|style)/i,
        kt = new RegExp("<(?:" + ft + ")[\\s/>]", "i"),
        Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Dt = /\/(java|ecma)script/i,
        St = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Tt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Mt = u(E);
    Tt.optgroup = Tt.option, Tt.tbody = Tt.tfoot = Tt.colgroup = Tt.caption = Tt.thead, Tt.th = Tt.td, $.support.htmlSerialize || (Tt._default = [1, "div<div>", "</div>"]), $.fn.extend({
        text: function (e) {
            return $.access(this, function (e) {
                return e === t ? $.text(this) : this.empty().append((this[0] && this[0].ownerDocument || E).createTextNode(e))
            }, null, e, arguments.length)
        },
        wrapAll: function (e) {
            if ($.isFunction(e)) return this.each(function (t) {
                $(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = $(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return $.isFunction(e) ? this.each(function (t) {
                $(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = $(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = $.isFunction(e);
            return this.each(function (i) {
                $(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                $.nodeName(this, "body") || $(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                1 === this.nodeType && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = $.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, $.clean(arguments)), e
            }
        },
        remove: function (e, t) {
            for (var i, n = 0; null != (i = this[n]); n++)(!e || $.filter(e, [i]).length) && (t || 1 !== i.nodeType || ($.cleanData(i.getElementsByTagName("*")), $.cleanData([i])), i.parentNode && i.parentNode.removeChild(i));
            return this
        },
        empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && $.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
            return this
        },
        clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return $.clone(this, e, t)
            })
        },
        html: function (e) {
            return $.access(this, function (e) {
                var i = this[0] || {},
                    n = 0,
                    s = this.length;
                if (e === t) return 1 === i.nodeType ? i.innerHTML.replace(gt, "") : null;
                if (!("string" != typeof e || wt.test(e) || !$.support.leadingWhitespace && mt.test(e) || Tt[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; s > n; n++) i = this[n] || {}, 1 === i.nodeType && ($.cleanData(i.getElementsByTagName("*")), i.innerHTML = e);
                        i = 0
                    } catch (o) {}
                }
                i && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function (e) {
            return this[0] && this[0].parentNode ? $.isFunction(e) ? this.each(function (t) {
                var i = $(this),
                    n = i.html();
                i.replaceWith(e.call(this, t, n))
            }) : ("string" != typeof e && (e = $(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    i = this.parentNode;
                $(this).remove(), t ? $(t).before(e) : $(i).append(e)
            })) : this.length ? this.pushStack($($.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, i, n) {
            var s, o, r, a, l = e[0],
                c = [];
            if (!$.support.checkClone && 3 === arguments.length && "string" == typeof l && Ct.test(l)) return this.each(function () {
                $(this).domManip(e, i, n, !0)
            });
            if ($.isFunction(l)) return this.each(function (s) {
                var o = $(this);
                e[0] = l.call(this, s, i ? o.html() : t), o.domManip(e, i, n)
            });
            if (this[0]) {
                if (a = l && l.parentNode, s = $.support.parentNode && a && 11 === a.nodeType && a.childNodes.length === this.length ? {
                    fragment: a
                } : $.buildFragment(e, this, c), r = s.fragment, o = 1 === r.childNodes.length ? r = r.firstChild : r.firstChild) {
                    i = i && $.nodeName(o, "tr");
                    for (var u = 0, d = this.length, p = d - 1; d > u; u++) n.call(i ? h(this[u], o) : this[u], s.cacheable || d > 1 && p > u ? $.clone(r, !0, !0) : r)
                }
                c.length && $.each(c, function (e, t) {
                    t.src ? $.ajax({
                        type: "GET",
                        global: !1,
                        url: t.src,
                        async: !1,
                        dataType: "script"
                    }) : $.globalEval((t.text || t.textContent || t.innerHTML || "").replace(St, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), $.buildFragment = function (e, t, i) {
        var n, s, o, r, a = e[0];
        return t && t[0] && (r = t[0].ownerDocument || t[0]), r.createDocumentFragment || (r = E), !(1 === e.length && "string" == typeof a && a.length < 512 && r === E && "<" === a.charAt(0)) || xt.test(a) || !$.support.checkClone && Ct.test(a) || !$.support.html5Clone && kt.test(a) || (s = !0, o = $.fragments[a], o && 1 !== o && (n = o)), n || (n = r.createDocumentFragment(), $.clean(e, r, n, i)), s && ($.fragments[a] = o ? n : 1), {
            fragment: n,
            cacheable: s
        }
    }, $.fragments = {}, $.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        $.fn[e] = function (i) {
            var n = [],
                s = $(i),
                o = 1 === this.length && this[0].parentNode;
            if (o && 11 === o.nodeType && 1 === o.childNodes.length && 1 === s.length) return s[t](this[0]), this;
            for (var r = 0, a = s.length; a > r; r++) {
                var l = (r > 0 ? this.clone(!0) : this).get();
                $(s[r])[t](l), n = n.concat(l)
            }
            return this.pushStack(n, e, s.selector)
        }
    }), $.extend({
        clone: function (e, t, i) {
            var n, s, o, r = $.support.html5Clone || $.isXMLDoc(e) || !kt.test("<" + e.nodeName + ">") ? e.cloneNode(!0) : v(e);
            if (!($.support.noCloneEvent && $.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || $.isXMLDoc(e))) for (p(e, r), n = f(e), s = f(r), o = 0; n[o]; ++o) s[o] && p(n[o], s[o]);
            if (t && (d(e, r), i)) for (n = f(e), s = f(r), o = 0; n[o]; ++o) d(n[o], s[o]);
            return n = s = null, r
        },
        clean: function (e, t, i, n) {
            var s, o, r, a = [];
            t = t || E, "undefined" == typeof t.createElement && (t = t.ownerDocument || t[0] && t[0].ownerDocument || E);
            for (var l, c = 0; null != (l = e[c]); c++) if ("number" == typeof l && (l += ""), l) {
                if ("string" == typeof l) if (_t.test(l)) {
                    l = l.replace(vt, "<$1></$2>");
                    var h, d = (bt.exec(l) || ["", ""])[1].toLowerCase(),
                        p = Tt[d] || Tt._default,
                        f = p[0],
                        g = t.createElement("div"),
                        v = Mt.childNodes;
                    for (t === E ? Mt.appendChild(g) : u(t).appendChild(g), g.innerHTML = p[1] + l + p[2]; f--;) g = g.lastChild;
                    if (!$.support.tbody) {
                        var b = yt.test(l),
                            y = "table" !== d || b ? "<table>" !== p[1] || b ? [] : g.childNodes : g.firstChild && g.firstChild.childNodes;
                        for (r = y.length - 1; r >= 0; --r) $.nodeName(y[r], "tbody") && !y[r].childNodes.length && y[r].parentNode.removeChild(y[r])
                    }!$.support.leadingWhitespace && mt.test(l) && g.insertBefore(t.createTextNode(mt.exec(l)[0]), g.firstChild), l = g.childNodes, g && (g.parentNode.removeChild(g), v.length > 0 && (h = v[v.length - 1], h && h.parentNode && h.parentNode.removeChild(h)))
                } else l = t.createTextNode(l);
                var _;
                if (!$.support.appendChecked) if (l[0] && "number" == typeof (_ = l.length)) for (r = 0; _ > r; r++) m(l[r]);
                else m(l);
                l.nodeType ? a.push(l) : a = $.merge(a, l)
            }
            if (i) for (s = function (e) {
                return !e.type || Dt.test(e.type)
            }, c = 0; a[c]; c++) if (o = a[c], n && $.nodeName(o, "script") && (!o.type || Dt.test(o.type))) n.push(o.parentNode ? o.parentNode.removeChild(o) : o);
            else {
                if (1 === o.nodeType) {
                    var w = $.grep(o.getElementsByTagName("script"), s);
                    a.splice.apply(a, [c + 1, 0].concat(w))
                }
                i.appendChild(o)
            }
            return a
        },
        cleanData: function (e) {
            for (var t, i, n, s = $.cache, o = $.event.special, r = $.support.deleteExpando, a = 0; null != (n = e[a]); a++) if ((!n.nodeName || !$.noData[n.nodeName.toLowerCase()]) && (i = n[$.expando])) {
                if (t = s[i], t && t.events) {
                    for (var l in t.events) o[l] ? $.event.remove(n, l) : $.removeEvent(n, l, t.handle);
                    t.handle && (t.handle.elem = null)
                }
                r ? delete n[$.expando] : n.removeAttribute && n.removeAttribute($.expando), delete s[i]
            }
        }
    });
    var It, Pt, Nt, Et = /alpha\([^)]*\)/i,
        At = /opacity=([^)]*)/,
        zt = /([A-Z]|^ms)/g,
        $t = /^[\-+]?(?:\d*\.)?\d+$/i,
        Ot = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        jt = /^([\-+])=([\-+.\de]+)/,
        Ht = /^margin/,
        Ft = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Lt = ["Top", "Right", "Bottom", "Left"];
    $.fn.css = function (e, i) {
        return $.access(this, function (e, i, n) {
            return n !== t ? $.style(e, i, n) : $.css(e, i)
        }, e, i, arguments.length > 1)
    }, $.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = It(e, "opacity");
                        return "" === i ? "1" : i
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": $.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, i, n, s) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, a = $.camelCase(i),
                    l = e.style,
                    c = $.cssHooks[a];
                if (i = $.cssProps[a] || a, n === t) return c && "get" in c && (o = c.get(e, !1, s)) !== t ? o : l[i];
                if (r = typeof n, "string" === r && (o = jt.exec(n)) && (n = +(o[1] + 1) * +o[2] + parseFloat($.css(e, i)), r = "number"), !(null == n || "number" === r && isNaN(n) || ("number" !== r || $.cssNumber[a] || (n += "px"), c && "set" in c && (n = c.set(e, n)) === t))) try {
                    l[i] = n
                } catch (u) {}
            }
        },
        css: function (e, i, n) {
            var s, o;
            return i = $.camelCase(i), o = $.cssHooks[i], i = $.cssProps[i] || i, "cssFloat" === i && (i = "float"), o && "get" in o && (s = o.get(e, !0, n)) !== t ? s : It ? It(e, i) : void 0
        },
        swap: function (e, t, i) {
            var n, s, o = {};
            for (s in t) o[s] = e.style[s], e.style[s] = t[s];
            n = i.call(e);
            for (s in t) e.style[s] = o[s];
            return n
        }
    }), $.curCSS = $.css, E.defaultView && E.defaultView.getComputedStyle && (Pt = function (e, t) {
        var i, n, s, o, r = e.style;
        return t = t.replace(zt, "-$1").toLowerCase(), (n = e.ownerDocument.defaultView) && (s = n.getComputedStyle(e, null)) && (i = s.getPropertyValue(t), "" !== i || $.contains(e.ownerDocument.documentElement, e) || (i = $.style(e, t))), !$.support.pixelMargin && s && Ht.test(t) && Ot.test(i) && (o = r.width, r.width = i, i = s.width, r.width = o), i
    }), E.documentElement.currentStyle && (Nt = function (e, t) {
        var i, n, s, o = e.currentStyle && e.currentStyle[t],
            r = e.style;
        return null == o && r && (s = r[t]) && (o = s), Ot.test(o) && (i = r.left, n = e.runtimeStyle && e.runtimeStyle.left, n && (e.runtimeStyle.left = e.currentStyle.left), r.left = "fontSize" === t ? "1em" : o, o = r.pixelLeft + "px", r.left = i, n && (e.runtimeStyle.left = n)), "" === o ? "auto" : o
    }), It = Pt || Nt, $.each(["height", "width"], function (e, t) {
        $.cssHooks[t] = {
            get: function (e, i, n) {
                return i ? 0 !== e.offsetWidth ? b(e, t, n) : $.swap(e, Ft, function () {
                    return b(e, t, n)
                }) : void 0
            },
            set: function (e, t) {
                return $t.test(t) ? t + "px" : t
            }
        }
    }), $.support.opacity || ($.cssHooks.opacity = {
        get: function (e, t) {
            return At.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var i = e.style,
                n = e.currentStyle,
                s = $.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, t >= 1 && "" === $.trim(o.replace(Et, "")) && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = Et.test(o) ? o.replace(Et, s) : o + " " + s)
        }
    }), $(function () {
        $.support.reliableMarginRight || ($.cssHooks.marginRight = {
            get: function (e, t) {
                return $.swap(e, {
                    display: "inline-block"
                }, function () {
                    return t ? It(e, "margin-right") : e.style.marginRight
                })
            }
        })
    }), $.expr && $.expr.filters && ($.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
            i = e.offsetHeight;
        return 0 === t && 0 === i || !$.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || $.css(e, "display"))
    }, $.expr.filters.visible = function (e) {
        return !$.expr.filters.hidden(e)
    }), $.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        $.cssHooks[e + t] = {
            expand: function (i) {
                var n, s = "string" == typeof i ? i.split(" ") : [i],
                    o = {};
                for (n = 0; 4 > n; n++) o[e + Lt[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }
    });
    var Wt, Rt, qt = /%20/g,
        Bt = /\[\]$/,
        Yt = /\r?\n/g,
        Xt = /#.*$/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kt = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Qt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Vt = /^(?:GET|HEAD)$/,
        Gt = /^\/\//,
        Jt = /\?/,
        Zt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        ei = /^(?:select|textarea)/i,
        ti = /\s+/,
        ii = /([?&])_=[^&]*/,
        ni = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        si = $.fn.load,
        oi = {},
        ri = {},
        ai = ["*/"] + ["*"];
    try {
        Wt = z.href
    } catch (li) {
        Wt = E.createElement("a"), Wt.href = "", Wt = Wt.href
    }
    Rt = ni.exec(Wt.toLowerCase()) || [], $.fn.extend({
        load: function (e, i, n) {
            if ("string" != typeof e && si) return si.apply(this, arguments);
            if (!this.length) return this;
            var s = e.indexOf(" ");
            if (s >= 0) {
                var o = e.slice(s, e.length);
                e = e.slice(0, s)
            }
            var r = "GET";
            i && ($.isFunction(i) ? (n = i, i = t) : "object" == typeof i && (i = $.param(i, $.ajaxSettings.traditional), r = "POST"));
            var a = this;
            return $.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: i,
                complete: function (e, t, i) {
                    i = e.responseText, e.isResolved() && (e.done(function (e) {
                        i = e
                    }), a.html(o ? $("<div>").append(i.replace(Zt, "")).find(o) : i)), n && a.each(n, [i, t, e])
                }
            }), this
        },
        serialize: function () {
            return $.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? $.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || ei.test(this.nodeName) || Kt.test(this.type))
            }).map(function (e, t) {
                var i = $(this).val();
                return null == i ? null : $.isArray(i) ? $.map(i, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(Yt, "\r\n")
                }
            }).get()
        }
    }), $.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        $.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), $.each(["get", "post"], function (e, i) {
        $[i] = function (e, n, s, o) {
            return $.isFunction(n) && (o = o || s, s = n, n = t), $.ajax({
                type: i,
                url: e,
                data: n,
                success: s,
                dataType: o
            })
        }
    }), $.extend({
        getScript: function (e, i) {
            return $.get(e, t, i, "script")
        },
        getJSON: function (e, t, i) {
            return $.get(e, t, i, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? w(e, $.ajaxSettings) : (t = e, e = $.ajaxSettings), w(e, t), e
        },
        ajaxSettings: {
            url: Wt,
            isLocal: Qt.test(Rt[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": ai
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": $.parseJSON,
                "text xml": $.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: y(oi),
        ajaxTransport: y(ri),
        ajax: function (e, i) {
            function n(e, i, n, r) {
                if (2 !== w) {
                    w = 2, l && clearTimeout(l), a = t, o = r || "", x.readyState = e > 0 ? 4 : 0;
                    var c, h, b, y, _, D = i,
                        S = n ? k(d, x, n) : t;
                    if (e >= 200 && 300 > e || 304 === e) if (d.ifModified && ((y = x.getResponseHeader("Last-Modified")) && ($.lastModified[s] = y), (_ = x.getResponseHeader("Etag")) && ($.etag[s] = _)), 304 === e) D = "notmodified", c = !0;
                    else try {
                        h = C(d, S), D = "success", c = !0
                    } catch (T) {
                        D = "parsererror", b = T
                    } else b = D, (!D || e) && (D = "error", 0 > e && (e = 0));
                    x.status = e, x.statusText = "" + (i || D), c ? g.resolveWith(p, [h, D, x]) : g.rejectWith(p, [x, D, b]), x.statusCode(v), v = t, u && f.trigger("ajax" + (c ? "Success" : "Error"), [x, d, c ? h : b]), m.fireWith(p, [x, D]), u && (f.trigger("ajaxComplete", [x, d]), --$.active || $.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof e && (i = e, e = t), i = i || {};
            var s, o, r, a, l, c, u, h, d = $.ajaxSetup({}, i),
                p = d.context || d,
                f = p !== d && (p.nodeType || p instanceof $) ? $(p) : $.event,
                g = $.Deferred(),
                m = $.Callbacks("once memory"),
                v = d.statusCode || {},
                b = {},
                y = {},
                w = 0,
                x = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!w) {
                            var i = e.toLowerCase();
                            e = y[i] = y[i] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? o : null
                    },
                    getResponseHeader: function (e) {
                        var i;
                        if (2 === w) {
                            if (!r) for (r = {}; i = Ut.exec(o);) r[i[1].toLowerCase()] = i[2];
                            i = r[e.toLowerCase()]
                        }
                        return i === t ? null : i
                    },
                    overrideMimeType: function (e) {
                        return w || (d.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || "abort", a && a.abort(e), n(0, e), this
                    }
                };
            if (g.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                    else t = e[x.status], x.then(t, t)
                }
                return this
            }, d.url = ((e || d.url) + "").replace(Xt, "").replace(Gt, Rt[1] + "//"), d.dataTypes = $.trim(d.dataType || "*").toLowerCase().split(ti), null == d.crossDomain && (c = ni.exec(d.url.toLowerCase()), d.crossDomain = !(!c || c[1] == Rt[1] && c[2] == Rt[2] && (c[3] || ("http:" === c[1] ? 80 : 443)) == (Rt[3] || ("http:" === Rt[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = $.param(d.data, d.traditional)), _(oi, d, i, x), 2 === w) return !1;
            if (u = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Vt.test(d.type), u && 0 === $.active++ && $.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Jt.test(d.url) ? "&" : "?") + d.data, delete d.data), s = d.url, d.cache === !1)) {
                var D = $.now(),
                    S = d.url.replace(ii, "$1_=" + D);
                d.url = S + (S === d.url ? (Jt.test(d.url) ? "&" : "?") + "_=" + D : "")
            }(d.data && d.hasContent && d.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), d.ifModified && (s = s || d.url, $.lastModified[s] && x.setRequestHeader("If-Modified-Since", $.lastModified[s]), $.etag[s] && x.setRequestHeader("If-None-Match", $.etag[s])), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ai + "; q=0.01" : "") : d.accepts["*"]);
            for (h in d.headers) x.setRequestHeader(h, d.headers[h]);
            if (d.beforeSend && (d.beforeSend.call(p, x, d) === !1 || 2 === w)) return x.abort(), !1;
            for (h in {
                success: 1,
                error: 1,
                complete: 1
            }) x[h](d[h]);
            if (a = _(ri, d, i, x)) {
                x.readyState = 1, u && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function () {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, a.send(b, n)
                } catch (T) {
                    if (!(2 > w)) throw T;
                    n(-1, T)
                }
            } else n(-1, "No Transport");
            return x
        },
        param: function (e, i) {
            var n = [],
                s = function (e, t) {
                    t = $.isFunction(t) ? t() : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (i === t && (i = $.ajaxSettings.traditional), $.isArray(e) || e.jquery && !$.isPlainObject(e)) $.each(e, function () {
                s(this.name, this.value)
            });
            else for (var o in e) x(o, e[o], i, s);
            return n.join("&").replace(qt, "+")
        }
    }), $.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ci = $.now(),
        ui = /(\=)\?(&|$)|\?\?/i;
    $.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return $.expando + "_" + ci++
        }
    }), $.ajaxPrefilter("json jsonp", function (t, i, n) {
        var s = "string" == typeof t.data && /^application\/x\-www\-form\-urlencoded/.test(t.contentType);
        if ("jsonp" === t.dataTypes[0] || t.jsonp !== !1 && (ui.test(t.url) || s && ui.test(t.data))) {
            var o, r = t.jsonpCallback = $.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                a = e[r],
                l = t.url,
                c = t.data,
                u = "$1" + r + "$2";
            return t.jsonp !== !1 && (l = l.replace(ui, u), t.url === l && (s && (c = c.replace(ui, u)), t.data === c && (l += (/\?/.test(l) ? "&" : "?") + t.jsonp + "=" + r))), t.url = l, t.data = c, e[r] = function (e) {
                o = [e]
            }, n.always(function () {
                e[r] = a, o && $.isFunction(a) && e[r](o[0])
            }), t.converters["script json"] = function () {
                return o || $.error(r + " was not called"), o[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), $.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return $.globalEval(e), e
            }
        }
    }), $.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), $.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var i, n = E.head || E.getElementsByTagName("head")[0] || E.documentElement;
            return {
                send: function (s, o) {
                    i = E.createElement("script"), i.async = "async", e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function (e, s) {
                        (s || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = t, s || o(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function () {
                    i && i.onload(0, 1)
                }
            }
        }
    });
    var hi, di = e.ActiveXObject ?
    function () {
        for (var e in hi) hi[e](0, 1)
    } : !1, pi = 0;
    $.ajaxSettings.xhr = e.ActiveXObject ?
    function () {
        return !this.isLocal && D() || S()
    } : D, function (e) {
        $.extend($.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }($.ajaxSettings.xhr()), $.support.ajax && $.ajaxTransport(function (i) {
        if (!i.crossDomain || $.support.cors) {
            var n;
            return {
                send: function (s, o) {
                    var r, a, l = i.xhr();
                    if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields) for (a in i.xhrFields) l[a] = i.xhrFields[a];
                    i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in s) l.setRequestHeader(a, s[a])
                    } catch (c) {}
                    l.send(i.hasContent && i.data || null), n = function (e, s) {
                        var a, c, u, h, d;
                        try {
                            if (n && (s || 4 === l.readyState)) if (n = t, r && (l.onreadystatechange = $.noop, di && delete hi[r]), s) 4 !== l.readyState && l.abort();
                            else {
                                a = l.status, u = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d);
                                try {
                                    h.text = l.responseText
                                } catch (e) {}
                                try {
                                    c = l.statusText
                                } catch (p) {
                                    c = ""
                                }
                                a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                            }
                        } catch (f) {
                            s || o(-1, f)
                        }
                        h && o(a, c, h, u)
                    }, i.async && 4 !== l.readyState ? (r = ++pi, di && (hi || (hi = {}, $(e).unload(di)), hi[r] = n), l.onreadystatechange = n) : n()
                },
                abort: function () {
                    n && n(0, 1)
                }
            }
        }
    });
    var fi, gi, mi, vi, bi = {},
        yi = /^(?:toggle|show|hide)$/,
        _i = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        wi = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ];
    $.fn.extend({
        show: function (e, t, i) {
            var n, s;
            if (e || 0 === e) return this.animate(I("show", 3), e, t, i);
            for (var o = 0, r = this.length; r > o; o++) n = this[o], n.style && (s = n.style.display, $._data(n, "olddisplay") || "none" !== s || (s = n.style.display = ""), ("" === s && "none" === $.css(n, "display") || !$.contains(n.ownerDocument.documentElement, n)) && $._data(n, "olddisplay", P(n.nodeName)));
            for (o = 0; r > o; o++) n = this[o], n.style && (s = n.style.display, ("" === s || "none" === s) && (n.style.display = $._data(n, "olddisplay") || ""));
            return this
        },
        hide: function (e, t, i) {
            if (e || 0 === e) return this.animate(I("hide", 3), e, t, i);
            for (var n, s, o = 0, r = this.length; r > o; o++) n = this[o], n.style && (s = $.css(n, "display"), "none" === s || $._data(n, "olddisplay") || $._data(n, "olddisplay", s));
            for (o = 0; r > o; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: $.fn.toggle,
        toggle: function (e, t, i) {
            var n = "boolean" == typeof e;
            return $.isFunction(e) && $.isFunction(t) ? this._toggle.apply(this, arguments) : null == e || n ? this.each(function () {
                var t = n ? e : $(this).is(":hidden");
                $(this)[t ? "show" : "hide"]()
            }) : this.animate(I("toggle", 3), e, t, i), this
        },
        fadeTo: function (e, t, i, n) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function (e, t, i, n) {
            function s() {
                o.queue === !1 && $._mark(this);
                var t, i, n, s, r, a, l, c, u, h, d, p = $.extend({}, o),
                    f = 1 === this.nodeType,
                    g = f && $(this).is(":hidden");
                p.animatedProperties = {};
                for (n in e) if (t = $.camelCase(n), n !== t && (e[t] = e[n], delete e[n]), (r = $.cssHooks[t]) && "expand" in r) {
                    a = r.expand(e[t]), delete e[t];
                    for (n in a) n in e || (e[n] = a[n])
                }
                for (t in e) {
                    if (i = e[t], $.isArray(i) ? (p.animatedProperties[t] = i[1], i = e[t] = i[0]) : p.animatedProperties[t] = p.specialEasing && p.specialEasing[t] || p.easing || "swing", "hide" === i && g || "show" === i && !g) return p.complete.call(this);
                    !f || "height" !== t && "width" !== t || (p.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === $.css(this, "display") && "none" === $.css(this, "float") && ($.support.inlineBlockNeedsLayout && "inline" !== P(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != p.overflow && (this.style.overflow = "hidden");
                for (n in e) s = new $.fx(this, p, n), i = e[n], yi.test(i) ? (d = $._data(this, "toggle" + n) || ("toggle" === i ? g ? "show" : "hide" : 0), d ? ($._data(this, "toggle" + n, "show" === d ? "hide" : "show"), s[d]()) : s[i]()) : (l = _i.exec(i), c = s.cur(), l ? (u = parseFloat(l[2]), h = l[3] || ($.cssNumber[n] ? "" : "px"), "px" !== h && ($.style(this, n, (u || 1) + h), c = (u || 1) / s.cur() * c, $.style(this, n, c + h)), l[1] && (u = ("-=" === l[1] ? -1 : 1) * u + c), s.custom(c, u, h)) : s.custom(c, i, ""));
                return !0
            }
            var o = $.speed(t, i, n);
            return $.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = $.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
        },
        stop: function (e, i, n) {
            return "string" != typeof e && (n = i, i = e, e = t), i && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function t(e, t, i) {
                    var s = t[i];
                    $.removeData(e, i, !0), s.stop(n)
                }
                var i, s = !1,
                    o = $.timers,
                    r = $._data(this);
                if (n || $._unmark(!0, this), null == e) for (i in r) r[i] && r[i].stop && i.indexOf(".run") === i.length - 4 && t(this, r, i);
                else r[i = e + ".run"] && r[i].stop && t(this, r, i);
                for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (n ? o[i](!0) : o[i].saveState(), s = !0, o.splice(i, 1));
                n && s || $.dequeue(this, e)
            })
        }
    }), $.each({
        slideDown: I("show", 1),
        slideUp: I("hide", 1),
        slideToggle: I("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        $.fn[e] = function (e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), $.extend({
        speed: function (e, t, i) {
            var n = e && "object" == typeof e ? $.extend({}, e) : {
                complete: i || !i && t || $.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !$.isFunction(t) && t
            };
            return n.duration = $.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in $.fx.speeds ? $.fx.speeds[n.duration] : $.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function (e) {
                $.isFunction(n.old) && n.old.call(this), n.queue ? $.dequeue(this, n.queue) : e !== !1 && $._unmark(this)
            }, n
        },
        easing: {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return -Math.cos(e * Math.PI) / 2 + .5
            }
        },
        timers: [],
        fx: function (e, t, i) {
            this.options = t, this.elem = e, this.prop = i, t.orig = t.orig || {}
        }
    }), $.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), ($.fx.step[this.prop] || $.fx.step._default)(this)
        },
        cur: function () {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var e, t = $.css(this.elem, this.prop);
            return isNaN(e = parseFloat(t)) ? t && "auto" !== t ? t : 0 : e
        },
        custom: function (e, i, n) {
            function s(e) {
                return o.step(e)
            }
            var o = this,
                r = $.fx;
            this.startTime = vi || T(), this.end = i, this.now = this.start = e, this.pos = this.state = 0, this.unit = n || this.unit || ($.cssNumber[this.prop] ? "" : "px"), s.queue = this.options.queue, s.elem = this.elem, s.saveState = function () {
                $._data(o.elem, "fxshow" + o.prop) === t && (o.options.hide ? $._data(o.elem, "fxshow" + o.prop, o.start) : o.options.show && $._data(o.elem, "fxshow" + o.prop, o.end))
            }, s() && $.timers.push(s) && !mi && (mi = setInterval(r.tick, r.interval))
        },
        show: function () {
            var e = $._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || $.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), $(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = $._data(this.elem, "fxshow" + this.prop) || $.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (e) {
            var t, i, n, s = vi || T(),
                o = !0,
                r = this.elem,
                a = this.options;
            if (e || s >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (o = !1);
                if (o) {
                    if (null == a.overflow || $.support.shrinkWrapBlocks || $.each(["", "X", "Y"], function (e, t) {
                        r.style["overflow" + t] = a.overflow[e]
                    }), a.hide && $(r).hide(), a.hide || a.show) for (t in a.animatedProperties) $.style(r, t, a.orig[t]), $.removeData(r, "fxshow" + t, !0), $.removeData(r, "toggle" + t, !0);
                    n = a.complete, n && (a.complete = !1, n.call(r))
                }
                return !1
            }
            return 1 / 0 == a.duration ? this.now = s : (i = s - this.startTime, this.state = i / a.duration, this.pos = $.easing[a.animatedProperties[this.prop]](this.state, i, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, $.extend($.fx, {
        tick: function () {
            for (var e, t = $.timers, i = 0; i < t.length; i++) e = t[i], e() || t[i] !== e || t.splice(i--, 1);
            t.length || $.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(mi), mi = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                $.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                e.elem.style && null != e.elem.style[e.prop] ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), $.each(wi.concat.apply([], wi), function (e, t) {
        t.indexOf("margin") && ($.fx.step[t] = function (e) {
            $.style(e.elem, t, Math.max(0, e.now) + e.unit)
        })
    }), $.expr && $.expr.filters && ($.expr.filters.animated = function (e) {
        return $.grep($.timers, function (t) {
            return e === t.elem
        }).length
    });
    var xi, ki = /^t(?:able|d|h)$/i,
        Ci = /^(?:body|html)$/i;
    xi = "getBoundingClientRect" in E.documentElement ?
    function (e, t, i, n) {
        try {
            n = e.getBoundingClientRect()
        } catch (s) {}
        if (!n || !$.contains(i, e)) return n ? {
            top: n.top,
            left: n.left
        } : {
            top: 0,
            left: 0
        };
        var o = t.body,
            r = N(t),
            a = i.clientTop || o.clientTop || 0,
            l = i.clientLeft || o.clientLeft || 0,
            c = r.pageYOffset || $.support.boxModel && i.scrollTop || o.scrollTop,
            u = r.pageXOffset || $.support.boxModel && i.scrollLeft || o.scrollLeft,
            h = n.top + c - a,
            d = n.left + u - l;
        return {
            top: h,
            left: d
        }
    } : function (e, t, i) {
        for (var n, s = e.offsetParent, o = e, r = t.body, a = t.defaultView, l = a ? a.getComputedStyle(e, null) : e.currentStyle, c = e.offsetTop, u = e.offsetLeft;
        (e = e.parentNode) && e !== r && e !== i && (!$.support.fixedPosition || "fixed" !== l.position);) n = a ? a.getComputedStyle(e, null) : e.currentStyle, c -= e.scrollTop, u -= e.scrollLeft, e === s && (c += e.offsetTop, u += e.offsetLeft, !$.support.doesNotAddBorder || $.support.doesAddBorderForTableAndCells && ki.test(e.nodeName) || (c += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), o = s, s = e.offsetParent), $.support.subtractsBorderForOverflowNotVisible && "visible" !== n.overflow && (c += parseFloat(n.borderTopWidth) || 0, u += parseFloat(n.borderLeftWidth) || 0), l = n;
        return ("relative" === l.position || "static" === l.position) && (c += r.offsetTop, u += r.offsetLeft), $.support.fixedPosition && "fixed" === l.position && (c += Math.max(i.scrollTop, r.scrollTop), u += Math.max(i.scrollLeft, r.scrollLeft)), {
            top: c,
            left: u
        }
    }, $.fn.offset = function (e) {
        if (arguments.length) return e === t ? this : this.each(function (t) {
            $.offset.setOffset(this, e, t)
        });
        var i = this[0],
            n = i && i.ownerDocument;
        return n ? i === n.body ? $.offset.bodyOffset(i) : xi(i, n, n.documentElement) : null
    }, $.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                i = e.offsetLeft;
            return $.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat($.css(e, "marginTop")) || 0, i += parseFloat($.css(e, "marginLeft")) || 0), {
                top: t,
                left: i
            }
        },
        setOffset: function (e, t, i) {
            var n = $.css(e, "position");
            "static" === n && (e.style.position = "relative");
            var s, o, r = $(e),
                a = r.offset(),
                l = $.css(e, "top"),
                c = $.css(e, "left"),
                u = ("absolute" === n || "fixed" === n) && $.inArray("auto", [l, c]) > -1,
                h = {},
                d = {};
            u ? (d = r.position(), s = d.top, o = d.left) : (s = parseFloat(l) || 0, o = parseFloat(c) || 0), $.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (h.top = t.top - a.top + s), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : r.css(h)
        }
    }, $.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                i = this.offset(),
                n = Ci.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return i.top -= parseFloat($.css(e, "marginTop")) || 0, i.left -= parseFloat($.css(e, "marginLeft")) || 0, n.top += parseFloat($.css(t[0], "borderTopWidth")) || 0, n.left += parseFloat($.css(t[0], "borderLeftWidth")) || 0, {
                top: i.top - n.top,
                left: i.left - n.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || E.body; e && !Ci.test(e.nodeName) && "static" === $.css(e, "position");) e = e.offsetParent;
                return e
            })
        }
    }), $.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, i) {
        var n = /Y/.test(i);
        $.fn[e] = function (s) {
            return $.access(this, function (e, s, o) {
                var r = N(e);
                return o === t ? r ? i in r ? r[i] : $.support.boxModel && r.document.documentElement[s] || r.document.body[s] : e[s] : (r ? r.scrollTo(n ? $(r).scrollLeft() : o, n ? o : $(r).scrollTop()) : e[s] = o, void 0)
            }, e, s, arguments.length, null)
        }
    }), $.each({
        Height: "height",
        Width: "width"
    }, function (e, i) {
        var n = "client" + e,
            s = "scroll" + e,
            o = "offset" + e;
        $.fn["inner" + e] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat($.css(e, i, "padding")) : this[i]() : null
        }, $.fn["outer" + e] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat($.css(t, i, e ? "margin" : "border")) : this[i]() : null
        }, $.fn[i] = function (e) {
            return $.access(this, function (e, i, r) {
                var a, l, c, u;
                return $.isWindow(e) ? (a = e.document, l = a.documentElement[n], $.support.boxModel && l || a.body && a.body[n] || l) : 9 === e.nodeType ? (a = e.documentElement, a[n] >= a[s] ? a[n] : Math.max(e.body[s], a[s], e.body[o], a[o])) : r === t ? (c = $.css(e, i), u = parseFloat(c), $.isNumeric(u) ? u : c) : ($(e).css(i, r), void 0)
            }, i, e, arguments.length, null)
        }
    }), e.jQuery = e.$ = $, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return $
    })
}(window), function (e, t) {
    var i;
    e.rails = i = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function (t) {
            var i = e('meta[name="csrf-token"]').attr("content");
            i && t.setRequestHeader("X-CSRF-Token", i)
        },
        fire: function (t, i, n) {
            var s = e.Event(i);
            return t.trigger(s, n), s.result !== !1
        },
        confirm: function (e) {
            return confirm(e)
        },
        ajax: function (t) {
            return e.ajax(t)
        },
        href: function (e) {
            return e.attr("href")
        },
        handleRemote: function (n) {
            var s, o, r, a, l, c;
            if (i.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain") || null, l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    s = n.attr("method"), o = n.attr("action"), r = n.serializeArray();
                    var u = n.data("ujs:submit-button");
                    u && (r.push(u), n.data("ujs:submit-button", null))
                } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), r = n.serialize(), n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), r = n.data("params") || null);
                return c = {
                    type: s || "GET",
                    data: r,
                    dataType: l,
                    crossDomain: a,
                    beforeSend: function (e, s) {
                        return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [e, s])
                    },
                    success: function (e, t, i) {
                        n.trigger("ajax:success", [e, t, i])
                    },
                    complete: function (e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function (e, t, i) {
                        n.trigger("ajax:error", [e, t, i])
                    }
                }, o && (c.url = o), i.ajax(c)
            }
            return !1
        },
        handleMethod: function (n) {
            var s = i.href(n),
                o = n.data("method"),
                r = n.attr("target"),
                a = e("meta[name=csrf-token]").attr("content"),
                l = e("meta[name=csrf-param]").attr("content"),
                c = e('<form method="post" action="' + s + '"></form>'),
                u = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== t && a !== t && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && c.attr("target", r), c.hide().append(u).appendTo("body"), c.submit()
        },
        disableFormElements: function (t) {
            t.find(i.disableSelector).each(function () {
                var t = e(this),
                    i = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[i]()), t[i](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function (t) {
            t.find(i.enableSelector).each(function () {
                var t = e(this),
                    i = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[i](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function (e) {
            var t, n = e.data("confirm"),
                s = !1;
            return n ? (i.fire(e, "confirm") && (s = i.confirm(n), t = i.fire(e, "confirm:complete", [s])), s && t) : !0
        },
        blankInputs: function (t, i, n) {
            var s, o = e(),
                r = i || "input,textarea";
            return t.find(r).each(function () {
                s = e(this), (n ? s.val() : !s.val()) && (o = o.add(s))
            }), o.length ? o : !1
        },
        nonBlankInputs: function (e, t) {
            return i.blankInputs(e, t, !0)
        },
        stopEverything: function (t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function (i, n) {
            var s = i.data("events"),
                o = !0;
            return s !== t && s.submit !== t && e.each(s.submit, function (e, t) {
                return "function" == typeof t.handler ? o = t.handler(n) : void 0
            }), o
        },
        disableElement: function (e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function (e) {
                return i.stopEverything(e)
            })
        },
        enableElement: function (e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, e.ajaxPrefilter(function (e, t, n) {
        e.crossDomain || i.CSRFProtection(n)
    }), e(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
        i.enableElement(e(this))
    }), e(document).delegate(i.linkClickSelector, "click.rails", function (n) {
        var s = e(this),
            o = s.data("method"),
            r = s.data("params");
        return i.allowAction(s) ? (s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== t ? !n.metaKey && !n.ctrlKey || o && "GET" !== o || r ? (i.handleRemote(s) === !1 && i.enableElement(s), !1) : !0 : s.data("method") ? (i.handleMethod(s), !1) : void 0) : i.stopEverything(n)
    }), e(document).delegate(i.inputChangeSelector, "change.rails", function (t) {
        var n = e(this);
        return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(t)
    }), e(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
        var s = e(this),
            o = s.data("remote") !== t,
            r = i.blankInputs(s, i.requiredInputSelector),
            a = i.nonBlankInputs(s, i.fileInputSelector);
        return i.allowAction(s) ? r && s.attr("novalidate") == t && i.fire(s, "ajax:aborted:required", [r]) ? i.stopEverything(n) : o ? a ? i.fire(s, "ajax:aborted:file", [a]) : !e.support.submitBubbles && e().jquery < "1.7" && i.callFormSubmitBindings(s, n) === !1 ? i.stopEverything(n) : (i.handleRemote(s), !1) : (setTimeout(function () {
            i.disableFormElements(s)
        }, 13), void 0) : i.stopEverything(n)
    }), e(document).delegate(i.formInputClickSelector, "click.rails", function (t) {
        var n = e(this);
        if (!i.allowAction(n)) return i.stopEverything(t);
        var s = n.attr("name"),
            o = s ? {
                name: s,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", o)
    }), e(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
        this == t.target && i.disableFormElements(e(this))
    }), e(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (t) {
        this == t.target && i.enableFormElements(e(this))
    })
}(jQuery),
/*!
 * jQuery UI 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */

function (e, t) {
    function i(t, i) {
        var s = t.nodeName.toLowerCase();
        if ("area" === s) {
            var o, r = t.parentNode,
                a = r.name;
            return t.href && a && "map" === r.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !! o && n(o)) : !1
        }
        return (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" == s ? t.href || i : i) && n(t)
    }
    function n(t) {
        return !e(t).parents().andSelf().filter(function () {
            return "hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, {
        version: "1.8.18",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function (t, i) {
            return "number" == typeof t ? this.each(function () {
                var n = this;
                setTimeout(function () {
                    e(n).focus(), i && i.call(n)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function () {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length) for (var n, s, o = e(this[0]); o.length && o[0] !== document;) {
                if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(o.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                o = o.parent()
            }
            return 0
        },
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.each(["Width", "Height"], function (i, n) {
        function s(t, i, n, s) {
            return e.each(o, function () {
                i -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0, n && (i -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0), s && (i -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }), i
        }
        var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            r = n.toLowerCase(),
            a = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function (i) {
            return i === t ? a["inner" + n].call(this) : this.each(function () {
                e(this).css(r, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function (t, i) {
            return "number" != typeof t ? a["outer" + n].call(this, t) : this.each(function () {
                e(this).css(r, s(this, t, !0, i) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: function (t, i, n) {
            return !!e.data(t, n[3])
        },
        focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var n = e.attr(t, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }), e(function () {
        var t = document.body,
            i = t.appendChild(i = document.createElement("div"));
        i.offsetHeight, e.extend(i.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }), e.support.minHeight = 100 === i.offsetHeight, e.support.selectstart = "onselectstart" in i, t.removeChild(i).style.display = "none"
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, i, n) {
                var s = e.ui[t].prototype;
                for (var o in n) s.plugins[o] = s.plugins[o] || [], s.plugins[o].push([i, n[o]])
            },
            call: function (e, t, i) {
                var n = e.plugins[t];
                if (n && e.element[0].parentNode) for (var s = 0; s < n.length; s++) e.options[n[s][0]] && n[s][1].apply(e.element, i)
            }
        },
        contains: function (e, t) {
            return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
        },
        hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        },
        isOverAxis: function (e, t, i) {
            return e > t && t + i > e
        },
        isOver: function (t, i, n, s, o, r) {
            return e.ui.isOverAxis(t, n, o) && e.ui.isOverAxis(i, s, r)
        }
    }))
}(jQuery),
/*!
 * jQuery UI Widget 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */

function (e, t) {
    if (e.cleanData) {
        var i = e.cleanData;
        e.cleanData = function (t) {
            for (var n, s = 0; null != (n = t[s]); s++) try {
                e(n).triggerHandler("remove")
            } catch (o) {}
            i(t)
        }
    } else {
        var n = e.fn.remove;
        e.fn.remove = function (t, i) {
            return this.each(function () {
                return i || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function () {
                    try {
                        e(this).triggerHandler("remove")
                    } catch (t) {}
                }), n.call(e(this), t, i)
            })
        }
    }
    e.widget = function (t, i, n) {
        var s, o = t.split(".")[0];
        t = t.split(".")[1], s = o + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s] = function (i) {
            return !!e.data(i, t)
        }, e[o] = e[o] || {}, e[o][t] = function (e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var r = new i;
        r.options = e.extend(!0, {}, r.options), e[o][t].prototype = e.extend(!0, r, {
            namespace: o,
            widgetName: t,
            widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: s
        }, n), e.widget.bridge(t, e[o][t])
    }, e.widget.bridge = function (i, n) {
        e.fn[i] = function (s) {
            var o = "string" == typeof s,
                r = Array.prototype.slice.call(arguments, 1),
                a = this;
            return s = !o && r.length ? e.extend.apply(null, [!0, s].concat(r)) : s, o && "_" === s.charAt(0) ? a : (o ? this.each(function () {
                var n = e.data(this, i),
                    o = n && e.isFunction(n[s]) ? n[s].apply(n, r) : n;
                return o !== n && o !== t ? (a = o, !1) : void 0
            }) : this.each(function () {
                var t = e.data(this, i);
                t ? t.option(s || {})._init() : e.data(this, i, new n(s, this))
            }), a)
        }
    }, e.Widget = function (e, t) {
        arguments.length && this._createWidget(e, t)
    }, e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function (t, i) {
            e.data(i, this.widgetName, this), this.element = e(i), this.options = e.extend(!0, {}, this.options, this._getCreateOptions(), t);
            var n = this;
            this.element.bind("remove." + this.widgetName, function () {
                n.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function () {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () {},
        _init: function () {},
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName), this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled " + "ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (i, n) {
            var s = i;
            if (0 === arguments.length) return e.extend({}, this.options);
            if ("string" == typeof i) {
                if (n === t) return this.options[i];
                s = {}, s[i] = n
            }
            return this._setOptions(s), this
        },
        _setOptions: function (t) {
            var i = this;
            return e.each(t, function (e, t) {
                i._setOption(e, t)
            }), this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && this.widget()[t ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled" + " " + "ui-state-disabled").attr("aria-disabled", t), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _trigger: function (t, i, n) {
            var s, o, r = this.options[t];
            if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (s in o) s in i || (i[s] = o[s]);
            return this.element.trigger(i, n), !(e.isFunction(r) && r.call(this.element[0], i, n) === !1 || i.isDefaultPrevented())
        }
    }
}(jQuery),
/*!
 * jQuery UI Mouse 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */

function (e) {
    var t = !1;
    e(document).mouseup(function () {
        t = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (i) {
            if (!t) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var n = this,
                    s = 1 == i.which,
                    o = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
                return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    n.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return n._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return n._mouseUp(e)
                }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            return !e.browser.msie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target == this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
/*
 * jQuery UI Draggable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

function (e) {
    e.widget("ui.draggable", e.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1
        },
        _create: function () {
            "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        destroy: function () {
            return this.element.data("draggable") ? (this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy(), this) : void 0
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this.helper || i.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (i.iframeFix && e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
                e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.helper.addClass("ui-draggable-dragging"), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, i) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (this._trigger("drag", t, n) === !1) return this._mouseUp({}), !1;
                this.position = n.position
            }
            return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = !1;
            if (e.ui.ddmanager && !this.options.dropBehaviour && (i = e.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), !(this.element[0] && this.element[0].parentNode || "original" != this.options.helper)) return !1;
            if ("invalid" == this.options.revert && !i || "valid" == this.options.revert && i || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, i)) {
                var n = this;
                e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    n._trigger("stop", t) !== !1 && n._clear()
                })
            } else this._trigger("stop", t) !== !1 && this._clear();
            return !1
        },
        _mouseUp: function (t) {
            return this.options.iframeFix === !0 && e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var i = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0;
            return e(this.options.handle, this.element).find("*").andSelf().each(function () {
                this == t.target && (i = !0)
            }), i
        },
        _createHelper: function (t) {
            var i = this.options,
                n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" == i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" == i.appendTo ? this.element[0].parentNode : i.appendTo), n[0] == this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.browser.msie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
            else {
                var i = e(t.containment),
                    n = i[0];
                if (!n) return;
                i.offset();
                var s = "hidden" != e(n).css("overflow");
                this.containment = [(parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0), (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0), (s ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (s ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
            }
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var n = "absolute" == t ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n),
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n)
            }
        },
        _generatePosition: function (t) {
            var i = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(n[0].tagName),
                o = t.pageX,
                r = t.pageY;
            if (this.originalPosition) {
                var a;
                if (this.containment) {
                    if (this.relative_container) {
                        var l = this.relative_container.offset();
                        a = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                    } else a = this.containment;
                    t.pageX - this.offset.click.left < a[0] && (o = a[0] + this.offset.click.left), t.pageY - this.offset.click.top < a[1] && (r = a[1] + this.offset.click.top), t.pageX - this.offset.click.left > a[2] && (o = a[2] + this.offset.click.left), t.pageY - this.offset.click.top > a[3] && (r = a[3] + this.offset.click.top)
                }
                if (i.grid) {
                    var c = i.grid[1] ? this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1] : this.originalPageY;
                    r = a ? c - this.offset.click.top < a[1] || c - this.offset.click.top > a[3] ? c - this.offset.click.top < a[1] ? c + i.grid[1] : c - i.grid[1] : c : c;
                    var u = i.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0] : this.originalPageX;
                    o = a ? u - this.offset.click.left < a[0] || u - this.offset.click.left > a[2] ? u - this.offset.click.left < a[0] ? u + i.grid[0] : u - i.grid[0] : u : u
                }
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && e.browser.version < 526 && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, i, n) {
            return n = n || this._uiHash(), e.ui.plugin.call(this, t, [i, n]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, n)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.extend(e.ui.draggable, {
        version: "1.8.18"
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i) {
            var n = e(this).data("draggable"),
                s = n.options,
                o = e.extend({}, i, {
                    item: n.element
                });
            n.sortables = [], e(s.connectToSortable).each(function () {
                var i = e.data(this, "sortable");
                i && !i.options.disabled && (n.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", t, o))
            })
        },
        stop: function (t, i) {
            var n = e(this).data("draggable"),
                s = e.extend({}, i, {
                    item: n.element
                });
            e.each(n.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, n.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == n.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, s))
            })
        },
        drag: function (t, i) {
            var n = e(this).data("draggable"),
                s = this;
            e.each(n.sortables, function () {
                this.instance.positionAbs = n.positionAbs, this.instance.helperProportions = n.helperProportions, this.instance.offset.click = n.offset.click, this.instance._intersectsWith(this.instance.containerCache) ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(s).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return i.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = n.offset.click.top, this.instance.offset.click.left = n.offset.click.left, this.instance.offset.parent.left -= n.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= n.offset.parent.top - this.instance.offset.parent.top, n._trigger("toSortable", t), n.dropped = this.instance.element, n.currentItem = n.element, this.instance.fromOutside = n), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), n._trigger("fromSortable", t), n.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = e("body"),
                i = e(this).data("draggable").options;
            t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
        },
        stop: function () {
            var t = e(this).data("draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i) {
            var n = e(i.helper),
                s = e(this).data("draggable").options;
            n.css("opacity") && (s._opacity = n.css("opacity")), n.css("opacity", s.opacity)
        },
        stop: function (t, i) {
            var n = e(this).data("draggable").options;
            n._opacity && e(i.helper).css("opacity", n._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = e(this).data("draggable");
            t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function (t) {
            var i = e(this).data("draggable"),
                n = i.options,
                s = !1;
            i.scrollParent[0] != document && "HTML" != i.scrollParent[0].tagName ? (n.axis && "x" == n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)), n.axis && "y" == n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" == n.axis || (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? s = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (s = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed))), n.axis && "y" == n.axis || (t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? s = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (s = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed)))), s !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = e(this).data("draggable"),
                i = t.options;
            t.snapElements = [], e(i.snap.constructor != String ? i.snap.items || ":data(draggable)" : i.snap).each(function () {
                var i = e(this),
                    n = i.offset();
                this != t.element[0] && t.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function (t, i) {
            for (var n = e(this).data("draggable"), s = n.options, o = s.snapTolerance, r = i.offset.left, a = r + n.helperProportions.width, l = i.offset.top, c = l + n.helperProportions.height, u = n.snapElements.length - 1; u >= 0; u--) {
                var h = n.snapElements[u].left,
                    d = h + n.snapElements[u].width,
                    p = n.snapElements[u].top,
                    f = p + n.snapElements[u].height;
                if (r > h - o && d + o > r && l > p - o && f + o > l || r > h - o && d + o > r && c > p - o && f + o > c || a > h - o && d + o > a && l > p - o && f + o > l || a > h - o && d + o > a && c > p - o && f + o > c) {
                    if ("inner" != s.snapMode) {
                        var g = Math.abs(p - c) <= o,
                            m = Math.abs(f - l) <= o,
                            v = Math.abs(h - a) <= o,
                            b = Math.abs(d - r) <= o;
                        g && (i.position.top = n._convertPositionTo("relative", {
                            top: p - n.helperProportions.height,
                            left: 0
                        }).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {
                            top: f,
                            left: 0
                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: h - n.helperProportions.width
                        }).left - n.margins.left), b && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: d
                        }).left - n.margins.left)
                    }
                    var y = g || m || v || b;
                    if ("outer" != s.snapMode) {
                        var g = Math.abs(p - l) <= o,
                            m = Math.abs(f - c) <= o,
                            v = Math.abs(h - r) <= o,
                            b = Math.abs(d - a) <= o;
                        g && (i.position.top = n._convertPositionTo("relative", {
                            top: p,
                            left: 0
                        }).top - n.margins.top), m && (i.position.top = n._convertPositionTo("relative", {
                            top: f - n.helperProportions.height,
                            left: 0
                        }).top - n.margins.top), v && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: h
                        }).left - n.margins.left), b && (i.position.left = n._convertPositionTo("relative", {
                            top: 0,
                            left: d - n.helperProportions.width
                        }).left - n.margins.left)
                    }!n.snapElements[u].snapping && (g || m || v || b || y) && n.options.snap.snap && n.options.snap.snap.call(n.element, t, e.extend(n._uiHash(), {
                        snapItem: n.snapElements[u].item
                    })), n.snapElements[u].snapping = g || m || v || b || y
                } else n.snapElements[u].snapping && n.options.snap.release && n.options.snap.release.call(n.element, t, e.extend(n._uiHash(), {
                    snapItem: n.snapElements[u].item
                })), n.snapElements[u].snapping = !1
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function () {
            var t = e(this).data("draggable").options,
                i = e.makeArray(e(t.stack)).sort(function (t, i) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                });
            if (i.length) {
                var n = parseInt(i[0].style.zIndex) || 0;
                e(i).each(function (e) {
                    this.style.zIndex = n + e
                }), this[0].style.zIndex = n + i.length
            }
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i) {
            var n = e(i.helper),
                s = e(this).data("draggable").options;
            n.css("zIndex") && (s._zIndex = n.css("zIndex")), n.css("zIndex", s.zIndex)
        },
        stop: function (t, i) {
            var n = e(this).data("draggable").options;
            n._zIndex && e(i.helper).css("zIndex", n._zIndex)
        }
    })
}(jQuery),
/*
 * jQuery UI Droppable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */

function (e) {
    e.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var t = this.options,
                i = t.accept;
            this.isover = 0, this.isout = 1, this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            }, this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function () {
            for (var t = e.ui.ddmanager.droppables[this.options.scope], i = 0; i < t.length; i++) t[i] == this && t.splice(i, 1);
            return this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable"), this
        },
        _setOption: function (t, i) {
            "accept" == t && (this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            }), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] != this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function (t, i) {
            var n = i || e.ui.ddmanager.current;
            if (!n || (n.currentItem || n.element)[0] == this.element[0]) return !1;
            var s = !1;
            return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var t = e.data(this, "droppable");
                return t.options.greedy && !t.options.disabled && t.options.scope == n.options.scope && t.accept.call(t.element[0], n.currentItem || n.element) && e.ui.intersect(n, e.extend(t, {
                    offset: t.element.offset()
                }), t.options.tolerance) ? (s = !0, !1) : void 0
            }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(n)), this.element) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.extend(e.ui.droppable, {
        version: "1.8.18"
    }), e.ui.intersect = function (t, i, n) {
        if (!i.offset) return !1;
        var s = (t.positionAbs || t.position.absolute).left,
            o = s + t.helperProportions.width,
            r = (t.positionAbs || t.position.absolute).top,
            a = r + t.helperProportions.height,
            l = i.offset.left,
            c = l + i.proportions.width,
            u = i.offset.top,
            h = u + i.proportions.height;
        switch (n) {
        case "fit":
            return s >= l && c >= o && r >= u && h >= a;
        case "intersect":
            return l < s + t.helperProportions.width / 2 && o - t.helperProportions.width / 2 < c && u < r + t.helperProportions.height / 2 && a - t.helperProportions.height / 2 < h;
        case "pointer":
            var d = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                p = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                f = e.ui.isOver(p, d, u, l, i.proportions.height, i.proportions.width);
            return f;
        case "touch":
            return (r >= u && h >= r || a >= u && h >= a || u > r && a > h) && (s >= l && c >= s || o >= l && c >= o || l > s && o > c);
        default:
            return !1
        }
    }, e.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (t, i) {
            var n = e.ui.ddmanager.droppables[t.options.scope] || [],
                s = i ? i.type : null,
                o = (t.currentItem || t.element).find(":data(droppable)").andSelf();
            e: for (var r = 0; r < n.length; r++) if (!(n[r].options.disabled || t && !n[r].accept.call(n[r].element[0], t.currentItem || t.element))) {
                for (var a = 0; a < o.length; a++) if (o[a] == n[r].element[0]) {
                    n[r].proportions.height = 0;
                    continue e
                }
                n[r].visible = "none" != n[r].element.css("display"), n[r].visible && ("mousedown" == s && n[r]._activate.call(n[r], i), n[r].offset = n[r].element.offset(), n[r].proportions = {
                    width: n[r].element[0].offsetWidth,
                    height: n[r].element[0].offsetHeight
                })
            }
        },
        drop: function (t, i) {
            var n = !1;
            return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, i)))
            }), n
        },
        dragStart: function (t, i) {
            t.element.parents(":not(body,html)").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        },
        drag: function (t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n = e.ui.intersect(t, this, this.options.tolerance),
                        s = n || 1 != this.isover ? n && 0 == this.isover ? "isover" : null : "isout";
                    if (s) {
                        var o;
                        if (this.options.greedy) {
                            var r = this.element.parents(":data(droppable):eq(0)");
                            r.length && (o = e.data(r[0], "droppable"), o.greedyChild = "isover" == s ? 1 : 0)
                        }
                        o && "isover" == s && (o.isover = 0, o.isout = 1, o._out.call(o, i)), this[s] = 1, this["isout" == s ? "isover" : "isout"] = 0, this["isover" == s ? "_over" : "_out"].call(this, i), o && "isout" == s && (o.isout = 0, o.isover = 1, o._over.call(o, i))
                    }
                }
            })
        },
        dragStop: function (t, i) {
            t.element.parents(":not(body,html)").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }
}(jQuery),
/*
 * jQuery UI Resizable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

function (e) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1e3
        },
        _create: function () {
            var t = this,
                i = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = i.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor == String) {
                "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                var n = this.handles.split(",");
                this.handles = {};
                for (var s = 0; s < n.length; s++) {
                    var o = e.trim(n[s]),
                        r = "ui-resizable-" + o,
                        a = e('<div class="ui-resizable-handle ' + r + '"></div>');
                    /sw|se|ne|nw/.test(o) && a.css({
                        zIndex: ++i.zIndex
                    }), "se" == o && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(a)
                }
            }
            this._renderAxis = function (t) {
                t = t || this.element;
                for (var i in this.handles) {
                    if (this.handles[i].constructor == String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var n = e(this.handles[i], this.element),
                            s = 0;
                        s = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth();
                        var o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        t.css(o, s), this._proportionallyResize()
                    }
                    e(this.handles[i]).length
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                if (!t.resizing) {
                    if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    t.axis = e && e[1] ? e[1] : "se"
                }
            }), i.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").hover(function () {
                i.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show())
            }, function () {
                i.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide())
            })), this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            var t = function (t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            if (this.elementIsWrapper) {
                t(this.element);
                var i = this.element;
                i.after(this.originalElement.css({
                    position: i.css("position"),
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: i.css("top"),
                    left: i.css("left")
                })).remove()
            }
            return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var i = !1;
            for (var n in this.handles) e(this.handles[n])[0] == t.target && (i = !0);
            return !this.options.disabled && i
        },
        _mouseStart: function (i) {
            var n = this.options,
                s = this.element.position(),
                o = this.element;
            this.resizing = !0, this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({
                position: "absolute",
                top: s.top,
                left: s.left
            }), this._renderProxy();
            var r = t(this.helper.css("left")),
                a = t(this.helper.css("top"));
            n.containment && (r += e(n.containment).scrollLeft() || 0, a += e(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: r,
                top: a
            }, this.size = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalPosition = {
                left: r,
                top: a
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            var l = e(".ui-resizable-" + this.axis).css("cursor");
            return e("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function (t) {
            var i = this.helper,
                n = (this.options, this.originalMousePosition),
                s = this.axis,
                o = t.pageX - n.left || 0,
                r = t.pageY - n.top || 0,
                a = this._change[s];
            if (!a) return !1;
            var l = a.apply(this, [t, o, r]);
            return e.browser.msie && e.browser.version < 7, this.sizeDiff, this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (l = this._updateRatio(l, t)), l = this._respectSize(l, t), this._propagate("resize", t), i.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(l), this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var i = this.options,
                n = this;
            if (this._helper) {
                var s = this._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    r = o && e.ui.hasScroll(s[0], "left") ? 0 : n.sizeDiff.height,
                    a = o ? 0 : n.sizeDiff.width,
                    l = {
                        width: n.helper.width() - a,
                        height: n.helper.height() - r
                    },
                    c = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                    u = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                i.animate || this.element.css(e.extend(l, {
                    top: u,
                    left: c
                })), n.helper.height(n.size.height), n.helper.width(n.size.width), this._helper && !i.animate && this._proportionallyResize()
            }
            return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t, n, s, o, r, a = this.options;
            r = {
                minWidth: i(a.minWidth) ? a.minWidth : 0,
                maxWidth: i(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: i(a.minHeight) ? a.minHeight : 0,
                maxHeight: i(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, s = r.minWidth / this.aspectRatio, n = r.maxHeight * this.aspectRatio, o = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), s > r.minHeight && (r.minHeight = s), n < r.maxWidth && (r.maxWidth = n), o < r.maxHeight && (r.maxHeight = o)), this._vBoundaries = r
        },
        _updateCache: function (e) {
            this.options, this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = (this.options, this.position),
                n = this.size,
                s = this.axis;
            return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" == s && (e.left = t.left + (n.width - e.width), e.top = null), "nw" == s && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
        },
        _respectSize: function (e, t) {
            var n = (this.helper, this._vBoundaries),
                s = (this._aspectRatio || t.shiftKey, this.axis),
                o = i(e.width) && n.maxWidth && n.maxWidth < e.width,
                r = i(e.height) && n.maxHeight && n.maxHeight < e.height,
                a = i(e.width) && n.minWidth && n.minWidth > e.width,
                l = i(e.height) && n.minHeight && n.minHeight > e.height;
            a && (e.width = n.minWidth), l && (e.height = n.minHeight), o && (e.width = n.maxWidth), r && (e.height = n.maxHeight);
            var c = this.originalPosition.left + this.originalSize.width,
                u = this.position.top + this.size.height,
                h = /sw|nw|w/.test(s),
                d = /nw|ne|n/.test(s);
            a && h && (e.left = c - n.minWidth), o && h && (e.left = c - n.maxWidth), l && d && (e.top = u - n.minHeight), r && d && (e.top = u - n.maxHeight);
            var p = !e.width && !e.height;
            return p && !e.left && e.top ? e.top = null : p && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            if (this.options, this._proportionallyResizeElements.length) for (var t = this.helper || this.element, i = 0; i < this._proportionallyResizeElements.length; i++) {
                var n = this._proportionallyResizeElements[i];
                if (!this.borderDif) {
                    var s = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")],
                        o = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")];
                    this.borderDif = e.map(s, function (e, t) {
                        var i = parseInt(e, 10) || 0,
                            n = parseInt(o[t], 10) || 0;
                        return i + n
                    })
                }
                e.browser.msie && (e(t).is(":hidden") || e(t).parents(":hidden").length) || n.css({
                    height: t.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: t.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.element,
                i = this.options;
            if (this.elementOffset = t.offset(), this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var n = e.browser.msie && e.browser.version < 7,
                    s = n ? 1 : 0,
                    o = n ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + o,
                    height: this.element.outerHeight() + o,
                    position: "absolute",
                    left: this.elementOffset.left - s + "px",
                    top: this.elementOffset.top - s + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()
            } else this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t) {
                var i = (this.options, this.originalSize),
                    n = this.originalPosition;
                return {
                    left: n.left + t,
                    width: i.width - t
                }
            },
            n: function (e, t, i) {
                var n = (this.options, this.originalSize),
                    s = this.originalPosition;
                return {
                    top: s.top + i,
                    height: n.height - i
                }
            },
            s: function (e, t, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function (t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            sw: function (t, i, n) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            },
            ne: function (t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, n]))
            },
            nw: function (t, i, n) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, n]))
            }
        },
        _propagate: function (t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" != t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.extend(e.ui.resizable, {
        version: "1.8.18"
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).data("resizable"),
                i = t.options,
                n = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : e.each(i.alsoResize, function (e) {
                n(e)
            })
        },
        resize: function (t, i) {
            var n = e(this).data("resizable"),
                s = n.options,
                o = n.originalSize,
                r = n.originalPosition,
                a = {
                    height: n.size.height - o.height || 0,
                    width: n.size.width - o.width || 0,
                    top: n.position.top - r.top || 0,
                    left: n.position.left - r.left || 0
                },
                l = function (t, n) {
                    e(t).each(function () {
                        var t = e(this),
                            s = e(this).data("resizable-alsoresize"),
                            o = {},
                            r = n && n.length ? n : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(r, function (e, t) {
                            var i = (s[t] || 0) + (a[t] || 0);
                            i && i >= 0 && (o[t] = i || null)
                        }), t.css(o)
                    })
                };
            "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : e.each(s.alsoResize, function (e, t) {
                l(e, t)
            })
        },
        stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = e(this).data("resizable"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                r = o && e.ui.hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = o ? 0 : i.sizeDiff.width,
                l = {
                    width: i.size.width - a,
                    height: i.size.height - r
                },
                c = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(l, u && c ? {
                top: u,
                left: c
            } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function () {
                    var n = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    s && s.length && e(s[0]).css({
                        width: n.width,
                        height: n.height
                    }), i._updateCache(n), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i = e(this).data("resizable"),
                n = i.options,
                s = i.element,
                o = n.containment,
                r = o instanceof e ? o.get(0) : /parent/.test(o) ? s.parent().get(0) : o;
            if (r) if (i.containerElement = e(r), /document/.test(o) || o == document) i.containerOffset = {
                left: 0,
                top: 0
            }, i.containerPosition = {
                left: 0,
                top: 0
            }, i.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            };
            else {
                var a = e(r),
                    l = [];
                e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                    l[e] = t(a.css("padding" + i))
                }), i.containerOffset = a.offset(), i.containerPosition = a.position(), i.containerSize = {
                    height: a.innerHeight() - l[3],
                    width: a.innerWidth() - l[1]
                };
                var c = i.containerOffset,
                    u = i.containerSize.height,
                    h = i.containerSize.width,
                    d = e.ui.hasScroll(r, "left") ? r.scrollWidth : h,
                    p = e.ui.hasScroll(r) ? r.scrollHeight : u;
                i.parentData = {
                    element: r,
                    left: c.left,
                    top: c.top,
                    width: d,
                    height: p
                }
            }
        },
        resize: function (t) {
            var i = e(this).data("resizable"),
                n = i.options,
                s = (i.containerSize, i.containerOffset),
                o = (i.size, i.position),
                r = i._aspectRatio || t.shiftKey,
                a = {
                    top: 0,
                    left: 0
                },
                l = i.containerElement;
            l[0] != document && /static/.test(l.css("position")) && (a = s), o.left < (i._helper ? s.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - s.left : i.position.left - a.left), r && (i.size.height = i.size.width / n.aspectRatio), i.position.left = n.helper ? s.left : 0), o.top < (i._helper ? s.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - s.top : i.position.top), r && (i.size.width = i.size.height * n.aspectRatio), i.position.top = i._helper ? s.top : 0), i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top;
            var c = Math.abs((i._helper ? i.offset.left - a.left : i.offset.left - a.left) + i.sizeDiff.width),
                u = Math.abs((i._helper ? i.offset.top - a.top : i.offset.top - s.top) + i.sizeDiff.height),
                h = i.containerElement.get(0) == i.element.parent().get(0),
                d = /relative|absolute/.test(i.containerElement.css("position"));
            h && d && (c -= i.parentData.left), c + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - c, r && (i.size.height = i.size.width / i.aspectRatio)), u + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - u, r && (i.size.width = i.size.height * i.aspectRatio))
        },
        stop: function () {
            var t = e(this).data("resizable"),
                i = t.options,
                n = (t.position, t.containerOffset),
                s = t.containerPosition,
                o = t.containerElement,
                r = e(t.helper),
                a = r.offset(),
                l = r.outerWidth() - t.sizeDiff.width,
                c = r.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(o.css("position")) && e(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: c
            }), t._helper && !i.animate && /static/.test(o.css("position")) && e(this).css({
                left: a.left - s.left - n.left,
                width: l,
                height: c
            })
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).data("resizable"),
                i = t.options,
                n = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: n.height,
                width: n.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function () {
            var t = e(this).data("resizable");
            t.options, t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function () {
            var t = e(this).data("resizable");
            t.options, t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function (t) {
            var i = e(this).data("resizable"),
                n = i.options,
                s = i.size,
                o = i.originalSize,
                r = i.originalPosition,
                a = i.axis;
            n._aspectRatio || t.shiftKey, n.grid = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid;
            var l = Math.round((s.width - o.width) / (n.grid[0] || 1)) * (n.grid[0] || 1),
                c = Math.round((s.height - o.height) / (n.grid[1] || 1)) * (n.grid[1] || 1);
            /^(se|s|e)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + c) : /^(ne)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + c, i.position.top = r.top - c) : /^(sw)$/.test(a) ? (i.size.width = o.width + l, i.size.height = o.height + c, i.position.left = r.left - l) : (i.size.width = o.width + l, i.size.height = o.height + c, i.position.top = r.top - c, i.position.left = r.left - l)
        }
    });
    var t = function (e) {
            return parseInt(e, 10) || 0
        },
        i = function (e) {
            return !isNaN(parseInt(e, 10))
        }
}(jQuery),
/*
 * jQuery UI Selectable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var t = this;
            this.element.addClass("ui-selectable"), this.dragged = !1;
            var i;
            this.refresh = function () {
                i = e(t.options.filter, t.element[0]), i.addClass("ui-selectee"), i.each(function () {
                    var t = e(this),
                        i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = i.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function () {
            return this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable"), this._mouseDestroy(), this
        },
        _mouseStart: function (t) {
            var i = this;
            if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
                var n = this.options;
                this.selectees = e(n.filter, this.element[0]), this._trigger("start", t), e(n.appendTo).append(this.helper), this.helper.css({
                    left: t.clientX,
                    top: t.clientY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var n = e.data(this, "selectable-item");
                    n.startselected = !0, t.metaKey || t.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", t, {
                        unselecting: n.element
                    }))
                }), e(t.target).parents().andSelf().each(function () {
                    var n = e.data(this, "selectable-item");
                    if (n) {
                        var s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected");
                        return n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
                            selecting: n.element
                        }) : i._trigger("unselecting", t, {
                            unselecting: n.element
                        }), !1
                    }
                })
            }
        },
        _mouseDrag: function (t) {
            var i = this;
            if (this.dragged = !0, !this.options.disabled) {
                var n = this.options,
                    s = this.opos[0],
                    o = this.opos[1],
                    r = t.pageX,
                    a = t.pageY;
                if (s > r) {
                    var l = r;
                    r = s, s = l
                }
                if (o > a) {
                    var l = a;
                    a = o, o = l
                }
                return this.helper.css({
                    left: s,
                    top: o,
                    width: r - s,
                    height: a - o
                }), this.selectees.each(function () {
                    var l = e.data(this, "selectable-item");
                    if (l && l.element != i.element[0]) {
                        var c = !1;
                        "touch" == n.tolerance ? c = !(l.left > r || l.right < s || l.top > a || l.bottom < o) : "fit" == n.tolerance && (c = l.left > s && l.right < r && l.top > o && l.bottom < a), c ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, i._trigger("selecting", t, {
                            selecting: l.element
                        }))) : (l.selecting && ((t.metaKey || t.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), i._trigger("unselecting", t, {
                            unselecting: l.element
                        }))), l.selected && (t.metaKey || t.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, i._trigger("unselecting", t, {
                            unselecting: l.element
                        }))))
                    }
                }), !1
            }
        },
        _mouseStop: function (t) {
            var i = this;
            return this.dragged = !1, this.options, e(".ui-unselecting", this.element[0]).each(function () {
                var n = e.data(this, "selectable-item");
                n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", t, {
                    unselected: n.element
                })
            }), e(".ui-selecting", this.element[0]).each(function () {
                var n = e.data(this, "selectable-item");
                n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", t, {
                    selected: n.element
                })
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.extend(e.ui.selectable, {
        version: "1.8.18"
    })
}(jQuery),
/*
 * jQuery UI Sortable 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

function (e) {
    e.widget("ui.sortable", e.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3
        },
        _create: function () {
            var e = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        destroy: function () {
            e.Widget.prototype.destroy.call(this), this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function (t, i) {
            "disabled" === t ? (this.options[t] = i, this.widget()[i ? "addClass" : "removeClass"]("ui-sortable-disabled")) : e.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (t, i) {
            var n = this;
            if (this.reverting) return !1;
            if (this.options.disabled || "static" == this.options.type) return !1;
            this._refreshItems(t);
            var s = null,
                o = this;
            if (e(t.target).parents().each(function () {
                return e.data(this, n.widgetName + "-item") == o ? (s = e(this), !1) : void 0
            }), e.data(t.target, n.widgetName + "-item") == o && (s = e(t.target)), !s) return !1;
            if (this.options.handle && !i) {
                var r = !1;
                if (e(this.options.handle, s).find("*").andSelf().each(function () {
                    this == t.target && (r = !0)
                }), !r) return !1
            }
            return this.currentItem = s, this._removeCurrentsFromItems(), !0
        },
        _mouseStart: function (t, i, n) {
            var s = this.options,
                o = this;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), s.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", s.cursor)), s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n) for (var r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, o._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                var i = this.options,
                    n = !1;
                this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = n = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = n = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed)), t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed))), n !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
            }
            this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
            for (var s = this.items.length - 1; s >= 0; s--) {
                var o = this.items[s],
                    r = o.item[0],
                    a = this._intersectsWithPointer(o);
                if (a && r != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != r && !e.ui.contains(this.placeholder[0], r) && ("semi-dynamic" == this.options.type ? !e.ui.contains(this.element[0], r) : !0)) {
                    if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                    this._rearrange(t, o), this._trigger("change", t, this._uiHash());
                    break
                }
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var n = this,
                        s = n.placeholder.offset();
                    n.reverting = !0, e(this.helper).animate({
                        left: s.left - this.offset.parent.left - n.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: s.top - this.offset.parent.top - n.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        n._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function () {
            var t = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var i = this.containers.length - 1; i >= 0; i--) this.containers[i]._trigger("deactivate", null, t._uiHash(this)), this.containers[i].containerCache.over && (this.containers[i]._trigger("out", null, t._uiHash(this)), this.containers[i].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                n = [];
            return t = t || {}, e(i).each(function () {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                i && n.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !n.length && t.key && n.push(t.key + "="), n.join("&")
        },
        toArray: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected),
                n = [];
            return t = t || {}, i.each(function () {
                n.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), n
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left,
                i = t + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = e.left,
                r = o + e.width,
                a = e.top,
                l = a + e.height,
                c = this.offset.click.top,
                u = this.offset.click.left,
                h = n + c > a && l > n + c && t + u > o && r > t + u;
            return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : o < t + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < r && a < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function (t) {
            var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                s = i && n,
                o = this._getDragVerticalDirection(),
                r = this._getDragHorizontalDirection();
            return s ? this.floating ? r && "right" == r || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
        },
        _intersectsWithSides: function (t) {
            var i = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                n = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" == o && n || "left" == o && !n : s && ("down" == s && i || "up" == s && !i)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != e && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            var i = [],
                n = [],
                s = this._connectWith();
            if (s && t) for (var o = s.length - 1; o >= 0; o--) for (var r = e(s[o]), a = r.length - 1; a >= 0; a--) {
                var l = e.data(r[a], this.widgetName);
                l && l != this && !l.options.disabled && n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
            }
            n.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (var o = n.length - 1; o >= 0; o--) n[o][0].each(function () {
                i.push(this)
            });
            return e(i)
        },
        _removeCurrentsFromItems: function () {
            for (var e = this.currentItem.find(":data(" + this.widgetName + "-item)"), t = 0; t < this.items.length; t++) for (var i = 0; i < e.length; i++) e[i] == this.items[t].item[0] && this.items.splice(t, 1)
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var i = this.items,
                n = [
                    [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                        item: this.currentItem
                    }) : e(this.options.items, this.element), this]
                ],
                s = this._connectWith();
            if (s && this.ready) for (var o = s.length - 1; o >= 0; o--) for (var r = e(s[o]), a = r.length - 1; a >= 0; a--) {
                var l = e.data(r[a], this.widgetName);
                l && l != this && !l.options.disabled && (n.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, {
                    item: this.currentItem
                }) : e(l.options.items, l.element), l]), this.containers.push(l))
            }
            for (var o = n.length - 1; o >= 0; o--) for (var c = n[o][1], u = n[o][0], a = 0, h = u.length; h > a; a++) {
                var d = e(u[a]);
                d.data(this.widgetName + "-item", c), i.push({
                    item: d,
                    instance: c,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
            }
        },
        refreshPositions: function (t) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            for (var i = this.items.length - 1; i >= 0; i--) {
                var n = this.items[i];
                if (n.instance == this.currentContainer || !this.currentContainer || n.item[0] == this.currentItem[0]) {
                    var s = this.options.toleranceElement ? e(this.options.toleranceElement, n.item) : n.item;
                    t || (n.width = s.outerWidth(), n.height = s.outerHeight());
                    var o = s.offset();
                    n.left = o.left, n.top = o.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else for (var i = this.containers.length - 1; i >= 0; i--) {
                var o = this.containers[i].element.offset();
                this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight()
            }
            return this
        },
        _createPlaceholder: function (t) {
            var i = t || this,
                n = i.options;
            if (!n.placeholder || n.placeholder.constructor == String) {
                var s = n.placeholder;
                n.placeholder = {
                    element: function () {
                        var t = e(document.createElement(i.currentItem[0].nodeName)).addClass(s || i.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        return s || (t.style.visibility = "hidden"), t
                    },
                    update: function (e, t) {
                        (!s || n.forcePlaceholderSize) && (t.height() || t.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), t.width() || t.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                    }
                }
            }
            i.placeholder = e(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder)
        },
        _contactContainers: function (t) {
            for (var i = null, n = null, s = this.containers.length - 1; s >= 0; s--) if (!e.ui.contains(this.currentItem[0], this.containers[s].element[0])) if (this._intersectsWith(this.containers[s].containerCache)) {
                if (i && e.ui.contains(this.containers[s].element[0], i.element[0])) continue;
                i = this.containers[s], n = s
            } else this.containers[s].containerCache.over && (this.containers[s]._trigger("out", t, this._uiHash(this)), this.containers[s].containerCache.over = 0);
            if (i) if (1 === this.containers.length) this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1;
            else if (this.currentContainer != this.containers[n]) {
                for (var o = 1e4, r = null, a = this.positionAbs[this.containers[n].floating ? "left" : "top"], l = this.items.length - 1; l >= 0; l--) if (e.ui.contains(this.containers[n].element[0], this.items[l].item[0])) {
                    var c = this.items[l][this.containers[n].floating ? "left" : "top"];
                    Math.abs(c - a) < o && (o = Math.abs(c - a), r = this.items[l])
                }
                if (!r && !this.options.dropOnEmpty) return;
                this.currentContainer = this.containers[n], r ? this._rearrange(t, r, null, !0) : this._rearrange(t, null, this.containers[n].element, !0), this._trigger("change", t, this._uiHash()), this.containers[n]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[n]._trigger("over", t, this._uiHash(this)), this.containers[n].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var i = this.options,
                n = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || e("parent" != i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] == this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), ("" == n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), ("" == n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.browser.msie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" == this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t = this.options;
            if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                var i = e(t.containment)[0],
                    n = e(t.containment).offset(),
                    s = "hidden" != e(i).css("overflow");
                this.containment = [n.left + (parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (s ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (s ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var n = "absolute" == t ? 1 : -1,
                s = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                o = /(html|body)/i.test(s[0].tagName);
            return {
                top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - (e.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n),
                left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - (e.browser.safari && "fixed" == this.cssPosition ? 0 : ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n)
            }
        },
        _generatePosition: function (t) {
            var i = this.options,
                n = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.ui.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(n[0].tagName);
            "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            var o = t.pageX,
                r = t.pageY;
            if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (r = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (r = this.containment[3] + this.offset.click.top)), i.grid)) {
                var a = this.originalPageY + Math.round((r - this.originalPageY) / i.grid[1]) * i.grid[1];
                r = this.containment ? a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3] ? a - this.offset.click.top < this.containment[1] ? a + i.grid[1] : a - i.grid[1] : a : a;
                var l = this.originalPageX + Math.round((o - this.originalPageX) / i.grid[0]) * i.grid[0];
                o = this.containment ? l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2] ? l - this.offset.click.left < this.containment[0] ? l + i.grid[0] : l - i.grid[0] : l : l
            }
            return {
                top: r - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (e.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : n.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (e.browser.safari && "fixed" == this.cssPosition ? 0 : "fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : n.scrollLeft())
            }
        },
        _rearrange: function (e, t, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this,
                o = this.counter;
            window.setTimeout(function () {
                o == s.counter && s.refreshPositions(!n)
            }, 0)
        },
        _clear: function (t, i) {
            this.reverting = !1;
            var n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                for (var s in this._storedCSS)("auto" == this._storedCSS[s] || "static" == this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            if (this.fromOutside && !i && n.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || i || n.push(function (e) {
                this._trigger("update", e, this._uiHash())
            }), !e.ui.contains(this.element[0], this.currentItem[0])) {
                i || n.push(function (e) {
                    this._trigger("remove", e, this._uiHash())
                });
                for (var s = this.containers.length - 1; s >= 0; s--) e.ui.contains(this.containers[s].element[0], this.currentItem[0]) && !i && (n.push(function (e) {
                    return function (t) {
                        e._trigger("receive", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])), n.push(function (e) {
                    return function (t) {
                        e._trigger("update", t, this._uiHash(this))
                    }
                }.call(this, this.containers[s])))
            }
            for (var s = this.containers.length - 1; s >= 0; s--) i || n.push(function (e) {
                return function (t) {
                    e._trigger("deactivate", t, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over && (n.push(function (e) {
                return function (t) {
                    e._trigger("out", t, this._uiHash(this))
                }
            }.call(this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!i) {
                    this._trigger("beforeStop", t, this._uiHash());
                    for (var s = 0; s < n.length; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return !1
            }
            if (i || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !i) {
                for (var s = 0; s < n.length; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.extend(e.ui.sortable, {
        version: "1.8.18"
    })
}(jQuery), jQuery.effects ||
function (e, t) {
    function i(t) {
        var i;
        return t && t.constructor == Array && 3 == t.length ? t : (i = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(i[1], 10), parseInt(i[2], 10), parseInt(i[3], 10)] : (i = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(i[1]), 2.55 * parseFloat(i[2]), 2.55 * parseFloat(i[3])] : (i = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16)] : (i = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(i[1] + i[1], 16), parseInt(i[2] + i[2], 16), parseInt(i[3] + i[3], 16)] : (i = /rgba\(0, 0, 0, 0\)/.exec(t)) ? c.transparent : c[e.trim(t).toLowerCase()]
    }
    function n(t, n) {
        var s;
        do {
            if (s = e.curCSS(t, n), "" != s && "transparent" != s || e.nodeName(t, "body")) break;
            n = "backgroundColor"
        } while (t = t.parentNode);
        return i(s)
    }
    function s() {
        var e, t, i = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            n = {};
        if (i && i.length && i[0] && i[i[0]]) for (var s = i.length; s--;) e = i[s], "string" == typeof i[e] && (t = e.replace(/\-(\w)/g, function (e, t) {
            return t.toUpperCase()
        }), n[t] = i[e]);
        else for (e in i)"string" == typeof i[e] && (n[e] = i[e]);
        return n
    }
    function o(t) {
        var i, n;
        for (i in t) n = t[i], (null == n || e.isFunction(n) || i in h || /scrollbar/.test(i) || !/color/i.test(i) && isNaN(parseFloat(n))) && delete t[i];
        return t
    }
    function r(e, t) {
        var i, n = {
            _: 0
        };
        for (i in t) e[i] != t[i] && (n[i] = t[i]);
        return n
    }
    function a(t, i, n, s) {
        return "object" == typeof t && (s = i, n = null, i = t, t = i.effect), e.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (s = n, n = i, i = {}), e.isFunction(n) && (s = n, n = null), i = i || {}, n = n || i.duration, n = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, s = s || i.complete, [t, i, n, s]
    }
    function l(t) {
        return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects[t] ? !1 : !0
    }
    e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (t, s) {
        e.fx.step[s] = function (e) {
            e.colorInit || (e.start = n(e.elem, s), e.end = i(e.end), e.colorInit = !0), e.elem.style[s] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var c = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    },
        u = ["add", "remove", "toggle"],
        h = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    e.effects.animateClass = function (t, i, n, a) {
        return e.isFunction(n) && (a = n, n = null), this.queue(function () {
            var l, c = e(this),
                h = c.attr("style") || " ",
                d = o(s.call(this)),
                p = c.attr("class");
            e.each(u, function (e, i) {
                t[i] && c[i + "Class"](t[i])
            }), l = o(s.call(this)), c.attr("class", p), c.animate(r(d, l), {
                queue: !1,
                duration: i,
                easing: n,
                complete: function () {
                    e.each(u, function (e, i) {
                        t[i] && c[i + "Class"](t[i])
                    }), "object" == typeof c.attr("style") ? (c.attr("style").cssText = "", c.attr("style").cssText = h) : c.attr("style", h), a && a.apply(this, arguments), e.dequeue(this)
                }
            })
        })
    }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function (t, i, n, s) {
            return i ? e.effects.animateClass.apply(this, [{
                add: t
            },
            i, n, s]) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function (t, i, n, s) {
            return i ? e.effects.animateClass.apply(this, [{
                remove: t
            },
            i, n, s]) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function (i, n, s, o, r) {
            return "boolean" == typeof n || n === t ? s ? e.effects.animateClass.apply(this, [n ? {
                add: i
            } : {
                remove: i
            },
            s, o, r]) : this._toggleClass(i, n) : e.effects.animateClass.apply(this, [{
                toggle: i
            },
            n, s, o])
        },
        switchClass: function (t, i, n, s, o) {
            return e.effects.animateClass.apply(this, [{
                add: i,
                remove: t
            },
            n, s, o])
        }
    }), e.extend(e.effects, {
        version: "1.8.18",
        save: function (e, t) {
            for (var i = 0; i < t.length; i++) null !== t[i] && e.data("ec.storage." + t[i], e[0].style[t[i]])
        },
        restore: function (e, t) {
            for (var i = 0; i < t.length; i++) null !== t[i] && e.css(t[i], e.data("ec.storage." + t[i]))
        },
        setMode: function (e, t) {
            return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function (e, t) {
            var i, n;
            switch (e[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = e[0] / t.height
            }
            switch (e[1]) {
            case "left":
                n = 0;
                break;
            case "center":
                n = .5;
                break;
            case "right":
                n = 1;
                break;
            default:
                n = e[1] / t.width
            }
            return {
                x: n,
                y: i
            }
        },
        createWrapper: function (t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var i = {
                width: t.outerWidth(!0),
                height: t.outerHeight(!0),
                "float": t.css("float")
            },
                n = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                s = document.activeElement;
            return t.wrap(n), (t[0] === s || e.contains(t[0], s)) && e(s).focus(), n = t.parent(), "static" == t.css("position") ? (n.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (e.extend(i, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), e.each(["top", "left", "bottom", "right"], function (e, n) {
                i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), n.css(i).show()
        },
        removeWrapper: function (t) {
            var i, n = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (i = t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus(), i) : t
        },
        setTransition: function (t, i, n, s) {
            return s = s || {}, e.each(i, function (e, i) {
                unit = t.cssUnit(i), unit[0] > 0 && (s[i] = unit[0] * n + unit[1])
            }), s
        }
    }), e.fn.extend({
        effect: function (t) {
            var i = a.apply(this, arguments),
                n = {
                    options: i[1],
                    duration: i[2],
                    callback: i[3]
                },
                s = n.options.mode,
                o = e.effects[t];
            return e.fx.off || !o ? s ? this[s](n.duration, n.callback) : this.each(function () {
                n.callback && n.callback.call(this)
            }) : o.call(this, n)
        },
        _show: e.fn.show,
        show: function (e) {
            if (l(e)) return this._show.apply(this, arguments);
            var t = a.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: e.fn.hide,
        hide: function (e) {
            if (l(e)) return this._hide.apply(this, arguments);
            var t = a.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function (t) {
            if (l(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
            var i = a.apply(this, arguments);
            return i[1].mode = "toggle", this.effect.apply(this, i)
        },
        cssUnit: function (t) {
            var i = this.css(t),
                n = [];
            return e.each(["em", "px", "%", "pt"], function (e, t) {
                i.indexOf(t) > 0 && (n = [parseFloat(i), t])
            }), n
        }
    }),
    /*
     * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
     *
     * Uses the built in easing capabilities added In jQuery 1.1
     * to offer multiple easing options
     *
     * TERMS OF USE - jQuery Easing
     *
     * Open source under the BSD License.
     *
     * Copyright 2008 George McGinley Smith
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without modification,
     * are permitted provided that the following conditions are met:
     *
     * Redistributions of source code must retain the above copyright notice, this list of
     * conditions and the following disclaimer.
     * Redistributions in binary form must reproduce the above copyright notice, this list
     * of conditions and the following disclaimer in the documentation and/or other materials
     * provided with the distribution.
     *
     * Neither the name of the author nor the names of contributors may be used to endorse
     * or promote products derived from this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
     * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
     * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
     * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
     * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
     * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
     * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
     * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
     * OF THE POSSIBILITY OF SUCH DAMAGE.
     *
     */
    e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function (t, i, n, s, o) {
            return e.easing[e.easing.def](t, i, n, s, o)
        },
        easeInQuad: function (e, t, i, n, s) {
            return n * (t /= s) * t + i
        },
        easeOutQuad: function (e, t, i, n, s) {
            return -n * (t /= s) * (t - 2) + i
        },
        easeInOutQuad: function (e, t, i, n, s) {
            return (t /= s / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function (e, t, i, n, s) {
            return n * (t /= s) * t * t + i
        },
        easeOutCubic: function (e, t, i, n, s) {
            return n * ((t = t / s - 1) * t * t + 1) + i
        },
        easeInOutCubic: function (e, t, i, n, s) {
            return (t /= s / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function (e, t, i, n, s) {
            return n * (t /= s) * t * t * t + i
        },
        easeOutQuart: function (e, t, i, n, s) {
            return -n * ((t = t / s - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function (e, t, i, n, s) {
            return (t /= s / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function (e, t, i, n, s) {
            return n * (t /= s) * t * t * t * t + i
        },
        easeOutQuint: function (e, t, i, n, s) {
            return n * ((t = t / s - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function (e, t, i, n, s) {
            return (t /= s / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function (e, t, i, n, s) {
            return -n * Math.cos(t / s * (Math.PI / 2)) + n + i
        },
        easeOutSine: function (e, t, i, n, s) {
            return n * Math.sin(t / s * (Math.PI / 2)) + i
        },
        easeInOutSine: function (e, t, i, n, s) {
            return -n / 2 * (Math.cos(Math.PI * t / s) - 1) + i
        },
        easeInExpo: function (e, t, i, n, s) {
            return 0 == t ? i : n * Math.pow(2, 10 * (t / s - 1)) + i
        },
        easeOutExpo: function (e, t, i, n, s) {
            return t == s ? i + n : n * (-Math.pow(2, -10 * t / s) + 1) + i
        },
        easeInOutExpo: function (e, t, i, n, s) {
            return 0 == t ? i : t == s ? i + n : (t /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
        },
        easeInCirc: function (e, t, i, n, s) {
            return -n * (Math.sqrt(1 - (t /= s) * t) - 1) + i
        },
        easeOutCirc: function (e, t, i, n, s) {
            return n * Math.sqrt(1 - (t = t / s - 1) * t) + i
        },
        easeInOutCirc: function (e, t, i, n, s) {
            return (t /= s / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function (e, t, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == t) return i;
            if (1 == (t /= s)) return i + n;
            if (r || (r = .3 * s), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - o) * 2 * Math.PI / r)) + i
        },
        easeOutElastic: function (e, t, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == t) return i;
            if (1 == (t /= s)) return i + n;
            if (r || (r = .3 * s), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * s - o) * 2 * Math.PI / r) + n + i
        },
        easeInOutElastic: function (e, t, i, n, s) {
            var o = 1.70158,
                r = 0,
                a = n;
            if (0 == t) return i;
            if (2 == (t /= s / 2)) return i + n;
            if (r || (r = s * .3 * 1.5), a < Math.abs(n)) {
                a = n;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(n / a);
            return 1 > t ? -.5 * a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * s - o) * 2 * Math.PI / r) + i : .5 * a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * s - o) * 2 * Math.PI / r) + n + i
        },
        easeInBack: function (e, i, n, s, o, r) {
            return r == t && (r = 1.70158), s * (i /= o) * i * ((r + 1) * i - r) + n
        },
        easeOutBack: function (e, i, n, s, o, r) {
            return r == t && (r = 1.70158), s * ((i = i / o - 1) * i * ((r + 1) * i + r) + 1) + n
        },
        easeInOutBack: function (e, i, n, s, o, r) {
            return r == t && (r = 1.70158), (i /= o / 2) < 1 ? s / 2 * i * i * (((r *= 1.525) + 1) * i - r) + n : s / 2 * ((i -= 2) * i * (((r *= 1.525) + 1) * i + r) + 2) + n
        },
        easeInBounce: function (t, i, n, s, o) {
            return s - e.easing.easeOutBounce(t, o - i, 0, s, o) + n
        },
        easeOutBounce: function (e, t, i, n, s) {
            return (t /= s) < 1 / 2.75 ? n * 7.5625 * t * t + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function (t, i, n, s, o) {
            return o / 2 > i ? .5 * e.easing.easeInBounce(t, 2 * i, 0, s, o) + n : .5 * e.easing.easeOutBounce(t, 2 * i - o, 0, s, o) + .5 * s + n
        }
    })
}(jQuery),
/*
 * jQuery UI Effects Blind 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.blind = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right"],
                s = e.effects.setMode(i, t.options.mode || "hide"),
                o = t.options.direction || "vertical";
            e.effects.save(i, n), i.show();
            var r = e.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                a = "vertical" == o ? "height" : "width",
                l = "vertical" == o ? r.height() : r.width();
            "show" == s && r.css(a, 0);
            var c = {};
            c[a] = "show" == s ? l : 0, r.animate(c, t.duration, t.options.easing, function () {
                "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Bounce 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.bounce = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right"],
                s = e.effects.setMode(i, t.options.mode || "effect"),
                o = t.options.direction || "up",
                r = t.options.distance || 20,
                a = t.options.times || 5,
                l = t.duration || 250;
            /show|hide/.test(s) && n.push("opacity"), e.effects.save(i, n), i.show(), e.effects.createWrapper(i);
            var c = "up" == o || "down" == o ? "top" : "left",
                u = "up" == o || "left" == o ? "pos" : "neg",
                r = t.options.distance || ("top" == c ? i.outerHeight({
                    margin: !0
                }) / 3 : i.outerWidth({
                    margin: !0
                }) / 3);
            if ("show" == s && i.css("opacity", 0).css(c, "pos" == u ? -r : r), "hide" == s && (r /= 2 * a), "hide" != s && a--, "show" == s) {
                var h = {
                    opacity: 1
                };
                h[c] = ("pos" == u ? "+=" : "-=") + r, i.animate(h, l / 2, t.options.easing), r /= 2, a--
            }
            for (var d = 0; a > d; d++) {
                var p = {},
                    f = {};
                p[c] = ("pos" == u ? "-=" : "+=") + r, f[c] = ("pos" == u ? "+=" : "-=") + r, i.animate(p, l / 2, t.options.easing).animate(f, l / 2, t.options.easing), r = "hide" == s ? 2 * r : r / 2
            }
            if ("hide" == s) {
                var h = {
                    opacity: 0
                };
                h[c] = ("pos" == u ? "-=" : "+=") + r, i.animate(h, l / 2, t.options.easing, function () {
                    i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
                })
            } else {
                var p = {},
                    f = {};
                p[c] = ("pos" == u ? "-=" : "+=") + r, f[c] = ("pos" == u ? "+=" : "-=") + r, i.animate(p, l / 2, t.options.easing).animate(f, l / 2, t.options.easing, function () {
                    e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
                })
            }
            i.queue("fx", function () {
                i.dequeue()
            }), i.dequeue()
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Clip 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.clip = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right", "height", "width"],
                s = e.effects.setMode(i, t.options.mode || "hide"),
                o = t.options.direction || "vertical";
            e.effects.save(i, n), i.show();
            var r = e.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                a = "IMG" == i[0].tagName ? r : i,
                l = {
                    size: "vertical" == o ? "height" : "width",
                    position: "vertical" == o ? "top" : "left"
                },
                c = "vertical" == o ? a.height() : a.width();
            "show" == s && (a.css(l.size, 0), a.css(l.position, c / 2));
            var u = {};
            u[l.size] = "show" == s ? c : 0, u[l.position] = "show" == s ? 0 : c / 2, a.animate(u, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Drop 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.drop = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right", "opacity"],
                s = e.effects.setMode(i, t.options.mode || "hide"),
                o = t.options.direction || "left";
            e.effects.save(i, n), i.show(), e.effects.createWrapper(i);
            var r = "up" == o || "down" == o ? "top" : "left",
                a = "up" == o || "left" == o ? "pos" : "neg",
                l = t.options.distance || ("top" == r ? i.outerHeight({
                    margin: !0
                }) / 2 : i.outerWidth({
                    margin: !0
                }) / 2);
            "show" == s && i.css("opacity", 0).css(r, "pos" == a ? -l : l);
            var c = {
                opacity: "show" == s ? 1 : 0
            };
            c[r] = ("show" == s ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + l, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Explode 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.explode = function (t) {
        return this.queue(function () {
            var i = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3,
                n = t.options.pieces ? Math.round(Math.sqrt(t.options.pieces)) : 3;
            t.options.mode = "toggle" == t.options.mode ? e(this).is(":visible") ? "hide" : "show" : t.options.mode;
            var s = e(this).show().css("visibility", "hidden"),
                o = s.offset();
            o.top -= parseInt(s.css("marginTop"), 10) || 0, o.left -= parseInt(s.css("marginLeft"), 10) || 0;
            for (var r = s.outerWidth(!0), a = s.outerHeight(!0), l = 0; i > l; l++) for (var c = 0; n > c; c++) s.clone().appendTo("body").wrap("<div></div>").css({
                position: "absolute",
                visibility: "visible",
                left: -c * (r / n),
                top: -l * (a / i)
            }).parent().addClass("ui-effects-explode").css({
                position: "absolute",
                overflow: "hidden",
                width: r / n,
                height: a / i,
                left: o.left + c * (r / n) + ("show" == t.options.mode ? (c - Math.floor(n / 2)) * (r / n) : 0),
                top: o.top + l * (a / i) + ("show" == t.options.mode ? (l - Math.floor(i / 2)) * (a / i) : 0),
                opacity: "show" == t.options.mode ? 0 : 1
            }).animate({
                left: o.left + c * (r / n) + ("show" == t.options.mode ? 0 : (c - Math.floor(n / 2)) * (r / n)),
                top: o.top + l * (a / i) + ("show" == t.options.mode ? 0 : (l - Math.floor(i / 2)) * (a / i)),
                opacity: "show" == t.options.mode ? 1 : 0
            }, t.duration || 500);
            setTimeout(function () {
                "show" == t.options.mode ? s.css({
                    visibility: "visible"
                }) : s.css({
                    visibility: "visible"
                }).hide(), t.callback && t.callback.apply(s[0]), s.dequeue(), e("div.ui-effects-explode").remove()
            }, t.duration || 500)
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Fade 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.fade = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = e.effects.setMode(i, t.options.mode || "hide");
            i.animate({
                opacity: n
            }, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Fold 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.fold = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right"],
                s = e.effects.setMode(i, t.options.mode || "hide"),
                o = t.options.size || 15,
                r = !! t.options.horizFirst,
                a = t.duration ? t.duration / 2 : e.fx.speeds._default / 2;
            e.effects.save(i, n), i.show();
            var l = e.effects.createWrapper(i).css({
                overflow: "hidden"
            }),
                c = "show" == s != r,
                u = c ? ["width", "height"] : ["height", "width"],
                h = c ? [l.width(), l.height()] : [l.height(), l.width()],
                d = /([0-9]+)%/.exec(o);
            d && (o = parseInt(d[1], 10) / 100 * h["hide" == s ? 0 : 1]), "show" == s && l.css(r ? {
                height: 0,
                width: o
            } : {
                height: o,
                width: 0
            });
            var p = {},
                f = {};
            p[u[0]] = "show" == s ? h[0] : o, f[u[1]] = "show" == s ? h[1] : 0, l.animate(p, a, t.options.easing).animate(f, a, t.options.easing, function () {
                "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Highlight 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.highlight = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["backgroundImage", "backgroundColor", "opacity"],
                s = e.effects.setMode(i, t.options.mode || "show"),
                o = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" == s && (o.opacity = 0), e.effects.save(i, n), i.show().css({
                backgroundImage: "none",
                backgroundColor: t.options.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    "hide" == s && i.hide(), e.effects.restore(i, n), "show" == s && !e.support.opacity && this.style.removeAttribute("filter"), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Pulsate 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.pulsate = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = e.effects.setMode(i, t.options.mode || "show");
            times = 2 * (t.options.times || 5) - 1, duration = t.duration ? t.duration / 2 : e.fx.speeds._default / 2, isVisible = i.is(":visible"), animateTo = 0, isVisible || (i.css("opacity", 0).show(), animateTo = 1), ("hide" == n && isVisible || "show" == n && !isVisible) && times--;
            for (var s = 0; times > s; s++) i.animate({
                opacity: animateTo
            }, duration, t.options.easing), animateTo = (animateTo + 1) % 2;
            i.animate({
                opacity: animateTo
            }, duration, t.options.easing, function () {
                0 == animateTo && i.hide(), t.callback && t.callback.apply(this, arguments)
            }), i.queue("fx", function () {
                i.dequeue()
            }).dequeue()
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Scale 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.puff = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = e.effects.setMode(i, t.options.mode || "hide"),
                s = parseInt(t.options.percent, 10) || 150,
                o = s / 100,
                r = {
                    height: i.height(),
                    width: i.width()
                };
            e.extend(t.options, {
                fade: !0,
                mode: n,
                percent: "hide" == n ? s : 100,
                from: "hide" == n ? r : {
                    height: r.height * o,
                    width: r.width * o
                }
            }), i.effect("scale", t.options, t.duration, t.callback), i.dequeue()
        })
    }, e.effects.scale = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = e.extend(!0, {}, t.options),
                s = e.effects.setMode(i, t.options.mode || "effect"),
                o = parseInt(t.options.percent, 10) || (0 == parseInt(t.options.percent, 10) ? 0 : "hide" == s ? 0 : 100),
                r = t.options.direction || "both",
                a = t.options.origin;
            "effect" != s && (n.origin = a || ["middle", "center"], n.restore = !0);
            var l = {
                height: i.height(),
                width: i.width()
            };
            i.from = t.options.from || ("show" == s ? {
                height: 0,
                width: 0
            } : l);
            var c = {
                y: "horizontal" != r ? o / 100 : 1,
                x: "vertical" != r ? o / 100 : 1
            };
            i.to = {
                height: l.height * c.y,
                width: l.width * c.x
            }, t.options.fade && ("show" == s && (i.from.opacity = 0, i.to.opacity = 1), "hide" == s && (i.from.opacity = 1, i.to.opacity = 0)), n.from = i.from, n.to = i.to, n.mode = s, i.effect("size", n, t.duration, t.callback), i.dequeue()
        })
    }, e.effects.size = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                s = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                o = ["width", "height", "overflow"],
                r = ["fontSize"],
                a = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = e.effects.setMode(i, t.options.mode || "effect"),
                u = t.options.restore || !1,
                h = t.options.scale || "both",
                d = t.options.origin,
                p = {
                    height: i.height(),
                    width: i.width()
                };
            if (i.from = t.options.from || p, i.to = t.options.to || p, d) {
                var f = e.effects.getBaseline(d, p);
                i.from.top = (p.height - i.from.height) * f.y, i.from.left = (p.width - i.from.width) * f.x, i.to.top = (p.height - i.to.height) * f.y, i.to.left = (p.width - i.to.width) * f.x
            }
            var g = {
                from: {
                    y: i.from.height / p.height,
                    x: i.from.width / p.width
                },
                to: {
                    y: i.to.height / p.height,
                    x: i.to.width / p.width
                }
            };
            ("box" == h || "both" == h) && (g.from.y != g.to.y && (n = n.concat(a), i.from = e.effects.setTransition(i, a, g.from.y, i.from), i.to = e.effects.setTransition(i, a, g.to.y, i.to)), g.from.x != g.to.x && (n = n.concat(l), i.from = e.effects.setTransition(i, l, g.from.x, i.from), i.to = e.effects.setTransition(i, l, g.to.x, i.to))), ("content" == h || "both" == h) && g.from.y != g.to.y && (n = n.concat(r), i.from = e.effects.setTransition(i, r, g.from.y, i.from), i.to = e.effects.setTransition(i, r, g.to.y, i.to)), e.effects.save(i, u ? n : s), i.show(), e.effects.createWrapper(i), i.css("overflow", "hidden").css(i.from), ("content" == h || "both" == h) && (a = a.concat(["marginTop", "marginBottom"]).concat(r), l = l.concat(["marginLeft", "marginRight"]), o = n.concat(a).concat(l), i.find("*[width]").each(function () {
                child = e(this), u && e.effects.save(child, o);
                var i = {
                    height: child.height(),
                    width: child.width()
                };
                child.from = {
                    height: i.height * g.from.y,
                    width: i.width * g.from.x
                }, child.to = {
                    height: i.height * g.to.y,
                    width: i.width * g.to.x
                }, g.from.y != g.to.y && (child.from = e.effects.setTransition(child, a, g.from.y, child.from), child.to = e.effects.setTransition(child, a, g.to.y, child.to)), g.from.x != g.to.x && (child.from = e.effects.setTransition(child, l, g.from.x, child.from), child.to = e.effects.setTransition(child, l, g.to.x, child.to)), child.css(child.from), child.animate(child.to, t.duration, t.options.easing, function () {
                    u && e.effects.restore(child, o)
                })
            })), i.animate(i.to, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    0 === i.to.opacity && i.css("opacity", i.from.opacity), "hide" == c && i.hide(), e.effects.restore(i, u ? n : s), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Shake 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.shake = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right"];
            e.effects.setMode(i, t.options.mode || "effect");
            var s = t.options.direction || "left",
                o = t.options.distance || 20,
                r = t.options.times || 3,
                a = t.duration || t.options.duration || 140;
            e.effects.save(i, n), i.show(), e.effects.createWrapper(i);
            var l = "up" == s || "down" == s ? "top" : "left",
                c = "up" == s || "left" == s ? "pos" : "neg",
                u = {},
                h = {},
                d = {};
            u[l] = ("pos" == c ? "-=" : "+=") + o, h[l] = ("pos" == c ? "+=" : "-=") + 2 * o, d[l] = ("pos" == c ? "-=" : "+=") + 2 * o, i.animate(u, a, t.options.easing);
            for (var p = 1; r > p; p++) i.animate(h, a, t.options.easing).animate(d, a, t.options.easing);
            i.animate(h, a, t.options.easing).animate(u, a / 2, t.options.easing, function () {
                e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments)
            }), i.queue("fx", function () {
                i.dequeue()
            }), i.dequeue()
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Slide 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.slide = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = ["position", "top", "bottom", "left", "right"],
                s = e.effects.setMode(i, t.options.mode || "show"),
                o = t.options.direction || "left";
            e.effects.save(i, n), i.show(), e.effects.createWrapper(i).css({
                overflow: "hidden"
            });
            var r = "up" == o || "down" == o ? "top" : "left",
                a = "up" == o || "left" == o ? "pos" : "neg",
                l = t.options.distance || ("top" == r ? i.outerHeight({
                    margin: !0
                }) : i.outerWidth({
                    margin: !0
                }));
            "show" == s && i.css(r, "pos" == a ? isNaN(l) ? "-" + l : -l : l);
            var c = {};
            c[r] = ("show" == s ? "pos" == a ? "+=" : "-=" : "pos" == a ? "-=" : "+=") + l, i.animate(c, {
                queue: !1,
                duration: t.duration,
                easing: t.options.easing,
                complete: function () {
                    "hide" == s && i.hide(), e.effects.restore(i, n), e.effects.removeWrapper(i), t.callback && t.callback.apply(this, arguments), i.dequeue()
                }
            })
        })
    }
}(jQuery),
/*
 * jQuery UI Effects Transfer 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */

function (e) {
    e.effects.transfer = function (t) {
        return this.queue(function () {
            var i = e(this),
                n = e(t.options.to),
                s = n.offset(),
                o = {
                    top: s.top,
                    left: s.left,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                },
                r = i.offset(),
                a = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.options.className).css({
                    top: r.top,
                    left: r.left,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: "absolute"
                }).animate(o, t.duration, t.options.easing, function () {
                    a.remove(), t.callback && t.callback.apply(i[0], arguments), i.dequeue()
                })
        })
    }
}(jQuery),
/*
 * jQuery UI Accordion 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */

function (e) {
    e.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: !0,
            clearStyle: !1,
            collapsible: !1,
            event: "click",
            fillSpace: !1,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: !1,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function () {
            var t = this,
                i = t.options;
            if (t.running = 0, t.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix"), t.headers = t.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
                i.disabled || e(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function () {
                i.disabled || e(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function () {
                i.disabled || e(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                i.disabled || e(this).removeClass("ui-state-focus")
            }), t.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"), i.navigation) {
                var n = t.element.find("a").filter(i.navigationFilter).eq(0);
                if (n.length) {
                    var s = n.closest(".ui-accordion-header");
                    t.active = s.length ? s : n.closest(".ui-accordion-content").prev()
                }
            }
            t.active = t._findActive(t.active || i.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top"), t.active.next().addClass("ui-accordion-content-active"), t._createIcons(), t.resize(), t.element.attr("role", "tablist"), t.headers.attr("role", "tab").bind("keydown.accordion", function (e) {
                return t._keydown(e)
            }).next().attr("role", "tabpanel"), t.headers.not(t.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide(), t.active.length ? t.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : t.headers.eq(0).attr("tabIndex", 0), e.browser.safari || t.headers.find("a").attr("tabIndex", -1), i.event && t.headers.bind(i.event.split(" ").join(".accordion ") + ".accordion", function (e) {
                t._clickHandler.call(t, e, this), e.preventDefault()
            })
        },
        _createIcons: function () {
            var t = this.options;
            t.icons && (e("<span></span>").addClass("ui-icon " + t.icons.header).prependTo(this.headers), this.active.children(".ui-icon").toggleClass(t.icons.header).toggleClass(t.icons.headerSelected), this.element.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.children(".ui-icon").remove(), this.element.removeClass("ui-accordion-icons")
        },
        destroy: function () {
            var t = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex"), this.headers.find("a").removeAttr("tabIndex"), this._destroyIcons();
            var i = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            return (t.autoHeight || t.fillHeight) && i.css("height", ""), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, i) {
            e.Widget.prototype._setOption.apply(this, arguments), "active" == t && this.activate(i), "icons" == t && (this._destroyIcons(), i && this._createIcons()), "disabled" == t && this.headers.add(this.headers.next())[i ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function (t) {
            if (!(this.options.disabled || t.altKey || t.ctrlKey)) {
                var i = e.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(t.target),
                    o = !1;
                switch (t.keyCode) {
                case i.RIGHT:
                case i.DOWN:
                    o = this.headers[(s + 1) % n];
                    break;
                case i.LEFT:
                case i.UP:
                    o = this.headers[(s - 1 + n) % n];
                    break;
                case i.SPACE:
                case i.ENTER:
                    this._clickHandler({
                        target: t.target
                    }, t.target), t.preventDefault()
                }
                return o ? (e(t.target).attr("tabIndex", -1), e(o).attr("tabIndex", 0), o.focus(), !1) : !0
            }
        },
        resize: function () {
            var t, i = this.options;
            if (i.fillSpace) {
                if (e.browser.msie) {
                    var n = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                t = this.element.parent().height(), e.browser.msie && this.element.parent().css("overflow", n), this.headers.each(function () {
                    t -= e(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
                }).css("overflow", "auto")
            } else i.autoHeight && (t = 0, this.headers.next().each(function () {
                t = Math.max(t, e(this).height("").height())
            }).height(t));
            return this
        },
        activate: function (e) {
            this.options.active = e;
            var t = this._findActive(e)[0];
            return this._clickHandler({
                target: t
            }, t), this
        },
        _findActive: function (t) {
            return t ? "number" == typeof t ? this.headers.filter(":eq(" + t + ")") : this.headers.not(this.headers.not(t)) : t === !1 ? e([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function (t, i) {
            var n = this.options;
            if (!n.disabled) {
                if (!t.target) {
                    if (!n.collapsible) return;
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(n.icons.headerSelected).addClass(n.icons.header), this.active.next().addClass("ui-accordion-content-active");
                    var s = this.active.next(),
                        o = {
                            options: n,
                            newHeader: e([]),
                            oldHeader: n.active,
                            newContent: e([]),
                            oldContent: s
                        },
                        r = this.active = e([]);
                    return this._toggle(r, s, o), void 0
                }
                var a = e(t.currentTarget || i),
                    l = a[0] === this.active[0];
                if (n.active = n.collapsible && l ? !1 : this.headers.index(a), !(this.running || !n.collapsible && l)) {
                    var c = this.active,
                        r = a.next(),
                        s = this.active.next(),
                        o = {
                            options: n,
                            newHeader: l && n.collapsible ? e([]) : a,
                            oldHeader: this.active,
                            newContent: l && n.collapsible ? e([]) : r,
                            oldContent: s
                        },
                        u = this.headers.index(this.active[0]) > this.headers.index(a[0]);
                    this.active = l ? e([]) : a, this._toggle(r, s, o, l, u), c.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(n.icons.headerSelected).addClass(n.icons.header), l || (a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(n.icons.header).addClass(n.icons.headerSelected), a.next().addClass("ui-accordion-content-active"))
                }
            }
        },
        _toggle: function (t, i, n, s, o) {
            var r = this,
                a = r.options;
            r.toShow = t, r.toHide = i, r.data = n;
            var l = function () {
                    return r ? r._completed.apply(r, arguments) : void 0
                };
            if (r._trigger("changestart", null, r.data), r.running = 0 === i.size() ? t.size() : i.size(), a.animated) {
                var c = {};
                c = a.collapsible && s ? {
                    toShow: e([]),
                    toHide: i,
                    complete: l,
                    down: o,
                    autoHeight: a.autoHeight || a.fillSpace
                } : {
                    toShow: t,
                    toHide: i,
                    complete: l,
                    down: o,
                    autoHeight: a.autoHeight || a.fillSpace
                }, a.proxied || (a.proxied = a.animated), a.proxiedDuration || (a.proxiedDuration = a.duration), a.animated = e.isFunction(a.proxied) ? a.proxied(c) : a.proxied, a.duration = e.isFunction(a.proxiedDuration) ? a.proxiedDuration(c) : a.proxiedDuration;
                var u = e.ui.accordion.animations,
                    h = a.duration,
                    d = a.animated;
                !d || u[d] || e.easing[d] || (d = "slide"), u[d] || (u[d] = function (e) {
                    this.slide(e, {
                        easing: d,
                        duration: h || 700
                    })
                }), u[d](c)
            } else a.collapsible && s ? t.toggle() : (i.hide(), t.show()), l(!0);
            i.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur(), t.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function (e) {
            this.running = e ? 0 : --this.running, this.running || (this.options.clearStyle && this.toShow.add(this.toHide).css({
                height: "",
                overflow: ""
            }), this.toHide.removeClass("ui-accordion-content-active"), this.toHide.length && (this.toHide.parent()[0].className = this.toHide.parent()[0].className), this._trigger("change", null, this.data))
        }
    }), e.extend(e.ui.accordion, {
        version: "1.8.18",
        animations: {
            slide: function (t, i) {
                if (t = e.extend({
                    easing: "swing",
                    duration: 300
                }, t, i), !t.toHide.size()) return t.toShow.animate({
                    height: "show",
                    paddingTop: "show",
                    paddingBottom: "show"
                }, t), void 0;
                if (!t.toShow.size()) return t.toHide.animate({
                    height: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide"
                }, t), void 0;
                var n, s = t.toShow.css("overflow"),
                    o = 0,
                    r = {},
                    a = {},
                    l = ["height", "paddingTop", "paddingBottom"],
                    c = t.toShow;
                n = c[0].style.width, c.width(c.parent().width() - parseFloat(c.css("paddingLeft")) - parseFloat(c.css("paddingRight")) - (parseFloat(c.css("borderLeftWidth")) || 0) - (parseFloat(c.css("borderRightWidth")) || 0)), e.each(l, function (i, n) {
                    a[n] = "hide";
                    var s = ("" + e.css(t.toShow[0], n)).match(/^([\d+-.]+)(.*)$/);
                    r[n] = {
                        value: s[1],
                        unit: s[2] || "px"
                    }
                }), t.toShow.css({
                    height: 0,
                    overflow: "hidden"
                }).show(), t.toHide.filter(":hidden").each(t.complete).end().filter(":visible").animate(a, {
                    step: function (e, i) {
                        "height" == i.prop && (o = 0 === i.end - i.start ? 0 : (i.now - i.start) / (i.end - i.start)), t.toShow[0].style[i.prop] = o * r[i.prop].value + r[i.prop].unit
                    },
                    duration: t.duration,
                    easing: t.easing,
                    complete: function () {
                        t.autoHeight || t.toShow.css("height", ""), t.toShow.css({
                            width: n,
                            overflow: s
                        }), t.complete()
                    }
                })
            },
            bounceslide: function (e) {
                this.slide(e, {
                    easing: e.down ? "easeOutBounce" : "swing",
                    duration: e.down ? 1e3 : 200
                })
            }
        }
    })
}(jQuery),
/*
 * jQuery UI Autocomplete 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */

function (e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var t, i = this,
                n = this.element[0].ownerDocument;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (n) {
                if (!i.options.disabled && !i.element.propAttr("readOnly")) {
                    t = !1;
                    var s = e.ui.keyCode;
                    switch (n.keyCode) {
                    case s.PAGE_UP:
                        i._move("previousPage", n);
                        break;
                    case s.PAGE_DOWN:
                        i._move("nextPage", n);
                        break;
                    case s.UP:
                        i._move("previous", n), n.preventDefault();
                        break;
                    case s.DOWN:
                        i._move("next", n), n.preventDefault();
                        break;
                    case s.ENTER:
                    case s.NUMPAD_ENTER:
                        i.menu.active && (t = !0, n.preventDefault());
                    case s.TAB:
                        if (!i.menu.active) return;
                        i.menu.select(n);
                        break;
                    case s.ESCAPE:
                        i.element.val(i.term), i.close(n);
                        break;
                    default:
                        clearTimeout(i.searching), i.searching = setTimeout(function () {
                            i.term != i.element.val() && (i.selectedItem = null, i.search(null, n))
                        }, i.options.delay)
                    }
                }
            }).bind("keypress.autocomplete", function (e) {
                t && (t = !1, e.preventDefault())
            }).bind("focus.autocomplete", function () {
                i.options.disabled || (i.selectedItem = null, i.previous = i.element.val())
            }).bind("blur.autocomplete", function (e) {
                i.options.disabled || (clearTimeout(i.searching), i.closing = setTimeout(function () {
                    i.close(e), i._change(e)
                }, 150))
            }), this._initSource(), this.response = function () {
                return i._response.apply(i, arguments)
            }, this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", n)[0]).mousedown(function (t) {
                var n = i.menu.element[0];
                e(t.target).closest(".ui-menu-item").length || setTimeout(function () {
                    e(document).one("mousedown", function (t) {
                        t.target === i.element[0] || t.target === n || e.ui.contains(n, t.target) || i.close()
                    })
                }, 1), setTimeout(function () {
                    clearTimeout(i.closing)
                }, 13)
            }).menu({
                focus: function (e, t) {
                    var n = t.item.data("item.autocomplete");
                    !1 !== i._trigger("focus", e, {
                        item: n
                    }) && /^key/.test(e.originalEvent.type) && i.element.val(n.value)
                },
                selected: function (e, t) {
                    var s = t.item.data("item.autocomplete"),
                        o = i.previous;
                    i.element[0] !== n.activeElement && (i.element.focus(), i.previous = o, setTimeout(function () {
                        i.previous = o, i.selectedItem = s
                    }, 1)), !1 !== i._trigger("select", e, {
                        item: s
                    }) && i.element.val(s.value), i.term = i.element.val(), i.close(e), i.selectedItem = s
                },
                blur: function () {
                    i.menu.element.is(":visible") && i.element.val() !== i.term && i.element.val(i.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"), e.fn.bgiframe && this.menu.element.bgiframe(), i.beforeunloadHandler = function () {
                i.element.removeAttr("autocomplete")
            }, e(window).bind("beforeunload", i.beforeunloadHandler)
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"), this.menu.element.remove(), e(window).unbind("beforeunload", this.beforeunloadHandler), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, i) {
            e.Widget.prototype._setOption.apply(this, arguments), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(e(i || "body", this.element[0].ownerDocument)[0]), "disabled" === t && i && this.xhr && this.xhr.abort()
        },
        _initSource: function () {
            var i, n, s = this;
            e.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, n) {
                n(e.ui.autocomplete.filter(i, t.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function (i, o) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: n,
                    data: i,
                    dataType: "json",
                    context: {
                        autocompleteRequest: ++t
                    },
                    success: function (e) {
                        this.autocompleteRequest === t && o(e)
                    },
                    error: function () {
                        this.autocompleteRequest === t && o([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function (e, t) {
            return e = null != e ? e : this.element.val(), this.term = this.element.val(), e.length < this.options.minLength ? this.close(t) : (clearTimeout(this.closing), this._trigger("search", t) !== !1 ? this._search(e) : void 0)
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.source({
                term: e
            }, this.response)
        },
        _response: function (e) {
            !this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close(), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (e) {
            clearTimeout(this.closing), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(i, t), this.menu.deactivate(), this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var n = this;
            e.each(i, function (e, i) {
                n._renderItem(t, i)
            })
        },
        _renderItem: function (t, i) {
            return e("<li></li>").data("item.autocomplete", i).append(e("<a></a>").text(i.label)).appendTo(t)
        },
        _move: function (e, t) {
            return this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
        },
        widget: function () {
            return this.menu.element
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (t, i) {
            var n = new RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function (e) {
                return n.test(e.label || e.value || e)
            })
        }
    })
}(jQuery),
/*
 * jQuery UI Menu (not officially released)
 * 
 * This widget isn't yet finished and the API is subject to change. We plan to finish
 * it for the next release. You're welcome to give it a try anyway and give us feedback,
 * as long as you're okay with migrating your code later on. We can help with that, too.
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Menu
 *
 * Depends:
 *	jquery.ui.core.js
 *  jquery.ui.widget.js
 */

function (e) {
    e.widget("ui.menu", {
        _create: function () {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (i) {
                e(i.target).closest(".ui-menu-item a").length && (i.preventDefault(), t.select(i))
            }), this.refresh()
        },
        refresh: function () {
            var t = this,
                i = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            i.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (i) {
                t.activate(i, e(this).parent())
            }).mouseleave(function () {
                t.deactivate()
            })
        },
        activate: function (e, t) {
            if (this.deactivate(), this.hasScroll()) {
                var i = t.offset().top - this.element.offset().top,
                    n = this.element.scrollTop(),
                    s = this.element.height();
                0 > i ? this.element.scrollTop(n + i) : i >= s && this.element.scrollTop(n + i - s + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(), this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function () {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function (e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, t, i) {
            if (!this.active) return this.activate(i, this.element.children(t)), void 0;
            var n = this.active[e + "All"](".ui-menu-item").eq(0);
            n.length ? this.activate(i, n) : this.activate(i, this.element.children(t))
        },
        nextPage: function (t) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) return this.activate(t, this.element.children(".ui-menu-item:first")), void 0;
                var i = this.active.offset().top,
                    n = this.element.height(),
                    s = this.element.children(".ui-menu-item").filter(function () {
                        var t = e(this).offset().top - i - n + e(this).height();
                        return 10 > t && t > -10
                    });
                s.length || (s = this.element.children(".ui-menu-item:last")), this.activate(t, s)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (t) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) return this.activate(t, this.element.children(".ui-menu-item:last")), void 0;
                var i = this.active.offset().top,
                    n = this.element.height();
                result = this.element.children(".ui-menu-item").filter(function () {
                    var t = e(this).offset().top - i + n - e(this).height();
                    return 10 > t && t > -10
                }), result.length || (result = this.element.children(".ui-menu-item:first")), this.activate(t, result)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element[e.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}(jQuery),
/*
 * jQuery UI Button 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */

function (e) {
    var t, i, n, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        r = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        l = function () {
            var t = e(this).find(":ui-button");
            setTimeout(function () {
                t.button("refresh")
            }, 1)
        },
        c = function (t) {
            var i = t.name,
                n = t.form,
                s = e([]);
            return i && (s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), s
        };
    e.widget("ui.button", {
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset.button").bind("reset.button", l), "boolean" != typeof this.options.disabled ? this.options.disabled = !! this.element.propAttr("disabled") : this.element.propAttr("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var r = this,
                a = this.options,
                u = "checkbox" === this.type || "radio" === this.type,
                h = "ui-state-hover" + (u ? "" : " ui-state-active"),
                d = "ui-state-focus";
            null === a.label && (a.label = this.buttonElement.html()), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter.button", function () {
                a.disabled || (e(this).addClass("ui-state-hover"), this === t && e(this).addClass("ui-state-active"))
            }).bind("mouseleave.button", function () {
                a.disabled || e(this).removeClass(h)
            }).bind("click.button", function (e) {
                a.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus.button", function () {
                r.buttonElement.addClass(d)
            }).bind("blur.button", function () {
                r.buttonElement.removeClass(d)
            }), u && (this.element.bind("change.button", function () {
                s || r.refresh()
            }), this.buttonElement.bind("mousedown.button", function (e) {
                a.disabled || (s = !1, i = e.pageX, n = e.pageY)
            }).bind("mouseup.button", function (e) {
                a.disabled || (i !== e.pageX || n !== e.pageY) && (s = !0)
            })), "checkbox" === this.type ? this.buttonElement.bind("click.button", function () {
                return a.disabled || s ? !1 : (e(this).toggleClass("ui-state-active"), r.buttonElement.attr("aria-pressed", r.element[0].checked), void 0)
            }) : "radio" === this.type ? this.buttonElement.bind("click.button", function () {
                if (a.disabled || s) return !1;
                e(this).addClass("ui-state-active"), r.buttonElement.attr("aria-pressed", "true");
                var t = r.element[0];
                c(t).not(t).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown.button", function () {
                return a.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, e(document).one("mouseup", function () {
                    t = null
                }), void 0)
            }).bind("mouseup.button", function () {
                return a.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown.button", function (t) {
                return a.disabled ? !1 : ((t.keyCode == e.ui.keyCode.SPACE || t.keyCode == e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
            }).bind("keyup.button", function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", a.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            if (this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type) {
                var e = this.element.parents().filter(":last"),
                    t = "label[for='" + this.element.attr("id") + "']";
                this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible");
                var i = this.element.is(":checked");
                i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.attr("aria-pressed", i)
            } else this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + r + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title"), e.Widget.prototype.destroy.call(this)
        },
        _setOption: function (t, i) {
            return e.Widget.prototype._setOption.apply(this, arguments), "disabled" === t ? (i ? this.element.propAttr("disabled", !0) : this.element.propAttr("disabled", !1), void 0) : (this._resetButton(), void 0)
        },
        refresh: function () {
            var t = this.element.is(":disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? c(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(a),
                i = e("<span></span>", this.element[0].ownerDocument).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                n = this.options.icons,
                s = n.primary && n.secondary,
                o = [];
            n.primary || n.secondary ? (this.options.text && o.push("ui-button-text-icon" + (s ? "s" : n.primary ? "-primary" : "-secondary")), n.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + n.primary + "'></span>"), n.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + n.secondary + "'></span>"), this.options.text || (o.push(s ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", i))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
        }
    }), e.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, i) {
            "disabled" === t && this.buttons.button("option", t, i), e.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function () {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy"), e.Widget.prototype.destroy.call(this)
        }
    })
}(jQuery),
/*
 * jQuery UI Datepicker 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */

function ($, undefined) {
    function Datepicker() {
        this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function bindHover(e) {
        var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.bind("mouseout", function (e) {
            var i = $(e.target).closest(t);
            i.length && i.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (i) {
            var n = $(i.target).closest(t);
            !$.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) && n.length && (n.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n.addClass("ui-state-hover"), n.hasClass("ui-datepicker-prev") && n.addClass("ui-datepicker-prev-hover"), n.hasClass("ui-datepicker-next") && n.addClass("ui-datepicker-next-hover"))
        })
    }
    function extendRemove(e, t) {
        $.extend(e, t);
        for (var i in t)(null == t[i] || t[i] == undefined) && (e[i] = t[i]);
        return e
    }
    function isArray(e) {
        return e && ($.browser.safari && "object" == typeof e && e.length || e.constructor && e.constructor.toString().match(/\Array\(\)/))
    }
    $.extend($.ui, {
        datepicker: {
            version: "1.8.18"
        }
    });
    var PROP_NAME = "datepicker",
        dpuuid = (new Date).getTime(),
        instActive;
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return extendRemove(this._defaults, e || {}), this
        },
        _attachDatepicker: function (target, settings) {
            var inlineSettings = null;
            for (var attrName in this._defaults) {
                var attrValue = target.getAttribute("date:" + attrName);
                if (attrValue) {
                    inlineSettings = inlineSettings || {};
                    try {
                        inlineSettings[attrName] = eval(attrValue)
                    } catch (err) {
                        inlineSettings[attrName] = attrValue
                    }
                }
            }
            var nodeName = target.nodeName.toLowerCase(),
                inline = "div" == nodeName || "span" == nodeName;
            target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
            var inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
        },
        _newInst: function (e, t) {
            var i = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1");
            return {
                id: i,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: t,
                dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, t) {
            var i = $(e);
            t.append = $([]), t.trigger = $([]), i.hasClass(this.markerClassName) || (this._attachments(i, t), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, i, n) {
                t.settings[i] = n
            }).bind("getData.datepicker", function (e, i) {
                return this._get(t, i)
            }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, t) {
            var i = this._get(t, "appendText"),
                n = this._get(t, "isRTL");
            t.append && t.append.remove(), i && (t.append = $('<span class="' + this._appendClass + '">' + i + "</span>"), e[n ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
            var s = this._get(t, "showOn");
            if (("focus" == s || "both" == s) && e.focus(this._showDatepicker), "button" == s || "both" == s) {
                var o = this._get(t, "buttonText"),
                    r = this._get(t, "buttonImage");
                t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: r,
                    alt: o,
                    title: o
                }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == r ? o : $("<img/>").attr({
                    src: r,
                    alt: o,
                    title: o
                }))), e[n ? "before" : "after"](t.trigger), t.trigger.click(function () {
                    return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1
                })
            }
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t = new Date(2009, 11, 20),
                    i = this._get(e, "dateFormat");
                if (i.match(/[DM]/)) {
                    var n = function (e) {
                            for (var t = 0, i = 0, n = 0; n < e.length; n++) e[n].length > t && (t = e[n].length, i = n);
                            return i
                        };
                    t.setMonth(n(this._get(e, i.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(n(this._get(e, i.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                }
                e.input.attr("size", this._formatDate(e, t).length)
            }
        },
        _inlineDatepicker: function (e, t) {
            var i = $(e);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function (e, i, n) {
                t.settings[i] = n
            }).bind("getData.datepicker", function (e, i) {
                return this._get(t, i)
            }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, t, i, n, s) {
            var o = this._dialogInst;
            if (!o) {
                this.uuid += 1;
                var r = "dp" + this.uuid;
                this._dialogInput = $('<input type="text" id="' + r + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, $.data(this._dialogInput[0], PROP_NAME, o)
            }
            if (extendRemove(o.settings, n || {}), t = t && t.constructor == Date ? this._formatDate(o, t) : t, this._dialogInput.val(t), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, !this._pos) {
                var a = document.documentElement.clientWidth,
                    l = document.documentElement.clientHeight,
                    c = document.documentElement.scrollLeft || document.body.scrollLeft,
                    u = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [a / 2 - 100 + c, l / 2 - 150 + u]
            }
            return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, o), this
        },
        _destroyDatepicker: function (e) {
            var t = $(e),
                i = $.data(e, PROP_NAME);
            if (t.hasClass(this.markerClassName)) {
                var n = e.nodeName.toLowerCase();
                $.removeData(e, PROP_NAME), "input" == n ? (i.append.remove(), i.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == n || "span" == n) && t.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (e) {
            var t = $(e),
                i = $.data(e, PROP_NAME);
            if (t.hasClass(this.markerClassName)) {
                var n = e.nodeName.toLowerCase();
                if ("input" == n) e.disabled = !1, i.trigger.filter("button").each(function () {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
                else if ("div" == n || "span" == n) {
                    var s = t.children("." + this._inlineClass);
                    s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function (t) {
                    return t == e ? null : t
                })
            }
        },
        _disableDatepicker: function (e) {
            var t = $(e),
                i = $.data(e, PROP_NAME);
            if (t.hasClass(this.markerClassName)) {
                var n = e.nodeName.toLowerCase();
                if ("input" == n) e.disabled = !0, i.trigger.filter("button").each(function () {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
                else if ("div" == n || "span" == n) {
                    var s = t.children("." + this._inlineClass);
                    s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = $.map(this._disabledInputs, function (t) {
                    return t == e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e
            }
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] == e) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return $.data(e, PROP_NAME)
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, t, i) {
            var n = this._getInst(e);
            if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : n ? "all" == t ? $.extend({}, n.settings) : this._get(n, t) : null;
            var s = t || {};
            if ("string" == typeof t && (s = {}, s[t] = i), n) {
                this._curInst == n && this._hideDatepicker();
                var o = this._getDateDatepicker(e, !0),
                    r = this._getMinMaxDate(n, "min"),
                    a = this._getMinMaxDate(n, "max");
                extendRemove(n.settings, s), null !== r && s.dateFormat !== undefined && s.minDate === undefined && (n.settings.minDate = this._formatDate(n, r)), null !== a && s.dateFormat !== undefined && s.maxDate === undefined && (n.settings.maxDate = this._formatDate(n, a)), this._attachments($(e), n), this._autoSize(n), this._setDate(n, o), this._updateAlternate(n), this._updateDatepicker(n)
            }
        },
        _changeDatepicker: function (e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (e) {
            var t = $.datepicker._getInst(e.target),
                i = !0,
                n = t.dpDiv.is(".ui-datepicker-rtl");
            if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
                $.datepicker._hideDatepicker(), i = !1;
                break;
            case 13:
                var s = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                s[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, s[0]);
                var o = $.datepicker._get(t, "onSelect");
                if (o) {
                    var r = $.datepicker._formatDate(t);
                    o.apply(t.input ? t.input[0] : null, [r, t])
                } else $.datepicker._hideDatepicker();
                return !1;
            case 27:
                $.datepicker._hideDatepicker();
                break;
            case 33:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 34:
                $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), i = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), i = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? 1 : -1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), i = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, n ? -1 : 1, "D"), i = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), i = e.ctrlKey || e.metaKey;
                break;
            default:
                i = !1
            } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : i = !1;
            i && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var t = $.datepicker._getInst(e.target);
            if ($.datepicker._get(t, "constrainInput")) {
                var i = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                    n = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                return e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1
            }
        },
        _doKeyUp: function (e) {
            var t = $.datepicker._getInst(e.target);
            if (t.input.val() != t.lastVal) try {
                var i = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                i && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
            } catch (e) {
                $.datepicker.log(e)
            }
            return !0
        },
        _showDatepicker: function (e) {
            if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
                var t = $.datepicker._getInst(e);
                $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                var i = $.datepicker._get(t, "beforeShow"),
                    n = i ? i.apply(e, [e, t]) : {};
                if (n !== !1) {
                    extendRemove(t.settings, n), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                    var s = !1;
                    $(e).parents().each(function () {
                        return s |= "fixed" == $(this).css("position"), !s
                    }), s && $.browser.opera && ($.datepicker._pos[0] -= document.documentElement.scrollLeft, $.datepicker._pos[1] -= document.documentElement.scrollTop);
                    var o = {
                        left: $.datepicker._pos[0],
                        top: $.datepicker._pos[1]
                    };
                    if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), $.datepicker._updateDatepicker(t), o = $.datepicker._checkOffset(t, o, s), t.dpDiv.css({
                        position: $.datepicker._inDialog && $.blockUI ? "static" : s ? "fixed" : "absolute",
                        display: "none",
                        left: o.left + "px",
                        top: o.top + "px"
                    }), !t.inline) {
                        var r = $.datepicker._get(t, "showAnim"),
                            a = $.datepicker._get(t, "duration"),
                            l = function () {
                                var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                                if (e.length) {
                                    var i = $.datepicker._getBorders(t.dpDiv);
                                    e.css({
                                        left: -i[0],
                                        top: -i[1],
                                        width: t.dpDiv.outerWidth(),
                                        height: t.dpDiv.outerHeight()
                                    })
                                }
                            };
                        t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && $.effects[r] ? t.dpDiv.show(r, $.datepicker._get(t, "showOptions"), a, l) : t.dpDiv[r || "show"](r ? a : null, l), r && a || l(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                    }
                }
            }
        },
        _updateDatepicker: function (e) {
            var t = this;
            t.maxRows = 4;
            var i = $.datepicker._getBorders(e.dpDiv);
            instActive = e, e.dpDiv.empty().append(this._generateHTML(e));
            var n = e.dpDiv.find("iframe.ui-datepicker-cover");
            n.length && n.css({
                left: -i[0],
                top: -i[1],
                width: e.dpDiv.outerWidth(),
                height: e.dpDiv.outerHeight()
            }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var s = this._getNumberOfMonths(e),
                o = s[1],
                r = 17;
            if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", r * o + "em"), e.dpDiv[(1 != s[0] || 1 != s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
                var a = e.yearshtml;
                setTimeout(function () {
                    a === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), a = e.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (e) {
            var t = function (e) {
                    return {
                        thin: 1,
                        medium: 2,
                        thick: 3
                    }[e] || e
                };
            return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))]
        },
        _checkOffset: function (e, t, i) {
            var n = e.dpDiv.outerWidth(),
                s = e.dpDiv.outerHeight(),
                o = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                a = document.documentElement.clientWidth + $(document).scrollLeft(),
                l = document.documentElement.clientHeight + $(document).scrollTop();
            return t.left -= this._get(e, "isRTL") ? n - o : 0, t.left -= i && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= i && t.top == e.input.offset().top + r ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + n > a && a > n ? Math.abs(t.left + n - a) : 0), t.top -= Math.min(t.top, t.top + s > l && l > s ? Math.abs(s + r) : 0), t
        },
        _findPos: function (e) {
            for (var t = this._getInst(e), i = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[i ? "previousSibling" : "nextSibling"];
            var n = $(e).offset();
            return [n.left, n.top]
        },
        _hideDatepicker: function (e) {
            var t = this._curInst;
            if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
                var i = this._get(t, "showAnim"),
                    n = this._get(t, "duration"),
                    s = this,
                    o = function () {
                        $.datepicker._tidyDialog(t), s._curInst = null
                    };
                $.effects && $.effects[i] ? t.dpDiv.hide(i, $.datepicker._get(t, "showOptions"), n, o) : t.dpDiv["slideDown" == i ? "slideUp" : "fadeIn" == i ? "fadeOut" : "hide"](i ? n : null, o), i || o(), this._datepickerShowing = !1;
                var r = this._get(t, "onClose");
                r && r.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
            }
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if ($.datepicker._curInst) {
                var t = $(e.target),
                    i = $.datepicker._getInst(t[0]);
                (t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != i) && $.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, t, i) {
            var n = $(e),
                s = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(s, t + ("M" == i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
        },
        _gotoToday: function (e) {
            var t = $(e),
                i = this._getInst(t[0]);
            if (this._get(i, "gotoCurrent") && i.currentDay) i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear;
            else {
                var n = new Date;
                i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()
            }
            this._notifyChange(i), this._adjustDate(t)
        },
        _selectMonthYear: function (e, t, i) {
            var n = $(e),
                s = this._getInst(n[0]);
            s["selected" + ("M" == i ? "Month" : "Year")] = s["draw" + ("M" == i ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(n)
        },
        _selectDay: function (e, t, i, n) {
            var s = $(e);
            if (!$(n).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(s[0])) {
                var o = this._getInst(s[0]);
                o.selectedDay = o.currentDay = $("a", n).html(), o.selectedMonth = o.currentMonth = t, o.selectedYear = o.currentYear = i, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
            }
        },
        _clearDate: function (e) {
            var t = $(e);
            this._getInst(t[0]), this._selectDate(t, "")
        },
        _selectDate: function (e, t) {
            var i = $(e),
                n = this._getInst(i[0]);
            t = null != t ? t : this._formatDate(n), n.input && n.input.val(t), this._updateAlternate(n);
            var s = this._get(n, "onSelect");
            s ? s.apply(n.input ? n.input[0] : null, [t, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var t = this._get(e, "altField");
            if (t) {
                var i = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                    n = this._getDate(e),
                    s = this.formatDate(i, n, this._getFormatConfig(e));
                $(t).each(function () {
                    $(this).val(s)
                })
            }
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (e) {
            var t = new Date(e.getTime());
            t.setDate(t.getDate() + 4 - (t.getDay() || 7));
            var i = t.getTime();
            return t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
        },
        parseDate: function (e, t, i) {
            if (null == e || null == t) throw "Invalid arguments";
            if (t = "object" == typeof t ? t.toString() : t + "", "" == t) return null;
            var n = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            n = "string" != typeof n ? n : (new Date).getFullYear() % 100 + parseInt(n, 10);
            for (var s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, o = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, a = (i ? i.monthNames : null) || this._defaults.monthNames, l = -1, c = -1, u = -1, h = -1, d = !1, p = function (t) {
                    var i = b + 1 < e.length && e.charAt(b + 1) == t;
                    return i && b++, i
                }, f = function (e) {
                    var i = p(e),
                        n = "@" == e ? 14 : "!" == e ? 20 : "y" == e && i ? 4 : "o" == e ? 3 : 2,
                        s = new RegExp("^\\d{1," + n + "}"),
                        o = t.substring(v).match(s);
                    if (!o) throw "Missing number at position " + v;
                    return v += o[0].length, parseInt(o[0], 10)
                }, g = function (e, i, n) {
                    var s = $.map(p(e) ? n : i, function (e, t) {
                        return [[t, e]]
                    }).sort(function (e, t) {
                        return -(e[1].length - t[1].length)
                    }),
                        o = -1;
                    if ($.each(s, function (e, i) {
                        var n = i[1];
                        return t.substr(v, n.length).toLowerCase() == n.toLowerCase() ? (o = i[0], v += n.length, !1) : void 0
                    }), -1 != o) return o + 1;
                    throw "Unknown name at position " + v
                }, m = function () {
                    if (t.charAt(v) != e.charAt(b)) throw "Unexpected literal at position " + v;
                    v++
                }, v = 0, b = 0; b < e.length; b++) if (d)"'" != e.charAt(b) || p("'") ? m() : d = !1;
            else switch (e.charAt(b)) {
            case "d":
                u = f("d");
                break;
            case "D":
                g("D", s, o);
                break;
            case "o":
                h = f("o");
                break;
            case "m":
                c = f("m");
                break;
            case "M":
                c = g("M", r, a);
                break;
            case "y":
                l = f("y");
                break;
            case "@":
                var y = new Date(f("@"));
                l = y.getFullYear(), c = y.getMonth() + 1, u = y.getDate();
                break;
            case "!":
                var y = new Date((f("!") - this._ticksTo1970) / 1e4);
                l = y.getFullYear(), c = y.getMonth() + 1, u = y.getDate();
                break;
            case "'":
                p("'") ? m() : d = !0;
                break;
            default:
                m()
            }
            if (v < t.length) throw "Extra/unparsed characters found in date: " + t.substring(v);
            if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (n >= l ? 0 : -100)), h > -1) for (c = 1, u = h;;) {
                var _ = this._getDaysInMonth(l, c - 1);
                if (_ >= u) break;
                c++, u -= _
            }
            var y = this._daylightSavingAdjust(new Date(l, c - 1, u));
            if (y.getFullYear() != l || y.getMonth() + 1 != c || y.getDate() != u) throw "Invalid date";
            return y
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (e, t, i) {
            if (!t) return "";
            var n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                a = function (t) {
                    var i = d + 1 < e.length && e.charAt(d + 1) == t;
                    return i && d++, i
                },
                l = function (e, t, i) {
                    var n = "" + t;
                    if (a(e)) for (; n.length < i;) n = "0" + n;
                    return n
                },
                c = function (e, t, i, n) {
                    return a(e) ? n[t] : i[t]
                },
                u = "",
                h = !1;
            if (t) for (var d = 0; d < e.length; d++) if (h)"'" != e.charAt(d) || a("'") ? u += e.charAt(d) : h = !1;
            else switch (e.charAt(d)) {
            case "d":
                u += l("d", t.getDate(), 2);
                break;
            case "D":
                u += c("D", t.getDay(), n, s);
                break;
            case "o":
                u += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
            case "m":
                u += l("m", t.getMonth() + 1, 2);
                break;
            case "M":
                u += c("M", t.getMonth(), o, r);
                break;
            case "y":
                u += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                break;
            case "@":
                u += t.getTime();
                break;
            case "!":
                u += 1e4 * t.getTime() + this._ticksTo1970;
                break;
            case "'":
                a("'") ? u += "'" : h = !0;
                break;
            default:
                u += e.charAt(d)
            }
            return u
        },
        _possibleChars: function (e) {
            for (var t = "", i = !1, n = function (t) {
                    var i = s + 1 < e.length && e.charAt(s + 1) == t;
                    return i && s++, i
                }, s = 0; s < e.length; s++) if (i)"'" != e.charAt(s) || n("'") ? t += e.charAt(s) : i = !1;
            else switch (e.charAt(s)) {
            case "d":
            case "m":
            case "y":
            case "@":
                t += "0123456789";
                break;
            case "D":
            case "M":
                return null;
            case "'":
                n("'") ? t += "'" : i = !0;
                break;
            default:
                t += e.charAt(s)
            }
            return t
        },
        _get: function (e, t) {
            return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() != e.lastVal) {
                var i, n, s = this._get(e, "dateFormat"),
                    o = e.lastVal = e.input ? e.input.val() : null;
                i = n = this._getDefaultDate(e);
                var r = this._getFormatConfig(e);
                try {
                    i = this.parseDate(s, o, r) || n
                } catch (a) {
                    this.log(a), o = t ? "" : o
                }
                e.selectedDay = i.getDate(), e.drawMonth = e.selectedMonth = i.getMonth(), e.drawYear = e.selectedYear = i.getFullYear(), e.currentDay = o ? i.getDate() : 0, e.currentMonth = o ? i.getMonth() : 0, e.currentYear = o ? i.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (e, t, i) {
            var n = function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                s = function (t) {
                    try {
                        return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e))
                    } catch (i) {}
                    for (var n = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), r = n.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(t); l;) {
                        switch (l[2] || "d") {
                        case "d":
                        case "D":
                            r += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            r += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, o));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(l[1], 10), r = Math.min(r, $.datepicker._getDaysInMonth(s, o))
                        }
                        l = a.exec(t)
                    }
                    return new Date(s, o, r)
                },
                o = null == t || "" === t ? i : "string" == typeof t ? s(t) : "number" == typeof t ? isNaN(t) ? i : n(t) : new Date(t.getTime());
            return o = o && "Invalid Date" == o.toString() ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, i) {
            var n = !t,
                s = e.selectedMonth,
                o = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s == e.selectedMonth && o == e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(n ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _generateHTML: function (e) {
            var t = new Date;
            t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
            var i = this._get(e, "isRTL"),
                n = this._get(e, "showButtonPanel"),
                s = this._get(e, "hideIfNoPrevNext"),
                o = this._get(e, "navigationAsDateFormat"),
                r = this._getNumberOfMonths(e),
                a = this._get(e, "showCurrentAtPos"),
                l = this._get(e, "stepMonths"),
                c = 1 != r[0] || 1 != r[1],
                u = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                h = this._getMinMaxDate(e, "min"),
                d = this._getMinMaxDate(e, "max"),
                p = e.drawMonth - a,
                f = e.drawYear;
            if (0 > p && (p += 12, f--), d) {
                var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - r[0] * r[1] + 1, d.getDate()));
                for (g = h && h > g ? h : g; this._daylightSavingAdjust(new Date(f, p, 1)) > g;) p--, 0 > p && (p = 11, f--)
            }
            e.drawMonth = p, e.drawYear = f;
            var m = this._get(e, "prevText");
            m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(f, p - l, 1)), this._getFormatConfig(e)) : m;
            var v = this._canAdjustMonth(e, -1, f, p) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + e.id + "', -" + l + ", 'M');\"" + ' title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>" : s ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "e" : "w") + '">' + m + "</span></a>",
                b = this._get(e, "nextText");
            b = o ? this.formatDate(b, this._daylightSavingAdjust(new Date(f, p + l, 1)), this._getFormatConfig(e)) : b;
            var y = this._canAdjustMonth(e, 1, f, p) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._adjustDate('#" + e.id + "', +" + l + ", 'M');\"" + ' title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>" : s ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + b + '"><span class="ui-icon ui-icon-circle-triangle-' + (i ? "w" : "e") + '">' + b + "</span></a>",
                _ = this._get(e, "currentText"),
                w = this._get(e, "gotoCurrent") && e.currentDay ? u : t;
            _ = o ? this.formatDate(_, w, this._getFormatConfig(e)) : _;
            var x = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + dpuuid + '.datepicker._hideDatepicker();">' + this._get(e, "closeText") + "</button>",
                k = n ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (i ? x : "") + (this._isInRange(e, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + dpuuid + ".datepicker._gotoToday('#" + e.id + "');\"" + ">" + _ + "</button>" : "") + (i ? "" : x) + "</div>" : "",
                C = parseInt(this._get(e, "firstDay"), 10);
            C = isNaN(C) ? 0 : C;
            var D = this._get(e, "showWeek"),
                S = this._get(e, "dayNames");
            this._get(e, "dayNamesShort");
            var T = this._get(e, "dayNamesMin"),
                M = this._get(e, "monthNames"),
                I = this._get(e, "monthNamesShort"),
                P = this._get(e, "beforeShowDay"),
                N = this._get(e, "showOtherMonths"),
                E = this._get(e, "selectOtherMonths");
            this._get(e, "calculateWeek") || this.iso8601Week;
            for (var A = this._getDefaultDate(e), z = "", O = 0; O < r[0]; O++) {
                var j = "";
                this.maxRows = 4;
                for (var H = 0; H < r[1]; H++) {
                    var F = this._daylightSavingAdjust(new Date(f, p, e.selectedDay)),
                        L = " ui-corner-all",
                        W = "";
                    if (c) {
                        if (W += '<div class="ui-datepicker-group', r[1] > 1) switch (H) {
                        case 0:
                            W += " ui-datepicker-group-first", L = " ui-corner-" + (i ? "right" : "left");
                            break;
                        case r[1] - 1:
                            W += " ui-datepicker-group-last", L = " ui-corner-" + (i ? "left" : "right");
                            break;
                        default:
                            W += " ui-datepicker-group-middle", L = ""
                        }
                        W += '">'
                    }
                    W += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + L + '">' + (/all|left/.test(L) && 0 == O ? i ? y : v : "") + (/all|right/.test(L) && 0 == O ? i ? v : y : "") + this._generateMonthYearHeader(e, p, f, h, d, O > 0 || H > 0, M, I) + '</div><table class="ui-datepicker-calendar"><thead>' + "<tr>";
                    for (var R = D ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", q = 0; 7 > q; q++) {
                        var B = (q + C) % 7;
                        R += "<th" + ((q + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + ">" + '<span title="' + S[B] + '">' + T[B] + "</span></th>"
                    }
                    W += R + "</tr></thead><tbody>";
                    var Y = this._getDaysInMonth(f, p);
                    f == e.selectedYear && p == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, Y));
                    var X = (this._getFirstDayOfMonth(f, p) - C + 7) % 7,
                        U = Math.ceil((X + Y) / 7),
                        K = c ? this.maxRows > U ? this.maxRows : U : U;
                    this.maxRows = K;
                    for (var Q = this._daylightSavingAdjust(new Date(f, p, 1 - X)), V = 0; K > V; V++) {
                        W += "<tr>";
                        for (var G = D ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(Q) + "</td>" : "", q = 0; 7 > q; q++) {
                            var J = P ? P.apply(e.input ? e.input[0] : null, [Q]) : [!0, ""],
                                Z = Q.getMonth() != p,
                                et = Z && !E || !J[0] || h && h > Q || d && Q > d;
                            G += '<td class="' + ((q + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (Q.getTime() == F.getTime() && p == e.selectedMonth && e._keyEvent || A.getTime() == Q.getTime() && A.getTime() == F.getTime() ? " " + this._dayOverClass : "") + (et ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !N ? "" : " " + J[1] + (Q.getTime() == u.getTime() ? " " + this._currentClass : "") + (Q.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !N || !J[2] ? "" : ' title="' + J[2] + '"') + (et ? "" : ' onclick="DP_jQuery_' + dpuuid + ".datepicker._selectDay('#" + e.id + "'," + Q.getMonth() + "," + Q.getFullYear() + ', this);return false;"') + ">" + (Z && !N ? "&#xa0;" : et ? '<span class="ui-state-default">' + Q.getDate() + "</span>" : '<a class="ui-state-default' + (Q.getTime() == t.getTime() ? " ui-state-highlight" : "") + (Q.getTime() == u.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + Q.getDate() + "</a>") + "</td>", Q.setDate(Q.getDate() + 1), Q = this._daylightSavingAdjust(Q)
                        }
                        W += G + "</tr>"
                    }
                    p++, p > 11 && (p = 0, f++), W += "</tbody></table>" + (c ? "</div>" + (r[0] > 0 && H == r[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), j += W
                }
                z += j
            }
            return z += k + ($.browser.msie && parseInt($.browser.version, 10) < 7 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, z
        },
        _generateMonthYearHeader: function (e, t, i, n, s, o, r, a) {
            var l = this._get(e, "changeMonth"),
                c = this._get(e, "changeYear"),
                u = this._get(e, "showMonthAfterYear"),
                h = '<div class="ui-datepicker-title">',
                d = "";
            if (o || !l) d += '<span class="ui-datepicker-month">' + r[t] + "</span>";
            else {
                var p = n && n.getFullYear() == i,
                    f = s && s.getFullYear() == i;
                d += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + e.id + "', this, 'M');\" " + ">";
                for (var g = 0; 12 > g; g++)(!p || g >= n.getMonth()) && (!f || g <= s.getMonth()) && (d += '<option value="' + g + '"' + (g == t ? ' selected="selected"' : "") + ">" + a[g] + "</option>");
                d += "</select>"
            }
            if (u || (h += d + (!o && l && c ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", o || !c) h += '<span class="ui-datepicker-year">' + i + "</span>";
            else {
                var m = this._get(e, "yearRange").split(":"),
                    v = (new Date).getFullYear(),
                    b = function (e) {
                        var t = e.match(/c[+-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10);
                        return isNaN(t) ? v : t
                    },
                    y = b(m[0]),
                    _ = Math.max(y, b(m[1] || ""));
                for (y = n ? Math.max(y, n.getFullYear()) : y, _ = s ? Math.min(_, s.getFullYear()) : _, e.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + dpuuid + ".datepicker._selectMonthYear('#" + e.id + "', this, 'Y');\" " + ">"; _ >= y; y++) e.yearshtml += '<option value="' + y + '"' + (y == i ? ' selected="selected"' : "") + ">" + y + "</option>";
                e.yearshtml += "</select>", h += e.yearshtml, e.yearshtml = null
            }
            return h += this._get(e, "yearSuffix"), u && (h += (!o && l && c ? "" : "&#xa0;") + d), h += "</div>"
        },
        _adjustInstDate: function (e, t, i) {
            var n = e.drawYear + ("Y" == i ? t : 0),
                s = e.drawMonth + ("M" == i ? t : 0),
                o = Math.min(e.selectedDay, this._getDaysInMonth(n, s)) + ("D" == i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(n, s, o)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" == i || "Y" == i) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var i = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                s = i && i > t ? i : t;
            return s = n && s > n ? n : s
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function (e, t, i, n) {
            var s = this._getNumberOfMonths(e),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(e, o)
        },
        _isInRange: function (e, t) {
            var i = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max");
            return (!i || t.getTime() >= i.getTime()) && (!n || t.getTime() <= n.getTime())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, i, n) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(n, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }), $.fn.datepicker = function (e) {
        if (!this.length) return this;
        $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find("body").append($.datepicker.dpDiv), $.datepicker.initialized = !0);
        var t = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function () {
            "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e)
        }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
    }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.8.18", window["DP_jQuery_" + dpuuid] = $
}(jQuery),
/*
 * jQuery UI Dialog 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */

function (e, t) {
    var i = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        n = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        s = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        o = e.attrFn || {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
            click: !0
        };
    e.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function (t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1e3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.options.title = this.options.title || this.originalTitle;
            var t = this,
                n = t.options,
                s = n.title || "&#160;",
                o = e.ui.dialog.getTitleId(t.element),
                r = (t.uiDialog = e("<div></div>")).appendTo(document.body).hide().addClass(i + n.dialogClass).css({
                    zIndex: n.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (i) {
                    n.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE && (t.close(i), i.preventDefault())
                }).attr({
                    role: "dialog",
                    "aria-labelledby": o
                }).mousedown(function (e) {
                    t.moveToTop(!1, e)
                }),
                a = (t.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(r), (t.uiDialogTitlebar = e("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(r)),
                l = e('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                    l.addClass("ui-state-hover")
                }, function () {
                    l.removeClass("ui-state-hover")
                }).focus(function () {
                    l.addClass("ui-state-focus")
                }).blur(function () {
                    l.removeClass("ui-state-focus")
                }).click(function (e) {
                    return t.close(e), !1
                }).appendTo(a);
            (t.uiDialogTitlebarCloseText = e("<span></span>")).addClass("ui-icon ui-icon-closethick").text(n.closeText).appendTo(l), e("<span></span>").addClass("ui-dialog-title").attr("id", o).html(s).prependTo(a), e.isFunction(n.beforeclose) && !e.isFunction(n.beforeClose) && (n.beforeClose = n.beforeclose), a.find("*").add(a).disableSelection(), n.draggable && e.fn.draggable && t._makeDraggable(), n.resizable && e.fn.resizable && t._makeResizable(), t._createButtons(n.buttons), t._isOpen = !1, e.fn.bgiframe && r.bgiframe()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        destroy: function () {
            var e = this;
            return e.overlay && e.overlay.destroy(), e.uiDialog.hide(), e.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), e.uiDialog.remove(), e.originalTitle && e.element.attr("title", e.originalTitle), e
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (t) {
            var i, n, s = this;
            if (!1 !== s._trigger("beforeClose", t)) return s.overlay && s.overlay.destroy(), s.uiDialog.unbind("keypress.ui-dialog"), s._isOpen = !1, s.options.hide ? s.uiDialog.hide(s.options.hide, function () {
                s._trigger("close", t)
            }) : (s.uiDialog.hide(), s._trigger("close", t)), e.ui.dialog.overlay.resize(), s.options.modal && (i = 0, e(".ui-dialog").each(function () {
                this !== s.uiDialog[0] && (n = e(this).css("z-index"), isNaN(n) || (i = Math.max(i, n)))
            }), e.ui.dialog.maxZ = i), s
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (t, i) {
            var n, s = this,
                o = s.options;
            return o.modal && !t || !o.stack && !o.modal ? s._trigger("focus", i) : (o.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = o.zIndex), s.overlay && (e.ui.dialog.maxZ += 1, s.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ)), n = {
                scrollTop: s.element.scrollTop(),
                scrollLeft: s.element.scrollLeft()
            }, e.ui.dialog.maxZ += 1, s.uiDialog.css("z-index", e.ui.dialog.maxZ), s.element.attr(n), s._trigger("focus", i), s)
        },
        open: function () {
            if (!this._isOpen) {
                var t = this,
                    i = t.options,
                    n = t.uiDialog;
                return t.overlay = i.modal ? new e.ui.dialog.overlay(t) : null, t._size(), t._position(i.position), n.show(i.show), t.moveToTop(!0), i.modal && n.bind("keydown.ui-dialog", function (t) {
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var i = e(":tabbable", this),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        return t.target !== s[0] || t.shiftKey ? t.target === n[0] && t.shiftKey ? (s.focus(1), !1) : void 0 : (n.focus(1), !1)
                    }
                }), e(t.element.find(":tabbable").get().concat(n.find(".ui-dialog-buttonpane :tabbable").get().concat(n.get()))).eq(0).focus(), t._isOpen = !0, t._trigger("open"), t
            }
        },
        _createButtons: function (t) {
            var i = this,
                n = !1,
                s = e("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),
                r = e("<div></div>").addClass("ui-dialog-buttonset").appendTo(s);
            i.uiDialog.find(".ui-dialog-buttonpane").remove(), "object" == typeof t && null !== t && e.each(t, function () {
                return !(n = !0)
            }), n && (e.each(t, function (t, n) {
                n = e.isFunction(n) ? {
                    click: n,
                    text: t
                } : n;
                var s = e('<button type="button"></button>').click(function () {
                    n.click.apply(i.element[0], arguments)
                }).appendTo(r);
                e.each(n, function (e, t) {
                    "click" !== e && (e in o ? s[e](t) : s.attr(e, t))
                }), e.fn.button && s.button()
            }), s.appendTo(i.uiDialog))
        },
        _makeDraggable: function () {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i, n = this,
                s = n.options,
                o = e(document);
            n.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (o, r) {
                    i = "auto" === s.height ? "auto" : e(this).height(), e(this).height(e(this).height()).addClass("ui-dialog-dragging"), n._trigger("dragStart", o, t(r))
                },
                drag: function (e, i) {
                    n._trigger("drag", e, t(i))
                },
                stop: function (r, a) {
                    s.position = [a.position.left - o.scrollLeft(), a.position.top - o.scrollTop()], e(this).removeClass("ui-dialog-dragging").height(i), n._trigger("dragStop", r, t(a)), e.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (i) {
            function n(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            i = i === t ? this.options.resizable : i;
            var s = this,
                o = s.options,
                r = s.uiDialog.css("position"),
                a = "string" == typeof i ? i : "n,e,s,w,se,sw,ne,nw";
            s.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: s.element,
                maxWidth: o.maxWidth,
                maxHeight: o.maxHeight,
                minWidth: o.minWidth,
                minHeight: s._minHeight(),
                handles: a,
                start: function (t, i) {
                    e(this).addClass("ui-dialog-resizing"), s._trigger("resizeStart", t, n(i))
                },
                resize: function (e, t) {
                    s._trigger("resize", e, n(t))
                },
                stop: function (t, i) {
                    e(this).removeClass("ui-dialog-resizing"), o.height = e(this).height(), o.width = e(this).width(), s._trigger("resizeStop", t, n(i)), e.ui.dialog.overlay.resize()
                }
            }).css("position", r).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function (t) {
            var i, n = [],
                s = [0, 0];
            t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (n = t.split ? t.split(" ") : [t[0], t[1]], 1 === n.length && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                +n[e] === n[e] && (s[e] = n[e], n[e] = t)
            }), t = {
                my: n.join(" "),
                at: n.join(" "),
                offset: s.join(" ")
            }), t = e.extend({}, e.ui.dialog.prototype.options.position, t)) : t = e.ui.dialog.prototype.options.position, i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.css({
                top: 0,
                left: 0
            }).position(e.extend({
                of: window
            }, t)), i || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this,
                o = {},
                r = !1;
            e.each(t, function (e, t) {
                i._setOption(e, t), e in n && (r = !0), e in s && (o[e] = t)
            }), r && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function (t, n) {
            var s = this,
                o = s.uiDialog;
            switch (t) {
            case "beforeclose":
                t = "beforeClose";
                break;
            case "buttons":
                s._createButtons(n);
                break;
            case "closeText":
                s.uiDialogTitlebarCloseText.text("" + n);
                break;
            case "dialogClass":
                o.removeClass(s.options.dialogClass).addClass(i + n);
                break;
            case "disabled":
                n ? o.addClass("ui-dialog-disabled") : o.removeClass("ui-dialog-disabled");
                break;
            case "draggable":
                var r = o.is(":data(draggable)");
                r && !n && o.draggable("destroy"), !r && n && s._makeDraggable();
                break;
            case "position":
                s._position(n);
                break;
            case "resizable":
                var a = o.is(":data(resizable)");
                a && !n && o.resizable("destroy"), a && "string" == typeof n && o.resizable("option", "handles", n), a || n === !1 || s._makeResizable(n);
                break;
            case "title":
                e(".ui-dialog-title", s.uiDialogTitlebar).html("" + (n || "&#160;"))
            }
            e.Widget.prototype._setOption.apply(s, arguments)
        },
        _size: function () {
            var t, i, n = this.options,
                s = this.uiDialog.is(":visible");
            if (this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: n.width
            }).height(), i = Math.max(0, n.minHeight - t), "auto" === n.height) if (e.support.minHeight) this.element.css({
                minHeight: i,
                height: "auto"
            });
            else {
                this.uiDialog.show();
                var o = this.element.css("height", "auto").height();
                s || this.uiDialog.hide(), this.element.height(Math.max(o, i))
            } else this.element.height(Math.max(n.height - t, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    }), e.extend(e.ui.dialog, {
        version: "1.8.18",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (e) {
            var t = e.attr("id");
            return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t
        },
        overlay: function (t) {
            this.$el = e.ui.dialog.overlay.create(t)
        }
    }), e.extend(e.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (e) {
            return e + ".dialog-overlay"
        }).join(" "),
        create: function (t) {
            0 === this.instances.length && (setTimeout(function () {
                e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function (t) {
                    return e(t.target).zIndex() < e.ui.dialog.overlay.maxZ ? !1 : void 0
                })
            }, 1), e(document).bind("keydown.dialog-overlay", function (i) {
                t.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE && (t.close(i), i.preventDefault())
            }), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
            var i = (this.oldInstances.pop() || e("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            return e.fn.bgiframe && i.bgiframe(), this.instances.push(i), i
        },
        destroy: function (t) {
            var i = e.inArray(t, this.instances); - 1 != i && this.oldInstances.push(this.instances.splice(i, 1)[0]), 0 === this.instances.length && e([document, window]).unbind(".dialog-overlay"), t.remove();
            var n = 0;
            e.each(this.instances, function () {
                n = Math.max(n, this.css("z-index"))
            }), this.maxZ = n
        },
        height: function () {
            var t, i;
            return e.browser.msie && e.browser.version < 7 ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), i = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), i > t ? e(window).height() + "px" : t + "px") : e(document).height() + "px"
        },
        width: function () {
            var t, i;
            return e.browser.msie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), i = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), i > t ? e(window).width() + "px" : t + "px") : e(document).width() + "px"
        },
        resize: function () {
            var t = e([]);
            e.each(e.ui.dialog.overlay.instances, function () {
                t = t.add(this)
            }), t.css({
                width: 0,
                height: 0
            }).css({
                width: e.ui.dialog.overlay.width(),
                height: e.ui.dialog.overlay.height()
            })
        }
    }), e.extend(e.ui.dialog.overlay.prototype, {
        destroy: function () {
            e.ui.dialog.overlay.destroy(this.$el)
        }
    })
}(jQuery),
/*
 * jQuery UI Position 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */

function (e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
        i = /top|center|bottom/,
        n = "center",
        s = {},
        o = e.fn.position,
        r = e.fn.offset;
    e.fn.position = function (r) {
        if (!r || !r.of) return o.apply(this, arguments);
        r = e.extend({}, r);
        var a, l, c, u = e(r.of),
            h = u[0],
            d = (r.collision || "flip").split(" "),
            p = r.offset ? r.offset.split(" ") : [0, 0];
        return 9 === h.nodeType ? (a = u.width(), l = u.height(), c = {
            top: 0,
            left: 0
        }) : h.setTimeout ? (a = u.width(), l = u.height(), c = {
            top: u.scrollTop(),
            left: u.scrollLeft()
        }) : h.preventDefault ? (r.at = "left top", a = l = 0, c = {
            top: r.of.pageY,
            left: r.of.pageX
        }) : (a = u.outerWidth(), l = u.outerHeight(), c = u.offset()), e.each(["my", "at"], function () {
            var e = (r[this] || "").split(" ");
            1 === e.length && (e = t.test(e[0]) ? e.concat([n]) : i.test(e[0]) ? [n].concat(e) : [n, n]), e[0] = t.test(e[0]) ? e[0] : n, e[1] = i.test(e[1]) ? e[1] : n, r[this] = e
        }), 1 === d.length && (d[1] = d[0]), p[0] = parseInt(p[0], 10) || 0, 1 === p.length && (p[1] = p[0]), p[1] = parseInt(p[1], 10) || 0, "right" === r.at[0] ? c.left += a : r.at[0] === n && (c.left += a / 2), "bottom" === r.at[1] ? c.top += l : r.at[1] === n && (c.top += l / 2), c.left += p[0], c.top += p[1], this.each(function () {
            var t, i = e(this),
                o = i.outerWidth(),
                u = i.outerHeight(),
                h = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
                f = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
                g = o + h + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
                m = u + f + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
                v = e.extend({}, c);
            "right" === r.my[0] ? v.left -= o : r.my[0] === n && (v.left -= o / 2), "bottom" === r.my[1] ? v.top -= u : r.my[1] === n && (v.top -= u / 2), s.fractions || (v.left = Math.round(v.left), v.top = Math.round(v.top)), t = {
                left: v.left - h,
                top: v.top - f
            }, e.each(["left", "top"], function (i, n) {
                e.ui.position[d[i]] && e.ui.position[d[i]][n](v, {
                    targetWidth: a,
                    targetHeight: l,
                    elemWidth: o,
                    elemHeight: u,
                    collisionPosition: t,
                    collisionWidth: g,
                    collisionHeight: m,
                    offset: p,
                    my: r.my,
                    at: r.at
                })
            }), e.fn.bgiframe && i.bgiframe(), i.offset(e.extend(v, {
                using: r.using
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (t, i) {
                var n = e(window),
                    s = i.collisionPosition.left + i.collisionWidth - n.width() - n.scrollLeft();
                t.left = s > 0 ? t.left - s : Math.max(t.left - i.collisionPosition.left, t.left)
            },
            top: function (t, i) {
                var n = e(window),
                    s = i.collisionPosition.top + i.collisionHeight - n.height() - n.scrollTop();
                t.top = s > 0 ? t.top - s : Math.max(t.top - i.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function (t, i) {
                if (i.at[0] !== n) {
                    var s = e(window),
                        o = i.collisionPosition.left + i.collisionWidth - s.width() - s.scrollLeft(),
                        r = "left" === i.my[0] ? -i.elemWidth : "right" === i.my[0] ? i.elemWidth : 0,
                        a = "left" === i.at[0] ? i.targetWidth : -i.targetWidth,
                        l = -2 * i.offset[0];
                    t.left += i.collisionPosition.left < 0 ? r + a + l : o > 0 ? r + a + l : 0
                }
            },
            top: function (t, i) {
                if (i.at[1] !== n) {
                    var s = e(window),
                        o = i.collisionPosition.top + i.collisionHeight - s.height() - s.scrollTop(),
                        r = "top" === i.my[1] ? -i.elemHeight : "bottom" === i.my[1] ? i.elemHeight : 0,
                        a = "top" === i.at[1] ? i.targetHeight : -i.targetHeight,
                        l = -2 * i.offset[1];
                    t.top += i.collisionPosition.top < 0 ? r + a + l : o > 0 ? r + a + l : 0
                }
            }
        }
    }, e.offset.setOffset || (e.offset.setOffset = function (t, i) {
        /static/.test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var n = e(t),
            s = n.offset(),
            o = parseInt(e.curCSS(t, "top", !0), 10) || 0,
            r = parseInt(e.curCSS(t, "left", !0), 10) || 0,
            a = {
                top: i.top - s.top + o,
                left: i.left - s.left + r
            };
        "using" in i ? i.using.call(t, a) : n.css(a)
    }, e.fn.offset = function (t) {
        var i = this[0];
        return i && i.ownerDocument ? t ? this.each(function () {
            e.offset.setOffset(this, t)
        }) : r.call(this) : null
    }), function () {
        var t, i, n, o, r, a = document.getElementsByTagName("body")[0],
            l = document.createElement("div");
        t = document.createElement(a ? "div" : "body"), n = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, a && e.extend(n, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (var c in n) t.style[c] = n[c];
        t.appendChild(l), i = a || document.documentElement, i.insertBefore(t, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;", o = e(l).offset(function (e, t) {
            return t
        }).offset(), t.innerHTML = "", i.removeChild(t), r = o.top + o.left + (a ? 2e3 : 0), s.fractions = r > 21 && 22 > r
    }()
}(jQuery),
/*
 * jQuery UI Progressbar 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */

function (e, t) {
    e.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove(), e.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (e) {
            return e === t ? this._value() : (this._setOption("value", e), this)
        },
        _setOption: function (t, i) {
            "value" === t && (this.options.value = i, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), e.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function () {
            var e = this.options.value;
            return "number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var e = this.value(),
                t = this._percentage();
            this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
        }
    }), e.extend(e.ui.progressbar, {
        version: "1.8.18"
    })
}(jQuery),
/*
 * jQuery UI Slider 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */

function (e) {
    var t = 5;
    e.widget("ui.slider", e.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var i = this,
                n = this.options,
                s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                o = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                r = n.values && n.values.length || 1,
                a = [];
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all" + (n.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), n.range && (n.range === !0 && (n.values || (n.values = [this._valueMin(), this._valueMin()]), n.values.length && 2 !== n.values.length && (n.values = [n.values[0], n.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === n.range || "max" === n.range ? " ui-slider-range-" + n.range : "")));
            for (var l = s.length; r > l; l += 1) a.push(o);
            this.handles = s.add(e(a.join("")).appendTo(i.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function (e) {
                e.preventDefault()
            }).hover(function () {
                n.disabled || e(this).addClass("ui-state-hover")
            }, function () {
                e(this).removeClass("ui-state-hover")
            }).focus(function () {
                n.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus"))
            }).blur(function () {
                e(this).removeClass("ui-state-focus")
            }), this.handles.each(function (t) {
                e(this).data("index.ui-slider-handle", t)
            }), this.handles.keydown(function (n) {
                var s, o, r, a, l = e(this).data("index.ui-slider-handle");
                if (!i.options.disabled) {
                    switch (n.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (n.preventDefault(), !i._keySliding && (i._keySliding = !0, e(this).addClass("ui-state-active"), s = i._start(n, l), s === !1)) return
                    }
                    switch (a = i.options.step, o = r = i.options.values && i.options.values.length ? i.values(l) : i.value(), n.keyCode) {
                    case e.ui.keyCode.HOME:
                        r = i._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        r = i._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        r = i._trimAlignValue(o + (i._valueMax() - i._valueMin()) / t);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        r = i._trimAlignValue(o - (i._valueMax() - i._valueMin()) / t);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (o === i._valueMax()) return;
                        r = i._trimAlignValue(o + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (o === i._valueMin()) return;
                        r = i._trimAlignValue(o - a)
                    }
                    i._slide(n, l, r)
                }
            }).keyup(function (t) {
                var n = e(this).data("index.ui-slider-handle");
                i._keySliding && (i._keySliding = !1, i._stop(t, n), i._change(t, n), e(this).removeClass("ui-state-active"))
            }), this._refreshValue(), this._animateOff = !1
        },
        destroy: function () {
            return this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"), this._mouseDestroy(), this
        },
        _mouseCapture: function (t) {
            var i, n, s, o, r, a, l, c, u, h = this.options;
            return h.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, r = this, this.handles.each(function (t) {
                var i = Math.abs(n - r.values(t));
                s > i && (s = i, o = e(this), a = t)
            }), h.range === !0 && this.values(1) === h.min && (a += 1, o = e(this.handles[a])), l = this._start(t, a), l === !1 ? !1 : (this._mouseSliding = !0, r._handleIndex = a, o.addClass("ui-state-active").focus(), c = o.offset(), u = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = u ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - c.left - o.width() / 2,
                top: t.pageY - c.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, a, n), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            },
                i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, i, n, s, o;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / t, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
        },
        _start: function (e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function (e, t, i) {
            var n, s, o;
            this.options.values && this.options.values.length ? (n = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > n || 1 === t && n > i) && (i = n), i !== this.values(t) && (s = this.values(), s[t] = i, o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: s
            }), n = this.values(t ? 0 : 1), o !== !1 && this.values(t, i, !0))) : i !== this.value() && (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), o !== !1 && this.value(i))
        },
        _stop: function (e, t) {
            var i = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("change", e, i)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (t, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function (t, i) {
            var n, s = 0;
            switch (e.isArray(this.options.values) && (s = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
            case "disabled":
                i ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.propAttr("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.propAttr("disabled", !1), this.element.removeClass("ui-disabled"));
                break;
            case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                break;
            case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
            case "values":
                for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, i, n;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
            return i
        },
        _trimAlignValue: function (e) {
            if (e <= this._valueMin()) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                n = e - i;
            return 2 * Math.abs(i) >= t && (n += i > 0 ? t : -t), parseFloat(n.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var t, i, n, s, o, r = this.options.range,
                a = this.options,
                l = this,
                c = this._animateOff ? !1 : a.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (n) {
                t = 100 * ((l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = t + "%", e(this).stop(1, 1)[c ? "animate" : "css"](u, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    left: t + "%"
                }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
                    width: t - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === n && l.range.stop(1, 1)[c ? "animate" : "css"]({
                    bottom: t + "%"
                }, a.animate), 1 === n && l.range[c ? "animate" : "css"]({
                    height: t - i + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), i = t
            }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), t = o !== s ? 100 * ((n - s) / (o - s)) : 0, u["horizontal" === l.orientation ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[c ? "animate" : "css"](u, a.animate), "min" === r && "horizontal" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                width: t + "%"
            }, a.animate), "max" === r && "horizontal" === this.orientation && this.range[c ? "animate" : "css"]({
                width: 100 - t + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === r && "vertical" === this.orientation && this.range.stop(1, 1)[c ? "animate" : "css"]({
                height: t + "%"
            }, a.animate), "max" === r && "vertical" === this.orientation && this.range[c ? "animate" : "css"]({
                height: 100 - t + "%"
            }, {
                queue: !1,
                duration: a.animate
            }))
        }
    }), e.extend(e.ui.slider, {
        version: "1.8.18"
    })
}(jQuery),
/*
 * jQuery UI Tabs 1.8.18
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */

function (e, i) {
    function n() {
        return ++o
    }
    function s() {
        return ++r
    }
    var o = 0,
        r = 0;
    e.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: !1,
            cookie: null,
            collapsible: !1,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function () {
            this._tabify(!0)
        },
        _setOption: function (e, t) {
            if ("selected" == e) {
                if (this.options.collapsible && t == this.options.selected) return;
                this.select(t)
            } else this.options[e] = t, this._tabify()
        },
        _tabId: function (e) {
            return e.title && e.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + n()
        },
        _sanitizeSelector: function (e) {
            return e.replace(/:/g, "\\:")
        },
        _cookie: function () {
            var t = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + s());
            return e.cookie.apply(null, [t].concat(e.makeArray(arguments)))
        },
        _ui: function (e, t) {
            return {
                tab: e,
                panel: t,
                index: this.anchors.index(e)
            }
        },
        _cleanup: function () {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
                var t = e(this);
                t.html(t.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (t) {
            function n(t, i) {
                t.css("display", ""), !e.support.opacity && i.opacity && t[0].style.removeAttribute("filter")
            }
            var s = this,
                o = this.options,
                r = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0), this.lis = e(" > li:has(a[href])", this.list), this.anchors = this.lis.map(function () {
                return e("a", this)[0]
            }), this.panels = e([]), this.anchors.each(function (t, i) {
                var n, a = e(i).attr("href"),
                    l = a.split("#")[0];
                if (l && (l === location.toString().split("#")[0] || (n = e("base")[0]) && l === n.href) && (a = i.hash, i.href = a), r.test(a)) s.panels = s.panels.add(s.element.find(s._sanitizeSelector(a)));
                else if (a && "#" !== a) {
                    e.data(i, "href.tabs", a), e.data(i, "load.tabs", a.replace(/#.*$/, ""));
                    var c = s._tabId(i);
                    i.href = "#" + c;
                    var u = s.element.find("#" + c);
                    u.length || (u = e(o.panelTemplate).attr("id", c).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(s.panels[t - 1] || s.list), u.data("destroy.tabs", !0)), s.panels = s.panels.add(u)
                } else o.disabled.push(t)
            }), t ? (this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all"), this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.lis.addClass("ui-state-default ui-corner-top"), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"), o.selected === i ? (location.hash && this.anchors.each(function (e, t) {
                return t.hash == location.hash ? (o.selected = e, !1) : void 0
            }), "number" != typeof o.selected && o.cookie && (o.selected = parseInt(s._cookie(), 10)), "number" != typeof o.selected && this.lis.filter(".ui-tabs-selected").length && (o.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"))), o.selected = o.selected || (this.lis.length ? 0 : -1)) : null === o.selected && (o.selected = -1), o.selected = o.selected >= 0 && this.anchors[o.selected] || o.selected < 0 ? o.selected : 0, o.disabled = e.unique(o.disabled.concat(e.map(this.lis.filter(".ui-state-disabled"), function (e) {
                return s.lis.index(e)
            }))).sort(), -1 != e.inArray(o.selected, o.disabled) && o.disabled.splice(e.inArray(o.selected, o.disabled), 1), this.panels.addClass("ui-tabs-hide"), this.lis.removeClass("ui-tabs-selected ui-state-active"), o.selected >= 0 && this.anchors.length && (s.element.find(s._sanitizeSelector(s.anchors[o.selected].hash)).removeClass("ui-tabs-hide"), this.lis.eq(o.selected).addClass("ui-tabs-selected ui-state-active"), s.element.queue("tabs", function () {
                s._trigger("show", null, s._ui(s.anchors[o.selected], s.element.find(s._sanitizeSelector(s.anchors[o.selected].hash))[0]))
            }), this.load(o.selected)), e(window).bind("unload", function () {
                s.lis.add(s.anchors).unbind(".tabs"), s.lis = s.anchors = s.panels = null
            })) : o.selected = this.lis.index(this.lis.filter(".ui-tabs-selected")), this.element[o.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"), o.cookie && this._cookie(o.selected, o.cookie);
            for (var a, l = 0; a = this.lis[l]; l++) e(a)[-1 == e.inArray(l, o.disabled) || e(a).hasClass("ui-tabs-selected") ? "removeClass" : "addClass"]("ui-state-disabled");
            if (o.cache === !1 && this.anchors.removeData("cache.tabs"), this.lis.add(this.anchors).unbind(".tabs"), "mouseover" !== o.event) {
                var c = function (e, t) {
                        t.is(":not(.ui-state-disabled)") && t.addClass("ui-state-" + e)
                    },
                    u = function (e, t) {
                        t.removeClass("ui-state-" + e)
                    };
                this.lis.bind("mouseover.tabs", function () {
                    c("hover", e(this))
                }), this.lis.bind("mouseout.tabs", function () {
                    u("hover", e(this))
                }), this.anchors.bind("focus.tabs", function () {
                    c("focus", e(this).closest("li"))
                }), this.anchors.bind("blur.tabs", function () {
                    u("focus", e(this).closest("li"))
                })
            }
            var h, d;
            o.fx && (e.isArray(o.fx) ? (h = o.fx[0], d = o.fx[1]) : h = d = o.fx);
            var p = d ?
            function (t, i) {
                e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), i.hide().removeClass("ui-tabs-hide").animate(d, d.duration || "normal", function () {
                    n(i, d), s._trigger("show", null, s._ui(t, i[0]))
                })
            } : function (t, i) {
                e(t).closest("li").addClass("ui-tabs-selected ui-state-active"), i.removeClass("ui-tabs-hide"), s._trigger("show", null, s._ui(t, i[0]))
            }, f = h ?
            function (e, t) {
                t.animate(h, h.duration || "normal", function () {
                    s.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), n(t, h), s.element.dequeue("tabs")
                })
            } : function (e, t) {
                s.lis.removeClass("ui-tabs-selected ui-state-active"), t.addClass("ui-tabs-hide"), s.element.dequeue("tabs")
            };
            this.anchors.bind(o.event + ".tabs", function () {
                var t = this,
                    i = e(t).closest("li"),
                    n = s.panels.filter(":not(.ui-tabs-hide)"),
                    r = s.element.find(s._sanitizeSelector(t.hash));
                if (i.hasClass("ui-tabs-selected") && !o.collapsible || i.hasClass("ui-state-disabled") || i.hasClass("ui-state-processing") || s.panels.filter(":animated").length || s._trigger("select", null, s._ui(this, r[0])) === !1) return this.blur(), !1;
                if (o.selected = s.anchors.index(this), s.abort(), o.collapsible) {
                    if (i.hasClass("ui-tabs-selected")) return o.selected = -1, o.cookie && s._cookie(o.selected, o.cookie), s.element.queue("tabs", function () {
                        f(t, n)
                    }).dequeue("tabs"), this.blur(), !1;
                    if (!n.length) return o.cookie && s._cookie(o.selected, o.cookie), s.element.queue("tabs", function () {
                        p(t, r)
                    }), s.load(s.anchors.index(this)), this.blur(), !1
                }
                if (o.cookie && s._cookie(o.selected, o.cookie), !r.length) throw "jQuery UI Tabs: Mismatching fragment identifier.";
                n.length && s.element.queue("tabs", function () {
                    f(t, n)
                }), s.element.queue("tabs", function () {
                    p(t, r)
                }), s.load(s.anchors.index(this)), e.browser.msie && this.blur()
            }), this.anchors.bind("click.tabs", function () {
                return !1
            })
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$=" + e + "]"))), e
        },
        destroy: function () {
            var t = this.options;
            return this.abort(), this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"), this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"), this.anchors.each(function () {
                var t = e.data(this, "href.tabs");
                t && (this.href = t);
                var i = e(this).unbind(".tabs");
                e.each(["href", "load", "cache"], function (e, t) {
                    i.removeData(t + ".tabs")
                })
            }), this.lis.unbind(".tabs").add(this.panels).each(function () {
                e.data(this, "destroy.tabs") ? e(this).remove() : e(this).removeClass(["ui-state-default", "ui-corner-top", "ui-tabs-selected", "ui-state-active", "ui-state-hover", "ui-state-focus", "ui-state-disabled", "ui-tabs-panel", "ui-widget-content", "ui-corner-bottom", "ui-tabs-hide"].join(" "))
            }), t.cookie && this._cookie(null, t.cookie), this
        },
        add: function (t, n, s) {
            s === i && (s = this.anchors.length);
            var o = this,
                r = this.options,
                a = e(r.tabTemplate.replace(/#\{href\}/g, t).replace(/#\{label\}/g, n)),
                l = t.indexOf("#") ? this._tabId(e("a", a)[0]) : t.replace("#", "");
            a.addClass("ui-state-default ui-corner-top").data("destroy.tabs", !0);
            var c = o.element.find("#" + l);
            return c.length || (c = e(r.panelTemplate).attr("id", l).data("destroy.tabs", !0)), c.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"), s >= this.lis.length ? (a.appendTo(this.list), c.appendTo(this.list[0].parentNode)) : (a.insertBefore(this.lis[s]), c.insertBefore(this.panels[s])), r.disabled = e.map(r.disabled, function (e) {
                return e >= s ? ++e : e
            }), this._tabify(), 1 == this.anchors.length && (r.selected = 0, a.addClass("ui-tabs-selected ui-state-active"), c.removeClass("ui-tabs-hide"), this.element.queue("tabs", function () {
                o._trigger("show", null, o._ui(o.anchors[0], o.panels[0]))
            }), this.load(0)), this._trigger("add", null, this._ui(this.anchors[s], this.panels[s])), this
        },
        remove: function (t) {
            t = this._getIndex(t);
            var i = this.options,
                n = this.lis.eq(t).remove(),
                s = this.panels.eq(t).remove();
            return n.hasClass("ui-tabs-selected") && this.anchors.length > 1 && this.select(t + (t + 1 < this.anchors.length ? 1 : -1)), i.disabled = e.map(e.grep(i.disabled, function (e) {
                return e != t
            }), function (e) {
                return e >= t ? --e : e
            }), this._tabify(), this._trigger("remove", null, this._ui(n.find("a")[0], s[0])), this
        },
        enable: function (t) {
            t = this._getIndex(t);
            var i = this.options;
            if (-1 != e.inArray(t, i.disabled)) return this.lis.eq(t).removeClass("ui-state-disabled"), i.disabled = e.grep(i.disabled, function (e) {
                return e != t
            }), this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t])), this
        },
        disable: function (e) {
            e = this._getIndex(e);
            var t = this.options;
            return e != t.selected && (this.lis.eq(e).addClass("ui-state-disabled"), t.disabled.push(e), t.disabled.sort(), this._trigger("disable", null, this._ui(this.anchors[e], this.panels[e]))), this
        },
        select: function (e) {
            if (e = this._getIndex(e), -1 == e) {
                if (!this.options.collapsible || -1 == this.options.selected) return this;
                e = this.options.selected
            }
            return this.anchors.eq(e).trigger(this.options.event + ".tabs"), this
        },
        load: function (t) {
            t = this._getIndex(t);
            var i = this,
                n = this.options,
                s = this.anchors.eq(t)[0],
                o = e.data(s, "load.tabs");
            if (this.abort(), !o || 0 !== this.element.queue("tabs").length && e.data(s, "cache.tabs")) return this.element.dequeue("tabs"), void 0;
            if (this.lis.eq(t).addClass("ui-state-processing"), n.spinner) {
                var r = e("span", s);
                r.data("label.tabs", r.html()).html(n.spinner)
            }
            return this.xhr = e.ajax(e.extend({}, n.ajaxOptions, {
                url: o,
                success: function (o, r) {
                    i.element.find(i._sanitizeSelector(s.hash)).html(o), i._cleanup(), n.cache && e.data(s, "cache.tabs", !0), i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                    try {
                        n.ajaxOptions.success(o, r)
                    } catch (a) {}
                },
                error: function (e, o) {
                    i._cleanup(), i._trigger("load", null, i._ui(i.anchors[t], i.panels[t]));
                    try {
                        n.ajaxOptions.error(e, o, t, s)
                    } catch (r) {}
                }
            })), i.element.dequeue("tabs"), this
        },
        abort: function () {
            return this.element.queue([]), this.panels.stop(!1, !0), this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)), this.xhr && (this.xhr.abort(), delete this.xhr), this._cleanup(), this
        },
        url: function (e, t) {
            return this.anchors.eq(e).removeData("cache.tabs").data("load.tabs", t), this
        },
        length: function () {
            return this.anchors.length
        }
    }), e.extend(e.ui.tabs, {
        version: "1.8.18"
    }), e.extend(e.ui.tabs.prototype, {
        rotation: null,
        rotate: function (e, i) {
            var n = this,
                s = this.options,
                o = n._rotate || (n._rotate = function (t) {
                    clearTimeout(n.rotation), n.rotation = setTimeout(function () {
                        var e = s.selected;
                        n.select(++e < n.anchors.length ? e : 0)
                    }, e), t && t.stopPropagation()
                }),
                r = n._unrotate || (n._unrotate = i ?
                function () {
                    t = s.selected, o()
                } : function (e) {
                    e.clientX && n.rotate(null)
                });
            return e ? (this.element.bind("tabsshow", o), this.anchors.bind(s.event + ".tabs", r), o()) : (clearTimeout(n.rotation), this.element.unbind("tabsshow", o), this.anchors.unbind(s.event + ".tabs", r), delete this._rotate, delete this._unrotate), this
        }
    })
}(jQuery),
/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */

function (e, t, i) {
    function n(e) {
        return e
    }
    function s(e) {
        return decodeURIComponent(e.replace(o, " "))
    }
    var o = /\+/g,
        r = e.cookie = function (o, a, l) {
            if (a !== i) {
                if (l = e.extend({}, r.defaults, l), null === a && (l.expires = -1), "number" == typeof l.expires) {
                    var c = l.expires,
                        u = l.expires = new Date;
                    u.setDate(u.getDate() + c)
                }
                return a = r.json ? JSON.stringify(a) : String(a), t.cookie = [encodeURIComponent(o), "=", r.raw ? a : encodeURIComponent(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var h, d = r.raw ? n : s, p = t.cookie.split("; "), f = 0; h = p[f] && p[f].split("="); f++) if (d(h.shift()) === o) {
                var g = d(h.join("="));
                return r.json ? JSON.parse(g) : g
            }
            return null
        };
    r.defaults = {}, e.removeCookie = function (t, i) {
        return null !== e.cookie(t) ? (e.cookie(t, null, i), !0) : !1
    }
}(jQuery, document), function (e) {
    e.ajaxPrefilter(function (e) {
        return e.iframe ? "iframe" : void 0
    }), e.ajaxTransport("iframe", function (t) {
        function i() {
            e(l).each(function () {
                this.remove()
            }), e(c).each(function () {
                this.disabled = !1
            }), n.attr("action", o || "").attr("target", r || "").attr("enctype", a || ""), s.attr("src", "javascript:false;").remove()
        }
        var n = null,
            s = null,
            o = null,
            r = null,
            a = null,
            l = [],
            c = [],
            u = e(t.files).filter(":file:enabled");
        return t.dataTypes.shift(), u.length ? (u.each(function () {
            null !== n && this.form !== n && jQuery.error("All file fields must belong to the same form"), n = this.form
        }), n = e(n), o = n.attr("action"), r = n.attr("target"), a = n.attr("enctype"), n.find(":input:not(:submit)").each(function () {
            !this.disabled && ("file" != this.type || u.index(this) < 0) && (this.disabled = !0, c.push(this))
        }), "string" == typeof t.data && t.data.length > 0 && jQuery.error("data must not be serialized"), e.each(t.data || {}, function (t, i) {
            e.isPlainObject(i) && (t = i.name, i = i.value), l.push(e("<input type='hidden'>").attr("name", t).attr("value", i).appendTo(n))
        }), l.push(e("<input type='hidden' name='X-Requested-With'>").attr("value", "IFrame").appendTo(n)), accepts = t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", */*; q=0.01" : "") : t.accepts["*"], l.push(e("<input type='hidden' name='X-Http-Accept'>").attr("value", accepts).appendTo(n)), {
            send: function (o, r) {
                s = e("<iframe src='javascript:false;' name='iframe-" + e.now() + "' style='display:none'></iframe>"), s.bind("load", function () {
                    s.unbind("load").bind("load", function () {
                        var e = this.contentWindow ? this.contentWindow.document : this.contentDocument ? this.contentDocument : this.document,
                            t = e.documentElement ? e.documentElement : e.body,
                            n = t.getElementsByTagName("textarea")[0],
                            s = n ? n.getAttribute("data-type") : null,
                            o = n ? parseInt(n.getAttribute("response-code")) : 200,
                            a = "OK",
                            l = {
                                text: s ? n.value : t ? t.innerHTML : null
                            },
                            c = "Content-Type: " + (s || "text/html");
                        r(o, a, l, c), setTimeout(i, 50)
                    }), n.attr("action", t.url).attr("target", s.attr("name")).attr("enctype", "multipart/form-data").get(0).submit()
                }), s.insertAfter(n)
            },
            abort: function () {
                null !== s && (s.unbind("load").attr("src", "javascript:false;"), i())
            }
        }) : void 0
    })
}(jQuery), function (t) {
    var i;
    t.remotipart = i = {
        setup: function (e) {
            e.one("ajax:beforeSend.remotipart", function (n, s, o) {
                return delete o.beforeSend, o.iframe = !0, o.files = t(t.rails.fileInputSelector, e), o.data = e.serializeArray(), o.processData = !1, void 0 === o.dataType && (o.dataType = "script *"), o.data.push({
                    name: "remotipart_submitted",
                    value: !0
                }), t.rails.fire(e, "ajax:remotipartSubmit", [s, o]) && t.rails.ajax(o), i.teardown(e), !1
            }).data("remotipartSubmitted", !0)
        },
        teardown: function (e) {
            e.unbind("ajax:beforeSend.remotipart").removeData("remotipartSubmitted")
        }
    }, t("form").live("ajax:aborted:file", function () {
        var n = t(this);
        return i.setup(n), !t.support.submitBubbles && t().jquery < "1.7" && t.rails.callFormSubmitBindings(n) === !1 ? t.rails.stopEverything(e) : (t.rails.handleRemote(n), !1)
    })
}(jQuery),
/*! ResponsiveSlides.js v1.53
 * http://responsiveslides.com
 * http://viljamis.com
 *
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 */

function (e, t, i) {
    e.fn.responsiveSlides = function (n) {
        var s = e.extend({
            auto: !0,
            speed: 500,
            timeout: 4e3,
            pager: !1,
            nav: !1,
            random: !1,
            pause: !1,
            pauseControls: !0,
            prevText: "Previous",
            nextText: "Next",
            maxwidth: "",
            navContainer: "",
            manualControls: "",
            namespace: "rslides",
            before: function () {},
            after: function () {}
        }, n);
        return this.each(function () {
            i++;
            var o, r, a, l, c, u, h = e(this),
                d = 0,
                p = h.children(),
                f = p.size(),
                g = parseFloat(s.speed),
                m = parseFloat(s.timeout),
                v = parseFloat(s.maxwidth),
                b = s.namespace,
                y = b + i,
                _ = b + "_nav " + y + "_nav",
                w = b + "_here",
                x = y + "_on",
                k = y + "_s",
                C = e("<ul class='" + b + "_tabs " + y + "_tabs' />"),
                D = {
                    "float": "left",
                    position: "relative",
                    opacity: 1,
                    zIndex: 2
                },
                S = {
                    "float": "none",
                    position: "absolute",
                    opacity: 0,
                    zIndex: 1
                },
                T = function () {
                    var e = document.body || document.documentElement,
                        t = e.style,
                        i = "transition";
                    if ("string" == typeof t[i]) return !0;
                    o = ["Moz", "Webkit", "Khtml", "O", "ms"], i = i.charAt(0).toUpperCase() + i.substr(1);
                    var n;
                    for (n = 0; n < o.length; n++) if ("string" == typeof t[o[n] + i]) return !0;
                    return !1
                }(),
                M = function (t) {
                    s.before(), T ? (p.removeClass(x).css(S).eq(t).addClass(x).css(D), d = t, setTimeout(function () {
                        s.after()
                    }, g)) : p.stop().fadeOut(g, function () {
                        e(this).removeClass(x).css(S).css("opacity", 1)
                    }).eq(t).fadeIn(g, function () {
                        e(this).addClass(x).css(D), s.after(), d = t
                    })
                };
            if (s.random && (p.sort(function () {
                return Math.round(Math.random()) - .5
            }), h.empty().append(p)), p.each(function (e) {
                this.id = k + e
            }), h.addClass(b + " " + y), n && n.maxwidth && h.css("max-width", v), p.hide().css(S).eq(0).addClass(x).css(D).show(), T && p.show().css({
                "-webkit-transition": "opacity " + g + "ms ease-in-out",
                "-moz-transition": "opacity " + g + "ms ease-in-out",
                "-o-transition": "opacity " + g + "ms ease-in-out",
                transition: "opacity " + g + "ms ease-in-out"
            }), p.size() > 1) {
                if (g + 100 > m) return;
                if (s.pager && !s.manualControls) {
                    var I = [];
                    p.each(function (e) {
                        var t = e + 1;
                        I += "<li><a href='#' class='" + k + t + "'>" + t + "</a>" + "</li>"
                    }), C.append(I), n.navContainer ? e(s.navContainer).append(C) : h.after(C)
                }
                if (s.manualControls && (C = e(s.manualControls), C.addClass(b + "_tabs " + y + "_tabs")), (s.pager || s.manualControls) && C.find("li").each(function (t) {
                    e(this).addClass(k + (t + 1))
                }), (s.pager || s.manualControls) && (u = C.find("a"), r = function (e) {
                    u.closest("li").removeClass(w).eq(e).addClass(w)
                }), s.auto && (a = function () {
                    c = setInterval(function () {
                        p.stop(!0, !0);
                        var e = f > d + 1 ? d + 1 : 0;
                        (s.pager || s.manualControls) && r(e), M(e)
                    }, m)
                }, a()), l = function () {
                    s.auto && (clearInterval(c), a())
                }, s.pause && h.hover(function () {
                    clearInterval(c)
                }, function () {
                    l()
                }), (s.pager || s.manualControls) && (u.bind("click", function (t) {
                    t.preventDefault(), s.pauseControls || l();
                    var i = u.index(this);
                    d === i || e("." + x).queue("fx").length || (r(i), M(i))
                }).eq(0).closest("li").addClass(w), s.pauseControls && u.hover(function () {
                    clearInterval(c)
                }, function () {
                    l()
                })), s.nav) {
                    var P = "<a href='#' class='" + _ + " prev'>" + s.prevText + "</a>" + "<a href='#' class='" + _ + " next'>" + s.nextText + "</a>";
                    n.navContainer ? e(s.navContainer).append(P) : h.after(P);
                    var N = e("." + y + "_nav"),
                        E = N.filter(".prev");
                    N.bind("click", function (t) {
                        t.preventDefault();
                        var i = e("." + x);
                        if (!i.queue("fx").length) {
                            var n = p.index(i),
                                o = n - 1,
                                a = f > n + 1 ? d + 1 : 0;
                            M(e(this)[0] === E[0] ? o : a), (s.pager || s.manualControls) && r(e(this)[0] === E[0] ? o : a), s.pauseControls || l()
                        }
                    }), s.pauseControls && N.hover(function () {
                        clearInterval(c)
                    }, function () {
                        l()
                    })
                }
            }
            if ("undefined" == typeof document.body.style.maxWidth && n.maxwidth) {
                var A = function () {
                        h.css("width", "100%"), h.width() > v && h.css("width", v)
                    };
                A(), e(t).bind("resize", function () {
                    A()
                })
            }
        })
    }
}(jQuery, this, 0),
/*
jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/

function () {
    var e = [].indexOf ||
    function (e) {
        for (var t = 0, i = this.length; i > t; t++) if (t in this && this[t] === e) return t;
        return -1
    }, t = [].slice;
    !
    function (e, t) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (i) {
            return t(i, e)
        }) : t(e.jQuery, e)
    }(this, function (i, n) {
        var s, o, r, a, l, c, u, h, d, p, f, g, m, v, b, y;
        return s = i(n), h = e.call(n, "ontouchstart") >= 0, a = {
            horizontal: {},
            vertical: {}
        }, l = 1, u = {}, c = "waypoints-context-id", f = "resize.waypoints", g = "scroll.waypoints", m = 1, v = "waypoints-waypoint-ids", b = "waypoint", y = "waypoints", o = function () {
            function e(e) {
                var t = this;
                this.$element = e, this.element = e[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + l++, this.oldScroll = {
                    x: e.scrollLeft(),
                    y: e.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, e.data(c, this.id), u[this.id] = this, e.bind(g, function () {
                    var e;
                    return t.didScroll || h ? void 0 : (t.didScroll = !0, e = function () {
                        return t.doScroll(), t.didScroll = !1
                    }, n.setTimeout(e, i[y].settings.scrollThrottle))
                }), e.bind(f, function () {
                    var e;
                    return t.didResize ? void 0 : (t.didResize = !0, e = function () {
                        return i[y]("refresh"), t.didResize = !1
                    }, n.setTimeout(e, i[y].settings.resizeThrottle))
                })
            }
            return e.prototype.doScroll = function () {
                var e, t = this;
                return e = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !h || e.vertical.oldScroll && e.vertical.newScroll || i[y]("refresh"), i.each(e, function (e, n) {
                    var s, o, r;
                    return r = [], o = n.newScroll > n.oldScroll, s = o ? n.forward : n.backward, i.each(t.waypoints[e], function (e, t) {
                        var i, s;
                        return n.oldScroll < (i = t.offset) && i <= n.newScroll ? r.push(t) : n.newScroll < (s = t.offset) && s <= n.oldScroll ? r.push(t) : void 0
                    }), r.sort(function (e, t) {
                        return e.offset - t.offset
                    }), o || r.reverse(), i.each(r, function (e, t) {
                        return t.options.continuous || e === r.length - 1 ? t.trigger([s]) : void 0
                    })
                }), this.oldScroll = {
                    x: e.horizontal.newScroll,
                    y: e.vertical.newScroll
                }
            }, e.prototype.refresh = function () {
                var e, t, n, s = this;
                return n = i.isWindow(this.element), t = this.$element.offset(), this.doScroll(), e = {
                    horizontal: {
                        contextOffset: n ? 0 : t.left,
                        contextScroll: n ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: n ? 0 : t.top,
                        contextScroll: n ? 0 : this.oldScroll.y,
                        contextDimension: n ? i[y]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, i.each(e, function (e, t) {
                    return i.each(s.waypoints[e], function (e, n) {
                        var s, o, r, a, l;
                        return s = n.options.offset, r = n.offset, o = i.isWindow(n.element) ? 0 : n.$element.offset()[t.offsetProp], i.isFunction(s) ? s = s.apply(n.element) : "string" == typeof s && (s = parseFloat(s), n.options.offset.indexOf("%") > -1 && (s = Math.ceil(t.contextDimension * s / 100))), n.offset = o - t.contextOffset + t.contextScroll - s, n.options.onlyOnScroll && null != r || !n.enabled ? void 0 : null !== r && r < (a = t.oldScroll) && a <= n.offset ? n.trigger([t.backward]) : null !== r && r > (l = t.oldScroll) && l >= n.offset ? n.trigger([t.forward]) : null === r && t.oldScroll >= n.offset ? n.trigger([t.forward]) : void 0
                    })
                })
            }, e.prototype.checkEmpty = function () {
                return i.isEmptyObject(this.waypoints.horizontal) && i.isEmptyObject(this.waypoints.vertical) ? (this.$element.unbind([f, g].join(" ")), delete u[this.id]) : void 0
            }, e
        }(), r = function () {
            function e(e, t, n) {
                var s, o;
                n = i.extend({}, i.fn[b].defaults, n), "bottom-in-view" === n.offset && (n.offset = function () {
                    var e;
                    return e = i[y]("viewportHeight"), i.isWindow(t.element) || (e = t.$element.height()), e - i(this).outerHeight()
                }), this.$element = e, this.element = e[0], this.axis = n.horizontal ? "horizontal" : "vertical", this.callback = n.handler, this.context = t, this.enabled = n.enabled, this.id = "waypoints" + m++, this.offset = null, this.options = n, t.waypoints[this.axis][this.id] = this, a[this.axis][this.id] = this, s = null != (o = e.data(v)) ? o : [], s.push(this.id), e.data(v, s)
            }
            return e.prototype.trigger = function (e) {
                return this.enabled ? (null != this.callback && this.callback.apply(this.element, e), this.options.triggerOnce ? this.destroy() : void 0) : void 0
            }, e.prototype.disable = function () {
                return this.enabled = !1
            }, e.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, e.prototype.destroy = function () {
                return delete a[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, e.getWaypointsByElement = function (e) {
                var t, n;
                return (n = i(e).data(v)) ? (t = i.extend({}, a.horizontal, a.vertical), i.map(n, function (e) {
                    return t[e]
                })) : []
            }, e
        }(), p = {
            init: function (e, t) {
                var n;
                return null == t && (t = {}), null == (n = t.handler) && (t.handler = e), this.each(function () {
                    var e, n, s, a;
                    return e = i(this), s = null != (a = t.context) ? a : i.fn[b].defaults.context, i.isWindow(s) || (s = e.closest(s)), s = i(s), n = u[s.data(c)], n || (n = new o(s)), new r(e, n, t)
                }), i[y]("refresh"), this
            },
            disable: function () {
                return p._invoke(this, "disable")
            },
            enable: function () {
                return p._invoke(this, "enable")
            },
            destroy: function () {
                return p._invoke(this, "destroy")
            },
            prev: function (e, t) {
                return p._traverse.call(this, e, t, function (e, t, i) {
                    return t > 0 ? e.push(i[t - 1]) : void 0
                })
            },
            next: function (e, t) {
                return p._traverse.call(this, e, t, function (e, t, i) {
                    return t < i.length - 1 ? e.push(i[t + 1]) : void 0
                })
            },
            _traverse: function (e, t, s) {
                var o, r;
                return null == e && (e = "vertical"), null == t && (t = n), r = d.aggregate(t), o = [], this.each(function () {
                    var t;
                    return t = i.inArray(this, r[e]), s(o, t, r[e])
                }), this.pushStack(o)
            },
            _invoke: function (e, t) {
                return e.each(function () {
                    var e;
                    return e = r.getWaypointsByElement(this), i.each(e, function (e, i) {
                        return i[t](), !0
                    })
                }), this
            }
        }, i.fn[b] = function () {
            var e, n;
            return n = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], p[n] ? p[n].apply(this, e) : i.isFunction(n) ? p.init.apply(this, arguments) : i.isPlainObject(n) ? p.init.apply(this, [null, n]) : n ? i.error("The " + n + " method does not exist in jQuery Waypoints.") : i.error("jQuery Waypoints needs a callback function or handler option.")
        }, i.fn[b].defaults = {
            context: n,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, d = {
            refresh: function () {
                return i.each(u, function (e, t) {
                    return t.refresh()
                })
            },
            viewportHeight: function () {
                var e;
                return null != (e = n.innerHeight) ? e : s.height()
            },
            aggregate: function (e) {
                var t, n, s;
                return t = a, e && (t = null != (s = u[i(e).data(c)]) ? s.waypoints : void 0), t ? (n = {
                    horizontal: [],
                    vertical: []
                }, i.each(n, function (e, s) {
                    return i.each(t[e], function (e, t) {
                        return s.push(t)
                    }), s.sort(function (e, t) {
                        return e.offset - t.offset
                    }), n[e] = i.map(s, function (e) {
                        return e.element
                    }), n[e] = i.unique(n[e])
                }), n) : []
            },
            above: function (e) {
                return null == e && (e = n), d._filter(e, "vertical", function (e, t) {
                    return t.offset <= e.oldScroll.y
                })
            },
            below: function (e) {
                return null == e && (e = n), d._filter(e, "vertical", function (e, t) {
                    return t.offset > e.oldScroll.y
                })
            },
            left: function (e) {
                return null == e && (e = n), d._filter(e, "horizontal", function (e, t) {
                    return t.offset <= e.oldScroll.x
                })
            },
            right: function (e) {
                return null == e && (e = n), d._filter(e, "horizontal", function (e, t) {
                    return t.offset > e.oldScroll.x
                })
            },
            enable: function () {
                return d._invoke("enable")
            },
            disable: function () {
                return d._invoke("disable")
            },
            destroy: function () {
                return d._invoke("destroy")
            },
            extendFn: function (e, t) {
                return p[e] = t
            },
            _invoke: function (e) {
                var t;
                return t = i.extend({}, a.vertical, a.horizontal), i.each(t, function (t, i) {
                    return i[e](), !0
                })
            },
            _filter: function (e, t, n) {
                var s, o;
                return (s = u[i(e).data(c)]) ? (o = [], i.each(s.waypoints[t], function (e, t) {
                    return n(s, t) ? o.push(t) : void 0
                }), o.sort(function (e, t) {
                    return e.offset - t.offset
                }), i.map(o, function (e) {
                    return e.element
                })) : []
            }
        }, i[y] = function () {
            var e, i;
            return i = arguments[0], e = 2 <= arguments.length ? t.call(arguments, 1) : [], d[i] ? d[i].apply(null, e) : d.aggregate.call(null, i)
        }, i[y].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        }, s.load(function () {
            return i[y]("refresh")
        })
    })
}.call(this);

var EndlessPageColection = {
    pages_loaded: 1,
    salt: null,
    offset: null,
	url: null,
	alias : null,
    check_scroll: function () {
        if (null != EndlessPageColection.offset) if (EndlessPageColection.near_bottom()) {
            var e = {
                salt: EndlessPageColection.salt,
                offset: EndlessPageColection.offset,
				alias: EndlessPageColection.alias
				
                //page: EndlessPageColection.pages_loaded
            };
            $("#live_spinner").show();
            var t = "http://" + window.location.hostname + EndlessPageColection.url;
            var n = this;
			//console.log(e);
            $.ajax({
                url: t,
                type: "GET",
                data: e,
                dataType: "html",
                success: function (e) {
                    $(".portfolio_images").append(e), $("#live_spinner").hide(), n.pages_loaded++, GATracker.pageview(document.location.pathname + "?page=" + n.pages_loaded)
                }
            })
        } else EndlessPageColection.queue_check_scroll()
    },
    queue_check_scroll: function () {
        setTimeout("EndlessPageColection.check_scroll()", 100)
    },
    near_bottom: function () {
        return EndlessPageColection.scroll_distance_from_bottom() < 250
    },
    scroll_distance_from_bottom: function () {
        return EndlessPageColection.page_height() - (EndlessPageColection.get_scroll_height() + EndlessPageColection.get_inner_height())
    },
    page_height: function () {
        return Math.max(document.body.scrollHeight, document.body.offsetHeight)
    },
    get_scroll_height: function () {
        var e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        return e ? e : 0
    },
    get_inner_height: function () {
        var e = self.innerHeight || document.body.clientWidth;
        return e ? e : 0
    }
};

var EndlessPage = {
    pages_loaded: 1,
    salt: null,
    offset: null,
	url: null,
	alias : null,
    check_scroll: function () {
        if (null != EndlessPage.offset) if (EndlessPage.near_bottom()) {
            var e = {
                salt: EndlessPage.salt,
                offset: EndlessPage.offset,
				alias: EndlessPage.alias
				
                //page: EndlessPage.pages_loaded
            };
            $("#live_spinner").show();
            var t = "http://" + window.location.hostname + EndlessPage.url;
            var n = this;
			console.log(e);
            $.ajax({
                url: t,
                type: "GET",
                data: e,
                dataType: "html",
                success: function (e) {
                    $(".endless_listings").append(e), $("#live_spinner").hide(), n.pages_loaded++, GATracker.pageview(document.location.pathname + "?page=" + n.pages_loaded)
                }
            })
        } else EndlessPage.queue_check_scroll()
    },
    queue_check_scroll: function () {
        setTimeout("EndlessPage.check_scroll()", 100)
    },
    near_bottom: function () {
        return EndlessPage.scroll_distance_from_bottom() < 250
    },
    scroll_distance_from_bottom: function () {
        return EndlessPage.page_height() - (EndlessPage.get_scroll_height() + EndlessPage.get_inner_height())
    },
    page_height: function () {
        return Math.max(document.body.scrollHeight, document.body.offsetHeight)
    },
    get_scroll_height: function () {
        var e = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
        return e ? e : 0
    },
    get_inner_height: function () {
        var e = self.innerHeight || document.body.clientWidth;
        return e ? e : 0
    }
},


    SearchBar = {
        click_location_menu: function (e) {
            e.stopPropagation(), $("#search_budget_menu").hide(), $("#search_location_menu").toggle()
        },
        click_budget_menu: function (e) {
            e.stopPropagation(), $("#search_location_menu").hide(), $("#search_budget_menu").toggle()
        },
        hide_all_menus: function () {
            $(".search_menu").hide()
        },
        init: function () {
            $("#search_location_name").on("click", SearchBar.click_location_menu), $("#search_budget_name").on("click", SearchBar.click_budget_menu), $(document).on("click", SearchBar.hide_all_menus)
        }
    };
$(document).ready(function () {
    $("#search_location_menu") && SearchBar.init()
});
var LiveImagePreview = {
    activate_ajaxy_uploads: function () {
        var e = $("#user_listing_attributes_portfolio_images_attributes_0_image"),
            t = $("#upload_progress_bar");
        e.change(function () {
            var i = $(this).closest("form");
            e.hide(), t.show(), $.ajax(i.data("image-preview-action"), {
                files: $(":file", i[0]),
                iframe: !0,
                dataType: "json",
                success: function (e) {
                    $("#preview_card_image").attr("src", e.imagePath)
                },
                error: function (e) {
                    console.log(e)
                },
                complete: function () {
                    t.hide(), e.show()
                }
            })
        })
    }
},
    ListingSignup = {
        show_preview_company_name: function () {
            var e = $("#user_listing_attributes_company_name").val();
            e ? $("#live_company_name").text(e) : $("#live_company_name").text("Your company name")
        },
        show_preview_budget: function () {
            var e = $(".budget_choices input:checked");
            if (e.length) {
                var t = e.closest("label").find(".budget_label").text();
                $("#live_budget").text(t)
            }
        },
        show_preview_location: function () {
            var e, t = "Company location";
            if ($("#user_listing_attributes_location_id").val()) {
                var i = $("#user_listing_attributes_location_id option:selected").text();
                e = "My city is not listed" == i ? $("#user_listing_attributes_other_location").val() ? $("#user_listing_attributes_other_location").val() : t : i
            } else e = t;
            $("#live_company_location").text(e)
        },
        show_preview_other_location: function (e) {
            if ($("#live_company_location").length) {
                var t;
                t = "string" == typeof e ? e : $("#user_listing_attributes_other_location").val(), $("#live_company_location").text(t)
            }
        },
        show_preview_image_description: function () {
            var e = $("#user_listing_attributes_portfolio_images_attributes_0_description").val();
            e ? $("#live_image_description").text(e) : $("#live_image_description").text("Your image description")
        },
        activate_live_preview: function () {
            $("#user_listing_attributes_company_name").keydown(ListingSignup.show_preview_company_name), $("#user_listing_attributes_company_name").keyup(ListingSignup.show_preview_company_name), $("#user_listing_attributes_company_name").on("DOMFocusOut", ListingSignup.show_preview_company_name), $("#user_listing_attributes_other_location").keydown(ListingSignup.show_preview_other_location), $("#user_listing_attributes_other_location").keyup(ListingSignup.show_preview_other_location), $("#user_listing_attributes_other_location").on("DOMFocusOut", ListingSignup.show_preview_other_location), $(".budget_choices input").change(ListingSignup.show_preview_budget), $("#user_listing_attributes_location_id").change(ListingSignup.show_preview_location), $("#user_listing_attributes_portfolio_images_attributes_0_description").change(ListingSignup.show_preview_image_description), $("#user_listing_attributes_portfolio_images_attributes_0_description").keyup(ListingSignup.show_preview_image_description)
        },
        set_fields: function () {
            ListingSignup.show_preview_company_name(), ListingSignup.show_preview_other_location(), ListingSignup.show_preview_budget(), ListingSignup.show_preview_location(), ListingSignup.show_preview_image_description()
        }
    };
ListingSignup.show_spinner = function () {
    $("#submit_button").hide(), $("#submit_spinner").show()
}, $(document).ready(function () {
    if ($("#signup_listing_form").length) {
        ListingSignup.activate_live_preview(), ListingSignup.set_fields(), LiveImagePreview.activate_ajaxy_uploads();
        var e = $("#user_listing_attributes_other_location");
        e.autocomplete({
            source: e.data("autocomplete-source"),
            appendTo: "#other_location_wrapper",
            select: function (e, t) {
                ListingSignup.show_preview_other_location(t.item.value)
            }
        })
    }
}), ListingForm.prototype.location_id_selected = function () {
    var e = this.location_id.find("option:selected").text();
    "My city is not listed" == e ? $("#other_listing_location, #user_listing_attributes_other_location").show() : $("#other_listing_location, #user_listing_attributes_other_location").hide()
}, ListingForm.prototype.in_us_changed = function () {
    var e = $(".us_select input:checked").val();
    "no" == e ? ($("#other_listing_location_country").show(), $("#other_listing_location_state").hide()) : ($("#other_listing_location_state").show(), $("#other_listing_location_country").hide())
}, $(document).ready(function () {
    $(".account.listing .edit_user, .listing_form").each(function () {
        new ListingForm(this);
        var e = $("#listing_other_location, #user_listing_attributes_other_location");
        e.autocomplete({
            source: e.data("autocomplete-source"),
            appendTo: "#other_location_wrapper",
            select: function (e, t) {
                ListingSignup.show_preview_other_location(t.item.value)
            }
        })
    })
}), 
PortfolioImageUpload.prototype.show_description_form = function () {
    this.form.find(".edit_description").toggle(), this.form.find(".description_content").toggle(), this.form.find(".description_input").toggle()
}, function () {
    this.toggle_shortlist_link = function (e, t) {
        var i, n;
        switch (i = $(".favorite_links.listing_" + e + " .add"), n = $(".favorite_links.listing_" + e + " .remove"), t) {
        case "add":
            return i.show(), n.hide();
        case "remove":
            return i.hide(), n.show()
        }
    }
}.call(this);
var GATracker = {
    event: function (e, t, i, n, s) {
        try {
            _gaq.push(["_trackEvent", e, t, i, n, s])
        } catch (o) {
            window.console && console.log(o)
        }
    },
    pageview: function (e) {
        try {
            _gaq.push(["_trackPageview", e])
        } catch (t) {
            window.console && console.log(t)
        }
    }
},
    HeaderLink = {
        set_click_behaviour: function () {
            $("a.clear_filters").click(function () {
                $.each(["location_id", "budget_id", "state_id", "country_id"], function (e, t) {
                    $.removeCookie(t)
                })
            })
        }
    };
$(document).ready(function () {
    HeaderLink.set_click_behaviour()
});