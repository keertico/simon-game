let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout (function() {
        btn.classList.remove("flash");
    },150);
}

function levelUp() {
    level++;
    h3.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor)
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns () {
    // console.log("current level :", level);
    let idx = level - 1;

    if(userSeq[idx] === gameSeq[idx]) {
        console.log("same value");
    } else {
        h3.innerText = `Game Over ${level}`;
    }
}

function btnPress () {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset () {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}