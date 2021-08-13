const { app, BrowserWindow } = require('electron')
const path = require('path')

const filename = process.argv[2]

function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false
      }      
    })

    
    win.loadFile(path.join(__dirname, "index.html"))

    win.webContents.on('did-finish-load', () => {
      win.webContents.send('startFolder', filename)
    })    
}

app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})



