'use strict';

agoraApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});


// WorkspaceController, the "heavy" workspace object
agoraApp.controller('WorkspaceController', function($scope) {
  
  $scope.workspaceID = '12345';
  $scope.collaborators = [
    'Jim',
    'Frank',
    'Bob'
  ];
  $scope.name = 'Hello World';
	$scope.description = 'This is my first project.';
	$scope.name = 'My Project!';

	// initialize KineticJS canvas
	$('document').ready(function(){
		setTimeout(function() {
			makeState();
		}, 10);
	});


});


