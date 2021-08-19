import { FieldSet, Record } from "airtable";
import { Todo } from "../types/Todo";

export default (record: Record<FieldSet>): Todo => ({
  id: record.getId(),
  text: String(record.get('text')),
  isComplete: !!record.get('isComplete')
})