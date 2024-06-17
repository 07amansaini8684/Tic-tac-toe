// console.log("welcome to tic tac toe");
let boxes = document.querySelectorAll(".box");
let music = new Audio("assets/music.mp3");
let audioturn = new Audio("assets/ting.mp3");
let gamerover = new Audio("assets/gameover.mp3");
let errorsound = new Audio("assets/error-126627.mp3");
let gameroversound = new Audio("assets/piglevelwin2mp3-14800.mp3");
let cong = document.querySelector("#congratulation");
let reset = document.querySelector("#reset")
let happygif = document.querySelector(".imgbox")
let barri = document.querySelector("#bari")
let turnX = true;

const changeturn = () => {
  return;
};
const winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetgame = ()=>{
    turnX = true;
    enableAllBoxes();
}
// music.play();
let gameEnded = false; // Add a variable to track if the game has ended

const Xkibaxi = ()=>{
    barri.innerHTML = "X's Turn"
}
const  Okibaxi = ()=>{
    barri.innerHTML = "O's Turn"
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("box was clicked");

    if (!gameEnded && box.innerHTML !== "X" && box.innerHTML !== "O") {
      if (turnX) {
        box.innerHTML = "X";
        box.style.color = "red"
        turnX = false;
        audioturn.play();
        Okibaxi();
      } else {
        box.innerHTML = "O";
         box.style.color = "blue"
        turnX = true;
        audioturn.play();
        Xkibaxi();
      }

      box.disabled = true;
      checkwinner();
    }
  });
});

const showwinner = (pos1val) => {
  cong.style.display = "block";
  cong.innerHTML = `Player ${pos1val} wins!`;
  gameEnded = true; // Set gameEnded to true when a player wins
     happygif.style.width = "150px"
};

// Add this function to disable all boxes after a player wins
const disableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableAllBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    cong.style.display = "none";
    box.innerHTML = "";
    gameEnded = false;
         happygif.style.width = "0px"

  });
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        // console.log("winner", pos1val);
        showwinner(pos1val);
        disableAllBoxes(); // Call the function to disable all boxes
     gameroversound.play();

      }
    }
  }
};

reset.addEventListener("click" , resetgame);
