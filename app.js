let gameSeq = []; // Sequence of colors
let simonSeq = []; // Sequence of whether Simon says for each color
let userSeq = [];

let gameStarted = false;
let level = 0;
let h2 = document.querySelector('h2');
let highScore = 0;

// Mapping class names to readable color names
const colorNames = {
    g1: "Blue",
    g2: "Gray",
    g3: "Red",
    g4: "Purple"
};

let btnsColor = ["g1", "g2", "g3", "g4"];

document.addEventListener("keypress", function () {
    if (!gameStarted) {
        console.log("gameStarted");
        gameStarted = true;
        levelUp();
    }
});

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // Generate new color and "Simon says" status
    let randIndex = Math.floor(Math.random() * 4);
    let randColor = btnsColor[randIndex];
    let simonSaid = Math.random() < 0.7; // 70% chance Simon says

    gameSeq.push(randColor);
    simonSeq.push(simonSaid);

    displaySequence();
}

function displaySequence() {
    let delay = 0;
    for (let i = 0; i < gameSeq.length; i++) {
        setTimeout(() => {
            let color = gameSeq[i];
            let btn = document.querySelector(`.${color}`);
            h2.innerText = `${simonSeq[i] ? "Simon says:" : ""} Press ${colorNames[color]}`;
            btnFlash(btn);
        }, delay);
        delay += 1000;
    }
}

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 350);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 350);
}

function checkbtn(indx) {
    let expectedSimon = simonSeq[userSeq.length - 1];
    let expectedColor = gameSeq[userSeq.length - 1];

    if (
        (expectedSimon && userSeq[indx] === expectedColor) || // Correctly pressed when Simon says
        (!expectedSimon && userSeq[indx] !== expectedColor) // Ignored correctly when Simon doesn't say
    ) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        document.body.classList.add("flash-red-shaky");
        setTimeout(() => {
            document.body.classList.remove("flash-red-shaky");
        }, 500);

        if (level > highScore) {
            highScore = level;
        }
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b><br>
                        High Score: <b>${highScore}</b><br>
                        Press any key to start again.`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkbtn(userSeq.length - 1);
}

let btnAll = document.querySelectorAll(".btn");

for (let btn of btnAll) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    gameStarted = false;
    gameSeq = [];
    simonSeq = [];
    userSeq = [];
    level = 0;
}
