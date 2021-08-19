export default {
  body: {
    type: 'object',
    required: ['text'],
    properties: {
      text: { type: 'string' }
    }
  }
}
