// função que adiciona tarefa
function addTask() {
  // título da tarefa
  const taskTitle = document.querySelector("#task-title").value;
}

if (taskTitle) {
  // clone template
  const template = document.querySelector(".template");

  const newTask = template.cloneNode(true);
  // adiciona título
  newTask.querySelector(".task-title").textContent = taskTitle;
  // remover as classes desnecessárias
  newTask.classList.remove("template");
  newTask.classList.remove("hide");

  // adiciona tarefa na lista
  const list = document.querySelector("#task-list");
}

// evento de adicinar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  addTask();
});