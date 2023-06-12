import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useEffect, useMemo, PureComponent, useCallback, useRef, createElement, createContext, useContext } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createPortal } from 'react-dom';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  };
  return __assign.apply(this, arguments);
};

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

var _path$o;
function _extends$u() { _extends$u = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$u.apply(this, arguments); }
var SvgArrowDown = function SvgArrowDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$u({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$o || (_path$o = /*#__PURE__*/React.createElement("path", {
    d: "M6.00065 1.33331V10.6666M6.00065 10.6666L10.6673 5.99998M6.00065 10.6666L1.33398 5.99998",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$n;
function _extends$t() { _extends$t = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$t.apply(this, arguments); }
var SvgArrowHeadDown = function SvgArrowHeadDown(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$t({
    width: 12,
    height: 8,
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$n || (_path$n = /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L6 6.5L11 1.5",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$m;
function _extends$s() { _extends$s = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$s.apply(this, arguments); }
var SvgArrowHeadUp = function SvgArrowHeadUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$s({
    width: 12,
    height: 8,
    viewBox: "0 0 12 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3",
    transform: "scale(1, -1)"
  }, props), _path$m || (_path$m = /*#__PURE__*/React.createElement("path", {
    d: "M1 1.5L6 6.5L11 1.5",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$l;
function _extends$r() { _extends$r = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$r.apply(this, arguments); }
var SvgArrowLeft = function SvgArrowLeft(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$r({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3",
    strokeWidth: 1.66667,
    transform: "scale(-1, 1)"
  }, props), _path$l || (_path$l = /*#__PURE__*/React.createElement("path", {
    d: "M4.16602 10H15.8327M15.8327 10L9.99935 4.16667M15.8327 10L9.99935 15.8333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$k;
function _extends$q() { _extends$q = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$q.apply(this, arguments); }
var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$q({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3",
    strokeWidth: 1.66667
  }, props), _path$k || (_path$k = /*#__PURE__*/React.createElement("path", {
    d: "M4.16602 10H15.8327M15.8327 10L9.99935 4.16667M15.8327 10L9.99935 15.8333",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$j;
function _extends$p() { _extends$p = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$p.apply(this, arguments); }
var SvgArrowUp = function SvgArrowUp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$p({
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    transform: "scale(1, -1)",
    stroke: "#98A2B3"
  }, props), _path$j || (_path$j = /*#__PURE__*/React.createElement("path", {
    d: "M6.00065 1.33331V10.6666M6.00065 10.6666L10.6673 5.99998M6.00065 10.6666L1.33398 5.99998",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$i;
function _extends$o() { _extends$o = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$o.apply(this, arguments); }
var SvgBell = function SvgBell(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$o({
    width: 20,
    height: 21,
    viewBox: "0 0 20 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$i || (_path$i = /*#__PURE__*/React.createElement("path", {
    d: "M7.79496 17.9998C8.38257 18.5185 9.15444 18.8332 9.99981 18.8332C10.8452 18.8332 11.6171 18.5185 12.2047 17.9998M14.9998 7.1665C14.9998 5.84042 14.473 4.56865 13.5353 3.63097C12.5977 2.69329 11.3259 2.1665 9.99981 2.1665C8.67373 2.1665 7.40196 2.69329 6.46428 3.63097C5.5266 4.56865 4.99981 5.84042 4.99981 7.1665C4.99981 9.74166 4.3502 11.5048 3.62453 12.671C3.01242 13.6547 2.70636 14.1466 2.71758 14.2838C2.73001 14.4357 2.7622 14.4937 2.88463 14.5845C2.99519 14.6665 3.49364 14.6665 4.49052 14.6665H15.5091C16.506 14.6665 17.0044 14.6665 17.115 14.5845C17.2374 14.4937 17.2696 14.4357 17.282 14.2838C17.2933 14.1466 16.9872 13.6547 16.3751 12.671C15.6494 11.5048 14.9998 9.74166 14.9998 7.1665Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _g$4;
function _extends$n() { _extends$n = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$n.apply(this, arguments); }
var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$n({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 16,
    viewBox: "0 0 122.877 101.052",
    enableBackground: "new 0 0 122.877 101.052",
    xmlSpace: "preserve",
    fill: "#98A2B3"
  }, props), _g$4 || (_g$4 = /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M4.43,63.63c-2.869-2.755-4.352-6.42-4.427-10.11c-0.074-3.689,1.261-7.412,4.015-10.281 c2.752-2.867,6.417-4.351,10.106-4.425c3.691-0.076,7.412,1.255,10.283,4.012l24.787,23.851L98.543,3.989l1.768,1.349l-1.77-1.355 c0.141-0.183,0.301-0.339,0.479-0.466c2.936-2.543,6.621-3.691,10.223-3.495V0.018l0.176,0.016c3.623,0.24,7.162,1.85,9.775,4.766 c2.658,2.965,3.863,6.731,3.662,10.412h0.004l-0.016,0.176c-0.236,3.558-1.791,7.035-4.609,9.632l-59.224,72.09l0.004,0.004 c-0.111,0.141-0.236,0.262-0.372,0.368c-2.773,2.435-6.275,3.629-9.757,3.569c-3.511-0.061-7.015-1.396-9.741-4.016L4.43,63.63 L4.43,63.63z"
  }))));
};

var _g$3, _defs$3;
function _extends$m() { _extends$m = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$m.apply(this, arguments); }
var SvgClock = function SvgClock(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$m({
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$3 || (_g$3 = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_926_68953)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.99999 3.49984V6.99984L9.33332 8.1665M12.8333 6.99984C12.8333 10.2215 10.2217 12.8332 6.99999 12.8332C3.77833 12.8332 1.16666 10.2215 1.16666 6.99984C1.16666 3.77818 3.77833 1.1665 6.99999 1.1665C10.2217 1.1665 12.8333 3.77818 12.8333 6.99984Z",
    stroke: "#98A2B3",
    strokeWidth: 1.16667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), _defs$3 || (_defs$3 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_926_68953"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 14,
    height: 14,
    fill: "white"
  })))));
};

var _path$h;
function _extends$l() { _extends$l = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$l.apply(this, arguments); }
var SvgCross = function SvgCross(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$l({
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$h || (_path$h = /*#__PURE__*/React.createElement("path", {
    d: "M13 1L1 13M1 1L13 13",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$g;
function _extends$k() { _extends$k = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$k.apply(this, arguments); }
var SvgDatabase = function SvgDatabase(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$k({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$g || (_path$g = /*#__PURE__*/React.createElement("path", {
    d: "M21 5C21 6.65685 16.9706 8 12 8C7.02944 8 3 6.65685 3 5M21 5C21 3.34315 16.9706 2 12 2C7.02944 2 3 3.34315 3 5M21 5V19C21 20.66 17 22 12 22C7 22 3 20.66 3 19V5M21 12C21 13.66 17 15 12 15C7 15 3 13.66 3 12",
    stroke: "#98A2B3",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$f;
function _extends$j() { _extends$j = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$j.apply(this, arguments); }
var SvgDelete = function SvgDelete(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$j({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$f || (_path$f = /*#__PURE__*/React.createElement("path", {
    d: "M17 9L11 15M11 9L17 15M2.72 12.96L7.04 18.72C7.392 19.1893 7.568 19.424 7.79105 19.5932C7.9886 19.7432 8.21232 19.855 8.45077 19.9231C8.72 20 9.01334 20 9.6 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H9.6C9.01334 4 8.72 4 8.45077 4.07689C8.21232 4.14499 7.9886 4.25685 7.79105 4.40675C7.568 4.576 7.392 4.81067 7.04 5.28L2.72 11.04C2.46181 11.3843 2.33271 11.5564 2.28294 11.7454C2.23902 11.9123 2.23902 12.0877 2.28294 12.2546C2.33271 12.4436 2.46181 12.6157 2.72 12.96Z",
    stroke: "#FC5D5D",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$e, _path2$5, _path3$2;
function _extends$i() { _extends$i = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$i.apply(this, arguments); }
var SvgEllipsis = function SvgEllipsis(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$i({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$e || (_path$e = /*#__PURE__*/React.createElement("path", {
    d: "M9.99935 10.8333C10.4596 10.8333 10.8327 10.4602 10.8327 10C10.8327 9.53977 10.4596 9.16668 9.99935 9.16668C9.53911 9.16668 9.16602 9.53977 9.16602 10C9.16602 10.4602 9.53911 10.8333 9.99935 10.8333Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/React.createElement("path", {
    d: "M9.99935 5.00001C10.4596 5.00001 10.8327 4.62691 10.8327 4.16668C10.8327 3.70644 10.4596 3.33334 9.99935 3.33334C9.53911 3.33334 9.16602 3.70644 9.16602 4.16668C9.16602 4.62691 9.53911 5.00001 9.99935 5.00001Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path3$2 || (_path3$2 = /*#__PURE__*/React.createElement("path", {
    d: "M9.99935 16.6667C10.4596 16.6667 10.8327 16.2936 10.8327 15.8333C10.8327 15.3731 10.4596 15 9.99935 15C9.53911 15 9.16602 15.3731 9.16602 15.8333C9.16602 16.2936 9.53911 16.6667 9.99935 16.6667Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$d;
function _extends$h() { _extends$h = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$h.apply(this, arguments); }
var SvgError = function SvgError(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$h({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#FC5D5D"
  }, props), _path$d || (_path$d = /*#__PURE__*/React.createElement("path", {
    d: "M8.00016 5.33301V7.99967M8.00016 10.6663H8.00683M14.6668 7.99967C14.6668 11.6816 11.6821 14.6663 8.00016 14.6663C4.31826 14.6663 1.3335 11.6816 1.3335 7.99967C1.3335 4.31778 4.31826 1.33301 8.00016 1.33301C11.6821 1.33301 14.6668 4.31778 14.6668 7.99967Z",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$c;
function _extends$g() { _extends$g = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$g.apply(this, arguments); }
var SvgEyeClosed = function SvgEyeClosed(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$g({
    width: 16,
    height: 14,
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$c || (_path$c = /*#__PURE__*/React.createElement("path", {
    d: "M7.16196 2.39488C7.4329 2.35482 7.7124 2.33333 8.00028 2.33333C11.4036 2.33333 13.6369 5.33656 14.3871 6.52455C14.4779 6.66833 14.5233 6.74023 14.5488 6.85112C14.5678 6.93439 14.5678 7.06578 14.5487 7.14905C14.5233 7.25993 14.4776 7.3323 14.3861 7.47705C14.1862 7.79343 13.8814 8.23807 13.4777 8.7203M4.48288 3.47669C3.0415 4.45447 2.06297 5.81292 1.61407 6.52352C1.52286 6.66791 1.47725 6.74011 1.45183 6.85099C1.43273 6.93426 1.43272 7.06563 1.45181 7.14891C1.47722 7.25979 1.52262 7.33168 1.61342 7.47545C2.36369 8.66344 4.59694 11.6667 8.00028 11.6667C9.37255 11.6667 10.5546 11.1784 11.5259 10.5177M2.00028 1L14.0003 13M6.58606 5.58579C6.22413 5.94772 6.00028 6.44772 6.00028 7C6.00028 8.10457 6.89571 9 8.00028 9C8.55256 9 9.05256 8.77614 9.41449 8.41421",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$b, _path2$4;
function _extends$f() { _extends$f = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$f.apply(this, arguments); }
var SvgEyeOpen = function SvgEyeOpen(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$f({
    width: 16,
    height: 12,
    viewBox: "0 0 16 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$b || (_path$b = /*#__PURE__*/React.createElement("path", {
    d: "M1.61342 6.47513C1.52262 6.33137 1.47723 6.25949 1.45182 6.14862C1.43273 6.06534 1.43273 5.93401 1.45182 5.85073C1.47723 5.73986 1.52262 5.66798 1.61341 5.52422C2.36369 4.33624 4.59693 1.33301 8.00027 1.33301C11.4036 1.33301 13.6369 4.33623 14.3871 5.52422C14.4779 5.66798 14.5233 5.73986 14.5487 5.85073C14.5678 5.93401 14.5678 6.06534 14.5487 6.14862C14.5233 6.25949 14.4779 6.33137 14.3871 6.47513C13.6369 7.66311 11.4036 10.6663 8.00027 10.6663C4.59693 10.6663 2.36369 7.66311 1.61342 6.47513Z",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/React.createElement("path", {
    d: "M8.00027 7.99967C9.10484 7.99967 10.0003 7.10424 10.0003 5.99967C10.0003 4.89511 9.10484 3.99967 8.00027 3.99967C6.8957 3.99967 6.00027 4.89511 6.00027 5.99967C6.00027 7.10424 6.8957 7.99967 8.00027 7.99967Z",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$a, _path2$3;
function _extends$e() { _extends$e = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$e.apply(this, arguments); }
var SvgGear = function SvgGear(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$e({
    width: 20,
    height: 19,
    viewBox: "0 0 20 19",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$a || (_path$a = /*#__PURE__*/React.createElement("path", {
    d: "M9.99984 11.9998C11.3805 11.9998 12.4998 10.8805 12.4998 9.49984C12.4998 8.11913 11.3805 6.99984 9.99984 6.99984C8.61913 6.99984 7.49984 8.11913 7.49984 9.49984C7.49984 10.8805 8.61913 11.9998 9.99984 11.9998Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/React.createElement("path", {
    d: "M15.6059 11.7726C15.5051 12.0011 15.475 12.2545 15.5195 12.5003C15.5641 12.746 15.6812 12.9728 15.8559 13.1514L15.9014 13.1968C16.0422 13.3375 16.154 13.5046 16.2302 13.6886C16.3065 13.8725 16.3457 14.0697 16.3457 14.2688C16.3457 14.4679 16.3065 14.6651 16.2302 14.849C16.154 15.0329 16.0422 15.2 15.9014 15.3407C15.7606 15.4816 15.5935 15.5934 15.4096 15.6696C15.2257 15.7459 15.0285 15.7851 14.8294 15.7851C14.6303 15.7851 14.4331 15.7459 14.2492 15.6696C14.0652 15.5934 13.8981 15.4816 13.7574 15.3407L13.712 15.2953C13.5334 15.1206 13.3066 15.0035 13.0609 14.9589C12.8151 14.9144 12.5617 14.9444 12.3332 15.0453C12.1091 15.1413 11.918 15.3008 11.7834 15.504C11.6488 15.7073 11.5766 15.9455 11.5756 16.1892V16.318C11.5756 16.7199 11.416 17.1052 11.1318 17.3894C10.8477 17.6735 10.4623 17.8332 10.0604 17.8332C9.6586 17.8332 9.27322 17.6735 8.98907 17.3894C8.70492 17.1052 8.54529 16.7199 8.54529 16.318V16.2498C8.53943 15.9991 8.45826 15.7559 8.31235 15.5519C8.16643 15.3479 7.96252 15.1925 7.72711 15.1059C7.49861 15.0051 7.24515 14.975 6.99939 15.0195C6.75364 15.0641 6.52687 15.1812 6.34832 15.3559L6.30287 15.4014C6.16215 15.5422 5.99505 15.654 5.81111 15.7302C5.62717 15.8065 5.43001 15.8457 5.2309 15.8457C5.03178 15.8457 4.83462 15.8065 4.65069 15.7302C4.46675 15.654 4.29964 15.5422 4.15893 15.4014C4.01805 15.2606 3.9063 15.0935 3.83005 14.9096C3.7538 14.7257 3.71455 14.5285 3.71455 14.3294C3.71455 14.1303 3.7538 13.9331 3.83005 13.7492C3.9063 13.5652 4.01805 13.3981 4.15893 13.2574L4.20438 13.212C4.37903 13.0334 4.49619 12.8066 4.54075 12.5609C4.58531 12.3151 4.55523 12.0617 4.45438 11.8332C4.35835 11.6091 4.19889 11.418 3.99564 11.2834C3.79239 11.1488 3.55422 11.0766 3.31044 11.0756H3.18166C2.77981 11.0756 2.39443 10.916 2.11028 10.6318C1.82614 10.3477 1.6665 9.96229 1.6665 9.56044C1.6665 9.1586 1.82614 8.77322 2.11028 8.48907C2.39443 8.20492 2.77981 8.04529 3.18166 8.04529H3.24984C3.50059 8.03943 3.74378 7.95826 3.94779 7.81235C4.1518 7.66643 4.3072 7.46252 4.39378 7.22711C4.49462 6.99861 4.5247 6.74515 4.48014 6.49939C4.43558 6.25364 4.31843 6.02687 4.14378 5.84832L4.09832 5.80287C3.95745 5.66215 3.84569 5.49505 3.76944 5.31111C3.69319 5.12717 3.65395 4.93001 3.65395 4.7309C3.65395 4.53178 3.69319 4.33462 3.76944 4.15069C3.84569 3.96675 3.95745 3.79964 4.09832 3.65893C4.23904 3.51805 4.40614 3.4063 4.59008 3.33005C4.77402 3.2538 4.97118 3.21455 5.17029 3.21455C5.36941 3.21455 5.56657 3.2538 5.7505 3.33005C5.93444 3.4063 6.10154 3.51805 6.24226 3.65893L6.28772 3.70438C6.46626 3.87903 6.69303 3.99619 6.93878 4.04075C7.18454 4.08531 7.43801 4.05523 7.6665 3.95438H7.72711C7.95118 3.85835 8.14227 3.69889 8.27688 3.49564C8.41148 3.29239 8.48371 3.05422 8.48469 2.81044V2.68166C8.48469 2.27981 8.64432 1.89443 8.92846 1.61028C9.21261 1.32614 9.59799 1.1665 9.99984 1.1665C10.4017 1.1665 10.7871 1.32614 11.0712 1.61028C11.3554 1.89443 11.515 2.27981 11.515 2.68166V2.74984C11.516 2.99361 11.5882 3.23179 11.7228 3.43504C11.8574 3.63829 12.0485 3.79774 12.2726 3.89378C12.5011 3.99462 12.7545 4.0247 13.0003 3.98014C13.246 3.93558 13.4728 3.81843 13.6514 3.64378L13.6968 3.59832C13.8375 3.45745 14.0046 3.34569 14.1886 3.26944C14.3725 3.19319 14.5697 3.15395 14.7688 3.15395C14.9679 3.15395 15.1651 3.19319 15.349 3.26944C15.5329 3.34569 15.7 3.45745 15.8407 3.59832C15.9816 3.73904 16.0934 3.90614 16.1696 4.09008C16.2459 4.27402 16.2851 4.47118 16.2851 4.67029C16.2851 4.86941 16.2459 5.06657 16.1696 5.2505C16.0934 5.43444 15.9816 5.60154 15.8407 5.74226L15.7953 5.78772C15.6206 5.96626 15.5035 6.19303 15.4589 6.43878C15.4144 6.68454 15.4444 6.93801 15.5453 7.1665V7.22711C15.6413 7.45118 15.8008 7.64227 16.004 7.77688C16.2073 7.91148 16.4455 7.98371 16.6892 7.98469H16.818C17.2199 7.98469 17.6052 8.14432 17.8894 8.42846C18.1735 8.71261 18.3332 9.09799 18.3332 9.49984C18.3332 9.90168 18.1735 10.2871 17.8894 10.5712C17.6052 10.8554 17.2199 11.015 16.818 11.015H16.7498C16.5061 11.016 16.2679 11.0882 16.0646 11.2228C15.8614 11.3574 15.7019 11.5485 15.6059 11.7726Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _g$2, _defs$2;
function _extends$d() { _extends$d = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$d.apply(this, arguments); }
var SvgHelp = function SvgHelp(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$d({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$2 || (_g$2 = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_494_22561)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6.06016 6C6.2169 5.55444 6.52626 5.17873 6.93347 4.93942C7.34067 4.7001 7.81943 4.61262 8.28495 4.69247C8.75047 4.77232 9.17271 5.01434 9.47688 5.37568C9.78106 5.73702 9.94753 6.19434 9.94683 6.66666C9.94683 8 7.94683 8.66666 7.94683 8.66666M8.00016 11.3333H8.00683M14.6668 8C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8C1.3335 4.3181 4.31826 1.33333 8.00016 1.33333C11.6821 1.33333 14.6668 4.3181 14.6668 8Z",
    stroke: "#98A2B3",
    strokeWidth: 1.33333,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), _defs$2 || (_defs$2 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_494_22561"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 16,
    height: 16,
    fill: "white"
  })))));
};

var _path$9;
function _extends$c() { _extends$c = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$c.apply(this, arguments); }
var SvgInsert = function SvgInsert(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$c({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    "data-stroke": "no-stroke",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/React.createElement("path", {
    d: "M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8V2H2V16H16V10H18V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM13 8V5H10V3H13V0H15V3H18V5H15V8H13Z",
    fill: "#98A2B3"
  })));
};

var _g$1, _defs$1;
function _extends$b() { _extends$b = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$b.apply(this, arguments); }
var SvgMoon = function SvgMoon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$b({
    width: 19,
    height: 20,
    viewBox: "0 0 19 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_317_33416)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.3659 13.3919C16.3364 13.8574 15.1937 14.1166 13.9905 14.1166C9.46162 14.1166 5.79027 10.4452 5.79027 5.91641C5.79027 4.71316 6.04943 3.57043 6.51497 2.54102C3.66983 3.8277 1.69018 6.69092 1.69018 10.0165C1.69018 14.5453 5.36153 18.2167 9.89037 18.2167C13.216 18.2167 16.0792 16.237 17.3659 13.3919Z",
    stroke: "#98A2B3",
    strokeWidth: 1.56757,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), _defs$1 || (_defs$1 = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_317_33416"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 18.8108,
    height: 18.8108,
    fill: "white",
    transform: "translate(0.122612 0.973633)"
  })))));
};

var _path$8;
function _extends$a() { _extends$a = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$a({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/React.createElement("path", {
    d: "M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z",
    strokeWidth: 1.66667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$7;
function _extends$9() { _extends$9 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var SvgSelect = function SvgSelect(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$9({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/React.createElement("path", {
    d: "M20.5056 10.7754C21.1225 10.5355 21.431 10.4155 21.5176 10.2459C21.5926 10.099 21.5903 9.92446 21.5115 9.77954C21.4205 9.61226 21.109 9.50044 20.486 9.2768L4.59629 3.5728C4.0866 3.38983 3.83175 3.29835 3.66514 3.35605C3.52029 3.40621 3.40645 3.52004 3.35629 3.6649C3.29859 3.8315 3.39008 4.08635 3.57304 4.59605L9.277 20.4858C9.50064 21.1088 9.61246 21.4203 9.77973 21.5113C9.92465 21.5901 10.0991 21.5924 10.2461 21.5174C10.4157 21.4308 10.5356 21.1223 10.7756 20.5054L13.3724 13.8278C13.4194 13.707 13.4429 13.6466 13.4792 13.5957C13.5114 13.5506 13.5508 13.5112 13.5959 13.479C13.6468 13.4427 13.7072 13.4192 13.828 13.3722L20.5056 10.7754Z",
    stroke: "#98A2B3",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _g, _defs;
function _extends$8() { _extends$8 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var SvgGoogle = function SvgGoogle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$8({
    width: 25,
    height: 24,
    viewBox: "0 0 25 24",
    fill: "none",
    "data-stroke": "no-stroke",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#clip0_99_12978)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M24.266 12.2763C24.266 11.4605 24.1999 10.6404 24.0588 9.83789H12.74V14.4589H19.2217C18.9528 15.9492 18.0885 17.2676 16.823 18.1054V21.1037H20.69C22.9608 19.0137 24.266 15.9272 24.266 12.2763Z",
    fill: "#4285F4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.74 24.0013C15.9764 24.0013 18.7058 22.9387 20.6944 21.1044L16.8274 18.106C15.7516 18.838 14.3626 19.2525 12.7444 19.2525C9.61376 19.2525 6.95934 17.1404 6.00693 14.3008H2.01648V17.3917C4.05359 21.4439 8.20278 24.0013 12.74 24.0013Z",
    fill: "#34A853"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.00253 14.3007C5.49987 12.8103 5.49987 11.1965 6.00253 9.70618V6.61523H2.01649C0.31449 10.006 0.31449 14.0009 2.01649 17.3916L6.00253 14.3007Z",
    fill: "#FBBC04"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z",
    fill: "#EA4335"
  }))), _defs || (_defs = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
    id: "clip0_99_12978"
  }, /*#__PURE__*/React.createElement("rect", {
    width: 24,
    height: 24,
    fill: "white",
    transform: "translate(0.5)"
  })))));
};

var _path$6, _path2$2;
function _extends$7() { _extends$7 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var SvgSort = function SvgSort(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$7({
    width: 12,
    height: 12,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "#98A2B3"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/React.createElement("path", {
    data: "up",
    d: "M17 16M7 20V4M7 4L3 8M7 4L11 8",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/React.createElement("path", {
    data: "down",
    d: "M17 4V20M17 20L13 16M17 20L21 16M7 8",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$5;
function _extends$6() { _extends$6 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var SvgSun = function SvgSun(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$6({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M9.82531 2.54004V4.10761M9.82531 16.6481V18.2157M3.55504 10.3779H1.98747M5.36881 5.92137L4.26037 4.81294M14.2818 5.92137L15.3903 4.81294M5.36881 14.8376L4.26037 15.946M14.2818 14.8376L15.3903 15.946M17.6631 10.3779H16.0956M13.7442 10.3779C13.7442 12.5422 11.9897 14.2968 9.82531 14.2968C7.66095 14.2968 5.90639 12.5422 5.90639 10.3779C5.90639 8.21352 7.66095 6.45896 9.82531 6.45896C11.9897 6.45896 13.7442 8.21352 13.7442 10.3779Z",
    stroke: "#98A2B3",
    strokeWidth: 1.56757,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$4;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    width: 20,
    height: 22,
    viewBox: "0 0 20 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M14 5V4.2C14 3.0799 14 2.51984 13.782 2.09202C13.5903 1.71569 13.2843 1.40973 12.908 1.21799C12.4802 1 11.9201 1 10.8 1H9.2C8.07989 1 7.51984 1 7.09202 1.21799C6.71569 1.40973 6.40973 1.71569 6.21799 2.09202C6 2.51984 6 3.0799 6 4.2V5M8 10.5V15.5M12 10.5V15.5M1 5H19M17 5V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V5",
    stroke: "#FC5D5D",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$3;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgUpdate = function SvgUpdate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M2 10C2 10 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C19.6092 6.88131 20.4133 8.40072 20.7762 10M2 10V4M2 10H8M22 14C22 14 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C4.39076 17.1187 3.58669 15.5993 3.22383 14M22 14V20M22 14H16",
    stroke: "#98A2B3",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var _path$2;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgUserSimple = function SvgUserSimple(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M11.6667 12.25C11.6667 11.4359 11.6667 11.0289 11.5662 10.6977C11.34 9.95193 10.7564 9.36835 10.0107 9.14214C9.67945 9.04166 9.27241 9.04166 8.45833 9.04166H5.54167C4.72759 9.04166 4.32055 9.04166 3.98934 9.14214C3.2436 9.36835 2.66003 9.95193 2.43381 10.6977C2.33334 11.0289 2.33334 11.4359 2.33334 12.25M9.625 4.375C9.625 5.82475 8.44975 7 7 7C5.55025 7 4.375 5.82475 4.375 4.375C4.375 2.92525 5.55025 1.75 7 1.75C8.44975 1.75 9.625 2.92525 9.625 4.375Z",
    stroke: "#98A2B3",
    strokeWidth: 1.16667,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
};

var iconMap = {
    arrowDown: SvgArrowDown,
    arrowHeadDown: SvgArrowHeadDown,
    arrowHeadUp: SvgArrowHeadUp,
    arrowUp: SvgArrowUp,
    cross: SvgCross,
    ellipsis: SvgEllipsis,
    error: SvgError,
    eyesClosed: SvgEyeClosed,
    eyesOpen: SvgEyeOpen,
    google: SvgGoogle,
    help: SvgHelp,
    moon: SvgMoon,
    sun: SvgSun,
    sort: SvgSort,
    arrowLeft: SvgArrowLeft,
    arrowRight: SvgArrowRight,
    bell: SvgBell,
    gear: SvgGear,
    search: SvgSearch,
    trash: SvgTrash,
    select: SvgSelect,
    insert: SvgInsert,
    update: SvgUpdate,
    delete: SvgDelete,
    database: SvgDatabase,
    clock: SvgClock,
    userSimple: SvgUserSimple,
    check: SvgCheck,
};
function Icon(_a) {
    var icon = _a.icon, props = __rest(_a, ["icon"]);
    var IconComponent = icon ? iconMap[icon] : null;
    return IconComponent ? jsx(IconComponent, __assign({}, props)) : null;
}

function usePassword() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return {
        type: (show ? "text" : "password"),
        iconAfter: (jsx("button", __assign({ type: "button", onClick: function () { return setShow(function (s) { return !s; }); }, tabIndex: 0 }, { children: jsx(Icon, { icon: show ? "eyesOpen" : "eyesClosed" }) }))),
        placeholder: show ? "A.#Kj8*/" : "••••••••",
    };
}

var classes = function (a, separator) {
    if (separator === void 0) { separator = " "; }
    return a
        .filter(function (c) { return c; })
        .map(function (c) { return c.toString().trim(); })
        .join(separator);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$i = ".Box-module_box__3m9-e {\n  display: block;\n  margin: 0 auto;\n  padding: var(--m);\n  background-color: var(--color-background-modal);\n  border-radius: var(--border-radius-5);\n  box-shadow: 0 0 20px var(--color-background-modal-shadow);\n  max-width: 100%;\n}\n.Box-module_box__3m9-e.Box-module_fluid__1BmL5 {\n  max-width: none;\n}\n.Box-module_box__3m9-e.Box-module_mid__7jkiX {\n  max-width: 440px;\n}\n.Box-module_box__3m9-e.Box-module_wide__appEO {\n  max-width: 660px;\n}\n.Box-module_box__3m9-e.Box-module_space-l__vfsuc {\n  padding: var(--m-l);\n}\n.Box-module_box__3m9-e.Box-module_space-mid__14S5P {\n  padding: var(--m);\n}\n.Box-module_box__3m9-e.Box-module_space-none__2dXkj {\n  padding: 0;\n}";
var style$f = {"box":"Box-module_box__3m9-e","fluid":"Box-module_fluid__1BmL5","mid":"Box-module_mid__7jkiX","wide":"Box-module_wide__appEO","space-l":"Box-module_space-l__vfsuc","space-mid":"Box-module_space-mid__14S5P","space-none":"Box-module_space-none__2dXkj"};
styleInject(css_248z$i);

function Box(_a) {
    var className = _a.className, _b = _a.variants, variants = _b === void 0 ? [] : _b, props = __rest(_a, ["className", "variants"]);
    var variantStyles = classes(variants.map(function (c) { return style$f[c]; }));
    var containerClasses = classes([style$f.box, variantStyles, className]);
    return jsx("div", __assign({}, props, { className: containerClasses }));
}

var css_248z$h = ".Frame-module_container__fQU4r {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  height: 100%;\n}\n\n.Frame-module_content__3NJLc {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-grow: 1;\n}";
var style$e = {"container":"Frame-module_container__fQU4r","content":"Frame-module_content__3NJLc"};
styleInject(css_248z$h);

function Frame(_a) {
    var children = _a.children;
    return (jsx("div", __assign({ className: style$e.container }, { children: jsx("div", __assign({ className: style$e.content }, { children: jsx(Box, { children: children }) })) })));
}

var css_248z$g = ".Main-module_container__3q1UW {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.Main-module_content__IAZ8t {\n  padding: var(--m);\n}\n.Main-module_content__IAZ8t.Main-module_center__aoRRH {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.Main-module_content__IAZ8t h1 {\n  font-size: var(--font-size-xxl);\n  font-weight: 500;\n  margin: 0 0 var(--m-s);\n}\n.Main-module_content__IAZ8t small {\n  color: var(--color-text-soft);\n}";
var style$d = {"container":"Main-module_container__3q1UW","content":"Main-module_content__IAZ8t","center":"Main-module_center__aoRRH"};
styleInject(css_248z$g);

function Main(_a) {
    var center = _a.center, children = _a.children;
    return (jsx("div", __assign({ className: style$d.container, "data-layout": "main" }, { children: jsx("div", __assign({ className: classes([style$d.content, center && style$d.center]) }, { children: children })) })));
}

function useDelayUnmount(isMounted, delayTime) {
    var _a = useState(false), shouldRender = _a[0], setShouldRender = _a[1];
    var transitionsSpeed = 600;
    useEffect(function () {
        var timeoutId;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        }
        else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(function () { return setShouldRender(false); }, delayTime || transitionsSpeed);
        }
        return function () { return clearTimeout(timeoutId); };
    }, [isMounted, delayTime, shouldRender]);
    return shouldRender;
}

function useModal() {
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var openDelayed = useDelayUnmount(open, 600);
    return { handleClose: function () { return setOpen(false); }, isOpen: open, setOpen: setOpen, openDelayed: openDelayed };
}

function useSyncPagination(data, itemsPerPage) {
    var totalItems = (data === null || data === void 0 ? void 0 : data.length) || 0;
    var _a = useState(0), page = _a[0], setPageNumber = _a[1];
    var _b = useState(getDataPage(data, itemsPerPage, page)), dataPage = _b[0], setData = _b[1];
    var paginate = function (newPage) {
        setPageNumber(function (page) { return (newPage !== undefined ? newPage : page); });
    };
    useEffect(function () {
        setData(getDataPage(data, itemsPerPage, page));
    }, [JSON.stringify(data), page, totalItems]);
    useEffect(function () {
        paginate(1);
    }, [totalItems]);
    return { dataPage: dataPage, page: page, paginate: paginate, totalItems: totalItems };
}
function getDataPage(data, itemsPerPage, page) {
    var initial = (page - 1) * itemsPerPage;
    var final = initial + itemsPerPage;
    return data.slice(initial, final);
}

function useStepper(steps, initialStep) {
    if (initialStep === void 0) { initialStep = 0; }
    var _a = useState(initialStep), current = _a[0], setCurrent = _a[1];
    var step = useMemo(function () { return steps[current]; }, [current, steps]);
    return { steps: steps, current: current, step: step, setCurrent: setCurrent };
}

var setTheme = function (theme) {
    document.body.setAttribute("data-theme", theme);
    if (theme === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
    if (theme === "light") {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
};

var useThemeStore = create()(persist(function (set) { return ({
    theme: "light" ,
    setTheme: function (newTheme) {
        return set(function (state) {
            var theme = newTheme || (state.theme === "light" ? "dark" : "light");
            setTheme(theme);
            return { theme: theme };
        });
    },
}); }, {
    name: "theme",
}));

function useTabs(tabs, initialValue) {
    var _a;
    if (initialValue === void 0) { initialValue = ""; }
    var _b = useState(initialValue || (tabs === null || tabs === void 0 ? void 0 : tabs[(_a = Object.keys(tabs)) === null || _a === void 0 ? void 0 : _a[0]])), tab = _b[0], setTab = _b[1];
    return { tabs: tabs, tab: tab, setTab: setTab };
}

function useFilter(filterByColumns, data) {
    var _a = useState(""), filter = _a[0], setFilter = _a[1];
    var dataFiltered = useMemo(function () {
        return filterData(data, filter, filterByColumns);
    }, [JSON.stringify(data), filter]);
    return { dataFiltered: dataFiltered, setFilter: setFilter };
}
var filterData = function (data, filter, filterByColumns) {
    return data.filter(function (datum) {
        return (!filter ||
            Object.keys(datum).filter(function (k) {
                var itemText = datum[k];
                return filterByColumns.includes(k) && equalStrings((itemText === null || itemText === void 0 ? void 0 : itemText.toString()) || "", filter);
            }).length);
    });
};
var equalStrings = function (h, k) { return h.toLowerCase().indexOf(k.toLowerCase()) > -1; };

function useSort(data, initialSortKey, initialSortAsc) {
    if (initialSortKey === void 0) { initialSortKey = ""; }
    if (initialSortAsc === void 0) { initialSortAsc = true; }
    var _a = useState(initialSortKey), sortKey = _a[0], setSortKey = _a[1];
    var _b = useState(initialSortAsc), sortAsc = _b[0], setSortAsc = _b[1];
    var dataSorted = useMemo(function () {
        var sortedData = sortData(data, sortKey);
        return sortAsc ? sortedData.reverse() : sortedData;
    }, [JSON.stringify(data), sortKey, sortAsc]);
    var setSort = function (sortKey, sortAsc) {
        setSortKey(sortKey);
        setSortAsc(sortAsc);
    };
    return { dataSorted: dataSorted, setSort: setSort, sortKey: sortKey, sortAsc: sortAsc };
}
var sortData = function (data, sortBy) {
    return !sortBy
        ? data
        : data.sort(function (a, b) {
            var c = a[sortBy];
            var d = b[sortBy];
            return c > d ? 1 : c < d ? -1 : 0;
        });
};

var css_248z$f = ":root {\n  --m-xxxxs: 4px;\n  --m-xxxs: 6px;\n  --m-xxs: 8px;\n  --m-xs: 12px;\n  --m-s: 16px;\n  --m: 24px;\n  --m-mm: 32px;\n  --m-l: 40px;\n  --m-xl: 48px;\n  --m-xxl: 60px;\n  --font-size-xs: 0.8rem;\n  --font-size-s: 0.8125rem;\n  --font-size: 0.875rem;\n  --font-size-l: 1rem;\n  --font-size-xl: 1.125rem;\n  --font-size-xxl: 1.5rem;\n  --font-size-xxxl: 2.25rem;\n  --font-size-h: 3rem;\n  --font-family-1: \"Inter\", sans-serif;\n  --font-family-2: \"Laxan\", sans-serif;\n  --border-radius-1: 4px;\n  --border-radius-2: 8px;\n  --border-radius-3: 12px;\n  --border-radius-4: 16px;\n  --border-radius-5: 20px;\n  --border-radius-r: 50%;\n  --fast: 0.3s;\n  --speed: 0.4s;\n  --slow: 0.9s;\n  --ease: ease-out;\n  --transition-ui: background-color var(--fast) var(--ease), border-color var(--fast) var(--ease), opacity var(--fast) var(--ease),\n    transform var(--fast) var(--ease), color var(--fast) var(--ease);\n  --blurred: 5px;\n}\n\n:root {\n  --color-primary: #7a5ef8;\n  --color-primary-hover: #664ecf;\n  --color-primary-focus: #7a5ef8;\n  --color-primary-disabled: #d3c9fd;\n  --color-secondary: #1d2939;\n  --color-secondary-hover: #475467;\n  --color-secondary-focus: #1d2939;\n  --color-secondary-disabled: #344054;\n  --color-text-on-primary: #ffffff;\n  --color-text-on-primary-disabled: #667085;\n  --color-text-on-secondary: #f2f4f7;\n  --color-text-on-secondary-disabled: #475467;\n  --blue-light-500: #0ba5ec;\n  --color-green-ui: #099250;\n  --color-green: (18, 183, 106, 0.88);\n  --color-blue: #0ba5ec;\n  --color-red: rgba(252, 93, 93, 0.88);\n  --color-yellow: rgba(248, 203, 44, 0.88);\n}\n\n:root {\n  color-scheme: dark;\n  --color-background: #0e1116;\n  --color-background-main: var(--color-background);\n  --color-background-modal: #171a20;\n  --color-background-modal-hover: #2e323c;\n  --color-background-modal-veil: #0e1116;\n  --color-background-modal-shadow: #0e1116;\n  --color-tertiary: #101828;\n  --color-tertiary-hover: #1d2939;\n  --color-tertiary-focus: #1d2939;\n  --color-tertiary-disabled: #eaecf0;\n  --color-background-menu: #101828;\n  --color-background-menu-hover: #1d2939;\n  --color-text-strong: #f2f4f7;\n  --color-text: #d0d5dd;\n  --color-text-soft: #667085;\n  --color-text-on-tertiary: #ffffff;\n  --color-text-on-tertiary-disabled: #667085;\n  --color-error: #912018;\n  --color-text-error: #f04438;\n  --color-background-error: #f04438;\n  --color-background-error-hover: #d92d20;\n  --color-background-error-soft: #fecdca;\n  --color-input-background: #101828;\n  --color-input-background-soft: #1d2939;\n  --color-input-border: #344054;\n  --color-input-placeholder: #344054;\n  --color-input-text-disabled: #344054;\n  --color-input-disabled: #171a20;\n  --color-border: #1d2939;\n  --color-background-small-button-selected: #344054;\n  --color-background-small-button-hover: #101828;\n  --color-text-small-button: $base-white;\n  --color-button: #f9f5ff;\n  --color-button-hover: #e4dffe;\n  --color-button-disabled: #e4dffe;\n  --color-button-text: #171a20;\n  --color-button-text-disabled: lighter(#171a20, 10);\n  --color-button-border: transparent;\n  --color-border: #344054;\n  --color-border-soft: #1d2939;\n  --color-icon: #d0d5dd;\n  --color-bisel: rgba(255, 255, 255, 0.05);\n  --color-tableflow-text: #ffffff;\n  --color-stepper: #30374f;\n  --color-stepper-active: #6ce9a6;\n}\n\n[data-theme=light] {\n  color-scheme: light;\n  --color-background: #f2f4f7;\n  --color-background-main: #ffffff;\n  --color-background-modal: #ffffff;\n  --color-background-modal-hover: #ffffff;\n  --color-background-modal-veil: #0e1116;\n  --color-background-modal-shadow: transparent;\n  --color-tertiary: #ffffff;\n  --color-tertiary-hover: #f2f4f7;\n  --color-tertiary-focus: #ffffff;\n  --color-tertiary-disabled: #eaecf0;\n  --color-background-menu: #ffffff;\n  --color-background-menu-hover: #f2f4f7;\n  --color-text-strong: #101828;\n  --color-text: #1d2939;\n  --color-text-soft: #667085;\n  --color-text-on-tertiary: #344054;\n  --color-text-on-tertiary-disabled: #667085;\n  --color-error: #fecdca;\n  --color-text-error: #f04438;\n  --color-background-error: #f04438;\n  --color-background-error-hover: #d92d20;\n  --color-background-error-soft: #fecdca;\n  --color-input-background: #ffffff;\n  --color-input-background-soft: #f2f4f7;\n  --color-input-border: #344054;\n  --color-input-placeholder: #344054;\n  --color-input-text-disabled: #344054;\n  --color-input-disabled: #f9fafb;\n  --color-border: #1d2939;\n  --color-background-small-button-selected: #f2f4f7;\n  --color-background-small-button-hover: #f9fafb;\n  --color-text-small-button: var(--color-text);\n  --color-button: #ffffff;\n  --color-button-hover: #f2f4f7;\n  --color-button-disabled: #fcfcfd;\n  --color-button-text: var(--color-text-soft);\n  --color-button-text-disabled: #d0d5dd;\n  --color-button-border: #d0d5dd;\n  --color-border: #d0d5dd;\n  --color-border-soft: #eaecf0;\n  --color-icon: #101323;\n  --color-bisel: rgba(0, 0, 0, 0.05);\n  --color-tableflow-text: #000000;\n  --color-stepper: #b9c0d4;\n  --color-stepper-active: #6ce9a6;\n}";
styleInject(css_248z$f);

var css_248z$e = ".Badge-module_badge__1pRz_ {\n  font-family: var(--font-family-2);\n  border: 1.5px solid var(--color-text);\n  padding: var(--m-xxxxs) var(--m-xxs);\n  border-radius: 5rem;\n  display: inline-block;\n  background-color: var(--color-background-modal);\n  line-height: 1.1;\n  font-weight: 500;\n  font-size: var(--font-size-xs);\n}\n.Badge-module_badge__1pRz_.Badge-module_highlight__3BoO0 {\n  border-color: var(--blue-light-500);\n  color: var(--blue-light-500);\n}\n.Badge-module_badge__1pRz_.Badge-module_success__1T8G3 {\n  border-color: var(--color-green-ui);\n  color: var(--color-green-ui);\n}\n.Badge-module_badge__1pRz_.Badge-module_deep__3tL2S {\n  background-color: var(--color-background);\n  border: none;\n  font-weight: inherit;\n}";
var style$c = {"badge":"Badge-module_badge__1pRz_","highlight":"Badge-module_highlight__3BoO0","success":"Badge-module_success__1T8G3","deep":"Badge-module_deep__3tL2S"};
styleInject(css_248z$e);

function Badge(_a) {
    var _b = _a.variants, variants = _b === void 0 ? [] : _b, className = _a.className, props = __rest(_a, ["variants", "className"]);
    var variantStyles = classes(variants.map(function (c) { return style$c[c]; }));
    var badgeClasses = classes([style$c.badge, variantStyles, className]);
    return jsx("span", __assign({}, props, { className: badgeClasses }));
}

var css_248z$d = ".Button-module_button__ja_ma {\n  padding: 0.5px var(--m-s);\n  border-radius: var(--border-radius-2);\n  border: 1px solid var(--color-button-border);\n  display: inline-flex;\n  gap: var(--m-xs);\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-button);\n  color: var(--color-button-text);\n  white-space: nowrap;\n  font-size: var(--font-size-xs);\n  font-weight: 400;\n}\n.Button-module_button__ja_ma .Button-module_label__1xFUE {\n  padding: var(--m-xxs) 0;\n}\n.Button-module_button__ja_ma:hover {\n  background-color: var(--color-button-hover);\n}\n.Button-module_button__ja_ma:not([disabled]):not(.Button-module_disableHover__3eUrI) {\n  cursor: pointer;\n}\n.Button-module_button__ja_ma:is([disabled]) {\n  background-color: var(--color-button-disabled);\n  color: var(--color-button-text-disabled);\n}\n.Button-module_button__ja_ma svg {\n  display: block;\n}\n.Button-module_button__ja_ma .Button-module_icon__3x8po svg path {\n  stroke: currentColor;\n}\n.Button-module_button__ja_ma.Button-module_primary__3cBD9 {\n  background-color: var(--color-primary);\n  color: var(--color-text-on-primary);\n}\n.Button-module_button__ja_ma.Button-module_primary__3cBD9:not([disabled]):not(.Button-module_disableHover__3eUrI):hover, .Button-module_button__ja_ma.Button-module_primary__3cBD9:not([disabled]):not(.Button-module_disableHover__3eUrI):active {\n  background-color: var(--color-primary-hover);\n  color: var(--color-text-on-primary);\n}\n.Button-module_button__ja_ma.Button-module_primary__3cBD9:is([disabled]) {\n  background-color: var(--color-primary-disabled);\n  color: var(--color-text-on-primary-disabled);\n}\n.Button-module_button__ja_ma.Button-module_secondary__3nriI {\n  background-color: var(--color-secondary);\n  color: var(--color-text-on-secondary);\n}\n.Button-module_button__ja_ma.Button-module_secondary__3nriI:not([disabled]):not(.Button-module_disableHover__3eUrI):hover, .Button-module_button__ja_ma.Button-module_secondary__3nriI:not([disabled]):not(.Button-module_disableHover__3eUrI):active {\n  background-color: var(--color-secondary-hover);\n  color: var(--color-text-on-secondary);\n}\n.Button-module_button__ja_ma.Button-module_secondary__3nriI:is([disabled]) {\n  background-color: var(--color-secondary-disabled);\n  color: var(--color-text-on-secondary-disabled);\n}\n.Button-module_button__ja_ma.Button-module_tertiary__y_bg6 {\n  background-color: var(--color-tertiary);\n  color: var(--color-text-on-tertiary);\n  border-color: var(--color-border);\n}\n.Button-module_button__ja_ma.Button-module_tertiary__y_bg6:not([disabled]):not(.Button-module_disableHover__3eUrI):hover, .Button-module_button__ja_ma.Button-module_tertiary__y_bg6:not([disabled]):not(.Button-module_disableHover__3eUrI):active {\n  background-color: var(--color-tertiary-hover);\n  color: var(--color-text-on-tertiary);\n}\n.Button-module_button__ja_ma.Button-module_tertiary__y_bg6:is([disabled]) {\n  background-color: var(--color-tertiary-disabled);\n  color: var(--color-text-on-tertiary-disabled);\n}\n.Button-module_button__ja_ma.Button-module_warning__372jp {\n  background-color: var(--color-background-error);\n  color: var(--color-text-on-primary);\n  border-color: var(--color-background-error);\n}\n.Button-module_button__ja_ma.Button-module_warning__372jp:not([disabled]):not(.Button-module_disableHover__3eUrI):hover {\n  background-color: var(--color-background-error-hover);\n  color: var(--color-text-on-primary);\n}\n.Button-module_button__ja_ma.Button-module_warning__372jp:is([disabled]) {\n  background-color: var(--color-background-error);\n  color: var(--color-text-on-primary-disabled);\n}\n.Button-module_button__ja_ma.Button-module_bare__cY82q {\n  background-color: transparent;\n  border-color: transparent;\n  color: var(--color-text);\n}\n.Button-module_button__ja_ma.Button-module_bare__cY82q:hover {\n  color: var(--color-text);\n}\n.Button-module_button__ja_ma.Button-module_small__2YaGJ {\n  padding: 0 var(--m-xs);\n}\n.Button-module_button__ja_ma.Button-module_small__2YaGJ .Button-module_label__1xFUE {\n  padding: var(--m-xxxs) 0;\n}\n.Button-module_button__ja_ma.Button-module_fullWidth__3fk2N {\n  width: 100%;\n}\n.Button-module_button__ja_ma.Button-module_noMargin__1tRhT {\n  margin-bottom: 0;\n}\n.Button-module_button__ja_ma.Button-module_alignLeft__Ua98t {\n  justify-content: flex-start;\n}\n.Button-module_button__ja_ma.Button-module_alignRight__fVwXH {\n  justify-content: flex-end;\n}\n.Button-module_button__ja_ma.Button-module_sort__2rsQe path[data], .Button-module_button__ja_ma.Button-module_sortUp__2D5ev path[data], .Button-module_button__ja_ma.Button-module_sortDown__3gprf path[data] {\n  stroke: var(--color-text-soft);\n}\n.Button-module_button__ja_ma.Button-module_sortUp__2D5ev path[data=up] {\n  stroke: var(--color-text);\n}\n.Button-module_button__ja_ma.Button-module_sortDown__3gprf path[data=down] {\n  stroke: var(--color-text);\n}";
var style$b = {"button":"Button-module_button__ja_ma","label":"Button-module_label__1xFUE","disableHover":"Button-module_disableHover__3eUrI","icon":"Button-module_icon__3x8po","primary":"Button-module_primary__3cBD9","secondary":"Button-module_secondary__3nriI","tertiary":"Button-module_tertiary__y_bg6","warning":"Button-module_warning__372jp","bare":"Button-module_bare__cY82q","small":"Button-module_small__2YaGJ","fullWidth":"Button-module_fullWidth__3fk2N","noMargin":"Button-module_noMargin__1tRhT","alignLeft":"Button-module_alignLeft__Ua98t","alignRight":"Button-module_alignRight__fVwXH","sort":"Button-module_sort__2rsQe","sortUp":"Button-module_sortUp__2D5ev","sortDown":"Button-module_sortDown__3gprf"};
styleInject(css_248z$d);

function Button(_a) {
    var children = _a.children, icon = _a.icon, className = _a.className, _b = _a.variants, variants = _b === void 0 ? [] : _b, _c = _a.iconPosition, iconPosition = _c === void 0 ? "left" : _c, props = __rest(_a, ["children", "icon", "className", "variants", "iconPosition"]);
    var variantStyles = classes(variants.map(function (c) { return style$b[c]; }));
    var containerClassName = classes([style$b.button, variantStyles, className]);
    var iconId = ["sort", "sortUp", "sortDown"].some(function (i) { return variants.includes(i); }) ? "sort" : icon;
    var iconElement = (jsx("span", __assign({ className: style$b.icon }, { children: jsx(Icon, { icon: iconId }) })));
    return (jsxs("button", __assign({}, props, { className: containerClassName }, { children: [!!iconId && iconPosition === "left" && iconElement, children && jsx("span", __assign({ className: style$b.label }, { children: children })), !!iconId && iconPosition === "right" && iconElement] })));
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal$1=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal$1,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

var has$1 = has$2;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = ReactPropTypesSecret$1;
  var loggedTypeFailures = {};
  var has = has$1;

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

var checkPropTypes = checkPropTypes_1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */








var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has$1(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret$1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var require$$1 = factoryWithTypeCheckers;

var require$$2 = factoryWithThrowingShims;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var propTypes$1 = createCommonjsModule(function (module) {
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require$$2();
}
});

var PropTypes = propTypes$1;

/**
 * defines a focus group
 */
var FOCUS_GROUP = 'data-focus-lock';
/**
 * disables element discovery inside a group marked by key
 */
var FOCUS_DISABLED = 'data-focus-lock-disabled';
/**
 * allows uncontrolled focus within the marked area, effectively disabling focus lock for it's content
 */
var FOCUS_ALLOW = 'data-no-focus-lock';
/**
 * instructs autofocus engine to pick default autofocus inside a given node
 * can be set on the element or container
 */
var FOCUS_AUTO = 'data-autofocus-inside';
/**
 * instructs autofocus to ignore elements within a given node
 * can be set on the element or container
 */
var FOCUS_NO_AUTOFOCUS = 'data-no-autofocus';

/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}

/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = useState(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}

/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    return useCallbackRef(defaultValue || null, function (newValue) { return refs.forEach(function (ref) { return assignRef(ref, newValue); }); });
}

var hiddenGuard = {
  width: '1px',
  height: '0px',
  padding: 0,
  overflow: 'hidden',
  position: 'fixed',
  top: '1px',
  left: '1px'
};

process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node
} : {};

function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = __assign({ async: true, ssr: false }, options);
    return medium;
}

var mediumFocus = createMedium({}, function (_ref) {
  var target = _ref.target,
      currentTarget = _ref.currentTarget;
  return {
    target: target,
    currentTarget: currentTarget
  };
});
var mediumBlur = createMedium();
var mediumEffect = createMedium();
var mediumSidecar = createSidecarMedium({
  async: true // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,

});

var emptyArray = [];
var FocusLock$1 = /*#__PURE__*/React.forwardRef(function FocusLockUI(props, parentRef) {
  var _extends2;

  var _React$useState = React.useState(),
      realObserved = _React$useState[0],
      setObserved = _React$useState[1];

  var observed = React.useRef();
  var isActive = React.useRef(false);
  var originalFocusedElement = React.useRef(null);
  var children = props.children,
      disabled = props.disabled,
      noFocusGuards = props.noFocusGuards,
      persistentFocus = props.persistentFocus,
      crossFrame = props.crossFrame,
      autoFocus = props.autoFocus,
      allowTextSelection = props.allowTextSelection,
      group = props.group,
      className = props.className,
      whiteList = props.whiteList,
      hasPositiveIndices = props.hasPositiveIndices,
      _props$shards = props.shards,
      shards = _props$shards === void 0 ? emptyArray : _props$shards,
      _props$as = props.as,
      Container = _props$as === void 0 ? 'div' : _props$as,
      _props$lockProps = props.lockProps,
      containerProps = _props$lockProps === void 0 ? {} : _props$lockProps,
      SideCar = props.sideCar,
      shouldReturnFocus = props.returnFocus,
      focusOptions = props.focusOptions,
      onActivationCallback = props.onActivation,
      onDeactivationCallback = props.onDeactivation;

  var _React$useState2 = React.useState({}),
      id = _React$useState2[0]; // SIDE EFFECT CALLBACKS


  var onActivation = React.useCallback(function () {
    originalFocusedElement.current = originalFocusedElement.current || document && document.activeElement;

    if (observed.current && onActivationCallback) {
      onActivationCallback(observed.current);
    }

    isActive.current = true;
  }, [onActivationCallback]);
  var onDeactivation = React.useCallback(function () {
    isActive.current = false;

    if (onDeactivationCallback) {
      onDeactivationCallback(observed.current);
    }
  }, [onDeactivationCallback]);
  useEffect(function () {
    if (!disabled) {
      // cleanup return focus on trap deactivation
      // sideEffect/returnFocus should happen by this time
      originalFocusedElement.current = null;
    }
  }, []);
  var returnFocus = React.useCallback(function (allowDefer) {
    var returnFocusTo = originalFocusedElement.current;

    if (returnFocusTo && returnFocusTo.focus) {
      var howToReturnFocus = typeof shouldReturnFocus === 'function' ? shouldReturnFocus(returnFocusTo) : shouldReturnFocus;

      if (howToReturnFocus) {
        var returnFocusOptions = typeof howToReturnFocus === 'object' ? howToReturnFocus : undefined;
        originalFocusedElement.current = null;

        if (allowDefer) {
          // React might return focus after update
          // it's safer to defer the action
          Promise.resolve().then(function () {
            return returnFocusTo.focus(returnFocusOptions);
          });
        } else {
          returnFocusTo.focus(returnFocusOptions);
        }
      }
    }
  }, [shouldReturnFocus]); // MEDIUM CALLBACKS

  var onFocus = React.useCallback(function (event) {
    if (isActive.current) {
      mediumFocus.useMedium(event);
    }
  }, []);
  var onBlur = mediumBlur.useMedium; // REF PROPAGATION
  // not using real refs due to race conditions

  var setObserveNode = React.useCallback(function (newObserved) {
    if (observed.current !== newObserved) {
      observed.current = newObserved;
      setObserved(newObserved);
    }
  }, []);

  if (process.env.NODE_ENV !== 'production') {
    if (typeof allowTextSelection !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn('React-Focus-Lock: allowTextSelection is deprecated and enabled by default');
    }

    React.useEffect(function () {
      // report incorrect integration - https://github.com/theKashey/react-focus-lock/issues/123
      if (!observed.current && typeof Container !== 'string') {
        // eslint-disable-next-line no-console
        console.error('FocusLock: could not obtain ref to internal node');
      }
    }, []);
  }

  var lockProps = _extends$2((_extends2 = {}, _extends2[FOCUS_DISABLED] = disabled && 'disabled', _extends2[FOCUS_GROUP] = group, _extends2), containerProps);

  var hasLeadingGuards = noFocusGuards !== true;
  var hasTailingGuards = hasLeadingGuards && noFocusGuards !== 'tail';
  var mergedRef = useMergeRefs([parentRef, setObserveNode]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, hasLeadingGuards && [
  /*#__PURE__*/
  // nearest focus guard
  React.createElement("div", {
    key: "guard-first",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }), // first tabbed element guard
  hasPositiveIndices ? /*#__PURE__*/React.createElement("div", {
    key: "guard-nearest",
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 1,
    style: hiddenGuard
  }) : null], !disabled && /*#__PURE__*/React.createElement(SideCar, {
    id: id,
    sideCar: mediumSidecar,
    observed: realObserved,
    disabled: disabled,
    persistentFocus: persistentFocus,
    crossFrame: crossFrame,
    autoFocus: autoFocus,
    whiteList: whiteList,
    shards: shards,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus,
    focusOptions: focusOptions
  }), /*#__PURE__*/React.createElement(Container, _extends$2({
    ref: mergedRef
  }, lockProps, {
    className: className,
    onBlur: onBlur,
    onFocus: onFocus
  }), children), hasTailingGuards && /*#__PURE__*/React.createElement("div", {
    "data-focus-guard": true,
    tabIndex: disabled ? -1 : 0,
    style: hiddenGuard
  }));
});
FocusLock$1.propTypes = process.env.NODE_ENV !== "production" ? {
  children: propTypes$1.node,
  disabled: propTypes$1.bool,
  returnFocus: propTypes$1.oneOfType([propTypes$1.bool, propTypes$1.object, propTypes$1.func]),
  focusOptions: propTypes$1.object,
  noFocusGuards: propTypes$1.bool,
  hasPositiveIndices: propTypes$1.bool,
  allowTextSelection: propTypes$1.bool,
  autoFocus: propTypes$1.bool,
  persistentFocus: propTypes$1.bool,
  crossFrame: propTypes$1.bool,
  group: propTypes$1.string,
  className: propTypes$1.string,
  whiteList: propTypes$1.func,
  shards: propTypes$1.arrayOf(propTypes$1.any),
  as: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.func, propTypes$1.object]),
  lockProps: propTypes$1.object,
  onActivation: propTypes$1.func,
  onDeactivation: propTypes$1.func,
  sideCar: propTypes$1.any.isRequired
} : {};
FocusLock$1.defaultProps = {
  children: undefined,
  disabled: false,
  returnFocus: false,
  focusOptions: undefined,
  noFocusGuards: false,
  autoFocus: true,
  persistentFocus: false,
  crossFrame: true,
  hasPositiveIndices: undefined,
  allowTextSelection: undefined,
  group: undefined,
  className: undefined,
  whiteList: undefined,
  shards: undefined,
  as: 'div',
  lockProps: {},
  onActivation: undefined,
  onDeactivation: undefined
};
var FocusLockUI = FocusLock$1;

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function withSideEffect(reducePropsToState, handleStateChangeOnClient) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof reducePropsToState !== 'function') {
      throw new Error('Expected reducePropsToState to be a function.');
    }

    if (typeof handleStateChangeOnClient !== 'function') {
      throw new Error('Expected handleStateChangeOnClient to be a function.');
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (process.env.NODE_ENV !== "production") {
      if (typeof WrappedComponent !== 'function') {
        throw new Error('Expected WrappedComponent to be a React component.');
      }
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));
      handleStateChangeOnClient(state);
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      var _proto = SideEffect.prototype;

      _proto.componentDidMount = function componentDidMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return /*#__PURE__*/React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    return SideEffect;
  };
}

/*
IE11 support
 */
var toArray = function (a) {
    var ret = Array(a.length);
    for (var i = 0; i < a.length; ++i) {
        ret[i] = a[i];
    }
    return ret;
};
var asArray = function (a) { return (Array.isArray(a) ? a : [a]); };
var getFirst = function (a) { return (Array.isArray(a) ? a[0] : a); };

var isElementHidden = function (node) {
    // we can measure only "elements"
    // consider others as "visible"
    if (node.nodeType !== Node.ELEMENT_NODE) {
        return false;
    }
    var computedStyle = window.getComputedStyle(node, null);
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
var getParentNode = function (node) {
    // DOCUMENT_FRAGMENT_NODE can also point on ShadowRoot. In this case .host will point on the next node
    return node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
        ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            node.parentNode.host
        : node.parentNode;
};
var isTopNode = function (node) {
    // @ts-ignore
    return node === document || (node && node.nodeType === Node.DOCUMENT_NODE);
};
var isVisibleUncached = function (node, checkParent) {
    return !node || isTopNode(node) || (!isElementHidden(node) && checkParent(getParentNode(node)));
};
var isVisibleCached = function (visibilityCache, node) {
    var cached = visibilityCache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isVisibleUncached(node, isVisibleCached.bind(undefined, visibilityCache));
    visibilityCache.set(node, result);
    return result;
};
var isAutoFocusAllowedUncached = function (node, checkParent) {
    return node && !isTopNode(node) ? (isAutoFocusAllowed(node) ? checkParent(getParentNode(node)) : false) : true;
};
var isAutoFocusAllowedCached = function (cache, node) {
    var cached = cache.get(node);
    if (cached !== undefined) {
        return cached;
    }
    var result = isAutoFocusAllowedUncached(node, isAutoFocusAllowedCached.bind(undefined, cache));
    cache.set(node, result);
    return result;
};
var getDataset = function (node) {
    // @ts-ignore
    return node.dataset;
};
var isHTMLButtonElement = function (node) { return node.tagName === 'BUTTON'; };
var isHTMLInputElement = function (node) { return node.tagName === 'INPUT'; };
var isRadioElement = function (node) {
    return isHTMLInputElement(node) && node.type === 'radio';
};
var notHiddenInput = function (node) {
    return !((isHTMLInputElement(node) || isHTMLButtonElement(node)) && (node.type === 'hidden' || node.disabled));
};
var isAutoFocusAllowed = function (node) {
    var attribute = node.getAttribute(FOCUS_NO_AUTOFOCUS);
    return ![true, 'true', ''].includes(attribute);
};
var isGuard = function (node) { var _a; return Boolean(node && ((_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.focusGuard)); };
var isNotAGuard = function (node) { return !isGuard(node); };
var isDefined = function (x) { return Boolean(x); };

var tabSort = function (a, b) {
    var tabDiff = a.tabIndex - b.tabIndex;
    var indexDiff = a.index - b.index;
    if (tabDiff) {
        if (!a.tabIndex) {
            return 1;
        }
        if (!b.tabIndex) {
            return -1;
        }
    }
    return tabDiff || indexDiff;
};
var orderByTabIndex = function (nodes, filterNegative, keepGuards) {
    return toArray(nodes)
        .map(function (node, index) { return ({
        node: node,
        index: index,
        tabIndex: keepGuards && node.tabIndex === -1 ? ((node.dataset || {}).focusGuard ? 0 : -1) : node.tabIndex,
    }); })
        .filter(function (data) { return !filterNegative || data.tabIndex >= 0; })
        .sort(tabSort);
};

/**
 * list of the object to be considered as focusable
 */
var tabbables = [
    'button:enabled',
    'select:enabled',
    'textarea:enabled',
    'input:enabled',
    // elements with explicit roles will also use explicit tabindex
    // '[role="button"]',
    'a[href]',
    'area[href]',
    'summary',
    'iframe',
    'object',
    'embed',
    'audio[controls]',
    'video[controls]',
    '[tabindex]',
    '[contenteditable]',
    '[autofocus]',
];

var queryTabbables = tabbables.join(',');
var queryGuardTabbables = "".concat(queryTabbables, ", [data-focus-guard]");
var getFocusablesWithShadowDom = function (parent, withGuards) {
    return toArray((parent.shadowRoot || parent).children).reduce(function (acc, child) {
        return acc.concat(child.matches(withGuards ? queryGuardTabbables : queryTabbables) ? [child] : [], getFocusablesWithShadowDom(child));
    }, []);
};
var getFocusablesWithIFrame = function (parent, withGuards) {
    var _a;
    // contentDocument of iframe will be null if current origin cannot access it
    if (parent instanceof HTMLIFrameElement && ((_a = parent.contentDocument) === null || _a === void 0 ? void 0 : _a.body)) {
        return getFocusables([parent.contentDocument.body], withGuards);
    }
    return [parent];
};
var getFocusables = function (parents, withGuards) {
    return parents.reduce(function (acc, parent) {
        var _a;
        var focusableWithShadowDom = getFocusablesWithShadowDom(parent, withGuards);
        var focusableWithIframes = (_a = []).concat.apply(_a, focusableWithShadowDom.map(function (node) { return getFocusablesWithIFrame(node, withGuards); }));
        return acc.concat(
        // add all tabbables inside and within shadow DOMs in DOM order
        focusableWithIframes, 
        // add if node is tabbable itself
        parent.parentNode
            ? toArray(parent.parentNode.querySelectorAll(queryTabbables)).filter(function (node) { return node === parent; })
            : []);
    }, []);
};
/**
 * return a list of focusable nodes within an area marked as "auto-focusable"
 * @param parent
 */
var getParentAutofocusables = function (parent) {
    var parentFocus = parent.querySelectorAll("[".concat(FOCUS_AUTO, "]"));
    return toArray(parentFocus)
        .map(function (node) { return getFocusables([node]); })
        .reduce(function (acc, nodes) { return acc.concat(nodes); }, []);
};

/**
 * given list of focusable elements keeps the ones user can interact with
 * @param nodes
 * @param visibilityCache
 */
var filterFocusable = function (nodes, visibilityCache) {
    return toArray(nodes)
        .filter(function (node) { return isVisibleCached(visibilityCache, node); })
        .filter(function (node) { return notHiddenInput(node); });
};
var filterAutoFocusable = function (nodes, cache) {
    if (cache === void 0) { cache = new Map(); }
    return toArray(nodes).filter(function (node) { return isAutoFocusAllowedCached(cache, node); });
};
/**
 * only tabbable ones
 * (but with guards which would be ignored)
 */
var getTabbableNodes = function (topNodes, visibilityCache, withGuards) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards), visibilityCache), true, withGuards);
};
/**
 * actually anything "focusable", not only tabbable
 * (without guards, as long as they are not expected to be focused)
 */
var getAllTabbableNodes = function (topNodes, visibilityCache) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes), visibilityCache), false);
};
/**
 * return list of nodes which are expected to be auto-focused
 * @param topNode
 * @param visibilityCache
 */
var parentAutofocusables = function (topNode, visibilityCache) {
    return filterFocusable(getParentAutofocusables(topNode), visibilityCache);
};
/*
 * Determines if element is contained in scope, including nested shadow DOMs
 */
var contains = function (scope, element) {
    if (scope.shadowRoot) {
        return contains(scope.shadowRoot, element);
    }
    else {
        if (Object.getPrototypeOf(scope).contains !== undefined &&
            Object.getPrototypeOf(scope).contains.call(scope, element)) {
            return true;
        }
        return toArray(scope.children).some(function (child) {
            var _a;
            if (child instanceof HTMLIFrameElement) {
                var iframeBody = (_a = child.contentDocument) === null || _a === void 0 ? void 0 : _a.body;
                if (iframeBody) {
                    return contains(iframeBody, element);
                }
                return false;
            }
            return contains(child, element);
        });
    }
};

/**
 * in case of multiple nodes nested inside each other
 * keeps only top ones
 * this is O(nlogn)
 * @param nodes
 * @returns {*}
 */
var filterNested = function (nodes) {
    var contained = new Set();
    var l = nodes.length;
    for (var i = 0; i < l; i += 1) {
        for (var j = i + 1; j < l; j += 1) {
            var position = nodes[i].compareDocumentPosition(nodes[j]);
            /* eslint-disable no-bitwise */
            if ((position & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
                contained.add(j);
            }
            if ((position & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
                contained.add(i);
            }
            /* eslint-enable */
        }
    }
    return nodes.filter(function (_, index) { return !contained.has(index); });
};
/**
 * finds top most parent for a node
 * @param node
 * @returns {*}
 */
var getTopParent = function (node) {
    return node.parentNode ? getTopParent(node.parentNode) : node;
};
/**
 * returns all "focus containers" inside a given node
 * @param node
 * @returns {T}
 */
var getAllAffectedNodes = function (node) {
    var nodes = asArray(node);
    return nodes.filter(Boolean).reduce(function (acc, currentNode) {
        var group = currentNode.getAttribute(FOCUS_GROUP);
        acc.push.apply(acc, (group
            ? filterNested(toArray(getTopParent(currentNode).querySelectorAll("[".concat(FOCUS_GROUP, "=\"").concat(group, "\"]:not([").concat(FOCUS_DISABLED, "=\"disabled\"])"))))
            : [currentNode]));
        return acc;
    }, []);
};

var safeProbe = function (cb) {
    try {
        return cb();
    }
    catch (e) {
        return undefined;
    }
};

/**
 * returns active element from document or from nested shadowdoms
 */
var getActiveElement = function (inDocument) {
    if (inDocument === void 0) { inDocument = document; }
    if (!inDocument || !inDocument.activeElement) {
        return undefined;
    }
    var activeElement = inDocument.activeElement;
    return (activeElement.shadowRoot
        ? getActiveElement(activeElement.shadowRoot)
        : activeElement instanceof HTMLIFrameElement && safeProbe(function () { return activeElement.contentWindow.document; })
            ? getActiveElement(activeElement.contentWindow.document)
            : activeElement);
};

var focusInFrame = function (frame, activeElement) { return frame === activeElement; };
var focusInsideIframe = function (topNode, activeElement) {
    return Boolean(toArray(topNode.querySelectorAll('iframe')).some(function (node) { return focusInFrame(node, activeElement); }));
};
/**
 * @returns {Boolean} true, if the current focus is inside given node or nodes
 */
var focusInside = function (topNode, activeElement) {
    // const activeElement = document && getActiveElement();
    if (activeElement === void 0) { activeElement = getActiveElement(getFirst(topNode).ownerDocument); }
    if (!activeElement || (activeElement.dataset && activeElement.dataset.focusGuard)) {
        return false;
    }
    return getAllAffectedNodes(topNode).some(function (node) {
        return contains(node, activeElement) || focusInsideIframe(node, activeElement);
    });
};

/**
 * focus is hidden FROM the focus-lock
 * ie contained inside a node focus-lock shall ignore
 * @returns {boolean} focus is currently is in "allow" area
 */
var focusIsHidden = function (inDocument) {
    if (inDocument === void 0) { inDocument = document; }
    var activeElement = getActiveElement(inDocument);
    if (!activeElement) {
        return false;
    }
    // this does not support setting FOCUS_ALLOW within shadow dom
    return toArray(inDocument.querySelectorAll("[".concat(FOCUS_ALLOW, "]"))).some(function (node) { return contains(node, activeElement); });
};

var findSelectedRadio = function (node, nodes) {
    return nodes
        .filter(isRadioElement)
        .filter(function (el) { return el.name === node.name; })
        .filter(function (el) { return el.checked; })[0] || node;
};
var correctNode = function (node, nodes) {
    if (isRadioElement(node) && node.name) {
        return findSelectedRadio(node, nodes);
    }
    return node;
};
/**
 * giving a set of radio inputs keeps only selected (tabbable) ones
 * @param nodes
 */
var correctNodes = function (nodes) {
    // IE11 has no Set(array) constructor
    var resultSet = new Set();
    nodes.forEach(function (node) { return resultSet.add(correctNode(node, nodes)); });
    // using filter to support IE11
    return nodes.filter(function (node) { return resultSet.has(node); });
};

var pickFirstFocus = function (nodes) {
    if (nodes[0] && nodes.length > 1) {
        return correctNode(nodes[0], nodes);
    }
    return nodes[0];
};
var pickFocusable = function (nodes, index) {
    if (nodes.length > 1) {
        return nodes.indexOf(correctNode(nodes[index], nodes));
    }
    return index;
};

var NEW_FOCUS = 'NEW_FOCUS';
/**
 * Main solver for the "find next focus" question
 * @param innerNodes
 * @param outerNodes
 * @param activeElement
 * @param lastNode
 * @returns {number|string|undefined|*}
 */
var newFocus = function (innerNodes, outerNodes, activeElement, lastNode) {
    var cnt = innerNodes.length;
    var firstFocus = innerNodes[0];
    var lastFocus = innerNodes[cnt - 1];
    var isOnGuard = isGuard(activeElement);
    // focus is inside
    if (activeElement && innerNodes.indexOf(activeElement) >= 0) {
        return undefined;
    }
    var activeIndex = activeElement !== undefined ? outerNodes.indexOf(activeElement) : -1;
    var lastIndex = lastNode ? outerNodes.indexOf(lastNode) : activeIndex;
    var lastNodeInside = lastNode ? innerNodes.indexOf(lastNode) : -1;
    var indexDiff = activeIndex - lastIndex;
    var firstNodeIndex = outerNodes.indexOf(firstFocus);
    var lastNodeIndex = outerNodes.indexOf(lastFocus);
    var correctedNodes = correctNodes(outerNodes);
    var correctedIndex = activeElement !== undefined ? correctedNodes.indexOf(activeElement) : -1;
    var correctedIndexDiff = correctedIndex - (lastNode ? correctedNodes.indexOf(lastNode) : activeIndex);
    var returnFirstNode = pickFocusable(innerNodes, 0);
    var returnLastNode = pickFocusable(innerNodes, cnt - 1);
    // new focus
    if (activeIndex === -1 || lastNodeInside === -1) {
        return NEW_FOCUS;
    }
    // old focus
    if (!indexDiff && lastNodeInside >= 0) {
        return lastNodeInside;
    }
    // first element
    if (activeIndex <= firstNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnLastNode;
    }
    // last element
    if (activeIndex >= lastNodeIndex && isOnGuard && Math.abs(indexDiff) > 1) {
        return returnFirstNode;
    }
    // jump out, but not on the guard
    if (indexDiff && Math.abs(correctedIndexDiff) > 1) {
        return lastNodeInside;
    }
    // focus above lock
    if (activeIndex <= firstNodeIndex) {
        return returnLastNode;
    }
    // focus below lock
    if (activeIndex > lastNodeIndex) {
        return returnFirstNode;
    }
    // index is inside tab order, but outside Lock
    if (indexDiff) {
        if (Math.abs(indexDiff) > 1) {
            return lastNodeInside;
        }
        return (cnt + lastNodeInside + indexDiff) % cnt;
    }
    // do nothing
    return undefined;
};

var findAutoFocused = function (autoFocusables) {
    return function (node) {
        var _a;
        var autofocus = (_a = getDataset(node)) === null || _a === void 0 ? void 0 : _a.autofocus;
        return (
        // @ts-expect-error
        node.autofocus ||
            //
            (autofocus !== undefined && autofocus !== 'false') ||
            //
            autoFocusables.indexOf(node) >= 0);
    };
};
var pickAutofocus = function (nodesIndexes, orderedNodes, groups) {
    var nodes = nodesIndexes.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var autoFocusable = filterAutoFocusable(nodes.filter(findAutoFocused(groups)));
    if (autoFocusable && autoFocusable.length) {
        return pickFirstFocus(autoFocusable);
    }
    return pickFirstFocus(filterAutoFocusable(orderedNodes));
};

var getParents = function (node, parents) {
    if (parents === void 0) { parents = []; }
    parents.push(node);
    if (node.parentNode) {
        getParents(node.parentNode.host || node.parentNode, parents);
    }
    return parents;
};
/**
 * finds a parent for both nodeA and nodeB
 * @param nodeA
 * @param nodeB
 * @returns {boolean|*}
 */
var getCommonParent = function (nodeA, nodeB) {
    var parentsA = getParents(nodeA);
    var parentsB = getParents(nodeB);
    // tslint:disable-next-line:prefer-for-of
    for (var i = 0; i < parentsA.length; i += 1) {
        var currentParent = parentsA[i];
        if (parentsB.indexOf(currentParent) >= 0) {
            return currentParent;
        }
    }
    return false;
};
var getTopCommonParent = function (baseActiveElement, leftEntry, rightEntries) {
    var activeElements = asArray(baseActiveElement);
    var leftEntries = asArray(leftEntry);
    var activeElement = activeElements[0];
    var topCommon = false;
    leftEntries.filter(Boolean).forEach(function (entry) {
        topCommon = getCommonParent(topCommon || entry, entry) || topCommon;
        rightEntries.filter(Boolean).forEach(function (subEntry) {
            var common = getCommonParent(activeElement, subEntry);
            if (common) {
                if (!topCommon || contains(common, topCommon)) {
                    topCommon = common;
                }
                else {
                    topCommon = getCommonParent(common, topCommon);
                }
            }
        });
    });
    // TODO: add assert here?
    return topCommon;
};
/**
 * return list of nodes which are expected to be autofocused inside a given top nodes
 * @param entries
 * @param visibilityCache
 */
var allParentAutofocusables = function (entries, visibilityCache) {
    return entries.reduce(function (acc, node) { return acc.concat(parentAutofocusables(node, visibilityCache)); }, []);
};

var reorderNodes = function (srcNodes, dstNodes) {
    var remap = new Map();
    // no Set(dstNodes) for IE11 :(
    dstNodes.forEach(function (entity) { return remap.set(entity.node, entity); });
    // remap to dstNodes
    return srcNodes.map(function (node) { return remap.get(node); }).filter(isDefined);
};
/**
 * given top node(s) and the last active element return the element to be focused next
 * @param topNode
 * @param lastNode
 */
var getFocusMerge = function (topNode, lastNode) {
    var activeElement = getActiveElement(asArray(topNode).length > 0 ? document : getFirst(topNode).ownerDocument);
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(activeElement || topNode, topNode, entries);
    var visibilityCache = new Map();
    var anyFocusable = getAllTabbableNodes(entries, visibilityCache);
    var innerElements = getTabbableNodes(entries, visibilityCache).filter(function (_a) {
        var node = _a.node;
        return isNotAGuard(node);
    });
    if (!innerElements[0]) {
        innerElements = anyFocusable;
        if (!innerElements[0]) {
            return undefined;
        }
    }
    var outerNodes = getAllTabbableNodes([commonParent], visibilityCache).map(function (_a) {
        var node = _a.node;
        return node;
    });
    var orderedInnerElements = reorderNodes(outerNodes, innerElements);
    var innerNodes = orderedInnerElements.map(function (_a) {
        var node = _a.node;
        return node;
    });
    var newId = newFocus(innerNodes, outerNodes, activeElement, lastNode);
    if (newId === NEW_FOCUS) {
        var focusNode = pickAutofocus(anyFocusable, innerNodes, allParentAutofocusables(entries, visibilityCache));
        if (focusNode) {
            return { node: focusNode };
        }
        else {
            console.warn('focus-lock: cannot find any node to move focus into');
            return undefined;
        }
    }
    if (newId === undefined) {
        return newId;
    }
    return orderedInnerElements[newId];
};

/**
 * return list of focusable elements inside a given top node
 * @deprecated use {@link getFocusableIn}. Yep, there is typo in the function name
 */
var getFocusabledIn = function (topNode) {
    var entries = getAllAffectedNodes(topNode).filter(isNotAGuard);
    var commonParent = getTopCommonParent(topNode, topNode, entries);
    var visibilityCache = new Map();
    var outerNodes = getTabbableNodes([commonParent], visibilityCache, true);
    var innerElements = getTabbableNodes(entries, visibilityCache)
        .filter(function (_a) {
        var node = _a.node;
        return isNotAGuard(node);
    })
        .map(function (_a) {
        var node = _a.node;
        return node;
    });
    return outerNodes.map(function (_a) {
        var node = _a.node, index = _a.index;
        return ({
            node: node,
            index: index,
            lockItem: innerElements.indexOf(node) >= 0,
            guard: isGuard(node),
        });
    });
};

var focusOn = function (target, focusOptions) {
    if ('focus' in target) {
        target.focus(focusOptions);
    }
    if ('contentWindow' in target && target.contentWindow) {
        target.contentWindow.focus();
    }
};
var guardCount = 0;
var lockDisabled = false;
/**
 * Sets focus at a given node. The last focused element will help to determine which element(first or last) should be focused.
 * HTML markers (see {@link import('./constants').FOCUS_AUTO} constants) can control autofocus
 * @param topNode
 * @param lastNode
 * @param options
 */
var setFocus = function (topNode, lastNode, options) {
    if (options === void 0) { options = {}; }
    var focusable = getFocusMerge(topNode, lastNode);
    if (lockDisabled) {
        return;
    }
    if (focusable) {
        if (guardCount > 2) {
            // tslint:disable-next-line:no-console
            console.error('FocusLock: focus-fighting detected. Only one focus management system could be active. ' +
                'See https://github.com/theKashey/focus-lock/#focus-fighting');
            lockDisabled = true;
            setTimeout(function () {
                lockDisabled = false;
            }, 1);
            return;
        }
        guardCount++;
        focusOn(focusable.node, options.focusOptions);
        guardCount--;
    }
};

var moveFocusInside = setFocus;
//

function deferAction(action) {
  // Hidding setImmediate from Webpack to avoid inserting polyfill
  var _window = window,
      setImmediate = _window.setImmediate;

  if (typeof setImmediate !== 'undefined') {
    setImmediate(action);
  } else {
    setTimeout(action, 1);
  }
}

/* eslint-disable no-mixed-operators */

var focusOnBody = function focusOnBody() {
  return document && document.activeElement === document.body;
};

var isFreeFocus = function isFreeFocus() {
  return focusOnBody() || focusIsHidden();
};

var lastActiveTrap = null;
var lastActiveFocus = null;
var lastPortaledElement = null;
var focusWasOutsideWindow = false;

var defaultWhitelist = function defaultWhitelist() {
  return true;
};

var focusWhitelisted = function focusWhitelisted(activeElement) {
  return (lastActiveTrap.whiteList || defaultWhitelist)(activeElement);
};

var recordPortal = function recordPortal(observerNode, portaledElement) {
  lastPortaledElement = {
    observerNode: observerNode,
    portaledElement: portaledElement
  };
};

var focusIsPortaledPair = function focusIsPortaledPair(element) {
  return lastPortaledElement && lastPortaledElement.portaledElement === element;
};

function autoGuard(startIndex, end, step, allNodes) {
  var lastGuard = null;
  var i = startIndex;

  do {
    var item = allNodes[i];

    if (item.guard) {
      if (item.node.dataset.focusAutoGuard) {
        lastGuard = item;
      }
    } else if (item.lockItem) {
      if (i !== startIndex) {
        // we will tab to the next element
        return;
      }

      lastGuard = null;
    } else {
      break;
    }
  } while ((i += step) !== end);

  if (lastGuard) {
    lastGuard.node.tabIndex = 0;
  }
}

var extractRef = function extractRef(ref) {
  return ref && 'current' in ref ? ref.current : ref;
};

var focusWasOutside = function focusWasOutside(crossFrameOption) {
  if (crossFrameOption) {
    // with cross frame return true for any value
    return Boolean(focusWasOutsideWindow);
  } // in other case return only of focus went a while aho


  return focusWasOutsideWindow === 'meanwhile';
};

var checkInHost = function checkInHost(check, el, boundary) {
  return el && ( // find host equal to active element and check nested active element
  el.host === check && (!el.activeElement || boundary.contains(el.activeElement)) // dive up
  || el.parentNode && checkInHost(check, el.parentNode, boundary));
};

var withinHost = function withinHost(activeElement, workingArea) {
  return workingArea.some(function (area) {
    return checkInHost(activeElement, area, area);
  });
};

var activateTrap = function activateTrap() {
  var result = false;

  if (lastActiveTrap) {
    var _lastActiveTrap = lastActiveTrap,
        observed = _lastActiveTrap.observed,
        persistentFocus = _lastActiveTrap.persistentFocus,
        autoFocus = _lastActiveTrap.autoFocus,
        shards = _lastActiveTrap.shards,
        crossFrame = _lastActiveTrap.crossFrame,
        focusOptions = _lastActiveTrap.focusOptions;
    var workingNode = observed || lastPortaledElement && lastPortaledElement.portaledElement;
    var activeElement = document && document.activeElement;

    if (workingNode) {
      var workingArea = [workingNode].concat(shards.map(extractRef).filter(Boolean));

      if (!activeElement || focusWhitelisted(activeElement)) {
        if (persistentFocus || focusWasOutside(crossFrame) || !isFreeFocus() || !lastActiveFocus && autoFocus) {
          if (workingNode && !( // active element is "inside" working area
          focusInside(workingArea) || // check for shadow-dom contained elements
          activeElement && withinHost(activeElement, workingArea) || focusIsPortaledPair(activeElement))) {
            if (document && !lastActiveFocus && activeElement && !autoFocus) {
              // Check if blur() exists, which is missing on certain elements on IE
              if (activeElement.blur) {
                activeElement.blur();
              }

              document.body.focus();
            } else {
              result = moveFocusInside(workingArea, lastActiveFocus, {
                focusOptions: focusOptions
              });
              lastPortaledElement = {};
            }
          }

          focusWasOutsideWindow = false;
          lastActiveFocus = document && document.activeElement;
        }
      }

      if (document) {
        var newActiveElement = document && document.activeElement;
        var allNodes = getFocusabledIn(workingArea);
        var focusedIndex = allNodes.map(function (_ref) {
          var node = _ref.node;
          return node;
        }).indexOf(newActiveElement);

        if (focusedIndex > -1) {
          // remove old focus
          allNodes.filter(function (_ref2) {
            var guard = _ref2.guard,
                node = _ref2.node;
            return guard && node.dataset.focusAutoGuard;
          }).forEach(function (_ref3) {
            var node = _ref3.node;
            return node.removeAttribute('tabIndex');
          });
          autoGuard(focusedIndex, allNodes.length, +1, allNodes);
          autoGuard(focusedIndex, -1, -1, allNodes);
        }
      }
    }
  }

  return result;
};

var onTrap = function onTrap(event) {
  if (activateTrap() && event) {
    // prevent scroll jump
    event.stopPropagation();
    event.preventDefault();
  }
};

var onBlur = function onBlur() {
  return deferAction(activateTrap);
};

var onFocus = function onFocus(event) {
  // detect portal
  var source = event.target;
  var currentNode = event.currentTarget;

  if (!currentNode.contains(source)) {
    recordPortal(currentNode, source);
  }
};

var FocusWatcher = function FocusWatcher() {
  return null;
};

process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node.isRequired
} : {};

var onWindowBlur = function onWindowBlur() {
  focusWasOutsideWindow = 'just'; // using setTimeout to set  this variable after React/sidecar reaction

  setTimeout(function () {
    focusWasOutsideWindow = 'meanwhile';
  }, 0);
};

var attachHandler = function attachHandler() {
  document.addEventListener('focusin', onTrap);
  document.addEventListener('focusout', onBlur);
  window.addEventListener('blur', onWindowBlur);
};

var detachHandler = function detachHandler() {
  document.removeEventListener('focusin', onTrap);
  document.removeEventListener('focusout', onBlur);
  window.removeEventListener('blur', onWindowBlur);
};

function reducePropsToState(propsList) {
  return propsList.filter(function (_ref5) {
    var disabled = _ref5.disabled;
    return !disabled;
  });
}

function handleStateChangeOnClient(traps) {
  var trap = traps.slice(-1)[0];

  if (trap && !lastActiveTrap) {
    attachHandler();
  }

  var lastTrap = lastActiveTrap;
  var sameTrap = lastTrap && trap && trap.id === lastTrap.id;
  lastActiveTrap = trap;

  if (lastTrap && !sameTrap) {
    lastTrap.onDeactivation(); // return focus only of last trap was removed

    if (!traps.filter(function (_ref6) {
      var id = _ref6.id;
      return id === lastTrap.id;
    }).length) {
      // allow defer is no other trap is awaiting restore
      lastTrap.returnFocus(!trap);
    }
  }

  if (trap) {
    lastActiveFocus = null;

    if (!sameTrap || lastTrap.observed !== trap.observed) {
      trap.onActivation();
    }

    activateTrap();
    deferAction(activateTrap);
  } else {
    detachHandler();
    lastActiveFocus = null;
  }
} // bind medium


mediumFocus.assignSyncMedium(onFocus);
mediumBlur.assignMedium(onBlur);
mediumEffect.assignMedium(function (cb) {
  return cb({
    moveFocusInside: moveFocusInside,
    focusInside: focusInside
  });
});
var FocusTrap = withSideEffect(reducePropsToState, handleStateChangeOnClient)(FocusWatcher);

/* that would be a BREAKING CHANGE!
// delaying sidecar execution till the first usage
const RequireSideCar = (props) => {
  // eslint-disable-next-line global-require
  const SideCar = require('./Trap').default;
  return <SideCar {...props} />;
};
*/

var FocusLockCombination = /*#__PURE__*/React.forwardRef(function FocusLockUICombination(props, ref) {
  return /*#__PURE__*/React.createElement(FocusLockUI, _extends$2({
    sideCar: FocusTrap,
    ref: ref
  }, props));
});

var _ref = FocusLockUI.propTypes || {};
    _ref.sideCar;
    var propTypes = _objectWithoutPropertiesLoose(_ref, ["sideCar"]);

FocusLockCombination.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var FocusLock = FocusLockCombination;

function useClickOutside(ref, callback) {
    var staticCallback = useCallback(callback, []);
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref && (ref === null || ref === void 0 ? void 0 : ref.current) && !ref.current.contains(event.target))
                staticCallback(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, staticCallback]);
}

var css_248z$c = ".Dialog-module_container__2hmYY {\n  display: inline-block;\n  position: relative;\n}\n\n.Dialog-module_menu__1It58 {\n  align-items: center;\n  border-radius: var(--border-radius-1);\n  cursor: pointer;\n  display: flex;\n  font-weight: 500;\n  justify-content: center;\n  padding: var(--m-xxs) var(--m-xs);\n}\n.Dialog-module_icon__F-oji {\n  align-items: center;\n  display: flex;\n  fill: currentColor;\n  justify-content: center;\n  order: 2;\n  cursor: pointer;\n}\n.Dialog-module_icon__F-oji.Dialog-module_iconLeft__x7Ga7 {\n  order: 0;\n}\n\n.Dialog-module_text__1Pe4s {\n  order: 1;\n  margin-right: var(--m-xs);\n}\n\n.Dialog-module_items__2iext {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  background-color: var(--color-background-menu);\n  border-radius: var(--border-radius-2);\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n  border: 1px solid var(--color-border);\n  min-width: 100px;\n  overflow: hidden;\n  position: absolute;\n  right: 0;\n  top: 100%;\n  z-index: 2;\n  padding: var(--m-xxxxs);\n  margin-top: 3px;\n}\n.Dialog-module_left__3jyvJ .Dialog-module_items__2iext {\n  right: auto;\n  left: 0;\n}\n\n.Dialog-module_item__syjMB.Dialog-module_item__syjMB {\n  position: relative;\n}\n.Dialog-module_item__syjMB.Dialog-module_item__syjMB::before {\n  content: \"\";\n  position: absolute;\n  inset: -1px 0 0;\n  z-index: -1;\n  background-color: var(--color-background-menu-hover);\n  border-radius: var(--border-radius-2);\n  opacity: 0;\n}\n.Dialog-module_item__syjMB.Dialog-module_item__syjMB:hover::before, .Dialog-module_item__syjMB.Dialog-module_item__syjMB.Dialog-module_active__2b3rI::before {\n  opacity: 1;\n}\n.Dialog-module_item__syjMB.Dialog-module_item__syjMB.Dialog-module_active__2b3rI {\n  cursor: default;\n}\n.Dialog-module_item__syjMB.Dialog-module_item__syjMB::after {\n  content: \"\";\n  position: absolute;\n  inset: auto var(--m-xxxs) 0 var(--m-xxxs);\n  height: 1px;\n}\n.Dialog-module_item__syjMB.Dialog-module_item__syjMB:last-child::after {\n  display: none;\n}\n\n.Dialog-module_tooltip__2gG4o {\n  display: none;\n  position: absolute;\n  z-index: 2;\n  top: 100%;\n  left: 50%;\n  margin-top: var(--m-xxs);\n  padding: var(--m-xs);\n  width: 220px;\n  transform: translate(-50%, 0);\n}\n.Dialog-module_container__2hmYY:hover .Dialog-module_tooltip__2gG4o {\n  display: block;\n}\n.Dialog-module_tooltip__2gG4o::after {\n  content: \"\";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border-right: var(--m-xxxs) solid transparent;\n  border-left: var(--m-xxxs) solid transparent;\n  transform: translate(-50%, 0);\n}";
var style$a = {"container":"Dialog-module_container__2hmYY","menu":"Dialog-module_menu__1It58","icon":"Dialog-module_icon__F-oji","iconLeft":"Dialog-module_iconLeft__x7Ga7","text":"Dialog-module_text__1Pe4s","items":"Dialog-module_items__2iext","left":"Dialog-module_left__3jyvJ","item":"Dialog-module_item__syjMB","active":"Dialog-module_active__2b3rI","tooltip":"Dialog-module_tooltip__2gG4o"};
styleInject(css_248z$c);

function Dialog(_a) {
    var _b;
    var _c = _a.icon, icon = _c === void 0 ? "ellipsis" : _c, _d = _a.variants, variants = _d === void 0 ? ["bare"] : _d, _e = _a.iconPosition, iconPosition = _e === void 0 ? "right" : _e, items = _a.items, _f = _a.dialogPosition, dialogPosition = _f === void 0 ? "right" : _f, useActiveAsLabel = _a.useActiveAsLabel, props = __rest(_a, ["icon", "variants", "iconPosition", "items", "dialogPosition", "useActiveAsLabel"]);
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var ref = useRef(null);
    useClickOutside(ref, function () { return setOpen(false); });
    var handleClick = function (item) { return function () {
        (item === null || item === void 0 ? void 0 : item.action) && item.action(item.id || null);
        setOpen(false);
    }; };
    var containerClasses = classes([style$a.container, style$a[dialogPosition]]);
    var className = classes([style$a.menu]);
    var buttonProps = __assign({ icon: icon, variants: variants, iconPosition: iconPosition, className: className }, props);
    return (jsxs("div", __assign({ ref: ref, className: containerClasses }, { children: [jsx(Button, __assign({}, buttonProps, { type: "button", onClick: function () { return setOpen(!open); } }, { children: (useActiveAsLabel && ((_b = items.find(function (item) { return item.active; })) === null || _b === void 0 ? void 0 : _b.children)) || props.children })), open && (jsx(FocusLock, __assign({ className: style$a.items }, { children: items.map(function (item, i) {
                    item.id; var active = item.active; item.action; var props = __rest(item, ["id", "active", "action"]);
                    return !active || !useActiveAsLabel ? (createElement(Button, __assign({}, props, { variants: ["bare", "alignLeft"], type: "button", key: i, onClick: handleClick(item), className: classes([style$a.item, active && style$a.active]), iconPosition: "right" }), item.children)) : null;
                }) })))] })));
}

var css_248z$b = ".Errors-module_errors__6aTHd {\n  color: var(--color-text-error);\n  margin: var(--m-xs) 0;\n}\n.Errors-module_errors__6aTHd p {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: var(--m-xxs);\n  text-align: left;\n}";
var style$9 = {"errors":"Errors-module_errors__6aTHd"};
styleInject(css_248z$b);

function Errors(_a) {
    var error = _a.error;
    return error ? (jsx("div", __assign({ className: style$9.errors }, { children: jsxs("p", { children: [jsx(Icon, { icon: "error" }), error.toString()] }) }))) : null;
}

var css_248z$a = ".Input-module_container__2vRqg {\n  margin-bottom: var(--m);\n  text-align: left;\n}\n.Input-module_container__2vRqg:only-child {\n  margin: var(--m-xxs) 0;\n}\n.Input-module_container__2vRqg:has(input[disabled]) .Input-module_label__26F6R {\n  cursor: default;\n}\n\n.Input-module_label__26F6R {\n  display: inline-block;\n  margin-bottom: var(--m-xxs);\n  cursor: pointer;\n  line-height: 1;\n  font-weight: 500;\n  font-family: var(--font-family-1);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.Input-module_inputWrapper__btob5 {\n  background-color: var(--color-input-background);\n  border-radius: var(--border-radius-2);\n  outline: 2px solid transparent;\n  padding: calc(var(--m-xxs) / 2);\n  border: 1px solid var(--color-border);\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  min-width: 270px;\n  position: relative;\n}\n.Input-module_inputWrapper__btob5 svg {\n  display: block;\n}\n.Input-module_inputWrapper__btob5:focus-within {\n  outline-color: var(--color-text);\n  z-index: 11;\n}\n.Input-module_inputWrapper__btob5:focus-within .Input-module_icon__1V_KI svg:not([data-stroke=no-stroke]) path {\n  stroke: var(--color-text);\n}\n.Input-module_inputWrapper__btob5:focus-within .Input-module_options__3bATo {\n  display: flex;\n}\n.Input-module_inputWrapper__btob5:has(> [error]), .Input-module_inputWrapper__btob5.Input-module_hasError__2t2GZ {\n  border-color: var(--color-text-error);\n}\n.Input-module_inputWrapper__btob5:has(> [error]) .Input-module_icon__1V_KI svg:not([data-stroke=no-stroke]) path, .Input-module_inputWrapper__btob5.Input-module_hasError__2t2GZ .Input-module_icon__1V_KI svg:not([data-stroke=no-stroke]) path {\n  stroke: var(--color-text-error);\n}\n.Input-module_inputWrapper__btob5:has(> [disabled]) {\n  background-color: var(--color-input-disabled);\n  color: var(--color-input-text-disabled);\n}\n.Input-module_inputWrapper__btob5:has(> [disabled]) .Input-module_icon__1V_KI.Input-module_dropdownIcon__2zVHy {\n  cursor: default;\n}\n.Input-module_inputWrapper__btob5 .Input-module_icon__1V_KI {\n  padding: 0 var(--m-xxxs);\n  cursor: pointer;\n  display: flex;\n}\n.Input-module_inputWrapper__btob5 .Input-module_icon__1V_KI button {\n  background: none;\n  padding: 0;\n  border: none;\n  cursor: pointer;\n}\n.Input-module_inputWrapper__btob5 .Input-module_icon__1V_KI svg:not([data-stroke=no-stroke]) path {\n  display: block;\n  stroke: var(--color-text-soft);\n}\n.Input-module_inputWrapper__btob5 input,\n.Input-module_inputWrapper__btob5 select,\n.Input-module_inputWrapper__btob5 textarea {\n  -webkit-tap-highlight-color: transparent;\n  appearance: none;\n  resize: none;\n  width: 100%;\n  display: block;\n  padding: calc(var(--m-xxs) / 2);\n  border: none;\n  background-color: transparent;\n  flex-grow: 1;\n  color: var(--color-text);\n}\n.Input-module_inputWrapper__btob5 input::-webkit-input-placeholder, .Input-module_inputWrapper__btob5 select::-webkit-input-placeholder, .Input-module_inputWrapper__btob5 textarea::-webkit-input-placeholder {\n  color: var(--color-text-soft);\n}\n\n.Input-module_inputWrapper__btob5 input:-moz-placeholder, .Input-module_inputWrapper__btob5 select:-moz-placeholder, .Input-module_inputWrapper__btob5 textarea:-moz-placeholder {\n  color: var(--color-text-soft);\n}\n\n.Input-module_inputWrapper__btob5 input::-moz-placeholder, .Input-module_inputWrapper__btob5 select::-moz-placeholder, .Input-module_inputWrapper__btob5 textarea::-moz-placeholder {\n  color: var(--color-text-soft);\n}\n\n.Input-module_inputWrapper__btob5 input:-ms-input-placeholder, .Input-module_inputWrapper__btob5 select:-ms-input-placeholder, .Input-module_inputWrapper__btob5 textarea:-ms-input-placeholder {\n  color: var(--color-text-soft);\n}\n\n.Input-module_inputWrapper__btob5 input option:disabled,\n.Input-module_inputWrapper__btob5 select option:disabled,\n.Input-module_inputWrapper__btob5 textarea option:disabled {\n  color: var(--color-text-soft);\n}\n.Input-module_inputWrapper__btob5 input option:not([value]),\n.Input-module_inputWrapper__btob5 select option:not([value]),\n.Input-module_inputWrapper__btob5 textarea option:not([value]) {\n  display: none;\n}\n.Input-module_inputWrapper__btob5 input:focus,\n.Input-module_inputWrapper__btob5 select:focus,\n.Input-module_inputWrapper__btob5 textarea:focus {\n  outline: none;\n}\n.Input-module_inputWrapper__btob5 select option {\n  background-color: var(--color-input-background);\n  border: none;\n  padding: var(--m);\n}\n.Input-module_fluid__vKx-L .Input-module_inputWrapper__btob5 {\n  min-width: auto;\n}\n.Input-module_small__1aDJR .Input-module_inputWrapper__btob5 {\n  padding: 0 var(--m-xxxs);\n  min-width: auto;\n  border-radius: var(--border-radius-1);\n}\n.Input-module_small__1aDJR .Input-module_inputWrapper__btob5 .Input-module_options__3bATo {\n  border-radius: var(--border-radius-1);\n}\n.Input-module_small__1aDJR .Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT {\n  border-radius: var(--border-radius-1);\n}\n.Input-module_inputWrapper__btob5 .Input-module_select__2f9GN:not([disabled]) {\n  cursor: pointer;\n}\n.Input-module_inputWrapper__btob5 .Input-module_options__3bATo {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  left: 0;\n  margin-top: 2px;\n  background-color: var(--color-input-background);\n  border-radius: var(--border-radius-2);\n  padding: var(--m-xxxxs);\n  outline: 2px solid var(--color-text);\n  display: flex;\n  flex-direction: column;\n  gap: var(--m-xxxxs);\n  display: none;\n}\n.Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT {\n  padding: var(--m-xxs) var(--m-xxs);\n  border-radius: var(--border-radius-2);\n}\n.Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT[disabled] {\n  color: var(--color-text-soft);\n}\n.Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT:not([disabled]) {\n  cursor: pointer;\n}\n.Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT:not([disabled]):hover, .Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT:not([disabled]):focus, .Input-module_inputWrapper__btob5 .Input-module_options__3bATo .Input-module_option__oEmiT:not([disabled]).Input-module_selected__3L91k {\n  background-color: var(--color-background-menu-hover);\n}\n\n.Input-module_error__1WPGl {\n  color: var(--color-text-error);\n  margin-top: var(--m-xxs);\n  line-height: 1;\n  font-weight: 400;\n}\n\n.Input-module_footer__17bQ5 {\n  color: var(--color-text-soft);\n  margin-top: var(--m-xxs);\n  line-height: 1;\n  font-weight: 400;\n}";
var style$8 = {"container":"Input-module_container__2vRqg","label":"Input-module_label__26F6R","inputWrapper":"Input-module_inputWrapper__btob5","icon":"Input-module_icon__1V_KI","options":"Input-module_options__3bATo","hasError":"Input-module_hasError__2t2GZ","dropdownIcon":"Input-module_dropdownIcon__2zVHy","fluid":"Input-module_fluid__vKx-L","small":"Input-module_small__1aDJR","option":"Input-module_option__oEmiT","select":"Input-module_select__2f9GN","selected":"Input-module_selected__3L91k","error":"Input-module_error__1WPGl","footer":"Input-module_footer__17bQ5"};
styleInject(css_248z$a);

function Input(_a) {
    var _b = _a.as, as = _b === void 0 ? "input" : _b, label = _a.label, icon = _a.icon, iconAfter = _a.iconAfter, error = _a.error, options = _a.options, className = _a.className, _c = _a.variants, variants = _c === void 0 ? [] : _c, children = _a.children, props = __rest(_a, ["as", "label", "icon", "iconAfter", "error", "options", "className", "variants", "children"]);
    var Element = as;
    var variantStyles = classes(variants.map(function (c) { return style$8[c]; }));
    var containerClassName = classes([style$8.container, variantStyles, className]);
    var icon1 = icon && (jsx("span", __assign({ className: style$8.icon }, { children: jsx(Icon, { icon: icon }) })));
    var icon2 = iconAfter ? (jsx("span", __assign({ className: style$8.icon }, { children: typeof iconAfter === "string" ? jsx(Icon, { icon: iconAfter }) : iconAfter }))) : (error && (jsx("span", __assign({ className: style$8.icon }, { children: jsx(Icon, { icon: "error" }) }))));
    var iconSelect = options && (jsx("span", __assign({ className: classes([style$8.icon, style$8.dropdownIcon]) }, { children: jsx(Icon, { icon: "arrowHeadDown" }) })));
    var selectElement = options && options && jsx(Select, __assign({ options: options }, props));
    var inputWrapper = (jsxs("div", __assign({ className: classes([style$8.inputWrapper, error && style$8.hasError]) }, { children: [icon1, selectElement || jsx(Element, __assign({}, props, (options ? { type: "text" } : {}))), iconSelect, icon2] })));
    return (jsxs("div", __assign({ className: containerClassName }, { children: [label ? (jsxs("label", { children: [jsx("span", __assign({ className: style$8.label }, { children: label })), inputWrapper] })) : (inputWrapper), error && jsx("div", __assign({ className: style$8.error }, { children: error })), children && jsx("div", __assign({ className: style$8.footer }, { children: children }))] })));
}
function Select(_a) {
    var _b = _a.options, options = _b === void 0 ? {} : _b, props = __rest(_a, ["options"]);
    var onChangeOption = function (e) {
        var value = e.target.value;
        (props === null || props === void 0 ? void 0 : props.onChange) && (props === null || props === void 0 ? void 0 : props.onChange(value));
        e.target.blur();
    };
    var selectedKey = Object.keys(options).find(function (k) { return options[k].value === props.value; }) || "";
    return (jsxs(Fragment$1, { children: [jsx("input", __assign({}, props, { value: selectedKey, className: style$8.select, readOnly: true })), jsx("div", __assign({ className: style$8.options }, { children: Object.keys(options).map(function (k) { return (jsx("button", __assign({ className: classes([style$8.option, options[k].value === props.value && style$8.selected]), type: "button" }, options[k], { onClick: onChangeOption }, { children: k }), k)); }) }))] }));
}

var css_248z$9 = ".Loader-module_container__2cVGr {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}";
var style$7 = {"container":"Loader-module_container__2cVGr"};
styleInject(css_248z$9);

var css_248z$8 = ".Tableflow-module_tableflow__1Idr2 svg {\n  width: auto;\n  display: block;\n}\n.Tableflow-module_tableflow__1Idr2.Tableflow-module_small__2B5rx svg {\n  height: 20px;\n}\n.Tableflow-module_tableflow__1Idr2.Tableflow-module_normal__2McCJ svg {\n  height: 26px;\n}\n.Tableflow-module_tableflow__1Idr2.Tableflow-module_big__9nhtU svg {\n  height: 32px;\n}\n\nbody[data-theme=light] svg path.letter {\n  fill: var(--color-tableflow-text) !important;\n}";
var style$6 = {"tableflow":"Tableflow-module_tableflow__1Idr2","small":"Tableflow-module_small__2B5rx","normal":"Tableflow-module_normal__2McCJ","big":"Tableflow-module_big__9nhtU"};
styleInject(css_248z$8);

var _path$1, _path2$1, _path3$1, _path4$1, _path5$1, _path6$1, _path7$1, _path8$1, _path9$1;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgTableflowLogoColor = function SvgTableflowLogoColor(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    width: 95,
    height: 20,
    viewBox: "0 0 95 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M25.8834 0H23.5005V14.522H25.8834V0Z",
    fill: "white",
    className: "letter"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    d: "M35.6305 3.38601C36.3482 3.76246 36.9082 4.31879 37.3125 5.0587C37.7168 5.79677 37.9189 6.68875 37.9189 7.73279V14.5237H35.5582V8.08884C35.5582 7.05778 35.3004 6.26779 34.7849 5.71703C34.2694 5.16626 33.5666 4.89181 32.6746 4.89181C31.7826 4.89181 31.0761 5.16626 30.5531 5.71703C30.0302 6.26779 29.7687 7.05778 29.7687 8.08884V14.5237H27.3857V3.00956H29.7687V4.32621C30.1581 3.85333 30.657 3.4843 31.2634 3.21912C31.8698 2.95393 32.5132 2.82227 33.1957 2.82227C34.1006 2.82227 34.9129 3.00956 35.6305 3.38601Z",
    fill: "white",
    className: "letter"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/React.createElement("path", {
    d: "M39.6823 5.64285C40.1626 4.75273 40.8172 4.05917 41.6461 3.56404C42.4751 3.0689 43.3986 2.82227 44.4148 2.82227C45.3068 2.82227 46.0968 3.004 46.7866 3.36562C47.4765 3.72723 48.0087 4.16673 48.3851 4.68226V3.01142H50.7885V19.9998H48.3851V12.8529C48.0087 13.3684 47.4653 13.8079 46.7551 14.1695C46.0448 14.5311 45.2363 14.7129 44.3314 14.7129C43.3411 14.7129 42.4398 14.4588 41.6257 13.9507C40.8098 13.4426 40.1626 12.7323 39.6823 11.82C39.202 10.9076 38.9609 9.8728 38.9609 8.71749C38.9609 7.56218 39.202 6.53668 39.6823 5.6447M47.8937 6.68875C47.5655 6.1046 47.1371 5.65769 46.6086 5.35171C46.0801 5.04573 45.5089 4.89181 44.8951 4.89181C44.2813 4.89181 43.7101 5.04202 43.1816 5.34058C42.6512 5.641 42.2247 6.07864 41.8965 6.65723C41.5683 7.23581 41.4051 7.92194 41.4051 8.71564C41.4051 9.50933 41.5683 10.2066 41.8965 10.8056C42.2229 11.4046 42.655 11.8607 43.1909 12.1741C43.7268 12.4875 44.2943 12.6452 44.8932 12.6452C45.4922 12.6452 46.0764 12.4913 46.6067 12.1853C47.1352 11.8793 47.5636 11.4305 47.8919 10.8371C48.2201 10.2455 48.3833 9.55198 48.3833 8.75829C48.3833 7.96459 48.2201 7.27475 47.8919 6.6906",
    fill: "white",
    className: "letter"
  })), _path4$1 || (_path4$1 = /*#__PURE__*/React.createElement("path", {
    d: "M62.6993 3.00977V14.5239H60.3163V13.1665C59.9399 13.6393 59.4503 14.0121 58.8439 14.2847C58.2375 14.5554 57.594 14.6927 56.9116 14.6927C56.0066 14.6927 55.1944 14.5054 54.4767 14.1289C53.7591 13.7525 53.1953 13.1961 52.7836 12.4581C52.372 11.72 52.168 10.828 52.168 9.78399V3.01347H54.5287V9.42794C54.5287 10.459 54.7864 11.249 55.302 11.7998C55.8175 12.3505 56.5203 12.625 57.4123 12.625C58.3043 12.625 59.0108 12.3505 59.5338 11.7998C60.0567 11.249 60.3163 10.459 60.3163 9.42794V3.01347H62.6993V3.00977Z",
    fill: "white",
    className: "letter"
  })), _path5$1 || (_path5$1 = /*#__PURE__*/React.createElement("path", {
    d: "M74.9646 9.65378H66.1672C66.2376 10.5736 66.577 11.3116 67.1908 11.868C67.8028 12.4261 68.5557 12.7043 69.4476 12.7043C70.7291 12.7043 71.634 12.1684 72.1644 11.0947H74.7346C74.386 12.1535 73.7555 13.0214 72.8431 13.6964C71.9307 14.3714 70.7995 14.7089 69.4476 14.7089C68.348 14.7089 67.3614 14.4623 66.4917 13.9672C65.6201 13.472 64.9377 12.7766 64.4444 11.8772C63.9493 10.9778 63.7026 9.93751 63.7026 8.75253C63.7026 7.56755 63.9437 6.52721 64.424 5.62782C64.9043 4.72842 65.5793 4.03672 66.4509 3.549C67.3206 3.06129 68.322 2.81836 69.4495 2.81836C70.577 2.81836 71.5042 3.05572 72.3535 3.5286C73.2029 4.00148 73.8649 4.66722 74.3378 5.52397C74.8107 6.38071 75.048 7.36541 75.048 8.47993C75.048 8.91201 75.0202 9.30144 74.9646 9.65007M72.5612 7.72703C72.5464 6.84988 72.233 6.14706 71.621 5.61669C71.0072 5.08818 70.2488 4.82299 69.3438 4.82299C68.5223 4.82299 67.8195 5.08447 67.2335 5.60742C66.6475 6.13037 66.2988 6.83691 66.1894 7.72888H72.5631L72.5612 7.72703Z",
    fill: "white",
    className: "letter"
  })), _path6$1 || (_path6$1 = /*#__PURE__*/React.createElement("path", {
    d: "M80.0516 3.31173C80.6302 2.98536 81.3163 2.82031 82.11 2.82031V5.2867H81.5036C80.5708 5.2867 79.8643 5.52407 79.3821 5.99695C78.9018 6.46983 78.6608 7.29319 78.6608 8.46333V14.5236H76.2778V3.00946H78.6608V4.68215C79.0094 4.09801 79.473 3.63997 80.0497 3.31359",
    fill: "white",
    className: "letter"
  })), _path7$1 || (_path7$1 = /*#__PURE__*/React.createElement("path", {
    d: "M94.857 3.00977L87.7935 19.9351H85.3289L87.6692 14.3348L83.1333 3.00977H85.787L89.0267 11.7849L92.3906 3.00977H94.857Z",
    fill: "white",
    className: "letter"
  })), _path8$1 || (_path8$1 = /*#__PURE__*/React.createElement("path", {
    d: "M12.5558 16.8922L5.71293 9.28165C5.24561 8.76241 5.28827 7.9613 5.80751 7.49398L10.8497 2.86719H5.36986C5.04163 2.86719 4.72638 2.98958 4.48345 3.21026L0.681873 6.67247C-0.1656 7.44206 -0.232363 8.75314 0.533515 9.60432L7.10004 16.9089C7.34483 17.1815 7.69531 17.3373 8.06063 17.3373L12.3573 17.341C12.5891 17.341 12.7115 17.0665 12.5558 16.8922Z",
    fill: "#7A5EF8"
  })), _path9$1 || (_path9$1 = /*#__PURE__*/React.createElement("path", {
    d: "M8.69128 0.452674L15.5341 8.06325C16.0014 8.58249 15.9588 9.3836 15.4395 9.85092L10.3974 14.4777H15.8772C16.2054 14.4777 16.5207 14.3553 16.7636 14.1346L20.5652 10.6724C21.4127 9.90284 21.4794 8.59176 20.7135 7.74058L14.147 0.435985C13.9022 0.163384 13.5517 0.00761307 13.1864 0.00761307L8.88971 0.00390625C8.6579 0.00390625 8.53551 0.278358 8.69128 0.452674Z",
    fill: "#2547A6"
  })));
};

var _path, _path2, _path3, _path4, _path5, _path6, _path7, _path8, _path9;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgTableflowLogo = function SvgTableflowLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 152,
    height: 32,
    viewBox: "0 0 152 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M41.5282 0H37.7156V23.2348H41.5282V0Z",
    fill: "white",
    className: "letter"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M57.124 5.41761C58.2723 6.01991 59.1683 6.91002 59.8151 8.09386C60.462 9.27474 60.7854 10.7019 60.7854 12.3723V23.2376H57.0083V12.942C57.0083 11.2923 56.5959 10.0284 55.7711 9.14717C54.9462 8.26596 53.8217 7.82683 52.3946 7.82683C50.9675 7.82683 49.837 8.26596 49.0003 9.14717C48.1636 10.0284 47.7453 11.2923 47.7453 12.942V23.2376H43.9326V4.8153H47.7453V6.92189C48.3683 6.1653 49.1665 5.57486 50.1367 5.15057C51.1069 4.72629 52.1365 4.51562 53.2283 4.51562C54.6762 4.51562 55.9758 4.8153 57.124 5.41761Z",
    fill: "white",
    className: "letter"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M63.6061 9.02849C64.3745 7.60431 65.4219 6.49463 66.7482 5.70244C68.0744 4.91024 69.552 4.51562 71.1779 4.51562C72.6051 4.51562 73.869 4.8064 74.9728 5.38497C76.0765 5.96354 76.928 6.66672 77.5303 7.49156V4.81827H81.3756V31.9992H77.5303V20.5643C76.928 21.3891 76.0587 22.0923 74.9223 22.6709C73.786 23.2495 72.4923 23.5402 71.0444 23.5402C69.46 23.5402 68.0181 23.1337 66.7155 22.3208C65.41 21.5078 64.3745 20.3714 63.6061 18.9117C62.8376 17.4519 62.4519 15.7963 62.4519 13.9478C62.4519 12.0994 62.8376 10.4586 63.6061 9.03145M76.7441 10.7019C76.2189 9.76727 75.5335 9.05222 74.6879 8.56266C73.8423 8.0731 72.9285 7.82683 71.9464 7.82683C70.9643 7.82683 70.0505 8.06717 69.2049 8.54486C68.3563 9.02552 67.6739 9.72574 67.1487 10.6515C66.6235 11.5772 66.3624 12.675 66.3624 13.9448C66.3624 15.2147 66.6235 16.3303 67.1487 17.2887C67.6709 18.247 68.3622 18.9769 69.2197 19.4784C70.0772 19.9798 70.9851 20.232 71.9434 20.232C72.9018 20.232 73.8364 19.9857 74.685 19.4962C75.5306 19.0066 76.216 18.2886 76.7411 17.3391C77.2663 16.3927 77.5274 15.283 77.5274 14.0131C77.5274 12.7432 77.2663 11.6395 76.7411 10.7049",
    fill: "white",
    className: "letter"
  })), _path4 || (_path4 = /*#__PURE__*/React.createElement("path", {
    d: "M100.433 4.81543V23.2377H96.6206V21.0659C96.0183 21.8224 95.235 22.4188 94.2648 22.855C93.2946 23.2882 92.265 23.5077 91.1732 23.5077C89.7253 23.5077 88.4257 23.2081 87.2775 22.6057C86.1292 22.0034 85.2272 21.1133 84.5686 19.9325C83.9099 18.7516 83.5835 17.3244 83.5835 15.654V4.82136H87.3605V15.0843C87.3605 16.734 87.773 17.9979 88.5978 18.8792C89.4226 19.7604 90.5471 20.1995 91.9743 20.1995C93.4014 20.1995 94.5319 19.7604 95.3686 18.8792C96.2053 17.9979 96.6206 16.734 96.6206 15.0843V4.82136H100.433V4.81543Z",
    fill: "white",
    className: "letter"
  })), _path5 || (_path5 = /*#__PURE__*/React.createElement("path", {
    d: "M120.056 15.4462H105.98C106.093 16.9179 106.636 18.0988 107.618 18.9889C108.597 19.8819 109.802 20.327 111.229 20.327C113.279 20.327 114.727 19.4695 115.576 17.7516H119.688C119.13 19.4458 118.121 20.8344 116.662 21.9144C115.202 22.9944 113.392 23.5344 111.229 23.5344C109.47 23.5344 107.891 23.1398 106.5 22.3476C105.105 21.5554 104.013 20.4427 103.224 19.0037C102.432 17.5647 102.037 15.9002 102.037 14.0043C102.037 12.1083 102.423 10.4438 103.191 9.00482C103.96 7.56581 105.04 6.45911 106.434 5.67878C107.826 4.89845 109.428 4.50977 111.232 4.50977C113.036 4.50977 114.519 4.88954 115.878 5.64613C117.237 6.40273 118.296 7.46789 119.053 8.83866C119.81 10.2094 120.189 11.7849 120.189 13.5681C120.189 14.2594 120.145 14.8825 120.056 15.4403M116.211 12.3635C116.187 10.9601 115.685 9.83559 114.706 8.98701C113.724 8.14141 112.511 7.71713 111.063 7.71713C109.748 7.71713 108.624 8.13548 107.686 8.97218C106.749 9.80889 106.191 10.9393 106.016 12.3665H116.214L116.211 12.3635Z",
    fill: "white",
    className: "letter"
  })), _path6 || (_path6 = /*#__PURE__*/React.createElement("path", {
    d: "M128.196 5.29896C129.121 4.77676 130.219 4.5127 131.489 4.5127V8.45884H130.519C129.026 8.45884 127.896 8.83863 127.125 9.59522C126.356 10.3518 125.97 11.6692 125.97 13.5414V23.2376H122.158V4.81533H125.97V7.49159C126.528 6.55697 127.27 5.82412 128.193 5.30193",
    fill: "white",
    className: "letter"
  })), _path7 || (_path7 = /*#__PURE__*/React.createElement("path", {
    d: "M151.885 4.81543L140.583 31.8955H136.64L140.385 22.9351L133.127 4.81543H137.373L142.556 18.8554L147.939 4.81543H151.885Z",
    fill: "white",
    className: "letter"
  })), _path8 || (_path8 = /*#__PURE__*/React.createElement("path", {
    d: "M20.2046 27.0266L9.25625 14.8499C8.50856 14.0191 8.5768 12.7373 9.40757 11.9897L17.4749 4.58691H8.70735C8.18219 4.58691 7.67779 4.78274 7.28911 5.13582L1.2067 10.6753C-0.149233 11.9066 -0.256052 14.0043 0.969332 15.3661L11.4756 27.0533C11.8672 27.4894 12.428 27.7387 13.0125 27.7387L19.8871 27.7446C20.258 27.7446 20.4538 27.3055 20.2046 27.0266Z",
    fill: "white",
    className: "letter"
  })), _path9 || (_path9 = /*#__PURE__*/React.createElement("path", {
    d: "M14.0207 0.723876L24.9691 12.9006C25.7167 13.7313 25.6485 15.0131 24.8177 15.7608L16.7504 23.1635H25.5179C26.0431 23.1635 26.5475 22.9677 26.9362 22.6146L33.0186 17.0752C34.3745 15.8439 34.4814 13.7462 33.256 12.3843L22.7497 0.697174C22.3581 0.26102 21.7973 0.0117902 21.2128 0.0117902L14.3382 0.00585938C13.9673 0.00585938 13.7715 0.444975 14.0207 0.723876Z",
    fill: "white",
    className: "letter"
  })));
};

function Tableflow(_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? "normal" : _b;
    var className = classes(["tableflow", style$6.tableflow, style$6[size]]);
    return jsx("div", __assign({ className: className }, { children: color ? jsx(SvgTableflowLogoColor, {}) : jsx(SvgTableflowLogo, {}) }));
}

function Loader() {
    return (jsx("div", __assign({ className: style$7.container }, { children: jsx(Tableflow, { size: "big" }) })));
}

var css_248z$7 = ".Modal-module_container__1AMV8 {\n  position: absolute;\n  z-index: 12;\n  inset: 0;\n}\n.Modal-module_container__1AMV8 .Modal-module_veil__3NHEV {\n  position: absolute;\n  inset: 0;\n  background-color: var(--color-background-modal-veil);\n  opacity: 0.8;\n}\n.Modal-module_container__1AMV8 .Modal-module_content__34x_s {\n  position: absolute;\n  z-index: 11;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.Modal-module_container__1AMV8 .Modal-module_veil__3NHEV {\n  animation: Modal-module_fadeIn__2uYLk var(--speed) forwards;\n}\n.Modal-module_container__1AMV8 .Modal-module_content__34x_s {\n  animation: Modal-module_opening__1Upw- var(--speed) forwards;\n}\n.Modal-module_container__1AMV8.Modal-module_isClosing__1UJ3h {\n  pointer-events: none;\n}\n.Modal-module_container__1AMV8.Modal-module_isClosing__1UJ3h .Modal-module_veil__3NHEV {\n  animation: Modal-module_fadeOut__2BiOO var(--speed) forwards;\n}\n.Modal-module_container__1AMV8.Modal-module_isClosing__1UJ3h .Modal-module_content__34x_s {\n  animation: Modal-module_closing__7qNZx var(--speed) forwards;\n}\n\n.Modal-module_close__38chZ {\n  cursor: pointer;\n  padding: var(--m-xxs);\n  position: absolute;\n  right: var(--m-s);\n  top: var(--m-s);\n}\n.Modal-module_close__38chZ svg {\n  stroke: var(--color-text-soft);\n}\n.Modal-module_close__38chZ:hover svg {\n  stroke: var(--color-text);\n}\n\n@keyframes Modal-module_fadeIn__2uYLk {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0.7;\n  }\n}\n@keyframes Modal-module_fadeOut__2BiOO {\n  from {\n    opacity: 0.7;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes Modal-module_opening__1Upw- {\n  from {\n    transform: translate(-50%, -50%) scale(0.96);\n    opacity: 0;\n    filter: blur(var(--blurred));\n  }\n  to {\n    transform: translate(-50%, -50%);\n    filter: none;\n  }\n}\n@keyframes Modal-module_closing__7qNZx {\n  from {\n    transform: translate(-50%, -50%) scale(1);\n    opacity: 1;\n    filter: none;\n  }\n  to {\n    transform: translate(-50%, -50%) scale(0.96);\n    opacity: 0;\n    filter: blur(var(--blurred));\n  }\n}";
var style$5 = {"container":"Modal-module_container__1AMV8","veil":"Modal-module_veil__3NHEV","content":"Modal-module_content__34x_s","fadeIn":"Modal-module_fadeIn__2uYLk","opening":"Modal-module_opening__1Upw-","isClosing":"Modal-module_isClosing__1UJ3h","fadeOut":"Modal-module_fadeOut__2BiOO","closing":"Modal-module_closing__7qNZx","close":"Modal-module_close__38chZ"};
styleInject(css_248z$7);

function Portal(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "root-portal" : _b, _c = _a.el, el = _c === void 0 ? "div" : _c;
    var container = useState(function () {
        // This will be executed only on the initial render
        // https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
        return document.createElement(el);
    })[0];
    useEffect(function () {
        container.classList.add(className);
        container.setAttribute("role", "complementary");
        container.setAttribute("aria-label", "Notifications");
        document.body.appendChild(container);
        return function () {
            document.body.removeChild(container);
        };
    }, []);
    return createPortal(children, container);
}

var setModal = function (on) {
    if (on) {
        document.body.classList.add("modal");
    }
    else {
        document.body.classList.remove("modal");
    }
};
function Modal(_a) {
    var children = _a.children, handleClose = _a.handleClose, isOpen = _a.isOpen, setOpen = _a.setOpen, _b = _a.useBox, useBox = _b === void 0 ? true : _b, useCloseButton = _a.useCloseButton, _c = _a.usePortal, usePortal = _c === void 0 ? true : _c, props = __rest(_a, ["children", "handleClose", "isOpen", "setOpen", "useBox", "useCloseButton", "usePortal"]);
    var className = classes([style$5.container, isOpen ? style$5.isOpen : style$5.isClosing, props === null || props === void 0 ? void 0 : props.className]);
    var Element = useBox ? Box : "div";
    useEffect(function () {
        setModal(!!isOpen);
    }, [isOpen]);
    useEffect(function () {
        function handleKeyDown(e) {
            var key = e.key;
            e.stopPropagation();
            if (key === "Escape") {
                if (setOpen)
                    setOpen(false);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return function cleanup() {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    var content = (jsx(FocusLock, { children: jsxs("div", __assign({}, props, { className: className }, { children: [jsx("div", { className: style$5.veil, onClick: function () { return handleClose && handleClose(); } }), jsxs(Element, __assign({ className: style$5.content }, { children: [useCloseButton && (jsx("button", __assign({ type: "button", onClick: handleClose, className: style$5.close }, { children: jsx(Icon, { icon: "cross" }) }))), children] }))] })) }));
    return usePortal ? jsxs(Portal, { children: [" ", content] }) : content;
}

var usePaginator = function (totalItems, itemsPerPage, initialPage, paginatorSize) {
    if (paginatorSize === void 0) { paginatorSize = 10; }
    var _a = useState(initialPage), currentPage = _a[0], setCurrentPage = _a[1];
    var totalPages = Math.ceil(totalItems / itemsPerPage);
    var _b = useState({
        hide: false,
        hideArrows: false,
        pages: [],
        nextPage: null,
        prevPage: null,
        totalPages: totalPages,
        currentPage: currentPage,
        firstPage: 1,
        lastPage: totalPages,
        setCurrentPage: setCurrentPage,
    }), paginator = _b[0], setPaginator = _b[1];
    useEffect(function () {
        if (totalPages < 2) {
            setPaginator(function (paginator) { return (__assign(__assign({}, paginator), { hide: true })); });
        }
        else {
            setPaginator(getPaginator(paginatorSize, totalPages, currentPage, setCurrentPage));
        }
    }, [totalPages, currentPage, initialPage]);
    return paginator;
};
var getPaginator = function (paginatorSize, totalPages, currentPage, setCurrentPage) {
    var halfPaginator = paginatorSize % 2 ? (paginatorSize - 1) / 2 : paginatorSize / 2;
    var min = currentPage > totalPages ? currentPage - paginatorSize : Math.ceil(currentPage - halfPaginator);
    var paginatorStart = min < 1 || totalPages <= paginatorSize + 1 ? 1 : min > totalPages - paginatorSize ? totalPages - paginatorSize + 1 : min;
    var max = paginatorStart + paginatorSize;
    var paginatorEnd = max >= totalPages ? totalPages + 1 : max;
    var prevPage = currentPage > 1 ? currentPage - 1 : null;
    var nextPage = currentPage < totalPages ? currentPage + 1 : null;
    var pages = Array.from({ length: paginatorEnd - paginatorStart }, function (a, x) { return x + paginatorStart; });
    var firstPage = !pages.includes(1) ? 1 : null;
    var lastPage = !pages.includes(totalPages) ? totalPages : null;
    return {
        hide: false,
        hideArrows: totalPages <= paginatorSize,
        pages: pages,
        prevPage: prevPage,
        nextPage: nextPage,
        totalPages: totalPages,
        currentPage: currentPage,
        firstPage: firstPage,
        lastPage: lastPage,
        setCurrentPage: setCurrentPage,
    };
};

var css_248z$6 = ".Pagination-module_paginator__3eAf- {\n  text-align: center;\n  margin: var(--m-xl) 0 var(--m);\n  display: flex;\n  list-style: none;\n  gap: var(--m-xxxs);\n  justify-content: center;\n  border-top: 1px solid var(--color-border);\n  padding-top: var(--m-s);\n}\n.Pagination-module_paginator__3eAf- > button {\n  position: relative;\n  display: flex;\n  flex: 0 0 var(--m-l);\n  justify-content: center;\n  align-items: center;\n  width: var(--m-l);\n  height: var(--m-l);\n  border-radius: var(--border-radius-2);\n  user-select: none;\n  color: var(--color-text-soft);\n  font-weight: 500;\n  background-color: transparent;\n  cursor: pointer;\n}\n.Pagination-module_paginator__3eAf- > button[disabled] {\n  cursor: default;\n}\n.Pagination-module_paginator__3eAf- > button:not([disabled]):hover {\n  background-color: var(--color-background-small-button-hover);\n  color: var(--color-text-small-button);\n}\n.Pagination-module_paginator__3eAf- > button:not([disabled]):hover.Pagination-module_arrow__1Va7h svg path {\n  stroke: var(--color-text);\n}\n.Pagination-module_paginator__3eAf- > button.Pagination-module_arrow__1Va7h {\n  border-color: transparent;\n}\n.Pagination-module_paginator__3eAf- > button.Pagination-module_arrow__1Va7h svg path {\n  stroke: var(--color-text-soft);\n}\n.Pagination-module_paginator__3eAf- > button.Pagination-module_arrow__1Va7h[disabled] {\n  opacity: 0.4;\n}\n.Pagination-module_paginator__3eAf- > button.Pagination-module_selected__KgulR {\n  background-color: var(--color-background-small-button-selected);\n  color: var(--color-text-small-button);\n}";
var style$4 = {"paginator":"Pagination-module_paginator__3eAf-","arrow":"Pagination-module_arrow__1Va7h","selected":"Pagination-module_selected__KgulR"};
styleInject(css_248z$6);

function Pagination(_a) {
    var totalItems = _a.totalItems, itemsPerPage = _a.itemsPerPage, _b = _a.initialPage, initialPage = _b === void 0 ? 1 : _b, _c = _a.paginatorSize, paginatorSize = _c === void 0 ? 7 : _c, onPageChange = _a.onPageChange, _d = _a.showNumbers, showNumbers = _d === void 0 ? true : _d, _e = _a.showArrows, showArrows = _e === void 0 ? true : _e, _f = _a.showFirstLast, showFirstLast = _f === void 0 ? true : _f;
    var _g = usePaginator(totalItems, itemsPerPage, initialPage || 1, paginatorSize || 7), hide = _g.hide, hideArrows = _g.hideArrows, pages = _g.pages, currentPage = _g.currentPage, setCurrentPage = _g.setCurrentPage, prevPage = _g.prevPage, nextPage = _g.nextPage, firstPage = _g.firstPage, lastPage = _g.lastPage;
    var handleClick = function (page) {
        setCurrentPage && setCurrentPage(page);
        onPageChange && onPageChange(page);
    };
    var renderPageNumbers = pages.map(function (number) {
        var className = classes([currentPage === number && style$4.selected]);
        return (jsx("button", __assign({ onClick: function () { return handleClick(number); }, disabled: currentPage === number, className: className }, { children: number }), number));
    });
    var arrowClass = classes([style$4.arrow]);
    return (jsx("div", __assign({ className: !hide ? style$4.paginator : "" }, { children: !hide && (jsxs(Fragment$1, { children: [!hideArrows && showFirstLast && (jsx("button", __assign({ onClick: function () { return handleClick(firstPage || 0); }, disabled: firstPage === null, className: arrowClass }, { children: firstPage !== null && "".concat(firstPage, "...") }))), showArrows && (jsx("button", __assign({ onClick: function () { return handleClick(prevPage || 0); }, disabled: prevPage === null, className: arrowClass }, { children: jsx(Icon, { icon: "arrowLeft" }) }))), showNumbers && renderPageNumbers, showArrows && (jsx("button", __assign({ onClick: function () { return handleClick(nextPage || 0); }, disabled: nextPage === null, className: arrowClass }, { children: jsx(Icon, { icon: "arrowRight" }) }))), !hideArrows && showFirstLast && (jsx("button", __assign({ onClick: function () { return handleClick(lastPage || 0); }, disabled: lastPage === null, className: arrowClass }, { children: lastPage !== null && "...".concat(lastPage) })))] })) })));
}

var css_248z$5 = ".Stepper-module_stepper__2dJhf {\n  display: flex;\n  gap: var(--m);\n  margin: var(--m-xs) auto;\n  justify-content: center;\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN {\n  display: flex;\n  gap: var(--m-xxs);\n  align-items: center;\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN .Stepper-module_badge__1_D6W {\n  border-radius: 50%;\n  border: 1px solid var(--color-border);\n  aspect-ratio: 1;\n  width: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN .Stepper-module_badge__1_D6W svg {\n  width: 12px;\n  aspect-ratio: 1;\n  fill: var(--color-primary);\n  stroke: none;\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN.Stepper-module_active__3CVhQ {\n  color: var(--color-primary);\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN.Stepper-module_active__3CVhQ .Stepper-module_badge__1_D6W {\n  background-color: var(--color-primary);\n  color: var(--color-text-on-primary);\n  border: none;\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN.Stepper-module_done__15aUO .Stepper-module_badge__1_D6W {\n  border-color: var(--color-primary);\n}\n.Stepper-module_stepper__2dJhf .Stepper-module_step__3QEhN:not(:first-of-type):before {\n  content: \"\";\n  height: 2px;\n  width: min(140px, 10vw);\n  background-color: var(--color-border);\n  border-radius: 2px;\n  margin-right: var(--m-xs);\n}";
var style$3 = {"stepper":"Stepper-module_stepper__2dJhf","step":"Stepper-module_step__3QEhN","badge":"Stepper-module_badge__1_D6W","active":"Stepper-module_active__3CVhQ","done":"Stepper-module_done__15aUO"};
styleInject(css_248z$5);

function Stepper(_a) {
    var steps = _a.steps, current = _a.current, clickable = _a.clickable, setCurrent = _a.setCurrent;
    return (jsx("div", __assign({ className: style$3.stepper }, { children: steps.map(function (step, i) {
            var done = i < current;
            var Element = clickable ? "button" : "div";
            var buttonProps = clickable
                ? {
                    onClick: function () { return setCurrent(i); },
                    type: "button",
                }
                : {};
            return (jsxs(Element, __assign({ className: classes([style$3.step, i === current ? style$3.active : done && style$3.done]) }, buttonProps, { children: [jsx("div", __assign({ className: style$3.badge }, { children: done ? jsx(Icon, { icon: "check" }) : i + 1 })), jsx("div", __assign({ className: style$3.label }, { children: step.label }))] }), i));
        }) })));
}

var css_248z$4 = ".Switch-module_container__1bmEe {\n  display: inline-flex;\n  align-items: center;\n}\n.Switch-module_container__1bmEe input {\n  height: 0;\n  visibility: hidden;\n  width: 0;\n  position: absolute;\n}\n.Switch-module_container__1bmEe input:disabled:checked + .Switch-module_slider__3zYCP {\n  background: var(--color-primary-disabled);\n  cursor: default;\n}\n.Switch-module_container__1bmEe input:checked + .Switch-module_slider__3zYCP {\n  background: var(--color-primary);\n}\n.Switch-module_container__1bmEe input:checked + .Switch-module_slider__3zYCP:after {\n  left: calc(100% - 3px);\n  transform: translate(-100%, 0);\n  background: var(--color-text-on-primary);\n}\n.Switch-module_container__1bmEe .Switch-module_slider__3zYCP {\n  background: var(--color-input-background-soft);\n  border-radius: 26px;\n  cursor: pointer;\n  display: block;\n  height: 26px;\n  position: relative;\n  width: 46.8px;\n}\n.Switch-module_container__1bmEe .Switch-module_slider__3zYCP::after {\n  content: \"\";\n  background: var(--color-text-soft);\n  border-radius: 50%;\n  height: 20px;\n  position: absolute;\n  aspect-ratio: 1;\n  left: 3px;\n  top: 3px;\n}";
var styles = {"container":"Switch-module_container__1bmEe","slider":"Switch-module_slider__3zYCP"};
styleInject(css_248z$4);

function Switch(_a) {
    var className = _a.className, label = _a.label, inputFirst = _a.inputFirst, props = __rest(_a, ["className", "label", "inputFirst"]);
    var labelElement = jsx("span", __assign({ className: styles.label }, { children: label }));
    return (jsx(Fragment$1, { children: jsxs("label", __assign({ className: classes([styles.container, className]) }, { children: [!inputFirst && labelElement, jsx("input", __assign({ type: "checkbox" }, props)), jsx("span", { className: classes([styles.slider]) }), inputFirst && labelElement] })) }));
}

var css_248z$3 = ".Default-module_table__1IupY {\n  display: table;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  border-radius: var(--border-radius-2);\n  outline: 1px solid var(--color-border);\n  table-layout: fixed;\n}\n.Default-module_table__1IupY .Default-module_thead__1nSWX {\n  display: table-header-group;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym {\n  display: table-row-group;\n}\n.Default-module_table__1IupY .Default-module_tr__OHRXY {\n  display: table-row;\n}\n.Default-module_table__1IupY .Default-module_td__2Vxq7 {\n  display: table-cell;\n  vertical-align: middle;\n  max-width: 300px;\n  height: 48px;\n}\n.Default-module_table__1IupY .Default-module_caption__2VK1g {\n  display: table-caption;\n  border-bottom: 1px solid var(--color-border);\n  background-color: var(--color-background-modal);\n  padding: 0 var(--m-s);\n}\n.Default-module_table__1IupY .Default-module_thead__1nSWX .Default-module_tr__OHRXY {\n  margin-bottom: var(--m-s);\n}\n.Default-module_table__1IupY .Default-module_thead__1nSWX .Default-module_tr__OHRXY .Default-module_td__2Vxq7 {\n  font-weight: 600;\n  white-space: nowrap;\n  padding: var(--m-xxxs) var(--m-s);\n  border-bottom: 1px solid var(--color-border);\n  background-color: var(--color-background-modal);\n  color: var(--color-text-soft);\n}\n.Default-module_table__1IupY .Default-module_thead__1nSWX .Default-module_tr__OHRXY .Default-module_td__2Vxq7:first-of-type {\n  border-radius: var(--border-radius-2) 0 0 0;\n}\n.Default-module_table__1IupY .Default-module_thead__1nSWX .Default-module_tr__OHRXY .Default-module_td__2Vxq7:last-child {\n  border-radius: 0 var(--border-radius-2) 0 0;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY .Default-module_td__2Vxq7 {\n  vertical-align: middle;\n  padding: var(--m-xxxs) var(--m-s);\n  font-weight: 400;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY .Default-module_td__2Vxq7 > span, .Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY .Default-module_td__2Vxq7 > small {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: block;\n  overflow: hidden;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY .Default-module_td__2Vxq7.Default-module_highlight__2nnud {\n  font-weight: 500;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY .Default-module_td__2Vxq7.Default-module_element__2hsf1 {\n  padding: 0 var(--m-s);\n}\n.Default-module_zebra__2ES7K .Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:nth-child(odd) .Default-module_td__2Vxq7 {\n  background-color: var(--color-background);\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:hover {\n  box-shadow: 0 0 0 2px var(--color-border);\n  position: relative;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:last-child {\n  border-radius: 0 0 var(--border-radius-2) var(--border-radius-2);\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:last-child .Default-module_td__2Vxq7 {\n  border-bottom-color: transparent;\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:last-child .Default-module_td__2Vxq7:first-of-type {\n  border-radius: 0 0 0 var(--border-radius-2);\n}\n.Default-module_table__1IupY .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:last-child .Default-module_td__2Vxq7:last-child {\n  border-radius: 0 0 var(--border-radius-2) 0;\n}\n.Default-module_table__1IupY.Default-module_zebra__2ES7K .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:nth-child(odd) .Default-module_td__2Vxq7 {\n  background-color: var(--color-background);\n}\n.Default-module_table__1IupY.Default-module_dark__1RH9S {\n  background-color: var(--color-background);\n}\n.Default-module_table__1IupY.Default-module_light__9IuYT {\n  background-color: var(--color-background-modal);\n}\n.Default-module_table__1IupY.Default-module_dark__1RH9S .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:hover, .Default-module_table__1IupY.Default-module_light__9IuYT .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:hover {\n  box-shadow: none;\n  position: static;\n}\n.Default-module_table__1IupY.Default-module_dark__1RH9S .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:first-of-type .Default-module_td__2Vxq7, .Default-module_table__1IupY.Default-module_light__9IuYT .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:first-of-type .Default-module_td__2Vxq7 {\n  padding-top: var(--m-s);\n}\n.Default-module_table__1IupY.Default-module_dark__1RH9S .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:last-of-type .Default-module_td__2Vxq7, .Default-module_table__1IupY.Default-module_light__9IuYT .Default-module_tbody__1A4ym .Default-module_tr__OHRXY:last-of-type .Default-module_td__2Vxq7 {\n  padding-bottom: var(--m-s);\n}\n\n.Default-module_emptyMsg__S0Ii0 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15vh;\n  text-align: center;\n}";
var themeDefault = {"table":"Default-module_table__1IupY","thead":"Default-module_thead__1nSWX","tbody":"Default-module_tbody__1A4ym","tr":"Default-module_tr__OHRXY","td":"Default-module_td__2Vxq7","caption":"Default-module_caption__2VK1g","highlight":"Default-module_highlight__2nnud","element":"Default-module_element__2hsf1","zebra":"Default-module_zebra__2ES7K","dark":"Default-module_dark__1RH9S","light":"Default-module_light__9IuYT","emptyMsg":"Default-module_emptyMsg__S0Ii0"};
styleInject(css_248z$3);

var TableContext = createContext({});
function Table(_a) {
    // THEME
    // Tables receive a full CSS module as theme or applies default styles
    // depending on mergeThemes being true it will merge both themes or use only the custom one
    // use a copy of ./style/Default.module.scss as base to make a custom theme
    // another example of the theme lives in src/features/contents/versions/style/TableTheme.module.scss
    var data = _a.data, // An array of objects with the data to be displayed
    _b = _a.keyAsId, // An array of objects with the data to be displayed
    keyAsId = _b === void 0 ? "id" : _b, // Has to be a unique property in the data array to be used as key
    theme = _a.theme, // A CSS module object to style the table
    mergeThemes = _a.mergeThemes, // Should 'theme' be the only style applied (false) or be merged with the default style (true)
    highlightColumns = _a.highlightColumns, // Columns that should use the highlighted style
    _c = _a.hideColumns, // Columns that should use the highlighted style
    hideColumns = _c === void 0 ? ["id"] : _c, // Array of columns to be hidden in the display
    emptyState = _a.emptyState, heading = _a.heading, _d = _a.background, background = _d === void 0 ? "zebra" : _d, _e = _a.columnWidths, columnWidths = _e === void 0 ? [] : _e, _f = _a.columnAlignments, columnAlignments = _f === void 0 ? [] : _f;
    var style = !theme ? themeDefault : mergeThemes ? __assign(__assign({}, themeDefault), theme) : theme;
    // TABLE HEADINGS
    // Hide column title if the item has an action (action button) or the title starts with underscore
    var modelDatum = data === null || data === void 0 ? void 0 : data[0];
    var thead = modelDatum ? Object.keys(modelDatum).map(function (k) { return (k.indexOf("_") === 0 ? "" : k); }) : {};
    var context = {
        style: style,
        highlightColumns: highlightColumns,
        hideColumns: hideColumns,
        columnWidths: columnWidths,
        columnAlignments: columnAlignments,
    };
    if (!data || !(data === null || data === void 0 ? void 0 : data.length))
        return jsx("div", __assign({ className: style.emptyMsg }, { children: emptyState || null }));
    var tableStyle = classes([style === null || style === void 0 ? void 0 : style.table, style === null || style === void 0 ? void 0 : style[background]]);
    var headingContent = heading ? (jsx("div", __assign({ className: style.caption }, { children: heading }))) : (jsx("div", __assign({ className: style.thead, role: "rowgroup" }, { children: jsx(Row, { datum: thead, isHeading: true }) })));
    return (jsxs(TableContext.Provider, __assign({ value: context }, { children: [jsxs("div", __assign({ className: tableStyle, role: "table" }, { children: [headingContent, jsx("div", __assign({ className: style.tbody, role: "rowgroup" }, { children: data.map(function (d, i) {
                            var key = keyAsId && (d === null || d === void 0 ? void 0 : d[keyAsId]) ? d[keyAsId] : i;
                            var props = { datum: d };
                            return createElement(Row, __assign({}, props, { key: key === null || key === void 0 ? void 0 : key.toString() }));
                        }) }))] })), !data.length && (jsx("div", __assign({ className: style.emptyMsg, role: "empty-query" }, { children: jsx("p", { children: "Empty" }) })))] })));
}
var Row = function (_a) {
    var datum = _a.datum;
    var _b = useContext(TableContext), style = _b.style, highlightColumns = _b.highlightColumns, hideColumns = _b.hideColumns, columnWidths = _b.columnWidths, columnAlignments = _b.columnAlignments;
    var className = classes([style === null || style === void 0 ? void 0 : style.tr]);
    return (jsx("div", __assign({ className: className, role: "row" }, { children: Object.keys(datum)
            .filter(function (k) { return !hideColumns.includes(datum[k]) && !hideColumns.includes(k); })
            .map(function (k, i) {
            var _a;
            // datum is the row
            // datum[k] is the content for the cell
            // If it is an object with the 'content' property, use that as content (can be JSX or a primitive)
            // Another 'raw' property with a primitive value is used to sort and search
            var content = ((_a = datum[k]) === null || _a === void 0 ? void 0 : _a.content) || datum[k];
            var wrappedContent = content && typeof content === "string" ? jsx("span", { children: content }) : content;
            var cellClass = classes([
                (highlightColumns === null || highlightColumns === void 0 ? void 0 : highlightColumns.includes(k)) && style.highlight,
                !wrappedContent && style.empty,
                typeof content !== "string" && style.element,
            ]);
            var cellStyle = { width: (columnWidths === null || columnWidths === void 0 ? void 0 : columnWidths[i]) || "auto", textAlign: (columnAlignments === null || columnAlignments === void 0 ? void 0 : columnAlignments[i]) || "left" };
            return (jsx(Cell, __assign({ cellClass: cellClass, cellStyle: cellStyle }, { children: wrappedContent }), k));
        }) })));
};
var Cell = function (_a) {
    var children = _a.children, cellClass = _a.cellClass, cellStyle = _a.cellStyle;
    var style = useContext(TableContext).style;
    var cellProps = {
        className: classes([style === null || style === void 0 ? void 0 : style.td, cellClass, !children && (style === null || style === void 0 ? void 0 : style.empty)]),
        role: "cell",
        style: cellStyle,
    };
    return jsx("div", __assign({}, cellProps, { children: children }));
};

var css_248z$2 = ".Tabs-module_tabs__eZFNO {\n  background: transparent;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: var(--m-s);\n  gap: var(--m-xs);\n  border-bottom: 1px solid var(--color-border);\n}\n\n.Tabs-module_tabBtn__TCjlj {\n  float: left;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  padding: var(--m-xxs) var(--m-xxxs);\n  border-bottom: 2px solid transparent;\n  color: var(--color-text-soft);\n  border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;\n}\n.Tabs-module_tabBtn__TCjlj:focus-visible {\n  background-color: var(--color-background-modal);\n}\n.Tabs-module_tabBtn__TCjlj:hover, .Tabs-module_tabBtn__TCjlj.Tabs-module_active__2-7ln {\n  border-bottom-color: var(--color-primary);\n  color: var(--color-text);\n}\n.Tabs-module_tabBtn__TCjlj.Tabs-module_active__2-7ln {\n  cursor: default;\n}";
var style$2 = {"tabs":"Tabs-module_tabs__eZFNO","tabBtn":"Tabs-module_tabBtn__TCjlj","active":"Tabs-module_active__2-7ln"};
styleInject(css_248z$2);

function Tabs(_a) {
    var tabs = _a.tabs, tab = _a.tab, setTab = _a.setTab, onChange = _a.onChange, children = _a.children;
    return (jsxs(Fragment$1, { children: [jsx("div", __assign({ className: style$2.tabs }, { children: Object.keys(tabs).map(function (k) { return (jsx("button", __assign({ type: "button", className: classes([style$2.tabBtn, tabs[k] === tab && style$2.active]), onClick: function () {
                        if (setTab)
                            setTab(tabs[k]);
                        if (onChange)
                            onChange(tabs[k]);
                    }, disabled: tabs[k] === tab }, { children: k }), k)); }) })), children && jsx("div", __assign({ className: classes([style$2.tabContent, style$2.active]) }, { children: children }))] }));
}

function useLocalStorage(key, initialValue) {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    var _a = useState(function () {
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            // Get from local storage by key
            var item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        }
        catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    }), storedValue = _a[0], setStoredValue = _a[1];
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    var setValue = function (value) {
        try {
            // Allow value to be a function so we have same API as useState
            var valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== "undefined") {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

var css_248z$1 = ".TagEditor-module_container__2eKme {\n  padding: var(--m-xxs);\n  font-weight: 400;\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--m-xxs);\n  line-height: 1.2;\n  cursor: text;\n  position: relative;\n  isolation: isolate;\n  min-height: 140px;\n  min-width: 340px;\n  align-content: flex-start;\n  text-align: left;\n}\n.TagEditor-module_container__2eKme .TagEditor-module_backDrop__3W9Nk {\n  background-color: var(--color-input-background);\n  border-radius: var(--border-radius-2);\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  border: 1px solid var(--color-border);\n  box-shadow: 0px 1px 2px var(--color-bisel);\n}\n.TagEditor-module_container__2eKme:hover .TagEditor-module_backDrop__3W9Nk {\n  border-color: var(--color-text-soft);\n}\n.TagEditor-module_container__2eKme:focus-within .TagEditor-module_backDrop__3W9Nk {\n  border-color: var(--color-primary);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z, .TagEditor-module_container__2eKme > input {\n  display: inline-flex;\n  align-self: flex-start;\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z {\n  padding: var(--m-xxxs);\n  border: 1px solid var(--color-border);\n  gap: var(--m-xxxs);\n  border-radius: var(--border-radius-2);\n  align-items: center;\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z:focus-within {\n  background-color: var(--color-input-background-soft);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z > .TagEditor-module_input__2aUcN {\n  border: none;\n  padding: 0;\n  background-color: transparent;\n  display: inline;\n  outline: none;\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z.TagEditor-module_hasError__1f5r2 {\n  border-color: var(--color-error);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z button {\n  border: 1px solid transparent;\n  background-color: transparent;\n  cursor: pointer;\n  display: flex;\n  border-radius: var(--border-radius-r);\n  width: 1.2rem;\n  height: 1.2rem;\n  flex-basis: 1.2rem;\n  align-items: center;\n  justify-content: center;\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z button svg {\n  width: 8px;\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z button svg path {\n  stroke: var(--color-text-soft);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z button:hover {\n  border-color: var(--color-border);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z button:hover svg {\n  transform: scale(1.1);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z button:hover svg path {\n  stroke: var(--color-text);\n}\n.TagEditor-module_container__2eKme .TagEditor-module_tag__TH-1Z:hover {\n  border-color: var(--color-primary);\n}\n.TagEditor-module_container__2eKme > input {\n  background-color: transparent;\n  padding: 0;\n  border: none;\n  min-width: 220px;\n  padding: calc(var(--m-xxxs) + 2px) 0;\n}\n.TagEditor-module_container__2eKme > input::-webkit-input-placeholder {\n  color: inherit;\n}\n\n.TagEditor-module_container__2eKme > input:-moz-placeholder {\n  color: inherit;\n}\n\n.TagEditor-module_container__2eKme > input::-moz-placeholder {\n  color: inherit;\n}\n\n.TagEditor-module_container__2eKme > input:-ms-input-placeholder {\n  color: inherit;\n}\n\n.TagEditor-module_container__2eKme > input:focus {\n  outline: none;\n}\n.TagEditor-module_container__2eKme > input:focus::-webkit-input-placeholder {\n  color: var(--color-text-soft);\n}\n\n.TagEditor-module_container__2eKme > input:focus:-moz-placeholder {\n  color: var(--color-text-soft);\n}\n\n.TagEditor-module_container__2eKme > input:focus::-moz-placeholder {\n  color: var(--color-text-soft);\n}\n\n.TagEditor-module_container__2eKme > input:focus:-ms-input-placeholder {\n  color: var(--color-text-soft);\n}\n\n.TagEditor-module_error__3OTzT {\n  color: var(--color-text-error);\n  margin-top: var(--m-xxs);\n  line-height: 1.4;\n  font-weight: 400;\n  text-align: left;\n}\n\n.TagEditor-module_spacer__1heGE {\n  margin-bottom: var(--m-mm);\n}";
var style$1 = {"container":"TagEditor-module_container__2eKme","backDrop":"TagEditor-module_backDrop__3W9Nk","tag":"TagEditor-module_tag__TH-1Z","input":"TagEditor-module_input__2aUcN","hasError":"TagEditor-module_hasError__1f5r2","error":"TagEditor-module_error__3OTzT","spacer":"TagEditor-module_spacer__1heGE"};
styleInject(css_248z$1);

function Tag(_a) {
    var text = _a.text, id = _a.id, removeTag = _a.removeTag, editTag = _a.editTag, validation = _a.validation;
    var _b = useState(""), error = _b[0], setError = _b[1];
    var _c = useState(false), selected = _c[0], setSelected = _c[1];
    var _d = useState(text), prevMemoText = _d[0], setPrevMemoText = _d[1];
    var memoText = useMemo(function () {
        return !selected ? (setPrevMemoText(text), text) : prevMemoText;
    }, [text, selected, prevMemoText]);
    useEffect(function () {
        validation && setError(validation(text));
    }, [text]);
    var setIsSelected = function () {
        setSelected(true);
    };
    var onChange = function (e) {
        var value = e.currentTarget.textContent;
        editTag(id, value || "");
    };
    var ref = useRef(null);
    useClickOutside(ref, function () { return setSelected(false); });
    return (jsxs("div", __assign({ className: classes([style$1.tag, error && style$1.hasError]), tabIndex: 0, title: error, onFocus: setIsSelected, ref: ref }, { children: [selected ? (jsx("span", __assign({ contentEditable: true, autoFocus: true, onInput: onChange, className: style$1.input, suppressContentEditableWarning: true }, { children: memoText }))) : (memoText), error && jsx(Icon, { icon: "error" }), jsx("button", __assign({ type: "button", onClick: function () { return removeTag(id); } }, { children: jsx(Icon, { icon: "cross" }) }))] })));
}

function TagEditor(_a) {
    var _b = _a.placeholder, placeholder = _b === void 0 ? "" : _b, _c = _a.storageKey, storageKey = _c === void 0 ? "tag-editor_key" : _c, clearOnUnmount = _a.clearOnUnmount, validation = _a.validation, className = _a.className, onUpdate = _a.onUpdate, error = _a.error, initialValue = _a.initialValue, clearNow = _a.clearNow, props = __rest(_a, ["placeholder", "storageKey", "clearOnUnmount", "validation", "className", "onUpdate", "error", "initialValue", "clearNow"]);
    var ref = useRef(null);
    var _d = useLocalStorage(storageKey, []), tags = _d[0], setTags = _d[1];
    var _e = useState(""), input = _e[0], setInput = _e[1];
    var breakInput = function (value) {
        var parts = value.split(/[\s\t\n,]+/).filter(function (part) { return part; });
        if (parts.length)
            setTags(function (tags) { return __spreadArray(__spreadArray([], (tags || []), true), parts, true); });
        setInput("");
    };
    var handleKeyPress = function (e) {
        var value = e.currentTarget.value;
        var key = e.key;
        if (key === "Enter") {
            e.stopPropagation();
            breakInput(value);
        }
        if (key === "Backspace" || key === "Delete") {
            if (!value) {
                removeTag((tags === null || tags === void 0 ? void 0 : tags.length) - 1);
            }
        }
    };
    var onInputChange = function (e) {
        var value = e.currentTarget.value;
        if ([" ", ",", "\n"].some(function (str) { return (value === null || value === void 0 ? void 0 : value.indexOf(str)) > -1; })) {
            breakInput(value);
        }
        else {
            setInput(value);
        }
    };
    var removeTag = function (id) {
        setTags(function (tags) { return tags.filter(function (tag, i) { return id !== i; }); });
    };
    var editTag = function (id, tag) {
        setTags(tags.map(function (t, i) { return (i === id ? tag : t); }));
    };
    useEffect(function () {
        return function () {
            if (clearOnUnmount) {
                setTags([]);
            }
        };
    }, []);
    useEffect(function () {
        onUpdate && onUpdate(tags);
    }, [tags]);
    useEffect(function () {
        !tags.length && setTags(initialValue);
    }, [initialValue]);
    useEffect(function () {
        clearNow && setTags([]);
    }, [clearNow]);
    return (jsxs(Fragment$1, { children: [jsxs("div", __assign({ className: classes([style$1.container, className]) }, props, { children: [jsx("div", { className: style$1.backDrop, onClick: function () { var _a; return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.focus(); } }), tags === null || tags === void 0 ? void 0 : tags.map(function (text, i) { return (jsx(Tag, __assign({}, { text: text, removeTag: removeTag, editTag: editTag, validation: validation, id: i }), text + i)); }), jsx("input", { placeholder: placeholder, onChange: onInputChange, value: input, ref: ref, onFocus: function (event) { return event.target.select(); }, onKeyDownCapture: handleKeyPress })] })), error && (jsxs("div", __assign({ className: style$1.error }, { children: [jsx(Icon, { icon: "error" }), " ", error] }))), jsx("div", { className: style$1.spacer })] }));
}

var css_248z = ".ThemeToggle-module_themeToggle__28RzK {\n  background-color: var(--color-border);\n  border-radius: 2rem;\n  border: 1px solid transparent;\n  padding: 4px;\n  transition: var(--transition-ui);\n  display: inline-block;\n  cursor: pointer;\n}\n.ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4 {\n  display: flex;\n  isolation: isolate;\n  position: relative;\n}\n.ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4:after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  height: 100%;\n  width: 50%;\n  border-radius: var(--border-radius-r);\n  background-color: var(--color-green-ui);\n  left: 0;\n  transition: var(--transition-ui);\n  transform: translate(100%, 0);\n}\n.ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4 > span {\n  padding: 6px;\n}\n.ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4 > span > svg {\n  display: block;\n  width: 18px;\n  height: 18px;\n  object-position: center;\n}\n.ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4 > span > svg path {\n  stroke: var(--color-icon);\n  transition: var(--transition-ui);\n}\nbody[data-theme=light] .ThemeToggle-module_themeToggle__28RzK {\n  background-color: transparent;\n  border-color: var(--color-border-soft);\n}\nbody[data-theme=light] .ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4:after {\n  transform: translate(0, 0);\n}\nbody[data-theme=light] .ThemeToggle-module_themeToggle__28RzK .ThemeToggle-module_inner__3BHB4 > span:nth-child(1) > svg path {\n  stroke: var(--color-background-modal);\n}";
var style = {"themeToggle":"ThemeToggle-module_themeToggle__28RzK","inner":"ThemeToggle-module_inner__3BHB4"};
styleInject(css_248z);

function ThemeToggle() {
    var setTheme = useThemeStore(function (state) { return state.setTheme; });
    return (jsx("button", __assign({ className: style.themeToggle, onClick: function () { return setTheme(); } }, { children: jsxs("span", __assign({ className: style.inner }, { children: [jsx("span", { children: jsx(Icon, { icon: "sun" }) }), jsx("span", { children: jsx(Icon, { icon: "moon" }) })] })) })));
}

export { Badge, Box, Button, Dialog, Errors, Frame, Icon, Input, Loader, Main, Modal, Pagination, Portal, Stepper, Switch, Table, Tableflow, Tabs, TagEditor, ThemeToggle, useFilter, useModal, usePassword, useSort, useStepper, useSyncPagination, useTabs, useThemeStore };
//# sourceMappingURL=index.esm.js.map
