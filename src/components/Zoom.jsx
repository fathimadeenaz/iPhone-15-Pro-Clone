import { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import { PiArrowClockwise, PiPlayCircle, PiPauseCircle } from "react-icons/pi";

import { zoomVideo } from "../utils";
import { g_fadeIn } from "../utils/animations";

const Zoom = () => {
  const videoRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    isPlaying: false,
  });

  useGSAP(() => {
    g_fadeIn(".g-fadeIn4", { y: 0, ease: "power2.inOut" });
  }, []);

  const handleProcess = (type) => {
    switch (type) {
      case "play":
        videoRef.current.play();
        setVideo((pre) => ({
          ...pre,
          isEnd: false,
          isPlaying: !pre.isPlaying,
        }));
        break;
      case "pause":
        videoRef.current.pause();
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <hr className="w-2/4 mx-auto h-px border-0 bg-[#424245]" />
      <section className="common-padding">
        <div className="screen-max-width">
          <div className="mb-12 w-full">
            <h1
              id="heading"
              className="md:text-3xl text-2xl font-medium text-center"
            >
              Shoot magical spatial videos,
              <br />
              then relive them on Apple Vision Pro
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center overflow-hidden sm:px-10">
            <div className="mt-32 mb-24">
              <h2 className="hiw-title">
                120 mm of <br />pure Pro zoom.
              </h2>
            </div>
            <div className="w-[95%] h-[90%] flex-center flex-col mb-14">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
                onPlay={() => {
                  setVideo((pre) => ({
                    ...pre,
                    isPlaying: true,
                  }));
                }}
                onEnded={() => {
                  setVideo((pre) => ({
                    ...pre,
                    isPlaying: false,
                    isEnd: true,
                  }));
                }}
              >
                <source src={zoomVideo} type="video/mp4" />
              </video>
              <div
                className="mt-4 text-gray cursor-pointer flex-center"
                onClick={
                  video.isEnd
                    ? () => handleProcess("play")
                    : !video.isPlaying
                      ? () => handleProcess("play")
                      : () => handleProcess("pause")
                }
              >
                {video.isEnd ? "Replay" : !video.isPlaying ? "Play" : "Pause"}
                &nbsp;
                {video.isEnd ? (
                  <PiArrowClockwise />
                ) : !video.isPlaying ? (
                  <PiPlayCircle />
                ) : (
                  <PiPauseCircle />
                )}
              </div>
            </div>
            <div className="hiw-text-container sm:px-10">
              <div className="flex flex-1 justify-center flex-col">
                <p className="hiw-text g-fadeIn4">
                  For iPhone 15 Pro Max, we designed a 5x Telephoto camera with{" "}
                  <span className="text-white">
                    the longest optical zoom of any iPhone ever{" "}
                  </span>
                  to fit in our compact Pro camera system.
                </p>
                <br />
                <p className="hiw-text g-fadeIn4">
                  Now you can{" "}
                  <span className="text-white">
                    take sharper close‑ups from farther away{" "}
                  </span>
                  — like a phenomenal photo of your friend or a goal in your
                  kid’s soccer match.
                </p>
              </div>
              <div className="flex-1 flex justify-center flex-col g-fadeIn4">
                <p className="hiw-bigtext">5x optical zoom</p>
                <p className="hiw-text">with the 120 mm lens</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Zoom;
