/* eslint-disable no-console */
const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const express = require('express')

const PORT = process.env.PORT || 3000

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../frontend/build/index.html'))
})
server.use(middlewares)
server.use('/api', router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})

// Serve static files from the React frontend app
server.use(express.static(path.join(__dirname, '../frontend/build')))