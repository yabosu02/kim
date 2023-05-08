
/* 메뉴 이미지 슬라이드 */
$(".main li").mouseenter(function(){
	$(this).children(".submenu").slideDown(500);
});
$(".main li").mouseleave(function(){
	$(this).children(".submenu").slideUp(500);
});


					
					
					
					
					
/* 메인 이미지 슬라이드 */  
var imgNum = 0;

		
setInterval(function(){
	
if(imgNum==2){
	imgNum = 0;
}else{
	imgNum +=1;
}
	
	$("#mainimage li").eq(imgNum-1).animate({"left":"-1201px","opacity":"0"},1000);
	$("#mainimage li").eq(imgNum).animate({"left":"0px","opacity":"1"},1000);
	
},2000);

		
		
		
		
		
		
	/* 공지사항 및 수강후기 */
	 $( ".notice").children("li").mouseenter(function(){
		  $(this).css({background:"#40a3e4"});
	 });
	  $( ".notice").children("li").mouseleave(function(){
		  $(this).css({background:"#fff"});
	 });
	 
	  $( ".content2").children("li").mouseenter(function(){
		  $(this).css({background:"#40a3e4"});
	 });
	  $( ".content2").children("li").mouseleave(function(){
		  $(this).css({background:"#fff"});
	 });
	 
	 
	 
	 
	 
		/* 수강후기 리스트 */
		$(".hideTab a").click(function(){	
			/* $(this).css({ background:"#40a3e4", color:"#fff" }); */
			$(".content1").children().hide();
			$(".content2").children("ul").css({display:"block"});
			$(".content2").children().show();
			$(".content2").children("li").css( "background","#40a3e4" );
			$(".hideTab").css({background:"#40a3e4", color:"#fff"});
			$(".noticeTab").css({background:"#fff"});
			$(".noticeTab a").css({color:"#000"});
			$(this).css("color","#fff");
		});
	
	
	
		/* 공지사항 리스트 */
		$(".noticeTab a").click(function(){	//공지사항
			/* $(this).css({ background:"#40a3e4", color:"#fff" }); */
			$(".content2").children().hide();
			$(".content1").children().show();
			$(".content1").children("li").css({background:"#40a3e4"});
			$(".hideTab").css({background:"#fff"});
			$(".noticeTab").css({background:"#40a3e4"});
			
			$(".hideTab").css({background:"#fff"});
			$(".hideTab a").css({color:"#000"});
			$(this).css("color","#fff");
		});
	
		/**/
		
	
	
	
	
/*학원 안내*/
$(".middle li:first").mouseenter(function(){
		$(".info1").attr({src:"images/document_o.png"});
	$(this).children("a").css({color:'#40a3e4'});
});

$(".middle li:eq(1)").mouseenter(function(){
		$(".info2").attr({src:"images/recircle_o.png"});
	$(this).children("a").css({color:'#40a3e4'});
});

$(".middle li:eq(2)").mouseenter(function(){
		$(".info3").attr({src:"images/phone_o.png"});
	$(this).children("a").css({color:'#40a3e4'});
});

$(".middle li:first").mouseleave(function(){
		$(".info1").attr({src:"images/document.png"});
});

$(".middle li:eq(1)").mouseleave(function(){
		$(".info2").attr({src:"images/recircle.png"});
});

$(".middle li:eq(2)").mouseleave(function(){
		$(".info3").attr({src:"images/phone.png"});
});

$(".middle li").mouseleave(function(){
	$(this).children("a").css({color:'#000'});
});






/* 팝업 처음부터 보여지기*/
   	$("#popup").show();

	
	
/* 팝업창 열고 닫기 */
$(".close").click(function(){
	$(this).parent().hide();
});

$(".pp").click(function(){
	$("#popup").show();
});





/* 현장 스케치 검은 화면 가리기 */
	/**/
	$("#banner .right .window").css({
	top:"260px"
	});
	
/* 현장 스케치 팝업창  */
$("#banner .right").mouseenter(function(){
	
	$(".window .black").stop().animate({
		display:"block", 
		top:"-268px",
		left:"-20px",
		color:"white",
		opacity:"0.8"
	},700)
});

$("#banner .right .window").mouseleave(function(){
	$(".window .black").stop().animate({
		top:"240",
		opacity:"0"
	},700)
});






/* 하단 이미지 슬라이드 */ 
$("#bottombanner li").each(function(indexNum){
	$(this).css("left",indexNum*300);
});
setInterval(function() {
	$("#bottombanner li").each(function(){
		var nowleft = parseInt($(this).css("left"));	
		var moveleft = nowleft-5;
		console.log("#bottombanner li")
		$(this).animate({left:moveleft}, 50, function(){
			
			if(moveleft<-301){
				$(this).css({left:3890});
			}
		});
	});
}, 100 );
	