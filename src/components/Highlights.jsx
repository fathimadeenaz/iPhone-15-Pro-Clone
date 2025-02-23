import { useGSAP } from "@gsap/react";

import { VideoCarousel } from "./index";

import { rightImg, watchImg } from "../utils";
import { g_fadeIn } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    g_fadeIn("#title", { y: 0 }, undefined, "0");
    g_fadeIn(".link", { y: 0, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img
                src={watchImg}
                alt="watch"
                className="ml-2"
              />
            </p>
            <p className="link">
              Watch the event
              <img
                src={rightImg}
                alt="right"
                className="ml-2"
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
