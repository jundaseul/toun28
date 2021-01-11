$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    /*풀페이지*/
    $("#fullpage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        menu: '#menu',
        lockAnchors: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationPosition: 'right',
    });

    /*애니메이션 플러그인*/
    new WOW().init();
    
}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
