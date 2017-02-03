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
const newType = document.getElementById('new-type')
const createType = document.getElementById('create-type')
const saveType = document.getElementById('save-type')
const selectType = document.getElementById('select-type')

let counter = 0

saveTodo.addEventListener('click', (e) => {
  e.preventDefault()
  const todoValue = newTodo.value || ''
  const type = selectType.value
  console.log(type)

  const todo = document.createElement('div')
  const todoText = todo.appendChild(document.createElement('p'))
  todoText.innerHTML = todoValue
  newTodo.value = ''

  const typeInfo = todo.appendChild(document.createElement('a'))
  typeInfo.innerHTML = `[type: ${type}]`
  typeInfo.classList.add('type-info', `type-${type}`)
  typeInfo.href = '#'

  const deleteBtn = todo.appendChild(document.createElement('a'))
  todo.classList.add('todo')
  deleteBtn.innerHTML = '&#10006;'
  deleteBtn.classList.add('delete-todo')
  deleteBtn.href = '#'


  assignId(deleteBtn, counter)
  assignId(todo, counter++)
  todos.appendChild(todo)

  deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    deleteTodo(e.target)
  })
})

createType.addEventListener('click', (e) => {
  e.preventDefault()

  newType.classList.add('show-item')
  saveType.classList.add('show-item')
})

saveType.addEventListener('click', (e) => {
  e.preventDefault()

  const typeName = newType.value
  const type = document.createElement('option')
  type.value, type.text = typeName
  if(typeName) selectType.appendChild(type)
  newType.value = ''


  newType.classList.remove('show-item')
  saveType.classList.remove('show-item')

})


}())
