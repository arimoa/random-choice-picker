const choicesEl = document.querySelector(".choices");
const inputEl = document.getElementById("text-input");
let default_choice = document.getElementsByClassName("choice");
let active_choice = document.getElementsByClassName("active-choice");
let textlength;
let wordsList;

inputEl.addEventListener("keyup", (e) => {
  textlength = inputEl.value.length;
  if (inputEl.value[0] == ",") {
    inputEl.value = "";
    return alert("The first Character can not be ,");
  }
  if (e.key != "Enter") {
    wordsList = [];
    wordsList = inputEl.value.split(",");
    if (wordsList[wordsList.length - 1] == "") {
      wordsList.pop();
    }
    console.log(wordsList);
    choicesEl.innerHTML = "";

    createChoice(wordsList);
  } else if (e.key == "Enter") {
    let timerID = setInterval(() => {
      if (active_choice.length > 0) {
        active_choice[0].classList.remove("active-choice");
      }
      default_choice[
        Math.floor(Math.random() * default_choice.length)
      ].classList.add("active-choice");
    }, 100);
    setTimeout(() => {
      clearInterval(timerID);
      inputEl.value = "";
    }, 1500);
  }
});

function createChoice(input) {
  for (let i = 0; i < input.length; i++) {
    let choice = document.createElement("span");
    choice.classList.add("choice");
    choicesEl.appendChild(choice);
    choice.innerHTML = input[i];
  }
}
