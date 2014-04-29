//////////////////
//Site Preloader//
///////////////////
$(window).load(function() { // makes sure the whole site is loaded
	$("#status").fadeOut(); // will first fade out the loading animation
		$("#preloader").delay(350).fadeOut("slow"); // will fade out the white DIV that covers the website.
})






$(document).ready(function(){
	

		
	$('.dropdown-hidden').hide();
	$('.dropdown-item').hide();


	$('.dropdown-deploy').click(function(){
		$(this).parent().parent().find('.dropdown-item').show(200);
		$(this).parent().parent().find('.dropdown-hidden').show();
		$(this).hide();
		return false;
	});
	
	$('.dropdown-hidden').click(function(){
		$(this).parent().parent().find('.dropdown-item').hide(200);
		$(this).parent().parent().find('.dropdown-deploy').show();
		$(this).parent().parent().find(this).hide();
		return false;		
	});

	
	$('.sliding-door-top').click(function(){
		$(this).animate({
			left:'101%'
		}, 500, 'easeInOutExpo');
		return false;
	});
	
	$('.sliding-door-bottom a em').click(function(){
		$(this).parent().parent().parent().find('.sliding-door-top').animate({
			left:'0px'
		}, 500, 'easeOutBounce');
		return false
		
	});
	


	/////////////////////////////////////////////////////////////////////////////
	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	/////////////////////////////////////////////////////////////////////////////
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

	////////////////
	//Image Slider//
	////////////////
	
	var slider = new Swipe(document.getElementById('slider'));
	$('.next-but-swipe').click(function(){
		slider.prev();
		return false;
	});
	
	$('.prev-but-swipe').click(function(){
		slider.next();
		return false;
	});

	/////////////////////////////////////////////////////////////////////////////////////////////
	//Detect user agent for known mobile devices and show hide elements for each specific element
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	var isiPhone = 		navigator.userAgent.toLowerCase().indexOf("iphone");
	var isiPad = 		navigator.userAgent.toLowerCase().indexOf("ipad");
	var isiPod = 		navigator.userAgent.toLowerCase().indexOf("ipod");
	var isiAndroid = 	navigator.userAgent.toLowerCase().indexOf("android");
	
	if(isiPhone > -1) 	 {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').show();		 $('.android-detected').hide();	 }
	if(isiPad > -1)	 {		 	 $('.ipod-detected').hide();		 $('.ipad-detected').show();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }
	if(isiPod > -1)	 {		 	 $('.ipod-detected').show();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').hide();	 }   
	if(isiAndroid > -1) {		 $('.ipod-detected').hide();		 $('.ipad-detected').hide();		 $('.iphone-detected').hide();		 $('.android-detected').show();	 }  




	

		


	
});

