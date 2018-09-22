var slider = document.getElementById("range1");
var output = document.getElementById("range1_val");
var slider2 = document.getElementById("range2");
var output2 = document.getElementById("range2_val");
var slider3 = document.getElementById("range3");
var output3 = document.getElementById("range3_val");
var slider4 = document.getElementById("range4");
var output4 = document.getElementById("range4_val");

output.innerHTML = slider.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    avg();
}
slider2.oninput = function() {
	output2.innerHTML = this.value;
	avg();
}
slider3.oninput = function() {
	output3.innerHTML = this.value;
	avg();
}
slider4.oninput = function() {
	output4.innerHTML = this.value;
	avg();
}

