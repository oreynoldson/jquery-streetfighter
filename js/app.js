$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function (){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
	})
	.mousedown(function(){
		console.log("Mouse down working");
		//Play hadouken sound
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		//show hadouken and animate it to the right of the screen
	})
	.mouseup(function(){
		console.log("Mouse up working");
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		//Ryu goes back to ready position
	})
});