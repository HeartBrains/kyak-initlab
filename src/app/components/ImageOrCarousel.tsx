"use client";
import { GroupField } from "@prismicio/client";
import { Image } from "antd";
import { Carousel } from "flowbite-react";
import {
  Simplify,
  ActivityDetailDocumentDataSliderImagesItem,
} from "../../../prismicio-types";

const ImageOrCarousel = ({
  images,
}: {
  images: GroupField<Simplify<ActivityDetailDocumentDataSliderImagesItem>>;
}) => {
  if (images.length === 1 && !images[0].image.url) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className="h-96 w-full">
        <Image
          preview={{
            mask: false,
          }}
          className="object-contain cursor-pointer"
          height="100%"
          width="100%"
          alt={images[0].image.alt || ""}
          src={images[0].image.url as string}
        />
      </div>
    );
  }

  return (
    <div className="h-96 w-full">
      <Carousel>
        {images.map((image, index) => (
          <Image.PreviewGroup
            key={index}
            items={images.map(({ image }) => image.url as string)}
          >
            <Image
              preview={{
                mask: false,
              }}
              className="object-contain cursor-pointer"
              key={index}
              src={image.image.url as string}
              alt={image.image.alt || ""}
              width="100%"
              height="100%"
            />
          </Image.PreviewGroup>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageOrCarousel;
