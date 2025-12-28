let userscore = 0;
let compscore = 0;
const userScore_p = document.getElementById("user-score");
const compScore_p = document.getElementById("computer-score");
const msg = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random]
};

const drawgame = () => {
    console.log("Game Was Draw.")
    msg.innerText = "Game Was Draw. Play Again!";
    msg.style.backgroundColor = "#ffff00";
    // setTimeout(() => { msg.style.backgroundColor = 'transparent'; }, 900);
}

const showwinner = (userwin) => {
    if (userwin) {
        userscore++;
        console.log("You Won!");
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "#057205";
        userScore_p.innerText = userscore;
    } else {
        compscore++;
        console.log("Computer Won!");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "#ff0000";
        compScore_p.innerText = compscore;
    }
    // setTimeout(() => { msg.style.backgroundColor = 'transparent'; }, 900);
}

const playgame = (userchoice) => {
    console.log("user choice = ", userchoice)
    const compchoice = gencompchoice();
    console.log("comp choice = ", compchoice);
    
    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "scissors";
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock";
        } else {
            userwin = compchoice === "paper";
        }
        showwinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
       const userchoice = choice.getAttribute("id")
        playgame(userchoice)
    });
}); 

