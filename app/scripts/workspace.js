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


};