import { AirtableBase } from "airtable/lib/airtable_base"
import { FastifyRequest } from "fastify"
import convertRecordToTodo from "../libs/convertRecordToTodo"

interface IUpdateBody {
  text?: string,
  isComplete?: boolean
}

interface IUpdateParams {
  todoId: string
}

type UpdateRequest = FastifyRequest<{ Body: IUpdateBody, Params: IUpdateParams }>

export default (database: AirtableBase) => async (request: UpdateRequest) => {
  console.log(`updating todo with text: ${request.body.text} and isComplete: ${request.body.isComplete}`)
  const updatedTodo = await database('Todos').update(request.params.todoId, {
    text: request.body.text,
    isComplete: request.body.isComplete
  })
  return convertRecordToTodo(updatedTodo)
}
