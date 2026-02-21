function goYes(){
    window.location.href = "gift.html";
}

function goNo(){
    window.location.href = "no.html";
}


const messages = {
    1: "You are as beautiful as this flower, but unlike the petals, your beauty never fades.",
    2: "I chose a sunflower because it always turns toward the light—just like I’m always drawn to you.",
    3: "This sunflower is bright, but it’s still not as radiant as your smile.",
    4: "You’re like sunshine in human form; you make everything around you brighter just by being there.",
    5: "Every stitch in this flower was made with care, just like every memory I have of you is special to me.",
    6: "Just like this crochet flower, my feelings for you are handmade, unique, and built to last forever.",
    7: "I wanted to give you a flower that stays as perfect as you are every single day.",
    8: "In a world full of roses, you’re my sunflower—bold, bright, and one of a kind.",
    9: "You have a heart of gold, just like the center of this flower.",
    10: "Giving you this is my way of saying thank you for being the 'sun' in my life."
};

function showMessage(number) {
    document.getElementById("messageText").innerText = messages[number];
    document.getElementById("messageBox").style.display = "block";
}

function closeMessage() {
    document.getElementById("messageBox").style.display = "none";
}



// 10 second countdown
let timeLeft = 0;
let countdownEl = document.getElementById("countdown");

let timer = setInterval(function () {
    countdownEl.innerHTML = "Celebration starts in: " + timeLeft + " 🎉";

    if (timeLeft <= 0) {
        clearInterval(timer);
        countdownEl.innerHTML = "🎊 TIME TO CELEBRATE! 🎊";
        startCelebration();
    }

    timeLeft--;
}, 1000);


function startCelebration() {

    let celebration = document.getElementById("celebration");
    celebration.style.display = "block";

    let emojis = ["🎉","🎊","✨","💥","❤️","🎈","🥳","🌟"];

    for (let i = 0; i < 300; i++) {   // 🔥 300 poppers!
        let popper = document.createElement("div");
        popper.classList.add("popper");

        popper.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        popper.style.left = Math.random() * 100 + "vw";
        popper.style.top = Math.random() * -100 + "px";
        popper.style.fontSize = (20 + Math.random() * 30) + "px";
        popper.style.animationDuration = (2 + Math.random() * 3) + "s";

        celebration.appendChild(popper);
    }

    // Stop after 4 seconds
    setTimeout(() => {
        celebration.style.display = "none";
        celebration.innerHTML = "";
    }, 4000);
}