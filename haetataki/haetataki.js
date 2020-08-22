$(function(){

  var score = 0;
  var count = 30;
  var bornID,timer;

  function getPosition(){
    return{
      left: Math.floor(Math.random() * 500),
      top: Math.floor(Math.random() * 400)
    };
  }

  function kakudo(){
    return Math.floor(Math.random() * 360);
  }
  

  function born(){
    bornID = setInterval(function(){
      $('.mushi:first-child')
      .clone()
      .appendTo('#stage')
      .css(getPosition())
      .animate({ opacity: 1}, 2000)
      .animate(getPosition(), 7000)
      .rotate(kakudo())
    }, 500);
  };

  $('#stage').on('click', '.mushi', function(){
    $(this)
    .css('background-position', 'bottom')
    .prop("disabled", true)
    .stop(true, false).animate({ opacity: 0}, 500, function(){
      $(this).remove();
    });
    score += 100;
    $('#score span').text(score);
  });

  $('#start').click(function(){
    born();
    $(this).animate({ opacity: 0}, 300, function(){
      $(this).remove();
    });
    timer = setInterval(function(){
      if(count <= 0){
        clearInterval(timer);
        clearInterval(bornID);
        $('.mushi').prop("disabled", true);
        alert("スコアは"+ score +"です！")
      }else {
        count --;
        $('#count span').text(count);
      }
    }, 1000);
  });

  $(".haetatakiBtn").click(function(){
    clearInterval(timer);
    clearInterval(bornID);
  });
});