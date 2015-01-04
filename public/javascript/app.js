angular.module('hotAndBothered', ['ui.router'])

.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/home.html'
		})
		
		.state('profile', {
			url: '/profile',
			templateUrl: 'views/profile.html'
			// controller: 'ProfileController'
		})

		.state('matches', {
			url: '/matches',
			templateUrl: 'views/matches.html'
		})

		.state('favorites', {
			url: '/favorites',
			templateUrl: 'views/favorites.html'
		})

		.state('about', {
			url: '/about',
			templateUrl: 'views/about.html'
		});

}]);