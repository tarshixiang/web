var app = angular.module('myApp',['ionic','myCtroller']);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

	$stateProvider.state('main',{
		abstract : true,
		templateUrl : 'view/main.html'
	}).state('main.home',{
		url : '/home',
		views : {
			"main-home" : {
				templateUrl : 'view/home.html',
				controller : 'homeCtrl'
			}
		}
	}).state('main.rank',{
		url : '/rank',
		views : {
			"main-rank" : {
				templateUrl : 'view/rank.html',
				controller : 'rankCtrl'
			}
		}
	}).state('main.search',{
		url : '/search',
		views : {
			"main-search" : {
				templateUrl : "view/search.html",
				controller : 'searchCtrl'
			}
		}
	}).state('song',{
		url : '/song',
		templateUrl : 'view/song.html',
		controller : "songCtrl"
	}).state('one',{
		url : '/one',
		templateUrl :'view/one.html',
		controller : "oneCtrl"
	})
	$urlRouterProvider.otherwise('/home');
}])
