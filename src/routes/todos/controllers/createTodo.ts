import { AirtableBase } from "airtable/lib/airtable_base"
import { FastifyRequest } from "fastify"
import convertRecordToTodo from "../libs/convertRecordToTodo"

interface ICreateBody {
  text: string
}

export default (database: AirtableBase) => async (request: FastifyRequest<{ Body: ICreateBody }>) => {
  console.log(`creating todo with text: ${request.body.text}`)
  const newTodo = await database('Todos').create({
    text: request.body.text,
    isComplete: false
  })
  return convertRecordToTodo(newTodo)
}