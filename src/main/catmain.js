var fs = require('fs')
var querystring = require('querystring')
var catconfig = require('./catconfig')

var configPath = './config.json'

var config = new catconfig.Config()

export function main () {
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
}
