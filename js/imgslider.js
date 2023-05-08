$(document).ready(function(){   
	/* 첫번째 인포그래픽 창 첫번째 이미지 */
	/* works - infographic 이미지 클릭 시 이미 지 팝업창 확대 */ 
	/* 마우스 올릴 때 */
		$("#infographic .info1 img").mouseenter(function(){
			$("#infographic #cover2").show();
			$("#infographic #cover1").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#infographic #cover1").mouseleave(function(){
			$("#infographic #cover2").hide();
			$("#infographic #cover1").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#cover1").click(function(){
			$("#infoPopUp").show();
			$("#body1").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#infoPopUp span").click(function(){
			$("#infoPopUp").hide();
			$("#body1").hide();
		});
		







	/* 첫번째 인포그래픽 창 두번째 이미지 */
	/* 마우스 올릴 때 */
		$("#infographic .info2 img").mouseenter(function(){
			$("#infographic #cover4").show();
			$("#infographic #cover3").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#infographic #cover3").mouseleave(function(){
			$("#infographic #cover4").hide();
			$("#infographic #cover3").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#cover3").click(function(){
			$("#infoPopUp2").show();
			$("#body1").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#infoPopUp2 span").click(function(){
			$("#infoPopUp2").hide();
			$("#body1").hide();
		});
		
	
	
		/* 첫번째 인포그래픽 창 세번째 이미지 */
	/* 마우스 올릴 때 */
		$("#infographic .info3 img").mouseenter(function(){
			$("#infographic #cover6").show();
			$("#infographic #cover5").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#infographic #cover5").mouseleave(function(){
			$("#infographic #cover6").hide();
			$("#infographic #cover5").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#cover5").click(function(){
			$("#infoPopUp3").show();
			$("#body3").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#infoPopUp3 span").click(function(){
			$("#infoPopUp3").hide();
			$("#body3").hide();
		});




/*----------- 두번째 로고 창 첫번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#logo .logo1 img").mouseenter(function(){
			$("#logo #logoCover2").show();
			$("#logo #logoCover1").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#logo #logoCover1").mouseleave(function(){
			$("#logo #logoCover2").hide();
			$("#logo #logoCover1").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#logoCover1").click(function(){
			$("#logoPopUp").show();
			$("#body4").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#logoPopUp span").click(function(){
			$("#logoPopUp").hide();
			$("#body4").hide();
		});
		
		
		
	/*----------- 두번째 로고 창 두번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#logo .logo2 img").mouseenter(function(){
			$("#logo #logoCover4").show();
			$("#logo #logoCover3").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#logo #logoCover3").mouseleave(function(){
			$("#logo #logoCover4").hide();
			$("#logo #logoCover3").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#logoCover3").click(function(){
			$("#logoPopUp2").show();
			$("#body5").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#logoPopUp2 span").click(function(){
			$("#logoPopUp2").hide();
			$("#body5").hide();
		});
		
		
		
		/*----------- 세번째 편집창 첫번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#edit .edit1 img").mouseenter(function(){
			$("#edit #editCover2").show();
			$("#edit #editCover1").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#edit #editCover1").mouseleave(function(){
			$("#edit #editCover2").hide();
			$("#edit #editCover1").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#editCover1").click(function(){
			$("#editPopUp").show();
			$("#body6").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#editPopUp span").click(function(){
			$("#editPopUp").hide();
			$("#body6").hide();
		});
		
		
		/*----------- 세번째 편집창 두번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#edit .edit2 img").mouseenter(function(){
			$("#edit #editCover4").show();
			$("#edit #editCover3").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#edit #editCover3").mouseleave(function(){
			$("#edit #editCover4").hide();
			$("#edit #editCover3").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#editCover3").click(function(){
			$("#editPopUp2").show();
			$("#body7").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#editPopUp2 span").click(function(){
			$("#editPopUp2").hide();
			$("#body7").hide();
		});
		
		
		
		
	/*----------- 세번째 편집창 세번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#edit .edit3 img").mouseenter(function(){
			$("#edit #editCover6").show();
			$("#edit #editCover5").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#edit #editCover5").mouseleave(function(){
			$("#edit #editCover6").hide();
			$("#edit #editCover5").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#editCover5").click(function(){
			$("#editPopUp3").show();
			$("#body8").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#editPopUp3 span").click(function(){
			$("#editPopUp3").hide();
			$("#body8").hide();
		});
		
		
		
		
		
		/*----------- 네번째 웹창 첫번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#web .web1 img").mouseenter(function(){
			$("#web #webCover2").show();
			$("#web #webCover1").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#web #webCover1").mouseleave(function(){
			$("#web #webCover2").hide();
			$("#web #webCover1").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */
		$("#webCover1").click(function(){
			$("#webPopUp").show();
			$("#body9").show();

		});
		

		$("#webPopUp span").click(function(){
			$("#webPopUp").hide();
			$("#body9").hide();
		}); 	
				
		/*----------- 네번째 웹창 두번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#web .web2 img").mouseenter(function(){
			$("#web #webCover4").show();
			$("#web #webCover3").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#web #webCover3").mouseleave(function(){
			$("#web #webCover4").hide();
			$("#web #webCover3").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#webCover3").click(function(){
			$("#webPopUp2").show();
			$("#body10").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#webPopUp2 span").click(function(){
			$("#webPopUp2").hide();
			$("#body10").hide();
		});
		
		
		
		/*----------- 네번째 웹창 세번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#web .web3 img").mouseenter(function(){
			$("#web #webCover6").show();
			$("#web #webCover5").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#web #webCover5").mouseleave(function(){
			$("#web #webCover6").hide();
			$("#web #webCover5").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#webCover5").click(function(){
			$("#webPopUp3").show();
			$("#body11").show();

		});
		
	/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#webPopUp3 span").click(function(){
			$("#webPopUp3").hide();
			$("#body11").hide();
		});
		
		
		
		/*----------- 다섯번째 기타창 첫번째 이미지 --------------*/
	/* 마우스 올릴 때 */
		$("#others .others1 img").mouseenter(function(){
			$("#others #othersCover2").show();
			$("#others #othersCover1").show();
		});
	/* 마우스 뗄 때 블랙+ 이미지 사라지는거  */	
		$("#others #othersCover1").mouseleave(function(){
			$("#others #othersCover2").hide();
			$("#others #othersCover1").hide();
		});
	/* 마우스 클릭할때 팝업창 뜨는거  */		
		$("#othersCover1").click(function(){
			$("#othersPopUp").show();
			$("#body12").show();

		});
			/* 닫기 누르면 팝업 창 사라지는 거   */		
		$("#othersPopUp span").click(function(){
			$("#othersPopUp").hide();
			$("#body12").hide();
		});
		
});