import { dialog } from 'electron'

export function newLibrary (menuItem, browserWindow, event) {
  dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] })
}

export function addLibrary (menuItem, browserWindow, event) {
  dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] })
}

export function importFile (menuItem, browserWindow, event) {
  dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
}

export function importFolder (menuItem, browserWindow, event) {
  dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] })
}
