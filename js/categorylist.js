var a = $('#synopsis1')
var b = $('#synopsis2')
var c = $('#synopsis3')
var d = $('#synopsis4')

$("#synopsisBtn").click(
    ()=>{
        a.slideToggle()
    }
)

$("#synopsisBtn2").click(
    ()=>{
        b.slideToggle()
    }
)

$("#synopsisBtn3").click(
    ()=>{
        c.slideToggle()
    }
)

$("#synopsisBtn4").click(
    ()=>{
        d.slideToggle()
    }
)

function hideShowSynopsis1(){
    var btn1 = document.getElementById("synopsisBtn");

        if(btn1.innerHTML === 'Show Synopsis'){
            btn1.innerHTML = 'Hide Synopsis';
        }
        else{
            btn1.innerHTML = 'Show Synopsis';
        }
}

function hideShowSynopsis2(){
    var btn1 = document.getElementById("synopsisBtn2");

        if(btn1.innerHTML === 'Show Synopsis'){
            btn1.innerHTML = 'Hide Synopsis';
        }
        else{
            btn1.innerHTML = 'Show Synopsis';
        }
}

function hideShowSynopsis3(){
    var btn1 = document.getElementById("synopsisBtn3");

        if(btn1.innerHTML === 'Show Synopsis'){
            btn1.innerHTML = 'Hide Synopsis';
        }
        else{
            btn1.innerHTML = 'Show Synopsis';
        }
}

function hideShowSynopsis4(){
    var btn1 = document.getElementById("synopsisBtn4");

        if(btn1.innerHTML === 'Show Synopsis'){
            btn1.innerHTML = 'Hide Synopsis';
        }
        else{
            btn1.innerHTML = 'Show Synopsis';
        }
}