import { useState } from "react";

type PortraitImage = {
  src: string;
  alt: string;
};

type PortraitSliderProps = {
  images: PortraitImage[];
  className?: string;
};

export function PortraitSlider({ images, className = "" }: PortraitSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;
  const activeImage = images[activeIndex];

  function goToPrevious() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function goToNext() {
    setActiveIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }

  return (
    <div
      className={["mx-auto w-full max-w-[260px] md:max-w-none", className].join(
        " "
      )}
    >
      <div
        className="
          group relative aspect-[3/4] overflow-hidden rounded-2xl border border-border
          bg-surface-muted shadow-card
        "
      >
        {hasImages ? (
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="
              h-full w-full scale-[1.06] object-cover
              transition-transform duration-500 ease-portfolio
              group-hover:scale-100
            "
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center p-6 text-center">
            <div>
              <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-border bg-surface" />
            </div>
          </div>
        )}

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous image"
              className="
                absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2
                items-center justify-center rounded-full border border-border
                bg-background/80 text-sm font-medium text-foreground
                backdrop-blur transition hover:bg-surface
              "
            >
              ←
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next image"
              className="
                absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2
                items-center justify-center rounded-full border border-border
                bg-background/80 text-sm font-medium text-foreground
                backdrop-blur transition hover:bg-surface
              "
            >
              →
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              className={[
                "h-2 rounded-full transition-all duration-200 ease-portfolio",
                index === activeIndex
                  ? "w-6 bg-foreground"
                  : "w-2 bg-muted hover:bg-muted-foreground",
              ].join(" ")}
            />
          ))}
        </div>
      )}
    </div>
  );
}
