$(function(){

    var totalNum = $(".vis>div").length // 선택자의 div 갯수 : 4
    var currentNum = 1;
    $("span.page_n>span:first-child").text(currentNum+1);

    $(".next_b").click(function() {

        $(".vis>div").hide();

        if (currentNum == 3) {
            currentNum = 0;
        } else {
            currentNum++;
        }

        $(".vis>div").eq(currentNum).show();
        //$("#currentNumDP").text("currentNumDP : " + currentNum);
        $("span.page_n>span:first-child").text(currentNum+1);

    });

    $(".prev_b").click(function() {

        $(".vis>div").hide();

        if (currentNum == 0) {
            currentNum = 3;
        } else {
            currentNum--;
        }

        $(".vis>div").eq(currentNum-1).show();
        //$("#currentNumDP").text("currentNumDP : " + currentNum);
        $("span.page_n>span:first-child").text(currentNum+1);

    });

});
