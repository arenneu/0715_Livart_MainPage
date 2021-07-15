$(function(){

    var res;  // 값을 임시 저장하기 위한 평범한 변수
    var money = [];  // 배열변수

    for(var i=0;  i<6;  i++){  // 인덱스 번호는 0,1,2,3,4,5까지 적용
        money[i] = $("tr.goodsPrice").eq(i).find("span").text();
        money[i] = parseInt(money[i]);
        res = money[i].toLocaleString();
        $(".goodsPrice").eq(i).find("span").text(res);
    }

    // 모달레이어 팝업
    $("table.goodsInfo").click(function(){
        //클릭한 이미지 가져오기

        var ImgSrc = $(this).find("img").attr("src");
        $("div#layerBG").css({"display":"block"});
        $("div#popImg").children("img").attr("src",ImgSrc);
    
    //클릭한 상품명 가져오기      
        var popupGoodsName = $(this).find("tr.goodsName").children("td").html();
        popupGoodsName = popupGoodsName.replace("<br>","");
        $("div#popGoodsName").html(popupGoodsName);

    //클릭한 상품가격 가져오기
        var popGoodsPrice = $(this).find("tr.goodsPrice").children("td").html();
        $("div#popGoodsPrice").html(popGoodsPrice);
    });

    // 모달팝업레이어 종료
    $("div#closeBtn").click(function(){
        $("div#layerBG").css({"display":"none"});
    });

});