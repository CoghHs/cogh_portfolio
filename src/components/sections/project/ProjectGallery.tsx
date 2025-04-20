import Image from "next/image";

export default function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <>
      {images.map((img, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-lg border border-white/10"
        >
          <div className="relative aspect-video w-full">
            <Image
              src={img}
              alt={`${title} 상세 이미지 ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* <div className="absolute top-4 right-4 bg-black/50 text-white/80 text-xs px-2 py-1 rounded-full">
            {index + 1}/{images.length}
          </div> */}
        </div>
      ))}
    </>
  );
}
