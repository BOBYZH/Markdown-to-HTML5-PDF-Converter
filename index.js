// Set showdown and fs
const showdown = require('showdown')
const converter = new showdown.Converter()

const fs = require("fs")

// Define the path of markdown file
const mdPath = './README.md' // default

// Define variables of md and html
const mdContent = fs.readFileSync(mdPath, "utf8")
const htmlContent = converter.makeHtml(mdContent)

// Show the input and output
console.log('Markdown:')
console.log(mdContent)
console.log('')
console.log('HTML:')
console.log(htmlContent)