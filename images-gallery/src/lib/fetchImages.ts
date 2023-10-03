import type { ImagesResult } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import { env } from "./env";

export default async function fetchImages(
  url: string
): Promise<ImagesResult | undefined> {
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch images from Pexels API");
    }

    const ImagesResult: ImagesResult = await response.json();
    console.log(ImagesResult);

    // Parse the response using the ImagesSchemaWithPhotos type
    const parsedImagesResult = ImagesSchemaWithPhotos.parse(ImagesResult);

    if (parsedImagesResult.total_results === 0) {
      return undefined;
    }

    return parsedImagesResult;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.stack);
    }
  }
}
