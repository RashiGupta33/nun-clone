import { useState, useEffect } from "react";
import { ArrowRight, Calendar } from "lucide-react";

const WORDS = [
    "game testing",
    "app QA",
    "market research",
    "compliance checks"
];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = WORDS[wordIndex];
        const typeSpeed = isDeleting ? 40 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 2500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % WORDS.length);
            } else {
                setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    return (
        <section className="pt-13 pb-20 md:pt-25">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center flex flex-col items-center w-full overflow-hidden">

                    <h1 className="font-[800] tracking-[-0.04em] text-white text-[20px] sm:text-[24px] md:text-[28px] lg:text-[70px] leading-[1.2]">
                        <span className="whitespace-nowrap flex justify-center">
                            <span>Solve your&nbsp;</span>

                            <span className="w-[180px] sm:w-[220px] md:w-[250px] lg:w-[620px] text-left">
                                {text}
                                <span className="animate-[pulse_1s_cubic-bezier(0.4,0,0.6,1)_infinite] font-light text-gray-300">
                                    |
                                </span>
                            </span>
                        </span>

                        <span className="block -mt-2 lg:-mt-4">
                            with{" "}
                            <span className="relative inline-block z-10">
                                AI agents.
                                <span className="absolute left-0 bottom-[-8px] -z-10 h-3 md:h-4 w-[102%] bg-[#e55cd8]/50" />
                            </span>
                        </span>
                    </h1>

                    <p className="mx-auto mt-9 max-w-5xl text-[18px] sm:text-[20px] md:text-[24px] leading-[1.5] text-gray-400 font-medium px-4">
                        Save countless hours of manual work by using AI agents performing end-to-end tasks at <br /> scale.
                    </p>

                </div>

                {/* Buttons */}

                <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

                    <a
                        href="/nexus/signup"
                        className="
            flex
            items-center
            gap-2
            rounded-full
            bg-gradient-to-r
            from-[#b366ff]
            to-[#f056d6]
            px-8
            py-4
            text-lg
            font-bold
            text-white
            transition
            hover:opacity-90"
                    >
                        get started
                        <ArrowRight size={20} />
                    </a>

                    <button
                        className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/20
            px-8
            py-4
            text-lg
            font-bold
            text-white
            transition
            hover:bg-white/5"
                    >
                        <Calendar size={20} />
                        talk to us
                    </button>

                </div>

            </div>
        </section>
    );
}