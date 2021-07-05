// 
const showdown = require('showdown')
const converter = new showdown.Converter()

const md = '# hello, markdown!'
const html = converter.makeHtml(md)

console.log('MD: ', md)
console.log('HTML: ', html)