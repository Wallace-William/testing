function avg() {

  var avg_output = document.getElementById("slider_avg");
  var avg_val = (parseFloat(slider.value) + parseFloat(slider2.value) + parseFloat(slider3.value) + parseFloat(slider4.value)) / 4;
  avg_output.innerHTML = avg_val;

  color(avg_output,avg_val);
  // if(avg_val == '10') {
  // 	avg_output.style.color = 'gold';
  // }

}