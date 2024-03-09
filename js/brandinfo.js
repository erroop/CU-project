$(function(){

    // BlandSlid Indicator create ======================
    const BlandSlideWrapList = $(".BlandSlideWrapList");
    const BlandSlideIndicator = $(".BlandSlideIndicator");

    let BlandSlide_html = ""

    BlandSlideWrapList.find(".BlandSlideWrapItem").each(function(i){
        BlandSlide_html +=  "<span class=index" + i + "></span>";
        BlandSlideIndicator.html(BlandSlide_html);
    });

    // first moment ===============================
    BlandSlideIndicator.find("span").eq(0).addClass("focus");

    // Indicator click ================================
    const BlandSlideWrapItem = BlandSlideWrapList.find(".BlandSlideWrapItem")
    BlandSlideWrapItem.eq(0).css({display : "block"});
    BlandSlideIndicator.find("span").click(function(){
        BlandSlideIndicator.find("span").removeClass("focus")
        $(this).addClass("focus");
        if($(this).hasClass("index0")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(0).fadeIn();
        }
        else if($(this).hasClass("index1")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(1).fadeIn();
        }
        else if($(this).hasClass("index2")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(2).fadeIn();
        }
        else if($(this).hasClass("index3")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(3).fadeIn();
        }
        else if($(this).hasClass("index4")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(4).fadeIn();
        }
        else if($(this).hasClass("index5")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(5).fadeIn();
        }
        else if($(this).hasClass("index6")){
            BlandSlideWrapItem.fadeOut();
            BlandSlideWrapItem.eq(6).fadeIn();
        }
    })
})