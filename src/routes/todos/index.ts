import { FastifyInstance, FastifyPluginAsync, FastifyRegister } from 'fastify'

import createTodo from './controllers/createTodo'
import createTodoSchema from './controllers/createTodoSchema'
import deleteTodo from './controllers/deleteTodo'
import deleteTodoSchema from './controllers/deleteTodoSchema'
import listTodos from './controllers/listTodos'
import listTodosSchema from './controllers/listTodosSchema'
import readTodo from './controllers/readTodo'
import readTodoSchema from './controllers/readTodoSchema'
import updateTodo from './controllers/updateTodo'
import updateTodoSchema from './controllers/updateTodoSchema'

const register: FastifyPluginAsync = async server => {
  const createTodoOpts = {
    handler: createTodo(server.db),
    schema: createTodoSchema
  }

  const readTodoOpts = {
    handler: readTodo(server.db),
    schema: readTodoSchema
  }

  const updateTodoOpts = {
    handler: updateTodo(server.db),
    schema: updateTodoSchema
  }

  const deleteTodoOpts = {
    handler: deleteTodo(server.db),
    schema: deleteTodoSchema
  }

  const listTodosOpts = {
    handler: listTodos(server.db),
    schema: listTodosSchema
  }

  // CREATE
  server.post('/todos', createTodoOpts)

  // READ
  server.get('/todos/:todoId', readTodoOpts)

  // UPDATE
  server.put('/todos/:todoId', updateTodoOpts)

  // DELETE
  server.delete('/todos/:todoId', deleteTodoOpts)

  // LIST
  server.get('/todos', listTodosOpts)
}

export default register
