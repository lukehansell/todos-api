import { AirtableBase } from "airtable/lib/airtable_base"
import convertRecordToTodo from "../libs/convertRecordToTodo"
import { Todo } from "../types/Todo"

export default (database: AirtableBase) => async () => {
  const records = await database('Todos').select().all()
  return records.map(convertRecordToTodo) as Todo[]
}