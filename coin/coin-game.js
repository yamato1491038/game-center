$(function(){
  const coincnt = 3;
  for(var i = 0;i < coincnt; i++){
    $(".sheet").append("<li>");
  }

  $(".sheet").children().addClass("normal");

  const outcoin = Math.floor(Math.random() * coincnt );
  const safe = 1;
  const out = 2;

  $(".sheet").children().attr("data-role",safe);

  $(".sheet li").eq(outcoin).attr("data-role",out);
  
  function notice(li){
    if (li.data("role") == "2" ){
      li.attr("class","out");
      $(".coin-content").css("background-image","url(http://www.otwo.jp/blog/demo/coin/bg_hazure.png)");
    }else{
      li.attr("class","safe");
    }
  }

  function turn(li, f, b, motiontime){
    $({deg:f}).animate({deg:b}, {
      duration: motiontime,
      progress:function(){
        $(li).css({transform:'rotateY('+this.deg+'deg)'});
      }
    });
  }

  const angle_s = 0;
  const angle_e = 90;

  function motion2(li){
    const motiontime = 75;
    for(var i=0; i<=50; i++ ){
      if (i !=50){
        setTimeout(function(){
          turn(li, angle_s, angle_e, motiontime);
        },(motiontime * i ));
      }else{
        setTimeout(function(){
          notice(li);
          turn(li, angle_e, angle_s, motiontime);
        },(motiontime * i ));
      }
    }
  }

  $(".sheet li").click(function(){
    motion2($(this));
  });
});