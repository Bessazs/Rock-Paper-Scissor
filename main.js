
playGame();


function computerChoice(){
  let computernum =  Math.floor(Math.random() * 3);
  let computer;
  if (computernum == 0) {
    computer = 'Rock'
  } else if (computer == 1){
    computer = "Paper"
  }else {
    computer = "Scissor"
  }

  return computer;
} 


function playerChoice(){

  let player;
  player=parseInt(prompt("Digite o número correspondente:\n 1 - Rock\n 2 - Paper\n 3 - Scissor"));
  while (player < 1 || player >3){
    player=parseInt(prompt("Entrada inválida  \n\nEscolha entre:\n 1 - Rock\n 2 - Paper\n 3 - Scissor"));
  }
 
  let choicePlayer;  
  if (player == 1){
    choicePlayer = "Rock"
  } else if (player = 2){
    choicePlayer = "Paper"
  }else{
    choicePlayer = "Scissor"
  }


  return choicePlayer;


}

function playGame(){
  let pscore = 0, cscore = 0;
  let player, computer;
  for (let index = 0; index < 5; index++) {
    player = playerChoice();
    computer = computerChoice();

    if (player == computer){
      console.log("Drawn")
    } else if (player == "Rock" && computer =="Scissor" || player == "Paper" && computer == "Rock" || player == "Scissor" && computer =="Paper"){
      pscore ++;
      console.log(`You Win! ${player} beats ${computer}`)
    } else{
      cscore ++;
      console.log(`You Loose! ${computer} beats ${player}`)

    }

    
  }
  if (pscore > cscore){
    console.log("You win, broo")

  } else{
    console.log("You lose, man")
  }






}