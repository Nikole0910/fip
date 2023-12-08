window.onload = main;

let idx = 1;

function main() {
    document.querySelector("#prev").onclick = prevPhoto;
    document.querySelector("#next").onclick = nextPhoto;
}

function prevPhoto() {
    if(idx == 1) {
        idx = 7;
    } else {
        idx--;
    }

    document.getElementById("menu").src = "images/cho_sooa_mob_" + idx + ".png"; 
}

function nextPhoto() {
    if(idx == 7) {
        idx = 1;
    } else {
        idx++;
    }

    document.getElementById("menu").src = "images/cho_sooa_mob_" + idx + ".png"; 
