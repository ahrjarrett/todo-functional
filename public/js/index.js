;(function() {

'use strict'

const saveTodo = document.getElementById('save-todo')
const todos = document.getElementById('todos')
let newTodo = document.getElementById('new-todo')

saveTodo.addEventListener('click', (e) => {
  e.preventDefault()
  const todoValue = newTodo.value || ''

  const todo = document.createElement('p')
  todos.appendChild(todo)
  todo.innerHTML = todoValue

})

}())
