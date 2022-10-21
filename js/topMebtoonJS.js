var a = $('#synopsis0')
var b = $('#synopsis1')
var c = $('#synopsis2')
var d = $('#synopsis3')
var e = $('#synopsis4')

$("#synopsisBtn0").click(
    ()=>{
        a.slideToggle()
    }
)

$("#synopsisBtn").click(
    ()=>{
        b.slideToggle()
    }
)

$("#synopsisBtn2").click(
    ()=>{
        c.slideToggle()
    }
)

$("#synopsisBtn3").click(
    ()=>{
        d.slideToggle()
    }
)

$("#synopsisBtn4").click(
    ()=>{
        e.slideToggle()
    }
)



function hideShowSynopsis0(){
    var btn1 = document.getElementById("synopsisBtn0");

        if(btn1.innerHTML === 'Show Synopsis'){
            btn1.innerHTML = 'Hide Synopsis';
        }
        else{
            btn1.innerHTML = 'Show Synopsis';
        }
}

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