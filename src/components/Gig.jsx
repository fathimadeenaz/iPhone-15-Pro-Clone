import { useGSAP } from "@gsap/react";

import { gigImg } from "../utils";
import { g_fadeIn } from "../utils/animations";

const Gig = () => {

    useGSAP(() => {
        g_fadeIn("#gig-img", { ease: "power2.inOut" }, "95");

        g_fadeIn(".g-fadeIn5", { y: 0, ease: "power2.inOut" });
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <div className="sm:px-20">
                    <h2 className="text-5xl lg:text-7xl font-semibold">Gigablast</h2>
                    <h2 className="text-5xl lg:text-7xl font-semibold">
                        your gigabits.
                    </h2>
                </div>
                <div className="w-[95%] h-[90%] flex-center flex-col mt-20 mb-10">
                    <img
                        className="opacity-0"
                        src={gigImg}
                        alt="gig"
                        id="gig-img"
                    />
                </div>
                <div className="hiw-text-container sm:px-20">
                    <div className="flex flex-1 justify-between items-stretch flex-col h-full g-fadeIn5">
                        <div className="hiw-text">
                            iPhone 15 Pro is the first iPhone to support USB 3 for a{" "}
                            <span className="text-white">
                                huge leap in data transfer speeds{" "}
                            </span>
                            and faster pro workflows than ever before.
                        </div>
                        <br />
                        <br />
                        <div className="hiw-text">
                            The new USB‑C connector lets you{" "}
                            <span className="text-white">
                                charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro
                            </span>
                            . Bye‑bye, cable clutter.
                        </div>
                    </div>

                    <div className="flex-1 flex justify-between items-stretch flex-col h-full g-fadeIn5">
                        <div>
                            <p className="hiw-text">Up to</p>
                            <p className="hiw-bigtext">20x faster</p>
                            <p className="hiw-text">file transfers</p>
                        </div>
                        <br />
                        <div className="hiw-text">
                            And with all‑new Wi‑Fi 6E6 you'll get{" "}
                            <span className="text-white">
                                two times faster wireless speeds
                            </span>
                            . So you can upload, download, and transfer files in a flash.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gig;