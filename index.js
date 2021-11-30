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


function showSRank() { 
    document.getElementById("pug-photo").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894175160401950/The_Pug_Mafi.png';
} 

function showARank() { 
    document.getElementById("pug-photo").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894174917103657/The_Pug_Mafi.png';
} 

function showBRank() { 
    document.getElementById("pug-photo").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894174636109844/The_Pug_Mafi.png';
} 

function showCRank() { 
    document.getElementById("pug-photo").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894173981769779/20684A90-CCCB-48EA-BC37-00846566B777.png';
} 

function showDRank() { 
    document.getElementById("pug-photo").src = 'https://cdn.discordapp.com/attachments/912012302830694410/914894173696589896/A8E50004-31D1-4E22-9215-DD612E112D9F.png';
} 

function upNDown() {
    document.getElementsByClassName("bsimg")[0].style.transform = "translate(0, "+ 10*(Math.sin(Date.now() * (1/500))) +"px)";
}

function doUpAndDown() {
    setInterval(upNDown, 1);
}

doUpAndDown();

loopImages();
