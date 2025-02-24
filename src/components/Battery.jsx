import { useRef } from "react";

import { useGSAP } from "@gsap/react";

import { frameImg, frameVideo2, icon_iphoneImg } from "../utils";
import { g_fadeIn } from "../utils/animations";

const Battery = () => {
    const videoRef = useRef();

    useGSAP(() => {
        g_fadeIn(".g-fadeIn2", { y: 0, ease: "power2.inOut" });
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="flex flex-col items-center">
                    <h2 className="hiw-title">
                        Battery life that’s<br /> positively Pro.
                    </h2>
                    <p className="hiw-subtitle text-center">
                        Even with so many advanced new features,
                        iPhone 15 Pro still gives you amazing all‑day battery life.
                    </p>
                </div>
                <div className="mt-10 md:mt-20 mb-14 sm:px-10">
                    <div className="relative h-full flex-center">
                        <div className="overflow-hidden">
                            <img
                                src={frameImg}
                                alt="frameImg"
                                className="bg-transparent relative z-10"
                            />
                        </div>
                        <div className="hiw-video">
                            <video
                                className="pointer-events-none"
                                playsInline
                                preload="none"
                                muted
                                autoPlay
                                ref={videoRef}
                            >
                                <source src={frameVideo2} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="hiw-text-container sm:px-20">
                    <div className="flex flex-1 justify-center flex-col">
                        <div className="flex-1 flex justify-center flex-col g-fadeIn2">
                            <p className="hiw-text">Up to</p>
                            <p className="hiw-bigtext">29 hrs</p>
                            <p className="hiw-text">video playback on<br />iPhone 15 Pro Max</p>
                        </div>
                        <br />
                        <div className="flex-1 flex justify-center flex-col g-fadeIn2">
                            <p className="hiw-text">Up to</p>
                            <p className="hiw-bigtext">23 hrs</p>
                            <p className="hiw-text">video playback on<br />iPhone 15 Pro</p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col g-fadeIn2">
                        <div className="text-gray font-semibold text-xl md:text-2xl">
                            Add a MagSafe Charger for{" "}
                            <span className="text-white">
                                fast, efficient wireless charging
                            </span>
                        </div>
                        <hr className="w-full mt-8 mb-8 sm:mt-16 h-px border-0 bg-[#424245]" />
                        <div className="flex">
                            <div>
                                <img
                                    src={icon_iphoneImg}
                                    alt="trade"
                                    width={100}
                                    height={100} />
                            </div>
                            <div className="pl-10 flex-col">
                                <p className="hiw-text">iPhone 15 Pro Max has up to 9 more hours
                                    video playback than iPhone 12 Pro Max</p>
                                <br />
                                <p className="hiw-text">iPhone 15 Pro has up to 6 more hours
                                    video playback than iPhone 12 Pro</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Battery;
