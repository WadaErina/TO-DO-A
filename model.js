document.getElementById('btn-add-task').addEventListener('click', ev => {
  const input = document.getElementById('new-task')

  const task = {
    task: input.value,
    completed: false
  }

  //JSON.parse(task)
  window.tasks.push(task)

  // データを登録する関数(tasks)
  // localStorage.setItem("tasks", tasks);
  hoge(tasks)
})

// ページの読み込みが完了したら tasks を window に登録する関数
window.onload = () => window.tasks = []


// localStorage にデータを登録する関数
let hoge = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks))

// localStorage からデータを取り出す関数
// JSON.parse(alldata)
// a = localStorage.getItem(localStorage.length)

const checked = (ev) => {
  console.log('タスクのチェックボックスが操作されたときの関数', ev.target.checked)
  // tasks の該当するタスクのチェック状態を変更する
  // 変更された状態を localStorage に登録する処理を呼び出す
}
