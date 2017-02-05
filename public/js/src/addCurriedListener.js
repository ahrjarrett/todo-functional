// addCurriedListener : Event -> Node -> Function -> Listener
const addCurriedListener = (e) => (elem) => (fn) => {
  const target = document.getElementById(elem)
  return target.addEventListener(e, fn)
}

module.exports = addCurriedListener
