'use strict';

/**
 * @ngdoc directive
 * @name virtualKeyboardWithAngularApp.directive:display
 * @description
 * # display
 */
angular.module('virtualKeyboardWithAngularApp')
  .directive('display',function (korean) {
    return function (scope, element) {
      // Bind textarea to listen keydown and keypress
      element.bind("keydown keypress", function (e) {
        korean.activateKey(e.currentTarget, e, true);
      });

      // Bind textarea to listen keyup
      element.bind("keyup", function (e) {
        korean.activateKey(e.currentTarget, e, false);
      });
    };
});
