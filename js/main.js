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


    /*풀페이지*/
    $("#fullpage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
//        menu: '#menu',
//        lockAnchors: false,
//        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationPosition: 'right',
    });

    /*애니메이션 플러그인*/
    new WOW().init();
    
    
    /*로고 클릭시 맨 위 이동*/
    $('.logo').click(function () {
        $.fn.fullpage.moveTo(1);
    }); ///////////////// click ////////////////////////////
    

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
