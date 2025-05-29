import { z } from "zod";
import { CourseSchema } from "./courses.schema";

export const CategorySchema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string(),
  value: z.string(),
  title: z.string(),
  courses: z.array(CourseSchema).optional()
});

export const CategoriesResponseSchema = z.array(CategorySchema);

export type ContractResponseType = z.infer<
  typeof CategoriesResponseSchema
>;
