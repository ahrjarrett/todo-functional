const inc = require('./internal/_inc')

module.exports = function assignId(node, state) {
  const uuid = inc(state)
  const namespace = node.classList.item(0)
  node.id = namespace + '-' + uuid
}
