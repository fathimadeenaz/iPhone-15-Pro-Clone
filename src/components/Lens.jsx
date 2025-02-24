import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { ImageCarousel } from "./index";

import { lensImg } from "../utils";
import { g_fadeIn } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Lens = () => {
  useGSAP(() => {
    g_fadeIn("#camera-text", { y: 0 });

    g_fadeIn("#lens-image");

    [1, 2].map((item) => {
      g_fadeIn(`#lens-text${item}`, { y: 0 });
    });
  }, []);

  return (
    <section className="w-screen overflow-hidden common-padding">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <div className="feature-text-container gap-24">
            <div className="flex">
              <p id="camera-text" className="feature-text">
                With iPhone 15 Pro, you have multiple focal lengths to work
                with. It's like having{" "}
                <span className="text-white">
                  seven pro lenses in your pocket
                </span>
                , everywhere you go.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-24 w-full relative">
          <ImageCarousel />
        </div>
        <div className="mt-48 w-full">
          <div className="feature-video-container">
            <div className="flex flex-1 justify-end opacity-0" id="lens-image">
              <img
                src={lensImg}
                alt="lens"
              />
            </div>
            <div className="flex flex-1 items-center mt-8 md:mt-0">
              <div className="flex flex-col w-full relative mx-8 pr-10">
                <div className="flex-1 flex-center mb-6 ">
                  <p className="feature-text " id="lens-text1">
                    The 48MP Main lens is more advanced than ever, capturing
                    super-high-resolution photos with a{" "}
                    <span className="text-white">
                      new level of detail and color design
                    </span>
                    .
                  </p>
                </div>
                <div className="flex-1 flex-center ">
                  <p className="feature-text" id="lens-text2">
                    You’ll see the improvements in your portraits. And now you
                    no longer have to switch to Portrait mode. If your subject
                    is a person, dog, or cat, iPhone automatically captures
                    depth information. So you can choose to instantly{" "}
                    <span className="text-white">
                      see your photo as a portrait
                    </span>
                    , with an artful blur effect. Or later in the Photos app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lens;
