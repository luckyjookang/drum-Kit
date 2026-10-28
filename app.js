// alert("test");
const btns = document.querySelectorAll(".drum");

function handclick(event) {
  event.target.style.color = "white";
  let text = event.target.textContent;
  soundDrum(text);
  animationDrum(text);
}

function handlekey(event) {
  let text = event.key;
  soundDrum(text);
  animationDrum(text);
}

function soundDrum(text) {
  if (text == "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (text == "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (text == "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (text == "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (text == "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (text == "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (text == "l") {
    const audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

function animationDrum(text) {
  const btn = document.querySelector("." + text);
  if (btn !== null) {
    btn.classList.add("pressed");
    setTimeout(() => {
      btn.classList.remove("pressed");
    }, 200);
  }
}

btns.forEach((btn) => {
  btn.addEventListener("click", handclick);
});

document.addEventListener("keydown", handlekey);
