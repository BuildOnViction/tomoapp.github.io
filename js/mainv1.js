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
  var email = $("#popupNotify input#email").val();
  if (!validateEmail(email)) {
    $('#popupNotify .alert-error').show();
    $('#popupNotify .alert-error').html('Email is invalid, Please try again.');
    $('#popupNotify .alert-success').hide();
    $('#popupNotify #submit').show();
    $("#popupNotify input#email").show();
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
        $('#popupNotify .alert-error').hide();
        $('#popupNotify .alert-success').show();
        $('#popupNotify #submit').hide();
        $("#popupNotify input#email").hide();
      },
      error: function (e) {
        $('#popupNotify .alert-error').show();
        $('#popupNotify .alert-error').html('<span>Error, Please try again or use this <a target="_blank" href="https://goo.gl/forms/L3aSO5Xw1mVwt9Xr2">link</a></span>');
        $('#popupNotify .alert-success').hide();
        $('#popupNotify #submit').show();
        $("#popupNotify input#email").show();
      },
    });
  }

}

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
