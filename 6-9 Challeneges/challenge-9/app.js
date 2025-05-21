/**
 * Write your challenge solution here
 */
// Wait until the DOM is fully loaded
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const panel = document.querySelector(".panel");
const pTag = document.getElementById("pTag");
const menu_item = document.querySelectorAll(".menu-item");


menu_item.forEach(element => {
    element.addEventListener("click",function() {
        alert(`In The ${element.textContent} Page`);
    })
});

// Open the sliding menu
toggleBtn.addEventListener("click", function () {
  panel.classList.toggle("active");
  if(toggleBtn.textContent === "Open Menu"){
    toggleBtn.textContent = "Close Menu";
    pTag.textContent = "Click the button to close the sliding menu"
  }else {
    toggleBtn.textContent = "Open Menu"
    pTag.textContent = "Click the button to open the sliding menu"
  }
});

// Close the sliding menu
closeBtn.addEventListener("click", () => {
  panel.classList.remove("active");
});
