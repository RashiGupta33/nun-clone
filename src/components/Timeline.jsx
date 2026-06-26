export default function Timeline() {
    return (
        <div className="hidden lg:block absolute left-1/2 top-[270px] -translate-x-1/2 h-[1520px] w-[380px] pointer-events-none">

            {/* Grey Path */}

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 380 1520"
                fill="none"
            >
                <path
                    d="
          M190 0
          V340
          C190 420 280 450 280 530
          V930
          C280 1010 190 1040 190 1120
          V1520
          "
                    stroke="rgba(255,255,255,.18)"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>

            {/* Pink Path */}

            <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 380 1520"
                fill="none"
            >
                <path
                    d="
          M190 0
          V340
          C190 420 280 450 280 530
          V930
          C280 1010 190 1040 190 1120
          V1520
          "
                    stroke="#E55CD8"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </svg>

            {/* Step Dots */}

            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E55CD8]" />

            <div className="absolute left-[73%] top-[530px] -translate-x-1/2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E55CD8]" />

            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-4 w-4 rounded-full bg-pink-500 shadow-[0_0_20px_#E55CD8]" />

        </div>
    );
}