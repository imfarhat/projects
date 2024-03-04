let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

renderTodoList();

renderTodoList();
function renderTodoList() {
  let todoListHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
    <div class="task-flex">${name}</div>
    <div>${dueDate}</div>
    <button class= "delete-todo-btn" 
    title="Click to remove correspoing task from the list"
    onkeydown="handleKeydown(event);"
    onclick="
      todoList.splice(${i}, 1);
      updateLocalStorage();
      renderTodoList();
    ">
    Delete&nbsp;<i class="fa-solid fa-trash"></i>
    </button>
  `;
    todoListHtml += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const todoInputElement = document.querySelector(".js-todo-input");
  const name = todoInputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  let dueDate = dateInputElement.value;
  dueDate = dueDate.split("-").reverse().join("-");
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate,
  });
  todoInputElement.value = "";
  dateInputElement.value = "";
  updateLocalStorage();
  renderTodoList();
}

function updateLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
function validateInput() {
  const todoInputElement = document.querySelector(".js-todo-input");
  const name = todoInputElement.value;
  const dateInputElement = document.querySelector(".js-due-date-input");
  const success = document.querySelector(".js-error-message");

  if (todoInputElement.value === "" && dateInputElement.value === "") {
    document.querySelector(
      ".js-error-message"
    ).innerHTML = `Please enter the task & due date (if any) <i class="fa-solid fa-circle-exclamation fa-shake"></i>`;
    success.classList.remove("js-success-message");
  } else if (todoInputElement.value === "") {
    document.querySelector(
      ".js-error-message"
    ).innerHTML = `Please enter the task to do <i class="fa-solid fa-circle-exclamation fa-shake"></i>`;
    success.classList.remove("js-success-message");
  } else if (todoInputElement.value.length > 25) {
    document.querySelector(
      ".js-error-message"
    ).innerHTML = `Please enter task within 25 characters <i class="fa-solid fa-circle-exclamation fa-shake"></i>`;
    success.classList.remove("js-success-message");
  } else {
    addTodo();
    successMessage();
  }
}
function successMessage() {
  const success = document.querySelector(".js-error-message");
  success.classList.add("js-success-message");
  success.innerHTML = `Task added successfully <i class="fa-regular fa-circle-check fa-fade"></i>`;
  // Add a setTimeout to remove the text after 5 seconds
  setTimeout(function () {
    success.innerHTML = ""; // Remove the text content
    success.classList.remove("js-success-message");
  }, 2500); // 2500 milliseconds =  2.5 seconds
}
function successResetMessage() {
  const success = document.querySelector(".js-error-message");
  success.classList.add("js-success-message");
  success.innerHTML = `List cleared successfully <i class="fa-regular fa-trash-can fa-shake"></i>`;
  // Add a setTimeout to remove the text after 5 seconds
  setTimeout(function () {
    success.innerHTML = ""; // Remove the text content
    success.classList.remove("js-success-message");
  }, 2500); // 2500 milliseconds =  2.5 seconds
  todoList.splice(0, 1000);
  updateLocalStorage();
  renderTodoList();
}
function handleKeydown(event) {
  if (event.key === "Enter") {
    validateInput();
    //console.log('check event key')
  } else if (event.key === "Delete") {
    let i = 0;
    const todoObject = todoList[i];
    todoList.splice(i, 1);
    updateLocalStorage();
    renderTodoList();
  }
}

function updateISTDateTime() {
  //console.log(`Current IST Date and Time:' ${currentISTDateTime}`);
  let dateTimeElement = document.querySelector(".date-time");
  dateTimeElement.innerHTML = new Date().toUTCString();
}

// Call the updateISTDateTime function every second
setInterval(updateISTDateTime, 1000); // 1000 milliseconds = 1 second
