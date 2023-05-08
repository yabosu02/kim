$(document).ready(function(){
	
	$(window).resize(function(){
		var w = window.innerWidth;
		var h = window.innerHeight;
	$("#right").css({ width:w, height:h });
	doLayOut();
	}).resize();
	
	var moving = false; 
	var num = 0; 
	
	function doLayOut(){
		var t = window.innerHeight*(-1)*num; 
		$("#right").css({ top:t + "px" });

		$("#right .page").css({width:window.innerWidth, height:window.innerHeight}).removeClass("loading");
		 /* ---doLayOut() 끝--- */
		
	}	

		doLayOut();
		$(".aside .item").eq(num).addClass("on");
		
		$("#menu li a, .aside li.item a").click(function(e){
			e.preventDefault();
			var order = $(this).parent().index();
			num = order;
			
			var t = window.innerHeight*(-1)*num;
			
			$(".aside .item").removeClass("on");
			$(".aside .item").eq(num).addClass("on");
			
	});
});