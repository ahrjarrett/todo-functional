(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function() {
'use strict'

// helper functions
const assignId = require('./src/assignId')
const trimClass = require('./src/trimClass')

const deleteTodo = (el) => {
  const parentNode = el.parentNode
  while(parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild)
  }
  parentNode.parentNode.removeChild(parentNode)
}

console.log(trimClass('type-none', new RegExp('type-')))

const filterTodos = (className) => {
  return className
}


// DOM nodes
const saveTodo     = document.getElementById('save-todo')
const todos        = document.getElementById('todos')
const newTodo      = document.getElementById('new-todo')
const newType      = document.getElementById('new-type')
const createType   = document.getElementById('create-type')
const saveType     = document.getElementById('save-type')
const selectType   = document.getElementById('select-type')
const showFilters  = document.getElementById('show-filters')
const selectFilter = document.getElementById('select-filter')

let counter = 0

saveTodo.addEventListener('click', (e) => {
  e.preventDefault()
  const todoValue = newTodo.value || ''
  const type = selectType.value

  const todo = document.createElement('div')
  const todoText = todo.appendChild(document.createElement('p'))
  todoText.innerHTML = todoValue
  newTodo.value = ''

  const typeInfo = todo.appendChild(document.createElement('a'))
  typeInfo.innerHTML = `[type: ${type}]`
  typeInfo.classList.add('info', `type-${type}`)
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
  const typeForFilter = document.createElement('option')
  type.value, type.text = typeName
  typeForFilter.value, typeForFilter.text = typeName
  if(typeName) selectType.appendChild(type)
  if(typeName) selectFilter.appendChild(typeForFilter)
  newType.value = ''
  newType.classList.remove('show-item')
  saveType.classList.remove('show-item')
})

showFilters.addEventListener('click', (e) => {
  e.preventDefault()
  selectFilter.classList.toggle('show-item')
})

}())

},{"./src/assignId":2,"./src/trimClass":4}],2:[function(require,module,exports){
const inc = require('./internal/_inc')

module.exports = function assignId(node, state) {
  const uuid = inc(state)
  const namespace = node.classList.item(0)
  node.id = namespace + '-' + uuid
}

},{"./internal/_inc":3}],3:[function(require,module,exports){
// inc : Number -> Number
module.exports = (state) => state + 1

},{}],4:[function(require,module,exports){
module.exports = function trimClass(className, regex) {
  return className.replace(regex, className => '')
}

},{}]},{},[1]);
