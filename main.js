
playGame();


function computerChoice(){
  let computernum =  Math.floor(Math.random() * 3);
  let computer;
  if (computernum == 0) {
    computer = 'Rock'
  } else if (computernum == 1){
    computer = "Paper"
  }else {
    computer = "Scissor"
  }
  console.log(computer);
  return computer;
} 


function playerChoice(){
  return new Promise ((resolve , reject) => { 
    let choicePlayer;
    btnPaper = document.querySelector(".paper")
    btnPaper.addEventListener('click', function(){
      choicePlayer = "Paper"
      resolve(choicePlayer);
    });

    btnRock = document.querySelector(".rock")
    btnRock.addEventListener('click', function(){
      choicePlayer = "Rock"
      resolve(choicePlayer);
    });

    btnScissor = document.querySelector(".scissor")
    btnScissor.addEventListener('click', function(){
      choicePlayer = "Scissor"
      resolve(choicePlayer);
    });
  });
}

async function playGame(){
  let pscore = 0, cscore = 0;
  let player, computer;

  let ph3 = document.createElement('h3');
  let ch3 = document.createElement('h3');

  let texth3 = document.createElement('h3');

  let imgPlayer = document.createElement('img');
  let imgFight = document.createElement('img');
  let imgComputer = document.createElement('img');


  let divScore = document.createElement('div');
  let divText =  document.createElement('div');
  let divImg = document.createElement('div');
  
  while(pscore < 5 & cscore < 5){
    player = await playerChoice();
    
    computer = computerChoice();

    let game = document.querySelector('.game');
    for (child of game.children){
      child.remove();
     }


    if (player == 'Rock') {
      if (computer == 'Rock') {
        imgPlayer.src = 'img/RockHappy.png'
        imgComputer.src = 'img/RockHappy.png'
        texth3.textContent = "Drawn";

      } else if (computer === 'Scissor' ) {
        imgPlayer.src = 'img/RockHappy.png'
        imgComputer.src = 'img/ScissorSad.png'
        texth3.textContent = `You Win! ${player} beats ${computer}`;
        pscore ++;



        
      } else{
        imgPlayer.src = 'img/RockSad.png'
        imgComputer.src = 'img/PaperHappy.png'
        texth3.textContent =`You Loose! ${computer} beats ${player}`
        cscore ++;




      }
    } else if (player == 'Paper') {
      if (computer == 'Paper') {
        imgPlayer.src = 'img/PaperHappy.png'
        imgComputer.src = 'img/PaperHappy.png'
        texth3.textContent = "Drawn";


      }else if (computer == 'Rock') {
        imgPlayer.src = 'img/PaperHappy.png';
        imgComputer.src = 'img/RockSad.png';
        texth3.textContent = `You Win! ${player} beats ${computer}`;
        pscore ++;

        

      }else{
        imgPlayer.src = 'img/PaperSad.png'
        imgComputer.src = 'img/ScissorHappy.png'
        texth3.textContent =`You Loose! ${computer} beats ${player}`
        cscore ++;



      }
      
    } else{
      if (computer == 'Scissor') {
        imgPlayer.src = 'img/ScissorHappy.png'
        imgComputer.src = 'img/ScissorHappy.png'
        texth3.textContent = "Drawn";

        
      }else if (computer == 'Paper') {
        imgPlayer.src = 'img/ScissorHappy.png'
        imgComputer.src = 'img/PaperSad.png'
        texth3.textContent = `You Win! ${player} beats ${computer}`;
        pscore ++;


        
      } else{
        imgPlayer.src = 'img/ScissorSad.png';
        imgComputer.src = 'img/RockHappy.png'
        texth3.textContent =`You Loose! ${computer} beats ${player}`
        cscore ++;



      }
    }
    imgFight.src = 'img/Fight.png'
    imgFight.style.height = "100px";
    imgFight.style.margin = "4% 0 0 0";

    imgPlayer.style.height = "150px";
    imgComputer.style.height = "150px";

    divImg.appendChild(imgPlayer);
    divImg.appendChild(imgFight)
    divImg.appendChild(imgComputer);


    divText.appendChild(texth3);
    ph3.textContent = `Player: ${pscore}`;
    ph3.classList.add('score');
    divScore.appendChild(ph3);

    ch3.classList.add('score');
    ch3.textContent = `Computer: ${cscore}`;
    divScore.appendChild(ch3);
    divScore.setAttribute('style', 'display: flex; justify-content: center; gap: 68%;  width: 98%; margin-top: 5px;')
    divImg.setAttribute('style', 'display: flex; justify-content: center; gap: 15%;  width: 98%; margin-top: 30%; margin-bottom: 20%;')

    divText.setAttribute('style', 'display: flex;')
    
    game.appendChild(divScore);
    game.appendChild(divImg);
    game.appendChild(divText);

  }




  
  if (pscore > cscore){
    texth3.textContent =`"You are the best player in the world, broo, you beat the machine"`

  } else{
    texth3.textContent =`"Its over, you loose, broo"`
  }
  let lastBtn = document.createElement('button')
  lastBtn.textContent =  'Play again!'
  lastBtn.style.width = '30%'
 

  lastBtn.addEventListener('click', function(){
    window.location.reload();
  });

  divText.appendChild(texth3);
  divText.appendChild(lastBtn)
  game.appendChild(lastBtn);

  
}