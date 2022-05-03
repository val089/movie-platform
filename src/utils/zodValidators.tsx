import * as z from 'zod';

export const authScheme = z
  .object({
    username: z.string().email({ message: 'Enter: test@bsgroup.eu' }),
    password: z.string().min(8, { message: 'Enter: Test12!@' }),
  })
  .refine((data) => data.username === 'test@bsgroup.eu', {
    message: "Username don't match to test@bsgroup.eu",
    path: ['username'],
  })
  .refine((data) => data.password === 'Test12!@', {
    message: "Password don't match to Test12!@",
    path: ['password'],
  });
