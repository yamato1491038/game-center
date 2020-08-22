$(function(){

  var slotImg = ['slot/slot1.jpg', 'slot/slot2.jpg', 'slot/slot3.jpg', 'slot/slot4.jpg', 'slot/slot5.jpg'];
  var slotNum = 50;
  var startPos = -30 * (slotNum - 3);
  var stopPos = -150;
  var middleNum = 7;
  var slotEasing = ['swing','easeOutQuart','easeOutBack','easeOutBounce'];
  var slotDuration = 5;
  var kakuritu = 0.3;

  var atariIdx;
  var easingIdx;
  var hantei;
  var time;
  var result1 = new Array();
  var result2 = new Array();
  var result3 = new Array();

  function atariHantei(){
    atariIdx = Math.floor(Math.random() * slotImg.length);
    hantei = Math.random() < kakuritu;
  };


  function slotCreate(obj, slotno){

    obj.stop(true, true);
    obj.children().remove();

    var save_result1 = result1[slotno];
    var save_result2 = result2[slotno];
    var save_result3 = result3[slotno];

    for (var i = 1; i <= slotNum; i++) {
      var idx = Math.floor(Math.random() * slotImg.length);

      if (i == middleNum-1) {
        result1[slotno] = idx;
      } else if (i == middleNum) {
        if (hantei) {
          idx = atariIdx;
        }
        result2[slotno] = idx;
      } else if (i == middleNum+1) {
        result3[slotno] = idx;
      } else if (i == slotNum-2) {
        if (save_result1 != undefined) {
          idx = save_result1;
        }
      } else if (i == slotNum-1) {
        if (save_result2 != undefined) {
          idx = save_result2;
        }
      } else if (i == slotNum) {
        if (save_result3 != undefined) {
          idx = save_result3;
        }
      }

      obj.append("<div class='slot'>"
      + "<img border='0'"
      + " src= "+ slotImg[idx] +""
      + " width='40' height='26' />"
      + "</div>");
    }

    obj.css({
      "margin-top" : startPos + "px"
    });
  }

  function slotStart(){

    $("#startBtn").prop('disabled', true);
    $("#slotMsg").html("GO !!");

    if ($("#slot_a .wrapper").css("margin-top") != startPos + "px"){
      atariHantei();
    }

    time = slotDuration * 1000;
    easingIdx = Math.floor(Math.random() * slotEasing.length);

    slotMove($("#slots_a .wrapper"), 1 );
    setTimeout( function(){
      slotMove($("#slots_b .wrapper"), 2 );
    }, 200);
    setTimeout( function(){
      slotMove($("#slots_c .wrapper"), 3 );
    }, 400);

    $(this).delay(time+500).queue(function(){
      if (result2[1] == result2[2] && result2[1] == result2[3]) {
        $("#slotMsg").html("BINGO !!!");
      } else {
        $("#slotMsg").html("TRY AGAIN");
      }

      $("#startBtn").prop('disabled', false);

      $(this).dequeue();
    });
  }

  function slotMove(obj, slotno){

    if ( obj.css("matgin-top") != startPos ){
      slotCreate(obj, slotno );
    }

    obj.animate({
      "margin-top" : stopPos + "px"
    }, {
      'duration' : time,
      'easing' : slotEasing[easingIdx]
    });
  };

  slotCreate( $("#slots_a .wrapper") );
  slotCreate( $("#slots_b .wrapper") );
  slotCreate( $("#slots_c .wrapper") );

  $("#startBtn").on("click", function(){
    slotStart()
  });
})