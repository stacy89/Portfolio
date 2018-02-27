'use strict';

angular.module('portfolio.projects', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'projects/projects.html',
    controller: 'ProjectsCtrl'
  });
}])

.controller('ProjectsCtrl', ['$scope', function($scope) {

	$scope.projects = [
		{
			name: 'Thera-Bot',
			live: 'https://stacy89.github.io/project1/',
			github: 'https://github.com/stacy89/project1',
			image: 'public/Projects/theraBot.png',
			description: "This bot was built to help those dealing with any kind of emotion. You can have a semi-intelligent conversation and depending on how you feel the bot will play you a song from youtube as well as show you the video. When a user visits the site they can click the start session button and the bot greets them and the conversation can start. You can leave the session at anytime by saying 'I don't want to talk' and the session will end.",
			tech: "Tech:  JavaScript, Firebase"
		},
		{
			name: 'Student MGMT',
			live: 'https://teacherstudentmanagement.herokuapp.com/',
			github: 'https://github.com/stacy89/Student-Management-Tool',
			image: 'public/Projects/MGMT.png',
			description: "An administrative system to store student data and generate student groups based on criteria like GPA, gender, and attendance. Formulated the students routes and used CSS to design the pages. This tool is useful for teachers that have a hard time forming groups of their students and to keep track of what student belongs to what teacher.   [Temp. access]--[email: teacher@teacher.com | password: teacher]",
			tech: "Tech: Ruby on Rails, Ruby, PostgreSQL, Heroku, Twilio API"
		},
		{
			name: 'Authentic Realities',
			live: 'https://proj-authentic-realities.herokuapp.com/index.html',
			github: 'https://github.com/stacy89/Authentic-Realities',
			image: 'public/Projects/AuthenticRealities.png',
			description: "Data visualization using VR to express data/statistics of inequalities in salary based on personal identity. Created the main visual environment and helped with coding the triggered events on collision. This experience is offered to help users feels an emotional connection to the lived experience of socioeconomic status.",
			tech: "Tech: Unity, C#, MonoDevelop, Heroku, SteamVR, Oculus"
		},
		{
			name: 'Lost and Found',
			github: 'https://github.com/stacy89/Lost_and_Found',
			image: 'public/Projects/Lost&Found.png',
			description: "A social network app that allows people to travel and visit restaurants and bars like a local in a new city, instead of just being a tourist. This app was built after my own struggle to find real, authentic experiences while traveling.",
			tech: "Tech: Sinatra, JavaScript,  Google Maps API"
		}
	];
}]);