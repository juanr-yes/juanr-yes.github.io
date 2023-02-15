/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');
		$toTop = $('#toTop');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); $toTop.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); $toTop.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

// Modal
var $modal = $('.modalContainer');

$modal._locked = false;

$modal._lock = function() {

	if ($modal._locked)
		return false;

	$modal._locked = true;

	window.setTimeout(function() {
		$modal._locked = false;
	}, 350);

	return true;

};

$modal._show = function() {

	if ($modal._lock())
		$body.addClass('is-modal-visible');

};

$modal._hide = function() {

	if ($modal._lock())
		$body.removeClass('is-modal-visible');

};

$modal._toggle = function() {

	if ($modal._lock())
		$body.toggleClass('is-modal-visible');

};

$modal
	.appendTo($body)
	.on('click', function(event) {

		event.stopPropagation();

		// Hide.
			$modal._hide();

	})
	.find('.inner')
		.on('click', '.close', function(event) {

			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			// Hide.
				$modal._hide();

		})
		.on('click', function(event) {
			event.stopPropagation();
		})
		.on('click', 'a.dynamic', function(event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
				$modal._hide();

			// Redirect.
				window.setTimeout(function() {
					window.location.href = href;
				}, 350);

		});

// Modal Formacion
var $modalEducation = $('.modalContainer1');

$modalEducation._locked = false;

$modalEducation._lock = function() {
	if ($modalEducation._locked)
		return false;

	$modalEducation._locked = true;

	window.setTimeout(function() {
		$modalEducation._locked = false;
	}, 350);

	return true;
};

$modalEducation._show = function() {
	if ($modalEducation._lock())
		$body.addClass('is-modal1-visible');
};

$modalEducation._hide = function() {
	if ($modalEducation._lock())
		$body.removeClass('is-modal1-visible');
};

$modalEducation._toggle = function() {
	if ($modalEducation._lock())
		$body.toggleClass('is-modal1-visible');
};

$modalEducation.appendTo($body).on('click', function(event) {
	event.stopPropagation();
	$modalEducation._hide();
}).find('.inner').on('click', '.close', function(event) {
	event.preventDefault();
	event.stopPropagation();
	event.stopImmediatePropagation();
	$modalEducation._hide();
}).on('click', function(event) {
	event.stopPropagation();
}).on('click', 'a.dynamic', function(event) {
	var href = $(this).attr('href');
	event.preventDefault();
	event.stopPropagation();
	$modalEducation._hide();
	window.setTimeout(function() {
		window.location.href = href;
	}, 350);
});

$body
	.on('click', '.modalAnchor', function(event) {

		event.stopPropagation();
		event.preventDefault();

		// Toggle.
			$modal._toggle();

	})
	.on('keydown', function(event) {

		// Hide on escape.
			if (event.keyCode == 27)
				$modal._hide();
	});

  $body.on('click', '.modalAnchor1', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $modalEducation._toggle();
	}).on('keydown', function(event) {
    if (event.keyCode == 27)
      $modalEducation._hide();
	});

})(jQuery);