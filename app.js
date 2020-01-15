
console.log("++++++")
// ボタンがクリックされたという情報をevに入れる
function createTodoItem(title) {
  const todoItem = document.createElement('div')
  // 新しくdivという要素を作成する。それをtodoItemとする。
  todoItem.className = 'todo-item'
  // DOMから引き出すときのために、todoItemを'todo-item'とする。classNameとしている理由は
  // やることを複数追加することができるようにするため。
  const check = document.createElement('input')
  // 新しくinputという要素を作成する。それを　checkとする。
  check.setAttribute('type', 'checkbox')
  // checkの要素のタイプをチェックボックスとする。

  const taskTitle = document.createElement('span')
  // 新しくspanという要素を作成する。それをtitleとする。
  taskTitle.innerText = input.value
  // titleのinnerTextを3行目で取得したinputのvalueとする
  taskTitle.className = 'title'
  // DOMで引き出すためにtitleを'title'とする

  todoItem.appendChild(check)
  // checkの情報をDOMに送る
  todoItem.appendChild(taskTitle)

  return todoItem
}

button.addEventListener('click', ev => {
  const todoItem = createTodoItem(input.value)
  todos.appendChild(todoItem)
})
