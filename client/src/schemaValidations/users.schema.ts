import { z } from "zod";

export const UserSchema = z.object({
  id: z.union([z.string(), z.number()]),
  facebook_id: z.string(),
  name: z.string(),
  email: z.string().email(),
  picture: z.string().url(),
  created_at: z.string().datetime(),
  role: z.enum(["user", "seo", "admin"]),
  courses: z.array(
    z.object({
      course_id: z.number(),
      is_approved: z.boolean(),
    })
  ),
});

export const UsersResponseSchema = z.array(UserSchema);

export type UserType = z.infer<typeof UserSchema>;
export type UsersResponseType = z.infer<typeof UsersResponseSchema>;