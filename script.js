const text = "Hi, cutie!";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}

typeWriter();

function showLove() {
  document.getElementById("message").innerText =
    "Happy Valentine’s Day 💕";
}

// floating hearts
setInterval(() => {
  let heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = "24px";
  document.body.appendChild(heart);

  let move = setInterval(() => {
    heart.style.top = parseFloat(heart.style.top) - 1 + "vh";
  }, 30);

  setTimeout(() => {
    heart.remove();
    clearInterval(move);
  }, 4000);
}, 300);