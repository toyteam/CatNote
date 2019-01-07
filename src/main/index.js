'use strict'

import { app, BrowserWindow, Menu } from 'electron'
var catmain = require('./catmain')
var catfile = require('./catfile')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

var catnoteMenubarTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'New',
        click: catfile.addFile
      },
      {
        label: 'Add Library',
        click: catfile.addLibrary
      },
      {
        label: 'Import',
        submenu: [{
          label: 'Add File',
          click: catfile.importFile
        },
        {
          label: 'Add Folder',
          click: catfile.importFolder
        }]
      },
      { type: 'separator' },
      {
        label: 'Exit',
        role: 'quit'
      }]
  },
  {
    label: 'Edit'
  },
  {
    label: 'View'
  },
  {
    label: 'Help',
    role: 'help'
  }
]

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    minHeight: 563,
    minWidth: 800,
    height: 600,
    width: 1000,
    useContentSize: false,
    center: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  const menu = Menu.buildFromTemplate(catnoteMenubarTemplate)
  Menu.setApplicationMenu(menu)

  // main
  catmain.main()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
