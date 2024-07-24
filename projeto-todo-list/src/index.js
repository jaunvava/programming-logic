// Elementos

const form = document.querySelector("#todo-form");
const textTitleInput = document.querySelector("#task-title-input");
// const addBotaoTask=document.querySelector('#add-botao-task')
const todoListUl = document.querySelector("#todo-list-ul");
// array 01
let tasks = [];

// function que add o html na pagina
function rendertaskOnHtml(taskTitle, done = false) {
  // adicionando nova tarefa no html ||
  const li = document.createElement("li");

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.addEventListener("change", (event) => {
    const liToToggle = event.target.parentElement;

    const spanToToggle = liToToggle.querySelector("span");

    const done = event.target.checked;
    if (done) {
      spanToToggle.style.textDecoration = "line-through";
    } else {
      spanToToggle.style.textDecoration = "none";
    }

    tasks = tasks.map((t) => {
      if (t.title === spanToToggle.textContent) {
        return {
          title: t.title,
          done: !t.done,
        };
      }

      return t;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  input.checked = done;

  const span = document.createElement("span");
  span.textContent = taskTitle;

  if (done) {
    span.style.textDecoration = "line-through";
  }

  const button = document.createElement("button");
  button.textContent = "Remover";
  button.addEventListener("click", (event) => {
    const liToRemove = event.target.parentElement;

    const titleToRemore = liToRemove.querySelector("span").textContent; //tarefa 1

    tasks = tasks.filter((t) => t.title !== titleToRemore);

    todoListUl.removeChild(liToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // console.log(tasks);
  });

  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);

  todoListUl.appendChild(li);
  // adicionando nova tarefa no html ||
}

window.onload = () => {
  const taskOnLocalStorage = localStorage.getItem("tasks");
  if (!taskOnLocalStorage) return;
  tasks = JSON.parse(taskOnLocalStorage);

  tasks.forEach((t) => {
    rendertaskOnHtml(t.title, t.done);
  });
  // console.log(taskOnLocalStorage);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTitle = textTitleInput.value;

  if (taskTitle.legth < 3) {
    alert("Sua tarefa precisa ter, pelo menos, 3 caracteres.");
    return;
  }

  // adicionando novas tarefas detro do array de tasks
  tasks.push({
    title: taskTitle,
    done: false,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // chamando a function do html
  rendertaskOnHtml(taskTitle);

  textTitleInput.value = "";
});
