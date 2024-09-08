let userscore = 0;
let compsccore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user= document.querySelector("#user-score");
const comp= document.querySelector("#comp-score");


choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });

});


const genCompchoice=()=>{
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const playGame = (userchoice) => {
    const compchoice = genCompchoice();
    if (userchoice == compchoice) {
        drawGame(compchoice);
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userWin = compchoice === "scissor" ? false : true;
        } else {
            userWin = compchoice == "rock" ? false : true;
        }
        showWinner(userWin,compchoice)
    }
}

const drawGame = (compchoice)=>{
    msg.innerText = `Game was a Draw. Computer chose ${compchoice}. Play Again!`;
    msg.style.backgroundColor = "grey";
}
let urscore =0;
let compscore =0;

const showWinner = (userWin, compchoice) => {
   
    if (userWin) {
        urscore++
        
        msg.innerText = `You Win! Computer chose ${compchoice}`;
        msg.style.backgroundColor = "green";
        user.innerText = urscore;

    } else {
        compscore++;
        msg.innerText = `You Lose! Computer chose ${compchoice}`;
        msg.style.backgroundColor = "red";
        comp.innerText = compscore;
    }
};

