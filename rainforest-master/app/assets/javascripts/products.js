$(document).on('ready page:load', function() {
	$('search-form').submit(function(event) {
		event.preventDefault();
		var searchValue = $('search').val();

		$.getScript('/products?search=' + searchValue)
	});

	if ($('.pagination').length){
		$(window).scroll(function() {
   		// console.log("they see me scollin'");
   			var url = $('.pagination span.next').children().attr('href');
	   		if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
	   			// console.log($('.pagination span.next').children().attr('href'));
	   			// $.getScript($('.pagination span.next').children().attr('href'));
	   			$('.pagination').text("Fetching more products...");
	   			return $.getScript(url);
	       // return alert('near bottom');
	   		}
		});
	}
});

