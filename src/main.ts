const sKey = document.getElementById("key-s") as HTMLDivElement | null;
const kKey = document.getElementById("key-k") as HTMLDivElement | null;
const displayS = document.getElementById("display-s") as HTMLDivElement | null;
const displayK = document.getElementById("display-k") as HTMLDivElement | null;

// tally

let sCounter = 0;
let kCounter = 0;

function pressS(e: KeyboardEvent) {
  if (e.code === "KeyS") {
    sCounter += 1;

    displayS && (displayS.textContent = `${sCounter}`);
  }
}
function pressK(e: KeyboardEvent) {
  if (e.code === "KeyK") {
    kCounter += 1;

    displayK && (displayK.textContent = `${kCounter}`);
  }
}

window.addEventListener("keypress", pressS);
window.addEventListener("keypress", pressK);

export {};
