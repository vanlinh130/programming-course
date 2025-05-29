import { z } from "zod";

export const CourseSchema = z.object({
  id: z.union([z.string(), z.number()]),
  label: z.string(),
  image_url: z.string(),
  tag: z.string(),
  title: z.string(),
  description: z.string(),
  short: z.string(),
  students: z.number(),
  likes: z.number(),
  price: z.number(),
  original_price: z.number(),
  course_number: z.string(),
});

export const CoursesResponseSchema = z.array(CourseSchema);

export type CourseType = z.infer<typeof CourseSchema>;
export type CoursesResponseType = z.infer<typeof CoursesResponseSchema>;