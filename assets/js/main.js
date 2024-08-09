document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'div-img-j1' and find images inside them
  var divImages = document.querySelectorAll('img');

  // Loop through each image
  divImages.forEach(function(image) {
    // Get the filename from the src attribute
    var filename = image.src.split('/').pop().split('.')[0];

    // Set alt, data-width, and data-height attributes
    image.alt = filename;
    image.setAttribute('data-width', image.width);
    image.setAttribute('data-height', image.height);
  });
});