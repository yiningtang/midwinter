'use strict';

/**
 * @ngdoc overview
 * @name portfolio1App
 * @description
 * # portfolio1App
 *
 * Main module of the application.
 */
 var app=angular
 .module('portfolio1App', [
  'ui.router'
  ]);

 app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
  .state('home', {
    url: "/home",
    templateUrl: "views/home.html",
    activetab: 'home'
  })
  .state('about', {
    url: "/about",
    templateUrl: "views/about.html",
     activetab: 'about'
  })
  .state('contact', {
    url: "/contact",
    templateUrl: "views/contact.html", 
    activetab: 'contact'
  });
});
  app.run(function($rootScope) {
 
   /**$rootScope.clicked = false;
   $rootScope.click=function(){
     $rootScope.clicked=true;
   };**/
 });
