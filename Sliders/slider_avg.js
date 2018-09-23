function avg() {

  var avg_output = document.getElementById("slider_avg");
  avg_val = (parseFloat(slider.value) + parseFloat(slider2.value) + parseFloat(slider3.value) + parseFloat(slider4.value)) / 4;

  localStorage.setItem('avg',avg_val);
  color(avg_output,avg_val);

  avg_output.innerHTML = avg_val;

}