$(function(){
    // Header menu fixed =======================================
    const HeaderWrap = $(".HeaderWrap");
    $(window).scroll(function(){
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

    const custory_slide_interval =  setInterval(custory_slide, 5000)
})