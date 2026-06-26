export default function HumanLikeAnimation() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

            {/* Glow */}

            <div className="absolute h-44 w-44 rounded-full bg-pink-500/10 blur-3xl" />

            {/* Browser */}

            <div className="relative w-[220px] rounded-xl bg-[#24163F] border border-white/10 shadow-xl">

                {/* Header */}

                <div className="flex items-center gap-2 border-b border-white/10 p-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                {/* Content */}

                <div className="space-y-3 p-4">

                    <div className="h-3 w-24 rounded bg-violet-400/70" />

                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-5/6 rounded bg-white/10" />
                    <div className="h-2 w-2/3 rounded bg-white/10" />

                    <button className="mt-4 rounded-lg bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 text-xs text-white">
                        Continue
                    </button>

                </div>

            </div>

            {/* Cursor */}

            <div
                className="
        absolute
        right-12
        bottom-8
        text-3xl
        animate-bounce
        "
            >
                🖱️
            </div>

        </div>
    );
}