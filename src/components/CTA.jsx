import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
    return (
        <section className="relative overflow-hidden bg-[#16122F] py-36">

            {/* Background Glow */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-r from-violet-600/20 to-pink-500/20 blur-[160px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                    Start your AI automation journey{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                        today
                    </span>
                    .
                </h2>

                <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">

                    {/* Get Started */}

                    <a
                        href="/nexus/signup"
                        className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-[#8B5CF6]
              to-[#EC4899]
              px-10
              py-5
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
                    >
                        get started
                        <ArrowRight size={22} />
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
              border-white/20
              bg-white/5
              px-10
              py-5
              text-lg
              font-semibold
              text-white
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