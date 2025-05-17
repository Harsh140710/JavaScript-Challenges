/**
 * Write your challenge solution here
 */


let name = document.getElementById("nameInput");
let jobTitle = document.getElementById("jobInput");
let age = document.getElementById("ageInput");
let bio = document.getElementById("bioInput");

document.addEventListener("keyup",function (){
    document.getElementById("nameDisplay").textContent = name.value;
    document.getElementById("jobDisplay").textContent = jobTitle.value;
    document.getElementById("ageDisplay").textContent = age.value;
    document.getElementById("bioDisplay").textContent = bio.value;
})

