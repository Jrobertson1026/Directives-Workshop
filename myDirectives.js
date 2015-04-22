var app = angular.module('myDirectives', []);

app.directive('dirPending', function() {
  return {
    restrict: 'AE',
    scope: { //This is not a scope object. this is instructions for the directives scope object.

      request: "=dirPending",
      imgUrl: "@"
    },
    link: function(scope, elem, attr) {
      var btn = elem.find("button");
      var imgTemplate = "<img src='" + scope.imgUrl + "'/>";


      btn.on('click', function() {

        btn.prop("disabled", true);
        var oldText = btn[0].textContent;
        btn[0].textContent = "Pending";
        elem.append(imgTemplate);
        scope.request().then(function() {
          btn[0].textContent = oldText;
          var img = elem.find("img");
          btn.prop('disabled', false);
          img.remove();

        });
      });
    }
  }

});



/*app.directive('dirNotify', function() {
  return {
    restrict: "AE",
    scope: {
      dirTitle: "="
      dirBody: "="
      dirIcon: "="
    },
    link: function(scope, elem, attr) {

      var Notification = window.Notification || window.mozNotification || window.webkitNotification;

      Notification.requestPermission(function(permission) {
        console.log(permission);
      });

      btn.on('click', function() {
        var note = new Notification(scope.title, scope.body, scope.icon)
      });
    }
  }
});*/
