/* eslint-disable */

$(function(){
    $("td").eq(0).click(function(){
        $("div#funi01").css({"display":"block"});
    });
    
    $("td").eq(1).click(function(){
        $("div#funi02").css({"display":"block"});
    });
    
    $("td").eq(2).click(function(){
        $("div#funi03").css({"display":"block"});
    });
    
    $("td").eq(3).click(function(){
        $("div#funi04").css({"display":"block"});
    });
    
    $("td").eq(4).click(function(){
        $("div#funi05").css({"display":"block"});
    });
    
    $("td").eq(5).click(function(){
        $("div#funi06").css({"display":"block"});
    });
    
    $("button").click(function(){
        $(".popupBG").css({"display":"none"});
    });
});