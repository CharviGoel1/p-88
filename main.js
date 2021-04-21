var canvas = new fabric.Canvas('myCanvas');
p_x = 10;
p_y = 10;
p_width = 30;
p_height = 30;
var block_img = "";
var player_img = "";

function player_update() {
	fabric.Image.fromURL("player.png", function (Img) {
		player_object = Img;
		player_object.scaleToWidth(150);
		player_object.scaleToHeight(140);
		player_object.set({
			top: player_y,
			left: player_x
		});
		canvas.add(player_object);
	});
}

function new_image(get_image) {
	fabric.Image.fromURL(get_image, function (Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(p_width);
		block_image_height.scaleToHeight(p_height);
		block_image_object.set({
			top: p_y,
			left: p_x
		});
		canvas.add(block_image)
	});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(){
	keypress = 
}
