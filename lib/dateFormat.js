'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

var _index = require('../helper/index');

var _errCode = _interopRequireDefault(require('../helper/errCode'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

/**
 * @description 格式化日期
 * @param {(object|string)} date - 日期对象/字符串
 * @param {string} mask - 日期格式,默认：mask='yyyy-MM-dd HH:mm:ss'
 * @returns {string} 返回格式化后的日期
 */
var dateFormat = function dateFormat(date) {
  var mask =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd HH:mm:ss';
  var d = _typeof(date) !== 'object' ? new Date(date) : date;

  if (!d.getTime()) {
    throw new _index.MyError({
      code: '000',
      msg: _errCode['default']['000'],
    });
  }

  var zeroize = function zeroize(value) {
    var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    value = String(value);
    var zeros = '';

    for (var i = 0, len = length - value.length; i < len; i++) {
      zeros += '0';
    }

    return zeros + value;
  };

  return mask.replace(
    /"[^"]*"|'[^']*'|\b(?:d{1,4}|m{1,4}|yy(?:yy)?|([hHMstT])\1?|[lLZ])\b/gi,
    function($0) {
      switch ($0) {
        case 'd':
          return d.getDate();

        case 'dd':
          return zeroize(d.getDate());

        case 'ddd':
          return ['Sun', 'Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'][d.getDay()];

        case 'dddd':
          return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
            d.getDay()
          ];

        case 'M':
          return d.getMonth() + 1;

        case 'MM':
          return zeroize(d.getMonth() + 1);

        case 'MMM':
          return [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ][d.getMonth()];

        case 'MMMM':
          return [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ][d.getMonth()];

        case 'yy':
          return String(d.getFullYear()).substr(2);

        case 'yyyy':
          return d.getFullYear();

        case 'h':
          return d.getHours() % 12 || 12;

        case 'hh':
          return zeroize(d.getHours() % 12 || 12);

        case 'H':
          return d.getHours();

        case 'HH':
          return zeroize(d.getHours());

        case 'm':
          return d.getMinutes();

        case 'mm':
          return zeroize(d.getMinutes());

        case 's':
          return d.getSeconds();

        case 'ss':
          return zeroize(d.getSeconds());

        case 'l':
          return zeroize(d.getMilliseconds(), 3);

        case 'L':
          var m = d.getMilliseconds();
          if (m > 99) m = Math.round(m / 10);
          return zeroize(m);

        case 'tt':
          return d.getHours() < 12 ? 'am' : 'pm';

        case 'TT':
          return d.getHours() < 12 ? 'AM' : 'PM';

        case 'Z':
          return d.toUTCString().match(/[A-Z]+$/);
        // Return quoted strings with the surrounding quotes removed

        default:
          return $0.substr(1, $0.length - 2);
      }
    }
  );
};

var _default = dateFormat;
exports['default'] = _default;