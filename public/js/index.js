;(function() {

'use strict'

// Functions
const _ = require('./utils.js')
const inc = (state) => state + 1
const assignId = (node, state) => {
  const uuid = inc(state)
  node.id = uuid
}

// DOM
const saveTodo = document.getElementById('save-todo')
const todos = document.getElementById('todos')
let newTodo = document.getElementById('new-todo')

// Initializing
let counter = 0

const testEl = document.querySelector('.wrapper')

saveTodo.addEventListener('click', (e) => {
  e.preventDefault()
  const todoValue = newTodo.value || ''

  const todo = document.createElement('p')
  todos.appendChild(todo)
  todo.innerHTML = todoValue
  assignId(todo, counter++)

})





}())
