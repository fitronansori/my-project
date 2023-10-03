import fetchImages from "@/lib/fetchImages";
import type { ImagesResult } from "@/models/Images";
import Image from "next/image";

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResult | undefined = await fetchImages(url);
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {
        // jika undefined, maka return not found
        images === undefined ? (
          <h1>Not Found</h1>
        ) : (
          images?.photos.map((photo) => (
            <div key={photo.id} className="h-64 bg-gray-200 rounded-xl">
              <Image
                src={photo.src.large}
                alt={photo.alt}
                className="w-full h-full object-cover rounded-xl"
                layout="responsive"
                width={photo.width}
                height={photo.height}
              />
            </div>
          ))
        )
      }
    </section>
  );
}
