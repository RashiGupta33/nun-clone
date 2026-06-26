import { ArrowRight, Calendar } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-44 pb-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center">

                    <h1 className="font-black leading-[0.95] tracking-[-3px] text-white text-[72px] lg:text-[108px]">
                        Solve your
                        <br />

                        <span className="relative inline-block">
                            market research

                            {/* underline */}

                            <span className="absolute left-0 bottom-2 h-4 w-full bg-[#cf4dc7]"></span>
                        </span>

                        <br />

                        with{" "}

                        <span className="relative z-10">
                            AI agents
                        </span>
                        .
                    </h1>

                    <p className="mx-auto mt-10 max-w-5xl text-[28px] leading-[1.5] text-[#8d8ca5]">
                        Save countless hours of manual work by using AI agents
                        performing end-to-end tasks at scale.
                    </p>

                </div>

                {/* Buttons */}

                <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">

                    <a
                        href="/nexus/signup"
                        className="
            flex
            items-center
            gap-3
            rounded-full
            bg-gradient-to-r
            from-[#9F5CFF]
            to-[#F15BCF]
            px-10
            py-5
            text-xl
            font-semibold
            text-white
            transition
            hover:scale-105"
                    >
                        get started
                        <ArrowRight size={22} />
                    </a>

                    <button
                        className="
            flex
            items-center
            gap-3
            rounded-full
            border
            border-white/30
            px-10
            py-5
            text-xl
            font-semibold
            text-white
            transition
            hover:bg-white/10"
                    >
                        <Calendar size={22} />
                        talk to us
                    </button>

                </div>

            </div>
        </section>
    );
}