//============================================================
//
//
//============================================================
function __test_UserController($scope, $http) {
    $scope.userID      = 0;
    $scope.email       = "";
    $scope.name        = "";
    $scope.description = "";

    $scope.save = function () {
        var data = new Object();
        
        data.userID      = $scope.userID;
        data.email       = $scope.email;
        data.name        = $scope.name;
        data.description = $scope.description;
        
        $http.post('/server/users/Save', data).success(function () {
            alert("User Saved!");
        });
    }

    $http.get("/server/users/Load").success(function (data) {
        $scope.userID      = data.userID;
        $scope.email       = data.email;
        $scope.name        = data.name;
        $scope.description = data.description;
    });
}

//============================================================
//
//
//============================================================
function __test_WorkspaceController($scope, $http) {
    $scope.workspaceID = 0;
    $scope.name        = "";
    $scope.description = "";
    
    $scope.save = function () {
      $scope.elements    = [ { workspaceElementID:0, workspaceElementUID:0, data:"x"} ];
    $scope.text        = "";
    pe.save = function () {
        var data = new Object();
        
        dat     data.name        = $scope.name;
        data.description = $scope.description;
        
        $http.post('/server/workspaces/Save', data).success(function () {
            alert("Workspace Saved!");
        });
    }

    $http.get("/server/workspaces/Load").success(    
    $scope.addElement = function () {
        var data = new Object();
        data.workspaceElementID  = 0;
        data.workspaceElementUID = "12";
        data.data                = $scope.text;
        
        $http.post('/server/workspaces/AddElement', data).success(function () {
        }).error(function(s) { alert(s); });

        $scope.text = "";
    }

    window.setInterval(function() {
        $http.get("/server/workspaces/GetElements", 0).success(function (data) { $scope.elements = data; }); 
    }, 500);s(function (data) {
        $scope.workspaceID = data.workspaceID;
        $scope.name        = data.name;
        $scope.description = data.description;
    });
}    
    $http.get("/server/workspaces/GetElements", 0).success(function (data) {
        $scope.elements = data;
    });
    
}