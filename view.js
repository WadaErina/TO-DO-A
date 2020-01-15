document.getElementById('btn-add-task').addEventListener('click', ev => {
  const todos = document.getElementById('todos')
  // todosというdivの要素をtodosに取得する。
  const input = document.getElementById('new-task')

  const todoItem = createTodoItem(input.value)
  todos.appendChild(todoItem)
})
