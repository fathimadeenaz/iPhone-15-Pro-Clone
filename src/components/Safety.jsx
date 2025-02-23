import { useGSAP } from "@gsap/react";

import { safetyImg } from '../utils'
import { g_fadeIn } from "../utils/animations";

const Safety = () => {
    useGSAP(() => {
        g_fadeIn(".g-fadeIn7", { y: 0, ease: "power2.inOut" });
    })

    return (
        <section className="sm:py-32 py-20 md:px-4 lg:px-10 flex-center">
            <div className="bg-zinc md:w-[85%] w:100% p-16 lg:p-24">
                <div className="flex-center w-full relative">
                    <div className="w-full">
                        <img
                            src={safetyImg}
                            alt="safety"
                            className="h-[50vh] lg:h-[80vh] w-full"
                        />
                    </div>
                    <div className="absolute top-[25%] lg:top-[15%] left-[10%] z-10 text-4xl lg:text-7xl font-semibold p-10">
                        In an emergency,<br />
                        iPhone has your back.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row my-10 lg:my-20 gap-8 md:gap-16 lg:gap-24">
                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g-fadeIn7">
                            New{" "}
                            <span className="text-white">
                                Roadside Assistance via satellite{" "}
                            </span>
                            can get you help for things like a flat tire or a dead battery, even when you’re off the grid.
                        </p>
                    </div>
                    <div className="flex  flex-1">
                        <p className="hiw-text g-fadeIn7">
                            iPhone also has{" "}
                            <span className="text-white">
                                Emergency SOS via satellite14 and Crash Detection
                            </span>
                            , two vital safety features that have helped save lives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Safety;