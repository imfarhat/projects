   /*let todoList = [{
  name: 'Type the event/goal name',
  dueDate: 'Select the due date'
},
{
  name: 'Go to college',
  dueDate: '15-10-2023'
}
];*/

let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

renderTodoList();
function renderTodoList() {
  let todoListHtml = '';
  for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;    
  const {name,dueDate} = todoObject;
  const html = `
    <div>${name}</div>
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
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

function addTodo() {
  const todoInputElement = document.querySelector('.js-todo-input');
  const name = todoInputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  let dueDate = dateInputElement.value;
  dueDate = dueDate.split("-").reverse().join("-");
  todoList.push({
    //name: name,
    //dueDate: dueDate
    name,
    dueDate
  });
  todoInputElement.value = '';
  dateInputElement.value = '';
  updateLocalStorage();
  renderTodoList();
}

function updateLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
function validateInput() {
  const todoInputElement = document.querySelector('.js-todo-input');
  const name = todoInputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const success = document.querySelector('.js-error-message');

  if (todoInputElement.value === '' && dateInputElement.value === '' ) {
    document.querySelector('.js-error-message').innerHTML = `Please enter the task & due date (if any) <i class="fa-solid fa-circle-exclamation fa-shake"></i>`;
    success.classList.remove('js-success-message');
  }
  else if (todoInputElement.value === '') {
    document.querySelector('.js-error-message').innerHTML = `Please enter the task to do <i class="fa-solid fa-circle-exclamation fa-shake"></i>`;
    success.classList.remove('js-success-message');
  }
  else if(dateInputElement.value === '') {
    document.querySelector('.js-error-message').innerHTML = `Please select a due date <i class="fa-solid fa-circle-exclamation fa-shake"></i>`;
    success.classList.remove('js-success-message');
    addTodo();
    successMessage();
  }
  else {
    addTodo();
    successMessage();
  }
}
function successMessage() {
  const success = document.querySelector('.js-error-message');
  success.classList.add('js-success-message');
  success.innerHTML = `Task added successfully <i class="fa-regular fa-circle-check fa-fade"></i>`;
    // Add a setTimeout to remove the text after 5 seconds
  setTimeout(function () {
  success.innerHTML = ''; // Remove the text content
  success.classList.remove('js-success-message');
  }, 2500); // 2500 milliseconds =  2.5 seconds
}
function successResetMessage() {
  const success = document.querySelector('.js-error-message');
  success.classList.add('js-success-message');
  success.innerHTML = `List cleared successfully <i class="fa-regular fa-trash-can fa-shake"></i>`;
    // Add a setTimeout to remove the text after 5 seconds
  setTimeout(function () {
  success.innerHTML = ''; // Remove the text content
  success.classList.remove('js-success-message');
  }, 2500); // 2500 milliseconds =  2.5 seconds
  todoList.splice(0, 1000);
  updateLocalStorage();
  renderTodoList();
}
function handleKeydown(event) {
  if (event.key === 'Enter') {
    validateInput();
    //console.log('check event key')
  }
  else if (event.key === 'Delete') {
  let i = 0;
  const todoObject = todoList[i];
  todoList.splice(i, 1);
  updateLocalStorage();
  renderTodoList();
  }
}

function getCurrentISTDateTime() {
  const options = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const istDateTime = new Date().toLocaleString('en-US', options);
  const istDate = new Date().toLocaleDateString('en-US', options);
  return istDateTime, istDate;
}

function updateISTDateTime() {
  const currentISTDateTime = getCurrentISTDateTime();
  //console.log(`Current IST Date and Time:' ${currentISTDateTime}`);
  let dateTimeElement = document.querySelector('.date-time');
  dateTimeElement.innerHTML = `${currentISTDateTime}`;
}

// Call the updateISTDateTime function every second
setInterval(updateISTDateTime, 1000); // 1000 milliseconds = 1 second

/*Putting date as per IST in input value for user's convinience*/ /*
function updateISTDate() {
  const dateInput = document.getElementById('dateInput');
  
  // Create a new Date object for the current IST time
  const currentDate = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds (5 hours 30 minutes)
  const istTime = new Date(currentDate.getTime() + istOffset);

  // Format the IST date to a string compatible with date input
  const formattedISTDate = istTime.toISOString().split('T')[0]; // "yyyy-mm-dd"

  // Set the value of the date input element to the current IST date
  dateInput.value = formattedISTDate;
}

// Call the updateISTDate function every second
setInterval(updateISTDate, 60000); // 60000 milliseconds = 60 second

// Initialize the date input with the current IST date when the page loads
updateISTDate();*/
