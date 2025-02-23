import { useEffect, useState, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { prevImg, nextImg } from "../utils";
import { slider } from "../utils/animations";
import { imagesSlides } from "../constants";

const ImageCarousel = () => {
  const imageRef = useRef([]);
  const imageTextRef = useRef([]);

  const [image, setImage] = useState({
    imageId: 0,
    src: window.innerWidth < 768 ? "imageSmall" : "image",
    width: window.innerWidth < 768 ? 247 : 653,
  });

  useGSAP(() => {
    slider("#image-slider", image.imageId);

    [
      [image.imageId, 1],
      [image.imageId - 1, 0.3],
      [image.imageId + 1, 0.3],
    ].map((item) => {
      gsap.to(imageRef.current[item[0]], {
        opacity: item[1],
        scrollTrigger: {
          trigger: imageRef.current[item[0]],
        },
      });
    });

    [
      [image.imageId, 1],
      [image.imageId - 1, 0],
      [image.imageId + 1, 0],
    ].map((item) => {
      gsap.to(imageTextRef.current[item[0]], {
        opacity: item[1],
        scrollTrigger: {
          trigger: imageTextRef.current[item[0]],
        },
      });
    });
  }, [image.imageId]);

  const handleImageSet = () => {
    if (window.innerWidth < 768) {
      setImage((pre) => ({ ...pre, src: "imageSmall", width: 247 }));
    } else {
      setImage((pre) => ({ ...pre, src: "image", width: 653 }));
    }
  };

  const handleProcess = (type) => {
    switch (type) {
      case "prev":
        setImage((pre) => ({ ...pre, imageId: pre.imageId - 1 }));
        break;
      case "next":
        setImage((pre) => ({ ...pre, imageId: pre.imageId + 1 }));
        break;
      default:
        return image;
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleImageSet);
    return () => {
      window.removeEventListener("resize", handleImageSet);
    };
  }, []);

  return (
    <>
      <div
        className="flex items-center relative"
        style={{ padding: `0px calc(50% - ${image.width}px / 2)` }}
      >
        {imagesSlides.map((list, i) => (
          <div key={list.id} id="image-slider" className="pr-2">
            <div className="flex-center flex-col overflow-hidden w-full">
              <div
                className="flex-center image-carousel-container opacity-30"
                ref={(element) => (imageRef.current[i] = element)}
              >
                <img
                  className="pointer-events-none w-full"
                  src={list[image.src]}
                  alt=""
                />
              </div>
              <p
                className="text-gray font-semibold mt-6 text-center opacity-0"
                ref={(element) => (imageTextRef.current[i] = element)}
              >
                <span className="text-white">{list.zoom}</span> {list.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex absolute bottom-0 right-0 max-md:-bottom-16 max-md:right-10">
        <button
          className="control-btn"
          disabled={image.imageId === 0 ? true : false}
        >
          <img
            src={prevImg}
            alt="previous"
            onClick={() => handleProcess("prev")}
          />
        </button>
        <button
          className="control-btn"
          disabled={image.imageId === 6 ? true : false}
        >
          <img
            src={nextImg}
            alt="next"
            onClick={() => handleProcess("next")}
          />
        </button>
      </div>
    </>
  );
};

export default ImageCarousel;
