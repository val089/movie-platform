import * as z from 'zod';

export const authScheme = z.object({
  username: z.string(),
  password: z.string().min(8, { message: 'min 8 chars' }),
});
