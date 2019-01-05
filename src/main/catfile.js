import { dialog } from 'electron'
export function addFile (menuItem, browserWindow, event) {
  dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
}

export function addFolder (menuItem, browserWindow, event) {
  dialog.showOpenDialog({ properties: ['openDirectory', 'multiSelections'] })
}
