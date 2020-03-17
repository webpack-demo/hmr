const str = require('./a')

document.getElementById('app').innerHTML = str

if (module.hot) {
  module.hot.accept()
}