
$(function(){
$(".close-btn").click(function(){
    $(".right-pic").animate({
        right:"-137px"
    },1000,function(){
        $(".right-small").animate({
           right:"0px"
        },1000)
    })
})

$(".right-small").click(function(){
    $(".right-small").animate({
        right:"-54px"
    },1000,function(){
        $(".right-pic").animate({
           right:"0px"
        },1000)
    })
})

var count = 0;
$(".lun-bottom a").mouseover(
    function(){
        clearInterval(timer);
        var index = $(this).index();
        count=index;
        $(".lun-bottom a").eq(index).addClass("active").siblings().removeClass("active");
        ChangePicture(index);
       
    }).mouseout(function(){
        timer = setInterval(function(){
            count++;
            if(count>4) count=0;
            ChangePicture(count);
            console.log(count);
        },3000);
    })
    var timer = setInterval(function(){
        count++;
        if(count>4) count=0;
        ChangePicture(count);
    },3000)
    function ChangePicture(num){
        $(".lun-main").stop().animate({
            "marginLeft":-num*370+"px"
        })
        $(".lun-bottom a").eq(num).addClass("active").siblings().removeClass("active");
    }

})

