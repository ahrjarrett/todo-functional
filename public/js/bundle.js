(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const inc = require('./internal/_inc')

module.exports = function assignId(node, state) {
  const uuid = inc(state)
  const namespace = node.classList.item(0)
  node.id = namespace + '-' + uuid
}

},{"./internal/_inc":3}],2:[function(require,module,exports){
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

},{"./assignId":1}],3:[function(require,module,exports){
// inc : Number -> Number
module.exports = (state) => state + 1

},{}]},{},[2]);