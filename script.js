// Get the overlay element
const header = document.querySelector('.header');
// Listen for scroll events
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

function toggleChoices() {
    var choices = document.getElementById("itemList");
    if(choices.style.display == "none") choices.style.display ="block";
    else choices.style.display ="none";
}
