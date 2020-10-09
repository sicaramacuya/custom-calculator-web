
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var calculatorText = document.getElementById("calculator-title-text-container");

// Get the offset position of the navbar
var sticky = calculatorText.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    calculatorText.classList.add("sticky")
  } else {
    calculatorText.classList.remove("sticky");
  }
} 

// ----------------------------------------------------------------

