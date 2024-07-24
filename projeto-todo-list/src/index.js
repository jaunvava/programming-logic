// Elementos

const form = document.querySelector("#todo-form");
const textTitleInput = document.querySelector("#task-title-input");
// const addBotaoTask=document.querySelector('#add-botao-task')
const todoListUl = document.querySelector("#todo-list-ul");

let tasks = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = textTitleInput.value;

  if (taskTitle.legth < 3) {
    alert("Sua tarefa precisa ter, pelo menos, 3 caracteres.");
    return;
  }

  // adicionando novas tarefas detro do array de tasks
  tasks.push(taskTitle);
  // adicionando nova tarefa no html
  todoListUl.appendChild()
});
