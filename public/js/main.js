(function () {
	
	var sendMessage = function (e) {

		e.preventDefault();
		console.log('send');

		var name = $('#name').val();
		var email = $('#email').val();
		var content = $('#content').val();

		var safe = true;

		if (name.length === 0) {
			safe = false;
			$('#name').parent().addClass('has-error');
		} else {
			$('#name').parent().removeClass('has-error');
		}


		if (email.length === 0) {
			safe = false;
			$('#email').parent().addClass('has-error');
		} else {
			$('#email').parent().removeClass('has-error');
		}


		if (content.length === 0) {
			safe = false;
			$('#content').parent().addClass('has-error');
		} else {
			$('#content').parent().removeClass('has-error');
		}

		if (safe) {

			$('.btn-send-message').text('Se trimite...');
			$('.contact-form').attr('disabled', '');

			$.ajax({
				type: 'post',
				url: '/contact',
				data: {
					name: name,
					email: email,
					content: content
				},
				dataType: 'text',
				success: function (res) {
					$('#contact-modal .modal-content').html(res);
					$('#contact-modal').modal('show');
					$('.btn-send-message').text('Trimite');
					$('.contact-form input, .contact-form textarea').val('');
					$('.contact-form fieldset').removeAttr('disabled');
				},
				error: function (a,b,c) {
					console.log(c);
				}
			});
		}
	};

	var init = function () {
        var owl = $("#owl-demo");
 
        owl.owlCarousel({
            items : 5,
            autoPlay : 3000,
            stopOnHover : true,
            paginationSpeed : 1000,
            goToFirstSpeed : 2000,
            lazyLoad : true,
            dots: false,
            autoHeight : true
        });
          
		$('nav ul li a, nav ul li span, ul.nav li span, ul.nav li a, .btn.btn-link, .menu a').click(function(e){
            e.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - $('.menu').innerHeight()
			}, 500);
			return false;
		});
        
        $('#header .other li').click(function(){
            clearTimeout(timeslider);
            slidechange($('#header .other li').index(this));
        });
        
		$(document).on('click', '.btn-send-message', sendMessage);
        
        $('.owl-controls.clickable').remove();
	}

	var main = function () {
		console.log('Loaded!');
		init();
	};

	return main();
})();