System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, Welcome;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      Welcome = (function () {
        function Welcome() {
          _classCallCheck(this, Welcome);
        }

        _createClass(Welcome, [{
          key: 'posts',
          get: function () {
            return data.map(function (obj) {

              obj.dateString = obj.updatedDate ? '"Updated on" + ' + obj.updatedDate : '"Posted on" + ' + obj.createdDate;
              obj.text = obj.text.replace(/(\r\n|\n|\r)/gm, '<br>');

              return obj;
            });
          }
        }]);

        return Welcome;
      })();

      _export('Welcome', Welcome);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLE9BQU87Ozs7Ozs7O3VDQUZaLFlBQVk7OztBQUVQLGFBQU87aUJBQVAsT0FBTztnQ0FBUCxPQUFPOzs7cUJBQVAsT0FBTzs7ZUFDVCxZQUFFO0FBQ1QsbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRTs7QUFFN0IsaUJBQUcsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFdBQVcsdUJBQXFCLEdBQUcsQ0FBQyxXQUFXLHNCQUFzQixHQUFHLENBQUMsV0FBVyxBQUFFLENBQUM7QUFDNUcsaUJBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRXRELHFCQUFPLEdBQUcsQ0FBQzthQUNaLENBQUMsQ0FBQztXQUNKOzs7ZUFUVSxPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJ3ZWxjb21lLmpzIiwic291cmNlUm9vdCI6Ii4uL3NyYy8ifQ==