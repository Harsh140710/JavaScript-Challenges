/**
 * Write your challenge solution here
 */

document.getElementById("toggleButton").addEventListener("click",function () {
    let bulb = document.getElementById("bulb");
    let status = document.getElementById("status")
    let button = document.getElementById("toggleButton")

    // For Toggle Bulb color
    bulb.classList.toggle("off")

    document.body.classList.toggle("dark-mode")

    // Chnage Button Text According Bulb
    if (button.textContent == "Turn On") {
        button.textContent = "Turn Off";
    } else {
        button.textContent = "Turn On";
    }

    // Chnage Status According bulb on ro off
    if (status.textContent == "Status: Off") {
        status.textContent = "Status: On"
    }else {
        status.textContent ="Status: Off"
    }
})