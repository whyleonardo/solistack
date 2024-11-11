import { env } from '@solistack/env/web/client';

import type { AppType } from './index.js';

import { hc } from 'hono/client';

export const client = hc<AppType>(env.NEXT_PUBLIC_APP_BASE_URL as string);
