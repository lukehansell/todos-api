import fp from 'fastify-plugin'
import Airtable from "airtable";

import { FastifyInstance } from "fastify";

export const airtablePlugin = async (server: FastifyInstance, opts: any) => {
  Airtable.configure(opts);

  const base = Airtable.base('appgTH7yHU2aVjZXt')
  server.decorate('db', base)
}

export default fp(airtablePlugin)
