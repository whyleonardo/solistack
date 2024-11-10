import { createEnv } from '@t3-oss/env-nextjs';

import { z } from 'zod';
import { sharedEnv } from '../shared';

export const env = createEnv({
  extends: [sharedEnv],
  client: {
    NEXT_PUBLIC_APP_BASE_URL: z.string().url(),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_APP_BASE_URL: process.env.NEXT_PUBLIC_APP_BASE_URL,
  },
});
