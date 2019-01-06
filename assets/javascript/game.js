// Game Code!  
  
//All Variables
  var vader = Math.floor(Math.random() * 10);  
  var kylo = Math.floor(Math.random() * 8);  
  var luke = Math.floor(Math.random() * 12);  
  var chewie = Math.floor(Math.random() * 5);  
  var win = 0;
  var lose = 0;
  var total = 0;
  var randomNumber = Math.floor(Math.random() * 120);

  //Placeholder text
  $(".random-number").text(randomNumber);
  $(".win").text(win);
  $(".lose").text(lose);

// Click functions
  $(".vader").on("click", function(){
    total += vader;
    $(".total").text(total);
    play();
  })
  
  $(".kylo").on("click", function(){
    total += kylo;
    $(".total").text(total);
    play();
  })
  
  $(".luke").on("click", function(){
    total += luke;
    $(".total").text(total);
    play();
  })
  
  $(".chewbacca").on("click", function(){
    total += chewie;
    $(".total").text(total);
    play();
  })

// Gameplay

  function play(){
    if(total > randomNumber){
      alert("You lose");
      lose++;
      $(".lose").text(lose);
      start();
    }
    else if(total === randomNumber){
      alert("You win");
      win++;
      $(".win").text(win);
      start();
    }
  };
  
  function start(){
    total = 0;
    $(".total").text(total);
    randomNumber = Math.floor(Math.random() * 120);
    $(".ramdom-number").text(randomNumber);
  }

 





