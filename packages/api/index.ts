import 'server-only';

import { OpenAPIHono } from '@hono/zod-openapi';
import authRouter from './routers/auth';

export const honoApp = new OpenAPIHono().basePath('/api');

const routes = honoApp.route('/auth', authRouter);

export type AppType = typeof routes;
