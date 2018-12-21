 
let userScore = 0;
let compScore = 0;
let dope = 0;
let desition;
let userScore_span = document.getElementById("userscore");
let compScore_span = document.getElementById("compscore");
let result = document.getElementById("finalresult");
const r = document.getElementById('rock');
const p = document.getElementById("paper");
const s = document.getElementById("scissors");


    function main() {

    rock.addEventListener('click', function(){ 

       game("r");


    })

    paper.addEventListener('click', function(){

        game("p");
        
    })

    scissors.addEventListener('click', function(){
        
        game("s");

    })
                 
}

function compChoice() {
    const cosas = ["r", "p", "s"];
    const ramdomchoice = Math.floor(Math.random() * 3);
    return cosas[ramdomchoice];
    }

    
function game(desition){

    desition = desition + compChoice();
    console.log(desition);
    switch(desition) { 
      case 'pp':
      result.innerHTML = "Its a draw!";
      paper.classList.add('gray-glow');
      setTimeout(function(){paper.classList.remove('gray-glow')}, 700);
      break;

      case 'ss':
      result.innerHTML = "Its a draw!";
      scissors.classList.add('gray-glow');
      setTimeout(function(){scissors.classList.remove('gray-glow')}, 700);
      break;  

      case 'rr': 
      result.innerHTML = "Its a draw!";
      rock.classList.add('gray-glow');
      setTimeout(function(){rock.classList.remove('gray-glow')}, 700);
      break;

      case 'rp': 
      result.innerHTML = "You lost, paper beats rock, keep trying!";
      compScore_span.innerHTML = compScore++;
      rock.classList.add('red-glow');
      setTimeout(function(){rock.classList.remove('red-glow')}, 700);
      break;

      case 'ps': 
      result.innerHTML = "You lost, scissors beats paper, keep trying!";
      compScore_span.innerHTML = compScore++;
      paper.classList.add('red-glow');
      setTimeout(function(){paper.classList.remove('red-glow')}, 700);
      break; 

      case 'sr':
      result.innerHTML = "You lost, rock beats scissors, keep trying!";
      compScore_span.innerHTML = compScore++;
      scissors.classList.add('red-glow');
      setTimeout(function(){scissors.classList.remove('red-glow')}, 700);
      break;

      case 'rs': 
      result.innerHTML = "You won, let's go champ!";
      userScore_span.innerHTML = userScore++;
      rock.classList.add('green-glow');
      setTimeout(function(){rock.classList.remove('green-glow')}, 700);
      break;

      case 'pr':
      result.innerHTML = "You won, let's go champ!";
      userScore_span.innerHTML = userScore++;
      paper.classList.add('green-glow');
      setTimeout(function(){paper.classList.remove('green-glow')}, 700);
      break;

      case 'sp':
      result.innerHTML = "You won, let's go champ!";
      userScore_span.innerHTML = userScore++;
      scissors.classList.add('green-glow');
      setTimeout(function(){scissors.classList.remove('green-glow')}, 700);
      
  }

setTimeout(function(){console.log()});

}
console.log(userScore);

function setcero() {
        return userScore++;
}
  main();


   

    
    
