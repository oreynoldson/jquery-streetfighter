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
		playhadouken();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()//take out the ; here so that the animation works
		.animate(
		  {'left': '300px'},
		  500,
		  function() {
		    $(this).hide();
		    $(this).css('left', '-212px');
		  }
		);
	})
	.mouseup(function(){
		console.log("Mouse up working");
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		//Ryu goes back to ready position
	})
});

function playhadouken () {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play();
}
