"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

const _excluded = ["inputClass", "errorTextClass", "helperTextClass", "required", "base", "onChange", "validator", "value", "helperText"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const ElasticInput = props => {
  const {
    inputClass,
    errorTextClass,
    helperTextClass,
    required,
    base,
    onChange: _onChange,
    validator,
    value,
    helperText
  } = props,
        htmlProps = _objectWithoutProperties(props, _excluded);

  const inputRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    if (required) {
      inputRef.current.setAttribute('not-valid', 'true');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  const [isError, setError] = (0, _react.useState)(null);

  const checkIsValid = () => {
    const result = document.querySelectorAll("[not-valid=\"true\"]").length ? false : true;

    if (result) {
      const formIsValid = new CustomEvent('valid');
      base.current.dispatchEvent(formIsValid);
    } else {
      const formIsNotValid = new CustomEvent('notValid');
      base.current.dispatchEvent(formIsNotValid);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", _extends({
    className: inputClass,
    ref: inputRef
  }, htmlProps, {
    onChange: e => {
      _onChange(e);

      const result = validator(e.target.value);

      if (result !== null) {
        inputRef.current.setAttribute('not-valid', 'true');
        setError(result);
      } else {
        inputRef.current.removeAttribute('not-valid');
        setError(null);
      }

      checkIsValid();
    }
  })), isError && /*#__PURE__*/React.createElement("p", {
    className: errorTextClass
  }, isError), !isError && helperText && /*#__PURE__*/React.createElement("p", {
    className: helperTextClass
  }, helperText));
};

var _default = ElasticInput;
exports.default = _default;