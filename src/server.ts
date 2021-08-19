import fastify from 'fastify'

import airtableDecorator from './decorators/airtable'
import todoRoutes from './routes/todos'

const server = fastify({ logger: true })

server.register(require('fastify-formbody'))

// add db to server instance
server.register(airtableDecorator, {
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.DB_KEY
})

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

start()
