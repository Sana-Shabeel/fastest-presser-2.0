const sKey = document.getElementById("key-s") as HTMLDivElement | null;
const kKey = document.getElementById("key-k") as HTMLDivElement | null;
const displayS = document.getElementById("display-s") as HTMLDivElement | null;
const displayK = document.getElementById("display-k") as HTMLDivElement | null;
const displayTimer = document.getElementById(
  "display-timer"
) as HTMLDivElement | null;
const startBtn = document.getElementById(
  "start-btn"
) as HTMLButtonElement | null;
const newGameBtn = document.getElementById(
  "new-game"
) as HTMLButtonElement | null;
const inputTimer = document.getElementById(
  "input-timer"
) as HTMLInputElement | null;

// tally
let sCounter = 0;
let kCounter = 0;

function pressS(e: KeyboardEvent) {
  if (e.code === "KeyS") {
    sCounter += 1;

    displayS && (displayS.textContent = `${sCounter}`);
    sKey?.classList.toggle("shadow-s");
  }
}
function pressK(e: KeyboardEvent) {
  if (e.code === "KeyK") {
    kCounter += 1;

    displayK && (displayK.textContent = `${kCounter}`);
    kKey?.classList.toggle("shadow-k");
  }
}

const startGame = (delay: string | undefined) => {
  window.addEventListener("keypress", pressS);
  window.addEventListener("keypress", pressK);

  // THE INPUT VALUE COULD BE UNDEFINED
  let delayTime = parseInt(delay || "0") * 10;

  const interval = setInterval(() => {
    displayTimer && (displayTimer.textContent = `${delayTime--}`);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    window.removeEventListener("keypress", pressS);
    window.removeEventListener("keypress", pressK);

    // remove box shadow
    kKey?.classList.remove("shadow-k");
    sKey?.classList.remove("shadow-s");

    // STYLE AND DISPLAY WINNER
    if (sCounter > kCounter) {
      displayTimer && (displayTimer.textContent = `S WINS 🎉`);
      displayTimer && (displayTimer.style.backgroundColor = "#3b82f6");
    } else if (sCounter < kCounter) {
      displayTimer && (displayTimer.textContent = `K WINS 🎉`);
      displayTimer && (displayTimer.style.backgroundColor = "#fde047");
    } else {
      displayTimer && (displayTimer.textContent = `NO ONE WINS`);
    }
  }, parseInt(delay || "0") * 1000);
};

startBtn?.addEventListener("click", () => {
  startGame(inputTimer?.value);
});

newGameBtn?.addEventListener("click", () => {
  displayTimer && (displayTimer.style.backgroundColor = "#1e293b");
  displayTimer && (displayTimer.textContent = "000");
  sCounter = 0;
  kCounter = 0;
  displayS && (displayS.textContent = `0`);
  displayK && (displayK.textContent = `0`);
});

export {};
