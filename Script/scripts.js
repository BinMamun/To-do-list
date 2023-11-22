import { saveToLocal, showList } from "./localData.js"

const inputBox = document.querySelector(".js-input-box");
export let listContainer = document.querySelector(".js-list-container");
const message = document.querySelector(".js-message");

const addButton = document.querySelector(".js-add-new-button");

showList(); // display the previous list data after loading the page.

addButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    message.innerHTML = "Input field is empty";
    message.classList.add("message");
  }
  else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    inputBox.value = "";
    message.innerHTML = "";
    saveToLocal(); //saving to loacal Storage
  }
})

listContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  } else if (event.target.tagName === "SPAN") {
    event.target.parentElement.remove();
  }
  saveToLocal(); //saving to loacal Storage
}, false);



inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inputBox.value === "") {
      message.innerHTML = "Input field is empty";
      message.classList.add("message");
    }
    else {
      const li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      const span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      inputBox.value = "";
      message.innerHTML = "";
    }
    saveToLocal(); //saving to loacal Storage
  }
})

