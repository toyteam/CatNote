var fs = require('fs')
var querystring = require('querystring')
var catconfig = require('./catconfig')
var catlibrary = require('./catlibrary')

var configPath = './config.json'

var config = new catconfig.Config()

export function main () {
  // get config
  var exist = fs.existsSync(configPath)
  if (!exist) {
    console.log('Creating setting file!')
    fs.openSync(configPath, 'w')
    fs.writeFile(configPath, querystring.stringify(config), (err) => {
      if (err) throw err
      console.log('File saved')
    })
  } else {
    console.log('Reading setting file!')
    fs.readFile(configPath, (err, data) => {
      if (err) throw err
      data = querystring.parse(data)
      console.log(data)
      config = data
    })
  }
  // load library
  var mainLib = new catlibrary.Library()
  if (config.libraries.length > 0) {
    mainLib.setDatabasePath(config.libraries[0])
  }
  mainLib.openLibrary()
}
