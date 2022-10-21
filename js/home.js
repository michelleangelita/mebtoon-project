// HOME

$(".navigation-menu").on("click", function(){
    if ($(".dropdown-menu").css("display") == "flex") {
        $(".dropdown-menu").css("display","none");
    }
    else
    {
        $(".dropdown-menu").css("display","flex");
    }
})

var x = 0;

function dotClick(value) {
        if (value == 1)  {
            x=0;
        }
        else if (value == 2) {
            x=100;
        }
        else if (value == 3) {
            x=200;
        }  
        else if (value == 4) {
            x=300;
        }
        else {
            x=400;
        }
        $(".image-slider-item").css('right', x+'%')
    }

$(".dot-1").click(function() {
    $(".dot-1").css("backgroundColor","rgb(64, 64, 64)")
    $(".dot-2").css("backgroundColor","#bbb")
    $(".dot-3").css("backgroundColor","#bbb")
    $(".dot-4").css("backgroundColor","#bbb")
    $(".dot-5").css("backgroundColor","#bbb")
})

$(".dot-2").click(function() {
    $(".dot-1").css("backgroundColor","#bbb")
    $(".dot-2").css("backgroundColor","rgb(64, 64, 64)")
    $(".dot-3").css("backgroundColor","#bbb")
    $(".dot-4").css("backgroundColor","#bbb")
    $(".dot-5").css("backgroundColor","#bbb")
})

$(".dot-3").click(function() {
    $(".dot-1").css("backgroundColor","#bbb")
    $(".dot-2").css("backgroundColor","#bbb")
    $(".dot-3").css("backgroundColor","rgb(64, 64, 64)")
    $(".dot-4").css("backgroundColor","#bbb")
    $(".dot-5").css("backgroundColor","#bbb")
})

$(".dot-4").click(function() {
    $(".dot-1").css("backgroundColor","#bbb")
    $(".dot-2").css("backgroundColor","#bbb")
    $(".dot-3").css("backgroundColor","#bbb")
    $(".dot-4").css("backgroundColor","rgb(64, 64, 64)")
    $(".dot-5").css("backgroundColor","#bbb")
})

$(".dot-5").click(function() {
    $(".dot-1").css("backgroundColor","#bbb")
    $(".dot-2").css("backgroundColor","#bbb")
    $(".dot-3").css("backgroundColor","#bbb")
    $(".dot-4").css("backgroundColor","#bbb")
    $(".dot-5").css("backgroundColor","rgb(64, 64, 64)")
})


