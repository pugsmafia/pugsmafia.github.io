var i = 0;

function loopImages() {
    var t = setInterval(runFunction, 350);
}

function runFunction() {
    let images = 
    [
        "images/loopimg1.jpeg",
        "images/loopimg2.jpeg",
        "images/loopimg3.jpeg",
        "images/loopimg4.jpeg"
    ];
    if(i == 4) i = 0;
    document.getElementById('loopimg').src = images[i];
    i++;
}


function showSpug() { 
    document.getElementById("primg").src = 'images/showSpug.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #ffc71f)';
} 

function showApug() { 
    document.getElementById("primg").src = 'images/showApug.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #1f5fff)';
} 

function showBpug() { 
    document.getElementById("primg").src = 'images/showBpug.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #1fff79)';
} 

function showCpug() { 
    document.getElementById("primg").src = 'images/showCpug.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #ff501f)';
} 

function showDpug() { 
    document.getElementById("primg").src = 'images/showDpug.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #6c6c6c)';
} 

function showSgun() { 
    document.getElementById("primg2").src = 'images/showSgun.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #ffc71f)';
} 

function showAgun() { 
    document.getElementById("primg2").src = 'images/showAgun.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #1f5fff)';
} 

function showBgun() { 
    document.getElementById("primg2").src = 'images/showBgun.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #1fff79)';
} 

function showCgun() { 
    document.getElementById("primg2").src = 'images/showCgun.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #ff501f)';
} 

function showDgun() { 
    document.getElementById("primg2").src = 'images/showDgun.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #6c6c6c)';
} 

function upNDown() {
    var now = Date.now();
    var m1 = 10*(Math.cos(now * (1/750)));
    document.getElementsByClassName("bsimg")[0].style.transform = "translate(0, "+ m1 +"px)";
    //document.getElementsByClassName("pug-ranks")[0].style.transform = "translate(0, "+ 10*(Math.cos(now * (1/750))) +"px)";
    //document.getElementsByClassName("bsimg")[0].style.transform = "translate(0, "+ 10*(Math.sin(now * (1/750))) +"px)";
    document.getElementById("chart").style.transform = "translate(0, "+ 10*(Math.sin(now * (1/750))) +"px)";
}

function doUpAndDown() {
    setInterval(upNDown, 1);
}

doUpAndDown();

loopImages();
