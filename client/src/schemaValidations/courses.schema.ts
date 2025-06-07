import { z } from "zod";

const LessonSchema = z.object({
  id: z.number(),
  title: z.string(),
  video_url: z.string(),
  status: z.string(),
  chapter_id: z.number(),
  duration_minutes: z.number(),
});

const ChapterSchema = z.object({
  id: z.number(),
  title: z.string(),
  course_id: z.number(),
  lessons: z.array(LessonSchema),
});

export const CourseSchema = z.object({
  id: z.union([z.string(), z.number()]),
  label: z.string(),
  image_url: z.string(),
  video_url: z.string(),
  tag: z.string(),
  title: z.string(),
  description: z.string(),
  short: z.string(),
  students: z.number(),
  likes: z.number(),
  price: z.number(),
  original_price: z.number(),
  course_number: z.string(),
  author: z.string(),
  chapters:z.array(ChapterSchema),
});

export const CoursesResponseSchema = z.array(CourseSchema);

export type CourseType = z.infer<typeof CourseSchema>;
export type CoursesResponseType = z.infer<typeof CoursesResponseSchema>;