let count=JSON.parse(localStorage.getItem('count')) || {
        wins:0,
        losses:0,
        ties:0
      };
    let userMove;
    let move;
    let result;
    // updateCount();
    function game(move)
    {
      if (userMove=== "Rock")
    {
      userMove='✊';
      if (move === `Rock`)
        {
          move='✊';
          result=`Tie.`
        }
      else if (move===`Paper`)
        {
          move='🖐️';
          result=`You lose.`
        }
      else
        {
          move='✌️';
        result=`You win.`
        }
    }
    else if (userMove==="Paper")
    {
      userMove='🖐️';
      if (move === `Rock`) 
      {
        move='✊';
        result=`You win.`
      }
      else if (move===`Paper`)
        {
          move='🖐️';
          result=`Tie.`
        }
      else
        {
          move='✌️';
          result=`You lose.`
        }
    }
    else
    {
      userMove='✌️';
      if (move === `Rock`)
      {
        move='✊';
        result=`You lose.`
      }
      else if (move===`Paper`)
      {
        move='🖐️';
        result=`You win.`
      }
      else
        {
          move='✌️';  
        result=`Tie.`
        }
    }
    if (result=='You win.')
      count.wins+=1;
    else if (result=='You lose.')
      count.losses+=1;
    else
      count.ties+=1;
    localStorage.setItem('count',JSON.stringify(count));

    document.querySelector('.js-result').innerHTML=`${result}`;
    document.querySelector('.js-moves').innerHTML=`You picked ${userMove}. Computer picked ${move}.`;
    updateCount();
    }

    function updateCount()
    {
      document.querySelector('.js-count').innerHTML=`Wins: ${count.wins}, Losses: ${count.losses}, Ties: ${count.ties}`;
    }
    function pickMove(){
    let random = Math.random();
    if (random>=0 && random<1/3)
        move="Rock";
    else if (random>=1/3 && random<2/3)
        move="Paper";
    else
        move="Scissors";
    return move;
    }