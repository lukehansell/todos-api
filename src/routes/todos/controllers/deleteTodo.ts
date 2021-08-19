import { AirtableBase } from "airtable/lib/airtable_base"
import { FastifyRequest } from "fastify"

interface IDeleteParams {
  todoId: string
}

export default (database: AirtableBase) => async (request: FastifyRequest<{ Params: IDeleteParams }>) => {
  console.log(`deleting ${request.params.todoId}`)
  const deletedTodo = await database('Todos').destroy(request.params.todoId)
  return deletedTodo.id
}