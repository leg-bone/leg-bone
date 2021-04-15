var buttons = document.querySelectorAll('.television_channel a');

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(e) {
    document.querySelector('.television_screen iframe').src = this.href;
    e.preventDefault();
  });
}