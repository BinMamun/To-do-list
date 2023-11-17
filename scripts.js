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
    inputBox.value = "";
    message.innerHTML = "";
    //saveToLocal(); //saving to loacal Storage
  }
})

inputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (inputBox.value === "") {
      message.innerHTML = "Input field is empty";
    }
    else {
      const li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      inputBox.value = "";
      message.innerHTML = "";
      //saveToLocal(); //saving to loacal Storage
    }
  }
})

function saveToLocal() {
  localStorage.setItem("taskList", JSON.stringify(listContainer.innerHTML));
}