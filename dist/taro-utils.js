(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tarojs/taro')) :
  typeof define === 'function' && define.amd ? define(['exports', '@tarojs/taro'], factory) :
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

  exports.route = route;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=taro-utils.js.map
