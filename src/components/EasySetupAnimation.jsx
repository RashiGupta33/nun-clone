export default function EasySetupAnimation() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

            {/* Background Glow */}

            <div className="absolute h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Connection Lines */}

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 300 180"
            >
                <path
                    d="M70 90 H150 M150 90 H230"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                />

                <path
                    d="M150 50 V90"
                    stroke="#EC4899"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                />

                <path
                    d="M150 90 V130"
                    stroke="#EC4899"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                />
            </svg>

            {/* Left Node */}

            <Node
                className="absolute left-10 top-1/2 -translate-y-1/2"
                color="from-pink-500 to-purple-500"
            />

            {/* Top Node */}

            <Node
                className="absolute top-6 left-1/2 -translate-x-1/2"
                color="from-cyan-400 to-blue-500"
            />

            {/* Center */}

            <div
                className="
        z-20
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-xl
        bg-gradient-to-br
        from-[#8B5CF6]
        to-[#EC4899]
        text-2xl
        shadow-[0_0_25px_rgba(236,72,153,.45)]
        "
            >
                ⚙️
            </div>

            {/* Right */}

            <Node
                className="absolute right-10 top-1/2 -translate-y-1/2"
                color="from-green-400 to-emerald-500"
            />

            {/* Bottom */}

            <Node
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                color="from-orange-400 to-yellow-400"
            />

        </div>
    );
}

function Node({ className, color }) {
    return (
        <div
            className={`${className}
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-gradient-to-br
      ${color}
      shadow-lg
      animate-pulse`}
        />
    );
}