let homePlusOne = document.getElementById("home-plus-one");
let homePlusTwo = document.getElementById("home-plus-two");
let homePlusThree = document.getElementById("home-plus-three");
let guestPlusOne = document.getElementById("guest-plus-one");
let guestPlusTwo = document.getElementById("guest-plus-two");
let guestPlusThree = document.getElementById("guest-plus-three");

let newGame = document.getElementById("newGame");

let homeScore = document.getElementById("homeScore");
let guestScore = document.getElementById("guestScore");

let homeScoreCount = 0;
let guestScoreCount = 0;

function updateColors() {
    if (homeScoreCount > guestScoreCount) {
        homeScore.style.color = "var(--green)";
        guestScore.style.color = "var(--red)";
    } else if (guestScoreCount > homeScoreCount) {
        guestScore.style.color = "var(--green)";
        homeScore.style.color = "var(--red)";
    } else {
        guestScore.style.color = "var(--green)";
        homeScore.style.color = "var(--green)";
    }
}

homePlusOne.addEventListener("click", (event) => {
    homeScoreCount += 1;
    homeScore.textContent = homeScoreCount;
    updateColors();
});

homePlusTwo.addEventListener("click", (event) => {
    homeScoreCount += 2;
    homeScore.textContent = homeScoreCount;
    updateColors();
});

homePlusThree.addEventListener("click", (event) => {
    homeScoreCount += 3;
    homeScore.textContent = homeScoreCount;
    updateColors();
});

guestPlusOne.addEventListener("click", (event) => {
    guestScoreCount += 1;
    guestScore.textContent = guestScoreCount;
    updateColors();
});

guestPlusTwo.addEventListener("click", (event) => {
    guestScoreCount += 2;
    guestScore.textContent = guestScoreCount;
    updateColors();
});

guestPlusThree.addEventListener("click", (event) => {
    guestScoreCount += 3;
    guestScore.textContent = guestScoreCount;
    updateColors();
});

newGame.addEventListener("click", function() {
    homeScoreCount = 0;
    guestScoreCount = 0;
    homeScore.textContent = homeScoreCount;
    guestScore.textContent = guestScoreCount;
    updateColors();
});