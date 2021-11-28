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

loopImages();
