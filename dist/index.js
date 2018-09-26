'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Taro = _interopDefault(require('@tarojs/taro'));

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
//# sourceMappingURL=index.js.map
