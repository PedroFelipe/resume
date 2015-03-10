function adjustHeight() {
	var heights = $('#projects .project').map(function() {
      return $(this).height();
  }).get(),

  maxHeight = Math.max.apply(null, heights);

  $('#projects .project').height(maxHeight);
}

$(document).ready(function() {
	adjustHeight();
	
	$(window).resize(function() {
		 if ($(window).width() > 768) {
			adjustHeight();
		} else {
			$('#projects .project').height('auto');
		}
	});
});