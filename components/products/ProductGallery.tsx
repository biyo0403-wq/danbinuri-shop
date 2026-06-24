"use client";

import { useState } from "react";
import Img from "@/components/ui/Img";
import { cn } from "@/lib/cn";

type Props = {
  images: string[];
  title: string;
};

export default function ProductGallery({ images, title }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Img
          src={images[active]}
          alt={`${title} 이미지 ${active + 1}`}
          className="h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setActive(i)}
              aria-label={`${i + 1}번 이미지 보기`}
              className={cn(
                "aspect-square overflow-hidden rounded-md bg-neutral-100 ring-2 ring-transparent",
                i === active && "ring-point"
              )}
            >
              <Img
                src={src}
                alt={`${title} 썸네일 ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
