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
        var data = new Object();
        data.workspaceID = $scope.workspaceID;
        data.name        = $scope.name;
        data.description = $scope.description;
        
        $http.post('/server/workspaces/Save', data).success(function () {
            alert("Workspace Saved!");
        });
    }

    $http.get("/server/workspaces/Load").success(function (data) {
        $scope.workspaceID = data.workspaceID;
        $scope.name        = data.name;
        $scope.description = data.description;
    });
}