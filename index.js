let msg1=document.getElementById('msg1');
let msg2=document.getElementById('msg2');
let msg3=document.getElementById('msg3');


var result=Math.floor(Math.random()*10);
console.log(result);

var no_of_guess=0;
var guessed_num=[];

function play()
{
  let guess=document.getElementById('guess').value;
  console.log(guess);
  if(guess < 1 || guess > 10 )
  {
    alert('please Enter Numbers from 0 to 10');
  }
  else
  {
    no_of_guess=no_of_guess+1;
    guessed_num.push(guess);

    if(guess > result)
    {
        msg1.textContent="you guess is low";
        msg2.textContent="No of guesses:"+no_of_guess;
        msg3.textContent="Guessed Numbers are:"+guessed_num;
    }
    else if(guess < result)
    {
        msg1.textContent="you guess is high";
        msg2.textContent="No of guesses:"+no_of_guess;
        msg3.textContent="Guessed Numbers are:"+guessed_num;
    }
    else if(guess == result)
    {
        msg1.textContent="Congrats You Win";
        msg2.textContent="The Lucky no is :"+result;
        msg3.textContent="you Guessed:" + no_of_guess+ "Guesses";
        
    }
    if(no_of_guess > 3)
    {
        alert('your choice is over. better luck next time');



      // msg1.textContent="your choice is over";
      // msg2.textContent="better luck next time";
    }
    // else if(no_of_guess < 3)
    // {
    //   msg1.textContent="you guess is high";
    //   msg1.textContent="no of guesses: "+no_of_guess;
     
    // }
    
    
    }  
    }
  