$(window).scroll(function() {
    var $window = $(window);

    var scroll = $window.scrollTop() + ($window.height() / 3);
    // console.log(scroll);

    if(parseInt(scroll) > 800 && parseInt(scroll) < 2510){
        document.querySelector('.vtNavBar').style.backgroundColor = "rgb(24, 23, 23)";
    } else if(parseInt(scroll)> 2510 && parseInt(scroll) < 6065) {
        document.querySelector('.vtNavBar').style.backgroundColor = "black";
    }else if(parseInt(scroll)> 6065){
        document.querySelector('.vtNavBar').style.backgroundColor = "rgb(24, 23, 23)";
    }
     else{
        document.querySelector('.vtNavBar').style.backgroundColor = "black";
    }

});


function eventDesignA() {
    document.getElementById("dsgXS").style.height = "100px";
} 

function eventDesignAout() {
    document.getElementById("dsgXS").style.height = "5px";
}

function eventDesignB() {
    document.getElementById("dsgMS").style.height = "100px";
}

function eventDesignBout() {
    document.getElementById("dsgMS").style.height = "5px";
}

function eventDesignC() {
    document.getElementById("dsgCI").style.height = "100px";
} 

function eventDesignCout() {
    document.getElementById("dsgCI").style.height = "5px";
}
