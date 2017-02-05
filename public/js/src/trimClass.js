module.exports = function trimClass(className, regex) {
  return className.replace(regex, className => '')
}
