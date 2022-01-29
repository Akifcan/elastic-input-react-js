"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var _excluded = ["inputClass", "errorTextClass", "helperTextClass", "required", "base", "onChange", "validator", "value", "helperText"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ElasticInput = function ElasticInput(props) {
  var inputClass = props.inputClass,
      errorTextClass = props.errorTextClass,
      helperTextClass = props.helperTextClass,
      required = props.required,
      base = props.base,
      _onChange = props.onChange,
      validator = props.validator,
      value = props.value,
      helperText = props.helperText,
      htmlProps = _objectWithoutProperties(props, _excluded);

  var inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (required) {
      inputRef.current.setAttribute('not-valid', 'true');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      isError = _useState2[0],
      setError = _useState2[1];

  var checkIsValid = function checkIsValid() {
    var result = document.querySelectorAll("[not-valid=\"true\"]").length ? false : true;

    if (result) {
      var formIsValid = new CustomEvent('valid');
      base.current.dispatchEvent(formIsValid);
    } else {
      var formIsNotValid = new CustomEvent('notValid');
      base.current.dispatchEvent(formIsNotValid);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread(_objectSpread({
      className: inputClass,
      ref: inputRef
    }, htmlProps), {}, {
      onChange: function onChange(e) {
        _onChange(e);

        var result = validator(e.target.value);

        if (result !== null) {
          inputRef.current.setAttribute('not-valid', 'true');
          setError(result);
        } else {
          inputRef.current.removeAttribute('not-valid');
          setError(null);
        }

        checkIsValid();
      }
    })), isError && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: errorTextClass,
      children: isError
    }), !isError && helperText && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: helperTextClass,
      children: helperText
    })]
  });
};

var _default = ElasticInput;
exports.default = _default;