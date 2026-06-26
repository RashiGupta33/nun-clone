export default function AvailabilityAnimation() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

            {/* Background Glow */}

            <div className="absolute h-40 w-40 rounded-full bg-[#8b5cf6]/25 blur-3xl" />

            {/* Orbit 1 */}

            <div className="absolute h-40 w-40 animate-[spin_12s_linear_infinite] rounded-full border border-pink-400/30">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-pink-400" />
            </div>

            {/* Orbit 2 */}

            <div className="absolute h-56 w-56 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-violet-400/20">
                <div className="absolute top-1/2 -left-2 -translate-y-1/2 h-4 w-4 rounded-full bg-violet-400" />
            </div>

            {/* Center AI */}

            <div
                className="
          z-10
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-[#8B5CF6]
          to-[#EC4899]
          text-3xl
          shadow-[0_0_40px_rgba(236,72,153,.45)]
        "
            >
                🤖
            </div>

        </div>
    );
}