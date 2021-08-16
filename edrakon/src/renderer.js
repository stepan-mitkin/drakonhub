const fs = require("fs/promises")
const { ipcRenderer } = require('electron')
const messagesRu = require("./dhub/ru-messages.json")
const messagesEn = require("./dhub/en-us-messages.json")

var globalState = {
    language: "en-us"
}

function get(id) {
    return document.getElementById(id)
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
    main(startFolder)
})


ipcRenderer.on('selectDirectory', (event, directoryResult) => {
    if (directoryResult.canceled) {
        return
    }

    var path = directoryResult.filePaths[0]
    console.log("selectDirectory", path)
})


async function main(startFolder) {
    if (startFolder) {        
        try {
            await checkRootFolder(startFolder)
            startEditor(startFolder)
        } catch (ex) { 
            await showStartScreen(ex.message)
        }
    } else {
        await showStartScreen()
    }
}

async function checkRootFolder(startFolder) {
    console.log("checkRootFolder", startFolder)    
}


async function startEditor(startFolder) {
    console.log("startEditor", startFolder)
}

function display(id, value) {
    var element = get(id)
    element.style.display = value
}

async function loadUserSettings() {
    return {
        recent: []
    }
}

async function saveUserSettings(settings) {

}



function clear(element) {
    element.innerHTML = ""
}

function div() {
	var element = document.createElement("div")
    var info = arguments[0]
    if (info) {
        if (typeof info === "string") {
            element.className = info
        } else {
            if (info.style) {
                Object.assign(element.style, info.style)
            }
            if (info.text) {
                HtmlUtils.setDivText(element, info.text)
            }
            if (info.className){
                element.className = info.className
            }
            if (info.onclick) {
                element.addEventListener("click", info.onclick)
            }
        }
    }
    
    if (arguments.length === 2 && isArray(arguments[1])) {
        let children = arguments[1]
        for (let i = 0; i < children.length; i++) {
            addChild(element, children[i])
        }
    } else {
        for (let i = 1; i < arguments.length; i++) {
            addChild(element, arguments[i])
        }
    }

    return element
}

function isArray(obj) {
    return (obj && Array.isArray(obj))
}

function addChild(parent, child) {
    if (child) {
        parent.appendChild(child)
    }
}

function img(src, className, alt) {
    var element = document.createElement("img")
    element.draggable = false
    element.src = "./dhub/" + src
    element.className = className
    element.alt = alt
    return element
}

async function showStartScreen(errorMessage) {
    var settings = await loadUserSettings()
    globalState.language = settings.language || "en-us"

    var start = get("start")
    clear(start)

    display("splash", "none")
    display("start", "inline-block")

    var errorDiv = undefined
    if (errorMessage) {
        errorDiv = div({className:"start-error", text:errorMessage})        
    }
    var recentDiv = undefined
    if (settings.recent.length > 0) {
        var forgetButton = div(
            "start-recent-buttons",
            div({className:"forget-button", onclick:forgetRecent, text:translate("MES_FORGET_RECENT")})
        )
        settings.recent.sort()
        var recentChildren = settings.recent.map(createRecentItem)
        recentChildren.unshift(forgetButton)
        recentDiv = div("start-recent", recentChildren)
    }
    var startContent = div(
        "start-container",
        div("start-top",
            img("drakosha132.png", "start-logo"),
            img("logo-text-s-hub.png", "start-logo-text")
        ),        
        div("start-middle",
            errorDiv,
            div("start-buttons",
                div({className:"open-button start-button", onclick:showOpenFolderDialog, text:translate("MES_OPEN_FOLDER")}),
            ),
            recentDiv
        )
    )
    start.appendChild(startContent)
}

function showOpenFolderDialog() {    
    ipcRenderer.send("selectDirectory")
}

