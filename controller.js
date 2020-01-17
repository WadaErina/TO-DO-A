function createTodoItem(title) {
  // tasks と localStorage に新しくデータを追加
  addTask(title)

  // localStorage にある Tasks をすべて取得
  window.tasks = takeTasks()
  hideTasks()

  showTasks()

  // return todoItem
}
