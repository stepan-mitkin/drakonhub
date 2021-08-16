const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')

const filename = process.argv[2]

var mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        nodeIntegration: true,
        contextIsolation: false
      }      
    })

    
    mainWindow.loadFile(path.join(__dirname, "index.html"))

    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.send('startFolder', filename)
    })

    ipcMain.on("selectDirectory", selectDirectory)
}

async function selectDirectory() {
  var result = await dialog.showOpenDialog(
    mainWindow,
    {properties:["openDirectory"]}
  )

  mainWindow.webContents.send("selectDirectory", result)
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



