$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");
    
    //모든 a태그 이동 막기
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    

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
        'afterLoad': function (anchorLink, index) {
            /*2페이지 텍스트*/
            if (index == 2) {
                //console.log("도착?");
                $(".cont1_txt_ani").stop().animate({
                    top: "0",
                    opacity: 1
                }, 900)
            }
            if (index !== 2) { // 해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".cont1_txt_ani").stop().animate({
                    top: "5%",
                    opacity: 0
                }, 300);
            }

            /*상품리스트*/
            if (index == 3) {
                //console.log("도착?");
                $(".prod_list").stop().animate({
                    top: "53%",
                    opacity: 1
                }, 700)
            }
            if (index !== 3) { // 해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".prod_list").stop().animate({
                    top: "150%",
                }, 300);
            }

            /*마지막 섹션*/
            if (index == 4) {
                //console.log("도착?");
                $(".cont1_txt_ani.cont2_txt").stop().animate({
                    top: "0",
                    opacity: 1
                }, 900)
            }
            if (index !== 4) { // 해당영역아닐때 다시 밖으로빼놓기(원상복귀)
                $(".cont1_txt_ani.cont2_txt").stop().animate({
                    top: "5%",
                    opacity: 0
                }, 300);
            }

        }
    });



    /*로고 클릭시 맨 위 이동*/
    $('.logo').click(function () {
        $.fn.fullpage.moveTo(1);
    }); ///////////////// click ////////////////////////////


    /*1024px부터 'fp-auto-height' 넣기*/
    if ($(window).width() < 1025) {
        $(".section").addClass("fp-auto-height");
    }



    /*menu버튼 클릭시 메뉴박스 나타나기 - 아이패드 사이즈*/
    $(".mob_menuBtn").click(function () {

        if ($(".mob_menuBtn").hasClass("on")) {
            $(this).removeClass("on").find("a").html("Close");
            $("#bgBox").fadeIn(300);
            $(".menu_box").animate({
                left: "0"
            },800);
            $("body").css({
                overflowY:"hidden"
            });
        } else {
            $(this).addClass("on").find("a").html("Menu");
            $("#bgBox").fadeOut(300);
            $(".menu_box").animate({
                left: "-100%"
            },500);
            $("body").css({
                overflowY:"Scroll"
            });
        }
        
    });




}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
