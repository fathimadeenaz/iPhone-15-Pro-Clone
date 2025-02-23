import { useGSAP } from "@gsap/react";

import { rightImg } from "../utils";
import { g_fadeIn } from "../utils/animations";
import { explore } from "../constants";

const Shop = () => {
    useGSAP(() => {
        g_fadeIn("#title3", { y: 0 }, undefined, "0");
        g_fadeIn(".link3", { y: 0, stagger: 0.25 });
    }, []);

    return (
        <section className="md:common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-16 w-full md:flex items-end justify-between max-sm:px-5 max-md:px-10">
                    <h1 id="title3">
                        Keep exploring iPhone.
                    </h1>
                    <div className="flex flex-wrap items-end">
                        <p className="link3">
                            Explore all iPhone
                            <img
                                src={rightImg}
                                alt="right"
                                className="ml-2"
                            />
                        </p>
                    </div>
                </div>
                <div className="md:rounded-3xl bg-black flex-center flex flex-col md:flex-row p-20 max-lg:px-10">
                    {explore.map((phone, i) => (<div key={i} className="flex flex-col flex-center">
                        <div className="flex-center flex-col px-8">
                            <div className="mb-8 max-md:mt-20">
                                <img
                                    src={phone.image}
                                    alt={phone.model}
                                />
                            </div>
                            <div className="mb-8 flex flex-center">
                                <ul className="flex-center">
                                    {phone.colors.map((color, i) => (
                                        <li
                                            key={i}
                                            className="w-4 h-4 rounded-full mx-1 cursor-pointer"
                                            style={{ backgroundColor: `${color}` }}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="mb-8 font-medium text-orange-500">New</div>
                            <div className="md:text-2xl text-xl font-medium">{phone.model}</div>
                        </div>
                        <hr className="w-full mx-auto my-12 h-px border-0 bg-[#424245]" />
                        <div className="flex-center flex-col px-8">
                            {phone.features.map((feature, i) => (<div key={i} className="flex-center flex-col text-center">
                                <img
                                    src={feature.icon}
                                    alt={feature.main}
                                    width={70} height={70}
                                    className="mb-4"
                                />
                                <div className="mb-2 md:text-2xl text-xl font-medium text-center w-[65%]">{feature.main}</div>
                                {feature.sub.map((line, i) => (<div key={i} className="text-sm font-light text-center">{line}</div>))}
                                <br /><br />
                            </div>))}
                        </div>
                    </div>))}
                </div>
            </div>
        </section >
    )
}

export default Shop;