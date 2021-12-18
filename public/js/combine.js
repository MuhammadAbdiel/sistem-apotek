!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e =
              "undefined" != typeof globalThis
                  ? globalThis
                  : e || self).bootstrap = t());
})(this, function () {
    "use strict";
    const e = "transitionend",
        t = (e) => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let i = e.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") &&
                    !i.startsWith("#") &&
                    (i = `#${i.split("#")[1]}`),
                    (t = i && "#" !== i ? i.trim() : null);
            }
            return t;
        },
        i = (e) => {
            const i = t(e);
            return i && document.querySelector(i) ? i : null;
        },
        s = (e) => {
            const i = t(e);
            return i ? document.querySelector(i) : null;
        },
        n = (t) => {
            t.dispatchEvent(new Event(e));
        },
        r = (e) =>
            !(!e || "object" != typeof e) &&
            (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        a = (e) =>
            r(e)
                ? e.jquery
                    ? e[0]
                    : e
                : "string" == typeof e && e.length > 0
                ? document.querySelector(e)
                : null,
        o = (e, t, i) => {
            Object.keys(i).forEach((s) => {
                const n = i[s],
                    a = t[s],
                    o =
                        a && r(a)
                            ? "element"
                            : null == (l = a)
                            ? `${l}`
                            : {}.toString
                                  .call(l)
                                  .match(/\s([a-z]+)/i)[1]
                                  .toLowerCase();
                var l;
                if (!new RegExp(n).test(o))
                    throw new TypeError(
                        `${e.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`
                    );
            });
        },
        l = (e) =>
            !(!r(e) || 0 === e.getClientRects().length) &&
            "visible" === getComputedStyle(e).getPropertyValue("visibility"),
        d = (e) =>
            !e ||
            e.nodeType !== Node.ELEMENT_NODE ||
            !!e.classList.contains("disabled") ||
            (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled")),
        c = (e) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            }
            return e instanceof ShadowRoot
                ? e
                : e.parentNode
                ? c(e.parentNode)
                : null;
        },
        h = () => {},
        u = (e) => {
            e.offsetHeight;
        },
        p = () => {
            const { jQuery: e } = window;
            return e && !document.body.hasAttribute("data-bs-no-jquery")
                ? e
                : null;
        },
        f = [],
        m = () => "rtl" === document.documentElement.dir,
        g = (e) => {
            var t;
            (t = () => {
                const t = p();
                if (t) {
                    const i = e.NAME,
                        s = t.fn[i];
                    (t.fn[i] = e.jQueryInterface),
                        (t.fn[i].Constructor = e),
                        (t.fn[i].noConflict = () => (
                            (t.fn[i] = s), e.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (f.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              f.forEach((e) => e());
                          }),
                      f.push(t))
                    : t();
        },
        v = (e) => {
            "function" == typeof e && e();
        },
        y = (t, i, s = !0) => {
            if (!s) return void v(t);
            const r =
                ((e) => {
                    if (!e) return 0;
                    let { transitionDuration: t, transitionDelay: i } =
                        window.getComputedStyle(e);
                    const s = Number.parseFloat(t),
                        n = Number.parseFloat(i);
                    return s || n
                        ? ((t = t.split(",")[0]),
                          (i = i.split(",")[0]),
                          1e3 * (Number.parseFloat(t) + Number.parseFloat(i)))
                        : 0;
                })(i) + 5;
            let a = !1;
            const o = ({ target: s }) => {
                s === i && ((a = !0), i.removeEventListener(e, o), v(t));
            };
            i.addEventListener(e, o),
                setTimeout(() => {
                    a || n(i);
                }, r);
        },
        b = (e, t, i, s) => {
            let n = e.indexOf(t);
            if (-1 === n) return e[!i && s ? e.length - 1 : 0];
            const r = e.length;
            return (
                (n += i ? 1 : -1),
                s && (n = (n + r) % r),
                e[Math.max(0, Math.min(n, r - 1))]
            );
        },
        w = /[^.]*(?=\..*)\.|.*/,
        x = /\..*/,
        _ = /::\d+$/,
        E = {};
    let T = 1;
    const S = { mouseenter: "mouseover", mouseleave: "mouseout" },
        C = /^(mouseenter|mouseleave)/i,
        M = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function k(e, t) {
        return (t && `${t}::${T++}`) || e.uidEvent || T++;
    }
    function O(e) {
        const t = k(e);
        return (e.uidEvent = t), (E[t] = E[t] || {}), E[t];
    }
    function L(e, t, i = null) {
        const s = Object.keys(e);
        for (let n = 0, r = s.length; n < r; n++) {
            const r = e[s[n]];
            if (r.originalHandler === t && r.delegationSelector === i) return r;
        }
        return null;
    }
    function $(e, t, i) {
        const s = "string" == typeof t,
            n = s ? i : t;
        let r = P(e);
        return M.has(r) || (r = e), [s, n, r];
    }
    function I(e, t, i, s, n) {
        if ("string" != typeof t || !e) return;
        if ((i || ((i = s), (s = null)), C.test(t))) {
            const e = (e) =>
                function (t) {
                    if (
                        !t.relatedTarget ||
                        (t.relatedTarget !== t.delegateTarget &&
                            !t.delegateTarget.contains(t.relatedTarget))
                    )
                        return e.call(this, t);
                };
            s ? (s = e(s)) : (i = e(i));
        }
        const [r, a, o] = $(t, i, s),
            l = O(e),
            d = l[o] || (l[o] = {}),
            c = L(d, a, r ? i : null);
        if (c) return void (c.oneOff = c.oneOff && n);
        const h = k(a, t.replace(w, "")),
            u = r
                ? (function (e, t, i) {
                      return function s(n) {
                          const r = e.querySelectorAll(t);
                          for (
                              let { target: a } = n;
                              a && a !== this;
                              a = a.parentNode
                          )
                              for (let o = r.length; o--; )
                                  if (r[o] === a)
                                      return (
                                          (n.delegateTarget = a),
                                          s.oneOff && z.off(e, n.type, t, i),
                                          i.apply(a, [n])
                                      );
                          return null;
                      };
                  })(e, i, s)
                : (function (e, t) {
                      return function i(s) {
                          return (
                              (s.delegateTarget = e),
                              i.oneOff && z.off(e, s.type, t),
                              t.apply(e, [s])
                          );
                      };
                  })(e, i);
        (u.delegationSelector = r ? i : null),
            (u.originalHandler = a),
            (u.oneOff = n),
            (u.uidEvent = h),
            (d[h] = u),
            e.addEventListener(o, u, r);
    }
    function A(e, t, i, s, n) {
        const r = L(t[i], s, n);
        r && (e.removeEventListener(i, r, Boolean(n)), delete t[i][r.uidEvent]);
    }
    function P(e) {
        return (e = e.replace(x, "")), S[e] || e;
    }
    const z = {
            on(e, t, i, s) {
                I(e, t, i, s, !1);
            },
            one(e, t, i, s) {
                I(e, t, i, s, !0);
            },
            off(e, t, i, s) {
                if ("string" != typeof t || !e) return;
                const [n, r, a] = $(t, i, s),
                    o = a !== t,
                    l = O(e),
                    d = t.startsWith(".");
                if (void 0 !== r) {
                    if (!l || !l[a]) return;
                    return void A(e, l, a, r, n ? i : null);
                }
                d &&
                    Object.keys(l).forEach((i) => {
                        !(function (e, t, i, s) {
                            const n = t[i] || {};
                            Object.keys(n).forEach((r) => {
                                if (r.includes(s)) {
                                    const s = n[r];
                                    A(
                                        e,
                                        t,
                                        i,
                                        s.originalHandler,
                                        s.delegationSelector
                                    );
                                }
                            });
                        })(e, l, i, t.slice(1));
                    });
                const c = l[a] || {};
                Object.keys(c).forEach((i) => {
                    const s = i.replace(_, "");
                    if (!o || t.includes(s)) {
                        const t = c[i];
                        A(e, l, a, t.originalHandler, t.delegationSelector);
                    }
                });
            },
            trigger(e, t, i) {
                if ("string" != typeof t || !e) return null;
                const s = p(),
                    n = P(t),
                    r = t !== n,
                    a = M.has(n);
                let o,
                    l = !0,
                    d = !0,
                    c = !1,
                    h = null;
                return (
                    r &&
                        s &&
                        ((o = s.Event(t, i)),
                        s(e).trigger(o),
                        (l = !o.isPropagationStopped()),
                        (d = !o.isImmediatePropagationStopped()),
                        (c = o.isDefaultPrevented())),
                    a
                        ? ((h = document.createEvent("HTMLEvents")),
                          h.initEvent(n, l, !0))
                        : (h = new CustomEvent(t, {
                              bubbles: l,
                              cancelable: !0,
                          })),
                    void 0 !== i &&
                        Object.keys(i).forEach((e) => {
                            Object.defineProperty(h, e, { get: () => i[e] });
                        }),
                    c && h.preventDefault(),
                    d && e.dispatchEvent(h),
                    h.defaultPrevented && void 0 !== o && o.preventDefault(),
                    h
                );
            },
        },
        D = new Map(),
        N = {
            set(e, t, i) {
                D.has(e) || D.set(e, new Map());
                const s = D.get(e);
                s.has(t) || 0 === s.size
                    ? s.set(t, i)
                    : console.error(
                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                              Array.from(s.keys())[0]
                          }.`
                      );
            },
            get: (e, t) => (D.has(e) && D.get(e).get(t)) || null,
            remove(e, t) {
                if (!D.has(e)) return;
                const i = D.get(e);
                i.delete(t), 0 === i.size && D.delete(e);
            },
        };
    class j {
        constructor(e) {
            (e = a(e)) &&
                ((this._element = e),
                N.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            N.remove(this._element, this.constructor.DATA_KEY),
                z.off(this._element, this.constructor.EVENT_KEY),
                Object.getOwnPropertyNames(this).forEach((e) => {
                    this[e] = null;
                });
        }
        _queueCallback(e, t, i = !0) {
            y(e, t, i);
        }
        static getInstance(e) {
            return N.get(a(e), this.DATA_KEY);
        }
        static getOrCreateInstance(e, t = {}) {
            return (
                this.getInstance(e) ||
                new this(e, "object" == typeof t ? t : null)
            );
        }
        static get VERSION() {
            return "5.1.2";
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
    }
    const H = (e, t = "hide") => {
        const i = `click.dismiss${e.EVENT_KEY}`,
            n = e.NAME;
        z.on(document, i, `[data-bs-dismiss="${n}"]`, function (i) {
            if (
                (["A", "AREA"].includes(this.tagName) && i.preventDefault(),
                d(this))
            )
                return;
            const r = s(this) || this.closest(`.${n}`);
            e.getOrCreateInstance(r)[t]();
        });
    };
    class W extends j {
        static get NAME() {
            return "alert";
        }
        close() {
            if (z.trigger(this._element, "close.bs.alert").defaultPrevented)
                return;
            this._element.classList.remove("show");
            const e = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, e);
        }
        _destroyElement() {
            this._element.remove(),
                z.trigger(this._element, "closed.bs.alert"),
                this.dispose();
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = W.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (
                        void 0 === t[e] ||
                        e.startsWith("_") ||
                        "constructor" === e
                    )
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this);
                }
            });
        }
    }
    H(W, "close"), g(W);
    const B = '[data-bs-toggle="button"]';
    class q extends j {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = q.getOrCreateInstance(this);
                "toggle" === e && t[e]();
            });
        }
    }
    function Y(e) {
        return (
            "true" === e ||
            ("false" !== e &&
                (e === Number(e).toString()
                    ? Number(e)
                    : "" === e || "null" === e
                    ? null
                    : e))
        );
    }
    function R(e) {
        return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
    }
    z.on(document, "click.bs.button.data-api", B, (e) => {
        e.preventDefault();
        const t = e.target.closest(B);
        q.getOrCreateInstance(t).toggle();
    }),
        g(q);
    const X = {
            setDataAttribute(e, t, i) {
                e.setAttribute(`data-bs-${R(t)}`, i);
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${R(t)}`);
            },
            getDataAttributes(e) {
                if (!e) return {};
                const t = {};
                return (
                    Object.keys(e.dataset)
                        .filter((e) => e.startsWith("bs"))
                        .forEach((i) => {
                            let s = i.replace(/^bs/, "");
                            (s =
                                s.charAt(0).toLowerCase() +
                                s.slice(1, s.length)),
                                (t[s] = Y(e.dataset[i]));
                        }),
                    t
                );
            },
            getDataAttribute: (e, t) => Y(e.getAttribute(`data-bs-${R(t)}`)),
            offset(e) {
                const t = e.getBoundingClientRect();
                return {
                    top: t.top + window.pageYOffset,
                    left: t.left + window.pageXOffset,
                };
            },
            position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
        },
        F = {
            find: (e, t = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) =>
                Element.prototype.querySelector.call(t, e),
            children: (e, t) =>
                [].concat(...e.children).filter((e) => e.matches(t)),
            parents(e, t) {
                const i = [];
                let s = e.parentNode;
                for (
                    ;
                    s && s.nodeType === Node.ELEMENT_NODE && 3 !== s.nodeType;

                )
                    s.matches(t) && i.push(s), (s = s.parentNode);
                return i;
            },
            prev(e, t) {
                let i = e.previousElementSibling;
                for (; i; ) {
                    if (i.matches(t)) return [i];
                    i = i.previousElementSibling;
                }
                return [];
            },
            next(e, t) {
                let i = e.nextElementSibling;
                for (; i; ) {
                    if (i.matches(t)) return [i];
                    i = i.nextElementSibling;
                }
                return [];
            },
            focusableChildren(e) {
                const t = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((e) => `${e}:not([tabindex^="-"])`)
                    .join(", ");
                return this.find(t, e).filter((e) => !d(e) && l(e));
            },
        },
        V = "carousel",
        G = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0,
        },
        U = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean",
        },
        K = "next",
        Q = "prev",
        Z = "left",
        J = "right",
        ee = { ArrowLeft: J, ArrowRight: Z },
        te = "slid.bs.carousel",
        ie = "active",
        se = ".active.carousel-item";
    class ne extends j {
        constructor(e, t) {
            super(e),
                (this._items = null),
                (this._interval = null),
                (this._activeElement = null),
                (this._isPaused = !1),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this.touchStartX = 0),
                (this.touchDeltaX = 0),
                (this._config = this._getConfig(t)),
                (this._indicatorsElement = F.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                (this._touchSupported =
                    "ontouchstart" in document.documentElement ||
                    navigator.maxTouchPoints > 0),
                (this._pointerEvent = Boolean(window.PointerEvent)),
                this._addEventListeners();
        }
        static get Default() {
            return G;
        }
        static get NAME() {
            return V;
        }
        next() {
            this._slide(K);
        }
        nextWhenVisible() {
            !document.hidden && l(this._element) && this.next();
        }
        prev() {
            this._slide(Q);
        }
        pause(e) {
            e || (this._isPaused = !0),
                F.findOne(
                    ".carousel-item-next, .carousel-item-prev",
                    this._element
                ) && (n(this._element), this.cycle(!0)),
                clearInterval(this._interval),
                (this._interval = null);
        }
        cycle(e) {
            e || (this._isPaused = !1),
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null)),
                this._config &&
                    this._config.interval &&
                    !this._isPaused &&
                    (this._updateInterval(),
                    (this._interval = setInterval(
                        (document.visibilityState
                            ? this.nextWhenVisible
                            : this.next
                        ).bind(this),
                        this._config.interval
                    )));
        }
        to(e) {
            this._activeElement = F.findOne(se, this._element);
            const t = this._getItemIndex(this._activeElement);
            if (e > this._items.length - 1 || e < 0) return;
            if (this._isSliding)
                return void z.one(this._element, te, () => this.to(e));
            if (t === e) return this.pause(), void this.cycle();
            const i = e > t ? K : Q;
            this._slide(i, this._items[e]);
        }
        _getConfig(e) {
            return (
                (e = {
                    ...G,
                    ...X.getDataAttributes(this._element),
                    ...("object" == typeof e ? e : {}),
                }),
                o(V, e, U),
                e
            );
        }
        _handleSwipe() {
            const e = Math.abs(this.touchDeltaX);
            if (e <= 40) return;
            const t = e / this.touchDeltaX;
            (this.touchDeltaX = 0), t && this._slide(t > 0 ? J : Z);
        }
        _addEventListeners() {
            this._config.keyboard &&
                z.on(this._element, "keydown.bs.carousel", (e) =>
                    this._keydown(e)
                ),
                "hover" === this._config.pause &&
                    (z.on(this._element, "mouseenter.bs.carousel", (e) =>
                        this.pause(e)
                    ),
                    z.on(this._element, "mouseleave.bs.carousel", (e) =>
                        this.cycle(e)
                    )),
                this._config.touch &&
                    this._touchSupported &&
                    this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            const e = (e) =>
                    this._pointerEvent &&
                    ("pen" === e.pointerType || "touch" === e.pointerType),
                t = (t) => {
                    e(t)
                        ? (this.touchStartX = t.clientX)
                        : this._pointerEvent ||
                          (this.touchStartX = t.touches[0].clientX);
                },
                i = (e) => {
                    this.touchDeltaX =
                        e.touches && e.touches.length > 1
                            ? 0
                            : e.touches[0].clientX - this.touchStartX;
                },
                s = (t) => {
                    e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
                        this._handleSwipe(),
                        "hover" === this._config.pause &&
                            (this.pause(),
                            this.touchTimeout &&
                                clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                (e) => this.cycle(e),
                                500 + this._config.interval
                            )));
                };
            F.find(".carousel-item img", this._element).forEach((e) => {
                z.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
            }),
                this._pointerEvent
                    ? (z.on(this._element, "pointerdown.bs.carousel", (e) =>
                          t(e)
                      ),
                      z.on(this._element, "pointerup.bs.carousel", (e) => s(e)),
                      this._element.classList.add("pointer-event"))
                    : (z.on(this._element, "touchstart.bs.carousel", (e) =>
                          t(e)
                      ),
                      z.on(this._element, "touchmove.bs.carousel", (e) => i(e)),
                      z.on(this._element, "touchend.bs.carousel", (e) => s(e)));
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            const t = ee[e.key];
            t && (e.preventDefault(), this._slide(t));
        }
        _getItemIndex(e) {
            return (
                (this._items =
                    e && e.parentNode
                        ? F.find(".carousel-item", e.parentNode)
                        : []),
                this._items.indexOf(e)
            );
        }
        _getItemByOrder(e, t) {
            const i = e === K;
            return b(this._items, t, i, this._config.wrap);
        }
        _triggerSlideEvent(e, t) {
            const i = this._getItemIndex(e),
                s = this._getItemIndex(F.findOne(se, this._element));
            return z.trigger(this._element, "slide.bs.carousel", {
                relatedTarget: e,
                direction: t,
                from: s,
                to: i,
            });
        }
        _setActiveIndicatorElement(e) {
            if (this._indicatorsElement) {
                const t = F.findOne(".active", this._indicatorsElement);
                t.classList.remove(ie), t.removeAttribute("aria-current");
                const i = F.find("[data-bs-target]", this._indicatorsElement);
                for (let t = 0; t < i.length; t++)
                    if (
                        Number.parseInt(
                            i[t].getAttribute("data-bs-slide-to"),
                            10
                        ) === this._getItemIndex(e)
                    ) {
                        i[t].classList.add(ie),
                            i[t].setAttribute("aria-current", "true");
                        break;
                    }
            }
        }
        _updateInterval() {
            const e = this._activeElement || F.findOne(se, this._element);
            if (!e) return;
            const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            t
                ? ((this._config.defaultInterval =
                      this._config.defaultInterval || this._config.interval),
                  (this._config.interval = t))
                : (this._config.interval =
                      this._config.defaultInterval || this._config.interval);
        }
        _slide(e, t) {
            const i = this._directionToOrder(e),
                s = F.findOne(se, this._element),
                n = this._getItemIndex(s),
                r = t || this._getItemByOrder(i, s),
                a = this._getItemIndex(r),
                o = Boolean(this._interval),
                l = i === K,
                d = l ? "carousel-item-start" : "carousel-item-end",
                c = l ? "carousel-item-next" : "carousel-item-prev",
                h = this._orderToDirection(i);
            if (r && r.classList.contains(ie))
                return void (this._isSliding = !1);
            if (this._isSliding) return;
            if (this._triggerSlideEvent(r, h).defaultPrevented) return;
            if (!s || !r) return;
            (this._isSliding = !0),
                o && this.pause(),
                this._setActiveIndicatorElement(r),
                (this._activeElement = r);
            const p = () => {
                z.trigger(this._element, te, {
                    relatedTarget: r,
                    direction: h,
                    from: n,
                    to: a,
                });
            };
            if (this._element.classList.contains("slide")) {
                r.classList.add(c),
                    u(r),
                    s.classList.add(d),
                    r.classList.add(d);
                const e = () => {
                    r.classList.remove(d, c),
                        r.classList.add(ie),
                        s.classList.remove(ie, c, d),
                        (this._isSliding = !1),
                        setTimeout(p, 0);
                };
                this._queueCallback(e, s, !0);
            } else s.classList.remove(ie), r.classList.add(ie), (this._isSliding = !1), p();
            o && this.cycle();
        }
        _directionToOrder(e) {
            return [J, Z].includes(e)
                ? m()
                    ? e === Z
                        ? Q
                        : K
                    : e === Z
                    ? K
                    : Q
                : e;
        }
        _orderToDirection(e) {
            return [K, Q].includes(e)
                ? m()
                    ? e === Q
                        ? Z
                        : J
                    : e === Q
                    ? J
                    : Z
                : e;
        }
        static carouselInterface(e, t) {
            const i = ne.getOrCreateInstance(e, t);
            let { _config: s } = i;
            "object" == typeof t && (s = { ...s, ...t });
            const n = "string" == typeof t ? t : s.slide;
            if ("number" == typeof t) i.to(t);
            else if ("string" == typeof n) {
                if (void 0 === i[n])
                    throw new TypeError(`No method named "${n}"`);
                i[n]();
            } else s.interval && s.ride && (i.pause(), i.cycle());
        }
        static jQueryInterface(e) {
            return this.each(function () {
                ne.carouselInterface(this, e);
            });
        }
        static dataApiClickHandler(e) {
            const t = s(this);
            if (!t || !t.classList.contains("carousel")) return;
            const i = {
                    ...X.getDataAttributes(t),
                    ...X.getDataAttributes(this),
                },
                n = this.getAttribute("data-bs-slide-to");
            n && (i.interval = !1),
                ne.carouselInterface(t, i),
                n && ne.getInstance(t).to(n),
                e.preventDefault();
        }
    }
    z.on(
        document,
        "click.bs.carousel.data-api",
        "[data-bs-slide], [data-bs-slide-to]",
        ne.dataApiClickHandler
    ),
        z.on(window, "load.bs.carousel.data-api", () => {
            const e = F.find('[data-bs-ride="carousel"]');
            for (let t = 0, i = e.length; t < i; t++)
                ne.carouselInterface(e[t], ne.getInstance(e[t]));
        }),
        g(ne);
    const re = "collapse",
        ae = { toggle: !0, parent: null },
        oe = { toggle: "boolean", parent: "(null|element)" },
        le = "show",
        de = "collapse",
        ce = "collapsing",
        he = "collapsed",
        ue = ":scope .collapse .collapse",
        pe = '[data-bs-toggle="collapse"]';
    class fe extends j {
        constructor(e, t) {
            super(e),
                (this._isTransitioning = !1),
                (this._config = this._getConfig(t)),
                (this._triggerArray = []);
            const s = F.find(pe);
            for (let e = 0, t = s.length; e < t; e++) {
                const t = s[e],
                    n = i(t),
                    r = F.find(n).filter((e) => e === this._element);
                null !== n &&
                    r.length &&
                    ((this._selector = n), this._triggerArray.push(t));
            }
            this._initializeChildren(),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._triggerArray,
                        this._isShown()
                    ),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return ae;
        }
        static get NAME() {
            return re;
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e,
                t = [];
            if (this._config.parent) {
                const e = F.find(ue, this._config.parent);
                t = F.find(
                    ".collapse.show, .collapse.collapsing",
                    this._config.parent
                ).filter((t) => !e.includes(t));
            }
            const i = F.findOne(this._selector);
            if (t.length) {
                const s = t.find((e) => i !== e);
                if (
                    ((e = s ? fe.getInstance(s) : null),
                    e && e._isTransitioning)
                )
                    return;
            }
            if (z.trigger(this._element, "show.bs.collapse").defaultPrevented)
                return;
            t.forEach((t) => {
                i !== t && fe.getOrCreateInstance(t, { toggle: !1 }).hide(),
                    e || N.set(t, "bs.collapse", null);
            });
            const s = this._getDimension();
            this._element.classList.remove(de),
                this._element.classList.add(ce),
                (this._element.style[s] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const n = `scroll${s[0].toUpperCase() + s.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(ce),
                        this._element.classList.add(de, le),
                        (this._element.style[s] = ""),
                        z.trigger(this._element, "shown.bs.collapse");
                },
                this._element,
                !0
            ),
                (this._element.style[s] = `${this._element[n]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (z.trigger(this._element, "hide.bs.collapse").defaultPrevented)
                return;
            const e = this._getDimension();
            (this._element.style[e] = `${
                this._element.getBoundingClientRect()[e]
            }px`),
                u(this._element),
                this._element.classList.add(ce),
                this._element.classList.remove(de, le);
            const t = this._triggerArray.length;
            for (let e = 0; e < t; e++) {
                const t = this._triggerArray[e],
                    i = s(t);
                i &&
                    !this._isShown(i) &&
                    this._addAriaAndCollapsedClass([t], !1);
            }
            (this._isTransitioning = !0),
                (this._element.style[e] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove(ce),
                            this._element.classList.add(de),
                            z.trigger(this._element, "hidden.bs.collapse");
                    },
                    this._element,
                    !0
                );
        }
        _isShown(e = this._element) {
            return e.classList.contains(le);
        }
        _getConfig(e) {
            return (
                ((e = {
                    ...ae,
                    ...X.getDataAttributes(this._element),
                    ...e,
                }).toggle = Boolean(e.toggle)),
                (e.parent = a(e.parent)),
                o(re, e, oe),
                e
            );
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const e = F.find(ue, this._config.parent);
            F.find(pe, this._config.parent)
                .filter((t) => !e.includes(t))
                .forEach((e) => {
                    const t = s(e);
                    t && this._addAriaAndCollapsedClass([e], this._isShown(t));
                });
        }
        _addAriaAndCollapsedClass(e, t) {
            e.length &&
                e.forEach((e) => {
                    t ? e.classList.remove(he) : e.classList.add(he),
                        e.setAttribute("aria-expanded", t);
                });
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = {};
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                const i = fe.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === i[e])
                        throw new TypeError(`No method named "${e}"`);
                    i[e]();
                }
            });
        }
    }
    z.on(document, "click.bs.collapse.data-api", pe, function (e) {
        ("A" === e.target.tagName ||
            (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
            e.preventDefault();
        const t = i(this);
        F.find(t).forEach((e) => {
            fe.getOrCreateInstance(e, { toggle: !1 }).toggle();
        });
    }),
        g(fe);
    var me = "top",
        ge = "bottom",
        ve = "right",
        ye = "left",
        be = "auto",
        we = [me, ge, ve, ye],
        xe = "start",
        _e = "end",
        Ee = "clippingParents",
        Te = "viewport",
        Se = "popper",
        Ce = "reference",
        Me = we.reduce(function (e, t) {
            return e.concat([t + "-" + xe, t + "-" + _e]);
        }, []),
        ke = [].concat(we, [be]).reduce(function (e, t) {
            return e.concat([t, t + "-" + xe, t + "-" + _e]);
        }, []),
        Oe = "beforeRead",
        Le = "read",
        $e = "afterRead",
        Ie = "beforeMain",
        Ae = "main",
        Pe = "afterMain",
        ze = "beforeWrite",
        De = "write",
        Ne = "afterWrite",
        je = [Oe, Le, $e, Ie, Ae, Pe, ze, De, Ne];
    function He(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function We(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
        }
        return e;
    }
    function Be(e) {
        return e instanceof We(e).Element || e instanceof Element;
    }
    function qe(e) {
        return e instanceof We(e).HTMLElement || e instanceof HTMLElement;
    }
    function Ye(e) {
        return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof We(e).ShadowRoot || e instanceof ShadowRoot)
        );
    }
    const Re = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
                var i = t.styles[e] || {},
                    s = t.attributes[e] || {},
                    n = t.elements[e];
                qe(n) &&
                    He(n) &&
                    (Object.assign(n.style, i),
                    Object.keys(s).forEach(function (e) {
                        var t = s[e];
                        !1 === t
                            ? n.removeAttribute(e)
                            : n.setAttribute(e, !0 === t ? "" : t);
                    }));
            });
        },
        effect: function (e) {
            var t = e.state,
                i = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(t.elements.popper.style, i.popper),
                (t.styles = i),
                t.elements.arrow &&
                    Object.assign(t.elements.arrow.style, i.arrow),
                function () {
                    Object.keys(t.elements).forEach(function (e) {
                        var s = t.elements[e],
                            n = t.attributes[e] || {},
                            r = Object.keys(
                                t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]
                            ).reduce(function (e, t) {
                                return (e[t] = ""), e;
                            }, {});
                        qe(s) &&
                            He(s) &&
                            (Object.assign(s.style, r),
                            Object.keys(n).forEach(function (e) {
                                s.removeAttribute(e);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function Xe(e) {
        return e.split("-")[0];
    }
    function Fe(e, t) {
        var i = e.getBoundingClientRect();
        return {
            width: i.width / 1,
            height: i.height / 1,
            top: i.top / 1,
            right: i.right / 1,
            bottom: i.bottom / 1,
            left: i.left / 1,
            x: i.left / 1,
            y: i.top / 1,
        };
    }
    function Ve(e) {
        var t = Fe(e),
            i = e.offsetWidth,
            s = e.offsetHeight;
        return (
            Math.abs(t.width - i) <= 1 && (i = t.width),
            Math.abs(t.height - s) <= 1 && (s = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: i, height: s }
        );
    }
    function Ge(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && Ye(i)) {
            var s = t;
            do {
                if (s && e.isSameNode(s)) return !0;
                s = s.parentNode || s.host;
            } while (s);
        }
        return !1;
    }
    function Ue(e) {
        return We(e).getComputedStyle(e);
    }
    function Ke(e) {
        return ["table", "td", "th"].indexOf(He(e)) >= 0;
    }
    function Qe(e) {
        return (
            (Be(e) ? e.ownerDocument : e.document) || window.document
        ).documentElement;
    }
    function Ze(e) {
        return "html" === He(e)
            ? e
            : e.assignedSlot ||
                  e.parentNode ||
                  (Ye(e) ? e.host : null) ||
                  Qe(e);
    }
    function Je(e) {
        return qe(e) && "fixed" !== Ue(e).position ? e.offsetParent : null;
    }
    function et(e) {
        for (
            var t = We(e), i = Je(e);
            i && Ke(i) && "static" === Ue(i).position;

        )
            i = Je(i);
        return i &&
            ("html" === He(i) ||
                ("body" === He(i) && "static" === Ue(i).position))
            ? t
            : i ||
                  (function (e) {
                      var t =
                          -1 !==
                          navigator.userAgent.toLowerCase().indexOf("firefox");
                      if (
                          -1 !== navigator.userAgent.indexOf("Trident") &&
                          qe(e) &&
                          "fixed" === Ue(e).position
                      )
                          return null;
                      for (
                          var i = Ze(e);
                          qe(i) && ["html", "body"].indexOf(He(i)) < 0;

                      ) {
                          var s = Ue(i);
                          if (
                              "none" !== s.transform ||
                              "none" !== s.perspective ||
                              "paint" === s.contain ||
                              -1 !==
                                  ["transform", "perspective"].indexOf(
                                      s.willChange
                                  ) ||
                              (t && "filter" === s.willChange) ||
                              (t && s.filter && "none" !== s.filter)
                          )
                              return i;
                          i = i.parentNode;
                      }
                      return null;
                  })(e) ||
                  t;
    }
    function tt(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    var it = Math.max,
        st = Math.min,
        nt = Math.round;
    function rt(e, t, i) {
        return it(e, st(t, i));
    }
    function at(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function ot(e, t) {
        return t.reduce(function (t, i) {
            return (t[i] = e), t;
        }, {});
    }
    const lt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
            var t,
                i = e.state,
                s = e.name,
                n = e.options,
                r = i.elements.arrow,
                a = i.modifiersData.popperOffsets,
                o = Xe(i.placement),
                l = tt(o),
                d = [ye, ve].indexOf(o) >= 0 ? "height" : "width";
            if (r && a) {
                var c = (function (e, t) {
                        return at(
                            "number" !=
                                typeof (e =
                                    "function" == typeof e
                                        ? e(
                                              Object.assign({}, t.rects, {
                                                  placement: t.placement,
                                              })
                                          )
                                        : e)
                                ? e
                                : ot(e, we)
                        );
                    })(n.padding, i),
                    h = Ve(r),
                    u = "y" === l ? me : ye,
                    p = "y" === l ? ge : ve,
                    f =
                        i.rects.reference[d] +
                        i.rects.reference[l] -
                        a[l] -
                        i.rects.popper[d],
                    m = a[l] - i.rects.reference[l],
                    g = et(r),
                    v = g
                        ? "y" === l
                            ? g.clientHeight || 0
                            : g.clientWidth || 0
                        : 0,
                    y = f / 2 - m / 2,
                    b = c[u],
                    w = v - h[d] - c[p],
                    x = v / 2 - h[d] / 2 + y,
                    _ = rt(b, x, w),
                    E = l;
                i.modifiersData[s] =
                    (((t = {})[E] = _), (t.centerOffset = _ - x), t);
            }
        },
        effect: function (e) {
            var t = e.state,
                i = e.options.element,
                s = void 0 === i ? "[data-popper-arrow]" : i;
            null != s &&
                ("string" != typeof s ||
                    (s = t.elements.popper.querySelector(s))) &&
                Ge(t.elements.popper, s) &&
                (t.elements.arrow = s);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function dt(e) {
        return e.split("-")[1];
    }
    var ct = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function ht(e) {
        var t,
            i = e.popper,
            s = e.popperRect,
            n = e.placement,
            r = e.variation,
            a = e.offsets,
            o = e.position,
            l = e.gpuAcceleration,
            d = e.adaptive,
            c = e.roundOffsets,
            h =
                !0 === c
                    ? (function (e) {
                          var t = e.x,
                              i = e.y,
                              s = window.devicePixelRatio || 1;
                          return {
                              x: nt(nt(t * s) / s) || 0,
                              y: nt(nt(i * s) / s) || 0,
                          };
                      })(a)
                    : "function" == typeof c
                    ? c(a)
                    : a,
            u = h.x,
            p = void 0 === u ? 0 : u,
            f = h.y,
            m = void 0 === f ? 0 : f,
            g = a.hasOwnProperty("x"),
            v = a.hasOwnProperty("y"),
            y = ye,
            b = me,
            w = window;
        if (d) {
            var x = et(i),
                _ = "clientHeight",
                E = "clientWidth";
            x === We(i) &&
                "static" !== Ue((x = Qe(i))).position &&
                "absolute" === o &&
                ((_ = "scrollHeight"), (E = "scrollWidth")),
                (x = x),
                (n !== me && ((n !== ye && n !== ve) || r !== _e)) ||
                    ((b = ge), (m -= x[_] - s.height), (m *= l ? 1 : -1)),
                (n !== ye && ((n !== me && n !== ge) || r !== _e)) ||
                    ((y = ve), (p -= x[E] - s.width), (p *= l ? 1 : -1));
        }
        var T,
            S = Object.assign({ position: o }, d && ct);
        return l
            ? Object.assign(
                  {},
                  S,
                  (((T = {})[b] = v ? "0" : ""),
                  (T[y] = g ? "0" : ""),
                  (T.transform =
                      (w.devicePixelRatio || 1) <= 1
                          ? "translate(" + p + "px, " + m + "px)"
                          : "translate3d(" + p + "px, " + m + "px, 0)"),
                  T)
              )
            : Object.assign(
                  {},
                  S,
                  (((t = {})[b] = v ? m + "px" : ""),
                  (t[y] = g ? p + "px" : ""),
                  (t.transform = ""),
                  t)
              );
    }
    const ut = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function (e) {
            var t = e.state,
                i = e.options,
                s = i.gpuAcceleration,
                n = void 0 === s || s,
                r = i.adaptive,
                a = void 0 === r || r,
                o = i.roundOffsets,
                l = void 0 === o || o,
                d = {
                    placement: Xe(t.placement),
                    variation: dt(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: n,
                };
            null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                    {},
                    t.styles.popper,
                    ht(
                        Object.assign({}, d, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: a,
                            roundOffsets: l,
                        })
                    )
                )),
                null != t.modifiersData.arrow &&
                    (t.styles.arrow = Object.assign(
                        {},
                        t.styles.arrow,
                        ht(
                            Object.assign({}, d, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l,
                            })
                        )
                    )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement,
                }));
        },
        data: {},
    };
    var pt = { passive: !0 };
    const ft = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function () {},
        effect: function (e) {
            var t = e.state,
                i = e.instance,
                s = e.options,
                n = s.scroll,
                r = void 0 === n || n,
                a = s.resize,
                o = void 0 === a || a,
                l = We(t.elements.popper),
                d = [].concat(
                    t.scrollParents.reference,
                    t.scrollParents.popper
                );
            return (
                r &&
                    d.forEach(function (e) {
                        e.addEventListener("scroll", i.update, pt);
                    }),
                o && l.addEventListener("resize", i.update, pt),
                function () {
                    r &&
                        d.forEach(function (e) {
                            e.removeEventListener("scroll", i.update, pt);
                        }),
                        o && l.removeEventListener("resize", i.update, pt);
                }
            );
        },
        data: {},
    };
    var mt = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function gt(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
            return mt[e];
        });
    }
    var vt = { start: "end", end: "start" };
    function yt(e) {
        return e.replace(/start|end/g, function (e) {
            return vt[e];
        });
    }
    function bt(e) {
        var t = We(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function wt(e) {
        return Fe(Qe(e)).left + bt(e).scrollLeft;
    }
    function xt(e) {
        var t = Ue(e),
            i = t.overflow,
            s = t.overflowX,
            n = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + n + s);
    }
    function _t(e) {
        return ["html", "body", "#document"].indexOf(He(e)) >= 0
            ? e.ownerDocument.body
            : qe(e) && xt(e)
            ? e
            : _t(Ze(e));
    }
    function Et(e, t) {
        var i;
        void 0 === t && (t = []);
        var s = _t(e),
            n = s === (null == (i = e.ownerDocument) ? void 0 : i.body),
            r = We(s),
            a = n ? [r].concat(r.visualViewport || [], xt(s) ? s : []) : s,
            o = t.concat(a);
        return n ? o : o.concat(Et(Ze(a)));
    }
    function Tt(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
        });
    }
    function St(e, t) {
        return t === Te
            ? Tt(
                  (function (e) {
                      var t = We(e),
                          i = Qe(e),
                          s = t.visualViewport,
                          n = i.clientWidth,
                          r = i.clientHeight,
                          a = 0,
                          o = 0;
                      return (
                          s &&
                              ((n = s.width),
                              (r = s.height),
                              /^((?!chrome|android).)*safari/i.test(
                                  navigator.userAgent
                              ) || ((a = s.offsetLeft), (o = s.offsetTop))),
                          { width: n, height: r, x: a + wt(e), y: o }
                      );
                  })(e)
              )
            : qe(t)
            ? (function (e) {
                  var t = Fe(e);
                  return (
                      (t.top = t.top + e.clientTop),
                      (t.left = t.left + e.clientLeft),
                      (t.bottom = t.top + e.clientHeight),
                      (t.right = t.left + e.clientWidth),
                      (t.width = e.clientWidth),
                      (t.height = e.clientHeight),
                      (t.x = t.left),
                      (t.y = t.top),
                      t
                  );
              })(t)
            : Tt(
                  (function (e) {
                      var t,
                          i = Qe(e),
                          s = bt(e),
                          n = null == (t = e.ownerDocument) ? void 0 : t.body,
                          r = it(
                              i.scrollWidth,
                              i.clientWidth,
                              n ? n.scrollWidth : 0,
                              n ? n.clientWidth : 0
                          ),
                          a = it(
                              i.scrollHeight,
                              i.clientHeight,
                              n ? n.scrollHeight : 0,
                              n ? n.clientHeight : 0
                          ),
                          o = -s.scrollLeft + wt(e),
                          l = -s.scrollTop;
                      return (
                          "rtl" === Ue(n || i).direction &&
                              (o +=
                                  it(i.clientWidth, n ? n.clientWidth : 0) - r),
                          { width: r, height: a, x: o, y: l }
                      );
                  })(Qe(e))
              );
    }
    function Ct(e) {
        var t,
            i = e.reference,
            s = e.element,
            n = e.placement,
            r = n ? Xe(n) : null,
            a = n ? dt(n) : null,
            o = i.x + i.width / 2 - s.width / 2,
            l = i.y + i.height / 2 - s.height / 2;
        switch (r) {
            case me:
                t = { x: o, y: i.y - s.height };
                break;
            case ge:
                t = { x: o, y: i.y + i.height };
                break;
            case ve:
                t = { x: i.x + i.width, y: l };
                break;
            case ye:
                t = { x: i.x - s.width, y: l };
                break;
            default:
                t = { x: i.x, y: i.y };
        }
        var d = r ? tt(r) : null;
        if (null != d) {
            var c = "y" === d ? "height" : "width";
            switch (a) {
                case xe:
                    t[d] = t[d] - (i[c] / 2 - s[c] / 2);
                    break;
                case _e:
                    t[d] = t[d] + (i[c] / 2 - s[c] / 2);
            }
        }
        return t;
    }
    function Mt(e, t) {
        void 0 === t && (t = {});
        var i = t,
            s = i.placement,
            n = void 0 === s ? e.placement : s,
            r = i.boundary,
            a = void 0 === r ? Ee : r,
            o = i.rootBoundary,
            l = void 0 === o ? Te : o,
            d = i.elementContext,
            c = void 0 === d ? Se : d,
            h = i.altBoundary,
            u = void 0 !== h && h,
            p = i.padding,
            f = void 0 === p ? 0 : p,
            m = at("number" != typeof f ? f : ot(f, we)),
            g = c === Se ? Ce : Se,
            v = e.rects.popper,
            y = e.elements[u ? g : c],
            b = (function (e, t, i) {
                var s =
                        "clippingParents" === t
                            ? (function (e) {
                                  var t = Et(Ze(e)),
                                      i =
                                          ["absolute", "fixed"].indexOf(
                                              Ue(e).position
                                          ) >= 0 && qe(e)
                                              ? et(e)
                                              : e;
                                  return Be(i)
                                      ? t.filter(function (e) {
                                            return (
                                                Be(e) &&
                                                Ge(e, i) &&
                                                "body" !== He(e)
                                            );
                                        })
                                      : [];
                              })(e)
                            : [].concat(t),
                    n = [].concat(s, [i]),
                    r = n[0],
                    a = n.reduce(function (t, i) {
                        var s = St(e, i);
                        return (
                            (t.top = it(s.top, t.top)),
                            (t.right = st(s.right, t.right)),
                            (t.bottom = st(s.bottom, t.bottom)),
                            (t.left = it(s.left, t.left)),
                            t
                        );
                    }, St(e, r));
                return (
                    (a.width = a.right - a.left),
                    (a.height = a.bottom - a.top),
                    (a.x = a.left),
                    (a.y = a.top),
                    a
                );
            })(Be(y) ? y : y.contextElement || Qe(e.elements.popper), a, l),
            w = Fe(e.elements.reference),
            x = Ct({
                reference: w,
                element: v,
                strategy: "absolute",
                placement: n,
            }),
            _ = Tt(Object.assign({}, v, x)),
            E = c === Se ? _ : w,
            T = {
                top: b.top - E.top + m.top,
                bottom: E.bottom - b.bottom + m.bottom,
                left: b.left - E.left + m.left,
                right: E.right - b.right + m.right,
            },
            S = e.modifiersData.offset;
        if (c === Se && S) {
            var C = S[n];
            Object.keys(T).forEach(function (e) {
                var t = [ve, ge].indexOf(e) >= 0 ? 1 : -1,
                    i = [me, ge].indexOf(e) >= 0 ? "y" : "x";
                T[e] += C[i] * t;
            });
        }
        return T;
    }
    const kt = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
            var t = e.state,
                i = e.options,
                s = e.name;
            if (!t.modifiersData[s]._skip) {
                for (
                    var n = i.mainAxis,
                        r = void 0 === n || n,
                        a = i.altAxis,
                        o = void 0 === a || a,
                        l = i.fallbackPlacements,
                        d = i.padding,
                        c = i.boundary,
                        h = i.rootBoundary,
                        u = i.altBoundary,
                        p = i.flipVariations,
                        f = void 0 === p || p,
                        m = i.allowedAutoPlacements,
                        g = t.options.placement,
                        v = Xe(g),
                        y =
                            l ||
                            (v !== g && f
                                ? (function (e) {
                                      if (Xe(e) === be) return [];
                                      var t = gt(e);
                                      return [yt(e), t, yt(t)];
                                  })(g)
                                : [gt(g)]),
                        b = [g].concat(y).reduce(function (e, i) {
                            return e.concat(
                                Xe(i) === be
                                    ? (function (e, t) {
                                          void 0 === t && (t = {});
                                          var i = t,
                                              s = i.placement,
                                              n = i.boundary,
                                              r = i.rootBoundary,
                                              a = i.padding,
                                              o = i.flipVariations,
                                              l = i.allowedAutoPlacements,
                                              d = void 0 === l ? ke : l,
                                              c = dt(s),
                                              h = c
                                                  ? o
                                                      ? Me
                                                      : Me.filter(function (e) {
                                                            return dt(e) === c;
                                                        })
                                                  : we,
                                              u = h.filter(function (e) {
                                                  return d.indexOf(e) >= 0;
                                              });
                                          0 === u.length && (u = h);
                                          var p = u.reduce(function (t, i) {
                                              return (
                                                  (t[i] = Mt(e, {
                                                      placement: i,
                                                      boundary: n,
                                                      rootBoundary: r,
                                                      padding: a,
                                                  })[Xe(i)]),
                                                  t
                                              );
                                          }, {});
                                          return Object.keys(p).sort(function (
                                              e,
                                              t
                                          ) {
                                              return p[e] - p[t];
                                          });
                                      })(t, {
                                          placement: i,
                                          boundary: c,
                                          rootBoundary: h,
                                          padding: d,
                                          flipVariations: f,
                                          allowedAutoPlacements: m,
                                      })
                                    : i
                            );
                        }, []),
                        w = t.rects.reference,
                        x = t.rects.popper,
                        _ = new Map(),
                        E = !0,
                        T = b[0],
                        S = 0;
                    S < b.length;
                    S++
                ) {
                    var C = b[S],
                        M = Xe(C),
                        k = dt(C) === xe,
                        O = [me, ge].indexOf(M) >= 0,
                        L = O ? "width" : "height",
                        $ = Mt(t, {
                            placement: C,
                            boundary: c,
                            rootBoundary: h,
                            altBoundary: u,
                            padding: d,
                        }),
                        I = O ? (k ? ve : ye) : k ? ge : me;
                    w[L] > x[L] && (I = gt(I));
                    var A = gt(I),
                        P = [];
                    if (
                        (r && P.push($[M] <= 0),
                        o && P.push($[I] <= 0, $[A] <= 0),
                        P.every(function (e) {
                            return e;
                        }))
                    ) {
                        (T = C), (E = !1);
                        break;
                    }
                    _.set(C, P);
                }
                if (E)
                    for (
                        var z = function (e) {
                                var t = b.find(function (t) {
                                    var i = _.get(t);
                                    if (i)
                                        return i
                                            .slice(0, e)
                                            .every(function (e) {
                                                return e;
                                            });
                                });
                                if (t) return (T = t), "break";
                            },
                            D = f ? 3 : 1;
                        D > 0 && "break" !== z(D);
                        D--
                    );
                t.placement !== T &&
                    ((t.modifiersData[s]._skip = !0),
                    (t.placement = T),
                    (t.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function Ot(e, t, i) {
        return (
            void 0 === i && (i = { x: 0, y: 0 }),
            {
                top: e.top - t.height - i.y,
                right: e.right - t.width + i.x,
                bottom: e.bottom - t.height + i.y,
                left: e.left - t.width - i.x,
            }
        );
    }
    function Lt(e) {
        return [me, ve, ge, ye].some(function (t) {
            return e[t] >= 0;
        });
    }
    const $t = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    i = e.name,
                    s = t.rects.reference,
                    n = t.rects.popper,
                    r = t.modifiersData.preventOverflow,
                    a = Mt(t, { elementContext: "reference" }),
                    o = Mt(t, { altBoundary: !0 }),
                    l = Ot(a, s),
                    d = Ot(o, n, r),
                    c = Lt(l),
                    h = Lt(d);
                (t.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: d,
                    isReferenceHidden: c,
                    hasPopperEscaped: h,
                }),
                    (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                            "data-popper-reference-hidden": c,
                            "data-popper-escaped": h,
                        }
                    ));
            },
        },
        It = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var t = e.state,
                    i = e.options,
                    s = e.name,
                    n = i.offset,
                    r = void 0 === n ? [0, 0] : n,
                    a = ke.reduce(function (e, i) {
                        return (
                            (e[i] = (function (e, t, i) {
                                var s = Xe(e),
                                    n = [ye, me].indexOf(s) >= 0 ? -1 : 1,
                                    r =
                                        "function" == typeof i
                                            ? i(
                                                  Object.assign({}, t, {
                                                      placement: e,
                                                  })
                                              )
                                            : i,
                                    a = r[0],
                                    o = r[1];
                                return (
                                    (a = a || 0),
                                    (o = (o || 0) * n),
                                    [ye, ve].indexOf(s) >= 0
                                        ? { x: o, y: a }
                                        : { x: a, y: o }
                                );
                            })(i, t.rects, r)),
                            e
                        );
                    }, {}),
                    o = a[t.placement],
                    l = o.x,
                    d = o.y;
                null != t.modifiersData.popperOffsets &&
                    ((t.modifiersData.popperOffsets.x += l),
                    (t.modifiersData.popperOffsets.y += d)),
                    (t.modifiersData[s] = a);
            },
        },
        At = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    i = e.name;
                t.modifiersData[i] = Ct({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement,
                });
            },
            data: {},
        },
        Pt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    i = e.options,
                    s = e.name,
                    n = i.mainAxis,
                    r = void 0 === n || n,
                    a = i.altAxis,
                    o = void 0 !== a && a,
                    l = i.boundary,
                    d = i.rootBoundary,
                    c = i.altBoundary,
                    h = i.padding,
                    u = i.tether,
                    p = void 0 === u || u,
                    f = i.tetherOffset,
                    m = void 0 === f ? 0 : f,
                    g = Mt(t, {
                        boundary: l,
                        rootBoundary: d,
                        padding: h,
                        altBoundary: c,
                    }),
                    v = Xe(t.placement),
                    y = dt(t.placement),
                    b = !y,
                    w = tt(v),
                    x = "x" === w ? "y" : "x",
                    _ = t.modifiersData.popperOffsets,
                    E = t.rects.reference,
                    T = t.rects.popper,
                    S =
                        "function" == typeof m
                            ? m(
                                  Object.assign({}, t.rects, {
                                      placement: t.placement,
                                  })
                              )
                            : m,
                    C = { x: 0, y: 0 };
                if (_) {
                    if (r || o) {
                        var M = "y" === w ? me : ye,
                            k = "y" === w ? ge : ve,
                            O = "y" === w ? "height" : "width",
                            L = _[w],
                            $ = _[w] + g[M],
                            I = _[w] - g[k],
                            A = p ? -T[O] / 2 : 0,
                            P = y === xe ? E[O] : T[O],
                            z = y === xe ? -T[O] : -E[O],
                            D = t.elements.arrow,
                            N = p && D ? Ve(D) : { width: 0, height: 0 },
                            j = t.modifiersData["arrow#persistent"]
                                ? t.modifiersData["arrow#persistent"].padding
                                : { top: 0, right: 0, bottom: 0, left: 0 },
                            H = j[M],
                            W = j[k],
                            B = rt(0, E[O], N[O]),
                            q = b ? E[O] / 2 - A - B - H - S : P - B - H - S,
                            Y = b ? -E[O] / 2 + A + B + W + S : z + B + W + S,
                            R = t.elements.arrow && et(t.elements.arrow),
                            X = R
                                ? "y" === w
                                    ? R.clientTop || 0
                                    : R.clientLeft || 0
                                : 0,
                            F = t.modifiersData.offset
                                ? t.modifiersData.offset[t.placement][w]
                                : 0,
                            V = _[w] + q - F - X,
                            G = _[w] + Y - F;
                        if (r) {
                            var U = rt(p ? st($, V) : $, L, p ? it(I, G) : I);
                            (_[w] = U), (C[w] = U - L);
                        }
                        if (o) {
                            var K = "x" === w ? me : ye,
                                Q = "x" === w ? ge : ve,
                                Z = _[x],
                                J = Z + g[K],
                                ee = Z - g[Q],
                                te = rt(
                                    p ? st(J, V) : J,
                                    Z,
                                    p ? it(ee, G) : ee
                                );
                            (_[x] = te), (C[x] = te - Z);
                        }
                    }
                    t.modifiersData[s] = C;
                }
            },
            requiresIfExists: ["offset"],
        };
    function zt(e, t, i) {
        void 0 === i && (i = !1);
        var s = qe(t);
        qe(t) &&
            (function (e) {
                var t = e.getBoundingClientRect();
                t.width, e.offsetWidth, t.height, e.offsetHeight;
            })(t);
        var n,
            r,
            a = Qe(t),
            o = Fe(e),
            l = { scrollLeft: 0, scrollTop: 0 },
            d = { x: 0, y: 0 };
        return (
            (s || (!s && !i)) &&
                (("body" !== He(t) || xt(a)) &&
                    (l =
                        (n = t) !== We(n) && qe(n)
                            ? {
                                  scrollLeft: (r = n).scrollLeft,
                                  scrollTop: r.scrollTop,
                              }
                            : bt(n)),
                qe(t)
                    ? (((d = Fe(t)).x += t.clientLeft), (d.y += t.clientTop))
                    : a && (d.x = wt(a))),
            {
                x: o.left + l.scrollLeft - d.x,
                y: o.top + l.scrollTop - d.y,
                width: o.width,
                height: o.height,
            }
        );
    }
    function Dt(e) {
        var t = new Map(),
            i = new Set(),
            s = [];
        function n(e) {
            i.add(e.name),
                []
                    .concat(e.requires || [], e.requiresIfExists || [])
                    .forEach(function (e) {
                        if (!i.has(e)) {
                            var s = t.get(e);
                            s && n(s);
                        }
                    }),
                s.push(e);
        }
        return (
            e.forEach(function (e) {
                t.set(e.name, e);
            }),
            e.forEach(function (e) {
                i.has(e.name) || n(e);
            }),
            s
        );
    }
    var Nt = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function jt() {
        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
        return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
        });
    }
    function Ht(e) {
        void 0 === e && (e = {});
        var t = e,
            i = t.defaultModifiers,
            s = void 0 === i ? [] : i,
            n = t.defaultOptions,
            r = void 0 === n ? Nt : n;
        return function (e, t, i) {
            void 0 === i && (i = r);
            var n,
                a,
                o = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Nt, r),
                    modifiersData: {},
                    elements: { reference: e, popper: t },
                    attributes: {},
                    styles: {},
                },
                l = [],
                d = !1,
                c = {
                    state: o,
                    setOptions: function (i) {
                        var n = "function" == typeof i ? i(o.options) : i;
                        h(),
                            (o.options = Object.assign({}, r, o.options, n)),
                            (o.scrollParents = {
                                reference: Be(e)
                                    ? Et(e)
                                    : e.contextElement
                                    ? Et(e.contextElement)
                                    : [],
                                popper: Et(t),
                            });
                        var a,
                            d,
                            u = (function (e) {
                                var t = Dt(e);
                                return je.reduce(function (e, i) {
                                    return e.concat(
                                        t.filter(function (e) {
                                            return e.phase === i;
                                        })
                                    );
                                }, []);
                            })(
                                ((a = [].concat(s, o.options.modifiers)),
                                (d = a.reduce(function (e, t) {
                                    var i = e[t.name];
                                    return (
                                        (e[t.name] = i
                                            ? Object.assign({}, i, t, {
                                                  options: Object.assign(
                                                      {},
                                                      i.options,
                                                      t.options
                                                  ),
                                                  data: Object.assign(
                                                      {},
                                                      i.data,
                                                      t.data
                                                  ),
                                              })
                                            : t),
                                        e
                                    );
                                }, {})),
                                Object.keys(d).map(function (e) {
                                    return d[e];
                                }))
                            );
                        return (
                            (o.orderedModifiers = u.filter(function (e) {
                                return e.enabled;
                            })),
                            o.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                    i = e.options,
                                    s = void 0 === i ? {} : i,
                                    n = e.effect;
                                if ("function" == typeof n) {
                                    var r = n({
                                        state: o,
                                        name: t,
                                        instance: c,
                                        options: s,
                                    });
                                    l.push(r || function () {});
                                }
                            }),
                            c.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!d) {
                            var e = o.elements,
                                t = e.reference,
                                i = e.popper;
                            if (jt(t, i)) {
                                (o.rects = {
                                    reference: zt(
                                        t,
                                        et(i),
                                        "fixed" === o.options.strategy
                                    ),
                                    popper: Ve(i),
                                }),
                                    (o.reset = !1),
                                    (o.placement = o.options.placement),
                                    o.orderedModifiers.forEach(function (e) {
                                        return (o.modifiersData[e.name] =
                                            Object.assign({}, e.data));
                                    });
                                for (
                                    var s = 0;
                                    s < o.orderedModifiers.length;
                                    s++
                                )
                                    if (!0 !== o.reset) {
                                        var n = o.orderedModifiers[s],
                                            r = n.fn,
                                            a = n.options,
                                            l = void 0 === a ? {} : a,
                                            h = n.name;
                                        "function" == typeof r &&
                                            (o =
                                                r({
                                                    state: o,
                                                    options: l,
                                                    name: h,
                                                    instance: c,
                                                }) || o);
                                    } else (o.reset = !1), (s = -1);
                            }
                        }
                    },
                    update:
                        ((n = function () {
                            return new Promise(function (e) {
                                c.forceUpdate(), e(o);
                            });
                        }),
                        function () {
                            return (
                                a ||
                                    (a = new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (a = void 0), e(n());
                                        });
                                    })),
                                a
                            );
                        }),
                    destroy: function () {
                        h(), (d = !0);
                    },
                };
            if (!jt(e, t)) return c;
            function h() {
                l.forEach(function (e) {
                    return e();
                }),
                    (l = []);
            }
            return (
                c.setOptions(i).then(function (e) {
                    !d && i.onFirstUpdate && i.onFirstUpdate(e);
                }),
                c
            );
        };
    }
    var Wt = Ht(),
        Bt = Ht({ defaultModifiers: [ft, At, ut, Re] }),
        qt = Ht({ defaultModifiers: [ft, At, ut, Re, It, kt, Pt, lt, $t] });
    const Yt = Object.freeze({
            __proto__: null,
            popperGenerator: Ht,
            detectOverflow: Mt,
            createPopperBase: Wt,
            createPopper: qt,
            createPopperLite: Bt,
            top: me,
            bottom: ge,
            right: ve,
            left: ye,
            auto: be,
            basePlacements: we,
            start: xe,
            end: _e,
            clippingParents: Ee,
            viewport: Te,
            popper: Se,
            reference: Ce,
            variationPlacements: Me,
            placements: ke,
            beforeRead: Oe,
            read: Le,
            afterRead: $e,
            beforeMain: Ie,
            main: Ae,
            afterMain: Pe,
            beforeWrite: ze,
            write: De,
            afterWrite: Ne,
            modifierPhases: je,
            applyStyles: Re,
            arrow: lt,
            computeStyles: ut,
            eventListeners: ft,
            flip: kt,
            hide: $t,
            offset: It,
            popperOffsets: At,
            preventOverflow: Pt,
        }),
        Rt = "dropdown",
        Xt = "Escape",
        Ft = "Space",
        Vt = "ArrowUp",
        Gt = "ArrowDown",
        Ut = new RegExp("ArrowUp|ArrowDown|Escape"),
        Kt = "click.bs.dropdown.data-api",
        Qt = "keydown.bs.dropdown.data-api",
        Zt = "show",
        Jt = '[data-bs-toggle="dropdown"]',
        ei = ".dropdown-menu",
        ti = m() ? "top-end" : "top-start",
        ii = m() ? "top-start" : "top-end",
        si = m() ? "bottom-end" : "bottom-start",
        ni = m() ? "bottom-start" : "bottom-end",
        ri = m() ? "left-start" : "right-start",
        ai = m() ? "right-start" : "left-start",
        oi = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0,
        },
        li = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)",
        };
    class di extends j {
        constructor(e, t) {
            super(e),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this._menu = this._getMenuElement()),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return oi;
        }
        static get DefaultType() {
            return li;
        }
        static get NAME() {
            return Rt;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (d(this._element) || this._isShown(this._menu)) return;
            const e = { relatedTarget: this._element };
            if (
                z.trigger(this._element, "show.bs.dropdown", e).defaultPrevented
            )
                return;
            const t = di.getParentFromElement(this._element);
            this._inNavbar
                ? X.setDataAttribute(this._menu, "popper", "none")
                : this._createPopper(t),
                "ontouchstart" in document.documentElement &&
                    !t.closest(".navbar-nav") &&
                    []
                        .concat(...document.body.children)
                        .forEach((e) => z.on(e, "mouseover", h)),
                this._element.focus(),
                this._element.setAttribute("aria-expanded", !0),
                this._menu.classList.add(Zt),
                this._element.classList.add(Zt),
                z.trigger(this._element, "shown.bs.dropdown", e);
        }
        hide() {
            if (d(this._element) || !this._isShown(this._menu)) return;
            const e = { relatedTarget: this._element };
            this._completeHide(e);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        }
        _completeHide(e) {
            z.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
                ("ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((e) => z.off(e, "mouseover", h)),
                this._popper && this._popper.destroy(),
                this._menu.classList.remove(Zt),
                this._element.classList.remove(Zt),
                this._element.setAttribute("aria-expanded", "false"),
                X.removeDataAttribute(this._menu, "popper"),
                z.trigger(this._element, "hidden.bs.dropdown", e));
        }
        _getConfig(e) {
            if (
                ((e = {
                    ...this.constructor.Default,
                    ...X.getDataAttributes(this._element),
                    ...e,
                }),
                o(Rt, e, this.constructor.DefaultType),
                "object" == typeof e.reference &&
                    !r(e.reference) &&
                    "function" != typeof e.reference.getBoundingClientRect)
            )
                throw new TypeError(
                    `${Rt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return e;
        }
        _createPopper(e) {
            if (void 0 === Yt)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let t = this._element;
            "parent" === this._config.reference
                ? (t = e)
                : r(this._config.reference)
                ? (t = a(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (t = this._config.reference);
            const i = this._getPopperConfig(),
                s = i.modifiers.find(
                    (e) => "applyStyles" === e.name && !1 === e.enabled
                );
            (this._popper = qt(t, this._menu, i)),
                s && X.setDataAttribute(this._menu, "popper", "static");
        }
        _isShown(e = this._element) {
            return e.classList.contains(Zt);
        }
        _getMenuElement() {
            return F.next(this._element, ei)[0];
        }
        _getPlacement() {
            const e = this._element.parentNode;
            if (e.classList.contains("dropend")) return ri;
            if (e.classList.contains("dropstart")) return ai;
            const t =
                "end" ===
                getComputedStyle(this._menu)
                    .getPropertyValue("--bs-position")
                    .trim();
            return e.classList.contains("dropup") ? (t ? ii : ti) : t ? ni : si;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: e } = this._config;
            return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                ? (t) => e(t, this._element)
                : e;
        }
        _getPopperConfig() {
            const e = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                "static" === this._config.display &&
                    (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
                {
                    ...e,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(e)
                        : this._config.popperConfig),
                }
            );
        }
        _selectMenuItem({ key: e, target: t }) {
            const i = F.find(
                ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                this._menu
            ).filter(l);
            i.length && b(i, t, e === Gt, !i.includes(t)).focus();
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = di.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]();
                }
            });
        }
        static clearMenus(e) {
            if (
                e &&
                (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
            )
                return;
            const t = F.find(Jt);
            for (let i = 0, s = t.length; i < s; i++) {
                const s = di.getInstance(t[i]);
                if (!s || !1 === s._config.autoClose) continue;
                if (!s._isShown()) continue;
                const n = { relatedTarget: s._element };
                if (e) {
                    const t = e.composedPath(),
                        i = t.includes(s._menu);
                    if (
                        t.includes(s._element) ||
                        ("inside" === s._config.autoClose && !i) ||
                        ("outside" === s._config.autoClose && i)
                    )
                        continue;
                    if (
                        s._menu.contains(e.target) &&
                        (("keyup" === e.type && "Tab" === e.key) ||
                            /input|select|option|textarea|form/i.test(
                                e.target.tagName
                            ))
                    )
                        continue;
                    "click" === e.type && (n.clickEvent = e);
                }
                s._completeHide(n);
            }
        }
        static getParentFromElement(e) {
            return s(e) || e.parentNode;
        }
        static dataApiKeydownHandler(e) {
            if (
                /input|textarea/i.test(e.target.tagName)
                    ? e.key === Ft ||
                      (e.key !== Xt &&
                          ((e.key !== Gt && e.key !== Vt) ||
                              e.target.closest(ei)))
                    : !Ut.test(e.key)
            )
                return;
            const t = this.classList.contains(Zt);
            if (!t && e.key === Xt) return;
            if ((e.preventDefault(), e.stopPropagation(), d(this))) return;
            const i = this.matches(Jt) ? this : F.prev(this, Jt)[0],
                s = di.getOrCreateInstance(i);
            if (e.key !== Xt)
                return e.key === Vt || e.key === Gt
                    ? (t || s.show(), void s._selectMenuItem(e))
                    : void ((t && e.key !== Ft) || di.clearMenus());
            s.hide();
        }
    }
    z.on(document, Qt, Jt, di.dataApiKeydownHandler),
        z.on(document, Qt, ei, di.dataApiKeydownHandler),
        z.on(document, Kt, di.clearMenus),
        z.on(document, "keyup.bs.dropdown.data-api", di.clearMenus),
        z.on(document, Kt, Jt, function (e) {
            e.preventDefault(), di.getOrCreateInstance(this).toggle();
        }),
        g(di);
    const ci = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        hi = ".sticky-top";
    class ui {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e);
        }
        hide() {
            const e = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(
                    this._element,
                    "paddingRight",
                    (t) => t + e
                ),
                this._setElementAttributes(ci, "paddingRight", (t) => t + e),
                this._setElementAttributes(hi, "marginRight", (t) => t - e);
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(e, t, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(e, (e) => {
                if (
                    e !== this._element &&
                    window.innerWidth > e.clientWidth + s
                )
                    return;
                this._saveInitialAttribute(e, t);
                const n = window.getComputedStyle(e)[t];
                e.style[t] = `${i(Number.parseFloat(n))}px`;
            });
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, "paddingRight"),
                this._resetElementAttributes(ci, "paddingRight"),
                this._resetElementAttributes(hi, "marginRight");
        }
        _saveInitialAttribute(e, t) {
            const i = e.style[t];
            i && X.setDataAttribute(e, t, i);
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, (e) => {
                const i = X.getDataAttribute(e, t);
                void 0 === i
                    ? e.style.removeProperty(t)
                    : (X.removeDataAttribute(e, t), (e.style[t] = i));
            });
        }
        _applyManipulationCallback(e, t) {
            r(e) ? t(e) : F.find(e, this._element).forEach(t);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
    }
    const pi = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null,
        },
        fi = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)",
        },
        mi = "show",
        gi = "mousedown.bs.backdrop";
    class vi {
        constructor(e) {
            (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
        }
        show(e) {
            this._config.isVisible
                ? (this._append(),
                  this._config.isAnimated && u(this._getElement()),
                  this._getElement().classList.add(mi),
                  this._emulateAnimation(() => {
                      v(e);
                  }))
                : v(e);
        }
        hide(e) {
            this._config.isVisible
                ? (this._getElement().classList.remove(mi),
                  this._emulateAnimation(() => {
                      this.dispose(), v(e);
                  }))
                : v(e);
        }
        _getElement() {
            if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                    this._config.isAnimated && e.classList.add("fade"),
                    (this._element = e);
            }
            return this._element;
        }
        _getConfig(e) {
            return (
                ((e = {
                    ...pi,
                    ...("object" == typeof e ? e : {}),
                }).rootElement = a(e.rootElement)),
                o("backdrop", e, fi),
                e
            );
        }
        _append() {
            this._isAppended ||
                (this._config.rootElement.append(this._getElement()),
                z.on(this._getElement(), gi, () => {
                    v(this._config.clickCallback);
                }),
                (this._isAppended = !0));
        }
        dispose() {
            this._isAppended &&
                (z.off(this._element, gi),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _emulateAnimation(e) {
            y(e, this._getElement(), this._config.isAnimated);
        }
    }
    const yi = { trapElement: null, autofocus: !0 },
        bi = { trapElement: "element", autofocus: "boolean" },
        wi = ".bs.focustrap",
        xi = "backward";
    class _i {
        constructor(e) {
            (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        activate() {
            const { trapElement: e, autofocus: t } = this._config;
            this._isActive ||
                (t && e.focus(),
                z.off(document, wi),
                z.on(document, "focusin.bs.focustrap", (e) =>
                    this._handleFocusin(e)
                ),
                z.on(document, "keydown.tab.bs.focustrap", (e) =>
                    this._handleKeydown(e)
                ),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), z.off(document, wi));
        }
        _handleFocusin(e) {
            const { target: t } = e,
                { trapElement: i } = this._config;
            if (t === document || t === i || i.contains(t)) return;
            const s = F.focusableChildren(i);
            0 === s.length
                ? i.focus()
                : this._lastTabNavDirection === xi
                ? s[s.length - 1].focus()
                : s[0].focus();
        }
        _handleKeydown(e) {
            "Tab" === e.key &&
                (this._lastTabNavDirection = e.shiftKey ? xi : "forward");
        }
        _getConfig(e) {
            return (
                (e = { ...yi, ...("object" == typeof e ? e : {}) }),
                o("focustrap", e, bi),
                e
            );
        }
    }
    const Ei = "modal",
        Ti = "Escape",
        Si = { backdrop: !0, keyboard: !0, focus: !0 },
        Ci = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
        },
        Mi = "hidden.bs.modal",
        ki = "show.bs.modal",
        Oi = "resize.bs.modal",
        Li = "click.dismiss.bs.modal",
        $i = "keydown.dismiss.bs.modal",
        Ii = "mousedown.dismiss.bs.modal",
        Ai = "modal-open",
        Pi = "show",
        zi = "modal-static";
    class Di extends j {
        constructor(e, t) {
            super(e),
                (this._config = this._getConfig(t)),
                (this._dialog = F.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._ignoreBackdropClick = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new ui());
        }
        static get Default() {
            return Si;
        }
        static get NAME() {
            return Ei;
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
            this._isShown ||
                this._isTransitioning ||
                z.trigger(this._element, ki, { relatedTarget: e })
                    .defaultPrevented ||
                ((this._isShown = !0),
                this._isAnimated() && (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(Ai),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                z.on(this._dialog, Ii, () => {
                    z.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
                        e.target === this._element &&
                            (this._ignoreBackdropClick = !0);
                    });
                }),
                this._showBackdrop(() => this._showElement(e)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            if (z.trigger(this._element, "hide.bs.modal").defaultPrevented)
                return;
            this._isShown = !1;
            const e = this._isAnimated();
            e && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                this._focustrap.deactivate(),
                this._element.classList.remove(Pi),
                z.off(this._element, Li),
                z.off(this._dialog, Ii),
                this._queueCallback(() => this._hideModal(), this._element, e);
        }
        dispose() {
            [window, this._dialog].forEach((e) => z.off(e, ".bs.modal")),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new vi({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new _i({ trapElement: this._element });
        }
        _getConfig(e) {
            return (
                (e = {
                    ...Si,
                    ...X.getDataAttributes(this._element),
                    ...("object" == typeof e ? e : {}),
                }),
                o(Ei, e, Ci),
                e
            );
        }
        _showElement(e) {
            const t = this._isAnimated(),
                i = F.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0),
                i && (i.scrollTop = 0),
                t && u(this._element),
                this._element.classList.add(Pi),
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(),
                            (this._isTransitioning = !1),
                            z.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: e,
                            });
                    },
                    this._dialog,
                    t
                );
        }
        _setEscapeEvent() {
            this._isShown
                ? z.on(this._element, $i, (e) => {
                      this._config.keyboard && e.key === Ti
                          ? (e.preventDefault(), this.hide())
                          : this._config.keyboard ||
                            e.key !== Ti ||
                            this._triggerBackdropTransition();
                  })
                : z.off(this._element, $i);
        }
        _setResizeEvent() {
            this._isShown
                ? z.on(window, Oi, () => this._adjustDialog())
                : z.off(window, Oi);
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(Ai),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        z.trigger(this._element, Mi);
                });
        }
        _showBackdrop(e) {
            z.on(this._element, Li, (e) => {
                this._ignoreBackdropClick
                    ? (this._ignoreBackdropClick = !1)
                    : e.target === e.currentTarget &&
                      (!0 === this._config.backdrop
                          ? this.hide()
                          : "static" === this._config.backdrop &&
                            this._triggerBackdropTransition());
            }),
                this._backdrop.show(e);
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (
                z.trigger(this._element, "hidePrevented.bs.modal")
                    .defaultPrevented
            )
                return;
            const { classList: e, scrollHeight: t, style: i } = this._element,
                s = t > document.documentElement.clientHeight;
            (!s && "hidden" === i.overflowY) ||
                e.contains(zi) ||
                (s || (i.overflowY = "hidden"),
                e.add(zi),
                this._queueCallback(() => {
                    e.remove(zi),
                        s ||
                            this._queueCallback(() => {
                                i.overflowY = "";
                            }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                i = t > 0;
            ((!i && e && !m()) || (i && !e && m())) &&
                (this._element.style.paddingLeft = `${t}px`),
                ((i && !e && !m()) || (!i && e && m())) &&
                    (this._element.style.paddingRight = `${t}px`);
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(e, t) {
            return this.each(function () {
                const i = Di.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === i[e])
                        throw new TypeError(`No method named "${e}"`);
                    i[e](t);
                }
            });
        }
    }
    z.on(
        document,
        "click.bs.modal.data-api",
        '[data-bs-toggle="modal"]',
        function (e) {
            const t = s(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                z.one(t, ki, (e) => {
                    e.defaultPrevented ||
                        z.one(t, Mi, () => {
                            l(this) && this.focus();
                        });
                });
            const i = F.findOne(".modal.show");
            i && Di.getInstance(i).hide(),
                Di.getOrCreateInstance(t).toggle(this);
        }
    ),
        H(Di),
        g(Di);
    const Ni = "offcanvas",
        ji = { backdrop: !0, keyboard: !0, scroll: !1 },
        Hi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
        Wi = "show",
        Bi = ".offcanvas.show",
        qi = "hidden.bs.offcanvas";
    class Yi extends j {
        constructor(e, t) {
            super(e),
                (this._config = this._getConfig(t)),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get NAME() {
            return Ni;
        }
        static get Default() {
            return ji;
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e);
        }
        show(e) {
            this._isShown ||
                z.trigger(this._element, "show.bs.offcanvas", {
                    relatedTarget: e,
                }).defaultPrevented ||
                ((this._isShown = !0),
                (this._element.style.visibility = "visible"),
                this._backdrop.show(),
                this._config.scroll || new ui().hide(),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(Wi),
                this._queueCallback(
                    () => {
                        this._config.scroll || this._focustrap.activate(),
                            z.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: e,
                            });
                    },
                    this._element,
                    !0
                ));
        }
        hide() {
            this._isShown &&
                (z.trigger(this._element, "hide.bs.offcanvas")
                    .defaultPrevented ||
                    (this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.remove(Wi),
                    this._backdrop.hide(),
                    this._queueCallback(
                        () => {
                            this._element.setAttribute("aria-hidden", !0),
                                this._element.removeAttribute("aria-modal"),
                                this._element.removeAttribute("role"),
                                (this._element.style.visibility = "hidden"),
                                this._config.scroll || new ui().reset(),
                                z.trigger(this._element, qi);
                        },
                        this._element,
                        !0
                    )));
        }
        dispose() {
            this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        _getConfig(e) {
            return (
                (e = {
                    ...ji,
                    ...X.getDataAttributes(this._element),
                    ...("object" == typeof e ? e : {}),
                }),
                o(Ni, e, Hi),
                e
            );
        }
        _initializeBackDrop() {
            return new vi({
                className: "offcanvas-backdrop",
                isVisible: this._config.backdrop,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: () => this.hide(),
            });
        }
        _initializeFocusTrap() {
            return new _i({ trapElement: this._element });
        }
        _addEventListeners() {
            z.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                this._config.keyboard && "Escape" === e.key && this.hide();
            });
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = Yi.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (
                        void 0 === t[e] ||
                        e.startsWith("_") ||
                        "constructor" === e
                    )
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this);
                }
            });
        }
    }
    z.on(
        document,
        "click.bs.offcanvas.data-api",
        '[data-bs-toggle="offcanvas"]',
        function (e) {
            const t = s(this);
            if (
                (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                d(this))
            )
                return;
            z.one(t, qi, () => {
                l(this) && this.focus();
            });
            const i = F.findOne(Bi);
            i && i !== t && Yi.getInstance(i).hide(),
                Yi.getOrCreateInstance(t).toggle(this);
        }
    ),
        z.on(window, "load.bs.offcanvas.data-api", () =>
            F.find(Bi).forEach((e) => Yi.getOrCreateInstance(e).show())
        ),
        H(Yi),
        g(Yi);
    const Ri = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        Xi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        Fi =
            /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Vi = (e, t) => {
            const i = e.nodeName.toLowerCase();
            if (t.includes(i))
                return (
                    !Ri.has(i) ||
                    Boolean(Xi.test(e.nodeValue) || Fi.test(e.nodeValue))
                );
            const s = t.filter((e) => e instanceof RegExp);
            for (let e = 0, t = s.length; e < t; e++)
                if (s[e].test(i)) return !0;
            return !1;
        };
    function Gi(e, t, i) {
        if (!e.length) return e;
        if (i && "function" == typeof i) return i(e);
        const s = new window.DOMParser().parseFromString(e, "text/html"),
            n = [].concat(...s.body.querySelectorAll("*"));
        for (let e = 0, i = n.length; e < i; e++) {
            const i = n[e],
                s = i.nodeName.toLowerCase();
            if (!Object.keys(t).includes(s)) {
                i.remove();
                continue;
            }
            const r = [].concat(...i.attributes),
                a = [].concat(t["*"] || [], t[s] || []);
            r.forEach((e) => {
                Vi(e, a) || i.removeAttribute(e.nodeName);
            });
        }
        return s.body.innerHTML;
    }
    const Ui = "tooltip",
        Ki = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Qi = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)",
        },
        Zi = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left",
        },
        Ji = {
            animation: !0,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            popperConfig: null,
        },
        es = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip",
        },
        ts = "fade",
        is = "show",
        ss = "show",
        ns = "out",
        rs = ".tooltip-inner",
        as = ".modal",
        os = "hide.bs.modal",
        ls = "hover",
        ds = "focus";
    class cs extends j {
        constructor(e, t) {
            if (void 0 === Yt)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._hoverState = ""),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._config = this._getConfig(t)),
                (this.tip = null),
                this._setListeners();
        }
        static get Default() {
            return Ji;
        }
        static get NAME() {
            return Ui;
        }
        static get Event() {
            return es;
        }
        static get DefaultType() {
            return Qi;
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle(e) {
            if (this._isEnabled)
                if (e) {
                    const t = this._initializeOnDelegatedTarget(e);
                    (t._activeTrigger.click = !t._activeTrigger.click),
                        t._isWithActiveTrigger()
                            ? t._enter(null, t)
                            : t._leave(null, t);
                } else {
                    if (this.getTipElement().classList.contains(is))
                        return void this._leave(null, this);
                    this._enter(null, this);
                }
        }
        dispose() {
            clearTimeout(this._timeout),
                z.off(this._element.closest(as), os, this._hideModalHandler),
                this.tip && this.tip.remove(),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this.isWithContent() || !this._isEnabled) return;
            const e = z.trigger(this._element, this.constructor.Event.SHOW),
                t = c(this._element),
                i =
                    null === t
                        ? this._element.ownerDocument.documentElement.contains(
                              this._element
                          )
                        : t.contains(this._element);
            if (e.defaultPrevented || !i) return;
            "tooltip" === this.constructor.NAME &&
                this.tip &&
                this.getTitle() !== this.tip.querySelector(rs).innerHTML &&
                (this._disposePopper(), this.tip.remove(), (this.tip = null));
            const s = this.getTipElement(),
                n = ((e) => {
                    do {
                        e += Math.floor(1e6 * Math.random());
                    } while (document.getElementById(e));
                    return e;
                })(this.constructor.NAME);
            s.setAttribute("id", n),
                this._element.setAttribute("aria-describedby", n),
                this._config.animation && s.classList.add(ts);
            const r =
                    "function" == typeof this._config.placement
                        ? this._config.placement.call(this, s, this._element)
                        : this._config.placement,
                a = this._getAttachment(r);
            this._addAttachmentClass(a);
            const { container: o } = this._config;
            N.set(s, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(
                    this.tip
                ) ||
                    (o.append(s),
                    z.trigger(this._element, this.constructor.Event.INSERTED)),
                this._popper
                    ? this._popper.update()
                    : (this._popper = qt(
                          this._element,
                          s,
                          this._getPopperConfig(a)
                      )),
                s.classList.add(is);
            const l = this._resolvePossibleFunction(this._config.customClass);
            l && s.classList.add(...l.split(" ")),
                "ontouchstart" in document.documentElement &&
                    [].concat(...document.body.children).forEach((e) => {
                        z.on(e, "mouseover", h);
                    });
            const d = this.tip.classList.contains(ts);
            this._queueCallback(
                () => {
                    const e = this._hoverState;
                    (this._hoverState = null),
                        z.trigger(this._element, this.constructor.Event.SHOWN),
                        e === ns && this._leave(null, this);
                },
                this.tip,
                d
            );
        }
        hide() {
            if (!this._popper) return;
            const e = this.getTipElement();
            if (
                z.trigger(this._element, this.constructor.Event.HIDE)
                    .defaultPrevented
            )
                return;
            e.classList.remove(is),
                "ontouchstart" in document.documentElement &&
                    []
                        .concat(...document.body.children)
                        .forEach((e) => z.off(e, "mouseover", h)),
                (this._activeTrigger.click = !1),
                (this._activeTrigger.focus = !1),
                (this._activeTrigger.hover = !1);
            const t = this.tip.classList.contains(ts);
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() ||
                        (this._hoverState !== ss && e.remove(),
                        this._cleanTipClass(),
                        this._element.removeAttribute("aria-describedby"),
                        z.trigger(this._element, this.constructor.Event.HIDDEN),
                        this._disposePopper());
                },
                this.tip,
                t
            ),
                (this._hoverState = "");
        }
        update() {
            null !== this._popper && this._popper.update();
        }
        isWithContent() {
            return Boolean(this.getTitle());
        }
        getTipElement() {
            if (this.tip) return this.tip;
            const e = document.createElement("div");
            e.innerHTML = this._config.template;
            const t = e.children[0];
            return (
                this.setContent(t),
                t.classList.remove(ts, is),
                (this.tip = t),
                this.tip
            );
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), rs);
        }
        _sanitizeAndSetContent(e, t, i) {
            const s = F.findOne(i, e);
            t || !s ? this.setElementContent(s, t) : s.remove();
        }
        setElementContent(e, t) {
            if (null !== e)
                return r(t)
                    ? ((t = a(t)),
                      void (this._config.html
                          ? t.parentNode !== e &&
                            ((e.innerHTML = ""), e.append(t))
                          : (e.textContent = t.textContent)))
                    : void (this._config.html
                          ? (this._config.sanitize &&
                                (t = Gi(
                                    t,
                                    this._config.allowList,
                                    this._config.sanitizeFn
                                )),
                            (e.innerHTML = t))
                          : (e.textContent = t));
        }
        getTitle() {
            const e =
                this._element.getAttribute("data-bs-original-title") ||
                this._config.title;
            return this._resolvePossibleFunction(e);
        }
        updateAttachment(e) {
            return "right" === e ? "end" : "left" === e ? "start" : e;
        }
        _initializeOnDelegatedTarget(e, t) {
            return (
                t ||
                this.constructor.getOrCreateInstance(
                    e.delegateTarget,
                    this._getDelegateConfig()
                )
            );
        }
        _getOffset() {
            const { offset: e } = this._config;
            return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                ? (t) => e(t, this._element)
                : e;
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e;
        }
        _getPopperConfig(e) {
            const t = {
                placement: e,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "onChange",
                        enabled: !0,
                        phase: "afterWrite",
                        fn: (e) => this._handlePopperPlacementChange(e),
                    },
                ],
                onFirstUpdate: (e) => {
                    e.options.placement !== e.placement &&
                        this._handlePopperPlacementChange(e);
                },
            };
            return {
                ...t,
                ...("function" == typeof this._config.popperConfig
                    ? this._config.popperConfig(t)
                    : this._config.popperConfig),
            };
        }
        _addAttachmentClass(e) {
            this.getTipElement().classList.add(
                `${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`
            );
        }
        _getAttachment(e) {
            return Zi[e.toUpperCase()];
        }
        _setListeners() {
            this._config.trigger.split(" ").forEach((e) => {
                if ("click" === e)
                    z.on(
                        this._element,
                        this.constructor.Event.CLICK,
                        this._config.selector,
                        (e) => this.toggle(e)
                    );
                else if ("manual" !== e) {
                    const t =
                            e === ls
                                ? this.constructor.Event.MOUSEENTER
                                : this.constructor.Event.FOCUSIN,
                        i =
                            e === ls
                                ? this.constructor.Event.MOUSELEAVE
                                : this.constructor.Event.FOCUSOUT;
                    z.on(this._element, t, this._config.selector, (e) =>
                        this._enter(e)
                    ),
                        z.on(this._element, i, this._config.selector, (e) =>
                            this._leave(e)
                        );
                }
            }),
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                z.on(this._element.closest(as), os, this._hideModalHandler),
                this._config.selector
                    ? (this._config = {
                          ...this._config,
                          trigger: "manual",
                          selector: "",
                      })
                    : this._fixTitle();
        }
        _fixTitle() {
            const e = this._element.getAttribute("title"),
                t = typeof this._element.getAttribute("data-bs-original-title");
            (e || "string" !== t) &&
                (this._element.setAttribute("data-bs-original-title", e || ""),
                !e ||
                    this._element.getAttribute("aria-label") ||
                    this._element.textContent ||
                    this._element.setAttribute("aria-label", e),
                this._element.setAttribute("title", ""));
        }
        _enter(e, t) {
            (t = this._initializeOnDelegatedTarget(e, t)),
                e && (t._activeTrigger["focusin" === e.type ? ds : ls] = !0),
                t.getTipElement().classList.contains(is) || t._hoverState === ss
                    ? (t._hoverState = ss)
                    : (clearTimeout(t._timeout),
                      (t._hoverState = ss),
                      t._config.delay && t._config.delay.show
                          ? (t._timeout = setTimeout(() => {
                                t._hoverState === ss && t.show();
                            }, t._config.delay.show))
                          : t.show());
        }
        _leave(e, t) {
            (t = this._initializeOnDelegatedTarget(e, t)),
                e &&
                    (t._activeTrigger["focusout" === e.type ? ds : ls] =
                        t._element.contains(e.relatedTarget)),
                t._isWithActiveTrigger() ||
                    (clearTimeout(t._timeout),
                    (t._hoverState = ns),
                    t._config.delay && t._config.delay.hide
                        ? (t._timeout = setTimeout(() => {
                              t._hoverState === ns && t.hide();
                          }, t._config.delay.hide))
                        : t.hide());
        }
        _isWithActiveTrigger() {
            for (const e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1;
        }
        _getConfig(e) {
            const t = X.getDataAttributes(this._element);
            return (
                Object.keys(t).forEach((e) => {
                    Ki.has(e) && delete t[e];
                }),
                ((e = {
                    ...this.constructor.Default,
                    ...t,
                    ...("object" == typeof e && e ? e : {}),
                }).container =
                    !1 === e.container ? document.body : a(e.container)),
                "number" == typeof e.delay &&
                    (e.delay = { show: e.delay, hide: e.delay }),
                "number" == typeof e.title && (e.title = e.title.toString()),
                "number" == typeof e.content &&
                    (e.content = e.content.toString()),
                o(Ui, e, this.constructor.DefaultType),
                e.sanitize &&
                    (e.template = Gi(e.template, e.allowList, e.sanitizeFn)),
                e
            );
        }
        _getDelegateConfig() {
            const e = {};
            for (const t in this._config)
                this.constructor.Default[t] !== this._config[t] &&
                    (e[t] = this._config[t]);
            return e;
        }
        _cleanTipClass() {
            const e = this.getTipElement(),
                t = new RegExp(
                    `(^|\\s)${this._getBasicClassPrefix()}\\S+`,
                    "g"
                ),
                i = e.getAttribute("class").match(t);
            null !== i &&
                i.length > 0 &&
                i.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
        }
        _getBasicClassPrefix() {
            return "bs-tooltip";
        }
        _handlePopperPlacementChange(e) {
            const { state: t } = e;
            t &&
                ((this.tip = t.elements.popper),
                this._cleanTipClass(),
                this._addAttachmentClass(this._getAttachment(t.placement)));
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null));
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = cs.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]();
                }
            });
        }
    }
    g(cs);
    const hs = {
            ...cs.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        },
        us = { ...cs.DefaultType, content: "(string|element|function)" },
        ps = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover",
        };
    class fs extends cs {
        static get Default() {
            return hs;
        }
        static get NAME() {
            return "popover";
        }
        static get Event() {
            return ps;
        }
        static get DefaultType() {
            return us;
        }
        isWithContent() {
            return this.getTitle() || this._getContent();
        }
        setContent(e) {
            this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"),
                this._sanitizeAndSetContent(
                    e,
                    this._getContent(),
                    ".popover-body"
                );
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        _getBasicClassPrefix() {
            return "bs-popover";
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = fs.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]();
                }
            });
        }
    }
    g(fs);
    const ms = "scrollspy",
        gs = { offset: 10, method: "auto", target: "" },
        vs = { offset: "number", method: "string", target: "(string|element)" },
        ys = "active",
        bs = ".nav-link, .list-group-item, .dropdown-item",
        ws = "position";
    class xs extends j {
        constructor(e, t) {
            super(e),
                (this._scrollElement =
                    "BODY" === this._element.tagName ? window : this._element),
                (this._config = this._getConfig(t)),
                (this._offsets = []),
                (this._targets = []),
                (this._activeTarget = null),
                (this._scrollHeight = 0),
                z.on(this._scrollElement, "scroll.bs.scrollspy", () =>
                    this._process()
                ),
                this.refresh(),
                this._process();
        }
        static get Default() {
            return gs;
        }
        static get NAME() {
            return ms;
        }
        refresh() {
            const e =
                    this._scrollElement === this._scrollElement.window
                        ? "offset"
                        : ws,
                t = "auto" === this._config.method ? e : this._config.method,
                s = t === ws ? this._getScrollTop() : 0;
            (this._offsets = []),
                (this._targets = []),
                (this._scrollHeight = this._getScrollHeight()),
                F.find(bs, this._config.target)
                    .map((e) => {
                        const n = i(e),
                            r = n ? F.findOne(n) : null;
                        if (r) {
                            const e = r.getBoundingClientRect();
                            if (e.width || e.height)
                                return [X[t](r).top + s, n];
                        }
                        return null;
                    })
                    .filter((e) => e)
                    .sort((e, t) => e[0] - t[0])
                    .forEach((e) => {
                        this._offsets.push(e[0]), this._targets.push(e[1]);
                    });
        }
        dispose() {
            z.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
        }
        _getConfig(e) {
            return (
                ((e = {
                    ...gs,
                    ...X.getDataAttributes(this._element),
                    ...("object" == typeof e && e ? e : {}),
                }).target = a(e.target) || document.documentElement),
                o(ms, e, vs),
                e
            );
        }
        _getScrollTop() {
            return this._scrollElement === window
                ? this._scrollElement.pageYOffset
                : this._scrollElement.scrollTop;
        }
        _getScrollHeight() {
            return (
                this._scrollElement.scrollHeight ||
                Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                )
            );
        }
        _getOffsetHeight() {
            return this._scrollElement === window
                ? window.innerHeight
                : this._scrollElement.getBoundingClientRect().height;
        }
        _process() {
            const e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                i = this._config.offset + t - this._getOffsetHeight();
            if ((this._scrollHeight !== t && this.refresh(), e >= i)) {
                const e = this._targets[this._targets.length - 1];
                this._activeTarget !== e && this._activate(e);
            } else {
                if (
                    this._activeTarget &&
                    e < this._offsets[0] &&
                    this._offsets[0] > 0
                )
                    return (this._activeTarget = null), void this._clear();
                for (let t = this._offsets.length; t--; )
                    this._activeTarget !== this._targets[t] &&
                        e >= this._offsets[t] &&
                        (void 0 === this._offsets[t + 1] ||
                            e < this._offsets[t + 1]) &&
                        this._activate(this._targets[t]);
            }
        }
        _activate(e) {
            (this._activeTarget = e), this._clear();
            const t = bs
                    .split(",")
                    .map(
                        (t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`
                    ),
                i = F.findOne(t.join(","), this._config.target);
            i.classList.add(ys),
                i.classList.contains("dropdown-item")
                    ? F.findOne(
                          ".dropdown-toggle",
                          i.closest(".dropdown")
                      ).classList.add(ys)
                    : F.parents(i, ".nav, .list-group").forEach((e) => {
                          F.prev(e, ".nav-link, .list-group-item").forEach(
                              (e) => e.classList.add(ys)
                          ),
                              F.prev(e, ".nav-item").forEach((e) => {
                                  F.children(e, ".nav-link").forEach((e) =>
                                      e.classList.add(ys)
                                  );
                              });
                      }),
                z.trigger(this._scrollElement, "activate.bs.scrollspy", {
                    relatedTarget: e,
                });
        }
        _clear() {
            F.find(bs, this._config.target)
                .filter((e) => e.classList.contains(ys))
                .forEach((e) => e.classList.remove(ys));
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = xs.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]();
                }
            });
        }
    }
    z.on(window, "load.bs.scrollspy.data-api", () => {
        F.find('[data-bs-spy="scroll"]').forEach((e) => new xs(e));
    }),
        g(xs);
    const _s = "active",
        Es = "fade",
        Ts = "show",
        Ss = ".active",
        Cs = ":scope > li > .active";
    class Ms extends j {
        static get NAME() {
            return "tab";
        }
        show() {
            if (
                this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains(_s)
            )
                return;
            let e;
            const t = s(this._element),
                i = this._element.closest(".nav, .list-group");
            if (i) {
                const t = "UL" === i.nodeName || "OL" === i.nodeName ? Cs : Ss;
                (e = F.find(t, i)), (e = e[e.length - 1]);
            }
            const n = e
                ? z.trigger(e, "hide.bs.tab", { relatedTarget: this._element })
                : null;
            if (
                z.trigger(this._element, "show.bs.tab", { relatedTarget: e })
                    .defaultPrevented ||
                (null !== n && n.defaultPrevented)
            )
                return;
            this._activate(this._element, i);
            const r = () => {
                z.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }),
                    z.trigger(this._element, "shown.bs.tab", {
                        relatedTarget: e,
                    });
            };
            t ? this._activate(t, t.parentNode, r) : r();
        }
        _activate(e, t, i) {
            const s = (
                    !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                        ? F.children(t, Ss)
                        : F.find(Cs, t)
                )[0],
                n = i && s && s.classList.contains(Es),
                r = () => this._transitionComplete(e, s, i);
            s && n
                ? (s.classList.remove(Ts), this._queueCallback(r, e, !0))
                : r();
        }
        _transitionComplete(e, t, i) {
            if (t) {
                t.classList.remove(_s);
                const e = F.findOne(
                    ":scope > .dropdown-menu .active",
                    t.parentNode
                );
                e && e.classList.remove(_s),
                    "tab" === t.getAttribute("role") &&
                        t.setAttribute("aria-selected", !1);
            }
            e.classList.add(_s),
                "tab" === e.getAttribute("role") &&
                    e.setAttribute("aria-selected", !0),
                u(e),
                e.classList.contains(Es) && e.classList.add(Ts);
            let s = e.parentNode;
            if (
                (s && "LI" === s.nodeName && (s = s.parentNode),
                s && s.classList.contains("dropdown-menu"))
            ) {
                const t = e.closest(".dropdown");
                t &&
                    F.find(".dropdown-toggle", t).forEach((e) =>
                        e.classList.add(_s)
                    ),
                    e.setAttribute("aria-expanded", !0);
            }
            i && i();
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = Ms.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e]();
                }
            });
        }
    }
    z.on(
        document,
        "click.bs.tab.data-api",
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                d(this) || Ms.getOrCreateInstance(this).show();
        }
    ),
        g(Ms);
    const ks = "toast",
        Os = "hide",
        Ls = "show",
        $s = "showing",
        Is = { animation: "boolean", autohide: "boolean", delay: "number" },
        As = { animation: !0, autohide: !0, delay: 5e3 };
    class Ps extends j {
        constructor(e, t) {
            super(e),
                (this._config = this._getConfig(t)),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get DefaultType() {
            return Is;
        }
        static get Default() {
            return As;
        }
        static get NAME() {
            return ks;
        }
        show() {
            z.trigger(this._element, "show.bs.toast").defaultPrevented ||
                (this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade"),
                this._element.classList.remove(Os),
                u(this._element),
                this._element.classList.add(Ls),
                this._element.classList.add($s),
                this._queueCallback(
                    () => {
                        this._element.classList.remove($s),
                            z.trigger(this._element, "shown.bs.toast"),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                ));
        }
        hide() {
            this._element.classList.contains(Ls) &&
                (z.trigger(this._element, "hide.bs.toast").defaultPrevented ||
                    (this._element.classList.add($s),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(Os),
                                this._element.classList.remove($s),
                                this._element.classList.remove(Ls),
                                z.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    )));
        }
        dispose() {
            this._clearTimeout(),
                this._element.classList.contains(Ls) &&
                    this._element.classList.remove(Ls),
                super.dispose();
        }
        _getConfig(e) {
            return (
                (e = {
                    ...As,
                    ...X.getDataAttributes(this._element),
                    ...("object" == typeof e && e ? e : {}),
                }),
                o(ks, e, this.constructor.DefaultType),
                e
            );
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t;
            }
            if (t) return void this._clearTimeout();
            const i = e.relatedTarget;
            this._element === i ||
                this._element.contains(i) ||
                this._maybeScheduleHide();
        }
        _setListeners() {
            z.on(this._element, "mouseover.bs.toast", (e) =>
                this._onInteraction(e, !0)
            ),
                z.on(this._element, "mouseout.bs.toast", (e) =>
                    this._onInteraction(e, !1)
                ),
                z.on(this._element, "focusin.bs.toast", (e) =>
                    this._onInteraction(e, !0)
                ),
                z.on(this._element, "focusout.bs.toast", (e) =>
                    this._onInteraction(e, !1)
                );
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(e) {
            return this.each(function () {
                const t = Ps.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e])
                        throw new TypeError(`No method named "${e}"`);
                    t[e](this);
                }
            });
        }
    }
    return (
        H(Ps),
        g(Ps),
        {
            Alert: W,
            Button: q,
            Carousel: ne,
            Collapse: fe,
            Dropdown: di,
            Modal: Di,
            Offcanvas: Yi,
            Popover: fs,
            ScrollSpy: xs,
            Tab: Ms,
            Toast: Ps,
            Tooltip: cs,
        }
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e = e || self).GLightbox = t());
    })(this, function () {
        "use strict";
        function e(t) {
            return (e =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              "function" == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? "symbol"
                              : typeof e;
                      })(t);
        }
        function t(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
        }
        function i(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                    (s.configurable = !0),
                    "value" in s && (s.writable = !0),
                    Object.defineProperty(e, s.key, s);
            }
        }
        function s(e, t, s) {
            return t && i(e.prototype, t), s && i(e, s), e;
        }
        var n = Date.now();
        function r() {
            var e = {},
                t = !0,
                i = 0,
                s = arguments.length;
            "[object Boolean]" ===
                Object.prototype.toString.call(arguments[0]) &&
                ((t = arguments[0]), i++);
            for (
                var n = function (i) {
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) &&
                            (t &&
                            "[object Object]" ===
                                Object.prototype.toString.call(i[s])
                                ? (e[s] = r(!0, e[s], i[s]))
                                : (e[s] = i[s]));
                };
                i < s;
                i++
            ) {
                var a = arguments[i];
                n(a);
            }
            return e;
        }
        function a(e, t) {
            if (
                ((S(e) || e === window || e === document) && (e = [e]),
                M(e) || k(e) || (e = [e]),
                0 != $(e))
            )
                if (M(e) && !k(e))
                    for (
                        var i = e.length, s = 0;
                        s < i && !1 !== t.call(e[s], e[s], s, e);
                        s++
                    );
                else if (k(e))
                    for (var n in e)
                        if (L(e, n) && !1 === t.call(e[n], e[n], n, e)) break;
        }
        function o(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : null,
                i =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                s = (e[n] = e[n] || []),
                r = { all: s, evt: null, found: null };
            return (
                t &&
                    i &&
                    $(s) > 0 &&
                    a(s, function (e, s) {
                        if (e.eventName == t && e.fn.toString() == i.toString())
                            return (r.found = !0), (r.evt = s), !1;
                    }),
                r
            );
        }
        function l(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                i = t.onElement,
                s = t.withCallback,
                n = t.avoidDuplicate,
                r = void 0 === n || n,
                l = t.once,
                d = void 0 !== l && l,
                c = t.useCapture,
                h = void 0 !== c && c,
                u = arguments.length > 2 ? arguments[2] : void 0,
                p = i || [];
            function f(e) {
                E(s) && s.call(u, e, this), d && f.destroy();
            }
            return (
                T(p) && (p = document.querySelectorAll(p)),
                (f.destroy = function () {
                    a(p, function (t) {
                        var i = o(t, e, f);
                        i.found && i.all.splice(i.evt, 1),
                            t.removeEventListener &&
                                t.removeEventListener(e, f, h);
                    });
                }),
                a(p, function (t) {
                    var i = o(t, e, f);
                    ((t.addEventListener && r && !i.found) || !r) &&
                        (t.addEventListener(e, f, h),
                        i.all.push({ eventName: e, fn: f }));
                }),
                f
            );
        }
        function d(e, t) {
            a(t.split(" "), function (t) {
                return e.classList.add(t);
            });
        }
        function c(e, t) {
            a(t.split(" "), function (t) {
                return e.classList.remove(t);
            });
        }
        function h(e, t) {
            return e.classList.contains(t);
        }
        function u(e, t) {
            for (; e !== document.body; ) {
                if (!(e = e.parentElement)) return !1;
                if (
                    "function" == typeof e.matches
                        ? e.matches(t)
                        : e.msMatchesSelector(t)
                )
                    return e;
            }
        }
        function p(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
            if (!e || "" === t) return !1;
            if ("none" == t) return E(i) && i(), !1;
            var s = b(),
                n = t.split(" ");
            a(n, function (t) {
                d(e, "g" + t);
            }),
                l(s, {
                    onElement: e,
                    avoidDuplicate: !1,
                    once: !0,
                    withCallback: function (e, t) {
                        a(n, function (e) {
                            c(t, "g" + e);
                        }),
                            E(i) && i();
                    },
                });
        }
        function f(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "";
            if ("" == t)
                return (
                    (e.style.webkitTransform = ""),
                    (e.style.MozTransform = ""),
                    (e.style.msTransform = ""),
                    (e.style.OTransform = ""),
                    (e.style.transform = ""),
                    !1
                );
            (e.style.webkitTransform = t),
                (e.style.MozTransform = t),
                (e.style.msTransform = t),
                (e.style.OTransform = t),
                (e.style.transform = t);
        }
        function m(e) {
            e.style.display = "block";
        }
        function g(e) {
            e.style.display = "none";
        }
        function v(e) {
            var t = document.createDocumentFragment(),
                i = document.createElement("div");
            for (i.innerHTML = e; i.firstChild; ) t.appendChild(i.firstChild);
            return t;
        }
        function y() {
            return {
                width:
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth,
                height:
                    window.innerHeight ||
                    document.documentElement.clientHeight ||
                    document.body.clientHeight,
            };
        }
        function b() {
            var e,
                t = document.createElement("fakeelement"),
                i = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "animationend",
                    WebkitAnimation: "webkitAnimationEnd",
                };
            for (e in i) if (void 0 !== t.style[e]) return i[e];
        }
        function w(e, t, i, s) {
            if (e()) t();
            else {
                var n;
                i || (i = 100);
                var r = setInterval(function () {
                    e() && (clearInterval(r), n && clearTimeout(n), t());
                }, i);
                s &&
                    (n = setTimeout(function () {
                        clearInterval(r);
                    }, s));
            }
        }
        function x(e, t, i) {
            if (O(e)) console.error("Inject assets error");
            else if ((E(t) && ((i = t), (t = !1)), T(t) && t in window))
                E(i) && i();
            else {
                var s;
                if (-1 !== e.indexOf(".css")) {
                    if (
                        (s = document.querySelectorAll(
                            'link[href="' + e + '"]'
                        )) &&
                        s.length > 0
                    )
                        return void (E(i) && i());
                    var n = document.getElementsByTagName("head")[0],
                        r = n.querySelectorAll('link[rel="stylesheet"]'),
                        a = document.createElement("link");
                    return (
                        (a.rel = "stylesheet"),
                        (a.type = "text/css"),
                        (a.href = e),
                        (a.media = "all"),
                        r ? n.insertBefore(a, r[0]) : n.appendChild(a),
                        void (E(i) && i())
                    );
                }
                if (
                    (s = document.querySelectorAll(
                        'script[src="' + e + '"]'
                    )) &&
                    s.length > 0
                ) {
                    if (E(i)) {
                        if (T(t))
                            return (
                                w(
                                    function () {
                                        return void 0 !== window[t];
                                    },
                                    function () {
                                        i();
                                    }
                                ),
                                !1
                            );
                        i();
                    }
                } else {
                    var o = document.createElement("script");
                    (o.type = "text/javascript"),
                        (o.src = e),
                        (o.onload = function () {
                            if (E(i)) {
                                if (T(t))
                                    return (
                                        w(
                                            function () {
                                                return void 0 !== window[t];
                                            },
                                            function () {
                                                i();
                                            }
                                        ),
                                        !1
                                    );
                                i();
                            }
                        }),
                        document.body.appendChild(o);
                }
            }
        }
        function _() {
            return (
                "navigator" in window &&
                window.navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
                )
            );
        }
        function E(e) {
            return "function" == typeof e;
        }
        function T(e) {
            return "string" == typeof e;
        }
        function S(e) {
            return !(!e || !e.nodeType || 1 != e.nodeType);
        }
        function C(e) {
            return Array.isArray(e);
        }
        function M(e) {
            return e && e.length && isFinite(e.length);
        }
        function k(t) {
            return "object" === e(t) && null != t && !E(t) && !C(t);
        }
        function O(e) {
            return null == e;
        }
        function L(e, t) {
            return null !== e && hasOwnProperty.call(e, t);
        }
        function $(e) {
            if (k(e)) {
                if (e.keys) return e.keys().length;
                var t = 0;
                for (var i in e) L(e, i) && t++;
                return t;
            }
            return e.length;
        }
        function I(e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
        }
        function A() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : -1,
                t = document.querySelectorAll(
                    ".gbtn[data-taborder]:not(.disabled)"
                );
            if (!t.length) return !1;
            if (1 == t.length) return t[0];
            "string" == typeof e && (e = parseInt(e));
            var i = e < 0 ? 1 : e + 1;
            i > t.length && (i = "1");
            var s = [];
            a(t, function (e) {
                s.push(e.getAttribute("data-taborder"));
            });
            var n = s.filter(function (e) {
                    return e >= parseInt(i);
                }),
                r = n.sort()[0];
            return document.querySelector(
                '.gbtn[data-taborder="'.concat(r, '"]')
            );
        }
        function P(e) {
            if (e.events.hasOwnProperty("keyboard")) return !1;
            e.events.keyboard = l("keydown", {
                onElement: window,
                withCallback: function (t, i) {
                    var s = (t = t || window.event).keyCode;
                    if (9 == s) {
                        var n = document.querySelector(".gbtn.focused");
                        if (!n) {
                            var r =
                                !(
                                    !document.activeElement ||
                                    !document.activeElement.nodeName
                                ) &&
                                document.activeElement.nodeName.toLocaleLowerCase();
                            if (
                                "input" == r ||
                                "textarea" == r ||
                                "button" == r
                            )
                                return;
                        }
                        t.preventDefault();
                        var a = document.querySelectorAll(
                            ".gbtn[data-taborder]"
                        );
                        if (!a || a.length <= 0) return;
                        if (!n) {
                            var o = A();
                            return void (o && (o.focus(), d(o, "focused")));
                        }
                        var l = A(n.getAttribute("data-taborder"));
                        c(n, "focused"), l && (l.focus(), d(l, "focused"));
                    }
                    39 == s && e.nextSlide(),
                        37 == s && e.prevSlide(),
                        27 == s && e.close();
                },
            });
        }
        function z(e) {
            return Math.sqrt(e.x * e.x + e.y * e.y);
        }
        var D = (function () {
            function e(i) {
                t(this, e), (this.handlers = []), (this.el = i);
            }
            return (
                s(e, [
                    {
                        key: "add",
                        value: function (e) {
                            this.handlers.push(e);
                        },
                    },
                    {
                        key: "del",
                        value: function (e) {
                            e || (this.handlers = []);
                            for (var t = this.handlers.length; t >= 0; t--)
                                this.handlers[t] === e &&
                                    this.handlers.splice(t, 1);
                        },
                    },
                    {
                        key: "dispatch",
                        value: function () {
                            for (
                                var e = 0, t = this.handlers.length;
                                e < t;
                                e++
                            ) {
                                var i = this.handlers[e];
                                "function" == typeof i &&
                                    i.apply(this.el, arguments);
                            }
                        },
                    },
                ]),
                e
            );
        })();
        function N(e, t) {
            var i = new D(e);
            return i.add(t), i;
        }
        var j = (function () {
            function e(i, s) {
                t(this, e),
                    (this.element =
                        "string" == typeof i ? document.querySelector(i) : i),
                    (this.start = this.start.bind(this)),
                    (this.move = this.move.bind(this)),
                    (this.end = this.end.bind(this)),
                    (this.cancel = this.cancel.bind(this)),
                    this.element.addEventListener("touchstart", this.start, !1),
                    this.element.addEventListener("touchmove", this.move, !1),
                    this.element.addEventListener("touchend", this.end, !1),
                    this.element.addEventListener(
                        "touchcancel",
                        this.cancel,
                        !1
                    ),
                    (this.preV = { x: null, y: null }),
                    (this.pinchStartLen = null),
                    (this.zoom = 1),
                    (this.isDoubleTap = !1);
                var n = function () {};
                (this.rotate = N(this.element, s.rotate || n)),
                    (this.touchStart = N(this.element, s.touchStart || n)),
                    (this.multipointStart = N(
                        this.element,
                        s.multipointStart || n
                    )),
                    (this.multipointEnd = N(
                        this.element,
                        s.multipointEnd || n
                    )),
                    (this.pinch = N(this.element, s.pinch || n)),
                    (this.swipe = N(this.element, s.swipe || n)),
                    (this.tap = N(this.element, s.tap || n)),
                    (this.doubleTap = N(this.element, s.doubleTap || n)),
                    (this.longTap = N(this.element, s.longTap || n)),
                    (this.singleTap = N(this.element, s.singleTap || n)),
                    (this.pressMove = N(this.element, s.pressMove || n)),
                    (this.twoFingerPressMove = N(
                        this.element,
                        s.twoFingerPressMove || n
                    )),
                    (this.touchMove = N(this.element, s.touchMove || n)),
                    (this.touchEnd = N(this.element, s.touchEnd || n)),
                    (this.touchCancel = N(this.element, s.touchCancel || n)),
                    (this.translateContainer = this.element),
                    (this._cancelAllHandler = this.cancelAll.bind(this)),
                    window.addEventListener("scroll", this._cancelAllHandler),
                    (this.delta = null),
                    (this.last = null),
                    (this.now = null),
                    (this.tapTimeout = null),
                    (this.singleTapTimeout = null),
                    (this.longTapTimeout = null),
                    (this.swipeTimeout = null),
                    (this.x1 = this.x2 = this.y1 = this.y2 = null),
                    (this.preTapPosition = { x: null, y: null });
            }
            return (
                s(e, [
                    {
                        key: "start",
                        value: function (e) {
                            if (e.touches)
                                if (
                                    e.target &&
                                    e.target.nodeName &&
                                    ["a", "button", "input"].indexOf(
                                        e.target.nodeName.toLowerCase()
                                    ) >= 0
                                )
                                    console.log(
                                        "ignore drag for this touched element",
                                        e.target.nodeName.toLowerCase()
                                    );
                                else {
                                    (this.now = Date.now()),
                                        (this.x1 = e.touches[0].pageX),
                                        (this.y1 = e.touches[0].pageY),
                                        (this.delta =
                                            this.now - (this.last || this.now)),
                                        this.touchStart.dispatch(
                                            e,
                                            this.element
                                        ),
                                        null !== this.preTapPosition.x &&
                                            ((this.isDoubleTap =
                                                this.delta > 0 &&
                                                this.delta <= 250 &&
                                                Math.abs(
                                                    this.preTapPosition.x -
                                                        this.x1
                                                ) < 30 &&
                                                Math.abs(
                                                    this.preTapPosition.y -
                                                        this.y1
                                                ) < 30),
                                            this.isDoubleTap &&
                                                clearTimeout(
                                                    this.singleTapTimeout
                                                )),
                                        (this.preTapPosition.x = this.x1),
                                        (this.preTapPosition.y = this.y1),
                                        (this.last = this.now);
                                    var t = this.preV;
                                    if (e.touches.length > 1) {
                                        this._cancelLongTap(),
                                            this._cancelSingleTap();
                                        var i = {
                                            x: e.touches[1].pageX - this.x1,
                                            y: e.touches[1].pageY - this.y1,
                                        };
                                        (t.x = i.x),
                                            (t.y = i.y),
                                            (this.pinchStartLen = z(t)),
                                            this.multipointStart.dispatch(
                                                e,
                                                this.element
                                            );
                                    }
                                    (this._preventTap = !1),
                                        (this.longTapTimeout = setTimeout(
                                            function () {
                                                this.longTap.dispatch(
                                                    e,
                                                    this.element
                                                ),
                                                    (this._preventTap = !0);
                                            }.bind(this),
                                            750
                                        ));
                                }
                        },
                    },
                    {
                        key: "move",
                        value: function (e) {
                            if (e.touches) {
                                var t = this.preV,
                                    i = e.touches.length,
                                    s = e.touches[0].pageX,
                                    n = e.touches[0].pageY;
                                if (((this.isDoubleTap = !1), i > 1)) {
                                    var r = e.touches[1].pageX,
                                        a = e.touches[1].pageY,
                                        o = {
                                            x: e.touches[1].pageX - s,
                                            y: e.touches[1].pageY - n,
                                        };
                                    null !== t.x &&
                                        (this.pinchStartLen > 0 &&
                                            ((e.zoom =
                                                z(o) / this.pinchStartLen),
                                            this.pinch.dispatch(
                                                e,
                                                this.element
                                            )),
                                        (e.angle = (function (e, t) {
                                            var i = (function (e, t) {
                                                var i = z(e) * z(t);
                                                if (0 === i) return 0;
                                                var s =
                                                    (function (e, t) {
                                                        return (
                                                            e.x * t.x +
                                                            e.y * t.y
                                                        );
                                                    })(e, t) / i;
                                                return (
                                                    s > 1 && (s = 1),
                                                    Math.acos(s)
                                                );
                                            })(e, t);
                                            return (
                                                (function (e, t) {
                                                    return (
                                                        e.x * t.y - t.x * e.y
                                                    );
                                                })(e, t) > 0 && (i *= -1),
                                                (180 * i) / Math.PI
                                            );
                                        })(o, t)),
                                        this.rotate.dispatch(e, this.element)),
                                        (t.x = o.x),
                                        (t.y = o.y),
                                        null !== this.x2 && null !== this.sx2
                                            ? ((e.deltaX =
                                                  (s - this.x2 + r - this.sx2) /
                                                  2),
                                              (e.deltaY =
                                                  (n - this.y2 + a - this.sy2) /
                                                  2))
                                            : ((e.deltaX = 0), (e.deltaY = 0)),
                                        this.twoFingerPressMove.dispatch(
                                            e,
                                            this.element
                                        ),
                                        (this.sx2 = r),
                                        (this.sy2 = a);
                                } else {
                                    if (null !== this.x2) {
                                        (e.deltaX = s - this.x2),
                                            (e.deltaY = n - this.y2);
                                        var l = Math.abs(this.x1 - this.x2),
                                            d = Math.abs(this.y1 - this.y2);
                                        (l > 10 || d > 10) &&
                                            (this._preventTap = !0);
                                    } else (e.deltaX = 0), (e.deltaY = 0);
                                    this.pressMove.dispatch(e, this.element);
                                }
                                this.touchMove.dispatch(e, this.element),
                                    this._cancelLongTap(),
                                    (this.x2 = s),
                                    (this.y2 = n),
                                    i > 1 && e.preventDefault();
                            }
                        },
                    },
                    {
                        key: "end",
                        value: function (e) {
                            if (e.changedTouches) {
                                this._cancelLongTap();
                                var t = this;
                                e.touches.length < 2 &&
                                    (this.multipointEnd.dispatch(
                                        e,
                                        this.element
                                    ),
                                    (this.sx2 = this.sy2 = null)),
                                    (this.x2 &&
                                        Math.abs(this.x1 - this.x2) > 30) ||
                                    (this.y2 &&
                                        Math.abs(this.y1 - this.y2) > 30)
                                        ? ((e.direction = this._swipeDirection(
                                              this.x1,
                                              this.x2,
                                              this.y1,
                                              this.y2
                                          )),
                                          (this.swipeTimeout = setTimeout(
                                              function () {
                                                  t.swipe.dispatch(
                                                      e,
                                                      t.element
                                                  );
                                              },
                                              0
                                          )))
                                        : ((this.tapTimeout = setTimeout(
                                              function () {
                                                  t._preventTap ||
                                                      t.tap.dispatch(
                                                          e,
                                                          t.element
                                                      ),
                                                      t.isDoubleTap &&
                                                          (t.doubleTap.dispatch(
                                                              e,
                                                              t.element
                                                          ),
                                                          (t.isDoubleTap = !1));
                                              },
                                              0
                                          )),
                                          t.isDoubleTap ||
                                              (t.singleTapTimeout = setTimeout(
                                                  function () {
                                                      t.singleTap.dispatch(
                                                          e,
                                                          t.element
                                                      );
                                                  },
                                                  250
                                              ))),
                                    this.touchEnd.dispatch(e, this.element),
                                    (this.preV.x = 0),
                                    (this.preV.y = 0),
                                    (this.zoom = 1),
                                    (this.pinchStartLen = null),
                                    (this.x1 =
                                        this.x2 =
                                        this.y1 =
                                        this.y2 =
                                            null);
                            }
                        },
                    },
                    {
                        key: "cancelAll",
                        value: function () {
                            (this._preventTap = !0),
                                clearTimeout(this.singleTapTimeout),
                                clearTimeout(this.tapTimeout),
                                clearTimeout(this.longTapTimeout),
                                clearTimeout(this.swipeTimeout);
                        },
                    },
                    {
                        key: "cancel",
                        value: function (e) {
                            this.cancelAll(),
                                this.touchCancel.dispatch(e, this.element);
                        },
                    },
                    {
                        key: "_cancelLongTap",
                        value: function () {
                            clearTimeout(this.longTapTimeout);
                        },
                    },
                    {
                        key: "_cancelSingleTap",
                        value: function () {
                            clearTimeout(this.singleTapTimeout);
                        },
                    },
                    {
                        key: "_swipeDirection",
                        value: function (e, t, i, s) {
                            return Math.abs(e - t) >= Math.abs(i - s)
                                ? e - t > 0
                                    ? "Left"
                                    : "Right"
                                : i - s > 0
                                ? "Up"
                                : "Down";
                        },
                    },
                    {
                        key: "on",
                        value: function (e, t) {
                            this[e] && this[e].add(t);
                        },
                    },
                    {
                        key: "off",
                        value: function (e, t) {
                            this[e] && this[e].del(t);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return (
                                this.singleTapTimeout &&
                                    clearTimeout(this.singleTapTimeout),
                                this.tapTimeout &&
                                    clearTimeout(this.tapTimeout),
                                this.longTapTimeout &&
                                    clearTimeout(this.longTapTimeout),
                                this.swipeTimeout &&
                                    clearTimeout(this.swipeTimeout),
                                this.element.removeEventListener(
                                    "touchstart",
                                    this.start
                                ),
                                this.element.removeEventListener(
                                    "touchmove",
                                    this.move
                                ),
                                this.element.removeEventListener(
                                    "touchend",
                                    this.end
                                ),
                                this.element.removeEventListener(
                                    "touchcancel",
                                    this.cancel
                                ),
                                this.rotate.del(),
                                this.touchStart.del(),
                                this.multipointStart.del(),
                                this.multipointEnd.del(),
                                this.pinch.del(),
                                this.swipe.del(),
                                this.tap.del(),
                                this.doubleTap.del(),
                                this.longTap.del(),
                                this.singleTap.del(),
                                this.pressMove.del(),
                                this.twoFingerPressMove.del(),
                                this.touchMove.del(),
                                this.touchEnd.del(),
                                this.touchCancel.del(),
                                (this.preV =
                                    this.pinchStartLen =
                                    this.zoom =
                                    this.isDoubleTap =
                                    this.delta =
                                    this.last =
                                    this.now =
                                    this.tapTimeout =
                                    this.singleTapTimeout =
                                    this.longTapTimeout =
                                    this.swipeTimeout =
                                    this.x1 =
                                    this.x2 =
                                    this.y1 =
                                    this.y2 =
                                    this.preTapPosition =
                                    this.rotate =
                                    this.touchStart =
                                    this.multipointStart =
                                    this.multipointEnd =
                                    this.pinch =
                                    this.swipe =
                                    this.tap =
                                    this.doubleTap =
                                    this.longTap =
                                    this.singleTap =
                                    this.pressMove =
                                    this.touchMove =
                                    this.touchEnd =
                                    this.touchCancel =
                                    this.twoFingerPressMove =
                                        null),
                                window.removeEventListener(
                                    "scroll",
                                    this._cancelAllHandler
                                ),
                                null
                            );
                        },
                    },
                ]),
                e
            );
        })();
        function H(e) {
            var t = (function () {
                    var e,
                        t = document.createElement("fakeelement"),
                        i = {
                            transition: "transitionend",
                            OTransition: "oTransitionEnd",
                            MozTransition: "transitionend",
                            WebkitTransition: "webkitTransitionEnd",
                        };
                    for (e in i) if (void 0 !== t.style[e]) return i[e];
                })(),
                i =
                    window.innerWidth ||
                    document.documentElement.clientWidth ||
                    document.body.clientWidth,
                s = h(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
                n = u(s, ".ginner-container"),
                r = e.querySelector(".gslide-description");
            i > 769 && (s = n),
                d(s, "greset"),
                f(s, "translate3d(0, 0, 0)"),
                l(t, {
                    onElement: s,
                    once: !0,
                    withCallback: function (e, t) {
                        c(s, "greset");
                    },
                }),
                (s.style.opacity = ""),
                r && (r.style.opacity = "");
        }
        function W(e) {
            if (e.events.hasOwnProperty("touch")) return !1;
            var t,
                i,
                s,
                n = y(),
                r = n.width,
                a = n.height,
                o = !1,
                l = null,
                p = null,
                m = null,
                g = !1,
                v = 1,
                b = 1,
                w = !1,
                x = !1,
                _ = null,
                E = null,
                T = null,
                S = null,
                C = 0,
                M = 0,
                k = !1,
                O = !1,
                L = {},
                $ = {},
                I = 0,
                A = 0,
                P = document.getElementById("glightbox-slider"),
                z = document.querySelector(".goverlay"),
                D = new j(P, {
                    touchStart: function (t) {
                        if (
                            ((o = !0),
                            (h(t.targetTouches[0].target, "ginner-container") ||
                                u(t.targetTouches[0].target, ".gslide-desc") ||
                                "a" ==
                                    t.targetTouches[0].target.nodeName.toLowerCase()) &&
                                (o = !1),
                            u(t.targetTouches[0].target, ".gslide-inline") &&
                                !h(
                                    t.targetTouches[0].target.parentNode,
                                    "gslide-inline"
                                ) &&
                                (o = !1),
                            o)
                        ) {
                            if (
                                (($ = t.targetTouches[0]),
                                (L.pageX = t.targetTouches[0].pageX),
                                (L.pageY = t.targetTouches[0].pageY),
                                (I = t.targetTouches[0].clientX),
                                (A = t.targetTouches[0].clientY),
                                (l = e.activeSlide),
                                (p = l.querySelector(".gslide-media")),
                                (s = l.querySelector(".gslide-inline")),
                                (m = null),
                                h(p, "gslide-image") &&
                                    (m = p.querySelector("img")),
                                (window.innerWidth ||
                                    document.documentElement.clientWidth ||
                                    document.body.clientWidth) > 769 &&
                                    (p = l.querySelector(".ginner-container")),
                                c(z, "greset"),
                                t.pageX > 20 &&
                                    t.pageX < window.innerWidth - 20)
                            )
                                return;
                            t.preventDefault();
                        }
                    },
                    touchMove: function (n) {
                        if (o && (($ = n.targetTouches[0]), !w && !x)) {
                            if (s && s.offsetHeight > a) {
                                var l = L.pageX - $.pageX;
                                if (Math.abs(l) <= 13) return !1;
                            }
                            g = !0;
                            var d,
                                c = n.targetTouches[0].clientX,
                                h = n.targetTouches[0].clientY,
                                u = I - c,
                                v = A - h;
                            if (
                                (Math.abs(u) > Math.abs(v)
                                    ? ((k = !1), (O = !0))
                                    : ((O = !1), (k = !0)),
                                (t = $.pageX - L.pageX),
                                (C = (100 * t) / r),
                                (i = $.pageY - L.pageY),
                                (M = (100 * i) / a),
                                k &&
                                    m &&
                                    ((d = 1 - Math.abs(i) / a),
                                    (z.style.opacity = d),
                                    e.settings.touchFollowAxis && (C = 0)),
                                O &&
                                    ((d = 1 - Math.abs(t) / r),
                                    (p.style.opacity = d),
                                    e.settings.touchFollowAxis && (M = 0)),
                                !m)
                            )
                                return f(
                                    p,
                                    "translate3d(".concat(C, "%, 0, 0)")
                                );
                            f(
                                p,
                                "translate3d("
                                    .concat(C, "%, ")
                                    .concat(M, "%, 0)")
                            );
                        }
                    },
                    touchEnd: function () {
                        if (o) {
                            if (((g = !1), x || w))
                                return (T = _), void (S = E);
                            var t = Math.abs(parseInt(M)),
                                i = Math.abs(parseInt(C));
                            if (!(t > 29 && m))
                                return t < 29 && i < 25
                                    ? (d(z, "greset"),
                                      (z.style.opacity = 1),
                                      H(p))
                                    : void 0;
                            e.close();
                        }
                    },
                    multipointEnd: function () {
                        setTimeout(function () {
                            w = !1;
                        }, 50);
                    },
                    multipointStart: function () {
                        (w = !0), (v = b || 1);
                    },
                    pinch: function (e) {
                        if (!m || g) return !1;
                        (w = !0), (m.scaleX = m.scaleY = v * e.zoom);
                        var t = v * e.zoom;
                        if (((x = !0), t <= 1))
                            return (
                                (x = !1),
                                (t = 1),
                                (S = null),
                                (T = null),
                                (_ = null),
                                (E = null),
                                void m.setAttribute("style", "")
                            );
                        t > 4.5 && (t = 4.5),
                            (m.style.transform = "scale3d("
                                .concat(t, ", ")
                                .concat(t, ", 1)")),
                            (b = t);
                    },
                    pressMove: function (e) {
                        if (x && !w) {
                            var t = $.pageX - L.pageX,
                                i = $.pageY - L.pageY;
                            T && (t += T), S && (i += S), (_ = t), (E = i);
                            var s = "translate3d("
                                .concat(t, "px, ")
                                .concat(i, "px, 0)");
                            b &&
                                (s += " scale3d("
                                    .concat(b, ", ")
                                    .concat(b, ", 1)")),
                                f(m, s);
                        }
                    },
                    swipe: function (t) {
                        if (!x)
                            if (w) w = !1;
                            else {
                                if ("Left" == t.direction) {
                                    if (e.index == e.elements.length - 1)
                                        return H(p);
                                    e.nextSlide();
                                }
                                if ("Right" == t.direction) {
                                    if (0 == e.index) return H(p);
                                    e.prevSlide();
                                }
                            }
                    },
                });
            e.events.touch = D;
        }
        var B = (function () {
                function e(i, s) {
                    var n = this,
                        r =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : null;
                    if (
                        (t(this, e),
                        (this.img = i),
                        (this.slide = s),
                        (this.onclose = r),
                        this.img.setZoomEvents)
                    )
                        return !1;
                    (this.active = !1),
                        (this.zoomedIn = !1),
                        (this.dragging = !1),
                        (this.currentX = null),
                        (this.currentY = null),
                        (this.initialX = null),
                        (this.initialY = null),
                        (this.xOffset = 0),
                        (this.yOffset = 0),
                        this.img.addEventListener(
                            "mousedown",
                            function (e) {
                                return n.dragStart(e);
                            },
                            !1
                        ),
                        this.img.addEventListener(
                            "mouseup",
                            function (e) {
                                return n.dragEnd(e);
                            },
                            !1
                        ),
                        this.img.addEventListener(
                            "mousemove",
                            function (e) {
                                return n.drag(e);
                            },
                            !1
                        ),
                        this.img.addEventListener(
                            "click",
                            function (e) {
                                return n.slide.classList.contains(
                                    "dragging-nav"
                                )
                                    ? (n.zoomOut(), !1)
                                    : n.zoomedIn
                                    ? void (
                                          n.zoomedIn &&
                                          !n.dragging &&
                                          n.zoomOut()
                                      )
                                    : n.zoomIn();
                            },
                            !1
                        ),
                        (this.img.setZoomEvents = !0);
                }
                return (
                    s(e, [
                        {
                            key: "zoomIn",
                            value: function () {
                                var e = this.widowWidth();
                                if (!(this.zoomedIn || e <= 768)) {
                                    var t = this.img;
                                    if (
                                        (t.setAttribute(
                                            "data-style",
                                            t.getAttribute("style")
                                        ),
                                        (t.style.maxWidth =
                                            t.naturalWidth + "px"),
                                        (t.style.maxHeight =
                                            t.naturalHeight + "px"),
                                        t.naturalWidth > e)
                                    ) {
                                        var i = e / 2 - t.naturalWidth / 2;
                                        this.setTranslate(
                                            this.img.parentNode,
                                            i,
                                            0
                                        );
                                    }
                                    this.slide.classList.add("zoomed"),
                                        (this.zoomedIn = !0);
                                }
                            },
                        },
                        {
                            key: "zoomOut",
                            value: function () {
                                this.img.parentNode.setAttribute("style", ""),
                                    this.img.setAttribute(
                                        "style",
                                        this.img.getAttribute("data-style")
                                    ),
                                    this.slide.classList.remove("zoomed"),
                                    (this.zoomedIn = !1),
                                    (this.currentX = null),
                                    (this.currentY = null),
                                    (this.initialX = null),
                                    (this.initialY = null),
                                    (this.xOffset = 0),
                                    (this.yOffset = 0),
                                    this.onclose &&
                                        "function" == typeof this.onclose &&
                                        this.onclose();
                            },
                        },
                        {
                            key: "dragStart",
                            value: function (e) {
                                e.preventDefault(),
                                    this.zoomedIn
                                        ? ("touchstart" === e.type
                                              ? ((this.initialX =
                                                    e.touches[0].clientX -
                                                    this.xOffset),
                                                (this.initialY =
                                                    e.touches[0].clientY -
                                                    this.yOffset))
                                              : ((this.initialX =
                                                    e.clientX - this.xOffset),
                                                (this.initialY =
                                                    e.clientY - this.yOffset)),
                                          e.target === this.img &&
                                              ((this.active = !0),
                                              this.img.classList.add(
                                                  "dragging"
                                              )))
                                        : (this.active = !1);
                            },
                        },
                        {
                            key: "dragEnd",
                            value: function (e) {
                                var t = this;
                                e.preventDefault(),
                                    (this.initialX = this.currentX),
                                    (this.initialY = this.currentY),
                                    (this.active = !1),
                                    setTimeout(function () {
                                        (t.dragging = !1),
                                            (t.img.isDragging = !1),
                                            t.img.classList.remove("dragging");
                                    }, 100);
                            },
                        },
                        {
                            key: "drag",
                            value: function (e) {
                                this.active &&
                                    (e.preventDefault(),
                                    "touchmove" === e.type
                                        ? ((this.currentX =
                                              e.touches[0].clientX -
                                              this.initialX),
                                          (this.currentY =
                                              e.touches[0].clientY -
                                              this.initialY))
                                        : ((this.currentX =
                                              e.clientX - this.initialX),
                                          (this.currentY =
                                              e.clientY - this.initialY)),
                                    (this.xOffset = this.currentX),
                                    (this.yOffset = this.currentY),
                                    (this.img.isDragging = !0),
                                    (this.dragging = !0),
                                    this.setTranslate(
                                        this.img,
                                        this.currentX,
                                        this.currentY
                                    ));
                            },
                        },
                        {
                            key: "onMove",
                            value: function (e) {
                                if (this.zoomedIn) {
                                    var t =
                                            e.clientX -
                                            this.img.naturalWidth / 2,
                                        i =
                                            e.clientY -
                                            this.img.naturalHeight / 2;
                                    this.setTranslate(this.img, t, i);
                                }
                            },
                        },
                        {
                            key: "setTranslate",
                            value: function (e, t, i) {
                                e.style.transform =
                                    "translate3d(" + t + "px, " + i + "px, 0)";
                            },
                        },
                        {
                            key: "widowWidth",
                            value: function () {
                                return (
                                    window.innerWidth ||
                                    document.documentElement.clientWidth ||
                                    document.body.clientWidth
                                );
                            },
                        },
                    ]),
                    e
                );
            })(),
            q = (function () {
                function e() {
                    var i = this,
                        s =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                    t(this, e);
                    var n = s.dragEl,
                        r = s.toleranceX,
                        a = void 0 === r ? 40 : r,
                        o = s.toleranceY,
                        l = void 0 === o ? 65 : o,
                        d = s.slide,
                        c = void 0 === d ? null : d,
                        h = s.instance,
                        u = void 0 === h ? null : h;
                    (this.el = n),
                        (this.active = !1),
                        (this.dragging = !1),
                        (this.currentX = null),
                        (this.currentY = null),
                        (this.initialX = null),
                        (this.initialY = null),
                        (this.xOffset = 0),
                        (this.yOffset = 0),
                        (this.direction = null),
                        (this.lastDirection = null),
                        (this.toleranceX = a),
                        (this.toleranceY = l),
                        (this.toleranceReached = !1),
                        (this.dragContainer = this.el),
                        (this.slide = c),
                        (this.instance = u),
                        this.el.addEventListener(
                            "mousedown",
                            function (e) {
                                return i.dragStart(e);
                            },
                            !1
                        ),
                        this.el.addEventListener(
                            "mouseup",
                            function (e) {
                                return i.dragEnd(e);
                            },
                            !1
                        ),
                        this.el.addEventListener(
                            "mousemove",
                            function (e) {
                                return i.drag(e);
                            },
                            !1
                        );
                }
                return (
                    s(e, [
                        {
                            key: "dragStart",
                            value: function (e) {
                                if (this.slide.classList.contains("zoomed"))
                                    this.active = !1;
                                else {
                                    "touchstart" === e.type
                                        ? ((this.initialX =
                                              e.touches[0].clientX -
                                              this.xOffset),
                                          (this.initialY =
                                              e.touches[0].clientY -
                                              this.yOffset))
                                        : ((this.initialX =
                                              e.clientX - this.xOffset),
                                          (this.initialY =
                                              e.clientY - this.yOffset));
                                    var t = e.target.nodeName.toLowerCase();
                                    e.target.classList.contains("nodrag") ||
                                    u(e.target, ".nodrag") ||
                                    -1 !==
                                        [
                                            "input",
                                            "select",
                                            "textarea",
                                            "button",
                                            "a",
                                        ].indexOf(t)
                                        ? (this.active = !1)
                                        : (e.preventDefault(),
                                          (e.target === this.el ||
                                              ("img" !== t &&
                                                  u(
                                                      e.target,
                                                      ".gslide-inline"
                                                  ))) &&
                                              ((this.active = !0),
                                              this.el.classList.add("dragging"),
                                              (this.dragContainer = u(
                                                  e.target,
                                                  ".ginner-container"
                                              ))));
                                }
                            },
                        },
                        {
                            key: "dragEnd",
                            value: function (e) {
                                var t = this;
                                e && e.preventDefault(),
                                    (this.initialX = 0),
                                    (this.initialY = 0),
                                    (this.currentX = null),
                                    (this.currentY = null),
                                    (this.initialX = null),
                                    (this.initialY = null),
                                    (this.xOffset = 0),
                                    (this.yOffset = 0),
                                    (this.active = !1),
                                    this.doSlideChange &&
                                        ((this.instance.preventOutsideClick =
                                            !0),
                                        "right" == this.doSlideChange &&
                                            this.instance.prevSlide(),
                                        "left" == this.doSlideChange &&
                                            this.instance.nextSlide()),
                                    this.doSlideClose && this.instance.close(),
                                    this.toleranceReached ||
                                        this.setTranslate(
                                            this.dragContainer,
                                            0,
                                            0,
                                            !0
                                        ),
                                    setTimeout(function () {
                                        (t.instance.preventOutsideClick = !1),
                                            (t.toleranceReached = !1),
                                            (t.lastDirection = null),
                                            (t.dragging = !1),
                                            (t.el.isDragging = !1),
                                            t.el.classList.remove("dragging"),
                                            t.slide.classList.remove(
                                                "dragging-nav"
                                            ),
                                            (t.dragContainer.style.transform =
                                                ""),
                                            (t.dragContainer.style.transition =
                                                "");
                                    }, 100);
                            },
                        },
                        {
                            key: "drag",
                            value: function (e) {
                                if (this.active) {
                                    e.preventDefault(),
                                        this.slide.classList.add(
                                            "dragging-nav"
                                        ),
                                        "touchmove" === e.type
                                            ? ((this.currentX =
                                                  e.touches[0].clientX -
                                                  this.initialX),
                                              (this.currentY =
                                                  e.touches[0].clientY -
                                                  this.initialY))
                                            : ((this.currentX =
                                                  e.clientX - this.initialX),
                                              (this.currentY =
                                                  e.clientY - this.initialY)),
                                        (this.xOffset = this.currentX),
                                        (this.yOffset = this.currentY),
                                        (this.el.isDragging = !0),
                                        (this.dragging = !0),
                                        (this.doSlideChange = !1),
                                        (this.doSlideClose = !1);
                                    var t = Math.abs(this.currentX),
                                        i = Math.abs(this.currentY);
                                    if (
                                        t > 0 &&
                                        t >= Math.abs(this.currentY) &&
                                        (!this.lastDirection ||
                                            "x" == this.lastDirection)
                                    ) {
                                        (this.yOffset = 0),
                                            (this.lastDirection = "x"),
                                            this.setTranslate(
                                                this.dragContainer,
                                                this.currentX,
                                                0
                                            );
                                        var s = this.shouldChange();
                                        if (
                                            (!this.instance.settings
                                                .dragAutoSnap &&
                                                s &&
                                                (this.doSlideChange = s),
                                            this.instance.settings
                                                .dragAutoSnap && s)
                                        )
                                            return (
                                                (this.instance.preventOutsideClick =
                                                    !0),
                                                (this.toleranceReached = !0),
                                                (this.active = !1),
                                                (this.instance.preventOutsideClick =
                                                    !0),
                                                this.dragEnd(null),
                                                "right" == s &&
                                                    this.instance.prevSlide(),
                                                void (
                                                    "left" == s &&
                                                    this.instance.nextSlide()
                                                )
                                            );
                                    }
                                    if (
                                        this.toleranceY > 0 &&
                                        i > 0 &&
                                        i >= t &&
                                        (!this.lastDirection ||
                                            "y" == this.lastDirection)
                                    ) {
                                        (this.xOffset = 0),
                                            (this.lastDirection = "y"),
                                            this.setTranslate(
                                                this.dragContainer,
                                                0,
                                                this.currentY
                                            );
                                        var n = this.shouldClose();
                                        return (
                                            !this.instance.settings
                                                .dragAutoSnap &&
                                                n &&
                                                (this.doSlideClose = !0),
                                            void (
                                                this.instance.settings
                                                    .dragAutoSnap &&
                                                n &&
                                                this.instance.close()
                                            )
                                        );
                                    }
                                }
                            },
                        },
                        {
                            key: "shouldChange",
                            value: function () {
                                var e = !1;
                                if (
                                    Math.abs(this.currentX) >= this.toleranceX
                                ) {
                                    var t =
                                        this.currentX > 0 ? "right" : "left";
                                    (("left" == t &&
                                        this.slide !==
                                            this.slide.parentNode.lastChild) ||
                                        ("right" == t &&
                                            this.slide !==
                                                this.slide.parentNode
                                                    .firstChild)) &&
                                        (e = t);
                                }
                                return e;
                            },
                        },
                        {
                            key: "shouldClose",
                            value: function () {
                                var e = !1;
                                return (
                                    Math.abs(this.currentY) >=
                                        this.toleranceY && (e = !0),
                                    e
                                );
                            },
                        },
                        {
                            key: "setTranslate",
                            value: function (e, t, i) {
                                var s =
                                    arguments.length > 3 &&
                                    void 0 !== arguments[3] &&
                                    arguments[3];
                                (e.style.transition = s ? "all .2s ease" : ""),
                                    (e.style.transform = "translate3d("
                                        .concat(t, "px, ")
                                        .concat(i, "px, 0)"));
                            },
                        },
                    ]),
                    e
                );
            })();
        function Y(e, t, i, s) {
            var n = e.querySelector(".gslide-media"),
                r = new Image(),
                a = "gSlideTitle_" + i,
                o = "gSlideDesc_" + i;
            r.addEventListener(
                "load",
                function () {
                    E(s) && s();
                },
                !1
            ),
                (r.src = t.href),
                "" != t.sizes &&
                    "" != t.srcset &&
                    ((r.sizes = t.sizes), (r.srcset = t.srcset)),
                (r.alt = ""),
                O(t.alt) || "" === t.alt || (r.alt = t.alt),
                "" !== t.title && r.setAttribute("aria-labelledby", a),
                "" !== t.description && r.setAttribute("aria-describedby", o),
                t.hasOwnProperty("_hasCustomWidth") &&
                    t._hasCustomWidth &&
                    (r.style.width = t.width),
                t.hasOwnProperty("_hasCustomHeight") &&
                    t._hasCustomHeight &&
                    (r.style.height = t.height),
                n.insertBefore(r, n.firstChild);
        }
        function R(e, t, i, s) {
            var n = this,
                r = e.querySelector(".ginner-container"),
                a = "gvideo" + i,
                o = e.querySelector(".gslide-media"),
                l = this.getAllPlayers();
            d(r, "gvideo-container"),
                o.insertBefore(
                    v('<div class="gvideo-wrapper"></div>'),
                    o.firstChild
                );
            var c = e.querySelector(".gvideo-wrapper");
            x(this.settings.plyr.css, "Plyr");
            var h = t.href,
                u = location.protocol.replace(":", ""),
                p = "",
                f = "",
                m = !1;
            "file" == u && (u = "http"),
                (o.style.maxWidth = t.width),
                x(this.settings.plyr.js, "Plyr", function () {
                    if (h.match(/vimeo\.com\/([0-9]*)/)) {
                        var r = /vimeo.*\/(\d+)/i.exec(h);
                        (p = "vimeo"), (f = r[1]);
                    }
                    if (
                        h.match(
                            /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                        ) ||
                        h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                        h.match(
                            /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                        )
                    ) {
                        var o = (function (e) {
                            return void 0 !==
                                (e = e
                                    .replace(/(>|<)/gi, "")
                                    .split(
                                        /(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/
                                    ))[2]
                                ? e[2].split(/[^0-9a-z_\-]/i)[0]
                                : e;
                        })(h);
                        (p = "youtube"), (f = o);
                    }
                    if (null !== h.match(/\.(mp4|ogg|webm|mov)$/)) {
                        p = "local";
                        var u = '<video id="' + a + '" ';
                        (u += 'style="background:#000; max-width: '.concat(
                            t.width,
                            ';" '
                        )),
                            (u += 'preload="metadata" '),
                            (u += 'x-webkit-airplay="allow" '),
                            (u += "playsinline "),
                            (u += "controls "),
                            (u += 'class="gvideo-local">');
                        var g = h.toLowerCase().split(".").pop(),
                            y = { mp4: "", ogg: "", webm: "" };
                        for (var b in ((y[(g = "mov" == g ? "mp4" : g)] = h),
                        y))
                            if (y.hasOwnProperty(b)) {
                                var x = y[b];
                                t.hasOwnProperty(b) && (x = t[b]),
                                    "" !== x &&
                                        (u += '<source src="'
                                            .concat(x, '" type="video/')
                                            .concat(b, '">'));
                            }
                        m = v((u += "</video>"));
                    }
                    var _ =
                        m ||
                        v(
                            '<div id="'
                                .concat(a, '" data-plyr-provider="')
                                .concat(p, '" data-plyr-embed-id="')
                                .concat(f, '"></div>')
                        );
                    d(c, "".concat(p, "-video gvideo")),
                        c.appendChild(_),
                        c.setAttribute("data-id", a),
                        c.setAttribute("data-index", i);
                    var T = L(n.settings.plyr, "config")
                            ? n.settings.plyr.config
                            : {},
                        S = new Plyr("#" + a, T);
                    S.on("ready", function (e) {
                        var t = e.detail.plyr;
                        (l[a] = t), E(s) && s();
                    }),
                        w(
                            function () {
                                return (
                                    e.querySelector("iframe") &&
                                    "true" ==
                                        e.querySelector("iframe").dataset.ready
                                );
                            },
                            function () {
                                n.resize(e);
                            }
                        ),
                        S.on("enterfullscreen", X),
                        S.on("exitfullscreen", X);
                });
        }
        function X(e) {
            var t = u(e.target, ".gslide-media");
            "enterfullscreen" == e.type && d(t, "fullscreen"),
                "exitfullscreen" == e.type && c(t, "fullscreen");
        }
        function F(e, t, i, s) {
            var n,
                r = this,
                a = e.querySelector(".gslide-media"),
                o =
                    !(!L(t, "href") || !t.href) &&
                    t.href.split("#").pop().trim(),
                c = !(!L(t, "content") || !t.content) && t.content;
            if (
                c &&
                (T(c) &&
                    (n = v(
                        '<div class="ginlined-content">'.concat(c, "</div>")
                    )),
                S(c))
            ) {
                "none" == c.style.display && (c.style.display = "block");
                var h = document.createElement("div");
                (h.className = "ginlined-content"), h.appendChild(c), (n = h);
            }
            if (o) {
                var u = document.getElementById(o);
                if (!u) return !1;
                var p = u.cloneNode(!0);
                (p.style.height = t.height),
                    (p.style.maxWidth = t.width),
                    d(p, "ginlined-content"),
                    (n = p);
            }
            if (!n)
                return (
                    console.error("Unable to append inline slide content", t),
                    !1
                );
            (a.style.height = t.height),
                (a.style.width = t.width),
                a.appendChild(n),
                (this.events["inlineclose" + o] = l("click", {
                    onElement: a.querySelectorAll(".gtrigger-close"),
                    withCallback: function (e) {
                        e.preventDefault(), r.close();
                    },
                })),
                E(s) && s();
        }
        function V(e, t, i, s) {
            var n = e.querySelector(".gslide-media"),
                r = (function (e) {
                    var t = e.url,
                        i = e.allow,
                        s = e.callback,
                        n = e.appendTo,
                        r = document.createElement("iframe");
                    return (
                        (r.className = "vimeo-video gvideo"),
                        (r.src = t),
                        (r.style.width = "100%"),
                        (r.style.height = "100%"),
                        i && r.setAttribute("allow", i),
                        (r.onload = function () {
                            d(r, "node-ready"), E(s) && s();
                        }),
                        n && n.appendChild(r),
                        r
                    );
                })({ url: t.href, callback: s });
            (n.parentNode.style.maxWidth = t.width),
                (n.parentNode.style.height = t.height),
                n.appendChild(r);
        }
        var G = (function () {
                function e() {
                    var i =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    t(this, e),
                        (this.defaults = {
                            href: "",
                            sizes: "",
                            srcset: "",
                            title: "",
                            type: "",
                            description: "",
                            alt: "",
                            descPosition: "bottom",
                            effect: "",
                            width: "",
                            height: "",
                            content: !1,
                            zoomable: !0,
                            draggable: !0,
                        }),
                        k(i) && (this.defaults = r(this.defaults, i));
                }
                return (
                    s(e, [
                        {
                            key: "sourceType",
                            value: function (e) {
                                var t = e;
                                return null !==
                                    (e = e.toLowerCase()).match(
                                        /\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/
                                    )
                                    ? "image"
                                    : e.match(
                                          /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                                      ) ||
                                      e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                                      e.match(
                                          /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                                      ) ||
                                      e.match(/vimeo\.com\/([0-9]*)/) ||
                                      null !== e.match(/\.(mp4|ogg|webm|mov)/)
                                    ? "video"
                                    : null !==
                                      e.match(/\.(mp3|wav|wma|aac|ogg)/)
                                    ? "audio"
                                    : e.indexOf("#") > -1 &&
                                      "" !== t.split("#").pop().trim()
                                    ? "inline"
                                    : e.indexOf("goajax=true") > -1
                                    ? "ajax"
                                    : "external";
                            },
                        },
                        {
                            key: "parseConfig",
                            value: function (e, t) {
                                var i = this,
                                    s = r(
                                        { descPosition: t.descPosition },
                                        this.defaults
                                    );
                                if (k(e) && !S(e)) {
                                    L(e, "type") ||
                                        (L(e, "content") && e.content
                                            ? (e.type = "inline")
                                            : L(e, "href") &&
                                              (e.type = this.sourceType(
                                                  e.href
                                              )));
                                    var n = r(s, e);
                                    return this.setSize(n, t), n;
                                }
                                var o = "",
                                    l = e.getAttribute("data-glightbox"),
                                    d = e.nodeName.toLowerCase();
                                if (
                                    ("a" === d && (o = e.href),
                                    "img" === d &&
                                        ((o = e.src), (s.alt = e.alt)),
                                    (s.href = o),
                                    a(s, function (n, r) {
                                        L(t, r) &&
                                            "width" !== r &&
                                            (s[r] = t[r]);
                                        var a = e.dataset[r];
                                        O(a) || (s[r] = i.sanitizeValue(a));
                                    }),
                                    s.content && (s.type = "inline"),
                                    !s.type &&
                                        o &&
                                        (s.type = this.sourceType(o)),
                                    O(l))
                                ) {
                                    if (!s.title && "a" == d) {
                                        var c = e.title;
                                        O(c) || "" === c || (s.title = c);
                                    }
                                    if (!s.title && "img" == d) {
                                        var h = e.alt;
                                        O(h) || "" === h || (s.title = h);
                                    }
                                } else {
                                    var u = [];
                                    a(s, function (e, t) {
                                        u.push(";\\s?" + t);
                                    }),
                                        (u = u.join("\\s?:|")),
                                        "" !== l.trim() &&
                                            a(s, function (e, t) {
                                                var n = l,
                                                    r = new RegExp(
                                                        "s?" +
                                                            t +
                                                            "s?:s?(.*?)(" +
                                                            u +
                                                            "s?:|$)"
                                                    ),
                                                    a = n.match(r);
                                                if (a && a.length && a[1]) {
                                                    var o = a[1]
                                                        .trim()
                                                        .replace(/;\s*$/, "");
                                                    s[t] = i.sanitizeValue(o);
                                                }
                                            });
                                }
                                if (
                                    s.description &&
                                    "." === s.description.substring(0, 1)
                                ) {
                                    var p;
                                    try {
                                        p = document.querySelector(
                                            s.description
                                        ).innerHTML;
                                    } catch (e) {
                                        if (!(e instanceof DOMException))
                                            throw e;
                                    }
                                    p && (s.description = p);
                                }
                                if (!s.description) {
                                    var f = e.querySelector(".glightbox-desc");
                                    f && (s.description = f.innerHTML);
                                }
                                return (
                                    this.setSize(s, t, e),
                                    (this.slideConfig = s),
                                    s
                                );
                            },
                        },
                        {
                            key: "setSize",
                            value: function (e, t) {
                                var i =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2]
                                            ? arguments[2]
                                            : null,
                                    s =
                                        "video" == e.type
                                            ? this.checkSize(t.videosWidth)
                                            : this.checkSize(t.width),
                                    n = this.checkSize(t.height);
                                return (
                                    (e.width =
                                        L(e, "width") && "" !== e.width
                                            ? this.checkSize(e.width)
                                            : s),
                                    (e.height =
                                        L(e, "height") && "" !== e.height
                                            ? this.checkSize(e.height)
                                            : n),
                                    i &&
                                        "image" == e.type &&
                                        ((e._hasCustomWidth =
                                            !!i.dataset.width),
                                        (e._hasCustomHeight =
                                            !!i.dataset.height)),
                                    e
                                );
                            },
                        },
                        {
                            key: "checkSize",
                            value: function (e) {
                                return I(e) ? "".concat(e, "px") : e;
                            },
                        },
                        {
                            key: "sanitizeValue",
                            value: function (e) {
                                return "true" !== e && "false" !== e
                                    ? e
                                    : "true" === e;
                            },
                        },
                    ]),
                    e
                );
            })(),
            U = (function () {
                function e(i, s, n) {
                    t(this, e),
                        (this.element = i),
                        (this.instance = s),
                        (this.index = n);
                }
                return (
                    s(e, [
                        {
                            key: "setContent",
                            value: function () {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null,
                                    i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1];
                                if (h(t, "loaded")) return !1;
                                var s = this.instance.settings,
                                    n = this.slideConfig,
                                    r = _();
                                E(s.beforeSlideLoad) &&
                                    s.beforeSlideLoad({
                                        index: this.index,
                                        slide: t,
                                        player: !1,
                                    });
                                var a = n.type,
                                    o = n.descPosition,
                                    l = t.querySelector(".gslide-media"),
                                    c = t.querySelector(".gslide-title"),
                                    u = t.querySelector(".gslide-desc"),
                                    p = t.querySelector(".gdesc-inner"),
                                    f = i,
                                    m = "gSlideTitle_" + this.index,
                                    g = "gSlideDesc_" + this.index;
                                if (
                                    (E(s.afterSlideLoad) &&
                                        (f = function () {
                                            E(i) && i(),
                                                s.afterSlideLoad({
                                                    index: e.index,
                                                    slide: t,
                                                    player: e.instance.getSlidePlayerInstance(
                                                        e.index
                                                    ),
                                                });
                                        }),
                                    "" == n.title && "" == n.description
                                        ? p &&
                                          p.parentNode.parentNode.removeChild(
                                              p.parentNode
                                          )
                                        : (c && "" !== n.title
                                              ? ((c.id = m),
                                                (c.innerHTML = n.title))
                                              : c.parentNode.removeChild(c),
                                          u && "" !== n.description
                                              ? ((u.id = g),
                                                r && s.moreLength > 0
                                                    ? ((n.smallDescription =
                                                          this.slideShortDesc(
                                                              n.description,
                                                              s.moreLength,
                                                              s.moreText
                                                          )),
                                                      (u.innerHTML =
                                                          n.smallDescription),
                                                      this.descriptionEvents(
                                                          u,
                                                          n
                                                      ))
                                                    : (u.innerHTML =
                                                          n.description))
                                              : u.parentNode.removeChild(u),
                                          d(l.parentNode, "desc-".concat(o)),
                                          d(
                                              p.parentNode,
                                              "description-".concat(o)
                                          )),
                                    d(l, "gslide-".concat(a)),
                                    d(t, "loaded"),
                                    "video" !== a)
                                ) {
                                    if ("external" !== a)
                                        return "inline" === a
                                            ? (F.apply(this.instance, [
                                                  t,
                                                  n,
                                                  this.index,
                                                  f,
                                              ]),
                                              void (
                                                  n.draggable &&
                                                  new q({
                                                      dragEl: t.querySelector(
                                                          ".gslide-inline"
                                                      ),
                                                      toleranceX:
                                                          s.dragToleranceX,
                                                      toleranceY:
                                                          s.dragToleranceY,
                                                      slide: t,
                                                      instance: this.instance,
                                                  })
                                              ))
                                            : void ("image" !== a
                                                  ? E(f) && f()
                                                  : Y(
                                                        t,
                                                        n,
                                                        this.index,
                                                        function () {
                                                            var i =
                                                                t.querySelector(
                                                                    "img"
                                                                );
                                                            n.draggable &&
                                                                new q({
                                                                    dragEl: i,
                                                                    toleranceX:
                                                                        s.dragToleranceX,
                                                                    toleranceY:
                                                                        s.dragToleranceY,
                                                                    slide: t,
                                                                    instance:
                                                                        e.instance,
                                                                }),
                                                                n.zoomable &&
                                                                    i.naturalWidth >
                                                                        i.offsetWidth &&
                                                                    (d(
                                                                        i,
                                                                        "zoomable"
                                                                    ),
                                                                    new B(
                                                                        i,
                                                                        t,
                                                                        function () {
                                                                            e.instance.resize();
                                                                        }
                                                                    )),
                                                                E(f) && f();
                                                        }
                                                    ));
                                    V.apply(this, [t, n, this.index, f]);
                                } else
                                    R.apply(this.instance, [
                                        t,
                                        n,
                                        this.index,
                                        f,
                                    ]);
                            },
                        },
                        {
                            key: "slideShortDesc",
                            value: function (e) {
                                var t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 50,
                                    i =
                                        arguments.length > 2 &&
                                        void 0 !== arguments[2] &&
                                        arguments[2],
                                    s = document.createElement("div");
                                s.innerHTML = e;
                                var n = s.innerText,
                                    r = i;
                                if ((e = n.trim()).length <= t) return e;
                                var a = e.substr(0, t - 1);
                                return r
                                    ? ((s = null),
                                      a +
                                          '... <a href="#" class="desc-more">' +
                                          i +
                                          "</a>")
                                    : a;
                            },
                        },
                        {
                            key: "descriptionEvents",
                            value: function (e, t) {
                                var i = this,
                                    s = e.querySelector(".desc-more");
                                if (!s) return !1;
                                l("click", {
                                    onElement: s,
                                    withCallback: function (e, s) {
                                        e.preventDefault();
                                        var n = document.body,
                                            r = u(s, ".gslide-desc");
                                        if (!r) return !1;
                                        (r.innerHTML = t.description),
                                            d(n, "gdesc-open");
                                        var a = l("click", {
                                            onElement: [
                                                n,
                                                u(r, ".gslide-description"),
                                            ],
                                            withCallback: function (e, s) {
                                                "a" !==
                                                    e.target.nodeName.toLowerCase() &&
                                                    (c(n, "gdesc-open"),
                                                    d(n, "gdesc-closed"),
                                                    (r.innerHTML =
                                                        t.smallDescription),
                                                    i.descriptionEvents(r, t),
                                                    setTimeout(function () {
                                                        c(n, "gdesc-closed");
                                                    }, 400),
                                                    a.destroy());
                                            },
                                        });
                                    },
                                });
                            },
                        },
                        {
                            key: "create",
                            value: function () {
                                return v(this.instance.settings.slideHTML);
                            },
                        },
                        {
                            key: "getConfig",
                            value: function () {
                                S(this.element) ||
                                    this.element.hasOwnProperty("draggable") ||
                                    (this.element.draggable =
                                        this.instance.settings.draggable);
                                var e = new G(
                                    this.instance.settings.slideExtraAttributes
                                );
                                return (
                                    (this.slideConfig = e.parseConfig(
                                        this.element,
                                        this.instance.settings
                                    )),
                                    this.slideConfig
                                );
                            },
                        },
                    ]),
                    e
                );
            })(),
            K = _(),
            Q =
                null !== _() ||
                void 0 !== document.createTouch ||
                "ontouchstart" in window ||
                "onmsgesturechange" in window ||
                navigator.msMaxTouchPoints,
            Z = document.getElementsByTagName("html")[0],
            J = {
                selector: ".glightbox",
                elements: null,
                skin: "clean",
                theme: "clean",
                closeButton: !0,
                startAt: null,
                autoplayVideos: !0,
                autofocusVideos: !0,
                descPosition: "bottom",
                width: "900px",
                height: "506px",
                videosWidth: "960px",
                beforeSlideChange: null,
                afterSlideChange: null,
                beforeSlideLoad: null,
                afterSlideLoad: null,
                slideInserted: null,
                slideRemoved: null,
                slideExtraAttributes: null,
                onOpen: null,
                onClose: null,
                loop: !1,
                zoomable: !0,
                draggable: !0,
                dragAutoSnap: !1,
                dragToleranceX: 40,
                dragToleranceY: 65,
                preload: !0,
                oneSlidePerOpen: !1,
                touchNavigation: !0,
                touchFollowAxis: !0,
                keyboardNavigation: !0,
                closeOnOutsideClick: !0,
                plugins: !1,
                plyr: {
                    css: "https://cdn.plyr.io/3.6.8/plyr.css",
                    js: "https://cdn.plyr.io/3.6.8/plyr.js",
                    config: {
                        ratio: "16:9",
                        fullscreen: { enabled: !0, iosNative: !0 },
                        youtube: {
                            noCookie: !0,
                            rel: 0,
                            showinfo: 0,
                            iv_load_policy: 3,
                        },
                        vimeo: {
                            byline: !1,
                            portrait: !1,
                            title: !1,
                            transparent: !1,
                        },
                    },
                },
                openEffect: "zoom",
                closeEffect: "zoom",
                slideEffect: "slide",
                moreText: "See more",
                moreLength: 60,
                cssEfects: {
                    fade: { in: "fadeIn", out: "fadeOut" },
                    zoom: { in: "zoomIn", out: "zoomOut" },
                    slide: { in: "slideInRight", out: "slideOutLeft" },
                    slideBack: { in: "slideInLeft", out: "slideOutRight" },
                    none: { in: "none", out: "none" },
                },
                svg: {
                    close: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                    next: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                    prev: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
                },
                slideHTML:
                    '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
                lightboxHTML:
                    '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
            },
            ee = (function () {
                function e() {
                    var i =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                    t(this, e),
                        (this.customOptions = i),
                        (this.settings = r(J, i)),
                        (this.effectsClasses = this.getAnimationClasses()),
                        (this.videoPlayers = {}),
                        (this.apiEvents = []),
                        (this.fullElementsList = !1);
                }
                return (
                    s(e, [
                        {
                            key: "init",
                            value: function () {
                                var e = this,
                                    t = this.getSelector();
                                t &&
                                    (this.baseEvents = l("click", {
                                        onElement: t,
                                        withCallback: function (t, i) {
                                            t.preventDefault(), e.open(i);
                                        },
                                    })),
                                    (this.elements = this.getElements());
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null,
                                    t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null;
                                if (0 == this.elements.length) return !1;
                                (this.activeSlide = null),
                                    (this.prevActiveSlideIndex = null),
                                    (this.prevActiveSlide = null);
                                var i = I(t) ? t : this.settings.startAt;
                                if (S(e)) {
                                    var s = e.getAttribute("data-gallery");
                                    s &&
                                        ((this.fullElementsList =
                                            this.elements),
                                        (this.elements =
                                            this.getGalleryElements(
                                                this.elements,
                                                s
                                            ))),
                                        O(i) &&
                                            (i = this.getElementIndex(e)) < 0 &&
                                            (i = 0);
                                }
                                I(i) || (i = 0),
                                    this.build(),
                                    p(
                                        this.overlay,
                                        "none" == this.settings.openEffect
                                            ? "none"
                                            : this.settings.cssEfects.fade.in
                                    );
                                var n = document.body,
                                    r =
                                        window.innerWidth -
                                        document.documentElement.clientWidth;
                                if (r > 0) {
                                    var a = document.createElement("style");
                                    (a.type = "text/css"),
                                        (a.className = "gcss-styles"),
                                        (a.innerText =
                                            ".gscrollbar-fixer {margin-right: ".concat(
                                                r,
                                                "px}"
                                            )),
                                        document.head.appendChild(a),
                                        d(n, "gscrollbar-fixer");
                                }
                                d(n, "glightbox-open"),
                                    d(Z, "glightbox-open"),
                                    K &&
                                        (d(document.body, "glightbox-mobile"),
                                        (this.settings.slideEffect = "slide")),
                                    this.showSlide(i, !0),
                                    1 == this.elements.length
                                        ? (d(
                                              this.prevButton,
                                              "glightbox-button-hidden"
                                          ),
                                          d(
                                              this.nextButton,
                                              "glightbox-button-hidden"
                                          ))
                                        : (c(
                                              this.prevButton,
                                              "glightbox-button-hidden"
                                          ),
                                          c(
                                              this.nextButton,
                                              "glightbox-button-hidden"
                                          )),
                                    (this.lightboxOpen = !0),
                                    this.trigger("open"),
                                    E(this.settings.onOpen) &&
                                        this.settings.onOpen(),
                                    Q &&
                                        this.settings.touchNavigation &&
                                        W(this),
                                    this.settings.keyboardNavigation && P(this);
                            },
                        },
                        {
                            key: "openAt",
                            value: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0;
                                this.open(null, e);
                            },
                        },
                        {
                            key: "showSlide",
                            value: function () {
                                var e = this,
                                    t =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 0,
                                    i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1] &&
                                        arguments[1];
                                m(this.loader), (this.index = parseInt(t));
                                var s =
                                    this.slidesContainer.querySelector(
                                        ".current"
                                    );
                                s && c(s, "current"), this.slideAnimateOut();
                                var n =
                                    this.slidesContainer.querySelectorAll(
                                        ".gslide"
                                    )[t];
                                if (h(n, "loaded"))
                                    this.slideAnimateIn(n, i), g(this.loader);
                                else {
                                    m(this.loader);
                                    var r = this.elements[t],
                                        a = {
                                            index: this.index,
                                            slide: n,
                                            slideNode: n,
                                            slideConfig: r.slideConfig,
                                            slideIndex: this.index,
                                            trigger: r.node,
                                            player: null,
                                        };
                                    this.trigger("slide_before_load", a),
                                        r.instance.setContent(n, function () {
                                            g(e.loader),
                                                e.resize(),
                                                e.slideAnimateIn(n, i),
                                                e.trigger(
                                                    "slide_after_load",
                                                    a
                                                );
                                        });
                                }
                                (this.slideDescription = n.querySelector(
                                    ".gslide-description"
                                )),
                                    (this.slideDescriptionContained =
                                        this.slideDescription &&
                                        h(
                                            this.slideDescription.parentNode,
                                            "gslide-media"
                                        )),
                                    this.settings.preload &&
                                        (this.preloadSlide(t + 1),
                                        this.preloadSlide(t - 1)),
                                    this.updateNavigationClasses(),
                                    (this.activeSlide = n);
                            },
                        },
                        {
                            key: "preloadSlide",
                            value: function (e) {
                                var t = this;
                                if (e < 0 || e > this.elements.length - 1)
                                    return !1;
                                if (O(this.elements[e])) return !1;
                                var i =
                                    this.slidesContainer.querySelectorAll(
                                        ".gslide"
                                    )[e];
                                if (h(i, "loaded")) return !1;
                                var s = this.elements[e],
                                    n = s.type,
                                    r = {
                                        index: e,
                                        slide: i,
                                        slideNode: i,
                                        slideConfig: s.slideConfig,
                                        slideIndex: e,
                                        trigger: s.node,
                                        player: null,
                                    };
                                this.trigger("slide_before_load", r),
                                    "video" == n || "external" == n
                                        ? setTimeout(function () {
                                              s.instance.setContent(
                                                  i,
                                                  function () {
                                                      t.trigger(
                                                          "slide_after_load",
                                                          r
                                                      );
                                                  }
                                              );
                                          }, 200)
                                        : s.instance.setContent(i, function () {
                                              t.trigger("slide_after_load", r);
                                          });
                            },
                        },
                        {
                            key: "prevSlide",
                            value: function () {
                                this.goToSlide(this.index - 1);
                            },
                        },
                        {
                            key: "nextSlide",
                            value: function () {
                                this.goToSlide(this.index + 1);
                            },
                        },
                        {
                            key: "goToSlide",
                            value: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0];
                                if (
                                    ((this.prevActiveSlide = this.activeSlide),
                                    (this.prevActiveSlideIndex = this.index),
                                    !this.loop() &&
                                        (e < 0 || e > this.elements.length - 1))
                                )
                                    return !1;
                                e < 0
                                    ? (e = this.elements.length - 1)
                                    : e >= this.elements.length && (e = 0),
                                    this.showSlide(e);
                            },
                        },
                        {
                            key: "insertSlide",
                            value: function () {
                                var e =
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                    t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : -1;
                                t < 0 && (t = this.elements.length);
                                var i = new U(e, this, t),
                                    s = i.getConfig(),
                                    n = r({}, s),
                                    a = i.create(),
                                    o = this.elements.length - 1;
                                (n.index = t),
                                    (n.node = !1),
                                    (n.instance = i),
                                    (n.slideConfig = s),
                                    this.elements.splice(t, 0, n);
                                var l = null,
                                    d = null;
                                if (this.slidesContainer) {
                                    if (t > o)
                                        this.slidesContainer.appendChild(a);
                                    else {
                                        var c =
                                            this.slidesContainer.querySelectorAll(
                                                ".gslide"
                                            )[t];
                                        this.slidesContainer.insertBefore(a, c);
                                    }
                                    ((this.settings.preload &&
                                        0 == this.index &&
                                        0 == t) ||
                                        this.index - 1 == t ||
                                        this.index + 1 == t) &&
                                        this.preloadSlide(t),
                                        0 == this.index &&
                                            0 == t &&
                                            (this.index = 1),
                                        this.updateNavigationClasses(),
                                        (l =
                                            this.slidesContainer.querySelectorAll(
                                                ".gslide"
                                            )[t]),
                                        (d = this.getSlidePlayerInstance(t)),
                                        (n.slideNode = l);
                                }
                                this.trigger("slide_inserted", {
                                    index: t,
                                    slide: l,
                                    slideNode: l,
                                    slideConfig: s,
                                    slideIndex: t,
                                    trigger: null,
                                    player: d,
                                }),
                                    E(this.settings.slideInserted) &&
                                        this.settings.slideInserted({
                                            index: t,
                                            slide: l,
                                            player: d,
                                        });
                            },
                        },
                        {
                            key: "removeSlide",
                            value: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : -1;
                                if (e < 0 || e > this.elements.length - 1)
                                    return !1;
                                var t =
                                    this.slidesContainer &&
                                    this.slidesContainer.querySelectorAll(
                                        ".gslide"
                                    )[e];
                                t &&
                                    (this.getActiveSlideIndex() == e &&
                                        (e == this.elements.length - 1
                                            ? this.prevSlide()
                                            : this.nextSlide()),
                                    t.parentNode.removeChild(t)),
                                    this.elements.splice(e, 1),
                                    this.trigger("slide_removed", e),
                                    E(this.settings.slideRemoved) &&
                                        this.settings.slideRemoved(e);
                            },
                        },
                        {
                            key: "slideAnimateIn",
                            value: function (e, t) {
                                var i = this,
                                    s = e.querySelector(".gslide-media"),
                                    n = e.querySelector(".gslide-description"),
                                    r = {
                                        index: this.prevActiveSlideIndex,
                                        slide: this.prevActiveSlide,
                                        slideNode: this.prevActiveSlide,
                                        slideIndex: this.prevActiveSlide,
                                        slideConfig: O(
                                            this.prevActiveSlideIndex
                                        )
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].slideConfig,
                                        trigger: O(this.prevActiveSlideIndex)
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].node,
                                        player: this.getSlidePlayerInstance(
                                            this.prevActiveSlideIndex
                                        ),
                                    },
                                    a = {
                                        index: this.index,
                                        slide: this.activeSlide,
                                        slideNode: this.activeSlide,
                                        slideConfig:
                                            this.elements[this.index]
                                                .slideConfig,
                                        slideIndex: this.index,
                                        trigger: this.elements[this.index].node,
                                        player: this.getSlidePlayerInstance(
                                            this.index
                                        ),
                                    };
                                if (
                                    (s.offsetWidth > 0 &&
                                        n &&
                                        (g(n), (n.style.display = "")),
                                    c(e, this.effectsClasses),
                                    t)
                                )
                                    p(
                                        e,
                                        this.settings.cssEfects[
                                            this.settings.openEffect
                                        ].in,
                                        function () {
                                            i.settings.autoplayVideos &&
                                                i.slidePlayerPlay(e),
                                                i.trigger("slide_changed", {
                                                    prev: r,
                                                    current: a,
                                                }),
                                                E(
                                                    i.settings.afterSlideChange
                                                ) &&
                                                    i.settings.afterSlideChange.apply(
                                                        i,
                                                        [r, a]
                                                    );
                                        }
                                    );
                                else {
                                    var o = this.settings.slideEffect,
                                        l =
                                            "none" !== o
                                                ? this.settings.cssEfects[o].in
                                                : o;
                                    this.prevActiveSlideIndex > this.index &&
                                        "slide" == this.settings.slideEffect &&
                                        (l =
                                            this.settings.cssEfects.slideBack
                                                .in),
                                        p(e, l, function () {
                                            i.settings.autoplayVideos &&
                                                i.slidePlayerPlay(e),
                                                i.trigger("slide_changed", {
                                                    prev: r,
                                                    current: a,
                                                }),
                                                E(
                                                    i.settings.afterSlideChange
                                                ) &&
                                                    i.settings.afterSlideChange.apply(
                                                        i,
                                                        [r, a]
                                                    );
                                        });
                                }
                                setTimeout(function () {
                                    i.resize(e);
                                }, 100),
                                    d(e, "current");
                            },
                        },
                        {
                            key: "slideAnimateOut",
                            value: function () {
                                if (!this.prevActiveSlide) return !1;
                                var e = this.prevActiveSlide;
                                c(e, this.effectsClasses), d(e, "prev");
                                var t = this.settings.slideEffect,
                                    i =
                                        "none" !== t
                                            ? this.settings.cssEfects[t].out
                                            : t;
                                this.slidePlayerPause(e),
                                    this.trigger("slide_before_change", {
                                        prev: {
                                            index: this.prevActiveSlideIndex,
                                            slide: this.prevActiveSlide,
                                            slideNode: this.prevActiveSlide,
                                            slideIndex:
                                                this.prevActiveSlideIndex,
                                            slideConfig: O(
                                                this.prevActiveSlideIndex
                                            )
                                                ? null
                                                : this.elements[
                                                      this.prevActiveSlideIndex
                                                  ].slideConfig,
                                            trigger: O(
                                                this.prevActiveSlideIndex
                                            )
                                                ? null
                                                : this.elements[
                                                      this.prevActiveSlideIndex
                                                  ].node,
                                            player: this.getSlidePlayerInstance(
                                                this.prevActiveSlideIndex
                                            ),
                                        },
                                        current: {
                                            index: this.index,
                                            slide: this.activeSlide,
                                            slideNode: this.activeSlide,
                                            slideIndex: this.index,
                                            slideConfig:
                                                this.elements[this.index]
                                                    .slideConfig,
                                            trigger:
                                                this.elements[this.index].node,
                                            player: this.getSlidePlayerInstance(
                                                this.index
                                            ),
                                        },
                                    }),
                                    E(this.settings.beforeSlideChange) &&
                                        this.settings.beforeSlideChange.apply(
                                            this,
                                            [
                                                {
                                                    index: this
                                                        .prevActiveSlideIndex,
                                                    slide: this.prevActiveSlide,
                                                    player: this.getSlidePlayerInstance(
                                                        this
                                                            .prevActiveSlideIndex
                                                    ),
                                                },
                                                {
                                                    index: this.index,
                                                    slide: this.activeSlide,
                                                    player: this.getSlidePlayerInstance(
                                                        this.index
                                                    ),
                                                },
                                            ]
                                        ),
                                    this.prevActiveSlideIndex > this.index &&
                                        "slide" == this.settings.slideEffect &&
                                        (i =
                                            this.settings.cssEfects.slideBack
                                                .out),
                                    p(e, i, function () {
                                        var t =
                                                e.querySelector(
                                                    ".ginner-container"
                                                ),
                                            i =
                                                e.querySelector(
                                                    ".gslide-media"
                                                ),
                                            s = e.querySelector(
                                                ".gslide-description"
                                            );
                                        (t.style.transform = ""),
                                            (i.style.transform = ""),
                                            c(i, "greset"),
                                            (i.style.opacity = ""),
                                            s && (s.style.opacity = ""),
                                            c(e, "prev");
                                    });
                            },
                        },
                        {
                            key: "getAllPlayers",
                            value: function () {
                                return this.videoPlayers;
                            },
                        },
                        {
                            key: "getSlidePlayerInstance",
                            value: function (e) {
                                var t = "gvideo" + e,
                                    i = this.getAllPlayers();
                                return !(!L(i, t) || !i[t]) && i[t];
                            },
                        },
                        {
                            key: "stopSlideVideo",
                            value: function (e) {
                                if (S(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                console.log(
                                    "stopSlideVideo is deprecated, use slidePlayerPause"
                                );
                                var i = this.getSlidePlayerInstance(e);
                                i && i.playing && i.pause();
                            },
                        },
                        {
                            key: "slidePlayerPause",
                            value: function (e) {
                                if (S(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                var i = this.getSlidePlayerInstance(e);
                                i && i.playing && i.pause();
                            },
                        },
                        {
                            key: "playSlideVideo",
                            value: function (e) {
                                if (S(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                console.log(
                                    "playSlideVideo is deprecated, use slidePlayerPlay"
                                );
                                var i = this.getSlidePlayerInstance(e);
                                i && !i.playing && i.play();
                            },
                        },
                        {
                            key: "slidePlayerPlay",
                            value: function (e) {
                                if (S(e)) {
                                    var t = e.querySelector(".gvideo-wrapper");
                                    t && (e = t.getAttribute("data-index"));
                                }
                                var i = this.getSlidePlayerInstance(e);
                                i &&
                                    !i.playing &&
                                    (i.play(),
                                    this.settings.autofocusVideos &&
                                        i.elements.container.focus());
                            },
                        },
                        {
                            key: "setElements",
                            value: function (e) {
                                var t = this;
                                this.settings.elements = !1;
                                var i = [];
                                e &&
                                    e.length &&
                                    a(e, function (e, s) {
                                        var n = new U(e, t, s),
                                            a = n.getConfig(),
                                            o = r({}, a);
                                        (o.slideConfig = a),
                                            (o.instance = n),
                                            (o.index = s),
                                            i.push(o);
                                    }),
                                    (this.elements = i),
                                    this.lightboxOpen &&
                                        ((this.slidesContainer.innerHTML = ""),
                                        this.elements.length &&
                                            (a(this.elements, function () {
                                                var e = v(t.settings.slideHTML);
                                                t.slidesContainer.appendChild(
                                                    e
                                                );
                                            }),
                                            this.showSlide(0, !0)));
                            },
                        },
                        {
                            key: "getElementIndex",
                            value: function (e) {
                                var t = !1;
                                return (
                                    a(this.elements, function (i, s) {
                                        if (L(i, "node") && i.node == e)
                                            return (t = s), !0;
                                    }),
                                    t
                                );
                            },
                        },
                        {
                            key: "getElements",
                            value: function () {
                                var e = this,
                                    t = [];
                                (this.elements = this.elements
                                    ? this.elements
                                    : []),
                                    !O(this.settings.elements) &&
                                        C(this.settings.elements) &&
                                        this.settings.elements.length &&
                                        a(
                                            this.settings.elements,
                                            function (i, s) {
                                                var n = new U(i, e, s),
                                                    a = n.getConfig(),
                                                    o = r({}, a);
                                                (o.node = !1),
                                                    (o.index = s),
                                                    (o.instance = n),
                                                    (o.slideConfig = a),
                                                    t.push(o);
                                            }
                                        );
                                var i = !1;
                                return (
                                    this.getSelector() &&
                                        (i = document.querySelectorAll(
                                            this.getSelector()
                                        )),
                                    i
                                        ? (a(i, function (i, s) {
                                              var n = new U(i, e, s),
                                                  a = n.getConfig(),
                                                  o = r({}, a);
                                              (o.node = i),
                                                  (o.index = s),
                                                  (o.instance = n),
                                                  (o.slideConfig = a),
                                                  (o.gallery =
                                                      i.getAttribute(
                                                          "data-gallery"
                                                      )),
                                                  t.push(o);
                                          }),
                                          t)
                                        : t
                                );
                            },
                        },
                        {
                            key: "getGalleryElements",
                            value: function (e, t) {
                                return e.filter(function (e) {
                                    return e.gallery == t;
                                });
                            },
                        },
                        {
                            key: "getSelector",
                            value: function () {
                                return (
                                    !this.settings.elements &&
                                    (this.settings.selector &&
                                    "data-" ==
                                        this.settings.selector.substring(0, 5)
                                        ? "*[".concat(
                                              this.settings.selector,
                                              "]"
                                          )
                                        : this.settings.selector)
                                );
                            },
                        },
                        {
                            key: "getActiveSlide",
                            value: function () {
                                return this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[this.index];
                            },
                        },
                        {
                            key: "getActiveSlideIndex",
                            value: function () {
                                return this.index;
                            },
                        },
                        {
                            key: "getAnimationClasses",
                            value: function () {
                                var e = [];
                                for (var t in this.settings.cssEfects)
                                    if (
                                        this.settings.cssEfects.hasOwnProperty(
                                            t
                                        )
                                    ) {
                                        var i = this.settings.cssEfects[t];
                                        e.push("g".concat(i.in)),
                                            e.push("g".concat(i.out));
                                    }
                                return e.join(" ");
                            },
                        },
                        {
                            key: "build",
                            value: function () {
                                var e = this;
                                if (this.built) return !1;
                                var t = document.body.childNodes,
                                    i = [];
                                a(t, function (e) {
                                    e.parentNode == document.body &&
                                        "#" !== e.nodeName.charAt(0) &&
                                        e.hasAttribute &&
                                        !e.hasAttribute("aria-hidden") &&
                                        (i.push(e),
                                        e.setAttribute("aria-hidden", "true"));
                                });
                                var s = L(this.settings.svg, "next")
                                        ? this.settings.svg.next
                                        : "",
                                    n = L(this.settings.svg, "prev")
                                        ? this.settings.svg.prev
                                        : "",
                                    r = L(this.settings.svg, "close")
                                        ? this.settings.svg.close
                                        : "",
                                    o = this.settings.lightboxHTML;
                                (o = v(
                                    (o = (o = (o = o.replace(
                                        /{nextSVG}/g,
                                        s
                                    )).replace(/{prevSVG}/g, n)).replace(
                                        /{closeSVG}/g,
                                        r
                                    ))
                                )),
                                    document.body.appendChild(o);
                                var c =
                                    document.getElementById("glightbox-body");
                                this.modal = c;
                                var p = c.querySelector(".gclose");
                                (this.prevButton = c.querySelector(".gprev")),
                                    (this.nextButton =
                                        c.querySelector(".gnext")),
                                    (this.overlay =
                                        c.querySelector(".goverlay")),
                                    (this.loader = c.querySelector(".gloader")),
                                    (this.slidesContainer =
                                        document.getElementById(
                                            "glightbox-slider"
                                        )),
                                    (this.bodyHiddenChildElms = i),
                                    (this.events = {}),
                                    d(
                                        this.modal,
                                        "glightbox-" + this.settings.skin
                                    ),
                                    this.settings.closeButton &&
                                        p &&
                                        (this.events.close = l("click", {
                                            onElement: p,
                                            withCallback: function (t, i) {
                                                t.preventDefault(), e.close();
                                            },
                                        })),
                                    p &&
                                        !this.settings.closeButton &&
                                        p.parentNode.removeChild(p),
                                    this.nextButton &&
                                        (this.events.next = l("click", {
                                            onElement: this.nextButton,
                                            withCallback: function (t, i) {
                                                t.preventDefault(),
                                                    e.nextSlide();
                                            },
                                        })),
                                    this.prevButton &&
                                        (this.events.prev = l("click", {
                                            onElement: this.prevButton,
                                            withCallback: function (t, i) {
                                                t.preventDefault(),
                                                    e.prevSlide();
                                            },
                                        })),
                                    this.settings.closeOnOutsideClick &&
                                        (this.events.outClose = l("click", {
                                            onElement: c,
                                            withCallback: function (t, i) {
                                                e.preventOutsideClick ||
                                                    h(
                                                        document.body,
                                                        "glightbox-mobile"
                                                    ) ||
                                                    u(
                                                        t.target,
                                                        ".ginner-container"
                                                    ) ||
                                                    u(t.target, ".gbtn") ||
                                                    h(t.target, "gnext") ||
                                                    h(t.target, "gprev") ||
                                                    e.close();
                                            },
                                        })),
                                    a(this.elements, function (t, i) {
                                        e.slidesContainer.appendChild(
                                            t.instance.create()
                                        ),
                                            (t.slideNode =
                                                e.slidesContainer.querySelectorAll(
                                                    ".gslide"
                                                )[i]);
                                    }),
                                    Q && d(document.body, "glightbox-touch"),
                                    (this.events.resize = l("resize", {
                                        onElement: window,
                                        withCallback: function () {
                                            e.resize();
                                        },
                                    })),
                                    (this.built = !0);
                            },
                        },
                        {
                            key: "resize",
                            value: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : null;
                                if (
                                    (e = e || this.activeSlide) &&
                                    !h(e, "zoomed")
                                ) {
                                    var t = y(),
                                        i = e.querySelector(".gvideo-wrapper"),
                                        s = e.querySelector(".gslide-image"),
                                        n = this.slideDescription,
                                        r = t.width,
                                        a = t.height;
                                    if (
                                        (r <= 768
                                            ? d(
                                                  document.body,
                                                  "glightbox-mobile"
                                              )
                                            : c(
                                                  document.body,
                                                  "glightbox-mobile"
                                              ),
                                        i || s)
                                    ) {
                                        var o = !1;
                                        if (
                                            (n &&
                                                (h(n, "description-bottom") ||
                                                    h(n, "description-top")) &&
                                                !h(n, "gabsolute") &&
                                                (o = !0),
                                            s)
                                        )
                                            if (r <= 768)
                                                s.querySelector("img");
                                            else if (o) {
                                                var l = n.offsetHeight,
                                                    u = s.querySelector("img");
                                                u.setAttribute(
                                                    "style",
                                                    "max-height: calc(100vh - ".concat(
                                                        l,
                                                        "px)"
                                                    )
                                                ),
                                                    n.setAttribute(
                                                        "style",
                                                        "max-width: ".concat(
                                                            u.offsetWidth,
                                                            "px;"
                                                        )
                                                    );
                                            }
                                        if (i) {
                                            var p = L(
                                                this.settings.plyr.config,
                                                "ratio"
                                            )
                                                ? this.settings.plyr.config
                                                      .ratio
                                                : "";
                                            if (!p) {
                                                var f = i.clientWidth,
                                                    m = i.clientHeight,
                                                    g = f / m;
                                                p = ""
                                                    .concat(f / g, ":")
                                                    .concat(m / g);
                                            }
                                            var v = p.split(":"),
                                                b = this.settings.videosWidth,
                                                w = this.settings.videosWidth,
                                                x =
                                                    (w =
                                                        I(b) ||
                                                        -1 !== b.indexOf("px")
                                                            ? parseInt(b)
                                                            : -1 !==
                                                              b.indexOf("vw")
                                                            ? (r *
                                                                  parseInt(b)) /
                                                              100
                                                            : -1 !==
                                                              b.indexOf("vh")
                                                            ? (a *
                                                                  parseInt(b)) /
                                                              100
                                                            : -1 !==
                                                              b.indexOf("%")
                                                            ? (r *
                                                                  parseInt(b)) /
                                                              100
                                                            : parseInt(
                                                                  i.clientWidth
                                                              )) /
                                                    (parseInt(v[0]) /
                                                        parseInt(v[1]));
                                            if (
                                                ((x = Math.floor(x)),
                                                o && (a -= n.offsetHeight),
                                                w > r ||
                                                    x > a ||
                                                    (a < x && r > w))
                                            ) {
                                                var _ = i.offsetWidth,
                                                    E = i.offsetHeight,
                                                    T = a / E,
                                                    S = {
                                                        width: _ * T,
                                                        height: E * T,
                                                    };
                                                i.parentNode.setAttribute(
                                                    "style",
                                                    "max-width: ".concat(
                                                        S.width,
                                                        "px"
                                                    )
                                                ),
                                                    o &&
                                                        n.setAttribute(
                                                            "style",
                                                            "max-width: ".concat(
                                                                S.width,
                                                                "px;"
                                                            )
                                                        );
                                            } else
                                                (i.parentNode.style.maxWidth =
                                                    "".concat(b)),
                                                    o &&
                                                        n.setAttribute(
                                                            "style",
                                                            "max-width: ".concat(
                                                                b,
                                                                ";"
                                                            )
                                                        );
                                        }
                                    }
                                }
                            },
                        },
                        {
                            key: "reload",
                            value: function () {
                                this.init();
                            },
                        },
                        {
                            key: "updateNavigationClasses",
                            value: function () {
                                var e = this.loop();
                                c(this.nextButton, "disabled"),
                                    c(this.prevButton, "disabled"),
                                    0 == this.index &&
                                    this.elements.length - 1 == 0
                                        ? (d(this.prevButton, "disabled"),
                                          d(this.nextButton, "disabled"))
                                        : 0 !== this.index || e
                                        ? this.index !==
                                              this.elements.length - 1 ||
                                          e ||
                                          d(this.nextButton, "disabled")
                                        : d(this.prevButton, "disabled");
                            },
                        },
                        {
                            key: "loop",
                            value: function () {
                                var e = L(this.settings, "loopAtEnd")
                                    ? this.settings.loopAtEnd
                                    : null;
                                return (e = L(this.settings, "loop")
                                    ? this.settings.loop
                                    : e);
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                var e = this;
                                if (!this.lightboxOpen) {
                                    if (this.events) {
                                        for (var t in this.events)
                                            this.events.hasOwnProperty(t) &&
                                                this.events[t].destroy();
                                        this.events = null;
                                    }
                                    return !1;
                                }
                                if (this.closing) return !1;
                                (this.closing = !0),
                                    this.slidePlayerPause(this.activeSlide),
                                    this.fullElementsList &&
                                        (this.elements = this.fullElementsList),
                                    this.bodyHiddenChildElms.length &&
                                        a(
                                            this.bodyHiddenChildElms,
                                            function (e) {
                                                e.removeAttribute(
                                                    "aria-hidden"
                                                );
                                            }
                                        ),
                                    d(this.modal, "glightbox-closing"),
                                    p(
                                        this.overlay,
                                        "none" == this.settings.openEffect
                                            ? "none"
                                            : this.settings.cssEfects.fade.out
                                    ),
                                    p(
                                        this.activeSlide,
                                        this.settings.cssEfects[
                                            this.settings.closeEffect
                                        ].out,
                                        function () {
                                            if (
                                                ((e.activeSlide = null),
                                                (e.prevActiveSlideIndex = null),
                                                (e.prevActiveSlide = null),
                                                (e.built = !1),
                                                e.events)
                                            ) {
                                                for (var t in e.events)
                                                    e.events.hasOwnProperty(
                                                        t
                                                    ) && e.events[t].destroy();
                                                e.events = null;
                                            }
                                            var i = document.body;
                                            c(Z, "glightbox-open"),
                                                c(
                                                    i,
                                                    "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
                                                ),
                                                e.modal.parentNode.removeChild(
                                                    e.modal
                                                ),
                                                e.trigger("close"),
                                                E(e.settings.onClose) &&
                                                    e.settings.onClose();
                                            var s =
                                                document.querySelector(
                                                    ".gcss-styles"
                                                );
                                            s && s.parentNode.removeChild(s),
                                                (e.lightboxOpen = !1),
                                                (e.closing = null);
                                        }
                                    );
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.close(),
                                    this.clearAllEvents(),
                                    this.baseEvents &&
                                        this.baseEvents.destroy();
                            },
                        },
                        {
                            key: "on",
                            value: function (e, t) {
                                var i =
                                    arguments.length > 2 &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                if (!e || !E(t))
                                    throw new TypeError(
                                        "Event name and callback must be defined"
                                    );
                                this.apiEvents.push({
                                    evt: e,
                                    once: i,
                                    callback: t,
                                });
                            },
                        },
                        {
                            key: "once",
                            value: function (e, t) {
                                this.on(e, t, !0);
                            },
                        },
                        {
                            key: "trigger",
                            value: function (e) {
                                var t = this,
                                    i =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null,
                                    s = [];
                                a(this.apiEvents, function (t, n) {
                                    var r = t.evt,
                                        a = t.once,
                                        o = t.callback;
                                    r == e && (o(i), a && s.push(n));
                                }),
                                    s.length &&
                                        a(s, function (e) {
                                            return t.apiEvents.splice(e, 1);
                                        });
                            },
                        },
                        {
                            key: "clearAllEvents",
                            value: function () {
                                this.apiEvents.splice(0, this.apiEvents.length);
                            },
                        },
                        {
                            key: "version",
                            value: function () {
                                return "3.1.1";
                            },
                        },
                    ]),
                    e
                );
            })();
        return function () {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                t = new ee(e);
            return t.init(), t;
        };
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
                  return t(e, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("jquery")))
            : (e.jQueryBridget = t(e, e.jQuery));
    })(window, function (e, t) {
        "use strict";
        function i(i, r, o) {
            function l(e, t, s) {
                var n,
                    r = "$()." + i + '("' + t + '")';
                return (
                    e.each(function (e, l) {
                        var d = o.data(l, i);
                        if (d) {
                            var c = d[t];
                            if (c && "_" != t.charAt(0)) {
                                var h = c.apply(d, s);
                                n = void 0 === n ? h : n;
                            } else a(r + " is not a valid method");
                        } else a(i + " not initialized. Cannot call methods, i.e. " + r);
                    }),
                    void 0 !== n ? n : e
                );
            }
            function d(e, t) {
                e.each(function (e, s) {
                    var n = o.data(s, i);
                    n
                        ? (n.option(t), n._init())
                        : ((n = new r(s, t)), o.data(s, i, n));
                });
            }
            (o = o || t || e.jQuery) &&
                (r.prototype.option ||
                    (r.prototype.option = function (e) {
                        o.isPlainObject(e) &&
                            (this.options = o.extend(!0, this.options, e));
                    }),
                (o.fn[i] = function (e) {
                    if ("string" == typeof e) {
                        var t = n.call(arguments, 1);
                        return l(this, e, t);
                    }
                    return d(this, e), this;
                }),
                s(o));
        }
        function s(e) {
            !e || (e && e.bridget) || (e.bridget = i);
        }
        var n = Array.prototype.slice,
            r = e.console,
            a =
                void 0 === r
                    ? function () {}
                    : function (e) {
                          r.error(e);
                      };
        return s(t || e.jQuery), i;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("ev-emitter/ev-emitter", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.EvEmitter = t());
    })("undefined" != typeof window ? window : this, function () {
        function e() {}
        var t = e.prototype;
        return (
            (t.on = function (e, t) {
                if (e && t) {
                    var i = (this._events = this._events || {}),
                        s = (i[e] = i[e] || []);
                    return -1 == s.indexOf(t) && s.push(t), this;
                }
            }),
            (t.once = function (e, t) {
                if (e && t) {
                    this.on(e, t);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[e] = i[e] || {})[t] = !0), this;
                }
            }),
            (t.off = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    var s = i.indexOf(t);
                    return -1 != s && i.splice(s, 1), this;
                }
            }),
            (t.emitEvent = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    (i = i.slice(0)), (t = t || []);
                    for (
                        var s = this._onceEvents && this._onceEvents[e], n = 0;
                        n < i.length;
                        n++
                    ) {
                        var r = i[n];
                        s && s[r] && (this.off(e, r), delete s[r]),
                            r.apply(this, t);
                    }
                    return this;
                }
            }),
            (t.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("get-size/get-size", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.getSize = t());
    })(window, function () {
        "use strict";
        function e(e) {
            var t = parseFloat(e);
            return -1 == e.indexOf("%") && !isNaN(t) && t;
        }
        function t(e) {
            var t = getComputedStyle(e);
            return (
                t ||
                    r(
                        "Style returned " +
                            t +
                            ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
                    ),
                t
            );
        }
        function i() {
            if (!l) {
                l = !0;
                var i = document.createElement("div");
                (i.style.width = "200px"),
                    (i.style.padding = "1px 2px 3px 4px"),
                    (i.style.borderStyle = "solid"),
                    (i.style.borderWidth = "1px 2px 3px 4px"),
                    (i.style.boxSizing = "border-box");
                var r = document.body || document.documentElement;
                r.appendChild(i);
                var a = t(i);
                (n = 200 == Math.round(e(a.width))),
                    (s.isBoxSizeOuter = n),
                    r.removeChild(i);
            }
        }
        function s(s) {
            if (
                (i(),
                "string" == typeof s && (s = document.querySelector(s)),
                s && "object" == typeof s && s.nodeType)
            ) {
                var r = t(s);
                if ("none" == r.display)
                    return (function () {
                        for (
                            var e = {
                                    width: 0,
                                    height: 0,
                                    innerWidth: 0,
                                    innerHeight: 0,
                                    outerWidth: 0,
                                    outerHeight: 0,
                                },
                                t = 0;
                            t < o;
                            t++
                        )
                            e[a[t]] = 0;
                        return e;
                    })();
                var l = {};
                (l.width = s.offsetWidth), (l.height = s.offsetHeight);
                for (
                    var d = (l.isBorderBox = "border-box" == r.boxSizing),
                        c = 0;
                    c < o;
                    c++
                ) {
                    var h = a[c],
                        u = r[h],
                        p = parseFloat(u);
                    l[h] = isNaN(p) ? 0 : p;
                }
                var f = l.paddingLeft + l.paddingRight,
                    m = l.paddingTop + l.paddingBottom,
                    g = l.marginLeft + l.marginRight,
                    v = l.marginTop + l.marginBottom,
                    y = l.borderLeftWidth + l.borderRightWidth,
                    b = l.borderTopWidth + l.borderBottomWidth,
                    w = d && n,
                    x = e(r.width);
                !1 !== x && (l.width = x + (w ? 0 : f + y));
                var _ = e(r.height);
                return (
                    !1 !== _ && (l.height = _ + (w ? 0 : m + b)),
                    (l.innerWidth = l.width - (f + y)),
                    (l.innerHeight = l.height - (m + b)),
                    (l.outerWidth = l.width + g),
                    (l.outerHeight = l.height + v),
                    l
                );
            }
        }
        var n,
            r =
                "undefined" == typeof console
                    ? function () {}
                    : function (e) {
                          console.error(e);
                      },
            a = [
                "paddingLeft",
                "paddingRight",
                "paddingTop",
                "paddingBottom",
                "marginLeft",
                "marginRight",
                "marginTop",
                "marginBottom",
                "borderLeftWidth",
                "borderRightWidth",
                "borderTopWidth",
                "borderBottomWidth",
            ],
            o = a.length,
            l = !1;
        return s;
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("desandro-matches-selector/matches-selector", t)
            : "object" == typeof module && module.exports
            ? (module.exports = t())
            : (e.matchesSelector = t());
    })(window, function () {
        "use strict";
        var e = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (
                var t = ["webkit", "moz", "ms", "o"], i = 0;
                i < t.length;
                i++
            ) {
                var s = t[i] + "MatchesSelector";
                if (e[s]) return s;
            }
        })();
        return function (t, i) {
            return t[e](i);
        };
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "fizzy-ui-utils/utils",
                  ["desandro-matches-selector/matches-selector"],
                  function (i) {
                      return t(e, i);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(e, require("desandro-matches-selector")))
            : (e.fizzyUIUtils = t(e, e.matchesSelector));
    })(window, function (e, t) {
        var i = {
                extend: function (e, t) {
                    for (var i in t) e[i] = t[i];
                    return e;
                },
                modulo: function (e, t) {
                    return ((e % t) + t) % t;
                },
            },
            s = Array.prototype.slice;
        (i.makeArray = function (e) {
            return Array.isArray(e)
                ? e
                : null == e
                ? []
                : "object" == typeof e && "number" == typeof e.length
                ? s.call(e)
                : [e];
        }),
            (i.removeFrom = function (e, t) {
                var i = e.indexOf(t);
                -1 != i && e.splice(i, 1);
            }),
            (i.getParent = function (e, i) {
                for (; e.parentNode && e != document.body; )
                    if (((e = e.parentNode), t(e, i))) return e;
            }),
            (i.getQueryElement = function (e) {
                return "string" == typeof e ? document.querySelector(e) : e;
            }),
            (i.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (i.filterFindElements = function (e, s) {
                e = i.makeArray(e);
                var n = [];
                return (
                    e.forEach(function (e) {
                        if (e instanceof HTMLElement) {
                            if (!s) return void n.push(e);
                            t(e, s) && n.push(e);
                            for (
                                var i = e.querySelectorAll(s), r = 0;
                                r < i.length;
                                r++
                            )
                                n.push(i[r]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (e, t, i) {
                i = i || 100;
                var s = e.prototype[t],
                    n = t + "Timeout";
                e.prototype[t] = function () {
                    var e = this[n];
                    clearTimeout(e);
                    var t = arguments,
                        r = this;
                    this[n] = setTimeout(function () {
                        s.apply(r, t), delete r[n];
                    }, i);
                };
            }),
            (i.docReady = function (e) {
                var t = document.readyState;
                "complete" == t || "interactive" == t
                    ? setTimeout(e)
                    : document.addEventListener("DOMContentLoaded", e);
            }),
            (i.toDashed = function (e) {
                return e
                    .replace(/(.)([A-Z])/g, function (e, t, i) {
                        return t + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = e.console;
        return (
            (i.htmlInit = function (t, s) {
                i.docReady(function () {
                    var r = i.toDashed(s),
                        a = "data-" + r,
                        o = document.querySelectorAll("[" + a + "]"),
                        l = document.querySelectorAll(".js-" + r),
                        d = i.makeArray(o).concat(i.makeArray(l)),
                        c = a + "-options",
                        h = e.jQuery;
                    d.forEach(function (e) {
                        var i,
                            r = e.getAttribute(a) || e.getAttribute(c);
                        try {
                            i = r && JSON.parse(r);
                        } catch (t) {
                            return void (
                                n &&
                                n.error(
                                    "Error parsing " +
                                        a +
                                        " on " +
                                        e.className +
                                        ": " +
                                        t
                                )
                            );
                        }
                        var o = new t(e, i);
                        h && h.data(e, s, o);
                    });
                });
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/item",
                  ["ev-emitter/ev-emitter", "get-size/get-size"],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("ev-emitter"), require("get-size")))
            : ((e.Outlayer = {}),
              (e.Outlayer.Item = t(e.EvEmitter, e.getSize)));
    })(window, function (e, t) {
        "use strict";
        function i(e, t) {
            e &&
                ((this.element = e),
                (this.layout = t),
                (this.position = { x: 0, y: 0 }),
                this._create());
        }
        var s = document.documentElement.style,
            n =
                "string" == typeof s.transition
                    ? "transition"
                    : "WebkitTransition",
            r =
                "string" == typeof s.transform
                    ? "transform"
                    : "WebkitTransform",
            a = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend",
            }[n],
            o = {
                transform: r,
                transition: n,
                transitionDuration: n + "Duration",
                transitionProperty: n + "Property",
                transitionDelay: n + "Delay",
            },
            l = (i.prototype = Object.create(e.prototype));
        (l.constructor = i),
            (l._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
                    this.css({ position: "absolute" });
            }),
            (l.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (l.getSize = function () {
                this.size = t(this.element);
            }),
            (l.css = function (e) {
                var t = this.element.style;
                for (var i in e) {
                    t[o[i] || i] = e[i];
                }
            }),
            (l.getPosition = function () {
                var e = getComputedStyle(this.element),
                    t = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    s = e[t ? "left" : "right"],
                    n = e[i ? "top" : "bottom"],
                    r = parseFloat(s),
                    a = parseFloat(n),
                    o = this.layout.size;
                -1 != s.indexOf("%") && (r = (r / 100) * o.width),
                    -1 != n.indexOf("%") && (a = (a / 100) * o.height),
                    (r = isNaN(r) ? 0 : r),
                    (a = isNaN(a) ? 0 : a),
                    (r -= t ? o.paddingLeft : o.paddingRight),
                    (a -= i ? o.paddingTop : o.paddingBottom),
                    (this.position.x = r),
                    (this.position.y = a);
            }),
            (l.layoutPosition = function () {
                var e = this.layout.size,
                    t = {},
                    i = this.layout._getOption("originLeft"),
                    s = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    r = i ? "left" : "right",
                    a = i ? "right" : "left",
                    o = this.position.x + e[n];
                (t[r] = this.getXValue(o)), (t[a] = "");
                var l = s ? "paddingTop" : "paddingBottom",
                    d = s ? "top" : "bottom",
                    c = s ? "bottom" : "top",
                    h = this.position.y + e[l];
                (t[d] = this.getYValue(h)),
                    (t[c] = ""),
                    this.css(t),
                    this.emitEvent("layout", [this]);
            }),
            (l.getXValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !t
                    ? (e / this.layout.size.width) * 100 + "%"
                    : e + "px";
            }),
            (l.getYValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && t
                    ? (e / this.layout.size.height) * 100 + "%"
                    : e + "px";
            }),
            (l._transitionTo = function (e, t) {
                this.getPosition();
                var i = this.position.x,
                    s = this.position.y,
                    n = e == this.position.x && t == this.position.y;
                if ((this.setPosition(e, t), !n || this.isTransitioning)) {
                    var r = e - i,
                        a = t - s,
                        o = {};
                    (o.transform = this.getTranslate(r, a)),
                        this.transition({
                            to: o,
                            onTransitionEnd: { transform: this.layoutPosition },
                            isCleaning: !0,
                        });
                } else this.layoutPosition();
            }),
            (l.getTranslate = function (e, t) {
                return (
                    "translate3d(" +
                    (e = this.layout._getOption("originLeft") ? e : -e) +
                    "px, " +
                    (t = this.layout._getOption("originTop") ? t : -t) +
                    "px, 0)"
                );
            }),
            (l.goTo = function (e, t) {
                this.setPosition(e, t), this.layoutPosition();
            }),
            (l.moveTo = l._transitionTo),
            (l.setPosition = function (e, t) {
                (this.position.x = parseFloat(e)),
                    (this.position.y = parseFloat(t));
            }),
            (l._nonTransition = function (e) {
                for (var t in (this.css(e.to),
                e.isCleaning && this._removeStyles(e.to),
                e.onTransitionEnd))
                    e.onTransitionEnd[t].call(this);
            }),
            (l.transition = function (e) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var t = this._transn;
                    for (var i in e.onTransitionEnd)
                        t.onEnd[i] = e.onTransitionEnd[i];
                    for (i in e.to)
                        (t.ingProperties[i] = !0),
                            e.isCleaning && (t.clean[i] = !0);
                    if (e.from) {
                        this.css(e.from);
                        this.element.offsetHeight;
                        null;
                    }
                    this.enableTransition(e.to),
                        this.css(e.to),
                        (this.isTransitioning = !0);
                } else this._nonTransition(e);
            });
        var d =
            "opacity," +
            (function (e) {
                return e.replace(/([A-Z])/g, function (e) {
                    return "-" + e.toLowerCase();
                });
            })(r);
        (l.enableTransition = function () {
            if (!this.isTransitioning) {
                var e = this.layout.options.transitionDuration;
                (e = "number" == typeof e ? e + "ms" : e),
                    this.css({
                        transitionProperty: d,
                        transitionDuration: e,
                        transitionDelay: this.staggerDelay || 0,
                    }),
                    this.element.addEventListener(a, this, !1);
            }
        }),
            (l.onwebkitTransitionEnd = function (e) {
                this.ontransitionend(e);
            }),
            (l.onotransitionend = function (e) {
                this.ontransitionend(e);
            });
        var c = { "-webkit-transform": "transform" };
        (l.ontransitionend = function (e) {
            if (e.target === this.element) {
                var t = this._transn,
                    i = c[e.propertyName] || e.propertyName;
                if (
                    (delete t.ingProperties[i],
                    (function (e) {
                        for (var t in e) return !1;
                        return !0;
                    })(t.ingProperties) && this.disableTransition(),
                    i in t.clean &&
                        ((this.element.style[e.propertyName] = ""),
                        delete t.clean[i]),
                    i in t.onEnd)
                )
                    t.onEnd[i].call(this), delete t.onEnd[i];
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (l.disableTransition = function () {
                this.removeTransitionStyles(),
                    this.element.removeEventListener(a, this, !1),
                    (this.isTransitioning = !1);
            }),
            (l._removeStyles = function (e) {
                var t = {};
                for (var i in e) t[i] = "";
                this.css(t);
            });
        var h = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: "",
        };
        return (
            (l.removeTransitionStyles = function () {
                this.css(h);
            }),
            (l.stagger = function (e) {
                (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
            }),
            (l.removeElem = function () {
                this.element.parentNode.removeChild(this.element),
                    this.css({ display: "" }),
                    this.emitEvent("remove", [this]);
            }),
            (l.remove = function () {
                return n && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (l.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var e = this.layout.options,
                    t = {};
                (t[this.getHideRevealTransitionEndProperty("visibleStyle")] =
                    this.onRevealTransitionEnd),
                    this.transition({
                        from: e.hiddenStyle,
                        to: e.visibleStyle,
                        isCleaning: !0,
                        onTransitionEnd: t,
                    });
            }),
            (l.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (l.getHideRevealTransitionEndProperty = function (e) {
                var t = this.layout.options[e];
                if (t.opacity) return "opacity";
                for (var i in t) return i;
            }),
            (l.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var e = this.layout.options,
                    t = {};
                (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
                    this.onHideTransitionEnd),
                    this.transition({
                        from: e.visibleStyle,
                        to: e.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: t,
                    });
            }),
            (l.onHideTransitionEnd = function () {
                this.isHidden &&
                    (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (l.destroy = function () {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: "",
                });
            }),
            i
        );
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(
                  "outlayer/outlayer",
                  [
                      "ev-emitter/ev-emitter",
                      "get-size/get-size",
                      "fizzy-ui-utils/utils",
                      "./item",
                  ],
                  function (i, s, n, r) {
                      return t(e, i, s, n, r);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(
                  e,
                  require("ev-emitter"),
                  require("get-size"),
                  require("fizzy-ui-utils"),
                  require("./item")
              ))
            : (e.Outlayer = t(
                  e,
                  e.EvEmitter,
                  e.getSize,
                  e.fizzyUIUtils,
                  e.Outlayer.Item
              ));
    })(window, function (e, t, i, s, n) {
        "use strict";
        function r(e, t) {
            var i = s.getQueryElement(e);
            if (i) {
                (this.element = i),
                    l && (this.$element = l(this.element)),
                    (this.options = s.extend({}, this.constructor.defaults)),
                    this.option(t);
                var n = ++c;
                (this.element.outlayerGUID = n),
                    (h[n] = this),
                    this._create(),
                    this._getOption("initLayout") && this.layout();
            } else o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || e));
        }
        function a(e) {
            function t() {
                e.apply(this, arguments);
            }
            return (
                (t.prototype = Object.create(e.prototype)),
                (t.prototype.constructor = t),
                t
            );
        }
        var o = e.console,
            l = e.jQuery,
            d = function () {},
            c = 0,
            h = {};
        (r.namespace = "outlayer"),
            (r.Item = n),
            (r.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var u = r.prototype;
        s.extend(u, t.prototype),
            (u.option = function (e) {
                s.extend(this.options, e);
            }),
            (u._getOption = function (e) {
                var t = this.constructor.compatOptions[e];
                return t && void 0 !== this.options[t]
                    ? this.options[t]
                    : this.options[e];
            }),
            (r.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (u._create = function () {
                this.reloadItems(),
                    (this.stamps = []),
                    this.stamp(this.options.stamp),
                    s.extend(this.element.style, this.options.containerStyle),
                    this._getOption("resize") && this.bindResize();
            }),
            (u.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (u._itemize = function (e) {
                for (
                    var t = this._filterFindItemElements(e),
                        i = this.constructor.Item,
                        s = [],
                        n = 0;
                    n < t.length;
                    n++
                ) {
                    var r = new i(t[n], this);
                    s.push(r);
                }
                return s;
            }),
            (u._filterFindItemElements = function (e) {
                return s.filterFindElements(e, this.options.itemSelector);
            }),
            (u.getItemElements = function () {
                return this.items.map(function (e) {
                    return e.element;
                });
            }),
            (u.layout = function () {
                this._resetLayout(), this._manageStamps();
                var e = this._getOption("layoutInstant"),
                    t = void 0 !== e ? e : !this._isLayoutInited;
                this.layoutItems(this.items, t), (this._isLayoutInited = !0);
            }),
            (u._init = u.layout),
            (u._resetLayout = function () {
                this.getSize();
            }),
            (u.getSize = function () {
                this.size = i(this.element);
            }),
            (u._getMeasurement = function (e, t) {
                var s,
                    n = this.options[e];
                n
                    ? ("string" == typeof n
                          ? (s = this.element.querySelector(n))
                          : n instanceof HTMLElement && (s = n),
                      (this[e] = s ? i(s)[t] : n))
                    : (this[e] = 0);
            }),
            (u.layoutItems = function (e, t) {
                (e = this._getItemsForLayout(e)),
                    this._layoutItems(e, t),
                    this._postLayout();
            }),
            (u._getItemsForLayout = function (e) {
                return e.filter(function (e) {
                    return !e.isIgnored;
                });
            }),
            (u._layoutItems = function (e, t) {
                if ((this._emitCompleteOnItems("layout", e), e && e.length)) {
                    var i = [];
                    e.forEach(function (e) {
                        var s = this._getItemLayoutPosition(e);
                        (s.item = e),
                            (s.isInstant = t || e.isLayoutInstant),
                            i.push(s);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (u._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (u._processLayoutQueue = function (e) {
                this.updateStagger(),
                    e.forEach(function (e, t) {
                        this._positionItem(e.item, e.x, e.y, e.isInstant, t);
                    }, this);
            }),
            (u.updateStagger = function () {
                var e = this.options.stagger;
                return null == e
                    ? void (this.stagger = 0)
                    : ((this.stagger = (function (e) {
                          if ("number" == typeof e) return e;
                          var t = e.match(/(^\d*\.?\d*)(\w*)/),
                              i = t && t[1],
                              s = t && t[2];
                          return i.length
                              ? (i = parseFloat(i)) * (p[s] || 1)
                              : 0;
                      })(e)),
                      this.stagger);
            }),
            (u._positionItem = function (e, t, i, s, n) {
                s
                    ? e.goTo(t, i)
                    : (e.stagger(n * this.stagger), e.moveTo(t, i));
            }),
            (u._postLayout = function () {
                this.resizeContainer();
            }),
            (u.resizeContainer = function () {
                if (this._getOption("resizeContainer")) {
                    var e = this._getContainerSize();
                    e &&
                        (this._setContainerMeasure(e.width, !0),
                        this._setContainerMeasure(e.height, !1));
                }
            }),
            (u._getContainerSize = d),
            (u._setContainerMeasure = function (e, t) {
                if (void 0 !== e) {
                    var i = this.size;
                    i.isBorderBox &&
                        (e += t
                            ? i.paddingLeft +
                              i.paddingRight +
                              i.borderLeftWidth +
                              i.borderRightWidth
                            : i.paddingBottom +
                              i.paddingTop +
                              i.borderTopWidth +
                              i.borderBottomWidth),
                        (e = Math.max(e, 0)),
                        (this.element.style[t ? "width" : "height"] = e + "px");
                }
            }),
            (u._emitCompleteOnItems = function (e, t) {
                function i() {
                    n.dispatchEvent(e + "Complete", null, [t]);
                }
                function s() {
                    ++a == r && i();
                }
                var n = this,
                    r = t.length;
                if (t && r) {
                    var a = 0;
                    t.forEach(function (t) {
                        t.once(e, s);
                    });
                } else i();
            }),
            (u.dispatchEvent = function (e, t, i) {
                var s = t ? [t].concat(i) : i;
                if ((this.emitEvent(e, s), l))
                    if (
                        ((this.$element = this.$element || l(this.element)), t)
                    ) {
                        var n = l.Event(t);
                        (n.type = e), this.$element.trigger(n, i);
                    } else this.$element.trigger(e, i);
            }),
            (u.ignore = function (e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0);
            }),
            (u.unignore = function (e) {
                var t = this.getItem(e);
                t && delete t.isIgnored;
            }),
            (u.stamp = function (e) {
                (e = this._find(e)) &&
                    ((this.stamps = this.stamps.concat(e)),
                    e.forEach(this.ignore, this));
            }),
            (u.unstamp = function (e) {
                (e = this._find(e)) &&
                    e.forEach(function (e) {
                        s.removeFrom(this.stamps, e), this.unignore(e);
                    }, this);
            }),
            (u._find = function (e) {
                if (e)
                    return (
                        "string" == typeof e &&
                            (e = this.element.querySelectorAll(e)),
                        s.makeArray(e)
                    );
            }),
            (u._manageStamps = function () {
                this.stamps &&
                    this.stamps.length &&
                    (this._getBoundingRect(),
                    this.stamps.forEach(this._manageStamp, this));
            }),
            (u._getBoundingRect = function () {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
                };
            }),
            (u._manageStamp = d),
            (u._getElementOffset = function (e) {
                var t = e.getBoundingClientRect(),
                    s = this._boundingRect,
                    n = i(e);
                return {
                    left: t.left - s.left - n.marginLeft,
                    top: t.top - s.top - n.marginTop,
                    right: s.right - t.right - n.marginRight,
                    bottom: s.bottom - t.bottom - n.marginBottom,
                };
            }),
            (u.handleEvent = s.handleEvent),
            (u.bindResize = function () {
                e.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (u.unbindResize = function () {
                e.removeEventListener("resize", this),
                    (this.isResizeBound = !1);
            }),
            (u.onresize = function () {
                this.resize();
            }),
            s.debounceMethod(r, "onresize", 100),
            (u.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (u.needsResizeLayout = function () {
                var e = i(this.element);
                return this.size && e && e.innerWidth !== this.size.innerWidth;
            }),
            (u.addItems = function (e) {
                var t = this._itemize(e);
                return t.length && (this.items = this.items.concat(t)), t;
            }),
            (u.appended = function (e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t));
            }),
            (u.prepended = function (e) {
                var t = this._itemize(e);
                if (t.length) {
                    var i = this.items.slice(0);
                    (this.items = t.concat(i)),
                        this._resetLayout(),
                        this._manageStamps(),
                        this.layoutItems(t, !0),
                        this.reveal(t),
                        this.layoutItems(i);
                }
            }),
            (u.reveal = function (e) {
                if ((this._emitCompleteOnItems("reveal", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, i) {
                        e.stagger(i * t), e.reveal();
                    });
                }
            }),
            (u.hide = function (e) {
                if ((this._emitCompleteOnItems("hide", e), e && e.length)) {
                    var t = this.updateStagger();
                    e.forEach(function (e, i) {
                        e.stagger(i * t), e.hide();
                    });
                }
            }),
            (u.revealItemElements = function (e) {
                var t = this.getItems(e);
                this.reveal(t);
            }),
            (u.hideItemElements = function (e) {
                var t = this.getItems(e);
                this.hide(t);
            }),
            (u.getItem = function (e) {
                for (var t = 0; t < this.items.length; t++) {
                    var i = this.items[t];
                    if (i.element == e) return i;
                }
            }),
            (u.getItems = function (e) {
                e = s.makeArray(e);
                var t = [];
                return (
                    e.forEach(function (e) {
                        var i = this.getItem(e);
                        i && t.push(i);
                    }, this),
                    t
                );
            }),
            (u.remove = function (e) {
                var t = this.getItems(e);
                this._emitCompleteOnItems("remove", t),
                    t &&
                        t.length &&
                        t.forEach(function (e) {
                            e.remove(), s.removeFrom(this.items, e);
                        }, this);
            }),
            (u.destroy = function () {
                var e = this.element.style;
                (e.height = ""),
                    (e.position = ""),
                    (e.width = ""),
                    this.items.forEach(function (e) {
                        e.destroy();
                    }),
                    this.unbindResize();
                var t = this.element.outlayerGUID;
                delete h[t],
                    delete this.element.outlayerGUID,
                    l && l.removeData(this.element, this.constructor.namespace);
            }),
            (r.data = function (e) {
                var t = (e = s.getQueryElement(e)) && e.outlayerGUID;
                return t && h[t];
            }),
            (r.create = function (e, t) {
                var i = a(r);
                return (
                    (i.defaults = s.extend({}, r.defaults)),
                    s.extend(i.defaults, t),
                    (i.compatOptions = s.extend({}, r.compatOptions)),
                    (i.namespace = e),
                    (i.data = r.data),
                    (i.Item = a(n)),
                    s.htmlInit(i, e),
                    l && l.bridget && l.bridget(e, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (r.Item = n), r;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("outlayer")))
            : ((e.Isotope = e.Isotope || {}), (e.Isotope.Item = t(e.Outlayer)));
    })(window, function (e) {
        "use strict";
        function t() {
            e.Item.apply(this, arguments);
        }
        var i = (t.prototype = Object.create(e.Item.prototype)),
            s = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++),
                s.call(this),
                (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id),
                        (this.sortData["original-order"] = this.id),
                        (this.sortData.random = Math.random());
                    var e = this.layout.options.getSortData,
                        t = this.layout._sorters;
                    for (var i in e) {
                        var s = t[i];
                        this.sortData[i] = s(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-mode",
                  ["get-size/get-size", "outlayer/outlayer"],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("get-size"), require("outlayer")))
            : ((e.Isotope = e.Isotope || {}),
              (e.Isotope.LayoutMode = t(e.getSize, e.Outlayer)));
    })(window, function (e, t) {
        "use strict";
        function i(e) {
            (this.isotope = e),
                e &&
                    ((this.options = e.options[this.namespace]),
                    (this.element = e.element),
                    (this.items = e.filteredItems),
                    (this.size = e.size));
        }
        var s = i.prototype;
        return (
            [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
                "_getOption",
            ].forEach(function (e) {
                s[e] = function () {
                    return t.prototype[e].apply(this.isotope, arguments);
                };
            }),
            (s.needsVerticalResizeLayout = function () {
                var t = e(this.isotope.element);
                return (
                    this.isotope.size &&
                    t &&
                    t.innerHeight != this.isotope.size.innerHeight
                );
            }),
            (s._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (s.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (s.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (s.getSegmentSize = function (e, t) {
                var i = e + t,
                    s = "outer" + t;
                if ((this._getMeasurement(i, s), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[s]) || this.isotope.size["inner" + t];
                }
            }),
            (s.getFirstItemSize = function () {
                var t = this.isotope.filteredItems[0];
                return t && t.element && e(t.element);
            }),
            (s.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (s.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (e, t) {
                function n() {
                    i.apply(this, arguments);
                }
                return (
                    (n.prototype = Object.create(s)),
                    (n.prototype.constructor = n),
                    t && (n.options = t),
                    (n.prototype.namespace = e),
                    (i.modes[e] = n),
                    n
                );
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "masonry-layout/masonry",
                  ["outlayer/outlayer", "get-size/get-size"],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("outlayer"), require("get-size")))
            : (e.Masonry = t(e.Outlayer, e.getSize));
    })(window, function (e, t) {
        var i = e.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var s = i.prototype;
        return (
            (s._resetLayout = function () {
                this.getSize(),
                    this._getMeasurement("columnWidth", "outerWidth"),
                    this._getMeasurement("gutter", "outerWidth"),
                    this.measureColumns(),
                    (this.colYs = []);
                for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (s.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var e = this.items[0],
                        i = e && e.element;
                    this.columnWidth =
                        (i && t(i).outerWidth) || this.containerWidth;
                }
                var s = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    r = n / s,
                    a = s - (n % s);
                (r = Math[a && a < 1 ? "round" : "floor"](r)),
                    (this.cols = Math.max(r, 1));
            }),
            (s.getContainerWidth = function () {
                var e = this._getOption("fitWidth")
                        ? this.element.parentNode
                        : this.element,
                    i = t(e);
                this.containerWidth = i && i.innerWidth;
            }),
            (s._getItemLayoutPosition = function (e) {
                e.getSize();
                var t = e.size.outerWidth % this.columnWidth,
                    i = Math[t && t < 1 ? "round" : "ceil"](
                        e.size.outerWidth / this.columnWidth
                    );
                i = Math.min(i, this.cols);
                for (
                    var s = this[
                            this.options.horizontalOrder
                                ? "_getHorizontalColPosition"
                                : "_getTopColPosition"
                        ](i, e),
                        n = { x: this.columnWidth * s.col, y: s.y },
                        r = s.y + e.size.outerHeight,
                        a = i + s.col,
                        o = s.col;
                    o < a;
                    o++
                )
                    this.colYs[o] = r;
                return n;
            }),
            (s._getTopColPosition = function (e) {
                var t = this._getTopColGroup(e),
                    i = Math.min.apply(Math, t);
                return { col: t.indexOf(i), y: i };
            }),
            (s._getTopColGroup = function (e) {
                if (e < 2) return this.colYs;
                for (var t = [], i = this.cols + 1 - e, s = 0; s < i; s++)
                    t[s] = this._getColGroupY(s, e);
                return t;
            }),
            (s._getColGroupY = function (e, t) {
                if (t < 2) return this.colYs[e];
                var i = this.colYs.slice(e, e + t);
                return Math.max.apply(Math, i);
            }),
            (s._getHorizontalColPosition = function (e, t) {
                var i = this.horizontalColIndex % this.cols;
                i = e > 1 && i + e > this.cols ? 0 : i;
                var s = t.size.outerWidth && t.size.outerHeight;
                return (
                    (this.horizontalColIndex = s
                        ? i + e
                        : this.horizontalColIndex),
                    { col: i, y: this._getColGroupY(i, e) }
                );
            }),
            (s._manageStamp = function (e) {
                var i = t(e),
                    s = this._getElementOffset(e),
                    n = this._getOption("originLeft") ? s.left : s.right,
                    r = n + i.outerWidth,
                    a = Math.floor(n / this.columnWidth);
                a = Math.max(0, a);
                var o = Math.floor(r / this.columnWidth);
                (o -= r % this.columnWidth ? 0 : 1),
                    (o = Math.min(this.cols - 1, o));
                for (
                    var l =
                            (this._getOption("originTop") ? s.top : s.bottom) +
                            i.outerHeight,
                        d = a;
                    d <= o;
                    d++
                )
                    this.colYs[d] = Math.max(l, this.colYs[d]);
            }),
            (s._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var e = { height: this.maxY };
                return (
                    this._getOption("fitWidth") &&
                        (e.width = this._getContainerFitWidth()),
                    e
                );
            }),
            (s._getContainerFitWidth = function () {
                for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; )
                    e++;
                return (this.cols - e) * this.columnWidth - this.gutter;
            }),
            (s.needsResizeLayout = function () {
                var e = this.containerWidth;
                return this.getContainerWidth(), e != this.containerWidth;
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/masonry",
                  ["../layout-mode", "masonry-layout/masonry"],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(
                  require("../layout-mode"),
                  require("masonry-layout")
              ))
            : t(e.Isotope.LayoutMode, e.Masonry);
    })(window, function (e, t) {
        "use strict";
        var i = e.create("masonry"),
            s = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var r in t.prototype) n[r] || (s[r] = t.prototype[r]);
        var a = s.measureColumns;
        s.measureColumns = function () {
            (this.items = this.isotope.filteredItems), a.call(this);
        };
        var o = s._getOption;
        return (
            (s._getOption = function (e) {
                return "fitWidth" == e
                    ? void 0 !== this.options.isFitWidth
                        ? this.options.isFitWidth
                        : this.options.fitWidth
                    : o.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/fit-rows",
                  ["../layout-mode"],
                  t
              )
            : "object" == typeof exports
            ? (module.exports = t(require("../layout-mode")))
            : t(e.Isotope.LayoutMode);
    })(window, function (e) {
        "use strict";
        var t = e.create("fitRows"),
            i = t.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0),
                    (this.y = 0),
                    (this.maxY = 0),
                    this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (e) {
                e.getSize();
                var t = e.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x &&
                    t + this.x > i &&
                    ((this.x = 0), (this.y = this.maxY));
                var s = { x: this.x, y: this.y };
                return (
                    (this.maxY = Math.max(
                        this.maxY,
                        this.y + e.size.outerHeight
                    )),
                    (this.x += t),
                    s
                );
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  "isotope-layout/js/layout-modes/vertical",
                  ["../layout-mode"],
                  t
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("../layout-mode")))
            : t(e.Isotope.LayoutMode);
    })(window, function (e) {
        "use strict";
        var t = e.create("vertical", { horizontalAlignment: 0 }),
            i = t.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (e) {
                e.getSize();
                var t =
                        (this.isotope.size.innerWidth - e.size.outerWidth) *
                        this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += e.size.outerHeight), { x: t, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            t
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(
                  [
                      "outlayer/outlayer",
                      "get-size/get-size",
                      "desandro-matches-selector/matches-selector",
                      "fizzy-ui-utils/utils",
                      "isotope-layout/js/item",
                      "isotope-layout/js/layout-mode",
                      "isotope-layout/js/layout-modes/masonry",
                      "isotope-layout/js/layout-modes/fit-rows",
                      "isotope-layout/js/layout-modes/vertical",
                  ],
                  function (i, s, n, r, a, o) {
                      return t(e, i, s, n, r, a, o);
                  }
              )
            : "object" == typeof module && module.exports
            ? (module.exports = t(
                  e,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (e.Isotope = t(
                  e,
                  e.Outlayer,
                  e.getSize,
                  e.matchesSelector,
                  e.fizzyUIUtils,
                  e.Isotope.Item,
                  e.Isotope.LayoutMode
              ));
    })(window, function (e, t, i, s, n, r, a) {
        var o = e.jQuery,
            l = String.prototype.trim
                ? function (e) {
                      return e.trim();
                  }
                : function (e) {
                      return e.replace(/^\s+|\s+$/g, "");
                  },
            d = t.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0,
            });
        (d.Item = r), (d.LayoutMode = a);
        var c = d.prototype;
        (c._create = function () {
            for (var e in ((this.itemGUID = 0),
            (this._sorters = {}),
            this._getSorters(),
            t.prototype._create.call(this),
            (this.modes = {}),
            (this.filteredItems = this.items),
            (this.sortHistory = ["original-order"]),
            a.modes))
                this._initLayoutMode(e);
        }),
            (c.reloadItems = function () {
                (this.itemGUID = 0), t.prototype.reloadItems.call(this);
            }),
            (c._itemize = function () {
                for (
                    var e = t.prototype._itemize.apply(this, arguments), i = 0;
                    i < e.length;
                    i++
                ) {
                    var s = e[i];
                    s.id = this.itemGUID++;
                }
                return this._updateItemsSortData(e), e;
            }),
            (c._initLayoutMode = function (e) {
                var t = a.modes[e],
                    i = this.options[e] || {};
                (this.options[e] = t.options ? n.extend(t.options, i) : i),
                    (this.modes[e] = new t(this));
            }),
            (c.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout")
                    ? void this.arrange()
                    : void this._layout();
            }),
            (c._layout = function () {
                var e = this._getIsInstant();
                this._resetLayout(),
                    this._manageStamps(),
                    this.layoutItems(this.filteredItems, e),
                    (this._isLayoutInited = !0);
            }),
            (c.arrange = function (e) {
                this.option(e), this._getIsInstant();
                var t = this._filter(this.items);
                (this.filteredItems = t.matches),
                    this._bindArrangeComplete(),
                    this._isInstant
                        ? this._noTransition(this._hideReveal, [t])
                        : this._hideReveal(t),
                    this._sort(),
                    this._layout();
            }),
            (c._init = c.arrange),
            (c._hideReveal = function (e) {
                this.reveal(e.needReveal), this.hide(e.needHide);
            }),
            (c._getIsInstant = function () {
                var e = this._getOption("layoutInstant"),
                    t = void 0 !== e ? e : !this._isLayoutInited;
                return (this._isInstant = t), t;
            }),
            (c._bindArrangeComplete = function () {
                function e() {
                    t &&
                        i &&
                        s &&
                        n.dispatchEvent("arrangeComplete", null, [
                            n.filteredItems,
                        ]);
                }
                var t,
                    i,
                    s,
                    n = this;
                this.once("layoutComplete", function () {
                    (t = !0), e();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), e();
                    }),
                    this.once("revealComplete", function () {
                        (s = !0), e();
                    });
            }),
            (c._filter = function (e) {
                var t = this.options.filter;
                t = t || "*";
                for (
                    var i = [],
                        s = [],
                        n = [],
                        r = this._getFilterTest(t),
                        a = 0;
                    a < e.length;
                    a++
                ) {
                    var o = e[a];
                    if (!o.isIgnored) {
                        var l = r(o);
                        l && i.push(o),
                            l && o.isHidden
                                ? s.push(o)
                                : l || o.isHidden || n.push(o);
                    }
                }
                return { matches: i, needReveal: s, needHide: n };
            }),
            (c._getFilterTest = function (e) {
                return o && this.options.isJQueryFiltering
                    ? function (t) {
                          return o(t.element).is(e);
                      }
                    : "function" == typeof e
                    ? function (t) {
                          return e(t.element);
                      }
                    : function (t) {
                          return s(t.element, e);
                      };
            }),
            (c.updateSortData = function (e) {
                var t;
                e
                    ? ((e = n.makeArray(e)), (t = this.getItems(e)))
                    : (t = this.items),
                    this._getSorters(),
                    this._updateItemsSortData(t);
            }),
            (c._getSorters = function () {
                var e = this.options.getSortData;
                for (var t in e) {
                    var i = e[t];
                    this._sorters[t] = h(i);
                }
            }),
            (c._updateItemsSortData = function (e) {
                for (var t = e && e.length, i = 0; t && i < t; i++) {
                    e[i].updateSortData();
                }
            });
        var h = function (e) {
            if ("string" != typeof e) return e;
            var t = l(e).split(" "),
                i = t[0],
                s = i.match(/^\[(.+)\]$/),
                n = (function (e, t) {
                    return e
                        ? function (t) {
                              return t.getAttribute(e);
                          }
                        : function (e) {
                              var i = e.querySelector(t);
                              return i && i.textContent;
                          };
                })(s && s[1], i),
                r = d.sortDataParsers[t[1]];
            return r
                ? function (e) {
                      return e && r(n(e));
                  }
                : function (e) {
                      return e && n(e);
                  };
        };
        (d.sortDataParsers = {
            parseInt: function (e) {
                return parseInt(e, 10);
            },
            parseFloat: function (e) {
                return parseFloat(e);
            },
        }),
            (c._sort = function () {
                if (this.options.sortBy) {
                    var e = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(e) ||
                        (this.sortHistory = e.concat(this.sortHistory));
                    var t = (function (e, t) {
                        return function (i, s) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n],
                                    a = i.sortData[r],
                                    o = s.sortData[r];
                                if (a > o || a < o)
                                    return (
                                        (a > o ? 1 : -1) *
                                        ((void 0 !== t[r] ? t[r] : t) ? 1 : -1)
                                    );
                            }
                            return 0;
                        };
                    })(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(t);
                }
            }),
            (c._getIsSameSortBy = function (e) {
                for (var t = 0; t < e.length; t++)
                    if (e[t] != this.sortHistory[t]) return !1;
                return !0;
            }),
            (c._mode = function () {
                var e = this.options.layoutMode,
                    t = this.modes[e];
                if (!t) throw new Error("No layout mode: " + e);
                return (t.options = this.options[e]), t;
            }),
            (c._resetLayout = function () {
                t.prototype._resetLayout.call(this),
                    this._mode()._resetLayout();
            }),
            (c._getItemLayoutPosition = function (e) {
                return this._mode()._getItemLayoutPosition(e);
            }),
            (c._manageStamp = function (e) {
                this._mode()._manageStamp(e);
            }),
            (c._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (c.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (c.appended = function (e) {
                var t = this.addItems(e);
                if (t.length) {
                    var i = this._filterRevealAdded(t);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (c.prepended = function (e) {
                var t = this._itemize(e);
                if (t.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(t);
                    this.layoutItems(this.filteredItems),
                        (this.filteredItems = i.concat(this.filteredItems)),
                        (this.items = t.concat(this.items));
                }
            }),
            (c._filterRevealAdded = function (e) {
                var t = this._filter(e);
                return (
                    this.hide(t.needHide),
                    this.reveal(t.matches),
                    this.layoutItems(t.matches, !0),
                    t.matches
                );
            }),
            (c.insert = function (e) {
                var t = this.addItems(e);
                if (t.length) {
                    var i,
                        s,
                        n = t.length;
                    for (i = 0; i < n; i++)
                        (s = t[i]), this.element.appendChild(s.element);
                    var r = this._filter(t).matches;
                    for (i = 0; i < n; i++) t[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++)
                        delete t[i].isLayoutInstant;
                    this.reveal(r);
                }
            });
        var u = c.remove;
        return (
            (c.remove = function (e) {
                e = n.makeArray(e);
                var t = this.getItems(e);
                u.call(this, e);
                for (var i = t && t.length, s = 0; i && s < i; s++) {
                    var r = t[s];
                    n.removeFrom(this.filteredItems, r);
                }
            }),
            (c.shuffle = function () {
                for (var e = 0; e < this.items.length; e++) {
                    this.items[e].sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (c._noTransition = function (e, t) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var s = e.apply(this, t);
                return (this.options.transitionDuration = i), s;
            }),
            (c.getFilteredItemElements = function () {
                return this.filteredItems.map(function (e) {
                    return e.element;
                });
            }),
            d
        );
    }),
    (function () {
        "use strict";
        function e(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                t &&
                    (s = s.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    i.push.apply(i, s);
            }
            return i;
        }
        function t(e, t, i) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: i,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = i),
                e
            );
        }
        function i(e, t) {
            for (var i = 0; i < t.length; i++) {
                var s = t[i];
                (s.enumerable = s.enumerable || !1),
                    (s.configurable = !0),
                    "value" in s && (s.writable = !0),
                    Object.defineProperty(e, s.key, s);
            }
        }
        new ((function () {
            function s(e) {
                !(function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                })(this, s),
                    (this.defaults = {
                        start: 0,
                        end: 100,
                        duration: 2e3,
                        delay: 10,
                        once: !0,
                        decimals: 0,
                        legacy: !0,
                        currency: !1,
                        currencysymbol: !1,
                        separator: !1,
                        separatorsymbol: ",",
                        selector: ".purecounter",
                    }),
                    (this.configOptions = Object.assign(
                        {},
                        this.defaults,
                        e || {}
                    )),
                    this.registerEventListeners();
            }
            var n, r;
            return (
                (n = s),
                (r = [
                    {
                        key: "registerEventListeners",
                        value: function () {
                            var e = document.querySelectorAll(
                                this.configOptions.selector
                            );
                            if (this.intersectionListenerSupported()) {
                                var t = new IntersectionObserver(
                                    this.animateElements.bind(this),
                                    {
                                        root: null,
                                        rootMargin: "20px",
                                        threshold: 0.5,
                                    }
                                );
                                e.forEach(function (e) {
                                    t.observe(e);
                                });
                            } else
                                window.addEventListener &&
                                    (this.animateLegacy(e),
                                    window.addEventListener(
                                        "scroll",
                                        function (t) {
                                            this.animateLegacy(e);
                                        },
                                        { passive: !0 }
                                    ));
                        },
                    },
                    {
                        key: "animateLegacy",
                        value: function (e) {
                            var t = this;
                            e.forEach(function (e) {
                                !0 === t.parseConfig(e).legacy &&
                                    t.elementIsInView(e) &&
                                    t.animateElements([e]);
                            });
                        },
                    },
                    {
                        key: "animateElements",
                        value: function (e, t) {
                            var i = this;
                            e.forEach(function (e) {
                                var s = e.target || e,
                                    n = i.parseConfig(s);
                                if (n.duration <= 0)
                                    return (s.innerHTML = i.formatNumber(
                                        n.end,
                                        n
                                    ));
                                if (
                                    (!t && !i.elementIsInView(e)) ||
                                    (t && e.intersectionRatio < 0.5)
                                ) {
                                    var r = n.start > n.end ? n.end : n.start;
                                    return (s.innerHTML = i.formatNumber(r, n));
                                }
                                setTimeout(function () {
                                    return i.startCounter(s, n);
                                }, n.delay);
                            });
                        },
                    },
                    {
                        key: "startCounter",
                        value: function (e, t) {
                            var i = this,
                                s = (t.end - t.start) / (t.duration / t.delay),
                                n = "inc";
                            t.start > t.end && ((n = "dec"), (s *= -1));
                            var r = this.parseValue(t.start);
                            (e.innerHTML = this.formatNumber(r, t)),
                                !0 === t.once &&
                                    e.setAttribute(
                                        "data-purecounter-duration",
                                        0
                                    );
                            var a = setInterval(function () {
                                var o = i.nextNumber(r, s, n);
                                (e.innerHTML = i.formatNumber(o, t)),
                                    (((r = o) >= t.end && "inc" == n) ||
                                        (r <= t.end && "dec" == n)) &&
                                        ((e.innerHTML = i.formatNumber(
                                            t.end,
                                            t
                                        )),
                                        clearInterval(a));
                            }, t.delay);
                        },
                    },
                    {
                        key: "parseConfig",
                        value: function (i) {
                            var s = this,
                                n = (function (i) {
                                    for (var s = 1; s < arguments.length; s++) {
                                        var n =
                                            null != arguments[s]
                                                ? arguments[s]
                                                : {};
                                        s % 2
                                            ? e(Object(n), !0).forEach(
                                                  function (e) {
                                                      t(i, e, n[e]);
                                                  }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  i,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : e(Object(n)).forEach(function (
                                                  e
                                              ) {
                                                  Object.defineProperty(
                                                      i,
                                                      e,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          e
                                                      )
                                                  );
                                              });
                                    }
                                    return i;
                                })({}, this.configOptions),
                                r = [].filter.call(i.attributes, function (e) {
                                    return /^data-purecounter-/.test(e.name);
                                }),
                                a = {};
                            return (
                                r.forEach(function (e) {
                                    var t = e.name
                                            .replace("data-purecounter-", "")
                                            .toLowerCase(),
                                        i =
                                            "duration" == t
                                                ? parseInt(
                                                      1e3 *
                                                          s.parseValue(e.value)
                                                  )
                                                : s.parseValue(e.value);
                                    a[t] = i;
                                }),
                                Object.assign(n, a)
                            );
                        },
                    },
                    {
                        key: "nextNumber",
                        value: function (e, t) {
                            var i =
                                arguments.length > 2 && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : "inc";
                            return (
                                (e = this.parseValue(e)),
                                (t = this.parseValue(t)),
                                parseFloat("inc" === i ? e + t : e - t)
                            );
                        },
                    },
                    {
                        key: "convertToCurrencySystem",
                        value: function (e, t) {
                            var i = t.currencysymbol || "",
                                s = t.decimals || 1;
                            return (
                                i +
                                ((e = Math.abs(Number(e))) >= 1e12
                                    ? "".concat((e / 1e12).toFixed(s), " T")
                                    : e >= 1e9
                                    ? "".concat((e / 1e9).toFixed(s), " B")
                                    : e >= 1e6
                                    ? "".concat((e / 1e6).toFixed(s), " M")
                                    : e >= 1e3
                                    ? "".concat((e / 1e12).toFixed(s), " K")
                                    : e.toFixed(s))
                            );
                        },
                    },
                    {
                        key: "applySeparator",
                        value: function (e, t) {
                            return t.separator
                                ? e
                                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                                      .replace(
                                          new RegExp(/,/gi, "gi"),
                                          t.separatorsymbol
                                      )
                                : e.replace(new RegExp(/,/gi, "gi"), "");
                        },
                    },
                    {
                        key: "formatNumber",
                        value: function (e, t) {
                            var i = {
                                minimumFractionDigits: t.decimals,
                                maximumFractionDigits: t.decimals,
                            };
                            return (
                                (e = t.currency
                                    ? this.convertToCurrencySystem(e, t)
                                    : parseFloat(e)),
                                this.applySeparator(
                                    e.toLocaleString(void 0, i),
                                    t
                                )
                            );
                        },
                    },
                    {
                        key: "parseValue",
                        value: function (e) {
                            return /^[0-9]+\.[0-9]+$/.test(e)
                                ? parseFloat(e)
                                : /^[0-9]+$/.test(e)
                                ? parseInt(e)
                                : /^true|false/i.test(e)
                                ? /^true/i.test(e)
                                : e;
                        },
                    },
                    {
                        key: "elementIsInView",
                        value: function (e) {
                            for (
                                var t = e.offsetTop,
                                    i = e.offsetLeft,
                                    s = e.offsetWidth,
                                    n = e.offsetHeight;
                                e.offsetParent;

                            )
                                (t += (e = e.offsetParent).offsetTop),
                                    (i += e.offsetLeft);
                            return (
                                t >= window.pageYOffset &&
                                i >= window.pageXOffset &&
                                t + n <=
                                    window.pageYOffset + window.innerHeight &&
                                i + s <= window.pageXOffset + window.innerWidth
                            );
                        },
                    },
                    {
                        key: "intersectionListenerSupported",
                        value: function () {
                            return (
                                "IntersectionObserver" in window &&
                                "IntersectionObserverEntry" in window &&
                                "intersectionRatio" in
                                    window.IntersectionObserverEntry.prototype
                            );
                        },
                    },
                ]) && i(n.prototype, r),
                s
            );
        })())();
    })(),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).Swiper = t());
    })(this, function () {
        "use strict";
        function e(e) {
            return (
                null !== e &&
                "object" == typeof e &&
                "constructor" in e &&
                e.constructor === Object
            );
        }
        function t(i = {}, s = {}) {
            Object.keys(s).forEach((n) => {
                void 0 === i[n]
                    ? (i[n] = s[n])
                    : e(s[n]) &&
                      e(i[n]) &&
                      Object.keys(s[n]).length > 0 &&
                      t(i[n], s[n]);
            });
        }
        const i = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: { blur() {}, nodeName: "" },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({ initEvent() {} }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => [],
            }),
            createElementNS: () => ({}),
            importNode: () => null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
        };
        function s() {
            const e = "undefined" != typeof document ? document : {};
            return t(e, i), e;
        }
        const n = {
            document: i,
            navigator: { userAgent: "" },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: "",
            },
            history: { replaceState() {}, pushState() {}, go() {}, back() {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({ getPropertyValue: () => "" }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: (e) =>
                "undefined" == typeof setTimeout
                    ? (e(), null)
                    : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e);
            },
        };
        function r() {
            const e = "undefined" != typeof window ? window : {};
            return t(e, n), e;
        }
        class a extends Array {
            constructor(e) {
                super(...(e || [])),
                    (function (e) {
                        const t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e;
                            },
                        });
                    })(this);
            }
        }
        function o(e = []) {
            const t = [];
            return (
                e.forEach((e) => {
                    Array.isArray(e) ? t.push(...o(e)) : t.push(e);
                }),
                t
            );
        }
        function l(e, t) {
            return Array.prototype.filter.call(e, t);
        }
        function d(e, t) {
            const i = r(),
                n = s();
            let o = [];
            if (!t && e instanceof a) return e;
            if (!e) return new a(o);
            if ("string" == typeof e) {
                const i = e.trim();
                if (i.indexOf("<") >= 0 && i.indexOf(">") >= 0) {
                    let e = "div";
                    0 === i.indexOf("<li") && (e = "ul"),
                        0 === i.indexOf("<tr") && (e = "tbody"),
                        (0 !== i.indexOf("<td") && 0 !== i.indexOf("<th")) ||
                            (e = "tr"),
                        0 === i.indexOf("<tbody") && (e = "table"),
                        0 === i.indexOf("<option") && (e = "select");
                    const t = n.createElement(e);
                    t.innerHTML = i;
                    for (let e = 0; e < t.childNodes.length; e += 1)
                        o.push(t.childNodes[e]);
                } else
                    o = (function (e, t) {
                        if ("string" != typeof e) return [e];
                        const i = [],
                            s = t.querySelectorAll(e);
                        for (let e = 0; e < s.length; e += 1) i.push(s[e]);
                        return i;
                    })(e.trim(), t || n);
            } else if (e.nodeType || e === i || e === n) o.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof a) return e;
                o = e;
            }
            return new a(
                (function (e) {
                    const t = [];
                    for (let i = 0; i < e.length; i += 1)
                        -1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t;
                })(o)
            );
        }
        d.fn = a.prototype;
        const c = {
            addClass: function (...e) {
                const t = o(e.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.add(...t);
                    }),
                    this
                );
            },
            removeClass: function (...e) {
                const t = o(e.map((e) => e.split(" ")));
                return (
                    this.forEach((e) => {
                        e.classList.remove(...t);
                    }),
                    this
                );
            },
            hasClass: function (...e) {
                const t = o(e.map((e) => e.split(" ")));
                return (
                    l(
                        this,
                        (e) =>
                            t.filter((t) => e.classList.contains(t)).length > 0
                    ).length > 0
                );
            },
            toggleClass: function (...e) {
                const t = o(e.map((e) => e.split(" ")));
                this.forEach((e) => {
                    t.forEach((t) => {
                        e.classList.toggle(t);
                    });
                });
            },
            attr: function (e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else
                        for (const t in e)
                            (this[i][t] = e[t]), this[i].setAttribute(t, e[t]);
                return this;
            },
            removeAttr: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this;
            },
            transform: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transform = e;
                return this;
            },
            transition: function (e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transitionDuration =
                        "string" != typeof e ? `${e}ms` : e;
                return this;
            },
            on: function (...e) {
                let [t, i, s, n] = e;
                function r(e) {
                    const t = e.target;
                    if (!t) return;
                    const n = e.target.dom7EventData || [];
                    if ((n.indexOf(e) < 0 && n.unshift(e), d(t).is(i)))
                        s.apply(t, n);
                    else {
                        const e = d(t).parents();
                        for (let t = 0; t < e.length; t += 1)
                            d(e[t]).is(i) && s.apply(e[t], n);
                    }
                }
                function a(e) {
                    const t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
                }
                "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
                    n || (n = !1);
                const o = t.split(" ");
                let l;
                for (let e = 0; e < this.length; e += 1) {
                    const t = this[e];
                    if (i)
                        for (l = 0; l < o.length; l += 1) {
                            const e = o[l];
                            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                                t.dom7LiveListeners[e] ||
                                    (t.dom7LiveListeners[e] = []),
                                t.dom7LiveListeners[e].push({
                                    listener: s,
                                    proxyListener: r,
                                }),
                                t.addEventListener(e, r, n);
                        }
                    else
                        for (l = 0; l < o.length; l += 1) {
                            const e = o[l];
                            t.dom7Listeners || (t.dom7Listeners = {}),
                                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                                t.dom7Listeners[e].push({
                                    listener: s,
                                    proxyListener: a,
                                }),
                                t.addEventListener(e, a, n);
                        }
                }
                return this;
            },
            off: function (...e) {
                let [t, i, s, n] = e;
                "function" == typeof e[1] && (([t, s, n] = e), (i = void 0)),
                    n || (n = !1);
                const r = t.split(" ");
                for (let e = 0; e < r.length; e += 1) {
                    const t = r[e];
                    for (let e = 0; e < this.length; e += 1) {
                        const r = this[e];
                        let a;
                        if (
                            (!i && r.dom7Listeners
                                ? (a = r.dom7Listeners[t])
                                : i &&
                                  r.dom7LiveListeners &&
                                  (a = r.dom7LiveListeners[t]),
                            a && a.length)
                        )
                            for (let e = a.length - 1; e >= 0; e -= 1) {
                                const i = a[e];
                                (s && i.listener === s) ||
                                (s &&
                                    i.listener &&
                                    i.listener.dom7proxy &&
                                    i.listener.dom7proxy === s)
                                    ? (r.removeEventListener(
                                          t,
                                          i.proxyListener,
                                          n
                                      ),
                                      a.splice(e, 1))
                                    : s ||
                                      (r.removeEventListener(
                                          t,
                                          i.proxyListener,
                                          n
                                      ),
                                      a.splice(e, 1));
                            }
                    }
                }
                return this;
            },
            trigger: function (...e) {
                const t = r(),
                    i = e[0].split(" "),
                    s = e[1];
                for (let n = 0; n < i.length; n += 1) {
                    const r = i[n];
                    for (let i = 0; i < this.length; i += 1) {
                        const n = this[i];
                        if (t.CustomEvent) {
                            const i = new t.CustomEvent(r, {
                                detail: s,
                                bubbles: !0,
                                cancelable: !0,
                            });
                            (n.dom7EventData = e.filter((e, t) => t > 0)),
                                n.dispatchEvent(i),
                                (n.dom7EventData = []),
                                delete n.dom7EventData;
                        }
                    }
                }
                return this;
            },
            transitionEnd: function (e) {
                const t = this;
                return (
                    e &&
                        t.on("transitionend", function i(s) {
                            s.target === this &&
                                (e.call(this, s), t.off("transitionend", i));
                        }),
                    this
                );
            },
            outerWidth: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return (
                            this[0].offsetWidth +
                            parseFloat(e.getPropertyValue("margin-right")) +
                            parseFloat(e.getPropertyValue("margin-left"))
                        );
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (this.length > 0) {
                    if (e) {
                        const e = this.styles();
                        return (
                            this[0].offsetHeight +
                            parseFloat(e.getPropertyValue("margin-top")) +
                            parseFloat(e.getPropertyValue("margin-bottom"))
                        );
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            styles: function () {
                const e = r();
                return this[0] ? e.getComputedStyle(this[0], null) : {};
            },
            offset: function () {
                if (this.length > 0) {
                    const e = r(),
                        t = s(),
                        i = this[0],
                        n = i.getBoundingClientRect(),
                        a = t.body,
                        o = i.clientTop || a.clientTop || 0,
                        l = i.clientLeft || a.clientLeft || 0,
                        d = i === e ? e.scrollY : i.scrollTop,
                        c = i === e ? e.scrollX : i.scrollLeft;
                    return { top: n.top + d - o, left: n.left + c - l };
                }
                return null;
            },
            css: function (e, t) {
                const i = r();
                let s;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (s = 0; s < this.length; s += 1)
                            for (const t in e) this[s].style[t] = e[t];
                        return this;
                    }
                    if (this[0])
                        return i
                            .getComputedStyle(this[0], null)
                            .getPropertyValue(e);
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
                    return this;
                }
                return this;
            },
            each: function (e) {
                return e
                    ? (this.forEach((t, i) => {
                          e.apply(t, [t, i]);
                      }),
                      this)
                    : this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this;
            },
            is: function (e) {
                const t = r(),
                    i = s(),
                    n = this[0];
                let o, l;
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector)
                        return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (o = d(e), l = 0; l < o.length; l += 1)
                        if (o[l] === n) return !0;
                    return !1;
                }
                if (e === i) return n === i;
                if (e === t) return n === t;
                if (e.nodeType || e instanceof a) {
                    for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
                        if (o[l] === n) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                let e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                const t = this.length;
                if (e > t - 1) return d([]);
                if (e < 0) {
                    const i = t + e;
                    return d(i < 0 ? [] : [this[i]]);
                }
                return d([this[e]]);
            },
            append: function (...e) {
                let t;
                const i = s();
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let e = 0; e < this.length; e += 1)
                        if ("string" == typeof t) {
                            const s = i.createElement("div");
                            for (s.innerHTML = t; s.firstChild; )
                                this[e].appendChild(s.firstChild);
                        } else if (t instanceof a)
                            for (let i = 0; i < t.length; i += 1)
                                this[e].appendChild(t[i]);
                        else this[e].appendChild(t);
                }
                return this;
            },
            prepend: function (e) {
                const t = s();
                let i, n;
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        const s = t.createElement("div");
                        for (
                            s.innerHTML = e, n = s.childNodes.length - 1;
                            n >= 0;
                            n -= 1
                        )
                            this[i].insertBefore(
                                s.childNodes[n],
                                this[i].childNodes[0]
                            );
                    } else if (e instanceof a)
                        for (n = 0; n < e.length; n += 1)
                            this[i].insertBefore(e[n], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                return this;
            },
            next: function (e) {
                return this.length > 0
                    ? e
                        ? this[0].nextElementSibling &&
                          d(this[0].nextElementSibling).is(e)
                            ? d([this[0].nextElementSibling])
                            : d([])
                        : this[0].nextElementSibling
                        ? d([this[0].nextElementSibling])
                        : d([])
                    : d([]);
            },
            nextAll: function (e) {
                const t = [];
                let i = this[0];
                if (!i) return d([]);
                for (; i.nextElementSibling; ) {
                    const s = i.nextElementSibling;
                    e ? d(s).is(e) && t.push(s) : t.push(s), (i = s);
                }
                return d(t);
            },
            prev: function (e) {
                if (this.length > 0) {
                    const t = this[0];
                    return e
                        ? t.previousElementSibling &&
                          d(t.previousElementSibling).is(e)
                            ? d([t.previousElementSibling])
                            : d([])
                        : t.previousElementSibling
                        ? d([t.previousElementSibling])
                        : d([]);
                }
                return d([]);
            },
            prevAll: function (e) {
                const t = [];
                let i = this[0];
                if (!i) return d([]);
                for (; i.previousElementSibling; ) {
                    const s = i.previousElementSibling;
                    e ? d(s).is(e) && t.push(s) : t.push(s), (i = s);
                }
                return d(t);
            },
            parent: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode &&
                        (e
                            ? d(this[i].parentNode).is(e) &&
                              t.push(this[i].parentNode)
                            : t.push(this[i].parentNode));
                return d(t);
            },
            parents: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].parentNode;
                    for (; s; )
                        e ? d(s).is(e) && t.push(s) : t.push(s),
                            (s = s.parentNode);
                }
                return d(t);
            },
            closest: function (e) {
                let t = this;
                return void 0 === e
                    ? d([])
                    : (t.is(e) || (t = t.parents(e).eq(0)), t);
            },
            find: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    const s = this[i].querySelectorAll(e);
                    for (let e = 0; e < s.length; e += 1) t.push(s[e]);
                }
                return d(t);
            },
            children: function (e) {
                const t = [];
                for (let i = 0; i < this.length; i += 1) {
                    const s = this[i].children;
                    for (let i = 0; i < s.length; i += 1)
                        (e && !d(s[i]).is(e)) || t.push(s[i]);
                }
                return d(t);
            },
            filter: function (e) {
                return d(l(this, e));
            },
            remove: function () {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode &&
                        this[e].parentNode.removeChild(this[e]);
                return this;
            },
        };
        function h(e, t = 0) {
            return setTimeout(e, t);
        }
        function u() {
            return Date.now();
        }
        function p(e, t = "x") {
            const i = r();
            let s, n, a;
            const o = (function (e) {
                const t = r();
                let i;
                return (
                    t.getComputedStyle && (i = t.getComputedStyle(e, null)),
                    !i && e.currentStyle && (i = e.currentStyle),
                    i || (i = e.style),
                    i
                );
            })(e);
            return (
                i.WebKitCSSMatrix
                    ? ((n = o.transform || o.webkitTransform),
                      n.split(",").length > 6 &&
                          (n = n
                              .split(", ")
                              .map((e) => e.replace(",", "."))
                              .join(", ")),
                      (a = new i.WebKitCSSMatrix("none" === n ? "" : n)))
                    : ((a =
                          o.MozTransform ||
                          o.OTransform ||
                          o.MsTransform ||
                          o.msTransform ||
                          o.transform ||
                          o
                              .getPropertyValue("transform")
                              .replace("translate(", "matrix(1, 0, 0, 1,")),
                      (s = a.toString().split(","))),
                "x" === t &&
                    (n = i.WebKitCSSMatrix
                        ? a.m41
                        : 16 === s.length
                        ? parseFloat(s[12])
                        : parseFloat(s[4])),
                "y" === t &&
                    (n = i.WebKitCSSMatrix
                        ? a.m42
                        : 16 === s.length
                        ? parseFloat(s[13])
                        : parseFloat(s[5])),
                n || 0
            );
        }
        function f(e) {
            return (
                "object" == typeof e &&
                null !== e &&
                e.constructor &&
                "Object" === Object.prototype.toString.call(e).slice(8, -1)
            );
        }
        function m(...e) {
            const t = Object(e[0]),
                i = ["__proto__", "constructor", "prototype"];
            for (let n = 1; n < e.length; n += 1) {
                const r = e[n];
                if (
                    null != r &&
                    ((s = r),
                    !("undefined" != typeof window &&
                    void 0 !== window.HTMLElement
                        ? s instanceof HTMLElement
                        : s && (1 === s.nodeType || 11 === s.nodeType)))
                ) {
                    const e = Object.keys(Object(r)).filter(
                        (e) => i.indexOf(e) < 0
                    );
                    for (let i = 0, s = e.length; i < s; i += 1) {
                        const s = e[i],
                            n = Object.getOwnPropertyDescriptor(r, s);
                        void 0 !== n &&
                            n.enumerable &&
                            (f(t[s]) && f(r[s])
                                ? r[s].__swiper__
                                    ? (t[s] = r[s])
                                    : m(t[s], r[s])
                                : !f(t[s]) && f(r[s])
                                ? ((t[s] = {}),
                                  r[s].__swiper__
                                      ? (t[s] = r[s])
                                      : m(t[s], r[s]))
                                : (t[s] = r[s]));
                    }
                }
            }
            var s;
            return t;
        }
        function g(e, t, i) {
            e.style.setProperty(t, i);
        }
        function v({ swiper: e, targetPosition: t, side: i }) {
            const s = r(),
                n = -e.translate;
            let a,
                o = null;
            const l = e.params.speed;
            (e.wrapperEl.style.scrollSnapType = "none"),
                s.cancelAnimationFrame(e.cssModeFrameID);
            const d = t > n ? "next" : "prev",
                c = (e, t) =>
                    ("next" === d && e >= t) || ("prev" === d && e <= t),
                h = () => {
                    (a = new Date().getTime()), null === o && (o = a);
                    const r = Math.max(Math.min((a - o) / l, 1), 0),
                        d = 0.5 - Math.cos(r * Math.PI) / 2;
                    let u = n + d * (t - n);
                    if (
                        (c(u, t) && (u = t),
                        e.wrapperEl.scrollTo({ [i]: u }),
                        c(u, t))
                    )
                        return (
                            (e.wrapperEl.style.overflow = "hidden"),
                            (e.wrapperEl.style.scrollSnapType = ""),
                            setTimeout(() => {
                                (e.wrapperEl.style.overflow = ""),
                                    e.wrapperEl.scrollTo({ [i]: u });
                            }),
                            void s.cancelAnimationFrame(e.cssModeFrameID)
                        );
                    e.cssModeFrameID = s.requestAnimationFrame(h);
                };
            h();
        }
        let y, b, w;
        function x() {
            return (
                y ||
                    (y = (function () {
                        const e = r(),
                            t = s();
                        return {
                            smoothScroll:
                                t.documentElement &&
                                "scrollBehavior" in t.documentElement.style,
                            touch: !!(
                                "ontouchstart" in e ||
                                (e.DocumentTouch &&
                                    t instanceof e.DocumentTouch)
                            ),
                            passiveListener: (function () {
                                let t = !1;
                                try {
                                    const i = Object.defineProperty(
                                        {},
                                        "passive",
                                        {
                                            get() {
                                                t = !0;
                                            },
                                        }
                                    );
                                    e.addEventListener(
                                        "testPassiveListener",
                                        null,
                                        i
                                    );
                                } catch (e) {}
                                return t;
                            })(),
                            gestures: "ongesturestart" in e,
                        };
                    })()),
                y
            );
        }
        function _(e = {}) {
            return (
                b ||
                    (b = (function ({ userAgent: e } = {}) {
                        const t = x(),
                            i = r(),
                            s = i.navigator.platform,
                            n = e || i.navigator.userAgent,
                            a = { ios: !1, android: !1 },
                            o = i.screen.width,
                            l = i.screen.height,
                            d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                        let c = n.match(/(iPad).*OS\s([\d_]+)/);
                        const h = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                            u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                            p = "Win32" === s;
                        let f = "MacIntel" === s;
                        return (
                            !c &&
                                f &&
                                t.touch &&
                                [
                                    "1024x1366",
                                    "1366x1024",
                                    "834x1194",
                                    "1194x834",
                                    "834x1112",
                                    "1112x834",
                                    "768x1024",
                                    "1024x768",
                                    "820x1180",
                                    "1180x820",
                                    "810x1080",
                                    "1080x810",
                                ].indexOf(`${o}x${l}`) >= 0 &&
                                ((c = n.match(/(Version)\/([\d.]+)/)),
                                c || (c = [0, 1, "13_0_0"]),
                                (f = !1)),
                            d && !p && ((a.os = "android"), (a.android = !0)),
                            (c || u || h) && ((a.os = "ios"), (a.ios = !0)),
                            a
                        );
                    })(e)),
                b
            );
        }
        function E() {
            return (
                w ||
                    (w = (function () {
                        const e = r();
                        return {
                            isSafari: (function () {
                                const t = e.navigator.userAgent.toLowerCase();
                                return (
                                    t.indexOf("safari") >= 0 &&
                                    t.indexOf("chrome") < 0 &&
                                    t.indexOf("android") < 0
                                );
                            })(),
                            isWebView:
                                /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                                    e.navigator.userAgent
                                ),
                        };
                    })()),
                w
            );
        }
        Object.keys(c).forEach((e) => {
            Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
        });
        var T = {
            on(e, t, i) {
                const s = this;
                if ("function" != typeof t) return s;
                const n = i ? "unshift" : "push";
                return (
                    e.split(" ").forEach((e) => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                            s.eventsListeners[e][n](t);
                    }),
                    s
                );
            },
            once(e, t, i) {
                const s = this;
                if ("function" != typeof t) return s;
                function n(...i) {
                    s.off(e, n),
                        n.__emitterProxy && delete n.__emitterProxy,
                        t.apply(s, i);
                }
                return (n.__emitterProxy = t), s.on(e, n, i);
            },
            onAny(e, t) {
                const i = this;
                if ("function" != typeof e) return i;
                const s = t ? "unshift" : "push";
                return (
                    i.eventsAnyListeners.indexOf(e) < 0 &&
                        i.eventsAnyListeners[s](e),
                    i
                );
            },
            offAny(e) {
                const t = this;
                if (!t.eventsAnyListeners) return t;
                const i = t.eventsAnyListeners.indexOf(e);
                return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
            },
            off(e, t) {
                const i = this;
                return i.eventsListeners
                    ? (e.split(" ").forEach((e) => {
                          void 0 === t
                              ? (i.eventsListeners[e] = [])
                              : i.eventsListeners[e] &&
                                i.eventsListeners[e].forEach((s, n) => {
                                    (s === t ||
                                        (s.__emitterProxy &&
                                            s.__emitterProxy === t)) &&
                                        i.eventsListeners[e].splice(n, 1);
                                });
                      }),
                      i)
                    : i;
            },
            emit(...e) {
                const t = this;
                if (!t.eventsListeners) return t;
                let i, s, n;
                return (
                    "string" == typeof e[0] || Array.isArray(e[0])
                        ? ((i = e[0]), (s = e.slice(1, e.length)), (n = t))
                        : ((i = e[0].events),
                          (s = e[0].data),
                          (n = e[0].context || t)),
                    s.unshift(n),
                    (Array.isArray(i) ? i : i.split(" ")).forEach((e) => {
                        t.eventsAnyListeners &&
                            t.eventsAnyListeners.length &&
                            t.eventsAnyListeners.forEach((t) => {
                                t.apply(n, [e, ...s]);
                            }),
                            t.eventsListeners &&
                                t.eventsListeners[e] &&
                                t.eventsListeners[e].forEach((e) => {
                                    e.apply(n, s);
                                });
                    }),
                    t
                );
            },
        };
        function S({ swiper: e, runCallbacks: t, direction: i, step: s }) {
            const { activeIndex: n, previousIndex: r } = e;
            let a = i;
            if (
                (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
                e.emit(`transition${s}`),
                t && n !== r)
            ) {
                if ("reset" === a)
                    return void e.emit(`slideResetTransition${s}`);
                e.emit(`slideChangeTransition${s}`),
                    "next" === a
                        ? e.emit(`slideNextTransition${s}`)
                        : e.emit(`slidePrevTransition${s}`);
            }
        }
        function C(e) {
            const t = this,
                i = s(),
                n = r(),
                a = t.touchEventsData,
                { params: o, touches: l, enabled: c } = t;
            if (!c) return;
            if (t.animating && o.preventInteractionOnTransition) return;
            !t.animating && o.cssMode && o.loop && t.loopFix();
            let h = e;
            h.originalEvent && (h = h.originalEvent);
            let p = d(h.target);
            if (
                "wrapper" === o.touchEventsTarget &&
                !p.closest(t.wrapperEl).length
            )
                return;
            if (
                ((a.isTouchEvent = "touchstart" === h.type),
                !a.isTouchEvent && "which" in h && 3 === h.which)
            )
                return;
            if (!a.isTouchEvent && "button" in h && h.button > 0) return;
            if (a.isTouched && a.isMoved) return;
            o.noSwipingClass &&
                "" !== o.noSwipingClass &&
                h.target &&
                h.target.shadowRoot &&
                e.path &&
                e.path[0] &&
                (p = d(e.path[0]));
            const f = o.noSwipingSelector
                    ? o.noSwipingSelector
                    : `.${o.noSwipingClass}`,
                m = !(!h.target || !h.target.shadowRoot);
            if (
                o.noSwiping &&
                (m
                    ? (function (e, t = this) {
                          return (function t(i) {
                              return i && i !== s() && i !== r()
                                  ? (i.assignedSlot && (i = i.assignedSlot),
                                    i.closest(e) || t(i.getRootNode().host))
                                  : null;
                          })(t);
                      })(f, h.target)
                    : p.closest(f)[0])
            )
                return void (t.allowClick = !0);
            if (o.swipeHandler && !p.closest(o.swipeHandler)[0]) return;
            (l.currentX =
                "touchstart" === h.type ? h.targetTouches[0].pageX : h.pageX),
                (l.currentY =
                    "touchstart" === h.type
                        ? h.targetTouches[0].pageY
                        : h.pageY);
            const g = l.currentX,
                v = l.currentY,
                y = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                b = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
            if (y && (g <= b || g >= n.innerWidth - b)) {
                if ("prevent" !== y) return;
                e.preventDefault();
            }
            if (
                (Object.assign(a, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0,
                }),
                (l.startX = g),
                (l.startY = v),
                (a.touchStartTime = u()),
                (t.allowClick = !0),
                t.updateSize(),
                (t.swipeDirection = void 0),
                o.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== h.type)
            ) {
                let e = !0;
                p.is(a.focusableElements) && (e = !1),
                    i.activeElement &&
                        d(i.activeElement).is(a.focusableElements) &&
                        i.activeElement !== p[0] &&
                        i.activeElement.blur();
                const s = e && t.allowTouchMove && o.touchStartPreventDefault;
                (!o.touchStartForcePreventDefault && !s) ||
                    p[0].isContentEditable ||
                    h.preventDefault();
            }
            t.emit("touchStart", h);
        }
        function M(e) {
            const t = s(),
                i = this,
                n = i.touchEventsData,
                { params: r, touches: a, rtlTranslate: o, enabled: l } = i;
            if (!l) return;
            let c = e;
            if ((c.originalEvent && (c = c.originalEvent), !n.isTouched))
                return void (
                    n.startMoving &&
                    n.isScrolling &&
                    i.emit("touchMoveOpposite", c)
                );
            if (n.isTouchEvent && "touchmove" !== c.type) return;
            const h =
                    "touchmove" === c.type &&
                    c.targetTouches &&
                    (c.targetTouches[0] || c.changedTouches[0]),
                p = "touchmove" === c.type ? h.pageX : c.pageX,
                f = "touchmove" === c.type ? h.pageY : c.pageY;
            if (c.preventedByNestedSwiper)
                return (a.startX = p), void (a.startY = f);
            if (!i.allowTouchMove)
                return (
                    (i.allowClick = !1),
                    void (
                        n.isTouched &&
                        (Object.assign(a, {
                            startX: p,
                            startY: f,
                            currentX: p,
                            currentY: f,
                        }),
                        (n.touchStartTime = u()))
                    )
                );
            if (n.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                if (i.isVertical()) {
                    if (
                        (f < a.startY && i.translate <= i.maxTranslate()) ||
                        (f > a.startY && i.translate >= i.minTranslate())
                    )
                        return (n.isTouched = !1), void (n.isMoved = !1);
                } else if (
                    (p < a.startX && i.translate <= i.maxTranslate()) ||
                    (p > a.startX && i.translate >= i.minTranslate())
                )
                    return;
            if (
                n.isTouchEvent &&
                t.activeElement &&
                c.target === t.activeElement &&
                d(c.target).is(n.focusableElements)
            )
                return (n.isMoved = !0), void (i.allowClick = !1);
            if (
                (n.allowTouchCallbacks && i.emit("touchMove", c),
                c.targetTouches && c.targetTouches.length > 1)
            )
                return;
            (a.currentX = p), (a.currentY = f);
            const m = a.currentX - a.startX,
                g = a.currentY - a.startY;
            if (
                i.params.threshold &&
                Math.sqrt(m ** 2 + g ** 2) < i.params.threshold
            )
                return;
            if (void 0 === n.isScrolling) {
                let e;
                (i.isHorizontal() && a.currentY === a.startY) ||
                (i.isVertical() && a.currentX === a.startX)
                    ? (n.isScrolling = !1)
                    : m * m + g * g >= 25 &&
                      ((e =
                          (180 * Math.atan2(Math.abs(g), Math.abs(m))) /
                          Math.PI),
                      (n.isScrolling = i.isHorizontal()
                          ? e > r.touchAngle
                          : 90 - e > r.touchAngle));
            }
            if (
                (n.isScrolling && i.emit("touchMoveOpposite", c),
                void 0 === n.startMoving &&
                    ((a.currentX === a.startX && a.currentY === a.startY) ||
                        (n.startMoving = !0)),
                n.isScrolling)
            )
                return void (n.isTouched = !1);
            if (!n.startMoving) return;
            (i.allowClick = !1),
                !r.cssMode && c.cancelable && c.preventDefault(),
                r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
                n.isMoved ||
                    (r.loop && !r.cssMode && i.loopFix(),
                    (n.startTranslate = i.getTranslate()),
                    i.setTransition(0),
                    i.animating &&
                        i.$wrapperEl.trigger(
                            "webkitTransitionEnd transitionend"
                        ),
                    (n.allowMomentumBounce = !1),
                    !r.grabCursor ||
                        (!0 !== i.allowSlideNext && !0 !== i.allowSlidePrev) ||
                        i.setGrabCursor(!0),
                    i.emit("sliderFirstMove", c)),
                i.emit("sliderMove", c),
                (n.isMoved = !0);
            let v = i.isHorizontal() ? m : g;
            (a.diff = v),
                (v *= r.touchRatio),
                o && (v = -v),
                (i.swipeDirection = v > 0 ? "prev" : "next"),
                (n.currentTranslate = v + n.startTranslate);
            let y = !0,
                b = r.resistanceRatio;
            if (
                (r.touchReleaseOnEdges && (b = 0),
                v > 0 && n.currentTranslate > i.minTranslate()
                    ? ((y = !1),
                      r.resistance &&
                          (n.currentTranslate =
                              i.minTranslate() -
                              1 +
                              (-i.minTranslate() + n.startTranslate + v) ** b))
                    : v < 0 &&
                      n.currentTranslate < i.maxTranslate() &&
                      ((y = !1),
                      r.resistance &&
                          (n.currentTranslate =
                              i.maxTranslate() +
                              1 -
                              (i.maxTranslate() - n.startTranslate - v) ** b)),
                y && (c.preventedByNestedSwiper = !0),
                !i.allowSlideNext &&
                    "next" === i.swipeDirection &&
                    n.currentTranslate < n.startTranslate &&
                    (n.currentTranslate = n.startTranslate),
                !i.allowSlidePrev &&
                    "prev" === i.swipeDirection &&
                    n.currentTranslate > n.startTranslate &&
                    (n.currentTranslate = n.startTranslate),
                i.allowSlidePrev ||
                    i.allowSlideNext ||
                    (n.currentTranslate = n.startTranslate),
                r.threshold > 0)
            ) {
                if (!(Math.abs(v) > r.threshold || n.allowThresholdMove))
                    return void (n.currentTranslate = n.startTranslate);
                if (!n.allowThresholdMove)
                    return (
                        (n.allowThresholdMove = !0),
                        (a.startX = a.currentX),
                        (a.startY = a.currentY),
                        (n.currentTranslate = n.startTranslate),
                        void (a.diff = i.isHorizontal()
                            ? a.currentX - a.startX
                            : a.currentY - a.startY)
                    );
            }
            r.followFinger &&
                !r.cssMode &&
                (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
                    r.watchSlidesProgress) &&
                    (i.updateActiveIndex(), i.updateSlidesClasses()),
                i.params.freeMode &&
                    r.freeMode.enabled &&
                    i.freeMode &&
                    i.freeMode.onTouchMove(),
                i.updateProgress(n.currentTranslate),
                i.setTranslate(n.currentTranslate));
        }
        function k(e) {
            const t = this,
                i = t.touchEventsData,
                {
                    params: s,
                    touches: n,
                    rtlTranslate: r,
                    slidesGrid: a,
                    enabled: o,
                } = t;
            if (!o) return;
            let l = e;
            if (
                (l.originalEvent && (l = l.originalEvent),
                i.allowTouchCallbacks && t.emit("touchEnd", l),
                (i.allowTouchCallbacks = !1),
                !i.isTouched)
            )
                return (
                    i.isMoved && s.grabCursor && t.setGrabCursor(!1),
                    (i.isMoved = !1),
                    void (i.startMoving = !1)
                );
            s.grabCursor &&
                i.isMoved &&
                i.isTouched &&
                (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
                t.setGrabCursor(!1);
            const d = u(),
                c = d - i.touchStartTime;
            if (
                (t.allowClick &&
                    (t.updateClickedSlide(l),
                    t.emit("tap click", l),
                    c < 300 &&
                        d - i.lastClickTime < 300 &&
                        t.emit("doubleTap doubleClick", l)),
                (i.lastClickTime = u()),
                h(() => {
                    t.destroyed || (t.allowClick = !0);
                }),
                !i.isTouched ||
                    !i.isMoved ||
                    !t.swipeDirection ||
                    0 === n.diff ||
                    i.currentTranslate === i.startTranslate)
            )
                return (
                    (i.isTouched = !1),
                    (i.isMoved = !1),
                    void (i.startMoving = !1)
                );
            let p;
            if (
                ((i.isTouched = !1),
                (i.isMoved = !1),
                (i.startMoving = !1),
                (p = s.followFinger
                    ? r
                        ? t.translate
                        : -t.translate
                    : -i.currentTranslate),
                s.cssMode)
            )
                return;
            if (t.params.freeMode && s.freeMode.enabled)
                return void t.freeMode.onTouchEnd({ currentPos: p });
            let f = 0,
                m = t.slidesSizesGrid[0];
            for (
                let e = 0;
                e < a.length;
                e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
            ) {
                const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== a[e + t]
                    ? p >= a[e] &&
                      p < a[e + t] &&
                      ((f = e), (m = a[e + t] - a[e]))
                    : p >= a[e] &&
                      ((f = e), (m = a[a.length - 1] - a[a.length - 2]));
            }
            const g = (p - a[f]) / m,
                v = f < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (c > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection &&
                    (g >= s.longSwipesRatio ? t.slideTo(f + v) : t.slideTo(f)),
                    "prev" === t.swipeDirection &&
                        (g > 1 - s.longSwipesRatio
                            ? t.slideTo(f + v)
                            : t.slideTo(f));
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                !t.navigation ||
                (l.target !== t.navigation.nextEl &&
                    l.target !== t.navigation.prevEl)
                    ? ("next" === t.swipeDirection && t.slideTo(f + v),
                      "prev" === t.swipeDirection && t.slideTo(f))
                    : l.target === t.navigation.nextEl
                    ? t.slideTo(f + v)
                    : t.slideTo(f);
            }
        }
        function O() {
            const e = this,
                { params: t, el: i } = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e;
            (e.allowSlideNext = !0),
                (e.allowSlidePrev = !0),
                e.updateSize(),
                e.updateSlides(),
                e.updateSlidesClasses(),
                ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
                e.isEnd &&
                !e.isBeginning &&
                !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0),
                e.autoplay &&
                    e.autoplay.running &&
                    e.autoplay.paused &&
                    e.autoplay.run(),
                (e.allowSlidePrev = n),
                (e.allowSlideNext = s),
                e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
        }
        function L(e) {
            const t = this;
            t.enabled &&
                (t.allowClick ||
                    (t.params.preventClicks && e.preventDefault(),
                    t.params.preventClicksPropagation &&
                        t.animating &&
                        (e.stopPropagation(), e.stopImmediatePropagation())));
        }
        function $() {
            const e = this,
                { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
            if (!s) return;
            let n;
            (e.previousTranslate = e.translate),
                e.isHorizontal()
                    ? (e.translate = -t.scrollLeft)
                    : (e.translate = -t.scrollTop),
                -0 === e.translate && (e.translate = 0),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            const r = e.maxTranslate() - e.minTranslate();
            (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
                n !== e.progress &&
                    e.updateProgress(i ? -e.translate : e.translate),
                e.emit("setTranslate", e.translate, !1);
        }
        let I = !1;
        function A() {}
        const P = (e, t) => {
                const i = s(),
                    {
                        params: n,
                        touchEvents: r,
                        el: a,
                        wrapperEl: o,
                        device: l,
                        support: d,
                    } = e,
                    c = !!n.nested,
                    h = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    const t = !(
                        "touchstart" !== r.start ||
                        !d.passiveListener ||
                        !n.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    a[h](r.start, e.onTouchStart, t),
                        a[h](
                            r.move,
                            e.onTouchMove,
                            d.passiveListener ? { passive: !1, capture: c } : c
                        ),
                        a[h](r.end, e.onTouchEnd, t),
                        r.cancel && a[h](r.cancel, e.onTouchEnd, t);
                } else
                    a[h](r.start, e.onTouchStart, !1),
                        i[h](r.move, e.onTouchMove, c),
                        i[h](r.end, e.onTouchEnd, !1);
                (n.preventClicks || n.preventClicksPropagation) &&
                    a[h]("click", e.onClick, !0),
                    n.cssMode && o[h]("scroll", e.onScroll),
                    n.updateOnWindowResize
                        ? e[u](
                              l.ios || l.android
                                  ? "resize orientationchange observerUpdate"
                                  : "resize observerUpdate",
                              O,
                              !0
                          )
                        : e[u]("observerUpdate", O, !0);
            },
            z = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var D = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements:
                "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1,
        };
        function N(e, t) {
            return function (i = {}) {
                const s = Object.keys(i)[0],
                    n = i[s];
                "object" == typeof n && null !== n
                    ? (["navigation", "pagination", "scrollbar"].indexOf(s) >=
                          0 &&
                          !0 === e[s] &&
                          (e[s] = { auto: !0 }),
                      s in e && "enabled" in n
                          ? (!0 === e[s] && (e[s] = { enabled: !0 }),
                            "object" != typeof e[s] ||
                                "enabled" in e[s] ||
                                (e[s].enabled = !0),
                            e[s] || (e[s] = { enabled: !1 }),
                            m(t, i))
                          : m(t, i))
                    : m(t, i);
            };
        }
        const j = {
                eventsEmitter: T,
                update: {
                    updateSize: function () {
                        const e = this;
                        let t, i;
                        const s = e.$el;
                        (t =
                            void 0 !== e.params.width && null !== e.params.width
                                ? e.params.width
                                : s[0].clientWidth),
                            (i =
                                void 0 !== e.params.height &&
                                null !== e.params.height
                                    ? e.params.height
                                    : s[0].clientHeight),
                            (0 === t && e.isHorizontal()) ||
                                (0 === i && e.isVertical()) ||
                                ((t =
                                    t -
                                    parseInt(s.css("padding-left") || 0, 10) -
                                    parseInt(s.css("padding-right") || 0, 10)),
                                (i =
                                    i -
                                    parseInt(s.css("padding-top") || 0, 10) -
                                    parseInt(s.css("padding-bottom") || 0, 10)),
                                Number.isNaN(t) && (t = 0),
                                Number.isNaN(i) && (i = 0),
                                Object.assign(e, {
                                    width: t,
                                    height: i,
                                    size: e.isHorizontal() ? t : i,
                                }));
                    },
                    updateSlides: function () {
                        const e = this;
                        function t(t) {
                            return e.isHorizontal()
                                ? t
                                : {
                                      width: "height",
                                      "margin-top": "margin-left",
                                      "margin-bottom ": "margin-right",
                                      "margin-left": "margin-top",
                                      "margin-right": "margin-bottom",
                                      "padding-left": "padding-top",
                                      "padding-right": "padding-bottom",
                                      marginRight: "marginBottom",
                                  }[t];
                        }
                        function i(e, i) {
                            return parseFloat(e.getPropertyValue(t(i)) || 0);
                        }
                        const s = e.params,
                            {
                                $wrapperEl: n,
                                size: r,
                                rtlTranslate: a,
                                wrongRTL: o,
                            } = e,
                            l = e.virtual && s.virtual.enabled,
                            d = l ? e.virtual.slides.length : e.slides.length,
                            c = n.children(`.${e.params.slideClass}`),
                            h = l ? e.virtual.slides.length : c.length;
                        let u = [];
                        const p = [],
                            f = [];
                        let m = s.slidesOffsetBefore;
                        "function" == typeof m &&
                            (m = s.slidesOffsetBefore.call(e));
                        let v = s.slidesOffsetAfter;
                        "function" == typeof v &&
                            (v = s.slidesOffsetAfter.call(e));
                        const y = e.snapGrid.length,
                            b = e.slidesGrid.length;
                        let w = s.spaceBetween,
                            x = -m,
                            _ = 0,
                            E = 0;
                        if (void 0 === r) return;
                        "string" == typeof w &&
                            w.indexOf("%") >= 0 &&
                            (w = (parseFloat(w.replace("%", "")) / 100) * r),
                            (e.virtualSize = -w),
                            a
                                ? c.css({
                                      marginLeft: "",
                                      marginBottom: "",
                                      marginTop: "",
                                  })
                                : c.css({
                                      marginRight: "",
                                      marginBottom: "",
                                      marginTop: "",
                                  }),
                            s.centeredSlides &&
                                s.cssMode &&
                                (g(
                                    e.wrapperEl,
                                    "--swiper-centered-offset-before",
                                    ""
                                ),
                                g(
                                    e.wrapperEl,
                                    "--swiper-centered-offset-after",
                                    ""
                                ));
                        const T = s.grid && s.grid.rows > 1 && e.grid;
                        let S;
                        T && e.grid.initSlides(h);
                        const C =
                            "auto" === s.slidesPerView &&
                            s.breakpoints &&
                            Object.keys(s.breakpoints).filter(
                                (e) => void 0 !== s.breakpoints[e].slidesPerView
                            ).length > 0;
                        for (let n = 0; n < h; n += 1) {
                            S = 0;
                            const a = c.eq(n);
                            if (
                                (T && e.grid.updateSlide(n, a, h, t),
                                "none" !== a.css("display"))
                            ) {
                                if ("auto" === s.slidesPerView) {
                                    C && (c[n].style[t("width")] = "");
                                    const r = getComputedStyle(a[0]),
                                        o = a[0].style.transform,
                                        l = a[0].style.webkitTransform;
                                    if (
                                        (o && (a[0].style.transform = "none"),
                                        l &&
                                            (a[0].style.webkitTransform =
                                                "none"),
                                        s.roundLengths)
                                    )
                                        S = e.isHorizontal()
                                            ? a.outerWidth(!0)
                                            : a.outerHeight(!0);
                                    else {
                                        const e = i(r, "width"),
                                            t = i(r, "padding-left"),
                                            s = i(r, "padding-right"),
                                            n = i(r, "margin-left"),
                                            o = i(r, "margin-right"),
                                            l =
                                                r.getPropertyValue(
                                                    "box-sizing"
                                                );
                                        if (l && "border-box" === l)
                                            S = e + n + o;
                                        else {
                                            const {
                                                clientWidth: i,
                                                offsetWidth: r,
                                            } = a[0];
                                            S = e + t + s + n + o + (r - i);
                                        }
                                    }
                                    o && (a[0].style.transform = o),
                                        l && (a[0].style.webkitTransform = l),
                                        s.roundLengths && (S = Math.floor(S));
                                } else
                                    (S =
                                        (r - (s.slidesPerView - 1) * w) /
                                        s.slidesPerView),
                                        s.roundLengths && (S = Math.floor(S)),
                                        c[n] &&
                                            (c[n].style[t("width")] = `${S}px`);
                                c[n] && (c[n].swiperSlideSize = S),
                                    f.push(S),
                                    s.centeredSlides
                                        ? ((x = x + S / 2 + _ / 2 + w),
                                          0 === _ &&
                                              0 !== n &&
                                              (x = x - r / 2 - w),
                                          0 === n && (x = x - r / 2 - w),
                                          Math.abs(x) < 0.001 && (x = 0),
                                          s.roundLengths && (x = Math.floor(x)),
                                          E % s.slidesPerGroup == 0 &&
                                              u.push(x),
                                          p.push(x))
                                        : (s.roundLengths &&
                                              (x = Math.floor(x)),
                                          (E -
                                              Math.min(
                                                  e.params.slidesPerGroupSkip,
                                                  E
                                              )) %
                                              e.params.slidesPerGroup ==
                                              0 && u.push(x),
                                          p.push(x),
                                          (x = x + S + w)),
                                    (e.virtualSize += S + w),
                                    (_ = S),
                                    (E += 1);
                            }
                        }
                        if (
                            ((e.virtualSize = Math.max(e.virtualSize, r) + v),
                            a &&
                                o &&
                                ("slide" === s.effect ||
                                    "coverflow" === s.effect) &&
                                n.css({
                                    width: `${
                                        e.virtualSize + s.spaceBetween
                                    }px`,
                                }),
                            s.setWrapperSize &&
                                n.css({
                                    [t("width")]: `${
                                        e.virtualSize + s.spaceBetween
                                    }px`,
                                }),
                            T && e.grid.updateWrapperSize(S, u, t),
                            !s.centeredSlides)
                        ) {
                            const t = [];
                            for (let i = 0; i < u.length; i += 1) {
                                let n = u[i];
                                s.roundLengths && (n = Math.floor(n)),
                                    u[i] <= e.virtualSize - r && t.push(n);
                            }
                            (u = t),
                                Math.floor(e.virtualSize - r) -
                                    Math.floor(u[u.length - 1]) >
                                    1 && u.push(e.virtualSize - r);
                        }
                        if (
                            (0 === u.length && (u = [0]), 0 !== s.spaceBetween)
                        ) {
                            const i =
                                e.isHorizontal() && a
                                    ? "marginLeft"
                                    : t("marginRight");
                            c.filter(
                                (e, t) => !s.cssMode || t !== c.length - 1
                            ).css({ [i]: `${w}px` });
                        }
                        if (s.centeredSlides && s.centeredSlidesBounds) {
                            let e = 0;
                            f.forEach((t) => {
                                e += t + (s.spaceBetween ? s.spaceBetween : 0);
                            }),
                                (e -= s.spaceBetween);
                            const t = e - r;
                            u = u.map((e) => (e < 0 ? -m : e > t ? t + v : e));
                        }
                        if (s.centerInsufficientSlides) {
                            let e = 0;
                            if (
                                (f.forEach((t) => {
                                    e +=
                                        t +
                                        (s.spaceBetween ? s.spaceBetween : 0);
                                }),
                                (e -= s.spaceBetween),
                                e < r)
                            ) {
                                const t = (r - e) / 2;
                                u.forEach((e, i) => {
                                    u[i] = e - t;
                                }),
                                    p.forEach((e, i) => {
                                        p[i] = e + t;
                                    });
                            }
                        }
                        if (
                            (Object.assign(e, {
                                slides: c,
                                snapGrid: u,
                                slidesGrid: p,
                                slidesSizesGrid: f,
                            }),
                            s.centeredSlides &&
                                s.cssMode &&
                                !s.centeredSlidesBounds)
                        ) {
                            g(
                                e.wrapperEl,
                                "--swiper-centered-offset-before",
                                -u[0] + "px"
                            ),
                                g(
                                    e.wrapperEl,
                                    "--swiper-centered-offset-after",
                                    e.size / 2 - f[f.length - 1] / 2 + "px"
                                );
                            const t = -e.snapGrid[0],
                                i = -e.slidesGrid[0];
                            (e.snapGrid = e.snapGrid.map((e) => e + t)),
                                (e.slidesGrid = e.slidesGrid.map((e) => e + i));
                        }
                        h !== d && e.emit("slidesLengthChange"),
                            u.length !== y &&
                                (e.params.watchOverflow && e.checkOverflow(),
                                e.emit("snapGridLengthChange")),
                            p.length !== b && e.emit("slidesGridLengthChange"),
                            s.watchSlidesProgress && e.updateSlidesOffset();
                    },
                    updateAutoHeight: function (e) {
                        const t = this,
                            i = [],
                            s = t.virtual && t.params.virtual.enabled;
                        let n,
                            r = 0;
                        "number" == typeof e
                            ? t.setTransition(e)
                            : !0 === e && t.setTransition(t.params.speed);
                        const a = (e) =>
                            s
                                ? t.slides.filter(
                                      (t) =>
                                          parseInt(
                                              t.getAttribute(
                                                  "data-swiper-slide-index"
                                              ),
                                              10
                                          ) === e
                                  )[0]
                                : t.slides.eq(e)[0];
                        if (
                            "auto" !== t.params.slidesPerView &&
                            t.params.slidesPerView > 1
                        )
                            if (t.params.centeredSlides)
                                t.visibleSlides.each((e) => {
                                    i.push(e);
                                });
                            else
                                for (
                                    n = 0;
                                    n < Math.ceil(t.params.slidesPerView);
                                    n += 1
                                ) {
                                    const e = t.activeIndex + n;
                                    if (e > t.slides.length && !s) break;
                                    i.push(a(e));
                                }
                        else i.push(a(t.activeIndex));
                        for (n = 0; n < i.length; n += 1)
                            if (void 0 !== i[n]) {
                                const e = i[n].offsetHeight;
                                r = e > r ? e : r;
                            }
                        r && t.$wrapperEl.css("height", `${r}px`);
                    },
                    updateSlidesOffset: function () {
                        const e = this,
                            t = e.slides;
                        for (let i = 0; i < t.length; i += 1)
                            t[i].swiperSlideOffset = e.isHorizontal()
                                ? t[i].offsetLeft
                                : t[i].offsetTop;
                    },
                    updateSlidesProgress: function (
                        e = (this && this.translate) || 0
                    ) {
                        const t = this,
                            i = t.params,
                            { slides: s, rtlTranslate: n } = t;
                        if (0 === s.length) return;
                        void 0 === s[0].swiperSlideOffset &&
                            t.updateSlidesOffset();
                        let r = -e;
                        n && (r = e),
                            s.removeClass(i.slideVisibleClass),
                            (t.visibleSlidesIndexes = []),
                            (t.visibleSlides = []);
                        for (let e = 0; e < s.length; e += 1) {
                            const a = s[e];
                            let o = a.swiperSlideOffset;
                            i.cssMode &&
                                i.centeredSlides &&
                                (o -= s[0].swiperSlideOffset);
                            const l =
                                    (r +
                                        (i.centeredSlides
                                            ? t.minTranslate()
                                            : 0) -
                                        o) /
                                    (a.swiperSlideSize + i.spaceBetween),
                                d = -(r - o),
                                c = d + t.slidesSizesGrid[e];
                            ((d >= 0 && d < t.size - 1) ||
                                (c > 1 && c <= t.size) ||
                                (d <= 0 && c >= t.size)) &&
                                (t.visibleSlides.push(a),
                                t.visibleSlidesIndexes.push(e),
                                s.eq(e).addClass(i.slideVisibleClass)),
                                (a.progress = n ? -l : l);
                        }
                        t.visibleSlides = d(t.visibleSlides);
                    },
                    updateProgress: function (e) {
                        const t = this;
                        if (void 0 === e) {
                            const i = t.rtlTranslate ? -1 : 1;
                            e = (t && t.translate && t.translate * i) || 0;
                        }
                        const i = t.params,
                            s = t.maxTranslate() - t.minTranslate();
                        let { progress: n, isBeginning: r, isEnd: a } = t;
                        const o = r,
                            l = a;
                        0 === s
                            ? ((n = 0), (r = !0), (a = !0))
                            : ((n = (e - t.minTranslate()) / s),
                              (r = n <= 0),
                              (a = n >= 1)),
                            Object.assign(t, {
                                progress: n,
                                isBeginning: r,
                                isEnd: a,
                            }),
                            (i.watchSlidesProgress ||
                                (i.centeredSlides && i.autoHeight)) &&
                                t.updateSlidesProgress(e),
                            r && !o && t.emit("reachBeginning toEdge"),
                            a && !l && t.emit("reachEnd toEdge"),
                            ((o && !r) || (l && !a)) && t.emit("fromEdge"),
                            t.emit("progress", n);
                    },
                    updateSlidesClasses: function () {
                        const e = this,
                            {
                                slides: t,
                                params: i,
                                $wrapperEl: s,
                                activeIndex: n,
                                realIndex: r,
                            } = e,
                            a = e.virtual && i.virtual.enabled;
                        let o;
                        t.removeClass(
                            `${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`
                        ),
                            (o = a
                                ? e.$wrapperEl.find(
                                      `.${i.slideClass}[data-swiper-slide-index="${n}"]`
                                  )
                                : t.eq(n)),
                            o.addClass(i.slideActiveClass),
                            i.loop &&
                                (o.hasClass(i.slideDuplicateClass)
                                    ? s
                                          .children(
                                              `.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                                          )
                                          .addClass(i.slideDuplicateActiveClass)
                                    : s
                                          .children(
                                              `.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                                          )
                                          .addClass(
                                              i.slideDuplicateActiveClass
                                          ));
                        let l = o
                            .nextAll(`.${i.slideClass}`)
                            .eq(0)
                            .addClass(i.slideNextClass);
                        i.loop &&
                            0 === l.length &&
                            ((l = t.eq(0)), l.addClass(i.slideNextClass));
                        let d = o
                            .prevAll(`.${i.slideClass}`)
                            .eq(0)
                            .addClass(i.slidePrevClass);
                        i.loop &&
                            0 === d.length &&
                            ((d = t.eq(-1)), d.addClass(i.slidePrevClass)),
                            i.loop &&
                                (l.hasClass(i.slideDuplicateClass)
                                    ? s
                                          .children(
                                              `.${i.slideClass}:not(.${
                                                  i.slideDuplicateClass
                                              })[data-swiper-slide-index="${l.attr(
                                                  "data-swiper-slide-index"
                                              )}"]`
                                          )
                                          .addClass(i.slideDuplicateNextClass)
                                    : s
                                          .children(
                                              `.${i.slideClass}.${
                                                  i.slideDuplicateClass
                                              }[data-swiper-slide-index="${l.attr(
                                                  "data-swiper-slide-index"
                                              )}"]`
                                          )
                                          .addClass(i.slideDuplicateNextClass),
                                d.hasClass(i.slideDuplicateClass)
                                    ? s
                                          .children(
                                              `.${i.slideClass}:not(.${
                                                  i.slideDuplicateClass
                                              })[data-swiper-slide-index="${d.attr(
                                                  "data-swiper-slide-index"
                                              )}"]`
                                          )
                                          .addClass(i.slideDuplicatePrevClass)
                                    : s
                                          .children(
                                              `.${i.slideClass}.${
                                                  i.slideDuplicateClass
                                              }[data-swiper-slide-index="${d.attr(
                                                  "data-swiper-slide-index"
                                              )}"]`
                                          )
                                          .addClass(i.slideDuplicatePrevClass)),
                            e.emitSlidesClasses();
                    },
                    updateActiveIndex: function (e) {
                        const t = this,
                            i = t.rtlTranslate ? t.translate : -t.translate,
                            {
                                slidesGrid: s,
                                snapGrid: n,
                                params: r,
                                activeIndex: a,
                                realIndex: o,
                                snapIndex: l,
                            } = t;
                        let d,
                            c = e;
                        if (void 0 === c) {
                            for (let e = 0; e < s.length; e += 1)
                                void 0 !== s[e + 1]
                                    ? i >= s[e] &&
                                      i < s[e + 1] - (s[e + 1] - s[e]) / 2
                                        ? (c = e)
                                        : i >= s[e] &&
                                          i < s[e + 1] &&
                                          (c = e + 1)
                                    : i >= s[e] && (c = e);
                            r.normalizeSlideIndex &&
                                (c < 0 || void 0 === c) &&
                                (c = 0);
                        }
                        if (n.indexOf(i) >= 0) d = n.indexOf(i);
                        else {
                            const e = Math.min(r.slidesPerGroupSkip, c);
                            d = e + Math.floor((c - e) / r.slidesPerGroup);
                        }
                        if ((d >= n.length && (d = n.length - 1), c === a))
                            return void (
                                d !== l &&
                                ((t.snapIndex = d), t.emit("snapIndexChange"))
                            );
                        const h = parseInt(
                            t.slides.eq(c).attr("data-swiper-slide-index") || c,
                            10
                        );
                        Object.assign(t, {
                            snapIndex: d,
                            realIndex: h,
                            previousIndex: a,
                            activeIndex: c,
                        }),
                            t.emit("activeIndexChange"),
                            t.emit("snapIndexChange"),
                            o !== h && t.emit("realIndexChange"),
                            (t.initialized || t.params.runCallbacksOnInit) &&
                                t.emit("slideChange");
                    },
                    updateClickedSlide: function (e) {
                        const t = this,
                            i = t.params,
                            s = d(e.target).closest(`.${i.slideClass}`)[0];
                        let n,
                            r = !1;
                        if (s)
                            for (let e = 0; e < t.slides.length; e += 1)
                                if (t.slides[e] === s) {
                                    (r = !0), (n = e);
                                    break;
                                }
                        if (!s || !r)
                            return (
                                (t.clickedSlide = void 0),
                                void (t.clickedIndex = void 0)
                            );
                        (t.clickedSlide = s),
                            t.virtual && t.params.virtual.enabled
                                ? (t.clickedIndex = parseInt(
                                      d(s).attr("data-swiper-slide-index"),
                                      10
                                  ))
                                : (t.clickedIndex = n),
                            i.slideToClickedSlide &&
                                void 0 !== t.clickedIndex &&
                                t.clickedIndex !== t.activeIndex &&
                                t.slideToClickedSlide();
                    },
                },
                translate: {
                    getTranslate: function (
                        e = this.isHorizontal() ? "x" : "y"
                    ) {
                        const {
                            params: t,
                            rtlTranslate: i,
                            translate: s,
                            $wrapperEl: n,
                        } = this;
                        if (t.virtualTranslate) return i ? -s : s;
                        if (t.cssMode) return s;
                        let r = p(n[0], e);
                        return i && (r = -r), r || 0;
                    },
                    setTranslate: function (e, t) {
                        const i = this,
                            {
                                rtlTranslate: s,
                                params: n,
                                $wrapperEl: r,
                                wrapperEl: a,
                                progress: o,
                            } = i;
                        let l,
                            d = 0,
                            c = 0;
                        i.isHorizontal() ? (d = s ? -e : e) : (c = e),
                            n.roundLengths &&
                                ((d = Math.floor(d)), (c = Math.floor(c))),
                            n.cssMode
                                ? (a[
                                      i.isHorizontal()
                                          ? "scrollLeft"
                                          : "scrollTop"
                                  ] = i.isHorizontal() ? -d : -c)
                                : n.virtualTranslate ||
                                  r.transform(
                                      `translate3d(${d}px, ${c}px, 0px)`
                                  ),
                            (i.previousTranslate = i.translate),
                            (i.translate = i.isHorizontal() ? d : c);
                        const h = i.maxTranslate() - i.minTranslate();
                        (l = 0 === h ? 0 : (e - i.minTranslate()) / h),
                            l !== o && i.updateProgress(e),
                            i.emit("setTranslate", i.translate, t);
                    },
                    minTranslate: function () {
                        return -this.snapGrid[0];
                    },
                    maxTranslate: function () {
                        return -this.snapGrid[this.snapGrid.length - 1];
                    },
                    translateTo: function (
                        e = 0,
                        t = this.params.speed,
                        i = !0,
                        s = !0,
                        n
                    ) {
                        const r = this,
                            { params: a, wrapperEl: o } = r;
                        if (r.animating && a.preventInteractionOnTransition)
                            return !1;
                        const l = r.minTranslate(),
                            d = r.maxTranslate();
                        let c;
                        if (
                            ((c = s && e > l ? l : s && e < d ? d : e),
                            r.updateProgress(c),
                            a.cssMode)
                        ) {
                            const e = r.isHorizontal();
                            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                            else {
                                if (!r.support.smoothScroll)
                                    return (
                                        v({
                                            swiper: r,
                                            targetPosition: -c,
                                            side: e ? "left" : "top",
                                        }),
                                        !0
                                    );
                                o.scrollTo({
                                    [e ? "left" : "top"]: -c,
                                    behavior: "smooth",
                                });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0),
                                  r.setTranslate(c),
                                  i &&
                                      (r.emit("beforeTransitionStart", t, n),
                                      r.emit("transitionEnd")))
                                : (r.setTransition(t),
                                  r.setTranslate(c),
                                  i &&
                                      (r.emit("beforeTransitionStart", t, n),
                                      r.emit("transitionStart")),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onTranslateToWrapperTransitionEnd ||
                                          (r.onTranslateToWrapperTransitionEnd =
                                              function (e) {
                                                  r &&
                                                      !r.destroyed &&
                                                      e.target === this &&
                                                      (r.$wrapperEl[0].removeEventListener(
                                                          "transitionend",
                                                          r.onTranslateToWrapperTransitionEnd
                                                      ),
                                                      r.$wrapperEl[0].removeEventListener(
                                                          "webkitTransitionEnd",
                                                          r.onTranslateToWrapperTransitionEnd
                                                      ),
                                                      (r.onTranslateToWrapperTransitionEnd =
                                                          null),
                                                      delete r.onTranslateToWrapperTransitionEnd,
                                                      i &&
                                                          r.emit(
                                                              "transitionEnd"
                                                          ));
                                              }),
                                      r.$wrapperEl[0].addEventListener(
                                          "transitionend",
                                          r.onTranslateToWrapperTransitionEnd
                                      ),
                                      r.$wrapperEl[0].addEventListener(
                                          "webkitTransitionEnd",
                                          r.onTranslateToWrapperTransitionEnd
                                      ))),
                            !0
                        );
                    },
                },
                transition: {
                    setTransition: function (e, t) {
                        const i = this;
                        i.params.cssMode || i.$wrapperEl.transition(e),
                            i.emit("setTransition", e, t);
                    },
                    transitionStart: function (e = !0, t) {
                        const i = this,
                            { params: s } = i;
                        s.cssMode ||
                            (s.autoHeight && i.updateAutoHeight(),
                            S({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "Start",
                            }));
                    },
                    transitionEnd: function (e = !0, t) {
                        const i = this,
                            { params: s } = i;
                        (i.animating = !1),
                            s.cssMode ||
                                (i.setTransition(0),
                                S({
                                    swiper: i,
                                    runCallbacks: e,
                                    direction: t,
                                    step: "End",
                                }));
                    },
                },
                slide: {
                    slideTo: function (
                        e = 0,
                        t = this.params.speed,
                        i = !0,
                        s,
                        n
                    ) {
                        if ("number" != typeof e && "string" != typeof e)
                            throw new Error(
                                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
                            );
                        if ("string" == typeof e) {
                            const t = parseInt(e, 10);
                            if (!isFinite(t))
                                throw new Error(
                                    `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                                );
                            e = t;
                        }
                        const r = this;
                        let a = e;
                        a < 0 && (a = 0);
                        const {
                            params: o,
                            snapGrid: l,
                            slidesGrid: d,
                            previousIndex: c,
                            activeIndex: h,
                            rtlTranslate: u,
                            wrapperEl: p,
                            enabled: f,
                        } = r;
                        if (
                            (r.animating && o.preventInteractionOnTransition) ||
                            (!f && !s && !n)
                        )
                            return !1;
                        const m = Math.min(r.params.slidesPerGroupSkip, a);
                        let g =
                            m + Math.floor((a - m) / r.params.slidesPerGroup);
                        g >= l.length && (g = l.length - 1),
                            (h || o.initialSlide || 0) === (c || 0) &&
                                i &&
                                r.emit("beforeSlideChangeStart");
                        const y = -l[g];
                        if ((r.updateProgress(y), o.normalizeSlideIndex))
                            for (let e = 0; e < d.length; e += 1) {
                                const t = -Math.floor(100 * y),
                                    i = Math.floor(100 * d[e]),
                                    s = Math.floor(100 * d[e + 1]);
                                void 0 !== d[e + 1]
                                    ? t >= i && t < s - (s - i) / 2
                                        ? (a = e)
                                        : t >= i && t < s && (a = e + 1)
                                    : t >= i && (a = e);
                            }
                        if (r.initialized && a !== h) {
                            if (
                                !r.allowSlideNext &&
                                y < r.translate &&
                                y < r.minTranslate()
                            )
                                return !1;
                            if (
                                !r.allowSlidePrev &&
                                y > r.translate &&
                                y > r.maxTranslate() &&
                                (h || 0) !== a
                            )
                                return !1;
                        }
                        let b;
                        if (
                            ((b = a > h ? "next" : a < h ? "prev" : "reset"),
                            (u && -y === r.translate) ||
                                (!u && y === r.translate))
                        )
                            return (
                                r.updateActiveIndex(a),
                                o.autoHeight && r.updateAutoHeight(),
                                r.updateSlidesClasses(),
                                "slide" !== o.effect && r.setTranslate(y),
                                "reset" !== b &&
                                    (r.transitionStart(i, b),
                                    r.transitionEnd(i, b)),
                                !1
                            );
                        if (o.cssMode) {
                            const e = r.isHorizontal(),
                                i = u ? y : -y;
                            if (0 === t) {
                                const t = r.virtual && r.params.virtual.enabled;
                                t &&
                                    ((r.wrapperEl.style.scrollSnapType =
                                        "none"),
                                    (r._immediateVirtual = !0)),
                                    (p[e ? "scrollLeft" : "scrollTop"] = i),
                                    t &&
                                        requestAnimationFrame(() => {
                                            (r.wrapperEl.style.scrollSnapType =
                                                ""),
                                                (r._swiperImmediateVirtual =
                                                    !1);
                                        });
                            } else {
                                if (!r.support.smoothScroll)
                                    return (
                                        v({
                                            swiper: r,
                                            targetPosition: i,
                                            side: e ? "left" : "top",
                                        }),
                                        !0
                                    );
                                p.scrollTo({
                                    [e ? "left" : "top"]: i,
                                    behavior: "smooth",
                                });
                            }
                            return !0;
                        }
                        return (
                            0 === t
                                ? (r.setTransition(0),
                                  r.setTranslate(y),
                                  r.updateActiveIndex(a),
                                  r.updateSlidesClasses(),
                                  r.emit("beforeTransitionStart", t, s),
                                  r.transitionStart(i, b),
                                  r.transitionEnd(i, b))
                                : (r.setTransition(t),
                                  r.setTranslate(y),
                                  r.updateActiveIndex(a),
                                  r.updateSlidesClasses(),
                                  r.emit("beforeTransitionStart", t, s),
                                  r.transitionStart(i, b),
                                  r.animating ||
                                      ((r.animating = !0),
                                      r.onSlideToWrapperTransitionEnd ||
                                          (r.onSlideToWrapperTransitionEnd =
                                              function (e) {
                                                  r &&
                                                      !r.destroyed &&
                                                      e.target === this &&
                                                      (r.$wrapperEl[0].removeEventListener(
                                                          "transitionend",
                                                          r.onSlideToWrapperTransitionEnd
                                                      ),
                                                      r.$wrapperEl[0].removeEventListener(
                                                          "webkitTransitionEnd",
                                                          r.onSlideToWrapperTransitionEnd
                                                      ),
                                                      (r.onSlideToWrapperTransitionEnd =
                                                          null),
                                                      delete r.onSlideToWrapperTransitionEnd,
                                                      r.transitionEnd(i, b));
                                              }),
                                      r.$wrapperEl[0].addEventListener(
                                          "transitionend",
                                          r.onSlideToWrapperTransitionEnd
                                      ),
                                      r.$wrapperEl[0].addEventListener(
                                          "webkitTransitionEnd",
                                          r.onSlideToWrapperTransitionEnd
                                      ))),
                            !0
                        );
                    },
                    slideToLoop: function (
                        e = 0,
                        t = this.params.speed,
                        i = !0,
                        s
                    ) {
                        const n = this;
                        let r = e;
                        return (
                            n.params.loop && (r += n.loopedSlides),
                            n.slideTo(r, t, i, s)
                        );
                    },
                    slideNext: function (e = this.params.speed, t = !0, i) {
                        const s = this,
                            { animating: n, enabled: r, params: a } = s;
                        if (!r) return s;
                        let o = a.slidesPerGroup;
                        "auto" === a.slidesPerView &&
                            1 === a.slidesPerGroup &&
                            a.slidesPerGroupAuto &&
                            (o = Math.max(
                                s.slidesPerViewDynamic("current", !0),
                                1
                            ));
                        const l = s.activeIndex < a.slidesPerGroupSkip ? 1 : o;
                        if (a.loop) {
                            if (n && a.loopPreventsSlide) return !1;
                            s.loopFix(),
                                (s._clientLeft = s.$wrapperEl[0].clientLeft);
                        }
                        return s.slideTo(s.activeIndex + l, e, t, i);
                    },
                    slidePrev: function (e = this.params.speed, t = !0, i) {
                        const s = this,
                            {
                                params: n,
                                animating: r,
                                snapGrid: a,
                                slidesGrid: o,
                                rtlTranslate: l,
                                enabled: d,
                            } = s;
                        if (!d) return s;
                        if (n.loop) {
                            if (r && n.loopPreventsSlide) return !1;
                            s.loopFix(),
                                (s._clientLeft = s.$wrapperEl[0].clientLeft);
                        }
                        function c(e) {
                            return e < 0
                                ? -Math.floor(Math.abs(e))
                                : Math.floor(e);
                        }
                        const h = c(l ? s.translate : -s.translate),
                            u = a.map((e) => c(e));
                        let p = a[u.indexOf(h) - 1];
                        if (void 0 === p && n.cssMode) {
                            let e;
                            a.forEach((t, i) => {
                                h >= t && (e = i);
                            }),
                                void 0 !== e && (p = a[e > 0 ? e - 1 : e]);
                        }
                        let f = 0;
                        return (
                            void 0 !== p &&
                                ((f = o.indexOf(p)),
                                f < 0 && (f = s.activeIndex - 1),
                                "auto" === n.slidesPerView &&
                                    1 === n.slidesPerGroup &&
                                    n.slidesPerGroupAuto &&
                                    ((f =
                                        f -
                                        s.slidesPerViewDynamic("previous", !0) +
                                        1),
                                    (f = Math.max(f, 0)))),
                            s.slideTo(f, e, t, i)
                        );
                    },
                    slideReset: function (e = this.params.speed, t = !0, i) {
                        return this.slideTo(this.activeIndex, e, t, i);
                    },
                    slideToClosest: function (
                        e = this.params.speed,
                        t = !0,
                        i,
                        s = 0.5
                    ) {
                        const n = this;
                        let r = n.activeIndex;
                        const a = Math.min(n.params.slidesPerGroupSkip, r),
                            o =
                                a +
                                Math.floor((r - a) / n.params.slidesPerGroup),
                            l = n.rtlTranslate ? n.translate : -n.translate;
                        if (l >= n.snapGrid[o]) {
                            const e = n.snapGrid[o];
                            l - e > (n.snapGrid[o + 1] - e) * s &&
                                (r += n.params.slidesPerGroup);
                        } else {
                            const e = n.snapGrid[o - 1];
                            l - e <= (n.snapGrid[o] - e) * s &&
                                (r -= n.params.slidesPerGroup);
                        }
                        return (
                            (r = Math.max(r, 0)),
                            (r = Math.min(r, n.slidesGrid.length - 1)),
                            n.slideTo(r, e, t, i)
                        );
                    },
                    slideToClickedSlide: function () {
                        const e = this,
                            { params: t, $wrapperEl: i } = e,
                            s =
                                "auto" === t.slidesPerView
                                    ? e.slidesPerViewDynamic()
                                    : t.slidesPerView;
                        let n,
                            r = e.clickedIndex;
                        if (t.loop) {
                            if (e.animating) return;
                            (n = parseInt(
                                d(e.clickedSlide).attr(
                                    "data-swiper-slide-index"
                                ),
                                10
                            )),
                                t.centeredSlides
                                    ? r < e.loopedSlides - s / 2 ||
                                      r >
                                          e.slides.length -
                                              e.loopedSlides +
                                              s / 2
                                        ? (e.loopFix(),
                                          (r = i
                                              .children(
                                                  `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                                              )
                                              .eq(0)
                                              .index()),
                                          h(() => {
                                              e.slideTo(r);
                                          }))
                                        : e.slideTo(r)
                                    : r > e.slides.length - s
                                    ? (e.loopFix(),
                                      (r = i
                                          .children(
                                              `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                                          )
                                          .eq(0)
                                          .index()),
                                      h(() => {
                                          e.slideTo(r);
                                      }))
                                    : e.slideTo(r);
                        } else e.slideTo(r);
                    },
                },
                loop: {
                    loopCreate: function () {
                        const e = this,
                            t = s(),
                            { params: i, $wrapperEl: n } = e;
                        n.children(
                            `.${i.slideClass}.${i.slideDuplicateClass}`
                        ).remove();
                        let r = n.children(`.${i.slideClass}`);
                        if (i.loopFillGroupWithBlank) {
                            const e =
                                i.slidesPerGroup -
                                (r.length % i.slidesPerGroup);
                            if (e !== i.slidesPerGroup) {
                                for (let s = 0; s < e; s += 1) {
                                    const e = d(
                                        t.createElement("div")
                                    ).addClass(
                                        `${i.slideClass} ${i.slideBlankClass}`
                                    );
                                    n.append(e);
                                }
                                r = n.children(`.${i.slideClass}`);
                            }
                        }
                        "auto" !== i.slidesPerView ||
                            i.loopedSlides ||
                            (i.loopedSlides = r.length),
                            (e.loopedSlides = Math.ceil(
                                parseFloat(
                                    i.loopedSlides || i.slidesPerView,
                                    10
                                )
                            )),
                            (e.loopedSlides += i.loopAdditionalSlides),
                            e.loopedSlides > r.length &&
                                (e.loopedSlides = r.length);
                        const a = [],
                            o = [];
                        r.each((t, i) => {
                            const s = d(t);
                            i < e.loopedSlides && o.push(t),
                                i < r.length &&
                                    i >= r.length - e.loopedSlides &&
                                    a.push(t),
                                s.attr("data-swiper-slide-index", i);
                        });
                        for (let e = 0; e < o.length; e += 1)
                            n.append(
                                d(o[e].cloneNode(!0)).addClass(
                                    i.slideDuplicateClass
                                )
                            );
                        for (let e = a.length - 1; e >= 0; e -= 1)
                            n.prepend(
                                d(a[e].cloneNode(!0)).addClass(
                                    i.slideDuplicateClass
                                )
                            );
                    },
                    loopFix: function () {
                        const e = this;
                        e.emit("beforeLoopFix");
                        const {
                            activeIndex: t,
                            slides: i,
                            loopedSlides: s,
                            allowSlidePrev: n,
                            allowSlideNext: r,
                            snapGrid: a,
                            rtlTranslate: o,
                        } = e;
                        let l;
                        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                        const d = -a[t] - e.getTranslate();
                        t < s
                            ? ((l = i.length - 3 * s + t),
                              (l += s),
                              e.slideTo(l, 0, !1, !0) &&
                                  0 !== d &&
                                  e.setTranslate(
                                      (o ? -e.translate : e.translate) - d
                                  ))
                            : t >= i.length - s &&
                              ((l = -i.length + t + s),
                              (l += s),
                              e.slideTo(l, 0, !1, !0) &&
                                  0 !== d &&
                                  e.setTranslate(
                                      (o ? -e.translate : e.translate) - d
                                  )),
                            (e.allowSlidePrev = n),
                            (e.allowSlideNext = r),
                            e.emit("loopFix");
                    },
                    loopDestroy: function () {
                        const { $wrapperEl: e, params: t, slides: i } = this;
                        e
                            .children(
                                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
                            )
                            .remove(),
                            i.removeAttr("data-swiper-slide-index");
                    },
                },
                grabCursor: {
                    setGrabCursor: function (e) {
                        const t = this;
                        if (
                            t.support.touch ||
                            !t.params.simulateTouch ||
                            (t.params.watchOverflow && t.isLocked) ||
                            t.params.cssMode
                        )
                            return;
                        const i =
                            "container" === t.params.touchEventsTarget
                                ? t.el
                                : t.wrapperEl;
                        (i.style.cursor = "move"),
                            (i.style.cursor = e
                                ? "-webkit-grabbing"
                                : "-webkit-grab"),
                            (i.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                            (i.style.cursor = e ? "grabbing" : "grab");
                    },
                    unsetGrabCursor: function () {
                        const e = this;
                        e.support.touch ||
                            (e.params.watchOverflow && e.isLocked) ||
                            e.params.cssMode ||
                            (e[
                                "container" === e.params.touchEventsTarget
                                    ? "el"
                                    : "wrapperEl"
                            ].style.cursor = "");
                    },
                },
                events: {
                    attachEvents: function () {
                        const e = this,
                            t = s(),
                            { params: i, support: n } = e;
                        (e.onTouchStart = C.bind(e)),
                            (e.onTouchMove = M.bind(e)),
                            (e.onTouchEnd = k.bind(e)),
                            i.cssMode && (e.onScroll = $.bind(e)),
                            (e.onClick = L.bind(e)),
                            n.touch &&
                                !I &&
                                (t.addEventListener("touchstart", A), (I = !0)),
                            P(e, "on");
                    },
                    detachEvents: function () {
                        P(this, "off");
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        const e = this,
                            {
                                activeIndex: t,
                                initialized: i,
                                loopedSlides: s = 0,
                                params: n,
                                $el: r,
                            } = e,
                            a = n.breakpoints;
                        if (!a || (a && 0 === Object.keys(a).length)) return;
                        const o = e.getBreakpoint(
                            a,
                            e.params.breakpointsBase,
                            e.el
                        );
                        if (!o || e.currentBreakpoint === o) return;
                        const l = (o in a ? a[o] : void 0) || e.originalParams,
                            d = z(e, n),
                            c = z(e, l),
                            h = n.enabled;
                        d && !c
                            ? (r.removeClass(
                                  `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
                              ),
                              e.emitContainerClasses())
                            : !d &&
                              c &&
                              (r.addClass(`${n.containerModifierClass}grid`),
                              ((l.grid.fill && "column" === l.grid.fill) ||
                                  (!l.grid.fill && "column" === n.grid.fill)) &&
                                  r.addClass(
                                      `${n.containerModifierClass}grid-column`
                                  ),
                              e.emitContainerClasses());
                        const u = l.direction && l.direction !== n.direction,
                            p =
                                n.loop &&
                                (l.slidesPerView !== n.slidesPerView || u);
                        u && i && e.changeDirection(), m(e.params, l);
                        const f = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev,
                        }),
                            h && !f ? e.disable() : !h && f && e.enable(),
                            (e.currentBreakpoint = o),
                            e.emit("_beforeBreakpoint", l),
                            p &&
                                i &&
                                (e.loopDestroy(),
                                e.loopCreate(),
                                e.updateSlides(),
                                e.slideTo(t - s + e.loopedSlides, 0, !1)),
                            e.emit("breakpoint", l);
                    },
                    getBreakpoint: function (e, t = "window", i) {
                        if (!e || ("container" === t && !i)) return;
                        let s = !1;
                        const n = r(),
                            a = "window" === t ? n.innerHeight : i.clientHeight,
                            o = Object.keys(e).map((e) => {
                                if (
                                    "string" == typeof e &&
                                    0 === e.indexOf("@")
                                ) {
                                    const t = parseFloat(e.substr(1));
                                    return { value: a * t, point: e };
                                }
                                return { value: e, point: e };
                            });
                        o.sort(
                            (e, t) =>
                                parseInt(e.value, 10) - parseInt(t.value, 10)
                        );
                        for (let e = 0; e < o.length; e += 1) {
                            const { point: r, value: a } = o[e];
                            "window" === t
                                ? n.matchMedia(`(min-width: ${a}px)`).matches &&
                                  (s = r)
                                : a <= i.clientWidth && (s = r);
                        }
                        return s || "max";
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        const e = this,
                            { isLocked: t, params: i } = e,
                            { slidesOffsetBefore: s } = i;
                        if (s) {
                            const t = e.slides.length - 1,
                                i =
                                    e.slidesGrid[t] +
                                    e.slidesSizesGrid[t] +
                                    2 * s;
                            e.isLocked = e.size > i;
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === i.allowSlideNext &&
                            (e.allowSlideNext = !e.isLocked),
                            !0 === i.allowSlidePrev &&
                                (e.allowSlidePrev = !e.isLocked),
                            t && t !== e.isLocked && (e.isEnd = !1),
                            t !== e.isLocked &&
                                e.emit(e.isLocked ? "lock" : "unlock");
                    },
                },
                classes: {
                    addClasses: function () {
                        const e = this,
                            {
                                classNames: t,
                                params: i,
                                rtl: s,
                                $el: n,
                                device: r,
                                support: a,
                            } = e,
                            o = (function (e, t) {
                                const i = [];
                                return (
                                    e.forEach((e) => {
                                        "object" == typeof e
                                            ? Object.keys(e).forEach((s) => {
                                                  e[s] && i.push(t + s);
                                              })
                                            : "string" == typeof e &&
                                              i.push(t + e);
                                    }),
                                    i
                                );
                            })(
                                [
                                    "initialized",
                                    i.direction,
                                    { "pointer-events": !a.touch },
                                    {
                                        "free-mode":
                                            e.params.freeMode &&
                                            i.freeMode.enabled,
                                    },
                                    { autoheight: i.autoHeight },
                                    { rtl: s },
                                    { grid: i.grid && i.grid.rows > 1 },
                                    {
                                        "grid-column":
                                            i.grid &&
                                            i.grid.rows > 1 &&
                                            "column" === i.grid.fill,
                                    },
                                    { android: r.android },
                                    { ios: r.ios },
                                    { "css-mode": i.cssMode },
                                    { centered: i.cssMode && i.centeredSlides },
                                ],
                                i.containerModifierClass
                            );
                        t.push(...o),
                            n.addClass([...t].join(" ")),
                            e.emitContainerClasses();
                    },
                    removeClasses: function () {
                        const { $el: e, classNames: t } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses();
                    },
                },
                images: {
                    loadImage: function (e, t, i, s, n, a) {
                        const o = r();
                        let l;
                        function c() {
                            a && a();
                        }
                        d(e).parent("picture")[0] || (e.complete && n)
                            ? c()
                            : t
                            ? ((l = new o.Image()),
                              (l.onload = c),
                              (l.onerror = c),
                              s && (l.sizes = s),
                              i && (l.srcset = i),
                              t && (l.src = t))
                            : c();
                    },
                    preloadImages: function () {
                        const e = this;
                        function t() {
                            null != e &&
                                e &&
                                !e.destroyed &&
                                (void 0 !== e.imagesLoaded &&
                                    (e.imagesLoaded += 1),
                                e.imagesLoaded === e.imagesToLoad.length &&
                                    (e.params.updateOnImagesReady && e.update(),
                                    e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                            const s = e.imagesToLoad[i];
                            e.loadImage(
                                s,
                                s.currentSrc || s.getAttribute("src"),
                                s.srcset || s.getAttribute("srcset"),
                                s.sizes || s.getAttribute("sizes"),
                                !0,
                                t
                            );
                        }
                    },
                },
            },
            H = {};
        class W {
            constructor(...e) {
                let t, i;
                if (
                    (1 === e.length &&
                    e[0].constructor &&
                    "Object" ===
                        Object.prototype.toString.call(e[0]).slice(8, -1)
                        ? (i = e[0])
                        : ([t, i] = e),
                    i || (i = {}),
                    (i = m({}, i)),
                    t && !i.el && (i.el = t),
                    i.el && d(i.el).length > 1)
                ) {
                    const e = [];
                    return (
                        d(i.el).each((t) => {
                            const s = m({}, i, { el: t });
                            e.push(new W(s));
                        }),
                        e
                    );
                }
                const s = this;
                (s.__swiper__ = !0),
                    (s.support = x()),
                    (s.device = _({ userAgent: i.userAgent })),
                    (s.browser = E()),
                    (s.eventsListeners = {}),
                    (s.eventsAnyListeners = []),
                    (s.modules = [...s.__modules__]),
                    i.modules &&
                        Array.isArray(i.modules) &&
                        s.modules.push(...i.modules);
                const n = {};
                s.modules.forEach((e) => {
                    e({
                        swiper: s,
                        extendParams: N(i, n),
                        on: s.on.bind(s),
                        once: s.once.bind(s),
                        off: s.off.bind(s),
                        emit: s.emit.bind(s),
                    });
                });
                const r = m({}, D, n);
                return (
                    (s.params = m({}, r, H, i)),
                    (s.originalParams = m({}, s.params)),
                    (s.passedParams = m({}, i)),
                    s.params &&
                        s.params.on &&
                        Object.keys(s.params.on).forEach((e) => {
                            s.on(e, s.params.on[e]);
                        }),
                    s.params && s.params.onAny && s.onAny(s.params.onAny),
                    (s.$ = d),
                    Object.assign(s, {
                        enabled: s.params.enabled,
                        el: t,
                        classNames: [],
                        slides: d(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === s.params.direction,
                        isVertical: () => "vertical" === s.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: s.params.allowSlideNext,
                        allowSlidePrev: s.params.allowSlidePrev,
                        touchEvents: (function () {
                            const e = [
                                    "touchstart",
                                    "touchmove",
                                    "touchend",
                                    "touchcancel",
                                ],
                                t = ["pointerdown", "pointermove", "pointerup"];
                            return (
                                (s.touchEventsTouch = {
                                    start: e[0],
                                    move: e[1],
                                    end: e[2],
                                    cancel: e[3],
                                }),
                                (s.touchEventsDesktop = {
                                    start: t[0],
                                    move: t[1],
                                    end: t[2],
                                }),
                                s.support.touch || !s.params.simulateTouch
                                    ? s.touchEventsTouch
                                    : s.touchEventsDesktop
                            );
                        })(),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: s.params.focusableElements,
                            lastClickTime: u(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0,
                        },
                        allowClick: !0,
                        allowTouchMove: s.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0,
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0,
                    }),
                    s.emit("_swiper"),
                    s.params.init && s.init(),
                    s
                );
            }
            enable() {
                const e = this;
                e.enabled ||
                    ((e.enabled = !0),
                    e.params.grabCursor && e.setGrabCursor(),
                    e.emit("enable"));
            }
            disable() {
                const e = this;
                e.enabled &&
                    ((e.enabled = !1),
                    e.params.grabCursor && e.unsetGrabCursor(),
                    e.emit("disable"));
            }
            setProgress(e, t) {
                const i = this;
                e = Math.min(Math.max(e, 0), 1);
                const s = i.minTranslate(),
                    n = (i.maxTranslate() - s) * e + s;
                i.translateTo(n, void 0 === t ? 0 : t),
                    i.updateActiveIndex(),
                    i.updateSlidesClasses();
            }
            emitContainerClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = e.el.className
                    .split(" ")
                    .filter(
                        (t) =>
                            0 === t.indexOf("swiper") ||
                            0 === t.indexOf(e.params.containerModifierClass)
                    );
                e.emit("_containerClasses", t.join(" "));
            }
            getSlideClasses(e) {
                const t = this;
                return e.className
                    .split(" ")
                    .filter(
                        (e) =>
                            0 === e.indexOf("swiper-slide") ||
                            0 === e.indexOf(t.params.slideClass)
                    )
                    .join(" ");
            }
            emitSlidesClasses() {
                const e = this;
                if (!e.params._emitClasses || !e.el) return;
                const t = [];
                e.slides.each((i) => {
                    const s = e.getSlideClasses(i);
                    t.push({ slideEl: i, classNames: s }),
                        e.emit("_slideClass", i, s);
                }),
                    e.emit("_slideClasses", t);
            }
            slidesPerViewDynamic(e = "current", t = !1) {
                const {
                    params: i,
                    slides: s,
                    slidesGrid: n,
                    slidesSizesGrid: r,
                    size: a,
                    activeIndex: o,
                } = this;
                let l = 1;
                if (i.centeredSlides) {
                    let e,
                        t = s[o].swiperSlideSize;
                    for (let i = o + 1; i < s.length; i += 1)
                        s[i] &&
                            !e &&
                            ((t += s[i].swiperSlideSize),
                            (l += 1),
                            t > a && (e = !0));
                    for (let i = o - 1; i >= 0; i -= 1)
                        s[i] &&
                            !e &&
                            ((t += s[i].swiperSlideSize),
                            (l += 1),
                            t > a && (e = !0));
                } else if ("current" === e)
                    for (let e = o + 1; e < s.length; e += 1)
                        (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) &&
                            (l += 1);
                else
                    for (let e = o - 1; e >= 0; e -= 1)
                        n[o] - n[e] < a && (l += 1);
                return l;
            }
            update() {
                const e = this;
                if (!e || e.destroyed) return;
                const { snapGrid: t, params: i } = e;
                function s() {
                    const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(
                            Math.max(t, e.maxTranslate()),
                            e.minTranslate()
                        );
                    e.setTranslate(i),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                let n;
                i.breakpoints && e.setBreakpoint(),
                    e.updateSize(),
                    e.updateSlides(),
                    e.updateProgress(),
                    e.updateSlidesClasses(),
                    e.params.freeMode && e.params.freeMode.enabled
                        ? (s(), e.params.autoHeight && e.updateAutoHeight())
                        : ((n =
                              ("auto" === e.params.slidesPerView ||
                                  e.params.slidesPerView > 1) &&
                              e.isEnd &&
                              !e.params.centeredSlides
                                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                                  : e.slideTo(e.activeIndex, 0, !1, !0)),
                          n || s()),
                    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                    e.emit("update");
            }
            changeDirection(e, t = !0) {
                const i = this,
                    s = i.params.direction;
                return (
                    e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                    e === s ||
                        ("horizontal" !== e && "vertical" !== e) ||
                        (i.$el
                            .removeClass(
                                `${i.params.containerModifierClass}${s}`
                            )
                            .addClass(`${i.params.containerModifierClass}${e}`),
                        i.emitContainerClasses(),
                        (i.params.direction = e),
                        i.slides.each((t) => {
                            "vertical" === e
                                ? (t.style.width = "")
                                : (t.style.height = "");
                        }),
                        i.emit("changeDirection"),
                        t && i.update()),
                    i
                );
            }
            mount(e) {
                const t = this;
                if (t.mounted) return !0;
                const i = d(e || t.params.el);
                if (!(e = i[0])) return !1;
                e.swiper = t;
                const n = () =>
                    `.${(t.params.wrapperClass || "")
                        .trim()
                        .split(" ")
                        .join(".")}`;
                let r = (() => {
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        const t = d(e.shadowRoot.querySelector(n()));
                        return (t.children = (e) => i.children(e)), t;
                    }
                    return i.children(n());
                })();
                if (0 === r.length && t.params.createElements) {
                    const e = s().createElement("div");
                    (r = d(e)),
                        (e.className = t.params.wrapperClass),
                        i.append(e),
                        i.children(`.${t.params.slideClass}`).each((e) => {
                            r.append(e);
                        });
                }
                return (
                    Object.assign(t, {
                        $el: i,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl:
                            "rtl" === e.dir.toLowerCase() ||
                            "rtl" === i.css("direction"),
                        rtlTranslate:
                            "horizontal" === t.params.direction &&
                            ("rtl" === e.dir.toLowerCase() ||
                                "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display"),
                    }),
                    !0
                );
            }
            init(e) {
                const t = this;
                return (
                    t.initialized ||
                        !1 === t.mount(e) ||
                        (t.emit("beforeInit"),
                        t.params.breakpoints && t.setBreakpoint(),
                        t.addClasses(),
                        t.params.loop && t.loopCreate(),
                        t.updateSize(),
                        t.updateSlides(),
                        t.params.watchOverflow && t.checkOverflow(),
                        t.params.grabCursor && t.enabled && t.setGrabCursor(),
                        t.params.preloadImages && t.preloadImages(),
                        t.params.loop
                            ? t.slideTo(
                                  t.params.initialSlide + t.loopedSlides,
                                  0,
                                  t.params.runCallbacksOnInit,
                                  !1,
                                  !0
                              )
                            : t.slideTo(
                                  t.params.initialSlide,
                                  0,
                                  t.params.runCallbacksOnInit,
                                  !1,
                                  !0
                              ),
                        t.attachEvents(),
                        (t.initialized = !0),
                        t.emit("init"),
                        t.emit("afterInit")),
                    t
                );
            }
            destroy(e = !0, t = !0) {
                const i = this,
                    { params: s, $el: n, $wrapperEl: r, slides: a } = i;
                return (
                    void 0 === i.params ||
                        i.destroyed ||
                        (i.emit("beforeDestroy"),
                        (i.initialized = !1),
                        i.detachEvents(),
                        s.loop && i.loopDestroy(),
                        t &&
                            (i.removeClasses(),
                            n.removeAttr("style"),
                            r.removeAttr("style"),
                            a &&
                                a.length &&
                                a
                                    .removeClass(
                                        [
                                            s.slideVisibleClass,
                                            s.slideActiveClass,
                                            s.slideNextClass,
                                            s.slidePrevClass,
                                        ].join(" ")
                                    )
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-slide-index")),
                        i.emit("destroy"),
                        Object.keys(i.eventsListeners).forEach((e) => {
                            i.off(e);
                        }),
                        !1 !== e &&
                            ((i.$el[0].swiper = null),
                            (function (e) {
                                const t = e;
                                Object.keys(t).forEach((e) => {
                                    try {
                                        t[e] = null;
                                    } catch (e) {}
                                    try {
                                        delete t[e];
                                    } catch (e) {}
                                });
                            })(i)),
                        (i.destroyed = !0)),
                    null
                );
            }
            static extendDefaults(e) {
                m(H, e);
            }
            static get extendedDefaults() {
                return H;
            }
            static get defaults() {
                return D;
            }
            static installModule(e) {
                W.prototype.__modules__ || (W.prototype.__modules__ = []);
                const t = W.prototype.__modules__;
                "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
            }
            static use(e) {
                return Array.isArray(e)
                    ? (e.forEach((e) => W.installModule(e)), W)
                    : (W.installModule(e), W);
            }
        }
        function B(e, t, i, n) {
            const r = s();
            return (
                e.params.createElements &&
                    Object.keys(n).forEach((s) => {
                        if (!i[s] && !0 === i.auto) {
                            let a = e.$el.children(`.${n[s]}`)[0];
                            a ||
                                ((a = r.createElement("div")),
                                (a.className = n[s]),
                                e.$el.append(a)),
                                (i[s] = a),
                                (t[s] = a);
                        }
                    }),
                i
            );
        }
        function q(e = "") {
            return `.${e
                .trim()
                .replace(/([\.:!\/])/g, "\\$1")
                .replace(/ /g, ".")}`;
        }
        function Y(e) {
            const t = this,
                { $wrapperEl: i, params: s } = t;
            if (
                (s.loop && t.loopDestroy(),
                "object" == typeof e && "length" in e)
            )
                for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
            else i.append(e);
            s.loop && t.loopCreate(), s.observer || t.update();
        }
        function R(e) {
            const t = this,
                { params: i, $wrapperEl: s, activeIndex: n } = t;
            i.loop && t.loopDestroy();
            let r = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
                r = n + e.length;
            } else s.prepend(e);
            i.loop && t.loopCreate(),
                i.observer || t.update(),
                t.slideTo(r, 0, !1);
        }
        function X(e, t) {
            const i = this,
                { $wrapperEl: s, params: n, activeIndex: r } = i;
            let a = r;
            n.loop &&
                ((a -= i.loopedSlides),
                i.loopDestroy(),
                (i.slides = s.children(`.${n.slideClass}`)));
            const o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = a > e ? a + 1 : a;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides.eq(t);
                e.remove(), d.unshift(e);
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
                l = a > e ? a + t.length : a;
            } else s.append(t);
            for (let e = 0; e < d.length; e += 1) s.append(d[e]);
            n.loop && i.loopCreate(),
                n.observer || i.update(),
                n.loop
                    ? i.slideTo(l + i.loopedSlides, 0, !1)
                    : i.slideTo(l, 0, !1);
        }
        function F(e) {
            const t = this,
                { params: i, $wrapperEl: s, activeIndex: n } = t;
            let r = n;
            i.loop &&
                ((r -= t.loopedSlides),
                t.loopDestroy(),
                (t.slides = s.children(`.${i.slideClass}`)));
            let a,
                o = r;
            if ("object" == typeof e && "length" in e) {
                for (let i = 0; i < e.length; i += 1)
                    (a = e[i]),
                        t.slides[a] && t.slides.eq(a).remove(),
                        a < o && (o -= 1);
                o = Math.max(o, 0);
            } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), (o = Math.max(o, 0));
            i.loop && t.loopCreate(),
                i.observer || t.update(),
                i.loop
                    ? t.slideTo(o + t.loopedSlides, 0, !1)
                    : t.slideTo(o, 0, !1);
        }
        function V() {
            const e = this,
                t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t);
        }
        function G(e) {
            const {
                effect: t,
                swiper: i,
                on: s,
                setTranslate: n,
                setTransition: r,
                overwriteParams: a,
                perspective: o,
            } = e;
            s("beforeInit", () => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`),
                    o &&
                        o() &&
                        i.classNames.push(
                            `${i.params.containerModifierClass}3d`
                        );
                const e = a ? a() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e);
            }),
                s("setTranslate", () => {
                    i.params.effect === t && n();
                }),
                s("setTransition", (e, s) => {
                    i.params.effect === t && r(s);
                });
        }
        function U(e, t) {
            return e.transformEl
                ? t.find(e.transformEl).css({
                      "backface-visibility": "hidden",
                      "-webkit-backface-visibility": "hidden",
                  })
                : t;
        }
        function K({ swiper: e, duration: t, transformEl: i, allSlides: s }) {
            const { slides: n, activeIndex: r, $wrapperEl: a } = e;
            if (e.params.virtualTranslate && 0 !== t) {
                let t,
                    o = !1;
                (t = s ? (i ? n.find(i) : n) : i ? n.eq(r).find(i) : n.eq(r)),
                    t.transitionEnd(() => {
                        if (o) return;
                        if (!e || e.destroyed) return;
                        (o = !0), (e.animating = !1);
                        const t = ["webkitTransitionEnd", "transitionend"];
                        for (let e = 0; e < t.length; e += 1) a.trigger(t[e]);
                    });
            }
        }
        function Q(e, t, i) {
            const s = "swiper-slide-shadow" + (i ? `-${i}` : ""),
                n = e.transformEl ? t.find(e.transformEl) : t;
            let r = n.children(`.${s}`);
            return (
                r.length ||
                    ((r = d(
                        `<div class="swiper-slide-shadow${
                            i ? `-${i}` : ""
                        }"></div>`
                    )),
                    n.append(r)),
                r
            );
        }
        Object.keys(j).forEach((e) => {
            Object.keys(j[e]).forEach((t) => {
                W.prototype[t] = j[e][t];
            });
        }),
            W.use([
                function ({ swiper: e, on: t, emit: i }) {
                    const s = r();
                    let n = null;
                    const a = () => {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                (i("beforeResize"), i("resize"));
                        },
                        o = () => {
                            e &&
                                !e.destroyed &&
                                e.initialized &&
                                i("orientationchange");
                        };
                    t("init", () => {
                        e.params.resizeObserver && void 0 !== s.ResizeObserver
                            ? e &&
                              !e.destroyed &&
                              e.initialized &&
                              ((n = new ResizeObserver((t) => {
                                  const { width: i, height: s } = e;
                                  let n = i,
                                      r = s;
                                  t.forEach(
                                      ({
                                          contentBoxSize: t,
                                          contentRect: i,
                                          target: s,
                                      }) => {
                                          (s && s !== e.el) ||
                                              ((n = i
                                                  ? i.width
                                                  : (t[0] || t).inlineSize),
                                              (r = i
                                                  ? i.height
                                                  : (t[0] || t).blockSize));
                                      }
                                  ),
                                      (n === i && r === s) || a();
                              })),
                              n.observe(e.el))
                            : (s.addEventListener("resize", a),
                              s.addEventListener("orientationchange", o));
                    }),
                        t("destroy", () => {
                            n &&
                                n.unobserve &&
                                e.el &&
                                (n.unobserve(e.el), (n = null)),
                                s.removeEventListener("resize", a),
                                s.removeEventListener("orientationchange", o);
                        });
                },
                function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                    const n = [],
                        a = r(),
                        o = (e, t = {}) => {
                            const i = new (a.MutationObserver ||
                                a.WebkitMutationObserver)((e) => {
                                if (1 === e.length)
                                    return void s("observerUpdate", e[0]);
                                const t = function () {
                                    s("observerUpdate", e[0]);
                                };
                                a.requestAnimationFrame
                                    ? a.requestAnimationFrame(t)
                                    : a.setTimeout(t, 0);
                            });
                            i.observe(e, {
                                attributes:
                                    void 0 === t.attributes || t.attributes,
                                childList:
                                    void 0 === t.childList || t.childList,
                                characterData:
                                    void 0 === t.characterData ||
                                    t.characterData,
                            }),
                                n.push(i);
                        };
                    t({
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1,
                    }),
                        i("init", () => {
                            if (e.params.observer) {
                                if (e.params.observeParents) {
                                    const t = e.$el.parents();
                                    for (let e = 0; e < t.length; e += 1)
                                        o(t[e]);
                                }
                                o(e.$el[0], {
                                    childList: e.params.observeSlideChildren,
                                }),
                                    o(e.$wrapperEl[0], { attributes: !1 });
                            }
                        }),
                        i("destroy", () => {
                            n.forEach((e) => {
                                e.disconnect();
                            }),
                                n.splice(0, n.length);
                        });
                },
            ]);
        const Z = [
            function ({ swiper: e, extendParams: t, on: i }) {
                let s;
                function n(t, i) {
                    const s = e.params.virtual;
                    if (s.cache && e.virtual.cache[i])
                        return e.virtual.cache[i];
                    const n = s.renderSlide
                        ? d(s.renderSlide.call(e, t, i))
                        : d(
                              `<div class="${e.params.slideClass}" data-swiper-slide-index="${i}">${t}</div>`
                          );
                    return (
                        n.attr("data-swiper-slide-index") ||
                            n.attr("data-swiper-slide-index", i),
                        s.cache && (e.virtual.cache[i] = n),
                        n
                    );
                }
                function r(t) {
                    const {
                            slidesPerView: i,
                            slidesPerGroup: s,
                            centeredSlides: r,
                        } = e.params,
                        { addSlidesBefore: a, addSlidesAfter: o } =
                            e.params.virtual,
                        {
                            from: l,
                            to: d,
                            slides: c,
                            slidesGrid: h,
                            offset: u,
                        } = e.virtual;
                    e.params.cssMode || e.updateActiveIndex();
                    const p = e.activeIndex || 0;
                    let f, m, g;
                    (f = e.rtlTranslate
                        ? "right"
                        : e.isHorizontal()
                        ? "left"
                        : "top"),
                        r
                            ? ((m = Math.floor(i / 2) + s + o),
                              (g = Math.floor(i / 2) + s + a))
                            : ((m = i + (s - 1) + o), (g = s + a));
                    const v = Math.max((p || 0) - g, 0),
                        y = Math.min((p || 0) + m, c.length - 1),
                        b = (e.slidesGrid[v] || 0) - (e.slidesGrid[0] || 0);
                    function w() {
                        e.updateSlides(),
                            e.updateProgress(),
                            e.updateSlidesClasses(),
                            e.lazy && e.params.lazy.enabled && e.lazy.load();
                    }
                    if (
                        (Object.assign(e.virtual, {
                            from: v,
                            to: y,
                            offset: b,
                            slidesGrid: e.slidesGrid,
                        }),
                        l === v && d === y && !t)
                    )
                        return (
                            e.slidesGrid !== h &&
                                b !== u &&
                                e.slides.css(f, `${b}px`),
                            void e.updateProgress()
                        );
                    if (e.params.virtual.renderExternal)
                        return (
                            e.params.virtual.renderExternal.call(e, {
                                offset: b,
                                from: v,
                                to: y,
                                slides: (function () {
                                    const e = [];
                                    for (let t = v; t <= y; t += 1)
                                        e.push(c[t]);
                                    return e;
                                })(),
                            }),
                            void (e.params.virtual.renderExternalUpdate && w())
                        );
                    const x = [],
                        _ = [];
                    if (t)
                        e.$wrapperEl.find(`.${e.params.slideClass}`).remove();
                    else
                        for (let t = l; t <= d; t += 1)
                            (t < v || t > y) &&
                                e.$wrapperEl
                                    .find(
                                        `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                                    )
                                    .remove();
                    for (let e = 0; e < c.length; e += 1)
                        e >= v &&
                            e <= y &&
                            (void 0 === d || t
                                ? _.push(e)
                                : (e > d && _.push(e), e < l && x.push(e)));
                    _.forEach((t) => {
                        e.$wrapperEl.append(n(c[t], t));
                    }),
                        x
                            .sort((e, t) => t - e)
                            .forEach((t) => {
                                e.$wrapperEl.prepend(n(c[t], t));
                            }),
                        e.$wrapperEl.children(".swiper-slide").css(f, `${b}px`),
                        w();
                }
                t({
                    virtual: {
                        enabled: !1,
                        slides: [],
                        cache: !0,
                        renderSlide: null,
                        renderExternal: null,
                        renderExternalUpdate: !0,
                        addSlidesBefore: 0,
                        addSlidesAfter: 0,
                    },
                }),
                    (e.virtual = {
                        cache: {},
                        from: void 0,
                        to: void 0,
                        slides: [],
                        offset: 0,
                        slidesGrid: [],
                    }),
                    i("beforeInit", () => {
                        e.params.virtual.enabled &&
                            ((e.virtual.slides = e.params.virtual.slides),
                            e.classNames.push(
                                `${e.params.containerModifierClass}virtual`
                            ),
                            (e.params.watchSlidesProgress = !0),
                            (e.originalParams.watchSlidesProgress = !0),
                            e.params.initialSlide || r());
                    }),
                    i("setTranslate", () => {
                        e.params.virtual.enabled &&
                            (e.params.cssMode && !e._immediateVirtual
                                ? (clearTimeout(s),
                                  (s = setTimeout(() => {
                                      r();
                                  }, 100)))
                                : r());
                    }),
                    i("init update resize", () => {
                        e.params.virtual.enabled &&
                            e.params.cssMode &&
                            g(
                                e.wrapperEl,
                                "--swiper-virtual-size",
                                `${e.virtualSize}px`
                            );
                    }),
                    Object.assign(e.virtual, {
                        appendSlide: function (t) {
                            if ("object" == typeof t && "length" in t)
                                for (let i = 0; i < t.length; i += 1)
                                    t[i] && e.virtual.slides.push(t[i]);
                            else e.virtual.slides.push(t);
                            r(!0);
                        },
                        prependSlide: function (t) {
                            const i = e.activeIndex;
                            let s = i + 1,
                                n = 1;
                            if (Array.isArray(t)) {
                                for (let i = 0; i < t.length; i += 1)
                                    t[i] && e.virtual.slides.unshift(t[i]);
                                (s = i + t.length), (n = t.length);
                            } else e.virtual.slides.unshift(t);
                            if (e.params.virtual.cache) {
                                const t = e.virtual.cache,
                                    i = {};
                                Object.keys(t).forEach((e) => {
                                    const s = t[e],
                                        r = s.attr("data-swiper-slide-index");
                                    r &&
                                        s.attr(
                                            "data-swiper-slide-index",
                                            parseInt(r, 10) + n
                                        ),
                                        (i[parseInt(e, 10) + n] = s);
                                }),
                                    (e.virtual.cache = i);
                            }
                            r(!0), e.slideTo(s, 0);
                        },
                        removeSlide: function (t) {
                            if (null == t) return;
                            let i = e.activeIndex;
                            if (Array.isArray(t))
                                for (let s = t.length - 1; s >= 0; s -= 1)
                                    e.virtual.slides.splice(t[s], 1),
                                        e.params.virtual.cache &&
                                            delete e.virtual.cache[t[s]],
                                        t[s] < i && (i -= 1),
                                        (i = Math.max(i, 0));
                            else
                                e.virtual.slides.splice(t, 1),
                                    e.params.virtual.cache &&
                                        delete e.virtual.cache[t],
                                    t < i && (i -= 1),
                                    (i = Math.max(i, 0));
                            r(!0), e.slideTo(i, 0);
                        },
                        removeAllSlides: function () {
                            (e.virtual.slides = []),
                                e.params.virtual.cache &&
                                    (e.virtual.cache = {}),
                                r(!0),
                                e.slideTo(0, 0);
                        },
                        update: r,
                    });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: n }) {
                const a = s(),
                    o = r();
                function l(t) {
                    if (!e.enabled) return;
                    const { rtlTranslate: i } = e;
                    let s = t;
                    s.originalEvent && (s = s.originalEvent);
                    const r = s.keyCode || s.charCode,
                        l = e.params.keyboard.pageUpDown,
                        d = l && 33 === r,
                        c = l && 34 === r,
                        h = 37 === r,
                        u = 39 === r,
                        p = 38 === r,
                        f = 40 === r;
                    if (
                        !e.allowSlideNext &&
                        ((e.isHorizontal() && u) || (e.isVertical() && f) || c)
                    )
                        return !1;
                    if (
                        !e.allowSlidePrev &&
                        ((e.isHorizontal() && h) || (e.isVertical() && p) || d)
                    )
                        return !1;
                    if (
                        !(
                            s.shiftKey ||
                            s.altKey ||
                            s.ctrlKey ||
                            s.metaKey ||
                            (a.activeElement &&
                                a.activeElement.nodeName &&
                                ("input" ===
                                    a.activeElement.nodeName.toLowerCase() ||
                                    "textarea" ===
                                        a.activeElement.nodeName.toLowerCase()))
                        )
                    ) {
                        if (
                            e.params.keyboard.onlyInViewport &&
                            (d || c || h || u || p || f)
                        ) {
                            let t = !1;
                            if (
                                e.$el.parents(`.${e.params.slideClass}`)
                                    .length > 0 &&
                                0 ===
                                    e.$el.parents(
                                        `.${e.params.slideActiveClass}`
                                    ).length
                            )
                                return;
                            const s = e.$el,
                                n = s[0].clientWidth,
                                r = s[0].clientHeight,
                                a = o.innerWidth,
                                l = o.innerHeight,
                                d = e.$el.offset();
                            i && (d.left -= e.$el[0].scrollLeft);
                            const c = [
                                [d.left, d.top],
                                [d.left + n, d.top],
                                [d.left, d.top + r],
                                [d.left + n, d.top + r],
                            ];
                            for (let e = 0; e < c.length; e += 1) {
                                const i = c[e];
                                if (
                                    i[0] >= 0 &&
                                    i[0] <= a &&
                                    i[1] >= 0 &&
                                    i[1] <= l
                                ) {
                                    if (0 === i[0] && 0 === i[1]) continue;
                                    t = !0;
                                }
                            }
                            if (!t) return;
                        }
                        e.isHorizontal()
                            ? ((d || c || h || u) &&
                                  (s.preventDefault
                                      ? s.preventDefault()
                                      : (s.returnValue = !1)),
                              (((c || u) && !i) || ((d || h) && i)) &&
                                  e.slideNext(),
                              (((d || h) && !i) || ((c || u) && i)) &&
                                  e.slidePrev())
                            : ((d || c || p || f) &&
                                  (s.preventDefault
                                      ? s.preventDefault()
                                      : (s.returnValue = !1)),
                              (c || f) && e.slideNext(),
                              (d || p) && e.slidePrev()),
                            n("keyPress", r);
                    }
                }
                function c() {
                    e.keyboard.enabled ||
                        (d(a).on("keydown", l), (e.keyboard.enabled = !0));
                }
                function h() {
                    e.keyboard.enabled &&
                        (d(a).off("keydown", l), (e.keyboard.enabled = !1));
                }
                (e.keyboard = { enabled: !1 }),
                    t({
                        keyboard: {
                            enabled: !1,
                            onlyInViewport: !0,
                            pageUpDown: !0,
                        },
                    }),
                    i("init", () => {
                        e.params.keyboard.enabled && c();
                    }),
                    i("destroy", () => {
                        e.keyboard.enabled && h();
                    }),
                    Object.assign(e.keyboard, { enable: c, disable: h });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                const n = r();
                let a;
                t({
                    mousewheel: {
                        enabled: !1,
                        releaseOnEdges: !1,
                        invert: !1,
                        forceToAxis: !1,
                        sensitivity: 1,
                        eventsTarget: "container",
                        thresholdDelta: null,
                        thresholdTime: null,
                    },
                }),
                    (e.mousewheel = { enabled: !1 });
                let o,
                    l = u();
                const c = [];
                function p() {
                    e.enabled && (e.mouseEntered = !0);
                }
                function f() {
                    e.enabled && (e.mouseEntered = !1);
                }
                function m(t) {
                    return !(
                        (e.params.mousewheel.thresholdDelta &&
                            t.delta < e.params.mousewheel.thresholdDelta) ||
                        (e.params.mousewheel.thresholdTime &&
                            u() - l < e.params.mousewheel.thresholdTime) ||
                        (!(t.delta >= 6 && u() - l < 60) &&
                            (t.direction < 0
                                ? (e.isEnd && !e.params.loop) ||
                                  e.animating ||
                                  (e.slideNext(), s("scroll", t.raw))
                                : (e.isBeginning && !e.params.loop) ||
                                  e.animating ||
                                  (e.slidePrev(), s("scroll", t.raw)),
                            (l = new n.Date().getTime()),
                            1))
                    );
                }
                function g(t) {
                    let i = t,
                        n = !0;
                    if (!e.enabled) return;
                    const r = e.params.mousewheel;
                    e.params.cssMode && i.preventDefault();
                    let l = e.$el;
                    if (
                        ("container" !== e.params.mousewheel.eventsTarget &&
                            (l = d(e.params.mousewheel.eventsTarget)),
                        !e.mouseEntered &&
                            !l[0].contains(i.target) &&
                            !r.releaseOnEdges)
                    )
                        return !0;
                    i.originalEvent && (i = i.originalEvent);
                    let p = 0;
                    const f = e.rtlTranslate ? -1 : 1,
                        g = (function (e) {
                            let t = 0,
                                i = 0,
                                s = 0,
                                n = 0;
                            return (
                                "detail" in e && (i = e.detail),
                                "wheelDelta" in e && (i = -e.wheelDelta / 120),
                                "wheelDeltaY" in e &&
                                    (i = -e.wheelDeltaY / 120),
                                "wheelDeltaX" in e &&
                                    (t = -e.wheelDeltaX / 120),
                                "axis" in e &&
                                    e.axis === e.HORIZONTAL_AXIS &&
                                    ((t = i), (i = 0)),
                                (s = 10 * t),
                                (n = 10 * i),
                                "deltaY" in e && (n = e.deltaY),
                                "deltaX" in e && (s = e.deltaX),
                                e.shiftKey && !s && ((s = n), (n = 0)),
                                (s || n) &&
                                    e.deltaMode &&
                                    (1 === e.deltaMode
                                        ? ((s *= 40), (n *= 40))
                                        : ((s *= 800), (n *= 800))),
                                s && !t && (t = s < 1 ? -1 : 1),
                                n && !i && (i = n < 1 ? -1 : 1),
                                { spinX: t, spinY: i, pixelX: s, pixelY: n }
                            );
                        })(i);
                    if (r.forceToAxis)
                        if (e.isHorizontal()) {
                            if (!(Math.abs(g.pixelX) > Math.abs(g.pixelY)))
                                return !0;
                            p = -g.pixelX * f;
                        } else {
                            if (!(Math.abs(g.pixelY) > Math.abs(g.pixelX)))
                                return !0;
                            p = -g.pixelY;
                        }
                    else
                        p =
                            Math.abs(g.pixelX) > Math.abs(g.pixelY)
                                ? -g.pixelX * f
                                : -g.pixelY;
                    if (0 === p) return !0;
                    r.invert && (p = -p);
                    let v = e.getTranslate() + p * r.sensitivity;
                    if (
                        (v >= e.minTranslate() && (v = e.minTranslate()),
                        v <= e.maxTranslate() && (v = e.maxTranslate()),
                        (n =
                            !!e.params.loop ||
                            !(
                                v === e.minTranslate() || v === e.maxTranslate()
                            )),
                        n && e.params.nested && i.stopPropagation(),
                        e.params.freeMode && e.params.freeMode.enabled)
                    ) {
                        const t = {
                                time: u(),
                                delta: Math.abs(p),
                                direction: Math.sign(p),
                            },
                            n =
                                o &&
                                t.time < o.time + 500 &&
                                t.delta <= o.delta &&
                                t.direction === o.direction;
                        if (!n) {
                            (o = void 0), e.params.loop && e.loopFix();
                            let l = e.getTranslate() + p * r.sensitivity;
                            const d = e.isBeginning,
                                u = e.isEnd;
                            if (
                                (l >= e.minTranslate() &&
                                    (l = e.minTranslate()),
                                l <= e.maxTranslate() && (l = e.maxTranslate()),
                                e.setTransition(0),
                                e.setTranslate(l),
                                e.updateProgress(),
                                e.updateActiveIndex(),
                                e.updateSlidesClasses(),
                                ((!d && e.isBeginning) || (!u && e.isEnd)) &&
                                    e.updateSlidesClasses(),
                                e.params.freeMode.sticky)
                            ) {
                                clearTimeout(a),
                                    (a = void 0),
                                    c.length >= 15 && c.shift();
                                const i = c.length ? c[c.length - 1] : void 0,
                                    s = c[0];
                                if (
                                    (c.push(t),
                                    i &&
                                        (t.delta > i.delta ||
                                            t.direction !== i.direction))
                                )
                                    c.splice(0);
                                else if (
                                    c.length >= 15 &&
                                    t.time - s.time < 500 &&
                                    s.delta - t.delta >= 1 &&
                                    t.delta <= 6
                                ) {
                                    const i = p > 0 ? 0.8 : 0.2;
                                    (o = t),
                                        c.splice(0),
                                        (a = h(() => {
                                            e.slideToClosest(
                                                e.params.speed,
                                                !0,
                                                void 0,
                                                i
                                            );
                                        }, 0));
                                }
                                a ||
                                    (a = h(() => {
                                        (o = t),
                                            c.splice(0),
                                            e.slideToClosest(
                                                e.params.speed,
                                                !0,
                                                void 0,
                                                0.5
                                            );
                                    }, 500));
                            }
                            if (
                                (n || s("scroll", i),
                                e.params.autoplay &&
                                    e.params.autoplayDisableOnInteraction &&
                                    e.autoplay.stop(),
                                l === e.minTranslate() ||
                                    l === e.maxTranslate())
                            )
                                return !0;
                        }
                    } else {
                        const i = {
                            time: u(),
                            delta: Math.abs(p),
                            direction: Math.sign(p),
                            raw: t,
                        };
                        c.length >= 2 && c.shift();
                        const s = c.length ? c[c.length - 1] : void 0;
                        if (
                            (c.push(i),
                            s
                                ? (i.direction !== s.direction ||
                                      i.delta > s.delta ||
                                      i.time > s.time + 150) &&
                                  m(i)
                                : m(i),
                            (function (t) {
                                const i = e.params.mousewheel;
                                if (t.direction < 0) {
                                    if (
                                        e.isEnd &&
                                        !e.params.loop &&
                                        i.releaseOnEdges
                                    )
                                        return !0;
                                } else if (
                                    e.isBeginning &&
                                    !e.params.loop &&
                                    i.releaseOnEdges
                                )
                                    return !0;
                                return !1;
                            })(i))
                        )
                            return !0;
                    }
                    return (
                        i.preventDefault
                            ? i.preventDefault()
                            : (i.returnValue = !1),
                        !1
                    );
                }
                function v(t) {
                    let i = e.$el;
                    "container" !== e.params.mousewheel.eventsTarget &&
                        (i = d(e.params.mousewheel.eventsTarget)),
                        i[t]("mouseenter", p),
                        i[t]("mouseleave", f),
                        i[t]("wheel", g);
                }
                function y() {
                    return e.params.cssMode
                        ? (e.wrapperEl.removeEventListener("wheel", g), !0)
                        : !e.mousewheel.enabled &&
                              (v("on"), (e.mousewheel.enabled = !0), !0);
                }
                function b() {
                    return e.params.cssMode
                        ? (e.wrapperEl.addEventListener(event, g), !0)
                        : !!e.mousewheel.enabled &&
                              (v("off"), (e.mousewheel.enabled = !1), !0);
                }
                i("init", () => {
                    !e.params.mousewheel.enabled && e.params.cssMode && b(),
                        e.params.mousewheel.enabled && y();
                }),
                    i("destroy", () => {
                        e.params.cssMode && y(), e.mousewheel.enabled && b();
                    }),
                    Object.assign(e.mousewheel, { enable: y, disable: b });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                function n(t) {
                    let i;
                    return (
                        t &&
                            ((i = d(t)),
                            e.params.uniqueNavElements &&
                                "string" == typeof t &&
                                i.length > 1 &&
                                1 === e.$el.find(t).length &&
                                (i = e.$el.find(t))),
                        i
                    );
                }
                function r(t, i) {
                    const s = e.params.navigation;
                    t &&
                        t.length > 0 &&
                        (t[i ? "addClass" : "removeClass"](s.disabledClass),
                        t[0] &&
                            "BUTTON" === t[0].tagName &&
                            (t[0].disabled = i),
                        e.params.watchOverflow &&
                            e.enabled &&
                            t[e.isLocked ? "addClass" : "removeClass"](
                                s.lockClass
                            ));
                }
                function a() {
                    if (e.params.loop) return;
                    const { $nextEl: t, $prevEl: i } = e.navigation;
                    r(i, e.isBeginning), r(t, e.isEnd);
                }
                function o(t) {
                    t.preventDefault(),
                        (e.isBeginning && !e.params.loop) || e.slidePrev();
                }
                function l(t) {
                    t.preventDefault(),
                        (e.isEnd && !e.params.loop) || e.slideNext();
                }
                function c() {
                    const t = e.params.navigation;
                    if (
                        ((e.params.navigation = B(
                            e,
                            e.originalParams.navigation,
                            e.params.navigation,
                            {
                                nextEl: "swiper-button-next",
                                prevEl: "swiper-button-prev",
                            }
                        )),
                        !t.nextEl && !t.prevEl)
                    )
                        return;
                    const i = n(t.nextEl),
                        s = n(t.prevEl);
                    i && i.length > 0 && i.on("click", l),
                        s && s.length > 0 && s.on("click", o),
                        Object.assign(e.navigation, {
                            $nextEl: i,
                            nextEl: i && i[0],
                            $prevEl: s,
                            prevEl: s && s[0],
                        }),
                        e.enabled ||
                            (i && i.addClass(t.lockClass),
                            s && s.addClass(t.lockClass));
                }
                function h() {
                    const { $nextEl: t, $prevEl: i } = e.navigation;
                    t &&
                        t.length &&
                        (t.off("click", l),
                        t.removeClass(e.params.navigation.disabledClass)),
                        i &&
                            i.length &&
                            (i.off("click", o),
                            i.removeClass(e.params.navigation.disabledClass));
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                    },
                }),
                    (e.navigation = {
                        nextEl: null,
                        $nextEl: null,
                        prevEl: null,
                        $prevEl: null,
                    }),
                    i("init", () => {
                        c(), a();
                    }),
                    i("toEdge fromEdge lock unlock", () => {
                        a();
                    }),
                    i("destroy", () => {
                        h();
                    }),
                    i("enable disable", () => {
                        const { $nextEl: t, $prevEl: i } = e.navigation;
                        t &&
                            t[e.enabled ? "removeClass" : "addClass"](
                                e.params.navigation.lockClass
                            ),
                            i &&
                                i[e.enabled ? "removeClass" : "addClass"](
                                    e.params.navigation.lockClass
                                );
                    }),
                    i("click", (t, i) => {
                        const { $nextEl: n, $prevEl: r } = e.navigation,
                            a = i.target;
                        if (
                            e.params.navigation.hideOnClick &&
                            !d(a).is(r) &&
                            !d(a).is(n)
                        ) {
                            if (
                                e.pagination &&
                                e.params.pagination &&
                                e.params.pagination.clickable &&
                                (e.pagination.el === a ||
                                    e.pagination.el.contains(a))
                            )
                                return;
                            let t;
                            n
                                ? (t = n.hasClass(
                                      e.params.navigation.hiddenClass
                                  ))
                                : r &&
                                  (t = r.hasClass(
                                      e.params.navigation.hiddenClass
                                  )),
                                s(
                                    !0 === t
                                        ? "navigationShow"
                                        : "navigationHide"
                                ),
                                n &&
                                    n.toggleClass(
                                        e.params.navigation.hiddenClass
                                    ),
                                r &&
                                    r.toggleClass(
                                        e.params.navigation.hiddenClass
                                    );
                        }
                    }),
                    Object.assign(e.navigation, {
                        update: a,
                        init: c,
                        destroy: h,
                    });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                const n = "swiper-pagination";
                let r;
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: (e) => e,
                        formatFractionTotal: (e) => e,
                        bulletClass: `${n}-bullet`,
                        bulletActiveClass: `${n}-bullet-active`,
                        modifierClass: `${n}-`,
                        currentClass: `${n}-current`,
                        totalClass: `${n}-total`,
                        hiddenClass: `${n}-hidden`,
                        progressbarFillClass: `${n}-progressbar-fill`,
                        progressbarOppositeClass: `${n}-progressbar-opposite`,
                        clickableClass: `${n}-clickable`,
                        lockClass: `${n}-lock`,
                        horizontalClass: `${n}-horizontal`,
                        verticalClass: `${n}-vertical`,
                    },
                }),
                    (e.pagination = { el: null, $el: null, bullets: [] });
                let a = 0;
                function o() {
                    return (
                        !e.params.pagination.el ||
                        !e.pagination.el ||
                        !e.pagination.$el ||
                        0 === e.pagination.$el.length
                    );
                }
                function l(t, i) {
                    const { bulletActiveClass: s } = e.params.pagination;
                    t[i]()
                        .addClass(`${s}-${i}`)
                        [i]()
                        .addClass(`${s}-${i}-${i}`);
                }
                function c() {
                    const t = e.rtl,
                        i = e.params.pagination;
                    if (o()) return;
                    const n =
                            e.virtual && e.params.virtual.enabled
                                ? e.virtual.slides.length
                                : e.slides.length,
                        c = e.pagination.$el;
                    let h;
                    const u = e.params.loop
                        ? Math.ceil(
                              (n - 2 * e.loopedSlides) / e.params.slidesPerGroup
                          )
                        : e.snapGrid.length;
                    if (
                        (e.params.loop
                            ? ((h = Math.ceil(
                                  (e.activeIndex - e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )),
                              h > n - 1 - 2 * e.loopedSlides &&
                                  (h -= n - 2 * e.loopedSlides),
                              h > u - 1 && (h -= u),
                              h < 0 &&
                                  "bullets" !== e.params.paginationType &&
                                  (h = u + h))
                            : (h =
                                  void 0 !== e.snapIndex
                                      ? e.snapIndex
                                      : e.activeIndex || 0),
                        "bullets" === i.type &&
                            e.pagination.bullets &&
                            e.pagination.bullets.length > 0)
                    ) {
                        const s = e.pagination.bullets;
                        let n, o, u;
                        if (
                            (i.dynamicBullets &&
                                ((r = s
                                    .eq(0)
                                    [
                                        e.isHorizontal()
                                            ? "outerWidth"
                                            : "outerHeight"
                                    ](!0)),
                                c.css(
                                    e.isHorizontal() ? "width" : "height",
                                    r * (i.dynamicMainBullets + 4) + "px"
                                ),
                                i.dynamicMainBullets > 1 &&
                                    void 0 !== e.previousIndex &&
                                    ((a += h - e.previousIndex),
                                    a > i.dynamicMainBullets - 1
                                        ? (a = i.dynamicMainBullets - 1)
                                        : a < 0 && (a = 0)),
                                (n = h - a),
                                (o =
                                    n +
                                    (Math.min(s.length, i.dynamicMainBullets) -
                                        1)),
                                (u = (o + n) / 2)),
                            s.removeClass(
                                [
                                    "",
                                    "-next",
                                    "-next-next",
                                    "-prev",
                                    "-prev-prev",
                                    "-main",
                                ]
                                    .map((e) => `${i.bulletActiveClass}${e}`)
                                    .join(" ")
                            ),
                            c.length > 1)
                        )
                            s.each((e) => {
                                const t = d(e),
                                    s = t.index();
                                s === h && t.addClass(i.bulletActiveClass),
                                    i.dynamicBullets &&
                                        (s >= n &&
                                            s <= o &&
                                            t.addClass(
                                                `${i.bulletActiveClass}-main`
                                            ),
                                        s === n && l(t, "prev"),
                                        s === o && l(t, "next"));
                            });
                        else {
                            const t = s.eq(h),
                                r = t.index();
                            if (
                                (t.addClass(i.bulletActiveClass),
                                i.dynamicBullets)
                            ) {
                                const t = s.eq(n),
                                    a = s.eq(o);
                                for (let e = n; e <= o; e += 1)
                                    s.eq(e).addClass(
                                        `${i.bulletActiveClass}-main`
                                    );
                                if (e.params.loop)
                                    if (r >= s.length - i.dynamicMainBullets) {
                                        for (
                                            let e = i.dynamicMainBullets;
                                            e >= 0;
                                            e -= 1
                                        )
                                            s.eq(s.length - e).addClass(
                                                `${i.bulletActiveClass}-main`
                                            );
                                        s.eq(
                                            s.length - i.dynamicMainBullets - 1
                                        ).addClass(
                                            `${i.bulletActiveClass}-prev`
                                        );
                                    } else l(t, "prev"), l(a, "next");
                                else l(t, "prev"), l(a, "next");
                            }
                        }
                        if (i.dynamicBullets) {
                            const n = Math.min(
                                    s.length,
                                    i.dynamicMainBullets + 4
                                ),
                                a = (r * n - r) / 2 - u * r,
                                o = t ? "right" : "left";
                            s.css(e.isHorizontal() ? o : "top", `${a}px`);
                        }
                    }
                    if (
                        ("fraction" === i.type &&
                            (c
                                .find(q(i.currentClass))
                                .text(i.formatFractionCurrent(h + 1)),
                            c
                                .find(q(i.totalClass))
                                .text(i.formatFractionTotal(u))),
                        "progressbar" === i.type)
                    ) {
                        let t;
                        t = i.progressbarOpposite
                            ? e.isHorizontal()
                                ? "vertical"
                                : "horizontal"
                            : e.isHorizontal()
                            ? "horizontal"
                            : "vertical";
                        const s = (h + 1) / u;
                        let n = 1,
                            r = 1;
                        "horizontal" === t ? (n = s) : (r = s),
                            c
                                .find(q(i.progressbarFillClass))
                                .transform(
                                    `translate3d(0,0,0) scaleX(${n}) scaleY(${r})`
                                )
                                .transition(e.params.speed);
                    }
                    "custom" === i.type && i.renderCustom
                        ? (c.html(i.renderCustom(e, h + 1, u)),
                          s("paginationRender", c[0]))
                        : s("paginationUpdate", c[0]),
                        e.params.watchOverflow &&
                            e.enabled &&
                            c[e.isLocked ? "addClass" : "removeClass"](
                                i.lockClass
                            );
                }
                function h() {
                    const t = e.params.pagination;
                    if (o()) return;
                    const i =
                            e.virtual && e.params.virtual.enabled
                                ? e.virtual.slides.length
                                : e.slides.length,
                        n = e.pagination.$el;
                    let r = "";
                    if ("bullets" === t.type) {
                        let s = e.params.loop
                            ? Math.ceil(
                                  (i - 2 * e.loopedSlides) /
                                      e.params.slidesPerGroup
                              )
                            : e.snapGrid.length;
                        e.params.freeMode &&
                            e.params.freeMode.enabled &&
                            !e.params.loop &&
                            s > i &&
                            (s = i);
                        for (let i = 0; i < s; i += 1)
                            t.renderBullet
                                ? (r += t.renderBullet.call(
                                      e,
                                      i,
                                      t.bulletClass
                                  ))
                                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
                        n.html(r),
                            (e.pagination.bullets = n.find(q(t.bulletClass)));
                    }
                    "fraction" === t.type &&
                        ((r = t.renderFraction
                            ? t.renderFraction.call(
                                  e,
                                  t.currentClass,
                                  t.totalClass
                              )
                            : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
                        n.html(r)),
                        "progressbar" === t.type &&
                            ((r = t.renderProgressbar
                                ? t.renderProgressbar.call(
                                      e,
                                      t.progressbarFillClass
                                  )
                                : `<span class="${t.progressbarFillClass}"></span>`),
                            n.html(r)),
                        "custom" !== t.type &&
                            s("paginationRender", e.pagination.$el[0]);
                }
                function u() {
                    e.params.pagination = B(
                        e,
                        e.originalParams.pagination,
                        e.params.pagination,
                        { el: "swiper-pagination" }
                    );
                    const t = e.params.pagination;
                    if (!t.el) return;
                    let i = d(t.el);
                    0 !== i.length &&
                        (e.params.uniqueNavElements &&
                            "string" == typeof t.el &&
                            i.length > 1 &&
                            ((i = e.$el.find(t.el)),
                            i.length > 1 &&
                                (i = i.filter(
                                    (t) => d(t).parents(".swiper")[0] === e.el
                                ))),
                        "bullets" === t.type &&
                            t.clickable &&
                            i.addClass(t.clickableClass),
                        i.addClass(t.modifierClass + t.type),
                        i.addClass(t.modifierClass + e.params.direction),
                        "bullets" === t.type &&
                            t.dynamicBullets &&
                            (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
                            (a = 0),
                            t.dynamicMainBullets < 1 &&
                                (t.dynamicMainBullets = 1)),
                        "progressbar" === t.type &&
                            t.progressbarOpposite &&
                            i.addClass(t.progressbarOppositeClass),
                        t.clickable &&
                            i.on("click", q(t.bulletClass), function (t) {
                                t.preventDefault();
                                let i =
                                    d(this).index() * e.params.slidesPerGroup;
                                e.params.loop && (i += e.loopedSlides),
                                    e.slideTo(i);
                            }),
                        Object.assign(e.pagination, { $el: i, el: i[0] }),
                        e.enabled || i.addClass(t.lockClass));
                }
                function p() {
                    const t = e.params.pagination;
                    if (o()) return;
                    const i = e.pagination.$el;
                    i.removeClass(t.hiddenClass),
                        i.removeClass(t.modifierClass + t.type),
                        i.removeClass(t.modifierClass + e.params.direction),
                        e.pagination.bullets &&
                            e.pagination.bullets.removeClass &&
                            e.pagination.bullets.removeClass(
                                t.bulletActiveClass
                            ),
                        t.clickable && i.off("click", q(t.bulletClass));
                }
                i("init", () => {
                    u(), h(), c();
                }),
                    i("activeIndexChange", () => {
                        (e.params.loop || void 0 === e.snapIndex) && c();
                    }),
                    i("snapIndexChange", () => {
                        e.params.loop || c();
                    }),
                    i("slidesLengthChange", () => {
                        e.params.loop && (h(), c());
                    }),
                    i("snapGridLengthChange", () => {
                        e.params.loop || (h(), c());
                    }),
                    i("destroy", () => {
                        p();
                    }),
                    i("enable disable", () => {
                        const { $el: t } = e.pagination;
                        t &&
                            t[e.enabled ? "removeClass" : "addClass"](
                                e.params.pagination.lockClass
                            );
                    }),
                    i("lock unlock", () => {
                        c();
                    }),
                    i("click", (t, i) => {
                        const n = i.target,
                            { $el: r } = e.pagination;
                        if (
                            e.params.pagination.el &&
                            e.params.pagination.hideOnClick &&
                            r.length > 0 &&
                            !d(n).hasClass(e.params.pagination.bulletClass)
                        ) {
                            if (
                                e.navigation &&
                                ((e.navigation.nextEl &&
                                    n === e.navigation.nextEl) ||
                                    (e.navigation.prevEl &&
                                        n === e.navigation.prevEl))
                            )
                                return;
                            const t = r.hasClass(
                                e.params.pagination.hiddenClass
                            );
                            s(!0 === t ? "paginationShow" : "paginationHide"),
                                r.toggleClass(e.params.pagination.hiddenClass);
                        }
                    }),
                    Object.assign(e.pagination, {
                        render: h,
                        update: c,
                        init: u,
                        destroy: p,
                    });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: n }) {
                const r = s();
                let a,
                    o,
                    l,
                    c,
                    u = !1,
                    p = null,
                    f = null;
                function m() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const { scrollbar: t, rtlTranslate: i, progress: s } = e,
                        { $dragEl: n, $el: r } = t,
                        a = e.params.scrollbar;
                    let d = o,
                        c = (l - o) * s;
                    i
                        ? ((c = -c),
                          c > 0
                              ? ((d = o - c), (c = 0))
                              : -c + o > l && (d = l + c))
                        : c < 0
                        ? ((d = o + c), (c = 0))
                        : c + o > l && (d = l - c),
                        e.isHorizontal()
                            ? (n.transform(`translate3d(${c}px, 0, 0)`),
                              (n[0].style.width = `${d}px`))
                            : (n.transform(`translate3d(0px, ${c}px, 0)`),
                              (n[0].style.height = `${d}px`)),
                        a.hide &&
                            (clearTimeout(p),
                            (r[0].style.opacity = 1),
                            (p = setTimeout(() => {
                                (r[0].style.opacity = 0), r.transition(400);
                            }, 1e3)));
                }
                function g() {
                    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
                    const { scrollbar: t } = e,
                        { $dragEl: i, $el: s } = t;
                    (i[0].style.width = ""),
                        (i[0].style.height = ""),
                        (l = e.isHorizontal()
                            ? s[0].offsetWidth
                            : s[0].offsetHeight),
                        (c =
                            e.size /
                            (e.virtualSize +
                                e.params.slidesOffsetBefore -
                                (e.params.centeredSlides ? e.snapGrid[0] : 0))),
                        (o =
                            "auto" === e.params.scrollbar.dragSize
                                ? l * c
                                : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal()
                            ? (i[0].style.width = `${o}px`)
                            : (i[0].style.height = `${o}px`),
                        (s[0].style.display = c >= 1 ? "none" : ""),
                        e.params.scrollbar.hide && (s[0].style.opacity = 0),
                        e.params.watchOverflow &&
                            e.enabled &&
                            t.$el[e.isLocked ? "addClass" : "removeClass"](
                                e.params.scrollbar.lockClass
                            );
                }
                function v(t) {
                    return e.isHorizontal()
                        ? "touchstart" === t.type || "touchmove" === t.type
                            ? t.targetTouches[0].clientX
                            : t.clientX
                        : "touchstart" === t.type || "touchmove" === t.type
                        ? t.targetTouches[0].clientY
                        : t.clientY;
                }
                function y(t) {
                    const { scrollbar: i, rtlTranslate: s } = e,
                        { $el: n } = i;
                    let r;
                    (r =
                        (v(t) -
                            n.offset()[e.isHorizontal() ? "left" : "top"] -
                            (null !== a ? a : o / 2)) /
                        (l - o)),
                        (r = Math.max(Math.min(r, 1), 0)),
                        s && (r = 1 - r);
                    const d =
                        e.minTranslate() +
                        (e.maxTranslate() - e.minTranslate()) * r;
                    e.updateProgress(d),
                        e.setTranslate(d),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                function b(t) {
                    const i = e.params.scrollbar,
                        { scrollbar: s, $wrapperEl: r } = e,
                        { $el: o, $dragEl: l } = s;
                    (u = !0),
                        (a =
                            t.target === l[0] || t.target === l
                                ? v(t) -
                                  t.target.getBoundingClientRect()[
                                      e.isHorizontal() ? "left" : "top"
                                  ]
                                : null),
                        t.preventDefault(),
                        t.stopPropagation(),
                        r.transition(100),
                        l.transition(100),
                        y(t),
                        clearTimeout(f),
                        o.transition(0),
                        i.hide && o.css("opacity", 1),
                        e.params.cssMode &&
                            e.$wrapperEl.css("scroll-snap-type", "none"),
                        n("scrollbarDragStart", t);
                }
                function w(t) {
                    const { scrollbar: i, $wrapperEl: s } = e,
                        { $el: r, $dragEl: a } = i;
                    u &&
                        (t.preventDefault
                            ? t.preventDefault()
                            : (t.returnValue = !1),
                        y(t),
                        s.transition(0),
                        r.transition(0),
                        a.transition(0),
                        n("scrollbarDragMove", t));
                }
                function x(t) {
                    const i = e.params.scrollbar,
                        { scrollbar: s, $wrapperEl: r } = e,
                        { $el: a } = s;
                    u &&
                        ((u = !1),
                        e.params.cssMode &&
                            (e.$wrapperEl.css("scroll-snap-type", ""),
                            r.transition("")),
                        i.hide &&
                            (clearTimeout(f),
                            (f = h(() => {
                                a.css("opacity", 0), a.transition(400);
                            }, 1e3))),
                        n("scrollbarDragEnd", t),
                        i.snapOnRelease && e.slideToClosest());
                }
                function _(t) {
                    const {
                            scrollbar: i,
                            touchEventsTouch: s,
                            touchEventsDesktop: n,
                            params: a,
                            support: o,
                        } = e,
                        l = i.$el[0],
                        d = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !1,
                            capture: !1,
                        },
                        c = !(!o.passiveListener || !a.passiveListeners) && {
                            passive: !0,
                            capture: !1,
                        };
                    if (!l) return;
                    const h =
                        "on" === t ? "addEventListener" : "removeEventListener";
                    o.touch
                        ? (l[h](s.start, b, d),
                          l[h](s.move, w, d),
                          l[h](s.end, x, c))
                        : (l[h](n.start, b, d),
                          r[h](n.move, w, d),
                          r[h](n.end, x, c));
                }
                function E() {
                    const { scrollbar: t, $el: i } = e;
                    e.params.scrollbar = B(
                        e,
                        e.originalParams.scrollbar,
                        e.params.scrollbar,
                        { el: "swiper-scrollbar" }
                    );
                    const s = e.params.scrollbar;
                    if (!s.el) return;
                    let n = d(s.el);
                    e.params.uniqueNavElements &&
                        "string" == typeof s.el &&
                        n.length > 1 &&
                        1 === i.find(s.el).length &&
                        (n = i.find(s.el));
                    let r = n.find(`.${e.params.scrollbar.dragClass}`);
                    0 === r.length &&
                        ((r = d(
                            `<div class="${e.params.scrollbar.dragClass}"></div>`
                        )),
                        n.append(r)),
                        Object.assign(t, {
                            $el: n,
                            el: n[0],
                            $dragEl: r,
                            dragEl: r[0],
                        }),
                        s.draggable && e.params.scrollbar.el && _("on"),
                        n &&
                            n[e.enabled ? "removeClass" : "addClass"](
                                e.params.scrollbar.lockClass
                            );
                }
                function T() {
                    e.params.scrollbar.el && _("off");
                }
                t({
                    scrollbar: {
                        el: null,
                        dragSize: "auto",
                        hide: !1,
                        draggable: !1,
                        snapOnRelease: !0,
                        lockClass: "swiper-scrollbar-lock",
                        dragClass: "swiper-scrollbar-drag",
                    },
                }),
                    (e.scrollbar = {
                        el: null,
                        dragEl: null,
                        $el: null,
                        $dragEl: null,
                    }),
                    i("init", () => {
                        E(), g(), m();
                    }),
                    i("update resize observerUpdate lock unlock", () => {
                        g();
                    }),
                    i("setTranslate", () => {
                        m();
                    }),
                    i("setTransition", (t, i) => {
                        !(function (t) {
                            e.params.scrollbar.el &&
                                e.scrollbar.el &&
                                e.scrollbar.$dragEl.transition(t);
                        })(i);
                    }),
                    i("enable disable", () => {
                        const { $el: t } = e.scrollbar;
                        t &&
                            t[e.enabled ? "removeClass" : "addClass"](
                                e.params.scrollbar.lockClass
                            );
                    }),
                    i("destroy", () => {
                        T();
                    }),
                    Object.assign(e.scrollbar, {
                        updateSize: g,
                        setTranslate: m,
                        init: E,
                        destroy: T,
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({ parallax: { enabled: !1 } });
                const s = (t, i) => {
                        const { rtl: s } = e,
                            n = d(t),
                            r = s ? -1 : 1,
                            a = n.attr("data-swiper-parallax") || "0";
                        let o = n.attr("data-swiper-parallax-x"),
                            l = n.attr("data-swiper-parallax-y");
                        const c = n.attr("data-swiper-parallax-scale"),
                            h = n.attr("data-swiper-parallax-opacity");
                        if (
                            (o || l
                                ? ((o = o || "0"), (l = l || "0"))
                                : e.isHorizontal()
                                ? ((o = a), (l = "0"))
                                : ((l = a), (o = "0")),
                            (o =
                                o.indexOf("%") >= 0
                                    ? parseInt(o, 10) * i * r + "%"
                                    : o * i * r + "px"),
                            (l =
                                l.indexOf("%") >= 0
                                    ? parseInt(l, 10) * i + "%"
                                    : l * i + "px"),
                            null != h)
                        ) {
                            const e = h - (h - 1) * (1 - Math.abs(i));
                            n[0].style.opacity = e;
                        }
                        if (null == c)
                            n.transform(`translate3d(${o}, ${l}, 0px)`);
                        else {
                            const e = c - (c - 1) * (1 - Math.abs(i));
                            n.transform(
                                `translate3d(${o}, ${l}, 0px) scale(${e})`
                            );
                        }
                    },
                    n = () => {
                        const {
                            $el: t,
                            slides: i,
                            progress: n,
                            snapGrid: r,
                        } = e;
                        t
                            .children(
                                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                            )
                            .each((e) => {
                                s(e, n);
                            }),
                            i.each((t, i) => {
                                let a = t.progress;
                                e.params.slidesPerGroup > 1 &&
                                    "auto" !== e.params.slidesPerView &&
                                    (a +=
                                        Math.ceil(i / 2) - n * (r.length - 1)),
                                    (a = Math.min(Math.max(a, -1), 1)),
                                    d(t)
                                        .find(
                                            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                        )
                                        .each((e) => {
                                            s(e, a);
                                        });
                            });
                    };
                i("beforeInit", () => {
                    e.params.parallax.enabled &&
                        ((e.params.watchSlidesProgress = !0),
                        (e.originalParams.watchSlidesProgress = !0));
                }),
                    i("init", () => {
                        e.params.parallax.enabled && n();
                    }),
                    i("setTranslate", () => {
                        e.params.parallax.enabled && n();
                    }),
                    i("setTransition", (t, i) => {
                        e.params.parallax.enabled &&
                            ((t = e.params.speed) => {
                                const { $el: i } = e;
                                i.find(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                ).each((e) => {
                                    const i = d(e);
                                    let s =
                                        parseInt(
                                            i.attr(
                                                "data-swiper-parallax-duration"
                                            ),
                                            10
                                        ) || t;
                                    0 === t && (s = 0), i.transition(s);
                                });
                            })(i);
                    });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                const n = r();
                t({
                    zoom: {
                        enabled: !1,
                        maxRatio: 3,
                        minRatio: 1,
                        toggle: !0,
                        containerClass: "swiper-zoom-container",
                        zoomedSlideClass: "swiper-slide-zoomed",
                    },
                }),
                    (e.zoom = { enabled: !1 });
                let a,
                    o,
                    l,
                    c = 1,
                    h = !1;
                const u = {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3,
                    },
                    f = {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {},
                    },
                    m = {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0,
                    };
                let g = 1;
                function v(e) {
                    if (e.targetTouches.length < 2) return 1;
                    const t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        n = e.targetTouches[1].pageY;
                    return Math.sqrt((s - t) ** 2 + (n - i) ** 2);
                }
                function y(t) {
                    const i = e.support,
                        s = e.params.zoom;
                    if (((o = !1), (l = !1), !i.gestures)) {
                        if (
                            "touchstart" !== t.type ||
                            ("touchstart" === t.type &&
                                t.targetTouches.length < 2)
                        )
                            return;
                        (o = !0), (u.scaleStart = v(t));
                    }
                    (u.$slideEl && u.$slideEl.length) ||
                    ((u.$slideEl = d(t.target).closest(
                        `.${e.params.slideClass}`
                    )),
                    0 === u.$slideEl.length &&
                        (u.$slideEl = e.slides.eq(e.activeIndex)),
                    (u.$imageEl = u.$slideEl
                        .find(`.${s.containerClass}`)
                        .eq(0)
                        .find(
                            "img, svg, canvas, picture, .swiper-zoom-target"
                        )),
                    (u.$imageWrapEl = u.$imageEl.parent(
                        `.${s.containerClass}`
                    )),
                    (u.maxRatio =
                        u.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                    0 !== u.$imageWrapEl.length)
                        ? (u.$imageEl && u.$imageEl.transition(0), (h = !0))
                        : (u.$imageEl = void 0);
                }
                function b(t) {
                    const i = e.support,
                        s = e.params.zoom,
                        n = e.zoom;
                    if (!i.gestures) {
                        if (
                            "touchmove" !== t.type ||
                            ("touchmove" === t.type &&
                                t.targetTouches.length < 2)
                        )
                            return;
                        (l = !0), (u.scaleMove = v(t));
                    }
                    u.$imageEl && 0 !== u.$imageEl.length
                        ? (i.gestures
                              ? (n.scale = t.scale * c)
                              : (n.scale = (u.scaleMove / u.scaleStart) * c),
                          n.scale > u.maxRatio &&
                              (n.scale =
                                  u.maxRatio -
                                  1 +
                                  (n.scale - u.maxRatio + 1) ** 0.5),
                          n.scale < s.minRatio &&
                              (n.scale =
                                  s.minRatio +
                                  1 -
                                  (s.minRatio - n.scale + 1) ** 0.5),
                          u.$imageEl.transform(
                              `translate3d(0,0,0) scale(${n.scale})`
                          ))
                        : "gesturechange" === t.type && y(t);
                }
                function w(t) {
                    const i = e.device,
                        s = e.support,
                        n = e.params.zoom,
                        r = e.zoom;
                    if (!s.gestures) {
                        if (!o || !l) return;
                        if (
                            "touchend" !== t.type ||
                            ("touchend" === t.type &&
                                t.changedTouches.length < 2 &&
                                !i.android)
                        )
                            return;
                        (o = !1), (l = !1);
                    }
                    u.$imageEl &&
                        0 !== u.$imageEl.length &&
                        ((r.scale = Math.max(
                            Math.min(r.scale, u.maxRatio),
                            n.minRatio
                        )),
                        u.$imageEl
                            .transition(e.params.speed)
                            .transform(`translate3d(0,0,0) scale(${r.scale})`),
                        (c = r.scale),
                        (h = !1),
                        1 === r.scale && (u.$slideEl = void 0));
                }
                function x(t) {
                    const i = e.zoom;
                    if (!u.$imageEl || 0 === u.$imageEl.length) return;
                    if (((e.allowClick = !1), !f.isTouched || !u.$slideEl))
                        return;
                    f.isMoved ||
                        ((f.width = u.$imageEl[0].offsetWidth),
                        (f.height = u.$imageEl[0].offsetHeight),
                        (f.startX = p(u.$imageWrapEl[0], "x") || 0),
                        (f.startY = p(u.$imageWrapEl[0], "y") || 0),
                        (u.slideWidth = u.$slideEl[0].offsetWidth),
                        (u.slideHeight = u.$slideEl[0].offsetHeight),
                        u.$imageWrapEl.transition(0));
                    const s = f.width * i.scale,
                        n = f.height * i.scale;
                    if (!(s < u.slideWidth && n < u.slideHeight)) {
                        if (
                            ((f.minX = Math.min(u.slideWidth / 2 - s / 2, 0)),
                            (f.maxX = -f.minX),
                            (f.minY = Math.min(u.slideHeight / 2 - n / 2, 0)),
                            (f.maxY = -f.minY),
                            (f.touchesCurrent.x =
                                "touchmove" === t.type
                                    ? t.targetTouches[0].pageX
                                    : t.pageX),
                            (f.touchesCurrent.y =
                                "touchmove" === t.type
                                    ? t.targetTouches[0].pageY
                                    : t.pageY),
                            !f.isMoved && !h)
                        ) {
                            if (
                                e.isHorizontal() &&
                                ((Math.floor(f.minX) === Math.floor(f.startX) &&
                                    f.touchesCurrent.x < f.touchesStart.x) ||
                                    (Math.floor(f.maxX) ===
                                        Math.floor(f.startX) &&
                                        f.touchesCurrent.x > f.touchesStart.x))
                            )
                                return void (f.isTouched = !1);
                            if (
                                !e.isHorizontal() &&
                                ((Math.floor(f.minY) === Math.floor(f.startY) &&
                                    f.touchesCurrent.y < f.touchesStart.y) ||
                                    (Math.floor(f.maxY) ===
                                        Math.floor(f.startY) &&
                                        f.touchesCurrent.y > f.touchesStart.y))
                            )
                                return void (f.isTouched = !1);
                        }
                        t.cancelable && t.preventDefault(),
                            t.stopPropagation(),
                            (f.isMoved = !0),
                            (f.currentX =
                                f.touchesCurrent.x -
                                f.touchesStart.x +
                                f.startX),
                            (f.currentY =
                                f.touchesCurrent.y -
                                f.touchesStart.y +
                                f.startY),
                            f.currentX < f.minX &&
                                (f.currentX =
                                    f.minX +
                                    1 -
                                    (f.minX - f.currentX + 1) ** 0.8),
                            f.currentX > f.maxX &&
                                (f.currentX =
                                    f.maxX -
                                    1 +
                                    (f.currentX - f.maxX + 1) ** 0.8),
                            f.currentY < f.minY &&
                                (f.currentY =
                                    f.minY +
                                    1 -
                                    (f.minY - f.currentY + 1) ** 0.8),
                            f.currentY > f.maxY &&
                                (f.currentY =
                                    f.maxY -
                                    1 +
                                    (f.currentY - f.maxY + 1) ** 0.8),
                            m.prevPositionX ||
                                (m.prevPositionX = f.touchesCurrent.x),
                            m.prevPositionY ||
                                (m.prevPositionY = f.touchesCurrent.y),
                            m.prevTime || (m.prevTime = Date.now()),
                            (m.x =
                                (f.touchesCurrent.x - m.prevPositionX) /
                                (Date.now() - m.prevTime) /
                                2),
                            (m.y =
                                (f.touchesCurrent.y - m.prevPositionY) /
                                (Date.now() - m.prevTime) /
                                2),
                            Math.abs(f.touchesCurrent.x - m.prevPositionX) <
                                2 && (m.x = 0),
                            Math.abs(f.touchesCurrent.y - m.prevPositionY) <
                                2 && (m.y = 0),
                            (m.prevPositionX = f.touchesCurrent.x),
                            (m.prevPositionY = f.touchesCurrent.y),
                            (m.prevTime = Date.now()),
                            u.$imageWrapEl.transform(
                                `translate3d(${f.currentX}px, ${f.currentY}px,0)`
                            );
                    }
                }
                function _() {
                    const t = e.zoom;
                    u.$slideEl &&
                        e.previousIndex !== e.activeIndex &&
                        (u.$imageEl &&
                            u.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        u.$imageWrapEl &&
                            u.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (t.scale = 1),
                        (c = 1),
                        (u.$slideEl = void 0),
                        (u.$imageEl = void 0),
                        (u.$imageWrapEl = void 0));
                }
                function E(t) {
                    const i = e.zoom,
                        s = e.params.zoom;
                    if (
                        (u.$slideEl ||
                            (t &&
                                t.target &&
                                (u.$slideEl = d(t.target).closest(
                                    `.${e.params.slideClass}`
                                )),
                            u.$slideEl ||
                                (e.params.virtual &&
                                e.params.virtual.enabled &&
                                e.virtual
                                    ? (u.$slideEl = e.$wrapperEl.children(
                                          `.${e.params.slideActiveClass}`
                                      ))
                                    : (u.$slideEl = e.slides.eq(
                                          e.activeIndex
                                      ))),
                            (u.$imageEl = u.$slideEl
                                .find(`.${s.containerClass}`)
                                .eq(0)
                                .find(
                                    "img, svg, canvas, picture, .swiper-zoom-target"
                                )),
                            (u.$imageWrapEl = u.$imageEl.parent(
                                `.${s.containerClass}`
                            ))),
                        !u.$imageEl ||
                            0 === u.$imageEl.length ||
                            !u.$imageWrapEl ||
                            0 === u.$imageWrapEl.length)
                    )
                        return;
                    let r, a, o, l, h, p, m, g, v, y, b, w, x, _, E, T, S, C;
                    e.params.cssMode &&
                        ((e.wrapperEl.style.overflow = "hidden"),
                        (e.wrapperEl.style.touchAction = "none")),
                        u.$slideEl.addClass(`${s.zoomedSlideClass}`),
                        void 0 === f.touchesStart.x && t
                            ? ((r =
                                  "touchend" === t.type
                                      ? t.changedTouches[0].pageX
                                      : t.pageX),
                              (a =
                                  "touchend" === t.type
                                      ? t.changedTouches[0].pageY
                                      : t.pageY))
                            : ((r = f.touchesStart.x), (a = f.touchesStart.y)),
                        (i.scale =
                            u.$imageWrapEl.attr("data-swiper-zoom") ||
                            s.maxRatio),
                        (c =
                            u.$imageWrapEl.attr("data-swiper-zoom") ||
                            s.maxRatio),
                        t
                            ? ((S = u.$slideEl[0].offsetWidth),
                              (C = u.$slideEl[0].offsetHeight),
                              (o = u.$slideEl.offset().left + n.scrollX),
                              (l = u.$slideEl.offset().top + n.scrollY),
                              (h = o + S / 2 - r),
                              (p = l + C / 2 - a),
                              (v = u.$imageEl[0].offsetWidth),
                              (y = u.$imageEl[0].offsetHeight),
                              (b = v * i.scale),
                              (w = y * i.scale),
                              (x = Math.min(S / 2 - b / 2, 0)),
                              (_ = Math.min(C / 2 - w / 2, 0)),
                              (E = -x),
                              (T = -_),
                              (m = h * i.scale),
                              (g = p * i.scale),
                              m < x && (m = x),
                              m > E && (m = E),
                              g < _ && (g = _),
                              g > T && (g = T))
                            : ((m = 0), (g = 0)),
                        u.$imageWrapEl
                            .transition(300)
                            .transform(`translate3d(${m}px, ${g}px,0)`),
                        u.$imageEl
                            .transition(300)
                            .transform(`translate3d(0,0,0) scale(${i.scale})`);
                }
                function T() {
                    const t = e.zoom,
                        i = e.params.zoom;
                    u.$slideEl ||
                        (e.params.virtual &&
                        e.params.virtual.enabled &&
                        e.virtual
                            ? (u.$slideEl = e.$wrapperEl.children(
                                  `.${e.params.slideActiveClass}`
                              ))
                            : (u.$slideEl = e.slides.eq(e.activeIndex)),
                        (u.$imageEl = u.$slideEl
                            .find(`.${i.containerClass}`)
                            .eq(0)
                            .find(
                                "img, svg, canvas, picture, .swiper-zoom-target"
                            )),
                        (u.$imageWrapEl = u.$imageEl.parent(
                            `.${i.containerClass}`
                        ))),
                        u.$imageEl &&
                            0 !== u.$imageEl.length &&
                            u.$imageWrapEl &&
                            0 !== u.$imageWrapEl.length &&
                            (e.params.cssMode &&
                                ((e.wrapperEl.style.overflow = ""),
                                (e.wrapperEl.style.touchAction = "")),
                            (t.scale = 1),
                            (c = 1),
                            u.$imageWrapEl
                                .transition(300)
                                .transform("translate3d(0,0,0)"),
                            u.$imageEl
                                .transition(300)
                                .transform("translate3d(0,0,0) scale(1)"),
                            u.$slideEl.removeClass(`${i.zoomedSlideClass}`),
                            (u.$slideEl = void 0));
                }
                function S(t) {
                    const i = e.zoom;
                    i.scale && 1 !== i.scale ? T() : E(t);
                }
                function C() {
                    const t = e.support;
                    return {
                        passiveListener: !(
                            "touchstart" !== e.touchEvents.start ||
                            !t.passiveListener ||
                            !e.params.passiveListeners
                        ) && { passive: !0, capture: !1 },
                        activeListenerWithCapture: !t.passiveListener || {
                            passive: !1,
                            capture: !0,
                        },
                    };
                }
                function M() {
                    return `.${e.params.slideClass}`;
                }
                function k(t) {
                    const { passiveListener: i } = C(),
                        s = M();
                    e.$wrapperEl[t]("gesturestart", s, y, i),
                        e.$wrapperEl[t]("gesturechange", s, b, i),
                        e.$wrapperEl[t]("gestureend", s, w, i);
                }
                function O() {
                    a || ((a = !0), k("on"));
                }
                function L() {
                    a && ((a = !1), k("off"));
                }
                function $() {
                    const t = e.zoom;
                    if (t.enabled) return;
                    t.enabled = !0;
                    const i = e.support,
                        { passiveListener: s, activeListenerWithCapture: n } =
                            C(),
                        r = M();
                    i.gestures
                        ? (e.$wrapperEl.on(e.touchEvents.start, O, s),
                          e.$wrapperEl.on(e.touchEvents.end, L, s))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.on(e.touchEvents.start, r, y, s),
                          e.$wrapperEl.on(e.touchEvents.move, r, b, n),
                          e.$wrapperEl.on(e.touchEvents.end, r, w, s),
                          e.touchEvents.cancel &&
                              e.$wrapperEl.on(e.touchEvents.cancel, r, w, s)),
                        e.$wrapperEl.on(
                            e.touchEvents.move,
                            `.${e.params.zoom.containerClass}`,
                            x,
                            n
                        );
                }
                function I() {
                    const t = e.zoom;
                    if (!t.enabled) return;
                    const i = e.support;
                    t.enabled = !1;
                    const { passiveListener: s, activeListenerWithCapture: n } =
                            C(),
                        r = M();
                    i.gestures
                        ? (e.$wrapperEl.off(e.touchEvents.start, O, s),
                          e.$wrapperEl.off(e.touchEvents.end, L, s))
                        : "touchstart" === e.touchEvents.start &&
                          (e.$wrapperEl.off(e.touchEvents.start, r, y, s),
                          e.$wrapperEl.off(e.touchEvents.move, r, b, n),
                          e.$wrapperEl.off(e.touchEvents.end, r, w, s),
                          e.touchEvents.cancel &&
                              e.$wrapperEl.off(e.touchEvents.cancel, r, w, s)),
                        e.$wrapperEl.off(
                            e.touchEvents.move,
                            `.${e.params.zoom.containerClass}`,
                            x,
                            n
                        );
                }
                Object.defineProperty(e.zoom, "scale", {
                    get: () => g,
                    set(e) {
                        if (g !== e) {
                            const t = u.$imageEl ? u.$imageEl[0] : void 0,
                                i = u.$slideEl ? u.$slideEl[0] : void 0;
                            s("zoomChange", e, t, i);
                        }
                        g = e;
                    },
                }),
                    i("init", () => {
                        e.params.zoom.enabled && $();
                    }),
                    i("destroy", () => {
                        I();
                    }),
                    i("touchStart", (t, i) => {
                        e.zoom.enabled &&
                            (function (t) {
                                const i = e.device;
                                u.$imageEl &&
                                    0 !== u.$imageEl.length &&
                                    (f.isTouched ||
                                        (i.android &&
                                            t.cancelable &&
                                            t.preventDefault(),
                                        (f.isTouched = !0),
                                        (f.touchesStart.x =
                                            "touchstart" === t.type
                                                ? t.targetTouches[0].pageX
                                                : t.pageX),
                                        (f.touchesStart.y =
                                            "touchstart" === t.type
                                                ? t.targetTouches[0].pageY
                                                : t.pageY)));
                            })(i);
                    }),
                    i("touchEnd", (t, i) => {
                        e.zoom.enabled &&
                            (function () {
                                const t = e.zoom;
                                if (!u.$imageEl || 0 === u.$imageEl.length)
                                    return;
                                if (!f.isTouched || !f.isMoved)
                                    return (
                                        (f.isTouched = !1),
                                        void (f.isMoved = !1)
                                    );
                                (f.isTouched = !1), (f.isMoved = !1);
                                let i = 300,
                                    s = 300;
                                const n = m.x * i,
                                    r = f.currentX + n,
                                    a = m.y * s,
                                    o = f.currentY + a;
                                0 !== m.x &&
                                    (i = Math.abs((r - f.currentX) / m.x)),
                                    0 !== m.y &&
                                        (s = Math.abs((o - f.currentY) / m.y));
                                const l = Math.max(i, s);
                                (f.currentX = r), (f.currentY = o);
                                const d = f.width * t.scale,
                                    c = f.height * t.scale;
                                (f.minX = Math.min(
                                    u.slideWidth / 2 - d / 2,
                                    0
                                )),
                                    (f.maxX = -f.minX),
                                    (f.minY = Math.min(
                                        u.slideHeight / 2 - c / 2,
                                        0
                                    )),
                                    (f.maxY = -f.minY),
                                    (f.currentX = Math.max(
                                        Math.min(f.currentX, f.maxX),
                                        f.minX
                                    )),
                                    (f.currentY = Math.max(
                                        Math.min(f.currentY, f.maxY),
                                        f.minY
                                    )),
                                    u.$imageWrapEl
                                        .transition(l)
                                        .transform(
                                            `translate3d(${f.currentX}px, ${f.currentY}px,0)`
                                        );
                            })();
                    }),
                    i("doubleTap", (t, i) => {
                        !e.animating &&
                            e.params.zoom.enabled &&
                            e.zoom.enabled &&
                            e.params.zoom.toggle &&
                            S(i);
                    }),
                    i("transitionEnd", () => {
                        e.zoom.enabled && e.params.zoom.enabled && _();
                    }),
                    i("slideChange", () => {
                        e.zoom.enabled &&
                            e.params.zoom.enabled &&
                            e.params.cssMode &&
                            _();
                    }),
                    Object.assign(e.zoom, {
                        enable: $,
                        disable: I,
                        in: E,
                        out: T,
                        toggle: S,
                    });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: s }) {
                t({
                    lazy: {
                        checkInView: !1,
                        enabled: !1,
                        loadPrevNext: !1,
                        loadPrevNextAmount: 1,
                        loadOnTransitionStart: !1,
                        scrollingElement: "",
                        elementClass: "swiper-lazy",
                        loadingClass: "swiper-lazy-loading",
                        loadedClass: "swiper-lazy-loaded",
                        preloaderClass: "swiper-lazy-preloader",
                    },
                }),
                    (e.lazy = {});
                let n = !1,
                    a = !1;
                function o(t, i = !0) {
                    const n = e.params.lazy;
                    if (void 0 === t) return;
                    if (0 === e.slides.length) return;
                    const r =
                            e.virtual && e.params.virtual.enabled
                                ? e.$wrapperEl.children(
                                      `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                                  )
                                : e.slides.eq(t),
                        a = r.find(
                            `.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`
                        );
                    !r.hasClass(n.elementClass) ||
                        r.hasClass(n.loadedClass) ||
                        r.hasClass(n.loadingClass) ||
                        a.push(r[0]),
                        0 !== a.length &&
                            a.each((t) => {
                                const a = d(t);
                                a.addClass(n.loadingClass);
                                const l = a.attr("data-background"),
                                    c = a.attr("data-src"),
                                    h = a.attr("data-srcset"),
                                    u = a.attr("data-sizes"),
                                    p = a.parent("picture");
                                e.loadImage(a[0], c || l, h, u, !1, () => {
                                    if (
                                        null != e &&
                                        e &&
                                        (!e || e.params) &&
                                        !e.destroyed
                                    ) {
                                        if (
                                            (l
                                                ? (a.css(
                                                      "background-image",
                                                      `url("${l}")`
                                                  ),
                                                  a.removeAttr(
                                                      "data-background"
                                                  ))
                                                : (h &&
                                                      (a.attr("srcset", h),
                                                      a.removeAttr(
                                                          "data-srcset"
                                                      )),
                                                  u &&
                                                      (a.attr("sizes", u),
                                                      a.removeAttr(
                                                          "data-sizes"
                                                      )),
                                                  p.length &&
                                                      p
                                                          .children("source")
                                                          .each((e) => {
                                                              const t = d(e);
                                                              t.attr(
                                                                  "data-srcset"
                                                              ) &&
                                                                  (t.attr(
                                                                      "srcset",
                                                                      t.attr(
                                                                          "data-srcset"
                                                                      )
                                                                  ),
                                                                  t.removeAttr(
                                                                      "data-srcset"
                                                                  ));
                                                          }),
                                                  c &&
                                                      (a.attr("src", c),
                                                      a.removeAttr(
                                                          "data-src"
                                                      ))),
                                            a
                                                .addClass(n.loadedClass)
                                                .removeClass(n.loadingClass),
                                            r
                                                .find(`.${n.preloaderClass}`)
                                                .remove(),
                                            e.params.loop && i)
                                        ) {
                                            const t = r.attr(
                                                "data-swiper-slide-index"
                                            );
                                            r.hasClass(
                                                e.params.slideDuplicateClass
                                            )
                                                ? o(
                                                      e.$wrapperEl
                                                          .children(
                                                              `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                                                          )
                                                          .index(),
                                                      !1
                                                  )
                                                : o(
                                                      e.$wrapperEl
                                                          .children(
                                                              `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                                                          )
                                                          .index(),
                                                      !1
                                                  );
                                        }
                                        s("lazyImageReady", r[0], a[0]),
                                            e.params.autoHeight &&
                                                e.updateAutoHeight();
                                    }
                                }),
                                    s("lazyImageLoad", r[0], a[0]);
                            });
                }
                function l() {
                    const {
                            $wrapperEl: t,
                            params: i,
                            slides: s,
                            activeIndex: n,
                        } = e,
                        r = e.virtual && i.virtual.enabled,
                        l = i.lazy;
                    let c = i.slidesPerView;
                    function h(e) {
                        if (r) {
                            if (
                                t.children(
                                    `.${i.slideClass}[data-swiper-slide-index="${e}"]`
                                ).length
                            )
                                return !0;
                        } else if (s[e]) return !0;
                        return !1;
                    }
                    function u(e) {
                        return r
                            ? d(e).attr("data-swiper-slide-index")
                            : d(e).index();
                    }
                    if (
                        ("auto" === c && (c = 0),
                        a || (a = !0),
                        e.params.watchSlidesProgress)
                    )
                        t.children(`.${i.slideVisibleClass}`).each((e) => {
                            o(
                                r
                                    ? d(e).attr("data-swiper-slide-index")
                                    : d(e).index()
                            );
                        });
                    else if (c > 1)
                        for (let e = n; e < n + c; e += 1) h(e) && o(e);
                    else o(n);
                    if (l.loadPrevNext)
                        if (
                            c > 1 ||
                            (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)
                        ) {
                            const e = l.loadPrevNextAmount,
                                t = c,
                                i = Math.min(n + t + Math.max(e, t), s.length),
                                r = Math.max(n - Math.max(t, e), 0);
                            for (let e = n + c; e < i; e += 1) h(e) && o(e);
                            for (let e = r; e < n; e += 1) h(e) && o(e);
                        } else {
                            const e = t.children(`.${i.slideNextClass}`);
                            e.length > 0 && o(u(e));
                            const s = t.children(`.${i.slidePrevClass}`);
                            s.length > 0 && o(u(s));
                        }
                }
                function c() {
                    const t = r();
                    if (!e || e.destroyed) return;
                    const i = e.params.lazy.scrollingElement
                            ? d(e.params.lazy.scrollingElement)
                            : d(t),
                        s = i[0] === t,
                        a = s ? t.innerWidth : i[0].offsetWidth,
                        o = s ? t.innerHeight : i[0].offsetHeight,
                        h = e.$el.offset(),
                        { rtlTranslate: u } = e;
                    let p = !1;
                    u && (h.left -= e.$el[0].scrollLeft);
                    const f = [
                        [h.left, h.top],
                        [h.left + e.width, h.top],
                        [h.left, h.top + e.height],
                        [h.left + e.width, h.top + e.height],
                    ];
                    for (let e = 0; e < f.length; e += 1) {
                        const t = f[e];
                        if (t[0] >= 0 && t[0] <= a && t[1] >= 0 && t[1] <= o) {
                            if (0 === t[0] && 0 === t[1]) continue;
                            p = !0;
                        }
                    }
                    const m = !(
                        "touchstart" !== e.touchEvents.start ||
                        !e.support.passiveListener ||
                        !e.params.passiveListeners
                    ) && { passive: !0, capture: !1 };
                    p
                        ? (l(), i.off("scroll", c, m))
                        : n || ((n = !0), i.on("scroll", c, m));
                }
                i("beforeInit", () => {
                    e.params.lazy.enabled &&
                        e.params.preloadImages &&
                        (e.params.preloadImages = !1);
                }),
                    i("init", () => {
                        e.params.lazy.enabled &&
                            (e.params.lazy.checkInView ? c() : l());
                    }),
                    i("scroll", () => {
                        e.params.freeMode &&
                            e.params.freeMode.enabled &&
                            !e.params.freeMode.sticky &&
                            l();
                    }),
                    i(
                        "scrollbarDragMove resize _freeModeNoMomentumRelease",
                        () => {
                            e.params.lazy.enabled &&
                                (e.params.lazy.checkInView ? c() : l());
                        }
                    ),
                    i("transitionStart", () => {
                        e.params.lazy.enabled &&
                            (e.params.lazy.loadOnTransitionStart ||
                                (!e.params.lazy.loadOnTransitionStart && !a)) &&
                            (e.params.lazy.checkInView ? c() : l());
                    }),
                    i("transitionEnd", () => {
                        e.params.lazy.enabled &&
                            !e.params.lazy.loadOnTransitionStart &&
                            (e.params.lazy.checkInView ? c() : l());
                    }),
                    i("slideChange", () => {
                        const {
                            lazy: t,
                            cssMode: i,
                            watchSlidesProgress: s,
                            touchReleaseOnEdges: n,
                            resistanceRatio: r,
                        } = e.params;
                        t.enabled && (i || (s && (n || 0 === r))) && l();
                    }),
                    Object.assign(e.lazy, { load: l, loadInSlide: o });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                function s(e, t) {
                    const i = (function () {
                        let e, t, i;
                        return (s, n) => {
                            for (t = -1, e = s.length; e - t > 1; )
                                (i = (e + t) >> 1),
                                    s[i] <= n ? (t = i) : (e = i);
                            return e;
                        };
                    })();
                    let s, n;
                    return (
                        (this.x = e),
                        (this.y = t),
                        (this.lastIndex = e.length - 1),
                        (this.interpolate = function (e) {
                            return e
                                ? ((n = i(this.x, e)),
                                  (s = n - 1),
                                  ((e - this.x[s]) * (this.y[n] - this.y[s])) /
                                      (this.x[n] - this.x[s]) +
                                      this.y[s])
                                : 0;
                        }),
                        this
                    );
                }
                function n() {
                    e.controller.control &&
                        e.controller.spline &&
                        ((e.controller.spline = void 0),
                        delete e.controller.spline);
                }
                t({
                    controller: { control: void 0, inverse: !1, by: "slide" },
                }),
                    (e.controller = { control: void 0 }),
                    i("beforeInit", () => {
                        e.controller.control = e.params.controller.control;
                    }),
                    i("update", () => {
                        n();
                    }),
                    i("resize", () => {
                        n();
                    }),
                    i("observerUpdate", () => {
                        n();
                    }),
                    i("setTranslate", (t, i, s) => {
                        e.controller.control && e.controller.setTranslate(i, s);
                    }),
                    i("setTransition", (t, i, s) => {
                        e.controller.control &&
                            e.controller.setTransition(i, s);
                    }),
                    Object.assign(e.controller, {
                        setTranslate: function (t, i) {
                            const n = e.controller.control;
                            let r, a;
                            const o = e.constructor;
                            function l(t) {
                                const i = e.rtlTranslate
                                    ? -e.translate
                                    : e.translate;
                                "slide" === e.params.controller.by &&
                                    ((function (t) {
                                        e.controller.spline ||
                                            (e.controller.spline = e.params.loop
                                                ? new s(
                                                      e.slidesGrid,
                                                      t.slidesGrid
                                                  )
                                                : new s(
                                                      e.snapGrid,
                                                      t.snapGrid
                                                  ));
                                    })(t),
                                    (a = -e.controller.spline.interpolate(-i))),
                                    (a &&
                                        "container" !==
                                            e.params.controller.by) ||
                                        ((r =
                                            (t.maxTranslate() -
                                                t.minTranslate()) /
                                            (e.maxTranslate() -
                                                e.minTranslate())),
                                        (a =
                                            (i - e.minTranslate()) * r +
                                            t.minTranslate())),
                                    e.params.controller.inverse &&
                                        (a = t.maxTranslate() - a),
                                    t.updateProgress(a),
                                    t.setTranslate(a, e),
                                    t.updateActiveIndex(),
                                    t.updateSlidesClasses();
                            }
                            if (Array.isArray(n))
                                for (let e = 0; e < n.length; e += 1)
                                    n[e] !== i && n[e] instanceof o && l(n[e]);
                            else n instanceof o && i !== n && l(n);
                        },
                        setTransition: function (t, i) {
                            const s = e.constructor,
                                n = e.controller.control;
                            let r;
                            function a(i) {
                                i.setTransition(t, e),
                                    0 !== t &&
                                        (i.transitionStart(),
                                        i.params.autoHeight &&
                                            h(() => {
                                                i.updateAutoHeight();
                                            }),
                                        i.$wrapperEl.transitionEnd(() => {
                                            n &&
                                                (i.params.loop &&
                                                    "slide" ===
                                                        e.params.controller
                                                            .by &&
                                                    i.loopFix(),
                                                i.transitionEnd());
                                        }));
                            }
                            if (Array.isArray(n))
                                for (r = 0; r < n.length; r += 1)
                                    n[r] !== i && n[r] instanceof s && a(n[r]);
                            else n instanceof s && i !== n && a(n);
                        },
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    a11y: {
                        enabled: !0,
                        notificationClass: "swiper-notification",
                        prevSlideMessage: "Previous slide",
                        nextSlideMessage: "Next slide",
                        firstSlideMessage: "This is the first slide",
                        lastSlideMessage: "This is the last slide",
                        paginationBulletMessage: "Go to slide {{index}}",
                        slideLabelMessage: "{{index}} / {{slidesLength}}",
                        containerMessage: null,
                        containerRoleDescriptionMessage: null,
                        itemRoleDescriptionMessage: null,
                        slideRole: "group",
                    },
                });
                let s = null;
                function n(e) {
                    const t = s;
                    0 !== t.length && (t.html(""), t.html(e));
                }
                function r(e) {
                    e.attr("tabIndex", "0");
                }
                function a(e) {
                    e.attr("tabIndex", "-1");
                }
                function o(e, t) {
                    e.attr("role", t);
                }
                function l(e, t) {
                    e.attr("aria-roledescription", t);
                }
                function c(e, t) {
                    e.attr("aria-label", t);
                }
                function h(e) {
                    e.attr("aria-disabled", !0);
                }
                function u(e) {
                    e.attr("aria-disabled", !1);
                }
                function p(t) {
                    if (13 !== t.keyCode && 32 !== t.keyCode) return;
                    const i = e.params.a11y,
                        s = d(t.target);
                    e.navigation &&
                        e.navigation.$nextEl &&
                        s.is(e.navigation.$nextEl) &&
                        ((e.isEnd && !e.params.loop) || e.slideNext(),
                        e.isEnd
                            ? n(i.lastSlideMessage)
                            : n(i.nextSlideMessage)),
                        e.navigation &&
                            e.navigation.$prevEl &&
                            s.is(e.navigation.$prevEl) &&
                            ((e.isBeginning && !e.params.loop) || e.slidePrev(),
                            e.isBeginning
                                ? n(i.firstSlideMessage)
                                : n(i.prevSlideMessage)),
                        e.pagination &&
                            s.is(q(e.params.pagination.bulletClass)) &&
                            s[0].click();
                }
                function f() {
                    if (e.params.loop || !e.navigation) return;
                    const { $nextEl: t, $prevEl: i } = e.navigation;
                    i &&
                        i.length > 0 &&
                        (e.isBeginning ? (h(i), a(i)) : (u(i), r(i))),
                        t &&
                            t.length > 0 &&
                            (e.isEnd ? (h(t), a(t)) : (u(t), r(t)));
                }
                function m() {
                    return (
                        e.pagination &&
                        e.params.pagination.clickable &&
                        e.pagination.bullets &&
                        e.pagination.bullets.length
                    );
                }
                const g = (e, t, i) => {
                    r(e),
                        "BUTTON" !== e[0].tagName &&
                            (o(e, "button"), e.on("keydown", p)),
                        c(e, i),
                        (function (e, t) {
                            e.attr("aria-controls", t);
                        })(e, t);
                };
                i("beforeInit", () => {
                    s = d(
                        `<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
                    );
                }),
                    i("afterInit", () => {
                        e.params.a11y.enabled &&
                            ((function () {
                                const t = e.params.a11y;
                                e.$el.append(s);
                                const i = e.$el;
                                t.containerRoleDescriptionMessage &&
                                    l(i, t.containerRoleDescriptionMessage),
                                    t.containerMessage &&
                                        c(i, t.containerMessage);
                                const n = e.$wrapperEl,
                                    r =
                                        n.attr("id") ||
                                        `swiper-wrapper-${(function (e = 16) {
                                            return "x"
                                                .repeat(e)
                                                .replace(/x/g, () =>
                                                    Math.round(
                                                        16 * Math.random()
                                                    ).toString(16)
                                                );
                                        })(16)}`,
                                    a =
                                        e.params.autoplay &&
                                        e.params.autoplay.enabled
                                            ? "off"
                                            : "polite";
                                var h;
                                (h = r),
                                    n.attr("id", h),
                                    (function (e, t) {
                                        e.attr("aria-live", t);
                                    })(n, a),
                                    t.itemRoleDescriptionMessage &&
                                        l(
                                            d(e.slides),
                                            t.itemRoleDescriptionMessage
                                        ),
                                    o(d(e.slides), t.slideRole);
                                const u = e.params.loop
                                    ? e.slides.filter(
                                          (t) =>
                                              !t.classList.contains(
                                                  e.params.slideDuplicateClass
                                              )
                                      ).length
                                    : e.slides.length;
                                let f, v;
                                e.slides.each((i, s) => {
                                    const n = d(i),
                                        r = e.params.loop
                                            ? parseInt(
                                                  n.attr(
                                                      "data-swiper-slide-index"
                                                  ),
                                                  10
                                              )
                                            : s;
                                    c(
                                        n,
                                        t.slideLabelMessage
                                            .replace(/\{\{index\}\}/, r + 1)
                                            .replace(/\{\{slidesLength\}\}/, u)
                                    );
                                }),
                                    e.navigation &&
                                        e.navigation.$nextEl &&
                                        (f = e.navigation.$nextEl),
                                    e.navigation &&
                                        e.navigation.$prevEl &&
                                        (v = e.navigation.$prevEl),
                                    f &&
                                        f.length &&
                                        g(f, r, t.nextSlideMessage),
                                    v &&
                                        v.length &&
                                        g(v, r, t.prevSlideMessage),
                                    m() &&
                                        e.pagination.$el.on(
                                            "keydown",
                                            q(e.params.pagination.bulletClass),
                                            p
                                        );
                            })(),
                            f());
                    }),
                    i("toEdge", () => {
                        e.params.a11y.enabled && f();
                    }),
                    i("fromEdge", () => {
                        e.params.a11y.enabled && f();
                    }),
                    i("paginationUpdate", () => {
                        e.params.a11y.enabled &&
                            (function () {
                                const t = e.params.a11y;
                                m() &&
                                    e.pagination.bullets.each((i) => {
                                        const s = d(i);
                                        r(s),
                                            e.params.pagination.renderBullet ||
                                                (o(s, "button"),
                                                c(
                                                    s,
                                                    t.paginationBulletMessage.replace(
                                                        /\{\{index\}\}/,
                                                        s.index() + 1
                                                    )
                                                ));
                                    });
                            })();
                    }),
                    i("destroy", () => {
                        e.params.a11y.enabled &&
                            (function () {
                                let t, i;
                                s && s.length > 0 && s.remove(),
                                    e.navigation &&
                                        e.navigation.$nextEl &&
                                        (t = e.navigation.$nextEl),
                                    e.navigation &&
                                        e.navigation.$prevEl &&
                                        (i = e.navigation.$prevEl),
                                    t && t.off("keydown", p),
                                    i && i.off("keydown", p),
                                    m() &&
                                        e.pagination.$el.off(
                                            "keydown",
                                            q(e.params.pagination.bulletClass),
                                            p
                                        );
                            })();
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    history: {
                        enabled: !1,
                        root: "",
                        replaceState: !1,
                        key: "slides",
                    },
                });
                let s = !1,
                    n = {};
                const a = (e) =>
                        e
                            .toString()
                            .replace(/\s+/g, "-")
                            .replace(/[^\w-]+/g, "")
                            .replace(/--+/g, "-")
                            .replace(/^-+/, "")
                            .replace(/-+$/, ""),
                    o = (e) => {
                        const t = r();
                        let i;
                        i = e ? new URL(e) : t.location;
                        const s = i.pathname
                                .slice(1)
                                .split("/")
                                .filter((e) => "" !== e),
                            n = s.length;
                        return { key: s[n - 2], value: s[n - 1] };
                    },
                    l = (t, i) => {
                        const n = r();
                        if (!s || !e.params.history.enabled) return;
                        let o;
                        o = e.params.url ? new URL(e.params.url) : n.location;
                        const l = e.slides.eq(i);
                        let d = a(l.attr("data-history"));
                        if (e.params.history.root.length > 0) {
                            let i = e.params.history.root;
                            "/" === i[i.length - 1] &&
                                (i = i.slice(0, i.length - 1)),
                                (d = `${i}/${t}/${d}`);
                        } else o.pathname.includes(t) || (d = `${t}/${d}`);
                        const c = n.history.state;
                        (c && c.value === d) ||
                            (e.params.history.replaceState
                                ? n.history.replaceState({ value: d }, null, d)
                                : n.history.pushState({ value: d }, null, d));
                    },
                    d = (t, i, s) => {
                        if (i)
                            for (
                                let n = 0, r = e.slides.length;
                                n < r;
                                n += 1
                            ) {
                                const r = e.slides.eq(n);
                                if (
                                    a(r.attr("data-history")) === i &&
                                    !r.hasClass(e.params.slideDuplicateClass)
                                ) {
                                    const i = r.index();
                                    e.slideTo(i, t, s);
                                }
                            }
                        else e.slideTo(0, t, s);
                    },
                    c = () => {
                        (n = o(e.params.url)),
                            d(e.params.speed, e.paths.value, !1);
                    };
                i("init", () => {
                    e.params.history.enabled &&
                        (() => {
                            const t = r();
                            if (e.params.history) {
                                if (!t.history || !t.history.pushState)
                                    return (
                                        (e.params.history.enabled = !1),
                                        void (e.params.hashNavigation.enabled =
                                            !0)
                                    );
                                (s = !0),
                                    (n = o(e.params.url)),
                                    (n.key || n.value) &&
                                        (d(
                                            0,
                                            n.value,
                                            e.params.runCallbacksOnInit
                                        ),
                                        e.params.history.replaceState ||
                                            t.addEventListener("popstate", c));
                            }
                        })();
                }),
                    i("destroy", () => {
                        e.params.history.enabled &&
                            (() => {
                                const t = r();
                                e.params.history.replaceState ||
                                    t.removeEventListener("popstate", c);
                            })();
                    }),
                    i("transitionEnd _freeModeNoMomentumRelease", () => {
                        s && l(e.params.history.key, e.activeIndex);
                    }),
                    i("slideChange", () => {
                        s &&
                            e.params.cssMode &&
                            l(e.params.history.key, e.activeIndex);
                    });
            },
            function ({ swiper: e, extendParams: t, emit: i, on: n }) {
                let a = !1;
                const o = s(),
                    l = r();
                t({
                    hashNavigation: {
                        enabled: !1,
                        replaceState: !1,
                        watchState: !1,
                    },
                });
                const c = () => {
                        i("hashChange");
                        const t = o.location.hash.replace("#", "");
                        if (
                            t !== e.slides.eq(e.activeIndex).attr("data-hash")
                        ) {
                            const i = e.$wrapperEl
                                .children(
                                    `.${e.params.slideClass}[data-hash="${t}"]`
                                )
                                .index();
                            if (void 0 === i) return;
                            e.slideTo(i);
                        }
                    },
                    h = () => {
                        if (a && e.params.hashNavigation.enabled)
                            if (
                                e.params.hashNavigation.replaceState &&
                                l.history &&
                                l.history.replaceState
                            )
                                l.history.replaceState(
                                    null,
                                    null,
                                    `#${e.slides
                                        .eq(e.activeIndex)
                                        .attr("data-hash")}` || ""
                                ),
                                    i("hashSet");
                            else {
                                const t = e.slides.eq(e.activeIndex),
                                    s =
                                        t.attr("data-hash") ||
                                        t.attr("data-history");
                                (o.location.hash = s || ""), i("hashSet");
                            }
                    };
                n("init", () => {
                    e.params.hashNavigation.enabled &&
                        (() => {
                            if (
                                !e.params.hashNavigation.enabled ||
                                (e.params.history && e.params.history.enabled)
                            )
                                return;
                            a = !0;
                            const t = o.location.hash.replace("#", "");
                            if (t) {
                                const i = 0;
                                for (
                                    let s = 0, n = e.slides.length;
                                    s < n;
                                    s += 1
                                ) {
                                    const n = e.slides.eq(s);
                                    if (
                                        (n.attr("data-hash") ||
                                            n.attr("data-history")) === t &&
                                        !n.hasClass(
                                            e.params.slideDuplicateClass
                                        )
                                    ) {
                                        const t = n.index();
                                        e.slideTo(
                                            t,
                                            i,
                                            e.params.runCallbacksOnInit,
                                            !0
                                        );
                                    }
                                }
                            }
                            e.params.hashNavigation.watchState &&
                                d(l).on("hashchange", c);
                        })();
                }),
                    n("destroy", () => {
                        e.params.hashNavigation.enabled &&
                            e.params.hashNavigation.watchState &&
                            d(l).off("hashchange", c);
                    }),
                    n("transitionEnd _freeModeNoMomentumRelease", () => {
                        a && h();
                    }),
                    n("slideChange", () => {
                        a && e.params.cssMode && h();
                    });
            },
            function ({ swiper: e, extendParams: t, on: i, emit: n }) {
                let r;
                function a() {
                    const t = e.slides.eq(e.activeIndex);
                    let i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") &&
                        (i =
                            t.attr("data-swiper-autoplay") ||
                            e.params.autoplay.delay),
                        clearTimeout(r),
                        (r = h(() => {
                            let t;
                            e.params.autoplay.reverseDirection
                                ? e.params.loop
                                    ? (e.loopFix(),
                                      (t = e.slidePrev(e.params.speed, !0, !0)),
                                      n("autoplay"))
                                    : e.isBeginning
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? l()
                                        : ((t = e.slideTo(
                                              e.slides.length - 1,
                                              e.params.speed,
                                              !0,
                                              !0
                                          )),
                                          n("autoplay"))
                                    : ((t = e.slidePrev(
                                          e.params.speed,
                                          !0,
                                          !0
                                      )),
                                      n("autoplay"))
                                : e.params.loop
                                ? (e.loopFix(),
                                  (t = e.slideNext(e.params.speed, !0, !0)),
                                  n("autoplay"))
                                : e.isEnd
                                ? e.params.autoplay.stopOnLastSlide
                                    ? l()
                                    : ((t = e.slideTo(
                                          0,
                                          e.params.speed,
                                          !0,
                                          !0
                                      )),
                                      n("autoplay"))
                                : ((t = e.slideNext(e.params.speed, !0, !0)),
                                  n("autoplay")),
                                ((e.params.cssMode && e.autoplay.running) ||
                                    !1 === t) &&
                                    a();
                        }, i));
                }
                function o() {
                    return (
                        void 0 === r &&
                        !e.autoplay.running &&
                        ((e.autoplay.running = !0), n("autoplayStart"), a(), !0)
                    );
                }
                function l() {
                    return (
                        !!e.autoplay.running &&
                        void 0 !== r &&
                        (r && (clearTimeout(r), (r = void 0)),
                        (e.autoplay.running = !1),
                        n("autoplayStop"),
                        !0)
                    );
                }
                function d(t) {
                    e.autoplay.running &&
                        (e.autoplay.paused ||
                            (r && clearTimeout(r),
                            (e.autoplay.paused = !0),
                            0 !== t && e.params.autoplay.waitForTransition
                                ? [
                                      "transitionend",
                                      "webkitTransitionEnd",
                                  ].forEach((t) => {
                                      e.$wrapperEl[0].addEventListener(t, u);
                                  })
                                : ((e.autoplay.paused = !1), a())));
                }
                function c() {
                    const t = s();
                    "hidden" === t.visibilityState && e.autoplay.running && d(),
                        "visible" === t.visibilityState &&
                            e.autoplay.paused &&
                            (a(), (e.autoplay.paused = !1));
                }
                function u(t) {
                    e &&
                        !e.destroyed &&
                        e.$wrapperEl &&
                        t.target === e.$wrapperEl[0] &&
                        (["transitionend", "webkitTransitionEnd"].forEach(
                            (t) => {
                                e.$wrapperEl[0].removeEventListener(t, u);
                            }
                        ),
                        (e.autoplay.paused = !1),
                        e.autoplay.running ? a() : l());
                }
                function p() {
                    e.params.autoplay.disableOnInteraction ? l() : d(),
                        ["transitionend", "webkitTransitionEnd"].forEach(
                            (t) => {
                                e.$wrapperEl[0].removeEventListener(t, u);
                            }
                        );
                }
                function f() {
                    e.params.autoplay.disableOnInteraction ||
                        ((e.autoplay.paused = !1), a());
                }
                (e.autoplay = { running: !1, paused: !1 }),
                    t({
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1,
                            pauseOnMouseEnter: !1,
                        },
                    }),
                    i("init", () => {
                        e.params.autoplay.enabled &&
                            (o(),
                            s().addEventListener("visibilitychange", c),
                            e.params.autoplay.pauseOnMouseEnter &&
                                (e.$el.on("mouseenter", p),
                                e.$el.on("mouseleave", f)));
                    }),
                    i("beforeTransitionStart", (t, i, s) => {
                        e.autoplay.running &&
                            (s || !e.params.autoplay.disableOnInteraction
                                ? e.autoplay.pause(i)
                                : l());
                    }),
                    i("sliderFirstMove", () => {
                        e.autoplay.running &&
                            (e.params.autoplay.disableOnInteraction
                                ? l()
                                : d());
                    }),
                    i("touchEnd", () => {
                        e.params.cssMode &&
                            e.autoplay.paused &&
                            !e.params.autoplay.disableOnInteraction &&
                            a();
                    }),
                    i("destroy", () => {
                        e.$el.off("mouseenter", p),
                            e.$el.off("mouseleave", f),
                            e.autoplay.running && l(),
                            s().removeEventListener("visibilitychange", c);
                    }),
                    Object.assign(e.autoplay, {
                        pause: d,
                        run: a,
                        start: o,
                        stop: l,
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs",
                    },
                });
                let s = !1,
                    n = !1;
                function r() {
                    const t = e.thumbs.swiper;
                    if (!t) return;
                    const i = t.clickedIndex,
                        s = t.clickedSlide;
                    if (
                        s &&
                        d(s).hasClass(e.params.thumbs.slideThumbActiveClass)
                    )
                        return;
                    if (null == i) return;
                    let n;
                    if (
                        ((n = t.params.loop
                            ? parseInt(
                                  d(t.clickedSlide).attr(
                                      "data-swiper-slide-index"
                                  ),
                                  10
                              )
                            : i),
                        e.params.loop)
                    ) {
                        let t = e.activeIndex;
                        e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
                            (e.loopFix(),
                            (e._clientLeft = e.$wrapperEl[0].clientLeft),
                            (t = e.activeIndex));
                        const i = e.slides
                                .eq(t)
                                .prevAll(`[data-swiper-slide-index="${n}"]`)
                                .eq(0)
                                .index(),
                            s = e.slides
                                .eq(t)
                                .nextAll(`[data-swiper-slide-index="${n}"]`)
                                .eq(0)
                                .index();
                        n =
                            void 0 === i
                                ? s
                                : void 0 === s
                                ? i
                                : s - t < t - i
                                ? s
                                : i;
                    }
                    e.slideTo(n);
                }
                function a() {
                    const { thumbs: t } = e.params;
                    if (s) return !1;
                    s = !0;
                    const i = e.constructor;
                    if (t.swiper instanceof i)
                        (e.thumbs.swiper = t.swiper),
                            Object.assign(e.thumbs.swiper.originalParams, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1,
                            }),
                            Object.assign(e.thumbs.swiper.params, {
                                watchSlidesProgress: !0,
                                slideToClickedSlide: !1,
                            });
                    else if (f(t.swiper)) {
                        const s = Object.assign({}, t.swiper);
                        Object.assign(s, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1,
                        }),
                            (e.thumbs.swiper = new i(s)),
                            (n = !0);
                    }
                    return (
                        e.thumbs.swiper.$el.addClass(
                            e.params.thumbs.thumbsContainerClass
                        ),
                        e.thumbs.swiper.on("tap", r),
                        !0
                    );
                }
                function o(t) {
                    const i = e.thumbs.swiper;
                    if (!i) return;
                    const s =
                            "auto" === i.params.slidesPerView
                                ? i.slidesPerViewDynamic()
                                : i.params.slidesPerView,
                        n = e.params.thumbs.autoScrollOffset,
                        r = n && !i.params.loop;
                    if (e.realIndex !== i.realIndex || r) {
                        let a,
                            o,
                            l = i.activeIndex;
                        if (i.params.loop) {
                            i.slides
                                .eq(l)
                                .hasClass(i.params.slideDuplicateClass) &&
                                (i.loopFix(),
                                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                                (l = i.activeIndex));
                            const t = i.slides
                                    .eq(l)
                                    .prevAll(
                                        `[data-swiper-slide-index="${e.realIndex}"]`
                                    )
                                    .eq(0)
                                    .index(),
                                s = i.slides
                                    .eq(l)
                                    .nextAll(
                                        `[data-swiper-slide-index="${e.realIndex}"]`
                                    )
                                    .eq(0)
                                    .index();
                            (a =
                                void 0 === t
                                    ? s
                                    : void 0 === s
                                    ? t
                                    : s - l == l - t
                                    ? i.params.slidesPerGroup > 1
                                        ? s
                                        : l
                                    : s - l < l - t
                                    ? s
                                    : t),
                                (o =
                                    e.activeIndex > e.previousIndex
                                        ? "next"
                                        : "prev");
                        } else
                            (a = e.realIndex),
                                (o = a > e.previousIndex ? "next" : "prev");
                        r && (a += "next" === o ? n : -1 * n),
                            i.visibleSlidesIndexes &&
                                i.visibleSlidesIndexes.indexOf(a) < 0 &&
                                (i.params.centeredSlides
                                    ? (a =
                                          a > l
                                              ? a - Math.floor(s / 2) + 1
                                              : a + Math.floor(s / 2) - 1)
                                    : a > l && i.params.slidesPerGroup,
                                i.slideTo(a, t ? 0 : void 0));
                    }
                    let a = 1;
                    const o = e.params.thumbs.slideThumbActiveClass;
                    if (
                        (e.params.slidesPerView > 1 &&
                            !e.params.centeredSlides &&
                            (a = e.params.slidesPerView),
                        e.params.thumbs.multipleActiveThumbs || (a = 1),
                        (a = Math.floor(a)),
                        i.slides.removeClass(o),
                        i.params.loop ||
                            (i.params.virtual && i.params.virtual.enabled))
                    )
                        for (let t = 0; t < a; t += 1)
                            i.$wrapperEl
                                .children(
                                    `[data-swiper-slide-index="${
                                        e.realIndex + t
                                    }"]`
                                )
                                .addClass(o);
                    else
                        for (let t = 0; t < a; t += 1)
                            i.slides.eq(e.realIndex + t).addClass(o);
                }
                (e.thumbs = { swiper: null }),
                    i("beforeInit", () => {
                        const { thumbs: t } = e.params;
                        t && t.swiper && (a(), o(!0));
                    }),
                    i("slideChange update resize observerUpdate", () => {
                        e.thumbs.swiper && o();
                    }),
                    i("setTransition", (t, i) => {
                        const s = e.thumbs.swiper;
                        s && s.setTransition(i);
                    }),
                    i("beforeDestroy", () => {
                        const t = e.thumbs.swiper;
                        t && n && t && t.destroy();
                    }),
                    Object.assign(e.thumbs, { init: a, update: o });
            },
            function ({ swiper: e, extendParams: t, emit: i, once: s }) {
                t({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: 0.02,
                    },
                }),
                    Object.assign(e, {
                        freeMode: {
                            onTouchMove: function () {
                                const { touchEventsData: t, touches: i } = e;
                                0 === t.velocities.length &&
                                    t.velocities.push({
                                        position:
                                            i[
                                                e.isHorizontal()
                                                    ? "startX"
                                                    : "startY"
                                            ],
                                        time: t.touchStartTime,
                                    }),
                                    t.velocities.push({
                                        position:
                                            i[
                                                e.isHorizontal()
                                                    ? "currentX"
                                                    : "currentY"
                                            ],
                                        time: u(),
                                    });
                            },
                            onTouchEnd: function ({ currentPos: t }) {
                                const {
                                        params: n,
                                        $wrapperEl: r,
                                        rtlTranslate: a,
                                        snapGrid: o,
                                        touchEventsData: l,
                                    } = e,
                                    d = u() - l.touchStartTime;
                                if (t < -e.minTranslate())
                                    e.slideTo(e.activeIndex);
                                else if (t > -e.maxTranslate())
                                    e.slides.length < o.length
                                        ? e.slideTo(o.length - 1)
                                        : e.slideTo(e.slides.length - 1);
                                else {
                                    if (n.freeMode.momentum) {
                                        if (l.velocities.length > 1) {
                                            const t = l.velocities.pop(),
                                                i = l.velocities.pop(),
                                                s = t.position - i.position,
                                                r = t.time - i.time;
                                            (e.velocity = s / r),
                                                (e.velocity /= 2),
                                                Math.abs(e.velocity) <
                                                    n.freeMode
                                                        .minimumVelocity &&
                                                    (e.velocity = 0),
                                                (r > 150 ||
                                                    u() - t.time > 300) &&
                                                    (e.velocity = 0);
                                        } else e.velocity = 0;
                                        (e.velocity *=
                                            n.freeMode.momentumVelocityRatio),
                                            (l.velocities.length = 0);
                                        let t = 1e3 * n.freeMode.momentumRatio;
                                        const d = e.velocity * t;
                                        let c = e.translate + d;
                                        a && (c = -c);
                                        let h,
                                            p = !1;
                                        const f =
                                            20 *
                                            Math.abs(e.velocity) *
                                            n.freeMode.momentumBounceRatio;
                                        let m;
                                        if (c < e.maxTranslate())
                                            n.freeMode.momentumBounce
                                                ? (c + e.maxTranslate() < -f &&
                                                      (c =
                                                          e.maxTranslate() - f),
                                                  (h = e.maxTranslate()),
                                                  (p = !0),
                                                  (l.allowMomentumBounce = !0))
                                                : (c = e.maxTranslate()),
                                                n.loop &&
                                                    n.centeredSlides &&
                                                    (m = !0);
                                        else if (c > e.minTranslate())
                                            n.freeMode.momentumBounce
                                                ? (c - e.minTranslate() > f &&
                                                      (c =
                                                          e.minTranslate() + f),
                                                  (h = e.minTranslate()),
                                                  (p = !0),
                                                  (l.allowMomentumBounce = !0))
                                                : (c = e.minTranslate()),
                                                n.loop &&
                                                    n.centeredSlides &&
                                                    (m = !0);
                                        else if (n.freeMode.sticky) {
                                            let t;
                                            for (
                                                let e = 0;
                                                e < o.length;
                                                e += 1
                                            )
                                                if (o[e] > -c) {
                                                    t = e;
                                                    break;
                                                }
                                            (c =
                                                Math.abs(o[t] - c) <
                                                    Math.abs(o[t - 1] - c) ||
                                                "next" === e.swipeDirection
                                                    ? o[t]
                                                    : o[t - 1]),
                                                (c = -c);
                                        }
                                        if (
                                            (m &&
                                                s("transitionEnd", () => {
                                                    e.loopFix();
                                                }),
                                            0 !== e.velocity)
                                        ) {
                                            if (
                                                ((t = a
                                                    ? Math.abs(
                                                          (-c - e.translate) /
                                                              e.velocity
                                                      )
                                                    : Math.abs(
                                                          (c - e.translate) /
                                                              e.velocity
                                                      )),
                                                n.freeMode.sticky)
                                            ) {
                                                const i = Math.abs(
                                                        (a ? -c : c) -
                                                            e.translate
                                                    ),
                                                    s =
                                                        e.slidesSizesGrid[
                                                            e.activeIndex
                                                        ];
                                                t =
                                                    i < s
                                                        ? n.speed
                                                        : i < 2 * s
                                                        ? 1.5 * n.speed
                                                        : 2.5 * n.speed;
                                            }
                                        } else if (n.freeMode.sticky)
                                            return void e.slideToClosest();
                                        n.freeMode.momentumBounce && p
                                            ? (e.updateProgress(h),
                                              e.setTransition(t),
                                              e.setTranslate(c),
                                              e.transitionStart(
                                                  !0,
                                                  e.swipeDirection
                                              ),
                                              (e.animating = !0),
                                              r.transitionEnd(() => {
                                                  e &&
                                                      !e.destroyed &&
                                                      l.allowMomentumBounce &&
                                                      (i("momentumBounce"),
                                                      e.setTransition(n.speed),
                                                      setTimeout(() => {
                                                          e.setTranslate(h),
                                                              r.transitionEnd(
                                                                  () => {
                                                                      e &&
                                                                          !e.destroyed &&
                                                                          e.transitionEnd();
                                                                  }
                                                              );
                                                      }, 0));
                                              }))
                                            : e.velocity
                                            ? (i("_freeModeNoMomentumRelease"),
                                              e.updateProgress(c),
                                              e.setTransition(t),
                                              e.setTranslate(c),
                                              e.transitionStart(
                                                  !0,
                                                  e.swipeDirection
                                              ),
                                              e.animating ||
                                                  ((e.animating = !0),
                                                  r.transitionEnd(() => {
                                                      e &&
                                                          !e.destroyed &&
                                                          e.transitionEnd();
                                                  })))
                                            : e.updateProgress(c),
                                            e.updateActiveIndex(),
                                            e.updateSlidesClasses();
                                    } else {
                                        if (n.freeMode.sticky)
                                            return void e.slideToClosest();
                                        n.freeMode &&
                                            i("_freeModeNoMomentumRelease");
                                    }
                                    (!n.freeMode.momentum ||
                                        d >= n.longSwipesMs) &&
                                        (e.updateProgress(),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses());
                                }
                            },
                        },
                    });
            },
            function ({ swiper: e, extendParams: t }) {
                let i, s, n;
                t({ grid: { rows: 1, fill: "column" } }),
                    (e.grid = {
                        initSlides: (t) => {
                            const { slidesPerView: r } = e.params,
                                { rows: a, fill: o } = e.params.grid;
                            (s = i / a),
                                (n = Math.floor(t / a)),
                                (i =
                                    Math.floor(t / a) === t / a
                                        ? t
                                        : Math.ceil(t / a) * a),
                                "auto" !== r &&
                                    "row" === o &&
                                    (i = Math.max(i, r * a));
                        },
                        updateSlide: (t, r, a, o) => {
                            const { slidesPerGroup: l, spaceBetween: d } =
                                    e.params,
                                { rows: c, fill: h } = e.params.grid;
                            let u, p, f;
                            if ("row" === h && l > 1) {
                                const e = Math.floor(t / (l * c)),
                                    s = t - c * l * e,
                                    n =
                                        0 === e
                                            ? l
                                            : Math.min(
                                                  Math.ceil(
                                                      (a - e * c * l) / c
                                                  ),
                                                  l
                                              );
                                (f = Math.floor(s / n)),
                                    (p = s - f * n + e * l),
                                    (u = p + (f * i) / c),
                                    r.css({ "-webkit-order": u, order: u });
                            } else
                                "column" === h
                                    ? ((p = Math.floor(t / c)),
                                      (f = t - p * c),
                                      (p > n || (p === n && f === c - 1)) &&
                                          ((f += 1),
                                          f >= c && ((f = 0), (p += 1))))
                                    : ((f = Math.floor(t / s)),
                                      (p = t - f * s));
                            r.css(
                                o("margin-top"),
                                0 !== f ? d && `${d}px` : ""
                            );
                        },
                        updateWrapperSize: (t, s, n) => {
                            const {
                                    spaceBetween: r,
                                    centeredSlides: a,
                                    roundLengths: o,
                                } = e.params,
                                { rows: l } = e.params.grid;
                            if (
                                ((e.virtualSize = (t + r) * i),
                                (e.virtualSize =
                                    Math.ceil(e.virtualSize / l) - r),
                                e.$wrapperEl.css({
                                    [n("width")]: `${e.virtualSize + r}px`,
                                }),
                                a)
                            ) {
                                s.splice(0, s.length);
                                const t = [];
                                for (let i = 0; i < s.length; i += 1) {
                                    let n = s[i];
                                    o && (n = Math.floor(n)),
                                        s[i] < e.virtualSize + s[0] &&
                                            t.push(n);
                                }
                                s.push(...t);
                            }
                        },
                    });
            },
            function ({ swiper: e }) {
                Object.assign(e, {
                    appendSlide: Y.bind(e),
                    prependSlide: R.bind(e),
                    addSlide: X.bind(e),
                    removeSlide: F.bind(e),
                    removeAllSlides: V.bind(e),
                });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({ fadeEffect: { crossFade: !1, transformEl: null } }),
                    G({
                        effect: "fade",
                        swiper: e,
                        on: i,
                        setTranslate: () => {
                            const { slides: t } = e,
                                i = e.params.fadeEffect;
                            for (let s = 0; s < t.length; s += 1) {
                                const t = e.slides.eq(s);
                                let n = -t[0].swiperSlideOffset;
                                e.params.virtualTranslate || (n -= e.translate);
                                let r = 0;
                                e.isHorizontal() || ((r = n), (n = 0));
                                const a = e.params.fadeEffect.crossFade
                                    ? Math.max(1 - Math.abs(t[0].progress), 0)
                                    : 1 +
                                      Math.min(Math.max(t[0].progress, -1), 0);
                                U(i, t)
                                    .css({ opacity: a })
                                    .transform(
                                        `translate3d(${n}px, ${r}px, 0px)`
                                    );
                            }
                        },
                        setTransition: (t) => {
                            const { transformEl: i } = e.params.fadeEffect;
                            (i ? e.slides.find(i) : e.slides).transition(t),
                                K({
                                    swiper: e,
                                    duration: t,
                                    transformEl: i,
                                    allSlides: !0,
                                });
                        },
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !e.params.cssMode,
                        }),
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    cubeEffect: {
                        slideShadows: !0,
                        shadow: !0,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    },
                }),
                    G({
                        effect: "cube",
                        swiper: e,
                        on: i,
                        setTranslate: () => {
                            const {
                                    $el: t,
                                    $wrapperEl: i,
                                    slides: s,
                                    width: n,
                                    height: r,
                                    rtlTranslate: a,
                                    size: o,
                                    browser: l,
                                } = e,
                                c = e.params.cubeEffect,
                                h = e.isHorizontal(),
                                u = e.virtual && e.params.virtual.enabled;
                            let p,
                                f = 0;
                            c.shadow &&
                                (h
                                    ? ((p = i.find(".swiper-cube-shadow")),
                                      0 === p.length &&
                                          ((p = d(
                                              '<div class="swiper-cube-shadow"></div>'
                                          )),
                                          i.append(p)),
                                      p.css({ height: `${n}px` }))
                                    : ((p = t.find(".swiper-cube-shadow")),
                                      0 === p.length &&
                                          ((p = d(
                                              '<div class="swiper-cube-shadow"></div>'
                                          )),
                                          t.append(p))));
                            for (let e = 0; e < s.length; e += 1) {
                                const t = s.eq(e);
                                let i = e;
                                u &&
                                    (i = parseInt(
                                        t.attr("data-swiper-slide-index"),
                                        10
                                    ));
                                let n = 90 * i,
                                    r = Math.floor(n / 360);
                                a && ((n = -n), (r = Math.floor(-n / 360)));
                                const l = Math.max(
                                    Math.min(t[0].progress, 1),
                                    -1
                                );
                                let p = 0,
                                    m = 0,
                                    g = 0;
                                i % 4 == 0
                                    ? ((p = 4 * -r * o), (g = 0))
                                    : (i - 1) % 4 == 0
                                    ? ((p = 0), (g = 4 * -r * o))
                                    : (i - 2) % 4 == 0
                                    ? ((p = o + 4 * r * o), (g = o))
                                    : (i - 3) % 4 == 0 &&
                                      ((p = -o), (g = 3 * o + 4 * o * r)),
                                    a && (p = -p),
                                    h || ((m = p), (p = 0));
                                const v = `rotateX(${h ? 0 : -n}deg) rotateY(${
                                    h ? n : 0
                                }deg) translate3d(${p}px, ${m}px, ${g}px)`;
                                if (
                                    (l <= 1 &&
                                        l > -1 &&
                                        ((f = 90 * i + 90 * l),
                                        a && (f = 90 * -i - 90 * l)),
                                    t.transform(v),
                                    c.slideShadows)
                                ) {
                                    let e = h
                                            ? t.find(
                                                  ".swiper-slide-shadow-left"
                                              )
                                            : t.find(
                                                  ".swiper-slide-shadow-top"
                                              ),
                                        i = h
                                            ? t.find(
                                                  ".swiper-slide-shadow-right"
                                              )
                                            : t.find(
                                                  ".swiper-slide-shadow-bottom"
                                              );
                                    0 === e.length &&
                                        ((e = d(
                                            `<div class="swiper-slide-shadow-${
                                                h ? "left" : "top"
                                            }"></div>`
                                        )),
                                        t.append(e)),
                                        0 === i.length &&
                                            ((i = d(
                                                `<div class="swiper-slide-shadow-${
                                                    h ? "right" : "bottom"
                                                }"></div>`
                                            )),
                                            t.append(i)),
                                        e.length &&
                                            (e[0].style.opacity = Math.max(
                                                -l,
                                                0
                                            )),
                                        i.length &&
                                            (i[0].style.opacity = Math.max(
                                                l,
                                                0
                                            ));
                                }
                            }
                            if (
                                (i.css({
                                    "-webkit-transform-origin": `50% 50% -${
                                        o / 2
                                    }px`,
                                    "transform-origin": `50% 50% -${o / 2}px`,
                                }),
                                c.shadow)
                            )
                                if (h)
                                    p.transform(
                                        `translate3d(0px, ${
                                            n / 2 + c.shadowOffset
                                        }px, ${
                                            -n / 2
                                        }px) rotateX(90deg) rotateZ(0deg) scale(${
                                            c.shadowScale
                                        })`
                                    );
                                else {
                                    const e =
                                            Math.abs(f) -
                                            90 * Math.floor(Math.abs(f) / 90),
                                        t =
                                            1.5 -
                                            (Math.sin((2 * e * Math.PI) / 360) /
                                                2 +
                                                Math.cos(
                                                    (2 * e * Math.PI) / 360
                                                ) /
                                                    2),
                                        i = c.shadowScale,
                                        s = c.shadowScale / t,
                                        n = c.shadowOffset;
                                    p.transform(
                                        `scale3d(${i}, 1, ${s}) translate3d(0px, ${
                                            r / 2 + n
                                        }px, ${-r / 2 / s}px) rotateX(-90deg)`
                                    );
                                }
                            const m = l.isSafari || l.isWebView ? -o / 2 : 0;
                            i.transform(
                                `translate3d(0px,0,${m}px) rotateX(${
                                    e.isHorizontal() ? 0 : f
                                }deg) rotateY(${e.isHorizontal() ? -f : 0}deg)`
                            );
                        },
                        setTransition: (t) => {
                            const { $el: i, slides: s } = e;
                            s
                                .transition(t)
                                .find(
                                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                )
                                .transition(t),
                                e.params.cubeEffect.shadow &&
                                    !e.isHorizontal() &&
                                    i.find(".swiper-cube-shadow").transition(t);
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0,
                        }),
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    flipEffect: {
                        slideShadows: !0,
                        limitRotation: !0,
                        transformEl: null,
                    },
                }),
                    G({
                        effect: "flip",
                        swiper: e,
                        on: i,
                        setTranslate: () => {
                            const { slides: t, rtlTranslate: i } = e,
                                s = e.params.flipEffect;
                            for (let n = 0; n < t.length; n += 1) {
                                const r = t.eq(n);
                                let a = r[0].progress;
                                e.params.flipEffect.limitRotation &&
                                    (a = Math.max(
                                        Math.min(r[0].progress, 1),
                                        -1
                                    ));
                                const o = r[0].swiperSlideOffset;
                                let l = -180 * a,
                                    d = 0,
                                    c = e.params.cssMode
                                        ? -o - e.translate
                                        : -o,
                                    h = 0;
                                if (
                                    (e.isHorizontal()
                                        ? i && (l = -l)
                                        : ((h = c), (c = 0), (d = -l), (l = 0)),
                                    (r[0].style.zIndex =
                                        -Math.abs(Math.round(a)) + t.length),
                                    s.slideShadows)
                                ) {
                                    let t = e.isHorizontal()
                                            ? r.find(
                                                  ".swiper-slide-shadow-left"
                                              )
                                            : r.find(
                                                  ".swiper-slide-shadow-top"
                                              ),
                                        i = e.isHorizontal()
                                            ? r.find(
                                                  ".swiper-slide-shadow-right"
                                              )
                                            : r.find(
                                                  ".swiper-slide-shadow-bottom"
                                              );
                                    0 === t.length &&
                                        (t = Q(
                                            s,
                                            r,
                                            e.isHorizontal() ? "left" : "top"
                                        )),
                                        0 === i.length &&
                                            (i = Q(
                                                s,
                                                r,
                                                e.isHorizontal()
                                                    ? "right"
                                                    : "bottom"
                                            )),
                                        t.length &&
                                            (t[0].style.opacity = Math.max(
                                                -a,
                                                0
                                            )),
                                        i.length &&
                                            (i[0].style.opacity = Math.max(
                                                a,
                                                0
                                            ));
                                }
                                const u = `translate3d(${c}px, ${h}px, 0px) rotateX(${d}deg) rotateY(${l}deg)`;
                                U(s, r).transform(u);
                            }
                        },
                        setTransition: (t) => {
                            const { transformEl: i } = e.params.flipEffect;
                            (i ? e.slides.find(i) : e.slides)
                                .transition(t)
                                .find(
                                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                )
                                .transition(t),
                                K({ swiper: e, duration: t, transformEl: i });
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !e.params.cssMode,
                        }),
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        scale: 1,
                        modifier: 1,
                        slideShadows: !0,
                        transformEl: null,
                    },
                }),
                    G({
                        effect: "coverflow",
                        swiper: e,
                        on: i,
                        setTranslate: () => {
                            const {
                                    width: t,
                                    height: i,
                                    slides: s,
                                    slidesSizesGrid: n,
                                } = e,
                                r = e.params.coverflowEffect,
                                a = e.isHorizontal(),
                                o = e.translate,
                                l = a ? t / 2 - o : i / 2 - o,
                                d = a ? r.rotate : -r.rotate,
                                c = r.depth;
                            for (let e = 0, t = s.length; e < t; e += 1) {
                                const t = s.eq(e),
                                    i = n[e],
                                    o =
                                        ((l - t[0].swiperSlideOffset - i / 2) /
                                            i) *
                                        r.modifier;
                                let h = a ? d * o : 0,
                                    u = a ? 0 : d * o,
                                    p = -c * Math.abs(o),
                                    f = r.stretch;
                                "string" == typeof f &&
                                    -1 !== f.indexOf("%") &&
                                    (f = (parseFloat(r.stretch) / 100) * i);
                                let m = a ? 0 : f * o,
                                    g = a ? f * o : 0,
                                    v = 1 - (1 - r.scale) * Math.abs(o);
                                Math.abs(g) < 0.001 && (g = 0),
                                    Math.abs(m) < 0.001 && (m = 0),
                                    Math.abs(p) < 0.001 && (p = 0),
                                    Math.abs(h) < 0.001 && (h = 0),
                                    Math.abs(u) < 0.001 && (u = 0),
                                    Math.abs(v) < 0.001 && (v = 0);
                                const y = `translate3d(${g}px,${m}px,${p}px)  rotateX(${u}deg) rotateY(${h}deg) scale(${v})`;
                                if (
                                    (U(r, t).transform(y),
                                    (t[0].style.zIndex =
                                        1 - Math.abs(Math.round(o))),
                                    r.slideShadows)
                                ) {
                                    let e = a
                                            ? t.find(
                                                  ".swiper-slide-shadow-left"
                                              )
                                            : t.find(
                                                  ".swiper-slide-shadow-top"
                                              ),
                                        i = a
                                            ? t.find(
                                                  ".swiper-slide-shadow-right"
                                              )
                                            : t.find(
                                                  ".swiper-slide-shadow-bottom"
                                              );
                                    0 === e.length &&
                                        (e = Q(r, t, a ? "left" : "top")),
                                        0 === i.length &&
                                            (i = Q(
                                                r,
                                                t,
                                                a ? "right" : "bottom"
                                            )),
                                        e.length &&
                                            (e[0].style.opacity =
                                                o > 0 ? o : 0),
                                        i.length &&
                                            (i[0].style.opacity =
                                                -o > 0 ? -o : 0);
                                }
                            }
                        },
                        setTransition: (t) => {
                            const { transformEl: i } = e.params.coverflowEffect;
                            (i ? e.slides.find(i) : e.slides)
                                .transition(t)
                                .find(
                                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                )
                                .transition(t);
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({ watchSlidesProgress: !0 }),
                    });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({
                    creativeEffect: {
                        transformEl: null,
                        limitProgress: 1,
                        shadowPerProgress: !1,
                        progressMultiplier: 1,
                        perspective: !0,
                        prev: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1,
                        },
                        next: {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            opacity: 1,
                            scale: 1,
                        },
                    },
                });
                const s = (e) => ("string" == typeof e ? e : `${e}px`);
                G({
                    effect: "creative",
                    swiper: e,
                    on: i,
                    setTranslate: () => {
                        const { slides: t } = e,
                            i = e.params.creativeEffect,
                            { progressMultiplier: n } = i;
                        for (let r = 0; r < t.length; r += 1) {
                            const a = t.eq(r),
                                o = a[0].progress,
                                l = Math.min(
                                    Math.max(a[0].progress, -i.limitProgress),
                                    i.limitProgress
                                ),
                                d = a[0].swiperSlideOffset,
                                c = [
                                    e.params.cssMode ? -d - e.translate : -d,
                                    0,
                                    0,
                                ],
                                h = [0, 0, 0];
                            let u = !1;
                            e.isHorizontal() || ((c[1] = c[0]), (c[0] = 0));
                            let p = {
                                translate: [0, 0, 0],
                                rotate: [0, 0, 0],
                                scale: 1,
                                opacity: 1,
                            };
                            l < 0
                                ? ((p = i.next), (u = !0))
                                : l > 0 && ((p = i.prev), (u = !0)),
                                c.forEach((e, t) => {
                                    c[t] = `calc(${e}px + (${s(
                                        p.translate[t]
                                    )} * ${Math.abs(l * n)}))`;
                                }),
                                h.forEach((e, t) => {
                                    h[t] = p.rotate[t] * Math.abs(l * n);
                                }),
                                (a[0].style.zIndex =
                                    -Math.abs(Math.round(o)) + t.length);
                            const f = c.join(", "),
                                m = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
                                g =
                                    l < 0
                                        ? `scale(${1 + (1 - p.scale) * l * n})`
                                        : `scale(${1 - (1 - p.scale) * l * n})`,
                                v =
                                    l < 0
                                        ? 1 + (1 - p.opacity) * l * n
                                        : 1 - (1 - p.opacity) * l * n,
                                y = `translate3d(${f}) ${m} ${g}`;
                            if ((u && p.shadow) || !u) {
                                let e = a.children(".swiper-slide-shadow");
                                if (
                                    (0 === e.length &&
                                        p.shadow &&
                                        (e = Q(i, a)),
                                    e.length)
                                ) {
                                    const t = i.shadowPerProgress
                                        ? l * (1 / i.limitProgress)
                                        : l;
                                    e[0].style.opacity = Math.min(
                                        Math.max(Math.abs(t), 0),
                                        1
                                    );
                                }
                            }
                            const b = U(i, a);
                            b.transform(y).css({ opacity: v }),
                                p.origin && b.css("transform-origin", p.origin);
                        }
                    },
                    setTransition: (t) => {
                        const { transformEl: i } = e.params.creativeEffect;
                        (i ? e.slides.find(i) : e.slides)
                            .transition(t)
                            .find(".swiper-slide-shadow")
                            .transition(t),
                            K({
                                swiper: e,
                                duration: t,
                                transformEl: i,
                                allSlides: !0,
                            });
                    },
                    perspective: () => e.params.creativeEffect.perspective,
                    overwriteParams: () => ({
                        watchSlidesProgress: !0,
                        virtualTranslate: !e.params.cssMode,
                    }),
                });
            },
            function ({ swiper: e, extendParams: t, on: i }) {
                t({ cardsEffect: { slideShadows: !0, transformEl: null } }),
                    G({
                        effect: "cards",
                        swiper: e,
                        on: i,
                        setTranslate: () => {
                            const { slides: t, activeIndex: i } = e,
                                s = e.params.cardsEffect,
                                { startTranslate: n, isTouched: r } =
                                    e.touchEventsData,
                                a = e.translate;
                            for (let o = 0; o < t.length; o += 1) {
                                const l = t.eq(o),
                                    d = l[0].progress,
                                    c = Math.min(Math.max(d, -4), 4);
                                let h = l[0].swiperSlideOffset;
                                e.params.centeredSlides &&
                                    !e.params.cssMode &&
                                    e.$wrapperEl.transform(
                                        `translateX(${e.minTranslate()}px)`
                                    ),
                                    e.params.centeredSlides &&
                                        e.params.cssMode &&
                                        (h -= t[0].swiperSlideOffset);
                                let u = e.params.cssMode
                                        ? -h - e.translate
                                        : -h,
                                    p = 0;
                                const f = -100 * Math.abs(c);
                                let m = 1,
                                    g = -2 * c,
                                    v = 8 - 0.75 * Math.abs(c);
                                const y =
                                        (o === i || o === i - 1) &&
                                        c > 0 &&
                                        c < 1 &&
                                        (r || e.params.cssMode) &&
                                        a < n,
                                    b =
                                        (o === i || o === i + 1) &&
                                        c < 0 &&
                                        c > -1 &&
                                        (r || e.params.cssMode) &&
                                        a > n;
                                if (y || b) {
                                    const e =
                                        (1 -
                                            Math.abs(
                                                (Math.abs(c) - 0.5) / 0.5
                                            )) **
                                        0.5;
                                    (g += -28 * c * e),
                                        (m += -0.5 * e),
                                        (v += 96 * e),
                                        (p = -25 * e * Math.abs(c) + "%");
                                }
                                if (
                                    ((u =
                                        c < 0
                                            ? `calc(${u}px + (${
                                                  v * Math.abs(c)
                                              }%))`
                                            : c > 0
                                            ? `calc(${u}px + (-${
                                                  v * Math.abs(c)
                                              }%))`
                                            : `${u}px`),
                                    !e.isHorizontal())
                                ) {
                                    const e = p;
                                    (p = u), (u = e);
                                }
                                const w = `\n        translate3d(${u}, ${p}, ${f}px)\n        rotateZ(${g}deg)\n        scale(${
                                    c < 0
                                        ? "" + (1 + (1 - m) * c)
                                        : "" + (1 - (1 - m) * c)
                                })\n      `;
                                if (s.slideShadows) {
                                    let e = l.find(".swiper-slide-shadow");
                                    0 === e.length && (e = Q(s, l)),
                                        e.length &&
                                            (e[0].style.opacity = Math.min(
                                                Math.max(
                                                    (Math.abs(c) - 0.5) / 0.5,
                                                    0
                                                ),
                                                1
                                            ));
                                }
                                (l[0].style.zIndex =
                                    -Math.abs(Math.round(d)) + t.length),
                                    U(s, l).transform(w);
                            }
                        },
                        setTransition: (t) => {
                            const { transformEl: i } = e.params.cardsEffect;
                            (i ? e.slides.find(i) : e.slides)
                                .transition(t)
                                .find(".swiper-slide-shadow")
                                .transition(t),
                                K({ swiper: e, duration: t, transformEl: i });
                        },
                        perspective: () => !0,
                        overwriteParams: () => ({
                            watchSlidesProgress: !0,
                            virtualTranslate: !e.params.cssMode,
                        }),
                    });
            },
        ];
        return W.use(Z), W;
    }),
    (function () {
        "use strict";
        const e = (e, t = !1) => (
                (e = e.trim()),
                t
                    ? [...document.querySelectorAll(e)]
                    : document.querySelector(e)
            ),
            t = (t, i, s, n = !1) => {
                let r = e(i, n);
                r &&
                    (n
                        ? r.forEach((e) => e.addEventListener(t, s))
                        : r.addEventListener(t, s));
            },
            i = (e, t) => {
                e.addEventListener("scroll", t);
            };
        let s = e("#navbar .scrollto", !0);
        const n = () => {
            let t = window.scrollY + 200;
            s.forEach((i) => {
                if (!i.hash) return;
                let s = e(i.hash);
                s &&
                    (t >= s.offsetTop && t <= s.offsetTop + s.offsetHeight
                        ? i.classList.add("active")
                        : i.classList.remove("active"));
            });
        };
        window.addEventListener("load", n), i(document, n);
        const r = (t) => {
            let i = e("#header").offsetHeight,
                s = e(t).offsetTop;
            window.scrollTo({ top: s - i, behavior: "smooth" });
        };
        let a = e("#header"),
            o = e("#topbar");
        if (a) {
            const e = () => {
                window.scrollY > 100
                    ? (a.classList.add("header-scrolled"),
                      o && o.classList.add("topbar-scrolled"))
                    : (a.classList.remove("header-scrolled"),
                      o && o.classList.remove("topbar-scrolled"));
            };
            window.addEventListener("load", e), i(document, e);
        }
        let l = e(".back-to-top");
        if (l) {
            const e = () => {
                window.scrollY > 100
                    ? l.classList.add("active")
                    : l.classList.remove("active");
            };
            window.addEventListener("load", e), i(document, e);
        }
        t("click", ".mobile-nav-toggle", function (t) {
            e("#navbar").classList.toggle("navbar-mobile"),
                this.classList.toggle("bi-list"),
                this.classList.toggle("bi-x");
        }),
            t(
                "click",
                ".navbar .dropdown > a",
                function (t) {
                    e("#navbar").classList.contains("navbar-mobile") &&
                        (t.preventDefault(),
                        this.nextElementSibling.classList.toggle(
                            "dropdown-active"
                        ));
                },
                !0
            ),
            t(
                "click",
                ".scrollto",
                function (t) {
                    if (e(this.hash)) {
                        t.preventDefault();
                        let i = e("#navbar");
                        if (i.classList.contains("navbar-mobile")) {
                            i.classList.remove("navbar-mobile");
                            let t = e(".mobile-nav-toggle");
                            t.classList.toggle("bi-list"),
                                t.classList.toggle("bi-x");
                        }
                        r(this.hash);
                    }
                },
                !0
            ),
            window.addEventListener("load", () => {
                window.location.hash &&
                    e(window.location.hash) &&
                    r(window.location.hash);
            });
        let d = e("#hero-carousel-indicators");
        e("#heroCarousel .carousel-item", !0).forEach((e, t) => {
            d.innerHTML +=
                0 === t
                    ? "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
                      t +
                      "' class='active'></li>"
                    : "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
                      t +
                      "'></li>";
        }),
            window.addEventListener("load", () => {
                let i = e(".services-container");
                if (i) {
                    let s = new Isotope(i, {
                            itemSelector: ".services-item",
                            layoutMode: "fitRows",
                        }),
                        n = e("#services-flters li", !0);
                    t(
                        "click",
                        "#services-flters li",
                        function (e) {
                            e.preventDefault(),
                                n.forEach(function (e) {
                                    e.classList.remove("filter-active");
                                }),
                                this.classList.add("filter-active"),
                                s.arrange({
                                    filter: this.getAttribute("data-filter"),
                                }),
                                s.on("arrangeComplete", function () {
                                    AOS.refresh();
                                });
                        },
                        !0
                    );
                }
            });
        GLightbox({ selector: ".portfolio-lightbox" });
        new Swiper(".portfolio-details-slider", {
            speed: 400,
            loop: !0,
            autoplay: { delay: 5e3, disableOnInteraction: !1 },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: !0,
            },
        }),
            new Swiper(".testimonials-slider", {
                speed: 600,
                loop: !0,
                autoplay: { delay: 5e3, disableOnInteraction: !1 },
                slidesPerView: "auto",
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets",
                    clickable: !0,
                },
            });
    })();
