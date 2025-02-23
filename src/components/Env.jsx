import { useGSAP } from "@gsap/react";

import { envImg } from "../utils"
import { g_fadeIn } from "../utils/animations";

const Env = () => {
    useGSAP(() => {
        g_fadeIn(".g-fadeIn3", { y: 0, ease: "power2.inOut" });
    })

    return (
        <section className="sm:py-32 py-20 md:px-4 lg:px-10 flex-center">
            <div className="bg-zinc md:w-[85%] w:100% p-16 lg:p-24">
                <div className="w-full relative">
                    <div className="mb-8">
                        <img
                            src={envImg}
                            alt="env"
                        />
                    </div>
                    <div className="text-4xl md:text-7xl font-semibold">
                        Designed to<br />make a difference.
                    </div>
                </div>
                <hr className="w-full my-16 h-px border-0 bg-[#424245]" />
                <div className="flex flex-col md:flex-row mt-10 md:mt-16 gap-8 md:gap-16 lg:gap-24">
                    <div className="flex flex-1 justify-center flex-col">
                        <p className="hiw-text g-fadeIn3">
                            <span className="text-white">
                                What matters to you matters to Apple, too.{" "}
                            </span>
                            From privacy protections that give you more control over your data.
                            To using more recycled materials that minimize environmental impact.
                            To creating built‑in features that make iPhone accessible to all.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col g-fadeIn3">
                        <div className="hiw-text">The internal structural frame of<br />iPhone 15 Pro has</div>
                        <div className="hiw-bigtext">100% recycled aluminum</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Env;