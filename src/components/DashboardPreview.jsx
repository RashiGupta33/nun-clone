import showcase from "../assets/showcase.jpg";

export default function DashboardPreview() {
    return (
        <section className="relative -mt-4">
            <div className="max-w-7xl mx-auto px-6">
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
                    <img
                        src={showcase}
                        alt="nunu.ai showcase"
                        className="w-full h-auto block"
                    />
                </div>
            </div>

            {/* Bottom Divider */}

            <div className="relative -mt-2">
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
            </div>

            {/* Dark Section Background */}

            <div className="absolute bottom-0 left-0 w-full h-32 bg-[#16122F] -z-10"></div>
        </section>
    );
}