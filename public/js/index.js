;(function() {
'use strict'

// helper functions
const assignId = require('./assignId')
const deleteTodo = (el) => {
  const parentNode = el.parentNode
  while(parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild)
  }
  parentNode.parentNode.removeChild(parentNode)
}

// DOM nodes
const saveTodo = document.getElementById('save-todo')
const todos = document.getElementById('todos')
const newTodo = document.getElementById('new-todo')

let counter = 0

saveTodo.addEventListener('click', (e) => {
  e.preventDefault()
  const todoValue = newTodo.value || ''

  const todo = document.createElement('div')
  const todoText = todo.appendChild(document.createElement('p'))
  todoText.innerHTML = todoValue

  const deleteBtn = todo.appendChild(document.createElement('a'))
  todo.classList.add('todo')
  deleteBtn.innerHTML = '&#10006;'
  deleteBtn.classList.add('delete-todo')
  deleteBtn.href = '#'

  // this is brittle, using counter then not incrementing it. rm side-effects
  assignId(deleteBtn, counter)
  assignId(todo, counter++)

  todos.appendChild(todo)

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    deleteTodo(e.target)
  })

})


}())
