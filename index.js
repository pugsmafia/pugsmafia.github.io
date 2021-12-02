var i = 0;

function loopImages() {
    var t = setInterval(runFunction, 350);
}

function runFunction() {
    let images = 
    [
        "https://media.discordapp.net/attachments/912012302830694410/914610969412509696/WhatsApp_Image_2021-10-09_at_18.18.57.jpeg?width=701&height=701",
        "https://media.discordapp.net/attachments/912012302830694410/914610969664180224/WhatsApp_Image_2021-10-09_at_18.14.45_1.jpeg?width=701&height=701",
        "https://media.discordapp.net/attachments/912012302830694410/914610969961971792/WhatsApp_Image_2021-10-09_at_18.14.45.jpeg?width=701&height=701",
        "https://media.discordapp.net/attachments/912012302830694410/914610970201034792/WhatsApp_Image_2021-10-09_at_18.14.43.jpeg?width=701&height=701"
    ];
    if(i == 4) i = 0
    document.getElementById('loopimg').src = images[i];
    i++;
}


function showSpug() { 
    document.getElementById("primg").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894175160401950/The_Pug_Mafi.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #ffc71f)';
} 

function showApug() { 
    document.getElementById("primg").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894174917103657/The_Pug_Mafi.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #1f5fff)';
} 

function showBpug() { 
    document.getElementById("primg").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894174636109844/The_Pug_Mafi.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #1fff79)';
} 

function showCpug() { 
    document.getElementById("primg").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894173981769779/20684A90-CCCB-48EA-BC37-00846566B777.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #ff501f)';
} 

function showDpug() { 
    document.getElementById("primg").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894173696589896/A8E50004-31D1-4E22-9215-DD612E112D9F.png';
    document.getElementsByClassName("pug-ranks")[0].style.filter = 'drop-shadow(0 0 0.3rem #6c6c6c)';
} 

function showSgun() { 
    document.getElementById("primg2").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894265480527932/C4E7CAF4-9BA2-414F-B564-020D4AC57C39.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #ffc71f)';
} 

function showAgun() { 
    document.getElementById("primg2").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894265832865823/The_Pug_Mafi.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #1f5fff)';
} 

function showBgun() { 
    document.getElementById("primg2").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894266159988756/The_Pug_Mafi.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #1fff79)';
} 

function showCgun() { 
    document.getElementById("primg2").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894266445217843/The_Pug_Mafi.png';
    document.getElementsByClassName("weapons")[0].style.filter = 'drop-shadow(0 0 0.3rem #ff501f)';
} 

function showDgun() { 
    document.getElementById("primg2").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894266696871947/The_Pug_Mafi.png';
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
