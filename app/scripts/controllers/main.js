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
    $scope.elements      = [ { wor $scope.text          = "";
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

<<<<<<< HEAD
    initializeWorkspaceJS($scope);
    // CONSTRUCTOR
=======
    $scope.createStage = function ($scope.updateElement = function (shape) {
        
        var data = new Object();
        data.workspaceElementID  = 0;
        data.workspaceElementUID = shape.parentController.element.workspaceElementUID;
        data.data                = shape.toJSON();
        
        $http.post('/server/workspaces/UpdateElement', data).success(function () {
        }).error(function(s) { alert(s); });
    }

    // PRIVATE

    $scope.createStage = function () {
    
        $scope.stage       = new Kinetic.Stage( { container:'js-workspace', width:$("#js-workspace").width(), height:$("#js-workspace").height() });
        $scope.layer       = new Kinetic.Layer();
        $scope.designLayer = new Kinetic.Layer();
        $scope.background  = new Kinetic.Rect({ x:0, y:0, width:2000, height:2000, fill:'#eee' });

        $scope.layer.add($scope.background);
        $scope.stage.add($scope.layer);
        $scope.stage.add($scope.designLayer);

        $scope.$watch('elements.length', $scope.buildStage);
        $scope.$watch('elements[elements.length-1].workspaceElementID', $scope.buildStage);

        $("#js-workspace").watch('width,height', function() {
            $scope.stage.setWidth(this.width());
            $scope.stage.setHeight(this.height());
        });

        
        //$scope.text = rect.toJSON();
        //JSON.stringify(someObject)

        $scope.ready = true;
    }

    // BUILD
    $scope.buildStage = function () {
    
        if($scope.ready!=true) return;

        $scope.layer.removeChildren();
        $scope.layer.add($scope.background);

        $scope.background.on('mousedown', function(evt) { alert(0);
            //if($scope.focus==undefined) return;
            //$scope.focus.leaveDesignMode();
        });

        $.each($scope.elements, function(i, element) {

            var shape           = Kinetic.Node.create(element.data);
            var shapeController = new Kinetic.Group({ draggable:true });
            
            shape.parentController  = shapeController;
            shapeController.add(shape);
            shapeController.$scope  = $scope;
            shapeController.shape   = shape;
            shapeController.element = element;
>>>>>>> 0f8efa9c05bc798ebd6cd43b8499dbbe3892dbc0

            ExtendControllerAsRectangleController(shapeController); // UGLY HACK
            
            //shape.on('mouseover', function() { document.body.style.cursor = 'pointer'; shape.controller.enterDesign(); });
            //shape.on('mouseout', function() { document.body.style.cursor = 'default'; });

            //shape.on('dragmove', function(evt) { $scope.updateElement(shape); });

            $scope.layer.add(shapeController);
        });
        
        $scope.layer.drawBuffer();
        $scope.layer.drawScene();
    }
    
    //$scope.$on('$locationChangeStart', function(event, newUrl) {
    //alert('new location');
.getElements();
    
    // AUTO-REFRESH POOLING 
    window.setInterval(function() {
        $http.get("/server/workspaces/GetElements", 0).success(function (data) { $scope.elements = data; }); 
    }, 500);

<<<<<<< HEAD
    $('document').ready(function(){ 
    	// INITIALIZE KINETICJS CANVAS
        setTimeout($scope.createStage, 10); 
        
        // START UP EVENT LISTENERS
        $scope.initListeners();
    });


=======
	// INITIALIZE KINETICJS CANVAS
	$('document').ready(100);

	// INITIALIZE KINETICJS CANVAS
	$scope.$on('$viewContentLoaded', function()
    {
        $scope.createStage();
    });
>>>>>>> 0f8efa9c05bc798ebd6cd43b8499dbbe3892dbc0
});

function ExtendControllerAsRectangleController(self) {
//    this.shape   = shape;
//    this.element = undefined;
//    this.group   = undefined;
//    this.shadow  = undefined;
//    this.handle1 = undefined;
//    this.handle2 = undefined;
//    this.handle3 = undefined;
//    this.handle4 = undefined;

    //========================================
    self.enterDesign = function() {
        if(self.$scope.focus!=undefined)
            self.$scope.focus.leaveDesign();

        var x1 = self.shape.attrs.x;
        var x2 = self.shape.attrs.x+self.shape.attrs.width;
        var y1 = self.shape.attrs.y;
        var y2 = self.shape.attrs.y+self.shape.attrs.height;

//        this.group  = new Kinetic.Group({ draggable:true });
//        this.shadow = Kinetic.Node.create(this.shape.toJSON());

        self.handle1 = new Kinetic.Circle({x:x1,y:y1,radius:10,fill:'red',stroke:'black',strokeWidth:2});
        self.handle2 = new Kinetic.Circle({x:x2,y:y1,radius:10,fill:'red',stroke:'black',strokeWidth:2});
        self.handle3 = new Kinetic.Circle({x:x2,y:y2,radius:10,fill:'red',stroke:'black',strokeWidth:2});
        self.handle4 = new Kinetic.Circle({x:x1,y:y2,radius:10,fill:'red',stroke:'black',strokeWidth:2});

//        this.group.add(this.shadow);
        self.add(self.handle1);
        self.add(self.handle2);
        self.add(self.handle3);
        self.add(self.handle4);

//        $scope.designLayer.add(this.group);
//        $scope.designLayer.drawBuffer();
//        $scope.designLayer.drawScene();

        self.$scope.focus = self;
        self.$scope.layer.drawBuffer();
        self.$scope.layer.drawScene();
    }

    self.on('mouseover', function() { document.body.style.cursor = 'pointer'; });  // 
    self.on('mouseout', function() { document.body.style.cursor = 'default'; });

    self.on('mousedown', function() { self.enterDesign(); });

    self.on('dragstart', function(evt) 
    {
        self.startX = self.attrs.x;
        self.startY = self.attrs.y;
    });

    self.on('dragend', function(evt) 
    { 
        var deltaX = self.attrs.x-self.startX;
        var deltaY = self.attrs.y-self.startY;
    
        self.shape.setX(self.shape.attrs.x+deltaX);
        self.shape.setY(self.shape.attrs.y+deltaY);
        
        self.$scope.updateElement(self.shape); 

        //self.leaveDesign(); 
    });
//        this.group.on('mouseout', function() { self.leaveDesign(); });
//    };

    self.leaveDesign = function() {
        //self.remove(self.handle1);
        //self.remove(self.handle2);
        //self.remove(self.handle3);
        //self.remove(self.handle4);

        //self.$scope.focus = undefined;
        //self.$scope.layer.drawBuffer();
       // self.$scope.layer.drawScene();

//        $scope.designLayer.drawBuffer();
//        $scope.designLayer.drawScene();

//        document.body.style.cursor = 'default';
    };
}
