import { ChevronRight, Calendar } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-inherit py-36">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-r blur-[160px]" />

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                    Start your AI automation journey{" "}
                    <span className="relative inline-block z-10">
                        today.
                        <span className="absolute left-0 bottom-[-7px] -z-10 h-3 md:h-3 w-[102%] bg-[#e55cd8]/50" />
                    </span>
                </h2>

                <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

                    {/* Get Started */}

                    <a
                        href="/"
                        className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-[#8B5CF6]
              to-[#EC4899]
              px-8
              py-3
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
                    >
                        get started
                        <ChevronRight size={25} />
                    </a>

                    {/* Talk to Us */}

                    <button
                        className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-white/80
              bg-inherit/0
              px-8
              py-3
              text-lg
              font-semibold
              text-white/90
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/10
            "
                    >
                        <Calendar size={20} />
                        talk to us
                    </button>

                </div>

            </div>
        </section>
    );
}