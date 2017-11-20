window.addEventListener('load', function() {
  var image = document.getElementsByClassName('animal');
  var select = document.getElementById('select');
  select.addEventListener('change', function() {
    for (var i = 0; i < image.length; i++) {
      if (select.value === 'original') {
        image[i].classList.remove('black-white');
        image[i].classList.remove('invert');
        image[i].classList.remove('sepia');
      } else if (select.value === 'sepia') {
        image[i].classList.remove('black-white');
        image[i].classList.remove('invert');
        image[i].classList.add('sepia');
      } else if (select.value === 'white-black') {
        image[i].classList.remove('invert');
        image[i].classList.remove('sepia');
        image[i].classList.add('black-white');
      } else if (select.value === 'negative-colors') {
        image[i].classList.remove('black-white');
        image[i].classList.remove('sepia');
        image[i].classList.add('invert');
      }
    } 
  });        
});