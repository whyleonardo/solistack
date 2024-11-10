import { neon } from '@neondatabase/serverless';
import { env } from '@solistack/env/web/db';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schemas';

const client = neon(env.DATABASE_URL);

export const db = drizzle(client, { schema, logger: true });
