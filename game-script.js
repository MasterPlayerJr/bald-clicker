function click_detect() {
    score += 1
    console.log(score)
    score_text.innerHTML = "Bald coins: $" + score
}


var score = 0

const click = document.querySelector("#clicker")
const score_text = document.getElementById("score")

score_text.innerHTML = "Bald coins: $" + score
score_text.style.userSelect = "none"

click.addEventListener("click", click_detect)