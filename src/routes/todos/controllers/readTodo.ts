import { AirtableBase } from "airtable/lib/airtable_base"
import { FastifyRequest } from "fastify"
import convertRecordToTodo from "../libs/convertRecordToTodo"

interface IReadParams {
  todoId: string
}

export default (database: AirtableBase) => async (request: FastifyRequest<{ Params: IReadParams }>) => {
  console.log(`reading ${request.params.todoId}`, request)
  const record = await database('Todos').find(request.params.todoId)
  return convertRecordToTodo(record)
}