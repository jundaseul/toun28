$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    /*마우스 커서*/
    $("body").mousemove(function (e) {
        var posx = e.pageX - 15;
        var posy = e.pageY - 15;
        //console.log("x축:"+posx+"\ny축:"+posy);

        $("#cursor").css({
            top: posy + "px",
            left: posx + "px"
        });

    }); //////////////// mousemove ///////////////


    /*a링크 마우스오버시 커서 확대*/
    $("a").hover(
        function () {
            $("#cursor").addClass("curfill");
        },
        function () {
            $("#cursor").removeClass("curfill");
        });

    

    /*풀페이지*/
    $("#fullpage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        //        menu: '#menu',
        //        lockAnchors: false,
        //        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: false,
        navigationPosition: 'right',
        responsiveWidth: 1025,
    });

    /*애니메이션 플러그인*/
    new WOW().init();


    /*로고 클릭시 맨 위 이동*/
    $('.logo').click(function () {
        $.fn.fullpage.moveTo(1);
    }); ///////////////// click ////////////////////////////


    /*1024px부터 'fp-auto-height' 넣기*/
    if ($(window).width() < 1025) {
        $(".section").addClass("fp-auto-height");
    }

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
