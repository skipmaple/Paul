var e = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : global;
(() => {
    function _toConsumableArray(e) {
        return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread()
    }

    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function _unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" === typeof e) return _arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
        }
    }

    function _iterableToArray(e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function _arrayWithoutHoles(e) {
        if (Array.isArray(e)) return _arrayLikeToArray(e)
    }

    function _arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function _objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? ownKeys(Object(r), !0).forEach((function (t) {
                _defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function _defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function _createClass(e, t, r) {
        t && _defineProperties(e.prototype, t);
        r && _defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var t = {
        alwaysOpen: false,
        activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
        inactiveClasses: "text-gray-500 dark:text-gray-400",
        onOpen: function onOpen() {
        },
        onClose: function onClose() {
        }
    };
    var r = function () {
        function Accordion() {
            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            _classCallCheck(this || e, Accordion);
            (this || e)._items = r;
            (this || e)._options = _objectSpread(_objectSpread({}, t), n);
            this._init()
        }

        _createClass(Accordion, [{
            key: "_init", value: function _init() {
                var t = this || e;
                (this || e)._items.length && (this || e)._items.map((function (e) {
                    e.active && t.open(e.id);
                    e.triggerEl.addEventListener("click", (function () {
                        t.toggle(e.id)
                    }))
                }))
            }
        }, {
            key: "getItem", value: function getItem(t) {
                return (this || e)._items.filter((function (e) {
                    return e.id === t
                }))[0]
            }
        }, {
            key: "open", value: function open(t) {
                var r, n, o = this || e;
                var i = this.getItem(t);
                (this || e)._options.alwaysOpen || (this || e)._items.map((function (e) {
                    if (e !== i) {
                        var t, r;
                        (t = e.triggerEl.classList).remove.apply(t, _toConsumableArray(o._options.activeClasses.split(" ")));
                        (r = e.triggerEl.classList).add.apply(r, _toConsumableArray(o._options.inactiveClasses.split(" ")));
                        e.targetEl.classList.add("hidden");
                        e.triggerEl.setAttribute("aria-expanded", false);
                        e.active = false;
                        e.iconEl && e.iconEl.classList.remove("rotate-180")
                    }
                }));
                (r = i.triggerEl.classList).add.apply(r, _toConsumableArray((this || e)._options.activeClasses.split(" ")));
                (n = i.triggerEl.classList).remove.apply(n, _toConsumableArray((this || e)._options.inactiveClasses.split(" ")));
                i.triggerEl.setAttribute("aria-expanded", true);
                i.targetEl.classList.remove("hidden");
                i.active = true;
                i.iconEl && i.iconEl.classList.add("rotate-180");
                (this || e)._options.onOpen(i)
            }
        }, {
            key: "toggle", value: function toggle(t) {
                var r = this.getItem(t);
                r.active ? this.close(t) : this.open(t);
                (this || e)._options.onToggle(r)
            }
        }, {
            key: "close", value: function close(t) {
                var r, n;
                var o = this.getItem(t);
                (r = o.triggerEl.classList).remove.apply(r, _toConsumableArray((this || e)._options.activeClasses.split(" ")));
                (n = o.triggerEl.classList).add.apply(n, _toConsumableArray((this || e)._options.inactiveClasses.split(" ")));
                o.targetEl.classList.add("hidden");
                o.triggerEl.setAttribute("aria-expanded", false);
                o.active = false;
                o.iconEl && o.iconEl.classList.remove("rotate-180");
                (this || e)._options.onClose(o)
            }
        }]);
        return Accordion
    }();
    window.Accordion = r;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-accordion]").forEach((function (e) {
            var n = e.getAttribute("data-accordion");
            var o = e.getAttribute("data-active-classes");
            var i = e.getAttribute("data-inactive-classes");
            var a = [];
            e.querySelectorAll("[data-accordion-target]").forEach((function (e) {
                var t = {
                    id: e.getAttribute("data-accordion-target"),
                    triggerEl: e,
                    targetEl: document.querySelector(e.getAttribute("data-accordion-target")),
                    iconEl: e.querySelector("[data-accordion-icon]"),
                    active: "true" === e.getAttribute("aria-expanded")
                };
                a.push(t)
            }));
            new r(a, {
                alwaysOpen: "open" === n,
                activeClasses: o || t.activeClasses,
                inactiveClasses: i || t.inactiveClasses
            })
        }))
    }));

    function collapse_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function collapse_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? collapse_ownKeys(Object(r), !0).forEach((function (t) {
                collapse_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : collapse_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function collapse_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function collapse_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function collapse_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function collapse_createClass(e, t, r) {
        t && collapse_defineProperties(e.prototype, t);
        r && collapse_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var n = {
        triggerEl: null, onCollapse: function onCollapse() {
        }, onExpand: function onExpand() {
        }, onToggle: function onToggle() {
        }
    };
    var o = function () {
        function Collapse() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            var r = arguments.length > 1 ? arguments[1] : void 0;
            collapse_classCallCheck(this || e, Collapse);
            (this || e)._targetEl = t;
            (this || e)._triggerEl = r ? r.triggerEl : n.triggerEl;
            (this || e)._options = collapse_objectSpread(collapse_objectSpread({}, n), r);
            (this || e)._visible = false;
            this._init()
        }

        collapse_createClass(Collapse, [{
            key: "_init", value: function _init() {
                var t = this || e;
                if ((this || e)._triggerEl) {
                    (this || e)._triggerEl.hasAttribute("aria-expanded") ? (this || e)._visible = "true" === (this || e)._triggerEl.getAttribute("aria-expanded") : (this || e)._visible = !(this || e)._targetEl.classList.contains("hidden");
                    (this || e)._triggerEl.addEventListener("click", (function () {
                        t._visible ? t.collapse() : t.expand()
                    }))
                }
            }
        }, {
            key: "collapse", value: function collapse() {
                (this || e)._targetEl.classList.add("hidden");
                (this || e)._triggerEl && (this || e)._triggerEl.setAttribute("aria-expanded", "false");
                (this || e)._visible = false;
                (this || e)._options.onCollapse()
            }
        }, {
            key: "expand", value: function expand() {
                (this || e)._targetEl.classList.remove("hidden");
                (this || e)._triggerEl && (this || e)._triggerEl.setAttribute("aria-expanded", "true");
                (this || e)._visible = true;
                (this || e)._options.onExpand()
            }
        }, {
            key: "toggle", value: function toggle() {
                (this || e)._visible ? this.collapse() : this.expand()
            }
        }]);
        return Collapse
    }();
    window.Collapse = o;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-collapse-toggle]").forEach((function (e) {
            var t = document.getElementById(e.getAttribute("data-collapse-toggle"));
            new o(t, {triggerEl: e})
        }))
    }));

    function carousel_toConsumableArray(e) {
        return carousel_arrayWithoutHoles(e) || carousel_iterableToArray(e) || carousel_unsupportedIterableToArray(e) || carousel_nonIterableSpread()
    }

    function carousel_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function carousel_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" === typeof e) return carousel_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? carousel_arrayLikeToArray(e, t) : void 0
        }
    }

    function carousel_iterableToArray(e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function carousel_arrayWithoutHoles(e) {
        if (Array.isArray(e)) return carousel_arrayLikeToArray(e)
    }

    function carousel_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function carousel_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function carousel_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? carousel_ownKeys(Object(r), !0).forEach((function (t) {
                carousel_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : carousel_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function carousel_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function carousel_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function carousel_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function carousel_createClass(e, t, r) {
        t && carousel_defineProperties(e.prototype, t);
        r && carousel_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var i = {
        defaultPosition: 0,
        indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        },
        interval: 3e3,
        onNext: function onNext() {
        },
        onPrev: function onPrev() {
        },
        onChange: function onChange() {
        }
    };
    var a = function () {
        function Carousel() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            carousel_classCallCheck(this || e, Carousel);
            (this || e)._items = t;
            (this || e)._options = carousel_objectSpread(carousel_objectSpread(carousel_objectSpread({}, i), r), {}, {indicators: carousel_objectSpread(carousel_objectSpread({}, i.indicators), r.indicators)});
            (this || e)._activeItem = this.getItem((this || e)._options.defaultPosition);
            (this || e)._indicators = (this || e)._options.indicators.items;
            (this || e)._interval = null;
            this._init()
        }

        carousel_createClass(Carousel, [{
            key: "_init", value: function _init() {
                var t = this || e;
                (this || e)._items.map((function (e) {
                    e.el.classList.add("absolute", "inset-0", "transition-all", "transform")
                }));
                this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0);
                (this || e)._indicators.map((function (e, r) {
                    e.el.addEventListener("click", (function () {
                        t.slideTo(r)
                    }))
                }))
            }
        }, {
            key: "getItem", value: function getItem(t) {
                return (this || e)._items[t]
            }
            /**
             * Slide to the element based on id
             * @param {*} position
             */
        }, {
            key: "slideTo", value: function slideTo(t) {
                var r = (this || e)._items[t];
                var n = {
                    left: 0 === r.position ? (this || e)._items[(this || e)._items.length - 1] : (this || e)._items[r.position - 1],
                    middle: r,
                    right: r.position === (this || e)._items.length - 1 ? (this || e)._items[0] : (this || e)._items[r.position + 1]
                };
                this._rotate(n);
                this._setActiveItem(r.position);
                if ((this || e)._interval) {
                    this.pause();
                    this.cycle()
                }
                (this || e)._options.onChange()
            }
        }, {
            key: "next", value: function next() {
                var t = this._getActiveItem();
                var r = null;
                r = t.position === (this || e)._items.length - 1 ? (this || e)._items[0] : (this || e)._items[t.position + 1];
                this.slideTo(r.position);
                (this || e)._options.onNext()
            }
        }, {
            key: "prev", value: function prev() {
                var t = this._getActiveItem();
                var r = null;
                r = 0 === t.position ? (this || e)._items[(this || e)._items.length - 1] : (this || e)._items[t.position - 1];
                this.slideTo(r.position);
                (this || e)._options.onPrev()
            }
            /**
             * This method applies the transform classes based on the left, middle, and right rotation carousel items
             * @param {*} rotationItems
             */
        }, {
            key: "_rotate", value: function _rotate(t) {
                (this || e)._items.map((function (e) {
                    e.el.classList.add("hidden")
                }));
                t.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
                t.left.el.classList.add("-translate-x-full", "z-10");
                t.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10");
                t.middle.el.classList.add("translate-x-0", "z-20");
                t.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20");
                t.right.el.classList.add("translate-x-full", "z-10")
            }
        }, {
            key: "cycle", value: function cycle() {
                var t = this || e;
                (this || e)._interval = setInterval((function () {
                    t.next()
                }), (this || e)._options.interval)
            }
        }, {
            key: "pause", value: function pause() {
                clearInterval((this || e)._interval)
            }
        }, {
            key: "_getActiveItem", value: function _getActiveItem() {
                return (this || e)._activeItem
            }
            /**
             * Set the currently active item and data attribute
             * @param {*} position
             */
        }, {
            key: "_setActiveItem", value: function _setActiveItem(t) {
                var r = this || e;
                (this || e)._activeItem = (this || e)._items[t];
                if ((this || e)._indicators.length) {
                    var n, o;
                    (this || e)._indicators.map((function (e) {
                        var t, n;
                        e.el.setAttribute("aria-current", "false");
                        (t = e.el.classList).remove.apply(t, carousel_toConsumableArray(r._options.indicators.activeClasses.split(" ")));
                        (n = e.el.classList).add.apply(n, carousel_toConsumableArray(r._options.indicators.inactiveClasses.split(" ")))
                    }));
                    (n = (this || e)._indicators[t].el.classList).add.apply(n, carousel_toConsumableArray((this || e)._options.indicators.activeClasses.split(" ")));
                    (o = (this || e)._indicators[t].el.classList).remove.apply(o, carousel_toConsumableArray((this || e)._options.indicators.inactiveClasses.split(" ")));
                    (this || e)._indicators[t].el.setAttribute("aria-current", "true")
                }
            }
        }]);
        return Carousel
    }();
    window.Carousel = a;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-carousel]").forEach((function (e) {
            var t = e.getAttribute("data-carousel-interval");
            var r = "slide" === e.getAttribute("data-carousel");
            var n = [];
            var o = 0;
            e.querySelectorAll("[data-carousel-item]").length && carousel_toConsumableArray(e.querySelectorAll("[data-carousel-item]")).map((function (e, t) {
                n.push({position: t, el: e});
                "active" === e.getAttribute("data-carousel-item") && (o = t)
            }));
            var s = [];
            e.querySelectorAll("[data-carousel-slide-to]").length && carousel_toConsumableArray(e.querySelectorAll("[data-carousel-slide-to]")).map((function (e) {
                s.push({position: e.getAttribute("data-carousel-slide-to"), el: e})
            }));
            var l = new a(n, {defaultPosition: o, indicators: {items: s}, interval: t || i.interval});
            r && l.cycle();
            var c = e.querySelector("[data-carousel-next]");
            var u = e.querySelector("[data-carousel-prev]");
            c && c.addEventListener("click", (function () {
                l.next()
            }));
            u && u.addEventListener("click", (function () {
                l.prev()
            }))
        }))
    }));

    function dismiss_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function dismiss_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? dismiss_ownKeys(Object(r), !0).forEach((function (t) {
                dismiss_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dismiss_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function dismiss_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function dismiss_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function dismiss_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function dismiss_createClass(e, t, r) {
        t && dismiss_defineProperties(e.prototype, t);
        r && dismiss_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var s = {
        triggerEl: null,
        transition: "transition-opacity",
        duration: 300,
        timing: "ease-out",
        onHide: function onHide() {
        }
    };
    var l = function () {
        function Dismiss() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            dismiss_classCallCheck(this || e, Dismiss);
            (this || e)._targetEl = t;
            (this || e)._triggerEl = r ? r.triggerEl : s.triggerEl;
            (this || e)._options = dismiss_objectSpread(dismiss_objectSpread({}, s), r);
            this._init()
        }

        dismiss_createClass(Dismiss, [{
            key: "_init", value: function _init() {
                var t = this || e;
                (this || e)._triggerEl && (this || e)._triggerEl.addEventListener("click", (function () {
                    t.hide()
                }))
            }
        }, {
            key: "hide", value: function hide() {
                var t = this || e;
                (this || e)._targetEl.classList.add((this || e)._options.transition, "duration-".concat((this || e)._options.duration), (this || e)._options.timing, "opacity-0");
                setTimeout((function () {
                    t._targetEl.classList.add("hidden")
                }), (this || e)._options.duration);
                (this || e)._options.onHide((this || e)._targetEl)
            }
        }]);
        return Dismiss
    }();
    window.Dismiss = l;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-dismiss-target]").forEach((function (e) {
            var t = document.querySelector(e.getAttribute("data-dismiss-target"));
            new l(t, {triggerEl: e})
        }))
    }));

    function getWindow(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function isElement(e) {
        var t = getWindow(e).Element;
        return e instanceof t || e instanceof Element
    }

    function isHTMLElement(e) {
        var t = getWindow(e).HTMLElement;
        return e instanceof t || e instanceof HTMLElement
    }

    function isShadowRoot(e) {
        if ("undefined" === typeof ShadowRoot) return false;
        var t = getWindow(e).ShadowRoot;
        return e instanceof t || e instanceof ShadowRoot
    }

    var c = Math.max;
    var u = Math.min;
    var d = Math.round;

    function getBoundingClientRect(e, t) {
        void 0 === t && (t = false);
        var r = e.getBoundingClientRect();
        var n = 1;
        var o = 1;
        if (isHTMLElement(e) && t) {
            var i = e.offsetHeight;
            var a = e.offsetWidth;
            a > 0 && (n = d(r.width) / a || 1);
            i > 0 && (o = d(r.height) / i || 1)
        }
        return {
            width: r.width / n,
            height: r.height / o,
            top: r.top / o,
            right: r.right / n,
            bottom: r.bottom / o,
            left: r.left / n,
            x: r.left / n,
            y: r.top / o
        }
    }

    function getWindowScroll(e) {
        var t = getWindow(e);
        var r = t.pageXOffset;
        var n = t.pageYOffset;
        return {scrollLeft: r, scrollTop: n}
    }

    function getHTMLElementScroll(e) {
        return {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
    }

    function getNodeScroll(e) {
        return e !== getWindow(e) && isHTMLElement(e) ? getHTMLElementScroll(e) : getWindowScroll(e)
    }

    function getNodeName(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function getDocumentElement(e) {
        return ((isElement(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function getWindowScrollBarX(e) {
        return getBoundingClientRect(getDocumentElement(e)).left + getWindowScroll(e).scrollLeft
    }

    function getComputedStyle(e) {
        return getWindow(e).getComputedStyle(e)
    }

    function isScrollParent(e) {
        var t = getComputedStyle(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + o + n)
    }

    function isElementScaled(e) {
        var t = e.getBoundingClientRect();
        var r = d(t.width) / e.offsetWidth || 1;
        var n = d(t.height) / e.offsetHeight || 1;
        return 1 !== r || 1 !== n
    }

    function getCompositeRect(e, t, r) {
        void 0 === r && (r = false);
        var n = isHTMLElement(t);
        var o = isHTMLElement(t) && isElementScaled(t);
        var i = getDocumentElement(t);
        var a = getBoundingClientRect(e, o);
        var s = {scrollLeft: 0, scrollTop: 0};
        var l = {x: 0, y: 0};
        if (n || !n && !r) {
            ("body" !== getNodeName(t) || isScrollParent(i)) && (s = getNodeScroll(t));
            if (isHTMLElement(t)) {
                l = getBoundingClientRect(t, true);
                l.x += t.clientLeft;
                l.y += t.clientTop
            } else i && (l.x = getWindowScrollBarX(i))
        }
        return {x: a.left + s.scrollLeft - l.x, y: a.top + s.scrollTop - l.y, width: a.width, height: a.height}
    }

    function getLayoutRect(e) {
        var t = getBoundingClientRect(e);
        var r = e.offsetWidth;
        var n = e.offsetHeight;
        Math.abs(t.width - r) <= 1 && (r = t.width);
        Math.abs(t.height - n) <= 1 && (n = t.height);
        return {x: e.offsetLeft, y: e.offsetTop, width: r, height: n}
    }

    function getParentNode(e) {
        return "html" === getNodeName(e) ? e : e.assignedSlot || e.parentNode || (isShadowRoot(e) ? e.host : null) || getDocumentElement(e)
    }

    function getScrollParent(e) {
        return ["html", "body", "#document"].indexOf(getNodeName(e)) >= 0 ? e.ownerDocument.body : isHTMLElement(e) && isScrollParent(e) ? e : getScrollParent(getParentNode(e))
    }

    function listScrollParents(e, t) {
        var r;
        void 0 === t && (t = []);
        var n = getScrollParent(e);
        var o = n === (null == (r = e.ownerDocument) ? void 0 : r.body);
        var i = getWindow(n);
        var a = o ? [i].concat(i.visualViewport || [], isScrollParent(n) ? n : []) : n;
        var s = t.concat(a);
        return o ? s : s.concat(listScrollParents(getParentNode(a)))
    }

    function isTableElement(e) {
        return ["table", "td", "th"].indexOf(getNodeName(e)) >= 0
    }

    function getTrueOffsetParent(e) {
        return isHTMLElement(e) && "fixed" !== getComputedStyle(e).position ? e.offsetParent : null
    }

    function getContainingBlock(e) {
        var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
        var r = -1 !== navigator.userAgent.indexOf("Trident");
        if (r && isHTMLElement(e)) {
            var n = getComputedStyle(e);
            if ("fixed" === n.position) return null
        }
        var o = getParentNode(e);
        while (isHTMLElement(o) && ["html", "body"].indexOf(getNodeName(o)) < 0) {
            var i = getComputedStyle(o);
            if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return o;
            o = o.parentNode
        }
        return null
    }

    function getOffsetParent(e) {
        var t = getWindow(e);
        var r = getTrueOffsetParent(e);
        while (r && isTableElement(r) && "static" === getComputedStyle(r).position) r = getTrueOffsetParent(r);
        return r && ("html" === getNodeName(r) || "body" === getNodeName(r) && "static" === getComputedStyle(r).position) ? t : r || getContainingBlock(e) || t
    }

    var p = "top";
    var f = "bottom";
    var v = "right";
    var g = "left";
    var m = "auto";
    var h = [p, f, v, g];
    var y = "start";
    var b = "end";
    var _ = "clippingParents";
    var w = "viewport";
    var O = "popper";
    var E = "reference";
    var A = h.reduce((function (e, t) {
        return e.concat([t + "-" + y, t + "-" + b])
    }), []);
    var P = [].concat(h, [m]).reduce((function (e, t) {
        return e.concat([t, t + "-" + y, t + "-" + b])
    }), []);
    var j = "beforeRead";
    var C = "read";
    var S = "afterRead";
    var k = "beforeMain";
    var x = "main";
    var T = "afterMain";
    var L = "beforeWrite";
    var I = "write";
    var D = "afterWrite";
    var M = [j, C, S, k, x, T, L, I, D];

    function order(e) {
        var t = new Map;
        var r = new Set;
        var n = [];
        e.forEach((function (e) {
            t.set(e.name, e)
        }));

        function sort(e) {
            r.add(e.name);
            var o = [].concat(e.requires || [], e.requiresIfExists || []);
            o.forEach((function (e) {
                if (!r.has(e)) {
                    var n = t.get(e);
                    n && sort(n)
                }
            }));
            n.push(e)
        }

        e.forEach((function (e) {
            r.has(e.name) || sort(e)
        }));
        return n
    }

    function orderModifiers(e) {
        var t = order(e);
        return M.reduce((function (e, r) {
            return e.concat(t.filter((function (e) {
                return e.phase === r
            })))
        }), [])
    }

    function debounce(e) {
        var t;
        return function () {
            t || (t = new Promise((function (r) {
                Promise.resolve().then((function () {
                    t = void 0;
                    r(e())
                }))
            })));
            return t
        }
    }

    function mergeByName(e) {
        var t = e.reduce((function (e, t) {
            var r = e[t.name];
            e[t.name] = r ? Object.assign({}, r, t, {
                options: Object.assign({}, r.options, t.options),
                data: Object.assign({}, r.data, t.data)
            }) : t;
            return e
        }), {});
        return Object.keys(t).map((function (e) {
            return t[e]
        }))
    }

    var H = {placement: "bottom", modifiers: [], strategy: "absolute"};

    function areValidElements() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return !t.some((function (e) {
            return !(e && "function" === typeof e.getBoundingClientRect)
        }))
    }

    function popperGenerator(e) {
        void 0 === e && (e = {});
        var t = e, r = t.defaultModifiers, n = void 0 === r ? [] : r, o = t.defaultOptions, i = void 0 === o ? H : o;
        return function createPopper(e, t, r) {
            void 0 === r && (r = i);
            var o = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, H, i),
                modifiersData: {},
                elements: {reference: e, popper: t},
                attributes: {},
                styles: {}
            };
            var a = [];
            var s = false;
            var l = {
                state: o, setOptions: function setOptions(r) {
                    var a = "function" === typeof r ? r(o.options) : r;
                    cleanupModifierEffects();
                    o.options = Object.assign({}, i, o.options, a);
                    o.scrollParents = {
                        reference: isElement(e) ? listScrollParents(e) : e.contextElement ? listScrollParents(e.contextElement) : [],
                        popper: listScrollParents(t)
                    };
                    var s = orderModifiers(mergeByName([].concat(n, o.options.modifiers)));
                    o.orderedModifiers = s.filter((function (e) {
                        return e.enabled
                    }));
                    false;
                    runModifierEffects();
                    return l.update()
                }, forceUpdate: function forceUpdate() {
                    if (!s) {
                        var e = o.elements, t = e.reference, r = e.popper;
                        if (areValidElements(t, r)) {
                            o.rects = {
                                reference: getCompositeRect(t, getOffsetParent(r), "fixed" === o.options.strategy),
                                popper: getLayoutRect(r)
                            };
                            o.reset = false;
                            o.placement = o.options.placement;
                            o.orderedModifiers.forEach((function (e) {
                                return o.modifiersData[e.name] = Object.assign({}, e.data)
                            }));
                            for (var n = 0; n < o.orderedModifiers.length; n++) {
                                false;
                                if (true !== o.reset) {
                                    var i = o.orderedModifiers[n], a = i.fn, c = i.options, u = void 0 === c ? {} : c,
                                        d = i.name;
                                    "function" === typeof a && (o = a({
                                        state: o,
                                        options: u,
                                        name: d,
                                        instance: l
                                    }) || o)
                                } else {
                                    o.reset = false;
                                    n = -1
                                }
                            }
                        } else false
                    }
                }, update: debounce((function () {
                    return new Promise((function (e) {
                        l.forceUpdate();
                        e(o)
                    }))
                })), destroy: function destroy() {
                    cleanupModifierEffects();
                    s = true
                }
            };
            if (!areValidElements(e, t)) {
                false;
                return l
            }
            l.setOptions(r).then((function (e) {
                !s && r.onFirstUpdate && r.onFirstUpdate(e)
            }));

            function runModifierEffects() {
                o.orderedModifiers.forEach((function (e) {
                    var t = e.name, r = e.options, n = void 0 === r ? {} : r, i = e.effect;
                    if ("function" === typeof i) {
                        var s = i({state: o, name: t, instance: l, options: n});
                        var c = function noopFn() {
                        };
                        a.push(s || c)
                    }
                }))
            }

            function cleanupModifierEffects() {
                a.forEach((function (e) {
                    return e()
                }));
                a = []
            }

            return l
        }
    }

    var B = {passive: true};

    function effect(e) {
        var t = e.state, r = e.instance, n = e.options;
        var o = n.scroll, i = void 0 === o || o, a = n.resize, s = void 0 === a || a;
        var l = getWindow(t.elements.popper);
        var c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        i && c.forEach((function (e) {
            e.addEventListener("scroll", r.update, B)
        }));
        s && l.addEventListener("resize", r.update, B);
        return function () {
            i && c.forEach((function (e) {
                e.removeEventListener("scroll", r.update, B)
            }));
            s && l.removeEventListener("resize", r.update, B)
        }
    }

    const W = {
        name: "eventListeners", enabled: true, phase: "write", fn: function fn() {
        }, effect: effect, data: {}
    };

    function getBasePlacement(e) {
        return e.split("-")[0]
    }

    function getVariation(e) {
        return e.split("-")[1]
    }

    function getMainAxisFromPlacement(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function computeOffsets(e) {
        var t = e.reference, r = e.element, n = e.placement;
        var o = n ? getBasePlacement(n) : null;
        var i = n ? getVariation(n) : null;
        var a = t.x + t.width / 2 - r.width / 2;
        var s = t.y + t.height / 2 - r.height / 2;
        var l;
        switch (o) {
            case p:
                l = {x: a, y: t.y - r.height};
                break;
            case f:
                l = {x: a, y: t.y + t.height};
                break;
            case v:
                l = {x: t.x + t.width, y: s};
                break;
            case g:
                l = {x: t.x - r.width, y: s};
                break;
            default:
                l = {x: t.x, y: t.y}
        }
        var c = o ? getMainAxisFromPlacement(o) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (i) {
                case y:
                    l[c] = l[c] - (t[u] / 2 - r[u] / 2);
                    break;
                case b:
                    l[c] = l[c] + (t[u] / 2 - r[u] / 2);
                    break;
                default:
            }
        }
        return l
    }

    function popperOffsets(e) {
        var t = e.state, r = e.name;
        t.modifiersData[r] = computeOffsets({
            reference: t.rects.reference,
            element: t.rects.popper,
            strategy: "absolute",
            placement: t.placement
        })
    }

    const R = {name: "popperOffsets", enabled: true, phase: "read", fn: popperOffsets, data: {}};
    var N = {top: "auto", right: "auto", bottom: "auto", left: "auto"};

    function roundOffsetsByDPR(e) {
        var t = e.x, r = e.y;
        var n = window;
        var o = n.devicePixelRatio || 1;
        return {x: d(t * o) / o || 0, y: d(r * o) / o || 0}
    }

    function mapToStyles(e) {
        var t;
        var r = e.popper, n = e.popperRect, o = e.placement, i = e.variation, a = e.offsets, s = e.position,
            l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed;
        var m = a.x, h = void 0 === m ? 0 : m, y = a.y, _ = void 0 === y ? 0 : y;
        var w = "function" === typeof u ? u({x: h, y: _}) : {x: h, y: _};
        h = w.x;
        _ = w.y;
        var O = a.hasOwnProperty("x");
        var E = a.hasOwnProperty("y");
        var A = g;
        var P = p;
        var j = window;
        if (c) {
            var C = getOffsetParent(r);
            var S = "clientHeight";
            var k = "clientWidth";
            if (C === getWindow(r)) {
                C = getDocumentElement(r);
                if ("static" !== getComputedStyle(C).position && "absolute" === s) {
                    S = "scrollHeight";
                    k = "scrollWidth"
                }
            }
            C = C;
            if (o === p || (o === g || o === v) && i === b) {
                P = f;
                var x = d && j.visualViewport ? j.visualViewport.height : C[S];
                _ -= x - n.height;
                _ *= l ? 1 : -1
            }
            if (o === g || (o === p || o === f) && i === b) {
                A = v;
                var T = d && j.visualViewport ? j.visualViewport.width : C[k];
                h -= T - n.width;
                h *= l ? 1 : -1
            }
        }
        var L = Object.assign({position: s}, c && N);
        var I = true === u ? roundOffsetsByDPR({x: h, y: _}) : {x: h, y: _};
        h = I.x;
        _ = I.y;
        if (l) {
            var D;
            return Object.assign({}, L, (D = {}, D[P] = E ? "0" : "", D[A] = O ? "0" : "", D.transform = (j.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + _ + "px)" : "translate3d(" + h + "px, " + _ + "px, 0)", D))
        }
        return Object.assign({}, L, (t = {}, t[P] = E ? _ + "px" : "", t[A] = O ? h + "px" : "", t.transform = "", t))
    }

    function computeStyles(e) {
        var t = e.state, r = e.options;
        var n = r.gpuAcceleration, o = void 0 === n || n, i = r.adaptive, a = void 0 === i || i, s = r.roundOffsets,
            l = void 0 === s || s;
        false;
        var c = {
            placement: getBasePlacement(t.placement),
            variation: getVariation(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: o,
            isFixed: "fixed" === t.options.strategy
        };
        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, mapToStyles(Object.assign({}, c, {
            offsets: t.modifiersData.popperOffsets,
            position: t.options.strategy,
            adaptive: a,
            roundOffsets: l
        }))));
        null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, mapToStyles(Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets: l
        }))));
        t.attributes.popper = Object.assign({}, t.attributes.popper, {"data-popper-placement": t.placement})
    }

    const q = {name: "computeStyles", enabled: true, phase: "beforeWrite", fn: computeStyles, data: {}};

    function applyStyles(e) {
        var t = e.state;
        Object.keys(t.elements).forEach((function (e) {
            var r = t.styles[e] || {};
            var n = t.attributes[e] || {};
            var o = t.elements[e];
            if (isHTMLElement(o) && getNodeName(o)) {
                Object.assign(o.style, r);
                Object.keys(n).forEach((function (e) {
                    var t = n[e];
                    false === t ? o.removeAttribute(e) : o.setAttribute(e, true === t ? "" : t)
                }))
            }
        }))
    }

    function applyStyles_effect(e) {
        var t = e.state;
        var r = {
            popper: {position: t.options.strategy, left: "0", top: "0", margin: "0"},
            arrow: {position: "absolute"},
            reference: {}
        };
        Object.assign(t.elements.popper.style, r.popper);
        t.styles = r;
        t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
        return function () {
            Object.keys(t.elements).forEach((function (e) {
                var n = t.elements[e];
                var o = t.attributes[e] || {};
                var i = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]);
                var a = i.reduce((function (e, t) {
                    e[t] = "";
                    return e
                }), {});
                if (isHTMLElement(n) && getNodeName(n)) {
                    Object.assign(n.style, a);
                    Object.keys(o).forEach((function (e) {
                        n.removeAttribute(e)
                    }))
                }
            }))
        }
    }

    const V = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: applyStyles_effect,
        requires: ["computeStyles"]
    };

    function distanceAndSkiddingToXY(e, t, r) {
        var n = getBasePlacement(e);
        var o = [g, p].indexOf(n) >= 0 ? -1 : 1;
        var i = "function" === typeof r ? r(Object.assign({}, t, {placement: e})) : r, a = i[0], s = i[1];
        a = a || 0;
        s = (s || 0) * o;
        return [g, v].indexOf(n) >= 0 ? {x: s, y: a} : {x: a, y: s}
    }

    function offset(e) {
        var t = e.state, r = e.options, n = e.name;
        var o = r.offset, i = void 0 === o ? [0, 0] : o;
        var a = P.reduce((function (e, r) {
            e[r] = distanceAndSkiddingToXY(r, t.rects, i);
            return e
        }), {});
        var s = a[t.placement], l = s.x, c = s.y;
        if (null != t.modifiersData.popperOffsets) {
            t.modifiersData.popperOffsets.x += l;
            t.modifiersData.popperOffsets.y += c
        }
        t.modifiersData[n] = a
    }

    const K = {name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: offset};
    var F = {left: "right", right: "left", bottom: "top", top: "bottom"};

    function getOppositePlacement(e) {
        return e.replace(/left|right|bottom|top/g, (function (e) {
            return F[e]
        }))
    }

    var U = {start: "end", end: "start"};

    function getOppositeVariationPlacement(e) {
        return e.replace(/start|end/g, (function (e) {
            return U[e]
        }))
    }

    function getViewportRect(e) {
        var t = getWindow(e);
        var r = getDocumentElement(e);
        var n = t.visualViewport;
        var o = r.clientWidth;
        var i = r.clientHeight;
        var a = 0;
        var s = 0;
        if (n) {
            o = n.width;
            i = n.height;
            if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                a = n.offsetLeft;
                s = n.offsetTop
            }
        }
        return {width: o, height: i, x: a + getWindowScrollBarX(e), y: s}
    }

    function getDocumentRect(e) {
        var t;
        var r = getDocumentElement(e);
        var n = getWindowScroll(e);
        var o = null == (t = e.ownerDocument) ? void 0 : t.body;
        var i = c(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0);
        var a = c(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
        var s = -n.scrollLeft + getWindowScrollBarX(e);
        var l = -n.scrollTop;
        "rtl" === getComputedStyle(o || r).direction && (s += c(r.clientWidth, o ? o.clientWidth : 0) - i);
        return {width: i, height: a, x: s, y: l}
    }

    function contains(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return true;
        if (r && isShadowRoot(r)) {
            var n = t;
            do {
                if (n && e.isSameNode(n)) return true;
                n = n.parentNode || n.host
            } while (n)
        }
        return false
    }

    function rectToClientRect(e) {
        return Object.assign({}, e, {left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height})
    }

    function getInnerBoundingClientRect(e) {
        var t = getBoundingClientRect(e);
        t.top = t.top + e.clientTop;
        t.left = t.left + e.clientLeft;
        t.bottom = t.top + e.clientHeight;
        t.right = t.left + e.clientWidth;
        t.width = e.clientWidth;
        t.height = e.clientHeight;
        t.x = t.left;
        t.y = t.top;
        return t
    }

    function getClientRectFromMixedType(e, t) {
        return t === w ? rectToClientRect(getViewportRect(e)) : isElement(t) ? getInnerBoundingClientRect(t) : rectToClientRect(getDocumentRect(getDocumentElement(e)))
    }

    function getClippingParents(e) {
        var t = listScrollParents(getParentNode(e));
        var r = ["absolute", "fixed"].indexOf(getComputedStyle(e).position) >= 0;
        var n = r && isHTMLElement(e) ? getOffsetParent(e) : e;
        return isElement(n) ? t.filter((function (e) {
            return isElement(e) && contains(e, n) && "body" !== getNodeName(e)
        })) : []
    }

    function getClippingRect(e, t, r) {
        var n = "clippingParents" === t ? getClippingParents(e) : [].concat(t);
        var o = [].concat(n, [r]);
        var i = o[0];
        var a = o.reduce((function (t, r) {
            var n = getClientRectFromMixedType(e, r);
            t.top = c(n.top, t.top);
            t.right = u(n.right, t.right);
            t.bottom = u(n.bottom, t.bottom);
            t.left = c(n.left, t.left);
            return t
        }), getClientRectFromMixedType(e, i));
        a.width = a.right - a.left;
        a.height = a.bottom - a.top;
        a.x = a.left;
        a.y = a.top;
        return a
    }

    function getFreshSideObject() {
        return {top: 0, right: 0, bottom: 0, left: 0}
    }

    function mergePaddingObject(e) {
        return Object.assign({}, getFreshSideObject(), e)
    }

    function expandToHashMap(e, t) {
        return t.reduce((function (t, r) {
            t[r] = e;
            return t
        }), {})
    }

    function detectOverflow(e, t) {
        void 0 === t && (t = {});
        var r = t, n = r.placement, o = void 0 === n ? e.placement : n, i = r.boundary, a = void 0 === i ? _ : i,
            s = r.rootBoundary, l = void 0 === s ? w : s, c = r.elementContext, u = void 0 === c ? O : c,
            d = r.altBoundary, g = void 0 !== d && d, m = r.padding, y = void 0 === m ? 0 : m;
        var b = mergePaddingObject("number" !== typeof y ? y : expandToHashMap(y, h));
        var A = u === O ? E : O;
        var P = e.rects.popper;
        var j = e.elements[g ? A : u];
        var C = getClippingRect(isElement(j) ? j : j.contextElement || getDocumentElement(e.elements.popper), a, l);
        var S = getBoundingClientRect(e.elements.reference);
        var k = computeOffsets({reference: S, element: P, strategy: "absolute", placement: o});
        var x = rectToClientRect(Object.assign({}, P, k));
        var T = u === O ? x : S;
        var L = {
            top: C.top - T.top + b.top,
            bottom: T.bottom - C.bottom + b.bottom,
            left: C.left - T.left + b.left,
            right: T.right - C.right + b.right
        };
        var I = e.modifiersData.offset;
        if (u === O && I) {
            var D = I[o];
            Object.keys(L).forEach((function (e) {
                var t = [v, f].indexOf(e) >= 0 ? 1 : -1;
                var r = [p, f].indexOf(e) >= 0 ? "y" : "x";
                L[e] += D[r] * t
            }))
        }
        return L
    }

    function computeAutoPlacement(e, t) {
        void 0 === t && (t = {});
        var r = t, n = r.placement, o = r.boundary, i = r.rootBoundary, a = r.padding, s = r.flipVariations,
            l = r.allowedAutoPlacements, c = void 0 === l ? P : l;
        var u = getVariation(n);
        var d = u ? s ? A : A.filter((function (e) {
            return getVariation(e) === u
        })) : h;
        var p = d.filter((function (e) {
            return c.indexOf(e) >= 0
        }));
        if (0 === p.length) {
            p = d;
            false
        }
        var f = p.reduce((function (t, r) {
            t[r] = detectOverflow(e, {placement: r, boundary: o, rootBoundary: i, padding: a})[getBasePlacement(r)];
            return t
        }), {});
        return Object.keys(f).sort((function (e, t) {
            return f[e] - f[t]
        }))
    }

    function getExpandedFallbackPlacements(e) {
        if (getBasePlacement(e) === m) return [];
        var t = getOppositePlacement(e);
        return [getOppositeVariationPlacement(e), t, getOppositeVariationPlacement(t)]
    }

    function flip(e) {
        var t = e.state, r = e.options, n = e.name;
        if (!t.modifiersData[n]._skip) {
            var o = r.mainAxis, i = void 0 === o || o, a = r.altAxis, s = void 0 === a || a, l = r.fallbackPlacements,
                c = r.padding, u = r.boundary, d = r.rootBoundary, h = r.altBoundary, b = r.flipVariations,
                _ = void 0 === b || b, w = r.allowedAutoPlacements;
            var O = t.options.placement;
            var E = getBasePlacement(O);
            var A = E === O;
            var P = l || (A || !_ ? [getOppositePlacement(O)] : getExpandedFallbackPlacements(O));
            var j = [O].concat(P).reduce((function (e, r) {
                return e.concat(getBasePlacement(r) === m ? computeAutoPlacement(t, {
                    placement: r,
                    boundary: u,
                    rootBoundary: d,
                    padding: c,
                    flipVariations: _,
                    allowedAutoPlacements: w
                }) : r)
            }), []);
            var C = t.rects.reference;
            var S = t.rects.popper;
            var k = new Map;
            var x = true;
            var T = j[0];
            for (var L = 0; L < j.length; L++) {
                var I = j[L];
                var D = getBasePlacement(I);
                var M = getVariation(I) === y;
                var H = [p, f].indexOf(D) >= 0;
                var B = H ? "width" : "height";
                var W = detectOverflow(t, {placement: I, boundary: u, rootBoundary: d, altBoundary: h, padding: c});
                var R = H ? M ? v : g : M ? f : p;
                C[B] > S[B] && (R = getOppositePlacement(R));
                var N = getOppositePlacement(R);
                var q = [];
                i && q.push(W[D] <= 0);
                s && q.push(W[R] <= 0, W[N] <= 0);
                if (q.every((function (e) {
                    return e
                }))) {
                    T = I;
                    x = false;
                    break
                }
                k.set(I, q)
            }
            if (x) {
                var V = _ ? 3 : 1;
                var K = function _loop(e) {
                    var t = j.find((function (t) {
                        var r = k.get(t);
                        if (r) return r.slice(0, e).every((function (e) {
                            return e
                        }))
                    }));
                    if (t) {
                        T = t;
                        return "break"
                    }
                };
                for (var F = V; F > 0; F--) {
                    var U = K(F);
                    if ("break" === U) break
                }
            }
            if (t.placement !== T) {
                t.modifiersData[n]._skip = true;
                t.placement = T;
                t.reset = true
            }
        }
    }

    const z = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {_skip: false}
    };

    function getAltAxis(e) {
        return "x" === e ? "y" : "x"
    }

    function within(e, t, r) {
        return c(e, u(t, r))
    }

    function withinMaxClamp(e, t, r) {
        var n = within(e, t, r);
        return n > r ? r : n
    }

    function preventOverflow(e) {
        var t = e.state, r = e.options, n = e.name;
        var o = r.mainAxis, i = void 0 === o || o, a = r.altAxis, s = void 0 !== a && a, l = r.boundary,
            d = r.rootBoundary, m = r.altBoundary, h = r.padding, b = r.tether, _ = void 0 === b || b,
            w = r.tetherOffset, O = void 0 === w ? 0 : w;
        var E = detectOverflow(t, {boundary: l, rootBoundary: d, padding: h, altBoundary: m});
        var A = getBasePlacement(t.placement);
        var P = getVariation(t.placement);
        var j = !P;
        var C = getMainAxisFromPlacement(A);
        var S = getAltAxis(C);
        var k = t.modifiersData.popperOffsets;
        var x = t.rects.reference;
        var T = t.rects.popper;
        var L = "function" === typeof O ? O(Object.assign({}, t.rects, {placement: t.placement})) : O;
        var I = "number" === typeof L ? {mainAxis: L, altAxis: L} : Object.assign({mainAxis: 0, altAxis: 0}, L);
        var D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null;
        var M = {x: 0, y: 0};
        if (k) {
            if (i) {
                var H;
                var B = "y" === C ? p : g;
                var W = "y" === C ? f : v;
                var R = "y" === C ? "height" : "width";
                var N = k[C];
                var q = N + E[B];
                var V = N - E[W];
                var K = _ ? -T[R] / 2 : 0;
                var F = P === y ? x[R] : T[R];
                var U = P === y ? -T[R] : -x[R];
                var z = t.elements.arrow;
                var X = _ && z ? getLayoutRect(z) : {width: 0, height: 0};
                var $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : getFreshSideObject();
                var Y = $[B];
                var G = $[W];
                var J = within(0, x[R], X[R]);
                var Q = j ? x[R] / 2 - K - J - Y - I.mainAxis : F - J - Y - I.mainAxis;
                var Z = j ? -x[R] / 2 + K + J + G + I.mainAxis : U + J + G + I.mainAxis;
                var ee = t.elements.arrow && getOffsetParent(t.elements.arrow);
                var te = ee ? "y" === C ? ee.clientTop || 0 : ee.clientLeft || 0 : 0;
                var re = null != (H = null == D ? void 0 : D[C]) ? H : 0;
                var ne = N + Q - re - te;
                var oe = N + Z - re;
                var ie = within(_ ? u(q, ne) : q, N, _ ? c(V, oe) : V);
                k[C] = ie;
                M[C] = ie - N
            }
            if (s) {
                var ae;
                var se = "x" === C ? p : g;
                var le = "x" === C ? f : v;
                var ce = k[S];
                var ue = "y" === S ? "height" : "width";
                var de = ce + E[se];
                var pe = ce - E[le];
                var fe = -1 !== [p, g].indexOf(A);
                var ve = null != (ae = null == D ? void 0 : D[S]) ? ae : 0;
                var ge = fe ? de : ce - x[ue] - T[ue] - ve + I.altAxis;
                var me = fe ? ce + x[ue] + T[ue] - ve - I.altAxis : pe;
                var he = _ && fe ? withinMaxClamp(ge, ce, me) : within(_ ? ge : de, ce, _ ? me : pe);
                k[S] = he;
                M[S] = he - ce
            }
            t.modifiersData[n] = M
        }
    }

    const X = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
    };
    var $ = function toPaddingObject(e, t) {
        e = "function" === typeof e ? e(Object.assign({}, t.rects, {placement: t.placement})) : e;
        return mergePaddingObject("number" !== typeof e ? e : expandToHashMap(e, h))
    };

    function arrow(e) {
        var t;
        var r = e.state, n = e.name, o = e.options;
        var i = r.elements.arrow;
        var a = r.modifiersData.popperOffsets;
        var s = getBasePlacement(r.placement);
        var l = getMainAxisFromPlacement(s);
        var c = [g, v].indexOf(s) >= 0;
        var u = c ? "height" : "width";
        if (i && a) {
            var d = $(o.padding, r);
            var m = getLayoutRect(i);
            var h = "y" === l ? p : g;
            var y = "y" === l ? f : v;
            var b = r.rects.reference[u] + r.rects.reference[l] - a[l] - r.rects.popper[u];
            var _ = a[l] - r.rects.reference[l];
            var w = getOffsetParent(i);
            var O = w ? "y" === l ? w.clientHeight || 0 : w.clientWidth || 0 : 0;
            var E = b / 2 - _ / 2;
            var A = d[h];
            var P = O - m[u] - d[y];
            var j = O / 2 - m[u] / 2 + E;
            var C = within(A, j, P);
            var S = l;
            r.modifiersData[n] = (t = {}, t[S] = C, t.centerOffset = C - j, t)
        }
    }

    function arrow_effect(e) {
        var t = e.state, r = e.options;
        var n = r.element, o = void 0 === n ? "[data-popper-arrow]" : n;
        if (null != o) {
            if ("string" === typeof o) {
                o = t.elements.popper.querySelector(o);
                if (!o) return
            }
            false;
            !!contains(t.elements.popper, o) && (t.elements.arrow = o)
        }
    }

    const Y = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect: arrow_effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function getSideOffsets(e, t, r) {
        void 0 === r && (r = {x: 0, y: 0});
        return {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x
        }
    }

    function isAnySideFullyClipped(e) {
        return [p, v, f, g].some((function (t) {
            return e[t] >= 0
        }))
    }

    function hide(e) {
        var t = e.state, r = e.name;
        var n = t.rects.reference;
        var o = t.rects.popper;
        var i = t.modifiersData.preventOverflow;
        var a = detectOverflow(t, {elementContext: "reference"});
        var s = detectOverflow(t, {altBoundary: true});
        var l = getSideOffsets(a, n);
        var c = getSideOffsets(s, o, i);
        var u = isAnySideFullyClipped(l);
        var d = isAnySideFullyClipped(c);
        t.modifiersData[r] = {
            referenceClippingOffsets: l,
            popperEscapeOffsets: c,
            isReferenceHidden: u,
            hasPopperEscaped: d
        };
        t.attributes.popper = Object.assign({}, t.attributes.popper, {
            "data-popper-reference-hidden": u,
            "data-popper-escaped": d
        })
    }

    const G = {name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hide};
    var J = [W, R, q, V, K, z, X, Y, G];
    var Q = popperGenerator({defaultModifiers: J});

    function dropdown_toConsumableArray(e) {
        return dropdown_arrayWithoutHoles(e) || dropdown_iterableToArray(e) || dropdown_unsupportedIterableToArray(e) || dropdown_nonIterableSpread()
    }

    function dropdown_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function dropdown_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" === typeof e) return dropdown_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? dropdown_arrayLikeToArray(e, t) : void 0
        }
    }

    function dropdown_iterableToArray(e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function dropdown_arrayWithoutHoles(e) {
        if (Array.isArray(e)) return dropdown_arrayLikeToArray(e)
    }

    function dropdown_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function dropdown_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function dropdown_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? dropdown_ownKeys(Object(r), !0).forEach((function (t) {
                dropdown_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : dropdown_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function dropdown_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function dropdown_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function dropdown_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function dropdown_createClass(e, t, r) {
        t && dropdown_defineProperties(e.prototype, t);
        r && dropdown_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var Z = {
        placement: "bottom", triggerType: "click", onShow: function onShow() {
        }, onHide: function onHide() {
        }
    };
    var ee = function () {
        function Dropdown() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            dropdown_classCallCheck(this || e, Dropdown);
            (this || e)._targetEl = t;
            (this || e)._triggerEl = r;
            (this || e)._options = dropdown_objectSpread(dropdown_objectSpread({}, Z), n);
            (this || e)._popperInstance = this._createPopperInstace();
            (this || e)._visible = false;
            this._init()
        }

        dropdown_createClass(Dropdown, [{
            key: "_init", value: function _init() {
                var t = this || e;
                (this || e)._triggerEl && (this || e)._triggerEl.addEventListener("click", (function () {
                    t.toggle()
                }))
            }
        }, {
            key: "_createPopperInstace", value: function _createPopperInstace() {
                return Q((this || e)._triggerEl, (this || e)._targetEl, {
                    placement: (this || e)._options.placement,
                    modifiers: [{name: "offset", options: {offset: [0, 10]}}]
                })
            }
        }, {
            key: "_handleClickOutside", value: function _handleClickOutside(t, r) {
                var n = t.target;
                n === r || r.contains(n) || (this || e)._triggerEl.contains(n) || !(this || e)._visible || this.hide();
                document.body.removeEventListener("click", (this || e)._handleClickOutside, true)
            }
        }, {
            key: "toggle", value: function toggle() {
                if ((this || e)._visible) {
                    this.hide();
                    document.body.removeEventListener("click", (this || e)._handleClickOutside, true)
                } else this.show()
            }
        }, {
            key: "show", value: function show() {
                var t = this || e;
                (this || e)._targetEl.classList.remove("hidden");
                (this || e)._targetEl.classList.add("block");
                (this || e)._popperInstance.setOptions((function (e) {
                    return dropdown_objectSpread(dropdown_objectSpread({}, e), {}, {
                        modifiers: [].concat(dropdown_toConsumableArray(e.modifiers), [{
                            name: "eventListeners",
                            enabled: true
                        }])
                    })
                }));
                document.body.addEventListener("click", (function (e) {
                    t._handleClickOutside(e, t._targetEl)
                }), true);
                (this || e)._popperInstance.update();
                (this || e)._visible = true;
                (this || e)._options.onShow()
            }
        }, {
            key: "hide", value: function hide() {
                (this || e)._targetEl.classList.remove("block");
                (this || e)._targetEl.classList.add("hidden");
                (this || e)._popperInstance.setOptions((function (e) {
                    return dropdown_objectSpread(dropdown_objectSpread({}, e), {}, {
                        modifiers: [].concat(dropdown_toConsumableArray(e.modifiers), [{
                            name: "eventListeners",
                            enabled: false
                        }])
                    })
                }));
                (this || e)._visible = false;
                (this || e)._options.onHide()
            }
        }]);
        return Dropdown
    }();
    window.Dropdown = ee;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-dropdown-toggle]").forEach((function (e) {
            var t = document.getElementById(e.getAttribute("data-dropdown-toggle"));
            var r = e.getAttribute("data-dropdown-placement");
            new ee(t, e, {placement: r || Z.placement})
        }))
    }));

    function modal_toConsumableArray(e) {
        return modal_arrayWithoutHoles(e) || modal_iterableToArray(e) || modal_unsupportedIterableToArray(e) || modal_nonIterableSpread()
    }

    function modal_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function modal_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" === typeof e) return modal_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? modal_arrayLikeToArray(e, t) : void 0
        }
    }

    function modal_iterableToArray(e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function modal_arrayWithoutHoles(e) {
        if (Array.isArray(e)) return modal_arrayLikeToArray(e)
    }

    function modal_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function modal_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function modal_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? modal_ownKeys(Object(r), !0).forEach((function (t) {
                modal_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : modal_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function modal_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function modal_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function modal_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function modal_createClass(e, t, r) {
        t && modal_defineProperties(e.prototype, t);
        r && modal_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var te = {
        placement: "center",
        backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        onHide: function onHide() {
        },
        onShow: function onShow() {
        },
        onToggle: function onToggle() {
        }
    };
    var re = function () {
        function Modal() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            modal_classCallCheck(this || e, Modal);
            (this || e)._targetEl = t;
            (this || e)._options = modal_objectSpread(modal_objectSpread({}, te), r);
            (this || e)._isHidden = true;
            this._init()
        }

        modal_createClass(Modal, [{
            key: "_init", value: function _init() {
                var t = this || e;
                this._getPlacementClasses().map((function (e) {
                    t._targetEl.classList.add(e)
                }))
            }
        }, {
            key: "_createBackdrop", value: function _createBackdrop() {
                if ((this || e)._isHidden) {
                    var t;
                    var r = document.createElement("div");
                    r.setAttribute("modal-backdrop", "");
                    (t = r.classList).add.apply(t, modal_toConsumableArray((this || e)._options.backdropClasses.split(" ")));
                    document.querySelector("body").append(r)
                }
            }
        }, {
            key: "_destroyBackdropEl", value: function _destroyBackdropEl() {
                (this || e)._isHidden || document.querySelector("[modal-backdrop]").remove()
            }
        }, {
            key: "_getPlacementClasses", value: function _getPlacementClasses() {
                switch ((this || e)._options.placement) {
                    case"top-left":
                        return ["justify-start", "items-start"];
                    case"top-center":
                        return ["justify-center", "items-start"];
                    case"top-right":
                        return ["justify-end", "items-start"];
                    case"center-left":
                        return ["justify-start", "items-center"];
                    case"center":
                        return ["justify-center", "items-center"];
                    case"center-right":
                        return ["justify-end", "items-center"];
                    case"bottom-left":
                        return ["justify-start", "items-end"];
                    case"bottom-center":
                        return ["justify-center", "items-end"];
                    case"bottom-right":
                        return ["justify-end", "items-end"];
                    default:
                        return ["justify-center", "items-center"]
                }
            }
        }, {
            key: "toggle", value: function toggle() {
                (this || e)._isHidden ? this.show() : this.hide();
                (this || e)._options.onToggle()
            }
        }, {
            key: "show", value: function show() {
                (this || e)._targetEl.classList.add("flex");
                (this || e)._targetEl.classList.remove("hidden");
                (this || e)._targetEl.setAttribute("aria-modal", "true");
                (this || e)._targetEl.setAttribute("role", "dialog");
                (this || e)._targetEl.removeAttribute("aria-hidden");
                this._createBackdrop();
                (this || e)._isHidden = false;
                (this || e)._options.onShow()
            }
        }, {
            key: "hide", value: function hide() {
                (this || e)._targetEl.classList.add("hidden");
                (this || e)._targetEl.classList.remove("flex");
                (this || e)._targetEl.setAttribute("aria-hidden", "true");
                (this || e)._targetEl.removeAttribute("aria-modal");
                (this || e)._targetEl.removeAttribute("role");
                this._destroyBackdropEl();
                (this || e)._isHidden = true;
                (this || e)._options.onHide()
            }
        }]);
        return Modal
    }();
    window.Modal = re;
    var ne = function getModalInstance(e, t) {
        return !!t.some((function (t) {
            return t.id === e
        })) && t.find((function (t) {
            return t.id === e
        }))
    };
    document.addEventListener("turbo:load", (function () {
        var e = [];
        document.querySelectorAll("[data-modal-toggle]").forEach((function (t) {
            var r = t.getAttribute("data-modal-toggle");
            var n = document.getElementById(r);
            var o = n.getAttribute("data-modal-placement");
            n && (n.hasAttribute("aria-hidden") || n.hasAttribute("aria-modal") || n.setAttribute("aria-hidden", "true"));
            var i = null;
            if (ne(r, e)) {
                i = ne(r, e);
                i = i.object
            } else {
                i = new re(n, {placement: o || te.placement});
                e.push({id: r, object: i})
            }
            t.addEventListener("click", (function () {
                i.toggle()
            }))
        }))
    }));

    function tabs_toConsumableArray(e) {
        return tabs_arrayWithoutHoles(e) || tabs_iterableToArray(e) || tabs_unsupportedIterableToArray(e) || tabs_nonIterableSpread()
    }

    function tabs_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function tabs_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" === typeof e) return tabs_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tabs_arrayLikeToArray(e, t) : void 0
        }
    }

    function tabs_iterableToArray(e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function tabs_arrayWithoutHoles(e) {
        if (Array.isArray(e)) return tabs_arrayLikeToArray(e)
    }

    function tabs_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function tabs_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function tabs_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tabs_ownKeys(Object(r), !0).forEach((function (t) {
                tabs_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tabs_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function tabs_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function tabs_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function tabs_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function tabs_createClass(e, t, r) {
        t && tabs_defineProperties(e.prototype, t);
        r && tabs_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var oe = {
        defaultTabId: null,
        activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500",
        inactiveClasses: "text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
        onShow: function onShow() {
        }
    };
    var ie = function () {
        function Tabs() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            tabs_classCallCheck(this || e, Tabs);
            (this || e)._items = t;
            (this || e)._activeTab = r ? this.getTab(r.defaultTabId) : null;
            (this || e)._options = tabs_objectSpread(tabs_objectSpread({}, oe), r);
            this._init()
        }

        tabs_createClass(Tabs, [{
            key: "_init", value: function _init() {
                var t = this || e;
                if ((this || e)._items.length) {
                    (this || e)._activeTab || this._setActiveTab((this || e)._items[0]);
                    this.show((this || e)._activeTab.id, true);
                    (this || e)._items.map((function (e) {
                        e.triggerEl.addEventListener("click", (function () {
                            t.show(e.id)
                        }))
                    }))
                }
            }
        }, {
            key: "getActiveTab", value: function getActiveTab() {
                return (this || e)._activeTab
            }
        }, {
            key: "_setActiveTab", value: function _setActiveTab(t) {
                (this || e)._activeTab = t
            }
        }, {
            key: "getTab", value: function getTab(t) {
                return (this || e)._items.filter((function (e) {
                    return e.id === t
                }))[0]
            }
        }, {
            key: "show", value: function show(t) {
                var r, n, o = this || e;
                var i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                var a = this.getTab(t);
                if (a !== (this || e)._activeTab || i) {
                    (this || e)._items.map((function (e) {
                        if (e !== a) {
                            var t, r;
                            (t = e.triggerEl.classList).remove.apply(t, tabs_toConsumableArray(o._options.activeClasses.split(" ")));
                            (r = e.triggerEl.classList).add.apply(r, tabs_toConsumableArray(o._options.inactiveClasses.split(" ")));
                            e.targetEl.classList.add("hidden");
                            e.triggerEl.setAttribute("aria-selected", false)
                        }
                    }));
                    (r = a.triggerEl.classList).add.apply(r, tabs_toConsumableArray((this || e)._options.activeClasses.split(" ")));
                    (n = a.triggerEl.classList).remove.apply(n, tabs_toConsumableArray((this || e)._options.inactiveClasses.split(" ")));
                    a.triggerEl.setAttribute("aria-selected", true);
                    a.targetEl.classList.remove("hidden");
                    this._setActiveTab(a);
                    (this || e)._options.onShow()
                }
            }
        }]);
        return Tabs
    }();
    window.Tabs = ie;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-tabs-toggle]").forEach((function (e) {
            var t = [];
            var r = null;
            e.querySelectorAll('[role="tab"]').forEach((function (e) {
                var n = "true" === e.getAttribute("aria-selected");
                var o = {
                    id: e.getAttribute("data-tabs-target"),
                    triggerEl: e,
                    targetEl: document.querySelector(e.getAttribute("data-tabs-target"))
                };
                t.push(o);
                n && (r = o.id)
            }));
            new ie(t, {defaultTabId: r})
        }))
    }));

    function tooltip_toConsumableArray(e) {
        return tooltip_arrayWithoutHoles(e) || tooltip_iterableToArray(e) || tooltip_unsupportedIterableToArray(e) || tooltip_nonIterableSpread()
    }

    function tooltip_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function tooltip_unsupportedIterableToArray(e, t) {
        if (e) {
            if ("string" === typeof e) return tooltip_arrayLikeToArray(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            return "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? tooltip_arrayLikeToArray(e, t) : void 0
        }
    }

    function tooltip_iterableToArray(e) {
        if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function tooltip_arrayWithoutHoles(e) {
        if (Array.isArray(e)) return tooltip_arrayLikeToArray(e)
    }

    function tooltip_arrayLikeToArray(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
    }

    function tooltip_ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t && (n = n.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function tooltip_objectSpread(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2 ? tooltip_ownKeys(Object(r), !0).forEach((function (t) {
                tooltip_defineProperty(e, t, r[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tooltip_ownKeys(Object(r)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
            }))
        }
        return e
    }

    function tooltip_defineProperty(e, t, r) {
        t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
        }) : e[t] = r;
        return e
    }

    function tooltip_classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function tooltip_defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || false;
            n.configurable = true;
            "value" in n && (n.writable = true);
            Object.defineProperty(e, n.key, n)
        }
    }

    function tooltip_createClass(e, t, r) {
        t && tooltip_defineProperties(e.prototype, t);
        r && tooltip_defineProperties(e, r);
        Object.defineProperty(e, "prototype", {writable: false});
        return e
    }

    var ae = {
        placement: "top", triggerType: "hover", onShow: function onShow() {
        }, onHide: function onHide() {
        }
    };
    var se = function () {
        function Tooltip() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            tooltip_classCallCheck(this || e, Tooltip);
            (this || e)._targetEl = t;
            (this || e)._triggerEl = r;
            (this || e)._options = tooltip_objectSpread(tooltip_objectSpread({}, ae), n);
            (this || e)._popperInstance = this._createPopperInstace();
            this._init()
        }

        tooltip_createClass(Tooltip, [{
            key: "_init", value: function _init() {
                var t = this || e;
                if ((this || e)._triggerEl) {
                    var r = this._getTriggerEvents();
                    r.showEvents.forEach((function (e) {
                        t._triggerEl.addEventListener(e, (function () {
                            t.show()
                        }))
                    }));
                    r.hideEvents.forEach((function (e) {
                        t._triggerEl.addEventListener(e, (function () {
                            t.hide()
                        }))
                    }))
                }
            }
        }, {
            key: "_createPopperInstace", value: function _createPopperInstace() {
                return Q((this || e)._triggerEl, (this || e)._targetEl, {
                    placement: (this || e)._options.placement,
                    modifiers: [{name: "offset", options: {offset: [0, 8]}}]
                })
            }
        }, {
            key: "_getTriggerEvents", value: function _getTriggerEvents() {
                switch ((this || e)._options.triggerType) {
                    case"hover":
                        return {showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"]};
                    case"click":
                        return {showEvents: ["click", "focus"], hideEvents: ["focusout", "blur"]};
                    default:
                        return {showEvents: ["mouseenter", "focus"], hideEvents: ["mouseleave", "blur"]}
                }
            }
        }, {
            key: "show", value: function show() {
                (this || e)._targetEl.classList.remove("opacity-0", "invisible");
                (this || e)._targetEl.classList.add("opacity-100", "visible");
                (this || e)._popperInstance.setOptions((function (e) {
                    return tooltip_objectSpread(tooltip_objectSpread({}, e), {}, {
                        modifiers: [].concat(tooltip_toConsumableArray(e.modifiers), [{
                            name: "eventListeners",
                            enabled: true
                        }])
                    })
                }));
                (this || e)._popperInstance.update();
                (this || e)._options.onShow()
            }
        }, {
            key: "hide", value: function hide() {
                (this || e)._targetEl.classList.remove("opacity-100", "visible");
                (this || e)._targetEl.classList.add("opacity-0", "invisible");
                (this || e)._popperInstance.setOptions((function (e) {
                    return tooltip_objectSpread(tooltip_objectSpread({}, e), {}, {
                        modifiers: [].concat(tooltip_toConsumableArray(e.modifiers), [{
                            name: "eventListeners",
                            enabled: false
                        }])
                    })
                }));
                (this || e)._options.onHide()
            }
        }]);
        return Tooltip
    }();
    window.Tooltip = se;
    document.addEventListener("turbo:load", (function () {
        document.querySelectorAll("[data-tooltip-target]").forEach((function (e) {
            var t = document.getElementById(e.getAttribute("data-tooltip-target"));
            var r = e.getAttribute("data-tooltip-trigger");
            var n = e.getAttribute("data-tooltip-placement");
            new se(t, e, {placement: n || ae.placement, triggerType: r || ae.triggerType})
        }))
    }))
})();
var t = {};
export {t as default};

