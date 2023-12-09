

$(document).ready(function(){
	var gogogoTop = $('#gogogo').offset().top; //250
	$('.go_top').hide();
	$(window).scroll(function(){
		/*만약(html의스크롤값이 x보다 커지면) {
			어떻게 되라
		}*/
		if($('html').scrollTop() > 40){
			$('#header').addClass('action');
			$('.go_top').fadeIn(1000);
		}
		else {
			$('#header').removeClass('action')
			$('.go_top').fadeOut(1000);
		}
		console.log($('html').scrollTop())
		
		//부드럽게 따라다니는 퀵메뉴
		var scrValue = $('html').scrollTop();
		$('#gogogo').stop().animate({top:scrValue+gogogoTop}, 1000)
	})


	$('#gogogo li').click(function(){
		var km = $(this).attr('data-mujogun');
		var mujogunGo = $(km).offset().top;
		$('html').animate({scrollTop:mujogunGo});
		return false;
	})
	$('.go_top').click(function(){
		$('html').animate({scrollTop:0});
	})


	$('#gogogo h3').click(function(){
		$('#header').append('동원동원')
		//append 보인 요소 안쪽 뒤에 추가
	})


	$('.row_po h4 a').click(function(){
		var leeeh = $(this).index();

		$('.bebe ul').hide();	
		$('.bebe ul').eq(leeeh).show();
		return false;

	})
})

