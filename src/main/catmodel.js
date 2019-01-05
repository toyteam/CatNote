
var sqlite3 = require('sqlite3')
var printErrorInfo = function (err) {
  console.log('Error Message:' + err.message + ' ErrorNumber:' + err.no)
}

export function getAllDocuments (connection) {
  var sql = 'SELECT * FROM document;'
  connection.all(sql, function (err, rows) {
    if (err != null) {
      printErrorInfo(err)
    }
    console.log(rows)
  })
}

export function addDocument (connection, document) {
  var sql = 'SELECT * FROM document;'
  connection.all(sql, function (err, rows) {
    if (err != null) {
      printErrorInfo(err)
    }
    console.log(rows)
  })
}
