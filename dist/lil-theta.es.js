import "react";
import { jsx as m } from "react/jsx-runtime";
function b(r, t) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var e = a.call(r, t || "default");
    if (typeof e != "object")
      return e;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(r);
}
function c(r) {
  var t = b(r, "string");
  return typeof t == "symbol" ? t : String(t);
}
function d(r, t, a) {
  return t = c(t), t in r ? Object.defineProperty(r, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[t] = a, r;
}
function s(r, t) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var e = Object.getOwnPropertySymbols(r);
    t && (e = e.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), a.push.apply(a, e);
  }
  return a;
}
function l(r) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s(Object(a), !0).forEach(function(e) {
      d(r, e, a[e]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : s(Object(a)).forEach(function(e) {
      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
    });
  }
  return r;
}
var O = (r, t, a) => {
  for (var e of Object.keys(r)) {
    var n;
    if (r[e] !== ((n = t[e]) !== null && n !== void 0 ? n : a[e]))
      return !1;
  }
  return !0;
}, h = (r) => {
  var t = (a) => {
    var e = r.defaultClassName, n = l(l({}, r.defaultVariants), a);
    for (var i in n) {
      var o, f = (o = n[i]) !== null && o !== void 0 ? o : r.defaultVariants[i];
      if (f != null) {
        var u = f;
        typeof u == "boolean" && (u = u === !0 ? "true" : "false");
        var y = (
          // @ts-expect-error
          r.variantClassNames[i][u]
        );
        y && (e += " " + y);
      }
    }
    for (var [p, v] of r.compoundVariants)
      O(p, n, r.defaultVariants) && (e += " " + v);
    return e;
  };
  return t.variants = () => Object.keys(r.variantClassNames), t;
}, j = h({ defaultClassName: "_1h59y8yn _1h59y8yr _1h59y8yw _1h59y8y10", variantClassNames: { variant: { primary: "_1h59y8ye _1h59y8y9", secondary: "_1h59y8yf _1h59y8ya", tertiary: "_1h59y8yg _1h59y8yb" } }, defaultVariants: {}, compoundVariants: [] });
const w = ({
  variant: r = "primary",
  children: t,
  onClick: a,
  className: e
}) => /* @__PURE__ */ m(
  "button",
  {
    className: [j({ variant: r }), e].join(" "),
    onClick: a,
    children: t
  }
);
export {
  w as Button
};
