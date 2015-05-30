System.register(["aurelia-router"], function (_export) {
  "use strict";

  var Router, newPost;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }],
    execute: function () {
      newPost = (function () {
        function newPost(router) {
          _classCallCheck(this, newPost);

          this.author = "";
          this.title = "";
          this.text = "";

          this.appRouter = router;
        }

        _createClass(newPost, [{
          key: "submit",
          value: function submit() {
            data.push({
              author: "" + this.author,
              title: "" + this.title,
              text: "" + this.text,
              createdDate: "" + new Date()
            });

            this.author = "";
            this.title = "";
            this.text = "";

            this.appRouter.navigate("");
          }
        }], [{
          key: "inject",
          value: function inject() {
            return [Router];
          }
        }]);

        return newPost;
      })();

      _export("newPost", newPost);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztjQUVhLE9BQU87Ozs7Ozs7OzhCQUZaLE1BQU07OztBQUVELGFBQU87QUFPUCxpQkFQQSxPQUFPLENBT04sTUFBTSxFQUFDO2dDQVBSLE9BQU87O2VBR2xCLE1BQU0sR0FBRyxFQUFFO2VBQ1gsS0FBSyxHQUFHLEVBQUU7ZUFDVixJQUFJLEdBQUcsRUFBRTs7QUFHUCxjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN6Qjs7cUJBVFUsT0FBTzs7aUJBV1osa0JBQUU7QUFDTixnQkFBSSxDQUFDLElBQUksQ0FBQztBQUNSLG9CQUFNLE9BQUssSUFBSSxDQUFDLE1BQU0sQUFBRTtBQUN4QixtQkFBSyxPQUFNLElBQUksQ0FBQyxLQUFLLEFBQUU7QUFDdkIsa0JBQUksT0FBSyxJQUFJLENBQUMsSUFBSSxBQUFFO2FBQ3JCLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLGdCQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQzs7QUFFZixnQkFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7V0FDN0I7OztpQkF0Qlksa0JBQUc7QUFBRSxtQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQUU7OztlQUR6QixPQUFPOzs7eUJBQVAsT0FBTyIsImZpbGUiOiJuZXctcG9zdC5qcyIsInNvdXJjZVJvb3QiOiIuLi9zcmMvIn0=
