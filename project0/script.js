const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");

let listElement = [];

function addTodo() {
  let todoText = prompt("Add new todo");
  if (todoText != null) {
    const todo = {
      id: listElement.length + 1,
      content: todoText,
      checked: false,
    };

    listElement.push(todo);
    return render();
  }
}

function renderTodo(todo) {
  const liElement = document.createElement("li");
  let todoChecked = "";
  if (todo.checked) {
    todoChecked = "checked";
  }

  liElement.innerHTML =
    `
  <input type="checkbox" onChange="toggleTodo(` +
    todo.id +
    `)" ` +
    todoChecked +
    `>
  <span>` +
    todo.content +
    `</span> 
  <button onClick="deleteTodo(` +
    todo.id +
    `)">delete</button>`;
  return liElement;
}

function deleteTodo(id) {
  listElement = listElement.filter((todo) => todo.id !== id);
  return render();
}

function render() {
  list.innerHTML = "";
  listElement.map(renderTodo).forEach((todo) => list.appendChild(todo));
  itemCountSpan.innerHTML = listElement.length;
  uncheckedCountSpan.innerHTML = listElement.filter(
    (todo) => todo.checked === false
  ).length;
}

function toggleTodo(id) {
  listElement.forEach((todo) => {
    if (todo.id === id) {
      todo.checked = !todo.checked;
    }
  });
  return render();
}
