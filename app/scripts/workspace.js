// workspace constructor function
function initializeWorkspaceJS($scope) {
	// get the window dimensions
	var width = window.innerWidth;
	var height = window.innerHeight;

	// build the canvas
	$scope.createStage = function() {
		$scope.stage = new Kinetic.Stage({ 
			container:'js-workspace',
			width:width,
			height:height 
		});
	};

	// start up event listeners
	$scope.initListeners = function() {
		$scope.stage.getContainer().addEventListener('mouseup', function(evt) {});
		$scope.stage.getContainer().addEventListener('mousedown', function(evt) {});
		$scope.stage.getContainer().addEventListener('mousemove', function(evt) {});
	};

}; // end initializeWorkspaceJS

    




        var ui = new Object();
	    ui.type = "rect";




function makeState() {
	
	var stage = new Kinetic.Stage({
		container: 'js-workspace',
		width: 500,
		height: 300
	});

	var layer = new Kinetic.Layer();

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

	layer.add(rect);

	stage.add(layer);

	stage.setListening(true);
	stage.on("mouseover", function() {
          console.log("DERP");
        });

};