import { saveToLocal, showList } from "./localData.js"

import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const inputBox = document.querySelector(".js-input-box");
export let listContainer = document.querySelector(".js-list-container");
const message = document.querySelector(".js-message");
const dateInput = document.querySelector(".js-date-input");

const addButton = document.querySelector(".js-add-new-button");

showList(); // display the previous list data after loading the page.

addButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    message.innerHTML = "Input field is empty";
    message.classList.add("message");
  } else if (dateInput.value === "") {
    message.innerHTML = "Date field is empty";
    message.classList.add("message");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    const div = document.createElement("div");
    const dateValue = dayjs(dateInput.value).format("D-MM-YYYY"); //formating date input value
    div.innerHTML = dateValue;
    li.appendChild(div); //adding date input into li
    dateInput.value = "";

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span); //adding close into li

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


dateInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inputBox.value === "") {
      message.innerHTML = "Input field is empty";
      message.classList.add("message");
    } else if (dateInput.value === "") {
      message.innerHTML = "Date field is empty";
      message.classList.add("message");
    } else {
      const li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);

      const div = document.createElement("div");
      const dateValue = dayjs(dateInput.value).format("D-MM-YYYY"); //formating date input value
      div.innerHTML = dateValue;
      li.appendChild(div); //adding date input into li
      dateInput.value = "";

      const span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span); //adding close into li

      inputBox.value = "";
      message.innerHTML = "";

    }
    saveToLocal(); //saving to loacal Storage
  }
})