import { ChevronDown, ChevronRight } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
                <div className="h-24 flex items-center justify-between">
                    {/* Logo */}

                    <a href="/" className="flex items-center">
                        <svg
                            viewBox="0 0 589.02 111.49"
                            className="h-10 w-auto"
                        >
                            <path
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="15"
                                d="M134.35 91.9V59.15a25.25 25.25 0 0125-25.49h0a25.25 25.25 0 0125 25.49V91.9M265.61 33.66v32.75a25.25 25.25 0 01-25 25.49h0a25.25 25.25 0 01-25-25.49V33.66M296.88 91.9V59.15a25.25 25.25 0 0125-25.49h0a25.25 25.25 0 0125 25.49V91.9M428.14 33.66v32.75a25.25 25.25 0 01-25 25.49h0a25.25 25.25 0 01-25-25.49V33.66"
                            />

                            <circle
                                cx="517.47"
                                cy="62.78"
                                r="29.12"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="15"
                            />

                            <path
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeWidth="15"
                                d="M546.59 33.66L546.59 91.9"
                            />

                            <circle
                                cx="459.41"
                                cy="91.9"
                                r="7.5"
                                fill="#fff"
                            />

                            <path
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeWidth="15"
                                d="M581.52 92.05L581.52 33.82"
                            />

                            <circle
                                cx="581.52"
                                cy="7.5"
                                r="7.5"
                                fill="#fff"
                            />

                            <path
                                fill="#805ce5"
                                d="M88.08 96.83l-87-2.91a1.17 1.17 0 00-.47 2.22l28.5 13.51A18.85 18.85 0 0042 110.88l46.3-12.06a1 1 0 00-.22-1.99z"
                            />

                            <path
                                fill="#e55cd8"
                                d="M10.66 86l67.58 4a2.15 2.15 0 002-3.08C69.85 68.68 56.77 29 55.38 5.25 55.08.24 53 3 52.2 4.52L9.05 82.72A2.16 2.16 0 0010.66 86z"
                            />
                        </svg>
                    </a>

                    {/* Navigation */}

                    <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-white/90">
                        <a
                            href="/"
                            className="text-[#e55cd8] hover:text-[#e55cd8]/80 transition flex items-center gap-1.5"
                        >
                            <span className="text-xl leading-none">&bull;</span> home
                        </a>

                        <a href="/case-studies" className="hover:text-gray-300 transition">
                            case studies
                        </a>

                        <a href="/pricing" className="hover:text-gray-300 transition">
                            pricing
                        </a>

                        <a href="/enterprise" className="hover:text-gray-300 transition">
                            enterprise
                        </a>

                        <button className="flex items-center gap-1 hover:text-gray-300 transition">
                            company
                            <ChevronDown size={16} />
                        </button>
                    </nav>

                    {/* Right */}

                    <div className="hidden lg:flex items-center gap-6">
                        <a
                            href="/nexus/login"
                            className="text-white text-sm font-bold hover:text-gray-300 transition"
                        >
                            sign in
                        </a>

                        <a
                            href="/nexus/signup"
                            className="flex items-center gap-1 rounded-full
              bg-[#e55cd8]
              px-6
              py-2.5
              text-sm
              font-bold
              text-black
              hover:opacity-90
              transition"
                        >
                            get started
                            <ChevronRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}