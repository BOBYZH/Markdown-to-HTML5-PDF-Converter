// Set used packages
const showdown = require('showdown')
const converter = new showdown.Converter()

const fs = require("fs")

const pdf = require('html-pdf')

// Define the path of files
const mdPath = './Input.md' // default
const htmlPath = './Output.html'
const pdfPath = './Output.pdf'

// Define variables of md and html
const mdContent = fs.readFileSync(mdPath, "utf8")
const htmlContent = converter.makeHtml(mdContent)

// Show the input and output
console.log('Markdown:')
console.log(mdContent)
console.log('')
console.log('HTML:')
console.log(htmlContent)

// Generate HTML file
fs.writeFileSync(htmlPath, htmlContent)

// Generate PDF file
pdf.create(htmlContent, { format: 'Letter' }
).toFile(pdfPath, function (err, res) {
  if (err) return console.log(err);
  console.log(res)
})