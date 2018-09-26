(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tarojs/taro-weapp')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tarojs/taro-weapp'], factory) :
  (factory((global.TaroUtils = {}),global.Taro));
}(this, (function (exports,Taro) { 'use strict';

  Taro = Taro && Taro.hasOwnProperty('default') ? Taro['default'] : Taro;

  function append(url, params) {
    Object.keys(params).forEach(function (key, index) {
      var type = index === 0 ? '?' : '&';
      url = "".concat(url).concat(type).concat(key, "=").concat(params[key]);
    });
    return url;
  }
  var route = {
    redirect: function redirect(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Taro.redirectTo({
        url: append(url, params)
      });
    },
    to: function to(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      Taro.navigateTo({
        url: append(url, params)
      });
    },
    switch: function _switch(url) {
      Taro.switchTab({
        url: url
      });
    },
    back: function back() {
      Taro.navigateBack();
    },
    reLaunch: function reLaunch(url) {
      Taro.reLaunch({
        url: url
      });
    }
  };

  function _defineProperty(obj, key, value) {
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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var react = {
    loading: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '读取中...';
      return Taro.showLoading({
        title: title,
        mask: true
      });
    },
    hideLoading: function hideLoading() {
      Taro.hideLoading();
    },
    toast: function toast(config) {
      if (Object(config) !== config) {
        var title = config;
        config = {
          title: title
        };
      }

      return Taro.showToast(_objectSpread({
        mask: true,
        icon: 'none'
      }, config));
    },
    hideToast: function hideToast() {
      Taro.hideToast();
    },
    modal: function modal(options) {
      return Taro.showModal(options);
    }
  };

  exports.route = route;
  exports.react = react;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=taro-utils.js.map
