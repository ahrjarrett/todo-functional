(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

  assignId(todo, counter + 1)
})



}())

},{"./utils.js":2}],2:[function(require,module,exports){
module.exports = 'testing'

},{}]},{},[1]);
