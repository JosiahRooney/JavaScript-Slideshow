var slideshow_js = {
	// Properties
	loop: null, // The loop
	index: 0, // The index of which image is showing

	// Methods
	init: function(images, target, speed) {
		window.onload = function() {
			var index = 0;
			var elem = document.querySelector(target);
				elem.style.backgroundPosition = "center";
				elem.style.backgroundRepeat = "no-repeat";
				elem.style.backgroundSize = "cover";
				elem.style.backgroundImage = "url(" + images[0] + ")";
				index++;

			this.loop = setInterval(function() {
				if ( index == images.length ) {
					index = 0;
				}
				var imgSrc = images[index];
				elem.style.backgroundImage = "url("+ imgSrc +")";
				
				index++;

			}, speed);
		}	
	},
	stop: function() {
		clearInterval(this.loop);
	}
}