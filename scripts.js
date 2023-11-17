const inputBox = document.querySelector(".js-input-box");
let listContainer = document.querySelector(".js-list-container");
const message = document.querySelector(".js-message");

const addButton = document.querySelector(".js-add-new-button");

listContainer.innerHTML = JSON.parse(localStorage.getItem("taskList")); //getting from localStorage

addButton.addEventListener("click", () => {
  if (inputBox.value === "") {
    message.innerHTML = "Input field is empty";
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

function saveToLocal() {
  localStorage.setItem("taskList", JSON.stringify(listContainer.innerHTML));
}