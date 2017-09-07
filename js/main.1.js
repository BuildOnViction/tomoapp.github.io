function showNotifyPopup() {
  var popup = document.getElementById('popupNotify');
  if (popup) {
    popup.style.display = 'block';
  }
}

function closePopup(id) {
  var popup = document.getElementById(id);
  if (popup) {
    popup.style.display = 'none';
  }
}

function overlayClick(e) {
  if (e.currentTarget == e.target) {
    this.closePopup(e.currentTarget.id);
  }
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function keyPressEmail(e) {
  if (e.keyCode == 13) {
    submitEmail();
    e.preventDefault();
  }
}

function submitEmail() {
  var email = $("#mailing-list input#email").val();
  if (!validateEmail(email)) {
    $('#mailing-list .alert-error-valid').show();
    $('#mailing-list .alert-error').hide();
    $('#mailing-list .alert-success').hide();
    $('#mailing-list #submit').show();
    $("#mailing-list input#email").show();
  }
  else {
    $.ajax({
      url: 'https://api.tomoapp.vn/api/v1/subscribers/ico/create',
      // url: 'https://dev.tomoapp.me/api/v1/subscribers/ico/create',
      type: "POST",
      data: {
        email: email
      },
      success: function () {
        $('#mailing-list .alert-error').hide();
        $('#mailing-list .alert-error-valid').hide();
        $('#mailing-list .alert-success').show();
        $('#mailing-list #submit').hide();
        $("#mailing-list input#email").hide();
      },
      error: function (e) {
        $('#mailing-list .alert-error').show();
        $('#mailing-list .alert-error-valid').hide();
        $('#mailing-list .alert-success').hide();
        $('#mailing-list #submit').show();
        $("#mailing-list input#email").show();
      },
    });
  }
}


$(document).ready(function () {
  //------------------------------------//
  //Navbar//
  //------------------------------------//
  var menu = $('.navbar');
  $(window).bind('scroll', function (e) {
    if ($(window).scrollTop() > 140) {
      if (!menu.hasClass('open')) {
        menu.addClass('open');
      }
    } else {
      if (menu.hasClass('open')) {
        menu.removeClass('open');
      }
    }
  });

  //------------------------------------//
  //Scroll To//
  //------------------------------------//
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top - 100 }, 800);
  });

  $('.videos-slider').slick({
    arrows: true,
    dots: true
  });
  $('.vision-slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          slidesToShow: 1,
          dots: true,
        }
      }
    ]
  });

  //------------------------------------//
  //Wow Animation//
  //------------------------------------//
  wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: false        // trigger animations on mobile devices (true is default)
    }
  );
  wow.init();
});
