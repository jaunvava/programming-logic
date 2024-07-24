// Elementos

const form = document.querySelector("#todo-form");
const textTitleInput = document.querySelector("#task-title-input");
// const addBotaoTask=document.querySelector('#add-botao-task')
const todoListUl = document.querySelector("#todo-list-ul");
// array 01
let tasks = [];

// código
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
  const li = document.createElement("li");

  const input = document.childElement("input");
  input.setAttribute("type", "checkbox");

  const span = document.createElement("span");
  span.textContent = taskTitle;

  const button = document.createElement("button");
  button.textContent = "Remover";

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
  textTitleInput.value = "";
});
