import { z } from "zod";

// Define a schema for the basic structure of the image
const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

// Define a schema for the details of a single photo
const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

// Define a schema for the complete response, including the `photos` array
export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(PhotoSchema),
});

// Photo is a type alias for the type that z.infer returns
export type Photo = z.infer<typeof PhotoSchema>;

// Images is a type alias for the type that z.infer returns
export type ImagesResult = z.infer<typeof ImagesSchemaWithPhotos>;

/**
 * Zod adalah library untuk validasi data di TypeScript. Zod memungkinkan kita untuk mendefinisikan skema data yang akan digunakan untuk memvalidasi data yang kita terima dari API.
 */
