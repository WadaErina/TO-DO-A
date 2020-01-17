document.getElementById('btn-add-task').addEventListener('click', ev => {
  debugger;
  // 新しいタスクを作成
  createTodoItem(document.getElementById('new-task').value)
  // // todosというdivの要素をtodosに取得する。
  // const todos = document.getElementById('todos')
  //
  // const newItem = createTodoItem(input.value)
  // todos.appendChild(newItem)
})

document.getElementById('uncompleted-tasks').addEventListener('click', ev => {
  hideTasks()
  // window.tasks から チェックが外れているデータだけを抽出
  // して、それをshowTasksすればおｋ
  // ※ showTasks は少し修正しないと↑ができないかも
  
  return
  // todosというdivの要素をtodosに取得
  const todos = document.getElementById('todos')
  // tasksのデータを呼び出す
  const tasks = takeTasks()

  for(var i = 0; i<tasks.length;i++){
    task = tasks[i]
    const checkbox = tasks[i].completed

    const todoItem = createTodoItem(tasks[i].task)
    console.log(todoItem)
    todos.appendChild(task)
  }
})

const hideTasks = () => {
  // 最初に出ているすべての要素のデータを消す
  document.getElementById('todos').innerHTML = ''
}

const showTasks = () => {
  window.tasks.forEach((task) => {
    // const input = document.getElementById('new-task')
    // // new-taskというidを持つ要素をinputに取得する

    const todoItem = document.createElement('div')

    // 新しくdivという要素を作成する。それをtodoItemとする。
    todoItem.className = 'todo-item'
    // DOMから引き出すときのために、todoItemを'todo-item'とする。classNameとしている理由は
    // やることを複数追加することができるようにするため。
    const check = document.createElement('input')
    // 新しくinputという要素を作成する。それを　checkとする。
    check.setAttribute('type', 'checkbox')
    // checkの要素のタイプをチェックボックスとする。
    check.addEventListener('click', checked)

    check.checked = task.completed

    const taskTitle = document.createElement('span')
    // 新しくspanという要素を作成する。それをtitleとする。
    taskTitle.innerText = task.task
    // titleのinnerTextを3行目で取得したinputのvalueとする
    taskTitle.className = 'title'
    // DOMで引き出すためにtitleを'title'とする

    //

    todoItem.appendChild(check)
    // checkの情報をDOMに送る
    todoItem.appendChild(taskTitle)

    document.getElementById('todos').appendChild(todoItem)
  })
}
