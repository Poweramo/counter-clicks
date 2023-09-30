const clickArea = document.querySelector(".box");
const cps = document.querySelector("h3");
let i = 0.1;

clickArea.addEventListener("click", () => {
  cps.innerHTML = `CPS : ${i.toFixed(1)}`;
  i += 0.1;
});
