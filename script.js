const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");
const welcome = document.getElementById("welcome");
const floating = document.getElementById("floatingNames");

// Floating "Talha"

for (let i = 0; i < 60; i++) {

    const text = document.createElement("span");

    text.innerText = "Talha";

    text.style.position = "absolute";

    text.style.left = Math.random() * 100 + "%";

    text.style.top = Math.random() * 100 + "%";

    text.style.fontSize = (15 + Math.random() * 35) + "px";

    text.style.color = "rgba(255,255,255,.18)";

    text.style.fontWeight = "bold";

    text.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    text.style.animation =
        `move${i} ${10 + Math.random() * 15}s linear infinite`;

    const style = document.createElement("style");

    style.innerHTML = `
    @keyframes move${i}{

        0%{
            transform:
            translate(0,0)
            rotate(0deg);
        }

        50%{
            transform:
            translate(
            ${Math.random()*300-150}px,
            ${Math.random()*300-150}px)
            rotate(180deg);
        }

        100%{
            transform:
            translate(0,0)
            rotate(360deg);
        }

    }`;

    document.head.appendChild(style);

    floating.appendChild(text);

}

// Start Button

startBtn.addEventListener("click", () => {

    music.play();

    welcome.style.display = "none";

});
