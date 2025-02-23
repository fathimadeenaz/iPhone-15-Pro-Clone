import { useEffect, useState, useRef } from "react";

import { useGSAP } from "@gsap/react";

import { prevImg, nextImg, addImg } from "../utils";
import { slider } from "../utils/animations";
import { cardSlides } from "../constants";

const CardCarousel = () => {
    const cardRef = useRef([]);
    const totalCards = 7;
    const [isLastCardVisible, setIsLastCardVisible] = useState(false);
    const [card, setCard] = useState({
        cardId: 0,
    });

    useGSAP(() => {
        slider(".card-slider", card.cardId);
    }, [card.cardId]);

    const handleProcess = (type) => {
        switch (type) {
            case "prev":
                setCard((pre) => ({ ...pre, cardId: pre.cardId - 1 }));
                break;
            case "next":
                if (card.cardId < totalCards - 1) {
                    setCard((pre) => ({ ...pre, cardId: pre.cardId + 1 }));
                }
                break;
            default:
                return card;
        }
    };

    useEffect(() => {
        const checkLastCardVisibility = () => {
            const lastCard = cardRef.current[totalCards - 1];
            const rect = lastCard.getBoundingClientRect();
            const k = rect.right;
            setIsLastCardVisible(k <= window.innerWidth);
        };
        checkLastCardVisibility();
        window.addEventListener("resize", checkLastCardVisibility);
        return () => {
            window.removeEventListener("resize", checkLastCardVisibility);
        };
    }, [card.cardId, totalCards]);

    return (
        <>
            <div className="flex items-center relative">
                {cardSlides.map((list, i) => (
                    <div key={list.id} id={`card-slider-[${i + 1}]`} className="card-slider pr-6" ref={(element) => (cardRef.current[i] = element)}>
                        <div className="rounded-3xl overflow-hidden bg-[#242426] items-center justify-between flex flex-col overflow-hidden p-8 w-[350px] h-[350px] max-lg:p-6 max-lg:w-[300px] max-lg:h-[360px] max-md:h-[340px]">
                            <div>
                                <img
                                    src={list.icon}
                                    alt="card"
                                    width={40}
                                    height={40}
                                    className="mb-4" />
                                {list.textLists.map((text, i) => (
                                    <p key={i} className="md:text-2xl text-xl font-medium">
                                        {text}
                                    </p>
                                ))}
                                <div className="my-4">{list.description}</div>
                            </div>
                            <div className="flex w-full justify-end w-full">
                                <button className="control-btn2">
                                    <img
                                        src={addImg}
                                        alt="plus"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex absolute mt-10 bottom--10 right-0 max-md:-bottom-16 max-md:right-10">
                <button
                    className="control-btn"
                    disabled={card.cardId === 0}
                    onClick={() => handleProcess("prev")}
                >
                    <img
                        src={prevImg}
                        alt="previous"
                    />
                </button>
                <button
                    className="control-btn"
                    disabled={isLastCardVisible}
                    onClick={() => handleProcess("next")}
                >
                    <img
                        src={nextImg}
                        alt="next"
                    />
                </button>
            </div>
        </>
    );
};

export default CardCarousel;