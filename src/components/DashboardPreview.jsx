import showcase from "../assets/showcase.jpg";

export default function DashboardPreview() {
    return (
        <section className="relative mt-0">
            <div className="max-w-6xl mx-auto px-6 -mt-8">
                {/* Outer Container */}
                <div
                    className="
            overflow-hidden
            rounded-2xl
            border
            border-[#6b3a84]
            bg-[#120f25]
            shadow-[0_0_80px_rgba(181,90,255,0.15)]
          "
                >
                    {/* Inner Glass Wrapper */}
                    <div
                        className="
              relative
              p-2
              rounded-2xl
              border
              border-[rgba(229,92,216,0.3)]
              bg-[rgba(229,92,216,0.3)]
              backdrop-blur-md
              z-[11]
            "
                    >
                        <img
                            src={showcase}
                            alt="nunu.ai showcase"
                            className="block w-full h-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            {/* <div className="relative -mt-2">
                <svg
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="w-full h-16"
                >
                    <path
                        d="M1200 120L0 16.48V0h1200v120z"
                        fill="#16122F"
                    />
                </svg>
            </div> */}

            {/* Dark Section Background */}
            {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-[#16122F] -z-10"></div> */}
        </section>
    );
}

