$(function(){
    // Header menu fixed =======================================
    const HeaderWrap = $(".HeaderWrap");
    $(window).scroll(function(){
        if(window.innerWidth > 1280){
            if(window.scrollY > 200){
                HeaderWrap.css({position : "fixed", width: "100%",  zIndex : "99999999"});
                HeaderWrap.find(".Logo").css({left : "2.5%"});
                HeaderWrap.find(".Togglemenu").css({right : "2.5%"});
                HeaderWrap.find(".HeaderLang").css({right : "5.5%"});
                HeaderWrap.find(".HeaderTopUtil").css({right : "2.5%"});
    
            }
            else if(window.scrollY < 200){
                HeaderWrap.css({position : "relative", width: "95%"});
                HeaderWrap.find(".Logo").css({left : "0%"});
                HeaderWrap.find(".Togglemenu").css({right : "0%"});
                HeaderWrap.find(".HeaderLang").css({right : "3%"});
                HeaderWrap.find(".HeaderTopUtil").css({right : "0%"});
            }
        }

        if(window.innerWidth < 1280 && window.innerWidth > 785){
            if(window.scrollY > 200){
                HeaderWrap.css({position : "fixed", width: "100%",  zIndex : "99999999"});
                HeaderWrap.find(".Logo").css({left : "2.5%"});
                HeaderWrap.find(".Togglemenu").css({right : "2.5%"});
                HeaderWrap.find(".HeaderLang").css({right : "8%"});
                HeaderWrap.find(".HeaderTopUtil").css({right : "2.5%"});
    
            }
            else if(window.scrollY < 200){
                HeaderWrap.css({position : "relative", width: "95%"});
                HeaderWrap.find(".Logo").css({left : "0%"});
                HeaderWrap.find(".Togglemenu").css({right : "0%"});
                HeaderWrap.find(".HeaderLang").css({right : "6%"});
                HeaderWrap.find(".HeaderTopUtil").css({right : "0%"});
            }
            console.log("ok")
        }
        
    })

    //Header nav menu ======================================
    const NavigationItem = $(".NavigationItem");
    NavigationItem.mouseover(function(){
        NavigationItem.find(".NavigationItem-list").css({display : "none"})
        $(this).find(".NavigationItem-list").css({display : "block"})
    })
    NavigationItem.find(".NavigationItem-list").mouseleave(function(){
        NavigationItem.find(".NavigationItem-list").css({display : "none"})
    })

    // EventSlide setInterval slide =============================
    let slide_index = 2;
    let span_index = 1;
    const EventSlide__loop = () => {
        if(span_index < 7){
            EventSlideWrap.css({transition : "all 0.3s"});
            EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*slide_index + "px)"});
            EventSlideIndicator_Span.removeClass("focus");
            EventSlideIndicator_Span.eq(span_index).addClass("focus")
            slidecount++;
            slide_index ++;
            span_index ++;
        }
        else if(span_index === 7){
            span_index = 0;
            slidecount = 1;
            EventSlideIndicator_Span.removeClass("focus");
            EventSlideIndicator_Span.eq(span_index).addClass("focus")
            EventSlideWrap.css({transition : "all 0.3s"});
            EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*slide_index + "px)"});
            setTimeout(() => {
                EventSlideWrap.css({transition : "none"})
                EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*1 + "px)"})
                slide_index = 2;
            }, 150);
            slide_index ++;
            span_index ++;
        }
    }

    let slide_loop = setInterval(EventSlide__loop , 5000)

    // EventSlide Btn click =====================================
    const EventSlideWrap = $(".EventSlideWrap");
    const leftBtn = $(".leftBtn");
    const rightBtn = $(".rightBtn");
    let slidecount = 1;
    // 뒤에 클론 코드 때문에 first index는 1임.
    const EventSlide_arrow_slide = (first_index, second_index) => {
        EventSlideWrap.css({transition : "all 0.3s"});
        EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*first_index + "px)"});
        EventSlideIndicator_Span.removeClass("focus");
        EventSlideIndicator_Span.eq(second_index).addClass("focus")
    }

    rightBtn.click(function(){
        clearInterval(slide_loop);
        if(slidecount === 1){
            EventSlide_arrow_slide(2, 1);
            slidecount++;
        }
        else if(slidecount === 2){
            EventSlide_arrow_slide(3, 2)
            slidecount++;
        }
        else if(slidecount === 3){
            EventSlide_arrow_slide(4, 3)
            slidecount++;
        }
        else if(slidecount === 4){
            EventSlide_arrow_slide(5, 4)
            slidecount++;
        }
        else if(slidecount === 5){
            EventSlide_arrow_slide(6, 5)
            slidecount++;
        }
        else if(slidecount === 6){
            EventSlide_arrow_slide(7, 6)
            slidecount++;
        }
        else if(slidecount === 7){
            EventSlide_arrow_slide(8, 0)
            setTimeout(() => {
                EventSlideWrap.css({transition : "none"})
                EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*1 + "px)"})
                slidecount = 1;
            }, 150);
        }
    })

    leftBtn.click(function(){
        clearInterval(slide_loop);
        if(slidecount === 1){
            EventSlide_arrow_slide(0, 6)
            setTimeout(() => {
                EventSlideWrap.css({transition : "none"})
                EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*7 + "px)"})
                slidecount = 7;
            }, 150);
        }
        else if(slidecount === 7){
            EventSlide_arrow_slide(6, 5)
            slidecount--;
        }
        else if(slidecount === 6){
            EventSlide_arrow_slide(5, 4)
            slidecount--;
        }
        else if(slidecount === 5){
            EventSlide_arrow_slide(4, 3)
            slidecount--;
        }
        else if(slidecount === 4){
            EventSlide_arrow_slide(3, 2)
            slidecount--;
        }
        else if(slidecount === 3){
            EventSlide_arrow_slide(2, 1)
            slidecount--;
        }
        else if(slidecount === 2){
            EventSlide_arrow_slide(1, 0)
            slidecount--;
        }
    })

    // EventSlide Indicator create ======================================
    const EventSlideIndicator = $(".EventSlideIndicator");
    let Indicator_HTML = "";
    EventSlideWrap.find(".EventSlideItem").each(function(i){
        if( i  <= 6){
            Indicator_HTML += "<span class=index" + i + "></span>"
            EventSlideIndicator.html(Indicator_HTML);
        }
    })

    // EventSlide Indicator Color change / slide ================================
    const EventSlideIndicator_Span = EventSlideIndicator.find("span");

    //first moment ------------------------
    EventSlideIndicator_Span.eq(0).addClass("focus");


    EventSlideIndicator_Span.click(function(){
        // loop clear ---------------------
        clearInterval(slide_loop);

        // color change -------------------
        EventSlideIndicator_Span.removeClass("focus")
        $(this).addClass("focus")

        // slide ---------------------------------
        const EventSlide_indicator_slide = (index) => {
            EventSlideWrap.css({transition : "all 0.3s"});
            EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*index + "px)"})
            slidecount = index;
        }
        if($(this).hasClass("index0")){
            EventSlide_indicator_slide(1)
        }
        else if($(this).hasClass("index1")){
            EventSlide_indicator_slide(2)
        }
        else if($(this).hasClass("index2")){
            EventSlide_indicator_slide(3)
        }
        else if($(this).hasClass("index3")){
            EventSlide_indicator_slide(4)
        }
        else if($(this).hasClass("index4")){
            EventSlide_indicator_slide(5)
        }
        else if($(this).hasClass("index5")){
            EventSlide_indicator_slide(6)
        }
        else if($(this).hasClass("index6")){
            EventSlide_indicator_slide(7)
        }
    })

    // Hotissue Btn click ====================================
    const HotissueFlex = $(".HotissueFlex");
    const HotissueLeft = $(".HotissueLeft");
    const HotissueRight = $(".HotissueRight");

    let Hotissue_slide_index = 0;

    HotissueRight.click(function(){
        clearInterval(hotslide_loop);
        if(Hotissue_slide_index === 0){
            HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*1 + "px)" , transition : "all 0.3s"})
            HotissueIndicator.find("span").removeClass("focus")
            HotissueIndicator.find("span").eq(1).addClass("focus")
            Hotissue_slide_index++;
        }
    })

    HotissueLeft.click(function(){
        clearInterval(hotslide_loop);
        if(Hotissue_slide_index === 1){
            HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*0 + "px)" , transition : "all 0.3s"})
            HotissueIndicator.find("span").removeClass("focus")
            HotissueIndicator.find("span").eq(0).addClass("focus")
            Hotissue_slide_index--;
        }
    })

    //Hotissue indicator create ===============================
    const HotissueIndicator = $(".HotissueIndicator");
    let HotissueIndicator_html = "";

    HotissueFlex.find(".HotissueWrap").each(function(i){
        HotissueIndicator_html += "<span class=index" + i + "></span>";
        HotissueIndicator.html(HotissueIndicator_html);
    })

    //Hotissue indicator color==========================
    HotissueIndicator.find("span").eq(0).addClass("focus");

    //Hotissue indicator click ================================
    HotissueIndicator.find("span").click(function(){
        clearInterval(hotslide_loop);
        if($(this).hasClass("index0")){
            HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*0 + "px)" , transition : "all 0.3s"})
            HotissueIndicator.find("span").removeClass("focus");
            $(this).addClass("focus")
            Hotissue_slide_index = 0;
        }
        else if($(this).hasClass("index1")){
            HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*1 + "px)" , transition : "all 0.3s"})
            HotissueIndicator.find("span").removeClass("focus");
            $(this).addClass("focus");
            Hotissue_slide_index = 1;
        }
    })

    //Hotissue loop slide =================================
    let hotslide_index = 0;
    const Hotissue_loop = () => {
        if(hotslide_index === 0){
            HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
            HotissueIndicator.find("span").removeClass("focus");
            HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
            Hotissue_slide_index = 0;
            hotslide_index++;
        }else if(hotslide_index === 1){
            HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
            HotissueIndicator.find("span").removeClass("focus");
            HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
            Hotissue_slide_index = 1;
            hotslide_index--;
        }
    }

    let hotslide_loop = setInterval(Hotissue_loop, 3000);

    // PlusIndicator create ======================================
    const PlusContentIndicator = $(".PlusContentIndicator");
    const PlustContentWrap = $(".PlustContentWrap");
    const PlustContentFlex = $(".PlustContentFlex");

    let PlusContentIndicator_html = "";

    PlustContentWrap.each(function(i){
        PlusContentIndicator_html += "<span class=index" + i + "></span>";
        PlusContentIndicator.html(PlusContentIndicator_html);
    })

    //PlusIndicator color==========================
     PlusContentIndicator.find("span").eq(0).addClass("focus");

    //PlustContentFlex arrow btn create ================================
     PlusContentIndicator.append("<button class='Plustleft'></button>", "<button class='Plustright'></button>");

    //PlustContentFlex arrow btn click ================================
    let PlusContent_count = 0;

    // arrow function ---------------------
    const PlusContent_slide = (first_index , second_index) => {
        PlustContentFlex.css({transform : "translateX(" + -(PlustContentWrap.width())*first_index + "px)"});
        PlusContentIndicator.find("span").removeClass("focus");
        PlusContentIndicator.find("span").eq(second_index).addClass("focus");
    }

    // PlusIndicator loop slide  ===============================
    let Plus_loop_index = 1;

    const PlusContent_slide_loop = () => {
        if(Plus_loop_index === 0){
            PlusContent_slide(0, 0);
            Plus_loop_index++;
        }
        else if(Plus_loop_index === 1){
            PlusContent_slide(1, 1);
            Plus_loop_index++;
        }
        else if(Plus_loop_index === 2){
            PlusContent_slide(2, 2);
            Plus_loop_index++;
        }
        else if(Plus_loop_index === 3){
            PlusContent_slide(3, 3);
            Plus_loop_index++;
        }
        else if(Plus_loop_index === 4){
            PlusContent_slide(3.1, 4);
            Plus_loop_index = 0;
        }
    }

    const Plus_loop_interval = setInterval(PlusContent_slide_loop, 4000);

    //right--
    PlusContentIndicator.find(".Plustright").click(function(){
        clearInterval(Plus_loop_interval);
        if(PlusContent_count === 0){
            PlusContent_slide(1, 1)
            PlusContent_count++;
        }
        else if(PlusContent_count === 1){
            PlusContent_slide(2, 2)
            PlusContent_count++;
        }
        else if(PlusContent_count === 2){
            PlusContent_slide(3, 3)
            PlusContent_count++;
        }
        else if(PlusContent_count === 3){
            PlusContent_slide(3.1 , 4)
            PlusContent_count++;
        }
    })
    PlusContentIndicator.find(".Plustleft").click(function(){
        clearInterval(Plus_loop_interval);
        if(PlusContent_count === 4){
            PlusContent_slide(3, 3)
            PlusContent_count--;
        }
        else if(PlusContent_count === 3){
            PlusContent_slide(2, 2)
            PlusContent_count--;
        }
        else if(PlusContent_count === 2){
            PlusContent_slide(1, 1)
            PlusContent_count--;
        }
        else if(PlusContent_count === 1){
            PlusContent_slide(0, 0)
            PlusContent_count--;
        }
    })

    // PlusIndicator click ------------------------
    PlusContentIndicator.find("span").click(function(){
        clearInterval(Plus_loop_interval);
        if($(this).hasClass("index0")){
            PlusContent_slide(0, 0);
            PlusContent_count = 0;
        }
        else if($(this).hasClass("index1")){
            PlusContent_slide(1, 1);
            PlusContent_count = 1;
        }
        else if($(this).hasClass("index2")){
            PlusContent_slide(2, 2);
            PlusContent_count = 2;
        }
        else if($(this).hasClass("index3")){
            PlusContent_slide(3, 3);
            PlusContent_count = 3;
        }
        else if($(this).hasClass("index4")){
            PlusContent_slide(3.1, 4);
            PlusContent_count = 4;
        }
    })

    if(window.innerWidth < 1280){
        let PlusContent_count = 0;
        let Plus_loop_index = 1;

        const PlusContent_slide_loop = () => {
            if(Plus_loop_index === 0){
                PlusContent_slide(0, 0);
                Plus_loop_index++;
            }
            else if(Plus_loop_index === 1){
                PlusContent_slide(1, 1);
                Plus_loop_index++;
            }
            else if(Plus_loop_index === 2){
                PlusContent_slide(2, 2);
                Plus_loop_index++;
            }
            else if(Plus_loop_index === 3){
                PlusContent_slide(3, 3);
                Plus_loop_index++;
            }
            else if(Plus_loop_index === 4){
                PlusContent_slide(4, 4);
                Plus_loop_index = 0;
            }
        }

        
        const Plus_loop_interval = setInterval(PlusContent_slide_loop, 4000);

        PlusContentIndicator.find(".Plustright").click(function(){
            clearInterval(Plus_loop_interval);
            if(PlusContent_count === 0){
                PlusContent_slide(1, 1)
                PlusContent_count++;
            }
            else if(PlusContent_count === 1){
                PlusContent_slide(2, 2)
                PlusContent_count++;
            }
            else if(PlusContent_count === 2){
                PlusContent_slide(3, 3)
                PlusContent_count++;
            }
            else if(PlusContent_count === 3){
                PlusContent_slide(4 , 4)
                PlusContent_count++;
            }
        })

        PlusContentIndicator.find(".Plustleft").click(function(){
            clearInterval(Plus_loop_interval);
            if(PlusContent_count === 4){
                PlusContent_slide(3, 3)
                PlusContent_count--;
            }
            else if(PlusContent_count === 3){
                PlusContent_slide(2, 2)
                PlusContent_count--;
            }
            else if(PlusContent_count === 2){
                PlusContent_slide(1, 1)
                PlusContent_count--;
            }
            else if(PlusContent_count === 1){
                PlusContent_slide(0, 0)
                PlusContent_count--;
            }
        })

        PlusContentIndicator.find("span").click(function(){
            clearInterval(Plus_loop_interval);
            if($(this).hasClass("index0")){
                PlusContent_slide(0, 0);
                PlusContent_count = 0;
            }
            else if($(this).hasClass("index1")){
                PlusContent_slide(1, 1);
                PlusContent_count = 1;
            }
            else if($(this).hasClass("index2")){
                PlusContent_slide(2, 2);
                PlusContent_count = 2;
            }
            else if($(this).hasClass("index3")){
                PlusContent_slide(3, 3);
                PlusContent_count = 3;
            }
            else if($(this).hasClass("index4")){
                PlusContent_slide(4, 4);
                PlusContent_count = 4;
            }
        })
    }

    //CustoryIndicator create ==========================
    const CustoryFlex = $(".CustoryFlex");
    const CustoryIndicator = $(".CustoryIndicator");

    let Custory_html = "";

    CustoryFlex.find(".CustoryWrap").each(function(i){
        Custory_html += "<span class=index" + i + "></span>";
        CustoryIndicator.html(Custory_html);
    })

    //CustoryIndicator color ==========================
    CustoryIndicator.find("span").eq(0).addClass("focus");

    //CustoryIndicator click =============================

    const custory_indicator_fn = (index) => {
        CustoryFlex.css({transform : "translateX(" + -(CustoryFlex.width()*index) + "px)"});
        CustoryIndicator.find("span").removeClass("focus");
        CustoryIndicator.find("span").eq(index).addClass('focus');
    }

    CustoryIndicator.find("span").click(function(){
        clearInterval(custory_slide_interval);
        if($(this).hasClass("index0")){
            custory_indicator_fn(0)
        }else if($(this).hasClass("index1")){
            custory_indicator_fn(1)
        }else if($(this).hasClass("index2")){
            custory_indicator_fn(2)
        }else if($(this).hasClass("index3")){
            custory_indicator_fn(3)
        }
    })

    //Custory slide interval ==================================
    let custory_slide_index = 1;
    const custory_slide = () => {
        if(custory_slide_index === 0){
            custory_indicator_fn(0)
            custory_slide_index++;
        }
        else if(custory_slide_index === 1){
            custory_indicator_fn(1)
            custory_slide_index++;
        }
        else if(custory_slide_index === 2){
            custory_indicator_fn(2)
            custory_slide_index++;
        }
        else if(custory_slide_index === 3){
            custory_indicator_fn(3)
            custory_slide_index = 0;
        }
    }

    const custory_slide_interval =  setInterval(custory_slide, 5000);

    // 모바일버전 hotissue html 변경
    if($(window).width() <= 785){
        $("body").css({overflowX : "hidden"});
        EventSlideWrap.css({transition: "none"})
        EventSlideWrap.css({transform : "translateX(" + -(EventSlideWrap.width())*1 + "px)"});

        // first child 변경
        HotissueFlex.find(".HotissueWrap").eq(0).find(".HotissueList").html("<li class='HotissueItem'> <a class='HotissueItem-link' href='#' onclick='return false'> <div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809189925287.jpg' alt='HEYROO베이컨칩에그인헬'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>HEYROO베이컨칩에그인헬</p></div><div class='HotissueItem-price'><strong>1,800</strong><span>원</span></div></a></li>")
        HotissueFlex.find(".HotissueWrap").eq(0).find(".HotissueList").append("<li class='HotissueItem'><a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809895798304.jpg' alt='망곰바질토마토베이글'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>샌)망곰바질토마토베이글</p></div><div class='HotissueItem-price'><strong>4,900</strong><span>원</span></div></a></li>")
    
        // second child 변경
        HotissueFlex.find(".HotissueWrap").eq(1).find(".HotissueList").html("<li class='HotissueItem'><a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809383959293.jpg' alt='햄말이소불고기김밥'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>김)햄말이소불고기김밥</p></div><div class='HotissueItem-price'><strong>2,200</strong><span>원</span></div></a></li>")
        HotissueFlex.find(".HotissueWrap").eq(1).find(".HotissueList").append("<li class='HotissueItem'><a class='HotissueItem-link'  href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809895798564.png' alt='망곰이의딸기샌드'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>샌)망곰이의딸기샌드</p></div><div class='HotissueItem-price'><strong>3,600</strong><span>원</span></div></a></li>")
    
        // 나머지 child 생성
        HotissueFlex.append("<div class='HotissueWrap'><ul class='HotissueList'><li class='HotissueItem'><a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809824431692.jpg' alt='마라누들떡볶이'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>편키트랩)마라누들떡볶이</p></div><div class='HotissueItem-price'><strong>8,900</strong><span>원</span></div></a></li><li class='HotissueItem'><a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8801771029700.jpg' alt='멸추랑꼬마김밥'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>김)멸추랑꼬마김밥</p></div><div class='HotissueItem-price'><strong>4,500</strong><span>원</span></div></a></li></ul></div>")
        HotissueFlex.append("<div class='HotissueWrap'><ul class='HotissueList'><li class='HotissueItem'><a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809692955191.jpg' alt='망곰이딸기마카롱'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>조이)망곰이딸기마카롱</p></div><div class='HotissueItem-price'><strong>3,800</strong><span>원</span></div></a></li><li class='HotissueItem'><a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/2202000064558.jpg' alt='단팥붕어빵N'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>튀김)단팥붕어빵N</p></div><div class='HotissueItem-price'><strong>900</strong><span>원</span></div></a></li></ul></div>")
        HotissueFlex.append("<div class='HotissueWrap'><ul class='HotissueList'><li class='HotissueItem'><a class='HotissueItem-link'  href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8801771029601.jpg' alt='코난나폴리탄파스타'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>면)코난나폴리탄파스타</p></di<div class='HotissueItem-price'><strong>4,900</strong><span>원</span></div></a></li><li class='HotissueItem'> <a class='HotissueItem-link' href='#' onclick='return false'><div class='HotissueItem-imgcontainer'><img class='HotissueItem-img' src='./img/8809948342683.jpg' alt='백종원뉴백반한판'><span class='NewItemImg'></span></div><div class='HotissueItem-title'><p>도)백종원뉴백반한판</p></div><div class='HotissueItem-price'><strong>4,700</strong><span>원</span></div></a></li></ul></div>")
    
        const HotissueIndicator = $(".HotissueIndicator");
        let HotissueIndicator_html = "";

        HotissueFlex.find(".HotissueWrap").each(function(i){
        HotissueIndicator_html += "<span class=index" + i + "></span>";
        HotissueIndicator.html(HotissueIndicator_html);
        })

        //Hotissue indicator color==========================
        HotissueIndicator.find("span").eq(0).addClass("focus");

        //Hotissue loop slide =================================
        let hotslide_index = 0;
        const Hotissue_loop = () => {
            if(hotslide_index === 0){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
                Hotissue_slide_index = 0;
                hotslide_index++;
            }else if(hotslide_index === 1){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
                Hotissue_slide_index = 1;
                hotslide_index++;
            }
            else if(hotslide_index === 2){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
                Hotissue_slide_index = 2;
                hotslide_index++;
            }
            else if(hotslide_index === 3){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
                Hotissue_slide_index = 3;
                hotslide_index++;
            }
            else if(hotslide_index === 4){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*hotslide_index + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                HotissueIndicator.find("span").eq(hotslide_index).addClass("focus")
                Hotissue_slide_index = 4;
                hotslide_index = 0;
            }
        }

        let hotslide_loop = setInterval(Hotissue_loop, 3000);
        
        //Hotissue indicator click ================================
        HotissueIndicator.find("span").click(function(){
            clearInterval(hotslide_loop);
            if($(this).hasClass("index0")){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*0 + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                $(this).addClass("focus")
                Hotissue_slide_index = 0;
            }
            else if($(this).hasClass("index1")){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*1 + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                $(this).addClass("focus");
                Hotissue_slide_index = 1;
            }
            else if($(this).hasClass("index2")){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*2 + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                $(this).addClass("focus");
                Hotissue_slide_index = 2;
            }
            else if($(this).hasClass("index3")){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*3 + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                $(this).addClass("focus");
                Hotissue_slide_index = 3;
            }
            else if($(this).hasClass("index4")){
                HotissueFlex.css({transform : "translateX(" + -(HotissueFlex.width())*4 + "px)" , transition : "all 0.3s"})
                HotissueIndicator.find("span").removeClass("focus");
                $(this).addClass("focus");
                Hotissue_slide_index = 4;
            }
        })

        // 망곰이 이미지 변경
        const StorycuItem_link = $(".StorycuItem-link");

        StorycuItem_link.eq(2).html("<img src='./img/FB17C67A0EB542529236B4485F359D22.png' alt='Instagram'></img>")

    }
})