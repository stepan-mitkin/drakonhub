const fs = require("fs/promises")
const { ipcRenderer } = require('electron')
const messagesRu = require("./dhub/ru-messages.json")
const messagesEn = require("./dhub/en-us-messages.json")

var globalState = {
    language: "en-us"
}

function translate(message) {
    var messages
    if (globalState.language === "en-us") {
        messages = messagesEn
    } else {
        messages = messagesRu
    }
    return messages[message] || message
}

ipcRenderer.on('startFolder', (event, startFolder) => {
    console.log("startFolder", startFolder)
    main(startFolder)
})



async function main(startFolder) {
    console.log(translate("ERR_DIAGRAM_LIMIT"))
    var dir = await fs.readdir(startFolder)
    console.log(dir)
}

