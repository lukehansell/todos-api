require('dotenv').config()

import fastify from 'fastify'
import fastifyCors from 'fastify-cors'

import airtableDecorator from './decorators/airtable'
import todoRoutes from './routes/todos'

const server = fastify({ logger: true })

server.register(require('fastify-formbody'))
server.register(fastifyCors, {
  origin: 'http://localhost:4200',
  methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'XSRF-TOKEN'],
  preflightContinue: true
})

// add db to server instance
server.register(airtableDecorator, {
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.DB_KEY
})

server.get('/', async () => 'ok!')

// registering api routes
server.register(todoRoutes)

const start = async () => {
  try {
    await server.listen(3000)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

if (require.main === module) {
  start()
} else {
  module.exports = server
}
