const fs = require("fs/promises")


async function main() {
    console.log("hello")
    var dir = await fs.readdir(__dirname)
    console.log(dir)
}


main()