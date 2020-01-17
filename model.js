const addTask = (title) => {
  const task = {
    task: title,
    completed: false
  }
  //JSON.parse(task)
  window.tasks.push(task)
  // データを登録する関数(tasks)
  registerTasks(window.tasks)
}

// ページの読み込みが完了したら tasks を window に登録する関数
window.onload = () => window.tasks = []


// localStorage と Tasks にデータを登録する関数
let registerTasks = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

// localStorage からデータを取り出す関数
let takeTasks = () => JSON.parse(localStorage.getItem('tasks'))

const checked = (ev) => {
  console.log('タスクのチェックボックスが操作されたときの関数', ev.target.checked)
  // tasks の該当するタスクのチェック状態を変更する
  // 変更された状態を localStorage に登録する処理を呼び出す
}
