$(function(){

  $(".slot-img").click(function(){
    $(".main-slot-content-display-none").removeClass().addClass("main-slot-content");
  });

  $(".slotBtn").click(function(){
    $(".main-slot-content").removeClass().addClass("main-slot-content-display-none");
  })

  $(".haetataki-img").click(function(){
    $(".main-haetataki-content-display-none").removeClass().addClass("main-haetataki-content");
  });

  $(".haetatakiBtn").click(function(){
    $(".main-haetataki-content").removeClass().addClass("main-haetataki-content-display-none");
  })

  $(".coin-img").click(function(){
    $(".main-coin-content-display-none").removeClass().addClass("main-coin-content");
  });

  $(".coinBtn").click(function(){
    $(".main-coin-content").removeClass().addClass("main-coin-content-display-none");
  })

  $(".block-img").click(function(){
    $(".main-block-content-display-none").removeClass().addClass("main-block-content");
  });

  $(".blockBtn").click(function(){
    $(".main-block-content").removeClass().addClass("main-block-content-display-none");
  })

  $(".bingo-img").click(function(){
    $(".main-bingo-content-display-none").removeClass().addClass("main-bingo-content");
  });

  $(".bingoBtn").click(function(){
    $(".main-bingo-content").removeClass().addClass("main-bingo-content-display-none");
  })


    $("#dlslotbtn").click(function() {
      $("#dlslot").dialog({
        modal:true,
        title:"スロット遊び方",
        buttons: {"OK": function() {$(this).dialog("close");}}
      });
    });

    $("#dlhaetatakibtn").click(function() {
      $("#dlhaetataki").dialog({
        modal:true,
        title:"ハエ叩き遊び方",
        buttons: {"OK": function() {$(this).dialog("close");}}
      });
    });

    $("#dlcoinbtn").click(function() {
      $("#dlcoin").dialog({
        modal:true,
        title:"コインかえし遊び方",
        buttons: {"OK": function() {$(this).dialog("close");}}
      });
    });

    $("#dlblockbtn").click(function() {
      $("#dlblock").dialog({
        modal:true,
        title:"ブロックくずしの遊び方",
        buttons: {"OK": function() {$(this).dialog("close");}}
      });
    });

    $("#dlbingobtn").click(function() {
      $("#dlbingo").dialog({
        modal:true,
        title:"ビンゴルーレットの遊び方",
        buttons: {"OK": function() {$(this).dialog("close");}}
      });
    });

})

