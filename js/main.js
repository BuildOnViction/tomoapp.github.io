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
