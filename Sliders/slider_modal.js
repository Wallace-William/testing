var modal = document.getElementById("sliderModal");        // Gets modal content
var btn = document.getElementById("header");          // Get Rating box            
var span = document.getElementById("close"); // Get close button                      

btn.onclick = function() {                         // When cover is pressed open modal
        modal.style.display = "block";
}
span.onclick = function() {                        // Close modal when click close button
        modal.style.display = "none"; 
}
window.onclick = function(event) {                 // Clicking outside of modal closes it (NOT WORKING)
    if (event.target == modal) {
        modal.style.display = "none";
    }
}