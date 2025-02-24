import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { cameraImg } from "../utils";
import { g_fadeIn } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const Camera = () => {
  useGSAP(() => {
    g_fadeIn("#camera-title", { ease: "power2.inOut" });

    gsap.to("#camera-img", {
      scale: 1,
      scrollTrigger: {
        trigger: "#camera-img",
        toggleActions: "restart reverse restart reverse",
        scrub: true,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <div className="sm:pt-32 pt-20 sm:px-10 px-5">
            <h2
              id="camera-title"
              className="text-4xl md:text-7xl font-semibold opacity-0"
            >
              A camera that captures your wildest imagination.
            </h2>
            <p className="hiw-subtitle z-10 relative">
              From dramatic framing flexibility to next-generation portraits, see
              what you can do with our most powerful iPhone camera system.
            </p>
          </div>
          <div className="mb-14 w-[100vw] overflow-hidden">
            <div className="relative h-full flex-center overflow-hidden">
              <div className="w-full overflow-hidden">
                <img
                  src={cameraImg}
                  alt="camera"
                  id="camera-img"
                  className="bg-transparent relative w-full h-full"
                />
              </div>
            </div>
            <p className="text-gray font-semibold mt-3 sm:px-10 px-5 z-10 relative">
              A green iguana, captured by the 48MP Main camera
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camera;
