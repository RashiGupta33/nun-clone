export default function AnalyticsAnimation() {
    return (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">

            {/* Glow */}

            <div className="absolute h-52 w-52 rounded-full bg-pink-500/20 blur-3xl" />

            {/* Dashboard */}

            <div className="w-[240px] rounded-2xl border border-white/10 bg-[#24163F] p-4 shadow-xl">

                {/* Stats */}

                <div className="grid grid-cols-3 gap-2">

                    <Stat value="96%" />

                    <Stat value="124" />

                    <Stat value="4.8" />

                </div>

                {/* Line Chart */}

                <div className="mt-6">

                    <svg
                        viewBox="0 0 220 70"
                        className="w-full"
                    >
                        <polyline
                            fill="none"
                            stroke="#EC4899"
                            strokeWidth="3"
                            points="
              0,55
              30,50
              60,40
              90,45
              120,25
              150,30
              180,18
              220,8
              "
                        />

                        <polyline
                            fill="none"
                            stroke="#8B5CF6"
                            strokeWidth="2"
                            opacity=".6"
                            points="
              0,58
              30,55
              60,48
              90,42
              120,40
              150,34
              180,28
              220,18
              "
                        />
                    </svg>

                </div>

                {/* Bars */}

                <div className="mt-6 flex items-end justify-between h-20">

                    <Bar h="35%" />

                    <Bar h="70%" />

                    <Bar h="50%" />

                    <Bar h="90%" />

                    <Bar h="65%" />

                    <Bar h="100%" />

                </div>

            </div>

        </div>
    );
}

function Stat({ value }) {
    return (
        <div className="rounded-lg bg-white/5 p-2 text-center">
            <div className="text-lg font-bold text-white">
                {value}
            </div>
        </div>
    );
}

function Bar({ h }) {
    return (
        <div
            style={{ height: h }}
            className="
      w-5
      rounded-full
      bg-gradient-to-t
      from-pink-500
      to-violet-500
      "
        />
    );
}