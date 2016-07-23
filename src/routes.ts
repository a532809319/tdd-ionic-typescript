///<reference path="../typings/index.d.ts"/>

namespace app.core {
  angular
    .module('app.core')
    .config(my_app_routes)

  function my_app_routes(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('tabsController.compartir', {
        url: '/add',
        views: {
          'tab3': {
            templateUrl: 'templates/add.html',
            controller: 'AddCtrl',
            controllerAs: 'addCtrl'
          }
        }
      })

      .state('tabsController.buscar', {
        url: '/search',
        views: {
          'tab2': {
            templateUrl: 'templates/search.html',
            controller: 'SearchCtrl',
            controllerAs: 'searchCtrl'
          }
        }
      })

      .state('tabsController.opciones', {
        url: '/more',
        views: {
          'tab1': {
            templateUrl: 'templates/options.html',
            controller: 'OptionsCtrl',
            controllerAs: 'optionsCtrl'
          }
        }
      })

      .state('tabsController', {
        url: '/tab',
        templateUrl: 'templates/tabsController.html',
        controller: 'TabsCtrl',
        controllerAs: 'tabsCtrl',
        abstract: true
      })

      .state('tabsController.comparte', {
        url: '/share',
        views: {
          'tab3': {
            templateUrl: 'templates/share.html',
            controller: 'ShareCtrl',
            controllerAs: 'shareCtrl'
          }
        }
      })

    $urlRouterProvider.otherwise('/tab/share')
  }
}