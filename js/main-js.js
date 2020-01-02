// header
// xử lí ẩn hiện respon left và respon right
$(document).ready(function() {
	$("#header span#icon-respon-menu").click(function() {
		$("#header #respon-right .pt").stop().slideToggle(500);
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
	});
	// xử lí chỉ hiện respon right khi màn hình < 667px 
	$(window).resize(function() {
		if( $(window).width() > 650 ){
			$("#header #respon-right .pt").slideUp(500);
		}
	});
});


// xử lý hiện thanh tìm kiếm


// open respon left
$(document).ready(function() {
	$("#wp-respon #respon-left span#icon-tabbar").click(function() {
		$("#site").toggleClass('open-respon-left');
		$("#icon-tabbar").toggleClass("fa-chevron-circle-right fa-chevron-circle-left");
		$("#header #respon-right .pt").slideUp(500);
	});
	// content click cả respon right và respon left đều ẩn
	$("#content").click(function() {
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
		$("#header #respon-right .pt").slideUp(500);
	});
	// khi resize thì tất thanh scroll left tự đóng
	$(window).resize(function() {
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right');
	});
});	
// xử lí ẩn hiện menu respon
$(document).ready(function() {
	$("#header span#icon-menu").click(function() {
		$(this).toggleClass("move"); 
		$(this).toggleClass("fa-bars fa-chevron-circle-up");
		$("#menu-respon").stop().slideToggle(500);
	})
});

// xử lí ẩn hiện search fa-bars
$(document).ready(function() {
	// click search in sideabr
	$(".list-Utilities span.search.s").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
	});
	// click search in respon-left
	$(".list-Utilities span.search.h").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
		$("#site").removeClass('open-respon-left');
		$("#icon-tabbar").toggleClass('fa-chevron-circle-left fa-chevron-circle-right')
	});
	// click search on header
	$("#header .icon-search").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
		$("#site").removeClass('open-respon-left');
		if( $("#content").is('.opacity-ct') ) {
			$("#icon-tabbar").removeClass('fa-chevron-circle-left').addClass('fa-chevron-circle-right')
		}
	});
	// click close search
	$("#header #search-bar #search-box .close-s").click(function() {
		$("#header #search-bar").stop().fadeToggle(500);
		$("#content").toggleClass('opacity-ct');
	});
});
// content
// -------------------------------------
// content -> widget.product -> widget content hide-2 ( xử lý ẩn hiện hình ảnh con )
$(document).ready(function() {
	$("ul.list-product li").hover( function() {
		// hover in 
		$(this).addClass('open-list-thumb');
		$(this).children('.more-product').addClass('open-list-thumb');
		$(this).children('.add-basket').stop().fadeIn(1000);
		// đếm số ảnh con
		var cout = 0;
		$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').children('li').each(function() {
			cout ++ ;
		});
		if( cout == 3 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('three-img');
		}
		if( cout == 2 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('two-img');
		}
		if( cout == 1 ) {
			$(this).children('.more-product').children('.hide-2').children('ul.list-thumb').addClass('one-img');
		}
		if( cout == 0 ) {
			$(this).removeClass('open-list-thumb');
			$(this).children('.more-product').removeClass('open-list-thumb');
		}
	}, function() {
		// hover out
		$(this).removeClass('open-list-thumb');
		$(this).children('.more-product').removeClass('open-list-thumb');
		$(this).children('.add-basket').stop().fadeOut(500);
	});
	// vô hiệu hóa thẻ a
	$("ul.list-product li a").click(function() {
		return false;
	});
})

// open scroll bar and scroll top
$(document).ready(function() {
	$(window).scroll(function() {
		if( $(window).scrollTop() > 300 ) {
			$("#back-top").addClass('open-scroll');
		}
		else {
			$("#back-top").removeClass('open-scroll');
		}
	});
	$("#back-top span.icon-scroll").click(function() {
		$("html,body").animate({
			scrollTop : 0,
		},1000);
	});
});


// click show img 
$(document).ready(function() {
	$(".more-product .hide-2 ul.list-thumb li").hover(function() {
		var get_src_img = $(this).children('img').attr('src');
		$(".more-product .hide-2 ul.list-thumb li").removeClass('active-li');
		$(this).addClass('active-li');
		$(this).parents('li').children('a').children('img').attr('src',get_src_img)
	},function() {

	});
});
// function like product
$(document).ready(function() {
	$("ul.list-product li span.add-basket").click(function() {
		$(this).parent('li').children('i').stop().fadeToggle();	
	});
	$("ul.list-product li i").click(function() {
		$(this).fadeToggle();
	});
});
// ----------------- end content ---------------------



// footer
// xử lý khi submit nhưng phần chức năng đó chưa được cập nhật
$(document).ready(function() {
	$("#signUp-f , #f-sp, #search-box").submit(function() {
		alert("Phạm Đình Hùng xin lỗi, chức năng này chưa được cập nhật");
		return false;
	});
});


