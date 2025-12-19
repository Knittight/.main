function tight() {
    // sound
    const sound = document.getElementById("confetti-sound");
    sound.currentTime = 0;
    sound.play();

    // canvas setup
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#22ee55", "#000000"];
    const pieces = [];

    for (let i = 0; i < 120; i++) {
        pieces.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: Math.random() * 6 + 3,
            vx: (Math.random() - 0.5) * 12,
            vy: Math.random() * -14 - 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 100
        });
        // to the gh repo
        setTimeout(() => {
            window.location.href = "https://github.com/Knittight";
        }, 1500);
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {
            p.vy += 0.4; // gravity
            p.x += p.vx;
            p.y += p.vy;
            p.life--;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        if (pieces.some(p => p.life > 0)) {
            requestAnimationFrame(update);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    update();
}