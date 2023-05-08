$(document).ready(function(){   

// 햄버거메뉴 클릭
$('#ham').click(function(){
	$(this).toggleClass('on');
	$("#menu").toggleClass("active");
	$(".bar").toggleClass("change");
});


/* 최상단 그림이 차례대로 바뀌는 것 */
		$("section h1").on("click",function(){ 
		$(this).stop().animate({"top":"-135px","left":"-560px"},1800,"easeInOutBack"); 
		$("small").stop().animate({"right":"0px","bottom":"-25px"},1800,"easeInOutBack");  
		$("h6").hide(2000);

		$(".top").delay(2000).animate({width:"100%"}, 1000, function(){
			$(".right").animate({height:"100%"}, 1000, function(){
				$(".bottom").animate({width:"100%"}, 1000, function(){
					$(".left").animate({height:"100%"}, 1000, function(){
						$(".box1").addClass("on"); 
						$(".top, .left, .right, .bottom").stop().delay(2000).animate({"opacity":"0"});
						$("#gnb").stop().delay(1500).animate({"top":"-25px","opacity":"1"},1800,"easeOutBack"); 
						$(".util").stop().delay(2000).animate({"top":"-100px","opacity":"1"},1800,"easeOutBack"); 
						$(".footer").stop().delay(3000).animate({"bottom":"-60px","opacity":"1"},1800,"easeOutBack");  						
					}); // left end
				}); // bottom end
			});  // right end
		});  // top end
	});  // h1 end
	
	
	
	
	$(".btnMenu").on("click",function(){ 
		$("section>article").removeClass("on"); 
		$(".box2").addClass("on"); 
		$(".btnMenu2").fadeIn(); 
	}); 
	
	$(".btnMenu2").on("click",function(){ 
		$("section>article").removeClass("on"); 
		$(".box1").addClass("on"); 
		$(".btnMenu").fadeIn(); 
	});  
	
	
	/* works 더보기 클릭 */
	$("#type li:nth-child(1)").click(function(){
		$("#infographic").show();
		$("#logo").hide();
		$("#edit").hide();
		$("#web").hide();
		$("#others").hide();
	});
	$("#type li:nth-child(2)").click(function(){
		$("#logo").show();
		$("#infographic").hide();
		$("#edit").hide();
		$("#web").hide();
		$("#others").hide();
	});
	$("#type li:nth-child(3)").click(function(){
		$("#edit").show();
		$("#infographic").hide();
		$("#logo").hide();
		$("#web").hide();
		$("#others").hide();
	});
	$("#type li:nth-child(4)").click(function(){
		$("#web").show();
		$("#infographic").hide();
		$("#logo").hide();
		$("#edit").hide();
		$("#others").hide();
	});
	$("#type li:nth-child(5)").click(function(){
		$("#others").show();
		$("#infographic").hide();
		$("#logo").hide();
		$("#edit").hide();
		$("#web").hide();
	});
	
	
	/* works 클릭시 검정화면 추가 변환 
	*/
	$("#infographic li").each(function(aa){
		$(this).css("left",aa*260+"px");		
		var hei = $(this).find("img").css("height");
		$(this).css("height",hei);
	});
	$("#infographic li").mouseenter(function(){
			var wid = $(this).find("img").css("width");
			var hei = $(this).find("img").css("height");
			var imgTop = $(this).css("top");
			var imgLeft = $(this).css("left");
			$("#black img").css({left:"50%", top:"50%", marginLeft:"-65px", marginTop:"-65px" });
			$("#black").css({width:wid, height:hei, top:imgTop, left:imgLeft }).show();
		});
		$("#black").mouseout(function(){ 
			$(this).hide();
		});
		
		
		
		
	$("#logo li").each(function(aa){
		$(this).css("left",aa*400+"px");		
		var hei = $(this).find("img").css("height");
		$(this).css("height",hei);
	});
	$("#logo li").mouseenter(function(){
			var wid = $(this).find("img").css("width");
			var hei = $(this).find("img").css("height");
			var imgTop = $(this).css("top");
			var imgLeft = $(this).css("left");
			$("#logo>#black img").css({left:"50%", top:"50%", marginLeft:"-65px", marginTop:"-65px" });
			$("#logo>#black").css({width:wid, height:hei, top:imgTop, left:imgLeft }).show();
		});
		$("#logo>#black").mouseout(function(){
			$(this).hide();
		});
		
	
	
	$("#edit li").each(function(aa){
		$(this).css("left",aa*270+"px");		
		var hei = $(this).find("img").css("height");
		$(this).css("height",hei);
	});
	$("#edit li").mouseenter(function(){
			var wid = $(this).find("img").css("width");
			var hei = $(this).find("img").css("height");
			var imgTop = $(this).css("top");
			var imgLeft = $(this).css("left");
			$("#edit>#black img").css({left:"50%", top:"50%", marginLeft:"-65px", marginTop:"-65px" });
			$("#edit>#black").css({width:wid, height:hei, top:imgTop, left:imgLeft }).show();
		});
		$("#edit>#black").mouseout(function(){
			$(this).hide();
		});
		
	
	
	$("#web li").each(function(aa){
		$(this).css("left",aa*270+"px");		
		var hei = $(this).find("img").css("height");
		$(this).css("height",hei);
	});
	$("#web li").mouseenter(function(){
			var wid = $(this).find("img").css("width");
			var hei = $(this).find("img").css("height");
			var imgTop = $(this).css("top");
			var imgLeft = $(this).css("left");
			$("#web>#black img").css({left:"50%", top:"50%", marginLeft:"-65px", marginTop:"-65px" });
			$("#web>#black").css({width:wid, height:hei, top:imgTop, left:imgLeft }).show();
		});
		$("#web>#black").mouseout(function(){
			$(this).hide();
		});

	
	
	$("#others li").each(function(aa){
		$(this).css("left",aa*260+"px", "bottom",aa*100+"px");		
		var hei = $(this).find("img").css("height");
		$(this).css("height",hei);
	});
	$("#others li").mouseenter(function(){
			var wid = $(this).find("img").css("width");
			var hei = $(this).find("img").css("height");
			var imgTop = $(this).css("top");
			var imgLeft = $(this).css("left");
			$("#others>#black img").css({left:"50%", top:"50%", marginLeft:"-65px", marginTop:"-65px" });
			$("#others>#black").css({width:wid, height:hei, top:imgTop, left:imgLeft }).show();
		});
		$("#others>#black").mouseout(function(){
			$(this).hide();
		});
		
/*----------------- contact submit 버튼-----*/		
	var arirang = ["메세지 전송에 성공했습니다."];
		$("#btn1").click(function(){
		$("#table p").each(function(){
		alert($(this).text());
			});
		});
		
		
	/*------- 스크롤 탑  --------*/
		// Scrollup button 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		
		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});
		
		
		/*--------메뉴 클릭----------------*/
		
	$(".gnb, .aside a").click(function(){
		var index = $(this).parent().index();
		
		var thisSection = $(".page").eq(index);
		var pos = thisSection.offset().top;
		console.log(pos);
		$("html, body").animate({"scrollTop":pos});
	});
	
	
	
	/* 모바일 works 메뉴 클릭시 다른 li로 변환 */
	$("#type2 li:nth-child(1)").click(function(){
		$("#worksMobile #infographic").show();
		$("#worksMobile #logo").hide();
		$("#worksMobile #edit").hide();
		$("#worksMobile web").hide();
		$("#worksMobile others").hide();
	});
	
	$("#type2 li:nth-child(2)").click(function(){
		$("#worksMobile #logo").show();
		$("#worksMobile #infographic").hide();
		$("#worksMobile #edit").hide();
		$("#worksMobile #web").hide();
		$("#worksMobile #others").hide();
	});
	
	$("#type2 li:nth-child(3)").click(function(){
		$("#worksMobile #edit").show();
		$("#worksMobile #infographic").hide();
		$("#worksMobile #logo").hide();
		$("#worksMobile #web").hide();
		$("#worksMobile #others").hide();
	});
	
	$("#type2 li:nth-child(4)").click(function(){
		$("#worksMobile #web").show();
		$("#worksMobile #infographic").hide();
		$("#worksMobile #logo").hide();
		$("#worksMobile #edit").hide();
		$("#worksMobile #others").hide();
	});
	
	$("#type2 li:nth-child(5)").click(function(){
		$("#worksMobile #others").show();
		$("#worksMobile #infographic").hide();
		$("#worksMobile #logo").hide();
		$("#worksMobile #edit").hide();
		$("#worksMobile #web").hide();
	});
	
	
	/*  -------- (모바일)works 이미지 슬라이드 오른쪽으로 클릭시 이동 ---------  */
	
	/* --------  works 인포그래픽 화살표   -------------- */
	$(function() {
		var slide=0;
		
		$("#btn li:nth-child(1)").click(function() {
			$("#worksMobile #infographic img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==2){  // 만약 마지막 이미지라면
				slide=0; // 처음 이미지 인덱스 번호를 적용
			}else{
				slide++;
			}
			$("#worksMobile #infographic img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
		$("#btn li:nth-child(2)").click(function() {
			$("#worksMobile #infographic img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==0 || slide==-1){ // 만약 처음 이미지라면
				slide=2; // 마지막 이미지 인덱스 번호를 적용}
			}else{
				slide--;	
			}
			$("#worksMobile #infographic img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
	});	
	
	
	/* --------  works 로고 화살표   -------------- */
	$(function() {
		var slide=0;
		
		$("#btn li:nth-child(1)").click(function() {
			$("#worksMobile #logo img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==1){  // 만약 마지막 이미지라면
				slide=0; // 처음 이미지 인덱스 번호를 적용
			}else{
				slide++;
			}
			$("#worksMobile #logo img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
		$("#btn li:nth-child(2)").click(function() {
			$("#worksMobile #logo img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==0 || slide==-1){ // 만약 처음 이미지라면
				slide=1; // 마지막 이미지 인덱스 번호를 적용}
			}else{
				slide--;	
			}
			$("#worksMobile #logo img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
	});	
	
	
	
	/* --------  works 편집 화살표   -------------- */
	$(function() {
		var slide=0;
		
		$("#btn li:nth-child(1)").click(function() {
			$("#worksMobile #edit img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==2){  // 만약 마지막 이미지라면
				slide=0; // 처음 이미지 인덱스 번호를 적용
			}else{
				slide++;
			}
			$("#worksMobile #edit img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
		$("#btn li:nth-child(2)").click(function() {
			$("#worksMobile #edit img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==0 || slide==-1){ // 만약 처음 이미지라면
				slide=2; // 마지막 이미지 인덱스 번호를 적용}
			}else{
				slide--;	
			}
			$("#worksMobile #edit img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
	});	
	
	
	
	/* --------  works 웹 화살표   -------------- */
	$(function() {
		var slide=0;
		
		$("#btn li:nth-child(1)").click(function() {
			$("#worksMobile #web img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==1){  // 만약 마지막 이미지라면
				slide=0; // 처음 이미지 인덱스 번호를 적용
			}else{
				slide++;
			}
			$("#worksMobile #web img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
		$("#btn li:nth-child(2)").click(function() {
			$("#worksMobile #web img").eq(slide).fadeOut(100); // 현재 보이는 이미지를 사라지게 한다.
			if(slide==0 || slide==-1){ // 만약 처음 이미지라면
				slide=1; // 마지막 이미지 인덱스 번호를 적용}
			}else{
				slide--;	
			}
			$("#worksMobile #web img").eq(slide).fadeIn(100); // 인덱스번호에 해당하는 이미지를 보이게 한다.
			return false;
		});
	
	});	
	
	
	
	/* --------  works others 화살표   --------------
	$(function() {
		var slide=0;
		
		$("#btn li:nth-child(1)").click(function() {
			$("#worksMobile #others img").eq(slide).fadeOut(100); 
			if(slide==1){ 
				slide=0; 
			}else{
				slide++;
			}
			$("#worksMobile #web img").eq(slide).fadeIn(100); 
			return false;
		});
	
	
		$("#btn li:nth-child(2)").click(function() {
			$("#worksMobile #others img").eq(slide).fadeOut(100); 
			if(slide==0 || slide==-1){ 
				slide=1;
			}else{
				slide--;	
			}
			$("#worksMobile #web img").eq(slide).fadeIn(100);
			return false;
		});
	 */
});  


