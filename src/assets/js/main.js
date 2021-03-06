$(function () {
    
    "use strict";
	 /* smooth scroll
  -------------------------------------------------------*/
	  $.scrollIt({

		easing: 'swing',      // the easing function for animation
		scrollTime: 900,       // how long (in ms) the animation takes
		activeClass: 'active', // class given to the active nav element
		onPageChange: null,    // function(pageIndex) that is called when page is changed
		topOffset: -70,
		upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

	  });
	
	 var win = $(window);
           
  
    win.on("scroll", function () {
      var wScrollTop  = $(window).scrollTop();    
        
        if (wScrollTop > 100) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });
	
	/* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
	
	/* close navbar-collapse when a  clicked */
    $('.dropdown').on('click', function () {
        $(this).toggleClass("show");
    });
	
	
	/* scroll-top-btn */
	var  scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {  
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
	
    /* Click On scroll-top-btn */ 
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop : 0 }, 1200);
    });
	
	/* wow */
	new WOW().init();
	
	/* counter */
	$('.count').counterUp({
        delay: 20,
        time: 1500
    });
	
	/* tabs in price-area section */
	$('.price-area ul.tabs li').on('click', function(){
		var myID = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		$('#' + myID + '-content').fadeIn(800).siblings().hide();
	});
	
	$('.price-area-2 ul.tabs li').on('click', function(){
		var myID = $(this).attr('id');
		$(this).addClass('active').siblings().removeClass('active');
		$('#' + myID + '-content').fadeIn(800).siblings().hide();
	});
     
	/* faqs section */
    $('.faqs .box h6').on("click", function (){
		$(this).toggleClass('up down').siblings().removeClass('down').addClass('up');
        $(this).next().slideToggle(500);
      
		$(".faqs .box p").not($(this).next()).slideUp(500); 
    });
    
     
   
	
	 $('.faqs-2 .box h6').on("click", function (){
		$(this).toggleClass('blue orange').siblings().removeClass('orange').addClass('blue');
        $(this).next().slideToggle(500);
		$(".faqs-2 .box p").not($(this).next()).slideUp(500); 
    });
	
	$('.faqs-3 .box h6').on("click", function (){
		$(this).toggleClass('green blue').siblings().removeClass('blue').addClass('green');
        $(this).next().slideToggle(500);
		$(".faqs-3 .box p").not($(this).next()).slideUp(500); 
    });
	
	/* welcome-slider slider */
	$('.welcome-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 650,
		nav:false
    });
 
	/* vision-area */
    $('.vision-area .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
	    dotsContainer: '.vision-dots'
    });
	
	/* how-work-2 */
    $('.how-work-2 .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
	    dotsContainer: '.how-dots'
    });
	
	/* testimonials */
	$('.testimonials .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: true
    });
	
	/* testimonials-2 */
	$('.testimonials-2 .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: true
    });
	
	/* testimonials-3 */
	$('.testimonials-3 .owl-carousel').owlCarousel({
	    items: 2,
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: true
    });
    
    /* testimonials-4 */
	$('.testimonials-4 .owl-carousel').owlCarousel({
	    items: 1,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: true
    });
    
    /* testimonials-5 */
	$('.testimonials-5 .owl-carousel').owlCarousel({
	    items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: true
    });
    
    /* testimonials-6 */
	$('.testimonials-6 .owl-carousel').owlCarousel({
	    items: 3,
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
		mouseDrag: true
    });
	
    /* why-area slider */
	$('.why-area .owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
		mouseDrag: false,
        smartSpeed: 650,
		animateIn: 'fadeIn',
		dotsContainer: '.why-dots'
    });
    
	/*  leadership-area section  */
    win.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object = 
            $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = 
            $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                $(this).css({
                  width : myVal
                });
            }
        });
    });
	
	/* contact-area section */
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
	 	 
	 
});



$(window).on("load",function (){
	
     $('.load-wrapp').fadeOut(100);
	
	/* isotope */
    $('.grid').isotope({
      // options
      itemSelector: '.items'
    });

    var $grid = $('.grid').isotope({
      // options
    });

    // filter items on button click
    $('.filtering').on( 'click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $grid.isotope({ filter: filterValue });

    });

    $('.filtering').on( 'click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

      
});