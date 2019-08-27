module.exports.function = function notice (find) { //공지사항
  var http = require('http')
  var result = http.getUrl("https://api.sheety.co/bd9ccc4c-ec96-45a2-848d-b311719420d5",{format : 'json'})

  return result
} 