
var sqlite3 = require('sqlite3')
export function Library () {
  this.databasePath = 'main.db'
  this.connection = null
  this.setDatabasePath = function (path) {
    this.databasePath = path
  }
  this.openLibrary = function () {
    this.connection = new sqlite3.Database(this.databasePath)
  }
  this.closeLibrary = function () {

  }
}
