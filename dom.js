const hone = document.querySelector("h1");
// const circle = document.querySelector(".circle");

// document.querySelector("h1").innerHTML = "this is new inner HTML";

// hone.innerHTML = "this is circle";

// circle.style.width = "500px";
// document.querySelector("h1").style.backgroundColor = "gray";
// document.querySelector("h1").style.color = "black";
// circle.style.borderRadius = "100px";
// circle.style.color = "green";

const btn = document.querySelector("button");
const circle = document.querySelector(".circle");
btn.addEventListener("click", () => {
  if (btn.innerHTML === "ON") {
    circle.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
  } else if (btn.innerHTML === "OFF") {
    circle.style.backgroundColor = "transparent";
    btn.innerHTML = "ON";
  }
});
