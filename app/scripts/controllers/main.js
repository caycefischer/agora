'use strict';

agoraApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
});

//============================================================
// WorkspaceController, the "heavy" workspace object
//
//============================================================
agoraApp.controller('WorkspaceController', function($scope, $http) {
  
    $scope.workspaceID   = 0;
    $scope.name          = "";
    $scope.description   = "";
    $scope.elements      = [ { workspaceElementID:0, workspaceElementUID:0, data:"x"} ];
    $scope.text          = "";
    $scope.collaborators = [ 'Jim', 'Frank', 'Bob' ];
    
    $scope.load = function () {
        $http.get("/server/workspaces/Load").success(function (data) {
            $scope.workspaceID = data.workspaceID;
            $scope.name        = data.name;
            $scope.description = data.description;
        });
    }
    
    $scope.getElements = function () {
        $http.get("/server/workspaces/GetElements", 0).success(function (data) {
            $scope.elements = data;
        });
    }

    $scope.save = function () {
        var data = new Object();
        data.workspaceID = $scope.workspaceID;
        data.name        = $scope.name;
        data.description = $scope.description;
        
        $http.post('/server/workspaces/Save', data).success(function () {
            alert("Workspace Saved!");
        });
    }
    
    $scope.addElement = function () {
        var data = new Object();
        data.workspaceElementID  = 0;
        data.workspaceElementUID = "12";
        data.data                = $scope.text;
        
        $http.post('/server/workspaces/AddElement', data).success(function () {
        }).error(function(s) { alert(s); });

        $scope.text = "";
    }

    // PRIVATE

    $scope.createStage = function () {
    
        $scope.stage = new Kinetic.Stage( { container:'js-workspace', width:500, height:200 });

	    $scope.layer = new Kinetic.Layer();

        $scope.stage.add($scope.layer);

	    var ui = new Object();
	    ui.type = "rect";
	
        	    var rect = new Kinetic.Rect({
        		    x: 150,
        		    y: 100,
        		    width: 200,
        		    height: 78,
        		    fill: 'green',
        		    stroke: 'black',
        		    strokeWidth: 4
        	    });

	            $scope.layer.add(rect);
                $scope.layer.drawScene();

        //$scope.text = rect.toJSON();
        //JSON.stringify(someObject)
    }

    // CONSTRUCTOR

    $scope.load();
    $scope.getElements();
    
    // AUTO-REFRESH POOLING 
    window.setInterval(function() {
        $http.get("/server/workspaces/GetElements", 0).success(function (data) { $scope.elements = data; }); 
    }, 500);

	// INITIALIZE KINETICJS CANVAS
	$('document').ready(function() { setTimeout($scope.createStage, 10); });
});


