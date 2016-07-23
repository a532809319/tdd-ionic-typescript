///<reference path="../typings/index.d.ts"/>

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

namespace app {
  let deps = [
    'ionic',
    'app.core',
    'app.tabs',
    'app.add',
    'app.search',
    'app.options',
    'app.share',
    'app.directives']

  angular.module('app', deps)
    .run(config_app) 


  function config_app($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show 
      // the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        window.cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        window.StatusBar.styleDefault();
      }
    });
  }
}

namespace app.core {
  angular
    .module('app.core', ['ui.router']);
}
