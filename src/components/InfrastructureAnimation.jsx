export default function InfrastructureAnimation() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

            {/* Background Glow */}

            <div className="absolute h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />

            {/* Connection Lines */}

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 300 200"
            >
                <line x1="150" y1="40" x2="80" y2="90" stroke="#A855F7" strokeWidth="2" />
                <line x1="150" y1="40" x2="220" y2="90" stroke="#A855F7" strokeWidth="2" />
                <line x1="80" y1="90" x2="80" y2="160" stroke="#A855F7" strokeWidth="2" />
                <line x1="220" y1="90" x2="220" y2="160" stroke="#A855F7" strokeWidth="2" />
                <line x1="80" y1="90" x2="150" y2="130" stroke="#A855F7" strokeWidth="2" />
                <line x1="220" y1="90" x2="150" y2="130" stroke="#A855F7" strokeWidth="2" />
            </svg>

            {/* Center Node */}

            <Node className="absolute top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-pink-500 to-violet-500">
                AI
            </Node>

            {/* Left */}

            <Node className="absolute left-10 top-20 bg-gradient-to-br from-cyan-400 to-blue-500">
                01
            </Node>

            {/* Right */}

            <Node className="absolute right-10 top-20 bg-gradient-to-br from-green-400 to-emerald-500">
                02
            </Node>

            {/* Bottom Left */}

            <Node className="absolute left-10 bottom-6 bg-gradient-to-br from-orange-400 to-yellow-500">
                03
            </Node>

            {/* Bottom Center */}

            <Node className="absolute left-1/2 bottom-6 -translate-x-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500">
                04
            </Node>

            {/* Bottom Right */}

            <Node className="absolute right-10 bottom-6 bg-gradient-to-br from-sky-400 to-indigo-500">
                05
            </Node>

        </div>
    );
}

function Node({ className, children }) {
    return (
        <div
            className={`
        ${className}
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl
        text-xs
        font-bold
        text-white
        shadow-lg
        animate-pulse
      `}
        >
            {children}
        </div>
    );
}