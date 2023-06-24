const form = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");

form.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo (event) {
	event.preventDefault();

	const titleInput = document.getElementById("title");
	const descriptionInput = document.getElementById("description");

	if (titleInput.value === "" || descriptionInput.value === "") {
		alert("Please enter a title and description.");
		return;
	}

	const todo = document.createElement("li");
	todo.innerHTML = `<span>${titleInput.value}: ${descriptionInput.value}</span>
	<button>Delete</button>`;
	todoList.appendChild(todo);

	titleInput.value = "";
	descriptionInput.value = "";
}

function deleteTodo (event) {
	if (event.target.tagName.toLowerCase() === "button") {
		event.target.parentElement.remove();
	}
}
