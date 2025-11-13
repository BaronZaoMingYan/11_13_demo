window.HELP_IMPROVE_VIDEOJS = false;

// var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 11;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = "./static/interpolation/3d_vis/" + "combined_" + String(i) + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  // console.log(interp_images[i])
  $('#interpolation-image-wrapper').empty().append(image);
}

var interp_images2 = [];
function preloadInterpolationImages2() {
  for (var i = 1; i < NUM_INTERP_FRAMES; i++) {
    var path = "./static/interpolation/3d_vis2/" + "000000_" + String(i).padStart(2, '0') + '.png';
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
  }
}

function setInterpolationImage2(i) {
  var image2 = interp_images2[i];
  image2.ondragstart = function() { return false; };
  image2.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper2').empty().append(image2);
}


$(document).ready(function() {
    // console.log('$(document).ready')
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    // console.log('preloadInterpolationImages')
    preloadInterpolationImages();
    $('#interpolation-slider').on('input', function(event) {
      // console.log('interpolation-slider')
      setInterpolationImage(this.value);
    });
    // setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);
    bulmaSlider.attach();

    preloadInterpolationImages2();
    $('#interpolation-slider2').on('input', function(event) {
      console.log('interpolation-slider2')
      setInterpolationImage2(this.value);
    });
    // setInterpolationImage2(1);
    $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})

