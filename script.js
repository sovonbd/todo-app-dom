document.getElementById("addTask").addEventListener("click", function (event) {
  const newTaskField = document.getElementById("new-task");
  const li = document.createElement("li");
  const incompleteTasks = document.getElementById("items");

  event.preventDefault();
  li.classList.add("item");
  li.innerHTML = `<input type="checkbox" /> ${newTaskField.value}`;
  incompleteTasks.appendChild(li);
});

document.querySelector("#items").addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    const item = event.target.parentNode;
    const completeTask = document.getElementById("complete-task");
    const li = document.createElement("li");
    li.classList.add("item");
    li.innerText = item.innerText;
    li.style.listStyle = "none";
    li.innerHTML = `${item.innerText} <button class="delete">Delete</button>`;
    completeTask.appendChild(li);

    item.remove();
  }
});

document.getElementById("complete-task").addEventListener("click", function (event) {
  if (event.target.className === "delete") {
    event.target.parentNode.remove();
  }
});