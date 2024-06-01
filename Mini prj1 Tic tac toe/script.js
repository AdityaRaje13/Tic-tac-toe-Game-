// Start page 
let btnX = document.getElementById("signX");
let btnY = document.getElementById("signY");
let gameContainer = document.getElementById("gameContainer");
let startContainer = document.getElementById("StartContainer");
let player1Name = document.getElementById("player1Name");
let player2Name = document.getElementById("player2Name");
let turnOfX;

let player1 = "";
let player2 = "";

btnX.addEventListener("click", () => {

    let pl1 = document.querySelector("#player1").value;
    let pl2 = document.querySelector("#player2").value;

    if (pl1 != "" && pl2 != "") {
        player1 = pl1;
        player2 = pl2;
        gameContainer.classList.remove("hide");
        gameContainer.classList.add("display");
        gameContainer.classList.add("gameContainer");
        startContainer.style.display = "none";
        player1Name.innerHTML = `<h2>${player1}</h2>`;
        player2Name.innerHTML = `<h2>${player2}</h2>`;
        player1Sign.innerHTML = "<h2>(Sign-X)</h2>";
        player2Sign.innerHTML = "<h2>(Sign-O)</h2>";
        turnOfX = true;

    }
    else{
        alert("Please enter both player names ");
    }
});

btnY.addEventListener("click", () => {

    let pl1 = document.querySelector("#player1").value;
    let pl2 = document.querySelector("#player2").value;

    if (pl1 != "" && pl2 != "") {
        player1 = pl1;
        player2 = pl2;
        gameContainer.classList.remove("hide");
        gameContainer.classList.add("display");
        gameContainer.classList.add("gameContainer");
        startContainer.style.display = "none";
        player1Name.innerHTML = `<h2>${player1}</h2>`;
        player2Name.innerHTML = `<h2>${player2}</h2>`;
        player1Sign.innerHTML = "<h2>(Sign-O)</h2>";
        player2Sign.innerHTML = "<h2>(Sign-X)</h2>";
        turnOfX = false;
    }
    else{
        alert("Please enter both player names ");
    }
});

//Game page :
let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset-btn");
let winner;
let msg = document.getElementById("msg");
let msgBlock = document.getElementById("winner");
let newBoxes = [];

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const disableGame = () => {

    for (box of boxes) {
        box.disabled = true;
    }
};

const enableGame = () => {

    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const resetGame = () => {

    turnOfX = true;
    enableGame();
    msg.style.display = "none";
    gameContainer.style.display = "flex";
};

const showWinner = () => {

    msgBlock.innerHTML = `<h2>The winner is ${winner}</h2>`;
    msg.style.display = "flex";
    gameContainer.style.display = "none";
}

const checkWinner = () => {

    for (pattern of winPatterns) {

        let pose1Val = boxes[pattern[0]].innerText;
        let pose2Val = boxes[pattern[1]].innerText;
        let pose3Val = boxes[pattern[2]].innerText;

        if (pose1Val != "" && pose2Val != "" && pose3Val != "") {

            if (pose1Val === pose2Val && pose2Val === pose3Val) {
                winner = pose1Val;
                showWinner();
                disableGame();
            }
        }
    }
};

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if (turnOfX) {

            box.innerText = "X";
            turnOfX = false;
        }
        else {

            box.innerText = "O";
            turnOfX = true;
        }

        box.disabled = true;

        checkWinner();
    });
});

















