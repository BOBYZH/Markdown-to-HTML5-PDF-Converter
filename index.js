// Set used packages
const showdown = require('showdown')
const converter = new showdown.Converter()

const fs = require("fs")

const puppeteer = require('puppeteer')

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
async function printPDF(path) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(path, {waitUntil: 'networkidle0'})

  const pdfContent = await page.pdf({ format: 'A4' }) 
  await browser.close()
  
  console.log(pdfContent)
  await fs.writeFile(pdfPath, pdfContent)
}

printPDF(htmlPath)