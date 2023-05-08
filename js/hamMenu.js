// 햄버거메뉴 클릭

 $(window).resize(function(){ 
	var width_size=window.width();
		if(width_size<=500){
			$("#ham2").click(function(){
				$("#menu2").show();
				$("#menu").hide();
			});	
		} else {
			$("#ham").click(function(){
				$(this).toggleClass('on');
				$("#menu").toggleClass("active");
				$(".bar").toggleClass("change");	
			});	
		}
}).resize();	
