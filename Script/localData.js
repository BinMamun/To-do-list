import { listContainer } from "./scripts.js";

export function saveToLocal() {
  localStorage.setItem("taskList", listContainer.innerHTML);
}

export function showList() {
  listContainer.innerHTML = localStorage.getItem("taskList"); //getting data from localStorage
}