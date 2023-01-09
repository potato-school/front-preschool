const count = document.getElementById("count");
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");

let number = 0;

increaseButton.addEventListener("click", (event) => {
  if (number >= 10) {
    alert("카운트는 10을 넘을 수 없습니다.");
    return;
  }
  count.innerText = ++number;
});

decreaseButton.addEventListener("click", (event) => {
  if (number <= 0) {
    alert("카운트는 0보다 작을 수 없습니다.");
    return;
  }
  count.innerText = --number;
});
