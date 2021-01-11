$(function () { /////// jQB ///////////////////////
    console.log("로딩완료!");

    $("#fullpage").fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        menu: '#menu',
        lockAnchors: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationPosition: 'right',
    });

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
