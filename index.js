const express = require('express')
const app = express()

app.listen(3000, () => console.log('sivir ridi'))

app.get('/' , (req, res) => res.send('hello world'))
app.post('/' , (req, res) => res.send('hello world'))
app.put('/' , (req, res) => res.send('hello world'))
app.delete('/' , (req, res) => res.send('hello world'))
app.patch('/' , (req, res) => res.send('hello world'))

