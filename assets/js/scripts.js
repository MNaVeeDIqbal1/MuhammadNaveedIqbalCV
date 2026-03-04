document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("block-container");
    
    for (let i = 0; i < 25; i++) {
        const b = document.createElement("div");
        b.className = "pixel-block";

        const size = Math.floor(Math.random() * 40) + 20 + "px";
        const left = Math.random() * 100 + "%";
        const duration = Math.random() * 35 + 25 + "s";
        const delay = -(Math.random() * 60) + "s";
        const startY = Math.random() * 100;

        b.style.setProperty("--size", size);
        b.style.left = left;
        b.style.setProperty("--duration", duration);
        b.style.animationDelay = delay;
        b.style.setProperty("--start-y", startY + "vh");
        b.style.opacity = 0.4 + Math.random() * 0.6;

        container.appendChild(b);
    }
});