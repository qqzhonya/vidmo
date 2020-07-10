$(function() {

	//
	// Video save/like button active
	//

	$('.video-save, .video-like').click(function() {
		$(this).toggleClass('active');
	});

	//
	// Video save/like button active end
	//

	//
	// Form validate
	//

	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}

	var $this = $('.main-form-input');
	var thisForm = $this.closest('form');

	function verificationFields(thisForm) {
		var isValid = false;
		thisForm.find('input, select, textarea').each(function (i) {
			var $this = $(this),
				thisVal = $this.val();
			if ($this.prop('required')) {
				if ($this.is('input[name="Email"]')) {
					if (validateEmail(thisVal)) {
						$this.removeClass('has-error');
						$this.parent('.main-form-input-wrap').removeClass("invalid");
						$this.parent('.main-form-input-wrap').addClass("valid");
						return isValid = true;
					} else {
						$this.addClass('has-error');
						$this.parent('.main-form-input-wrap').removeClass("valid");
						$this.parent('.main-form-input-wrap').addClass("invalid");
						return isValid = false;
					}
				}
				if (!thisVal) {
					$this.addClass('has-error');
					return isValid = false;
				} else {
					$this.removeClass('has-error');
					return isValid = true;
				}
			}
		});
		return isValid;
	}

	$('body').on('input', '.main-form-input', function(e) {
		e.preventDefault();
		
		var
			$this = $(this),
			$thisForm = $this.closest('form');


		if (verificationFields($thisForm)) {
		} else {
			
		}

		return false;
	});

	//
	// Form validate end
	//

	//
	// Loader number 
	//

	$('.loader-value').each(function () {
		var $this = $(this);
		jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			duration: 1850,
			easing: 'swing',
			step: function () {
				$this.text(Math.ceil(this.Counter) + "%");
			}
		});
	});

	//
	// Loader number end 
	//

	//
	// Mobile menu
	//

	$('.top-line-menu-btn').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$('.sidebar-bg').fadeIn();
			$('.wrapper-sidebar').fadeIn();
			$('body').addClass('menu-active');
		} else {
			$('.sidebar-bg').fadeOut();
			$('.wrapper-sidebar').fadeOut();
			$('body').removeClass('menu-active');
		}
	});

	$('.sidebar-bg').click(function() {
		$(this).fadeOut()
		$('.top-line-menu-btn').removeClass('active');
		$('.wrapper-sidebar').fadeOut();
		$('body').removeClass('menu-active');
	})

	//
	// Mobile menu end
	//
});
