let numButtonClicks = 0;
function buttonClicked() {
    numButtonClicks = numButtonClicks + 1;
    document.getElementById("mainDiv").textContent =
        "Button Clicked times: " + numButtonClicks;
}

const locomotiveScroll = new LocomotiveScroll();

document.addEventListener("DOMContentLoaded", function() {
            setTimeout(() => {
                document.querySelector(".loading-screen").style.display = "none";
            }, 6000); // Ensures element is removed after fadeOut completes
        });

