$(document).ready(function() {

	//on-click: display lightbox

	var lightbox = $('.lightbox');
	var background = $('.lightbox-background');
	var images = $('.gallery-image');
	var lightboxExit = $('.lightbox-exit');
	var lightboxImage = $('.lightbox-image');
	var lightboxCaption = $('lightbox-caption');

	function showLightbox() {
		var imageContainer = $(this);
		var image = imageContainer.find('img');
		var caption = imageContainer.find('.gallery-image-caption');

		background.removeClass('hidden');
		lightbox.removeClass('hidden');

		lightboxImage.attr('src', image.attr('src'));
		lightboxCaption.html(caption.html());

		lightbox.css('margin-left', -1 * lightbox.width() / 2);
		lightbox.css('margin-top', -1 * lightbox.height() / 2);
	}

	function hideLightbox() {
		background.addClass('hidden');
		lightbox.addClass('hidden');
	}

	lightboxExit.on('click', hideLightbox);
	background.on('click', hideLightbox);
	images.on('click', showLightbox);

});