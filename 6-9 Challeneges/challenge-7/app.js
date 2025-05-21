/**
 * Write your challenge solution here
 */

// This code is also working but without arrow rotation

// let button = document.querySelectorAll(".accordion-button");
// let accordionContent = document.querySelectorAll(".accordion-content")
// let span = document.querySelectorAll(".arrow")

// button.forEach((button) => {
//   button.addEventListener("click", function () {
//     let content = button.nextElementSibling;
//     let isOpen = content.classList.contains("active");

//     // Close all open contents
//     accordionContent.forEach((element) => {
//       element.classList.toggle("active");
//       element.style.maxHeight = null;
//     });

//     // Toggle content
//     if (!isOpen) {
//       content.classList.add("active");
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// });

let accordionButtons = document.querySelectorAll(".accordion-button");
let accordionItem = document.querySelectorAll(".accordion-item");

// click function for toggle content and also arrow
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let item = button.parentElement;
    let isActive = item.classList.contains("active");

    // Close all items
    accordionItem.forEach((element) => {
      element.classList.remove("active");
    });

    // Toggle current
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

//this code has problem in css Hitesh sir write css class on ".active .arrow" but this original working on ".accordion-item.active .arrow" class
