import { useGSAP } from "@gsap/react";

import { CardCarousel } from "./index";

import { rightImg } from "../utils";
import { g_fadeIn } from "../utils/animations";

const Shop = () => {
    useGSAP(() => {
        g_fadeIn("#title2", { y: 0 }, undefined, "0");
        g_fadeIn(".link2", { y: 0, stagger: 0.25 });
    }, []);

    return (
        <section className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-16 w-full md:flex items-end justify-between">
                    <h1 id="title2">
                        Ways to shop and save at Apple.
                    </h1>
                    <div className="flex flex-wrap items-end">
                        <p className="link2">
                            Watch the film
                            <img
                                src={rightImg}
                                alt="right"
                                className="ml-2"
                            />
                        </p>
                    </div>
                </div>
                <CardCarousel />
            </div>
        </section>
    )
}

export default Shop;