$(function(){
	var w;
	/*--------주메뉴 gnb----------------*/
	$("#ham").click(function(){
		$("#navi").toggle();
		$("#body").toggle();
	}).resize();
	


	
	$(window).resize(function(){
		$("#gnb>li").off();
		w=$(window).width();
		if ( w>500 ) {
			$("#gnb>li").hover(
				function(){$(this).children("ul").stop().slideDown();},
				function(){$(this).children("ul").stop().slideUp();}
			);
		}
	}).resize();
	
	/* */
	/*--------이미지 슬라이드 mainSlide----------------*/
	var indexNum=0;
	setInterval(function(){
		if(indexNum==2) {
			indexNum=0;
		} else {
			indexNum += 1;
		}
		$("#mainSlide li").eq(indexNum-1).animate({"left":"-1201px", opacity:0}, 1000);	
		$("#mainSlide li").eq(indexNum).animate({"left":"0px", opacity:1}, 1000);
	}, 2000);
	
	
	
	/*--------공지사항과 수강후기 tab----------------*/
	$(".tabList dt").click(function(){
		if(w>=801 && w<=1199){
			return false;
		}else{
			$(this).addClass("on");
			$(this).parent().siblings().children("dt").removeClass();
			$(this).siblings("dd").show();
			$(this).parent().siblings().children("dd").hide();
		}
	});
	
	/*--------학원안내 info----------------*/
	
	/*--------현장 스케치 popUp----------------*/
	$("#popBack").mouseenter(function(){
		$("#black").stop(true).animate({top:0},500);
	});
	
	$("#popBack").mouseleave(function(){
		$("#black").stop(true).animate({top:290},500);
	});
	
	$("#popBack #black").click(function(){
		$("#pop").show();
	});
	
	/*--------팝업 pop----------------*/
	$("#pop .close").click(function(){
		$("#pop").hide();
	});
	
	/* 팝업창을 마우스따라 움직이기
	$("#pop").mousemove(function(e){
		$(this).css({
			left:e.clientX - 50,
			top:e.clientY - 50
		});
	});
	*/
	/*
	클라이언트 영역 내의 가로,세로 좌표를 제공. 여기서 클라이언트 영역은 현재 보이는 브라우저 화면이 기준.
		clientX : 브라우저 페이지에서의 X좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정.
		clientY : 브라우저 페이지에서의 Y좌표 위치를 반환하나 스크롤은 무시하고 해당 페이지의 상단을 0으로 측정.
	*/
	
	setInterval(function(){
		$("ul#txtSlide li").each(function(){
			$(this).css("left",$(this).position().left-1);
			var nowLeft = parseInt($(this).css("left"));
			if(nowLeft<=-1200){
				$(this).css("left","3000px");
			}
		});
	}, 30); //물 흐르듯 흘러감...
	
	/*--------텍스트 롤링 txtSlide----------------*/
	$("#txtSlide li").each(function(index){
		var newLeft = index * 300;
		$(this).css("left",newLeft);		
	});
	
	
	
});