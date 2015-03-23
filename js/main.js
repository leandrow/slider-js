function slider(){
	var config = {

		// Set first image of slider
		img: function(){
			element = document.querySelector(".slider a:first-child");
			element.classList.add("active");
			this.legend(element);
		},

		// Add legend in the figcaption
		legend: function(obj){
			var legend = obj.querySelector("img").getAttribute("alt");
			document.querySelector("figcaption").innerHTML = legend;
		},

		// Add class in the next slider
		slide: function(){
			element = document.querySelector(".active");
			if(element.nextElementSibling){
				element.nextElementSibling.classList.add("active");
				config.legend(element.nextElementSibling);
				element.classList.remove("active");
			}
			else {
				element.classList.remove("active");
				config.img();
			}
		}
	}
	config.img();
	config.legend(element);

	// Interval of slides
	var auto = setInterval(config.slide,4000);
}
// Run when loading window
window.addEventListener("load",slider,false);