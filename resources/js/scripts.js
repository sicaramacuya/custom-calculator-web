
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


const variableA = document.querySelector('#input-bill')
const variableB = document.querySelector('#input-tip')
const variableC = document.querySelector('#input-people')
const displaySolution1 = document.querySelector('#display-tip')
const displaySolution2 = document.querySelector('#display-total')

variableA.addEventListener('input', handleBill)
variableB.addEventListener('input', handleBill)
variableC.addEventListener('input', handleBill)

function handleBill() {
    const a = parseFloat(variableA.value)
    const b = parseFloat(variableB.value) 
    const c = parseInt(variableC.value)

    const firstPosibleAnswer = (-b + (b**2 - 4 * a * c)**(1/2)) / 2*a
    const secondPosibleAnswer = (-b - (b**2 - 4 * a * c)**(1/2)) / 2*a 

    displaySolution1.innerHTML = firstPosibleAnswer.toFixed(2)
    displaySolution2.innerHTML = secondPosibleAnswer.toFixed(2)
}