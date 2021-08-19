import fastify from 'fastify';
import { AirtableBase } from 'airtable/lib/airtable_base';

declare module 'fastify' {
  export interface FastifyInstance<
    HttpServer = Server,
    HttpRequest = IncomingMessage,
    HttpResponse = ServerResponse,
  > {
    db: AirtableBase;
  }
}